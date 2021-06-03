
import * as protoLoader from "@grpc/proto-loader"
import * as grpc from "@grpc/grpc-js"

import { ProtoGrpcType } from "./../proto/stock"
const SERVER_PORT_GRPC = process.env.SERVER_PORT_GRPC || 9000
const SERVER_HOST_GRPC = process.env.SERVER_HOST_GRPC || "0.0.0.0"

export const getClient = () => {

    const definition = protoLoader.loadSync('./../sharedrepos/stock.proto')
    const proto = grpc.loadPackageDefinition(definition) as unknown as ProtoGrpcType
    const client = new proto.stock.Stock(`${SERVER_HOST_GRPC}:${SERVER_PORT_GRPC}`, grpc.credentials.createInsecure())
    const dateMax = new Date()
    dateMax.setSeconds(dateMax.getSeconds() + 10)
    client.waitForReady(dateMax, (err) => {
    
    })

    return client
}