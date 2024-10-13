import { Test, TestingModule } from '@nestjs/testing';
import { StackBoardServiceProviderUtil } from './stack-board-service-provider-util';

describe('StackBoardServiceProviderUtil', () => {
  let provider: StackBoardServiceProviderUtil;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StackBoardServiceProviderUtil],
    }).compile();

    provider = module.get<StackBoardServiceProviderUtil>(StackBoardServiceProviderUtil);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
