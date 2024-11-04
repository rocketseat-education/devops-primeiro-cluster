import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller()
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get('/healthz')
  helthz(): string {
    const  health = this.healthService.checkHealth();
    if (health) {
      return 'OK';
    }
    throw new Error();
  }

  @Get('/readyz')
  readyz(): string {
    return this.healthService.checkReady();
  }
}
