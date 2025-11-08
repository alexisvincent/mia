// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FORMBRICKS's FORMBRICKS_CREATE_ACTION_CLASS tool input.
 */
type FORMBRICKS_CREATE_ACTION_CLASS_INPUT = {
  /**
   * Description
   * @description Optional description of the Action Class
   * @default null
   */
  description: string | null;
  /**
   * Environment Id
   * @description Environment ID where this action class belongs
   */
  environmentId?: string;
  /**
   * Key
   * @description Unique key identifier for the Action Class
   */
  key?: string;
  /**
   * Name
   * @description Name of the Action Class
   */
  name?: string;
  /**
   * No Code Config
   * @description Optional configuration for no-code action type
   * @default null
   */
  noCodeConfig: {
      [key: string]: unknown;
  } | null;
  /**
   * Type
   * @description Type of the Action Class, either 'code' or 'noCode'
   * @enum {string}
   */
  type?: "code" | "noCode";
};

/**
 * Type of FORMBRICKS's FORMBRICKS_CREATE_ACTION_CLASS tool output.
 */
type FORMBRICKS_CREATE_ACTION_CLASS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when created
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the Action Class
       * @default null
       */
      description: string | null;
      /**
       * Environment Id
       * @description Identifier of the environment
       */
      environmentId: string;
      /**
       * Id
       * @description Unique identifier of the Action Class
       */
      id: string;
      /**
       * Key
       * @description Unique key of the Action Class
       * @default null
       */
      key: string | null;
      /**
       * Name
       * @description Name of the Action Class
       */
      name: string;
      /**
       * No Code Config
       * @description Configuration for no-code action type
       * @default null
       */
      noCodeConfig: {
          [key: string]: unknown;
      } | null;
      /**
       * Type
       * @description Type of the Action Class
       * @enum {string}
       */
      type: "code" | "noCode";
      /**
       * Updated At
       * @description ISO 8601 timestamp when last updated
       */
      updatedAt: string;
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
 * Type of FORMBRICKS's FORMBRICKS_CREATE_ATTRIBUTE_CLASS tool input.
 */
type FORMBRICKS_CREATE_ATTRIBUTE_CLASS_INPUT = {
  /**
   * Description
   * @description Optional description
   * @default null
   */
  description: string | null;
  /**
   * Environment Id
   * @description Environment ID where this attribute belongs
   */
  environmentId?: string;
  /**
   * Is Unique
   * @description Whether the attribute value must be unique
   * @default null
   */
  isUnique: boolean | null;
  /**
   * Key
   * @description Unique key for the attribute class
   */
  key?: string;
  /**
   * Name
   * @description Display name for the attribute class
   * @default null
   */
  name: string | null;
  /**
   * Type
   * @description Type of attribute class; must be 'custom' for user-defined
   * @default custom
   * @constant
   */
  type: "custom";
};

/**
 * Type of FORMBRICKS's FORMBRICKS_CREATE_ATTRIBUTE_CLASS tool output.
 */
