FROM ruby:2.6.1-alpine

RUN apk add --no-cache --update build-base \
                                linux-headers \
                                git \
                                postgresql-dev \
                                nodejs \
                                tzdata

ENV PATH /app/backend

RUN mkdir -p $PATH

WORKDIR $PATH

COPY Gemfile $PATH/Gemfile
COPY Gemfile.lock $PATH/Gemfile.lock
RUN bundle install

COPY . $PATH