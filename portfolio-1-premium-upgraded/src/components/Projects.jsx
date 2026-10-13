import { useState } from 'react';
import config from '../portfolio.config.js';
import Section from './Section.jsx';
import ExtLink from './ExtLink.jsx';
import Screenshot from './Screenshot.jsx';

function Toggle({ open }) {
  return (
    <span
      aria-hidden="true"
      className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink transition-colors group-hover:border-accent-text group-hover:text-accent-text"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M2 7h10" />
        <path d="M7 2v10" className={`origin-center transition-transform duration-300 ${open ? 'scale-y-0' : ''}`} style={{ transformBox: 'fill-box' }} />
      </svg>
    </span>
  );
}

const Dash = ({ children }) => (
  <li className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-3 before:bg-accent-text">{children}</li>
);

function ProjectRow({ project, open, onToggle }) {
  const panelId = `project-${project.id}`;

  return (
    <li className="border-t border-line first:border-t-0">
      <div className="group py-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-8">
          <div className="min-w-0 flex-1">
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={onToggle}
              className="flex w-full items-start justify-between gap-5 text-left"
            >
              <span className="block">
                <span className="block font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent-text md:text-3xl">
                  {project.name}
                </span>
                <span className="mt-2 block max-w-[50ch] text-muted">{project.summary}</span>
              </span>
              <Toggle open={open} />
            </button>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium">
              {project.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="flex shrink-0 flex-wrap gap-5 text-sm font-medium md:pt-2">
            <ExtLink href={project.live}>Live demo</ExtLink>
            <ExtLink href={project.github}>Source code</ExtLink>
          </div>
        </div>

        <div
          id={panelId}
          inert={!open}
          className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${
            open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div className="grid gap-8 pt-6 xl:grid-cols-2">
              <div>
                <p className="text-sm text-muted">
                  {project.period}. {project.role}.
                </p>
                <dl className="mt-5 space-y-5">
                  {project.problem && (
                    <div>
                      <dt className="text-sm font-semibold text-accent-text">The problem</dt>
                      <dd className="mt-1 max-w-[56ch]">{project.problem}</dd>
                    </div>
                  )}
                  {project.contribution && (
                    <div>
                      <dt className="text-sm font-semibold text-accent-text">What I did</dt>
                      <dd className="mt-1 max-w-[56ch]">{project.contribution}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-sm font-semibold text-accent-text">Results</dt>
                    <dd>
                      <ul className="mt-2 max-w-[62ch] space-y-3">
                        {project.highlights.map((h) => (
                          <Dash key={h}>{h}</Dash>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
              <Screenshot id={project.id} name={project.name} />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Projects() {
  const [openId, setOpenId] = useState(config.projects[0]?.id ?? null);

  return (
    <Section id="projects" title="Projects" intro="Four apps I built and deployed. Open one to see the problem, my part and the results.">
      <ul>
        {config.projects.map((p) => (
          <ProjectRow
            key={p.id}
            project={p}
            open={openId === p.id}
            onToggle={() => setOpenId(openId === p.id ? null : p.id)}
          />
        ))}
      </ul>
    </Section>
  );
}
