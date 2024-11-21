import { Type } from 'class-transformer';
import { ArrayMinSize, IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength, ValidateNested } from 'class-validator';

class CreateEnderecoDto {
    @IsNotEmpty({ message: 'O campo "rua" não pode estar vazio'})
    @IsString({ message: 'O campo "rua" deve ser uma string'})
    rua: string;

    @IsNotEmpty({ message: 'O campo "número" não pode estar vazio'})
    @IsInt({ message: 'O campo "número" deve ser um número inteiro'})
    numero: number;

    @IsNotEmpty({ message: 'O campo "cidade" não pode estar vazio'})
    @IsString({ message: 'O campo "cidade" deve ser uma string'})
    cidade: string;

    @IsNotEmpty({ message: 'O campo "estado" não pode estar vazio'})
    @IsString({ message: 'O campo "estado" deve ser uma string'})
    estado: string;

    @IsNotEmpty({ message: 'O campo "codigoPostal" não pode estar vazio'})
    @IsString({ message: 'O campo "cidade" deve ser uma string'})
    @MaxLength(9, { message: 'O campo "codigoPostal" deve ter no máximo 9 caracteres'})
    codigoPostal: string;

    @IsNotEmpty({ message: 'O campo "país" não pode estar vazio'})
    @IsString({ message: 'O campo "país" deve ser uma string'})
    pais: string;
}

export class CreateClienteDto {
    @IsNotEmpty({ message: 'O campo "nome" não pode estar vazio'})
    @IsString({ message: 'O campo "nome" deve ser uma string'})
    @MinLength(2, { message: 'O campo "nome" deve ter no mínimo 2 caracteres'})
    @MaxLength(100, { message: 'O campo "nome" deve ter no máximo 100 caracteres'})
    name: string;

    @IsNotEmpty({ message: 'O campo "cpf" não pode estar vazio'})
    @IsString({ message: 'O campo "cpf" deve ser uma string'})
    @MaxLength(14, { message: 'O campo "cpf" deve ter no máximo 14 caracteres'})
    cpf: string;

    @IsOptional()
    @IsBoolean({ message: 'O campo "ativo" deve ser um booleano'})
    ativo: boolean;

    @IsNotEmpty({ message: 'A lista de endereços não pode estar vazia' })
    @ArrayMinSize(1, { message: 'A lista de endereços deve ter pelo menos 1 item'})
    @ValidateNested({ each: true })
    @Type(() => CreateEnderecoDto)
    endereco: CreateEnderecoDto[];
}
