import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DappService } from './dapp.service';
import { CreateDappDto } from './dto/create-dapp.dto';
import { UpdateDappDto } from './dto/update-dapp.dto';

@Controller('dapp')
export class DappController {
  constructor(private readonly dappService: DappService) {}

  @Post()
  create(@Body() createDappDto: CreateDappDto) {
    return this.dappService.create(createDappDto);
  }

  @Get()
  findAll() {
    return this.dappService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dappService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDappDto: UpdateDappDto) {
    return this.dappService.update(+id, updateDappDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dappService.remove(+id);
  }
}
