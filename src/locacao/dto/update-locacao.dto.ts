import { PartialType } from '@nestjs/mapped-types';
import { CreateLocacaoDto } from './create-locacao.dto';
import { IsInt } from 'class-validator';

export class UpdateLocacaoDto extends PartialType(CreateLocacaoDto) {
    @IsInt({message: 'O ID deve ser um número inteiro'})
    id: number;
}
