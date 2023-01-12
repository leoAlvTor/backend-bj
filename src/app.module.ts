import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { EmpresaModule } from './empresa/empresa.module';
import { ProductoModule } from './producto/producto.module';
import {MongooseModule} from "@nestjs/mongoose";
import { PedidoModule } from './pedido/pedido.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/backend'),
    UsuarioModule, EmpresaModule, ProductoModule, PedidoModule, AuthModule],
})
export class AppModule {}
