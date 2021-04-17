import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TerminusModule } from '@nestjs/terminus';
import { Cat, CatSchema } from 'src/schemas/cat.schema';
import { HealthController } from './health.controller';

@Module({
  imports: [
    TerminusModule,
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
  ],
  controllers: [HealthController],
})
export class HealthModule { }
