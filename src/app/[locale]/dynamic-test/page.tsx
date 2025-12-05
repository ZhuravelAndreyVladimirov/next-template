import { LoadTestPage } from "@/screens";
import { locales } from "@/i18n";

// Принудительная динамическая генерация на каждом запросе
export const dynamic = 'force-dynamic';

// Разрешить динамическую генерацию для любых локалей
export const dynamicParams = true;

// Генерировать статические страницы для всех локалей во время билда (но они будут пересобираться динамически)
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function DynamicTestPage() {
  return <LoadTestPage />;
}
