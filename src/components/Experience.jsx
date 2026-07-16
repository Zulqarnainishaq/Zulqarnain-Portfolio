import PropTypes from 'prop-types';
import experiences from '../data/experiences.json';
import Reveal from './Reveal';

// Helper to format periods like "Aug 2025 - Present · 2 months"
const formatPeriod = (start, end) => {
  const startDate = start ? new Date(start + '-01') : null;
  const endDate = end ? new Date(end + '-01') : new Date();
  if (!startDate) return '';
  const startFmt = startDate.toLocaleString('en-US', { month: 'short', year: 'numeric' });
  const endFmt = end ? endDate.toLocaleString('en-US', { month: 'short', year: 'numeric' }) : 'Present';
  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(months / 12);
  const rem = months % 12;
  const parts = [];
  if (years) parts.push(`${years} year${years > 1 ? 's' : ''}`);
  if (rem) parts.push(`${rem} month${rem > 1 ? 's' : ''}`);
  const dur = parts.length ? ` · ${parts.join(' ')}` : '';
  return `${startFmt} - ${endFmt}${dur}`;
};

const SkillTag = ({ children }) => (
  <span className='bg-gray-200/80 dark:bg-white/10 text-black dark:text-white px-3 py-1 rounded-full text-sm cursor-default transition-all duration-200 hover:scale-110 hover:bg-sky-500 hover:text-white hover:shadow-md hover:shadow-sky-500/30'>
    {children}
  </span>
);

SkillTag.propTypes = { children: PropTypes.node };

const Experience = () => {
  return (
    <div className='my-28 w-full'>
      <Reveal>
        <h2 className='text-4xl font-bold mb-12 px-2 text-blue-600 dark:text-blue-400 animated-underline'>Experience</h2>
      </Reveal>

      <div className='relative w-full'>
        {/* vertical gradient timeline rail */}
        <div className='absolute left-4 sm:left-6 top-3 bottom-3 w-[2px] -translate-x-1/2 bg-gradient-to-b from-violet-500 via-sky-400 to-emerald-400 opacity-60' />

        {experiences.map((exp, idx) => {
          const isCurrent = /present/i.test(exp.period || '') || (Array.isArray(exp.positions) && exp.positions.some((p) => !p.end));
          const overallPeriod = exp.period
            || (Array.isArray(exp.positions) && exp.positions.length
              ? formatPeriod(
                  exp.positions.map((p) => p.start).filter(Boolean).sort()[0],
                  exp.positions.map((p) => p.end || null).every((e) => !e) ? null : exp.positions.map((p) => p.end).filter(Boolean).sort().slice(-1)[0],
                )
              : '');

          return (
            <Reveal key={idx} delay={idx * 0.08} direction='up' className='relative w-full pl-12 sm:pl-16 pb-12 last:pb-2'>
              {/* timeline node */}
              <span
                className={`absolute left-4 sm:left-6 top-6 -translate-x-1/2 h-4 w-4 rounded-full ring-4 ring-white dark:ring-slate-950 z-10 ${
                  isCurrent
                    ? 'bg-green-500 animate-pulse shadow-[0_0_14px_rgba(34,197,94,0.9)]'
                    : 'bg-sky-500 shadow-[0_0_10px_rgba(56,189,248,0.6)]'
                }`}
              />

              {/* content card */}
              <div className='group rounded-2xl p-5 sm:p-6 bg-white/60 dark:bg-slate-900/50 backdrop-blur-md ring-1 ring-black/5 dark:ring-white/10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:ring-sky-400/40 hover:shadow-xl hover:shadow-sky-500/10'>
                <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-2'>
                  <div>
                    <h3 className='text-xl sm:text-2xl font-bold flex items-center gap-2'>
                      <span className='text-blue-600 dark:text-blue-400 inline-block transition-transform duration-300 group-hover:translate-x-1' aria-hidden='true'>➤</span>
                      {exp.role || (Array.isArray(exp.positions) && exp.positions.map((p) => p.role).join(' → '))}
                    </h3>
                    <p className='text-lg font-medium text-sky-700 dark:text-sky-300 ml-7'>{exp.company}</p>
                    {exp.location && (
                      <p className='text-sm text-gray-600 dark:text-gray-300 ml-7 mt-0.5'>📍 {exp.location}</p>
                    )}
                  </div>
                  <div className='flex flex-col items-start md:items-end gap-2 ml-7 md:ml-0 shrink-0'>
                    {isCurrent && (
                      <span className='inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 dark:text-green-400 bg-green-500/15 px-2.5 py-1 rounded-full'>
                        <span className='h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse' /> Current
                      </span>
                    )}
                    <span className='text-sm font-medium text-gray-700 dark:text-gray-200 bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full whitespace-nowrap'>{overallPeriod}</span>
                  </div>
                </div>

                {exp.summary && (
                  <p className='mt-4 text-base sm:text-lg text-justify leading-relaxed text-gray-800 dark:text-gray-200'>
                    {exp.summary}
                  </p>
                )}

                {/* nested positions (if present) */}
                {Array.isArray(exp.positions) && exp.positions.map((p, i) => (
                  <div key={i} className='mt-4 pl-4 border-l-2 border-sky-400/30'>
                    <div className='flex items-center justify-between'>
                      <h4 className={`font-semibold ${!p.end ? 'text-green-600 dark:text-green-400' : ''}`}>{p.role}</h4>
                      <span className='text-sm text-gray-600 dark:text-gray-300'>{formatPeriod(p.start, p.end)}</span>
                    </div>
                    {p.summary && <p className='mt-1 text-sm text-justify text-gray-700 dark:text-gray-300'>{p.summary}</p>}
                  </div>
                ))}

                {Array.isArray(exp.skills) && exp.skills.length > 0 && (
                  <div className='mt-5'>
                    <h4 className='text-sm font-semibold mb-2 uppercase tracking-wide text-gray-500 dark:text-gray-400'>Skills &amp; Tools</h4>
                    <div className='flex flex-wrap gap-2'>
                      {exp.skills.map((s, i) => (
                        <SkillTag key={i}>{s}</SkillTag>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
