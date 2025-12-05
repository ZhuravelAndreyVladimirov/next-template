import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('common');
  
  return (
    <div>
      <h1>404</h1>
      <p>{t('error') || 'Page not found'}</p>
    </div>
  );
}
