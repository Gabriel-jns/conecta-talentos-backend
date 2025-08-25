import { Module } from '@nestjs/common';
import { OfertasService } from './ofertas.service';
import { OfertasController } from './ofertas.controller';

import { EmpresasModule } from 'src/empresas/empresas.module';

@Module({
  controllers: [OfertasController],
  providers: [OfertasService],
  imports: [EmpresasModule],
})
export class OfertasModule {}
