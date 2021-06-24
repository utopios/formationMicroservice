import { Injectable } from "@nestjs/common";
import { OrderInterface } from "src/interfaces/order.interface";
import { ShippingInterface } from "src/interfaces/shipping.interface";

@Injectable()
export class HistoryService {
    createOrder(orderInterface:OrderInterface) {
        //Ajoute la commande dans notre view ou document, en lecture,
        //Normalement dans un pattern cqrs, cette etape doit être réalisée par un eventHandler
    }

    updateOrderWithShipping(shipping:ShippingInterface, orderId:number) {
        //Ajouter dans le document de notre order, la clé shipping 
    }

    getOrder(id : number) {
        //renvoie la commande avec la livraison.
    }
}