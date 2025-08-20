import { TipoEmpresa } from 'src/enums/tipoempresa';
export class CreateEmpresaDto {
  nombreEmpresa: string;
  sitioWebEmpresa: string;
  tipoEmpresa: TipoEmpresa;

  constructor(
    nombreEmpresa: string,
    sitioWebEmpresa: string,
    tipoEmpresa: TipoEmpresa,
  ) {
    this.nombreEmpresa = nombreEmpresa;
    this.sitioWebEmpresa = sitioWebEmpresa;
    this.tipoEmpresa = tipoEmpresa;
  }
}
