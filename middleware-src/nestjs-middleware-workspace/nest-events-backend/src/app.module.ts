import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { StackExchangeModule } from './stack-exchange/stack-exchange.module';


@Module({
  imports: [DevtoolsModule.register({
    http: process.env.NODE_ENV !== 'production',
  }), StackExchangeModule,],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
