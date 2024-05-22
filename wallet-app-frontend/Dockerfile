FROM node:18-alpine

WORKDIR /wallet

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]