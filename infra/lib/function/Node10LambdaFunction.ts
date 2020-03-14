import {Function} from "@aws-cdk/aws-lambda";
import {Construct} from "@aws-cdk/core";
import {Node10LambdaFunctionProperties} from "./Node10LambdaFunctionProperties";

export class Node10LambdaFunction extends Function {
    constructor(scope: Construct, properties: Node10LambdaFunctionProperties) {
        super(scope, properties.functionName, properties.toFunctionProps())
    }
}