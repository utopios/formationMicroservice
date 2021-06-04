import {Kafka} from "kafkajs"

function main() {
    const kafkaCient = new Kafka({brokers:[`kafak1:9092`]})

    //Création de topic
    const admin  = kafkaCient.admin({});
    admin.connect().then((res) => {
        admin.createTopics({
            topics :[{topic : ''}]
        })
    });
}

main()