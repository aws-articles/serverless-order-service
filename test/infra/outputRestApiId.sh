#!/bin/sh

aws apigateway get-rest-apis \
--query "items[?name=='orders-api'].id" \
--output text --region us-east-1 \
--endpoint-url=http://localhost:4567 > rest_api_id