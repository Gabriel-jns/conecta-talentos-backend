import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { OfertasService } from './ofertas.service';
import { CreateOfertaDto } from './dto/create-oferta.dto';
import { UpdateOfertaDto } from './dto/update-oferta.dto';
import { OfertaLaboral } from 'src/entities/ofertalaboral';
import { EstadoOferta } from 'src/enums/estadooferta';
@Controller('ofertas')
export class OfertasController {
  constructor(private readonly ofertasService: OfertasService) {}

  @Post()
  createOferta(@Body() createOfertaDto: CreateOfertaDto) {
    return this.ofertasService.createOferta(createOfertaDto);
  }

  @Get()
  findAll(
    @Query('empresa') empresa?: string,
    @Query('estadoOferta') estadoOferta?: EstadoOferta,
  ): OfertaLaboral[] {
    return this.ofertasService.findAllOfertas(empresa, estadoOferta);
  }

  @Get(':id')
  findOneOfertaById(@Param('id') id: string) {
    return this.ofertasService.findOneOfertaById(Number(id));
  }

  @Patch(':id')
  updateOferta(
    @Param('id') id: string,
    @Body() updateOfertaDto: UpdateOfertaDto,
  ) {
    return this.ofertasService.updateOferta(Number(id), updateOfertaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ofertasService.removeOferta(Number(id));
  }
}
