import { PartialType } from '@nestjs/mapped-types';
import { CreateRecadoDto } from './create-recado.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class updateRecadoDto extends PartialType(CreateRecadoDto) {
  // partial type é exportado do nest para instalar rodei o comando `npm i @nestjs/mapped-types`
  @IsBoolean()
  @IsOptional()
  readonly lido?: boolean;
}
