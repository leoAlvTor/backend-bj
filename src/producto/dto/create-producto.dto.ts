export class CreateProductoDto {
    id:string
    nombre:string
    precio:number
    promocion:boolean
    categoria:[]
    stock:number
    foto:string
    codigoQR:string
}
