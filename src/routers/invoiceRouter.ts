import { Router } from "express";
import { sendInvoice } from "../controllers/invoiceController.js";

const invoiceRouter = Router();

invoiceRouter.post("/send", sendInvoice);

export default invoiceRouter;
