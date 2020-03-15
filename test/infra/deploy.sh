#!/bin/sh

aws cloudformation deploy \
--template-file template.yaml \
--stack-name order-service-stack \
--region us-east-1 \
--capabilities CAPABILITY_IAM  \
--endpoint-url http://localhost:4581

echo 'aws cloudformation deploy executed against localstack'