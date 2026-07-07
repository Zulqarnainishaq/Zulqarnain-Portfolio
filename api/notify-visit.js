import { parse } from 'node:url';
import { Resend } from 'resend';

// Pull the real client IP out of the proxy headers (first hop in x-forwarded-for).
function getClientIp(req) {
  const xff = (req.headers['x-forwarded-for'] || '').toString();
  if (xff) return xff.split(',')[0].trim();
  return (req.headers['x-real-ip'] || req.socket?.remoteAddress || '').toString().trim();
}

function isPublicIp(ip) {
  if (!ip) return false;
  // Skip localhost / private ranges (no useful geolocation for these)
  if (ip === '::1' || ip.startsWith('127.') || ip.startsWith('10.')) return false;
  if (ip.startsWith('192.168.')) return false;
  if (/^172\.(1[6-9]|2\d|3[01])\./.test(ip)) return false;
  if (ip.startsWith('fc') || ip.startsWith('fd')) return false; // unique local IPv6
  return true;
}

// Geolocation source #1: Vercel's edge geo headers (present when deployed on Vercel).
function geoFromVercelHeaders(headers) {
  const dec = (v) => {
    try { return v ? decodeURIComponent(v.toString()) : ''; } catch { return v?.toString() || ''; }
  };
  const city = dec(headers['x-vercel-ip-city']);
  const region = dec(headers['x-vercel-ip-country-region']);
  const country = dec(headers['x-vercel-ip-country']);
  const lat = dec(headers['x-vercel-ip-latitude']);
  const lon = dec(headers['x-vercel-ip-longitude']);
  const tz = dec(headers['x-vercel-ip-timezone']);
  if (city || region || country || lat) {
    return { city, region, country, lat, lon, tz, org: '', source: 'vercel-headers' };
  }
  return null;
}

// Geolocation source #2 (fallback): free IP geolocation API (approximate, city-level).
async function geoFromApi(ip) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000);
    const resp = await fetch(`https://ipapi.co/${encodeURIComponent(ip)}/json/`, {
      signal: controller.signal,
      headers: { 'User-Agent': 'portfolio-visit-notifier' },
    });
    clearTimeout(timer);
    if (!resp.ok) return null;
    const d = await resp.json();
    if (d?.error) return null;
    return {
      city: d.city || '',
      region: d.region || '',
      country: d.country_name || d.country || '',
      lat: d.latitude != null ? String(d.latitude) : '',
      lon: d.longitude != null ? String(d.longitude) : '',
      tz: d.timezone || '',
      org: d.org || d.asn || '',
      source: 'ipapi.co',
    };
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  const method = req.method || 'GET';

  const json = (status, body) => {
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(body));
  };

  if (method !== 'GET') {
    return json(405, { ok: false, error: 'Method Not Allowed' });
  }

  const isProd = (process.env.VERCEL_ENV === 'production') || (process.env.NODE_ENV === 'production');
  const { query } = parse(req.url || '/', true);

  const path = (query?.path || '/').toString();
  const now = new Date();
  const tsIso = now.toISOString();
  const ip = getClientIp(req);
  const ua = (req.headers['user-agent'] || 'unknown').toString();
  const referer = (req.headers['referer'] || req.headers['referrer'] || 'direct / unknown').toString();
  const host = (req.headers['host'] || 'unknown').toString();
  const lang = (req.headers['accept-language'] || 'unknown').toString();

  // Resolve approximate location: Vercel headers first, then GeoIP API fallback.
  let geo = geoFromVercelHeaders(req.headers);
  if (!geo && isPublicIp(ip)) {
    geo = await geoFromApi(ip);
  }
  geo = geo || { city: '', region: '', country: '', lat: '', lon: '', tz: '', org: '', source: 'unavailable' };

  const locationLine = [geo.city, geo.region, geo.country].filter(Boolean).join(', ') || 'Unknown';
  const coords = geo.lat && geo.lon ? `${geo.lat}, ${geo.lon}` : 'Unknown';
  const mapsLink = geo.lat && geo.lon
    ? `https://www.google.com/maps?q=${encodeURIComponent(`${geo.lat},${geo.lon}`)}`
    : '';
  const tzLine = geo.tz || 'Unknown';
  const localTime = (() => {
    try {
      return geo.tz ? now.toLocaleString('en-US', { timeZone: geo.tz }) : now.toUTCString();
    } catch {
      return now.toUTCString();
    }
  })();

  const to = (process.env.NOTIFY_TO || 'zulqarnainishaq400@gmail.com').toString();
  const from = (process.env.NOTIFY_FROM || 'onboarding@resend.dev').toString();

  const subject = `Portfolio visit — ${locationLine} — ${path}`;
  const text =
    `Someone viewed your portfolio.\n\n` +
    `Date/Time (UTC):    ${tsIso}\n` +
    `Visitor local time: ${localTime} (${tzLine})\n` +
    `Page:               ${path}\n` +
    `Host:               ${host}\n` +
    `\n--- Visitor ---\n` +
    `IP address:         ${ip || 'unknown'}\n` +
    `Location:           ${locationLine}\n` +
    `Coordinates:        ${coords}\n` +
    (mapsLink ? `Map:                ${mapsLink}\n` : '') +
    `Network/ISP:        ${geo.org || 'unknown'}\n` +
    `Geo source:         ${geo.source}\n` +
    `\n--- Device ---\n` +
    `User-Agent:         ${ua}\n` +
    `Language:           ${lang}\n` +
    `Referer:            ${referer}\n` +
    `\nNote: MAC addresses are not available to websites; location is IP-based and approximate (city-level).\n`;

  if (!isProd) {
    // Log locally so you can verify the payload during development without sending email.
    console.log('[notify-visit] (dev, not sent):\n' + text);
    return json(200, { ok: true, skipped: true, reason: 'Not production', preview: { ip, location: locationLine } });
  }

  if (!process.env.RESEND_API_KEY) {
    console.warn('[notify-visit] RESEND_API_KEY missing; skipping email send');
    return json(200, { ok: true, skipped: true, reason: 'Missing RESEND_API_KEY' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    // The Resend SDK does NOT throw on API errors — it returns { data, error }.
    // Must inspect `error` explicitly, otherwise rejected sends look successful.
    const { data, error } = await resend.emails.send({ from, to, subject, text });
    if (error) {
      console.error('[notify-visit] resend rejected:', error);
      return json(502, { ok: false, error: error.message || 'Resend rejected the email', name: error.name });
    }
    return json(200, { ok: true, id: data?.id });
  } catch (error) {
    console.error('[notify-visit] error:', error);
    return json(500, { ok: false, error: error?.message || 'Unknown error' });
  }
}
