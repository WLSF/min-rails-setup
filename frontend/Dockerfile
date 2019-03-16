FROM node:10-alpine
RUN mkdir -p /app/frontend
WORKDIR /app/frontend
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /app/frontend/package.json
RUN npm install