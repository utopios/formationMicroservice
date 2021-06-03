import { ExampleHandlers } from "./example_package/Example"
import grpc from "@grpc/grpc-js"
import {Response} from "./example_package/Response"
import {Request} from "./example_package/Request"
import protoLoader from "@grpc/proto-loader"
import {ProtoGrpcType} from "./example"
const host = "0.0.0.0:9090"

const serverHandler : ExampleHandlers = {
    BidStream(call:grpc.ServerDuplexStream<Request,Response>) {
        //Logique metier initiale
        call.write({
            message : "message from grpc server"
        })

        call.on('data', (request:Request) => {
            //Logique metier après chaques request du serveur
        })

        call.on('end', () => {
            //
        })
    },

    ClientStream(call:grpc.ServerReadableStream<Request,Response>) {
        call.on('data', (request:Request) => {
            console.log(request)
        })
    },

    ServerStream(call:grpc.ServerWritableStream<Request, Response>){
        //
        call.write({
            message : "messge from grpc"
        })
    },
    
    ClientRequest(call:grpc.ServerUnaryCall<Request, Response>, callback:grpc.sendUnaryData<Response>) {
        if(call.request) {
            console.log(call.request.message)
        }
        callback(null, {message : "message from serveur grpc"})
    }
}

const server = new grpc.Server()
 
const definition = protoLoader.loadSync('./../example.proto')

const proto = grpc.loadPackageDefinition(definition) as unknown as ProtoGrpcType


server.addService(proto.example_package.Example.service, serverHandler)

server.bindAsync(host,grpc.ServerCredentials.createInsecure(),(err:any,port:number) => {
    if(err) {
        console.log(err)
    }
    else {
        server.start()
        console.log("serveur démarré")
    }
})