# Docker file for Albums App 
FROM node:16
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install
RUN ls /usr/src/app
RUN ls /usr/src/app/public
EXPOSE 3000
CMD npm start