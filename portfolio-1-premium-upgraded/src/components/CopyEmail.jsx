import { useEffect, useRef, useState } from 'react';

// Copies the email address. Falls back to selecting nothing (the mailto link beside it still works).
export default function CopyEmail({ email }) {
  const [state, setState] = useState('idle');
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setState('done');
    } catch {
      setState('failed');
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState('idle'), 2400);
  };

  return (
    <span className="inline-flex items-center gap-3">
      <button type="button" onClick={copy} className="btn-ghost btn-sm">
        Copy email
      </button>
      <span aria-live="polite" className="text-sm text-muted">
        {state === 'done' ? 'Copied' : state === 'failed' ? 'Copy failed. Use the link above.' : ''}
      </span>
    </span>
  );
}
