import { EstadoOferta } from 'src/enums/estadooferta';
import { TipoOferta } from 'src/enums/tipooferta';

export class OfertaLaboral {
  id: number;
  fechaCreacion: Date;
  descripcion: string;
  cargo: string;
  region: string;
  tipo: TipoOferta;
  estado: EstadoOferta;
  empresa: string;
  postulaciones: number;

  constructor(
    id: number,
    fechaCreacion: Date,
    descripcion: string,
    cargo: string,
    region: string,
    tipo: TipoOferta,
    estado: EstadoOferta,
    empresa: string,
    postulaciones: number,
  ) {
    this.id = id;
    this.fechaCreacion = fechaCreacion;
    this.descripcion = descripcion;
    this.cargo = cargo;
    this.region = region;
    this.tipo = tipo;
    this.estado = estado;
    this.empresa = empresa;
    this.postulaciones = postulaciones;
  }
}
