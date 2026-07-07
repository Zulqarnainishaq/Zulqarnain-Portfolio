import { motion, useReducedMotion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * Scroll-triggered reveal: content rises and un-blurs into place.
 * `direction` controls the entry offset; `delay` staggers siblings.
 */
const Reveal = ({ children, delay = 0, direction = 'up', className = '', once = true }) => {
  const reduce = useReducedMotion();

  const offset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  }[direction] || { y: 40, x: 0 };

  const hidden = reduce
    ? { opacity: 0 }
    : { opacity: 0, ...offset, filter: 'blur(10px)' };
  const shown = reduce
    ? { opacity: 1 }
    : { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' };

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  className: PropTypes.string,
  once: PropTypes.bool,
};

export default Reveal;
