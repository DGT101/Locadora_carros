import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateLocacaoDto } from './dto/create-locacao.dto';
import { UpdateLocacaoDto } from './dto/update-locacao.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LocacaoService {

  constructor(private readonly prisma: PrismaService) {}

  async create(createLocacaoDto: CreateLocacaoDto) {
    const {valorDia, dataInicio, dataFim, total, carroId, clienteId} = createLocacaoDto;
    try{
      return await this.prisma.locacao.create({
        data: {valorDia, dataInicio, dataFim, total, carro: {connect:{id: carroId}}, 
        cliente: {connect: {id: clienteId}}}
      });
    } catch (error) {
      throw new ConflictException('Erro ao criar a locação');
    }
  }

  async findAll() {
    try{
      return await this.prisma.locacao.findMany({select: { 
        id: true,
        valorDia: true,
        dataInicio: true,
        dataFim: true,
        total: true,
        carro: {
          select: {
            id: true,
            nome: true,
            ano: true,
            disponibilidade: true,
            cor: true
          }
        },
        cliente: {
          select: {
            id: true,
            name: true,
            ativo: true,
            cpf: true,
            endereco: {
              select: {
                id: true,
                rua: true,
                numero: true,
                cidade: true
              }
            }
          }
        }
      }});
    } catch (error){
      throw new InternalServerErrorException('Erro ao buscar todos as locações');
    }
  }

  async findOne(id: number) {
    try{
      return await this.prisma.locacao.findUnique({ where: { id }, select: { 
        id: true,
        valorDia: true,
        dataInicio: true,
        dataFim: true,
        total: true,
        carro: {
          select: {
            id: true,
            nome: true,
            ano: true,
            disponibilidade: true,
            cor: true
          }
        },
        cliente: {
          select: {
            id: true,
            name: true,
            ativo: true,
            cpf: true,
            endereco: {
              select: {
                id: true,
                rua: true,
                numero: true,
                cidade: true
              }
            }
          }
        }
      }});
    } catch (error){
      throw new NotFoundException('Locação não encontrada!');
    }
  }

  async update(id: number, updateLocacaoDto: UpdateLocacaoDto) {
    const {valorDia, dataInicio, dataFim, total, carroId, clienteId} = updateLocacaoDto;
    try{
      return await this.prisma.locacao.update({ where: { id }, data: {valorDia, dataInicio, dataFim, total, carro: {connect:{id: carroId}}, 
        cliente: {connect: {id: clienteId}}}
      });
    } catch (error){
      throw new ConflictException('Erro ao atualizar a locação');
    }
  }

  async remove(id: number) {
    try{
      return await this.prisma.locacao.delete({ where: { id }});
    } catch (error){
      throw new ConflictException('Erro ao remover a locação')
    }
  }
}
