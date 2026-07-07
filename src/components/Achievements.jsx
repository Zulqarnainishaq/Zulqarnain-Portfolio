import { motion } from 'framer-motion';
import sixTimeDeanList from '../assets/six time deen list.jpeg';
import ssiOnboarding from '../assets/ssi onboarding.jpeg';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Six-Time Dean's List",
      description: "Achieved Dean's List recognition six times during BSCS at FAST NUCES for maintaining exceptional academic performance",
      image: sixTimeDeanList,
      category: 'Academic Excellence'
    },
    {
      id: 2,
      title: 'SSI Onboarding',
      description: 'Successfully onboarded at Strategic Systems International as Software Engineer',
      image: ssiOnboarding,
      category: 'Professional'
    }
  ];

  return (
    <div className='flex flex-col items-start rounded-xl my-28'>
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className='text-3xl font-bold mb-8 px-2'
      >
        Achievements & Certifications
      </motion.h2>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-2'>
        {achievements.map((achievement, idx) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer'
          >
            <div className='relative h-48 overflow-hidden'>
              <img
                src={achievement.image}
                alt={achievement.title}
                className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
              />
              <div className='absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                {achievement.category}
              </div>
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-semibold mb-2 text-gray-900 dark:text-white'>
                {achievement.title}
              </h3>
              <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
                {achievement.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='mt-8 px-2 w-full'
      >
        <div className='bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6'>
          <h3 className='text-xl font-semibold mb-3 text-gray-900 dark:text-white'>
            Academic Excellence Highlights
          </h3>
          <ul className='space-y-2 text-gray-700 dark:text-gray-300'>
            <li className='flex items-center'>
              <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
              Six-time Dean's List recipient at FAST NUCES
            </li>
            <li className='flex items-center'>
              <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
              CGPA: 3.54/4.0 in Computer Science
            </li>
            <li className='flex items-center'>
              <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
              Consistent academic performance throughout education
            </li>
            <li className='flex items-center'>
              <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
              Successfully transitioned to professional software engineering
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Achievements;