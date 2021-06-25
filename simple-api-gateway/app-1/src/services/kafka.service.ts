import { Injectable, OnModuleInit } from "@nestjs/common";
import { Consumer, Kafka, Message, Producer } from "kafkajs";

import {v4 as uuId} from "uuid"
import { networkInterfaces } from "os"
import axios from "axios";

@Injectable() 
export class KafkaService implements OnModuleInit {
    
    private kafkaClient: Kafka
    public producer: Producer
    public consumerOrder: Consumer
    public consumerPayment: Consumer

    constructor() {
        // this.kafkaClient = new Kafka({
        //     brokers : ['kafka1:9092']
        // })

        // this.producer = this.kafkaClient.producer()
    }


    async onModuleInit() {
        //await this.producer.connect()

        const data = {
            name : 'app-1',
            host : this.getLocalIp(),
            port : process.env.PORT || 3001
        }
        try {
            const res = await axios.post('register:3010/register', data)       
        }catch(ex) {
            //Log
        }
        //this.producer.send({topic:'NEW_MICRO_SERVICE', messages :[{key : uuId(), value : JSON.stringify(data)}]})
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