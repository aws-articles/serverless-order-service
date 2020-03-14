import {PartitionKey} from "./PartitionKey";
import {SortKey} from "./SortKey";

export class PrimaryKey {
    constructor(readonly partitionKey: PartitionKey,
                readonly sortKey?: SortKey) {
    }
}