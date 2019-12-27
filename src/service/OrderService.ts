import {OrderRepository} from "../repository/OrderRepository";

export class OrderService {
    private repository: OrderRepository;

    constructor() {
        this.repository = new OrderRepository();
    }

    findAnOrderBy(id: string) {
        return this.repository.findAnOrderBy(id);
    }
}