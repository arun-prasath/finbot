#base image
FROM rasa/rasa:1.10.14

LABEL maintainer="arun_prasath@ymail.com"

ADD . /app/

RUN ["rasa", "train"]
CMD ["rasa", "run"]