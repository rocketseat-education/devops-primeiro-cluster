import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getExample(): string {
    return 'Estou rodando no K8S';
  }
}
