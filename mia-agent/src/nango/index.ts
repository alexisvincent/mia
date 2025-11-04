import { Nango } from '@nangohq/node';

const secretKey = process.env.NANGO_SECRET_KEY;

if (!secretKey) {
  throw new Error('NANGO_SECRET_KEY environment variable is required');
}

export const nango = new Nango({ secretKey });
