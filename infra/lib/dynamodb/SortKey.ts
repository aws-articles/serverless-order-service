import {AttributeType} from "@aws-cdk/aws-dynamodb";

export class SortKey {
    constructor(readonly name: string,
                readonly type: AttributeType) {
    }
}