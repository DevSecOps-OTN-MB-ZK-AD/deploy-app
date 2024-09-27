FROM node:latest
COPY ./src /app
WORKDIR /app
RUN npm install
RUN ls -la /app 
EXPOSE 9090
CMD ["npm", "start"]
