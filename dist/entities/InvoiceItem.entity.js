"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const Invoice_entity_1 = tslib_1.__importDefault(require("./Invoice.entity"));
let InvoiceItem = class InvoiceItem {
};
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", String)
], InvoiceItem.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], InvoiceItem.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1, { message: "Minimun quantity: 1" }),
    tslib_1.__metadata("design:type", Number)
], InvoiceItem.prototype, "quantity", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.Min)(0.01, { message: "Minimun price: 0.01" }),
    tslib_1.__metadata("design:type", Number)
], InvoiceItem.prototype, "price", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.Min)(0.01, { message: "Minimun total: 0.01" }),
    tslib_1.__metadata("design:type", Number)
], InvoiceItem.prototype, "total", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", Date)
], InvoiceItem.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", Date)
], InvoiceItem.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => Invoice_entity_1.default, (invoice) => invoice.items),
    tslib_1.__metadata("design:type", Invoice_entity_1.default)
], InvoiceItem.prototype, "invoice", void 0);
InvoiceItem = tslib_1.__decorate([
    (0, typeorm_1.Entity)("items")
], InvoiceItem);
exports.default = InvoiceItem;
//# sourceMappingURL=InvoiceItem.entity.js.map