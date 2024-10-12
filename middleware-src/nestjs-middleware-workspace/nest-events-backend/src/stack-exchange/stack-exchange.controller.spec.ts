import { Test, TestingModule } from '@nestjs/testing';
import { StackExchangeController } from './stack-exchange.controller';
import { StackExchangeService } from './stack-exchange.service';

describe('StackExchangeController', () => {
  let controller: StackExchangeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StackExchangeController],
      providers: [StackExchangeService],
    }).compile();

    controller = module.get<StackExchangeController>(StackExchangeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
