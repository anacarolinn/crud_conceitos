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
import { RecadosService } from './recados.service';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { updateRecadoDto } from './dto/update-recado.dto';

//

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @HttpCode(HttpStatus.OK)
  // essa rota encontrar todos os recados
  // /recados/
  @Get()
  findAll(@Query() pagination: any) {
    const { limit = 10, offset = 0 } = pagination;
    // return `Retorna todos os recados. Limit=${limit} e Offset=${offset}.`;
    return this.recadosService.findAll();
  }

  // essa rota encontra um recado
  // /recados/:id/
  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.recadosService.findOne(id);
  }

  @Post()
  create(@Body() CreateRecadoDto: CreateRecadoDto) {
    return this.recadosService.create(CreateRecadoDto);
  }

  @Patch(':id')
  updated(@Param('id') id: any, @Body() updateRecadoDto: updateRecadoDto) {
    return this.recadosService.update(id, updateRecadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.recadosService.remove(id);
  }
}
