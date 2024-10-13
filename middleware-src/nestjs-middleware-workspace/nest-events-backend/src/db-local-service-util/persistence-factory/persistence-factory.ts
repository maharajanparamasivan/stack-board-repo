import { Injectable } from "@nestjs/common";
import { StackExchangeServiceProviderUtil } from "../stack-exchange-service-provider-util/stack-exchange-service-provider-util";
import { StackExchangePersistenceService } from '@stackboard/prisma-pg-connector';
import { StackBoardServiceProviderUtil } from "../stack-board-service-provider-util/stack-board-service-provider-util";
import { StackBoardPersistenceService } from "@stackboard/prisma-pg-connector/stack-board-persistence/stack-board-persistence.service";


@Injectable()
export class StackExchangePersistenceFactory{
    constructor(
        private readonly stackExchangePersistence: StackExchangePersistenceService,
      ) {
        // Initialize the static service in the library class
        StackExchangeServiceProviderUtil.getInstance(this.stackExchangePersistence);
      }
      
}


@Injectable()
export class StackBoardPersistenceFactory{
    constructor(
        private readonly stackBoardPersistence: StackBoardPersistenceService,
      ) {
        // Initialize the static service in the library class
        StackBoardServiceProviderUtil.getInstance(this.stackBoardPersistence);
      }
      
}

