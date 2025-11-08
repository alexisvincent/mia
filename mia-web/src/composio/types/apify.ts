// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of APIFY's APIFY_CREATE_ACTOR tool input.
 */
type APIFY_CREATE_ACTOR_INPUT = {
  /**
   * Categories
   * @description List of category IDs to which this actor belongs.
   * @default null
   */
  categories: string[] | null;
  /**
   * DefaultRunOptions
   * @description Default options passed when running the actor (see Apify docs for schema).
   * @default null
   */
  defaultRunOptions: {
      /**
       * Build
       * @description Build tag or version identifier.
       */
      build: string;
      /**
       * Deployment Key
       * @description Deployment key for SSH access.
       */
      deploymentKey: string;
      /**
       * Example Run Input
       * @description Default run input as JSON object.
       * @default null
       */
      exampleRunInput: {
          [key: string]: unknown;
      } | null;
      /**
       * Is Deprecated
       * @description Whether the Actor build is deprecated.
       * @default null
       */
      isDeprecated: boolean | null;
      /**
       * Memory Mbytes
       * @description Memory limit in megabytes.
       */
      memoryMbytes: number;
      /**
       * Tagged Builds
       * @description Mapping of tag names to build identifiers.
       * @default null
       */
      taggedBuilds: {
          [key: string]: unknown;
      } | null;
      /**
       * Timeout Secs
       * @description Timeout in seconds for runs.
       */
      timeoutSecs: number;
      /**
       * Title
       * @description Display title for the default run options.
       * @default null
       */
      title: string | null;
  } | null;
  /**
   * Description
   * @description Detailed description of what the actor does.
   * @default null
   */
  description: string | null;
  /**
   * Is Deprecated
   * @description Whether the actor is deprecated (discouraged for new runs).
   * @default null
   */
  isDeprecated: boolean | null;
  /**
   * Is Public
   * @description Whether the actor should be publicly visible on Apify Store.
   * @default null
   */
  isPublic: boolean | null;
  /**
   * Name
   * @description Unique name for the new actor (must be 1–63 characters, lowercase letters, digits, and dashes).
   */
  name?: string;
  /**
   * Title
   * @description Human-readable title for the actor.
   * @default null
   */
  title: string | null;
  /**
   * Versions
   * @description Initial actor versions definition. Each item must include versionNumber, sourceType, and buildTag.
   * @default null
   */
  versions: {
      /**
       * Apply Env Vars To Build
       * @default null
       */
      applyEnvVarsToBuild: boolean | null;
      /** Build Tag */
      buildTag: string;
      /**
       * Env Vars
       * @default null
       */
      envVars: {
          /**
           * Is Secret
           * @description Whether this variable is secret (true hides the value).
           * @default null
           */
          isSecret: boolean | null;
          /**
           * Name
           * @description Name of the environment variable.
           */
          name: string;
          /**
           * Value
           * @description Value of the environment variable.
           */
          value: string;
      }[] | null;
      /**
       * Source Files
       * @default null
       */
      sourceFiles: {
          [key: string]: unknown;
      }[] | null;
      /** Source Type */
      sourceType: {
          [key: string]: unknown;
      };
      /** Version Number */
      versionNumber: string;
  }[] | null;
};

/**
 * Type of APIFY's APIFY_CREATE_ACTOR tool output.
 */
