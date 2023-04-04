#!/bin/bash

IMAGE_NAME=webapp-nodejs
PORT_INT=5000
PORT_EXT=5000
HOST_IP_ADRESS=$(ip a | grep inet | grep "global dynamic" | awk '{print $2}' | cut -d'/' -f 1)

docker build . --tag $IMAGE_NAME
docker run -d --rm --name $IMAGE_NAME -p $PORT_EXT:$PORT_INT $IMAGE_NAME

echo && docker images && docker ps

echo
OUT_TITLE="Webapp is running and accesible from external host:"
OUT_MSG="http://$HOST_IP_ADRESS:$PORT_EXT"
echo -e "\e[32m$OUT_TITLE\e[0m"
echo -e "\e[32mhttp://$HOST_IP_ADRESS:$PORT_EXT\e[0m"
echo
