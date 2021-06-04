import {Kafka} from "kafkajs"




export const getProducer = async () => {
    const kafka = new Kafka({
        brokers : ["localhost:9092"],
        clientId: "app-microservice"
    })
    
    const producer = kafka.producer()
    await producer.connect();
    return producer
}

