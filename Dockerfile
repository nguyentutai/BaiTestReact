# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

# Install system dependencies
RUN apk add --no-cache python3 g++ make

# Copy package.json and package-lock.json (or yarn.lock) first to leverage Docker's cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source files into the image
COPY . .

# Adjust permissions for /app directory
RUN chown -R node:node /app

# Run the application as a non-root user
USER node

# Expose the port that the application listens on
EXPOSE 8000

# Run the application
CMD ["npm", "run", "dev"]
