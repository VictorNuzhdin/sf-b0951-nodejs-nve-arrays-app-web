#!/bin/bash

IMAGE_NAME=webapp-nodejs

docker-compose down
docker stop $IMAGE_NAME
docker image rm $IMAGE_NAME

echo
OUT_TITLE="Container '$IMAGE_NAME' is stopped and Image '$IMAGE_NAME' is removed"
echo -e "\e[32m$OUT_TITLE\e[0m"
echo
