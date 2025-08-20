import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from 'src/entities/estudiante';

@Injectable()
export class EstudiantesService {
  estudiantes: Estudiante[] = [
    new Estudiante(
      1,
      'pedro',
      'gonzalez herrera',
      25,
      'profesor',
      'pedrogonzalez@mail.com',
    ),
  ];

  createEstudiante(nuevoEstudiante: CreateEstudianteDto): Estudiante {
    const emailValido = this.estudiantes.find(
      (estudiante: Estudiante) =>
        estudiante.email === nuevoEstudiante.emailEstudiante,
    );
    if (emailValido) {
      throw new BadRequestException('Estudiante ya registrado');
    }
    const estudianteCreado: Estudiante = new Estudiante(
      this.estudiantes.length + 1,
      nuevoEstudiante.nombreEstudiante,
      nuevoEstudiante.apellidosEstudiante,
      nuevoEstudiante.edadEstudiante,
      nuevoEstudiante.profesionEstudiante,
      nuevoEstudiante.emailEstudiante,
    );

    this.estudiantes.push(estudianteCreado);
    return estudianteCreado;
  }

  findAllEstudiantes(): Estudiante[] {
    return this.estudiantes;
  }

  findOneEstuadianteById(id: number) {
    const estudianteEnBusqueda = this.estudiantes.find(
      (estudiante: Estudiante) => estudiante.id === id,
    );
    if (!estudianteEnBusqueda) {
      throw new NotFoundException('Estudiante no encontrado');
    }
    return estudianteEnBusqueda;
  }

  updateEstudiante(
    idEstudiante: number,
    updateEstudianteDto: UpdateEstudianteDto,
  ) {
    const estudianteExiste = this.estudiantes.find(
      (estudiante: Estudiante) => estudiante.id === idEstudiante,
    );
    if (!estudianteExiste) {
      throw new NotFoundException('Estudiante no encontrado');
    }
    if (updateEstudianteDto.nombre) {
      estudianteExiste.nombre = updateEstudianteDto.nombre;
    }
    if (updateEstudianteDto.apellidos) {
      estudianteExiste.apellidos = updateEstudianteDto.apellidos;
    }
    if (updateEstudianteDto.edad) {
      estudianteExiste.edad = updateEstudianteDto.edad;
    }
    if (updateEstudianteDto.profesion) {
      estudianteExiste.profesion = updateEstudianteDto.profesion;
    }
    return estudianteExiste;
  }

  removeEstudiante(id: number): Estudiante[] {
    const estudianteExistente = this.estudiantes.find(
      (estudiante: Estudiante) => estudiante.id === id,
    );
    if (!estudianteExistente) {
      throw new NotFoundException('Estudiante no encontrado');
    }
    return this.estudiantes.filter(
      (estudiante: Estudiante) => estudiante.id !== id,
    );
  }
}
