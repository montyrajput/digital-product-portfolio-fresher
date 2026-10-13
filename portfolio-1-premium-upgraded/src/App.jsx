import { useEffect } from 'react';
import config from './portfolio.config.js';
import SampleBanner from './components/SampleBanner.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => {
    document.title = config.site.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', config.site.description);
    const set = (sel, v) => document.querySelector(sel)?.setAttribute('content', v);
    set('meta[property="og:title"]', config.site.title);
    set('meta[property="og:description"]', config.site.description);
    set('meta[name="twitter:title"]', config.site.title);
    set('meta[name="twitter:description"]', config.site.description);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <SampleBanner />
      <Nav />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
