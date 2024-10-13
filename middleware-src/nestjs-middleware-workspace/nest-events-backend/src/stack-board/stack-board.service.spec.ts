import { Test, TestingModule } from '@nestjs/testing';
import { StackBoardService } from './stack-board.service';

describe('StackBoardService', () => {
  let service: StackBoardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StackBoardService],
    }).compile();

    service = module.get<StackBoardService>(StackBoardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
