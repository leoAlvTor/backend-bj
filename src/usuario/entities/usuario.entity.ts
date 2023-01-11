import { Schema } from '@nestjs/mongoose'
import { Prop, SchemaFactory } from '@nestjs/mongoose/dist';
import { Document } from "mongoose";
export class Usuario extends Document {
    @Prop({
        unique:true,
        index:true,
    })
    cedula:string

    @Prop({
        index:true,
    })
    nombre:string

    @Prop({
        index:true,
    })
    apellidos:string

    @Prop({
        index:true,
    })
    telefono:string

    @Prop({
        index:true,
    })
    direcciom: string

    @Prop({
        index:true,
    })
    fechaNac: string

    @Prop({
        index:true,
    })
    Rol:string

    @Prop({
        index:true,
    })
    email:string

    @Prop({
        index:true,
    })
    contrasenia:string

    @Prop({
        index:true,
    })
    sexo:string

}


export const UsuarioSchema = SchemaFactory.createForClass(Usuario);