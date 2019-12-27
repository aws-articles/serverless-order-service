import {HttpStatus, ModelAndResponseStatus} from "../../src/model/ModelAndResponseStatus";

it("should serialize itself given a model and status code", () => {
    const model = {
        "article": "Serverless"
    };
    const modelAndResponseStatus = new ModelAndResponseStatus(model, HttpStatus.OK);
    expect(modelAndResponseStatus.serialize()).toEqual({
        "statusCode": HttpStatus.OK,
        "body": "{\"article\":\"Serverless\"}"
    })
});

it("should serialize itself given only status code", () => {
    const modelAndResponseStatus = new ModelAndResponseStatus(null, HttpStatus.OK);
    expect(modelAndResponseStatus.serialize()).toEqual({
        "statusCode": HttpStatus.OK
    })
});