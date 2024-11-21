import { PartialType } from '@nestjs/mapped-types';
import { CreateCarroDto } from './create-carro.dto';
import { IsInt } from 'class-validator';

export class UpdateCarroDto extends PartialType(CreateCarroDto) {
    @IsInt({ message: 'O ID deve ser um número inteiro' })
    id: number;
}
