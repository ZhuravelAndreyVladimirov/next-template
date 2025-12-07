import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['ru', 'en'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  // Await the requestLocale to handle asynchronous operations
  let locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'ru'; // Default locale
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
