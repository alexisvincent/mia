import { createClient, RedisArgument } from 'redis';

const redis = await createClient({ url: process.env.KV_REDIS_URL }).connect();

export async function set(userId: string, k: string, v: RedisArgument) {
  return await redis.set(process.env.KV_NS + "/" + userId + "/" + k, v);
}

export async function get(userId: string, k: string) {
  return await redis.get(process.env.KV_NS + "/" + userId + "/" + k);
}
