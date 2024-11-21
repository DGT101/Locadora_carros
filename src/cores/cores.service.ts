import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCoreDto } from './dto/create-core.dto';
import { UpdateCoreDto } from './dto/update-core.dto';
import { PrismaService } from 'src/prisma.service';
import { CoresController } from './cores.controller';

@Injectable()
export class CoresService {

  constructor(private readonly prisma: PrismaService) {}

  async create(createCoreDto: CreateCoreDto) {
    try{
      return await this.prisma.cor.create({
        data: {
          nome: createCoreDto.nome,
        },
      });
    } catch (error) {
      throw new ConflictException('Erro ao criar a cor');
    }
  }

  async findAll() {
    try{
      return await this.prisma.cor.findMany();
    } catch (error){
      throw new InternalServerErrorException('Erro ao buscar todas as cores');
    }
  }

  async findOne(id: number) {
    try{
      return await this.prisma.cor.findUnique({ where: { id } });
    } catch (error){
      throw new NotFoundException('Cor não encontrada!');
    }
  }

  async update(id: number, updateCoreDto: UpdateCoreDto) {
    try{
      return await this.prisma.cor.update({ where: { id }, data: updateCoreDto});
    } catch (error){
      throw new ConflictException('Erro ao atualizar a cor');
    }
  }

  async remove(id: number) {
    try{
      return await this.prisma.cor.delete({ where: { id }});
    } catch (error){
      throw new ConflictException('Erro ao remover a cor')
    }
  }
}
