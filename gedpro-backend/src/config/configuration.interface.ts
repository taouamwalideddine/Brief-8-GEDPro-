export interface IConfig {
  nodeEnv: string;
  port: number;
  database: {
    postgres: {
      host: string;
      port: number;
      username: string;
      password: string;
      database: string;
    };
    mongo: {
      uri: string;
    };
  };
  jwt: {
    secret: string;
    expiresIn: string;
  };
}