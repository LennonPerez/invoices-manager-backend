"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const appDataSource = new typeorm_1.DataSource({
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
exports.default = appDataSource;
//# sourceMappingURL=db.js.map