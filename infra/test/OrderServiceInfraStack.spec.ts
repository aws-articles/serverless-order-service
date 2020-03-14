import {OrderServiceInfraStack} from "../lib/OrderServiceInfraStack";
import {App} from "@aws-cdk/core";
import "@aws-cdk/assert/jest";

test("should create order service stack", () => {
    const app = new App();
    const stack = new OrderServiceInfraStack(app, "OrderServiceStack");

    expect(stack).toMatchSnapshot();
});