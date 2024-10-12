import { Module } from '@nestjs/common';
import { StackExchangeService } from './stack-exchange.service';
import { StackExchangeController } from './stack-exchange.controller';
import { StackUtilsModule } from '@stackboard/stack-utils';
import { DbLocalServiceUtilModule } from '../db-local-service-util/db-local-service-util.module';


@Module({
  controllers: [StackExchangeController],
  providers: [StackExchangeService,],
  imports: [StackUtilsModule,DbLocalServiceUtilModule]
})
export class StackExchangeModule {}
