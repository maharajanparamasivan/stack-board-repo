import { Module } from '@nestjs/common';
import { PrismaPgConnectorService } from './prisma-pg-connector.service';
import { StackExchangePersistenceService } from './stack-exchange-persistence/stack-exchange-persistence.service';
import { StackBoardPersistenceService } from './stack-board-persistence/stack-board-persistence.service';


@Module({
  providers: [PrismaPgConnectorService,StackExchangePersistenceService, StackBoardPersistenceService,],
  exports: [PrismaPgConnectorService,StackExchangePersistenceService],
})
export class PrismaPgConnectorModule {}
