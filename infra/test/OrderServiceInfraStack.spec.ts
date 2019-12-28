import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import Infra = require('../lib/OrderServiceInfraStack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Infra.OrderServiceInfraStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});