import { EstadoPostulacion } from 'src/enums/estadopostulacion';

export class Postulacion {
  id: number;
  fechaPostulacion: Date;
  estudiante: string;
  estado: EstadoPostulacion;

  constructor(
    id: number,
    fechaPostulacion: Date,
    estudiante: string,
    estado: EstadoPostulacion,
  ) {
    this.id = id;
    this.fechaPostulacion = fechaPostulacion;
    this.estudiante = estudiante;
    this.estado = estado;
  }
}
