import express from "express";
import cors from "cors";

import { invoiceSender } from "./services/invoiceService.js";
import { webhookGenerator } from "./services/webhookService.js";

const app = express();
app.use(cors());
app.use(express.json());

invoiceSender(1000 * 60 * 1, 1000 * 60 * 1);
// webhookGenerator();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
