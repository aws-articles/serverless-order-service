import {OrderRequest} from "../model/OrderRequest";
import {OrderService} from "../service/OrderService";
import {HttpStatus, ModelAndResponseStatus} from "../model/ModelAndResponseStatus";

export class OrderController {
    private orderService: OrderService;

    constructor() {
        this.orderService = new OrderService();
    }

    async handle(orderRequest: OrderRequest): Promise<ModelAndResponseStatus> {
        if (orderRequest.isViewOrder()) {
            const order = await this.findAnOrderBy(orderRequest.orderId());
            return new ModelAndResponseStatus(order, HttpStatus.OK)
        }
        return null;
    }

    private async findAnOrderBy(id: string) {
        return await this.orderService.findAnOrderBy(id);
    }
}