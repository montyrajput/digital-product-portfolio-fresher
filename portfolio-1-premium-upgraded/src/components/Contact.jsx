import config from '../portfolio.config.js';
import ExtLink from './ExtLink.jsx';
import CopyEmail from './CopyEmail.jsx';

export default function Contact() {
  const { person, contact } = config;

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div className="hero-glow pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="wrap relative">
        <h2 id="contact-title" className="text-4xl font-bold md:text-5xl">
          Contact
        </h2>
        <p className="mt-4 max-w-[40ch] text-muted">{contact.intro}</p>

        <a
          href={`mailto:${person.email}`}
          className="mt-10 block font-[family-name:var(--font-display)] font-bold leading-tight tracking-tight [overflow-wrap:anywhere] hover:text-accent-text"
          style={{ fontSize: 'clamp(1.5rem, 5.6vw, 4rem)' }}
        >
          {person.email}
        </a>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 font-medium">
          <ExtLink href={person.linkedin}>LinkedIn</ExtLink>
          <ExtLink href={person.github}>GitHub</ExtLink>
          <CopyEmail email={person.email} />
          <a href={person.resume} download className="btn-primary">
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
