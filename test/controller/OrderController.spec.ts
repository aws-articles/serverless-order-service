import {OrderController} from "../../src/controller/OrderController";
import {OrderRequest} from "../../src/model/OrderRequest";
import {APIGatewayEvent} from "aws-lambda";
import {HttpStatus} from "../../src/model/ModelAndResponseStatus";
import {OrderService} from "../../src/service/OrderService";
import {Order} from "../../src/model/Order";

import * as sinon from "sinon";

test("should return Ok as the response status given a request to find an order by id", async () => {
    sinon.stub(OrderService.prototype, "findAnOrderBy").callsFake(() => sinon.mock(Order));

    const modelAndResponseStatus = await new OrderController().handle(orderRequest("id-100"));

    expect(modelAndResponseStatus.status).toEqual(HttpStatus.OK);
});

test("should return an order given a request to find an order by id", async () => {
    sinon.stub(OrderService.prototype, "findAnOrderBy").callsFake(() => new Order("id-100", 1445));

    const modelAndResponseStatus = await new OrderController().handle(orderRequest("id-100"));

    expect(modelAndResponseStatus.model).toEqual(new Order("id-100", 1445));
});

afterEach(() => {
    sinon.restore();
});

const orderRequest = (id: string) => {
    const apiGatewayEvent: APIGatewayEvent = {
        httpMethod: "GET",
        path: "/orders",
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