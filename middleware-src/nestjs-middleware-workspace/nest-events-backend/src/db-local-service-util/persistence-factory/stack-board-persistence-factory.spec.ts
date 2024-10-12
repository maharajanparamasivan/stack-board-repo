import { Test, TestingModule } from '@nestjs/testing';
import { StackBoardPersistenceFactory } from './stack-board-persistence-factory';

describe('PersistenceFactory', () => {
  let provider: StackBoardPersistenceFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StackBoardPersistenceFactory],
    }).compile();

    provider = module.get<StackBoardPersistenceFactory>(StackBoardPersistenceFactory);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
