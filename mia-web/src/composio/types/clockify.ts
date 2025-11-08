// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CLOCKIFY's CLOCKIFY_CREATE_CLIENT tool input.
 */
type CLOCKIFY_CREATE_CLIENT_INPUT = {
  /**
   * Address
   * @description Represents client's address (0..3000 characters).
   * @default null
   */
  address: string | null;
  /**
   * Email
   * Format: email
   * @description Valid client email address.
   * @default null
   */
  email: string | null;
  /**
   * Name
   * @description Represents client name (0..100 characters).
   * @default null
   */
  name: string | null;
  /**
   * Note
   * @description Represents additional notes for the client (0..3000 characters).
   * @default null
   */
  note: string | null;
  /**
   * Workspace Id
   * @description Represents workspace identifier across the system.
   */
  workspaceId?: string;
};

/**
 * Type of CLOCKIFY's CLOCKIFY_CREATE_CLIENT tool output.
 */
type CLOCKIFY_CREATE_CLIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Client address.
       * @default null
       */
      address: string | null;
      /**
       * Archived
       * @description Whether the client is archived.
       * @default false
       */
      archived: boolean;
      /**
       * Currency Code
       * @description Currency code of workspace.
       */
      currencyCode: string;
      /**
       * Currency Id
       * @description Currency identifier of workspace.
       */
      currencyId: string;
      /**
       * Email
       * Format: email
       * @description Client email.
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique identifier of the client.
       */
      id: string;
      /**
       * Name
       * @description Client name.
       * @default null
       */
      name: string | null;
      /**
       * Note
       * @description Client note.
       * @default null
       */
      note: string | null;
      /**
       * Workspace Id
       * @description Workspace identifier of the client.
       */
      workspaceId: string;
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
 * Type of CLOCKIFY's CLOCKIFY_CREATE_WEBHOOK tool input.
 */
type CLOCKIFY_CREATE_WEBHOOK_INPUT = {
  /**
   * Name
   * @description Webhook name (2..30 characters).
   */
  name?: string;
  /**
   * Trigger Source
   * @description List of resource IDs that will trigger the webhook.
   */
  triggerSource?: string[];
  /**
   * Trigger Source Type
   * @description Type of resource that triggers events.
   * @enum {string}
   */
  triggerSourceType?: "PROJECT_ID" | "USER_ID" | "TAG_ID" | "TASK_ID" | "WORKSPACE_ID" | "USER_GROUP_ID" | "INVOICE_ID" | "ASSIGNMENT_ID" | "EXPENSE_ID";
  /**
   * Url
   * @description Destination URL for webhook notifications.
   */
  url?: string;
  /**
   * Webhook Event
   * @description Event type that triggers the webhook.
   * @enum {string}
   */
  webhookEvent?: "NEW_PROJECT" | "NEW_TASK" | "NEW_CLIENT" | "NEW_TIMER_STARTED" | "TIMER_STOPPED" | "TIME_ENTRY_UPDATED" | "TIME_ENTRY_DELETED" | "TIME_ENTRY_SPLIT" | "NEW_TIME_ENTRY" | "TIME_ENTRY_RESTORED" | "NEW_TAG" | "USER_DELETED_FROM_WORKSPACE" | "USER_JOINED_WORKSPACE" | "USER_DEACTIVATED_ON_WORKSPACE" | "USER_ACTIVATED_ON_WORKSPACE" | "USER_EMAIL_CHANGED" | "USER_UPDATED" | "NEW_INVOICE" | "INVOICE_UPDATED" | "NEW_APPROVAL_REQUEST" | "APPROVAL_REQUEST_STATUS_UPDATED" | "TIME_OFF_REQUESTED" | "TIME_OFF_REQUEST_APPROVED" | "TIME_OFF_REQUEST_REJECTED" | "TIME_OFF_REQUEST_WITHDRAWN" | "BALANCE_UPDATED" | "TAG_UPDATED" | "TAG_DELETED" | "TASK_UPDATED" | "CLIENT_UPDATED" | "TASK_DELETED" | "CLIENT_DELETED" | "EXPENSE_RESTORED" | "ASSIGNMENT_CREATED" | "ASSIGNMENT_DELETED" | "ASSIGNMENT_PUBLISHED" | "ASSIGNMENT_UPDATED" | "EXPENSE_CREATED" | "EXPENSE_DELETED" | "EXPENSE_UPDATED";
  /**
   * Workspace Id
   * @description Represents workspace identifier across the system.
   */
  workspaceId?: string;
};

/**
 * Type of CLOCKIFY's CLOCKIFY_CREATE_WEBHOOK tool output.
 */
type CLOCKIFY_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Auth Token
       * @description Webhook verification token.
       */
      authToken: string;
      /**
       * Enabled
       * @description Whether the webhook is enabled.
       */
      enabled: boolean;
      /**
       * Id
       * @description Unique identifier of the webhook.
       */
      id: string;
      /**
       * Name
       * @description Name of the webhook.
       */
      name: string;
      /**
       * Trigger Source
       * @description Resource IDs that trigger this webhook.
       */
      triggerSource: string[];
      /**
       * Trigger Source Type
       * @description Type of the trigger source.
       */
      triggerSourceType: string;
      /**
       * Url
       * @description Target URL for the webhook.
       */
      url: string;
      /**
       * User Id
       * @description User ID that created the webhook.
       */
      userId: string;
      /**
       * Webhook Event
       * @description Event type subscribed.
       */
      webhookEvent: string;
      /**
       * Workspace Id
       * @description Workspace ID of the webhook.
       */
      workspaceId: string;
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
 * Type of CLOCKIFY's CLOCKIFY_DELETE_CLIENT tool input.
 */
type CLOCKIFY_DELETE_CLIENT_INPUT = {
  /**
   * Id
   * @description Represents client identifier to delete.
   */
  id?: string;
  /**
   * Workspace Id
   * @description Represents workspace identifier across the system.
   */
  workspaceId?: string;
};

