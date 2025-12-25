import { registerAs } from '@nestjs/config';
import { IConfig } from './configuration.interface';

export default registerAs('config', (): IConfig => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT ? parseInt(process.env.PORT || '3000', 10) : 3000,
  database: {
    postgres: {
      host: process.env.POSTGRES_HOST || 'localhost',
      port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT, 10) : 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'postgres',
      database: process.env.POSTGRES_DB || 'gedpro',
    },
    mongo: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/gedpro',
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your_jwt_secret_key',
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  },
}));