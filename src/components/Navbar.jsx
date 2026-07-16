import PropTypes from 'prop-types';
import { FaLinkedin, FaGithub, FaBook, FaSun, FaMoon } from "react-icons/fa";
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const Navbar = ({ toggleTheme, darkMode }) => {
  return (
    <motion.nav initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center justify-between w-[10rem]'>
        <Magnetic strength={0.5}>
          <a href="https://www.linkedin.com/in/zulqarnain-ishaq-1794b0194/" target="_blank" rel="noopener noreferrer" className='block text-sky-500 hover:text-sky-400 transition-colors drop-shadow-[0_0_10px_rgba(56,189,248,0.35)]'><FaLinkedin className='size-16' /></a>
        </Magnetic>
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.12, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className={`p-3 rounded-full ${darkMode ? 'bg-gray-700 text-white hover:brightness-150' : 'bg-yellow-200 text-black hover:brightness-95'}`}
        >
          {darkMode ? <FaMoon /> : <FaSun />}
        </motion.button>
      </div>

      <div className='flex items-center min-w-12 gap-12'>
        <Magnetic strength={0.5}>
          <a href="https://dev.to/zulqarnainishaq" target="_blank" rel="noopener noreferrer" className='block hover:text-sky-400 transition-colors'><FaBook className='size-10' /></a>
        </Magnetic>
        <Magnetic strength={0.5}>
          <a href="https://github.com/Zulqarnainishaq" target="_blank" rel="noopener noreferrer" className='block hover:text-sky-400 transition-colors'><FaGithub className='size-10' /></a>
        </Magnetic>
      </div>
    </motion.nav>
  );
};

Navbar.propTypes = {
  toggleTheme: PropTypes.func,
  darkMode: PropTypes.bool,
};

export default Navbar;
