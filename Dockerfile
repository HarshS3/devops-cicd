FROM node:20-alpine

WORKDIR /app

# Copy dependency definition and install
COPY package*.json ./
RUN npm install --omit=dev

# Copy application source code
COPY . .

# Expose app port
EXPOSE 8080

# Run the simple web server
CMD ["node", "server.js"]
