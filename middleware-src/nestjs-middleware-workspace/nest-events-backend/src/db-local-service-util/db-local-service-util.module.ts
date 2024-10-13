import { Module } from '@nestjs/common';
import { PrismaPgConnectorModule } from '@stackboard/prisma-pg-connector';
import { StackExchangeServiceProviderUtil } from './stack-exchange-service-provider-util/stack-exchange-service-provider-util';
import { StackBoardPersistenceFactory, StackExchangePersistenceFactory } from './persistence-factory/persistence-factory';
import { PrismaClientExceptionFilter } from './exception-filters/prisma-exception.filter';
import { StackBoardServiceProviderUtil } from './stack-board-service-provider-util/stack-board-service-provider-util';

@Module({
    providers:[StackExchangeServiceProviderUtil, StackBoardPersistenceFactory,StackExchangePersistenceFactory, PrismaClientExceptionFilter, StackBoardServiceProviderUtil],
    exports:[StackExchangeServiceProviderUtil, StackBoardPersistenceFactory,StackExchangePersistenceFactory, PrismaClientExceptionFilter],
    imports:[PrismaPgConnectorModule]
})
export class DbLocalServiceUtilModule {}
