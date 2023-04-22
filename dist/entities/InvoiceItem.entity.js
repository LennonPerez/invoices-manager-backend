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
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const Invoice_entity_1 = __importDefault(require("./Invoice.entity"));
let InvoiceItem = class InvoiceItem {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], InvoiceItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InvoiceItem.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1, { message: "Minimun quantity: 1" }),
    __metadata("design:type", Number)
], InvoiceItem.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.Min)(0.01, { message: "Minimun price: 0.01" }),
    __metadata("design:type", Number)
], InvoiceItem.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.Min)(0.01, { message: "Minimun total: 0.01" }),
    __metadata("design:type", Number)
], InvoiceItem.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], InvoiceItem.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], InvoiceItem.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Invoice_entity_1.default, (invoice) => invoice.items),
    __metadata("design:type", Invoice_entity_1.default)
], InvoiceItem.prototype, "invoice", void 0);
InvoiceItem = __decorate([
    (0, typeorm_1.Entity)("items")
], InvoiceItem);
exports.default = InvoiceItem;
//# sourceMappingURL=InvoiceItem.entity.js.map