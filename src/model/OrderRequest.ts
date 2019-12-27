import {APIGatewayEvent} from "aws-lambda";

export class OrderRequest {
    constructor(private readonly event: APIGatewayEvent) {
    }

    isViewOrder(): boolean {
        return this.event.httpMethod === "GET" &&
            this.event.path === "/orders" &&
            this.event.pathParameters.orderId != null;
    }

    orderId(): string {
        return this.event.pathParameters.orderId;
    }
}