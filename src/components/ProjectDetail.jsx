import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects.json';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import newsSummarizer from '../assets/news summarizer.jpg';
import pastPapersSearchEngine from '../assets/past papers search engine.jpg';
import epharmacy from '../assets/epharmacy.png';
import timeleft from '../assets/timeleft.jpg';
import stickball from '../assets/stickball.jpg';
import hummingbird from '../assets/hummingbird.webp';

// Map image names from JSON to actual imports
const imageMap = {
  'news summarizer.jpg': newsSummarizer,
  'past papers search engine.jpg': pastPapersSearchEngine,
  'epharmacy.png': epharmacy,
  'timeleft.jpg': timeleft,
  'stickball.jpg': stickball,
  'hummingbird.webp': hummingbird,
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

        {/* Project image */}
        <div className="mb-8">
          <img 
            src={imageMap[project.image]} 
            alt={project.title}
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

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
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {project.details.overview}
          </p>

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