import { Injectable } from '@nestjs/common';
import { StackBoardPersistenceService } from '@stackboard/prisma-pg-connector/stack-board-persistence/stack-board-persistence.service';

@Injectable()
export class StackBoardServiceProviderUtil {

    private static stackBoardPersistence: StackBoardPersistenceService;
    // Static initializer to inject dependencies into static context
    public static getInstance(stackBoardPersistence: StackBoardPersistenceService) {
        this.stackBoardPersistence = stackBoardPersistence;
    }

}
