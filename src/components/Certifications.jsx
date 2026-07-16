import { motion } from 'framer-motion';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import awsCcp from '../assets/cert-aws-ccp.svg';
import azureDev from '../assets/cert-azure-developer.svg';

// Flagship cloud certifications (badge cards)
const badges = [
  {
    image: awsCcp,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    accent: 'from-orange-400/20 to-sky-500/20',
    ring: 'group-hover:shadow-orange-400/30',
  },
  {
    image: azureDev,
    title: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    accent: 'from-sky-400/20 to-blue-600/20',
    ring: 'group-hover:shadow-sky-500/30',
  },
];

// Additional professional certifications / courses
const courses = [
  { title: 'Advanced Node.js, React.js, Vue.js', issuer: 'Pluralsight', period: 'Jan – Apr 2025' },
  { title: 'API Testing with Postman, Agile Methodology', issuer: '10Pearls University', period: 'Aug – Sep 2024' },
  { title: 'Advanced Java, MySQL, MongoDB', issuer: 'Udemy', period: 'Feb – Apr 2023' },
];

const Certifications = () => {
  return (
    <div className='flex flex-col items-center rounded-xl my-28 w-full'>
      <Reveal>
        <h2 className='text-4xl font-bold mb-12 text-center animated-underline'>Certifications</h2>
      </Reveal>

      {/* Flagship cloud badges */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-2'>
        {badges.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.12} className='group h-full'>
            <TiltCard
              max={12}
              className={`h-full flex flex-col items-center text-center rounded-2xl p-6 bg-white/70 dark:bg-slate-900/50 backdrop-blur-md ring-1 ring-black/5 dark:ring-white/10 shadow-lg transition-shadow duration-300 group-hover:shadow-2xl ${c.ring}`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${c.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
              <motion.img
                src={c.image}
                alt={c.title}
                className='relative w-40 h-auto drop-shadow-[0_12px_28px_rgba(0,0,0,0.35)] [transform:translateZ(60px)]'
                animate={{ y: ['0rem', '0.45rem', '0rem'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
              />
              <h3 className='relative mt-6 text-xl font-bold [transform:translateZ(35px)]'>{c.title}</h3>
              <p className='relative mt-1 text-sm opacity-70 [transform:translateZ(25px)]'>{c.issuer}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {/* Additional certifications */}
      <Reveal delay={0.1} className='w-full max-w-4xl mt-10 px-2'>
        <h3 className='text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400 text-center'>Additional Certifications</h3>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {courses.map((c) => (
            <div
              key={c.title}
              className='rounded-xl p-4 bg-white/50 dark:bg-white/[0.04] ring-1 ring-black/5 dark:ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-sky-400/40 hover:shadow-lg hover:shadow-sky-500/10'
            >
              <p className='font-semibold text-sm leading-snug'>{c.title}</p>
              <p className='text-xs mt-2 text-sky-600 dark:text-sky-400 font-medium'>{c.issuer}</p>
              <p className='text-xs opacity-60'>{c.period}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Certifications;
