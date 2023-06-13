# Use the Node.js LTS base image
FROM node:lts-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --only=production

# Copy the application files to the working directory
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port on which the server is listening
EXPOSE 8080

# Start the server
CMD ["npm", "start"]
