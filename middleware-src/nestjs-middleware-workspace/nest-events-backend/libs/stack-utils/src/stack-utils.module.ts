import { Module } from '@nestjs/common';
import { StackUtilsService } from './stack-utils.service';


@Module({
  providers: [StackUtilsService,],
  exports: [StackUtilsService],
})
export class StackUtilsModule {}
