import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters } from '@nestjs/common';
import { StackBoardService } from './stack-board.service';
import { CreateStackBoardDto } from './dto/create-stack-board.dto';
import { UpdateStackBoardDto } from './dto/update-stack-board.dto';
import { PrismaClientExceptionFilter } from 'src/db-local-service-util/exception-filters/prisma-exception.filter';

@Controller('stackboard')
@UseFilters(PrismaClientExceptionFilter) 
export class StackBoardController {
  constructor(private readonly stackBoardService: StackBoardService) {}

  @Post()
  create(@Body() createStackBoardDto: CreateStackBoardDto) {
    return this.stackBoardService.create(createStackBoardDto);
  }

  @Get()
  findAll() {
    return this.stackBoardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stackBoardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStackBoardDto: UpdateStackBoardDto) {
    return this.stackBoardService.update(+id, updateStackBoardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stackBoardService.remove(+id);
  }
}
