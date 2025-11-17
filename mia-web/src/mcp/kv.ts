import { createClient, RedisClientType, RedisArgument } from 'redis';

export const redis = createClient({ url: process.env.KV_REDIS_URL });

await redis.connect()

export async function set(userId: string, k: string, v: RedisArgument) {
  return await redis.set(process.env.KV_NS + "/" + userId + "/" + k, v);
}

export async function get(userId: string, k: string) {
  return await redis.get(process.env.KV_NS + "/" + userId + "/" + k);
}

