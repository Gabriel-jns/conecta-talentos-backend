import { TipoEmpresa } from 'src/enums/tipoempresa';
export class CreateEmpresaDto {
  nombreEmpresa: string;
  sitioWebEmpresa: string;
  tipoEmpresa: TipoEmpresa;
}
