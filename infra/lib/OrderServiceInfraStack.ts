import {Code} from "@aws-cdk/aws-lambda";
import {Construct, Stack, StackProps} from "@aws-cdk/core";
import {AttributeType} from "@aws-cdk/aws-dynamodb";
import {Node10LambdaFunction} from "./function/Node10LambdaFunction";
import {Node10LambdaFunctionProperties} from "./function/Node10LambdaFunctionProperties";
import {DynamoTable} from "./dynamodb/DynamoTable";
import {DynamoTableProperties} from "./dynamodb/DynamoTableProperties";
import {PrimaryKey} from "./dynamodb/PrimaryKey";
import {PartitionKey} from "./dynamodb/PartitionKey";

export class OrderServiceInfraStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        this.ordersFunction();
        this.ordersTable();
    }

    private ordersFunction() {
        return new Node10LambdaFunction(this, new Node10LambdaFunctionProperties(
            Code.fromAsset("../dist"),
            "handler.ordersHandler",
            "order-service-function")
        );
    }

    private ordersTable() {
        return new DynamoTable(this, new DynamoTableProperties(
            "orders",
            new PrimaryKey(
                new PartitionKey(
                    "orderId",
                    AttributeType.STRING)
            ))
        );
    }
}