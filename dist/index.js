"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/', (_, res) => {
    res.send('hello world');
});
app.listen(port, () => {
    console.log(`Example app listening on port xd ${port}`);
});
//# sourceMappingURL=index.js.map