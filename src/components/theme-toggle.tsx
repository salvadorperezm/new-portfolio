'use client';

import { useTheme } from '@/context/theme-context';

import { MoonIcon, SunIcon } from '@/components/icons';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </div>
  );
}
