import { Test, TestingModule } from '@nestjs/testing';
import { StackBoardPersistenceService } from './stack-board-persistence.service';

describe('StackBoardPersistenceService', () => {
  let service: StackBoardPersistenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StackBoardPersistenceService],
    }).compile();

    service = module.get<StackBoardPersistenceService>(StackBoardPersistenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
