# Random Web APP
Welcome to the setup guide for the Random Web APP. You can either use the official Docker image or set up the application manually by following the instructions below.

GITHUB REPO: [https://github.com/DevSecOps-OTN-MB-ZK-AD/deploy-app](https://github.com/DevSecOps-OTN-MB-ZK-AD/deploy-app)

## Using Official Docker Image
```
git clone https://github.com/DevSecOps-OTN-MB-ZK-AD/deploy-app.git
cd deploy-app
docker compose up -d
```
## Manual Setup (Bare metal)
### Clone the Repository
```
git clone https://github.com/DevSecOps-OTN-MB-ZK-AD/deploy-app.git
cd deploy-app/src
```

### Install Dependencies
```
npm install
```

### Start the Application
```
npm start
```

## Access the Application
Once the application is running, you can access it in your browser at:

[http://localhost:3000](http://localhost:3000)

Register a new account and navigate!