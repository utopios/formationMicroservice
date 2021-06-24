import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy, ReadPacket, WritePacket } from "@nestjs/microservices";

@Injectable()
class M1Service extends ClientProxy {
    connect(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    close() {
        throw new Error("Method not implemented.");
    }
    protected publish(packet: ReadPacket<any>, callback: (packet: WritePacket<any>) => void): Function {
        throw new Error("Method not implemented.");
    }
    protected dispatchEvent<T = any>(packet: ReadPacket<any>): Promise<T> {
        throw new Error("Method not implemented.");
    }

}