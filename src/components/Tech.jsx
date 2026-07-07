import { motion } from 'framer-motion';
import node from '../assets/node.png';
import react from '../assets/react.png';
import js from '../assets/JS.png';
import vue from '../assets/vue.png';
import tailwind from '../assets/tailwind.svg';
import boot from '../assets/boot.png';
import py from '../assets/py.png';
import mysql from '../assets/mysql.png';
import {
  SiDjango, SiNextdotjs, SiMicrosoftazure, SiPostman,
  SiTypescript, SiNestjs, SiFastapi, SiExpress, SiRedux,
  SiPostgresql, SiMongodb, SiRedis, SiDocker, SiKubernetes,
  SiGit, SiJenkins, SiGithubactions,
  SiAmazonaws, SiAmazonec2, SiAmazons3, SiAmazonrds, SiAmazonsqs,
} from 'react-icons/si';
import { TbBrain, TbBucket, TbBolt, TbWorldWww } from 'react-icons/tb';
import { AiOutlineDatabase } from 'react-icons/ai';
import Reveal from './Reveal';

const AZURE = '#0089D6';
const AWS = '#FF9900';

// Full-color logo images already in the project
const imageTechs = [
  { src: node, label: 'Node.js', href: 'https://nodejs.org/en' },
  { src: react, label: 'React', href: 'https://react.dev/' },
  { src: js, label: 'JavaScript', href: 'https://devdocs.io/javascript/' },
  { src: vue, label: 'Vue.js', href: 'https://vuejs.org/guide/introduction.html' },
  { src: py, label: 'Python', href: 'https://docs.python.org/3/library/index.html' },
  { src: mysql, label: 'MySQL', href: 'https://dev.mysql.com/doc/' },
  { src: tailwind, label: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
  { src: boot, label: 'Bootstrap', href: 'https://getbootstrap.com/docs/4.1/getting-started/introduction/' },
];

// New technologies rendered as vector icons (react-icons)
const iconTechs = [
  { Icon: SiTypescript, label: 'TypeScript', color: '#3178C6', href: 'https://www.typescriptlang.org/' },
  { Icon: SiNestjs, label: 'Nest.js', color: '#E0234E', href: 'https://nestjs.com/' },
  { Icon: SiNextdotjs, label: 'Next.js', color: 'currentColor', href: 'https://nextjs.org/' },
  { Icon: SiExpress, label: 'Express.js', color: 'currentColor', href: 'https://expressjs.com/' },
  { Icon: SiRedux, label: 'Redux', color: '#764ABC', href: 'https://redux.js.org/' },
  { Icon: SiDjango, label: 'Django', color: '#44B78B', href: 'https://www.djangoproject.com/' },
  { Icon: SiFastapi, label: 'FastAPI', color: '#009688', href: 'https://fastapi.tiangolo.com/' },
  { Icon: TbBrain, label: 'RAG', color: '#10A37F', href: 'https://www.promptingguide.ai/techniques/rag' },
  { Icon: SiPostgresql, label: 'PostgreSQL', color: '#4169E1', href: 'https://www.postgresql.org/' },
  { Icon: SiMongodb, label: 'MongoDB', color: '#47A248', href: 'https://www.mongodb.com/' },
  { Icon: SiRedis, label: 'Redis', color: '#FF4438', href: 'https://redis.io/' },
  { Icon: SiDocker, label: 'Docker', color: '#2496ED', href: 'https://www.docker.com/' },
  { Icon: SiKubernetes, label: 'Kubernetes', color: '#326CE5', href: 'https://kubernetes.io/' },
  { Icon: SiPostman, label: 'Postman', color: '#FF6C37', href: 'https://www.postman.com/' },
  { Icon: SiGit, label: 'Git', color: '#F05032', href: 'https://git-scm.com/' },
  { Icon: SiGithubactions, label: 'GitHub Actions', color: '#2088FF', href: 'https://github.com/features/actions' },
  { Icon: SiJenkins, label: 'Jenkins', color: '#D24939', href: 'https://www.jenkins.io/' },
  // Azure
  { Icon: SiMicrosoftazure, label: 'Azure', color: AZURE, href: 'https://azure.microsoft.com/' },
  { Icon: AiOutlineDatabase, label: 'Azure SQL (RDS)', color: AZURE, href: 'https://azure.microsoft.com/en-us/products/azure-sql/database' },
  { Icon: TbBucket, label: 'Azure Blob', color: AZURE, href: 'https://azure.microsoft.com/en-us/products/storage/blobs' },
  { Icon: TbBolt, label: 'Azure Functions', color: AZURE, href: 'https://azure.microsoft.com/en-us/products/functions' },
  { Icon: TbWorldWww, label: 'Azure App Service', color: AZURE, href: 'https://azure.microsoft.com/en-us/products/app-service' },
  // AWS
  { Icon: SiAmazonaws, label: 'AWS', color: AWS, href: 'https://aws.amazon.com/' },
  { Icon: SiAmazonec2, label: 'AWS EC2', color: AWS, href: 'https://aws.amazon.com/ec2/' },
  { Icon: SiAmazons3, label: 'AWS S3', color: AWS, href: 'https://aws.amazon.com/s3/' },
  { Icon: SiAmazonrds, label: 'AWS RDS', color: AWS, href: 'https://aws.amazon.com/rds/' },
  { Icon: SiAmazonsqs, label: 'AWS SQS', color: AWS, href: 'https://aws.amazon.com/sqs/' },
];

const Tech = () => {
  const animateProps = {
    y: ['0rem', '0.5rem', '0rem'],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  const tileClass =
    'flex flex-col items-center gap-3 w-[9rem] sm:w-[8rem] xs:w-[7rem] hover:brightness-90 transition';
  const labelClass = 'text-sm font-medium text-center opacity-80';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1 }}
    >
      <Reveal>
        <p className='text-4xl font-bold text-center mb-20 mt-10 animated-underline'>Technologies with hands-on experience</p>
      </Reveal>
      <div className='flex flex-wrap justify-center items-start gap-x-8 gap-y-12 mt-5 mb-10'>
        {imageTechs.map((t) => (
          <motion.a
            key={t.label}
            href={t.href}
            target='_blank'
            rel='noopener noreferrer'
            className={tileClass}
            animate={animateProps}
            whileHover={{ scale: 1.12 }}
          >
            <div className='h-[7rem] flex items-center justify-center'>
              <img src={t.src} alt={t.label} className='max-h-[7rem] w-auto' />
            </div>
            <span className={labelClass}>{t.label}</span>
          </motion.a>
        ))}
        {iconTechs.map((t) => (
          <motion.a
            key={t.label}
            href={t.href}
            target='_blank'
            rel='noopener noreferrer'
            className={tileClass}
            animate={animateProps}
            whileHover={{ scale: 1.12 }}
          >
            <div className='h-[7rem] flex items-center justify-center'>
              <t.Icon size={80} style={{ color: t.color }} aria-label={t.label} />
            </div>
            <span className={labelClass}>{t.label}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Tech;
