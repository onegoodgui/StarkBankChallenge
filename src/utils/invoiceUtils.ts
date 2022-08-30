import starkbankClient from "../config/stkConfig.js";
import { redisClient } from "../config/redisConfig.js";
import { Person } from "./userUtils.js";

async function invoiceBuilder(user: Person, amount: number) {
  return await starkbankClient.invoice.create([
    {
      amount,
      taxId: user.cpf,
      name: user.name,
    },
  ]);
}

async function processStatus() {
  if ((await redisClient.get("funcStart")) === null) {
    await redisClient.set("funcStart", new Date().getTime().toString());
    return "starting";
  } else {
    const init = parseInt(await redisClient.get("funcStart"));
    const now = new Date().getTime();
    if (now - init > 1000 * 60 * 60 * 24) {
      await redisClient.getDel("funcStart");
      await redisClient.set("funcStart", new Date().getTime().toString());
      return "starting";
    } else {
      return `Still ${
        (1000 * 60 * 60 * 24 - (now - init)) / (1000 * 60)
      } minutes left before execution runs out`;
    }
  }
}

export { invoiceBuilder, processStatus };