/**
 * Type of CLOCKIFY's CLOCKIFY_DELETE_CLIENT tool output.
 */
type CLOCKIFY_DELETE_CLIENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Client address.
       * @default null
       */
      address: string | null;
      /**
       * Archived
       * @description Indicates if the client was archived.
       * @default false
       */
      archived: boolean;
      /**
       * Currency Id
       * @description Currency identifier of the client.
       */
      currencyId: string;
      /**
       * Email
       * Format: email
       * @description Client email.
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique identifier of the deleted client.
       */
      id: string;
      /**
       * Name
       * @description Client name.
       * @default null
       */
      name: string | null;
      /**
       * Note
       * @description Additional notes of the client.
       * @default null
       */
      note: string | null;
      /**
       * Workspace Id
       * @description Workspace identifier of the deleted client.
       */
      workspaceId: string;
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
 * Type of CLOCKIFY's CLOCKIFY_DELETE_WEBHOOK tool input.
 */
type CLOCKIFY_DELETE_WEBHOOK_INPUT = {
  /**
   * Webhook Id
   * @description Webhook identifier to delete.
   */
  webhookId?: string;
  /**
   * Workspace Id
   * @description Workspace identifier containing the webhook.
   */
  workspaceId?: string;
};

/**
 * Type of CLOCKIFY's CLOCKIFY_DELETE_WEBHOOK tool output.
 */
