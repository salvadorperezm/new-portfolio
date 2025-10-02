'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import type { Theme } from '@/helpers/theme';

type ThemeContextProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export default function ThemeProvider(props: {
  children: React.ReactNode;
  defaultTheme: Theme;
}) {
  const [themeState, setThemeState] = useState<Theme>(props.defaultTheme);

  useEffect(() => {
    const storedTheme = (localStorage.getItem('theme') as Theme) || null;

    if (storedTheme) {
      setThemeState(storedTheme);
      document.documentElement.dataset.theme = storedTheme;
    } else {
      localStorage.setItem('theme', props.defaultTheme);
    }
  }, []);

  function setTheme(theme: Theme) {
    setThemeState(theme);
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('theme', theme);

    fetch(`/api/theme?value=${theme}`);
  }

  return (
    <ThemeContext.Provider value={{ theme: themeState, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }
  return context;
}
