import { createClient, RedisClientType } from "redis";
import dotenv from "dotenv";

dotenv.config();

export let redisClient: RedisClientType;

export async function connectRedis() {
  redisClient = createClient({
    url: process.env.REDIS_URL,
  });
  await redisClient.connect();
}

export async function disconnectRedis() {
  await redisClient?.disconnect();
}
