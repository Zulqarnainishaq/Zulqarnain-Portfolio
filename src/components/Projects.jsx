import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../data/projects.json';
import back from '../assets/back.jpg';
import pc from '../assets/pc.jpg';
import pcc from '../assets/pcc.jpg';
import newsSummarizer from '../assets/news summarizer.jpg';
import pastPapers from '../assets/past papers search engine.jpg';
import epharmacy from '../assets/epharmacy.png';
import timeleft from '../assets/timeleft.jpg';
import stickball from '../assets/stickball.jpg';
import hummingbird from '../assets/hummingbird.webp';

// Map image names from JSON to actual imports
const imageMap = {
  'back.jpg': back,
  'pc.jpg': pc,
  'pcc.jpg': pcc,
  'news summarizer.jpg': newsSummarizer,
  'past papers search engine.jpg': pastPapers,
  'epharmacy.png': epharmacy,
  'timeleft.jpg': timeleft,
  'stickball.jpg': stickball,
  'hummingbird.webp': hummingbird,
};

const Projects = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1 }} 
      className="mt-40 mb-10 flex flex-col items-center"
    >
      <h1 className='text-4xl mb-10 font-bold text-center'>Projects Catalogue</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
        {projects.map((p) => (
          <Link key={p.id} to={`/projects/${p.id}`} className="relative group rounded-xl overflow-hidden shadow-lg bg-gray-900/20">
            <img src={imageMap[p.image]} alt={p.title} className="w-full h-60 object-cover" />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm opacity-80">{p.shortDescription}</p>
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-semibold">View details</span>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
