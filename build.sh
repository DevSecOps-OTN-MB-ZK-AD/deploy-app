#!/bin/bash
cont=log8100-tp2-webapp
docker build --progress plain -t $cont .
./deploy.sh
sleep 5
docker logs $cont