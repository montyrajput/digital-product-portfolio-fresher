import config from '../portfolio.config.js';
import Section from './Section.jsx';

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="Each group shows the projects where I used it.">
      <dl>
        {config.skills.map((s) => (
          <div key={s.group} className="grid gap-2 border-t border-line py-6 first:border-t-0 first:pt-0 sm:grid-cols-[13rem_1fr] sm:gap-8">
            <dt className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">{s.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li key={i} className="rounded-full border border-line-strong px-3 py-1 text-sm font-medium transition-colors hover:border-accent-text hover:text-accent-text">
                    {i}
                  </li>
                ))}
              </ul>
              {s.usedIn?.length > 0 && <p className="mt-1.5 text-sm text-muted">Used in {s.usedIn.join(', ')}</p>}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
