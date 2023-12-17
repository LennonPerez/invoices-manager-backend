import { Request, Response } from "express";
import invoices from "../mocks/invoices";
import getCatchError from "../utils/getCatchError";

export const getAllInvoicesController = async (
  _: Request,
  res: Response
): Promise<void> => {
  try {
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
    const invoice = invoices.find((e) => e.id === req.params.id);
    if (!invoice) throw new Error("Invoice not found");

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

    // TODO: Do post action

    const result = {};

    res.json({ data: result });
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

    const invoice = invoices.find((e) => e.id === req.params.id);
    if (!invoice) throw new Error("Invoice not found");

    // TODO: Do put action

    const result = {};

    res.json({ data: result });
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
    const invoice = invoices.find((e) => e.id === req.params.id);
    if (!invoice) throw new Error("Invoice not found");

    // TODO: Do delete action

    res.json({ data: { message: "Invoice deleted" } });
  } catch (e) {
    console.log(getCatchError(e));
    res.json({ error: getCatchError(e) });
  }
};
