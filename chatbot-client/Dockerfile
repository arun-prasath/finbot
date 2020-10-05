FROM node:12.0

LABEL maintainer="arun_prasath@ymail.com"
ENV UIAPP /srv/app/fin-chatbot-client/

RUN mkdir -p ${UIAPP}
WORKDIR ${UIAPP}

#install dependencies
COPY package*.json ${UIAPP}
RUN npm install

ENV PATH "$PATH:$UIAPP/node_modules/.bin/"

CMD ["npm","run","start"]