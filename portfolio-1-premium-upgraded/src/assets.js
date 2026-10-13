// Images you can add without touching any code:
//   src/assets/profile.(jpg|png|webp|avif)         your hero portrait
//   src/assets/projects/<project id>.(png|jpg|...)  one screenshot per project
// Vite bundles whatever exists. If a file is missing nothing is requested, so there are no broken links.
import placeholder from './assets/profile-placeholder.svg?url';

const photos = import.meta.glob('./assets/profile.{jpg,jpeg,png,webp,avif}', { eager: true, query: '?url', import: 'default' });
const shots = import.meta.glob('./assets/projects/*.{png,jpg,jpeg,webp,avif}', { eager: true, query: '?url', import: 'default' });

export const placeholderUrl = placeholder;
export const photoUrl = Object.values(photos)[0] ?? null;

export function screenshotFor(id) {
  const key = Object.keys(shots).find((p) => p.split('/').pop().replace(/\.[^.]+$/, '') === id);
  return key ? shots[key] : null;
}
