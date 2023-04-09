import { DataSource } from "typeorm";

export const AppDataSource: DataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "postgres",
    database: "invoices",
    logging: true,
    port: 5432,
    entities: [],
})