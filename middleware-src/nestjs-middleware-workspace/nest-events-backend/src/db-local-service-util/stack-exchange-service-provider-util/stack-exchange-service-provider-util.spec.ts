import { Test, TestingModule } from '@nestjs/testing';
import { StackExchangeServiceProviderUtil } from './stack-exchange-service-provider-util';

describe('StackExchangeLocalServiceUtil', () => {
  let provider: StackExchangeServiceProviderUtil;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StackExchangeServiceProviderUtil],
    }).compile();

    provider = module.get<StackExchangeServiceProviderUtil>(StackExchangeServiceProviderUtil);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
