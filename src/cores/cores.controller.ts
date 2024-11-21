import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoresService } from './cores.service';
import { CreateCoreDto } from './dto/create-core.dto';
import { UpdateCoreDto } from './dto/update-core.dto';

@Controller('cores')
export class CoresController {
  constructor(private readonly coresService: CoresService) {}

  @Post()
  create(@Body() createCoreDto: CreateCoreDto) {
    return this.coresService.create(createCoreDto);
  }

  @Get()
  findAll() {
    return this.coresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoreDto: UpdateCoreDto) {
    return this.coresService.update(+id, updateCoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coresService.remove(+id);
  }
}
