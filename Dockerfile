FROM node:12-alpine
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production
COPY . /usr/src/app
EXPOSE 3000
RUN ls
CMD [ "node", "src/app.js" ]
