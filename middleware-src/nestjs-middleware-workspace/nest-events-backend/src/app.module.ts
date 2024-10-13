import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { StackExchangeModule } from './stack-exchange/stack-exchange.module';
import { StackBoardModule } from './stack-board/stack-board.module';
import { StackBoardServiceProviderUtil } from './stack-board-service-provider-util/stack-board-service-provider-util';


@Module({
  imports: [DevtoolsModule.register({
    http: process.env.NODE_ENV !== 'production',
  }), StackExchangeModule, StackBoardModule,],
  controllers: [AppController,],
  providers: [AppService, StackBoardServiceProviderUtil,],
})
export class AppModule {}
