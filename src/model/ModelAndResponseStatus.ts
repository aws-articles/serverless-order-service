export class ModelAndResponseStatus {
    constructor(private readonly model: any, private readonly status: HttpStatus) {
    }

    serialize() {
        return {
            "statusCode": this.status,
            "body": JSON.stringify(this.model)
        }
    }
}

export class HttpStatus {
    static readonly OK = "200";
}