import { Test, TestingModule } from '@nestjs/testing';
import { StackExchangeService } from './stack-exchange.service';

describe('StackExchangeService', () => {
  let service: StackExchangeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StackExchangeService],
    }).compile();

    service = module.get<StackExchangeService>(StackExchangeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
