import express from "express"
import { getLocalIP } from "./services/ip.service"
import os from "os"
import cors from  "cors"  

import bodyParser from "body-parser"
import getServer from "./services/server.service"
import { ServerCredentials } from "@grpc/grpc-js"
const app = express()
app.use(bodyParser.json())
const optionsCors = cors({
    origin : process.env.ALLOWRD_ORIGINS
})
app.use(optionsCors)
const PORT = process.env.PORT || 8000
const PORT_GRPC = process.env.PORT_GRPC || 9000
const HOST_GRPC = process.env.HOST_GRPC || "0.0.0.0"
app.post('/update', (req,res) => {
    const products = req.body.products
    //login de mise à jour 
    res.status(200).json({message:"it's ok", products:products})
})


app.listen(PORT, () => {
    console.log(getLocalIP(os))
    const server = getServer()
    server.bindAsync(`${HOST_GRPC}:${PORT_GRPC}`,ServerCredentials.createInsecure(),(err,port) => {
        if(err) {
            console.log(err)
        }
        server.start()
    })
})