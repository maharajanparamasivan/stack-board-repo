import { Module } from '@nestjs/common';
import { PrismaPgConnectorModule } from '@stackboard/prisma-pg-connector';
import { StackExchangeLocalServiceUtil } from './stack-exchange-local-service-util/stack-exchange-local-service-util';
import { StackBoardPersistenceFactory } from './persistence-factory/stack-board-persistence-factory';

@Module({
    providers:[StackExchangeLocalServiceUtil, StackBoardPersistenceFactory],
    exports:[StackExchangeLocalServiceUtil, StackBoardPersistenceFactory],
    imports:[PrismaPgConnectorModule]
})
export class DbLocalServiceUtilModule {}
