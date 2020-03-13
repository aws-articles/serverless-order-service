import {OrderRequest} from "../model/OrderRequest";
import {OrderService} from "../service/OrderService";
import {HttpStatus, Response} from "../model/Response";
import {Order} from "../model/Order";

export class OrderController {
    private orderService: OrderService;

    constructor() {
        this.orderService = new OrderService();
    }

    async handle(orderRequest: OrderRequest): Promise<Response<Order | unknown>> {
        if (orderRequest.isViewOrder()) {
            const order = await this.findAnOrderBy(orderRequest.orderId());
            return Response.ok<Order>(HttpStatus.OK, order)
        }
        return Response.notFound()
    }

    private async findAnOrderBy(id: string) {
        return await this.orderService.findAnOrderBy(id);
    }
}