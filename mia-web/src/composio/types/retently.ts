// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of RETENTLY's RETENTLY_ADD_FEEDBACK_TAGS tool input.
 */
type RETENTLY_ADD_FEEDBACK_TAGS_INPUT = {
  /**
   * Id
   * @description The ID of the feedback response.
   */
  id?: string;
  /**
   * Op
   * @description Use the flag “append” in order to append the tags to the response, or leave it empty in order to override existing tags.
   * @default null
   */
  op: string | null;
  /**
   * Tags
   * @description An array of tags to be added.
   */
  tags?: string[];
};

/**
 * Type of RETENTLY's RETENTLY_ADD_FEEDBACK_TAGS tool output.
 */
type RETENTLY_ADD_FEEDBACK_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description The HTTP status code of the response.
       */
      code: number;
      /**
       * Message
       * @description A message indicating the result of the request.
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
 * Type of RETENTLY's RETENTLY_ADD_FEEDBACK_TOPICS tool input.
 */
type RETENTLY_ADD_FEEDBACK_TOPICS_INPUT = {
  /**
   * Feedback Id
   * @description The ID of the feedback to add topics to.
   */
  feedback_id?: string;
  /**
   * Operation
   * @description Use 'append' to add to existing topics, or 'override' to replace them.
   * @default override
   * @enum {string|null}
   */
  operation: "append" | "override" | null;
  /**
   * Topics
   * @description A list of topics to add to the feedback.
   */
  topics?: {
      /**
       * Name
       * @description The name of the topic.
       */
      name: string;
      /**
       * Sentiment
       * @description The sentiment of the topic.
       * @default neutral
       * @enum {string}
       */
      sentiment: "positive" | "negative" | "neutral";
  }[];
};

/**
 * Type of RETENTLY's RETENTLY_ADD_FEEDBACK_TOPICS tool output.
 */
type RETENTLY_ADD_FEEDBACK_TOPICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description The HTTP status code of the response.
       */
      code: number;
      /**
       * Message
       * @description A message indicating the result of the operation.
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
 * Type of RETENTLY's RETENTLY_CREATE_OR_UPDATE_CUSTOMERS tool input.
 */
type RETENTLY_CREATE_OR_UPDATE_CUSTOMERS_INPUT = {
  /**
   * Subscribers
   * @description A list of customer objects to be created or updated.
   */
  subscribers?: {
      /**
       * Company
       * @description The customer's company name.
       * @default null
       */
      company: string | null;
      /**
       * Email
       * @description The customer's email address.
       */
      email: string;
      /**
       * First Name
       * @description The customer's first name.
       * @default null
       */
      first_name: string | null;
      /**
       * Last Name
       * @description The customer's last name.
       * @default null
       */
      last_name: string | null;
      /**
       * Properties
       * @description Custom properties for the customer.
       * @default null
       */
      properties: {
          /**
           * Label
           * @description The name of the property.
           */
          label: string;
          /**
           * Type
           * @description The data type of the property. Can be one of 'string', 'date', 'integer', 'collection', or 'boolean'.
           */
          type: string;
          /**
           * Value
           * @description The value of the property.
           */
          value: unknown;
      }[] | null;
      /**
       * Tags
       * @description Tags to associate with the customer.
       * @default null
       */
      tags: string[] | null;
  }[];
};

/**
 * Type of RETENTLY's RETENTLY_CREATE_OR_UPDATE_CUSTOMERS tool output.
 */
