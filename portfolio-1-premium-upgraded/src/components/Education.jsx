import { useRef } from 'react';
import { motion, useReducedMotion, useScroll } from 'framer-motion';
import config from '../portfolio.config.js';
import Section from './Section.jsx';

export default function Education() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  // The line fills as the reader moves down the list, because the list is a sequence.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });

  return (
    <Section id="education" title="Education and learning" intro="Degree, certificates and activities, oldest first.">
      <ol ref={ref} className="relative ml-2 space-y-10 border-l border-line pl-8">
        <motion.span
          aria-hidden="true"
          style={{ scaleY: reduceMotion ? 1 : scrollYProgress }}
          className="absolute -left-px top-0 h-full w-px origin-top bg-gradient-to-b from-accent to-accent-2"
        />
        {config.education.map((item) => (
          <li key={item.title} className="relative">
            <span aria-hidden="true" className="absolute -left-[2.45rem] top-2 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
            <p className="text-sm text-muted">{item.date}</p>
            <h3 className="mt-1 text-xl font-semibold md:text-2xl">{item.title}</h3>
            <p className="mt-2 max-w-[58ch] text-muted">{item.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
