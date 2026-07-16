import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const quickLinks = [
  { href: '#about', label: 'About me' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#tech', label: 'Technologies' },
  { href: '#certifications', label: 'Certifications' },
  { href: 'mailto:zulqarnainishaq300@gmail.com', label: 'Email' },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className='relative w-full bg-gray-900 text-white py-10 px-3'
    >
      {/* animated gradient top edge */}
      <div className='absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 via-sky-400 to-emerald-400 bg-[length:200%_auto]' style={{ animation: 'text-shine 6s linear infinite' }} />

      <div className='container mx-auto flex flex-col lg:flex-row xs:flex-col justify-between items-center '>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-4 md:mb-4'
        >
          <h2 className='text-2xl font-bold text-gradient-animated inline-block'>Zulqarnain</h2>
          <p className='text-gray-400 text-lg lg:text-left md:text-center sm:text-center xs:text-center'>Senior Software Engineer</p>
          <p className='text-gray-300 italic text-lg lg:text-left md:text-center sm:text-center xs:text-center'>Full Stack Developer</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='mb-4 md:mb-4'
        >
          <h3 className='font-semibold mb-2 text-xl'>Quick Links</h3>
          <ul className='text-lg lg:text-left sm:text-center xs:text-center'>
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className='group inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors'
                >
                  <span className='w-0 overflow-hidden text-sky-400 transition-all duration-300 group-hover:w-4'>→</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
        <div className='flex space-x-6 md:mb-4'>
          <Magnetic strength={0.5}>
            <a href="https://github.com/Zulqarnainishaq" target="_blank" rel="noopener noreferrer" className='block hover:text-sky-400 transition-colors'>
              <FaGithub className='text-3xl' />
            </a>
          </Magnetic>
          <Magnetic strength={0.5}>
            <a href="https://www.linkedin.com/in/zulqarnain-ishaq-1794b0194/" target="_blank" rel="noopener noreferrer" className='block hover:text-sky-400 transition-colors'>
              <FaLinkedin className='text-3xl' />
            </a>
          </Magnetic>
        </div>
      </div>
      <div className='mt-8 text-center text-gray-500 text-lg'>
        <p>&copy; 2026 - Zulqarnain Ishaq. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
