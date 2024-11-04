import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HealthService } from './health/health.service';
import { HealthController } from './health/health.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, HealthController],
  providers: [AppService, HealthService],
})
export class AppModule {}
