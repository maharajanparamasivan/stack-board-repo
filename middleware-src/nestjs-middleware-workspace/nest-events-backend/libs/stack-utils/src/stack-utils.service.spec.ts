import { Test, TestingModule } from '@nestjs/testing';
import { StackUtilsService } from './stack-utils.service';

describe('StackUtilsService', () => {
  let service: StackUtilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StackUtilsService],
    }).compile();

    service = module.get<StackUtilsService>(StackUtilsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
