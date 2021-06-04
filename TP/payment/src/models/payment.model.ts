import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class Payment extends Document {

    

    @Prop()
    status: string
    @Prop()
    orderId: string
    @Prop()
    amount: number
}

export const PaymentSchema = SchemaFactory.createForClass(Payment)