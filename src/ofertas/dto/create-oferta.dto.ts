import { TipoOferta } from 'src/enums/tipooferta';
import { EstadoOferta } from 'src/enums/estadooferta';
export class CreateOfertaDto {
  descripcion: string;
  cargo: string;
  region: string;
  tipo: TipoOferta;
  estado: EstadoOferta;
  empresa: string;
}
