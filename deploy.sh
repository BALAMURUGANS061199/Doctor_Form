#!/bin/bash
git pull origin main
docker-compose up -d
docker container ps
