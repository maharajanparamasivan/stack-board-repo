import { Test, TestingModule } from '@nestjs/testing';
import { StackExchangeLocalServiceUtil } from './stack-exchange-local-service-util';

describe('StackExchangeLocalServiceUtil', () => {
  let provider: StackExchangeLocalServiceUtil;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StackExchangeLocalServiceUtil],
    }).compile();

    provider = module.get<StackExchangeLocalServiceUtil>(StackExchangeLocalServiceUtil);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
