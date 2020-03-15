import {OrderRepository} from "../../src/repository/OrderRepository";
import {Order} from "../../src/model/Order";
import {OrderRepositoryFixture} from "../fixture/OrderRepositoryFixture";

test("should return an order given there is AN order for the provided order id", async () => {
    const orderId = "order-100";
    await OrderRepositoryFixture.deleteAll();
    await OrderRepositoryFixture.createAn(new Order(orderId, 5000));

    const order = await new OrderRepository().findAnOrderBy(orderId);

    expect(order.orderId).toEqual(orderId);
    expect(order.amount).toEqual(5000);
});

test("should NOT return an order given there is NO order for the provided order id", async () => {
    const orderId = "no-order-present-for-this-order-id";
    await OrderRepositoryFixture.deleteAll();

    const order = await new OrderRepository().findAnOrderBy(orderId);

    expect(order).toBeNull();
});