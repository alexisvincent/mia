// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CUSTOMERIO's CUSTOMERIO_CUSTOMER_IO_SUPPRESS_PERSON tool input.
 */
type CUSTOMERIO_CUSTOMER_IO_SUPPRESS_PERSON_INPUT = {
  /**
   * Identifier
   * @description The unique identifier for the person to suppress. Can be an ID, email address, or cio_id (prefixed with 'cio_').
   */
  identifier?: string;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_CUSTOMER_IO_SUPPRESS_PERSON tool output.
 */
type CUSTOMERIO_CUSTOMER_IO_SUPPRESS_PERSON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_GET_INTEGRATIONS tool input.
 */
type CUSTOMERIO_GET_INTEGRATIONS_INPUT = object;

/**
 * Type of CUSTOMERIO's CUSTOMERIO_GET_INTEGRATIONS tool output.
 */
type CUSTOMERIO_GET_INTEGRATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Integrations
       * @description Array of installed integrations
       */
      integrations: {
          /**
           * Account Id
           * @description External system account ID, if applicable
           * @default null
           */
          account_id: string | null;
          /**
           * Created At
           * @description Unix timestamp when the integration was created
           */
          created_at: number;
          /**
           * Enabled
           * @description Whether the integration is currently active
           */
          enabled: boolean;
          /**
           * Id
           * @description Unique integration identifier
           */
          id: string;
          /**
           * Name
           * @description Name of the integration
           */
          name: string;
          /**
           * Settings
           * @description Integration-specific configuration settings
           * @default null
           */
          settings: {
              [key: string]: string;
          } | null;
          /**
           * Updated At
           * @description Unix timestamp when the integration was last updated
           */
          updated_at: number;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_GET_MESSAGES tool input.
 */
type CUSTOMERIO_GET_MESSAGES_INPUT = {
  /**
   * Action Id
   * @description Filter results by a specific action ID.
   * @default null
   */
  action_id: number | null;
  /**
   * Campaign Id
   * @description Filter results by a specific campaign ID.
   * @default null
   */
  campaign_id: number | null;
  /**
   * Drafts
   * @description If true, returns draft messages instead of active/sent ones.
   * @default null
   */
  drafts: boolean | null;
  /**
   * End Ts
   * @description End of time window (Unix timestamp).
   * @default null
   */
  end_ts: number | null;
  /**
   * Limit
   * @description Maximum number of results per page (1–1000). Default is 50.
   * @default 50
   */
  limit: number | null;
  /**
   * Metric
   * @description Metric to include in response, e.g., 'attempted', 'sent', 'delivered', 'opened', 'clicked', 'converted'.
   * @default null
   */
  metric: string | null;
  /**
   * Newsletter Id
   * @description Filter results by a specific newsletter ID.
   * @default null
   */
  newsletter_id: number | null;
  /**
   * Start
   * @description Pagination token for the page of results to return. Use the 'next' value from a previous response as this parameter.
   * @default null
   */
  start: string | null;
  /**
   * Start Ts
   * @description Start of time window (Unix timestamp).
   * @default null
   */
  start_ts: number | null;
  /**
   * Type
   * @description Type of message to return metrics for. If omitted, returns all types.
   * @default null
   * @enum {string|null}
   */
  type: "email" | "webhook" | "twilio" | "slack" | "push" | "in_app" | null;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_GET_MESSAGES tool output.
 */
type CUSTOMERIO_GET_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Messages
       * @description Array of message objects.
       */
      messages: {
          /**
           * Action Id
           * @description Action ID associated with this message.
           */
          action_id: number;
          /**
           * Broadcast Id
           * @description Broadcast ID if sent via broadcast.
           * @default null
           */
          broadcast_id: number | null;
          /**
           * Campaign Id
           * @description Campaign ID if part of a campaign.
           * @default null
           */
          campaign_id: number | null;
          /**
           * Content Id
           * @description Content ID if part of content group.
           * @default null
           */
          content_id: number | null;
          /**
           * Created
           * @description Unix timestamp when message was created.
           */
          created: number;
          /**
           * Customer Id
           * @description Customer ID linked to the message.
           * @default null
           */
          customer_id: string | null;
          /**
           * Deduplicate Id
           * @description Deduplication token for the message.
           */
          deduplicate_id: string;
          /**
           * Failure Message
           * @description Failure reason if the message failed.
           * @default null
           */
          failure_message: string | null;
          /**
           * Forgotten
           * @description Indicates if the message has been forgotten.
           */
          forgotten: boolean;
          /**
           * Id
           * @description Unique identifier of the message.
           */
          id: string;
          /**
           * Metrics
           * @description Metrics for this message.
           */
          metrics: {
              /**
               * Attempted
               * @description Number of attempted sends.
               * @default null
               */
              attempted: number | null;
              /**
               * Clicked
               * @description Number of link clicks.
               * @default null
               */
              clicked: number | null;
              /**
               * Converted
               * @description Number of conversions.
               * @default null
               */
              converted: number | null;
              /**
               * Delivered
               * @description Number of delivered messages.
               * @default null
               */
              delivered: number | null;
              /**
               * Opened
               * @description Number of opens recorded.
               * @default null
               */
              opened: number | null;
              /**
               * Sent
               * @description Number of successful sends.
               * @default null
               */
              sent: number | null;
          };
          /**
           * Msg Template Id
           * @description ID of the message template.
           */
          msg_template_id: number;
          /**
           * Newsletter Id
           * @description Newsletter ID if part of a newsletter.
           * @default null
           */
          newsletter_id: number | null;
          /**
           * Parent Action Id
           * @description Parent action ID if applicable.
           * @default null
           */
          parent_action_id: number | null;
          /**
           * Recipient
           * @description Recipient identifier, typically email.
           */
          recipient: string;
          /**
           * Subject
           * @description Subject line of the message.
           */
          subject: string;
          /**
           * Trigger Event Id
           * @description Trigger event ID if originated from an event.
           * @default null
           */
          trigger_event_id: string | null;
          /**
           * Type
           * @description Type of message (e.g., 'email').
           */
          type: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_GET_SEGMENTS tool input.
 */
type CUSTOMERIO_GET_SEGMENTS_INPUT = object;

/**
 * Type of CUSTOMERIO's CUSTOMERIO_GET_SEGMENTS tool output.
 */
type CUSTOMERIO_GET_SEGMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Segments
       * @description Array of segment objects.
       */
      segments: {
          /**
           * Deduplicate Id
           * @description Unique string identifier for the segment.
           */
          deduplicate_id: string;
          /**
           * Description
           * @description Description of the segment.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The segment's unique identifier.
           */
          id: number;
          /**
           * Name
           * @description The name of the segment.
           */
          name: string;
          /**
           * Progress
           * @description Progress of the segment's processing, if applicable.
           * @default null
           */
          progress: number | null;
          /**
           * State
           * @description Current state of the segment (e.g., 'finished').
           */
          state: string;
          /**
           * Tags
           * @description Tags associated with the segment.
           * @default null
           */
          tags: string[] | null;
          /**
           * Type
           * @description The type of segment (e.g., 'manual').
           */
          type: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_GET_SEGMENT_DETAILS tool input.
 */
type CUSTOMERIO_GET_SEGMENT_DETAILS_INPUT = {
  /**
   * Segment Id
   * @description The unique identifier of the segment to retrieve.
   */
  segment_id?: number;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_GET_SEGMENT_DETAILS tool output.
 */
type CUSTOMERIO_GET_SEGMENT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Segment
       * @description Object containing detailed information about the segment.
       */
      segment: {
          /**
           * Deduplicate Id
           * @description Unique string identifier for deduplication.
           */
          deduplicate_id: string;
          /**
           * Description
           * @description Description of the segment.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description The segment's unique identifier.
           */
          id: number;
          /**
           * Name
           * @description The name of the segment.
           */
          name: string;
          /**
           * Progress
           * @description Progress percentage of the segment processing, if applicable.
           * @default null
           */
          progress: number | null;
          /**
           * State
           * @description Current state of the segment (e.g., 'finished').
           */
          state: string;
          /**
           * Tags
           * @description Tags associated with the segment.
           * @default null
           */
          tags: string[] | null;
          /**
           * Type
           * @description The type of segment (e.g., 'manual').
           */
          type: string;
      };
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_GET_SEGMENT_MEMBERSHIP tool input.
 */
type CUSTOMERIO_GET_SEGMENT_MEMBERSHIP_INPUT = {
  /**
   * Limit
   * @description Maximum number of results per page (1 ≤ limit ≤ 30000). Default is 1000.
   * @default null
   */
  limit: number | null;
  /**
   * Segment Id
   * @description The segment's unique identifier.
   */
  segment_id?: number;
  /**
   * Sort
   * @description Order of results: 'asc' for oldest first, 'desc' for newest first.
   * @default asc
   * @enum {string}
   */
  sort: "asc" | "desc";
  /**
   * Start
   * @description Pagination token for the page of results to return.
   * @default null
   */
  start: string | null;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_GET_SEGMENT_MEMBERSHIP tool output.
 */
type CUSTOMERIO_GET_SEGMENT_MEMBERSHIP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Identifiers
       * @description List of member identifier objects.
       */
      identifiers: {
          /**
           * Cio Id
           * @description Member's Customer.io ID, if available.
           * @default null
           */
          cio_id: string | null;
          /**
           * Email
           * @description Member's email address, if available.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Member's unique ID.
           */
          id: number;
      }[];
      /**
       * Ids
       * @description List of member IDs.
       */
      ids: number[];
      /**
       * Next
       * @description Token to retrieve the next page of results.
       * @default null
       */
      next: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_GET_TRIGGER tool input.
 */
type CUSTOMERIO_GET_TRIGGER_INPUT = {
  /**
   * Broadcast Id
   * @description The unique identifier of the broadcast.
   */
  broadcast_id?: number;
  /**
   * Trigger Id
   * @description The unique identifier of the trigger to retrieve.
   */
  trigger_id?: number;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_GET_TRIGGER tool output.
 */
type CUSTOMERIO_GET_TRIGGER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Broadcast Id
       * @description The associated broadcast identifier.
       */
      broadcast_id: number;
      /**
       * Created At
       * @description Unix timestamp when the trigger was created.
       */
      created_at: number;
      /**
       * Id
       * @description The trigger's unique identifier.
       */
      id: number;
      /**
       * Processed At
       * @description Unix timestamp when the trigger was processed.
       */
      processed_at: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_GET_TRIGGERS tool input.
 */
type CUSTOMERIO_GET_TRIGGERS_INPUT = {
  /**
   * Broadcast Id
   * @description The broadcast's unique identifier.
   */
  broadcast_id?: number;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_GET_TRIGGERS tool output.
 */
type CUSTOMERIO_GET_TRIGGERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Triggers
       * @description List of trigger objects for the broadcast.
       */
      triggers: {
          /**
           * Broadcast Id
           * @description Associated broadcast identifier.
           */
          broadcast_id: number;
          /**
           * Created At
           * @description Unix timestamp when the trigger was created.
           */
          created_at: number;
          /**
           * Id
           * @description Trigger identifier.
           */
          id: number;
          /**
           * Processed At
           * @description Unix timestamp when the trigger was processed.
           */
          processed_at: number;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_GET_WEBHOOKS tool input.
 */
type CUSTOMERIO_GET_WEBHOOKS_INPUT = object;

/**
 * Type of CUSTOMERIO's CUSTOMERIO_GET_WEBHOOKS tool output.
 */
type CUSTOMERIO_GET_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Reporting Webhooks
       * @description Array of webhook configurations in the workspace
       */
      reporting_webhooks: {
          /**
           * Disabled
           * @description Whether the webhook is disabled
           */
          disabled: boolean;
          /**
           * Endpoint
           * @description URL endpoint receiving webhook events
           */
          endpoint: string;
          /**
           * Events
           * @description List of event types subscribed for the webhook
           */
          events: string[];
          /**
           * Full Resolution
           * @description Whether all events are sent (true) or only unique resolution events (false)
           */
          full_resolution: boolean;
          /**
           * Id
           * @description Unique identifier for the webhook
           */
          id: number;
          /**
           * Name
           * @description Name of the webhook
           */
          name: string;
          /**
           * With Content
           * @description Whether to include message body in `_sent` events
           */
          with_content: boolean;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_LIST_COLLECTIONS tool input.
 */
type CUSTOMERIO_LIST_COLLECTIONS_INPUT = object;

/**
 * Type of CUSTOMERIO's CUSTOMERIO_LIST_COLLECTIONS tool output.
 */
type CUSTOMERIO_LIST_COLLECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collections
       * @description List of all Collections metadata in the workspace.
       */
      collections: {
          /**
           * Bytes
           * @description Size in bytes of the Collection data.
           */
          bytes: number;
          /**
           * Created At
           * @description Unix timestamp when the Collection was created.
           */
          created_at: number;
          /**
           * Id
           * @description Unique identifier for the Collection.
           */
          id: number;
          /**
           * Name
           * @description Name of the Collection.
           */
          name: string;
          /**
           * Rows
           * @description Number of rows in the Collection.
           */
          rows: number;
          /**
           * Schema
           * @description List of attribute names across all items in the Collection.
           */
          schema: string[];
          /**
           * Updated At
           * @description Unix timestamp when the Collection was last updated.
           */
          updated_at: number;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_LIST_NEWSLETTERS tool input.
 */
type CUSTOMERIO_LIST_NEWSLETTERS_INPUT = {
  /**
   * Limit
   * @description Maximum number of newsletters to retrieve per page
   * @default null
   */
  limit: number | null;
  /**
   * Sort
   * @description Sort order: 'asc' for chronological, 'desc' for reverse chronological
   * @default null
   * @enum {string|null}
   */
  sort: "asc" | "desc" | null;
  /**
   * Start
   * @description Pagination cursor. Use 'next' value from previous response to get next page
   * @default null
   */
  start: string | null;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_LIST_NEWSLETTERS tool output.
 */
type CUSTOMERIO_LIST_NEWSLETTERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Newsletters
       * @description Array of newsletter objects
       */
      newsletters: {
          /**
           * Content Ids
           * @description List of content variant IDs for this newsletter
           */
          content_ids: number[];
          /**
           * Created
           * @description Unix timestamp when the newsletter was created
           */
          created: number;
          /**
           * Deduplicate Id
           * @description Deduplication identifier for the newsletter
           */
          deduplicate_id: string;
          /**
           * Id
           * @description Newsletter ID
           */
          id: number;
          /**
           * Name
           * @description Name of the newsletter
           * @default null
           */
          name: string | null;
          /**
           * Recipient Segment Ids
           * @description List of segment IDs targeted by this newsletter
           * @default null
           */
          recipient_segment_ids: number[] | null;
          /**
           * Sent At
           * @description Unix timestamp when the newsletter was sent, or null if not sent yet
           * @default null
           */
          sent_at: number | null;
          /**
           * Subscription Topic Id
           * @description Subscription topic ID for this newsletter
           * @default null
           */
          subscription_topic_id: number | null;
          /**
           * Tags
           * @description Tags associated with the newsletter
           * @default null
           */
          tags: string[] | null;
          /**
           * Type
           * @description Type of newsletter, e.g., 'email'
           * @default null
           */
          type: string | null;
          /**
           * Updated
           * @description Unix timestamp when the newsletter was last updated
           */
          updated: number;
      }[];
      /**
       * Next
       * @description Cursor for retrieving the next page of results
       * @default null
       */
      next: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_LIST_SNIPPETS tool input.
 */
type CUSTOMERIO_LIST_SNIPPETS_INPUT = object;

/**
 * Type of CUSTOMERIO's CUSTOMERIO_LIST_SNIPPETS tool output.
 */
type CUSTOMERIO_LIST_SNIPPETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Snippets
       * @description Array of snippet objects.
       */
      snippets: {
          /**
           * Name
           * @description The name of the snippet.
           */
          name: string;
          /**
           * Updated At
           * @description Unix timestamp of the last update to the snippet.
           */
          updated_at: number;
          /**
           * Value
           * @description The content of the snippet.
           */
          value: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_LIST_TRANSACTIONAL_MESSAGES tool input.
 */
type CUSTOMERIO_LIST_TRANSACTIONAL_MESSAGES_INPUT = object;

/**
 * Type of CUSTOMERIO's CUSTOMERIO_LIST_TRANSACTIONAL_MESSAGES tool output.
 */
type CUSTOMERIO_LIST_TRANSACTIONAL_MESSAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Messages
       * @description List of transactional message templates
       */
      messages: {
          /**
           * Id
           * @description Unique identifier of the transactional message template
           */
          id: number;
          /**
           * Name
           * @description Name of the transactional message template
           */
          name: string;
      }[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_TRIGGER_BROADCAST tool input.
 */
type CUSTOMERIO_TRIGGER_BROADCAST_INPUT = {
  /**
   * Broadcast Id
   * @description The ID of the broadcast to trigger.
   */
  broadcast_id?: number;
  /**
   * Data
   * @description Key-value data for Liquid templating personalization.
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Email Add Duplicates
   * @description Whether to allow duplicate email recipients. Default false
   * @default false
   */
  email_add_duplicates: boolean;
  /**
   * Email Ignore Missing
   * @description Whether to ignore missing email addresses. Default false
   * @default false
   */
  email_ignore_missing: boolean;
  /**
   * Id Ignore Missing
   * @description Whether to ignore missing customer IDs. Default false
   * @default false
   */
  id_ignore_missing: boolean;
  /**
   * Recipients
   * @description Override the broadcast's UI audience. If omitted, the broadcast's default audience is used.
   * @default null
   */
  recipients: {
      /**
       * And
       * @description All nested conditions must be true
       * @default null
       */
      and: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Emails
       * @description List of email addresses to target.
       * @default null
       */
      emails: string[] | null;
      /**
       * Ids
       * @description List of customer IDs to target.
       * @default null
       */
      ids: string[] | null;
      /**
       * Not
       * @description Negate this condition
       * @default null
       */
      not: {
          [key: string]: unknown;
      } | null;
      /**
       * Or
       * @description At least one nested condition must be true
       * @default null
       */
      or: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Segment
       * @description A pre-defined segment of users in Customer.io.
       * @default null
       */
      segment: {
          /**
           * Id
           * @description ID of the segment containing people you want to target.
           */
          id: number;
      } | null;
  } | null;
};

/**
 * Type of CUSTOMERIO's CUSTOMERIO_TRIGGER_BROADCAST tool output.
 */
type CUSTOMERIO_TRIGGER_BROADCAST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description The ID of the triggered broadcast.
       */
      id: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "CUSTOMERIO".
 */
export type CUSTOMERIO_TOOL_INPUTS = {
  CUSTOMER_IO_SUPPRESS_PERSON: CUSTOMERIO_CUSTOMER_IO_SUPPRESS_PERSON_INPUT
  GET_INTEGRATIONS: CUSTOMERIO_GET_INTEGRATIONS_INPUT
  GET_MESSAGES: CUSTOMERIO_GET_MESSAGES_INPUT
  GET_SEGMENTS: CUSTOMERIO_GET_SEGMENTS_INPUT
  GET_SEGMENT_DETAILS: CUSTOMERIO_GET_SEGMENT_DETAILS_INPUT
  GET_SEGMENT_MEMBERSHIP: CUSTOMERIO_GET_SEGMENT_MEMBERSHIP_INPUT
  GET_TRIGGER: CUSTOMERIO_GET_TRIGGER_INPUT
  GET_TRIGGERS: CUSTOMERIO_GET_TRIGGERS_INPUT
  GET_WEBHOOKS: CUSTOMERIO_GET_WEBHOOKS_INPUT
  LIST_COLLECTIONS: CUSTOMERIO_LIST_COLLECTIONS_INPUT
  LIST_NEWSLETTERS: CUSTOMERIO_LIST_NEWSLETTERS_INPUT
  LIST_SNIPPETS: CUSTOMERIO_LIST_SNIPPETS_INPUT
  LIST_TRANSACTIONAL_MESSAGES: CUSTOMERIO_LIST_TRANSACTIONAL_MESSAGES_INPUT
  TRIGGER_BROADCAST: CUSTOMERIO_TRIGGER_BROADCAST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CUSTOMERIO".
 */
export type CUSTOMERIO_TOOL_OUTPUTS = {
  CUSTOMER_IO_SUPPRESS_PERSON: CUSTOMERIO_CUSTOMER_IO_SUPPRESS_PERSON_OUTPUT
  GET_INTEGRATIONS: CUSTOMERIO_GET_INTEGRATIONS_OUTPUT
  GET_MESSAGES: CUSTOMERIO_GET_MESSAGES_OUTPUT
  GET_SEGMENTS: CUSTOMERIO_GET_SEGMENTS_OUTPUT
  GET_SEGMENT_DETAILS: CUSTOMERIO_GET_SEGMENT_DETAILS_OUTPUT
  GET_SEGMENT_MEMBERSHIP: CUSTOMERIO_GET_SEGMENT_MEMBERSHIP_OUTPUT
  GET_TRIGGER: CUSTOMERIO_GET_TRIGGER_OUTPUT
  GET_TRIGGERS: CUSTOMERIO_GET_TRIGGERS_OUTPUT
  GET_WEBHOOKS: CUSTOMERIO_GET_WEBHOOKS_OUTPUT
  LIST_COLLECTIONS: CUSTOMERIO_LIST_COLLECTIONS_OUTPUT
  LIST_NEWSLETTERS: CUSTOMERIO_LIST_NEWSLETTERS_OUTPUT
  LIST_SNIPPETS: CUSTOMERIO_LIST_SNIPPETS_OUTPUT
  LIST_TRANSACTIONAL_MESSAGES: CUSTOMERIO_LIST_TRANSACTIONAL_MESSAGES_OUTPUT
  TRIGGER_BROADCAST: CUSTOMERIO_TRIGGER_BROADCAST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CUSTOMERIO toolkit.
 */
export const CUSTOMERIO = {
  slug: "customerio",
  tools: {
    /**
     * Tool to suppress a person. use when you need to permanently delete a customer's profile and prevent them from being re-added.
     */
    CUSTOMER_IO_SUPPRESS_PERSON: "CUSTOMERIO_CUSTOMER_IO_SUPPRESS_PERSON",
    /**
     * Tool to retrieve a list of integrations in your workspace. use when you need to discover configured integrations.
     */
    GET_INTEGRATIONS: "CUSTOMERIO_GET_INTEGRATIONS",
    /**
     * Tool to retrieve a list of messages sent from your workspace. use when you need paginated delivery metrics for messages, e.g., list email messages delivered between two timestamps.
     */
    GET_MESSAGES: "CUSTOMERIO_GET_MESSAGES",
    /**
     * Tool to retrieve a list of segments in your workspace. use when you need to fetch all segments after configuring segment rules.
     */
    GET_SEGMENTS: "CUSTOMERIO_GET_SEGMENTS",
    /**
     * Tool to retrieve details of a specific segment. use after identifying the segment id from list segments.
     */
    GET_SEGMENT_DETAILS: "CUSTOMERIO_GET_SEGMENT_DETAILS",
    /**
     * Tool to retrieve people in a specific segment. use when you need to page through segment membership after identifying segment id.
     */
    GET_SEGMENT_MEMBERSHIP: "CUSTOMERIO_GET_SEGMENT_MEMBERSHIP",
    /**
     * Tool to retrieve details about a specific trigger. use after triggering a broadcast to confirm its status and metadata.
     */
    GET_TRIGGER: "CUSTOMERIO_GET_TRIGGER",
    /**
     * Tool to retrieve a list of triggers for a specific broadcast. use after identifying broadcast id to inspect associated triggers.
     */
    GET_TRIGGERS: "CUSTOMERIO_GET_TRIGGERS",
    /**
     * Tool to retrieve a list of webhooks. use after setting up reporting webhooks to fetch current webhook configurations in your workspace.
     */
    GET_WEBHOOKS: "CUSTOMERIO_GET_WEBHOOKS",
    /**
     * Tool to list all collections metadata. use when you need to retrieve current details of each collection in your workspace.
     */
    LIST_COLLECTIONS: "CUSTOMERIO_LIST_COLLECTIONS",
    /**
     * Tool to list all newsletters. use when paginating through newsletter metadata.
     */
    LIST_NEWSLETTERS: "CUSTOMERIO_LIST_NEWSLETTERS",
    /**
     * Tool to list all snippets in your workspace. use when you need to retrieve all reusable content snippets for templating or dynamic content insertion.
     */
    LIST_SNIPPETS: "CUSTOMERIO_LIST_SNIPPETS",
    /**
     * Tool to list all transactional message templates. use when you need to fetch available transactional messages.
     */
    LIST_TRANSACTIONAL_MESSAGES: "CUSTOMERIO_LIST_TRANSACTIONAL_MESSAGES",
    /**
     * Tool to manually trigger a broadcast. use when you need to override the default audience and provide personalization data after confirming the broadcast id.
     */
    TRIGGER_BROADCAST: "CUSTOMERIO_TRIGGER_BROADCAST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CUSTOMERIO".
 */
export type CUSTOMERIO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CUSTOMERIO".
 */
export type CUSTOMERIO_TRIGGER_EVENTS = {}
