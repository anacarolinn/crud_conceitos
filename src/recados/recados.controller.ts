import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
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

  @Patch(':id')
  updated(@Param('id') id: any, @Body() body: any) {
    return {
      id,
      ...body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: any, @Body() body: any) {
    return `Essa rota apaga o ID ${id}`;
  }
}
