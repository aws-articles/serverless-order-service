import {APIGatewayEvent} from "aws-lambda";

export class OrderRequest {
    constructor(private readonly event: APIGatewayEvent) {
    }

    isViewOrder(): boolean {
        return true;
    }

    orderId(): string {
        return "";
    }
}