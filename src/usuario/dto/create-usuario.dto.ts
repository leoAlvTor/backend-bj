import { IsString } from "class-validator"

export class CreateUsuarioDto {
  
    @IsString()
    cedula:string

    @IsString()
    nombre:string

    @IsString()
    apellidos:string

    @IsString()
    telefono:string

    @IsString()
    direcciom: string

    @IsString()
    fechaNac: string

    @IsString()
    Rol:string

    @IsString()
    email:string

    @IsString()
    contrasenia:string

    @IsString()
    sexo:string



}
