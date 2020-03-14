import {OrderServiceInfraStack} from "../lib/OrderServiceInfraStack";
import {App} from "@aws-cdk/core";
import "@aws-cdk/assert/jest";
import {Runtime} from "@aws-cdk/aws-lambda";

test("stack should contain a lambda function with node10 as runtime", () => {
    const app = new App();
    const stack = new OrderServiceInfraStack(app, "OrderServiceStack");

    expect(stack).toHaveResource("AWS::Lambda::Function", {
        Runtime: Runtime.NODEJS_10_X.toString()
    })
});

test("stack should contain a dynamodb table with table name", () => {
    const app = new App();
    const stack = new OrderServiceInfraStack(app, "OrderServiceStack");

    expect(stack).toHaveResource("AWS::DynamoDB::Table", {
        "TableName": "orders"
    })
});

test("stack should contain a dynamodb table with orderId as the Hash key", () => {
    const app = new App();
    const stack = new OrderServiceInfraStack(app, "OrderServiceStack");

    expect(stack).toHaveResource("AWS::DynamoDB::Table", {
        "KeySchema": [
            {
                "AttributeName": "orderId",
                "KeyType": "HASH"
            }
        ]
    })
});