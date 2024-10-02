export class Recado {
  id: number; // não precisa disso, pois é gerado automaticamente
  texto: string;
  de: string;
  para: string;
  lido: boolean; // não precisa saber na hora pois ao criar não vai estar lido
  data: Date; // pode ser gerado automaticamente ao criar
}
