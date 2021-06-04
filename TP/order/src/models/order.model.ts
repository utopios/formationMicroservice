import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class Order extends Document {

    

    @Prop()
    status: string

    @Prop()
    amount: number
}

export const OrderShema = SchemaFactory.createForClass(Order)