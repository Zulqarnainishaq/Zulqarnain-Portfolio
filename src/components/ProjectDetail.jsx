import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import projects from '../data/projects.json';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import newsSummarizer from '../assets/news summarizer.jpg';
import pastPapersSearchEngine from '../assets/past papers search engine.jpg';
import epharmacy from '../assets/epharmacy.png';
import timeleft from '../assets/timeleft.jpg';
import stickball from '../assets/stickball.jpg';
import hummingbird from '../assets/hummingbird.webp';
import selvaHome1 from '../assets/Selva — Home Screen (1).png';
import selvaHome2 from '../assets/Selva — Home Screen (2).png';
import selvaTripDetail1 from '../assets/Selva Trip Detail.jpg';
import selvaTripDetail2 from '../assets/Selva Trip Detail (2).jpg';
import selvaTripDetail3 from '../assets/Selva Trip Detail (3).jpg';

// Map image names from JSON to actual imports
const imageMap = {
  'news summarizer.jpg': newsSummarizer,
  'past papers search engine.jpg': pastPapersSearchEngine,
  'epharmacy.png': epharmacy,
  'timeleft.jpg': timeleft,
  'stickball.jpg': stickball,
  'hummingbird.webp': hummingbird,
  'Selva — Home Screen (1).png': selvaHome1,
  'Selva — Home Screen (2).png': selvaHome2,
  'Selva Trip Detail.jpg': selvaTripDetail1,
  'Selva Trip Detail (2).jpg': selvaTripDetail2,
  'Selva Trip Detail (3).jpg': selvaTripDetail3,
};

const Tag = ({ children }) => {
  return (
    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
      {children}
    </span>
  );
};

Tag.propTypes = {
  children: PropTypes.node.isRequired
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [selvaIndex, setSelvaIndex] = useState(0);

  const selvaImages = Array.isArray(project?.images) ? project.images : [];

  const prevSelva = () => {
    if (selvaImages.length === 0) return;
    setSelvaIndex((i) => (i - 1 + selvaImages.length) % selvaImages.length);
  };

  const nextSelva = () => {
    if (selvaImages.length === 0) return;
    setSelvaIndex((i) => (i + 1) % selvaImages.length);
  };

  // Ensure view starts at the top when opening a project detail
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/#projects" className="text-blue-600 hover:text-blue-800">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link 
          to="/#projects" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          ← Back to Projects
        </Link>

        {/* Project images (gallery) */}
        {Array.isArray(project.images) && project.images.length > 0 ? (
          project.id === 'selva' ? (
            // Arrow slider for Selva mobile images
            <div className="mb-8 relative flex items-center justify-center">
              <button
                type="button"
                aria-label="Previous image"
                onClick={prevSelva}
                className="absolute left-0 md:left-6 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-800 rounded-full p-2 shadow-md"
              >
                ←
              </button>

              <div className="shrink-0 bg-black rounded-3xl p-2 border border-gray-700 w-[180px] md:w-[200px]">
                <img
                  src={imageMap[selvaImages[selvaIndex]]}
                  alt={`${project.title} mobile ${selvaIndex + 1}`}
                  className="rounded-2xl w-full h-auto"
                />
              </div>

              <button
                type="button"
                aria-label="Next image"
                onClick={nextSelva}
                className="absolute right-0 md:right-6 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-800 rounded-full p-2 shadow-md"
              >
                →
              </button>

              <div className="absolute -bottom-6 flex gap-2">
                {selvaImages.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to image ${idx + 1}`}
                    onClick={() => setSelvaIndex(idx)}
                    className={`h-2.5 w-2.5 rounded-full ${idx === selvaIndex ? 'bg-blue-500' : 'bg-gray-400'} hover:bg-blue-400`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.map((imgName, idx) => (
                <img
                  key={idx}
                  src={imageMap[imgName]}
                  alt={`${project.title} ${idx + 1}`}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              ))}
            </div>
          )
        ) : (
          <div className="mb-8">
            <img 
              src={imageMap[project.image]} 
              alt={project.title}
              className={`w-full h-auto rounded-xl shadow-lg ${project.id === 'selva' ? 'max-w-sm mx-auto' : ''}`}
            />
          </div>
        )}

        {/* Project title and description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {project.shortDescription}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <Tag key={index}>{tech}</Tag>
            ))}
          </div>
        </motion.div>

        {/* Project details */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          {project.id === 'selva' ? (
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {project.details.overview}
              </p>
              <div className="flex justify-center md:justify-start">
                <img
                  src={imageMap[(project.images && project.images[0]) || project.image]}
                  alt={`${project.title} mobile`}
                  className="rounded-xl shadow-lg max-w-[220px]"
                />
              </div>
            </div>
          ) : (
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {project.details.overview}
            </p>
          )}

          {project.details.features && (
            <>
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {project.details.features.map((feature, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </li>
                ))}
              </ul>
            </>
          )}
        </motion.div>

        {/* Project links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4"
        >
          {project.links.demo && (
            <a 
              href={project.links.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              View Demo
            </a>
          )}
          {project.links.repo && (
            <a 
              href={project.links.repo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              View Code
            </a>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;