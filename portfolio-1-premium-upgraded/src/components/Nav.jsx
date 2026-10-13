import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll } from 'framer-motion';
import config from '../portfolio.config.js';
import ThemeToggle from './ThemeToggle.jsx';

const LINKS = [
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const { person } = config;
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const menuButton = useRef(null);
  const closeButton = useRef(null);

  // Highlight the section that is in the reading zone.
  useEffect(() => {
    const ids = ['top', ...LINKS.map((l) => l.id)];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id === 'top' ? '' : e.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Mobile menu: lock page scroll, close on Escape, move focus in and back out.
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;
      // Keep Tab and Shift+Tab inside the open menu.
      const items = document.querySelectorAll('#mobile-menu a[href], #mobile-menu button');
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    const button = menuButton.current;
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
      button?.focus();
    };
  }, [open]);

  const monogram = (
    <a href="#top" className="font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight">
      {person.initials}
      <span className="sr-only">, {person.name}, back to top</span>
    </a>
  );

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-[var(--nav-bg)] backdrop-blur-md">
        <div className="wrap flex h-16 items-center justify-between gap-4">
          {monogram}

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`border-b-2 py-1 text-sm font-medium transition-colors hover:text-ink ${
                  active === l.id ? 'border-accent text-ink' : 'border-transparent text-muted'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href={person.resume} download className="btn-ghost btn-sm hidden sm:inline-flex">
              Resume
            </a>
            <button
              ref={menuButton}
              type="button"
              className="btn-ghost btn-sm md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              Menu
            </button>
          </div>
        </div>
        <motion.div
          aria-hidden="true"
          style={{ scaleX: reduceMotion ? 0 : scrollYProgress }}
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-accent to-accent-2"
        />
      </header>

      {open && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-[60] flex flex-col bg-bg md:hidden">
          <div className="wrap flex h-16 items-center justify-between">
            {monogram}
            <button ref={closeButton} type="button" className="btn-ghost btn-sm" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <nav aria-label="Mobile" className="wrap flex flex-1 flex-col justify-center gap-2 pb-16">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight"
              >
                {l.label}
              </a>
            ))}
            <a href={person.resume} download className="btn-primary mt-8 self-start">
              Download resume
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
