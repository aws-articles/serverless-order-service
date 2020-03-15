import {OrderRepositoryFixture} from "./fixture/OrderRepositoryFixture";
import {Order} from "../src/model/Order";

import * as fs from "fs";
import * as path from "path";
import Axios from "axios"

let apiId = "";

beforeEach(() => {
    apiId = fs.readFileSync(path.resolve("test/infra/rest_api_id"), "utf8").trim();
});

test("should return an order given there is AN order for the provided order id", async () => {

    const orderId = "order-500";

    await OrderRepositoryFixture.deleteAnOrder(orderId);
    await OrderRepositoryFixture.createAn(new Order(orderId, 4000));

    const apiUrl = `http://localhost:4567/restapis/${apiId}/test/_user_request_/orders/${orderId}`;
    const response = await Axios.get(apiUrl);

    expect(response.status).toEqual(200);
    expect(response.data).toEqual({
        "orderId": orderId,
        "amount": 4000
    });
}, 20000);