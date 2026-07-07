import main from '../assets/main.jpg';
import cvPdf from './Zulqarnain_CV.pdf';
import { motion, useReducedMotion } from 'framer-motion';
import Magnetic from './Magnetic';

const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <motion.div className='relative'>
      {/* Aurora backdrop */}
      {!reduce && (
        <div className='pointer-events-none absolute inset-0 -z-[5] overflow-hidden'>
          <div className='aurora aurora-1 w-[26rem] h-[26rem] -top-20 -left-10' />
          <div className='aurora aurora-2 w-[30rem] h-[30rem] top-10 right-0' />
          <div className='aurora aurora-3 w-[22rem] h-[22rem] bottom-0 left-1/3' />
        </div>
      )}

      <div className='flex justify-between h-[45%] mt-20 sm:flex-col md:flex-col lg:flex-row xl:flex-row xs:flex-col mb-28'>
        <div className='my-10 lg:w-[45%] h-auto flex justify-center items-center rounded-md  md:flex-col sm:flex-col xs:flex-col sm:w-[100%] xs:w-[100%]'>
          <motion.div initial={{opacity:0, x: -100}} whileInView={{opacity:1, x:0}} transition={{type:"spring", stiffness:10, duration: 1}}
            className='text-justify flex justify-center flex-col '>
            {/* Name reveal with flowing animated gradient (single element — always fully legible) */}
            <motion.h1
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className='lg:text-5xl md:text-[5rem] sm:text-[5rem] xs:text-4xl text-left font-extrabold mb-5 text-gradient-animated'
            >
              Zulqarnain Ishaq
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className='lg:text-3xl md:text-[3rem] sm:text-xl xs:text-2xl font-extrabold '
            >
              Senior Software <span className=''>Engineer</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className='lg:text-xl sm:text-2xl xs:text-xl mt-5'
            >
              A senior software engineer specializing in full-stack development and generative AI!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className='lg:text-lg sm:text-xl xs:text-md mt-2 italic'
            >
              BSCS graduated from FAST NUCES Lahore (CGPA ~ 3.54). Currently Team Lead &amp; Senior Software Engineer at Sprint League, building enterprise AI platforms for the UAE government, with four years of experience across modern JavaScript frameworks, generative AI solutions, and AWS/Azure cloud ecosystems.
            </motion.p>
          </motion.div>
          <motion.div initial={{opacity:0, y: 100}} whileInView={{opacity:1, y:0}} transition={{type:"spring", stiffness:10, duration: 1.5}} className='w-full mt-5 h-auto flex flex-col gap-3'>
            <div className='flex flex-row items-center justify-start'>
              <p className='mr-3'>Want to have a quick chat?</p>
              <Magnetic>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=zulqarnainishaq300@gmail.com&su=Hello%20Zulqarnain&body=Hi%20there%2C"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='block lg:w-[10rem] md:w-[15rem] sm:w-[12.5rem] xs:w-[10rem] h-auto text-center bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition'
                >
                  Contact me!
                </a>
              </Magnetic>
            </div>
            <div className='flex flex-row items-center justify-start'>
              <p className='mr-3'>Download my latest CV:</p>
              <Magnetic>
                <a href={cvPdf} download="Zulqarnain_Ishaq_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <button className='block lg:w-[10rem] md:w-[15rem] sm:w-[12.5rem] xs:w-[10rem] h-auto bg-blue-500 dark:bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition shadow-lg shadow-blue-500/30' type='button'>Download CV</button>
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{opacity:0, x: 100}}
          whileInView={{opacity:1, x:0}}
          transition={{type:"spring", stiffness:10, duration: 1}}
          whileHover={reduce ? {} : { scale: 1.02, rotate: -1 }}
          className='my-10 lg:w-[45%] rounded-2xl sm:w-[100%]'
        >
          <img className='w-full h-full rounded-md brightness-200 shadow-2xl shadow-violet-500/20' src={main} alt="hero1"/>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Hero;
