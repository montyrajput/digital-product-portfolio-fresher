import { useCallback, useState } from 'react';

const COLORS = { dark: '#0B1020', light: '#F6F7FD' };

export function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');

  const toggle = useCallback(() => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage can be blocked; the toggle still works for this visit */
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', COLORS[next]);
    setTheme(next);
  }, []);

  return { theme, toggle };
}
