import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCoreDto {
    @IsNotEmpty({ message: 'O nome não pode estar vazio' })
    @IsString({ message: 'O campo "name" deve ser uma string' })
    nome: string;
}
