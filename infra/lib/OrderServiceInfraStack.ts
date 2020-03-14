import {Code, Function, FunctionProps, Runtime} from "@aws-cdk/aws-lambda";
import {Construct, Stack, StackProps} from "@aws-cdk/core";
import {AttributeType, Table, TableProps} from "@aws-cdk/aws-dynamodb";

export class OrderServiceInfraStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const functionProperties: FunctionProps = {
            code: Code.fromAsset("../dist"),
            handler: "handler.ordersHandler",
            runtime: Runtime.NODEJS_10_X,
            functionName: "order-service-function"
        };
        new Function(this, "order-service-function", functionProperties);

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