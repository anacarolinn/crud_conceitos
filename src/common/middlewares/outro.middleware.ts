import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class OutroMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // req = request = requisição, res = response = resposta
    console.log('OutroMiddleware: Olá');
    const authorization = req.headers?.authorization;

    if (authorization) {
      req['user'] = {
        nome: 'Luiz',
        sobrenome: 'Otávio',
      };
    }
    res.setHeader('CABECALHO', 'DO MIDDLEWARE');

    // terminando a cadeia de chamadas, aqui não faz mais nada após isso
    // return res.status(404).send({
    //  message: 'Não encontrado',
    //});

    next();

    console.log('OutroMiddleware: Tchau');
  }
}
