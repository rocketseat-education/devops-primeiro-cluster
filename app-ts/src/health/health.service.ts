import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  checkHealth(): string {
    console.log('Chequei a saúde da aplicação!');
    return 'OK';
  }
  
  checkReady(): string {
    console.log('Chequei a prontidão da aplicação!');
    return 'OK';
  }
}
