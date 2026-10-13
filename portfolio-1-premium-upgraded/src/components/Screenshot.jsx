import { useState } from 'react';
import config from '../portfolio.config.js';
import { screenshotFor } from '../assets.js';

// Project screenshot. Add src/assets/projects/<project id>.png and it appears here.
// No file: sample mode shows a labelled empty slot, a published site shows nothing.
export default function Screenshot({ id, name }) {
  const [failed, setFailed] = useState(false);
  const src = screenshotFor(id);
  if (!src || failed) {
    if (!config.sampleMode) return null;
    return (
      <div className="grid aspect-[16/10] w-full place-items-center rounded-lg border border-dashed border-line-strong p-4 text-center text-sm text-muted">
        <span>
          Screenshot slot. Add <code className="text-ink">src/assets/projects/{id}.png</code>
        </span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={`Screenshot of ${name}`}
      width="1280"
      height="800"
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="aspect-[16/10] w-full rounded-lg border border-line object-cover object-top"
    />
  );
}
