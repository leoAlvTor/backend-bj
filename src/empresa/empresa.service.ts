import {BadRequestException, Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import {CreateEmpresaDto} from './dto/create-empresa.dto';
import {UpdateEmpresaDto} from './dto/update-empresa.dto';
import {Empresa} from "./entities/empresa.entity";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class EmpresaService {

  constructor(
      @InjectModel(Empresa.name)
      private readonly empresaModel: Model<Empresa>,
  ) {
  }

  async create(createEmpresaDto: CreateEmpresaDto) {
    try{
      return await this.empresaModel.create(createEmpresaDto);
    }catch (error){
      this.handleExceptions(error);
    }
  }

  async findAll() {
    return this.empresaModel.find();
  }

  async findOne(name: string) {

    let empresa: Empresa;

    empresa = await this.empresaModel.findOne({nombre: name});

    if(!empresa)
      throw new NotFoundException(`Empresa with nombre "${name}" not found!`);

    return empresa;
  }

  async update(name: string, updateEmpresaDto: UpdateEmpresaDto) {
    const empresa = await this.findOne(name)
    try{
      await empresa.updateOne(updateEmpresaDto);
      return { ...empresa.toJSON(), ...updateEmpresaDto };
    }catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.empresaModel.deleteOne({_id: id});
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
