import { Injectable } from '@nestjs/common';
import { CreateStackBoardDto } from './dto/create-stack-board.dto';
import { UpdateStackBoardDto } from './dto/update-stack-board.dto';

@Injectable()
export class StackBoardService {
  create(createStackBoardDto: CreateStackBoardDto) {
    return 'This action adds a new stackBoard';
  }

  findAll() {
    return `This action returns all stackBoard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stackBoard`;
  }

  update(id: number, updateStackBoardDto: UpdateStackBoardDto) {
    return `This action updates a #${id} stackBoard`;
  }

  remove(id: number) {
    return `This action removes a #${id} stackBoard`;
  }
}
