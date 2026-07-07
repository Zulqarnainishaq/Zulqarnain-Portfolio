import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../data/projects.json';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import back from '../assets/back.jpg';
import pc from '../assets/pc.jpg';
import pcc from '../assets/pcc.jpg';
import newsSummarizer from '../assets/news summarizer.jpg';
import pastPapers from '../assets/past papers search engine.jpg';
import epharmacy from '../assets/epharmacy.png';
import timeleft from '../assets/timeleft.jpg';
import stickball from '../assets/stickball.jpg';
import hummingbird from '../assets/hummingbird.webp';
import selvaHome1 from '../assets/Selva — Home Screen (1).png';
import hcms from '../assets/hcms.svg';

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
  'Selva — Home Screen (1).png': selvaHome1,
  'hcms.svg': hcms,
};

const Projects = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1 }} 
      className="mt-40 mb-10 flex flex-col items-center"
    >
      <Reveal>
        <h1 className='text-4xl mb-10 font-bold text-center animated-underline'>Projects Catalogue</h1>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 0.08} className="group h-full">
            <TiltCard className="rounded-xl overflow-hidden shadow-lg bg-gray-900/20 ring-1 ring-white/5 h-full transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-sky-500/20">
              <Link to={`/projects/${p.id}`} className="relative block h-full">
                {p.id === 'selva' ? (
                  <div className="w-full h-60 flex items-center justify-center overflow-hidden">
                    <div className="shrink-0 bg-black rounded-3xl p-2 border border-gray-700 h-[210px] md:h-[230px] w-auto flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      <img
                        src={imageMap[p.image]}
                        alt={p.title}
                        className="rounded-2xl h-full w-auto object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="overflow-hidden">
                    <img src={imageMap[p.image]} alt={p.title} className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm opacity-80">{p.shortDescription}</p>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold px-4 py-2 rounded-full border border-white/40 backdrop-blur-sm">View details →</span>
                </div>
              </Link>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
