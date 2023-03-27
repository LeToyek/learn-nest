import { Module } from '@nestjs/common';
import { DappService } from './dapp.service';
import { DappController } from './dapp.controller';

@Module({
  controllers: [DappController],
  providers: [DappService]
})
export class DappModule {}
