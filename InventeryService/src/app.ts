import express from "express"
import { getLocalIP } from "./services/ip.service"
import os from "os"
import cors from  "cors"  

import bodyParser from "body-parser"
const app = express()
app.use(bodyParser.json())
const optionsCors = cors({
    origin : process.env.ALLOWRD_ORIGINS
})
app.use(optionsCors)
const PORT = process.env.PORT || 8000

app.post('/update', (req,res) => {
    const products = req.body.products
    //login de mise à jour 
    res.status(200).json({message:"it's ok", products:products})
})


app.listen(PORT, () => {
    console.log(getLocalIP(os))
})