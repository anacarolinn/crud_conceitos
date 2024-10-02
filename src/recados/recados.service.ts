import { Injectable, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { updateRecadoDto } from './dto/update-recado.dto';

@Injectable()
export class RecadosService {
  private lastId = 1;
  private recados: Recado[] = [
    {
      id: 1,
      texto: 'Este é um recado de teste',
      de: 'Clebersp',
      para: 'João',
      lido: false,
      data: new Date(),
    },
  ];

  throwNotFoundError() {
    throw new NotFoundException('Recado não encontrado');
  }

  findAll() {
    return this.recados;
  }

  findOne(id: string) {
    const recado = this.recados.find(item => item.id === +id); // o sinal de + antes de id converte ele para number, já que aqui ele ta sendo como uma sting

    if (recado) return recado;
    //throw new HttpException('Esse erro é do servidor.', HttpStatus.NOT_FOUND); // HttpStatus.NOT_FOUND = a usar 404
    this.throwNotFoundError();
  }

  create(CreateRecadoDto: CreateRecadoDto) {
    this.lastId++;
    const id = this.lastId;
    const novoRecado = {
      id,
      ...CreateRecadoDto,
      lido: false,
      data: new Date(),
    };
    this.recados.push(novoRecado);
    return novoRecado;
  }

  update(id: string, updateRecadoDto: updateRecadoDto) {
    const recadoExistenteIndex = this.recados.findIndex(
      item => item.id === +id,
    );

    if (recadoExistenteIndex < 0) {
      this.throwNotFoundError();
    }

    if (recadoExistenteIndex >= 0) {
      const recadoExistente = this.recados[recadoExistenteIndex];

      this.recados[recadoExistenteIndex] = {
        ...recadoExistente,
        ...updateRecadoDto,
      };
    }
    return this.recados[recadoExistenteIndex];
  }

  remove(id: string) {
    const recadoExistenteIndex = this.recados.findIndex(
      // o findIndex é um método de procura do indice
      item => item.id === +id,
    );

    if (recadoExistenteIndex < 0) {
      this.throwNotFoundError();
    }

    const recado = this.recados[recadoExistenteIndex];

    this.recados.splice(recadoExistenteIndex, 1);

    return recado;
  }
}
