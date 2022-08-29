import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routers/index.js";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
import { connectRedis } from "./config/redisConfig.js";
import { webhookConfig } from "./services/webhookService.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.raw({ type: "*/*" }));
app.use(errorHandlerMiddleware);
app.use(router);

await webhookConfig("ngrok");

const PORT = process.env.PORT || 4000;

export function init(): Promise<Express> {
  connectRedis();
  return Promise.resolve(app);
}

init().then(() => {
  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
});
