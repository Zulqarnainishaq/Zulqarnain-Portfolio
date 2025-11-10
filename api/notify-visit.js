import { parse } from 'node:url';
import { Resend } from 'resend';

export default async function handler(req, res) {
  const method = req.method || 'GET';

  if (method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: false, error: 'Method Not Allowed' }));
    return;
  }

  const isProd = (process.env.VERCEL_ENV === 'production') || (process.env.NODE_ENV === 'production');
  const { query } = parse(req.url || '/', true);

  const path = (query?.path || '/').toString();
  const ts = new Date().toISOString();
  const ip = (req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket?.remoteAddress || '').toString();
  const ua = (req.headers['user-agent'] || 'unknown').toString();
  const referer = (req.headers['referer'] || req.headers['referrer'] || 'unknown').toString();
  const host = (req.headers['host'] || 'unknown').toString();

  const to = (process.env.NOTIFY_TO || 'zulqarnainishaq400@gmail.com').toString();
  const from = (process.env.NOTIFY_FROM || 'onboarding@resend.dev').toString();

  const payload = {
    subject: `New visit on ${host}`,
    text: `A visitor viewed your site.\n\n` +
      `Time: ${ts}\n` +
      `Path: ${path}\n` +
      `Host: ${host}\n` +
      `IP: ${ip}\n` +
      `User-Agent: ${ua}\n` +
      `Referer: ${referer}\n`,
  };

  // Only attempt email in production and when API key is present
  if (!isProd) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: true, skipped: true, reason: 'Not production' }));
    return;
  }

  if (!process.env.RESEND_API_KEY) {
    console.warn('[notify-visit] RESEND_API_KEY missing; skipping email send');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: true, skipped: true, reason: 'Missing RESEND_API_KEY' }));
    return;
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({ from, to, subject: payload.subject, text: payload.text });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: true }));
  } catch (error) {
    console.error('[notify-visit] error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: false, error: error?.message || 'Unknown error' }));
  }
}