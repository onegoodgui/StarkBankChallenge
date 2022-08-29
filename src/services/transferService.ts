import axios from "axios";
import { transferBuilder } from "../utils/transferUtils.js";

async function transferMaker(webhook: any) {
  try {
    const transfer = await transferBuilder(webhook);
    return transfer;
  } catch (err) {
    console.log(err);
  }
}

export { transferMaker };
