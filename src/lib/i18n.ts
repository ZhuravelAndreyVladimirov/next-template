import { useLocale, useTranslations } from 'next-intl';
import { locales, type Locale } from '@/i18n';

/**
 * Hook для получения текущей локали
 * @example
 * const locale = useCurrentLocale();
 */
export function useCurrentLocale(): Locale {
  return useLocale() as Locale;
}

/**
 * Hook для получения переводов
 * @example
 * const t = useI18n();
 * <h1>{t('common.welcome')}</h1>
 */
export function useI18n(namespace?: string) {
  return useTranslations(namespace);
}

/**
 * Получить все доступные локали
 */
export function getLocales(): readonly Locale[] {
  return locales;
}
