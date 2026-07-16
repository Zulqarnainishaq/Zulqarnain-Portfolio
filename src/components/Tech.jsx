import { motion, useReducedMotion } from 'framer-motion';
import PropTypes from 'prop-types';
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

// Unified list, tagged by render type
const allTechs = [
  ...imageTechs.map((t) => ({ ...t, type: 'img' })),
  ...iconTechs.map((t) => ({ ...t, type: 'icon' })),
];

// Distribute evenly across 3 rows
const rows = [[], [], []];
allTechs.forEach((t, i) => rows[i % 3].push(t));

// A single technology chip (icon/logo + label) with hover glow + lift.
const TechChip = ({ item }) => (
  <a
    href={item.href}
    target='_blank'
    rel='noopener noreferrer'
    className='group shrink-0 flex flex-col items-center gap-2 px-6 w-[9rem]'
  >
    <div className='relative h-[6rem] flex items-center justify-center transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1'>
      <div
        className='pointer-events-none absolute inset-0 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100'
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.45), transparent 70%)' }}
      />
      {item.type === 'img' ? (
        <img src={item.src} alt={item.label} className='relative max-h-[5.5rem] w-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)]' />
      ) : (
        <item.Icon size={70} style={{ color: item.color }} className='relative drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)]' aria-label={item.label} />
      )}
    </div>
    <span className='text-sm font-medium opacity-80 whitespace-nowrap'>{item.label}</span>
  </a>
);

TechChip.propTypes = { item: PropTypes.object };

// One auto-scrolling row. Content is duplicated so the loop is seamless.
const MarqueeRow = ({ items, duration, reverse }) => {
  const doubled = [...items, ...items];
  return (
    <div className='marquee-mask overflow-hidden w-full py-3'>
      <div
        className='marquee-track'
        style={{ animationDuration: `${duration}s`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {doubled.map((t, i) => (
          <TechChip key={`${t.label}-${i}`} item={t} />
        ))}
      </div>
    </div>
  );
};

MarqueeRow.propTypes = {
  items: PropTypes.array,
  duration: PropTypes.number,
  reverse: PropTypes.bool,
};

const Tech = () => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1 }}
    >
      <Reveal>
        <p className='text-4xl font-bold text-center mb-16 mt-10 animated-underline'>Technologies with hands-on experience</p>
      </Reveal>

      {reduce ? (
        // Static fallback for reduced-motion users (all visible, no scrolling)
        <div className='flex flex-wrap justify-center items-start gap-x-6 gap-y-10 mt-5 mb-10'>
          {allTechs.map((t) => (
            <TechChip key={t.label} item={t} />
          ))}
        </div>
      ) : (
        <div className='flex flex-col gap-6 mt-5 mb-10'>
          <MarqueeRow items={rows[0]} duration={42} reverse={false} />
          <MarqueeRow items={rows[1]} duration={34} reverse={true} />
          <MarqueeRow items={rows[2]} duration={48} reverse={false} />
        </div>
      )}
    </motion.div>
  );
};

export default Tech;
