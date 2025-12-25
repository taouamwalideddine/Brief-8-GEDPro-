// src/database/database.module.ts
import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { IConfig } from '../config/configuration.interface';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService<IConfig, true>) => {
        const postgres = configService.get('database.postgres', { infer: true });
        if (!postgres) {
          throw new Error('Postgres configuration is missing');
        }
        
        return {
          type: 'postgres',
          host: postgres.host,
          port: postgres.port,
          username: postgres.username,
          password: postgres.password,
          database: postgres.database,
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true, // Set to false in production
          logging: configService.get('nodeEnv') === 'development',
        };
      },
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService<IConfig, true>) => {
        const mongoUri = configService.get('database.mongo.uri', { infer: true });
        if (!mongoUri) {
          throw new Error('MongoDB URI is missing');
        }
        return {
          uri: mongoUri,
        };
      },
      inject: [ConfigService],
    }),
  ],
  exports: [TypeOrmModule, MongooseModule],
})
export class DatabaseModule {
  private readonly logger = new Logger(DatabaseModule.name);
  
  constructor() {
    this.logger.log('Database module initialized');
  }
}