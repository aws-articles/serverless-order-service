import {DynamoDB}     from "aws-sdk"
import {GetItemInput} from "aws-sdk/clients/dynamodb";
import {Order}        from "../model/Order";

const dynamoDb = new DynamoDB.DocumentClient({
    "region": "us-east-1"
});

export class OrderRepository {

    async findAnOrderBy(id: string) {
        const getItemInputOptions: GetItemInput = {
            TableName: "orders",
            Key: {
                "orderId": {
                    "S": id
                }
            }
        };
        const response = await dynamoDb.get(getItemInputOptions).promise();
        return Order.from(response.Item);
    }
}