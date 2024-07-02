import React, { Suspense, lazy, useEffect, useState } from 'react';
import Loader from './components/Loader';
import FullPageLoader from './components/FullPageLoader';

const Hero = lazy(() => import('./components/Hero'));
const Technologies = lazy(() => import('./components/Tech'));
const Footer = lazy(() => import('./components/Footer'));
const Projects = lazy(() => import('./components/Projects'));
const AboutMe = lazy(() => import('./components/AboutMe'));
const Navbar = lazy(() => import('./components/Navbar'));
const Experience = lazy(() => import('./components/Experience'));

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
    {/* added full page loader and separate component loaders */}
      {loading && <FullPageLoader />}
      <div className={`${darkMode ? 'text-neutral-300' : 'text-black'} overflow-x-hidden antialiased selection:bg-cyan-100 selection:text-cyan-900`}>
        <div className='fixed top-0 -z-10 h-full w-full'>
          {darkMode ? (
            <div className="relative h-full w-full">
              <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            </div>
          ) : (
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
          )}
        </div>
        <div className='flex flex-col items-center'>
          <div className='container mx-auto px-8'>
            <Suspense fallback={<Loader />}>
              <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
              <Hero onLoad={handleLoadComplete} />
              <section id="about">
                <AboutMe />
              </section>
              <section id='tech'>
                <Technologies />
              </section>
              <section id="experience">
                <Experience />
              </section>
              <section id="projects">
                <Projects />
              </section>
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
