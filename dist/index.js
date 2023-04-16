"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("./configs/app"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const db_1 = tslib_1.__importDefault(require("./configs/db"));
dotenv_1.default.config();
const initApp = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.initialize();
        const port = process.env.PORT;
        app_1.default.listen(port, () => console.log(`Server running on port ${port}`));
    }
    catch (error) {
        console.log(`Error running server: ${error}`);
    }
});
initApp();
exports.default = app_1.default;
//# sourceMappingURL=index.js.map