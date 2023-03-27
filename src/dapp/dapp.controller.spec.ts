import { Test, TestingModule } from '@nestjs/testing';
import { DappController } from './dapp.controller';
import { DappService } from './dapp.service';

describe('DappController', () => {
  let controller: DappController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DappController],
      providers: [DappService],
    }).compile();

    controller = module.get<DappController>(DappController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
