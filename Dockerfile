FROM node:25-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 80

CMD ["node", "server.js"]