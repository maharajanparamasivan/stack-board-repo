import { StackExchange } from "@prisma/client";

export class StackExchangeModel implements StackExchange{
    stackExchangeId: number;
    title: string;
    description: string;
    published: boolean;
}
