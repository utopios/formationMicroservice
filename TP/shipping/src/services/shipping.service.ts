import { Injectable } from "@nestjs/common";
import { OrderInterface } from "src/interfaces/order.interface";
import { ShippingInterface } from "src/interfaces/shipping.interface";
import { TOPIC_SHIPPING_CREATED } from "src/tools/const.topic";
import { KafkaService } from "./kafka.service";

@Injectable()
export class ShippingService {

    constructor(private kafkaService:KafkaService) {

    }
    createShipping(orderInterface:OrderInterface) {
        //Création du shipping
        const shipping : ShippingInterface = {
            id : 1,
            address : 'tourcoing'
        }
        this.kafkaService.producer.send({topic : String(TOPIC_SHIPPING_CREATED), messages : [{key : String(shipping.id), value : JSON.stringify(shipping)}]})
    }
}