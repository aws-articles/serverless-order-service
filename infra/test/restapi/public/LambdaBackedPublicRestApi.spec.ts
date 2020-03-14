import {LambdaBackedPublicRestApi} from "../../../lib/restapi/public/LambdaBackedPublicRestApi";
import {Stack} from "@aws-cdk/core";
import {LambdaPublicRestApiProperties} from "../../../lib/restapi/public/LambdaPublicRestApiProperties";
import {Node10LambdaFunctionProperties} from "../../../lib/function/Node10LambdaFunctionProperties";
import {Code} from "@aws-cdk/aws-lambda";
import {Node10LambdaFunction} from "../../../lib/function/Node10LambdaFunction";
import "@aws-cdk/assert/jest";
import {HttpMethod} from "../../../lib/restapi/public/HttpMethod";
import {CfnMethod} from "@aws-cdk/aws-apigateway";

const addFakeEndpoint = (api: LambdaBackedPublicRestApi) => {
    api.addEndpoint("fake", HttpMethod.GET);
};

test("stack should contain a public api with a name", () => {
    const stack = new Stack();
    const node10LambdaFunction = new Node10LambdaFunction(
        stack,
        new Node10LambdaFunctionProperties(
            Code.fromAsset("../dist"),
            "handler.ordersHandler",
            "order-service-function"));

    const properties = new LambdaPublicRestApiProperties(
        "orders-api",
        "dev",
        node10LambdaFunction
    );

    const api = new LambdaBackedPublicRestApi(stack, properties);
    addFakeEndpoint(api);

    expect(stack).toHaveResource("AWS::ApiGateway::RestApi", {
        Name: "orders-api"
    });
});

test("stack should contain a public api with stage name", () => {
    const stack = new Stack();
    const node10LambdaFunction = new Node10LambdaFunction(
        stack,
        new Node10LambdaFunctionProperties(
            Code.fromAsset("../dist"),
            "handler.ordersHandler",
            "order-service-function"));

    const properties = new LambdaPublicRestApiProperties(
        "orders-api",
        "dev",
        node10LambdaFunction
    );

    const api = new LambdaBackedPublicRestApi(stack, properties);
    addFakeEndpoint(api);

    expect(stack).toHaveResource("AWS::ApiGateway::Stage", {
        StageName: "dev"
    });
});

test("stack should contain a public api with a resource", () => {
    const stack = new Stack();
    const node10LambdaFunction = new Node10LambdaFunction(
        stack,
        new Node10LambdaFunctionProperties(
            Code.fromAsset("../dist"),
            "handler.ordersHandler",
            "order-service-function"));

    const properties = new LambdaPublicRestApiProperties(
        "orders-api",
        "dev",
        node10LambdaFunction
    );

    const api = new LambdaBackedPublicRestApi(stack, properties);
    api.addEndpoint("article/serverless", HttpMethod.GET);

    const articleResource = api.root.getResource("article");
    expect(articleResource).toBeDefined();

    const serverlessResource = articleResource?.getResource("serverless");
    expect(serverlessResource).toBeDefined();
});

test("stack should contain a public api with an http method added to the resource", () => {
    const stack = new Stack();
    const node10LambdaFunction = new Node10LambdaFunction(
        stack,
        new Node10LambdaFunctionProperties(
            Code.fromAsset("../dist"),
            "handler.ordersHandler",
            "order-service-function"));

    const properties = new LambdaPublicRestApiProperties(
        "orders-api",
        "dev",
        node10LambdaFunction
    );

    const api = new LambdaBackedPublicRestApi(stack, properties);
    api.addEndpoint("article/serverless", HttpMethod.GET);

    const serverlessResource = api.root.getResource("article")?.getResource("serverless");
    const method = serverlessResource?.node.findChild("GET") as CfnMethod;

    expect(method.httpMethod).toEqual(HttpMethod.GET);
});

