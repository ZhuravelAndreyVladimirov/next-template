import { MetadataRoute } from "next";

import { locales } from "@/i18n";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const sitemapApi =
  process.env.SITEMAP_ENDPOINT || `${siteUrl}/api/sitemap` || undefined;

type DynamicEntry = {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority?: number;
};

/**
 * Try to fetch dynamic URLs (e.g., from CMS/API). Expected shape:
 * [{ url: "/posts/slug", lastModified?: "...", changeFrequency?: "...", priority?: 0.5 }]
 */
async function loadDynamicEntries(): Promise<DynamicEntry[]> {
  if (!sitemapApi) return [];

  try {
    const res = await fetch(sitemapApi, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const entries = (await res.json()) as DynamicEntry[];
    return entries.filter((entry) => Boolean(entry.url));
  } catch (error) {
    console.warn("[sitemap] dynamic entries fetch failed", error);
    return [];
  }
}

/**
 * Generates sitemap.xml at build time.
 * Uses locales from `i18n` to list localized roots.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const changeFrequency = "weekly" as const;

  const dynamicEntries = await loadDynamicEntries();

  const localizedRoots = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified,
    changeFrequency,
    priority: 0.8,
  }));

  // Keep a generic root for backward compatibility.
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency,
      priority: 0.9,
    },
    ...localizedRoots,
    ...dynamicEntries.map((entry) => ({
      url: entry.url.startsWith("http") ? entry.url : `${siteUrl}${entry.url}`,
      lastModified: entry.lastModified ?? lastModified,
      changeFrequency: entry.changeFrequency ?? changeFrequency,
      priority: entry.priority ?? 0.6,
    })),
  ];
}
