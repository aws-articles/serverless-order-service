export class Response<T> {
    private constructor(readonly status: HttpStatus, readonly body?: T) {
    }

    static ok<T>(body: T) {
        return new Response(HttpStatus.OK, body);
    }

    static notFound() {
        return new Response(HttpStatus.NOT_FOUND);
    }


    get() {
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