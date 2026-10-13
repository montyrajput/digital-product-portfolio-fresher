import Reveal from './Reveal.jsx';

// Shared layout: the heading sits on the left and stays in view on wide screens,
// the content sits on the right. On phones it simply stacks.
export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-20 md:py-28">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2 id={`${id}-title`} className="text-4xl font-bold md:text-5xl">
              {title}
            </h2>
            {intro && <p className="mt-4 max-w-[32ch] text-muted">{intro}</p>}
          </div>
        </div>
        <Reveal className="lg:col-span-8">{children}</Reveal>
      </div>
    </section>
  );
}
