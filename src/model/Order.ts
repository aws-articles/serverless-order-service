import {DocumentClient} from "aws-sdk/clients/dynamodb";

export class Order {

    constructor(private readonly orderId: string,
                private readonly amount: number) {
    }

    static from(item: DocumentClient.AttributeMap): Order {
        return new Order(item.orderId, item.amount);
    }
}