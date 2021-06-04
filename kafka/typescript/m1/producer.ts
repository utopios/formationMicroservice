import {Kafka} from "kafkajs"

const kafka = new Kafka({
    brokers : ["localhost:9292"],
    clientId: "app-microservice"
})

const producer = kafka.producer()


async function start() {
    await producer.connect();
    let t = 1
    await producer.send({topic:"topic-1", messages:[{key:"clé", value : "message "+ t}]})
}
start();