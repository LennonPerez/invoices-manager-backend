import "reflect-metadata";
import { DataSource } from "typeorm";
import Invoice from "../entities/Invoice";
import InvoiceItem from "../entities/Item";

const appDataSource: DataSource = new DataSource({
  type: "postgres",
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME,
  database: "invoices",
  logging: true,
  synchronize: true,
  entities: [Invoice, InvoiceItem],
});

export default appDataSource;
