# Random Web APP
Welcome to the setup guide for the Random Web APP. You can either use the official Docker image or set up the application manually by following the instructions below.

## TP2 LINKS
GITHUB REPO: [https://github.com/DevSecOps-OTN-MB-ZK-AD/deploy-app](https://github.com/DevSecOps-OTN-MB-ZK-AD/deploy-app)

TP2 REPORT: [https://drive.google.com/file/d/1q7eh7w8S-4Kp4SJKpUPTS5veWHluz5PH/view?usp=sharing](https://drive.google.com/file/d/1q7eh7w8S-4Kp4SJKpUPTS5veWHluz5PH/view?usp=sharing)

DEMO OF THE APP: [https://tp2-webapp-log8100.thankfulplant-66b03f1b.canadaeast.azurecontainerapps.io](https://tp2-webapp-log8100.thankfulplant-66b03f1b.canadaeast.azurecontainerapps.io)

## Deploy Using Official Docker Image
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
