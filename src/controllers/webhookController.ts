import starkbankClient from "../config/stkConfig.js";
import { transferMaker } from "../services/transferService.js";
import { Request, Response } from "express";
import { AxiosResponse } from "axios";

async function webhookLink(req: Request, res: Response) {
  try {
    let event = await starkbankClient.event.parse({
      content: req.body.toString(),
      signature: req.headers["digital-signature"],
    });
    if (event.subscription === "transfer") {
    } else if (event.subscription === "boleto") {
    } else if (event.subscription === "boleto-payment") {
    } else if (event.subscription === "utility-payment") {
    } else if (event.subscription === "boleto-holmes") {
    } else if (event.subscription === "brcode-payment") {
    } else if (event.subscription === "deposit") {
    } else if (event.subscription === "invoice") {
      const transfer = (await transferMaker(event.log.invoice)) as any;
      transfer ? console.log(`transfer of id:${transfer.id} completed`) : "";
    }
    res.end();
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
}

export { webhookLink };
