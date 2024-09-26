import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Recado } from './entities/recado.entity';

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

  findAll() {
    return this.recados;
  }

  findOne(id: string) {
    const recado = this.recados.find(item => item.id === +id); // o sinal de + antes de id converte ele para number, já que aqui ele ta sendo como uma sting

    if (recado) return recado;
    throw new HttpException('Esse erro é do servidor.', HttpStatus.NOT_FOUND);
  }

  create(body: any) {
    this.lastId++;
    const id = this.lastId;
    const novoRecado = {
      id,
      ...body,
    };
    this.recados.push(novoRecado);
    return novoRecado;
  }

  update(id: string, body: any) {
    const recadoExistenteIndex = this.recados.findIndex(
      item => item.id === +id,
    );

    if (recadoExistenteIndex >= 0) {
      const recadoExistente = this.recados[recadoExistenteIndex];

      this.recados[recadoExistenteIndex] = {
        ...recadoExistente,
        ...body,
      };
    }
  }

  remove(id: string) {
    const recadoExistenteIndex = this.recados.findIndex(
      // o findIndex é um método de procura do indice
      item => item.id === +id,
    );
    if (recadoExistenteIndex >= 0) {
      this.recados.splice(recadoExistenteIndex, 1);
    }
  }
}
