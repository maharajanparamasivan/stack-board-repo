import { Module } from '@nestjs/common';
import { StackBoardService } from './stack-board.service';
import { StackBoardController } from './stack-board.controller';
import { StackUtilsModule } from '@stackboard/stack-utils';
import { DbLocalServiceUtilModule } from 'src/db-local-service-util/db-local-service-util.module';

@Module({
  controllers: [StackBoardController],
  providers: [StackBoardService],
  imports: [StackUtilsModule,DbLocalServiceUtilModule]
})
export class StackBoardModule {}
