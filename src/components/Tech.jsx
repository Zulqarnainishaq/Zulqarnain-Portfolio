import React from 'react';
import node from '../assets/node.png';
import react from '../assets/react.png';
import js from '../assets/JS.png';
import vue from '../assets/vue.png';
import electron from '../assets/electron.png';
import tailwind from '../assets/tailwind.svg';
import boot from '../assets/boot.png';
import { motion } from 'framer-motion';
import py from '../assets/py.png';
import mysql from '../assets/mysql.png'
const Tech = () => {
  const animateProps = {
    y: ['0rem', '0.5rem', '0rem'],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1 }}>
      <p className='text-4xl font-bold text-center mb-28 mt-10'>Technologies with hands-on experience</p>
      <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col justify-between items-center mt-5 mb-10 sm:justify-between h-auto">
        <motion.a href="https://nodejs.org/en"  target="_blank" className='w-[12.5rem] sm:w-[10rem] xs:w-[8rem] h-full hover:brightness-90' animate={animateProps}>
          <img src={node} alt="Node.js" />
        </motion.a>
        <motion.a href="https://react.dev/"  target="_blank" className='w-[12.5rem] sm:w-[10rem] xs:w-[8rem] h-full hover:brightness-90' animate={animateProps}>
          <img src={react} alt="React" />
        </motion.a>
        <motion.a href="https://devdocs.io/javascript/" target="_blank" className='w-[12.5rem] sm:w-[10rem] xs:w-[8rem] h-full hover:brightness-90' animate={animateProps}>
          <img src={js} alt="JavaScript" />
        </motion.a>
        <motion.a href="https://vuejs.org/guide/introduction.html"  target="_blank" className='w-[12.5rem] sm:w-[10rem] xs:w-[8rem] h-full hover:brightness-90' animate={animateProps}>
          <img src={vue} alt="Vue.js" />
        </motion.a>
        <motion.a href="https://docs.python.org/3/library/index.html"  target="_blank" className='w-[12.5rem] sm:w-[10rem] xs:w-[8rem] h-full hover:brightness-90' animate={animateProps}>
          <img src={py} alt="Python" />
        </motion.a>
        <motion.a href="https://dev.mysql.com/doc/"  target="_blank" className='w-[12.5rem] sm:w-[10rem] xs:w-[8rem] h-full hover:brightness-90' animate={animateProps}>
          <img src={mysql} alt="MySQL" />
        </motion.a>
        <motion.a href="https://tailwindcss.com/"  target="_blank"  className='w-[12.5rem] sm:w-[10rem] xs:w-[8rem] h-full hover:brightness-90' animate={animateProps}>
          <img src={tailwind} alt="Tailwind CSS" />
        </motion.a>
        <motion.a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/"  target="_blank"  className='w-[12.5rem] sm:w-[10rem] xs:w-[8rem] h-full hover:brightness-90' animate={animateProps}>
          <img src={boot} alt="BootStrap" />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default Tech;
