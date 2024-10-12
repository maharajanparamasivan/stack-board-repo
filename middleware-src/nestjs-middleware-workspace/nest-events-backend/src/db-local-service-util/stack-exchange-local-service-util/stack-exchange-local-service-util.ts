import { Injectable } from '@nestjs/common';
import { StackExchangePersistenceService } from '@stackboard/prisma-pg-connector';
import { CreateStackExchangeDto } from 'src/stack-exchange/dto/create-stack-exchange.dto';


@Injectable()
export class StackExchangeLocalServiceUtil {

    private static stackExchangePersistence: StackExchangePersistenceService;
    // Static initializer to inject dependencies into static context
    static init(stackExchangePersistence: StackExchangePersistenceService) {
        this.stackExchangePersistence = stackExchangePersistence;
    }
      
      
    static createStackExchange(stackExchangeDto: CreateStackExchangeDto) {
        console.log("Util");
        console.log(stackExchangeDto);
        this.stackExchangePersistence.createStackExchange(stackExchangeDto);
    }

}
