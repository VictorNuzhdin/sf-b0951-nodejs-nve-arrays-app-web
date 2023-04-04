## Build your Node image | Docker Docs
## https://docs.docker.com/language/nodejs/build-images/
##
# syntax=docker/dockerfile:1
FROM node:18-alpine
ENV NODE_ENV=production

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy and install dependencies configuration
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --omit=dev

# Copy app source
COPY ./src/* .

# Open tcp port to outside
EXPOSE 5000

# Run node app
CMD [ "node", "server.js" ]
