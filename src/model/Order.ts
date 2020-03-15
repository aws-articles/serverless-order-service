import {DocumentClient} from "aws-sdk/clients/dynamodb";

export class Order {

    constructor(readonly orderId: string,
                readonly amount: number) {
    }

    static from(item: DocumentClient.AttributeMap): Order {
        return new Order(item.orderId.S, Number(item.amount.N));
    }
}