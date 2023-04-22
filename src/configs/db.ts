import { DataSource } from "typeorm";

const appDataSource: DataSource = new DataSource({
  type: "postgres",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "invoices",
  logging: true,
  synchronize: true,
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
});

export default appDataSource;
