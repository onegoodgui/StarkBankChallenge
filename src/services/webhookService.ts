import axios from "axios";
import { webhookBuilder } from "../utils/webhookUtils.js";

async function webhookGenerator() {
  const webhook = await webhookBuilder();

  try {
    axios.post(
      "https://challenge447789.sandbox.starkbank.com/v2/webhook",
      webhook
    );
  } catch (err) {
    console.log(err);
  }
}

export { webhookGenerator };
