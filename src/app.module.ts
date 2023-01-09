import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { EmpresaModule } from './empresa/empresa.module';
import { ProductoModule } from './producto/producto.module';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [UsuarioModule, EmpresaModule, ProductoModule],
})
export class AppModule {}
