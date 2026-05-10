import type { MetadataRoute } from "next";

import { LOCALES, localeUrl } from "@/lib/seo";

const ROUTES: { path: string; changeFrequency: "yearly" | "monthly" | "weekly"; priority: number }[] = [
  { path: "", changeFrequency: "yearly", priority: 1 },
  { path: "creations", changeFrequency: "monthly", priority: 0.8 },
  { path: "ateliers", changeFrequency: "weekly", priority: 0.5 },
  { path: "a-propos", changeFrequency: "weekly", priority: 0.5 },
  { path: "agenda", changeFrequency: "weekly", priority: 0.5 },
  { path: "recherches", changeFrequency: "monthly", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.flatMap(({ path, changeFrequency, priority }) =>
    LOCALES.map((locale) => ({
      url: localeUrl(locale, path),
      lastModified,
      changeFrequency,
      priority,
    }))
  );
}
