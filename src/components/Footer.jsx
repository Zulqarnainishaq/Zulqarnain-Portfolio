import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <motion.footer initial={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    whileInView={{ opacity: 1 }} className='w-full bg-gray-900 text-white py-10 px-3'>
      <div className='container mx-auto flex flex-col lg:flex-row xs:flex-col justify-between items-center '>
        <div className='mb-4 md:mb-4'>
          <h2 className='text-2xl font-bold'>Zulqarnain</h2>
          <p className='text-gray-400 text-lg lg:text-left md:text-center sm:text-center xs:text-center'>Software Engineer</p>
          <p className='text-gray-300 italic text-lg lg:text-left md:text-center sm:text-center xs:text-center'>Full Stack Developer</p>
        </div>
        <div className='mb-4 md:mb-4'>
          <h3 className='font-semibold mb-2 text-xl'>Quick Links</h3>
          <ul className='text-lg lg:text-left sm:text-center xs:text-center'>
            <li><a href="#about" className='text-gray-400 hover:text-white'>About me</a></li>
            <li><a href="#projects" className='text-gray-400 hover:text-white'>Projects</a></li>
            <li><a href="#experience" className='text-gray-400 hover:text-white'>Experience</a></li>
            <li><a href="#tech" className='text-gray-400 hover:text-white'>Technologies</a></li>
            <li><a href="mailto:zulqarnainishaq300@gmail.com" className='text-gray-400 hover:text-white'>Email</a></li>
          </ul>
        </div>
        <div className='flex space-x-4 md:mb-4'>
          <a href="https://github.com/Zulqarnainishaq" target="_blank" rel="noopener noreferrer" className='transition-transform transform hover:scale-110'>
            <FaGithub className='text-2xl' />
          </a>
          <a href="https://www.linkedin.com/in/zulqarnain-ishaq-1794b0194/" target="_blank" rel="noopener noreferrer" className='transition-transform transform hover:scale-110'>
            <FaLinkedin className='text-2xl' />
          </a>
        </div>
      </div>
      <div className='mt-8 text-center text-gray-500 text-lg'>
        <p>&copy; 2024 - Zulqarnain Ishaq. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
