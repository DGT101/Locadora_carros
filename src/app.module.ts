import { Module } from '@nestjs/common';
import { CoresModule } from './cores/cores.module';
import { CarrosModule } from './carros/carros.module';
import { ClientesModule } from './clientes/clientes.module';
import { LocacaoModule } from './locacao/locacao.module';

@Module({
  imports: [CoresModule, CarrosModule, ClientesModule, LocacaoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
