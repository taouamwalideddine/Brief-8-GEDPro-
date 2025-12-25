// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { IConfig } from '../config/configuration.interface';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService<IConfig>) => {
        const dbConfig = configService.get('database');
        return {
          type: 'postgres',
          host: dbConfig?.postgres.host,
          port: dbConfig?.postgres.port,
          username: dbConfig?.postgres.username,
          password: dbConfig?.postgres.password,
          database: dbConfig?.postgres.database,
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true, 
          logging: configService.get('nodeEnv') === 'development',
        };
      },
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService<IConfig>) => {
        const dbConfig = configService.get('database');
        return {
          uri: dbConfig?.mongo.uri,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}