import {Code} from "@aws-cdk/aws-lambda";
import {Construct, Stack, StackProps} from "@aws-cdk/core";
import {AttributeType, Table, TableProps} from "@aws-cdk/aws-dynamodb";
import {Node10LambdaFunction} from "./function/Node10LambdaFunction";
import {Node10LambdaFunctionProperties} from "./function/Node10LambdaFunctionProperties";

export class OrderServiceInfraStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        new Node10LambdaFunction(this, new Node10LambdaFunctionProperties(
            Code.fromAsset("../dist"),
            "handler.ordersHandler",
            "order-service-function")
        );

        const tableProps: TableProps = {
            partitionKey: {
                name: "orderId",
                type: AttributeType.STRING
            },
            tableName: "orders"
        };
        new Table(this, "order-table", tableProps);
    }
}