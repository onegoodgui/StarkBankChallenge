import {
  invoiceSender,
  invoiceSenderStatus,
} from "../services/invoiceService.js";
import { Request, Response } from "express";
import { serviceErrorToStatusCode } from "../utils/errorUtils.js";

async function sendInvoice(req: Request, res: Response) {
  const ans = await invoiceSenderStatus();
  if (ans !== true) {
    res.status(serviceErrorToStatusCode[ans.type]).send(ans.message);
    return;
  }
  const [interval, limit] = [1000 * 60 * 60 * 3, 1000 * 60 * 69 * 24];
  await invoiceSender(interval, limit);

  res.sendStatus(200);
}

export { sendInvoice };
