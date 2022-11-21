FROM node:16-alpine
# Create app directory
WORKDIR /app/frontend
# Install app dependencies
COPY package.json .
COPY yarn.lock .
COPY public ./public
COPY server.js .
RUN yarn
# Copy app source code
COPY build ./build
#Expose port and start application
EXPOSE 3000
CMD ["node", "server.js"]