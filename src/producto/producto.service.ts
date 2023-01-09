import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductoService {

  private products:Producto[]= [
    {
      id:'1',
      nombre:'Manzana',
      precio:2.50,
      promocion:true,
      categoria:[],
      stock:20,
      foto:'https://manzana',
      codigoQR:'qiweoa'
    },
    {
      id:'2',
      nombre:'Pera',
      precio:0.50,
      promocion:true,
      categoria:[],
      stock:5,
      foto:'https://pera',
      codigoQR:'asdjas'
    },
  ]

  create(createProductoDto: CreateProductoDto) {

    let producto:Producto={
      ...createProductoDto
    }

    if(producto){    this.products.push(producto);    } else{
      return `This action is IMPOSIBLOL`
    }
    return 'This action adds a new producto';
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    let producto = this.products.find( pro => pro.id == id)

    return `This action returns a #${producto.id} producto and his name #${producto.nombre}`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
