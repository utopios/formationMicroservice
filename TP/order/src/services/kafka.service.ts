import { Injectable, OnModuleInit } from "@nestjs/common";
import { Consumer, Kafka, Message, Producer } from "kafkajs";
import { OrderInterface } from "src/interfaces/order.interface";
import { TOPIC_ORDER_CREATED, TOPIC_ORDER_UPDATE } from "src/tools/const.topic";
import { OrderService } from "./order.service";

@Injectable() 
export class KafkaService implements OnModuleInit {
    
    private kafkaClient: Kafka
    public producer: Producer
    public consumer: Consumer

    constructor(private orderService:OrderService) {
        this.kafkaClient = new Kafka({
            brokers : ['kafka1:9092']
        })

        this.producer = this.kafkaClient.producer()
        this.consumer = this.kafkaClient.consumer() 
    }

    sendData(data:Message) {
        this.producer.send({topic: TOPIC_ORDER_CREATED, messages : [{...data}]})
    }



    async onModuleInit() {
        await this.producer.connect()
        await this.consumer.connect()

        this.consumer.subscribe({topic:TOPIC_ORDER_UPDATE})

        this.consumer.run({
            eachMessage : async (data) => {
                //Mettre la commande en fonction du message
                const dataObject: OrderInterface = JSON.parse(data.message.value.toString())
                this.orderService.update(dataObject.id,{...dataObject})
            }
        })
    }

}