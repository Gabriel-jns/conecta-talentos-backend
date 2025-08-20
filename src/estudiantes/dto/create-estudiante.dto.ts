export class CreateEstudianteDto {
  nombreEstudiante: string;
  apellidosEstudiante: string;
  edadEstudiante: number;
  profesionEstudiante: string;
  emailEstudiante: string;

  constructor(
    nombreEstudiante: string,
    apellidosEstudiante: string,
    edadEstudiante: number,
    profesionEstudiante: string,
    emailEstudiante: string,
  ) {
    this.nombreEstudiante = nombreEstudiante;
    this.apellidosEstudiante = apellidosEstudiante;
    this.edadEstudiante = edadEstudiante;
    this.profesionEstudiante = profesionEstudiante;
    this.emailEstudiante = emailEstudiante;
  }
}
