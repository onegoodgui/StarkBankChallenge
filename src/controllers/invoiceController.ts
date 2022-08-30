import {
  invoiceSender,
  invoiceSenderStatus,
} from "../services/invoiceService.js";
import { Request, Response } from "express";

async function sendInvoice(req: Request, res: Response) {
  const ans = await invoiceSenderStatus(res);
  if (!ans) {
    return;
  }
  const [interval, limit] = [1000 * 60 * 60 * 3, 1000 * 60 * 60 * 24];
  await invoiceSender(interval, limit);

  res.sendStatus(200);
}

export { sendInvoice };
