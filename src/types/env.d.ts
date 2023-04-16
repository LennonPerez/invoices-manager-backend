export {};
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_PORT: string;
      DB_HOST: string;
      DB_NAME: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      PORT: string;
    }
  }
}
