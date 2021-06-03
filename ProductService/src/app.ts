import express from "express"
import { getLocalIP } from "./services/ip.service"
import os from "os"
const app = express()

const PORT = process.env.PORT || 8000

app.get('/', (res:any, req)=> {
    res.end("Hello from productService")
})

app.listen(PORT, () => {
    console.log(getLocalIP(os))
})