import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { EmpresaModule } from './empresa/empresa.module';
import { ProductoModule } from './producto/producto.module';

@Module({
  imports: [UsuarioModule, EmpresaModule, ProductoModule],
})
export class AppModule {}
