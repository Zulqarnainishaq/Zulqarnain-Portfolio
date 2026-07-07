import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Slim gradient progress bar pinned to the top of the viewport,
 * tracking overall page scroll. Adds a premium, "alive" feel.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className='fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left bg-gradient-to-r from-violet-500 via-sky-400 to-emerald-400'
    />
  );
};

export default ScrollProgress;
