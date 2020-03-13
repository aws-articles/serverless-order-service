import {HttpStatus, Response} from "../../src/model/Response";

it("should serialize itself given a model and status code", () => {
    const model = {
        "article": "Serverless"
    };
    const response = Response.ok(HttpStatus.OK, model);
    expect(response.serialize()).toEqual({
        "statusCode": HttpStatus.OK,
        "body": "{\"article\":\"Serverless\"}"
    })
});

it("should serialize itself given only status code", () => {
    const response = Response.ok(HttpStatus.OK);
    expect(response.serialize()).toEqual({
        "statusCode": HttpStatus.OK
    })
});