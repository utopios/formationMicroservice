import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { OrderInterface } from "src/interfaces/order.interface";
import { Payment } from "src/models/payment.model";

@Injectable()
export class PaymentService {
    constructor(@InjectModel(Payment.name) private paymentModel: Model<Payment>) {

    }

    create(order:OrderInterface) : Promise<Payment> {
        const newOrder = new this.paymentModel({orderId : order.id, status : (Number(order.id) % 2==0 ? 'ok' : 'notok')})
        return newOrder.save();
    }
}