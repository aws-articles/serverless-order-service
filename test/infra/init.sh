#!/bin/sh

./createBucket.sh
./package.sh
./deploy.sh
./outputRestApiId.sh