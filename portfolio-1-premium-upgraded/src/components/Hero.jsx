import config from '../portfolio.config.js';
import HeroPhoto from './HeroPhoto.jsx';
import ExtLink from './ExtLink.jsx';

// The five technologies that appear most often across the projects below.
function topStack() {
  const count = new Map();
  config.projects.forEach((p) => p.stack.forEach((s) => count.set(s, (count.get(s) ?? 0) + 1)));
  return [...count.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5).map(([s]) => s);
}

export default function Hero() {
  const { person } = config;
  const longest = Math.max(person.firstName.length, person.lastName.length);
  // Very long names get a smaller display size so they never overflow.
  const nameSize = longest > 9 ? 'clamp(2.6rem, 8.2vw, 6rem)' : 'clamp(3.6rem, 12.5vw, 8.75rem)';
  const stack = topStack();

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="wrap relative grid items-center gap-10 py-14 sm:py-20 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-12 lg:gap-6 lg:py-16">
        <div className="lg:col-span-7">
          <p className="settle flex items-center gap-2.5 text-sm text-muted" style={{ '--d': '700ms' }}>
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            {person.status}
          </p>

          <h1
            id="hero-title"
            className="mt-6 font-extrabold leading-[0.92] tracking-[-0.04em] [overflow-wrap:anywhere]"
            style={{ fontSize: nameSize }}
          >
            <span className="reveal-mask">
              <span className="reveal-line" style={{ '--d': '80ms' }}>
                {person.firstName}
              </span>
            </span>
            <span className="reveal-mask">
              <span className="reveal-line" style={{ '--d': '200ms' }}>
                {person.lastName}
              </span>
            </span>
          </h1>

          <p
            className="settle mt-7 max-w-[24ch] font-[family-name:var(--font-display)] text-2xl font-medium leading-snug tracking-tight sm:text-3xl"
            style={{ '--d': '520ms' }}
          >
            {person.headline}
          </p>

          <ul className="settle mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium" style={{ '--d': '600ms' }} aria-label="Main technologies">
            {stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <div className="settle mt-9 flex flex-wrap items-center gap-3" style={{ '--d': '680ms' }}>
            <a href="#projects" className="btn-primary">
              View projects
            </a>
            <a href={person.resume} download className="btn-ghost">
              Download resume
            </a>
          </div>

          <p className="settle mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted" style={{ '--d': '780ms' }}>
            <span>
              Prefer email?{' '}
              <a href={`mailto:${person.email}`} className="text-link">
                {person.email}
              </a>
            </span>
            <ExtLink href={person.github}>GitHub</ExtLink>
            <ExtLink href={person.linkedin}>LinkedIn</ExtLink>
          </p>
        </div>

        <div className="lg:col-span-5">
          <HeroPhoto />
        </div>
      </div>
    </section>
  );
}
