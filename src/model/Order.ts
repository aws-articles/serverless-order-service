import {DocumentClient} from "aws-sdk/clients/dynamodb";

export class Order {
    static from(item: DocumentClient.AttributeMap): Order {
        return null;
    }
}