import { Injectable, OnModuleInit } from "@nestjs/common";
import { Consumer, Kafka, Message } from "kafkajs";

import {v4 as uuId} from "uuid"
import { networkInterfaces } from "os"

@Injectable() 
export class KafkaService implements OnModuleInit {
    
    private kafkaClient: Kafka
    public consumer: Consumer
    public mapperServices = {

    }
    constructor() {
        // this.kafkaClient = new Kafka({
        //     brokers : ['kafka1:9092']
        // })
        // this.consumer = this.kafkaClient.consumer() 
    }


    async onModuleInit() {
        // await this.consumer.connect()

        // this.consumer.subscribe({topic:'NEW_MICRO_SERVICE'})

        // this.consumer.run({
        //     eachMessage : async (data) => {
        //         const service = JSON.parse(data.message.value.toString())
        //         this.mapperServices[service.name] = `${service.address}:${service.port}`
        //     }
        // })
    }

    getLocalIp() {
        const nets = networkInterfaces()
        let address
        for(let key in nets) {
            for(const net of nets[key]) {
                if(net.family == 'IPv4' && !net.internal) {
                    address = net.address
                    break
                }
            }
        }
        return address
    }

}