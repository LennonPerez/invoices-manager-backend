import express, { Express } from "express";
import cors from "cors";
import InvoicesRouter from "../routes/invoicesRoutes";

const app: Express = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/invoices", InvoicesRouter);

export default app;
