FROM node:22 AS builder

WORKDIR /app

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

ENV NEXT_PUBLIC_BASE_URL=/api
ENV BASE_URL=/api

RUN corepack enable
RUN yarn install --immutable
RUN yarn build

FROM gcr.io/distroless/nodejs22-debian12 AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_SHARP_PATH=/app/node_modules/sharp

ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/public ./public

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["./server.js"]
