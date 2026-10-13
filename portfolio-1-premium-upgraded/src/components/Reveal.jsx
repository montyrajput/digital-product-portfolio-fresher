import { motion, useReducedMotion } from 'framer-motion';

// Fades and lifts its content in once, when it scrolls into view.
// With prefers-reduced-motion it renders the content with no animation at all.
export default function Reveal({ as = 'div', delay = 0, y = 18, className, children, ...rest }) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }
  const Comp = motion[as] ?? motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
