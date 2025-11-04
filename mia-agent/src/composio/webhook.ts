import { registerApiRoute } from '@mastra/core/server';
import { composio } from './index.js';

/**
 * Handle incoming Gmail message webhook
 */
async function handleGmailMessage(payload: any) {
  const { data } = payload;

  console.log('📧 New Gmail message received:', {
    messageId: data.message_id,
    threadId: data.thread_id,
    subject: data.subject,
    from: data.sender,
    to: data.to,
    timestamp: data.message_timestamp,
    preview: data.message_text,
  });

  // TODO: Implement task detection logic
  // 1. Use AI to analyze message_text and subject for actionable items
  // 2. Extract potential tasks with importance grading
  // 3. Create tasks in Linear if action items are detected
  // 4. Track queue time from message_timestamp

  // For now, just log the full message for inspection
  console.log('Message content:', {
    text: data.message_text,
    hasAttachments: data.attachment_list?.length > 0,
    labels: data.label_ids,
  });
}

/**
 * Composio webhook endpoint
 * Handles webhook events from Composio integrations
 */
export const composioWebhookRoute = registerApiRoute('/webhooks/composio', {
  method: 'POST',
  handler: async (c) => {
    try {
      const body = await c.req.json();

      console.log('Received Composio webhook:', {
        timestamp: new Date().toISOString(),
      });

      // Handle different webhook event types
      switch (body.type) {
        case 'gmail_new_gmail_message':
          await handleGmailMessage(body);
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
      console.error('Error processing Composio webhook:', error);
      return c.json({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }, 500);
    }
  },
});
