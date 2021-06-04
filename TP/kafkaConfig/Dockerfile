FROM node:10-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN tsc


CMD ["node", "main.js"]