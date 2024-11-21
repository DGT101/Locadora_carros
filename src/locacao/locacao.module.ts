import { Module } from '@nestjs/common';
import { LocacaoService } from './locacao.service';
import { LocacaoController } from './locacao.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [LocacaoController],
  providers: [LocacaoService, PrismaService],
})
export class LocacaoModule {}
