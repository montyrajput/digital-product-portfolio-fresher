import { useState } from 'react';
import config from '../portfolio.config.js';

export default function SampleBanner() {
  const [hidden, setHidden] = useState(false);
  if (!config.sampleMode || hidden) return null;

  return (
    <div role="note" className="border-b border-line bg-surface text-sm text-muted">
      <div className="wrap flex items-center justify-between gap-4 py-2.5">
        <p>
          Sample content. Edit <code className="text-ink">src/portfolio.config.js</code>, then set{' '}
          <code className="text-ink">sampleMode</code> to <code className="text-ink">false</code> to remove this bar.
        </p>
        <button type="button" onClick={() => setHidden(true)} className="shrink-0 font-medium text-ink underline underline-offset-4">
          Dismiss
        </button>
      </div>
    </div>
  );
}
