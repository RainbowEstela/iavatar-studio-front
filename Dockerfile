
FROM node:20-alpine as build
WORKDIR /app/src
COPY package*.json ./
RUN npm ci
RUN npm install
COPY . ./
#RUN npm run build
RUN npm run build -c production

FROM node:20-alpine
WORKDIR /usr/app
COPY --from=build /app/src/dist/iavatar-studio-front ./
CMD node server/server.mjs
EXPOSE 4000

