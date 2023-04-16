"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// import path from "path";
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Invoice_1 = tslib_1.__importDefault(require("../entities/Invoice"));
const Item_1 = tslib_1.__importDefault(require("../entities/Item"));
// const isCompiled = path.extname(__filename).includes("js");
const appDataSource = new typeorm_1.DataSource({
    type: "postgres",
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "invoices",
    logging: true,
    synchronize: true,
    // entities: [isCompiled ? "dist/entities/*.js" : "src/entities/*.ts"],
    entities: [Invoice_1.default, Item_1.default],
});
exports.default = appDataSource;
//# sourceMappingURL=db.js.map