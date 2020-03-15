import {OrderRepository} from "../repository/OrderRepository";

export class OrderService {
    private repository: OrderRepository;

    constructor() {
        this.repository = new OrderRepository();
    }

    async findAnOrderBy(id: string) {
        console.log(`Finding an order by order id ${id}`);
        return await this.repository.findAnOrderBy(id);
    }
}