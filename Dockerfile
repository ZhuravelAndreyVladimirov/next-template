FROM node:22 AS builder

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml ./

RUN corepack enable && corepack prepare yarn@4.6.0 --activate && yarn install --immutable

COPY . .
RUN yarn build

FROM node:22-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN apt-get update && apt-get install -y \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

RUN groupadd -r nextjs && useradd -r -g nextjs nextjs

RUN corepack enable && corepack prepare yarn@4.6.0 --activate

# Создаем директории для кэша Corepack и Yarn, даем права пользователю nextjs
RUN mkdir -p /home/nextjs/.cache/node/corepack && chown -R nextjs:nextjs /home/nextjs/.cache
RUN mkdir -p /app/.yarn && chown -R nextjs:nextjs /app

COPY --from=builder --chown=nextjs:nextjs /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/.next ./.next
COPY --from=builder --chown=nextjs:nextjs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nextjs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nextjs /app/yarn.lock ./yarn.lock

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]