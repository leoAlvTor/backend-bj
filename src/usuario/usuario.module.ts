import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioController } from './usuario.controller';
import { Usuario, UsuarioSchema } from './entities/usuario.entity';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  imports:[
    MongooseModule.forFeature([
      {
        name: Usuario.name,
        schema: UsuarioSchema,
      }
    ])
  ]
})
export class UsuarioModule {}
