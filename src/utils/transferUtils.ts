import starkbankClient from "../config/stkConfig.js";
import { redisClient } from "../config/redisConfig.js";
import { v4 as uuid } from "uuid";

async function transferBuilder(webhook: any) {
  if (webhook.status === "created") {
    return false;
  }
  if ((await redisClient.hVals("id")).includes(webhook.id)) {
    return false;
  }
  await redisClient.hSet("id", (await redisClient.hLen("id")) + 1, webhook.id);
  const amount = webhook.amount * (1 - webhook.fee / 100);
  const transfers = await starkbankClient.transfer.create([
    {
      amount,
      bankCode: "20018183",
      branchCode: "0001",
      accountNumber: "6341320293482496",
      taxId: "20.018.183/0001-80",
      name: "Stark Bank S.A.",
      accountType: "payment",
    },
  ]);
  for await (let transfer of transfers) {
    return transfer;
  }
}

export { transferBuilder };
