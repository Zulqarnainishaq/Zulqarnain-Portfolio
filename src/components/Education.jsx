import { motion } from 'framer-motion';
import education from '../data/education.json';
import graduationPic from '../assets/graduation picture.jfif';
import bscsDegree from '../assets/bscs degree.jpeg';
import icsDegree from '../assets/ics degree.jpeg';
import metricDegree from '../assets/metric degree.jpeg';
import transcript from '../assets/transscript.jpeg';

const Education = () => {
  return (
    <div className='flex flex-col items-start rounded-xl my-28'>
      <motion.h2 initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className='text-3xl font-bold mb-4 px-2 animated-underline'>Education</motion.h2>

      {education.map((ed, idx) => (
        <motion.div key={idx} className='mt-8 w-full'>
          <motion.div initial={{opacity:0, x: idx % 2 === 0 ? 100 : -100}} whileInView={{opacity:1, x:0}} transition={{duration: 0.8}} className='px-2'>
            <h3 className='text-xl font-semibold flex flex-row xs:flex-col xs:py-5 justify-between sm:text-lg xs:text-md xs:text-semi-bold'>
              {ed.degree} - {ed.institution} <span>{ed.period}</span>
            </h3>
            <div className='flex flex-col lg:flex-row gap-8 items-start'>
              <div className='flex-1 lg:pr-6 lg:max-w-[60%]'>
                {ed.degree === 'BS Computer Science' ? (
                  <div className='text-lg text-justify md:text-md xs-text-sm mb-4 space-y-3'>
                    <p className='font-medium text-blue-600 dark:text-blue-400'>Program Overview:</p>
                    <p>A comprehensive 4-year undergraduate program designed to impart in-depth understanding of Computer Science according to international standards. The program focuses on converting theoretical understanding into practical innovations while building diverse careers as productive IT professionals and entrepreneurs for socio-economic development.</p>
                    
                    <p className='font-medium text-blue-600 dark:text-blue-400 mt-4'>Key Learning Areas:</p>
                    <p>Programming fundamentals, Data Structures & Algorithms, Database Systems, Operating Systems, Software Engineering, Object-Oriented Analysis & Design, Computer Networks, Artificial Intelligence, Machine Learning, and Web Development.</p>
                    
                    <p className='font-medium text-blue-600 dark:text-blue-400 mt-4'>Professional Development:</p>
                    <p>The program emphasizes developing effective communication, management and leadership skills while imparting professional ethics and collaborative team player abilities. Students are prepared for graduate-level studies, research, and careers as software engineers, programmers, web developers, or computer graphic designers.</p>
                    
                    <p className='font-medium text-blue-600 dark:text-blue-400 mt-4'>Final Year Project:</p>
                    <p>News Text Summarization using Deep Learning - An innovative project focusing on natural language processing and machine learning techniques for automated content summarization.</p>
                  </div>
                ) : (
                  <p className='text-lg text-justify md:text-md xs-text-sm mb-4'>
                    {Array.isArray(ed.details) ? ed.details.map((detail, detailIdx) => (
                      <span key={detailIdx}>{detail}{detailIdx < ed.details.length - 1 ? '. ' : ''}</span>
                    )) : ed.details}
                  </p>
                )}
              </div>
              {ed.degree === 'BS Computer Science' && (
                <motion.div 
                  initial={{opacity:0, scale: 0.8}} 
                  whileInView={{opacity:1, scale: 1}} 
                  transition={{duration: 0.6, delay: 0.2}}
                  className='lg:w-96 lg:h-72 w-full h-80 flex-shrink-0 lg:max-w-[35%]'
                >
                  <img 
                    src={graduationPic} 
                    alt='Graduation Picture - BSCS FAST NUCES' 
                    className='w-full h-full object-cover rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-600'
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      ))}
      
      {/* Academic Documents Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='mt-16 w-full'
      >
        <h3 className='text-2xl font-bold mb-8 px-2 text-blue-600 dark:text-blue-400 animated-underline'>Academic Documents</h3>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2'>
          {/* BS Computer Science Degree */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-500/20'
          >
            <img 
              src={bscsDegree} 
              alt='BS Computer Science Degree Certificate' 
              className='w-full h-48 object-cover select-none'
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            <div className='p-4'>
              <h4 className='font-semibold text-lg mb-2'>BS Computer Science</h4>
              <p className='text-sm text-gray-600 dark:text-gray-400'>Degree Certificate</p>
            </div>
          </motion.div>

          {/* Transcript */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-500/20'
          >
            <img 
              src={transcript} 
              alt='Academic Transcript' 
              className='w-full h-48 object-cover select-none'
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            <div className='p-4'>
              <h4 className='font-semibold text-lg mb-2'>Official Transcript</h4>
              <p className='text-sm text-gray-600 dark:text-gray-400'>Academic Record</p>
              <a
                href={transcript}
                download={'Zulqarnain_Transcript.jpeg'}
                className='mt-3 inline-block bg-blue-500 dark:bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition'
              >
                Download Transcript
              </a>
            </div>
          </motion.div>

          {/* ICS Degree */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-500/20'
          >
            <img 
              src={icsDegree} 
              alt='Intermediate Certificate' 
              className='w-full h-48 object-cover select-none'
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            <div className='p-4'>
              <h4 className='font-semibold text-lg mb-2'>Intermediate (ICS)</h4>
              <p className='text-sm text-gray-600 dark:text-gray-400'>Pre-Engineering Certificate</p>
            </div>
          </motion.div>

          {/* Matric Degree */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/50 hover:shadow-xl hover:shadow-sky-500/20'
          >
            <img 
              src={metricDegree} 
              alt='Matriculation Certificate' 
              className='w-full h-48 object-cover select-none'
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            <div className='p-4'>
              <h4 className='font-semibold text-lg mb-2'>Matriculation</h4>
              <p className='text-sm text-gray-600 dark:text-gray-400'>Secondary School Certificate</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Education;