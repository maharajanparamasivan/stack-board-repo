import { Module } from '@nestjs/common';
import { PrismaPgConnectorService } from './prisma-pg-connector.service';
import { StackExchangePersistenceService } from './stack-exchange-persistence/stack-exchange-persistence.service';


@Module({
  providers: [PrismaPgConnectorService,StackExchangePersistenceService,],
  exports: [PrismaPgConnectorService,StackExchangePersistenceService],
})
export class PrismaPgConnectorModule {}
