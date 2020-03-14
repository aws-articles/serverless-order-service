import {Stack} from "@aws-cdk/core";
import "@aws-cdk/assert/jest";
import {DynamoTable} from "../../lib/dynamodb/DynamoTable";
import {DynamoTableProperties} from "../../lib/dynamodb/DynamoTableProperties";
import {PrimaryKey} from "../../lib/dynamodb/PrimaryKey";
import {PartitionKey} from "../../lib/dynamodb/PartitionKey";
import {AttributeType} from "@aws-cdk/aws-dynamodb";

test("stack should contain a dynamodb table with table name", () => {
    const stack = new Stack();
    new DynamoTable(stack, new DynamoTableProperties("orders", new PrimaryKey(new PartitionKey("orderId", AttributeType.STRING))));

    expect(stack).toHaveResource("AWS::DynamoDB::Table", {
        "TableName": "orders"
    })
});

test("stack should contain a dynamodb table with orderId as the Hash key", () => {
    const stack = new Stack();
    new DynamoTable(stack, new DynamoTableProperties("order", new PrimaryKey(new PartitionKey("orderId", AttributeType.STRING))));

    expect(stack).toHaveResource("AWS::DynamoDB::Table", {
        "KeySchema": [
            {
                "AttributeName": "orderId",
                "KeyType": "HASH"
            }
        ]
    })
});