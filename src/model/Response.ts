export class Response<T> {
    private constructor(readonly status: HttpStatus, readonly body?: T) {
    }

    static ok<T>(status: HttpStatus, body?: T) {
        return new Response(status, body);
    }

    static notFound() {
        return new Response(HttpStatus.NOT_FOUND);
    }


    serialize() {
        return this.body === null ? {"statusCode": this.status} : {
            "statusCode": this.status,
            "body": JSON.stringify(this.body)
        }
    }
}

export class HttpStatus {
    static readonly OK = "200";
    static readonly NOT_FOUND = "404";
}