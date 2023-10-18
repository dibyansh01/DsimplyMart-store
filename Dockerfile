FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./
COPY .env /usr/src/app/.env
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
