import starkbankClient from "../config/stkConfig.js";

async function webhookBuilder() {
  return await starkbankClient.webhook.create({
    url: "https://webhook.site/8768eccf-9008-42a8-b468-eda35a3c7389",
    subscriptions: [
      "transfer",
      "boleto",
      "boleto-payment",
      "boleto-holmes",
      "brcode-payment",
      "utility-payment",
      "deposit",
      "invoice",
    ],
  });
}

export { webhookBuilder };
