import { LoadTestPage } from "@/screens";
import { locales } from "@/i18n";

// Принудительная статическая генерация во время билда
export const dynamic = 'force-static';

// Запретить динамическую генерацию для непредгенерированных локалей
export const dynamicParams = false;

// Генерировать статические страницы для всех локалей во время билда
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function StaticTestPage() {
  return <LoadTestPage />;
}
