import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
//import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from 'src/entities/empresa';
import { TipoEmpresa } from 'src/enums/tipoempresa';

@Injectable()
export class EmpresasService {
  empresas: Empresa[] = [
    new Empresa(
      1,
      'TechInnovations',
      'www.techinnovations.com',
      TipoEmpresa.MEDIANA,
    ),
  ];

  createEmpresa(empresaACrear: CreateEmpresaDto): Empresa {
    const empresaExiste = this.empresas.find(
      (empresa: Empresa) =>
        empresa.nombre.toLowerCase() ===
        empresaACrear.nombreEmpresa.toLowerCase(),
    );
    if (empresaExiste) {
      throw new BadRequestException('Empresa ya registrada');
    }
    const nuevaEmpresa = new Empresa(
      this.empresas.length + 1,
      empresaACrear.nombreEmpresa,
      empresaACrear.sitioWebEmpresa,
      empresaACrear.tipoEmpresa,
    );
    this.empresas.push(nuevaEmpresa);
    return nuevaEmpresa;
  }

  findAllEmpresas(): Empresa[] {
    return this.empresas;
  }

  findOneEmpresaById(id: number) {
    const empresaEnBusqueda = this.empresas.find(
      (empresa: Empresa) => empresa.id === id,
    );
    if (!empresaEnBusqueda) {
      throw new NotFoundException(' Empresa no encontrada');
    }
    return empresaEnBusqueda;
  }

  //update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
  //  return `This action updates a #${id} empresa`;
  //}

  removeEmpresa(id: number): Empresa[] {
    const empresaAEliminar = this.empresas.find(
      (empresa: Empresa) => empresa.id === id,
    );
    if (!empresaAEliminar) {
      throw new NotFoundException('Empresa no encontrada');
    }
    return this.empresas.filter((empresa: Empresa) => empresa.id !== id);
  }
}
