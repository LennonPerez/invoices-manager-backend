import "reflect-metadata";
import { DataSource } from "typeorm";
// import Invoice from "../entities/Invoice";
// import InvoiceItem from "../entities/Item";
import path from "path";

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
  // entities: [Invoice, InvoiceItem],
  // entities: ["src/entities/*.ts"],
  entities: [isCompiled ? "dist/entities/*.js" : "src/entities/*.ts"],
});

export default appDataSource;
