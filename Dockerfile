FROM node:18

RUN apt-get update && apt-get install -y \
    build-essential \
    libxml2-dev \
    libxslt1-dev \
    && rm -rf /var/lib/apt/lists/*

COPY ./src /app
WORKDIR /app

RUN npm install

RUN ls -la /app 

ENV AZURE_POSTGRESQL_USER=log8100
ENV AZURE_POSTGRESQL_HOST=log8100-tp2-db.postgres.database.azure.com
ENV AZURE_POSTGRESQL_DATABASE=postgres
ENV AZURE_POSTGRESQL_PASSWORD=devsecopsTp2
ENV AZURE_POSTGRESQL_PORT=5432

EXPOSE 9090

CMD ["npm", "start"]
