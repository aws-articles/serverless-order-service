import {Table} from "@aws-cdk/aws-dynamodb";
import {Construct} from "@aws-cdk/core";
import {DynamoTableProperties} from "./DynamoTableProperties";

export class DynamoTable extends Table {
    constructor(scope: Construct, properties: DynamoTableProperties) {
        super(scope, properties.tableName, properties.toTableProps());
    }
}