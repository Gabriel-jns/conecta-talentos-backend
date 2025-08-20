import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @Post()
  createEstudiante(@Body() createEstudianteDto: CreateEstudianteDto) {
    return this.estudiantesService.createEstudiante(createEstudianteDto);
  }

  @Get()
  findAllEstudiantes() {
    return this.estudiantesService.findAllEstudiantes();
  }

  @Get(':id')
  findOneEstudianteById(@Param('id') id: string) {
    return this.estudiantesService.findOneEstuadianteById(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEstudianteDto: UpdateEstudianteDto,
  ) {
    return this.estudiantesService.updateEstudiante(
      Number(id),
      updateEstudianteDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudiantesService.removeEstudiante(Number(id));
  }
}
