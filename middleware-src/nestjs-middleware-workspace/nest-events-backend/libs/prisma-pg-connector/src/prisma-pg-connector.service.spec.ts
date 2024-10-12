import { Test, TestingModule } from '@nestjs/testing';
import { PrismaPgConnectorService } from './prisma-pg-connector.service';

describe('PrismaPgConnectorService', () => {
  let service: PrismaPgConnectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaPgConnectorService],
    }).compile();

    service = module.get<PrismaPgConnectorService>(PrismaPgConnectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
