import { PartialType } from '@nestjs/mapped-types';
import { CreateStackExchangeDto } from './create-stack-exchange.dto';

export class UpdateStackExchangeDto extends PartialType(CreateStackExchangeDto) {}
