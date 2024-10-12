import { Injectable } from '@nestjs/common';
import { CreateStackExchangeDto } from './dto/create-stack-exchange.dto';
import { UpdateStackExchangeDto } from './dto/update-stack-exchange.dto';
import { StackExchangeLocalServiceUtil } from '../db-local-service-util/stack-exchange-local-service-util/stack-exchange-local-service-util';
import { StackBoardPersistenceFactory } from '../db-local-service-util/persistence-factory/stack-board-persistence-factory';



@Injectable()
export class StackExchangeService {

  constructor(private readonly stackBoardPersistenceFactory: StackBoardPersistenceFactory) {}
  
  create(createStackExchangeDto: CreateStackExchangeDto) {
    StackExchangeLocalServiceUtil.createStackExchange(createStackExchangeDto);
  }

  findAll() {
    return `This action returns all stackExchange`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stackExchange`;
  }

  update(id: number, updateStackExchangeDto: UpdateStackExchangeDto) {
    return `This action updates a #${id} stackExchange`;
  }

  remove(id: number) {
    return `This action removes a #${id} stackExchange`;
  }
}
