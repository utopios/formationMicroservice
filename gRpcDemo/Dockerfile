FROM node:10-alpine

RUN apk update

WORKDIR /app

COPY package*.json .
COPY tsconfig.json .

COPY . .

RUN npm install
RUN npm install typescript

EXPOSE ${PORT}

CMD ["npm", "start"]