import { registerAs } from '@nestjs/config';
import { IConfig } from './configuration.interface';

export default registerAs('config', (): IConfig => {
  return {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: Number(process.env.PORT) || 3000,
    database: {
      postgres: {
        host: process.env.POSTGRES_HOST || 'localhost',
        port: Number(process.env.POSTGRES_PORT) || 5432,
        username: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'postgres',
        database: process.env.POSTGRES_DB || 'gedpro',
      },
      mongo: {
        uri: process.env.MONGO_URI || 'mongodb://localhost:27017/gedpro',
      },
    },
    jwt: {
      secret: process.env.JWT_SECRET || 'your_jwt_secret_here',
      expiresIn: process.env.JWT_EXPIRATION || '1d',
    },
  };
});