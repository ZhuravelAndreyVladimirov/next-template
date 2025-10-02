FROM node:22 AS builder

WORKDIR /app

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

# Явно указываем production для builder стадии
ENV NODE_ENV=production

# Копируем только нужные файлы для лучшего кэширования
COPY package.json yarn.lock ./
RUN corepack enable && yarn install --immutable --production=false

COPY . .
RUN yarn build

FROM gcr.io/distroless/nodejs22-debian12 AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Создаем пользователя для безопасности
RUN chown -R 1000:1000 /app
USER 1000

COPY --from=builder --chown=1000:1000 /app/public ./public
COPY --from=builder --chown=1000:1000 /app/.next/standalone ./
COPY --from=builder --chown=1000:1000 /app/.next/static ./.next/static

EXPOSE 3000

CMD ["./server.js"]
