import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOfertaDto } from './dto/create-oferta.dto';
import { UpdateOfertaDto } from './dto/update-oferta.dto';
import { EmpresasService } from 'src/empresas/empresas.service';
//import { Empresa } from 'src/entities/empresa';
import { OfertaLaboral } from 'src/entities/ofertalaboral';
import { EstadoOferta } from 'src/enums/estadooferta';

//import { Postulacion } from 'src/entities/postulacion';

@Injectable()
export class OfertasService {
  ofertas: OfertaLaboral[] = [];
  constructor(private readonly empresasService: EmpresasService) {}

  createOferta(ofertaACrear: CreateOfertaDto): OfertaLaboral {
    //const empresas = this.empresasService.findAllEmpresas();
    const empresaEncontrada = this.empresasService.empresas.find(
      (empresa) => empresa.nombre === ofertaACrear.empresa,
    );
    if (!empresaEncontrada) {
      throw new NotFoundException('Empresa no encontrada');
    }
    const nuevaOferta = new OfertaLaboral(
      this.ofertas.length + 1,
      new Date(),
      ofertaACrear.descripcion,
      ofertaACrear.cargo,
      ofertaACrear.region,
      ofertaACrear.tipo,
      ofertaACrear.estado,
      ofertaACrear.empresa,
      [],
    );
    this.ofertas.push(nuevaOferta);
    return nuevaOferta;
  }

  findAllOfertas(
    empresa?: string,
    estadoOferta?: EstadoOferta,
  ): OfertaLaboral[] {
    if (empresa) {
      return this.ofertas.filter(
        (oferta: OfertaLaboral) => oferta.empresa === empresa,
      );
    }
    if (estadoOferta) {
      return this.ofertas.filter(
        (oferta: OfertaLaboral) => oferta.estado === estadoOferta,
      );
    }
    return this.ofertas;
  }

  findOneOfertaById(id: number): OfertaLaboral {
    const ofertaEnBusqueda = this.ofertas.find(
      (oferta: OfertaLaboral) => oferta.id === id,
    );
    if (!ofertaEnBusqueda) {
      throw new NotFoundException('Oferta no encontrada');
    }
    return ofertaEnBusqueda;
  }

  updateOferta(
    idOferta: number,
    updateOfertaDto: UpdateOfertaDto,
  ): OfertaLaboral {
    const ofertaBuscada = this.ofertas.find(
      (oferta: OfertaLaboral) => oferta.id === idOferta,
    );
    if (!ofertaBuscada) {
      throw new NotFoundException('Oferta no encontrada');
    }
    ofertaBuscada.estado = updateOfertaDto.estadoOferta;
    console.log(ofertaBuscada);
    console.log(updateOfertaDto);
    return ofertaBuscada;
  }

  removeOferta(id: number): OfertaLaboral[] {
    const ofertaAEliminar = this.ofertas.find(
      (oferta: OfertaLaboral) => oferta.id === id,
    );
    if (!ofertaAEliminar) {
      throw new NotFoundException('Oferta no encontrada');
    }
    return this.ofertas.filter((oferta: OfertaLaboral) => oferta.id !== id);
  }
}
