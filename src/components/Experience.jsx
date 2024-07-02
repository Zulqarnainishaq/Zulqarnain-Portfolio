import React from 'react';
import { motion } from 'framer-motion';

const exp1_skills = [
  { name: 'Node.js', url: 'https://nodejs.org/docs/latest/api/' },
  { name: 'Vue.js', url: 'https://vuejs.org/guide/introduction.html' },
  { name: 'MySQL', url: 'https://dev.mysql.com/doc/' },
  { name: 'Software Development', url: 'https://en.wikipedia.org/wiki/Software_development' },
  { name: 'JavaScript Frameworks', url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks' },
  { name: 'AWS/RDS', url: 'https://docs.aws.amazon.com/rds/' },
  { name: 'Jira', url: 'https://confluence.atlassian.com/jira' },
  { name: 'Git/GitLabs', url: 'https://git-scm.com/doc' },
  { name: 'Postman', url: 'https://learning.postman.com/docs/introduction/overview/' },
  { name: 'AWS/S3', url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html' },
  { name: 'Docker', url: 'https://docs.docker.com/' },
  { name: 'Kubernates', url: 'https://kubernetes.io/docs/home/' },
];

const exp2_skills = [
  { name: 'Javascript', url: 'https://www.w3schools.com/js/' },
  { name: 'JavaScript Frameworks', url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks' }, 
  { name: 'React.js', url: 'https://legacy.reactjs.org/docs/getting-started.html' },
  { name: 'Node.js', url: 'https://nodejs.org/en' },
  { name: 'MySQL', url: 'https://dev.mysql.com/doc/' },
  { name: 'Jira', url: 'https://confluence.atlassian.com/jira' },
  { name: 'Postman', url: 'https://learning.postman.com/docs/introduction/overview/' },
  { name: 'Git', url: 'https://git-scm.com/doc' },
];

const exp3_skills = [
  { name: 'HTML', url: 'https://www.w3schools.com/html/' },
  { name: 'CSS', url: 'https://www.w3schools.com/cssref/index.php' },
  { name: 'Javascript', url: 'https://www.w3schools.com/js/' },
  { name: 'React.js', url: 'https://legacy.reactjs.org/docs/getting-started.html' }, 
  { name: 'Keras/Tanserflow', url: 'https://www.tensorflow.org/guide/keras' },
  { name: 'SQL-Lite', url: 'https://www.sqlite.org/docs.html' },
  { name: 'MongoDb', url: 'https://www.mongodb.com/docs/' },
  { name: 'Node.js', url: 'https://nodejs.org/en' },
  { name: 'Git', url: 'https://git-scm.com/doc' },
];

const Experience = () => {
  return (
    <div className='flex flex-col items-start rounded-xl my-28'>
      <motion.h2 initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className='text-3xl font-bold mb-4 px-2'>Experience</motion.h2>

      {/* Experience 1 */}
      <motion.div className='mt-8 w-full' >
        <motion.div initial={{opacity:0, x: 100}} whileInView={{opacity:1, x:0}} transition={{duration: 0.8}} className='px-2'>
          <h3 className='text-xl font-semibold flex flex-row xs:flex-col xs:py-5 justify-between sm:text-lg xs:text-md xs:text-semi-bold'>
            Software Engineer - Statergic System Internationals <span className=''>Jul 2023 - Present</span>
          </h3>
          <p className='text-lg text-justify md:text-md xs-text-sm'>
Wrote frontend and backend APIs for self-storage business based web application in Node.js, Vue.js and MySQL.
Gained hands-on experience with MySQL cron jobs, triggers, AWS RDS, AWS S3 buckets, GitLab, Docker,
Kubernetes, Jira/Agile methodology. Collaborated with cross-functional teams and participated in requirements
gathering and feature discussion meetings with product owners. Dveloped major components and features for a multinational self storage microservices-based application comprising over a million lines of code with an annual recurring revenue
exceeding $10 million.
          </p>
        </motion.div>
        <motion.div initial={{opacity:0, x: -100}} whileInView={{opacity:1, x:0}} transition={{duration: 0.8}} className='mt-4 px-2'>
          <h4 className='text-lg font-semibold mb-2'>Skills</h4>
          <div className='flex flex-wrap gap-2'>
            {exp1_skills.map((skill, index) => (
              <a 
                key={index} 
                href={skill.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition'
              >
                {skill.name}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Experience 2 */}
      <motion.div   className='w-full mt-8'>
        <motion.div initial={{opacity:0, x: 100}} whileInView={{opacity:1, x:0}} transition={{duration: 0.8}} className='px-2'>
          <h3 className='text-xl font-semibold flex flex-row xs:flex-col xs:py-5 justify-between sm:text-lg xs:text-md xs:text-semi-bold'>
          Associate Software Engineer - FastDevLabs<span>Sep 2022 - Jun 2023</span>
          </h3>
          <p className='text-lg text-justify md:text-md xs-text-sm'>
          Wrote frontend and backend APIs for various projects using Node.js, React.js, and MySQL. Additionally, performed unit testing and stress testing on the application. 
          
          </p>
        </motion.div>
        <motion.div initial={{opacity:0, x: -100}} whileInView={{opacity:1, x:0}} transition={{duration: 0.8}} className='mt-4 px-2'>
          <h4 className='text-lg font-semibold mb-2'>Skills</h4>
          <div className='flex flex-wrap gap-2'>
            {exp2_skills.map((skill, index) => (
              <a 
                key={index} 
                href={skill.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition'
              >
                {skill.name}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Experience 3 */}
      <motion.div className='w-full mt-8' >
        <motion.div initial={{ opacity: 0, x:100 }} whileInView={{ opacity: 1, x:0  }} transition={{ duration: 0.8 }} className='px-2'>
          <h3 className='text-xl font-semibold flex flex-row xs:flex-col xs:py-5 justify-between sm:text-lg xs:text-md xs:text-semi-bold'>
          Software Engineer Intern - United Softlabs <span>Jun 2022 - Aug 2022</span>
          </h3>
          <p className='text-lg text-justify md:text-md xs-text-sm'>
          Worked on frontend and backend APIs for various projects using Node.js, React.js, and MySQL. Also gained
          hands-on experience with deep learning model training and deployment for an e-commerce application.          </p>
        </motion.div>
        <motion.div initial={{opacity:0, x: -100}} whileInView={{opacity:1, x:0}} transition={{duration: 0.8}} className='mt-4 px-2'>
          <h4 className='text-lg font-semibold mb-2'>Skills</h4>
          <div className='flex flex-wrap gap-2'>
            {exp3_skills.map((skill, index) => (
              <a 
                key={index} 
                href={skill.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition'
              >
                {skill.name}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Experience;