type RETENTLY_CREATE_OR_UPDATE_CUSTOMERS_OUTPUT = {
  /** Code */
  code?: number;
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /** Message */
  message?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of RETENTLY's RETENTLY_DELETE_CUSTOMERS tool input.
 */
type RETENTLY_DELETE_CUSTOMERS_INPUT = {
  /**
   * Subscribers
   * @description A list of customer objects to delete.
   */
  subscribers?: {
      /**
       * Email
       * @description The email address of the customer to delete.
       */
      email: string;
  }[];
};

/**
 * Type of RETENTLY's RETENTLY_DELETE_CUSTOMERS tool output.
 */
type RETENTLY_DELETE_CUSTOMERS_OUTPUT = {
  /**
   * Code
   * @description The HTTP status code of the response.
   */
  code?: number;
  /**
   * Data
   * @description A list of objects, each representing a deleted customer.
   */
  data?: {
      /**
       * Deleted
       * @description A boolean indicating whether the customer was successfully deleted.
       */
      deleted: boolean;
      /**
       * Email
       * @description The email address of the deleted customer.
       */
      email: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description A message indicating the result of the delete operation.
   */
  message?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of RETENTLY's RETENTLY_GET_CAMPAIGNS tool input.
 */
type RETENTLY_GET_CAMPAIGNS_INPUT = object;

/**
 * Type of RETENTLY's RETENTLY_GET_CAMPAIGNS tool output.
 */
type RETENTLY_GET_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaigns
       * @description A list of campaigns.
       */
      campaigns: {
          /**
           * Channel
           * @description The channel through which the campaign is delivered (e.g., email).
           */
          channel: string;
          /**
           * Id
           * @description The unique identifier for the campaign.
           */
          id: string;
          /**
           * Is Active
           * @description The status of the campaign.
           */
          isActive: boolean;
          /**
           * Metric
           * @description The metric used for the campaign (e.g., NPS, CSAT).
           */
          metric: string;
          /**
           * Name
           * @description The name of the campaign.
           */
          name: string;
          /**
           * Template Id
           * @description The ID of the template assigned to the campaign.
           */
          templateId: string;
          /**
           * Type
           * @description The type of campaign (e.g., transactional).
           */
          type: string;
      }[];
      /**
       * Code
       * @description The status code of the response.
       */
      code: number;
      /**
       * Message
       * @description A message indicating the result of the request.
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
 * Type of RETENTLY's RETENTLY_GET_CUSTOMERS tool input.
 */
type RETENTLY_GET_CUSTOMERS_INPUT = {
  /**
   * Email
   * @description Find a customer by the email address.
   * @default null
   */
  email: string | null;
  /**
   * End Date
   * @description ISO format or UNIX timestamp;
   * @default null
   */
  endDate: string | null;
  /**
   * Limit
   * @description The items limit. Default 20;
   * @default 20
   */
  limit: number | null;
  /**
   * Page
   * @description The current page number. Default 1;
   * @default 1
   */
  page: number | null;
  /**
   * Sort
   * @description The sort option. Use ‘-’ for DESC. Default ‘-createdDate’;
   * @default -createdDate
   */
  sort: string | null;
  /**
   * Start Date
   * @description ISO format or UNIX timestamp;
   * @default null
   */
  startDate: string | null;
};

/**
 * Type of RETENTLY's RETENTLY_GET_CUSTOMERS tool output.
 */
type RETENTLY_GET_CUSTOMERS_OUTPUT = {
  /** Code */
  code?: number;
  /** Data */
  data?: {
      /** Limit */
      limit: number;
      /** Page */
      page: number;
      /** Pages */
      pages: number;
      /** Sort */
      sort: string;
      /** Subscribers */
      subscribers: {
          /** Company Id */
          companyId: string;
          /** Company Name */
          companyName: string;
          /** Created Date */
          createdDate: string;
          /** Email */
          email: string;
          /** First Name */
          firstName: string;
          /** Id */
          id: string;
          /** Last Name */
          lastName: string;
          /** Properties */
          properties: {
              /** Label */
              label: string;
              /** Name */
              name: string;
              /** Type */
              type: string;
              /** Value */
              value: string;
          }[];
          /** Tags */
          tags: string[];
      }[];
      /** Total */
      total: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /** Message */
  message?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of RETENTLY's RETENTLY_GET_CUSTOMER_BY_ID tool input.
 */
type RETENTLY_GET_CUSTOMER_BY_ID_INPUT = {
  /**
   * Customer Id
   * @description The ID of the customer to retrieve.
   */
  customer_id?: string;
};

/**
 * Type of RETENTLY's RETENTLY_GET_CUSTOMER_BY_ID tool output.
 */
type RETENTLY_GET_CUSTOMER_BY_ID_OUTPUT = {
  /** Code */
  code?: number;
  /** Data */
  data?: {
      /**
       * Company Id
       * @description The ID of the company the customer belongs to.
       * @default null
       */
      companyId: string | null;
      /** Company Name */
      companyName: string;
      /** Created Date */
      createdDate: string;
      /** Email */
      email: string;
      /** First Name */
      firstName: string;
      /** Id */
      id: string;
      /** Last Name */
      lastName: string;
      /** Properties */
      properties: {
          /** Label */
          label: string;
          /** Name */
          name: string;
          /** Type */
          type: string;
          /** Value */
          value: string;
      }[];
      /** Tags */
      tags: string[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /** Message */
  message?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of RETENTLY's RETENTLY_GET_FEEDBACK tool input.
 */
type RETENTLY_GET_FEEDBACK_INPUT = {
  /**
   * Campaign Id
   * @description Filter responses by a specific campaign ID
   * @default null
   */
  campaignId: string | null;
  /**
   * Customer Id
   * @description Search responses by a customer’s Retently ID
   * @default null
   */
  customerId: string | null;
  /**
   * Email
   * @description Search responses by a customer’s email address
   * @default null
   */
  email: string | null;
  /**
   * End Date
   * @description The end date for the feedback, in UNIX timestamp format.
   * @default null
   */
  endDate: string | null;
  /**
   * Limit
   * @description The items limit. Default 20
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description The current page number. Default 1
   * @default null
   */
  page: number | null;
  /**
   * Sort
   * @description The sort option. Use ‘-’ for DESC. Default ‘-createdDate’
   * @default null
   */
  sort: string | null;
  /**
   * Start Date
   * @description The start date for the feedback, in UNIX timestamp format.
   * @default null
   */
  startDate: string | null;
};

/**
 * Type of RETENTLY's RETENTLY_GET_FEEDBACK tool output.
 */
type RETENTLY_GET_FEEDBACK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Limit */
      limit: number;
      /** Page */
      page: number;
      /** Pages */
      pages: number;
      /** Responses */
      responses: {
          /**
           * Additional Questions
           * @default null
           */
          additionalQuestions: {
              /**
               * Answer
               * @default null
               */
              answer: string | null;
              /**
               * Metrics Type
               * @default null
               */
              metricsType: string | null;
              /**
               * Question Text
               * @default null
               */
              questionText: string | null;
              /**
               * Type
               * @default null
               */
              type: string | null;
          }[] | null;
          /**
           * Assigned
           * @default null
           */
          assigned: string | null;
          /**
           * Campaign Id
           * @default null
           */
          campaignId: string | null;
          /**
           * Campaign Name
           * @default null
           */
          campaignName: string | null;
          /**
           * Channel
           * @default null
           */
          channel: string | null;
          /**
           * Checkbox
           * @default null
           */
          checkbox: boolean | null;
          /**
           * City
           * @default null
           */
          city: string | null;
          /**
           * Comment
           * @default null
           */
          comment: string | null;
          /**
           * Company Id
           * @default null
           */
          companyId: string | null;
          /**
           * Company Name
           * @default null
           */
          companyName: string | null;
          /**
           * Country
           * @default null
           */
          country: string | null;
          /**
           * Created Date
           * @default null
           */
          createdDate: string | null;
          /**
           * Custom Props
           * @default null
           */
          customProps: {
              /**
               * Name
               * @default null
               */
              name: string | null;
              /**
               * Type
               * @default null
               */
              type: string | null;
              /**
               * Value
               * @default null
               */
              value: string | null;
          }[] | null;
          /**
           * Customer Id
           * @default null
           */
          customerId: string | null;
          /**
           * Email
           * @default null
           */
          email: string | null;
          /**
           * Feedback Tags
           * @default null
           */
          feedbackTags: string[] | null;
          /**
           * Feedback Tags New
           * @default null
           */
          feedbackTagsNew: string[] | null;
          /**
           * Feedback Topics
           * @default null
           */
          feedbackTopics: {
              /**
               * Name
               * @default null
               */
              name: string | null;
              /**
               * Sentiment
               * @default null
               */
              sentiment: string | null;
          }[] | null;
          /**
           * First Name
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @default null
           */
          id: string | null;
          /**
           * Is Bogus
           * @default null
           */
          isBogus: boolean | null;
          /**
           * Job Title
           * @default null
           */
          jobTitle: string | null;
          /**
           * Last Name
           * @default null
           */
          lastName: string | null;
          /**
           * Metrics Type
           * @default null
           */
          metricsType: string | null;
          /**
           * Notes
           * @default null
           */
          notes: {
              /**
               * Author
               * @default null
               */
              author: string | null;
              /**
               * Content
               * @default null
               */
              content: string | null;
              /**
               * Date
               * @default null
               */
              date: string | null;
              /**
               * Metrics Type
               * @default null
               */
              metricsType: string | null;
          }[] | null;
          /**
           * Rating Category
           * @default null
           */
          ratingCategory: string | null;
          /**
           * Resolved
           * @default null
           */
          resolved: boolean | null;
          /**
           * Score
           * @default null
           */
          score: number | null;
          /**
           * State
           * @default null
           */
          state: string | null;
          /**
           * Status
           * @default null
           */
          status: string | null;
          /**
           * Tags
           * @default null
           */
          tags: string[] | null;
      }[];
      /** Total */
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
 * Type of RETENTLY's RETENTLY_GET_FEEDBACK_BY_ID tool input.
 */
type RETENTLY_GET_FEEDBACK_BY_ID_INPUT = {
  /**
   * Feedback Id
   * @description The unique identifier of the feedback to be retrieved.
   */
  feedback_id?: string;
};

/**
 * Type of RETENTLY's RETENTLY_GET_FEEDBACK_BY_ID tool output.
 */
type RETENTLY_GET_FEEDBACK_BY_ID_OUTPUT = {
  /**
   * Code
   * @description The HTTP status code of the response.
   */
  code?: number;
  /**
   * Data
   * @description The data returned by the API.
   */
  data?: {
      /**
       * Limit
       * @description The number of items per page.
       */
      limit: number;
      /**
       * Page
       * @description The current page number.
       */
      page: number;
      /**
       * Pages
       * @description The total number of pages.
       */
      pages: number;
      /**
       * Responses
       * @description A list of feedback objects.
       */
      responses: {
          /**
           * Additional Questions
           * @description The additional questions of the feedback.
           * @default null
           */
          additionalQuestions: {
              /**
               * Answer
               * @description The answer to the additional question.
               * @default null
               */
              answer: string | null;
              /**
               * Metrics Type
               * @description The metrics type of the additional question.
               * @default null
               */
              metricsType: string | null;
              /**
               * Question Text
               * @description The text of the additional question.
               * @default null
               */
              questionText: string | null;
              /**
               * Type
               * @description The type of the additional question.
               * @default null
               */
              type: string | null;
          }[] | null;
          /**
           * Assigned
           * @description The user assigned to the feedback.
           * @default null
           */
          assigned: string | null;
          /**
           * Campaign Id
           * @description The unique identifier of the campaign.
           * @default null
           */
          campaignId: string | null;
          /**
           * Campaign Name
           * @description The name of the campaign.
           * @default null
           */
          campaignName: string | null;
          /**
           * Channel
           * @description The channel of the feedback.
           * @default null
           */
          channel: string | null;
          /**
           * Checkbox
           * @description The checkbox status of the feedback.
           * @default null
           */
          checkbox: boolean | null;
          /**
           * City
           * @description The city of the customer.
           * @default null
           */
          city: string | null;
          /**
           * Comment
           * @description The comment of the feedback.
           * @default null
           */
          comment: string | null;
          /**
           * Company Id
           * @description The unique identifier of the company.
           * @default null
           */
          companyId: string | null;
          /**
           * Company Name
           * @description The company name of the customer.
           * @default null
           */
          companyName: string | null;
          /**
           * Country
           * @description The country of the customer.
           * @default null
           */
          country: string | null;
          /**
           * Created Date
           * @description The date the feedback was created.
           * @default null
           */
          createdDate: string | null;
          /**
           * Custom Props
           * @description The custom properties of the customer.
           * @default null
           */
          customProps: {
              /**
               * Name
               * @description The name of the custom property.
               * @default null
               */
              name: string | null;
              /**
               * Type
               * @description The type of the custom property.
               * @default null
               */
              type: string | null;
              /**
               * Value
               * @description The value of the custom property.
               * @default null
               */
              value: string | null;
          }[] | null;
          /**
           * Customer Id
           * @description The unique identifier of the customer.
           * @default null
           */
          customerId: string | null;
          /**
           * Email
           * @description The email address of the customer.
           * @default null
           */
          email: string | null;
          /**
           * Feedback Tags
           * @description The tags associated with the feedback.
           * @default null
           */
          feedbackTags: string[] | null;
          /**
           * Feedback Tags New
           * @description The new tags associated with the feedback.
           * @default null
           */
          feedbackTagsNew: string[] | null;
          /**
           * Feedback Topics
           * @description The topics of the feedback.
           * @default null
           */
          feedbackTopics: {
              /**
               * Name
               * @description The name of the feedback topic.
               * @default null
               */
              name: string | null;
              /**
               * Sentiment
               * @description The sentiment of the feedback topic.
               * @default null
               */
              sentiment: string | null;
          }[] | null;
          /**
           * First Name
           * @description The first name of the customer.
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @description The unique identifier of the feedback.
           * @default null
           */
          id: string | null;
          /**
           * Is Bogus
           * @description The bogus status of the feedback.
           * @default null
           */
          isBogus: boolean | null;
          /**
           * Job Title
           * @description The job title of the customer.
           * @default null
           */
          jobTitle: string | null;
          /**
           * Last Name
           * @description The last name of the customer.
           * @default null
           */
          lastName: string | null;
          /**
           * Metrics Type
           * @description The metrics type of the feedback.
           * @default null
           */
          metricsType: string | null;
          /**
           * Notes
           * @description The notes of the feedback.
           * @default null
           */
          notes: {
              /**
               * Author
               * @description The author of the note.
               * @default null
               */
              author: string | null;
              /**
               * Content
               * @description The content of the note.
               * @default null
               */
              content: string | null;
              /**
               * Date
               * @description The date of the note.
               * @default null
               */
              date: string | null;
              /**
               * Metrics Type
               * @description The metrics type of the note.
               * @default null
               */
              metricsType: string | null;
          }[] | null;
          /**
           * Rating Category
           * @description The rating category of the feedback.
           * @default null
           */
          ratingCategory: string | null;
          /**
           * Resolved
           * @description The resolved status of the feedback.
           * @default null
           */
          resolved: boolean | null;
          /**
           * Score
           * @description The score of the feedback.
           * @default null
           */
          score: number | null;
          /**
           * State
           * @description The state of the customer.
           * @default null
           */
          state: string | null;
          /**
           * Status
           * @description The status of the feedback.
           * @default null
           */
          status: string | null;
          /**
           * Tags
           * @description The tags associated with the customer.
           * @default null
           */
          tags: string[] | null;
      }[];
      /**
       * Total
       * @description The total number of items.
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
   * Message
   * @description A message indicating the result of the request.
   */
  message?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of RETENTLY's RETENTLY_GET_LATEST_SCORE tool input.
 */
type RETENTLY_GET_LATEST_SCORE_INPUT = object;

/**
 * Type of RETENTLY's RETENTLY_GET_LATEST_SCORE tool output.
 */
type RETENTLY_GET_LATEST_SCORE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Detractors */
      detractors: number;
      /** Detractors Count */
      detractorsCount: number;
      /** Passives */
      passives: number;
      /** Passives Count */
      passivesCount: number;
      /** Promoters */
      promoters: number;
      /** Promoters Count */
      promotersCount: number;
      /**
       * RatingDistribution
       * @default null
       */
      ratingDistribution: {
          /** 0 */
          0: number;
          /** 1 */
          1: number;
          /** 2 */
          2: number;
          /** 3 */
          3: number;
          /** 4 */
          4: number;
          /** 5 */
          5: number;
          /** 6 */
          6: number;
          /** 7 */
          7: number;
          /** 8 */
          8: number;
          /** 9 */
          9: number;
          /** 10 */
          10: number;
      } | null;
      /** Score */
      score: number;
      /** Total Responses */
      totalResponses: number;
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
 * Type of RETENTLY's RETENTLY_GET_OUTBOX tool input.
 */
type RETENTLY_GET_OUTBOX_INPUT = {
  /**
   * Email
   * @description Find a customer’s outbox records by email address.
   * @default null
   */
  email: string | null;
  /**
   * Limit
   * @description The number of items per page.
   * @default 50
   */
  limit: number | null;
  /**
   * Page
   * @description The current page number.
   * @default 1
   */
  page: number | null;
  /**
   * Sort
   * @description The sort option. Use -surveyCreatedDate for results in descending order.
   * @default -surveyCreatedDate
   */
  sort: string | null;
};

/**
 * Type of RETENTLY's RETENTLY_GET_OUTBOX tool output.
 */
type RETENTLY_GET_OUTBOX_OUTPUT = {
  /** Code */
  code?: number;
  /** Data */
  data?: {
      /** Limit */
      limit: number;
      /** Page */
      page: number;
      /** Pages */
      pages: number;
      /** Sort */
      sort: string;
      /** Surveys */
      surveys: {
          /** Additional Recipients */
          additionalRecipients: unknown[];
          /**
           * Attributes
           * @description Additional attributes returned with the survey.
           * @default null
           */
          attributes: {
              [key: string]: unknown;
          } | null;
          /** Campaign */
          campaign: string;
          /** Campaign Id */
          campaignId: string;
          /** Channel */
          channel: string;
          /**
           * Company Id
           * @description The company Id if present.
           * @default null
           */
          companyId: string | null;
          /** Company Name */
          companyName: string;
          /** Detailed Status */
          detailedStatus: {
              [key: string]: unknown;
          };
          /** Email */
          email: string;
          /** Mandrill Message Id */
          mandrillMessageId: string;
          /** Person Tags */
          personTags: unknown[];
          /** Sent By */
          sentBy: string;
          /** Sent Date */
          sentDate: string;
          /** Status */
          status: string;
          /** Subject */
          subject: string;
          /** Survey Template Id */
          surveyTemplateId: string;
      }[];
      /** Total */
      total: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /** Message */
  message?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of RETENTLY's RETENTLY_GET_REPORTS tool input.
 */
type RETENTLY_GET_REPORTS_INPUT = {
  /**
   * Campaign Id
   * @description The ID of the campaign to get reports for. If not provided, reports for all campaigns will be returned.
   * @default null
   */
  campaign_id: string | null;
  /**
   * End Date
   * @description The end date for the report in YYYY-MM-DD format.
   * @default null
   */
  end_date: string | null;
  /**
   * Start Date
   * @description The start date for the report in YYYY-MM-DD format.
   * @default null
   */
  start_date: string | null;
};

/**
 * Type of RETENTLY's RETENTLY_GET_REPORTS tool output.
 */
type RETENTLY_GET_REPORTS_OUTPUT = {
  /** Code */
  code?: number;
  /** Data */
  data?: {
      /** Campaign Id */
      campaignId: string;
      /**
       * Channel
       * @default null
       */
      channel: string | null;
      /** Delivery Stats */
      deliveryStats: {
          /** Is Bounced */
          isBounced: number;
          /** Opened */
          opened: number;
          /** Opted Out */
          optedOut: number;
          /** Responded */
          responded: number;
          /** Total Count */
          totalCount: number;
      };
      /** Is Active */
      isActive: boolean;
      /** Last */
      last: {
          /** Detractors */
          detractors: number;
          /** Passives */
          passives: number;
          /** Promoters */
          promoters: number;
          /**
           * Rating Distribution
           * @default null
           */
          ratingDistribution: {
              [key: string]: number;
          } | null;
          /** Total */
          total: number;
      };
      /** Metric */
      metric: string;
      /** Name */
      name: string;
      /** Questions Stats */
      questionsStats: {
          /** Is On Main */
          isOnMain: boolean;
          /** Is Starred */
          isStarred: boolean;
          /** Metrics Type */
          metricsType: string;
          /** Position */
          position: number;
          /** Stats */
          stats: {
              /** First */
              first: {
                  /** Day */
                  day: string;
                  /** Detractors */
                  detractors: number;
                  /** Opened */
                  opened: number;
                  /** Passives */
                  passives: number;
                  /** Promoters */
                  promoters: number;
                  /** Responded */
                  responded: number;
                  /** Score */
                  score: number;
                  /** Score Sum */
                  scoreSum: number;
                  /** Skipped */
                  skipped: number;
                  /** Total */
                  total: number;
              };
              /** Last */
              last: {
                  /** Day */
                  day: string;
                  /** Detractors */
                  detractors: number;
                  /** Opened */
                  opened: number;
                  /** Passives */
                  passives: number;
                  /** Promoters */
                  promoters: number;
                  /** Responded */
                  responded: number;
                  /** Score */
                  score: number;
                  /** Score Sum */
                  scoreSum: number;
                  /** Skipped */
                  skipped: number;
                  /** Total */
                  total: number;
              };
          };
          /** Title */
          title: string;
          /** Uuid */
          uuid: string;
      }[];
      /**
       * Score
       * @default null
       */
      score: string | null;
      /** Trend */
      trend: {
          /** Day */
          day: string;
          /** Detractors */
          detractors: number;
          /** Passives */
          passives: number;
          /** Promoters */
          promoters: number;
          /** Rating Distribution */
          ratingDistribution: {
              [key: string]: number;
          };
          /** Score */
          score: number;
          /** Total */
          total: number;
      }[];
      /** Type */
      type: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /** Message */
  message?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of RETENTLY's RETENTLY_GET_TEMPLATES tool input.
 */
type RETENTLY_GET_TEMPLATES_INPUT = object;

/**
 * Type of RETENTLY's RETENTLY_GET_TEMPLATES tool output.
 */
type RETENTLY_GET_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description The status code of the response.
       */
      code: number;
      /**
       * Message
       * @description A message indicating the result of the request.
       */
      message: string;
      /**
       * Templates
       * @description A list of survey templates.
       */
      templates: {
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
 * Type of RETENTLY's RETENTLY_SEND_TRANSACTIONAL_SURVEY tool input.
 */
type RETENTLY_SEND_TRANSACTIONAL_SURVEY_INPUT = {
  /**
   * Campaign Id
   * @description The ID of the campaign where the customers will be surveyed.
   */
  campaign_id?: string;
  /**
   * Delay
   * @description The delay in days to send the survey after the triggered event.
   * @default null
   */
  delay: number | null;
  /**
   * Subscribers
   * @description A list of customers to send the survey to.
   */
  subscribers?: {
      /**
       * Company
       * @description The company name of the customer.
       * @default null
       */
      company: string | null;
      /**
       * Email
       * @description The email address of the customer.
       */
      email: string;
      /**
       * First Name
       * @description The first name of the customer.
       * @default null
       */
      first_name: string | null;
      /**
       * Last Name
       * @description The last name of the customer.
       * @default null
       */
      last_name: string | null;
      /**
       * Properties
       * @description An array of custom properties for the customer.
       * @default null
       */
      properties: {
          /**
           * Label
           * @description The name of the property as it will be displayed in Retently.
           */
          label: string;
          /**
           * Type
           * @description The type of the property.
           * @enum {string}
           */
          type: "string" | "date" | "integer" | "collection" | "boolean";
          /**
           * Value
           * @description The value to be stored in the property.
           */
          value: string | null;
      }[] | null;
      /**
       * Tags
       * @description An array of tags to be associated with the customer.
       * @default null
       */
      tags: string[] | null;
  }[];
};

/**
 * Type of RETENTLY's RETENTLY_SEND_TRANSACTIONAL_SURVEY tool output.
 */
type RETENTLY_SEND_TRANSACTIONAL_SURVEY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description The HTTP status code of the response.
       */
      code: number;
      /**
       * Message
       * @description A message describing the result of the request.
       */
      message: string;
      /**
       * Status
       * @description The status of the request.
       * @default null
       */
      status: string | null;
      /**
       * Success
       * @description Indicates whether the request was successful.
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
 * Type of RETENTLY's RETENTLY_UNSUBSCRIBE_CUSTOMERS tool input.
 */
type RETENTLY_UNSUBSCRIBE_CUSTOMERS_INPUT = {
  /**
   * Message
   * @description Opt out message.
   * @default null
   */
  message: string | null;
  /**
   * Subscribers
   * @description An array of subscriber emails.
   */
  subscribers?: {
      [key: string]: string;
  }[];
};

/**
 * Type of RETENTLY's RETENTLY_UNSUBSCRIBE_CUSTOMERS tool output.
 */
type RETENTLY_UNSUBSCRIBE_CUSTOMERS_OUTPUT = {
  /**
   * Code
   * @description The HTTP status code of the response.
   */
  code?: number;
  /**
   * Data
   * @description A list of objects containing the email of the unsubscribed customer and a boolean flag indicating the unsubscribed status.
   */
  data?: {
      [key: string]: string | boolean;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description A message indicating the result of the operation.
   */
  message?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "RETENTLY".
 */
export type RETENTLY_TOOL_INPUTS = {
  ADD_FEEDBACK_TAGS: RETENTLY_ADD_FEEDBACK_TAGS_INPUT
  ADD_FEEDBACK_TOPICS: RETENTLY_ADD_FEEDBACK_TOPICS_INPUT
  CREATE_OR_UPDATE_CUSTOMERS: RETENTLY_CREATE_OR_UPDATE_CUSTOMERS_INPUT
  DELETE_CUSTOMERS: RETENTLY_DELETE_CUSTOMERS_INPUT
  GET_CAMPAIGNS: RETENTLY_GET_CAMPAIGNS_INPUT
  GET_CUSTOMERS: RETENTLY_GET_CUSTOMERS_INPUT
  GET_CUSTOMER_BY_ID: RETENTLY_GET_CUSTOMER_BY_ID_INPUT
  GET_FEEDBACK: RETENTLY_GET_FEEDBACK_INPUT
  GET_FEEDBACK_BY_ID: RETENTLY_GET_FEEDBACK_BY_ID_INPUT
  GET_LATEST_SCORE: RETENTLY_GET_LATEST_SCORE_INPUT
  GET_OUTBOX: RETENTLY_GET_OUTBOX_INPUT
  GET_REPORTS: RETENTLY_GET_REPORTS_INPUT
  GET_TEMPLATES: RETENTLY_GET_TEMPLATES_INPUT
  SEND_TRANSACTIONAL_SURVEY: RETENTLY_SEND_TRANSACTIONAL_SURVEY_INPUT
  UNSUBSCRIBE_CUSTOMERS: RETENTLY_UNSUBSCRIBE_CUSTOMERS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "RETENTLY".
 */
export type RETENTLY_TOOL_OUTPUTS = {
  ADD_FEEDBACK_TAGS: RETENTLY_ADD_FEEDBACK_TAGS_OUTPUT
  ADD_FEEDBACK_TOPICS: RETENTLY_ADD_FEEDBACK_TOPICS_OUTPUT
  CREATE_OR_UPDATE_CUSTOMERS: RETENTLY_CREATE_OR_UPDATE_CUSTOMERS_OUTPUT
  DELETE_CUSTOMERS: RETENTLY_DELETE_CUSTOMERS_OUTPUT
  GET_CAMPAIGNS: RETENTLY_GET_CAMPAIGNS_OUTPUT
  GET_CUSTOMERS: RETENTLY_GET_CUSTOMERS_OUTPUT
  GET_CUSTOMER_BY_ID: RETENTLY_GET_CUSTOMER_BY_ID_OUTPUT
  GET_FEEDBACK: RETENTLY_GET_FEEDBACK_OUTPUT
  GET_FEEDBACK_BY_ID: RETENTLY_GET_FEEDBACK_BY_ID_OUTPUT
  GET_LATEST_SCORE: RETENTLY_GET_LATEST_SCORE_OUTPUT
  GET_OUTBOX: RETENTLY_GET_OUTBOX_OUTPUT
  GET_REPORTS: RETENTLY_GET_REPORTS_OUTPUT
  GET_TEMPLATES: RETENTLY_GET_TEMPLATES_OUTPUT
  SEND_TRANSACTIONAL_SURVEY: RETENTLY_SEND_TRANSACTIONAL_SURVEY_OUTPUT
  UNSUBSCRIBE_CUSTOMERS: RETENTLY_UNSUBSCRIBE_CUSTOMERS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's RETENTLY toolkit.
 */
export const RETENTLY = {
  slug: "retently",
  tools: {
    /**
     * Add tags to feedback items by providing feedback ids and corresponding tags.
     */
    ADD_FEEDBACK_TAGS: "RETENTLY_ADD_FEEDBACK_TAGS",
    /**
     * Add topics to feedback items by providing feedback ids and corresponding topics.
     */
    ADD_FEEDBACK_TOPICS: "RETENTLY_ADD_FEEDBACK_TOPICS",
    /**
     * Tool to create new customers or update existing ones by providing their details, including email, name, company, tags, and properties. use this to manage your customer base in retently.
     */
    CREATE_OR_UPDATE_CUSTOMERS: "RETENTLY_CREATE_OR_UPDATE_CUSTOMERS",
    /**
     * Delete customers from the workspace by providing their unique ids.
     */
    DELETE_CUSTOMERS: "RETENTLY_DELETE_CUSTOMERS",
    /**
     * Tool to retrieve a list of campaigns associated with the account. use when you need to get details about all campaigns.
     */
    GET_CAMPAIGNS: "RETENTLY_GET_CAMPAIGNS",
    /**
     * Retrieve a list of customers with optional parameters for pagination, sorting, and filtering by email or date range.
     */
    GET_CUSTOMERS: "RETENTLY_GET_CUSTOMERS",
    /**
     * Tool to retrieve detailed information about a specific customer by their unique id. use when you need to get all the details of a customer.
     */
    GET_CUSTOMER_BY_ID: "RETENTLY_GET_CUSTOMER_BY_ID",
    /**
     * Tool to retrieve feedback received from customers. use when you need to get a list of feedback, with optional parameters for pagination and sorting.
     */
    GET_FEEDBACK: "RETENTLY_GET_FEEDBACK",
    /**
     * Tool to retrieve detailed information about specific feedback by its unique id. use when you need to get the details of a single feedback entry.
     */
    GET_FEEDBACK_BY_ID: "RETENTLY_GET_FEEDBACK_BY_ID",
    /**
     * Tool to retrieve the latest nps score for the account. use when you need to get the most up-to-date nps score.
     */
    GET_LATEST_SCORE: "RETENTLY_GET_LATEST_SCORE",
    /**
     * Retrieve the outbox of surveys that are scheduled to be sent.
     */
    GET_OUTBOX: "RETENTLY_GET_OUTBOX",
    /**
     * Tool to retrieve reports related to nps surveys, including scores and trends. use when you need to get campaign performance data.
     */
    GET_REPORTS: "RETENTLY_GET_REPORTS",
    /**
     * Tool to retrieve a list of survey templates available in the account. use when you need to get the available survey templates.
     */
    GET_TEMPLATES: "RETENTLY_GET_TEMPLATES",
    /**
     * Tool to send a transactional survey to customers. use when you need to send a survey to a customer after a specific event, with an optional delay.
     */
    SEND_TRANSACTIONAL_SURVEY: "RETENTLY_SEND_TRANSACTIONAL_SURVEY",
    /**
     * Unsubscribe customers from receiving surveys by providing their email addresses.
     */
    UNSUBSCRIBE_CUSTOMERS: "RETENTLY_UNSUBSCRIBE_CUSTOMERS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "RETENTLY".
 */
export type RETENTLY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "RETENTLY".
 */
export type RETENTLY_TRIGGER_EVENTS = {}
