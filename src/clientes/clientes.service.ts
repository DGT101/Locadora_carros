import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/prisma.service';
import { ClientesController } from './clientes.controller';

@Injectable()
export class ClientesService {

  constructor(private readonly prisma: PrismaService) {}

  async create(createClienteDto: CreateClienteDto) {
    const {name, ativo, cpf, endereco} = createClienteDto;
    try{
      return await this.prisma.cliente.create({
        data: {name, ativo, cpf, endereco: { create: endereco }}
      });
    } catch (error) {
      throw new ConflictException('Erro ao criar o cliente');
    }
  }

  async findAll() {
    try{
      return await this.prisma.cliente.findMany({select: { 
        id: true,
        name: true,
        ativo: true,
        cpf: true,
        endereco: {
          select: {
            id: true,
            rua: true,
            numero: true,
            cidade: true,
            estado: true,
            pais: true,
            codigoPostal: true
          }
        }
      }});
    } catch (error){
      throw new InternalServerErrorException('Erro ao buscar todos os clientes');
    }
  }

  async findOne(id: number) {
    try{
      return await this.prisma.cliente.findUnique({ where: { id }, include:{endereco: true} });
    } catch (error){
      throw new NotFoundException('Cliente não encontrado!');
    }
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    const {name, ativo, cpf, endereco} = updateClienteDto;
    try{
      return await this.prisma.cliente.update({ where: { id }, data: {name, ativo, cpf, endereco: { 
        deleteMany: {},
        create: endereco } }
      });
    } catch (error){
      throw new ConflictException('Erro ao atualizar o cliente');
    }
  }

  async remove(id: number) {
    try{
      return await this.prisma.cliente.delete({ where: { id }});
    } catch (error){
      throw new ConflictException('Erro ao remover o cliente')
    }
  }
}
