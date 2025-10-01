'use client';

import { createContext, useState } from 'react';

import type { Theme } from '@/helpers/theme';

type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};

const DEFAULT_THEME: ThemeContextProps = {
  theme: 'dark',
  toggleTheme: () => console.log('toggleTheme'),
};

const ThemeContext = createContext<ThemeContextProps>(DEFAULT_THEME);

export default function ThemeProvider(props: {
  children: React.ReactNode;
  defaultTheme: Theme;
}) {
  const [theme, setTheme] = useState<Theme>(props.defaultTheme ?? 'dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
