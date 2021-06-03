import * as grpc from "@grpc/grpc-js"
import { Response } from "./example_package/Response"
import { Request } from "./example_package/Request"
import * as protoLoader from "@grpc/proto-loader"
import { ProtoGrpcType } from "./example"
const host = "0.0.0.0:9090"

const definition = protoLoader.loadSync('./../example.proto')

const proto = grpc.loadPackageDefinition(definition) as unknown as ProtoGrpcType

const client = new proto.example_package.Example(host, grpc.credentials.createInsecure());
const dateMax = new Date()
dateMax.setSeconds(dateMax.getSeconds() + 10)
client.waitForReady(dateMax, (err) => {
    if (err) {
        console.log(err)
    }
    else {

        //<=>
        // const stream = client.BidStream()
        // stream.on('data', (response:Response) => {

        // })
        // let t = 0
        // setInterval(() => {
        //     t++;
        //     stream.write({
        //         message : t.toString()
        //     })
        // },1000)

        const stream = client.ClientStream((err) => {
            if (err) {
                console.log(err)
            }

        })
        let t = 0;
        setInterval(() => {
            t++;
            stream.write({
                message: t.toString()
            })
        }, 1000)
    }
})