type FORMBRICKS_CREATE_ATTRIBUTE_CLASS_OUTPUT = {
  /**
   * Data
   * @description Created attribute class data
   */
  data?: {
      /**
       * Archived
       * @description Archive status of the attribute class
       */
      archived: boolean;
      /**
       * Created At
       * @description ISO 8601 timestamp when created
       */
      createdAt: string;
      /**
       * Description
       * @description Optional description of the attribute class
       * @default null
       */
      description: string | null;
      /**
       * Environment Id
       * @description Identifier for the environment
       */
      environmentId: string;
      /**
       * Id
       * @description Unique identifier of the attribute class
       */
      id: string;
      /**
       * Name
       * @description Name of the attribute class
       */
      name: string;
      /**
       * Type
       * @description Data type of the attribute class
       */
      type: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when last updated
       */
      updatedAt: string;
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
 * Type of FORMBRICKS's FORMBRICKS_CREATE_CONTACT tool input.
 */
type FORMBRICKS_CREATE_CONTACT_INPUT = {
  /**
   * Attributes
   * @description Key/value attributes for the contact; must include 'email' and all keys must exist in the environment.
   */
  attributes?: {
      [key: string]: string;
  };
  /**
   * Environment Id
   * @description Environment ID to create the contact in.
   */
  environmentId?: string;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_CREATE_CONTACT tool output.
 */
type FORMBRICKS_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attributes
       * @description Returned contact attributes (e.g., email, firstName, lastName, userId).
       */
      attributes: {
          [key: string]: string;
      };
      /**
       * Created At
       * @description ISO 8601 timestamp when created.
       */
      createdAt: string;
      /**
       * Environment Id
       * @description Environment ID.
       */
      environmentId: string;
      /**
       * Id
       * @description Contact ID.
       */
      id: string;
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
 * Type of FORMBRICKS's FORMBRICKS_CREATE_DISPLAY tool input.
 */
type FORMBRICKS_CREATE_DISPLAY_INPUT = {
  /**
   * Environment Id
   * @description The ID of the environment.
   */
  environmentId?: string;
  /**
   * Survey Id
   * @description Survey ID to create the display for.
   */
  surveyId?: string;
  /**
   * User Id
   * @description (Optional) User ID to link the display to.
   * @default null
   */
  userId: string | null;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_CREATE_DISPLAY tool output.
 */
type FORMBRICKS_CREATE_DISPLAY_OUTPUT = {
  /**
   * Data
   * @description Response wrapper containing display information.
   */
  data?: {
      /**
       * Id
       * @description The newly created display ID.
       */
      id: string;
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
 * Type of FORMBRICKS's FORMBRICKS_CREATE_RESPONSE tool input.
 */
type FORMBRICKS_CREATE_RESPONSE_INPUT = {
  /**
   * Created At
   * @description (Optional) Creation timestamp in ISO 8601 format
   * @default null
   */
  createdAt: string | null;
  /**
   * Data
   * @description The answers/data for the survey response
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Display Id
   * @description (Optional) Display ID for the response
   * @default null
   */
  displayId: string | null;
  /**
   * Ending Id
   * @description (Optional) ID of the ending reached
   * @default null
   */
  endingId: string | null;
  /**
   * Finished
   * @description Whether the response is finished
   */
  finished?: boolean;
  /**
   * Language
   * @description (Optional) Language code of the response, e.g., 'en'
   * @default null
   */
  language: string | null;
  /**
   * Meta
   * @description (Optional) Metadata about the response, e.g., source, url, userAgent, country
   * @default null
   */
  meta: {
      [key: string]: unknown;
  } | null;
  /**
   * Single Use Id
   * @description (Optional) Single-use ID for the response
   * @default null
   */
  singleUseId: string | null;
  /**
   * Survey Id
   * @description The ID of the survey for which to create the response
   */
  surveyId?: string;
  /**
   * Ttc
   * @description (Optional) Time-to-complete metrics
   * @default null
   */
  ttc: {
      [key: string]: unknown;
  } | null;
  /**
   * Updated At
   * @description (Optional) Last update timestamp in ISO 8601 format
   * @default null
   */
  updatedAt: string | null;
  /**
   * Variables
   * @description (Optional) Custom variables associated with the response
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_CREATE_RESPONSE tool output.
 */
type FORMBRICKS_CREATE_RESPONSE_OUTPUT = {
  /**
   * Contact Attributes
   * @description (Optional) Attributes of the contact
   * @default null
   */
  contactAttributes: {
      [key: string]: unknown;
  } | null;
  /**
   * Contact Id
   * @description (Optional) Contact ID if linked
   * @default null
   */
  contactId: string | null;
  /**
   * Created At
   * @description Creation timestamp of the response
   */
  createdAt?: string;
  /**
   * Data
   * @description The answers/data for the survey response
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Display Id
   * @description (Optional) Display ID for the response
   * @default null
   */
  displayId: string | null;
  /**
   * Ending Id
   * @description (Optional) Ending ID reached
   * @default null
   */
  endingId: string | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Finished
   * @description Whether the response is finished
   */
  finished?: boolean;
  /**
   * Id
   * @description The ID of the created response
   */
  id?: string;
  /**
   * Language
   * @description (Optional) Language code of the response
   * @default null
   */
  language: string | null;
  /**
   * Meta
   * @description (Optional) Metadata about the response
   * @default null
   */
  meta: {
      [key: string]: unknown;
  } | null;
  /**
   * Single Use Id
   * @description (Optional) Single-use ID for the response
   * @default null
   */
  singleUseId: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Survey Id
   * @description The survey ID associated with the response
   */
  surveyId?: string;
  /**
   * Ttc
   * @description (Optional) Time-to-complete metrics
   * @default null
   */
  ttc: {
      [key: string]: unknown;
  } | null;
  /**
   * Updated At
   * @description Last update timestamp of the response
   */
  updatedAt?: string;
  /**
   * Variables
   * @description (Optional) Custom variables associated with the response
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_CREATE_SURVEY tool input.
 */
type FORMBRICKS_CREATE_SURVEY_INPUT = {
  /**
   * Environment Id
   * @description Environment ID to create the survey in
   */
  environmentId?: string;
  /**
   * Name
   * @description Survey name
   */
  name?: string;
  /**
   * Questions
   * @description List of questions in the survey
   */
  questions?: ({
      /**
       * Choices
       * @description List of choices for multiple choice questions
       * @default null
       */
      choices: ({
          /**
           * Id
           * @description Choice ID
           */
          id: string;
          /**
           * Label
           * @description Localized labels for the choice
           */
          label: {
              [key: string]: string;
          };
          /**
           * Shuffle Option
           * @description Shuffle option for the choice
           * @default null
           */
          shuffleOption: string | null;
      } & {
          [key: string]: unknown;
      })[] | null;
      /**
       * Headline
       * @description Localized question headline text
       */
      headline: {
          [key: string]: string;
      };
      /**
       * Id
       * @description Question ID
       */
      id: string;
      /**
       * Input Type
       * @description Input type for openText questions
       * @default null
       */
      inputType: string | null;
      /**
       * Placeholder
       * @description Localized placeholder text for openText questions
       * @default null
       */
      placeholder: {
          [key: string]: string;
      } | null;
      /**
       * Required
       * @description Whether this question requires an answer
       */
      required: boolean;
      /**
       * Subheader
       * @description Localized question subheader text
       * @default null
       */
      subheader: {
          [key: string]: string;
      } | null;
      /**
       * Type
       * @description Question type, e.g., 'openText', 'multipleChoiceMulti'
       */
      type: string;
  } & {
      [key: string]: unknown;
  })[];
  /**
   * Type
   * @description Survey display type
   * @enum {string}
   */
  type?: "link" | "app";
};

/**
 * Type of FORMBRICKS's FORMBRICKS_CREATE_SURVEY tool output.
 */
type FORMBRICKS_CREATE_SURVEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO timestamp when created
       */
      createdAt: string;
      /**
       * Created By
       * @description User ID of the creator
       */
      createdBy: string;
      /**
       * Environment Id
       * @description Environment ID
       */
      environmentId: string;
      /**
       * Id
       * @description Survey ID
       */
      id: string;
      /**
       * Name
       * @description Survey name
       */
      name: string;
      /**
       * Questions
       * @description List of questions in the survey
       */
      questions: ({
          /**
           * Choices
           * @description List of choices for multiple choice questions
           * @default null
           */
          choices: ({
              /**
               * Id
               * @description Choice ID
               */
              id: string;
              /**
               * Label
               * @description Localized labels for the choice
               */
              label: {
                  [key: string]: string;
              };
              /**
               * Shuffle Option
               * @description Shuffle option for the choice
               * @default null
               */
              shuffleOption: string | null;
          } & {
              [key: string]: unknown;
          })[] | null;
          /**
           * Headline
           * @description Localized question headline text
           */
          headline: {
              [key: string]: string;
          };
          /**
           * Id
           * @description Question ID
           */
          id: string;
          /**
           * Input Type
           * @description Input type for openText questions
           * @default null
           */
          inputType: string | null;
          /**
           * Placeholder
           * @description Localized placeholder text for openText questions
           * @default null
           */
          placeholder: {
              [key: string]: string;
          } | null;
          /**
           * Required
           * @description Whether this question requires an answer
           */
          required: boolean;
          /**
           * Subheader
           * @description Localized question subheader text
           * @default null
           */
          subheader: {
              [key: string]: string;
          } | null;
          /**
           * Type
           * @description Question type, e.g., 'openText', 'multipleChoiceMulti'
           */
          type: string;
      } & {
          [key: string]: unknown;
      })[];
      /**
       * Status
       * @description Survey status, e.g., 'inProgress'
       */
      status: string;
      /**
       * Type
       * @description Survey display type
       */
      type: string;
      /**
       * Updated At
       * @description ISO timestamp when last updated
       */
      updatedAt: string;
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
 * Type of FORMBRICKS's FORMBRICKS_CREATE_WEBHOOK tool input.
 */
type FORMBRICKS_CREATE_WEBHOOK_INPUT = {
  /**
   * Environment Id
   * @description ID of the associated environment.
   */
  environmentId?: string;
  /**
   * Name
   * @description Name of the webhook.
   */
  name?: string;
  /**
   * Source
   * @description Source of the webhook; one of 'user', 'zapier', 'make', 'n8n'.
   * @enum {string}
   */
  source?: "user" | "zapier" | "make" | "n8n";
  /**
   * Survey Ids
   * @description List of survey IDs the webhook listens to.
   */
  surveyIds?: string[];
  /**
   * Triggers
   * @description List of events that will fire the webhook; allowed values: responseCreated, responseUpdated, responseFinished
   */
  triggers?: string[];
  /**
   * Url
   * @description Target URL for the webhook; must be a valid URI.
   */
  url?: string;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_CREATE_WEBHOOK tool output.
 */
type FORMBRICKS_CREATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the webhook was created.
       */
      createdAt: string;
      /**
       * Environment Id
       * @description ID of the associated environment.
       */
      environmentId: string;
      /**
       * Id
       * @description Unique identifier for the webhook.
       */
      id: string;
      /**
       * Name
       * @description Name of the webhook, if set.
       * @default null
       */
      name: string | null;
      /**
       * Source
       * @description Source of the webhook; e.g., 'user'.
       */
      source: string;
      /**
       * Survey Ids
       * @description List of survey IDs the webhook listens to.
       */
      surveyIds: string[];
      /**
       * Triggers
       * @description Events that trigger the webhook.
       */
      triggers: string[];
      /**
       * Updated At
       * @description ISO 8601 timestamp when the webhook was last updated.
       */
      updatedAt: string;
      /**
       * Url
       * @description URL that will receive the webhook calls.
       */
      url: string;
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
 * Type of FORMBRICKS's FORMBRICKS_DELETE_ATTRIBUTE_CLASS tool input.
 */
type FORMBRICKS_DELETE_ATTRIBUTE_CLASS_INPUT = {
  /**
   * Id
   * @description ID of the attribute class to delete.
   */
  id?: string;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_DELETE_ATTRIBUTE_CLASS tool output.
 */
type FORMBRICKS_DELETE_ATTRIBUTE_CLASS_OUTPUT = {
  /**
   * Data
   * @description Deleted attribute class object.
   */
  data?: {
      /**
       * Archived
       * @description Whether the attribute class is archived.
       */
      archived: boolean;
      /**
       * Created At
       * Format: date-time
       * @description ISO 8601 timestamp when the attribute class was created.
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the attribute class.
       * @default null
       */
      description: string | null;
      /**
       * Environment Id
       * @description Environment ID associated with the attribute class.
       */
      environmentId: string;
      /**
       * Id
       * @description ID of the attribute class.
       */
      id: string;
      /**
       * Name
       * @description Name of the attribute class.
       */
      name: string;
      /**
       * Type
       * @description Type of the attribute class.
       */
      type: string;
      /**
       * Updated At
       * Format: date-time
       * @description ISO 8601 timestamp when the attribute class was last updated.
       */
      updatedAt: string;
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
 * Type of FORMBRICKS's FORMBRICKS_DELETE_PERSON tool input.
 */
type FORMBRICKS_DELETE_PERSON_INPUT = {
  /**
   * Person Id
   * @description ID of the person to delete.
   */
  personId?: string;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_DELETE_PERSON tool output.
 */
type FORMBRICKS_DELETE_PERSON_OUTPUT = {
  /**
   * Data
   * @description Data returned when a person is successfully deleted.
   */
  data?: {
      /**
       * Success
       * @description Confirmation message that the person was deleted.
       */
      success: string;
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
 * Type of FORMBRICKS's FORMBRICKS_DELETE_RESPONSE tool input.
 */
type FORMBRICKS_DELETE_RESPONSE_INPUT = {
  /**
   * Id
   * @description Unique identifier of the response to delete
   */
  id?: string;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_DELETE_RESPONSE tool output.
 */
type FORMBRICKS_DELETE_RESPONSE_OUTPUT = {
  /**
   * Created At
   * @description Creation timestamp of the response (ISO 8601)
   */
  createdAt?: string;
  /**
   * Data
   * @description Answers/data keyed by question ID
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
   * Finished
   * @description Whether the response was completed
   */
  finished?: boolean;
  /**
   * Id
   * @description ID of the deleted response
   */
  id?: string;
  /**
   * Language
   * @description Language code of the response
   * @default null
   */
  language: string | null;
  /**
   * Meta
   * @description Metadata about the response
   */
  meta?: {
      [key: string]: unknown;
  };
  /**
   * Person
   * @description Person details associated with the response
   */
  person?: {
      /**
       * Attributes
       * @description Person attributes snapshot at response time
       */
      attributes: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description Person creation timestamp (ISO 8601)
       */
      createdAt: string;
      /**
       * Environment Id
       * @description Environment ID
       */
      environmentId: string;
      /**
       * Id
       * @description Person ID
       */
      id: string;
      /**
       * Updated At
       * @description Person last update timestamp (ISO 8601)
       */
      updatedAt: string;
      /**
       * User Id
       * @description External user identifier
       * @default null
       */
      userId: string | null;
  };
  /**
   * Person Attributes
   * @description Flattened person attributes
   */
  personAttributes?: {
      [key: string]: unknown;
  };
  /**
   * Single Use Id
   * @description Single-use link ID, if any
   * @default null
   */
  singleUseId: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Survey Id
   * @description The survey ID associated with the response
   */
  surveyId?: string;
  /**
   * Tags
   * @description List of tags attached to the response
   */
  tags?: string[];
  /**
   * Ttc
   * @description Time-to-complete metrics per question
   */
  ttc?: {
      [key: string]: unknown;
  };
  /**
   * Updated At
   * @description Last update timestamp of the response (ISO 8601)
   */
  updatedAt?: string;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_DELETE_SURVEY tool input.
 */
type FORMBRICKS_DELETE_SURVEY_INPUT = {
  /**
   * Id
   * @description The ID of the survey to delete
   */
  id?: string;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_DELETE_SURVEY tool output.
 */
type FORMBRICKS_DELETE_SURVEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the survey was created
       */
      createdAt: string;
      /**
       * Environment Id
       * @description Environment ID the survey belongs to
       */
      environmentId: string;
      /**
       * Id
       * @description The unique identifier of the deleted survey
       */
      id: string;
      /**
       * Name
       * @description Name of the deleted survey
       */
      name: string;
      /**
       * Status
       * @description Survey status, e.g., 'draft', 'inProgress', 'closed'
       */
      status: string;
      /**
       * Type
       * @description Survey display type, e.g., 'link' or 'embedded'
       */
      type: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the survey was last updated
       */
      updatedAt: string;
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
 * Type of FORMBRICKS's FORMBRICKS_DELETE_TEAM tool input.
 */
type FORMBRICKS_DELETE_TEAM_INPUT = {
  /**
   * Organization Id
   * @description ID of the organization.
   */
  organization_id?: string;
  /**
   * Team Id
   * @description ID of the team to delete.
   */
  team_id?: string;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_DELETE_TEAM tool output.
 */
type FORMBRICKS_DELETE_TEAM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description Timestamp when the team was created (ISO 8601).
       */
      createdAt: string;
      /**
       * Id
       * @description ID of the team.
       */
      id: string;
      /**
       * Name
       * @description Name of the team.
       */
      name: string;
      /**
       * Organization Id
       * @description ID of the organization.
       */
      organizationId: string;
      /**
       * Updated At
       * Format: date-time
       * @description Timestamp when the team was last updated (ISO 8601).
       */
      updatedAt: string;
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
 * Type of FORMBRICKS's FORMBRICKS_DELETE_WEBHOOK tool input.
 */
type FORMBRICKS_DELETE_WEBHOOK_INPUT = {
  /**
   * Id
   * @description The ID of the webhook to delete.
   */
  id?: string;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_DELETE_WEBHOOK tool output.
 */
type FORMBRICKS_DELETE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * Format: date-time
       * @description ISO datetime when the webhook was created.
       */
      createdAt: string;
      /**
       * Environment Id
       * @description The environment ID associated with the webhook.
       */
      environmentId: string;
      /**
       * Id
       * @description The ID of the deleted webhook.
       */
      id: string;
      /**
       * Name
       * @description The name of the deleted webhook.
       * @default null
       */
      name: string | null;
      /**
       * Source
       * @description The source of the webhook.
       * @enum {string}
       */
      source: "user" | "zapier" | "make" | "n8n";
      /**
       * Survey Ids
       * @description List of survey IDs associated with the webhook.
       */
      surveyIds: string[];
      /**
       * Triggers
       * @description The triggers that fired the webhook.
       */
      triggers: string[];
      /**
       * Updated At
       * Format: date-time
       * @description ISO datetime when the webhook was last updated.
       */
      updatedAt: string;
      /**
       * Url
       * @description The URL of the deleted webhook.
       */
      url: string;
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
 * Type of FORMBRICKS's FORMBRICKS_GET_ACCOUNT_INFO tool input.
 */
type FORMBRICKS_GET_ACCOUNT_INFO_INPUT = object;

/**
 * Type of FORMBRICKS's FORMBRICKS_GET_ACCOUNT_INFO tool output.
 */
type FORMBRICKS_GET_ACCOUNT_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * App Setup Completed
       * @description Whether app setup is completed
       */
      appSetupCompleted: boolean;
      /**
       * Created At
       * @description Account creation timestamp
       */
      createdAt: string;
      /**
       * Id
       * @description Unique account identifier
       */
      id: string;
      /**
       * Project
       * @description Associated project information
       */
      project: {
          /**
           * Id
           * @description Project ID
           */
          id: string;
          /**
           * Name
           * @description Project name
           */
          name: string;
      };
      /**
       * Type
       * @description Environment or account type (e.g., 'production')
       */
      type: string;
      /**
       * Updated At
       * @description Last update timestamp
       */
      updatedAt: string;
      /**
       * Website Setup Completed
       * @description Whether website setup is completed
       */
      websiteSetupCompleted: boolean;
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
 * Type of FORMBRICKS's FORMBRICKS_GET_ALL_CONTACTS tool input.
 */
type FORMBRICKS_GET_ALL_CONTACTS_INPUT = object;

/**
 * Type of FORMBRICKS's FORMBRICKS_GET_ALL_CONTACTS tool output.
 */
type FORMBRICKS_GET_ALL_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description List of contact objects
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the contact was created
       */
      createdAt: string;
      /**
       * Environment Id
       * @description ID of the environment
       */
      environmentId: string;
      /**
       * Id
       * @description Unique contact identifier
       */
      id: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the contact was last updated
       */
      updatedAt: string;
      /**
       * User Id
       * @description Associated user ID; may be null if no user linked
       * @default null
       */
      userId: string | null;
  }[];
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
 * Type of FORMBRICKS's FORMBRICKS_GET_ME tool input.
 */
type FORMBRICKS_GET_ME_INPUT = object;

/**
 * Type of FORMBRICKS's FORMBRICKS_GET_ME tool output.
 */
type FORMBRICKS_GET_ME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Environments
       * @description List of environments within the organization
       */
      environments: {
          /**
           * App Setup Completed
           * @description Whether initial app setup is completed
           */
          appSetupCompleted: boolean;
          /**
           * Created At
           * @description ISO 8601 creation timestamp
           */
          createdAt: string;
          /**
           * Id
           * @description Environment ID
           */
          id: string;
          /**
           * Name
           * @description Environment name
           */
          name: string;
          /**
           * Project
           * @description Associated project information when available.
           * @default null
           */
          project: {
              /**
               * Id
               * @description Project ID
               */
              id: string;
              /**
               * Name
               * @description Project name
               */
              name: string;
          } | null;
          /**
           * Type
           * @description Environment type (e.g., 'production')
           */
          type: string;
          /**
           * Updated At
           * @description ISO 8601 last update timestamp
           */
          updatedAt: string;
          /**
           * Website Setup Completed
           * @description Whether website setup is completed
           */
          websiteSetupCompleted: boolean;
      }[];
      /**
       * Organization Access
       * @description Access level of the authenticated API key for this organization
       */
      organizationAccess: string;
      /**
       * Organization Id
       * @description Organization ID
       */
      organizationId: string;
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
 * Type of FORMBRICKS's FORMBRICKS_GET_RESPONSES tool input.
 */
type FORMBRICKS_GET_RESPONSES_INPUT = {
  /**
   * Contact Id
   * @description Filter responses by contact ID
   * @default null
   */
  contactId: string | null;
  /**
   * End Date
   * @description ISO 8601 end date to filter responses (inclusive)
   * @default null
   */
  endDate: string | null;
  /**
   * Limit
   * @description Number of items to return (1-250)
   * @default 50
   */
  limit: number | null;
  /**
   * Order
   * @description Sort order: 'asc' (ascending) or 'desc' (descending)
   * @default desc
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Skip
   * @description Number of items to skip for pagination
   * @default 0
   */
  skip: number | null;
  /**
   * Sort By
   * @description Field to sort by: 'createdAt' or 'updatedAt'
   * @default createdAt
   * @enum {string|null}
   */
  sortBy: "createdAt" | "updatedAt" | null;
  /**
   * Start Date
   * @description ISO 8601 start date to filter responses (inclusive)
   * @default null
   */
  startDate: string | null;
  /**
   * Survey Id
   * @description Filter responses by survey ID
   * @default null
   */
  surveyId: string | null;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_GET_RESPONSES tool output.
 */
type FORMBRICKS_GET_RESPONSES_OUTPUT = {
  /**
   * Data
   * @description List of response objects
   */
  data?: {
      /**
       * Contact Attributes
       * @description Snapshot of contact attributes at time of response
       * @default {}
       */
      contactAttributes: {
          [key: string]: unknown;
      };
      /**
       * Contact Id
       * @description ID of the contact who responded
       * @default null
       */
      contactId: string | null;
      /**
       * Created At
       * @description ISO 8601 creation timestamp
       */
      createdAt: string;
      /**
       * Data
       * @description Mapping of question IDs to answers
       */
      data: {
          [key: string]: unknown;
      };
      /**
       * Display Id
       * @description Display identifier for the response
       * @default null
       */
      displayId: string | null;
      /**
       * Ending Id
       * @description ID of the ending reached in the survey
       * @default null
       */
      endingId: string | null;
      /**
       * Finished
       * @description Whether the response was completed
       */
      finished: boolean;
      /**
       * Id
       * @description Unique response identifier
       */
      id: string;
      /**
       * Language
       * @description Language code of the response
       * @default null
       */
      language: string | null;
      /**
       * Meta
       * @description Additional response metadata
       */
      meta: {
          [key: string]: unknown;
      };
      /**
       * Single Use Id
       * @description Single-use identifier for response
       * @default null
       */
      singleUseId: string | null;
      /**
       * Survey Id
       * @description ID of the survey
       */
      surveyId: string;
      /**
       * Ttc
       * @description Time-to-complete per question (questionId→seconds)
       * @default {}
       */
      ttc: {
          [key: string]: unknown;
      };
      /**
       * Updated At
       * @description ISO 8601 last update timestamp
       */
      updatedAt: string;
      /**
       * Variables
       * @description Custom variables included in the response
       * @default {}
       */
      variables: {
          [key: string]: unknown;
      };
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata
   */
  meta?: {
      /**
       * Limit
       * @description Limit used for this request
       */
      limit: number;
      /**
       * Offset
       * @description Offset used for this request
       */
      offset: number;
      /**
       * Total
       * @description Total number of matching responses
       */
      total: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_GET_ROLES tool input.
 */
type FORMBRICKS_GET_ROLES_INPUT = object;

/**
 * Type of FORMBRICKS's FORMBRICKS_GET_ROLES tool output.
 */
type FORMBRICKS_GET_ROLES_OUTPUT = {
  /**
   * Data
   * @description List of available role names
   */
  data?: string[];
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
 * Type of FORMBRICKS's FORMBRICKS_GET_USERS tool input.
 */
type FORMBRICKS_GET_USERS_INPUT = {
  /**
   * Limit
   * @description Maximum number of users to return per page; between 1 and 250.
   * @default null
   */
  limit: number | null;
  /**
   * Organization Id
   * @description Identifier of the organization (ignored on Cloud).
   * @default null
   */
  organizationId: string | null;
  /**
   * Skip
   * @description Number of users to skip (offset).
   * @default null
   */
  skip: number | null;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_GET_USERS tool output.
 */
type FORMBRICKS_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description Array of user/person objects.
   */
  data?: {
      /**
       * Attributes
       * @description Attributes associated with the person.
       */
      attributes?: {
          [key: string]: unknown;
      } | null;
      /**
       * Created At
       * @description ISO 8601 timestamp when the person was created.
       */
      createdAt: string;
      /**
       * Environment Id
       * @description Environment ID the person belongs to.
       */
      environmentId: string;
      /**
       * Id
       * @description Unique person identifier.
       */
      id: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the person was last updated.
       */
      updatedAt: string;
      /**
       * User Id
       * @description External user identifier if available.
       * @default null
       */
      userId: string | null;
  }[];
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
 * Type of FORMBRICKS's FORMBRICKS_GET_WEBHOOK tool input.
 */
type FORMBRICKS_GET_WEBHOOK_INPUT = {
  /**
   * Id
   * @description Unique identifier of the webhook to retrieve.
   */
  id?: string;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_GET_WEBHOOK tool output.
 */
type FORMBRICKS_GET_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the webhook was created.
       */
      createdAt: string;
      /**
       * Environment Id
       * @description Environment ID associated with the webhook.
       */
      environmentId: string;
      /**
       * Id
       * @description Unique identifier of the webhook.
       */
      id: string;
      /**
       * Name
       * @description Name of the webhook, if set.
       * @default null
       */
      name: string | null;
      /**
       * Source
       * @description Source of the webhook; one of 'user', 'zapier', 'make', 'n8n'.
       */
      source: string;
      /**
       * Survey Ids
       * @description List of survey IDs that this webhook listens to.
       */
      surveyIds: string[];
      /**
       * Triggers
       * @description List of triggers that invoke the webhook.
       */
      triggers: string[];
      /**
       * Updated At
       * @description ISO 8601 timestamp when the webhook was last updated.
       */
      updatedAt: string;
      /**
       * Url
       * @description Target URL for the webhook messages.
       */
      url: string;
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
 * Type of FORMBRICKS's FORMBRICKS_LIST_ACTION_CLASSES tool input.
 */
type FORMBRICKS_LIST_ACTION_CLASSES_INPUT = object;

/**
 * Type of FORMBRICKS's FORMBRICKS_LIST_ACTION_CLASSES tool output.
 */
type FORMBRICKS_LIST_ACTION_CLASSES_OUTPUT = {
  /**
   * Data
   * @description List of action class objects
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the action class was created
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the action class
       * @default null
       */
      description: string | null;
      /**
       * Environment Id
       * @description Environment ID associated with the action class
       */
      environmentId: string;
      /**
       * Id
       * @description Unique identifier of the action class
       */
      id: string;
      /**
       * Name
       * @description Name of the action class
       */
      name: string;
      /**
       * No Code Config
       * @description No-code configuration for the action class
       * @default null
       */
      noCodeConfig: {
          [key: string]: unknown;
      } | null;
      /**
       * Type
       * @description Type of the action class
       */
      type: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the action class was last updated
       */
      updatedAt: string;
  }[];
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
 * Type of FORMBRICKS's FORMBRICKS_LIST_ATTRIBUTE_CLASSES tool input.
 */
type FORMBRICKS_LIST_ATTRIBUTE_CLASSES_INPUT = object;

/**
 * Type of FORMBRICKS's FORMBRICKS_LIST_ATTRIBUTE_CLASSES tool output.
 */
type FORMBRICKS_LIST_ATTRIBUTE_CLASSES_OUTPUT = {
  /**
   * Data
   * @description List of attribute classes
   */
  data?: {
      /**
       * Archived
       * @description Whether the attribute class is archived
       */
      archived: boolean;
      /**
       * Created At
       * @description ISO 8601 timestamp when created
       */
      createdAt: string;
      /**
       * Description
       * @description Description of the attribute class
       * @default null
       */
      description: string | null;
      /**
       * Environment Id
       * @description Environment identifier
       */
      environmentId: string;
      /**
       * Id
       * @description Unique identifier of the attribute class
       */
      id: string;
      /**
       * Name
       * @description Name of the attribute class
       */
      name: string;
      /**
       * Type
       * @description Type of the attribute class, e.g., 'automatic' or 'code'
       */
      type: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when last updated
       */
      updatedAt: string;
  }[];
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
 * Type of FORMBRICKS's FORMBRICKS_LIST_SURVEYS tool input.
 */
type FORMBRICKS_LIST_SURVEYS_INPUT = object;

/**
 * Type of FORMBRICKS's FORMBRICKS_LIST_SURVEYS tool output.
 */
type FORMBRICKS_LIST_SURVEYS_OUTPUT = {
  /**
   * Data
   * @description List of survey summary objects
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the survey was created
       */
      createdAt: string;
      /**
       * Environment Id
       * @description Environment ID the survey belongs to
       */
      environmentId: string;
      /**
       * Id
       * @description Survey ID
       */
      id: string;
      /**
       * Name
       * @description Survey name
       */
      name: string;
      /**
       * Status
       * @description Survey status, e.g., 'inProgress', 'closed'
       */
      status: string;
      /**
       * Type
       * @description Survey display type, e.g., 'link', 'embedded'
       */
      type: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the survey was last updated
       */
      updatedAt: string;
  }[];
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
 * Type of FORMBRICKS's FORMBRICKS_LIST_WEBHOOKS tool input.
 */
type FORMBRICKS_LIST_WEBHOOKS_INPUT = {
  /**
   * End Date
   * @description Filter: end date (ISO 8601).
   * @default null
   */
  endDate: string | null;
  /**
   * Limit
   * @description Number of items to return (1–250).
   * @default null
   */
  limit: number | null;
  /**
   * Order
   * @description Sort order.
   * @default null
   * @enum {string|null}
   */
  order: "asc" | "desc" | null;
  /**
   * Skip
   * @description Number of items to skip (offset).
   * @default null
   */
  skip: number | null;
  /**
   * Sort By
   * @description Field to sort by.
   * @default null
   * @enum {string|null}
   */
  sortBy: "createdAt" | "updatedAt" | null;
  /**
   * Start Date
   * @description Filter: start date (ISO 8601).
   * @default null
   */
  startDate: string | null;
  /**
   * Survey Ids
   * @description Filter: list of survey IDs.
   * @default null
   */
  surveyIds: string[] | null;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_LIST_WEBHOOKS tool output.
 */
type FORMBRICKS_LIST_WEBHOOKS_OUTPUT = {
  /**
   * Data
   * @description List of webhook objects.
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the webhook was created.
       */
      createdAt: string;
      /**
       * Environment Id
       * @description Environment ID associated with the webhook.
       */
      environmentId: string;
      /**
       * Id
       * @description Unique identifier for the webhook.
       */
      id: string;
      /**
       * Name
       * @description Name of the webhook, if set.
       * @default null
       */
      name: string | null;
      /**
       * Source
       * @description Source of the webhook (e.g., 'user').
       */
      source: string;
      /**
       * Survey Ids
       * @description List of survey IDs this webhook applies to.
       */
      surveyIds: string[];
      /**
       * Triggers
       * @description List of events that trigger the webhook.
       */
      triggers: string[];
      /**
       * Updated At
       * @description ISO 8601 timestamp when the webhook was last updated.
       */
      updatedAt: string;
      /**
       * Url
       * @description Destination URL for the webhook.
       */
      url: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata, present in API v2
   * @default null
   */
  meta: {
      /**
       * Limit
       * @description Limit applied
       * @default null
       */
      limit: number | null;
      /**
       * Offset
       * @description Offset applied (skip)
       * @default null
       */
      offset: number | null;
      /**
       * Total
       * @description Total number of webhooks
       * @default null
       */
      total: number | null;
  } | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_UPDATE_PERSON tool input.
 */
type FORMBRICKS_UPDATE_PERSON_INPUT = {
  /**
   * Attributes
   * @description Key/value attributes to update for the person; keys must exist in the environment.
   */
  attributes?: {
      [key: string]: string;
  };
  /**
   * Environment Id
   * @description Environment ID containing the person to update.
   */
  environmentId?: string;
  /**
   * User Id
   * @description ID of the user/contact (person) to update.
   */
  userId?: string;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_UPDATE_PERSON tool output.
 */
type FORMBRICKS_UPDATE_PERSON_OUTPUT = {
  /**
   * Data
   * @description Result data for the update operation.
   */
  data?: {
      /**
       * Changed
       * @description Whether any attributes were changed by the update.
       */
      changed: boolean;
      /**
       * Message
       * @description Result message describing the outcome of the update.
       */
      message: string;
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
 * Type of FORMBRICKS's FORMBRICKS_UPDATE_RESPONSE tool input.
 */
type FORMBRICKS_UPDATE_RESPONSE_INPUT = {
  /**
   * Contact Attributes
   * @description (Optional) Contact attributes snapshot
   * @default null
   */
  contactAttributes: {
      [key: string]: unknown;
  } | null;
  /**
   * Contact Id
   * @description (Optional) Contact ID
   * @default null
   */
  contactId: string | null;
  /**
   * Created At
   * @description (Optional) Creation timestamp in ISO 8601 format
   * @default null
   */
  createdAt: string | null;
  /**
   * Data
   * @description The answers/data for the survey response
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Display Id
   * @description (Optional) Display ID for the response
   * @default null
   */
  displayId: string | null;
  /**
   * Ending Id
   * @description (Optional) ID of the ending reached
   * @default null
   */
  endingId: string | null;
  /**
   * Finished
   * @description Whether the response is finished
   */
  finished?: boolean;
  /**
   * Id
   * @description Unique identifier of the response to update
   */
  id?: string;
  /**
   * Language
   * @description (Optional) Language code of the response, e.g., 'en'
   * @default null
   */
  language: string | null;
  /**
   * Meta
   * @description (Optional) Metadata about the response, e.g., source, url, userAgent, country
   * @default null
   */
  meta: {
      [key: string]: unknown;
  } | null;
  /**
   * Single Use Id
   * @description (Optional) Single-use ID for the response
   * @default null
   */
  singleUseId: string | null;
  /**
   * Survey Id
   * @description The ID of the survey for which to update the response
   */
  surveyId?: string;
  /**
   * Ttc
   * @description (Optional) Time-to-complete metrics
   * @default null
   */
  ttc: {
      [key: string]: unknown;
  } | null;
  /**
   * Updated At
   * @description (Optional) Last update timestamp in ISO 8601 format
   * @default null
   */
  updatedAt: string | null;
  /**
   * Variables
   * @description (Optional) Custom variables associated with the response
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_UPDATE_RESPONSE tool output.
 */
type FORMBRICKS_UPDATE_RESPONSE_OUTPUT = {
  /**
   * Contact Attributes
   * @description (Optional) Attributes of the contact
   * @default null
   */
  contactAttributes: {
      [key: string]: unknown;
  } | null;
  /**
   * Contact Id
   * @description (Optional) Contact ID if linked
   * @default null
   */
  contactId: string | null;
  /**
   * Created At
   * @description Creation timestamp of the response
   */
  createdAt?: string;
  /**
   * Data
   * @description The answers/data for the survey response
   */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Display Id
   * @description (Optional) Display ID for the response
   * @default null
   */
  displayId: string | null;
  /**
   * Ending Id
   * @description (Optional) Ending ID reached
   * @default null
   */
  endingId: string | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Finished
   * @description Whether the response is finished
   */
  finished?: boolean;
  /**
   * Id
   * @description The ID of the updated response
   */
  id?: string;
  /**
   * Language
   * @description (Optional) Language code of the response
   * @default null
   */
  language: string | null;
  /**
   * Meta
   * @description (Optional) Metadata about the response
   * @default null
   */
  meta: {
      [key: string]: unknown;
  } | null;
  /**
   * Single Use Id
   * @description (Optional) Single-use ID for the response
   * @default null
   */
  singleUseId: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Survey Id
   * @description The survey ID associated with the response
   */
  surveyId?: string;
  /**
   * Ttc
   * @description (Optional) Time-to-complete metrics
   * @default null
   */
  ttc: {
      [key: string]: unknown;
  } | null;
  /**
   * Updated At
   * @description Last update timestamp of the response
   */
  updatedAt?: string;
  /**
   * Variables
   * @description (Optional) Custom variables associated with the response
   * @default null
   */
  variables: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_UPDATE_SURVEY tool input.
 */
type FORMBRICKS_UPDATE_SURVEY_INPUT = {
  /**
   * Delay
   * @description Display delay in seconds
   * @default null
   */
  delay: number | null;
  /**
   * Display Limit
   * @description Maximum display count
   * @default null
   */
  displayLimit: number | null;
  /**
   * Display Option
   * @description Display option, e.g., 'displayOnce'
   * @default null
   */
  displayOption: string | null;
  /**
   * Display Percentage
   * @description Display percentage threshold
   * @default null
   */
  displayPercentage: number | null;
  /**
   * Endings
   * @description List of ending screen configurations
   * @default null
   */
  endings: unknown[] | null;
  /**
   * Hidden Fields
   * @description Settings for hidden fields, e.g., {'enabled': True, 'fieldIds': ['q1','q2']}
   * @default null
   */
  hiddenFields: {
      [key: string]: unknown;
  } | null;
  /**
   * Id
   * @description The ID of the survey to update
   */
  id?: string;
  /**
   * Is Verify Email Enabled
   * @description Enable or disable email verification
   * @default null
   */
  isVerifyEmailEnabled: boolean | null;
  /**
   * Languages
   * @description List of language codes for the survey, e.g., ['en','de']
   * @default null
   */
  languages: string[] | null;
  /**
   * Name
   * @description New name for the survey
   * @default null
   */
  name: string | null;
  /**
   * Questions
   * @description List of question definitions to update
   * @default null
   */
  questions: unknown[] | null;
  /**
   * Redirect Url
   * @description URL to redirect after survey completion
   * @default null
   */
  redirectUrl: string | null;
  /**
   * Show Language Switch
   * @description Whether to show language switch
   * @default null
   */
  showLanguageSwitch: boolean | null;
  /**
   * Status
   * @description New status for the survey, e.g., 'inProgress'
   * @default null
   */
  status: string | null;
  /**
   * Survey Closed Message
   * @description Custom message when survey is closed
   * @default null
   */
  surveyClosedMessage: string | null;
  /**
   * Triggers
   * @description List of trigger configurations
   * @default null
   */
  triggers: unknown[] | null;
  /**
   * Welcome Card
   * @description Welcome card settings object
   * @default null
   */
  welcomeCard: {
      [key: string]: unknown;
  } | null;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_UPDATE_SURVEY tool output.
 */
type FORMBRICKS_UPDATE_SURVEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO timestamp when the survey was created
       */
      createdAt: string;
      /**
       * Created By
       * @description User ID of the creator
       */
      createdBy: string;
      /**
       * Delay
       * @description Display delay in seconds, if configured
       * @default null
       */
      delay: number | null;
      /**
       * Display Limit
       * @description Maximum display times, if set
       * @default null
       */
      displayLimit: number | null;
      /**
       * Display Option
       * @description Display option setting, e.g., 'displayOnce'
       * @default null
       */
      displayOption: string | null;
      /**
       * Display Percentage
       * @description Display percentage threshold, if set
       * @default null
       */
      displayPercentage: number | null;
      /**
       * Endings
       * @description Ending screens configuration
       * @default null
       */
      endings: unknown[] | null;
      /**
       * Environment Id
       * @description Environment ID
       */
      environmentId: string;
      /**
       * Hidden Fields
       * @description Hidden fields settings, if configured
       * @default null
       */
      hiddenFields: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description Survey ID
       */
      id: string;
      /**
       * Is Verify Email Enabled
       * @description Whether email verification is enabled
       * @default null
       */
      isVerifyEmailEnabled: boolean | null;
      /**
       * Languages
       * @description List of configured language codes
       * @default null
       */
      languages: string[] | null;
      /**
       * Name
       * @description Survey name
       */
      name: string;
      /**
       * Pin
       * @description PIN configuration, if any
       * @default null
       */
      pin: string | null;
      /**
       * Product Overwrites
       * @description Product overwrite settings, if any
       * @default null
       */
      productOverwrites: {
          [key: string]: unknown;
      } | null;
      /**
       * Questions
       * @description List of survey questions with settings
       * @default null
       */
      questions: unknown[] | null;
      /**
       * Recontact Days
       * @description Recontact interval in days, if any
       * @default null
       */
      recontactDays: number | null;
      /**
       * Redirect Url
       * @description Redirect URL after completion, if set
       * @default null
       */
      redirectUrl: string | null;
      /**
       * Segment
       * @description Audience segment ID, if configured
       * @default null
       */
      segment: string | null;
      /**
       * Show Language Switch
       * @description Whether to show language switch, if enabled
       * @default null
       */
      showLanguageSwitch: boolean | null;
      /**
       * Single Use
       * @description Single-use settings, if configured
       * @default null
       */
      singleUse: {
          [key: string]: unknown;
      } | null;
      /**
       * Status
       * @description Survey status, e.g., 'inProgress'
       */
      status: string;
      /**
       * Styling
       * @description Styling overrides, if any
       * @default null
       */
      styling: {
          [key: string]: unknown;
      } | null;
      /**
       * Survey Closed Message
       * @description Message to display when survey is closed
       * @default null
       */
      surveyClosedMessage: string | null;
      /**
       * Triggers
       * @description List of trigger configurations, if set
       * @default null
       */
      triggers: unknown[] | null;
      /**
       * Type
       * @description Survey type, e.g., 'link' or 'embedded'
       */
      type: string;
      /**
       * Updated At
       * @description ISO timestamp when the survey was last updated
       */
      updatedAt: string;
      /**
       * Welcome Card
       * @description Welcome card settings, if configured
       * @default null
       */
      welcomeCard: {
          [key: string]: unknown;
      } | null;
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
 * Type of FORMBRICKS's FORMBRICKS_UPDATE_WEBHOOK tool input.
 */
type FORMBRICKS_UPDATE_WEBHOOK_INPUT = {
  /**
   * Environment Id
   * @description The ID of the environment associated with the webhook.
   */
  environmentId?: string;
  /**
   * Id
   * @description The ID of the webhook to update.
   */
  id?: string;
  /**
   * Name
   * @description The name of the webhook. Provide null to clear existing name.
   */
  name?: string | null;
  /**
   * Source
   * @description Source of the webhook; one of 'user', 'zapier', 'make', 'n8n'.
   */
  source?: string;
  /**
   * Survey Ids
   * @description List of survey IDs the webhook applies to.
   */
  surveyIds?: string[];
  /**
   * Triggers
   * @description List of triggers for the webhook; must include at least one entry.
   */
  triggers?: string[];
  /**
   * Url
   * @description Target URL for the webhook, must be a valid URI.
   */
  url?: string;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_UPDATE_WEBHOOK tool output.
 */
type FORMBRICKS_UPDATE_WEBHOOK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the webhook was created.
       */
      createdAt: string;
      /**
       * Environment Id
       * @description The ID of the environment associated with the webhook.
       */
      environmentId: string;
      /**
       * Id
       * @description The ID of the webhook.
       */
      id: string;
      /**
       * Name
       * @description The name of the webhook.
       * @default null
       */
      name: string | null;
      /**
       * Source
       * @description Source of the webhook; one of 'user', 'zapier', 'make', 'n8n'.
       */
      source: string;
      /**
       * Survey Ids
       * @description List of survey IDs the webhook applies to.
       */
      surveyIds: string[];
      /**
       * Triggers
       * @description List of triggers for the webhook.
       */
      triggers: string[];
      /**
       * Updated At
       * @description ISO 8601 timestamp when the webhook was last updated.
       */
      updatedAt: string;
      /**
       * Url
       * @description Target URL for the webhook.
       */
      url: string;
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
 * Type of FORMBRICKS's FORMBRICKS_UPLOAD_BULK_CONTACTS tool input.
 */
type FORMBRICKS_UPLOAD_BULK_CONTACTS_INPUT = {
  /**
   * Contacts
   * @description List of contacts to upload (1 to 250 items).
   */
  contacts?: {
      /**
       * Attributes
       * @description List of attribute entries for the contact. Must include an 'email' attribute.
       */
      attributes: {
          /**
           * Attribute Key
           * @description Attribute key metadata.
           */
          attributeKey: {
              /**
               * Key
               * @description Attribute key identifier (e.g., 'email', 'firstName').
               */
              key: string;
              /**
               * Name
               * @description Display name for the attribute.
               */
              name: string;
          };
          /**
           * Value
           * @description Attribute value (e.g., email address or name).
           */
          value: string;
      }[];
  }[];
  /**
   * Environment Id
   * @description Target environment ID to upload contacts into.
   */
  environmentId?: string;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_UPLOAD_BULK_CONTACTS tool output.
 */
type FORMBRICKS_UPLOAD_BULK_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Result data for bulk upload operation.
   */
  data?: {
      /**
       * Message
       * @description Result message describing the outcome.
       */
      message: string;
      /**
       * Status
       * @description Operation status.
       */
      status: string;
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
 * Type of FORMBRICKS's FORMBRICKS_UPLOAD_PRIVATE_FILE tool input.
 */
type FORMBRICKS_UPLOAD_PRIVATE_FILE_INPUT = {
  /**
   * Environment Id
   * @description Environment ID of the Formbricks instance.
   */
  environmentId?: string;
  /**
   * File Name
   * @description Name of the file to upload (including extension), e.g., 'report.pdf'.
   */
  fileName?: string;
  /**
   * File Type
   * @description MIME type of the file, e.g., 'application/pdf'.
   */
  fileType?: string;
  /**
   * Survey Id
   * @description The ID of the survey associated with the file.
   */
  surveyId?: string;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_UPLOAD_PRIVATE_FILE tool output.
 */
type FORMBRICKS_UPLOAD_PRIVATE_FILE_OUTPUT = {
  /**
   * Data
   * @description Presigned upload data object.
   */
  data?: {
      /**
       * File Url
       * @description Private storage URL where the file will be accessible after upload.
       */
      fileUrl: string;
      /**
       * Presigned Fields
       * @description Form fields required for S3 upload (e.g., key, policy, x-amz-algorithm).
       */
      presignedFields: {
          [key: string]: string;
      };
      /**
       * Signed Url
       * @description S3 URL to POST the file.
       */
      signedUrl: string;
      /**
       * Updated File Name
       * @description Filename returned by the server after any processing.
       */
      updatedFileName: string;
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
 * Type of FORMBRICKS's FORMBRICKS_UPLOAD_PUBLIC_FILE tool input.
 */
type FORMBRICKS_UPLOAD_PUBLIC_FILE_INPUT = {
  /**
   * Allowed File Extensions
   * @description Optional list of allowed file extensions (without dot). If omitted, default allowed extensions apply.
   * @default null
   */
  allowedFileExtensions: string[] | null;
  /**
   * Environment Id
   * @description The environment ID where the file will be uploaded
   */
  environmentId?: string;
  /**
   * File Name
   * @description Name of the file to be uploaded (including extension)
   */
  fileName?: string;
  /**
   * File Type
   * @description MIME type of the file (e.g., 'image/png')
   */
  fileType?: string;
};

/**
 * Type of FORMBRICKS's FORMBRICKS_UPLOAD_PUBLIC_FILE tool output.
 */
type FORMBRICKS_UPLOAD_PUBLIC_FILE_OUTPUT = {
  /**
   * Data
   * @description Data returned containing URLs and form fields for file upload.
   */
  data?: {
      /**
       * File Url
       * @description Public URL of the uploaded file
       */
      fileUrl: string;
      /**
       * Presigned Fields
       * @description Form fields required for S3 upload
       */
      presignedFields: {
          /**
           * Policy
           * @description Base64-encoded policy document for S3 upload
           */
          Policy: string;
          /** X Amz Algorithm */
          "X-Amz-Algorithm": string;
          /** X Amz Credential */
          "X-Amz-Credential": string;
          /** X Amz Date */
          "X-Amz-Date": string;
          /** X Amz Signature */
          "X-Amz-Signature": string;
          /**
           * Key
           * @description S3 object key where the file will be stored
           */
          key: string;
      };
      /**
       * Signed Url
       * @description S3 form action URL for file upload
       */
      signedUrl: string;
      /**
       * Updated File Name
       * @description Filename assigned in storage after upload
       */
      updatedFileName: string;
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
 * Type map of all available tool input types for toolkit "FORMBRICKS".
 */
export type FORMBRICKS_TOOL_INPUTS = {
  CREATE_ACTION_CLASS: FORMBRICKS_CREATE_ACTION_CLASS_INPUT
  CREATE_ATTRIBUTE_CLASS: FORMBRICKS_CREATE_ATTRIBUTE_CLASS_INPUT
  CREATE_CONTACT: FORMBRICKS_CREATE_CONTACT_INPUT
  CREATE_DISPLAY: FORMBRICKS_CREATE_DISPLAY_INPUT
  CREATE_RESPONSE: FORMBRICKS_CREATE_RESPONSE_INPUT
  CREATE_SURVEY: FORMBRICKS_CREATE_SURVEY_INPUT
  CREATE_WEBHOOK: FORMBRICKS_CREATE_WEBHOOK_INPUT
  DELETE_ATTRIBUTE_CLASS: FORMBRICKS_DELETE_ATTRIBUTE_CLASS_INPUT
  DELETE_PERSON: FORMBRICKS_DELETE_PERSON_INPUT
  DELETE_RESPONSE: FORMBRICKS_DELETE_RESPONSE_INPUT
  DELETE_SURVEY: FORMBRICKS_DELETE_SURVEY_INPUT
  DELETE_TEAM: FORMBRICKS_DELETE_TEAM_INPUT
  DELETE_WEBHOOK: FORMBRICKS_DELETE_WEBHOOK_INPUT
  GET_ACCOUNT_INFO: FORMBRICKS_GET_ACCOUNT_INFO_INPUT
  GET_ALL_CONTACTS: FORMBRICKS_GET_ALL_CONTACTS_INPUT
  GET_ME: FORMBRICKS_GET_ME_INPUT
  GET_RESPONSES: FORMBRICKS_GET_RESPONSES_INPUT
  GET_ROLES: FORMBRICKS_GET_ROLES_INPUT
  GET_USERS: FORMBRICKS_GET_USERS_INPUT
  GET_WEBHOOK: FORMBRICKS_GET_WEBHOOK_INPUT
  LIST_ACTION_CLASSES: FORMBRICKS_LIST_ACTION_CLASSES_INPUT
  LIST_ATTRIBUTE_CLASSES: FORMBRICKS_LIST_ATTRIBUTE_CLASSES_INPUT
  LIST_SURVEYS: FORMBRICKS_LIST_SURVEYS_INPUT
  LIST_WEBHOOKS: FORMBRICKS_LIST_WEBHOOKS_INPUT
  UPDATE_PERSON: FORMBRICKS_UPDATE_PERSON_INPUT
  UPDATE_RESPONSE: FORMBRICKS_UPDATE_RESPONSE_INPUT
  UPDATE_SURVEY: FORMBRICKS_UPDATE_SURVEY_INPUT
  UPDATE_WEBHOOK: FORMBRICKS_UPDATE_WEBHOOK_INPUT
  UPLOAD_BULK_CONTACTS: FORMBRICKS_UPLOAD_BULK_CONTACTS_INPUT
  UPLOAD_PRIVATE_FILE: FORMBRICKS_UPLOAD_PRIVATE_FILE_INPUT
  UPLOAD_PUBLIC_FILE: FORMBRICKS_UPLOAD_PUBLIC_FILE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FORMBRICKS".
 */
export type FORMBRICKS_TOOL_OUTPUTS = {
  CREATE_ACTION_CLASS: FORMBRICKS_CREATE_ACTION_CLASS_OUTPUT
  CREATE_ATTRIBUTE_CLASS: FORMBRICKS_CREATE_ATTRIBUTE_CLASS_OUTPUT
  CREATE_CONTACT: FORMBRICKS_CREATE_CONTACT_OUTPUT
  CREATE_DISPLAY: FORMBRICKS_CREATE_DISPLAY_OUTPUT
  CREATE_RESPONSE: FORMBRICKS_CREATE_RESPONSE_OUTPUT
  CREATE_SURVEY: FORMBRICKS_CREATE_SURVEY_OUTPUT
  CREATE_WEBHOOK: FORMBRICKS_CREATE_WEBHOOK_OUTPUT
  DELETE_ATTRIBUTE_CLASS: FORMBRICKS_DELETE_ATTRIBUTE_CLASS_OUTPUT
  DELETE_PERSON: FORMBRICKS_DELETE_PERSON_OUTPUT
  DELETE_RESPONSE: FORMBRICKS_DELETE_RESPONSE_OUTPUT
  DELETE_SURVEY: FORMBRICKS_DELETE_SURVEY_OUTPUT
  DELETE_TEAM: FORMBRICKS_DELETE_TEAM_OUTPUT
  DELETE_WEBHOOK: FORMBRICKS_DELETE_WEBHOOK_OUTPUT
  GET_ACCOUNT_INFO: FORMBRICKS_GET_ACCOUNT_INFO_OUTPUT
  GET_ALL_CONTACTS: FORMBRICKS_GET_ALL_CONTACTS_OUTPUT
  GET_ME: FORMBRICKS_GET_ME_OUTPUT
  GET_RESPONSES: FORMBRICKS_GET_RESPONSES_OUTPUT
  GET_ROLES: FORMBRICKS_GET_ROLES_OUTPUT
  GET_USERS: FORMBRICKS_GET_USERS_OUTPUT
  GET_WEBHOOK: FORMBRICKS_GET_WEBHOOK_OUTPUT
  LIST_ACTION_CLASSES: FORMBRICKS_LIST_ACTION_CLASSES_OUTPUT
  LIST_ATTRIBUTE_CLASSES: FORMBRICKS_LIST_ATTRIBUTE_CLASSES_OUTPUT
  LIST_SURVEYS: FORMBRICKS_LIST_SURVEYS_OUTPUT
  LIST_WEBHOOKS: FORMBRICKS_LIST_WEBHOOKS_OUTPUT
  UPDATE_PERSON: FORMBRICKS_UPDATE_PERSON_OUTPUT
  UPDATE_RESPONSE: FORMBRICKS_UPDATE_RESPONSE_OUTPUT
  UPDATE_SURVEY: FORMBRICKS_UPDATE_SURVEY_OUTPUT
  UPDATE_WEBHOOK: FORMBRICKS_UPDATE_WEBHOOK_OUTPUT
  UPLOAD_BULK_CONTACTS: FORMBRICKS_UPLOAD_BULK_CONTACTS_OUTPUT
  UPLOAD_PRIVATE_FILE: FORMBRICKS_UPLOAD_PRIVATE_FILE_OUTPUT
  UPLOAD_PUBLIC_FILE: FORMBRICKS_UPLOAD_PUBLIC_FILE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FORMBRICKS toolkit.
 */
export const FORMBRICKS = {
  slug: "formbricks",
  tools: {
    /**
     * Tool to create a new action class. Use when defining custom action logic in your environment.
     */
    CREATE_ACTION_CLASS: "FORMBRICKS_CREATE_ACTION_CLASS",
    /**
     * Tool to create an attribute class in Formbricks. Use when you need to define new attribute classes for segmentation or attributes management.
     */
    CREATE_ATTRIBUTE_CLASS: "FORMBRICKS_CREATE_ATTRIBUTE_CLASS",
    /**
     * Tool to create a new contact. Use when you need to register a contact in a Formbricks environment.
     */
    CREATE_CONTACT: "FORMBRICKS_CREATE_CONTACT",
    /**
     * Tool to mark a survey as displayed or link it to a response. Use after obtaining the survey and environment IDs to register a display instance.
     */
    CREATE_DISPLAY: "FORMBRICKS_CREATE_DISPLAY",
    /**
     * Tool to create a response for a survey. Use after collecting all survey answers.
     */
    CREATE_RESPONSE: "FORMBRICKS_CREATE_RESPONSE",
    /**
     * Tool to create a new survey. Use after defining survey details and questions.
     */
    CREATE_SURVEY: "FORMBRICKS_CREATE_SURVEY",
    /**
     * Tool to create a new webhook. Use when you need to register an external endpoint to receive form response events.
     */
    CREATE_WEBHOOK: "FORMBRICKS_CREATE_WEBHOOK",
    /**
     * Tool to delete an attribute class. Use when you need to remove an attribute class by its ID after confirming it's no longer needed.
     */
    DELETE_ATTRIBUTE_CLASS: "FORMBRICKS_DELETE_ATTRIBUTE_CLASS",
    /**
     * Tool to delete a person. Use when you need to remove a person's record from Formbricks after confirming the ID.
     */
    DELETE_PERSON: "FORMBRICKS_DELETE_PERSON",
    /**
     * Tool to delete a survey response by its ID. Use when you need to remove an existing response after confirming its ID.
     */
    DELETE_RESPONSE: "FORMBRICKS_DELETE_RESPONSE",
    /**
     * Tool to delete a survey by its ID. Use when you need to remove a survey after confirming its ID.
     */
    DELETE_SURVEY: "FORMBRICKS_DELETE_SURVEY",
    /**
     * Tool to delete a team. Use when you need to remove a team by its ID after confirming it's no longer needed.
     */
    DELETE_TEAM: "FORMBRICKS_DELETE_TEAM",
    /**
     * Tool to delete a webhook by ID. Use when you need to remove an existing webhook from Formbricks. Use after confirming the webhook ID.
     */
    DELETE_WEBHOOK: "FORMBRICKS_DELETE_WEBHOOK",
    /**
     * Tool to retrieve account information. Use when you need details about the authenticated Formbricks account.
     */
    GET_ACCOUNT_INFO: "FORMBRICKS_GET_ACCOUNT_INFO",
    /**
     * Tool to retrieve all contacts within the organization. Use when you need a complete list of contacts.
     */
    GET_ALL_CONTACTS: "FORMBRICKS_GET_ALL_CONTACTS",
    /**
     * Tool to retrieve current authenticated organization's and environment details. Use when you need to fetch organization and environment information for the current API key.
     */
    GET_ME: "FORMBRICKS_GET_ME",
    /**
     * Tool to retrieve a list of survey responses. Use when you need to page, sort, or filter responses.
     */
    GET_RESPONSES: "FORMBRICKS_GET_RESPONSES",
    /**
     * Tool to retrieve all available roles in the system. Use when you need system roles for access control.
     */
    GET_ROLES: "FORMBRICKS_GET_ROLES",
    /**
     * Tool to retrieve a list of users within the environment using the Management API.
     */
    GET_USERS: "FORMBRICKS_GET_USERS",
    /**
     * Tool to retrieve details of a specific webhook. Use when you need to inspect a webhook's configuration by ID.
     */
    GET_WEBHOOK: "FORMBRICKS_GET_WEBHOOK",
    /**
     * Tool to list all action classes. Use when you need to inspect available action classes for workflows.
     */
    LIST_ACTION_CLASSES: "FORMBRICKS_LIST_ACTION_CLASSES",
    /**
     * Tool to list all attribute classes. Use when you need to retrieve existing attribute classes for segmentation or management.
     */
    LIST_ATTRIBUTE_CLASSES: "FORMBRICKS_LIST_ATTRIBUTE_CLASSES",
    /**
     * Tool to list all surveys. Use when you need to retrieve a summary of all surveys available in the environment.
     */
    LIST_SURVEYS: "FORMBRICKS_LIST_SURVEYS",
    /**
     * Tool to list all webhooks. Use when you need to retrieve all configured webhooks for the current environment.
     */
    LIST_WEBHOOKS: "FORMBRICKS_LIST_WEBHOOKS",
    /**
     * Tool to update an existing person. Use when you need to modify contact attributes in a Formbricks environment.
     */
    UPDATE_PERSON: "FORMBRICKS_UPDATE_PERSON",
    /**
     * Tool to update an existing survey response. Use after identifying the response to modify.
     */
    UPDATE_RESPONSE: "FORMBRICKS_UPDATE_RESPONSE",
    /**
     * Tool to update an existing survey. Use after confirming survey ID to modify its properties.
     */
    UPDATE_SURVEY: "FORMBRICKS_UPDATE_SURVEY",
    /**
     * Tool to update an existing webhook. Use when you need to apply modifications to a webhook's configuration.
     */
    UPDATE_WEBHOOK: "FORMBRICKS_UPDATE_WEBHOOK",
    /**
     * Tool to upload multiple contacts in bulk. Use when you need to import up to 250 contacts at once.
     */
    UPLOAD_BULK_CONTACTS: "FORMBRICKS_UPLOAD_BULK_CONTACTS",
    /**
     * Tool to obtain S3 presigned upload data for a private survey file. Use after confirming environmentId and surveyId.
     */
    UPLOAD_PRIVATE_FILE: "FORMBRICKS_UPLOAD_PRIVATE_FILE",
    /**
     * Tool to get S3 presigned data for uploading a public file. Use after environment creation to retrieve upload details.
     */
    UPLOAD_PUBLIC_FILE: "FORMBRICKS_UPLOAD_PUBLIC_FILE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FORMBRICKS".
 */
export type FORMBRICKS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FORMBRICKS".
 */
export type FORMBRICKS_TRIGGER_EVENTS = {}
