FROM node:10-alpine

WORKDIR /app

COPY . /app/src

RUN npm install

RUN npm build


CMD ["node", "dist/main.js"]