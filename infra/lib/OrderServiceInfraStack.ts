import * as cdk from "@aws-cdk/core";
import {Code, Function, FunctionProps, Runtime} from "@aws-cdk/aws-lambda";

export class OrderServiceInfraStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const functionProperties: FunctionProps = {
            code: Code.fromAsset("../src"),
            handler: "handler.ordersHandler",
            runtime: Runtime.NODEJS_10_X,
            functionName: "order-service-lambda"
        };
        new Function(this, "order-service-lambda", functionProperties)
    }
}
