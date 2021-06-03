import { StockHandlers } from "./../proto/stock/Stock"
import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"
import { Products } from "./../proto/stock/Products"
import { ProtoGrpcType } from "./../proto/stock"
import { Empty } from "./../proto/stock/Empty"

const serverHandler: StockHandlers = {
    ClientStock(call: grpc.ServerReadableStream<Products, Empty>) {
        call.on('data', (products: Products) => {
            console.log(products)
        })
    }
}

const getServer = () => {
    const server = new grpc.Server()

    const definition = protoLoader.loadSync('./../sharedrepos/stock.proto')

    const proto = grpc.loadPackageDefinition(definition) as unknown as ProtoGrpcType


    server.addService(proto.stock.Stock.service, serverHandler)

    return server
}

export default getServer
