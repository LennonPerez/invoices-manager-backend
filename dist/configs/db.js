"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Invoice_1 = tslib_1.__importDefault(require("../entities/Invoice"));
const Item_1 = tslib_1.__importDefault(require("../entities/Item"));
const appDataSource = new typeorm_1.DataSource({
    type: "postgres",
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // database: "invoices",
    logging: true,
    synchronize: true,
    entities: [Invoice_1.default, Item_1.default],
});
exports.default = appDataSource;
//# sourceMappingURL=db.js.map