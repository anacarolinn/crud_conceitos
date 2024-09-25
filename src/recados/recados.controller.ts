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
  Query,
} from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @HttpCode(HttpStatus.OK)
  // essa rota encontrar todos os recados
  // /recados/
  @Get()
  findAll(@Query() pagination: any) {
    const { limit = 10, offset = 0 } = pagination;
    return `Retorna todos os recados. Limit=${limit} e Offset=${offset}.`;
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
