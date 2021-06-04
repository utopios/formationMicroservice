import { Injectable, OnModuleInit } from "@nestjs/common";
import { Consumer, Kafka, Message, Producer } from "kafkajs";
import { OrderInterface } from "src/interfaces/order.interface";
import { TOPIC_CREATE_PAYMENT, TOPIC_END_PAYMENT } from "src/tools/const.topic";
import { PaymentService } from "./payment.service";

@Injectable() 
export class KafkaService implements OnModuleInit {
    
    private kafkaClient: Kafka
    public producer: Producer
    public consumer: Consumer

    constructor(private paymentService:PaymentService) {
        this.kafkaClient = new Kafka({
            brokers : ['kafka1:9092']
        })

        this.producer = this.kafkaClient.producer()
        this.consumer = this.kafkaClient.consumer() 
    }

    sendData(data:Message) {
        this.producer.send({topic: TOPIC_END_PAYMENT, messages : [{...data}]})
    }



    async onModuleInit() {
        await this.producer.connect()
        await this.consumer.connect()

        this.consumer.subscribe({topic:TOPIC_CREATE_PAYMENT})

        this.consumer.run({
            eachMessage : async (data) => {
                //Paymentservice
                const dataObject: OrderInterface = JSON.parse(data.message.value.toString())
                this.paymentService.create(dataObject).then(res => {
                    const dataSend : OrderInterface = {id: res.orderId, status : res.status, amount:res.amount}
                    this.producer.send({topic : TOPIC_END_PAYMENT, messages : [{key:res.id, value : JSON.stringify(dataSend)}]})
                })
            }
        })
    }

}