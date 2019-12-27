import {orderRequest} from "../fixture/OrderRequestFixture";

it("should return order id", () => {
    const request = orderRequest("id-100");
    expect(request.orderId()).toEqual("id-100");
});

it("should return TRUE given request is a view order request", () => {
    const request = orderRequest("id-100");
    expect(request.isViewOrder()).toBeTruthy()
});

it("should return FALSE given request is not a view order request", () => {
    const request = orderRequest("id-100", "/dummy");
    expect(request.isViewOrder()).toBeFalsy()
});