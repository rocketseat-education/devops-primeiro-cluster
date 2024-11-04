import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  checkHealth(): string {
    return 'OK';
  }
  
  checkReady(): string {
    return 'OK';
  }
}
