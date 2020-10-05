#base image
FROM alpine:3.9
FROM node:12.0

LABEL maintainer="arun_prasath@ymail.com"

ENV APP /srv/app/chatbot-rasa-action-server/

RUN mkdir -p ${APP}
WORKDIR ${APP}

#install dependencies
COPY package*.json ${APP}
RUN npm install

ENV PATH "$PATH:$APP/node_modules/.bin/"

#start server
CMD ["npm","start"]