import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class ResolverService {
   
    async resolve(name) {
        const res = await axios.get(`register:3010/resolve/${name}`)
        return res.data
    }
}