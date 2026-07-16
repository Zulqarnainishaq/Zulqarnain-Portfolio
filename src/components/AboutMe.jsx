import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faGamepad, faFutbol } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import TiltCard from './TiltCard';

const cards = [
  {
    icon: faComputer,
    title: 'Senior Software Engineer',
    text: 'Currently Team Lead and Senior Software Engineer at Sprint League, building enterprise AI platforms for the UAE government, with four years of experience in full-stack development using modern JavaScript frameworks and AWS/Azure cloud technologies.',
  },
  {
    icon: faGamepad,
    title: 'Gaming enthusiast',
    text: 'I love to play war games, the ones based on strategy or missions (Call of Duty, Counter-Strike).',
  },
  {
    icon: faFutbol,
    title: 'Cricket',
    text: 'Growing up, I always loved playing Cricket. Still trying to maintain a healthy physique because health is the most important thing in life!',
  },
];

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1 }}
      className='flex flex-col items-center w-full justify-center p-4 '
    >
      <Reveal>
        <h1 className='text-5xl font-extrabold mt-4 animated-underline'>About me</h1>
      </Reveal>
      <div className='flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-around lg:items-stretch md:items-center sm:items-center mt-5 lg:w-[85vw] md:w-[55vw] sm:w-[60vw] '>
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.12} className='w-full lg:w-[50vw] xs:w-[60vw] m-10'>
            <TiltCard
              max={9}
              className='group h-full flex flex-col justify-center max-h-[20rem] rounded-xl bg-white/60 dark:bg-slate-900/50 backdrop-blur-md shadow-lg ring-1 ring-black/5 dark:ring-white/10 p-3 transition-all duration-300 hover:ring-sky-400/40 hover:shadow-sky-500/20'
            >
              <div className='flex flex-col items-center'>
                <motion.div
                  animate={{ y: ['0rem', '0.4rem', '0rem'] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                  className='transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 text-sky-500 dark:text-sky-300 [transform:translateZ(50px)]'
                >
                  <FontAwesomeIcon
                    className='h-[6.75rem] lg:h-[6rem] md:h-[6.5rem] sm:h-[3.5rem] xs:h-[4.5rem] w-auto drop-shadow-[0_8px_18px_rgba(56,189,248,0.35)]'
                    icon={c.icon}
                  />
                </motion.div>
                <p className='text-center text-2xl md:text-xl font-bold mb-3 mt-3'>{c.title}</p>
              </div>
              <p className='text-justify text-[1rem] opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-60 transition-all duration-300'>
                {c.text}
              </p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutMe;
