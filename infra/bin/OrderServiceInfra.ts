#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { OrderServiceInfraStack } from '../lib/OrderServiceInfraStack';

const app = new cdk.App();
new OrderServiceInfraStack(app, 'OrderServiceStack');
