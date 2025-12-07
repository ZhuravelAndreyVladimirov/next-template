import { PreviewScreen } from "@/screens";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const dynamic = "force-static";

export default function Home() {
  return <PreviewScreen />;
}



export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "preview" });
  const title = t("hero.title");
  const description = t("hero.subtitle");

  return {
    title,
    description,
    alternates: { canonical: "/" },
    openGraph: {
      title,
      description,
      url: "/",
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.svg"],
    },
  };
}
