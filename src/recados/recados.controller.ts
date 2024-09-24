import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @HttpCode(HttpStatus.OK)
  // essa rota encontrar todos os recados
  // /recados/
  @Get()
  findAll() {
    return 'Essa rota retorna TODOS os recados';
  }

  // essa rota encontra um recado
  // /recados/:id/
  @Get(':id')
  findOne(@Param('id') id: any) {
    return `Essa rota retorna o recado ID ${id}`;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }
}
