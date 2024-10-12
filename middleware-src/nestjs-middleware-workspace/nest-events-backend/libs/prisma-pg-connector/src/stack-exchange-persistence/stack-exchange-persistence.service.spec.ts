import { Test, TestingModule } from '@nestjs/testing';
import { StackExchangePersistenceService } from './stack-exchange-persistence.service';

describe('StackExchangePersistenceService', () => {
  let service: StackExchangePersistenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StackExchangePersistenceService],
    }).compile();

    service = module.get<StackExchangePersistenceService>(StackExchangePersistenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
