import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthTokenInterceptor implements NestInterceptor {
  async intercept(context: ExecutionContext, next: CallHandler<any>) {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1]; // pega o primeiro[1] argumento depois do espaço ' '

    // CHECAR O TOKEN
    if (!token || token != '123456') {
      throw new UnauthorizedException('Usuário não logado');
    }

    return next.handle();
  }
}
