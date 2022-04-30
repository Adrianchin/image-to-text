FROM node:16.14.0-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

COPY . .

RUN npm install --production

EXPOSE 3001

CMD ["npm", "start"]