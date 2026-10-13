import { useState } from 'react';
import config from '../portfolio.config.js';
import { photoUrl, placeholderUrl } from '../assets.js';

// Profile photo for the hero. No card, border, frame or shadow: only a soft fade at the
// bottom edge so the photo settles into the page background.
// Add your photo as src/assets/profile.jpg. Until then a neutral placeholder is shown.
export default function HeroPhoto() {
  const { person, sampleMode } = config;
  const [failed, setFailed] = useState(false);
  const usePlaceholder = !photoUrl || failed;

  return (
    <figure className="m-0 mx-auto w-full max-w-[18rem] sm:max-w-[22rem] lg:ml-auto lg:mr-0 lg:max-w-[28rem]">
      <img
        src={usePlaceholder ? placeholderUrl : photoUrl}
        alt={usePlaceholder ? '' : person.photoAlt}
        width="800"
        height="1000"
        fetchPriority="high"
        decoding="async"
        onError={() => setFailed(true)}
        className="settle block aspect-[4/5] h-auto w-full 
        object-cover object-top [mask-image:linear-gradient(to_bottom,#000_80%,transparent)]"
        style={{ '--d': '300ms' }}
      />
      {usePlaceholder && sampleMode && (
        <figcaption className="mt-3 text-center text-xs text-muted">
          Placeholder. Add your photo as <code className="text-ink">src/assets/profile.png</code>
        </figcaption>
      )}
    </figure>
  );
}
