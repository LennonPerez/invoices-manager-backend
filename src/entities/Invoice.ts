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
import InvoiceItem from "./Item";

export enum InvoiceStatus {
  PENDING = "Pending",
  PAID = "Paid",
  DRAFT = "Draft",
}

export interface InvoiceAddress {
  country: string;
  city: string;
  postCode: string;
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

  @Column()
  @IsInt()
  paymentTerm: 1 | 7 | 14 | 30;

  @Column()
  @IsDate()
  invoiceDate: Date;

  @Column()
  @IsDate()
  paymentDue: Date; // autocalculated invoiceDate + payment term

  @Column()
  clientName: string;

  @Column()
  @IsEmail()
  clientEmail: string;

  @Column("simple-json")
  billedFromAddress: InvoiceAddress;

  @Column("simple-json")
  billedToAddress: InvoiceAddress;

  @OneToMany(() => InvoiceItem, (item) => item.invoice)
  items: InvoiceItem[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
