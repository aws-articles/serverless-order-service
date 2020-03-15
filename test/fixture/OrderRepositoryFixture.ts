import {Order} from "../../src/model/Order";
import {DeleteItemInput, PutItemInput} from "aws-sdk/clients/dynamodb";

import {dynamoDbClient} from "../../src/DynamoDbConfiguration";

const dynamoDb = dynamoDbClient();

export class OrderRepositoryFixture {
    static async createAn(order: Order) {
        const item: PutItemInput = {
            TableName: "orders",
            Item: {
                "orderId": {
                    S: order.orderId
                },
                "amount": {
                    N: order.amount.toString()
                }
            }
        };
        await dynamoDb.putItem(item).promise();
    }

    static async deleteAnOrder(orderId: string) {
        const item: DeleteItemInput = {
            TableName: "orders",
            Key: {
                "orderId": {
                    S: orderId
                }
            }
        };
        await dynamoDb.deleteItem(item).promise();
    }
}