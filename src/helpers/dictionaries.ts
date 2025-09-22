import "server-only";

import type { Locale } from "@/helpers/localization";

// TODO: maybe there's a better way to type this Record as its values are promises
const DICTIONARY_KEY_TO_IMPORT_MAP: Record<Locale, Function> = {
  en: () => import("../utils/dictionaries/en.json").then(module => module.default),
  es: () => import("../utils/dictionaries/es.json").then(module => module.default),
}

export const getDictionary = async (locale: Locale) =>
  DICTIONARY_KEY_TO_IMPORT_MAP[locale]?.() ?? DICTIONARY_KEY_TO_IMPORT_MAP.en();