import axios from "axios";
import ngrok from "ngrok";
import dotenv from "dotenv";
import {
  webhookBuilder,
  webhookFinder,
  webhookDeleteBuilder,
} from "../utils/webhookUtils.js";

dotenv.config();

async function webhookGenerator(url: string) {
  const webhook = await webhookBuilder(url);

  try {
    await axios.post(
      "https://challenge447789.sandbox.starkbank.com/v2/webhook",
      webhook
    );
  } catch (err) {
    console.log(err);
  }
}

async function webhookConfig(method: string) {
  switch (method) {
    case "ngrok":
      await ngrok.disconnect();
      const webhook = await webhookFinder("ngrok.io");
      try {
        if (webhook) {
          const webhookToDelete = await webhookDeleteBuilder(webhook);
          await axios.delete(
            `https://challenge447789.sandbox.starkbank.com/v2/webhook/${webhookToDelete.id}`
          );
          console.log("previous webhook deleted");
        }
        const url = await ngrok.connect(parseInt(process.env.PORT));
        await webhookGenerator(url);
        console.log("new webhook created");
        break;
      } catch (err) {
        console.log(err);
      }
    default:
      console.log("unsupported method for webhook linking");
      break;
  }
}

export { webhookGenerator, webhookConfig };
