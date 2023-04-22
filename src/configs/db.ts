import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const appDataSource: DataSource = new DataSource({
  type: "postgres",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: true,
  synchronize: true,
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
});

export default appDataSource;
