import { Injectable } from '@nestjs/common';
import { CreateDappDto } from './dto/create-dapp.dto';
import { UpdateDappDto } from './dto/update-dapp.dto';
import { Dapp } from './entities/dapp.entity';

@Injectable()
export class DappService {
  create(createDappDto: CreateDappDto) {
    return 'This action adds a new dapp';
  }

  findAll() {
    // eslint-disable-next-line prettier/prettier
    const listDapp: Array<Dapp> = [
      { title: 'asdas', content: `awkdoakow`, description: `asdasd` },
      { title: 'asdas', content: `awkdoakow`, description: `asdasd` },
      { title: 'asdas', content: `awkdoakow`, description: `asdasd` },
      { title: 'asdas', content: `awkdoakow`, description: `asdasd` },
    ];
    return listDapp;
  }

  findOne(id: number) {
    return `This action returns a #${id} dapp`;
  }

  update(id: number, updateDappDto: UpdateDappDto) {
    return `This action updates a #${id} dapp`;
  }

  remove(id: number) {
    return `This action removes a #${id} dapp`;
  }
}
