FROM node:16.14.0-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

COPY . .

RUN npm install --production

CMD ["npm", "start"]