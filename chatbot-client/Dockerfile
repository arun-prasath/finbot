FROM node:12.0

LABEL maintainer="arun_prasath@ymail.com"
ENV UIAPP /srv/app/fin-chatbot-client/

RUN mkdir -p ${UIAPP}
WORKDIR ${UIAPP}

RUN npm install -g serve

#install dependencies
COPY package*.json ${UIAPP}
COPY . .
RUN npm install

ENV PATH "$PATH:$UIAPP/node_modules/.bin/"

#use npm start for development & npm build for production
CMD ["npm","run","build"]

FROM nginx:1.17-alpine
RUN apk --no-cache add curl
RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
    chmod +x envsubst && \
    mv envsubst /usr/local/bin
COPY ./nginx.config /etc/nginx/nginx.template
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
COPY --from=builder /srv/app/fin-chatbot-client/build /usr/share/nginx/html