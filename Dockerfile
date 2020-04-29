FROM node:12-slim

# Create app directory
WORKDIR /home/logo/

# Install app dependencies
RUN npm install -g serverless

# Bundle app source
COPY . .
