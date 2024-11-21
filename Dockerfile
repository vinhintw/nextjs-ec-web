FROM imbios/bun-node:18-slim AS deps
ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get -y update && \
  apt-get install -yq openssl git ca-certificates tzdata && \
  ln -fs /usr/share/zoneinfo/Asia/Taipei /etc/localtime && \
  dpkg-reconfigure -f noninteractive tzdata
WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Build the app
FROM deps AS builder
WORKDIR /app
COPY . .
RUN bun run build

FROM node:18-slim AS runner
WORKDIR /app

# ARG CONFIG_FILE
# COPY $CONFIG_FILE /app/.env
ENV NODE_ENV production


COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
# Set correct permissions
RUN chmod -R 777 .next/cache && \
    chmod -R 777 public

EXPOSE 3000
ENV PORT 3000
# ENV HOSTNAME=0.0.0.0

CMD ["npm", "run", "start"]