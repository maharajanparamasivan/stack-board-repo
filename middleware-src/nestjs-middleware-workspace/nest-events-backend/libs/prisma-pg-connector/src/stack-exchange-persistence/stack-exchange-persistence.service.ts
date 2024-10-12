import { Injectable } from '@nestjs/common';
import { PrismaPgConnectorService } from '../prisma-pg-connector.service';
import { Prisma, StackExchange } from '@prisma/client';


@Injectable()
export class StackExchangePersistenceService {

    constructor(private stackOrm: PrismaPgConnectorService) {}

    async createStackExchange(data: Prisma.StackExchangeCreateInput): Promise<StackExchange>{
        return this.stackOrm.stackExchange.create({
            data,
          });
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

}
