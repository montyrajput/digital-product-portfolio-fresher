import config from '../portfolio.config.js';
import ExtLink from './ExtLink.jsx';

export default function Footer() {
  const { person } = config;
  return (
    <footer className="border-t border-line py-8 text-sm text-muted">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <p>
          &copy; {new Date().getFullYear()} {person.name}.
          {config.showCredit && ' Built with React and Tailwind CSS.'}
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <ExtLink href={person.github}>GitHub</ExtLink>
          <ExtLink href={person.linkedin}>LinkedIn</ExtLink>
          <a href={`mailto:${person.email}`} className="text-link">
            Email
          </a>
          <a href="#top" className="text-link">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
