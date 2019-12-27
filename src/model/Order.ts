import {DocumentClient} from "aws-sdk/clients/dynamodb";

export class Order {

    private constructor(private readonly orderId: string,
                        private readonly amount: number,
                        private readonly orderDate: Date) {
    }

    static from(item: DocumentClient.AttributeMap): Order {
        return new Order(item.orderId, item.amount, item.orderDate);
    }
}