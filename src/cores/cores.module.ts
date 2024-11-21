import { Module } from '@nestjs/common';
import { CoresService } from './cores.service';
import { CoresController } from './cores.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CoresController],
  providers: [CoresService, PrismaService],
})
export class CoresModule {}
