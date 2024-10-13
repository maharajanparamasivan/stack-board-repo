import { Injectable } from '@nestjs/common';
import { CreateStackExchangeDto } from './dto/create-stack-exchange.dto';
import { UpdateStackExchangeDto } from './dto/update-stack-exchange.dto';
import { StackExchangeServiceProviderUtil } from '../db-local-service-util/stack-exchange-service-provider-util/stack-exchange-service-provider-util';
import { StackExchangePersistenceFactory } from '../db-local-service-util/persistence-factory/persistence-factory';



@Injectable()
export class StackExchangeService {

  //Creating an object of the persistence factory which gives you the singleton object for the specific entity
  constructor(private readonly stackExchangesPersistenceFactory: StackExchangePersistenceFactory) {}
  
   create(createStackExchangeDto: CreateStackExchangeDto) {
    return StackExchangeServiceProviderUtil.createStackExchange(createStackExchangeDto);
  }
  
  findAll() {
    return StackExchangeServiceProviderUtil.fetchAllStackExchange();
  }

  findOne(id: number) {
    return `This action returns a #${id} stackExchange`;
  }

  update(id: number, updateStackExchangeDto: UpdateStackExchangeDto) {
    return StackExchangeServiceProviderUtil.updateStackExchange(id, updateStackExchangeDto);
  }

  remove(id: number) {
    return StackExchangeServiceProviderUtil.deleteStackExchange(id);
  }
}
