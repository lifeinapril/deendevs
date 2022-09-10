FROM node:12-alpine
WORKDIR /web
COPY ./package.json .
COPY . .
RUN npm i --legacy-peer-deps  --unsafe-perm
EXPOSE 3000
CMD [ "npm", "run", "start" ]