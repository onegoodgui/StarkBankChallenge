import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routers/index.js";
import "express-async-errors";

import { connectRedis, disconnectRedis } from "./config/redisConfig.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.raw({ type: "*/*" }));

app.use(router);

export async function init(): Promise<Express> {
  await connectRedis();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectRedis();
}

export default app;
