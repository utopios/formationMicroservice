import { Injectable, OnModuleInit } from "@nestjs/common";
import { Consumer, Kafka, Message, Producer } from "kafkajs";
import { OrderInterface } from "src/interfaces/order.interface";
import { TOPIC_ORDER_CREATED, TOPIC_SHIPPING_CREATED } from "src/tools/const.topic";
import { ShippingService } from "./shipping.service";

@Injectable() 
export class KafkaService implements OnModuleInit {
    
    private kafkaClient: Kafka
    public producer: Producer
    public consumer: Consumer

    constructor(private shippingService:ShippingService) {
        this.kafkaClient = new Kafka({
            brokers : ['kafka1:9092']
        })

        this.consumer = this.kafkaClient.consumer() 
        this.producer = this.kafkaClient.producer()
    }


    sendData(data:Message) {
        this.producer.send({topic: TOPIC_SHIPPING_CREATED, messages : [{...data}]})
    }

    async onModuleInit() {
        await this.consumer.connect()
        await this.producer.connect()
        this.consumer.subscribe({topic:TOPIC_ORDER_CREATED})

        this.consumer.run({
            eachMessage : async (data) => {
                //Mettre la commande en fonction du message
                const dataObject: OrderInterface = JSON.parse(data.message.value.toString())
                this.shippingService.createShipping(dataObject)
            }
        })
    }

}