"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceStatus = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const InvoiceItem_entity_1 = __importDefault(require("./InvoiceItem.entity"));
var InvoiceStatus;
(function (InvoiceStatus) {
    InvoiceStatus["PENDING"] = "Pending";
    InvoiceStatus["PAID"] = "Paid";
    InvoiceStatus["DRAFT"] = "Draft";
})(InvoiceStatus = exports.InvoiceStatus || (exports.InvoiceStatus = {}));
let Invoice = class Invoice extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Invoice.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        enum: InvoiceStatus,
    }),
    __metadata("design:type", String)
], Invoice.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Invoice.prototype, "invoiceDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], Invoice.prototype, "paymentTerm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Invoice.prototype, "invoiceDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Invoice.prototype, "paymentDue", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Invoice.prototype, "clientName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], Invoice.prototype, "clientEmail", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-json"),
    __metadata("design:type", Object)
], Invoice.prototype, "billedFromAddress", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-json"),
    __metadata("design:type", Object)
], Invoice.prototype, "billedToAddress", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Invoice.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Invoice.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => InvoiceItem_entity_1.default, (item) => item.invoice),
    __metadata("design:type", Array)
], Invoice.prototype, "items", void 0);
Invoice = __decorate([
    (0, typeorm_1.Entity)("invoices")
], Invoice);
exports.default = Invoice;
//# sourceMappingURL=Invoice.entity.js.map