import {OrderRequest} from "../model/OrderRequest";
import {Order}        from "../model/Order";
import {OrderService} from "../service/OrderService";

export class OrderController {
    private orderService: OrderService;

    constructor() {
        this.orderService = new OrderService();
    }

    async handle(orderRequest: OrderRequest) {
        if (orderRequest.isViewOrder()) {
            return await this.findAnOrderBy(orderRequest.orderId())
        }
    }

    private async findAnOrderBy(id: string): Promise<Order> {
        return await this.orderService.findAnOrderBy(id);
    }
}