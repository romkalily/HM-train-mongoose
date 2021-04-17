import { HealthModule } from './health/health.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TerminusModule } from '@nestjs/terminus';
import { CatsModule } from './cat/cat.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.DB_URI,
      }),
    }),
    CatsModule,
    TerminusModule,
    HealthModule
  ],
})
export class AppModule { }
