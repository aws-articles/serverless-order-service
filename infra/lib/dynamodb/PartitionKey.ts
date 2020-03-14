import {AttributeType} from "@aws-cdk/aws-dynamodb";

export class PartitionKey {
    constructor(readonly name: string,
                readonly type: AttributeType) {
    }
}