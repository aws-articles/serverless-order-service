<h3>Serverless Order Service</h3>

Serverless is a paradigm which is built on top of following tenets -
1. I don't have to provision and manage servers
2. I don't have to pay for being idol
3. I pay only the requests served
4. Disaster recovery and High availability is built into the system

*serverless-order-service* is the backing repository for the my article series on serverless which includes developing a serverless application, testing (or integration testing) a serverless application and finally deploying a serverless application.

<h3>AWS Services leveraged</h3>

serverless-order-service includes the following serverless components -

- AWS Lambda
- AWS API Gateway
- AWS DynamoDB

<h3>Tech Stack</h3>

serverless-order-service includes the following technology -

- Typescript for building AWS Lambda
- Localstack for integration testing
- CDK (Cloud Development Kit) for building infra

<h3>Command Reference</h3>

Following are some useful commands - 

- **Building the application**
  <br> npm run build </br>

- **Runnning the tests**
  <br> npm t </br>

- **Runnning the infra tests**
  <br> cd infra/ </br>
  npm t

- **Deploying the application**
  <br> cd infra/ </br>
  cdk bootstrap 
  <br> cdk deploy </br>
