import React from 'react';
import back from '../assets/back.jpg';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1 }} 
      className="mt-40 mb-10 flex flex-col items-center"
    >
      <h1 className='text-4xl mb-5 font-bold text-center'>Projects Catalogue</h1>
      <a 
        href='https://drive.google.com/file/d/15fLsYFYgZE5QyAhFAdJn_PqtH4GyOhaq/view?usp=sharing/'  
        target="_blank" 
        className="relative block group w-full sm:w-auto"
      >
        <img src={back} alt="Retro Project" className="w-full min-h-screen object-cover" />
        <div className="absolute inset-0 flex flex-col justify-around p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-4">
          <div className="flex flex-col items-center text-white text-xl font-bold">
            <p className='mb-1 xl:text-5xl lg:text-3xl md:text-2xl sm:text-[1.75rem] xs:text-[1.5rem] text-center'>News Text Summarization using deep learning</p>
            <p className='mb-1 text-[1.25rem] lg:text-[1.5rem] md:text-[1.25rem] sm:text-[1rem] xs:text-[0.75rem] text-center'>Technologies Used</p>
            <ul className='list-none list-inside my-0 text-center'>
              <li className='lg:text-lg md:text-md sm:text-[0.75rem] xs:text-[0.70rem]'>- Django-python</li>
              <li className='lg:text-lg md:text-md sm:text-[0.75rem] xs:text-[0.70rem]'>- React.js</li>
              <li className='lg:text-lg md:text-md sm:text-[0.75rem] xs:text-[0.70rem]'>- keras-tanserflow</li>
              <li className='lg:text-lg md:text-md sm:text-[0.75rem] xs:text-[0.70rem]'>- CNN daily News Dataset</li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-white text-xl font-bold">
            <p className='mb-1 xl:text-5xl lg:text-3xl md:text-2xl sm:text-[1.75rem] xs:text-[1.5rem] text-center'>Search Engine For Past Papers of FAST NUCESn</p>
            <p className='mb-1 text-[1.25rem] lg:text-[1.5rem] md:text-[1.25rem] sm:text-[1rem] xs:text-[0.75rem] text-center'>Technologies Used</p>
            <ul className='list-none list-inside my-0 text-center'>
              <li className='lg:text-lg md:text-md sm:text-[0.75rem] xs:text-[0.70rem]'>- Python</li>
              <li className='lg:text-lg md:text-md sm:text-[0.75rem] xs:text-[0.70rem]'>- huggingface</li>
              <li className='lg:text-lg md:text-md sm:text-[0.75rem] xs:text-[0.70rem]'>- Information Retrival methods</li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-white text-xl font-bold">
            <p className='mb-1 xl:text-5xl lg:text-3xl md:text-2xl sm:text-[1.75rem] xs:text-[1.5rem] text-center'>E-Pharmacy (Online store to buy medicines)</p>
            <p className='mb-1 text-[1.25rem] lg:text-[1.5rem] md:text-[1.25rem] sm:text-[1rem] xs:text-[0.75rem] text-center'>Technologies Used</p>
            <ul className='list-none list-inside my-0 text-center'>
              <li className='lg:text-lg md:text-md sm:text-[0.75rem] xs:text-[0.70rem]'>- Node.js</li>
              <li className='lg:text-lg md:text-md sm:text-[0.75rem] xs:text-[0.70rem]'>- React.js</li>
              <li className='lg:text-lg md:text-md sm:text-[0.75rem] xs:text-[0.70rem]'>- Bootstrap</li>
              <li className='lg:text-lg md:text-md sm:text-[0.75rem] xs:text-[0.70rem]'>- MySQL</li>
            </ul>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default Projects;
