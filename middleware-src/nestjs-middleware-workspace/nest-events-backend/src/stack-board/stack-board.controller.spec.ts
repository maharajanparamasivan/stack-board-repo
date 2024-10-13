import { Test, TestingModule } from '@nestjs/testing';
import { StackBoardController } from './stack-board.controller';
import { StackBoardService } from './stack-board.service';

describe('StackBoardController', () => {
  let controller: StackBoardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StackBoardController],
      providers: [StackBoardService],
    }).compile();

    controller = module.get<StackBoardController>(StackBoardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
