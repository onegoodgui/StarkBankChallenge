import starkbankClient from "../config/stkConfig.js";
import project from "../config/stkConfig.js";
import { Request, Response } from "express";

export async function testModule(req: Request, res: Response) {
  try {
    let balance = await starkbankClient.balance.get();
    res.send(balance);
  } catch (err) {
    throw err.message;
  }
}
