import {GetItemInput} from "aws-sdk/clients/dynamodb";
import {Order} from "../model/Order";
import {dynamoDbClient} from "../DynamoDbConfiguration";

const dynamoDb = dynamoDbClient();

export class OrderRepository {

    async findAnOrderBy(id: string) {
        const getItemInputOptions: GetItemInput = {
            TableName: "orders",
            Key: {
                "orderId": {S: id}
            }
        };
        const response = await dynamoDb.getItem(getItemInputOptions).promise();
        return response.Item ? Order.from(response.Item) : null;
    }
}