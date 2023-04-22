import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { IsEmail, IsDate, IsInt, Min } from "class-validator";

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
class Invoice extends BaseEntity {
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

@Entity("items")
class InvoiceItem {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({ type: "int" })
  @IsInt()
  @Min(1, { message: "Minimun quantity: 1" })
  quantity: number;

  @Column()
  @Min(0.01, { message: "Minimun price: 0.01" })
  price: number;

  @Column()
  @Min(0.01, { message: "Minimun total: 0.01" })
  total: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Invoice, (invoice) => invoice.items)
  invoice: Invoice;
}

import { DataSource } from "typeorm";

const appDataSource: DataSource = new DataSource({
  type: "postgres",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "invoices",
  logging: true,
  synchronize: true,
  // entities: [__dirname + "/../**/*.entity.{js,ts}"],
  entities: [Invoice, InvoiceItem],
});

export default appDataSource;
