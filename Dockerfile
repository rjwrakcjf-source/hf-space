# Multi-stage production build
FROM node:18-alpine AS base
RUN npm install -g pnpm@8.15.6

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-workspace.yaml ./
COPY apps/server/package.json ./apps/server/
COPY libs/*/package.json ./libs/
RUN pnpm install --frozen-lockfile

# Build stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build --filter=server --filter=web

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodeapp

COPY --from=builder --chown=nodeapp:nodejs /app/apps/server/dist ./apps/server/dist
COPY --from=builder --chown=nodeapp:nodejs /app/apps/web/dist ./apps/web/dist
COPY --from=builder /app/apps/server/package.json ./apps/server/package.json
COPY --from=builder /app/node_modules ./node_modules

USER nodeapp

EXPOSE 3000
CMD ["node", "apps/server/dist/index.js"]
