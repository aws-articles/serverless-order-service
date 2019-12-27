import {OrderRequest} from "../model/OrderRequest";
import {Order}        from "../model/Order";
import {OrderService} from "../service/OrderService";

export class OrderController {
    private orderService: OrderService;

    constructor() {
        this.orderService = new OrderService();
    }

    handle(orderRequest: OrderRequest) {
        if (orderRequest.isViewOrder()) {
            return this.findAnOrderBy(orderRequest.orderId())
        }
    }

    private findAnOrderBy(id: string): Order {
        return this.orderService.findAnOrderBy(id);
    }
}