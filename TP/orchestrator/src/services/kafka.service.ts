import { Injectable, OnModuleInit } from "@nestjs/common";
import { Consumer, Kafka, Message, Producer } from "kafkajs";
import { TOPIC_CREATE_PAYMENT, TOPIC_END_PAYMENT, TOPIC_ORDER_CREATED, TOPIC_ORDER_UPDATE } from "src/tools/const.topic";



@Injectable() 
export class KafkaService implements OnModuleInit {
    
    private kafkaClient: Kafka
    public producer: Producer
    public consumerOrder: Consumer
    public consumerPayment: Consumer

    constructor() {
        this.kafkaClient = new Kafka({
            brokers : ['kafka1:9092']
        })

        this.producer = this.kafkaClient.producer()
        this.consumerOrder = this.kafkaClient.consumer() 
        this.consumerPayment = this.kafkaClient.consumer() 
    }


    async onModuleInit() {
        await this.producer.connect()
        await this.consumerOrder.connect()

        this.consumerOrder.subscribe({topic:TOPIC_ORDER_CREATED})
        this.consumerPayment.subscribe({topic:TOPIC_END_PAYMENT})

        this.consumerOrder.run({
            eachMessage : async (data) => {
                this.producer.send({topic:TOPIC_CREATE_PAYMENT, messages :[data.message]})
            }
        })
        this.consumerPayment.run({
            eachMessage : async (data) => {
                this.producer.send({topic:TOPIC_ORDER_UPDATE, messages :[data.message]})
            }
        })
    }

}