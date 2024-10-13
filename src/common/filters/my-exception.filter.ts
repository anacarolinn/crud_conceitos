import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

// depois de ter colocado no global main.ts ou no módulo raiz qualquer mensagem de BadRequestException irá ter as configurações daqui
// http exception pega todos os erros
@Catch(HttpException)
// tipando o erro
export class MyExceptionFilter<T extends HttpException>
  implements ExceptionFilter
{
  catch(exception: T, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse();
    const request = context.getRequest();

    const statusCode = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    const error =
      typeof response === 'string'
        ? {
            message: exceptionResponse,
          }
        : (exceptionResponse as object);

    response.status(statusCode).json({
      ...error,
      data: new Date().toISOString(),
      path: request.url,
    });
  }
}
