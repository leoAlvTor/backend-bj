import {IsString} from "class-validator";

export class CreateEmpresaDto {

    @IsString()
    nombre: string;
    @IsString()
    direccion: string;
    @IsString()
    telefono: string;
    @IsString()
    email: string;

}
