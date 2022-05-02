FROM node:16.14.0-alpine as builder

COPY package.json package-lock.json ./

WORKDIR /app

RUN npm install

ENV REACT_APP_SERVER_URL=http://35.233.167.60:3001

COPY . .

RUN npm run build

#!/bin/sh

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

## Remove default nginx index page
RUN rm -rf ./*

# Copy from the stage 1
COPY --from=builder /app/build .

#expose port 3000 with 80 being default from nginx, not needed if explicitly done in deployment
EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]