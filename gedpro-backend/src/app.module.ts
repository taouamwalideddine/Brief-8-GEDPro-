import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { CandidatesModule } from './modules/candidates/candidates.module';
import { DocumentsModule } from './modules/documents/documents.module';
import { FormsModule } from './modules/forms/forms.module';
import { InterviewsModule } from './modules/interviews/interviews.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { OcrModule } from './modules/ocr/ocr.module';

@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    
    // Database connections
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST', 'localhost'),
        port: configService.get<number>('POSTGRES_PORT', 5432),
        username: configService.get('POSTGRES_USER', 'postgres'),
        password: configService.get('POSTGRES_PASSWORD', 'postgres'),
        database: configService.get('POSTGRES_DB', 'gedpro'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: configService.get('NODE_ENV') !== 'production',
        logging: configService.get('NODE_ENV') === 'development',
      }),
      inject: [ConfigService],
    }),
    
    // MongoDB connection
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: `mongodb://${configService.get('MONGO_USER', 'root')}:${configService.get('MONGO_PASSWORD', 'example')}@${configService.get('MONGO_HOST', 'localhost')}:${configService.get('MONGO_PORT', 27017)}/${configService.get('MONGO_DB', 'gedpro')}?authSource=admin`,
      }),
      inject: [ConfigService],
    }),
    
    // Rate limiting
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    
    // Task scheduling
    ScheduleModule.forRoot(),
    
    // Application modules
    AuthModule,
    UsersModule,
    OrganizationsModule,
    CandidatesModule,
    DocumentsModule,
    FormsModule,
    InterviewsModule,
    NotificationsModule,
    OcrModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
