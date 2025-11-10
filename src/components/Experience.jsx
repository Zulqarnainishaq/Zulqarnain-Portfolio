import { motion } from 'framer-motion';
import experiences from '../data/experiences.json';

// Helper to format periods like "Aug 2025 - Present · 2 months"
const formatPeriod = (start, end) => {
  const startDate = start ? new Date(start + '-01') : null;
  const endDate = end ? new Date(end + '-01') : new Date();
  if (!startDate) return '';
  const startFmt = startDate.toLocaleString('en-US', { month: 'short', year: 'numeric' });
  const endFmt = end ? endDate.toLocaleString('en-US', { month: 'short', year: 'numeric' }) : 'Present';
  // duration in months
  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(months / 12);
  const rem = months % 12;
  const parts = [];
  if (years) parts.push(`${years} year${years>1?'s':''}`);
  if (rem) parts.push(`${rem} month${rem>1?'s':''}`);
  const dur = parts.length ? ` · ${parts.join(' ')}` : '';
  return `${startFmt} - ${endFmt}${dur}`;
};

const Experience = () => {
  return (
    <div className='flex flex-col items-start rounded-xl my-28 relative bg-blue-50 dark:bg-blue-900/20 ring-1 ring-blue-200 dark:ring-blue-800 p-4 sm:p-6'>
      <motion.h2 initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className='text-4xl font-bold mb-6 px-2 text-blue-600 dark:text-blue-400'>Experience</motion.h2>

      {experiences.map((exp, idx) => {
        const hasPromotions = Array.isArray(exp.positions) && exp.positions.length > 0;
        const isStrategicSystems = exp.company === "Strategic Systems International";

        if (!hasPromotions) {
          return (
            <motion.div key={idx} className='mt-8 w-full relative'>
              <motion.div initial={{opacity:0, x: idx % 2 === 0 ? 100 : -100}} whileInView={{opacity:1, x:0}} transition={{duration: 0.8}} className='px-2'>
                <h3 className='text-xl font-semibold flex flex-row xs:flex-col xs:py-5 justify-between sm:text-lg xs:text-md xs:text-semi-bold'>
                  <span className='flex items-center'>
                    <span className='mr-2 text-blue-600 dark:text-blue-400 text-2xl leading-none' aria-hidden="true">➤</span>
                    {exp.role} - {exp.company}
                  </span>
                  <span>{exp.period}</span>
                </h3>
                <p className='text-lg text-justify md:text-md xs-text-sm'>
                  {exp.summary}
                </p>
              </motion.div>
              <motion.div initial={{opacity:0, x: idx % 2 === 0 ? -100 : 100}} whileInView={{opacity:1, x:0}} transition={{duration: 0.8}} className='mt-4 px-2'>
                <h4 className='text-lg font-semibold mb-2'>Skills</h4>
                <div className='flex flex-wrap gap-2'>
                  {exp.skills?.map((s, i) => (
                    <span key={i} className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded-full'>
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          );
        }

        // With promotions (LinkedIn-like grouping)
        // Get first and latest positions for the promotion display
        const sortedPositions = [...exp.positions].sort((a, b) => {
          const aStart = new Date(a.start + '-01');
          const bStart = new Date(b.start + '-01');
          return aStart - bStart;
        });
        const firstPosition = sortedPositions[0];
        const latestPosition = sortedPositions[sortedPositions.length - 1];
        
        // Determine overall period from first start to last end
        const starts = exp.positions.map(p => p.start).filter(Boolean).sort();
        const ends = exp.positions.map(p => p.end || null);
        const earliestStart = starts[0];
        const latestEnd = ends.every(e => !e) ? null : ends.filter(Boolean).sort().slice(-1)[0];

        // Check if current position is ongoing (no end date)
        const hasOngoingPosition = exp.positions.some(p => !p.end);

        return (
          <motion.div key={idx} className='mt-8 w-full relative'>
            <motion.div initial={{opacity:0, x: idx % 2 === 0 ? 100 : -100}} whileInView={{opacity:1, x:0}} transition={{duration: 0.8}} className='px-2'>
              {/* LinkedIn-style promotion display */}
              <h3 className='text-xl font-bold sm:text-lg xs:text-md flex items-center gap-2'>
                <span className='text-blue-600 dark:text-blue-400 text-2xl leading-none' aria-hidden="true">➤</span>
                <span>
                  {firstPosition.role === latestPosition.role ? 
                    firstPosition.role : 
                    `${firstPosition.role} - ${latestPosition.role}`
                  }
                </span>
              </h3>
              <p className='text-lg font-medium text-gray-800 dark:text-gray-200'>{exp.company}</p>
              <p className='text-sm text-gray-600 dark:text-gray-300'>{formatPeriod(earliestStart, latestEnd)}</p>
              {exp.location && (
                <p className='text-sm text-gray-600 dark:text-gray-300'>{exp.location}</p>
              )}
            </motion.div>

            <div className={`mt-4 ${isStrategicSystems ? 'ml-8 relative' : 'px-2'}`}>
              {/* Removed vertical timeline line before Senior Software Engineer and Software Engineer */}
              
              {exp.positions.map((p, i) => (
                <div key={i} className={`mb-6 relative ${isStrategicSystems ? 'pl-8' : ''}`}>
                  {/* Position bullet dot only for Strategic Systems International */}
                  {isStrategicSystems && (
                    <div className={`absolute left-2 top-2 w-2 h-2 rounded-full z-10 ${
                      !p.end ? 'bg-green-500 dark:bg-green-400' : 'bg-gray-400 dark:bg-gray-500'
                    }`}></div>
                  )}
                  
                  <div className='flex flex-col sm:flex-col'>
                    <div className='flex items-center justify-between pr-2'>
                      <h4 className={`text-lg font-semibold ${
                        !p.end ? 'text-green-600 dark:text-green-400' : ''
                      }`}>{p.role}</h4>
                      <span className='text-sm text-gray-600 dark:text-gray-300'>{formatPeriod(p.start, p.end)}</span>
                    </div>
                    {p.location && (
                      <div className='text-sm text-gray-600 dark:text-gray-300'>{p.location}</div>
                    )}
                  </div>
                  {p.summary && (
                    <p className='mt-2 text-justify text-base md:text-md xs-text-sm'>{p.summary}</p>
                  )}
                  {Array.isArray(p.skills) && p.skills.length > 0 && (
                    <div className='mt-3'>
                      <h5 className='text-sm font-semibold mb-1'>Skills</h5>
                      <div className='flex flex-wrap gap-1'>
                        {p.skills.map((s, si) => (
                          <span key={si} className='bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs'>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Overall company skills */}
            <motion.div initial={{opacity:0, x: idx % 2 === 0 ? -100 : 100}} whileInView={{opacity:1, x:0}} transition={{duration: 0.8}} className='mt-4 px-2'>
              <h4 className='text-lg font-semibold mb-2'>Skills</h4>
              <div className='flex flex-wrap gap-2'>
                {exp.skills?.map((s, i) => (
                  <span key={i} className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded-full'>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Experience;
