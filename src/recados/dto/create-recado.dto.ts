import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateRecadoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  readonly texto: string; // o readonly é uma boa prática
  readonly de: string;
  readonly para: string;
}
