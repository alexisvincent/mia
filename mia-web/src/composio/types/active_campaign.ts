// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_ADD_CONTACT_NOTE tool input.
 */
type ACTIVE_CAMPAIGN_ADD_CONTACT_NOTE_INPUT = {
  /**
   * Contact Email
   * @description The email address of the contact to associate the note with.
   */
  contact_email?: string;
  /**
   * Note
   * @description The content of the note to be added. This should be plain text as HTML will be stripped.
   */
  note?: string;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_ADD_CONTACT_NOTE tool output.
 */
type ACTIVE_CAMPAIGN_ADD_CONTACT_NOTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description The associated contact information
       */
      contacts: {
          [key: string]: unknown;
      }[];
      /**
       * Note
       * @description The created note details
       */
      note: {
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
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_ADD_CONTACT_TO_AUTOMATION tool input.
 */
type ACTIVE_CAMPAIGN_ADD_CONTACT_TO_AUTOMATION_INPUT = {
  /**
   * Automation Id
   * @description ID of the automation to add the contact to
   */
  automation_id?: string;
  /**
   * Contact Email
   * Format: email
   * @description Email address of the contact to add to automation
   */
  contact_email?: string;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_ADD_CONTACT_TO_AUTOMATION tool output.
 */
type ACTIVE_CAMPAIGN_ADD_CONTACT_TO_AUTOMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Automation Id
       * @description ID of the automation the contact was added to
       */
      automation_id: string;
      /**
       * Contact Id
       * @description ID of the contact that was added to the automation
       */
      contact_id: string;
      /**
       * Status
       * @description Status of the automation enrollment (1 = active)
       */
      status: number;
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
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_ADD_SECONDARY_CONTACT_TO_DEAL tool input.
 */
type ACTIVE_CAMPAIGN_ADD_SECONDARY_CONTACT_TO_DEAL_INPUT = {
  /**
   * Contact Id
   * @description The ID of the contact to add as secondary contact
   */
  contact_id?: number;
  /**
   * Deal Id
   * @description The ID of the deal to add the contact to
   */
  deal_id?: number;
  /**
   * Role Id
   * @description The role ID for the contact (optional)
   * @default null
   */
  role_id: number | null;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_ADD_SECONDARY_CONTACT_TO_DEAL tool output.
 */
type ACTIVE_CAMPAIGN_ADD_SECONDARY_CONTACT_TO_DEAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact Deal
       * @description Contact-deal association information
       */
      contactDeal: {
          /**
           * Cdate
           * @description Creation date of the association
           */
          cdate: string;
          /**
           * Contact
           * @description ID of the contact
           */
          contact: number;
          /**
           * Deal
           * @description ID of the deal
           */
          deal: number;
          /**
           * Id
           * @description ID of the contact-deal association
           */
          id: number;
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
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_CREATE_ACCOUNT tool input.
 */
type ACTIVE_CAMPAIGN_CREATE_ACCOUNT_INPUT = {
  /**
   * Account Url
   * @description The URL associated with the account
   * @default null
   */
  accountUrl: string | null;
  /**
   * Fields
   * @description List of custom fields for the account
   * @default null
   */
  fields: {
      /**
       * Custom Field Id
       * @description The ID of the custom field
       */
      customFieldId: number;
      /**
       * Field Currency
       * @description The currency for the field value, if applicable
       * @default null
       */
      fieldCurrency: string | null;
      /**
       * Field Value
       * @description The value for the custom field
       */
      fieldValue: string;
  }[] | null;
  /**
   * Name
   * @description The name of the account
   */
  name?: string;
  /**
   * Owner
   * @description The ID of the user who owns the account
   * @default null
   */
  owner: number | null;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_CREATE_ACCOUNT tool output.
 */
type ACTIVE_CAMPAIGN_CREATE_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account
       * @description The created account details
       */
      account: {
          /**
           * Account Url
           * @description The URL associated with the account
           * @default null
           */
          accountUrl: string | null;
          /**
           * Created Timestamp
           * @description The timestamp when the account was created
           */
          createdTimestamp: string;
          /**
           * Fields
           * @description List of custom fields associated with the account
           * @default null
           */
          fields: {
              /**
               * Custom Field Id
               * @description The ID of the custom field
               */
              customFieldId: number;
              /**
               * Field Currency
               * @description The currency for the field value, if applicable
               * @default null
               */
              fieldCurrency: string | null;
              /**
               * Field Value
               * @description The value for the custom field
               */
              fieldValue: string;
          }[] | null;
          /**
           * Id
           * @description The unique identifier of the created account
           */
          id: string;
          /**
           * Name
           * @description The name of the account
           */
          name: string;
          /**
           * Updated Timestamp
           * @description The timestamp when the account was last updated
           */
          updatedTimestamp: string;
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
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_CREATE_CONTACT tool input.
 */
type ACTIVE_CAMPAIGN_CREATE_CONTACT_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address of the contact
   */
  email?: string;
  /**
   * First Name
   * @description The contact's first name
   * @default null
   */
  first_name: string | null;
  /**
   * Job Title
   * @description The contact's job title
   * @default null
   */
  job_title: string | null;
  /**
   * Last Name
   * @description The contact's last name
   * @default null
   */
  last_name: string | null;
  /**
   * Organization Name
   * @description The name of the contact's organization
   * @default null
   */
  organization_name: string | null;
  /**
   * Phone
   * @description The contact's phone number
   * @default null
   */
  phone: string | null;
  /**
   * Tags
   * @description Comma-separated list of tags to apply to the contact
   * @default null
   */
  tags: string | null;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_CREATE_CONTACT tool output.
 */
type ACTIVE_CAMPAIGN_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact
       * @description The created contact details
       */
      contact: {
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
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_CREATE_CONTACT_TASK tool input.
 */
type ACTIVE_CAMPAIGN_CREATE_CONTACT_TASK_INPUT = {
  /**
   * Assignee
   * @description The ID of the user this task will be assigned to
   * @default null
   */
  assignee: number | null;
  /**
   * Deal Tasktype
   * @description The type of task based on available Task Types in your account
   */
  dealTasktype?: string;
  /**
   * Duedate
   * @description Due date and time of the task in ISO 8601 format (e.g., 2023-12-25T12:00:00-06:00)
   */
  duedate?: string;
  /**
   * Edate
   * @description End date and time of the task in ISO 8601 format (must be later than duedate)
   * @default null
   */
  edate: string | null;
  /**
   * Note
   * @description Content describing the task
   * @default null
   */
  note: string | null;
  /**
   * Relid
   * @description The ID of the contact to associate the task with
   */
  relid?: number;
  /**
   * Status
   * @description Task status (0 for incomplete, 1 for complete)
   * @default 0
   */
  status: number | null;
  /**
   * Title
   * @description The title of the task
   * @default null
   */
  title: string | null;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_CREATE_CONTACT_TASK tool output.
 */
type ACTIVE_CAMPAIGN_CREATE_CONTACT_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assignee
       * @description Assigned user ID
       * @default null
       */
      assignee: string | null;
      /**
       * Cdate
       * @description Creation date
       */
      cdate: string;
      /**
       * Deal Tasktype
       * @description Task type ID
       */
      dealTasktype: string;
      /**
       * Duedate
       * @description Due date and time of the task
       */
      duedate: string;
      /**
       * Edate
       * @description End date and time of the task
       * @default null
       */
      edate: string | null;
      /**
       * Id
       * @description Task ID
       */
      id: string;
      /**
       * Note
       * @description Task description
       * @default null
       */
      note: string | null;
      /**
       * Owner
       * @description Task owner information
       */
      owner: {
          /**
           * Id
           * @description ID of the owner
           */
          id: string;
          /**
           * Type
           * @description Type of the owner (contact or deal)
           */
          type: string;
      };
      /**
       * Relid
       * @description Related contact ID
       */
      relid: string;
      /**
       * Reltype
       * @description Type of relation
       */
      reltype: string;
      /**
       * Status
       * @description Task status
       */
      status: number;
      /**
       * Title
       * @description Task title
       * @default null
       */
      title: string | null;
      /**
       * Udate
       * @description Last update date
       */
      udate: string;
      /**
       * User
       * @description User ID who created the task
       */
      user: string;
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
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_CREATE_DEAL_PIPELINE tool input.
 */
type ACTIVE_CAMPAIGN_CREATE_DEAL_PIPELINE_INPUT = {
  /**
   * Allgroups
   * @description Set to 1 to allow all user groups to manage the pipeline
   * @default 0
   */
  allgroups: number | null;
  /**
   * Allusers
   * @description Set to 1 to allow all users to manage the pipeline
   * @default 0
   */
  allusers: number | null;
  /**
   * Autoassign
   * @description Set to 1 to enable automatic assignment of new deals to owners
   * @default 0
   */
  autoassign: number | null;
  /**
   * Currency
   * @description The default currency for deals in this pipeline (e.g., 'usd', 'eur')
   * @default null
   */
  currency: string | null;
  /**
   * Title
   * @description The name of the pipeline
   */
  title?: string;
  /**
   * Users
   * @description Array of user IDs who are allowed to manage the pipeline
   * @default null
   */
  users: string[] | null;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_CREATE_DEAL_PIPELINE tool output.
 */
type ACTIVE_CAMPAIGN_CREATE_DEAL_PIPELINE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Deal Group
       * @description The created deal pipeline details
       */
      dealGroup: {
          /**
           * Allgroups
           * @description Whether all groups can manage the pipeline
           */
          allgroups: number;
          /**
           * Allusers
           * @description Whether all users can manage the pipeline
           */
          allusers: number;
          /**
           * Autoassign
           * @description Whether automatic assignment is enabled
           */
          autoassign: number;
          /**
           * Cdate
           * @description Creation date
           */
          cdate: string;
          /**
           * Currency
           * @description The default currency for deals
           * @default null
           */
          currency: string | null;
          /**
           * Id
           * @description The ID of the created pipeline
           */
          id: string;
          /**
           * DealGroupLinks
           * @description Related resource links
           * @default null
           */
          links: {
              /**
               * Deal Group Groups
               * @description URL for deal group groups
               * @default null
               */
              dealGroupGroups: string | null;
              /**
               * Deal Group Users
               * @description URL for deal group users
               * @default null
               */
              dealGroupUsers: string | null;
              /**
               * Stages
               * @description URL for pipeline stages
               * @default null
               */
              stages: string | null;
          } | null;
          /**
           * Title
           * @description The name of the pipeline
           */
          title: string;
          /**
           * Udate
           * @description Last update date
           */
          udate: string;
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
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_CREATE_DEAL_TASK_TYPE tool input.
 */
type ACTIVE_CAMPAIGN_CREATE_DEAL_TASK_TYPE_INPUT = {
  /**
   * Description
   * @description Description of the task type
   * @default null
   */
  description: string | null;
  /**
   * Status
   * @description Status of the task type (0 for active, 1 for inactive)
   * @default 0
   */
  status: number | null;
  /**
   * Title
   * @description The name of the task type
   */
  title?: string;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_CREATE_DEAL_TASK_TYPE tool output.
 */
type ACTIVE_CAMPAIGN_CREATE_DEAL_TASK_TYPE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cdate
       * @description Creation date of the task type
       */
      cdate: string;
      /**
       * Description
       * @description Description of the task type
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description The ID of the created deal task type
       */
      id: string;
      /**
       * Status
       * @description Status of the task type (0 for active, 1 for inactive)
       */
      status: number;
      /**
       * Title
       * @description The name of the task type
       */
      title: string;
      /**
       * Udate
       * @description Last update date of the task type
       */
      udate: string;
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
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_DELETE_ACCOUNT tool input.
 */
type ACTIVE_CAMPAIGN_DELETE_ACCOUNT_INPUT = {
  /**
   * Account Id
   * @description The unique identifier of the account to be deleted
   */
  account_id?: number;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_DELETE_ACCOUNT tool output.
 */
type ACTIVE_CAMPAIGN_DELETE_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the account was successfully deleted
       * @default true
       */
      success: boolean;
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
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_DELETE_DEAL_PIPELINE tool input.
 */
type ACTIVE_CAMPAIGN_DELETE_DEAL_PIPELINE_INPUT = {
  /**
   * Pipeline Id
   * @description The unique identifier of the deal pipeline to be deleted
   */
  pipeline_id?: number;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_DELETE_DEAL_PIPELINE tool output.
 */
type ACTIVE_CAMPAIGN_DELETE_DEAL_PIPELINE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the deal pipeline was successfully deleted
       * @default true
       */
      success: boolean;
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
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_DELETE_DEAL_STAGE tool input.
 */
type ACTIVE_CAMPAIGN_DELETE_DEAL_STAGE_INPUT = {
  /**
   * Action Type
   * @description Specifies how to handle existing deals. Must be either 'Move' or 'Delete'
   */
  action_type?: string;
  /**
   * New Pipeline Id
   * @description Required if action_type is 'Move'. The ID of the pipeline to move deals to
   * @default null
   */
  new_pipeline_id: number | null;
  /**
   * New Stage Id
   * @description Required if action_type is 'Move'. The ID of the stage to move deals to
   * @default null
   */
  new_stage_id: number | null;
  /**
   * Stage Id
   * @description The unique identifier of the deal stage to be deleted
   */
  stage_id?: number;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_DELETE_DEAL_STAGE tool output.
 */
type ACTIVE_CAMPAIGN_DELETE_DEAL_STAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the deal stage was successfully deleted
       * @default true
       */
      success: boolean;
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
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_FIND_CONTACT tool input.
 */
type ACTIVE_CAMPAIGN_FIND_CONTACT_INPUT = {
  /**
   * Email
   * @description The email address of the contact
   * @default null
   */
  email: string | null;
  /**
   * Id
   * @description The ActiveCampaign ID of the contact
   * @default null
   */
  id: string | null;
  /**
   * Phone
   * @description The phone number of the contact
   * @default null
   */
  phone: string | null;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_FIND_CONTACT tool output.
 */
type ACTIVE_CAMPAIGN_FIND_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cdate
       * @description Contact creation date
       * @default null
       */
      cdate: string | null;
      /**
       * Email
       * @description Contact email
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description Contact first name
       * @default null
       */
      firstName: string | null;
      /**
       * Id
       * @description Contact ID
       * @default null
       */
      id: string | null;
      /**
       * Last Name
       * @description Contact last name
       * @default null
       */
      lastName: string | null;
      /**
       * Phone
       * @description Contact phone
       * @default null
       */
      phone: string | null;
      /**
       * Udate
       * @description Contact update date
       * @default null
       */
      udate: string | null;
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
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_FIND_CONTACT_TASK tool input.
 */
type ACTIVE_CAMPAIGN_FIND_CONTACT_TASK_INPUT = {
  /**
   * Contact Id
   * @description The ID of the contact to filter tasks for
   * @default null
   */
  contact_id: number | null;
  /**
   * Status
   * @description Task status (0 for incomplete, 1 for complete)
   * @default null
   */
  status: number | null;
  /**
   * Title
   * @description The title of the task to search for
   * @default null
   */
  title: string | null;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_FIND_CONTACT_TASK tool output.
 */
type ACTIVE_CAMPAIGN_FIND_CONTACT_TASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tasks
       * @description List of tasks matching the search criteria
       */
      tasks: {
          /**
           * Created Date
           * @description The creation date of the task
           */
          created_date: string;
          /**
           * Description
           * @description The description/note of the task
           * @default null
           */
          description: string | null;
          /**
           * Due Date
           * @description The due date of the task
           * @default null
           */
          due_date: string | null;
          /**
           * Owner Type
           * @description The type of the task owner (Subscriber for contacts)
           */
          owner_type: string;
          /**
           * Related Id
           * @description The ID of the related contact
           */
          related_id: string;
          /**
           * Status
           * @description Task status (0 for incomplete, 1 for complete)
           */
          status: number;
          /**
           * Task Id
           * @description The unique identifier of the task
           */
          task_id: string;
          /**
           * Title
           * @description The title of the task
           * @default null
           */
          title: string | null;
          /**
           * Updated Date
           * @description The last update date of the task
           */
          updated_date: string;
      }[];
      /**
       * Total Count
       * @description Total number of tasks found
       */
      total_count: number;
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
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_FIND_USER_ACTION tool input.
 */
type ACTIVE_CAMPAIGN_FIND_USER_ACTION_INPUT = {
  /**
   * Email
   * @description Email address of the user to find
   */
  email?: string;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_FIND_USER_ACTION tool output.
 */
type ACTIVE_CAMPAIGN_FIND_USER_ACTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cdate
       * @description Creation date
       * @default null
       */
      cdate: string | null;
      /**
       * Email
       * @description Contact email address
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description Contact first name
       * @default null
       */
      firstName: string | null;
      /**
       * Id
       * @description Contact ID
       * @default null
       */
      id: string | null;
      /**
       * Last Name
       * @description Contact last name
       * @default null
       */
      lastName: string | null;
      /**
       * UserLinks
       * @description Related resource links
       * @default null
       */
      links: {
          /**
           * Bounce Logs
           * @description Link to bounce logs
           * @default null
           */
          bounceLogs: string | null;
          /**
           * Contact Automations
           * @description Link to contact automations
           * @default null
           */
          contactAutomations: string | null;
          /**
           * Contact Data
           * @description Link to contact data
           * @default null
           */
          contactData: string | null;
          /**
           * Contact Deals
           * @description Link to contact deals
           * @default null
           */
          contactDeals: string | null;
          /**
           * Contact Goals
           * @description Link to contact goals
           * @default null
           */
          contactGoals: string | null;
          /**
           * Contact Lists
           * @description Link to contact lists
           * @default null
           */
          contactLists: string | null;
          /**
           * Contact Logs
           * @description Link to contact logs
           * @default null
           */
          contactLogs: string | null;
          /**
           * Contact Tags
           * @description Link to contact tags
           * @default null
           */
          contactTags: string | null;
          /**
           * Deals
           * @description Link to deals
           * @default null
           */
          deals: string | null;
          /**
           * Field Values
           * @description Link to field values
           * @default null
           */
          fieldValues: string | null;
          /**
           * Geo Ips
           * @description Link to geo IPs
           * @default null
           */
          geoIps: string | null;
          /**
           * Notes
           * @description Link to notes
           * @default null
           */
          notes: string | null;
          /**
           * Organization
           * @description Link to organization
           * @default null
           */
          organization: string | null;
          /**
           * Plus Append
           * @description Link to plus append
           * @default null
           */
          plusAppend: string | null;
          /**
           * Score Values
           * @description Link to score values
           * @default null
           */
          scoreValues: string | null;
          /**
           * Tracking Logs
           * @description Link to tracking logs
           * @default null
           */
          trackingLogs: string | null;
      } | null;
      /**
       * Organization
       * @description Organization name
       * @default null
       */
      organization: string | null;
      /**
       * Orgid
       * @description Organization ID
       * @default null
       */
      orgid: string | null;
      /**
       * Phone
       * @description Contact phone number
       * @default null
       */
      phone: string | null;
      /**
       * Udate
       * @description Last update date
       * @default null
       */
      udate: string | null;
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
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_LIST_ALL_CONTACTS tool input.
 */
type ACTIVE_CAMPAIGN_LIST_ALL_CONTACTS_INPUT = {
  /**
   * Email Like
   * @description Filter contacts that contain the given value in the email address
   * @default null
   */
  email_like: string | null;
  /**
   * FiltersModel
   * @description Filters model for filtering contacts by date.
   * @default null
   */
  filters: {
      /**
       * Created After
       * Format: date
       * @description Filter contacts created after this date
       * @default null
       */
      created_after: string | null;
      /**
       * Created Before
       * Format: date
       * @description Filter contacts created before this date
       * @default null
       */
      created_before: string | null;
      /**
       * Updated After
       * Format: date
       * @description Filter contacts updated after this date
       * @default null
       */
      updated_after: string | null;
      /**
       * Updated Before
       * Format: date
       * @description Filter contacts updated before this date
       * @default null
       */
      updated_before: string | null;
  } | null;
  /**
   * Id Greater
   * @description Only include contacts with an ID greater than the given ID
   * @default null
   */
  id_greater: number | null;
  /**
   * Id Less
   * @description Only include contacts with an ID less than the given ID
   * @default null
   */
  id_less: number | null;
  /**
   * Limit
   * @description Number of contacts to return per page
   * @default 20
   */
  limit: number | null;
  /**
   * Listid
   * @description Filter contacts associated with the given list
   * @default null
   */
  listid: string | null;
  /**
   * OrdersModel
   * @description Orders model for sorting contacts.
   * @default null
   */
  orders: {
      /**
       * Email
       * @description Order contacts by email (ASC/DESC)
       * @default null
       */
      email: string | null;
      /**
       * First Name
       * @description Order contacts by first name (ASC/DESC)
       * @default null
       */
      first_name: string | null;
      /**
       * Id
       * @description Order contacts by ID (ASC/DESC)
       * @default null
       */
      id: string | null;
      /**
       * Last Name
       * @description Order contacts by last name (ASC/DESC)
       * @default null
       */
      last_name: string | null;
      /**
       * Name
       * @description Order contacts by full name (ASC/DESC)
       * @default null
       */
      name: string | null;
      /**
       * Score
       * @description Order contacts by score (ASC/DESC)
       * @default null
       */
      score: string | null;
  } | null;
  /**
   * Search
   * @description Filter contacts by searching in names, organization, phone, or email
   * @default null
   */
  search: string | null;
  /**
   * Segmentid
   * @description Return only contacts that match a list segment
   * @default null
   */
  segmentid: number | null;
  /**
   * Tagid
   * @description Filter contacts associated with the given tag
   * @default null
   */
  tagid: number | null;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_LIST_ALL_CONTACTS tool output.
 */
type ACTIVE_CAMPAIGN_LIST_ALL_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts
       */
      contacts?: {
          /**
           * Cdate
           * @description Contact creation date
           */
          cdate?: string;
          /**
           * Email
           * @description Contact email
           */
          email?: string;
          /**
           * First Name
           * @description Contact first name
           */
          firstName?: string;
          /**
           * Id
           * @description Contact ID
           */
          id?: number;
          /**
           * Last Name
           * @description Contact last name
           */
          lastName?: string;
          /**
           * Links
           * @description Links associated with the contact
           */
          links?: {
              /**
               * Bounce Logs
               * @description Link to bounce logs
               */
              bounceLogs?: string;
              /**
               * Contact Automations
               * @description Link to contact automations
               */
              contactAutomations?: string;
              /**
               * Contact Data
               * @description Link to contact data
               */
              contactData?: string;
              /**
               * Contact Deals
               * @description Link to contact deals
               */
              contactDeals?: string;
              /**
               * Contact Lists
               * @description Link to contact lists
               */
              contactLists?: string;
              /**
               * Contact Logs
               * @description Link to contact logs
               */
              contactLogs?: string;
              /**
               * Contact Tags
               * @description Link to contact tags
               */
              contactTags?: string;
              /**
               * Deals
               * @description Link to deals
               */
              deals?: string;
              /**
               * Field Values
               * @description Link to field values
               */
              fieldValues?: string;
              /**
               * Geo Ips
               * @description Link to geo IPs
               */
              geoIps?: string;
              /**
               * Notes
               * @description Link to notes
               */
              notes?: string;
              /**
               * Organization
               * @description Link to organization
               */
              organization?: string;
              /**
               * Plus Append
               * @description Link to plus append
               */
              plusAppend?: string;
              /**
               * Score Values
               * @description Link to score values
               */
              scoreValues?: string;
              /**
               * Tracking Logs
               * @description Link to tracking logs
               */
              trackingLogs?: string;
          };
          /**
           * Phone
           * @description Contact phone number
           */
          phone?: string;
          /**
           * Udate
           * @description Contact update date
           */
          udate?: string;
      }[];
      /**
       * Meta
       * @description Meta information
       */
      meta?: {
          /**
           * Page Input
           * @description Page input information
           */
          page_input?: {
              /**
               * Limit
               * @description Number of records per page
               */
              limit?: number;
              /**
               * Offset
               * @description Offset for pagination
               */
              offset?: number;
          };
          /**
           * Total
           * @description Total number of contacts
           */
          total?: number;
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
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_MANAGE_CONTACT_TAG tool input.
 */
type ACTIVE_CAMPAIGN_MANAGE_CONTACT_TAG_INPUT = {
  /**
   * Action
   * @description The action to perform on the tags
   * @enum {string}
   */
  action?: "Add" | "Remove";
  /**
   * Contact Email
   * Format: email
   * @description The email of the contact (used if contact_id is not provided)
   * @default null
   */
  contact_email: string | null;
  /**
   * Contact Id
   * @description The ID of the contact to manage tags for
   * @default null
   */
  contact_id: string | null;
  /**
   * Tags
   * @description Tags to add/remove. Can be a comma-separated string or list of strings
   */
  tags?: string | null;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_MANAGE_CONTACT_TAG tool output.
 */
type ACTIVE_CAMPAIGN_MANAGE_CONTACT_TAG_OUTPUT = {
  /**
   * Data
   * @description Additional data about the operation results
   * @default null
   */
  data: {
      [key: string]: unknown;
  } | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description A message describing the result of the operation
   */
  message?: string;
  /**
   * Success
   * @description Whether the operation was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_MANAGE_LIST_SUBSCRIPTION tool input.
 */
type ACTIVE_CAMPAIGN_MANAGE_LIST_SUBSCRIPTION_INPUT = {
  /**
   * Action
   * @description The action to perform (subscribe or unsubscribe)
   */
  action?: string;
  /**
   * Contact Id
   * @description ActiveCampaign ID of the contact (required if email not provided)
   * @default null
   */
  contact_id: string | null;
  /**
   * Email
   * @description Email address of the contact (required if contact_id not provided)
   * @default null
   */
  email: string | null;
  /**
   * List Id
   * @description The ID of the list to subscribe/unsubscribe from
   */
  list_id?: string;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_MANAGE_LIST_SUBSCRIPTION tool output.
 */
type ACTIVE_CAMPAIGN_MANAGE_LIST_SUBSCRIPTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contact List
       * @description Details of the contact list subscription
       */
      contactList: {
          /**
           * Contact
           * @description The ID of the contact
           */
          contact: string;
          /**
           * List
           * @description The ID of the list
           */
          list: string;
          /**
           * Status
           * @description The subscription status (1: subscribed, 2: unsubscribed)
           */
          status: string;
      };
      /**
       * Message
       * @description A message describing the result of the operation
       */
      message: string;
      /**
       * Success
       * @description Whether the operation was successful
       * @default true
       */
      success: boolean;
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
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_REMOVE_CONTACT_FROM_AUTOMATION tool input.
 */
type ACTIVE_CAMPAIGN_REMOVE_CONTACT_FROM_AUTOMATION_INPUT = {
  /**
   * Automation Id
   * @description ID of the automation to remove the contact from
   */
  automation_id?: string;
  /**
   * Contact Email
   * Format: email
   * @description Email address of the contact to remove from automation
   */
  contact_email?: string;
  /**
   * Run Remove Option
   * @description Specifies which automation runs to remove. 'all' removes from all runs, 'latest' removes from most recent run only.
   * @default all
   * @enum {string}
   */
  run_remove_option: "all" | "latest";
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_REMOVE_CONTACT_FROM_AUTOMATION tool output.
 */
type ACTIVE_CAMPAIGN_REMOVE_CONTACT_FROM_AUTOMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Automation Id
       * @description ID of the automation the contact was removed from
       */
      automation_id: string;
      /**
       * Contact Id
       * @description ID of the contact that was removed from the automation
       */
      contact_id: string;
      /**
       * Removed Runs
       * @description Number of automation runs the contact was removed from
       */
      removed_runs: number;
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
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_TRACK_EVENT tool input.
 */
type ACTIVE_CAMPAIGN_TRACK_EVENT_INPUT = {
  /**
   * Event Actid
   * @description Your ActiveCampaign Account ID (9-digit number).
   */
  event_actid?: string;
  /**
   * Event Contact Email
   * @description Email address of the contact for whom the event is being tracked. Must be an existing contact in ActiveCampaign.
   */
  event_contact_email?: string;
  /**
   * Event Key
   * @description Your Event Key from ActiveCampaign settings.
   */
  event_key?: string;
  /**
   * Event Name
   * @description Name of the event to track. This should be whitelisted in ActiveCampaign for automation usage.
   */
  event_name?: string;
  /**
   * Event Value
   * @description Additional data or value associated with the event (optional).
   * @default null
   */
  event_value: string | null;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_TRACK_EVENT tool output.
 */
type ACTIVE_CAMPAIGN_TRACK_EVENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Response message from the API.
       */
      message: string;
      /**
       * Success
       * @description Success status of the event tracking (1 for success).
       */
      success: number;
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
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_UPDATE_ACCOUNT tool input.
 */
type ACTIVE_CAMPAIGN_UPDATE_ACCOUNT_INPUT = {
  /**
   * Account Url
   * @description The updated URL associated with the account
   * @default null
   */
  accountUrl: string | null;
  /**
   * Account Id
   * @description The ID of the account to update
   */
  account_id?: string;
  /**
   * Fields
   * @description List of custom fields to update
   * @default null
   */
  fields: {
      /**
       * Custom Field Id
       * @description The ID of the custom field
       */
      customFieldId: number;
      /**
       * Field Currency
       * @description The currency for the field value, if applicable
       * @default null
       */
      fieldCurrency: string | null;
      /**
       * Field Value
       * @description The value for the custom field
       */
      fieldValue: string;
  }[] | null;
  /**
   * Name
   * @description The updated name of the account
   * @default null
   */
  name: string | null;
  /**
   * Owner
   * @description The ID of the user who owns the account
   * @default null
   */
  owner: number | null;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_UPDATE_ACCOUNT tool output.
 */
type ACTIVE_CAMPAIGN_UPDATE_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account
       * @description The updated account details
       */
      account: {
          /**
           * Account Url
           * @description The URL associated with the account
           * @default null
           */
          accountUrl: string | null;
          /**
           * Created Timestamp
           * @description The timestamp when the account was created
           */
          createdTimestamp: string;
          /**
           * Fields
           * @description List of custom fields associated with the account
           * @default null
           */
          fields: {
              /**
               * Custom Field Id
               * @description The ID of the custom field
               */
              customFieldId: number;
              /**
               * Field Currency
               * @description The currency for the field value, if applicable
               * @default null
               */
              fieldCurrency: string | null;
              /**
               * Field Value
               * @description The value for the custom field
               */
              fieldValue: string;
          }[] | null;
          /**
           * Id
           * @description The unique identifier of the created account
           */
          id: string;
          /**
           * Name
           * @description The name of the account
           */
          name: string;
          /**
           * Updated Timestamp
           * @description The timestamp when the account was last updated
           */
          updatedTimestamp: string;
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
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_UPSERT_ACCOUNT tool input.
 */
type ACTIVE_CAMPAIGN_UPSERT_ACCOUNT_INPUT = {
  /**
   * Account Url
   * @description The URL associated with the account
   */
  accountUrl?: string;
  /**
   * Fields
   * @description List of custom fields for the account
   * @default null
   */
  fields: {
      /**
       * Custom Field Id
       * @description The ID of the custom field
       */
      customFieldId: number;
      /**
       * Field Currency
       * @description The currency for the field value, if applicable
       * @default null
       */
      fieldCurrency: string | null;
      /**
       * Field Value
       * @description The value for the custom field
       */
      fieldValue: string;
  }[] | null;
  /**
   * Name
   * @description The name of the account
   */
  name?: string;
  /**
   * Owner
   * @description The ID of the user who owns the account
   * @default null
   */
  owner: number | null;
};

/**
 * Type of ACTIVE_CAMPAIGN's ACTIVE_CAMPAIGN_UPSERT_ACCOUNT tool output.
 */
type ACTIVE_CAMPAIGN_UPSERT_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account
       * @description The created or updated account details
       */
      account: {
          /**
           * Account Url
           * @description The URL associated with the account
           * @default null
           */
          accountUrl: string | null;
          /**
           * Created Timestamp
           * @description The timestamp when the account was created
           */
          createdTimestamp: string;
          /**
           * Fields
           * @description List of custom fields associated with the account
           * @default null
           */
          fields: {
              /**
               * Custom Field Id
               * @description The ID of the custom field
               */
              customFieldId: number;
              /**
               * Field Currency
               * @description The currency for the field value, if applicable
               * @default null
               */
              fieldCurrency: string | null;
              /**
               * Field Value
               * @description The value for the custom field
               */
              fieldValue: string;
          }[] | null;
          /**
           * Id
           * @description The unique identifier of the created account
           */
          id: string;
          /**
           * Name
           * @description The name of the account
           */
          name: string;
          /**
           * Updated Timestamp
           * @description The timestamp when the account was last updated
           */
          updatedTimestamp: string;
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
 * Type map of all available tool input types for toolkit "ACTIVE_CAMPAIGN".
 */
export type ACTIVE_CAMPAIGN_TOOL_INPUTS = {
  ADD_CONTACT_NOTE: ACTIVE_CAMPAIGN_ADD_CONTACT_NOTE_INPUT
  ADD_CONTACT_TO_AUTOMATION: ACTIVE_CAMPAIGN_ADD_CONTACT_TO_AUTOMATION_INPUT
  ADD_SECONDARY_CONTACT_TO_DEAL: ACTIVE_CAMPAIGN_ADD_SECONDARY_CONTACT_TO_DEAL_INPUT
  CREATE_ACCOUNT: ACTIVE_CAMPAIGN_CREATE_ACCOUNT_INPUT
  CREATE_CONTACT: ACTIVE_CAMPAIGN_CREATE_CONTACT_INPUT
  CREATE_CONTACT_TASK: ACTIVE_CAMPAIGN_CREATE_CONTACT_TASK_INPUT
  CREATE_DEAL_PIPELINE: ACTIVE_CAMPAIGN_CREATE_DEAL_PIPELINE_INPUT
  CREATE_DEAL_TASK_TYPE: ACTIVE_CAMPAIGN_CREATE_DEAL_TASK_TYPE_INPUT
  DELETE_ACCOUNT: ACTIVE_CAMPAIGN_DELETE_ACCOUNT_INPUT
  DELETE_DEAL_PIPELINE: ACTIVE_CAMPAIGN_DELETE_DEAL_PIPELINE_INPUT
  DELETE_DEAL_STAGE: ACTIVE_CAMPAIGN_DELETE_DEAL_STAGE_INPUT
  FIND_CONTACT: ACTIVE_CAMPAIGN_FIND_CONTACT_INPUT
  FIND_CONTACT_TASK: ACTIVE_CAMPAIGN_FIND_CONTACT_TASK_INPUT
  FIND_USER_ACTION: ACTIVE_CAMPAIGN_FIND_USER_ACTION_INPUT
  LIST_ALL_CONTACTS: ACTIVE_CAMPAIGN_LIST_ALL_CONTACTS_INPUT
  MANAGE_CONTACT_TAG: ACTIVE_CAMPAIGN_MANAGE_CONTACT_TAG_INPUT
  MANAGE_LIST_SUBSCRIPTION: ACTIVE_CAMPAIGN_MANAGE_LIST_SUBSCRIPTION_INPUT
  REMOVE_CONTACT_FROM_AUTOMATION: ACTIVE_CAMPAIGN_REMOVE_CONTACT_FROM_AUTOMATION_INPUT
  TRACK_EVENT: ACTIVE_CAMPAIGN_TRACK_EVENT_INPUT
  UPDATE_ACCOUNT: ACTIVE_CAMPAIGN_UPDATE_ACCOUNT_INPUT
  UPSERT_ACCOUNT: ACTIVE_CAMPAIGN_UPSERT_ACCOUNT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ACTIVE_CAMPAIGN".
 */
export type ACTIVE_CAMPAIGN_TOOL_OUTPUTS = {
  ADD_CONTACT_NOTE: ACTIVE_CAMPAIGN_ADD_CONTACT_NOTE_OUTPUT
  ADD_CONTACT_TO_AUTOMATION: ACTIVE_CAMPAIGN_ADD_CONTACT_TO_AUTOMATION_OUTPUT
  ADD_SECONDARY_CONTACT_TO_DEAL: ACTIVE_CAMPAIGN_ADD_SECONDARY_CONTACT_TO_DEAL_OUTPUT
  CREATE_ACCOUNT: ACTIVE_CAMPAIGN_CREATE_ACCOUNT_OUTPUT
  CREATE_CONTACT: ACTIVE_CAMPAIGN_CREATE_CONTACT_OUTPUT
  CREATE_CONTACT_TASK: ACTIVE_CAMPAIGN_CREATE_CONTACT_TASK_OUTPUT
  CREATE_DEAL_PIPELINE: ACTIVE_CAMPAIGN_CREATE_DEAL_PIPELINE_OUTPUT
  CREATE_DEAL_TASK_TYPE: ACTIVE_CAMPAIGN_CREATE_DEAL_TASK_TYPE_OUTPUT
  DELETE_ACCOUNT: ACTIVE_CAMPAIGN_DELETE_ACCOUNT_OUTPUT
  DELETE_DEAL_PIPELINE: ACTIVE_CAMPAIGN_DELETE_DEAL_PIPELINE_OUTPUT
  DELETE_DEAL_STAGE: ACTIVE_CAMPAIGN_DELETE_DEAL_STAGE_OUTPUT
  FIND_CONTACT: ACTIVE_CAMPAIGN_FIND_CONTACT_OUTPUT
  FIND_CONTACT_TASK: ACTIVE_CAMPAIGN_FIND_CONTACT_TASK_OUTPUT
  FIND_USER_ACTION: ACTIVE_CAMPAIGN_FIND_USER_ACTION_OUTPUT
  LIST_ALL_CONTACTS: ACTIVE_CAMPAIGN_LIST_ALL_CONTACTS_OUTPUT
  MANAGE_CONTACT_TAG: ACTIVE_CAMPAIGN_MANAGE_CONTACT_TAG_OUTPUT
  MANAGE_LIST_SUBSCRIPTION: ACTIVE_CAMPAIGN_MANAGE_LIST_SUBSCRIPTION_OUTPUT
  REMOVE_CONTACT_FROM_AUTOMATION: ACTIVE_CAMPAIGN_REMOVE_CONTACT_FROM_AUTOMATION_OUTPUT
  TRACK_EVENT: ACTIVE_CAMPAIGN_TRACK_EVENT_OUTPUT
  UPDATE_ACCOUNT: ACTIVE_CAMPAIGN_UPDATE_ACCOUNT_OUTPUT
  UPSERT_ACCOUNT: ACTIVE_CAMPAIGN_UPSERT_ACCOUNT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ACTIVE_CAMPAIGN toolkit.
 */
export const ACTIVE_CAMPAIGN = {
  slug: "active_campaign",
  tools: {
    /**
     * Add a note to a contact in activecampaign. the note will be associated with a contact as a subscriber type. the tool will first find the contact id using the provided email address and then create the note.
     */
    ADD_CONTACT_NOTE: "ACTIVE_CAMPAIGN_ADD_CONTACT_NOTE",
    /**
     * This tool adds an existing contact to a specific automation in activecampaign. it first looks up the contact by email address to get their id, then adds them to the specified automation using the /api/3/contactautomations endpoint.
     */
    ADD_CONTACT_TO_AUTOMATION: "ACTIVE_CAMPAIGN_ADD_CONTACT_TO_AUTOMATION",
    /**
     * This tool adds a secondary contact to an existing deal in activecampaign. if the deal has no primary contact set, this contact will be set as primary if no role is specified. the tool requires the user to have permission to manage deals and expects parameters like contact id (required), deal id (required), and role id (optional).
     */
    ADD_SECONDARY_CONTACT_TO_DEAL: "ACTIVE_CAMPAIGN_ADD_SECONDARY_CONTACT_TO_DEAL",
    /**
     * This tool creates a new account in activecampaign. it represents a business or organization and allows programmatic account creation. the tool requires the account name and optionally accepts parameters such as account url, owner, and custom fields.
     */
    CREATE_ACCOUNT: "ACTIVE_CAMPAIGN_CREATE_ACCOUNT",
    /**
     * Creates a new contact in activecampaign with the specified details. this action allows you to create a new contact with basic information like email, name, phone, organization details, and tags. the email address is the only required field, while all other fields are optional.
     */
    CREATE_CONTACT: "ACTIVE_CAMPAIGN_CREATE_CONTACT",
    /**
     * Create a task associated with a contact in activecampaign. this action allows you to create a new task that will be associated with a specific contact in your activecampaign account. the task can include details such as due date, title, description, and can be assigned to a specific user.
     */
    CREATE_CONTACT_TASK: "ACTIVE_CAMPAIGN_CREATE_CONTACT_TASK",
    /**
     * Creates a new deal pipeline in activecampaign. a deal pipeline is a visual representation of your sales process that helps organize and track deals through different stages. when you create a new pipeline, it automatically comes with three default stages: 'to contact,' 'in contact,' and 'follow up.'
     */
    CREATE_DEAL_PIPELINE: "ACTIVE_CAMPAIGN_CREATE_DEAL_PIPELINE",
    /**
     * This tool creates a new deal task type in activecampaign. deal task types are used to categorize and organize tasks associated with deals, and they are an important feature for maintaining a structured task management system within the deals pipeline. this action complements the existing active campaign create deal task action by enabling the creation of custom task types that can be used when creating deal tasks.
     */
    CREATE_DEAL_TASK_TYPE: "ACTIVE_CAMPAIGN_CREATE_DEAL_TASK_TYPE",
    /**
     * This tool deletes an existing account in activecampaign. it complements the existing active campaign create account and active campaign update account actions, providing full crud capabilities for account management. the action is irreversible and will permanently remove the account from the system.
     */
    DELETE_ACCOUNT: "ACTIVE_CAMPAIGN_DELETE_ACCOUNT",
    /**
     * This tool deletes an existing deal pipeline in activecampaign. when deleting a pipeline that has existing deals and stages associated with it, the delete request will remove all stages and deals associated with it. this tool complements the existing active campaign create deal pipeline action and provides the ability to manage the full lifecycle of deal pipelines in activecampaign.
     */
    DELETE_DEAL_PIPELINE: "ACTIVE_CAMPAIGN_DELETE_DEAL_PIPELINE",
    /**
     * This tool deletes an existing deal stage in activecampaign. it offers the ability to either move associated deals to a new pipeline and stage (when type is 'move') or completely delete the deals (when type is 'delete'). it complements the active campaign create deal stage action, ensuring full crud functionality for deal stages.
     */
    DELETE_DEAL_STAGE: "ACTIVE_CAMPAIGN_DELETE_DEAL_STAGE",
    /**
     * Find a specific contact in activecampaign using either their email address, id, or phone number. this action provides a more efficient way to find a specific contact instead of listing all contacts.
     */
    FIND_CONTACT: "ACTIVE_CAMPAIGN_FIND_CONTACT",
    /**
     * This tool allows you to find tasks associated with a specific contact in activecampaign. it searches for tasks using the contact task title and optionally filters by contact id. it returns an object with details such as task id, title, description, status, due date, owner type (which is subscriber for contact tasks), related id, created date, and updated date.
     */
    FIND_CONTACT_TASK: "ACTIVE_CAMPAIGN_FIND_CONTACT_TASK",
    /**
     * This tool allows you to find a user in activecampaign by their email address, returning detailed information including first name, last name, email, phone, organization details, and related resource links.
     */
    FIND_USER_ACTION: "ACTIVE_CAMPAIGN_FIND_USER_ACTION",
    /**
     * List all contacts in activecampaign. this action allows you to: 1. list all contacts with pagination 2. search contacts by name, organization, phone, or email 3. filter contacts by email pattern 4. sort contacts by various fields 5. filter contacts by creation and update dates 6. filter contacts by list, tag, or segment
     */
    LIST_ALL_CONTACTS: "ACTIVE_CAMPAIGN_LIST_ALL_CONTACTS",
    /**
     * Manage tags for a contact in activecampaign. this action allows adding or removing tags from a contact. the action can be performed using either the contact's id or email address.
     */
    MANAGE_CONTACT_TAG: "ACTIVE_CAMPAIGN_MANAGE_CONTACT_TAG",
    /**
     * Subscribe or unsubscribe a contact from a list in activecampaign. the tool requires either a contact's email address or contact id, and can perform either a subscribe or unsubscribe action on a specified list.
     */
    MANAGE_LIST_SUBSCRIPTION: "ACTIVE_CAMPAIGN_MANAGE_LIST_SUBSCRIPTION",
    /**
     * This tool removes a contact from a specified automation in activecampaign. it first looks up the contact by email address to get their id, then removes them from the specified automation using the /api/3/contactautomations endpoint. the run remove option parameter determines whether to remove them from all runs or just the latest run of the automation.
     */
    REMOVE_CONTACT_FROM_AUTOMATION: "ACTIVE_CAMPAIGN_REMOVE_CONTACT_FROM_AUTOMATION",
    /**
     * This tool creates a custom website or application event in activecampaign by recording events through a post api endpoint. it allows tracking of specific actions performed by contacts, and includes parameters such as event key, event actid, event name, event value, and event contact email for authentication, recording, and contextual information. the tool aids in automating workflows and monitoring user engagement.
     */
    TRACK_EVENT: "ACTIVE_CAMPAIGN_TRACK_EVENT",
    /**
     * This tool updates an existing account in activecampaign. it allows modification of account details such as name, website url, and custom fields. it complements the existing active campaign create account action and provides the ability to modify account details after creation, which is a crucial functionality for account management.
     */
    UPDATE_ACCOUNT: "ACTIVE_CAMPAIGN_UPDATE_ACCOUNT",
    /**
     * This tool creates a new account if it doesn't exist or updates an existing account in activecampaign. it is particularly useful to ensure an account exists without creating duplicates, combining the functionality of create and update operations into a single action.
     */
    UPSERT_ACCOUNT: "ACTIVE_CAMPAIGN_UPSERT_ACCOUNT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ACTIVE_CAMPAIGN".
 */
export type ACTIVE_CAMPAIGN_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ACTIVE_CAMPAIGN".
 */
export type ACTIVE_CAMPAIGN_TRIGGER_EVENTS = {}
