FROM node:22 AS builder

WORKDIR /app

# Копируем файлы зависимостей
COPY package.json yarn.lock ./
RUN corepack enable && yarn install --immutable

# Копируем исходный код и билдим
COPY . .
RUN yarn build

FROM node:22-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Устанавливаем системные зависимости для sharp
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Устанавливаем sharp отдельно (если нужно)
RUN corepack enable && yarn global add sharp

# Создаем пользователя
RUN groupadd -r nextjs && useradd -r -g nextjs nextjs

# Копируем билд
COPY --from=builder --chown=nextjs:nextjs /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/.next ./.next
COPY --from=builder --chown=nextjs:nextjs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nextjs /app/package.json ./package.json

USER nextjs

EXPOSE 3000

CMD ["yarn", "start"]
