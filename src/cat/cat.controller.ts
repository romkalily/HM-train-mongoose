import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { Cat } from 'src/schemas/cat.schema';
import { CatsService } from './cat.service';
import { CreateCatDto } from './dto/createCat.dto';
import { UpdateCatDto } from './dto/updateCat.dto';

@Controller('cat')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createData: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createData);
  }

  @Get()
  get(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findById(id);
  }

  @Patch(':id')
  update(@Body() updateData: UpdateCatDto, @Param('id') id: string): Promise<Cat> {
    return this.catsService.update(id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.catsService.remove(id);
  }
}
