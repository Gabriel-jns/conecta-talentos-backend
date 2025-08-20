import {
  Controller,
  Get,
  Post,
  Body,
  //Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
//import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from 'src/entities/empresa';

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  @Post()
  create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresasService.createEmpresa(createEmpresaDto);
  }

  @Get()
  findAllEmpresas(): Empresa[] {
    return this.empresasService.findAllEmpresas();
  }

  @Get(':id')
  findOneEmpresaById(@Param('id') id: string) {
    return this.empresasService.findOneEmpresaById(Number(id));
  }

  //@Patch(':id')
  //update(@Param('id') id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
  //  return this.empresasService.update(+id, updateEmpresaDto);
  //}

  @Delete(':id')
  remove(@Param('id') id: string): Empresa[] {
    return this.empresasService.removeEmpresa(Number(id));
  }
}
