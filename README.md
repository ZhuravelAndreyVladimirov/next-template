# Next.js template

Готовый шаблон на Next.js 16 + React 19 c Mantine UI, next-intl, Yarn 4 (PnP) и настроенными линтерами/форматированием, Storybook и Docker.

## Стек
- Next.js 16 (Turbopack в dev, standalone build)
- React 19, TypeScript 5.6
- Mantine 8, next-intl
- Jest + Testing Library, Storybook 10
- ESLint 9 + Prettier (css-order), Husky + lint-staged
- Dockerfile для прод-образа, GitHub Actions для CI/CD и публикации в GHCR

## Требования
- Node 22.x (как в CI), Corepack включен
- Yarn 4 (pnp)

## Быстрый старт
```bash
corepack enable
yarn install --immutable
cp .env.example .env.local   # заполняем переменные
yarn dev                     # http://localhost:3000
```

## Переменные окружения
| Ключ | Где используется | Назначение / значения по умолчанию |
| --- | --- | --- |
| `NEXT_PUBLIC_BASE_URL` | `src/api/API/API.ts` | Базовый URL для запросов. По умолчанию `"/api"`. |
| `ANALYZE` | `next.config.mjs` | `true` — включает `@next/bundle-analyzer` при сборке. |
| `NODE_ENV` | `next.config.mjs`, Docker run | `production` убирает консольные логи (кроме warn/error). |
| `NEXT_PUBLIC_BUILD_ID` | deploy job (Docker run) | Пробрасывается в контейнер для трейсинга билда. |
| `BUILD_VERSION` | deploy job (Docker run) | Тег билда/коммита внутри контейнера. |
| `SERVER_HOST` | GitHub Actions secret | SSH-хост прод-сервера. |
| `SERVER_USERNAME` | GitHub Actions secret | SSH-пользователь. |
| `SERVER_SSH_KEY` | GitHub Actions secret | Приватный ключ для деплоя. |
| `GITHUB_TOKEN` | GitHub Actions secret | Для логина в GHCR в CI/CD. |
| `GITHUB_ACTOR` / `github.sha` | GitHub Actions контекст | Автоматически подставляется для тегов образов и переменных билда. |

> Добавляйте кастомные публичные переменные только с префиксом `NEXT_PUBLIC_`, чтобы Next.js мог их отдать на клиент.

## Скрипты
- `yarn dev` — dev-сервер (Turbopack).
- `yarn build` / `yarn start` — сборка и запуск прод-стэндалон-сервера.
- `yarn lint` — ESLint.
- `yarn format:check` — проверка Prettier.
- `yarn typecheck` — строгая проверка типов.
- `yarn test` — Jest.
- `yarn storybook` / `yarn build-storybook` — Storybook в dev/production.

## Структура
- `src/app` — роутинг Next.js с локалями (`[locale]`).
- `src/components` — UI-компоненты 
- `src/extends` — Mantine-расширения.
- `src/api` — конфигурация Axios (`API`).
- `src/i18n.ts` — next-intl.
- `docs/` — аудит, шаблоны PR.

## CI/CD
- `.github/workflows/deploy.yml`: линт, формат, typecheck, build, тесты; сборка Docker-образа и публикация в GHCR, далее деплой по SSH на прод.
- Образы тегируются `main` и `github.sha`; в рантайм передаются `NEXT_PUBLIC_BUILD_ID` и `BUILD_VERSION`.

### GitHub Actions: secrets и vars
- Secrets (обязательные): `SERVER_HOST`, `SERVER_USERNAME`, `SERVER_SSH_KEY`, `GITHUB_TOKEN` (выдаётся GitHub автоматически для pipeline), опционально свой токен для GHCR.
- Repository/Environment Vars (не чувствительные, можно задать в Actions > Variables):
  - `REGISTRY_URL` — по умолчанию `ghcr.io`, задайте если используете другой реестр.
  - `CONTAINER_NAME` — имя контейнера (по умолчанию `next-template` в скрипте деплоя).
  - `IMAGE_NAME_MAIN` / `IMAGE_NAME_SHA` — если хотите переопределить теги/репозиторий образа.
Если не задавать Vars, используются значения из workflow/скрипта.

## Форматирование и качество
- Husky + lint-staged форматируют/линтят изменённые файлы перед коммитом.
- Рекомендуемые команды перед PR: `yarn format:check`, `yarn lint`, `yarn typecheck`, `yarn test`.

## Docker
```bash
docker build -t next-template .
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_BASE_URL=https://api.example.com \
  next-template
```

## i18n
Локали подключены через `next-intl` (см. `src/i18n.ts`), URL содержит `[locale]`.
