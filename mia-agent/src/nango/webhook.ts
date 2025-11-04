import { registerApiRoute } from '@mastra/core/server';
import { nango } from './index.js';

/**
 * Nango webhook endpoint
 * Handles webhook events from Nango integrations
 */
export const nangoWebhookRoute = registerApiRoute('/webhooks/nango', {
  method: 'POST',
  handler: async (c) => {
    try {
      const body = await c.req.json();

      console.log('Received Nango webhook:', {
        type: body.type,
        connectionId: body.connectionId,
        providerConfigKey: body.providerConfigKey,
        timestamp: new Date().toISOString(),
      });

      // Handle different webhook event types
      switch (body.type) {
        case 'sync':
          console.log('Sync event received:', body);
          // Handle sync completion
          break;

        case 'auth':
          console.log('Auth event received:', body);
          // Handle authentication events
          break;

        case 'forward':
          console.log('Forward event received:', body);
          // Handle forwarded webhooks from integrated services
          break;

        default:
          console.log('Unknown webhook type:', body.type);
      }

      // Acknowledge receipt
      return c.json({
        success: true,
        received: true,
        timestamp: new Date().toISOString()
      });

    } catch (error) {
      console.error('Error processing Nango webhook:', error);
      return c.json({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }, 500);
    }
  },
});
