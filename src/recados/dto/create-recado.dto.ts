import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateRecadoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  readonly texto: string; // o readonly é uma boa prática

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  readonly de: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  readonly para: string;
}
