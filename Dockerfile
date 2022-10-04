FROM node:12.16.1
WORKDIR /usr/app

COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000

CMD ["npm","start"]