"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceStatus = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const InvoiceItem_entity_1 = tslib_1.__importDefault(require("./InvoiceItem.entity"));
var InvoiceStatus;
(function (InvoiceStatus) {
    InvoiceStatus["PENDING"] = "Pending";
    InvoiceStatus["PAID"] = "Paid";
    InvoiceStatus["DRAFT"] = "Draft";
})(InvoiceStatus = exports.InvoiceStatus || (exports.InvoiceStatus = {}));
let Invoice = class Invoice extends typeorm_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", String)
], Invoice.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        enum: InvoiceStatus,
    }),
    tslib_1.__metadata("design:type", String)
], Invoice.prototype, "status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Invoice.prototype, "invoiceDescription", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    (0, class_validator_1.IsInt)(),
    tslib_1.__metadata("design:type", Number)
], Invoice.prototype, "paymentTerm", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    (0, class_validator_1.IsDate)(),
    tslib_1.__metadata("design:type", Date)
], Invoice.prototype, "invoiceDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    (0, class_validator_1.IsDate)(),
    tslib_1.__metadata("design:type", Date)
], Invoice.prototype, "paymentDue", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Invoice.prototype, "clientName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsEmail)(),
    tslib_1.__metadata("design:type", String)
], Invoice.prototype, "clientEmail", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)("simple-json"),
    tslib_1.__metadata("design:type", Object)
], Invoice.prototype, "billedFromAddress", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)("simple-json"),
    tslib_1.__metadata("design:type", Object)
], Invoice.prototype, "billedToAddress", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", Date)
], Invoice.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", Date)
], Invoice.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => InvoiceItem_entity_1.default, (item) => item.invoice),
    tslib_1.__metadata("design:type", Array)
], Invoice.prototype, "items", void 0);
Invoice = tslib_1.__decorate([
    (0, typeorm_1.Entity)("invoices")
], Invoice);
exports.default = Invoice;
//# sourceMappingURL=Invoice.entity.js.map