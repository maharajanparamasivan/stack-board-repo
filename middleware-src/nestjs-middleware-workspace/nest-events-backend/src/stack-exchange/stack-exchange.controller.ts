import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters } from '@nestjs/common';
import { StackExchangeService } from './stack-exchange.service';
import { CreateStackExchangeDto } from './dto/create-stack-exchange.dto';
import { UpdateStackExchangeDto } from './dto/update-stack-exchange.dto';
import { PrismaClientExceptionFilter } from 'src/db-local-service-util/exception-filters/prisma-exception.filter';

@Controller('stackexchange')
@UseFilters(PrismaClientExceptionFilter) 
export class StackExchangeController {
  constructor(private readonly stackExchangeService: StackExchangeService) {}

  @Post()
  create(@Body() createStackExchangeDto: CreateStackExchangeDto) {
  return this.stackExchangeService.create(createStackExchangeDto);
  }

  @Get()
  findAll() {
    return this.stackExchangeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stackExchangeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStackExchangeDto: UpdateStackExchangeDto) {
    return this.stackExchangeService.update(+id, updateStackExchangeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stackExchangeService.remove(+id);
  }
}
