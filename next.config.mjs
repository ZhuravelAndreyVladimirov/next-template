/* eslint-env node */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Оптимизация пакетов для уменьшения bundle size
  experimental: {
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/hooks",
      "@mantine/form",
      "@mantine/modals",
      "@mantine/dropzone",
      "@tabler/icons-react",
    ],
  },

  // Оптимизация изображений
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
  },

  // Компрессия для уменьшения размера ответов
  compress: true,

  // Оптимизация production сборки
  swcMinify: true,
  productionBrowserSourceMaps: false,

  // Оптимизация компиляции
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Заголовки безопасности и производительности
  // Эти заголовки НЕ про кэширование, а про безопасность и оптимизацию:
  // - X-DNS-Prefetch-Control: ускоряет DNS-запросы для внешних ресурсов
  // - X-Frame-Options: защита от clickjacking атак
  // - X-Content-Type-Options: предотвращает MIME-sniffing атаки
  // - Referrer-Policy: контролирует передачу referrer информации
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ];
  },

  // Оптимизация webpack для уменьшения bundle size
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Оптимизация для клиентской сборки
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Выделяем vendor библиотеки в отдельный chunk
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // Выделяем Mantine в отдельный chunk
            mantine: {
              name: 'mantine',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]@mantine[\\/]/,
              priority: 30,
            },
            // Выделяем next-intl в отдельный chunk (интернационализация)
            nextIntl: {
              name: 'next-intl',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]next-intl[\\/]/,
              priority: 25,
            },
            // Выделяем Tabler Icons в отдельный chunk (иконки могут быть большими)
            tablerIcons: {
              name: 'tabler-icons',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]@tabler[\\/]icons-react[\\/]/,
              priority: 25,
            },
            // Выделяем axios в отдельный chunk (HTTP клиент)
            axios: {
              name: 'axios',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]axios[\\/]/,
              priority: 25,
            },
            // Выделяем zustand в отдельный chunk (state management)
            zustand: {
              name: 'zustand',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]zustand[\\/]/,
              priority: 25,
            },
            // Выделяем common код
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },

  sassOptions: {},
};

export default withNextIntl(nextConfig);
