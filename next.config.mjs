/* eslint-env node */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. ОСНОВНЫЕ ОПТИМИЗАЦИИ
  compress: true,
  productionBrowserSourceMaps: false,

  // 2. ЭКСПЕРИМЕНТАЛЬНЫЕ ОПТИМИЗАЦИИ (Next.js 16+)
  experimental: {
    // Автоматический tree-shaking для библиотек
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/hooks",
      "@mantine/form",
      "@mantine/modals",
      "@mantine/dropzone",
      "@tabler/icons-react",
      "lodash",
      "date-fns",
    ],

    // Улучшенная работа с чанками
    webpackBuildWorker: true,

  },

  // 3. WEBPACK КОНФИГ ДЛЯ ЧАНКОВ
  webpack: (config, { isServer, dev, buildId }) => {
    // Только для клиентской PRODUCTION сборки
    console.log('isServer', isServer);
    console.log('dev', dev);
    console.log('buildId', buildId);
    if (!isServer && !dev) {
      console.log(`🔧 Оптимизация чанков для сборки ${buildId}`);

      // Очищаем дефолтные настройки
      config.optimization.splitChunks = {
        chunks: "all",
        maxInitialRequests: 25,
        maxAsyncRequests: 25,
        minSize: 20000,
        cacheGroups: {
          // 3.1. ОЧЕНЬ большие библиотеки - отдельно
          mantine: {
            name: "mantine",
            test: /[\\/]node_modules[\\/]@mantine[\\/]/,
            chunks: "all",
            priority: 40,
            enforce: true,
            reuseExistingChunk: true,
          },

          // 3.2. Иконки - отдельно (часто большие)
          tablerIcons: {
            name: "tabler-icons",
            test: /[\\/]node_modules[\\/]@tabler[\\/]icons-react[\\/]/,
            chunks: "all",
            priority: 35,
            reuseExistingChunk: true,
          },

          // 3.3. Остальные node_modules - общий vendor
          vendors: {
            name: "vendors",
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
            priority: 30,
            reuseExistingChunk: true,
          },

          // 3.4. Общий код между страницами
          common: {
            name: "common",
            minChunks: 2,
            chunks: "all",
            priority: 20,
            reuseExistingChunk: true,
          },

          // 3.5. Runtime выносим отдельно
          runtime: {
            name: "runtime",
            chunks: "all",
            priority: 10,
            reuseExistingChunk: true,
          },
        },
      };

      // Оптимизация минификации
      config.optimization.minimizer = config.optimization.minimizer || [];
    }

    return config;
  },

  // 4. ИЗОБРАЖЕНИЯ
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
    dangerouslyAllowSVG: false,
  },

  // 5. КОМПИЛЯТОР
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"],
          }
        : false,
  },

  // 6. ЗАГОЛОВКИ БЕЗОПАСНОСТИ И ПРОИЗВОДИТЕЛЬНОСТИ
  async headers() {
    return [
      {
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // 7. ДОПОЛНИТЕЛЬНЫЕ ОПТИМИЗАЦИИ
  sassOptions: {},

  // 8. ВЫХОДНОЙ РЕЖИМ
  output: "standalone", // Улучшенная оптимизация для продакшена
};

// 9. ПЛАГИН ДЛЯ АНАЛИЗА БАНДЛА (опционально)
const withBundleAnalyzer =
  process.env.ANALYZE === "true"
    ? (
        await import("@next/bundle-analyzer")
      ).default({
        enabled: true,
      })
    : (config) => config;

export default withBundleAnalyzer(withNextIntl(nextConfig));
