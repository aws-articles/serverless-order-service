import {APIGatewayEvent} from "aws-lambda";
import {OrderRequest} from "../../src/model/OrderRequest";

export const orderRequest = (id: string, path: string = "/orders") => {
    const apiGatewayEvent: APIGatewayEvent = {
        httpMethod: "GET",
        path: path,
        pathParameters: {
            "orderId": id
        },
        body: null,
        isBase64Encoded: false,
        headers: {},
        multiValueHeaders: {},
        queryStringParameters: {},
        multiValueQueryStringParameters: {},
        stageVariables: {},
        requestContext: null,
        resource: ""
    };
    return new OrderRequest(apiGatewayEvent);
};