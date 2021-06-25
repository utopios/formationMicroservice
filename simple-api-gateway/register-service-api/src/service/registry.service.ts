import { Injectable, OnModuleInit } from "@nestjs/common";
import axios from "axios";
import { Etcd3, InjectClient } from "nestjs-etcd";

@Injectable()
export class RegistryService implements OnModuleInit {

    private mapperServices = {}
    constructor(@InjectClient('api-register') private clientEtcd: Etcd3) {

    }
    onModuleInit() {
        this.testHealty()
    }
    async register(service) {
        await this.clientEtcd.put(service.name).value(`${JSON.stringify(service)}`)
        //Save healtyCheck également
        return true
    }

    async resolveAddress(name) {
        const stringService = await this.clientEtcd.get(name).string()
        const service = JSON.parse(stringService)
        return `${service.host}:${service.port}`
    }

    async testHealty() {
        const keys = await this.clientEtcd.getAll().keys()
        for(let k of keys) {
            const stringService = await this.clientEtcd.get(k).string()
            const service = JSON.parse(stringService)
            setInterval(() => {
                axios.get(`${service.host}:${service.port}${service.healthCheckAddress}`)
            }, service.timesInterval)
        }
    }
}