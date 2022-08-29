import dotenv from "dotenv";
import starkbankClient from "../config/stkConfig.js";

interface Webhook {
  id: number;
  subscription: Subscription[];
  url: string;
}
type Subscription = "profiles" | "locations" | "change_history";

async function webhookBuilder(url: string) {
  return await starkbankClient.webhook.create({
    url,
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

async function webhookFinder(path: string) {
  const webhooks = await starkbankClient.webhook.query();
  for await (let webhook of webhooks) {
    const url = webhook.url as string;
    if (url.includes(path)) {
      return webhook;
    }
  }
  return false;
}

async function webhookDeleteBuilder(webhook: Webhook): Promise<Webhook> {
  return await starkbankClient.webhook.delete(webhook.id);
}

export { webhookBuilder, webhookFinder, webhookDeleteBuilder };
