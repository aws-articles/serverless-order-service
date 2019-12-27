import {OrderService} from "../../src/service/OrderService";

import * as sinon from "sinon";
import {OrderRepository} from "../../src/repository/OrderRepository";
import {Order} from "../../src/model/Order";

test("should find an order by id", async () => {
    const repositoryStub = sinon.stub(OrderRepository.prototype, "findAnOrderBy")
        .callsFake(() => new Order("id-100", 2000));

    const order = await new OrderService().findAnOrderBy("id-100");

    expect(order).toEqual(new Order("id-100", 2000));
});

afterEach(() => {
    sinon.restore();
});