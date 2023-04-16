import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { IsInt, Min } from "class-validator";
import Invoice from "./Invoice";

@Entity("items")
export default class InvoiceItem {
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
