import {
    IsBoolean,
    IsInt,
    isNotEmpty,
    IsNotEmpty,
    IsOptional,
    isString,
    IsString,
    Max,
    Min,
} from 'class-validator';

export class CreateCarroDto {
    @IsNotEmpty({ message: 'O nome não pode estar vazio' })
    @IsString({ message: 'O nome deve ser uma string' })
    nome: string;

    @IsNotEmpty({ message: 'O ano não pode estar vazio' })
    @IsInt({ message: 'O ano deve ser um número inteiro' })
    @Min(1900, { message: 'O ano deve ser no mínimo 1900' })
    @Max(2100, { message: 'O ano deve ser no máximo 2100' })
    ano: number;

    @IsOptional()
    @IsBoolean({ message: 'A disponibilidade deve ser um boolean'})
    disponibilidade: boolean;

    @IsNotEmpty({ message: 'O ID da cor não pode estar vazio'})
    @IsInt({ message: 'O ID da cor deve ser um número inteiro'})
    corId: number;
}
