import express, { Router } from "express";
import * as controllers from "../controllers/invoicesControllers";

const router: Router = express.Router();

router.get("/", controllers.getAllInvoicesController);

router.post("/", controllers.createNewInvoiceController);

const specificInvoice = router.route("/:id");

specificInvoice.get(controllers.getInvoiceByIdController);

specificInvoice.put(controllers.updateInvoiceController);

specificInvoice.delete(controllers.deleteInvoiceController);

export default router;
