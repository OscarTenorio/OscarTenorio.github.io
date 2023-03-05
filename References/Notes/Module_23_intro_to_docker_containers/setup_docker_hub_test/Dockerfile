FROM node:slim

LABEL oscar otenorio90@gmail.com

WORKDIR /app

COPY index.js /app/index.js
COPY package.json /app/package.json
RUN npm install
EXPOSE 3000
ENTRYPOINT node index.js
