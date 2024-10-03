import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(process.env.APP);
    return 'Hello World!';
  }

  getExample(): string {
    return 'Estou rodando no K8S';
  }
}
