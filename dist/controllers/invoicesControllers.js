"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInvoiceController = exports.updateInvoiceController = exports.createNewInvoiceController = exports.getInvoiceByIdController = exports.getAllInvoicesController = void 0;
const invoices_1 = __importDefault(require("../mocks/invoices"));
const getCatchError_1 = __importDefault(require("../utils/getCatchError"));
const getAllInvoicesController = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({ data: invoices_1.default });
    }
    catch (e) {
        console.log((0, getCatchError_1.default)(e));
        res.json({ error: (0, getCatchError_1.default)(e) });
    }
});
exports.getAllInvoicesController = getAllInvoicesController;
const getInvoiceByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoice = invoices_1.default.find((e) => e.id === req.params.id);
        if (!invoice)
            throw new Error("Invoice not found");
        res.json({ data: invoice });
    }
    catch (e) {
        console.log((0, getCatchError_1.default)(e));
        res.json({ error: (0, getCatchError_1.default)(e) });
    }
});
exports.getInvoiceByIdController = getInvoiceByIdController;
const createNewInvoiceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.items || req.body.items.length == 0)
            throw new Error("You must supply at least one item for this invoice");
        // TODO: Do post action
        const result = {};
        res.json({ data: result });
    }
    catch (e) {
        console.log((0, getCatchError_1.default)(e));
        res.json({ error: (0, getCatchError_1.default)(e) });
    }
});
exports.createNewInvoiceController = createNewInvoiceController;
const updateInvoiceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.items || req.body.items.length == 0)
            throw new Error("You must supply at least one item for this invoice");
        const invoice = invoices_1.default.find((e) => e.id === req.params.id);
        if (!invoice)
            throw new Error("Invoice not found");
        // TODO: Do put action
        const result = {};
        res.json({ data: result });
    }
    catch (e) {
        console.log((0, getCatchError_1.default)(e));
        res.json({ error: (0, getCatchError_1.default)(e) });
    }
});
exports.updateInvoiceController = updateInvoiceController;
const deleteInvoiceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoice = invoices_1.default.find((e) => e.id === req.params.id);
        if (!invoice)
            throw new Error("Invoice not found");
        // TODO: Do delete action
        res.json({ data: { message: "Invoice deleted" } });
    }
    catch (e) {
        console.log((0, getCatchError_1.default)(e));
        res.json({ error: (0, getCatchError_1.default)(e) });
    }
});
exports.deleteInvoiceController = deleteInvoiceController;
//# sourceMappingURL=invoicesControllers.js.map