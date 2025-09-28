'use client';

import type { ChangeEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { i18n, type Locale } from '@/helpers/localization';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const redirectPathname = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const getCurrentLocaleFromPath = () => {
    const segments = pathname.split('/');
    return segments[1];
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    router.replace(redirectPathname(e.target.value));
  };

  return (
    <select onChange={handleChange} defaultValue={getCurrentLocaleFromPath()}>
      {i18n.locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
