FROM node:16

WORKDIR /app

COPY *package.json ./

RUN npm i

COPY . .

EXPOSE 8080

ENTRYPOINT [ "node", "index.js" ]