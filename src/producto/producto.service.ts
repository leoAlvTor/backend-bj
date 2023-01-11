import {BadRequestException, Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import {CreateProductoDto} from './dto/create-producto.dto';
import {UpdateProductoDto} from './dto/update-producto.dto';
import {Producto} from "./entities/producto.entity";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class ProductoService {

  constructor(
      @InjectModel(Producto.name)
      private readonly productoModel: Model<Producto>,
  ) {
  }

  async create(createProductoDto: CreateProductoDto) {
    try{
      return await this.productoModel.create(createProductoDto);
    }catch (error){
      this.handleExceptions(error);
    }
  }

  async findAll() {
    return this.productoModel.find();
  }

  async findOne(name: string) {

    let producto: Producto;

    producto = await this.productoModel.findOne({nombre: name});

    if(!producto)
      throw new NotFoundException(`Empresa with nombre "${name}" not found!`);

    return producto;
  }

  async update(name: string, updateProductoDto: UpdateProductoDto) {
    const producto = await this.findOne(name)
    try{
      await producto.updateOne(updateProductoDto);
      return { ...producto.toJSON(), ...updateProductoDto };
    }catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.productoModel.deleteOne({_id: id});
    if(deletedCount === 0)
      throw new BadRequestException(`Pokemon with id "${ id }" not found!`)
    return true;
  }

  private handleExceptions( error: any ) {
    if ( error.code === 11000 ) {
      throw new BadRequestException(`Empresa already exists in db ${ JSON.stringify( error.keyValue ) }`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create Empresa - Check server logs`);
  }
}
