import { Controller, Get } from "@nestjs/common";
import { HealthCheck, HealthCheckService, HttpHealthIndicator, MongooseHealthIndicator } from "@nestjs/terminus";

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private mongoose: MongooseHealthIndicator,
    private http: HttpHealthIndicator
  ) { }

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      async () => this.mongoose.pingCheck('mongoose'),
      async () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
      async () => this.http.pingCheck('crash-http', 'https://docs.nes'),
    ]);
  }
}
