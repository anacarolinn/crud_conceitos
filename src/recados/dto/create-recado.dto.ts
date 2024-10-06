import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateRecadoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  readonly texto: string; // o readonly é uma boa prática
}
