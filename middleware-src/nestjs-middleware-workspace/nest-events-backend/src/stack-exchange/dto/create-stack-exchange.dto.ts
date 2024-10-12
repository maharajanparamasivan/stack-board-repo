import { StackExchange } from "@prisma/client";

export class CreateStackExchangeDto{
    title: string;
    description: string;
    published: boolean;
}
