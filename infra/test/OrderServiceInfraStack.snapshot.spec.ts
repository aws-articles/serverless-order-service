import {SynthUtils} from "@aws-cdk/assert";
import {OrderServiceInfraStack} from "../lib/OrderServiceInfraStack";
import * as cdk from "@aws-cdk/core";

test("should match the order service infra snapshot", () => {
    const app = new cdk.App();
    const stack = new OrderServiceInfraStack(app, "OrderServiceStack");
    const cloudFormationStack = SynthUtils.synthesize(stack);

    expect(cloudFormationStack).toMatchSnapshot();
});