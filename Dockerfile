FROM node:latest AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --prod

FROM nginx:latest

COPY --from=builder /app/dist/z-quizz /usr/share/nginx/html
