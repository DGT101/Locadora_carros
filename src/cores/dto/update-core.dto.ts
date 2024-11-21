import { PartialType } from '@nestjs/mapped-types';
import { CreateCoreDto } from './create-core.dto';
import { IsInt } from 'class-validator'

export class UpdateCoreDto extends PartialType(CreateCoreDto) {
    @IsInt({ message: 'O ID deve ser um número inteiro' })
    id: number;
}