type CLOCKIFY_DELETE_WEBHOOK_OUTPUT = {
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
 * Type of CLOCKIFY's CLOCKIFY_FILTER_WORKSPACE_USERS tool input.
 */
type CLOCKIFY_FILTER_WORKSPACE_USERS_INPUT = {
  /**
   * Account Statuses
   * @description Filter users by account status.
   * @default null
   */
  accountStatuses: string[] | null;
  /**
   * Email
   * @description Filter users by substring in email address.
   * @default null
   */
  email: string | null;
  /**
   * Include Roles
   * @description Include detailed manager roles if true.
   * @default false
   */
  includeRoles: boolean;
  /**
   * Memberships
   * @description Which memberships to include: ALL, NONE, WORKSPACE, PROJECT, USERGROUP.
   * @default NONE
   * @enum {string}
   */
  memberships: "ALL" | "NONE" | "WORKSPACE" | "PROJECT" | "USERGROUP";
  /**
   * Name
   * @description Filter users by substring in name.
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page number, must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of items per page (1 to 5000).
   * @default 50
   */
  pageSize: number;
  /**
   * Project Id
   * @description Filter users who have access to a specific project.
   * @default null
   */
  projectId: string | null;
  /**
   * Roles
   * @description Filter users having any of these roles.
   * @default null
   */
  roles: string[] | null;
  /**
   * Sort Column
   * @description Column to sort by.
   * @default EMAIL
   * @enum {string}
   */
  sortColumn: "ID" | "EMAIL" | "NAME" | "NAME_LOWERCASE" | "ACCESS" | "HOURLYRATE" | "COSTRATE";
  /**
   * Sort Order
   * @description Sort order.
   * @default ASCENDING
   * @enum {string}
   */
  sortOrder: "ASCENDING" | "DESCENDING";
  /**
   * Status
   * @description Filter users by membership status.
   * @default ALL
   * @enum {string}
   */
  status: "PENDING" | "ACTIVE" | "DECLINED" | "INACTIVE" | "ALL";
  /**
   * User Groups
   * @description Filter users belonging to these group IDs.
   * @default null
   */
  userGroups: string[] | null;
  /**
   * Workspace Id
   * @description Workspace identifier across the system.
   */
  workspaceId?: string;
};

/**
 * Type of CLOCKIFY's CLOCKIFY_FILTER_WORKSPACE_USERS tool output.
 */
type CLOCKIFY_FILTER_WORKSPACE_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of workspace user objects.
       */
      results: {
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
 * Type of CLOCKIFY's CLOCKIFY_FIND_ALL_USERS_ON_WORKSPACE tool input.
 */
type CLOCKIFY_FIND_ALL_USERS_ON_WORKSPACE_INPUT = {
  /**
   * Email
   * @description Filter users by email address.
   * @default null
   */
  email: string | null;
  /**
   * Name
   * @description Filter users by full or partial name.
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page number for pagination (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of users per page for pagination.
   * @default null
   */
  "page-size": number | null;
  /**
   * Workspace Id
   * @description Workspace identifier (UUID) to list users for.
   */
  workspaceId?: string;
};

/**
 * Type of CLOCKIFY's CLOCKIFY_FIND_ALL_USERS_ON_WORKSPACE tool output.
 */
type CLOCKIFY_FIND_ALL_USERS_ON_WORKSPACE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of users in the workspace.
       */
      users: {
          /**
           * Email
           * @description Email address of the user.
           */
          email: string;
          /**
           * Id
           * @description User identifier.
           */
          id: string;
          /**
           * Memberships
           * @description List of workspace memberships for the user.
           */
          memberships: {
              /**
               * Cost Rate
               * @description Cost rate for the membership.
               */
              costRate: {
                  /**
                   * Amount
                   * @description Amount in smallest currency unit (e.g., cents).
                   */
                  amount: number;
                  /**
                   * Currency
                   * @description Currency code, e.g., USD.
                   */
                  currency: string;
              };
              /**
               * Hourly Rate
               * @description Hourly rate for the membership.
               */
              hourlyRate: {
                  /**
                   * Amount
                   * @description Amount in smallest currency unit (e.g., cents).
                   */
                  amount: number;
                  /**
                   * Currency
                   * @description Currency code, e.g., USD.
                   */
                  currency: string;
              };
              /**
               * Membership Status
               * @description Status of membership, e.g., ACTIVE.
               */
              membershipStatus: string;
              /**
               * Membership Type
               * @description Type of membership, e.g., PROJECT.
               */
              membershipType: string;
              /**
               * User Id
               * @description ID of the user in membership.
               */
              userId: string;
              /**
               * Workspace Id
               * @description ID of the workspace for membership.
               */
              workspaceId: string;
          }[];
          /**
           * Name
           * @description Full name of the user.
           */
          name: string;
          /**
           * Status
           * @description Status of the user (e.g., ACTIVE, INVITED).
           * @default null
           */
          status: string | null;
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
 * Type of CLOCKIFY's CLOCKIFY_FIND_USER_TEAM_MANAGER tool input.
 */
type CLOCKIFY_FIND_USER_TEAM_MANAGER_INPUT = {
  /**
   * Page
   * @description Page number (must be >=1). Default: 1.
   * @default 1
   */
  page: number | null;
  /**
   * Page Size
   * @description Page size (1-5000). Default: 50.
   * @default 50
   */
  "page-size": number | null;
  /**
   * Sort Column
   * @description Sorting column criteria. Default: ID.
   * @default ID
   * @enum {string}
   */
  "sort-column": "ID" | "EMAIL" | "NAME" | "NAME_LOWERCASE" | "ACCESS" | "HOURLYRATE" | "COSTRATE";
  /**
   * Sort Order
   * @description Sorting mode. Default: ASCENDING.
   * @default ASCENDING
   * @enum {string}
   */
  "sort-order": "ASCENDING" | "DESCENDING";
  /**
   * User Id
   * @description User identifier across the system.
   */
  userId?: string;
  /**
   * Workspace Id
   * @description Workspace identifier across the system.
   */
  workspaceId?: string;
};

/**
 * Type of CLOCKIFY's CLOCKIFY_FIND_USER_TEAM_MANAGER tool output.
 */
type CLOCKIFY_FIND_USER_TEAM_MANAGER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Managers
       * @description List of managers for the user.
       */
      managers: ({
          /**
           * Email
           * @description User email.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description User identifier.
           */
          id: string;
          /**
           * Name
           * @description User full name.
           * @default null
           */
          name: string | null;
      } & {
          [key: string]: unknown;
      })[];
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
 * Type of CLOCKIFY's CLOCKIFY_GENERATE_NEW_WEBHOOK_TOKEN tool input.
 */
type CLOCKIFY_GENERATE_NEW_WEBHOOK_TOKEN_INPUT = {
  /**
   * Webhook Id
   * @description Webhook identifier across the system.
   */
  webhook_id?: string;
  /**
   * Workspace Id
   * @description Workspace identifier across the system.
   */
  workspace_id?: string;
};

/**
 * Type of CLOCKIFY's CLOCKIFY_GENERATE_NEW_WEBHOOK_TOKEN tool output.
 */
type CLOCKIFY_GENERATE_NEW_WEBHOOK_TOKEN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Auth Token
       * @description Newly generated token for the webhook.
       */
      authToken?: string;
      /**
       * Enabled
       * @description Whether the webhook is enabled.
       */
      enabled?: boolean;
      /**
       * Id
       * @description Identifier of the webhook.
       */
      id?: string;
      /**
       * Name
       * @description Name of the webhook.
       */
      name?: string;
      /**
       * Trigger Source
       * @description List of trigger source IDs.
       */
      triggerSource?: string[];
      /**
       * Trigger Source Type
       * @description Type of trigger source (e.g., PROJECT_ID).
       */
      triggerSourceType?: string;
      /**
       * Url
       * @description Target URL of the webhook.
       */
      url?: string;
      /**
       * User Id
       * @description User who created the webhook.
       */
      userId?: string;
      /**
       * Webhook Event
       * @description Event type that triggers the webhook.
       */
      webhookEvent?: string;
      /**
       * Workspace Id
       * @description Workspace to which the webhook belongs.
       */
      workspaceId?: string;
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
 * Type of CLOCKIFY's CLOCKIFY_GET_ALL_ADDON_WEBHOOKS tool input.
 */
type CLOCKIFY_GET_ALL_ADDON_WEBHOOKS_INPUT = {
  /**
   * Addon Id
   * @description Represents addon identifier across the system.
   */
  addonId?: string;
  /**
   * Workspace Id
   * @description Represents workspace identifier across the system.
   */
  workspaceId?: string;
};

/**
 * Type of CLOCKIFY's CLOCKIFY_GET_ALL_ADDON_WEBHOOKS tool output.
 */
type CLOCKIFY_GET_ALL_ADDON_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of webhooks for the specified addon in the workspace.
       */
      webhooks: {
          /**
           * Auth Token
           * @description Authentication token for the webhook.
           */
          authToken: string;
          /**
           * Enabled
           * @description Whether the webhook is enabled.
           */
          enabled: boolean;
          /**
           * Id
           * @description Unique identifier of the webhook.
           */
          id: string;
          /**
           * Name
           * @description Name of the webhook.
           */
          name: string;
          /**
           * Trigger Source
           * @description List of identifiers for trigger sources (e.g., project or tag IDs).
           */
          triggerSource: string[];
          /**
           * Trigger Source Type
           * @description Type of the trigger source.
           * @enum {string}
           */
          triggerSourceType: "PROJECT_ID" | "USER_ID" | "TAG_ID" | "TASK_ID" | "WORKSPACE_ID" | "USER_GROUP_ID" | "INVOICE_ID" | "ASSIGNMENT_ID" | "EXPENSE_ID";
          /**
           * Url
           * @description Target URL of the webhook.
           */
          url: string;
          /**
           * User Id
           * @description User ID of the webhook owner.
           */
          userId: string;
          /**
           * Webhook Event
           * @description Type of the webhook event.
           */
          webhookEvent: string;
          /**
           * Workspace Id
           * @description Workspace ID to which the webhook belongs.
           */
          workspaceId: string;
      }[];
      /**
       * Workspace Webhook Count
       * @description Total count of webhooks on the workspace for the addon.
       */
      workspaceWebhookCount: number;
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
 * Type of CLOCKIFY's CLOCKIFY_GET_ALL_MY_WORKSPACES tool input.
 */
type CLOCKIFY_GET_ALL_MY_WORKSPACES_INPUT = {
  /**
   * Roles
   * @description Optional list of roles to filter workspaces by (e.g., ['WORKSPACE_ADMIN','OWNER']).
   * @default null
   */
  roles: string[] | null;
};

/**
 * Type of CLOCKIFY's CLOCKIFY_GET_ALL_MY_WORKSPACES tool output.
 */
type CLOCKIFY_GET_ALL_MY_WORKSPACES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Workspaces
       * @description List of workspaces the user belongs to.
       */
      workspaces: {
          /**
           * Id
           * @description Unique identifier of the workspace.
           */
          id: string;
          /**
           * Name
           * @description Name of the workspace.
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
 * Type of CLOCKIFY's CLOCKIFY_GET_ALL_WEBHOOKS tool input.
 */
type CLOCKIFY_GET_ALL_WEBHOOKS_INPUT = {
  /**
   * Workspace Id
   * @description Workspace identifier (UUID) to list webhooks for.
   */
  workspaceId?: string;
};

/**
 * Type of CLOCKIFY's CLOCKIFY_GET_ALL_WEBHOOKS tool output.
 */
type CLOCKIFY_GET_ALL_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Webhooks
       * @description List of webhooks for the workspace.
       */
      webhooks: {
          /**
           * Id
           * @description Unique identifier of the webhook.
           */
          id: string;
          /**
           * Name
           * @description Name of the webhook.
           */
          name: string;
          /**
           * Trigger Source
           * @description List of specific source IDs that trigger the webhook.
           */
          triggerSource: string[];
          /**
           * Trigger Source Type
           * @description Type of source that triggers the webhook.
           * @enum {string}
           */
          triggerSourceType: "PROJECT_ID" | "USER_ID" | "TAG_ID" | "TASK_ID" | "WORKSPACE_ID" | "USER_GROUP_ID" | "INVOICE_ID" | "ASSIGNMENT_ID" | "EXPENSE_ID";
          /**
           * Url
           * @description URL endpoint of the webhook.
           */
          url: string;
          /**
           * Webhook Event
           * @description Event that triggers the webhook.
           */
          webhookEvent: string;
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
 * Type of CLOCKIFY's CLOCKIFY_GET_CLIENTS tool input.
 */
type CLOCKIFY_GET_CLIENTS_INPUT = {
  /**
   * Name
   * @description Filter clients by name.
   * @default null
   */
  name: string | null;
  /**
   * Page
   * @description Page number for pagination (1-based).
   * @default null
   */
  page: number | null;
  /**
   * Page Size
   * @description Number of results per page.
   * @default null
   */
  "page-size": number | null;
  /**
   * Workspace Id
   * @description Workspace identifier to list clients from.
   */
  workspaceId?: string;
};

/**
 * Type of CLOCKIFY's CLOCKIFY_GET_CLIENTS tool output.
 */
type CLOCKIFY_GET_CLIENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Clients
       * @description List of clients in the workspace.
       */
      clients: {
          /**
           * Address
           * @description Client's address.
           * @default null
           */
          address: string | null;
          /**
           * Archived
           * @description Archived status of the client.
           */
          archived: boolean;
          /**
           * Id
           * @description Client ID.
           */
          id: string;
          /**
           * Name
           * @description Client name.
           */
          name: string;
          /**
           * Workspace Id
           * @description Associated workspace ID.
           */
          workspaceId: string;
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
 * Type of CLOCKIFY's CLOCKIFY_GET_CLIENT_BY_ID tool input.
 */
type CLOCKIFY_GET_CLIENT_BY_ID_INPUT = {
  /**
   * Id
   * @description Represents client identifier across the system.
   */
  id?: string;
  /**
   * Workspace Id
   * @description Represents workspace identifier across the system.
   */
  workspaceId?: string;
};

/**
 * Type of CLOCKIFY's CLOCKIFY_GET_CLIENT_BY_ID tool output.
 */
type CLOCKIFY_GET_CLIENT_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description Address of the client.
       * @default null
       */
      address: string | null;
      /**
       * Archived
       * @description Whether the client is archived.
       */
      archived: boolean;
      /**
       * Currency Code
       * @description Currency code of the client.
       */
      currencyCode: string;
      /**
       * Currency Id
       * @description Currency identifier of the client.
       */
      currencyId: string;
      /**
       * Email
       * Format: email
       * @description Email address of the client.
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Unique identifier of the client.
       */
      id: string;
      /**
       * Name
       * @description Name of the client.
       */
      name: string;
      /**
       * Note
       * @description Additional notes about the client.
       * @default null
       */
      note: string | null;
      /**
       * Workspace Id
       * @description Workspace identifier the client belongs to.
       */
      workspaceId: string;
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
 * Type of CLOCKIFY's CLOCKIFY_GET_CURRENTLY_LOGGED_IN_USER_INFO tool input.
 */
type CLOCKIFY_GET_CURRENTLY_LOGGED_IN_USER_INFO_INPUT = object;

/**
 * Type of CLOCKIFY's CLOCKIFY_GET_CURRENTLY_LOGGED_IN_USER_INFO tool output.
 */
type CLOCKIFY_GET_CURRENTLY_LOGGED_IN_USER_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active Workspace
       * @description ID of the active workspace.
       */
      activeWorkspace: string;
      /**
       * Email
       * @description Email of the user.
       */
      email: string;
      /**
       * Id
       * @description Unique ID of the user.
       */
      id: string;
      /**
       * Memberships
       * @description List of workspace memberships.
       */
      memberships: {
          /**
           * Cost Rate
           * @description Cost rate for the membership.
           */
          costRate: {
              /**
               * Amount
               * @description Amount in smallest currency unit, e.g., cents.
               */
              amount: number;
              /**
               * Currency
               * @description Currency code, e.g., USD.
               */
              currency: string;
          };
          /**
           * Hourly Rate
           * @description Hourly rate for the membership.
           */
          hourlyRate: {
              /**
               * Amount
               * @description Amount in smallest currency unit, e.g., cents.
               */
              amount: number;
              /**
               * Currency
               * @description Currency code, e.g., USD.
               */
              currency: string;
          };
          /**
           * Membership Status
           * @description Status of membership, e.g., ACTIVE.
           */
          membershipStatus: string;
          /**
           * Membership Type
           * @description Type of membership, e.g., PROJECT.
           */
          membershipType: string;
          /**
           * User Id
           * @description User identifier.
           */
          userId: string;
          /**
           * Workspace Id
           * @description Workspace identifier.
           */
          workspaceId: string;
      }[];
      /**
       * Name
       * @description Full name of the user.
       */
      name: string;
      /**
       * Profile Picture
       * @description URL of the user's profile picture.
       * @default null
       */
      profilePicture: string | null;
      /**
       * Settings
       * @description User settings object.
       */
      settings: {
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
 * Type of CLOCKIFY's CLOCKIFY_GET_HOLIDAYS tool input.
 */
type CLOCKIFY_GET_HOLIDAYS_INPUT = {
  /**
   * End
   * @description Optional end date in ISO 8601 format (YYYY-MM-DD) to filter holidays up to.
   * @default null
   */
  end: string | null;
  /**
   * Start
   * @description Optional start date in ISO 8601 format (YYYY-MM-DD) to filter holidays from.
   * @default null
   */
  start: string | null;
  /**
   * Workspace Id
   * @description Workspace identifier to retrieve holidays from.
   */
  workspaceId?: string;
};

/**
 * Type of CLOCKIFY's CLOCKIFY_GET_HOLIDAYS tool output.
 */
type CLOCKIFY_GET_HOLIDAYS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Holidays
       * @description List of holidays for the workspace.
       */
      holidays: {
          /**
           * Date
           * @description Date of the holiday in ISO 8601 format (YYYY-MM-DD).
           */
          date: string;
          /**
           * Id
           * @description Unique identifier of the holiday.
           */
          id: string;
          /**
           * Name
           * @description Name of the holiday.
           */
          name: string;
          /**
           * Workspace Id
           * @description Workspace ID this holiday belongs to.
           */
          workspaceId: string;
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
 * Type of CLOCKIFY's CLOCKIFY_GET_HOLIDAYS_IN_PERIOD tool input.
 */
type CLOCKIFY_GET_HOLIDAYS_IN_PERIOD_INPUT = {
  /**
   * Assigned To
   * @description User ID to filter holidays assigned to.
   */
  "assigned-to"?: string;
  /**
   * End
   * @description End date in yyyy-MM-dd format to filter holidays up to.
   */
  end?: string;
  /**
   * Start
   * @description Start date in yyyy-MM-dd format to filter holidays from.
   */
  start?: string;
  /**
   * Workspace Id
   * @description Workspace identifier to retrieve holidays from.
   */
  workspaceId?: string;
};

/**
 * Type of CLOCKIFY's CLOCKIFY_GET_HOLIDAYS_IN_PERIOD tool output.
 */
type CLOCKIFY_GET_HOLIDAYS_IN_PERIOD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Holidays
       * @description Holidays matching the period filter.
       */
      holidays: {
          /**
           * Automatic Time Entry Creation
           * @description Indicates if a time entry is auto-created for the holiday.
           */
          automaticTimeEntryCreation: boolean;
          /**
           * Date Period
           * @description Date range of the holiday.
           */
          datePeriod: {
              /**
               * End Date
               * @description Period end date in yyyy-MM-dd format.
               */
              endDate: string;
              /**
               * Start Date
               * @description Period start date in yyyy-MM-dd format.
               */
              startDate: string;
          };
          /**
           * Everyone Including New
           * @description If true, applies to all new users too.
           */
          everyoneIncludingNew: boolean;
          /**
           * Id
           * @description Unique identifier of the holiday.
           */
          id: string;
          /**
           * Name
           * @description Name of the holiday.
           */
          name: string;
          /**
           * Occurs Annually
           * @description Indicates if the holiday recurs annually.
           */
          occursAnnually: boolean;
          /**
           * Project Id
           * @description Associated project ID if set.
           * @default null
           */
          projectId: string | null;
          /**
           * Task Id
           * @description Associated task ID if set.
           * @default null
           */
          taskId: string | null;
          /**
           * User Group Ids
           * @description List of user group IDs assigned to the holiday.
           * @default null
           */
          userGroupIds: string[] | null;
          /**
           * User Ids
           * @description List of user IDs assigned to the holiday.
           * @default null
           */
          userIds: string[] | null;
          /**
           * Workspace Id
           * @description Workspace ID this holiday belongs to.
           */
          workspaceId: string;
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
 * Type of CLOCKIFY's CLOCKIFY_GET_MEMBER_PROFILE tool input.
 */
type CLOCKIFY_GET_MEMBER_PROFILE_INPUT = {
  /**
   * User Id
   * @description Identifier of the user whose profile is retrieved
   */
  userId?: string;
  /**
   * Workspace Id
   * @description Identifier of the workspace to which the user belongs
   */
  workspaceId?: string;
};

/**
 * Type of CLOCKIFY's CLOCKIFY_GET_MEMBER_PROFILE tool output.
 */
type CLOCKIFY_GET_MEMBER_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description Email of the user
       */
      email: string;
      /**
       * Has Password
       * @description Whether the user has set a password
       */
      hasPassword: boolean;
      /**
       * Has Pending Approval Request
       * @description Whether the user has a pending approval request
       */
      hasPendingApprovalRequest: boolean;
      /**
       * Image Url
       * @description URL of the user's profile image
       */
      imageUrl: string;
      /**
       * Name
       * @description Full name of the user
       */
      name: string;
      /**
       * User Custom Field Values
       * @description Custom field values assigned to the user
       */
      userCustomFieldValues: {
          /**
           * Custom Field
           * @description Definition of the custom field
           */
          customField: {
              /**
               * Allowed Values
               * @description List of allowed values for dropdown-type custom field
               */
              allowedValues: string[];
              /**
               * Description
               * @description Description of the custom field
               */
              description: string;
              /**
               * Entity Type
               * @description Entity type this custom field applies to
               */
              entityType: string;
              /**
               * Id
               * @description Identifier of the custom field
               */
              id: string;
              /**
               * Name
               * @description Name of the custom field
               */
              name: string;
              /**
               * Only Admin Can Edit
               * @description Whether only admin can edit this custom field
               */
              onlyAdminCanEdit: boolean;
              /**
               * Placeholder
               * @description Placeholder text for the custom field
               */
              placeholder: string;
              /**
               * Project Default Values
               * @description Default values for this field on projects
               */
              projectDefaultValues: {
                  /**
                   * Project Id
                   * @description Project identifier for default value context
                   */
                  projectId: string;
                  /**
                   * Status
                   * @description Status of the default value on project
                   */
                  status: string;
                  /**
                   * Value
                   * @description Default value for the custom field on project
                   */
                  value: string;
              }[];
              /**
               * Required
               * @description Whether this field is mandatory
               */
              required: boolean;
              /**
               * Status
               * @description Visibility status of the custom field in workspace
               */
              status: string;
              /**
               * Type
               * @description Type of the custom field (e.g., DROPDOWN_MULTIPLE)
               */
              type: string;
              /**
               * Workspace Default Value
               * @description Default value for the custom field in workspace
               */
              workspaceDefaultValue: string;
              /**
               * Workspace Id
               * @description Workspace identifier where field is defined
               */
              workspaceId: string;
          };
          /**
           * Custom Field Id
           * @description Identifier of the custom field instance
           */
          customFieldId: string;
          /**
           * Name
           * @description Name of the custom field
           */
          name: string;
          /**
           * Source Type
           * @description Origin of the custom field value
           */
          sourceType: string;
          /**
           * Type
           * @description Type of the custom field
           */
          type: string;
          /**
           * User Id
           * @description Identifier of the user owning this custom field value
           */
          userId: string;
          /**
           * Value
           * @description Value of the custom field for the user
           */
          value: string;
      }[];
      /**
       * Week Start
       * @description Start day of week for the user schedule
       */
      weekStart: string;
      /**
       * Work Capacity
       * @description Work capacity duration in ISO-8601 format
       */
      workCapacity: string;
      /**
       * Working Days
       * @description List of working days assigned to the user (e.g., ["MONDAY","TUESDAY"])
       */
      workingDays: string[];
      /**
       * Workspace Number
       * @description Workspace membership index number
       */
      workspaceNumber: number;
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
 * Type of CLOCKIFY's CLOCKIFY_GET_WEBHOOK_BY_ID tool input.
 */
type CLOCKIFY_GET_WEBHOOK_BY_ID_INPUT = {
  /**
   * Webhook Id
   * @description Represents webhook identifier across the system.
   */
  webhookId?: string;
  /**
   * Workspace Id
   * @description Represents workspace identifier across the system.
   */
  workspaceId?: string;
};

/**
 * Type of CLOCKIFY's CLOCKIFY_GET_WEBHOOK_BY_ID tool output.
 */
type CLOCKIFY_GET_WEBHOOK_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Auth Token
       * @description Authentication token to verify webhook calls.
       */
      authToken: string;
      /**
       * Enabled
       * @description Whether the webhook is enabled.
       */
      enabled: boolean;
      /**
       * Id
       * @description Webhook unique identifier.
       */
      id: string;
      /**
       * Name
       * @description Name of the webhook.
       */
      name: string;
      /**
       * Trigger Source
       * @description List of IDs that trigger the webhook.
       */
      triggerSource: string[];
      /**
       * Trigger Source Type
       * @description Type of the entity that fires this webhook.
       * @enum {string}
       */
      triggerSourceType: "PROJECT_ID" | "USER_ID" | "TAG_ID" | "TASK_ID" | "WORKSPACE_ID" | "USER_GROUP_ID" | "INVOICE_ID" | "ASSIGNMENT_ID" | "EXPENSE_ID";
      /**
       * Url
       * @description Endpoint URL called by Clockify.
       */
      url: string;
      /**
       * User Id
       * @description ID of the user who created the webhook.
       */
      userId: string;
      /**
       * Webhook Event
       * @description Event type triggering this webhook.
       */
      webhookEvent: string;
      /**
       * Workspace Id
       * @description Workspace ID for the webhook.
       */
      workspaceId: string;
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
 * Type of CLOCKIFY's CLOCKIFY_GET_WORKSPACE_INFO tool input.
 */
type CLOCKIFY_GET_WORKSPACE_INFO_INPUT = {
  /**
   * Workspace Id
   * @description Represents workspace identifier across the system.
   */
  workspaceId?: string;
};

/**
 * Type of CLOCKIFY's CLOCKIFY_GET_WORKSPACE_INFO tool output.
 */
type CLOCKIFY_GET_WORKSPACE_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cake Organization Id
       * @description Identifier of the Cake organization, if available.
       * @default null
       */
      cakeOrganizationId: string | null;
      /**
       * Cost Rate
       * @description Default cost rate of the workspace.
       */
      costRate: {
          /**
           * Amount
           * @description Cost or hourly rate amount in smallest currency unit.
           */
          amount: number;
          /**
           * Currency
           * @description Currency code, e.g., USD.
           */
          currency: string;
      };
      /**
       * Currencies
       * @description List of currencies available in the workspace.
       */
      currencies: {
          /**
           * Code
           * @description Currency code, e.g., USD.
           */
          code: string;
          /**
           * Id
           * @description Currency identifier.
           */
          id: string;
          /**
           * Is Default
           * @description Indicates if this currency is the default.
           */
          isDefault: boolean;
      }[];
      /**
       * Feature Subscription Type
       * @description Type of subscription, e.g., FREE or PREMIUM.
       */
      featureSubscriptionType: string;
      /**
       * Features
       * @description List of enabled features in the workspace.
       */
      features: string[];
      /**
       * Hourly Rate
       * @description Default hourly rate of the workspace.
       */
      hourlyRate: {
          /**
           * Amount
           * @description Cost or hourly rate amount in smallest currency unit.
           */
          amount: number;
          /**
           * Currency
           * @description Currency code, e.g., USD.
           */
          currency: string;
      };
      /**
       * Id
       * @description Workspace identifier.
       */
      id: string;
      /**
       * Image Url
       * @description URL of the workspace image, if set.
       * @default null
       */
      imageUrl: string | null;
      /**
       * Memberships
       * @description List of memberships associated with the workspace.
       */
      memberships: {
          /**
           * CostRate
           * @description Cost rate for the membership (may be null if not set).
           * @default null
           */
          costRate: {
              /**
               * Amount
               * @description Cost or hourly rate amount in smallest currency unit.
               */
              amount: number;
              /**
               * Currency
               * @description Currency code, e.g., USD.
               */
              currency: string;
          } | null;
          /**
           * CostRate
           * @description Hourly rate for the membership (may be null if not set).
           * @default null
           */
          hourlyRate: {
              /**
               * Amount
               * @description Cost or hourly rate amount in smallest currency unit.
               */
              amount: number;
              /**
               * Currency
               * @description Currency code, e.g., USD.
               */
              currency: string;
          } | null;
          /**
           * Membership Status
           * @description Membership status, e.g., ACTIVE.
           */
          membershipStatus: string;
          /**
           * Membership Type
           * @description Type of membership, e.g., PROJECT.
           */
          membershipType: string;
      }[];
      /**
       * Name
       * @description Name of the workspace.
       */
      name: string;
      /**
       * Subdomain
       * @description Subdomain settings for the workspace.
       */
      subdomain: {
          /**
           * Enabled
           * @description Whether subdomain is enabled.
           */
          enabled: boolean;
          /**
           * Name
           * @description Subdomain name (may be null if not set).
           * @default null
           */
          name: string | null;
      };
      /**
       * Workspace Settings
       * @description Workspace-specific settings configuration.
       */
      workspaceSettings: {
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
 * Type map of all available tool input types for toolkit "CLOCKIFY".
 */
export type CLOCKIFY_TOOL_INPUTS = {
  CREATE_CLIENT: CLOCKIFY_CREATE_CLIENT_INPUT
  CREATE_WEBHOOK: CLOCKIFY_CREATE_WEBHOOK_INPUT
  DELETE_CLIENT: CLOCKIFY_DELETE_CLIENT_INPUT
  DELETE_WEBHOOK: CLOCKIFY_DELETE_WEBHOOK_INPUT
  FILTER_WORKSPACE_USERS: CLOCKIFY_FILTER_WORKSPACE_USERS_INPUT
  FIND_ALL_USERS_ON_WORKSPACE: CLOCKIFY_FIND_ALL_USERS_ON_WORKSPACE_INPUT
  FIND_USER_TEAM_MANAGER: CLOCKIFY_FIND_USER_TEAM_MANAGER_INPUT
  GENERATE_NEW_WEBHOOK_TOKEN: CLOCKIFY_GENERATE_NEW_WEBHOOK_TOKEN_INPUT
  GET_ALL_ADDON_WEBHOOKS: CLOCKIFY_GET_ALL_ADDON_WEBHOOKS_INPUT
  GET_ALL_MY_WORKSPACES: CLOCKIFY_GET_ALL_MY_WORKSPACES_INPUT
  GET_ALL_WEBHOOKS: CLOCKIFY_GET_ALL_WEBHOOKS_INPUT
  GET_CLIENTS: CLOCKIFY_GET_CLIENTS_INPUT
  GET_CLIENT_BY_ID: CLOCKIFY_GET_CLIENT_BY_ID_INPUT
  GET_CURRENTLY_LOGGED_IN_USER_INFO: CLOCKIFY_GET_CURRENTLY_LOGGED_IN_USER_INFO_INPUT
  GET_HOLIDAYS: CLOCKIFY_GET_HOLIDAYS_INPUT
  GET_HOLIDAYS_IN_PERIOD: CLOCKIFY_GET_HOLIDAYS_IN_PERIOD_INPUT
  GET_MEMBER_PROFILE: CLOCKIFY_GET_MEMBER_PROFILE_INPUT
  GET_WEBHOOK_BY_ID: CLOCKIFY_GET_WEBHOOK_BY_ID_INPUT
  GET_WORKSPACE_INFO: CLOCKIFY_GET_WORKSPACE_INFO_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CLOCKIFY".
 */
export type CLOCKIFY_TOOL_OUTPUTS = {
  CREATE_CLIENT: CLOCKIFY_CREATE_CLIENT_OUTPUT
  CREATE_WEBHOOK: CLOCKIFY_CREATE_WEBHOOK_OUTPUT
  DELETE_CLIENT: CLOCKIFY_DELETE_CLIENT_OUTPUT
  DELETE_WEBHOOK: CLOCKIFY_DELETE_WEBHOOK_OUTPUT
  FILTER_WORKSPACE_USERS: CLOCKIFY_FILTER_WORKSPACE_USERS_OUTPUT
  FIND_ALL_USERS_ON_WORKSPACE: CLOCKIFY_FIND_ALL_USERS_ON_WORKSPACE_OUTPUT
  FIND_USER_TEAM_MANAGER: CLOCKIFY_FIND_USER_TEAM_MANAGER_OUTPUT
  GENERATE_NEW_WEBHOOK_TOKEN: CLOCKIFY_GENERATE_NEW_WEBHOOK_TOKEN_OUTPUT
  GET_ALL_ADDON_WEBHOOKS: CLOCKIFY_GET_ALL_ADDON_WEBHOOKS_OUTPUT
  GET_ALL_MY_WORKSPACES: CLOCKIFY_GET_ALL_MY_WORKSPACES_OUTPUT
  GET_ALL_WEBHOOKS: CLOCKIFY_GET_ALL_WEBHOOKS_OUTPUT
  GET_CLIENTS: CLOCKIFY_GET_CLIENTS_OUTPUT
  GET_CLIENT_BY_ID: CLOCKIFY_GET_CLIENT_BY_ID_OUTPUT
  GET_CURRENTLY_LOGGED_IN_USER_INFO: CLOCKIFY_GET_CURRENTLY_LOGGED_IN_USER_INFO_OUTPUT
  GET_HOLIDAYS: CLOCKIFY_GET_HOLIDAYS_OUTPUT
  GET_HOLIDAYS_IN_PERIOD: CLOCKIFY_GET_HOLIDAYS_IN_PERIOD_OUTPUT
  GET_MEMBER_PROFILE: CLOCKIFY_GET_MEMBER_PROFILE_OUTPUT
  GET_WEBHOOK_BY_ID: CLOCKIFY_GET_WEBHOOK_BY_ID_OUTPUT
  GET_WORKSPACE_INFO: CLOCKIFY_GET_WORKSPACE_INFO_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CLOCKIFY toolkit.
 */
export const CLOCKIFY = {
  slug: "clockify",
  tools: {
    /**
     * Tool to add a new client to a workspace. use when you need to create a client in a specific workspace.
     */
    CREATE_CLIENT: "CLOCKIFY_CREATE_CLIENT",
    /**
     * Tool to create a new webhook in a workspace. use when you want to subscribe to workspace events by registering a callback url.
     */
    CREATE_WEBHOOK: "CLOCKIFY_CREATE_WEBHOOK",
    /**
     * Tool to delete a client from a workspace. use after archiving the client and confirming no associated data exists.
     */
    DELETE_CLIENT: "CLOCKIFY_DELETE_CLIENT",
    /**
     * Tool to delete a webhook from a workspace. use when you need to remove an existing webhook by its id.
     */
    DELETE_WEBHOOK: "CLOCKIFY_DELETE_WEBHOOK",
    /**
     * Tool to filter users in a workspace by advanced criteria. use when you need a paginated, sortable list of workspace users matching multiple filters.
     */
    FILTER_WORKSPACE_USERS: "CLOCKIFY_FILTER_WORKSPACE_USERS",
    /**
     * Tool to list all users in a workspace. use when you need to retrieve workspace members after confirming the workspace id. example: "find all users on workspace 64a687e29ae1f428e7ebe303."
     */
    FIND_ALL_USERS_ON_WORKSPACE: "CLOCKIFY_FIND_ALL_USERS_ON_WORKSPACE",
    /**
     * Tool to get managers of a user in a workspace. use after confirming workspace and user ids are correct.
     */
    FIND_USER_TEAM_MANAGER: "CLOCKIFY_FIND_USER_TEAM_MANAGER",
    /**
     * Tool to generate a new webhook token. use after confirming workspace and webhook ids.
     */
    GENERATE_NEW_WEBHOOK_TOKEN: "CLOCKIFY_GENERATE_NEW_WEBHOOK_TOKEN",
    /**
     * Tool to list all webhooks for an addon in a workspace. use after confirming workspace and addon ids.
     */
    GET_ALL_ADDON_WEBHOOKS: "CLOCKIFY_GET_ALL_ADDON_WEBHOOKS",
    /**
     * Tool to list all workspaces the user belongs to. use when you need an overview of accessible workspaces after authentication.
     */
    GET_ALL_MY_WORKSPACES: "CLOCKIFY_GET_ALL_MY_WORKSPACES",
    /**
     * Tool to list all webhooks in a workspace. use when you need to retrieve defined webhooks after confirming the workspace id.
     */
    GET_ALL_WEBHOOKS: "CLOCKIFY_GET_ALL_WEBHOOKS",
    /**
     * Tool to list clients in a workspace. use after obtaining a workspace id.
     */
    GET_CLIENTS: "CLOCKIFY_GET_CLIENTS",
    /**
     * Tool to get details of a client by id. use after confirming workspace and client ids.
     */
    GET_CLIENT_BY_ID: "CLOCKIFY_GET_CLIENT_BY_ID",
    /**
     * Tool to retrieve info about the authenticated user. use when verifying credentials and needing current user context after authentication.
     */
    GET_CURRENTLY_LOGGED_IN_USER_INFO: "CLOCKIFY_GET_CURRENTLY_LOGGED_IN_USER_INFO",
    /**
     * Tool to retrieve all holidays for a workspace. use when you need to list or filter workspace holidays after confirming the workspace id.
     */
    GET_HOLIDAYS: "CLOCKIFY_GET_HOLIDAYS",
    /**
     * Tool to retrieve holidays in a specific period. use when you need holidays assigned to a user between two dates after confirming the workspace id.
     */
    GET_HOLIDAYS_IN_PERIOD: "CLOCKIFY_GET_HOLIDAYS_IN_PERIOD",
    /**
     * Tool to get a member's profile in a workspace. use when you need detailed profile info after identifying the workspace and user.
     */
    GET_MEMBER_PROFILE: "CLOCKIFY_GET_MEMBER_PROFILE",
    /**
     * Tool to get details of a specific webhook. use after confirming workspace and webhook id.
     */
    GET_WEBHOOK_BY_ID: "CLOCKIFY_GET_WEBHOOK_BY_ID",
    /**
     * Tool to get details of a specific workspace. use after obtaining the workspace id.
     */
    GET_WORKSPACE_INFO: "CLOCKIFY_GET_WORKSPACE_INFO",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CLOCKIFY".
 */
export type CLOCKIFY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CLOCKIFY".
 */
export type CLOCKIFY_TRIGGER_EVENTS = {}
