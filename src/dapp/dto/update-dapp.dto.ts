import { PartialType } from '@nestjs/mapped-types';
import { CreateDappDto } from './create-dapp.dto';

export class UpdateDappDto extends PartialType(CreateDappDto) {}
