export class ModelAndResponseStatus {
    constructor(private readonly model: any, private readonly status: HttpStatus) {
    }

    serialize() {
        return this.model === null ? {"statusCode": this.status} : {
            "statusCode": this.status,
            "body": JSON.stringify(this.model)
        }
    }
}

export class HttpStatus {
    static readonly OK = "200";
    static readonly NOT_FOUND = "404";
}