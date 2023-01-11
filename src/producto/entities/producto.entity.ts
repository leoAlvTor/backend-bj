import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { DefaultSchemaOptions, Document, Model } from "mongoose"

@Schema()
export class Producto extends Document {
    @Prop({
        unique:true,
        index:true,
    })
    id:string;

    @Prop({
        // unique:true,
        index:true,
    })
    nombre:string

    @Prop({
        // unique:true,
        index:true,
    })
    precio:number

    @Prop({
        index:true,
    })
    promocion:boolean

    @Prop({
        index:true,
    })
    categoria:[]

    @Prop({
        index:true,
    })
    stock:number

    @Prop()
    foto:string

    @Prop()
    codigoQR:string
}

export const ProductoSchema=SchemaFactory.createForClass(Producto);
