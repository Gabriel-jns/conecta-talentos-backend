import { TipoEmpresa } from 'src/enums/tipoempresa';

export class Empresa {
  id: number;
  nombre: string;
  sitioWeb: string;
  tipo: TipoEmpresa;

  constructor(id: number, nombre: string, sitioWeb: string, tipo: TipoEmpresa) {
    this.id = id;
    this.nombre = nombre;
    this.sitioWeb = sitioWeb;
    this.tipo = tipo;
  }
}
