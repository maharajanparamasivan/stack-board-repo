import { PartialType } from '@nestjs/mapped-types';
import { CreateStackBoardDto } from './create-stack-board.dto';

export class UpdateStackBoardDto extends PartialType(CreateStackBoardDto) {}
