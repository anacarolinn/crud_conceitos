import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { tap } from 'rxjs'; // utilizada quando eu não quero manipular os dados, eu só quero observar coisas acontecendo

export class TimingConnectionInterceptor implements NestInterceptor {
  async intercept(context: ExecutionContext, next: CallHandler<any>) {
    const startTime = Date.now();

    console.log('TimingConnectionInterceptor executado ANTES');

    // await new Promise(resolve => setTimeout(resolve, 10000));

    return next.handle().pipe(
      tap(() => {
        const finalTime = Date.now();
        const elapsed = finalTime - startTime;
        console.log(
          `TimingConnectionInterceptor: levou ${elapsed}ms para executar.`,
        );
      }),
    );
  }
}
