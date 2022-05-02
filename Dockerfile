FROM node:16.14.0-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

COPY . .

RUN npm install -g serve

EXPOSE 3000

CMD ["npm", "run", "serve"]