import {TableProps} from "@aws-cdk/aws-dynamodb";
import {PrimaryKey} from "./PrimaryKey";

export class DynamoTableProperties {
    constructor(readonly tableName: string,
                readonly primaryKey: PrimaryKey) {
    }

    toTableProps(): TableProps {
        return {
            tableName: this.tableName,
            partitionKey: this.primaryKey.partitionKey,
            sortKey: this.primaryKey.sortKey
        }
    }
}