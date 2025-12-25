// src/database/database.module.ts
import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // Commenting out PostgreSQL temporarily to test the app
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => {
    //     return {
    //       type: 'postgres',
    //       host: configService.get('POSTGRES_HOST') || 'localhost',
    //       port: parseInt(configService.get('POSTGRES_PORT') || '5432', 10),
    //       username: configService.get('POSTGRES_USER') || 'postgres',
    //       password: configService.get('POSTGRES_PASSWORD') || 'postgres',
    //       database: configService.get('POSTGRES_DB') || 'gedpro',
    //       entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    //       synchronize: true, // Set to false in production
    //       logging: configService.get('NODE_ENV') === 'development',
    //     };
    //   },
    //   inject: [ConfigService],
    // }),
    // Commenting out MongoDB temporarily to test the app
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => {
    //     const mongoUri = configService.get('MONGODB_URI');
    //     return {
    //       uri: mongoUri || 'mongodb://localhost:27017/gedpro',
    //     };
    //   },
    //   inject: [ConfigService],
    // }),
  ],
  exports: [], // No exports since both DB modules are disabled
})
export class DatabaseModule {
  private readonly logger = new Logger(DatabaseModule.name);
  
  constructor() {
    this.logger.log('Database module initialized (Both PostgreSQL and MongoDB temporarily disabled)');
  }
}