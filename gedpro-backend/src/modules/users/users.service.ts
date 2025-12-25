// src/modules/users/users.service.ts
import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
// import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  // constructor(
  //   @InjectRepository(User)
  //   private usersRepository: Repository<User>,
  // ) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    // const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    // const user = this.usersRepository.create({
    //   ...createUserDto,
    //   password: hashedPassword,
    // });
    // return this.usersRepository.save(user);
    console.log('User creation requested:', createUserDto);
    return { message: 'User creation temporarily disabled - PostgreSQL not connected' };
  }

  async findAll(): Promise<any[]> {
    // return this.usersRepository.find();
    return [{ message: 'Find all users temporarily disabled - PostgreSQL not connected' }];
  }

  async findById(id: string): Promise<any> {
    // const user = await this.usersRepository.findOne({ where: { id } });
    // if (!user) {
    //   throw new NotFoundException(`User with ID ${id} not found`);
    // }
    // return user;
    return { message: `Find user by ID ${id} temporarily disabled - PostgreSQL not connected` };
  }

  async findByEmail(email: string): Promise<any> {
    // return this.usersRepository.findOne({ where: { email } });
    return null;
  }
}