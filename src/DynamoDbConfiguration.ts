import {DynamoDB} from "aws-sdk"

const executionEnvironment = () => {
    const defaultExecutionEnvironment = "local";
    return process.env.ExecutionEnvironment || defaultExecutionEnvironment;
};

const isExecutionEnvironmentLocal = () => executionEnvironment() === "local";

export const dynamoDbClient = () => {
    if (isExecutionEnvironmentLocal()) {
        const dynamoHost = process.env.LOCALSTACK_HOSTNAME || "localhost";
        return new DynamoDB({
            "region": "us-east-1",
            "endpoint":`http://${dynamoHost}:4569`
        });
    } else {
        return new DynamoDB({
            "region": "ap-south-1"
        });
    }
};