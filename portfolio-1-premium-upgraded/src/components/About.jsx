import config from '../portfolio.config.js';
import Section from './Section.jsx';

export default function About() {
  const { about } = config;

  return (
    <Section id="about" title="About">
      <div className="max-w-[62ch] space-y-5 text-lg leading-relaxed">
        {about.paragraphs.map((p, i) => (
          <p key={p} className={i === 0 ? 'text-xl font-medium leading-relaxed md:text-2xl' : 'text-muted'}>
            {p}
          </p>
        ))}
      </div>
      <dl className="mt-12 grid gap-x-10 gap-y-6 border-t border-line pt-8 sm:grid-cols-2">
        {about.facts.map((f) => (
          <div key={f.label} className="border-l-2 border-accent pl-4">
            <dt className="text-sm text-muted">{f.label}</dt>
            <dd className="mt-1 font-medium">{f.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
