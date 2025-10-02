FROM node:22 AS builder

WORKDIR /app

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

COPY package.json yarn.lock ./
RUN corepack enable && yarn install --immutable --production=false

COPY . .
RUN yarn build

FROM node:22-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Создаем пользователя и меняем права
RUN groupadd -r nextjs && useradd -r -g nextjs nextjs
RUN chown -R nextjs:nextjs /app
USER nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["./server.js"]
