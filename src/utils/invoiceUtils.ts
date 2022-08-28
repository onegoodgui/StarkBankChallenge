import starkbankClient from "../config/stkConfig.js";
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

export { invoiceBuilder };
