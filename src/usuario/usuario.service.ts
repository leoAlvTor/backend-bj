import {BadRequestException, Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectModel(Usuario.name)
    private readonly usuarioModel: Model<Usuario>,
) {
}


  async create(createUsuarioDto: CreateUsuarioDto) {
    try{
      return await this.usuarioModel.create(createUsuarioDto);
    }catch (error){
      this.handleExceptions(error);
    }
  }

  async findAll() {
    return this.usuarioModel.find();
  }

  async findOne(cedula: string) {
    let usuario: Usuario;

    usuario = await this.usuarioModel.findOne({nombre: cedula});

    if(!usuario)
      throw new NotFoundException(`User with cedula "${cedula}" not found!`);

    return usuario;
  }



  async update(cedula: string, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.findOne(cedula)
    try{
      await usuario.updateOne(updateUsuarioDto);
      return { ...usuario.toJSON(), ...updateUsuarioDto };
    }catch (error) {
      this.handleExceptions(error);
    }
  }




  async remove(id: string) {
    const { deletedCount } = await this.usuarioModel.deleteOne({_id: id});
    if(deletedCount === 0)
      throw new BadRequestException(`User with id "${ id }" not found!`)
    return true;;
  }


  private handleExceptions( error: any ) {
    if ( error.code === 11000 ) {
      throw new BadRequestException(`User already exists in db ${ JSON.stringify( error.keyValue ) }`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create User - Check server logs`);
  }
}
