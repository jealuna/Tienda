FROM node:12.14.1-alpine
RUN mkdir /app
COPY tienda-app/ /app/
WORKDIR /app
RUN yarn install
EXPOSE 3000
