import { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import Loader from './components/Loader';
import FullPageLoader from './components/FullPageLoader';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';

const Hero = lazy(() => import('./components/Hero'));
const Technologies = lazy(() => import('./components/Tech'));
const Footer = lazy(() => import('./components/Footer'));
const Projects = lazy(() => import('./components/Projects'));
const AboutMe = lazy(() => import('./components/AboutMe'));
const Navbar = lazy(() => import('./components/Navbar'));
const Experience = lazy(() => import('./components/Experience'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));
const Education = lazy(() => import('./components/Education'));
const Achievements = lazy(() => import('./components/Achievements'));
const Certifications = lazy(() => import('./components/Certifications'));

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleLoadComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Simulate an initial load delay
    setTimeout(() => setLoading(false), 1000); // Adjust timing as needed
  }, []);

  // Keep Tailwind's class-based dark mode in sync with the app theme state,
  // so every `dark:` variant matches the chosen theme (not the OS setting).
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Notify server on first production visit per session
  useEffect(() => {
    try {
      const alreadyNotified = sessionStorage.getItem('visit-notified');
      if (import.meta.env.PROD && !alreadyNotified) {
        const path = `${window.location.pathname}${window.location.search}${window.location.hash}`;
        const url = `/api/notify-visit?path=${encodeURIComponent(path)}`;
        fetch(url, { method: 'GET', keepalive: true }).catch(() => {});
        sessionStorage.setItem('visit-notified', '1');
      }
    } catch (_) {
      // ignore storage errors (e.g., privacy mode)
    }
  }, []);

  // Scroll to hash (e.g., #projects) after route changes, retrying to account for lazy-loaded content
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const attemptScroll = (retries = 10) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'auto', block: 'start' });
        } else if (retries > 0) {
          setTimeout(() => attemptScroll(retries - 1), 100);
        }
      };
      attemptScroll();
    }
  }, [location]);

  return (
    <>
    {/* added full page loader and separate component loaders */}
      <SmoothScroll />
      <ScrollProgress />
      <CustomCursor />
      {loading && <FullPageLoader />}
      <div className={`${darkMode ? 'text-neutral-300' : 'text-black'} overflow-x-hidden antialiased selection:bg-cyan-100 selection:text-cyan-900`}>
        <div className='fixed top-0 -z-10 h-full w-full overflow-hidden'>
          {darkMode ? (
            <div className="relative h-full w-full">
              <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#01030f_38%,#0b1e4d_72%,#0e7490_100%)]"></div>
            </div>
          ) : (
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#f8fafc_42%,#38bdf8_100%)]"></div>
          )}
          {/* Global animated aurora mesh for depth (the "4D" moving layer) */}
          <div className='aurora aurora-1 w-[34rem] h-[34rem] -top-32 -left-24 opacity-30' />
          <div className='aurora aurora-3 w-[38rem] h-[38rem] top-1/3 -right-32 opacity-25' />
          <div className='aurora aurora-2 w-[30rem] h-[30rem] bottom-0 left-1/4 opacity-20' />
        </div>
        <div className='flex flex-col items-center'>
          <div className='container mx-auto px-8'>
            <Suspense fallback={<Loader />}>
              <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
            </Suspense>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero onLoad={handleLoadComplete} />
                    <section id="about">
                      <AboutMe />
                    </section>
                    <section id='tech'>
                      <Technologies />
                    </section>
                    <section id="certifications">
                      <Certifications />
                    </section>
                    <section id="experience">
                      <Experience />
                    </section>
                    <section id="projects">
                      <Projects />
                    </section>
                    <section id="education">
                      <Education />
                    </section>
                    <section id="achievements">
                      <Achievements />
                    </section>
                  </>
                } />
                <Route path="/projects/:id" element={<ProjectDetail />} />
              </Routes>
            </Suspense>
          </div>
          <div className='bottom-0 w-full'>
            <Suspense fallback={<Loader />}>
              <Footer />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
