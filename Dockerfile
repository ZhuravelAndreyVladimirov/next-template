FROM node:22 AS builder

WORKDIR /app

# 1. Копируем конфигурацию Yarn и зависимости
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

# 2. Устанавливаем зависимости (включая sharp)
RUN corepack enable && yarn install --immutable

# 3. Копируем исходный код и билдим
COPY . .
RUN yarn build

FROM node:22-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# 4. Устанавливаем системные зависимости для sharp
RUN apt-get update && apt-get install -y \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

# 5. Создаем пользователя
RUN groupadd -r nextjs && useradd -r -g nextjs nextjs

# 6. Копируем билд и зависимости
COPY --from=builder --chown=nextjs:nextjs /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/.next ./.next
COPY --from=builder --chown=nextjs:nextjs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nextjs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nextjs /app/.yarnrc.yml ./

USER nextjs

EXPOSE 3000

CMD ["yarn", "start"]
