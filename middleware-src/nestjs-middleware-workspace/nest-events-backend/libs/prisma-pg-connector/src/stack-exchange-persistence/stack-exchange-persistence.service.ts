import { Injectable, UseFilters } from '@nestjs/common';
import { PrismaPgConnectorService } from '../prisma-pg-connector.service';
import { Prisma, StackExchange } from '@prisma/client';
import { PrismaClientExceptionFilter } from 'src/db-local-service-util/exception-filters/prisma-exception.filter';


@Injectable()
export class StackExchangePersistenceService {

  constructor(private stackOrm: PrismaPgConnectorService) { }

  async createStackExchange(data: Prisma.StackExchangeCreateInput): Promise<StackExchange> {

    return await this.stackOrm.stackExchange.create({data});
  
  }


  async updateStackExchange(params: {
    where: Prisma.StackExchangeWhereUniqueInput;
    data: Prisma.StackExchangeUpdateInput;
  }): Promise<StackExchange> {
    const { where, data } = params;

    return this.stackOrm.stackExchange.update({
      data,
      where,
    });
  }

  async getAllStackExchange(): Promise<StackExchange[]> {
    return this.stackOrm.stackExchange.findMany();
  }

  async deleteStackExchangeInstance(params: {
    where: Prisma.StackExchangeWhereUniqueInput;
  }): Promise<StackExchange> {
    const { where } = params;
    return this.stackOrm.stackExchange.delete({ where });
  }

}
