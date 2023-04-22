import { Request, Response } from "express";
import appDataSource from "../configs/db";
import Invoice from "../entities/Invoice.entity";
import getCatchError from "../utils/getCatchError";

export const getAllInvoicesController = async (
  _: Request,
  res: Response
): Promise<void> => {
  try {
    const invoices = await appDataSource.getRepository(Invoice).find();
    res.json({ data: invoices });
  } catch (e) {
    console.log(getCatchError(e));
    res.json({ error: getCatchError(e) });
  }
};

export const getInvoiceByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const invoice = await appDataSource.getRepository(Invoice).findOneBy({
      id: req.params.id,
    });
    res.json({ data: invoice });
  } catch (e) {
    console.log(getCatchError(e));
    res.json({ error: getCatchError(e) });
  }
};

export const createNewInvoiceController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.body.items || req.body.items.length == 0)
      throw new Error("You must supply at least one item for this invoice");

    const invoice = await appDataSource.getRepository(Invoice).create(req.body);
    const results = await appDataSource.getRepository(Invoice).save(invoice);
    res.json({ data: results });
  } catch (e) {
    console.log(getCatchError(e));
    res.json({ error: getCatchError(e) });
  }
};

export const updateInvoiceController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.body.items || req.body.items.length == 0)
      throw new Error("You must supply at least one item for this invoice");

    const invoice = await appDataSource.getRepository(Invoice).findOneBy({
      id: req.params.id,
    });
    if (!invoice) throw new Error("invoice not found");

    appDataSource.getRepository(Invoice).merge(invoice, req.body);
    const results = await appDataSource.getRepository(Invoice).save(invoice);

    res.json({ data: results });
  } catch (e) {
    console.log(getCatchError(e));
    res.json({ error: getCatchError(e) });
  }
};

export const deleteInvoiceController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const invoice = await appDataSource.getRepository(Invoice).findOneBy({
      id: req.params.id,
    });
    if (!invoice) throw new Error("invoice not found");

    await appDataSource.getRepository(Invoice).delete(req.params.id);

    res.json({ data: { message: "Invoice deleted" } });
  } catch (e) {
    console.log(getCatchError(e));
    res.json({ error: getCatchError(e) });
  }
};
