# Build
FROM node:latest as build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
RUN pnpm -g install pnpm
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

# Production NGINX
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
