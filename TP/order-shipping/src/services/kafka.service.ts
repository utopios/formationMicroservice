import { Injectable, OnModuleInit } from "@nestjs/common";
import { Consumer, Kafka, Message, Producer } from "kafkajs";
import { OrderInterface } from "src/interfaces/order.interface";
import { ShippingInterface } from "src/interfaces/shipping.interface";
import { TOPIC_ORDER_CREATED, TOPIC_SHIPPING_CREATED } from "src/tools/const.topic";
import { HistoryService } from "./history.service";

@Injectable() 
export class KafkaService implements OnModuleInit {
    
    private kafkaClient: Kafka
    public producer: Producer
    public consumerOrder: Consumer
    public consumerShipping: Consumer

    constructor(private historyService:HistoryService) {
        this.kafkaClient = new Kafka({
            brokers : ['kafka1:9092']
        })

        this.consumerOrder = this.kafkaClient.consumer() 
        this.consumerShipping = this.kafkaClient.consumer() 
    }

    async onModuleInit() {
        await this.consumerShipping.connect()
        await this.consumerOrder.connect()
        this.consumerOrder.subscribe({topic:TOPIC_ORDER_CREATED})
        this.consumerShipping.subscribe({topic:TOPIC_SHIPPING_CREATED})

        this.consumerOrder.run({
            eachMessage : async (data) => {
                //Mettre la commande en fonction du message
                const dataObject: OrderInterface = JSON.parse(data.message.value.toString())
                this.historyService.createOrder(dataObject)
            }
        })
        this.consumerShipping.run({
            eachMessage : async (data) => {
                //Ajouter la livraison
                const dataObject: any = JSON.parse(data.message.value.toString())
                this.historyService.updateOrderWithShipping(dataObject.shipping, dataObject.orderId)
            }
        })
    }

}