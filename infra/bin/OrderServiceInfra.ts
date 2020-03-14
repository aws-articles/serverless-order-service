#!/usr/bin/env node
import "source-map-support/register";
import {OrderServiceInfraStack} from "../lib/OrderServiceInfraStack";
import {StackProps} from "@aws-cdk/core";
import cdk = require("@aws-cdk/core");

const app = new cdk.App();
const stackProps:StackProps = {
    stackName: "order-service-stack"
};
new OrderServiceInfraStack(app, "OrderServiceStack", stackProps);
