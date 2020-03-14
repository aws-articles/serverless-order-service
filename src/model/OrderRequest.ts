import {APIGatewayEvent} from "aws-lambda";

export class OrderRequest {
    constructor(private readonly event: APIGatewayEvent) {
    }

    isAGetOrder(): boolean {
        return this.event.httpMethod === "GET" &&
            this.event.path.startsWith("/orders") &&
            this.event.pathParameters.orderId != null;
    }

    orderId(): string {
        return this.event.pathParameters.orderId;
    }
}