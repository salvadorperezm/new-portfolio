import 'server-only';

import type { Locale } from '@/helpers/localization';

const DICTIONARY_KEY_TO_IMPORT_MAP: Record<
  Locale,
  () => Promise<Record<string, string>>
> = {
  en: () =>
    import('../utils/dictionaries/en.json').then((module) => module.default),
  es: () =>
    import('../utils/dictionaries/es.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  DICTIONARY_KEY_TO_IMPORT_MAP[locale]?.() ?? DICTIONARY_KEY_TO_IMPORT_MAP.en();
