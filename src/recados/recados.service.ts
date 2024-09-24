import { Injectable } from '@nestjs/common';

@Injectable()
export class RecadosService {
  getRecado(): string {
    return 'recados';
  }
}
