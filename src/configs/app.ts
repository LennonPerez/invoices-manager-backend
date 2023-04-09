import express, { Express } from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import InvoicesRouter from '../routes/invoicesRoutes'
import "reflect-metadata"

dotenv.config()
const app: Express = express();

app.use(express.json());
app.use(cors())

// Routes
app.use('/invoices', InvoicesRouter)

export default app;