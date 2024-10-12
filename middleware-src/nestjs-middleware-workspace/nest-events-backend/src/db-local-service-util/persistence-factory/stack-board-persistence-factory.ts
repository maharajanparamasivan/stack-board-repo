import { Injectable } from "@nestjs/common";
import { StackExchangeLocalServiceUtil } from "../stack-exchange-local-service-util/stack-exchange-local-service-util";
import { StackExchangePersistenceService } from '@stackboard/prisma-pg-connector';


@Injectable()
export class StackBoardPersistenceFactory{
    constructor(
        private readonly stackExchangePersistence: StackExchangePersistenceService,
      ) {
        // Initialize the static service in the library class
        StackExchangeLocalServiceUtil.init(this.stackExchangePersistence);
      }
      
}