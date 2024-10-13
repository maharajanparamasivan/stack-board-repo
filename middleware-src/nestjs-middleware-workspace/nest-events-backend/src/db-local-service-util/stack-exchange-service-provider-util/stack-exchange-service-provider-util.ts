import { Injectable } from '@nestjs/common';

import { StackExchangePersistenceService } from '@stackboard/prisma-pg-connector';
import { CreateStackExchangeDto } from 'src/stack-exchange/dto/create-stack-exchange.dto';
import { UpdateStackExchangeDto } from 'src/stack-exchange/dto/update-stack-exchange.dto';
import { StackExchangeModel } from 'src/stack-exchange/entities/stack-exchange.entity';


@Injectable()
export class StackExchangeServiceProviderUtil {

    private static stackExchangePersistence: StackExchangePersistenceService;
    // Static initializer to inject dependencies into static context
    public static getInstance(stackExchangePersistence: StackExchangePersistenceService) {
        this.stackExchangePersistence = stackExchangePersistence;
    }
      
    public static createStackExchange(stackExchangeDto: CreateStackExchangeDto): Promise<StackExchangeModel> {
        return this.stackExchangePersistence.createStackExchange(stackExchangeDto);
    }
    public static updateStackExchange(stackExchangeId: number, updateStackExchangeDto: UpdateStackExchangeDto): Promise<StackExchangeModel>{
        return this.stackExchangePersistence.updateStackExchange({where:{stackExchangeId},data:updateStackExchangeDto});
    }
    public static fetchAllStackExchange(): Promise<StackExchangeModel[]>{
        return this.stackExchangePersistence.getAllStackExchange();
    }
    public static deleteStackExchange(stackExchangeId: number): Promise<StackExchangeModel>{
        return this.stackExchangePersistence.deleteStackExchangeInstance({where:{stackExchangeId}});
    }

}
