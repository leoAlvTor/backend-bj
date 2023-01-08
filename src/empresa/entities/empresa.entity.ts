import { Document } from "mongoose"
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Empresa extends Document{

    @Prop({
        unique: true,
        index: true,
    })
    nombre: string;

    @Prop({
        unique: true,
        index: true,
    })
    direccion: string;

    @Prop({
        unique: true,
        index: true,
    })
    telefono: string;

    @Prop({
        unique: true,
        index: true,
    })
    email: string;

}

export const EmpresaSchema = SchemaFactory.createForClass(Empresa);
