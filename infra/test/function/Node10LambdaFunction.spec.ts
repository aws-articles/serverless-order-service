import {Stack} from "@aws-cdk/core";
import {Code, Runtime} from "@aws-cdk/aws-lambda";
import {Node10LambdaFunction} from "../../lib/function/Node10LambdaFunction";
import {Node10LambdaFunctionProperties} from "../../lib/function/Node10LambdaFunctionProperties";
import "@aws-cdk/assert/jest";

test("stack should contain a lambda function with node10 as runtime", () => {
    const stack = new Stack();
    const properties = new Node10LambdaFunctionProperties(
        Code.fromAsset("../dist"),
        "handler.ordersHandler",
        "order-service-function");

    new Node10LambdaFunction(stack, properties);

    expect(stack).toHaveResource("AWS::Lambda::Function", {
        Runtime: Runtime.NODEJS_10_X.toString()
    })
});

test("stack should contain a lambda function with specified environment variable", () => {
    const stack = new Stack();
    const properties = new Node10LambdaFunctionProperties(
        Code.fromAsset("../dist"),
        "handler.ordersHandler",
        "order-service-function",
        {"env": "dev"});

    new Node10LambdaFunction(stack, properties);

    expect(stack).toHaveResource("AWS::Lambda::Function", {
        Environment: {
            Variables: {
                "env": "dev"
            }
        }
    })
});