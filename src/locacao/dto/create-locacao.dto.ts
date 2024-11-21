import { IsDateString, IsInt, IsNotEmpty, IsNumber } from "class-validator";

export class CreateLocacaoDto {
    @IsNotEmpty({message: 'O valor diário não pode estar vazio'})
    @IsNumber({}, {message: 'O valor diário deve ser um número'})
    valorDia: number;

    @IsNotEmpty({message: 'A data de início não pode estar vazia'})
    @IsDateString({}, {message: 'A data de início deve estar em um formato válido'})
    dataInicio: string;

    @IsNotEmpty({message: 'A data de término não pode estar vazia'})
    @IsDateString({}, {message: 'A data de término deve estar em um formato válido'})
    dataFim: string;

    @IsNotEmpty({message: 'O valor total não pode estar vazio'})
    @IsNumber({}, {message: 'O valor total deve ser um número'})
    total:number;

    @IsNotEmpty({message: 'O ID do carro não pode estar vazio'})
    @IsInt({message: 'O ID do carro deve ser um número inteiro'})
    carroId: number;

    @IsNotEmpty({message: 'O ID do cliente não pode estar vazio'})
    @IsInt({message: 'O ID do cliente deve ser um número inteiro'})
    clienteId: number;
}