type APIFY_CREATE_ACTOR_OUTPUT = {
  /** Data */
  data?: {
      /** Categories */
      categories: string[] | null;
      /**
       * Created At
       * Format: date-time
       */
      createdAt: string;
      /** Default Run Options */
      defaultRunOptions: {
          /**
           * Build
           * @description Build tag or version identifier.
           */
          build: string;
          /**
           * Deployment Key
           * @description Deployment key for SSH access.
           */
          deploymentKey: string;
          /**
           * Example Run Input
           * @description Default run input as JSON object.
           * @default null
           */
          exampleRunInput: {
              [key: string]: unknown;
          } | null;
          /**
           * Is Deprecated
           * @description Whether the Actor build is deprecated.
           * @default null
           */
          isDeprecated: boolean | null;
          /**
           * Memory Mbytes
           * @description Memory limit in megabytes.
           */
          memoryMbytes: number;
          /**
           * Tagged Builds
           * @description Mapping of tag names to build identifiers.
           * @default null
           */
          taggedBuilds: {
              [key: string]: unknown;
          } | null;
          /**
           * Timeout Secs
           * @description Timeout in seconds for runs.
           */
          timeoutSecs: number;
          /**
           * Title
           * @description Display title for the default run options.
           * @default null
           */
          title: string | null;
      };
      /** Description */
      description: string | null;
      /** Id */
      id: string;
      /** Is Deprecated */
      isDeprecated: boolean | null;
      /** Is Public */
      isPublic: boolean;
      /**
       * Modified At
       * Format: date-time
       */
      modifiedAt: string;
      /** Name */
      name: string;
      /** Pricing Infos */
      pricingInfos: ({
          /**
           * Apifymarginpercentage
           * @description Fraction [0,1] of pricePerUnitUsd that goes to Apify.
           */
          apifyMarginPercentage: number;
          /**
           * Createdat
           * Format: date-time
           * @description Record creation timestamp.
           */
          createdAt: string;
          /**
           * Notifiedaboutchangeat
           * @description When the pricing change took effect.
           * @default null
           */
          notifiedAboutChangeAt: string | null;
          /**
           * Notifiedaboutfuturechangeat
           * @description When user was notified about future change.
           * @default null
           */
          notifiedAboutFutureChangeAt: string | null;
          /**
           * Pricingmodel
           * @description Pricing model identifier.
           * @constant
           */
          pricingModel: "PAY_PER_EVENT";
          /**
           * PricingPerEvent
           * @description Event-based pricing details.
           */
          pricingPerEvent: {
              /**
               * Actorchargeevents
               * @description Mapping of event types to their charge definitions.
               */
              actorChargeEvents: {
                  [key: string]: {
                      /**
                       * Eventdescription
                       * @description Description of the chargeable event.
                       */
                      eventDescription: string;
                      /**
                       * Eventpriceusd
                       * @description Price per single event executed by the Actor.
                       */
                      eventPriceUsd: number;
                      /**
                       * Eventtitle
                       * @description Title of the chargeable event.
                       */
                      eventTitle: string;
                      /**
                       * Minimalmaxtotalchargeusd
                       * @description Upper cap on total charge for this event.
                       * @default null
                       */
                      minimalMaxTotalChargeUsd: number | null;
                  };
              };
              /**
               * Minimalmaxtotalchargeusd
               * @description Maximum total charge across all events.
               * @default null
               */
              minimalMaxTotalChargeUsd: number | null;
          };
          /**
           * Reasonforchange
           * @description Reason for this pricing change.
           * @default null
           */
          reasonForChange: string | null;
          /**
           * Startedat
           * Format: date-time
           * @description Effective-from timestamp for this pricing record.
           */
          startedAt: string;
      } | {
          /**
           * Apifymarginpercentage
           * @description Fraction [0,1] of pricePerUnitUsd that goes to Apify.
           */
          apifyMarginPercentage: number;
          /**
           * Createdat
           * Format: date-time
           * @description Record creation timestamp.
           */
          createdAt: string;
          /**
           * Notifiedaboutchangeat
           * @description When the pricing change took effect.
           * @default null
           */
          notifiedAboutChangeAt: string | null;
          /**
           * Notifiedaboutfuturechangeat
           * @description When user was notified about future change.
           * @default null
           */
          notifiedAboutFutureChangeAt: string | null;
          /**
           * Priceperunitusd
           * @description Price per single dataset item.
           */
          pricePerUnitUsd: number;
          /**
           * Pricingmodel
           * @description Pricing model identifier.
           * @constant
           */
          pricingModel: "PRICE_PER_DATASET_ITEM";
          /**
           * Reasonforchange
           * @description Reason for this pricing change.
           * @default null
           */
          reasonForChange: string | null;
          /**
           * Startedat
           * Format: date-time
           * @description Effective-from timestamp for this pricing record.
           */
          startedAt: string;
          /**
           * Unitname
           * @description Name of the billing unit, e.g., items.
           */
          unitName: string;
      } | {
          /**
           * Apifymarginpercentage
           * @description Fraction [0,1] of pricePerUnitUsd that goes to Apify.
           */
          apifyMarginPercentage: number;
          /**
           * Createdat
           * Format: date-time
           * @description Record creation timestamp.
           */
          createdAt: string;
          /**
           * Notifiedaboutchangeat
           * @description When the pricing change took effect.
           * @default null
           */
          notifiedAboutChangeAt: string | null;
          /**
           * Notifiedaboutfuturechangeat
           * @description When user was notified about future change.
           * @default null
           */
          notifiedAboutFutureChangeAt: string | null;
          /**
           * Priceperunitusd
           * @description Monthly flat price in USD.
           */
          pricePerUnitUsd: number;
          /**
           * Pricingmodel
           * @description Pricing model identifier.
           * @constant
           */
          pricingModel: "FLAT_PRICE_PER_MONTH";
          /**
           * Reasonforchange
           * @description Reason for this pricing change.
           * @default null
           */
          reasonForChange: string | null;
          /**
           * Startedat
           * Format: date-time
           * @description Effective-from timestamp for this pricing record.
           */
          startedAt: string;
          /**
           * Trialminutes
           * @description Number of trial minutes included.
           */
          trialMinutes: number;
      } | {
          /**
           * Apifymarginpercentage
           * @description Fraction [0,1] of pricePerUnitUsd that goes to Apify.
           */
          apifyMarginPercentage: number;
          /**
           * Createdat
           * Format: date-time
           * @description Record creation timestamp.
           */
          createdAt: string;
          /**
           * Notifiedaboutchangeat
           * @description When the pricing change took effect.
           * @default null
           */
          notifiedAboutChangeAt: string | null;
          /**
           * Notifiedaboutfuturechangeat
           * @description When user was notified about future change.
           * @default null
           */
          notifiedAboutFutureChangeAt: string | null;
          /**
           * Pricingmodel
           * @description Pricing model identifier.
           * @constant
           */
          pricingModel: "FREE";
          /**
           * Reasonforchange
           * @description Reason for this pricing change.
           * @default null
           */
          reasonForChange: string | null;
          /**
           * Startedat
           * Format: date-time
           * @description Effective-from timestamp for this pricing record.
           */
          startedAt: string;
      })[];
      /** Stats */
      stats: {
          /**
           * Last Run Started At
           * Format: date-time
           */
          lastRunStartedAt: string;
          /** Total Builds */
          totalBuilds: number;
          /** Total Metamorphs */
          totalMetamorphs: number;
          /** Total Runs */
          totalRuns: number;
          /** Total Users */
          totalUsers: number;
          /** Total Users30 Days */
          totalUsers30Days: number;
          /** Total Users7 Days */
          totalUsers7Days: number;
          /** Total Users90 Days */
          totalUsers90Days: number;
      };
      /** Title */
      title: string | null;
      /** User Id */
      userId: string;
      /** Username */
      username: string;
      /** Versions */
      versions: {
          /**
           * Apply Env Vars To Build
           * @default null
           */
          applyEnvVarsToBuild: boolean | null;
          /** Build Tag */
          buildTag: string;
          /**
           * Env Vars
           * @default null
           */
          envVars: {
              /**
               * Is Secret
               * @description Whether this variable is secret (true hides the value).
               * @default null
               */
              isSecret: boolean | null;
              /**
               * Name
               * @description Name of the environment variable.
               */
              name: string;
              /**
               * Value
               * @description Value of the environment variable.
               */
              value: string;
          }[] | null;
          /**
           * Source Files
           * @default null
           */
          sourceFiles: {
              [key: string]: unknown;
          }[] | null;
          /** Source Type */
          sourceType: {
              [key: string]: unknown;
          };
          /** Version Number */
          versionNumber: string;
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
 * Type of APIFY's APIFY_CREATE_DATASET tool input.
 */
type APIFY_CREATE_DATASET_INPUT = {
  /**
   * Name
   * @description Custom unique name for the dataset. If omitted, a random name is generated.
   * @default null
   */
  name: string | null;
};

/**
 * Type of APIFY's APIFY_CREATE_DATASET tool output.
 */
type APIFY_CREATE_DATASET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accessed At
       * @description ISO timestamp when the dataset was last accessed.
       */
      accessedAt: string;
      /**
       * Act Id
       * @description ID of the associated actor, if any.
       * @default null
       */
      actId: string | null;
      /**
       * Act Run Id
       * @description ID of the associated actor run, if any.
       * @default null
       */
      actRunId: string | null;
      /**
       * Clean Item Count
       * @description Number of clean items in the dataset.
       */
      cleanItemCount: number;
      /**
       * Console Url
       * @description URL to access the dataset in the Apify console.
       */
      consoleUrl: string;
      /**
       * Created At
       * @description ISO timestamp when the dataset was created.
       */
      createdAt: string;
      /**
       * Fields
       * @description Fields present in the dataset.
       * @default null
       */
      fields: string[] | null;
      /**
       * Id
       * @description Unique identifier of the dataset.
       */
      id: string;
      /**
       * Item Count
       * @description Number of items in the dataset.
       */
      itemCount: number;
      /**
       * Modified At
       * @description ISO timestamp when the dataset was last modified.
       */
      modifiedAt: string;
      /**
       * Name
       * @description Name of the dataset.
       * @default null
       */
      name: string | null;
      /**
       * User Id
       * @description ID of the user who owns the dataset.
       * @default null
       */
      userId: string | null;
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
 * Type of APIFY's APIFY_CREATE_TASK tool input.
 */
type APIFY_CREATE_TASK_INPUT = {
  /**
   * Act Id
   * @description ID or 'username~actorName' of the Actor to attach the task to.
   */
  actId?: string;
  /**
   * Name
   * @description Name of the task to create.
   */
  name?: string;
  /**
   * Options
   * @description Task settings object, e.g., input JSON, memoryMbytes, timeoutSecs, build, diskMbytes, webhooks.
   * @default null
   */
  options: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of APIFY's APIFY_CREATE_TASK tool output.
 */
type APIFY_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Act Id
       * @description ID of the Actor associated with the task.
       */
      actId: string;
      /**
       * Created At
       * @description Timestamp when the task was created.
       */
      createdAt: string;
      /**
       * Id
       * @description Unique identifier of the created task.
       */
      id: string;
      /**
       * Modified At
       * @description Timestamp when the task was last modified.
       */
      modifiedAt: string;
      /**
       * Name
       * @description Name of the created task.
       */
      name: string;
      /**
       * Options
       * @description Configuration options of the created task.
       * @default null
       */
      options: {
          [key: string]: unknown;
      } | null;
      /**
       * User Id
       * @description ID of the user who created the task.
       */
      userId: string;
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
 * Type of APIFY's APIFY_CREATE_TASK_WEBHOOK tool input.
 */
type APIFY_CREATE_TASK_WEBHOOK_INPUT = {
  /**
   * Condition
   * @description Condition object specifying actor or task IDs.
   */
  condition?: {
      /**
       * Actor Id
       * @description ID of the Actor. Not required when actorTaskId is provided.
       * @default null
       */
      actorId: string | null;
      /**
       * Actor Task Id
       * @description ID of the Actor task. Required for task webhooks.
       * @default null
       */
      actorTaskId: string | null;
  };
  /**
   * Description
   * @description Description of the webhook.
   * @default null
   */
  description: string | null;
  /**
   * Event Types
   * @description List of event types that trigger the webhook, e.g., ['ACTOR.TASK.RUN.SUCCEEDED'].
   */
  eventTypes?: string[];
  /**
   * Headers Template
   * @description JSON-like template for request headers. Some headers are managed by Apify.
   * @default null
   */
  headersTemplate: string | null;
  /**
   * Idempotency Key
   * @description Unique key to prevent duplicate webhook creation.
   * @default null
   */
  idempotencyKey: string | null;
  /**
   * Is Ad Hoc
   * @description If true, webhook is ad hoc (single dispatch).
   * @default null
   */
  isAdHoc: boolean | null;
  /**
   * Payload Template
   * @description JSON-like template for the POST body. Handlebars variables allowed.
   * @default null
   */
  payloadTemplate: string | null;
  /**
   * Request Url
   * @description Target URL to which Apify will POST the webhook payload.
   */
  requestUrl?: string;
  /**
   * Should Interpolate Strings
   * @description Whether to interpolate variables inside strings in payloadTemplate.
   * @default null
   */
  shouldInterpolateStrings: boolean | null;
};

/**
 * Type of APIFY's APIFY_CREATE_TASK_WEBHOOK tool output.
 */
type APIFY_CREATE_TASK_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Condition
       * @description Condition object with IDs.
       */
      condition: {
          /**
           * Actor Id
           * @description ID of the Actor. Not required when actorTaskId is provided.
           * @default null
           */
          actorId: string | null;
          /**
           * Actor Task Id
           * @description ID of the Actor task. Required for task webhooks.
           * @default null
           */
          actorTaskId: string | null;
      };
      /**
       * Created At
       * @description ISO timestamp when created.
       */
      createdAt: string;
      /**
       * Description
       * @description Webhook description.
       * @default null
       */
      description: string | null;
      /**
       * Event Types
       * @description Events that trigger the webhook.
       */
      eventTypes: string[];
      /**
       * Headers Template
       * @default null
       */
      headersTemplate: string | null;
      /**
       * Id
       * @description Unique identifier of the webhook.
       */
      id: string;
      /**
       * Is Ad Hoc
       * @description Whether the webhook is ad hoc.
       * @default null
       */
      isAdHoc: boolean | null;
      /**
       * Modified At
       * @description ISO timestamp when modified.
       */
      modifiedAt: string;
      /**
       * Payload Template
       * @default null
       */
      payloadTemplate: string | null;
      /**
       * Request Url
       * @description Target URL of the webhook.
       */
      requestUrl: string;
      /**
       * Should Interpolate Strings
       * @default null
       */
      shouldInterpolateStrings: boolean | null;
      /**
       * User Id
       * @description ID of the user who created the webhook.
       */
      userId: string;
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
 * Type of APIFY's APIFY_DELETE_ACTOR tool input.
 */
type APIFY_DELETE_ACTOR_INPUT = {
  /**
   * Actor Id
   * @description Unique identifier of the Actor to delete, in ID format or username~actorName format.
   */
  actorId?: string;
};

/**
 * Type of APIFY's APIFY_DELETE_ACTOR tool output.
 */
type APIFY_DELETE_ACTOR_OUTPUT = {
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
 * Type of APIFY's APIFY_DELETE_WEBHOOK tool input.
 */
type APIFY_DELETE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description Unique identifier of the webhook to delete.
   */
  webhookId?: string;
};

/**
 * Type of APIFY's APIFY_DELETE_WEBHOOK tool output.
 */
type APIFY_DELETE_WEBHOOK_OUTPUT = {
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
 * Type of APIFY's APIFY_GET_ACTOR tool input.
 */
type APIFY_GET_ACTOR_INPUT = {
  /**
   * Actor Id
   * @description Actor ID (24-character hex string) or username/actorName.
   */
  actorId?: string;
};

/**
 * Type of APIFY's APIFY_GET_ACTOR tool output.
 */
type APIFY_GET_ACTOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 creation timestamp.
       */
      createdAt: string;
      /**
       * Description
       * @description Short description of the actor.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Actor identifier.
       */
      id: string;
      /**
       * Name
       * @description Name of the actor.
       */
      name: string;
      /**
       * Stats
       * @description Statistics of the actor, including run counts.
       */
      stats: {
          /**
           * Total Builds
           * @description Total number of builds for the actor.
           */
          totalBuilds: number;
          /**
           * Total Runs
           * @description Total number of actor runs.
           */
          totalRuns: number;
          /**
           * Total Users
           * @description Total number of users who have run the actor.
           */
          totalUsers: number;
          /**
           * Total Users30 Days
           * @description Number of unique users in the last 30 days.
           */
          totalUsers30Days: number;
          /**
           * Total Users7 Days
           * @description Number of unique users in the last 7 days.
           */
          totalUsers7Days: number;
          /**
           * Total Users90 Days
           * @description Number of unique users in the last 90 days.
           */
          totalUsers90Days: number;
      };
      /**
       * Updated At
       * @description ISO 8601 last update timestamp.
       */
      updatedAt: string;
      /**
       * User Id
       * @description User ID of the actor creator.
       */
      userId: string;
      /**
       * Username
       * @description Username of the actor creator.
       */
      username: string;
      /**
       * Versions
       * @description List of versions for this actor.
       */
      versions: {
          /**
           * Version Number
           * @description Version number of the actor.
           */
          versionNumber: string;
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
 * Type of APIFY's APIFY_GET_ALL_WEBHOOKS tool input.
 */
type APIFY_GET_ALL_WEBHOOKS_INPUT = {
  /**
   * Desc
   * @description If true, sort results in descending order (by creation date).
   * @default false
   */
  desc: boolean | null;
  /**
   * Limit
   * @description Maximum number of webhooks to return (pagination). Must be >= 1.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of webhooks to skip at the start (pagination). Must be >= 0.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of APIFY's APIFY_GET_ALL_WEBHOOKS tool output.
 */
type APIFY_GET_ALL_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description List of webhook objects.
   */
  data?: {
      /**
       * Condition
       * @description Filtering condition for the webhook.
       */
      condition: {
          /**
           * Actor Id
           * @description Filter webhooks by actor ID.
           * @default null
           */
          actorId: string | null;
          /**
           * Actor Run Id
           * @description Filter webhooks by run ID.
           * @default null
           */
          actorRunId: string | null;
          /**
           * Actor Task Id
           * @description Filter webhooks by task ID.
           * @default null
           */
          actorTaskId: string | null;
      };
      /**
       * Created At
       * @description ISO 8601 timestamp when the webhook was created.
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the webhook.
       * @default null
       */
      description: string | null;
      /**
       * Do Not Retry
       * @description Whether to disable retry on failure.
       * @default null
       */
      doNotRetry: boolean | null;
      /**
       * Event Types
       * @description List of event types triggering the webhook.
       */
      eventTypes: string[];
      /**
       * Headers Template
       * @description Template for the request headers.
       * @default null
       */
      headersTemplate: string | null;
      /**
       * Id
       * @description Unique webhook identifier.
       */
      id: string;
      /**
       * Ignore Ssl Errors
       * @description Whether to ignore SSL errors when dispatching.
       */
      ignoreSslErrors: boolean;
      /**
       * Is Ad Hoc
       * @description Whether the webhook is ad-hoc.
       * @default null
       */
      isAdHoc: boolean | null;
      /**
       * LastDispatch
       * @description Information about the last webhook dispatch.
       * @default null
       */
      lastDispatch: {
          /**
           * Finished At
           * @description ISO 8601 timestamp when the last dispatch finished.
           */
          finishedAt: string;
          /**
           * Stats
           * @description Statistics of the last dispatch.
           */
          stats: {
              /**
               * Total Dispatches
               * @description Total number of dispatches for the webhook.
               */
              totalDispatches: number;
          };
          /**
           * Status
           * @description Lifecycle status of the last dispatch.
           */
          status: string;
      } | null;
      /**
       * Modified At
       * @description ISO 8601 timestamp when the webhook was last modified.
       */
      modifiedAt: string;
      /**
       * Payload Template
       * @description Template for the request payload.
       * @default null
       */
      payloadTemplate: string | null;
      /**
       * Request Url
       * @description Target URL for the webhook HTTP request.
       */
      requestUrl: string;
      /**
       * Should Interpolate Strings
       * @description Whether to interpolate template strings in payload.
       * @default null
       */
      shouldInterpolateStrings: boolean | null;
      /**
       * User Id
       * @description ID of the user who created the webhook.
       */
      userId: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Limit
   * @description Limit parameter applied.
   */
  limit?: number;
  /**
   * Offset
   * @description Offset parameter applied.
   */
  offset?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of webhooks matching the query.
   */
  total?: number;
};

/**
 * Type of APIFY's APIFY_GET_DATASET_ITEMS tool input.
 */
type APIFY_GET_DATASET_ITEMS_INPUT = {
  /**
   * Ascii Headers
   * @description If true, forces ASCII-only headers in CSV format.
   * @default false
   */
  asciiHeaders: boolean | null;
  /**
   * Attachment
   * @description If true, forces 'Content-Disposition: attachment' in the response.
   * @default false
   */
  attachment: boolean | null;
  /**
   * Bom
   * @description If true, includes BOM header in CSV output.
   * @default false
   */
  bom: boolean | null;
  /**
   * Clean
   * @description When true, removes any Apify-specific metadata from items.
   * @default false
   */
  clean: boolean | null;
  /**
   * Dataset Id
   * @description Identifier of the dataset to retrieve items from (e.g., 'username/datasetName' or dataset ID).
   */
  datasetId?: string;
  /**
   * Delimiter
   * @description Delimiter to use for CSV format.
   * @default null
   */
  delimiter: string | null;
  /**
   * Desc
   * @description If true, return items in reverse order. Default is ascending.
   * @default false
   */
  desc: boolean | null;
  /**
   * Fields
   * @description Comma-separated list of fields to include in the returned items.
   * @default null
   */
  fields: string | null;
  /**
   * Flatten
   * @description If true, flattens nested JSON into a single level for CSV.
   * @default false
   */
  flatten: boolean | null;
  /**
   * Format
   * @description Output format of dataset items. Only 'json' is fully supported.
   * @default json
   * @enum {string}
   */
  format: "json" | "csv" | "xlsx";
  /**
   * Limit
   * @description Maximum number of items to return (pagination). Default and max is 1000.
   * @default 1000
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of items to skip (pagination). Default is 0.
   * @default 0
   */
  offset: number | null;
  /**
   * Offset Key
   * @description Key to use for pagination instead of numeric offset.
   * @default null
   */
  offsetKey: string | null;
  /**
   * Omit
   * @description Comma-separated list of fields to exclude from the returned items.
   * @default null
   */
  omit: string | null;
  /**
   * Skip Empty
   * @description If true, skips empty rows in CSV output.
   * @default false
   */
  skipEmpty: boolean | null;
  /**
   * Skip Hidden
   * @description If true, skips hidden items (include only visible items).
   * @default false
   */
  skipHidden: boolean | null;
  /**
   * Unwind
   * @description Name of the field to unwind into multiple items.
   * @default null
   */
  unwind: string | null;
};

/**
 * Type of APIFY's APIFY_GET_DATASET_ITEMS tool output.
 */
type APIFY_GET_DATASET_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of items returned from the dataset.
       */
      items: {
          [key: string]: unknown;
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
 * Type of APIFY's APIFY_GET_DEFAULT_BUILD tool input.
 */
type APIFY_GET_DEFAULT_BUILD_INPUT = {
  /**
   * Actor Id
   * @description Actor ID or tilde-separated owner's username and Actor name (e.g. 'janedoe~my-actor').
   */
  actorId?: string;
  /**
   * Wait For Finish
   * @description Maximum number of seconds to wait synchronously for the build to finish. If omitted or 0, returns immediately with the current status.
   * @default null
   */
  waitForFinish: number | null;
};

/**
 * Type of APIFY's APIFY_GET_DEFAULT_BUILD tool output.
 */
type APIFY_GET_DEFAULT_BUILD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The JSON object representing the default Actor build.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of APIFY's APIFY_GET_KEY_VALUE_RECORD tool input.
 */
type APIFY_GET_KEY_VALUE_RECORD_INPUT = {
  /**
   * Attachment
   * @description If true, force the response as an attachment (for browser downloads).
   * @default null
   */
  attachment: boolean | null;
  /**
   * Disable Redirect
   * @description If true, do not redirect to the raw value; return metadata only.
   * @default null
   */
  disableRedirect: boolean | null;
  /**
   * Format
   * @description Desired format of the retrieved record.
   * @default null
   * @enum {string|null}
   */
  format: "json" | "xml" | "html" | "text" | null;
  /**
   * Record Key
   * @description Key of the record to retrieve.
   */
  recordKey?: string;
  /**
   * Store Id
   * @description ID of the key-value store.
   */
  storeId?: string;
};

/**
 * Type of APIFY's APIFY_GET_KEY_VALUE_RECORD tool output.
 */
type APIFY_GET_KEY_VALUE_RECORD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Raw content of the record as a string.
       */
      content: string;
      /**
       * X Apify Content Type
       * @description Content type of the stored record from response headers.
       */
      "x-apify-content-type": string;
      /**
       * X Apify Persisted At
       * @description ISO timestamp when the record was last modified (from headers).
       */
      "x-apify-persisted-at": string;
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
 * Type of APIFY's APIFY_GET_LIST_OF_BUILDS tool input.
 */
type APIFY_GET_LIST_OF_BUILDS_INPUT = {
  /**
   * Actor Id
   * @description Actor ID or '<username>/<actorName>' to list builds for.
   */
  actorId?: string;
  /**
   * Desc
   * @description If true, sort builds by creation date descending.
   * @default null
   */
  desc: boolean | null;
  /**
   * Limit
   * @description Maximum number of builds to retrieve (pagination).
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of builds to skip (pagination).
   * @default null
   */
  offset: number | null;
  /**
   * Status
   * @description Filter builds by status.
   * @default null
   * @enum {string|null}
   */
  status: "RUNNING" | "SUCCEEDED" | "FAILED" | "ABORTED" | null;
  /**
   * Unnamed
   * @description If true, return only unnamed builds.
   * @default null
   */
  unnamed: boolean | null;
  /**
   * Wait For Finish
   * @description Seconds to wait for build to finish before returning.
   * @default null
   */
  waitForFinish: number | null;
};

/**
 * Type of APIFY's APIFY_GET_LIST_OF_BUILDS tool output.
 */
type APIFY_GET_LIST_OF_BUILDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Desc
       * @description Whether results are sorted descending.
       */
      desc: boolean;
      /**
       * Items
       * @description List of build records.
       */
      items: {
          /**
           * Finished At
           * @description ISO 8601 timestamp when the build finished (if applicable).
           * @default null
           */
          finishedAt: string | null;
          /**
           * Id
           * @description Unique build identifier.
           */
          id: string;
          /**
           * Started At
           * @description ISO 8601 timestamp when the build started.
           */
          startedAt: string;
          /**
           * Status
           * @description Build status, e.g., SUCCEEDED.
           */
          status: string;
      }[];
      /**
       * Limit
       * @description Limit parameter applied.
       */
      limit: number;
      /**
       * Offset
       * @description Offset parameter applied.
       */
      offset: number;
      /**
       * Total
       * @description Total number of builds matching the criteria.
       */
      total: number;
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
 * Type of APIFY's APIFY_GET_LIST_OF_RUNS tool input.
 */
type APIFY_GET_LIST_OF_RUNS_INPUT = {
  /**
   * Actor Id
   * @description Actor ID or '<username>/<actorName>' whose runs to list.
   */
  actorId?: string;
  /**
   * Desc
   * @description If true, sort by startedAt descending. Default is ascending.
   * @default false
   */
  desc: boolean | null;
  /**
   * Limit
   * @description Maximum number of runs to return (pagination). Default and max is 1000.
   * @default 1000
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of runs to skip at the start (pagination). Default is 0.
   * @default 0
   */
  offset: number | null;
  /**
   * Status
   * @description Filter runs by this lifecycle status.
   * @default null
   * @enum {string|null}
   */
  status: "READY" | "RUNNING" | "SUCCEEDED" | "FAILED" | "TIMING-OUT" | "TIMED-OUT" | "ABORTING" | "ABORTED" | null;
};

/**
 * Type of APIFY's APIFY_GET_LIST_OF_RUNS tool output.
 */
type APIFY_GET_LIST_OF_RUNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of runs returned in this page.
       */
      count: number;
      /**
       * Desc
       * @description Whether results are sorted descending.
       */
      desc: boolean;
      /**
       * Items
       * @description List of run summary objects.
       */
      items: {
          /**
           * Act Id
           * @description Actor identifier.
           */
          actId: string;
          /**
           * Actor Task Id
           * @description Task ID if the run was triggered by a task.
           * @default null
           */
          actorTaskId: string | null;
          /**
           * Build Id
           * @description Identifier of the build used.
           */
          buildId: string;
          /**
           * Build Number
           * @description Build number or tag.
           */
          buildNumber: string;
          /**
           * Default Dataset Id
           * @description ID of the default dataset.
           */
          defaultDatasetId: string;
          /**
           * Default Key Value Store Id
           * @description ID of the default key-value store.
           */
          defaultKeyValueStoreId: string;
          /**
           * Default Request Queue Id
           * @description ID of the default request queue.
           */
          defaultRequestQueueId: string;
          /**
           * Finished At
           * @description ISO 8601 timestamp when the run finished.
           */
          finishedAt: string;
          /**
           * Id
           * @description Unique run identifier.
           */
          id: string;
          /**
           * Meta
           * @description Metadata of the run.
           */
          meta: {
              /**
               * Origin
               * @description Origin of the run.
               * @enum {string}
               */
              origin: "DEVELOPMENT" | "WEB" | "API" | "CLI" | "SCHEDULER" | "WEBHOOK" | "ACTOR" | "STANDBY";
              /**
               * Usage Total Usd
               * @description Total cost of the run in USD (informative).
               */
              usageTotalUsd: number;
          };
          /**
           * Started At
           * @description ISO 8601 timestamp when the run started.
           */
          startedAt: string;
          /**
           * Status
           * @description Current status of the run.
           */
          status: string;
      }[];
      /**
       * Limit
       * @description Limit parameter applied.
       */
      limit: number;
      /**
       * Offset
       * @description Offset parameter applied.
       */
      offset: number;
      /**
       * Total
       * @description Total number of runs matching the query.
       */
      total: number;
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
 * Type of APIFY's APIFY_GET_LIST_OF_TASKS tool input.
 */
type APIFY_GET_LIST_OF_TASKS_INPUT = {
  /**
   * Desc
   * @description If true, sort by createdAt descending. Default is ascending.
   * @default false
   */
  desc: boolean | null;
  /**
   * Limit
   * @description Maximum number of records to return (pagination). Default and max is 1000.
   * @default 1000
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of records to skip at the start (pagination). Default is 0.
   * @default 0
   */
  offset: number | null;
};

/**
 * Type of APIFY's APIFY_GET_LIST_OF_TASKS tool output.
 */
type APIFY_GET_LIST_OF_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of tasks returned in this page.
       */
      count: number;
      /**
       * Desc
       * @description Whether results are sorted descending.
       */
      desc: boolean;
      /**
       * Items
       * @description List of task summary objects.
       */
      items: {
          /**
           * Act Id
           * @description ID of the Actor the task belongs to.
           */
          actId: string;
          /**
           * Act Name
           * @description Name of the Actor the task belongs to.
           */
          actName: string;
          /**
           * Act Username
           * @description Username of the Actor owner.
           */
          actUsername: string;
          /**
           * Created At
           * @description ISO 8601 timestamp when the task was created.
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the task.
           */
          id: string;
          /**
           * Modified At
           * @description ISO 8601 timestamp when the task was last modified.
           */
          modifiedAt: string;
          /**
           * Name
           * @description Name of the task.
           */
          name: string;
          /**
           * Stats
           * @description Statistics and usage metrics for the task.
           */
          stats: {
              [key: string]: unknown;
          };
          /**
           * User Id
           * @description ID of the user who owns the task.
           */
          userId: string;
          /**
           * Username
           * @description Username of the task creator, if available.
           * @default null
           */
          username: string | null;
      }[];
      /**
       * Limit
       * @description Limit parameter applied.
       */
      limit: number;
      /**
       * Offset
       * @description Offset parameter applied.
       */
      offset: number;
      /**
       * Total
       * @description Total number of tasks matching the query.
       */
      total: number;
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
 * Type of APIFY's APIFY_GET_LIST_OF_TASK_RUNS tool input.
 */
type APIFY_GET_LIST_OF_TASK_RUNS_INPUT = {
  /**
   * Actor Task Id
   * @description Task ID or '<username>~<taskName>' identifying the task.
   */
  actorTaskId?: string;
  /**
   * Desc
   * @description If true, sort by startedAt descending. Default is ascending.
   * @default false
   */
  desc: boolean | null;
  /**
   * Limit
   * @description Maximum number of array elements to return. Default and max is 1000.
   * @default 1000
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of array elements to skip. Default is 0.
   * @default 0
   */
  offset: number | null;
  /**
   * Status
   * @description Filter runs by this lifecycle status.
   * @default null
   * @enum {string|null}
   */
  status: "READY" | "RUNNING" | "SUCCEEDED" | "FAILED" | "TIMING-OUT" | "TIMED-OUT" | "ABORTING" | "ABORTED" | null;
};

/**
 * Type of APIFY's APIFY_GET_LIST_OF_TASK_RUNS tool output.
 */
type APIFY_GET_LIST_OF_TASK_RUNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of runs returned in this page.
       */
      count: number;
      /**
       * Desc
       * @description Whether results are sorted descending.
       */
      desc: boolean;
      /**
       * Items
       * @description List of run summary objects.
       */
      items: {
          /**
           * Act Id
           * @description Actor identifier.
           */
          actId: string;
          /**
           * Actor Task Id
           * @description Task ID if the run was triggered by a task.
           * @default null
           */
          actorTaskId: string | null;
          /**
           * Build Id
           * @description Identifier of the build used.
           */
          buildId: string;
          /**
           * Build Number
           * @description Build number or tag.
           */
          buildNumber: string;
          /**
           * Default Dataset Id
           * @description ID of the default dataset.
           */
          defaultDatasetId: string;
          /**
           * Default Key Value Store Id
           * @description ID of the default key-value store.
           */
          defaultKeyValueStoreId: string;
          /**
           * Default Request Queue Id
           * @description ID of the default request queue.
           */
          defaultRequestQueueId: string;
          /**
           * Finished At
           * @description ISO 8601 timestamp when the run finished.
           */
          finishedAt: string;
          /**
           * Id
           * @description Unique run identifier.
           */
          id: string;
          /**
           * Meta
           * @description Metadata of the run.
           */
          meta: {
              /**
               * Origin
               * @description Origin of the run.
               * @enum {string}
               */
              origin: "DEVELOPMENT" | "WEB" | "API" | "CLI" | "SCHEDULER" | "WEBHOOK" | "ACTOR" | "STANDBY";
              /**
               * Usage Total Usd
               * @description Total cost of the run in USD (informative).
               */
              usageTotalUsd: number;
          };
          /**
           * Started At
           * @description ISO 8601 timestamp when the run started.
           */
          startedAt: string;
          /**
           * Status
           * @description Current status of the run.
           */
          status: string;
      }[];
      /**
       * Limit
       * @description Limit parameter applied.
       */
      limit: number;
      /**
       * Offset
       * @description Offset parameter applied.
       */
      offset: number;
      /**
       * Total
       * @description Total number of runs matching the query.
       */
      total: number;
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
 * Type of APIFY's APIFY_GET_LIST_OF_TASK_WEBHOOKS tool input.
 */
type APIFY_GET_LIST_OF_TASK_WEBHOOKS_INPUT = {
  /**
   * Actor Task Id
   * @description Actor task ID or '<username>~<taskName>' to list webhooks for.
   */
  actorTaskId?: string;
  /**
   * Desc
   * @description If true, sort by createdAt descending. Default is ascending.
   * @default false
   */
  desc: boolean | null;
  /**
   * Limit
   * @description Maximum number of webhooks to return (pagination). Default and max is 1000.
   * @default 1000
   */
  limit: number | null;
  /**
   * Offset
   * @description Number of webhooks to skip at the start (pagination). Default is 0.
   * @default 0
   */
  offset: number | null;
};

/**
 * Type of APIFY's APIFY_GET_LIST_OF_TASK_WEBHOOKS tool output.
 */
type APIFY_GET_LIST_OF_TASK_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Number of webhooks returned in this page.
       */
      count: number;
      /**
       * Desc
       * @description Whether results are sorted descending.
       */
      desc: boolean;
      /**
       * Items
       * @description List of webhook summary objects.
       */
      items: {
          /**
           * Condition
           * @description Filtering condition for the webhook.
           */
          condition: {
              /**
               * Actor Id
               * @description Filter webhooks by actor ID.
               * @default null
               */
              actorId: string | null;
              /**
               * Actor Run Id
               * @description Filter webhooks by run ID.
               * @default null
               */
              actorRunId: string | null;
              /**
               * Actor Task Id
               * @description Filter webhooks by task ID.
               * @default null
               */
              actorTaskId: string | null;
          };
          /**
           * Created At
           * @description ISO 8601 timestamp when the webhook was created.
           */
          createdAt: string;
          /**
           * Description
           * @description Description of the webhook.
           * @default null
           */
          description: string | null;
          /**
           * Do Not Retry
           * @description Whether to disable retry on failure.
           * @default null
           */
          doNotRetry: boolean | null;
          /**
           * Event Types
           * @description List of event types triggering the webhook.
           */
          eventTypes: string[];
          /**
           * Headers Template
           * @description Template for the request headers.
           * @default null
           */
          headersTemplate: string | null;
          /**
           * Id
           * @description Unique webhook identifier.
           */
          id: string;
          /**
           * Ignore Ssl Errors
           * @description Whether to ignore SSL errors when dispatching.
           */
          ignoreSslErrors: boolean;
          /**
           * Is Ad Hoc
           * @description Whether the webhook is ad-hoc.
           * @default null
           */
          isAdHoc: boolean | null;
          /**
           * LastDispatch
           * @description Information about the last dispatch.
           * @default null
           */
          lastDispatch: {
              /**
               * Finished At
               * @description ISO 8601 timestamp when the last dispatch finished.
               */
              finishedAt: string;
              /**
               * Stats
               * @description Statistics of the last dispatch.
               */
              stats: {
                  /**
                   * Total Dispatches
                   * @description Total number of dispatches for the webhook.
                   */
                  totalDispatches: number;
              };
              /**
               * Status
               * @description Lifecycle status of the last dispatch.
               */
              status: string;
          } | null;
          /**
           * Modified At
           * @description ISO 8601 timestamp when the webhook was last modified.
           */
          modifiedAt: string;
          /**
           * Payload Template
           * @description Template for the request payload.
           * @default null
           */
          payloadTemplate: string | null;
          /**
           * Request Url
           * @description Target URL for the webhook HTTP request.
           */
          requestUrl: string;
          /**
           * Should Interpolate Strings
           * @description Whether to interpolate template strings in payload.
           * @default null
           */
          shouldInterpolateStrings: boolean | null;
          /**
           * User Id
           * @description ID of the user who created the webhook.
           */
          userId: string;
      }[];
      /**
       * Limit
       * @description Limit parameter applied.
       */
      limit: number;
      /**
       * Offset
       * @description Offset parameter applied.
       */
      offset: number;
      /**
       * Total
       * @description Total number of webhooks matching the query.
       */
      total: number;
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
 * Type of APIFY's APIFY_GET_LOG tool input.
 */
type APIFY_GET_LOG_INPUT = {
  /**
   * Build Or Run Id
   * @description ID of the Actor run or build to retrieve the log for.
   */
  buildOrRunId?: string;
};

/**
 * Type of APIFY's APIFY_GET_LOG tool output.
 */
type APIFY_GET_LOG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Log content as a plain text string.
       */
      content: string;
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
 * Type of APIFY's APIFY_GET_OPEN_API_DEFINITION tool input.
 */
type APIFY_GET_OPEN_API_DEFINITION_INPUT = {
  /**
   * Actor Id
   * @description Actor ID or tilde-separated owner's username and Actor name (e.g., 'user~actor-name').
   */
  actorId?: string;
  /**
   * Build Id
   * @description ID of the build to retrieve, or 'default' for the default Actor build.
   */
  buildId?: string;
  /**
   * Token
   * @description API authentication token. Only required for private Actors; public Actors can be queried without one.
   * @default null
   */
  token: string | null;
};

/**
 * Type of APIFY's APIFY_GET_OPEN_API_DEFINITION tool output.
 */
type APIFY_GET_OPEN_API_DEFINITION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Full OpenAPI JSON definition for the Actor build.
       */
      response_data: {
          [key: string]: unknown;
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
 * Type of APIFY's APIFY_GET_TASK_INPUT tool input.
 */
type APIFY_GET_TASK_INPUT_INPUT = {
  /**
   * Task Id
   * @description Unique identifier of the Actor task to retrieve input for.
   */
  taskId?: string;
};

/**
 * Type of APIFY's APIFY_GET_TASK_INPUT tool output.
 */
type APIFY_GET_TASK_INPUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Input
       * @description Input configuration object of the Actor task.
       */
      input: {
          [key: string]: unknown;
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
 * Type of APIFY's APIFY_RESURRECT_RUN tool input.
 */
type APIFY_RESURRECT_RUN_INPUT = {
  /**
   * Run Id
   * @description ID of the Actor run to resurrect.
   */
  runId?: string;
};

/**
 * Type of APIFY's APIFY_RESURRECT_RUN tool output.
 */
type APIFY_RESURRECT_RUN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Act Id
       * @description Identifier of the Actor for this run.
       */
      actId: string;
      /**
       * Build Id
       * @description Identifier of the build used in this run.
       */
      buildId: string;
      /**
       * Build Number
       * @description Build number or tag used for the run.
       */
      buildNumber: string;
      /**
       * Default Dataset Id
       * @description ID of the default dataset for this run.
       */
      defaultDatasetId: string;
      /**
       * Default Key Value Store Id
       * @description ID of the default key-value store for this run.
       */
      defaultKeyValueStoreId: string;
      /**
       * Default Request Queue Id
       * @description ID of the default request queue for this run.
       */
      defaultRequestQueueId: string;
      /**
       * Exit Code
       * @description Exit code of the run, if completed.
       * @default null
       */
      exitCode: number | null;
      /**
       * Finished At
       * @description ISO timestamp when the run finished, null if still running.
       * @default null
       */
      finishedAt: string | null;
      /**
       * Id
       * @description Unique identifier of the run.
       */
      id: string;
      /**
       * Meta
       * @description Metadata about run origin and cost.
       */
      meta: {
          /**
           * Origin
           * @description Origin of the run.
           * @enum {string}
           */
          origin: "DEVELOPMENT" | "WEB" | "API" | "CLI" | "SCHEDULER" | "WEBHOOK" | "ACTOR" | "STANDBY";
          /**
           * Usage Total Usd
           * @description Total cost of the run in USD (informative).
           * @default null
           */
          usageTotalUsd: number | null;
      };
      /**
       * Started At
       * @description ISO timestamp when the run started.
       */
      startedAt: string;
      /**
       * Status
       * @description Current status of the run (e.g., 'RUNNING', 'SUCCEEDED').
       */
      status: string;
      /**
       * User Id
       * @description Identifier of the user who initiated the run.
       */
      userId: string;
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
 * Type of APIFY's APIFY_RUN_ACTOR tool input.
 */
type APIFY_RUN_ACTOR_INPUT = {
  /**
   * Actor Id
   * @description Actor ID or '<username>~<actorName>', e.g. 'john~my-actor'.
   */
  actorId?: string;
  /**
   * Body
   * @description JSON input object passed to the Actor.
   */
  body?: {
      [key: string]: unknown;
  };
  /**
   * Build
   * @description Specifies the Actor build to run (tag or build number). Defaults to default run config.
   * @default null
   */
  build: string | null;
  /**
   * Max Items
   * @description Maximum number of items that the Actor run should return.
   * @default null
   */
  maxItems: number | null;
  /**
   * Max Total Charge Usd
   * @description Specifies the maximum cost of the Actor run in USD.
   * @default null
   */
  maxTotalChargeUsd: number | null;
  /**
   * Memory
   * @description Memory limit for the run, in megabytes. Must be power of 2 and at least 128.
   * @default null
   */
  memory: number | null;
  /**
   * Timeout
   * @description Optional timeout for the run, in seconds. Default uses actor's default timeout.
   * @default null
   */
  timeout: number | null;
  /**
   * Wait For Finish
   * @description Max seconds the server waits for the run to finish. Default 0, max 60.
   * @default null
   */
  waitForFinish: number | null;
  /**
   * Webhooks
   * @description Base64-encoded JSON array of webhook definitions.
   * @default null
   */
  webhooks: string | null;
};

/**
 * Type of APIFY's APIFY_RUN_ACTOR tool output.
 */
type APIFY_RUN_ACTOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Act Id
       * @description Actor identifier for the run.
       */
      actId: string;
      /**
       * Actor Task Id
       * @description If run triggered by a task, the task ID.
       * @default null
       */
      actorTaskId: string | null;
      /**
       * Build Number
       * @description Build number or version tag used.
       */
      buildNumber: string;
      /**
       * Charged Event Counts
       * @description Counts of charged events for billing.
       */
      chargedEventCounts: {
          [key: string]: {
              /**
               * Eventdescription
               * @description Description of the charge event.
               */
              eventDescription: string;
              /**
               * Eventpriceusd
               * @description Price in USD for this event.
               */
              eventPriceUsd: number;
              /**
               * Eventtitle
               * @description Title of the charge event.
               */
              eventTitle: string;
              /**
               * Minimalmaxtotalchargeusd
               * @description Minimal max total charge USD if applicable.
               * @default null
               */
              minimalMaxTotalChargeUsd: number | null;
          };
      };
      /**
       * Container Url
       * @description URL of the run container.
       */
      containerUrl: string;
      /**
       * Default Dataset Id
       * @description ID of the default Dataset.
       */
      defaultDatasetId: string;
      /**
       * Default Key Value Store Id
       * @description ID of the default Key-Value Store.
       */
      defaultKeyValueStoreId: string;
      /**
       * Default Request Queue Id
       * @description ID of the default Request Queue.
       */
      defaultRequestQueueId: string;
      /**
       * Exit Code
       * @description Exit code of the container (nullable).
       * @default null
       */
      exitCode: number | null;
      /**
       * Finished At
       * @description ISO timestamp when the run finished.
       */
      finishedAt: string;
      /**
       * Git Branch Name
       * @description Git branch name used for the build.
       * @default null
       */
      gitBranchName: string | null;
      /**
       * Id
       * @description Unique run identifier.
       */
      id: string;
      /**
       * Is Container Server Ready
       * @description Whether the container server is ready.
       * @default null
       */
      isContainerServerReady: boolean | null;
      /**
       * Is Status Message Terminal
       * @description Whether status message indicates terminal state.
       * @default null
       */
      isStatusMessageTerminal: boolean | null;
      /**
       * Meta
       * @description Run metadata.
       */
      meta: {
          /**
           * Origin
           * @description Origin of the run.
           * @enum {string}
           */
          origin: "DEVELOPMENT" | "WEB" | "API" | "SCHEDULER" | "TEST" | "WEBHOOK" | "ACTOR" | "CLI" | "STANDBY";
      };
      /**
       * Options
       * @description Effective run options used.
       */
      options: {
          /**
           * Build
           * @description Build tag or number used for the run.
           */
          build: string;
          /**
           * Build Id
           * @description Identifier of the build used.
           */
          buildId: string;
          /**
           * Disk Mbytes
           * @description Disk space in megabytes configured for the run.
           */
          diskMbytes: number;
          /**
           * Memory Mbytes
           * @description Memory in megabytes configured for the run.
           */
          memoryMbytes: number;
          /**
           * Timeout Secs
           * @description Timeout in seconds configured for the run.
           */
          timeoutSecs: number;
      };
      /**
       * Pricing Info
       * @description Pricing information of the run.
       */
      pricingInfo: {
          /**
           * Apify Margin Percentage
           * @description Fraction of pricePerUnitUsd that goes to Apify (0-1).
           */
          apifyMarginPercentage: number;
          /**
           * Created At
           * @description When this pricing info record was created.
           */
          createdAt: string;
          /**
           * Notified About Change At
           * @description When change notification was sent (nullable).
           * @default null
           */
          notifiedAboutChangeAt: string | null;
          /**
           * Notified About Future Change At
           * @description When notified about future change (nullable).
           * @default null
           */
          notifiedAboutFutureChangeAt: string | null;
          /**
           * Pricing Model
           * @description Pricing model for the run.
           * @enum {string}
           */
          pricingModel: "PAY_PER_EVENT" | "PRICE_PER_DATASET_ITEM" | "FLAT_PRICE_PER_MONTH" | "FREE";
          /**
           * Reason For Change
           * @description Reason for pricing change.
           * @default null
           */
          reasonForChange: string | null;
          /**
           * Started At
           * @description Since when this pricing info applies.
           */
          startedAt: string;
      };
      /**
       * Pricing Per Event
       * @description Pricing per event breakdown.
       */
      pricingPerEvent: {
          /**
           * Actor Charge Events
           * @description Map of individual charge events for the run.
           */
          actorChargeEvents: {
              [key: string]: {
                  /**
                   * Eventdescription
                   * @description Description of the charge event.
                   */
                  eventDescription: string;
                  /**
                   * Eventpriceusd
                   * @description Price in USD for this event.
                   */
                  eventPriceUsd: number;
                  /**
                   * Eventtitle
                   * @description Title of the charge event.
                   */
                  eventTitle: string;
                  /**
                   * Minimalmaxtotalchargeusd
                   * @description Minimal max total charge USD if applicable.
                   * @default null
                   */
                  minimalMaxTotalChargeUsd: number | null;
              };
          };
      };
      /**
       * Started At
       * @description ISO timestamp when the run started.
       */
      startedAt: string;
      /**
       * Stats
       * @description Runtime statistics for the run.
       */
      stats: {
          /**
           * Compute Units
           * @description Compute units consumed by the run.
           */
          computeUnits: number;
          /**
           * Cpu Avg Usage
           * @default null
           */
          cpuAvgUsage: number | null;
          /**
           * Cpu Current Usage
           * @default null
           */
          cpuCurrentUsage: number | null;
          /**
           * Cpu Max Usage
           * @default null
           */
          cpuMaxUsage: number | null;
          /**
           * Duration Millis
           * @default null
           */
          durationMillis: number | null;
          /**
           * Input Body Len
           * @description Length of the input body.
           * @default null
           */
          inputBodyLen: number | null;
          /**
           * Mem Avg Bytes
           * @default null
           */
          memAvgBytes: number | null;
          /**
           * Mem Current Bytes
           * @default null
           */
          memCurrentBytes: number | null;
          /**
           * Mem Max Bytes
           * @default null
           */
          memMaxBytes: number | null;
          /**
           * Metamorph
           * @default null
           */
          metamorph: number | null;
          /**
           * Migration Count
           * @description Number of migrations.
           * @default null
           */
          migrationCount: number | null;
          /**
           * Net Rx Bytes
           * @default null
           */
          netRxBytes: number | null;
          /**
           * Net Tx Bytes
           * @default null
           */
          netTxBytes: number | null;
          /**
           * Restart Count
           * @description Number of restarts.
           */
          restartCount: number;
          /**
           * Resurrect Count
           * @description Number of times run was resurrected.
           */
          resurrectCount: number;
          /**
           * Run Time Secs
           * @default null
           */
          runTimeSecs: number | null;
      };
      /**
       * Status
       * @description Current lifecycle status of the run.
       */
      status: string;
      /**
       * Status Message
       * @description Optional status message.
       * @default null
       */
      statusMessage: string | null;
      /**
       * Usage
       * @description Resource usage metrics breakdown.
       */
      usage: {
          [key: string]: number;
      };
      /**
       * Usage Total Usd
       * @description Total cost of the run in USD (informative).
       * @default null
       */
      usageTotalUsd: number | null;
      /**
       * Usage Usd
       * @description USD cost breakdown per usage category.
       */
      usageUsd: {
          [key: string]: number;
      };
      /**
       * User Id
       * @description User who initiated the run.
       */
      userId: string;
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
 * Type of APIFY's APIFY_RUN_ACTOR_SYNC tool input.
 */
type APIFY_RUN_ACTOR_SYNC_INPUT = {
  /**
   * Actor Id
   * @description Actor ID or tilde-separated owner and actor name (e.g., 'user~actor-name').
   */
  actorId?: string;
  /**
   * Build
   * @description Build tag or number to run (default Actor's default build, usually 'latest').
   * @default null
   */
  build: string | null;
  /**
   * Input
   * @description JSON object passed as input to the Actor run.
   */
  input?: {
      [key: string]: unknown;
  };
  /**
   * Max Items
   * @description Maximum number of dataset items to return.
   * @default null
   */
  maxItems: number | null;
  /**
   * Max Total Charge Usd
   * @description Maximum total charge in USD for the run.
   * @default null
   */
  maxTotalChargeUsd: number | null;
  /**
   * Memory
   * @description Memory limit in MB; power of two, minimum 128. Uses default if unset.
   * @default null
   */
  memory: number | null;
  /**
   * Output Record Key
   * @description Key of the record in the default key-value store to return (default 'OUTPUT').
   * @default null
   */
  outputRecordKey: string | null;
  /**
   * Timeout
   * @description Run timeout in seconds. Uses Actor default if unset; HTTP wait max 300s.
   * @default null
   */
  timeout: number | null;
  /**
   * Webhooks
   * @description Base64-encoded JSON array defining webhooks for run notifications.
   * @default null
   */
  webhooks: string | null;
};

/**
 * Type of APIFY's APIFY_RUN_ACTOR_SYNC tool output.
 */
type APIFY_RUN_ACTOR_SYNC_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Record
       * @description Record retrieved from the Actor run's default key-value store under the specified key.
       */
      record: {
          [key: string]: unknown;
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
 * Type of APIFY's APIFY_RUN_ACTOR_SYNC_GET_DATASET_ITEMS tool input.
 */
type APIFY_RUN_ACTOR_SYNC_GET_DATASET_ITEMS_INPUT = {
  /**
   * Actor Id
   * @description Unique identifier or name of the Actor (e.g., 'username/actor-name').
   */
  actorId?: string;
  /**
   * Format
   * @description Format of dataset items to retrieve.
   * @default json
   * @enum {string}
   */
  format: "json" | "csv" | "rss" | "html";
  /**
   * Input
   * @description JSON input object passed to the Actor run.
   * @default null
   */
  input: {
      [key: string]: unknown;
  } | null;
  /**
   * Limit
   * @description Maximum number of items to return for pagination.
   * @default 100
   */
  limit: number;
  /**
   * Offset
   * @description Number of items to skip for pagination.
   * @default 0
   */
  offset: number;
};

/**
 * Type of APIFY's APIFY_RUN_ACTOR_SYNC_GET_DATASET_ITEMS tool output.
 */
type APIFY_RUN_ACTOR_SYNC_GET_DATASET_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of dataset items returned by the Actor run.
       */
      items: unknown[];
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
 * Type of APIFY's APIFY_RUN_TASK tool input.
 */
type APIFY_RUN_TASK_INPUT = {
  /**
   * Actor Task Id
   * @description Task ID or '<username>~<taskName>', e.g. 'john~my-task'.
   */
  actorTaskId?: string;
  /**
   * Body
   * @description JSON input object passed to the Actor.
   */
  body?: {
      [key: string]: unknown;
  };
  /**
   * Build
   * @description Specifies the Actor build to run (tag or build number). Defaults to default run config.
   * @default null
   */
  build: string | null;
  /**
   * Max Items
   * @description Maximum number of items that the Actor run should return.
   * @default null
   */
  maxItems: number | null;
  /**
   * Max Total Charge Usd
   * @description Specifies the maximum cost of the Actor run in USD.
   * @default null
   */
  maxTotalChargeUsd: number | null;
  /**
   * Memory
   * @description Memory limit for the run, in megabytes. Must be power of 2 and at least 128.
   * @default null
   */
  memory: number | null;
  /**
   * Timeout
   * @description Optional timeout for the run, in seconds. Default uses task's default timeout.
   * @default null
   */
  timeout: number | null;
  /**
   * Wait For Finish
   * @description Max seconds the server waits for the run to finish. Default 0, max 60.
   * @default null
   */
  waitForFinish: number | null;
  /**
   * Webhooks
   * @description Base64-encoded JSON array of webhook definitions.
   * @default null
   */
  webhooks: string | null;
};

/**
 * Type of APIFY's APIFY_RUN_TASK tool output.
 */
type APIFY_RUN_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Act Id
       * @description Actor identifier for the run.
       */
      actId: string;
      /**
       * Actor Task Id
       * @description If run triggered by a task, the task ID.
       * @default null
       */
      actorTaskId: string | null;
      /**
       * Build Number
       * @description Build number or version tag used.
       */
      buildNumber: string;
      /**
       * Charged Event Counts
       * @description Counts of charged events for billing.
       */
      chargedEventCounts: {
          [key: string]: {
              /**
               * Eventdescription
               * @description Description of the charge event.
               */
              eventDescription: string;
              /**
               * Eventpriceusd
               * @description Price in USD for this event.
               */
              eventPriceUsd: number;
              /**
               * Eventtitle
               * @description Title of the charge event.
               */
              eventTitle: string;
              /**
               * Minimalmaxtotalchargeusd
               * @description Minimal max total charge USD if applicable.
               * @default null
               */
              minimalMaxTotalChargeUsd: number | null;
          };
      };
      /**
       * Container Url
       * @description URL of the run container.
       */
      containerUrl: string;
      /**
       * Default Dataset Id
       * @description ID of the default Dataset.
       */
      defaultDatasetId: string;
      /**
       * Default Key Value Store Id
       * @description ID of the default Key-Value Store.
       */
      defaultKeyValueStoreId: string;
      /**
       * Default Request Queue Id
       * @description ID of the default Request Queue.
       */
      defaultRequestQueueId: string;
      /**
       * Exit Code
       * @description Exit code of the container (nullable).
       * @default null
       */
      exitCode: number | null;
      /**
       * Finished At
       * @description ISO timestamp when the run finished.
       */
      finishedAt: string;
      /**
       * Git Branch Name
       * @description Git branch name used for the build.
       * @default null
       */
      gitBranchName: string | null;
      /**
       * Id
       * @description Unique run identifier.
       */
      id: string;
      /**
       * Is Container Server Ready
       * @description Whether the container server is ready.
       * @default null
       */
      isContainerServerReady: boolean | null;
      /**
       * Is Status Message Terminal
       * @description Whether status message indicates terminal state.
       * @default null
       */
      isStatusMessageTerminal: boolean | null;
      /**
       * Meta
       * @description Run metadata.
       */
      meta: {
          /**
           * Origin
           * @description Origin of the run.
           * @enum {string}
           */
          origin: "DEVELOPMENT" | "WEB" | "API" | "SCHEDULER" | "TEST" | "WEBHOOK" | "ACTOR" | "CLI" | "STANDBY";
      };
      /**
       * Options
       * @description Effective run options used.
       */
      options: {
          /**
           * Build
           * @description Build tag or number used for the run.
           */
          build: string;
          /**
           * Build Id
           * @description Identifier of the build used.
           */
          buildId: string;
          /**
           * Disk Mbytes
           * @description Disk space in megabytes configured for the run.
           */
          diskMbytes: number;
          /**
           * Memory Mbytes
           * @description Memory in megabytes configured for the run.
           */
          memoryMbytes: number;
          /**
           * Timeout Secs
           * @description Timeout in seconds configured for the run.
           */
          timeoutSecs: number;
      };
      /**
       * Pricing Info
       * @description Pricing information of the run.
       */
      pricingInfo: {
          /**
           * Apify Margin Percentage
           * @description Fraction of pricePerUnitUsd that goes to Apify (0-1).
           */
          apifyMarginPercentage: number;
          /**
           * Created At
           * @description When this pricing info record was created.
           */
          createdAt: string;
          /**
           * Notified About Change At
           * @description When change notification was sent (nullable).
           * @default null
           */
          notifiedAboutChangeAt: string | null;
          /**
           * Notified About Future Change At
           * @description When notified about future change (nullable).
           * @default null
           */
          notifiedAboutFutureChangeAt: string | null;
          /**
           * Pricing Model
           * @description Pricing model for the run.
           * @enum {string}
           */
          pricingModel: "PAY_PER_EVENT" | "PRICE_PER_DATASET_ITEM" | "FLAT_PRICE_PER_MONTH" | "FREE";
          /**
           * Reason For Change
           * @description Reason for pricing change.
           * @default null
           */
          reasonForChange: string | null;
          /**
           * Started At
           * @description Since when this pricing info applies.
           */
          startedAt: string;
      };
      /**
       * Pricing Per Event
       * @description Pricing per event breakdown.
       */
      pricingPerEvent: {
          /**
           * Actor Charge Events
           * @description Map of individual charge events for the run.
           */
          actorChargeEvents: {
              [key: string]: {
                  /**
                   * Eventdescription
                   * @description Description of the charge event.
                   */
                  eventDescription: string;
                  /**
                   * Eventpriceusd
                   * @description Price in USD for this event.
                   */
                  eventPriceUsd: number;
                  /**
                   * Eventtitle
                   * @description Title of the charge event.
                   */
                  eventTitle: string;
                  /**
                   * Minimalmaxtotalchargeusd
                   * @description Minimal max total charge USD if applicable.
                   * @default null
                   */
                  minimalMaxTotalChargeUsd: number | null;
              };
          };
      };
      /**
       * Started At
       * @description ISO timestamp when the run started.
       */
      startedAt: string;
      /**
       * Stats
       * @description Runtime statistics for the run.
       */
      stats: {
          /**
           * Compute Units
           * @description Compute units consumed by the run.
           */
          computeUnits: number;
          /**
           * Cpu Avg Usage
           * @default null
           */
          cpuAvgUsage: number | null;
          /**
           * Cpu Current Usage
           * @default null
           */
          cpuCurrentUsage: number | null;
          /**
           * Cpu Max Usage
           * @default null
           */
          cpuMaxUsage: number | null;
          /**
           * Duration Millis
           * @default null
           */
          durationMillis: number | null;
          /**
           * Input Body Len
           * @description Length of the input body.
           * @default null
           */
          inputBodyLen: number | null;
          /**
           * Mem Avg Bytes
           * @default null
           */
          memAvgBytes: number | null;
          /**
           * Mem Current Bytes
           * @default null
           */
          memCurrentBytes: number | null;
          /**
           * Mem Max Bytes
           * @default null
           */
          memMaxBytes: number | null;
          /**
           * Metamorph
           * @default null
           */
          metamorph: number | null;
          /**
           * Migration Count
           * @description Number of migrations.
           * @default null
           */
          migrationCount: number | null;
          /**
           * Net Rx Bytes
           * @default null
           */
          netRxBytes: number | null;
          /**
           * Net Tx Bytes
           * @default null
           */
          netTxBytes: number | null;
          /**
           * Restart Count
           * @description Number of restarts.
           */
          restartCount: number;
          /**
           * Resurrect Count
           * @description Number of times run was resurrected.
           */
          resurrectCount: number;
          /**
           * Run Time Secs
           * @default null
           */
          runTimeSecs: number | null;
      };
      /**
       * Status
       * @description Current lifecycle status of the run.
       */
      status: string;
      /**
       * Status Message
       * @description Optional status message.
       * @default null
       */
      statusMessage: string | null;
      /**
       * Usage
       * @description Resource usage metrics breakdown.
       */
      usage: {
          [key: string]: number;
      };
      /**
       * Usage Total Usd
       * @description Total cost of the run in USD (informative).
       * @default null
       */
      usageTotalUsd: number | null;
      /**
       * Usage Usd
       * @description USD cost breakdown per usage category.
       */
      usageUsd: {
          [key: string]: number;
      };
      /**
       * User Id
       * @description User who initiated the run.
       */
      userId: string;
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
 * Type of APIFY's APIFY_STORE_DATA_IN_DATASET tool input.
 */
type APIFY_STORE_DATA_IN_DATASET_INPUT = {
  /**
   * Data
   * @description Array of JSON-serializable objects to store in the dataset.
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Dataset Id
   * @description Dataset ID or name (e.g., 'username/datasetName' or dataset ID).
   */
  datasetId?: string;
  /**
   * Deduplicate
   * @description If true, deduplicate incoming items by their 'foreignId'.
   * @default null
   */
  deduplicate: boolean | null;
  /**
   * Fields
   * @description Comma-separated list of fields to include when storing items.
   * @default null
   */
  fields: string | null;
  /**
   * Omit
   * @description Comma-separated list of fields to exclude when storing items.
   * @default null
   */
  omit: string | null;
};

/**
 * Type of APIFY's APIFY_STORE_DATA_IN_DATASET tool output.
 */
type APIFY_STORE_DATA_IN_DATASET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Processed
       * @description Number of records successfully processed.
       * @default null
       */
      processed: number | null;
      /**
       * Request Id
       * @description Unique identifier for this storage request.
       * @default null
       */
      requestId: string | null;
      /**
       * Unprocessed
       * @description Number of records that were not processed, if any.
       * @default null
       */
      unprocessed: number | null;
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
 * Type of APIFY's APIFY_STORE_DATA_IN_KEY_VALUE_STORE tool input.
 */
type APIFY_STORE_DATA_IN_KEY_VALUE_STORE_INPUT = {
  /**
   * Record Key
   * @description Key under which the record will be stored or updated.
   */
  recordKey?: string;
  /**
   * Record Value
   * @description The JSON object to store. Must be JSON-serializable.
   */
  recordValue?: {
      [key: string]: unknown;
  };
  /**
   * Store Id
   * @description ID of the key-value store where the record will be stored.
   */
  storeId?: string;
};

/**
 * Type of APIFY's APIFY_STORE_DATA_IN_KEY_VALUE_STORE tool output.
 */
type APIFY_STORE_DATA_IN_KEY_VALUE_STORE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status Code
       * @description HTTP status code returned by the API, indicating success (200 or 204).
       */
      status_code: number;
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
 * Type of APIFY's APIFY_UPDATE_KEY_VALUE_STORE tool input.
 */
type APIFY_UPDATE_KEY_VALUE_STORE_INPUT = {
  /**
   * Access
   * @description Access level for the store. One of PRIVATE, SHARED, PUBLIC.
   * @default null
   * @enum {string|null}
   */
  access: "PRIVATE" | "SHARED" | "PUBLIC" | null;
  /**
   * Name
   * @description New name for the key-value store.
   * @default null
   */
  name: string | null;
  /**
   * Schema Version
   * @description Schema version to use for the store. Must be >= 1.
   * @default null
   */
  schemaVersion: number | null;
  /**
   * Store Id
   * @description Identifier of the key-value store to update.
   */
  storeId?: string;
};

/**
 * Type of APIFY's APIFY_UPDATE_KEY_VALUE_STORE tool output.
 */
type APIFY_UPDATE_KEY_VALUE_STORE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accessed At
       * @description ISO 8601 timestamp when the store was last accessed.
       */
      accessedAt: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the store was created.
       */
      createdAt: string;
      /**
       * Created By
       * @description Actor or user who created this store.
       */
      createdBy: string;
      /**
       * Id
       * @description Unique identifier of the store.
       */
      id: string;
      /**
       * Is Public
       * @description Whether the store is publicly accessible.
       */
      isPublic: boolean;
      /**
       * Modified At
       * @description ISO 8601 timestamp when the store was last modified.
       */
      modifiedAt: string;
      /**
       * Name
       * @description Name of the key-value store.
       */
      name: string;
      /**
       * Stats
       * @description Statistics for the key-value store.
       */
      stats: {
          /**
           * Record Count
           * @description Number of records in this storage type.
           */
          recordCount: number;
          /**
           * Size
           * @description Size of the storage in bytes.
           */
          size: number;
      };
      /**
       * User Id
       * @description User ID of the owner of this store.
       */
      userId: string;
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
 * Type of APIFY's APIFY_UPDATE_TASK_INPUT tool input.
 */
type APIFY_UPDATE_TASK_INPUT_INPUT = {
  /**
   * Input
   * @description The new input configuration object for the task.
   */
  input?: {
      [key: string]: unknown;
  };
  /**
   * Task Id
   * @description ID of the Actor task to update.
   */
  taskId?: string;
};

/**
 * Type of APIFY's APIFY_UPDATE_TASK_INPUT tool output.
 */
type APIFY_UPDATE_TASK_INPUT_OUTPUT = {
  /**
   * Data
   * @description The updated input object for the actor task.
   */
  data?: {
      [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "APIFY".
 */
export type APIFY_TOOL_INPUTS = {
  CREATE_ACTOR: APIFY_CREATE_ACTOR_INPUT
  CREATE_DATASET: APIFY_CREATE_DATASET_INPUT
  CREATE_TASK: APIFY_CREATE_TASK_INPUT
  CREATE_TASK_WEBHOOK: APIFY_CREATE_TASK_WEBHOOK_INPUT
  DELETE_ACTOR: APIFY_DELETE_ACTOR_INPUT
  DELETE_WEBHOOK: APIFY_DELETE_WEBHOOK_INPUT
  GET_ACTOR: APIFY_GET_ACTOR_INPUT
  GET_ALL_WEBHOOKS: APIFY_GET_ALL_WEBHOOKS_INPUT
  GET_DATASET_ITEMS: APIFY_GET_DATASET_ITEMS_INPUT
  GET_DEFAULT_BUILD: APIFY_GET_DEFAULT_BUILD_INPUT
  GET_KEY_VALUE_RECORD: APIFY_GET_KEY_VALUE_RECORD_INPUT
  GET_LIST_OF_BUILDS: APIFY_GET_LIST_OF_BUILDS_INPUT
  GET_LIST_OF_RUNS: APIFY_GET_LIST_OF_RUNS_INPUT
  GET_LIST_OF_TASKS: APIFY_GET_LIST_OF_TASKS_INPUT
  GET_LIST_OF_TASK_RUNS: APIFY_GET_LIST_OF_TASK_RUNS_INPUT
  GET_LIST_OF_TASK_WEBHOOKS: APIFY_GET_LIST_OF_TASK_WEBHOOKS_INPUT
  GET_LOG: APIFY_GET_LOG_INPUT
  GET_OPEN_API_DEFINITION: APIFY_GET_OPEN_API_DEFINITION_INPUT
  GET_TASK_INPUT: APIFY_GET_TASK_INPUT_INPUT
  RESURRECT_RUN: APIFY_RESURRECT_RUN_INPUT
  RUN_ACTOR: APIFY_RUN_ACTOR_INPUT
  RUN_ACTOR_SYNC: APIFY_RUN_ACTOR_SYNC_INPUT
  RUN_ACTOR_SYNC_GET_DATASET_ITEMS: APIFY_RUN_ACTOR_SYNC_GET_DATASET_ITEMS_INPUT
  RUN_TASK: APIFY_RUN_TASK_INPUT
  STORE_DATA_IN_DATASET: APIFY_STORE_DATA_IN_DATASET_INPUT
  STORE_DATA_IN_KEY_VALUE_STORE: APIFY_STORE_DATA_IN_KEY_VALUE_STORE_INPUT
  UPDATE_KEY_VALUE_STORE: APIFY_UPDATE_KEY_VALUE_STORE_INPUT
  UPDATE_TASK_INPUT: APIFY_UPDATE_TASK_INPUT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "APIFY".
 */
export type APIFY_TOOL_OUTPUTS = {
  CREATE_ACTOR: APIFY_CREATE_ACTOR_OUTPUT
  CREATE_DATASET: APIFY_CREATE_DATASET_OUTPUT
  CREATE_TASK: APIFY_CREATE_TASK_OUTPUT
  CREATE_TASK_WEBHOOK: APIFY_CREATE_TASK_WEBHOOK_OUTPUT
  DELETE_ACTOR: APIFY_DELETE_ACTOR_OUTPUT
  DELETE_WEBHOOK: APIFY_DELETE_WEBHOOK_OUTPUT
  GET_ACTOR: APIFY_GET_ACTOR_OUTPUT
  GET_ALL_WEBHOOKS: APIFY_GET_ALL_WEBHOOKS_OUTPUT
  GET_DATASET_ITEMS: APIFY_GET_DATASET_ITEMS_OUTPUT
  GET_DEFAULT_BUILD: APIFY_GET_DEFAULT_BUILD_OUTPUT
  GET_KEY_VALUE_RECORD: APIFY_GET_KEY_VALUE_RECORD_OUTPUT
  GET_LIST_OF_BUILDS: APIFY_GET_LIST_OF_BUILDS_OUTPUT
  GET_LIST_OF_RUNS: APIFY_GET_LIST_OF_RUNS_OUTPUT
  GET_LIST_OF_TASKS: APIFY_GET_LIST_OF_TASKS_OUTPUT
  GET_LIST_OF_TASK_RUNS: APIFY_GET_LIST_OF_TASK_RUNS_OUTPUT
  GET_LIST_OF_TASK_WEBHOOKS: APIFY_GET_LIST_OF_TASK_WEBHOOKS_OUTPUT
  GET_LOG: APIFY_GET_LOG_OUTPUT
  GET_OPEN_API_DEFINITION: APIFY_GET_OPEN_API_DEFINITION_OUTPUT
  GET_TASK_INPUT: APIFY_GET_TASK_INPUT_OUTPUT
  RESURRECT_RUN: APIFY_RESURRECT_RUN_OUTPUT
  RUN_ACTOR: APIFY_RUN_ACTOR_OUTPUT
  RUN_ACTOR_SYNC: APIFY_RUN_ACTOR_SYNC_OUTPUT
  RUN_ACTOR_SYNC_GET_DATASET_ITEMS: APIFY_RUN_ACTOR_SYNC_GET_DATASET_ITEMS_OUTPUT
  RUN_TASK: APIFY_RUN_TASK_OUTPUT
  STORE_DATA_IN_DATASET: APIFY_STORE_DATA_IN_DATASET_OUTPUT
  STORE_DATA_IN_KEY_VALUE_STORE: APIFY_STORE_DATA_IN_KEY_VALUE_STORE_OUTPUT
  UPDATE_KEY_VALUE_STORE: APIFY_UPDATE_KEY_VALUE_STORE_OUTPUT
  UPDATE_TASK_INPUT: APIFY_UPDATE_TASK_INPUT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's APIFY toolkit.
 */
export const APIFY = {
  slug: "apify",
  tools: {
    /**
     * Tool to create a new actor with specified configuration. use when you need to initialize a fresh actor programmatically before publishing or running it.
     */
    CREATE_ACTOR: "APIFY_CREATE_ACTOR",
    /**
     * Tool to create a new dataset. use when you need to initialize or retrieve a dataset by name.
     */
    CREATE_DATASET: "APIFY_CREATE_DATASET",
    /**
     * Tool to create a new actor task with specified settings. use when you need to configure or schedule recurring actor runs programmatically.
     */
    CREATE_TASK: "APIFY_CREATE_TASK",
    /**
     * Tool to create a webhook for an actor task. use when you need external notifications about task run events (e.g., completion or failure) in downstream systems.
     */
    CREATE_TASK_WEBHOOK: "APIFY_CREATE_TASK_WEBHOOK",
    /**
     * Tool to delete an actor permanently. use when you need to remove an actor by its id or username~actorname. confirm before calling.
     */
    DELETE_ACTOR: "APIFY_DELETE_ACTOR",
    /**
     * Tool to delete a webhook by its id. use when removing a webhook after confirming the webhook id.
     */
    DELETE_WEBHOOK: "APIFY_DELETE_WEBHOOK",
    /**
     * Tool to get details of a specific actor. use when you need actor metadata by id or username/actorname.
     */
    GET_ACTOR: "APIFY_GET_ACTOR",
    /**
     * Tool to get a list of all webhooks created by the user. use when you need to enumerate webhooks before filtering or maintenance.
     */
    GET_ALL_WEBHOOKS: "APIFY_GET_ALL_WEBHOOKS",
    /**
     * Tool to retrieve items from a dataset. use when you need to fetch data from a specified dataset by pagination or filtering. only json format is fully supported.
     */
    GET_DATASET_ITEMS: "APIFY_GET_DATASET_ITEMS",
    /**
     * Tool to get the default build for an actor. use after specifying the actor id; optionally wait for the build to finish before returning.
     */
    GET_DEFAULT_BUILD: "APIFY_GET_DEFAULT_BUILD",
    /**
     * Tool to retrieve a record from a key-value store. use when you need to fetch a specific value by key from an apify key-value store.
     */
    GET_KEY_VALUE_RECORD: "APIFY_GET_KEY_VALUE_RECORD",
    /**
     * Tool to get a list of builds for a specific actor. use when you need paginated access to an actor’s build (version) history.
     */
    GET_LIST_OF_BUILDS: "APIFY_GET_LIST_OF_BUILDS",
    /**
     * Tool to get a list of runs for a specific actor. use when you need to paginate through runs and optionally filter by status before processing run data.
     */
    GET_LIST_OF_RUNS: "APIFY_GET_LIST_OF_RUNS",
    /**
     * Tool to fetch a paginated list of tasks belonging to the authenticated user. use when you need to browse or sort tasks created by the user.
     */
    GET_LIST_OF_TASKS: "APIFY_GET_LIST_OF_TASKS",
    /**
     * Tool to get a list of runs for a specific actor task. use when you need to paginate through task runs and optionally filter by status.
     */
    GET_LIST_OF_TASK_RUNS: "APIFY_GET_LIST_OF_TASK_RUNS",
    /**
     * Tool to get a list of webhooks for a specific actor task. use when you need to review or paginate webhooks after creating or updating a task.
     */
    GET_LIST_OF_TASK_WEBHOOKS: "APIFY_GET_LIST_OF_TASK_WEBHOOKS",
    /**
     * Tool to retrieve logs for a specific actor run or build. use after initiating an actor run or build when you need to inspect execution logs.
     */
    GET_LOG: "APIFY_GET_LOG",
    /**
     * Tool to get the openapi definition for a specific actor build. use when you need the api schema for code generation or analysis.
     */
    GET_OPEN_API_DEFINITION: "APIFY_GET_OPEN_API_DEFINITION",
    /**
     * Tool to retrieve the input configuration of a specific task. use when you need to inspect stored task input before execution or debugging.
     */
    GET_TASK_INPUT: "APIFY_GET_TASK_INPUT",
    /**
     * Tool to resurrect a finished actor run. use when you need to restart a completed or failed run. deprecated endpoint; may be removed in future.
     */
    RESURRECT_RUN: "APIFY_RESURRECT_RUN",
    /**
     * Tool to run a specific actor asynchronously. use when you need to trigger an actor run without waiting for completion and retrieve its run details immediately.
     */
    RUN_ACTOR: "APIFY_RUN_ACTOR",
    /**
     * Tool to run a specific actor synchronously with input and return its output record. use when immediate actor results are needed; runs may timeout after 300 seconds.
     */
    RUN_ACTOR_SYNC: "APIFY_RUN_ACTOR_SYNC",
    /**
     * Tool to run an actor synchronously and retrieve its dataset items. use when immediate access to run results is needed.
     */
    RUN_ACTOR_SYNC_GET_DATASET_ITEMS: "APIFY_RUN_ACTOR_SYNC_GET_DATASET_ITEMS",
    /**
     * Tool to run a specific actor task asynchronously. use when you need to trigger a task run without waiting for completion and immediately retrieve its run details.
     */
    RUN_TASK: "APIFY_RUN_TASK",
    /**
     * Tool to store data items in a dataset. use after collecting data when you want to batch-append or update items in an existing dataset.
     */
    STORE_DATA_IN_DATASET: "APIFY_STORE_DATA_IN_DATASET",
    /**
     * Tool to create or update a record in a key-value store. use after you have the store id and record key to persist json data.
     */
    STORE_DATA_IN_KEY_VALUE_STORE: "APIFY_STORE_DATA_IN_KEY_VALUE_STORE",
    /**
     * Tool to update a key-value store's properties. use when renaming or changing access or schema version of the store after confirming the store id.
     */
    UPDATE_KEY_VALUE_STORE: "APIFY_UPDATE_KEY_VALUE_STORE",
    /**
     * Tool to update the input configuration of a specific actor task. use when you need to modify a scheduled tasks input before execution.
     */
    UPDATE_TASK_INPUT: "APIFY_UPDATE_TASK_INPUT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "APIFY".
 */
export type APIFY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "APIFY".
 */
export type APIFY_TRIGGER_EVENTS = {}
