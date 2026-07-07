import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate, useReducedMotion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * 3D tilt-on-hover card with a cursor-following spotlight glow.
 * Pointer position drives rotateX/rotateY and a radial highlight.
 */
const TiltCard = ({ children, className = '', max = 10 }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);

  const rotateX = useSpring(rx, { stiffness: 150, damping: 18 });
  const rotateY = useSpring(ry, { stiffness: 150, damping: 18 });

  const glow = useMotionTemplate`radial-gradient(320px circle at ${gx}% ${gy}%, rgba(56,189,248,0.18), transparent 65%)`;

  const handleMove = (e) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    ry.set((px - 0.5) * max * 2);
    rx.set((0.5 - py) * max * 2);
    gx.set(px * 100);
    gy.set(py * 100);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
    gx.set(50);
    gy.set(50);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 900 }}
      whileHover={{ scale: reduce ? 1 : 1.02 }}
      className={`relative ${className}`}
    >
      {children}
      {!reduce && (
        <motion.div
          style={{ background: glow }}
          className='pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'
        />
      )}
    </motion.div>
  );
};

TiltCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  max: PropTypes.number,
};

export default TiltCard;
