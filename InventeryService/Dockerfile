FROM node:10-alpine

RUN apk update

WORKDIR /app

COPY package*.json .
COPY tsconfig.json .

COPY src /app/src
COPY src/sharedrepos /app/src/dist 
RUN npm install
RUN npm install typescript
ENV PORT 8080
EXPOSE ${PORT}

CMD ["npm", "start"]