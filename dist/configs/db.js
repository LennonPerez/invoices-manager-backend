"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const appDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DB_URL,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: true,
    synchronize: true,
    entities: [__dirname + "/../**/*.entity.{js,ts}"],
});
exports.default = appDataSource;
//# sourceMappingURL=db.js.map