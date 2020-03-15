import {Order} from "../../src/model/Order";
import {DeleteItemInput, PutItemInput, ScanInput} from "aws-sdk/clients/dynamodb";

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
        await dynamoDb.putItem(item).promise()
    }

    static async deleteAll() {
        const input: ScanInput = {TableName: "orders"};
        const response = await dynamoDb.scan(input).promise();

        for (const item of response.Items) {
            await OrderRepositoryFixture.deleteAnOrder(item.orderId.S);
        }
    }

    private static async deleteAnOrder(orderId: string) {
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