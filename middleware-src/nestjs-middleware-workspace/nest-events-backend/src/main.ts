import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClientExceptionFilter } from './db-local-service-util/exception-filters/prisma-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{snapshot:true});
  app.useGlobalFilters(new PrismaClientExceptionFilter());
  await app.listen(3000);
}
bootstrap();
