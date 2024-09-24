import { Controller, Get } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  // essa rota encontrar todos os recados
  // /recados/
  @Get()
  findAll() {
    return 'Essa rota retorna TODOS os recados';
  }

  // essa rota encontra um recado
  // /recados/:id/
  @Get('fixa/:dinamico/:id')
  findOne() {
    return 'Essa rota retorna UM recado';
  }
}
