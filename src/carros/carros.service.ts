import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';
import { PrismaService } from 'src/prisma.service';
import { CarrosController } from './carros.controller';

@Injectable()
export class CarrosService {

  constructor(private readonly prisma: PrismaService) {}

  async create(createCarroDto: CreateCarroDto) {
    try{
      return await this.prisma.carro.create({
        data: createCarroDto
      });
    } catch (error) {
      throw new ConflictException('Erro ao cadastrar o carro');
    }
  }

  async findAll() {
    try{
      return await this.prisma.carro.findMany({select:{
        id: true,
        nome: true,
        ano: true,
        disponibilidade: true,
        cor: true
      }});
    } catch (error){
      throw new InternalServerErrorException('Erro ao buscar todas as carros');
    }
  }

  async findOne(id: number) {
    try{
      return await this.prisma.carro.findUnique({ where: { id }, select:{
        id: true,
        nome: true,
        ano: true,
        disponibilidade: true,
        cor: true
      } });
    } catch (error){
      throw new NotFoundException('Carro não encontrada!');
    }
  }

  async update(id: number, updateCarroDto: UpdateCarroDto) {
    try{
      return await this.prisma.carro.update({ where: { id }, data: updateCarroDto});
    } catch (error){
      throw new ConflictException('Erro ao atualizar o carro');
    }
  }

  async remove(id: number) {
    try{
      return await this.prisma.carro.delete({ where: { id }});
    } catch (error){
      throw new ConflictException('Erro ao remover o carro')
    }
  }
}
