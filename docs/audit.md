# Аудит шаблона Next.js

## P1 — важные

- SEO/a11y: нет базовых мета/OG/robots; `LoadTestPage` перегружен контентом и логами.
- DX: нет явного Prettier-конфига; в `tsconfig` лишние `allowJs`, `emitDecoratorMetadata`, `experimentalDecorators`, `skipLibCheck: true` скрывает проблемы типов.

## P2 — желательные

- Документация: README дефолтный; нет описания стека, команд, env (`NEXT_PUBLIC_BASE_URL` и др.), деплоя, i18n.
- Env-шаблон: нет/пустой `.env.example`.
- Ошибки/логирование: нет error boundary, Sentry/аналитики, health-check.
- UI/тема: тема Mantine почти пустая, нет токенов/темной схемы, нет витринной страницы.
- Данные/стейт: стор `user` без примеров загрузки/refresh, API без перехватчиков.
- Скрипты: нет `yarn format`, `yarn test:watch`/`coverage`, `yarn lint:fix`; Turbopack без опции fallback.

## Рекомендованные next steps

1. Починить зависимости: удалить или добавить `ks-react-cli`, `lodash`, `date-fns`; пересмотреть `optimizePackageImports`.
2. Добавить контент и мета на главную; убрать избыточный кэш/логи, настроить базовые заголовки безопасности и robots/OG.
3. Качество: добавить базовые e2e (Playwright) и интеграционные тесты; при необходимости расширить pre-push (lint + typecheck + targeted tests).
4. Документация и env: обновить README, добавить `.env.example` с обязательными ключами.
5. Storybook/a11y: включить строгий a11y (`test: 'error'`), проверить сборку.
6. Docker/CI: использовать `yarn start` или `node .next/standalone/server.js`, кешировать Yarn/Next в CI, добавить форматирование и type-check шаги.
