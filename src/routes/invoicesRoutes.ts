import express, { Router } from "express";
import {
  getAllInvoicesController,
  createNewInvoiceController,
  getInvoiceByIdController,
  updateInvoiceController,
  deleteInvoiceController,
} from "../controllers/invoicesControllers";

const router: Router = express.Router();

router.get("/", getAllInvoicesController);

router.post("/", createNewInvoiceController);

const specificInvoice = router.route("/:id");

specificInvoice.get(getInvoiceByIdController);

specificInvoice.put(updateInvoiceController);

specificInvoice.delete(deleteInvoiceController);

export default router;
