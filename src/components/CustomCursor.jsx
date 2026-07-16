import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Premium trailing cursor: a lagging glow ring + a precise dot.
 * The ring grows and brightens over interactive elements.
 * Only enabled on fine-pointer (mouse) devices without reduced-motion.
 */
const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 250, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 250, damping: 28, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add('has-custom-cursor');

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const over = (e) => {
      if (e.target.closest && e.target.closest('a, button, [role="button"], input, textarea, .cursor-grow')) {
        setHovering(true);
      }
    };
    const out = (e) => {
      if (e.target.closest && e.target.closest('a, button, [role="button"], input, textarea, .cursor-grow')) {
        setHovering(false);
      }
    };
    const leave = () => setHidden(true);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mouseout', out);
    document.addEventListener('mouseleave', leave);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mouseout', out);
      document.removeEventListener('mouseleave', leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Lagging glow ring */}
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY, opacity: hidden ? 0 : 1 }}
        className='pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2'
      >
        <motion.div
          animate={{
            width: hovering ? 64 : 34,
            height: hovering ? 64 : 34,
            borderColor: hovering ? 'rgba(52,211,153,0.9)' : 'rgba(56,189,248,0.7)',
            backgroundColor: hovering ? 'rgba(56,189,248,0.12)' : 'rgba(56,189,248,0.03)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className='rounded-full border-2'
          style={{ boxShadow: '0 0 18px rgba(56,189,248,0.35)' }}
        />
      </motion.div>

      {/* Precise dot */}
      <motion.div
        aria-hidden
        style={{ x, y, opacity: hidden ? 0 : 1 }}
        className='pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2'
      >
        <div className='h-1.5 w-1.5 rounded-full bg-white' />
      </motion.div>
    </>
  );
};

export default CustomCursor;
