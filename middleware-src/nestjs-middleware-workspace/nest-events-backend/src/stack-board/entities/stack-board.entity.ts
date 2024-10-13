import { StackBoard } from "@prisma/client";

export class StackBoardModel implements StackBoard {
    stackBoardId: number;
    title: string;
    description: string;
    createdByUserId: number;
    stackExchangeId: number;
}
