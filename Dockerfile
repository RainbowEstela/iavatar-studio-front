
FROM node:20-alpine as build
WORKDIR /app/src
COPY package*.json ./
RUN npm ci
COPY . ./
#RUN npm run build
RUN npm run build -c production

FROM node:20-alpine
WORKDIR /usr/app
COPY --from=build /app/src/dist/iavatar-studio-front/server ./
CMD node server.mjs
EXPOSE 4000

