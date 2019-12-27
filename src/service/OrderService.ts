import {OrderRepository} from "../repository/OrderRepository";

export class OrderService {
    private repository: OrderRepository;

    constructor() {
        this.repository = new OrderRepository();
    }

    async findAnOrderBy(id: string) {
        return await this.repository.findAnOrderBy(id);
    }
}