import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class SimpleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // req = request = requisição, res = response = resposta
    console.log('SimpleMiddleware: Olá');
    const authorization = req.headers?.authorization;

    if (authorization) {
      req['user'] = {
        nome: 'Luiz',
        sobrenome: 'Otávio',
        role: 'admin',
      };
    }
    res.setHeader('CABECALHO', 'DO MIDDLEWARE');

    // terminando a cadeia de chamadas, aqui não faz mais nada após isso
    // return res.status(404).send({
    //  message: 'Não encontrado',
    //});

    //return termina a chamada de uma função

    next(); // passa para o próximo middleware

    console.log('SimpleMiddleware: Tchau');

    res.on('finish', () => {
      console.log('SimpleMiddleware: Terminou');
    });
  }
}
