import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateRecadoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
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
