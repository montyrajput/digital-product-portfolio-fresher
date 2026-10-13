import { useEffect, useRef, useState } from 'react';
import config from '../portfolio.config.js';

// A link that still contains "your-" in its address is a placeholder.
export const isPlaceholder = (url = '') => /your-/i.test(url);

// External link. Real links open in a new tab.
// Placeholder links never navigate to a made-up address:
//   sampleMode on  -> shown as a button that says "Sample link" when clicked
//   sampleMode off -> hidden, so a published site never has a dead link
export default function ExtLink({ href, children, className = 'text-link' }) {
  const [note, setNote] = useState(false);
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);

  if (!href) return null;

  if (isPlaceholder(href)) {
    if (!config.sampleMode) return null;
    return (
      <span className="inline-flex items-center gap-2">
        <button
          type="button"
          className={className}
          title="Sample link. Replace it in src/portfolio.config.js"
          onClick={() => {
            setNote(true);
            clearTimeout(timer.current);
            timer.current = setTimeout(() => setNote(false), 2600);
          }}
        >
          {children}
        </button>
        <span aria-live="polite" className="text-xs text-muted">
          {note ? 'Sample link' : ''}
        </span>
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
