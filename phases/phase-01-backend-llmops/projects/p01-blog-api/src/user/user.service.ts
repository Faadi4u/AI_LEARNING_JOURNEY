import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from "bcrypt"

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(dto: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (existingUser) throw new UnauthorizedException("User already exist with this email");

    const saltRound = 12;
    const hashPassword = await bcrypt.hash(dto.password, saltRound);

    return await this.prisma.user.create({
      data: { ...dto, password: hashPassword },
      omit: { password: true },
    });
  };

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email: email } });
  };

  async findAll() {
    return await this.prisma.user.findMany({ omit: { password: true } });
  }

  async findById(id: number) {
    return await this.prisma.user.findUnique({ where: { id }, omit: {password: true}});
  }

  async update(dto: CreateUserDto, id: number) {
    return await this.prisma.user.update({
      where: {id},
      data: dto,
      omit: { password: true }
    })
  };

  async updatePartial(dto: UpdateUserDto, id: number) {
    return await this.prisma.user.update({
      where: {id},
      data: dto,
      omit: { password: true }
    })
  };

  async delete(id: number) {
    return await this.prisma.user.delete({ where: { id } })
  }



}
