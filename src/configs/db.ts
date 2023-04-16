import path from "path";
import "reflect-metadata";
import { DataSource } from "typeorm";
// import Invoice from "../entities/Invoice";
// import InvoiceItem from "../entities/Item";

const isCompiled = path.extname(__filename).includes("js");

const appDataSource: DataSource = new DataSource({
  type: "postgres",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "invoices",
  logging: true,
  synchronize: true,
  entities: [`src/entities/**/*.${isCompiled ? "js" : "ts"}`],
  // entities: [Invoice, InvoiceItem],
});

export default appDataSource;
