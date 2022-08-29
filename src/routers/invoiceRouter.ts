import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { invoiceSenderSchema } from "../schemas/invoiceSchemas.js";
import { Router } from "express";
import { sendInvoice } from "../controllers/invoiceController.js";

const invoiceRouter = Router();

invoiceRouter.post(
  "/send",
  validateSchemaMiddleware(invoiceSenderSchema),
  sendInvoice
);

export default invoiceRouter;
