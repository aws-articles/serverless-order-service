import {Code} from "@aws-cdk/aws-lambda";
import {Construct, Stack, StackProps} from "@aws-cdk/core";
import {AttributeType} from "@aws-cdk/aws-dynamodb";
import {Node10LambdaFunction} from "./function/Node10LambdaFunction";
import {Node10LambdaFunctionProperties} from "./function/Node10LambdaFunctionProperties";
import {DynamoTable} from "./dynamodb/DynamoTable";
import {DynamoTableProperties} from "./dynamodb/DynamoTableProperties";
import {PrimaryKey} from "./dynamodb/PrimaryKey";
import {PartitionKey} from "./dynamodb/PartitionKey";
import {LambdaPublicRestApiProperties} from "./restapi/public/LambdaPublicRestApiProperties";
import {LambdaBackedPublicRestApi} from "./restapi/public/LambdaBackedPublicRestApi";
import {HttpMethod} from "./restapi/public/HttpMethod";

export class OrderServiceInfraStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const ordersFunction = this.ordersFunction();
        const ordersTable = this.ordersTable();
        const restApi = this.lambdaBackedPublicRestApi(ordersFunction);

        restApi.addEndpoint("orders/{orderId}", HttpMethod.GET);
        ordersTable.grantReadData(ordersFunction);
    }

    private ordersFunction() {
        return new Node10LambdaFunction(this, new Node10LambdaFunctionProperties(
            Code.fromAsset("../dist"),
            "handler.ordersHandler",
            "order-service-function",
            {"ExecutionEnvironment": "dev"})
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

    private lambdaBackedPublicRestApi(lambda: Node10LambdaFunction) {
        return new LambdaBackedPublicRestApi(this, new LambdaPublicRestApiProperties(
            "orders-api",
            "dev",
            lambda
        ));
    }
}