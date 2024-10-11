import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type !== 'param' || metadata.data !== 'id') {
      // se o tipo do metadata não for um param e se ee não tiver o nome 'id' vc vai pular não vai fazer nada
      // agora é possível usar ele no controller todo
      return value;
    }

    const parsedValue = Number(value);

    if (isNaN(parsedValue)) {
      throw new BadRequestException(
        'ParseINtIdPipe espera uma string numérica',
      );
    }

    if (parsedValue < 0) {
      throw new BadRequestException(
        'ParseINtIdPipe espera um número maior do que zero',
      );
    }

    console.log('Pipe value', value);
    console.log('Pipe metadata', metadata);
    return parsedValue;
  }
}
