import express from "express"
import { getLocalIP } from "./services/ip.service"
import os from "os"
import axios from "axios"
const app = express()

const PORT = process.env.PORT || 8000

app.get('/', (req, res)=> {
        axios.post(String(process.env.ADDRESS_INVENTERY_SERVICE)+"/update", {products:[{productId : 1, qty : 1}]}).then(res=> {
            //traitement de la réponse du appel au microservice
            console.log(res)
        })
        res.json({"message" :"Hello from productService"})
})

app.listen(PORT, () => {
    console.log(getLocalIP(os))
})