import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(`ConfigMap: ${process.env.APP}`);
    console.log(`Secret: ${process.env.API_KEY}`);
    return 'Hello World!';
  }

  getExample(): string {
    const file = createWriteStream('rocketset.txt');
    for (let x = 0; x < 10000; x++) {
      file.write('Estou escrevendo em um arquivo\n');
    }
    return 'Estou rodando no K8S';
  }
}
