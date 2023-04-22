import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { IsEmail, IsDate, IsInt } from "class-validator";
import InvoiceItem from "./InvoiceItem.entity";

export enum InvoiceStatus {
  PENDING = "Pending",
  PAID = "Paid",
  DRAFT = "Draft",
}

export interface InvoiceAddress {
  country: string;
  city: string;
  postalCode: string;
  street: string;
}

@Entity("invoices")
export default class Invoice extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    enum: InvoiceStatus,
  })
  status: InvoiceStatus;

  @Column()
  invoiceDescription: string;

  @Column({ type: "int" })
  @IsInt()
  paymentTerm: 1 | 7 | 14 | 30;

  @Column({ type: "date" })
  @IsDate()
  invoiceDate: Date;

  @Column({ type: "date" })
  @IsDate()
  paymentDue: Date; // auto-calculated invoiceDate + paymentTerm

  @Column()
  clientName: string;

  @Column()
  @IsEmail()
  clientEmail: string;

  @Column("simple-json")
  billedFromAddress: InvoiceAddress;

  @Column("simple-json")
  billedToAddress: InvoiceAddress;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => InvoiceItem, (item) => item.invoice)
  items: InvoiceItem[];
}
