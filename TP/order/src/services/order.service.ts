import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { OrderInterface } from "src/interfaces/order.interface";
import { Order } from "src/models/order.model";

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {

    }

    create(order:OrderInterface) : Promise<Order> {
        const newOrder = new this.orderModel(order)
        return newOrder.save();
    }

    async update(orderId: string, order:OrderInterface) {
        const updateOrder = await this.orderModel.findByIdAndUpdate(orderId, order)
        return updateOrder
    }
}
