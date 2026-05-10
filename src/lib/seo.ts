import type { Metadata } from "next";

export const SITE_URL = "https://www.nicolas-andry.be";
export const DEFAULT_LOCALE = "fr" as const;
export const LOCALES = ["fr", "en", "nl"] as const;

export type Locale = (typeof LOCALES)[number];

const HREFLANG: Record<Locale, string> = {
  fr: "fr-BE",
  en: "en",
  nl: "nl-BE",
};

const OG_LOCALE: Record<Locale, string> = {
  fr: "fr_BE",
  en: "en_US",
  nl: "nl_BE",
};

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

/**
 * Build a public URL path for a (locale, path) pair.
 * French is served at the root, other locales keep their /<locale> prefix.
 * Returns the path portion only (e.g. "/", "/a-propos", "/en/a-propos").
 * Accepts a plain string for `locale` and falls back to the default locale.
 */
export function localePath(locale: string, path = ""): string {
  const safeLocale: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const clean = path.replace(/^\/+|\/+$/g, "");
  const prefix = safeLocale === DEFAULT_LOCALE ? "" : `/${safeLocale}`;
  if (!clean) return prefix || "/";
  return `${prefix}/${clean}`;
}

/** Absolute URL variant of `localePath`. */
export function localeUrl(locale: string, path = ""): string {
  return `${SITE_URL}${localePath(locale, path)}`;
}

/**
 * Build canonical + hreflang alternates for a (locale, path) pair.
 * Use the same `path` for every locale; pass per-locale slugs only
 * when the path actually differs between languages.
 */
export function getAlternates(
  locale: Locale,
  path = "",
  pathByLocale?: Partial<Record<Locale, string>>
): NonNullable<Metadata["alternates"]> {
  const pathFor = (l: Locale) => pathByLocale?.[l] ?? path;

  const languages = LOCALES.reduce<Record<string, string>>((acc, l) => {
    acc[HREFLANG[l]] = localeUrl(l, pathFor(l));
    return acc;
  }, {});
  languages["x-default"] = localeUrl(DEFAULT_LOCALE, pathFor(DEFAULT_LOCALE));

  return {
    canonical: localeUrl(locale, path),
    languages,
  };
}

export const ogLocale = (locale: Locale) => OG_LOCALE[locale];
