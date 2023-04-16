"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const invoicesControllers_1 = require("../controllers/invoicesControllers");
const router = express_1.default.Router();
router.get("/", invoicesControllers_1.getAllInvoicesController);
router.post("/", invoicesControllers_1.createNewInvoiceController);
const specificInvoice = router.route("/:id");
specificInvoice.get(invoicesControllers_1.getInvoiceByIdController);
specificInvoice.put(invoicesControllers_1.updateInvoiceController);
specificInvoice.delete(invoicesControllers_1.deleteInvoiceController);
exports.default = router;
//# sourceMappingURL=invoicesRoutes.js.map