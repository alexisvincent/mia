// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BREVO's BREVO_CREATE_A_COMPANY tool input.
 */
type BREVO_CREATE_A_COMPANY_INPUT = {
  /**
   * Attributes
   * @description Object containing the attributes of the company. Common attributes include 'domain', 'industry', 'owner' (ID of an existing user).
   * @default null
   */
  attributes: {
      [key: string]: unknown;
  } | null;
  /**
   * Country Code
   * @description Country code of the company. (e.g., 91 for India)
   * @default null
   */
  countryCode: number | null;
  /**
   * Name
   * @description Name of the company to be created.
   */
  name?: string;
};

/**
 * Type of BREVO's BREVO_CREATE_A_COMPANY tool output.
 */
type BREVO_CREATE_A_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the newly created company.
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
 * Type of BREVO's BREVO_CREATE_OR_UPDATE_EMAIL_TEMPLATE tool input.
 */
type BREVO_CREATE_OR_UPDATE_EMAIL_TEMPLATE_INPUT = {
  /**
   * Attachment Url
   * @description URL of a file to be attached to the email.
   * @default null
   */
  attachmentUrl: string | null;
  /**
   * Html Content
   * @description The HTML content of the email template. Use this or htmlUrl, not both.
   * @default null
   */
  htmlContent: string | null;
  /**
   * Html Url
   * @description A URL to the HTML content of the email template. Use this or htmlContent, not both.
   * @default null
   */
  htmlUrl: string | null;
  /**
   * Is Active
   * @description Set to true to activate the template, false to deactivate.
   * @default null
   */
  isActive: boolean | null;
  /**
   * Reply To
   * @description The email address for replies.
   * @default null
   */
  replyTo: string | null;
  /**
   * SenderInfo
   * @description Sender information.
   * @default null
   */
  sender: {
      /**
       * Email
       * @description Sender's email. Mandatory if id is not passed.
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description Sender's ID (if pre-defined in Brevo).
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description Sender's name. Mandatory if id is not passed.
       * @default null
       */
      name: string | null;
  } | null;
  /**
   * Subject
   * @description Subject line of the email.
   * @default null
   */
  subject: string | null;
  /**
   * Tag
   * @description A tag to categorize the template.
   * @default null
   */
  tag: string | null;
  /**
   * Template Id
   * @description ID of the template to update. If not provided, a new template will be created.
   * @default null
   */
  templateId: number | null;
  /**
   * Template Name
   * @description Name of the email template.
   * @default null
   */
  templateName: string | null;
  /**
   * To Field
   * @description The 'to' field for the template, e.g., '{FNAME} {LNAME}'.
   * @default null
   */
  toField: string | null;
};

/**
 * Type of BREVO's BREVO_CREATE_OR_UPDATE_EMAIL_TEMPLATE tool output.
 */
type BREVO_CREATE_OR_UPDATE_EMAIL_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the created template (only for creation).
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Success message.
       * @default null
       */
      message: string | null;
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
 * Type of BREVO's BREVO_CREATE_SMS_CAMPAIGN tool input.
 */
type BREVO_CREATE_SMS_CAMPAIGN_INPUT = {
  /**
   * Content
   * @description Content of the message. The maximum characters used per SMS is 160; if used more than that, it will be counted as more than one SMS.
   */
  content?: string;
  /**
   * Name
   * @description Name of the campaign.
   */
  name?: string;
  /**
   * Organisation Prefix
   * @description A recognizable prefix will ensure your audience knows who you are. Recommended by U.S. carriers. This will be added as your Brand Name before the message content. Prefer verifying maximum length of 160 characters including this prefix in message content to avoid multiple sending of same sms.
   * @default null
   */
  organisationPrefix: string | null;
  /**
   * CreateSmsCampaignRecipients
   * @description Recipients of the campaign. You can provide list IDs, exclusion list IDs, or segment IDs.
   * @default null
   */
  recipients: {
      /**
       * Exclusion List Ids
       * @description List of contact list IDs to exclude from the campaign.
       * @default null
       */
      exclusionListIds: number[] | null;
      /**
       * List Ids
       * @description List of contact list IDs to send the campaign to.
       * @default null
       */
      listIds: number[] | null;
      /**
       * Segment Ids
       * @description List of segment IDs to send the campaign to.
       * @default null
       */
      segmentIds: number[] | null;
  } | null;
  /**
   * Scheduled At
   * @description UTC date-time on which the campaign has to run (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result.
   * @default null
   */
  scheduledAt: string | null;
  /**
   * Sender
   * @description Name of the sender. The number of characters is limited to 11 for alphanumeric characters and 15 for numeric characters.
   */
  sender?: string;
  /**
   * Unicode Enabled
   * @description Format of the message. It indicates whether the content should be treated as unicode or not. Defaults to false.
   * @default false
   */
  unicodeEnabled: boolean | null;
  /**
   * Unsubscribe Instruction
   * @description Instructions to unsubscribe from future communications. Recommended by U.S. carriers. Must include STOP keyword. This will be added as instructions after the end of message content. Prefer verifying maximum length of 160 characters including this instructions in message content to avoid multiple sending of same sms.
   * @default null
   */
  unsubscribeInstruction: string | null;
};

/**
 * Type of BREVO's BREVO_CREATE_SMS_CAMPAIGN tool output.
 */
type BREVO_CREATE_SMS_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description ID of the created SMS campaign.
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
 * Type of BREVO's BREVO_DELETE_COMPANY tool input.
 */
type BREVO_DELETE_COMPANY_INPUT = {
  /**
   * Id
   * @description ID of the company to delete.
   */
  id?: string;
};

/**
 * Type of BREVO's BREVO_DELETE_COMPANY tool output.
 */
type BREVO_DELETE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the success of the deletion.
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
 * Type of BREVO's BREVO_DELETE_CONTACT tool input.
 */
type BREVO_DELETE_CONTACT_INPUT = {
  /**
   * Identifier
   * @description Identifier of the contact to delete. This can be the contact's email address or their unique Brevo ID.
   */
  identifier?: string;
};

/**
 * Type of BREVO's BREVO_DELETE_CONTACT tool output.
 */
type BREVO_DELETE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A confirmation message indicating the contact was deleted.
       * @default Contact deleted successfully.
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
 * Type of BREVO's BREVO_DELETE_EMAIL_TEMPLATE tool input.
 */
type BREVO_DELETE_EMAIL_TEMPLATE_INPUT = {
  /**
   * Template Id
   * @description ID of the template to delete
   */
  template_id?: number;
};

/**
 * Type of BREVO's BREVO_DELETE_EMAIL_TEMPLATE tool output.
 */
type BREVO_DELETE_EMAIL_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description A message indicating the success or failure of the deletion.
       * @default null
       */
      message: string | null;
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
 * Type of BREVO's BREVO_DELETE_SMS_CAMPAIGN tool input.
 */
type BREVO_DELETE_SMS_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description ID of the SMS campaign to delete.
   */
  campaign_id?: number;
};

/**
 * Type of BREVO's BREVO_DELETE_SMS_CAMPAIGN tool output.
 */
type BREVO_DELETE_SMS_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message indicating the campaign was deleted.
       * @default SMS campaign deleted successfully.
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
 * Type of BREVO's BREVO_FIND_CONTACT tool input.
 */
type BREVO_FIND_CONTACT_INPUT = {
  /**
   * Email
   * @description Email address of the contact to search for.
   * @default null
   */
  email: string | null;
  /**
   * Mobile Number
   * @description Mobile phone number of the contact to search for (e.g., '+16135551234').
   * @default null
   */
  mobile_number: string | null;
};

/**
 * Type of BREVO's BREVO_FIND_CONTACT tool output.
 */
type BREVO_FIND_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * ContactDetails
       * @description Details of the found contact.
       * @default null
       */
      contact_details: {
          /**
           * Attributes
           * @description Attributes of the contact, may include SMS for phone number.
           * @default null
           */
          attributes: {
              [key: string]: unknown;
          } | null;
          /**
           * Email
           * @description Email address of the contact.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description ID of the contact.
           * @default null
           */
          id: number | null;
          /**
           * Phone Number Found
           * @description Phone number used for search if contact found via phone.
           * @default null
           */
          phone_number_found: string | null;
      } | null;
      /**
       * Found
       * @description Indicates whether a contact was found.
       */
      found: boolean;
      /**
       * Message
       * @description A descriptive message about the outcome of the search.
       */
      message: string;
      /** Search Method Used */
      search_method_used: string;
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
 * Type of BREVO's BREVO_GET_ACCOUNT_INFO tool input.
 */
type BREVO_GET_ACCOUNT_INFO_INPUT = object;

/**
 * Type of BREVO's BREVO_GET_ACCOUNT_INFO tool output.
 */
type BREVO_GET_ACCOUNT_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Address */
      address: {
          /**
           * City
           * @description City information
           */
          city: string;
          /**
           * Country
           * @description Country information
           */
          country: string;
          /**
           * Street
           * @description Street information
           */
          street: string;
          /**
           * Zip Code
           * @description Zip Code information
           */
          zipCode: string;
      };
      /**
       * Company Name
       * @description Name of the company
       */
      companyName: string;
      /**
       * Email
       * @description Login Email
       */
      email: string;
      /**
       * First Name
       * @description First Name
       */
      firstName: string;
      /**
       * Last Name
       * @description Last Name
       */
      lastName: string;
      /**
       * MarketingAutomation
       * @description Marketing Automation details
       * @default null
       */
      marketingAutomation: {
          /**
           * Enabled
           * @description Status of Marketing Automation Platform activation for your account
           */
          enabled: boolean;
          /**
           * Key
           * @description Marketing Automation Tracker ID
           * @default null
           */
          key: string | null;
      } | null;
      /**
       * Plan
       * @description Information about your plans and credits
       */
      plan: {
          /**
           * Credits
           * @description Remaining credits of the user
           */
          credits: number;
          /**
           * Credits Type
           * @description Type of credit
           */
          creditsType: string;
          /**
           * End Date
           * Format: date
           * @description Date of the period from which the plan will end
           * @default null
           */
          endDate: string | null;
          /**
           * Start Date
           * Format: date
           * @description Date of the period from which the plan will start
           * @default null
           */
          startDate: string | null;
          /**
           * Type
           * @description Displays the plan type of the user
           */
          type: string;
      }[];
      /** Relay */
      relay: {
          /**
           * Data
           * @description Data regarding the transactional email account
           */
          data: Record<string, never>;
          /**
           * Enabled
           * @description Status of your transactional email Account
           */
          enabled: boolean;
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
 * Type of BREVO's BREVO_GET_ALL_CONTACTS tool input.
 */
type BREVO_GET_ALL_CONTACTS_INPUT = {
  /**
   * Created Since
   * @description Filter (urlencoded) contacts created after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ).
   * @default null
   */
  created_since: string | null;
  /**
   * Limit
   * @description Number of documents per page
   * @default 50
   */
  limit: number | null;
  /**
   * List Ids
   * @description Comma separated list of Ids of lists to filter contacts.
   * @default null
   */
  list_ids: number[] | null;
  /**
   * Modified Since
   * @description Filter (urlencoded) contacts modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ).
   * @default null
   */
  modified_since: string | null;
  /**
   * Offset
   * @description Index of the first document of the page
   * @default 0
   */
  offset: number | null;
  /**
   * Segment Id
   * @description Id of the segment.
   * @default null
   */
  segment_id: number | null;
  /**
   * Sort
   * @description Sort the results in the ascending/descending order of record creation.
   * @default desc
   * @enum {string|null}
   */
  sort: "asc" | "desc" | null;
};

/**
 * Type of BREVO's BREVO_GET_ALL_CONTACTS tool output.
 */
type BREVO_GET_ALL_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Contacts
       * @description List of contacts
       * @default null
       */
      contacts: {
          /** Attributes */
          attributes: {
              [key: string]: unknown;
          } | null;
          /** Created At */
          createdAt: string;
          /** Email */
          email: string;
          /**
           * Email Blacklisted
           * @default null
           */
          emailBlacklisted: boolean | null;
          /** Id */
          id: number;
          /** List Ids */
          listIds: number[];
          /** Modified At */
          modifiedAt: string;
          /**
           * Sms Blacklisted
           * @default null
           */
          smsBlacklisted: boolean | null;
      }[] | null;
      /**
       * Count
       * @description Number of contacts
       * @default null
       */
      count: number | null;
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
 * Type of BREVO's BREVO_GET_ALL_EMAIL_TEMPLATES tool input.
 */
type BREVO_GET_ALL_EMAIL_TEMPLATES_INPUT = {
  /**
   * Limit
   * @description Number of documents returned per page
   * @default 50
   */
  limit: number | null;
  /**
   * Offset
   * @description Index of the first document in the page
   * @default 0
   */
  offset: number | null;
  /**
   * SortOrder
   * @description Sort the results in the ascending/descending order of record creation. Default order is descending if sort is not passed
   * @default desc
   * @enum {string|null}
   */
  sort: "asc" | "desc" | null;
  /**
   * Template Status
   * @description Filter on the status of the template. Active = true, inactive = false
   * @default null
   */
  templateStatus: boolean | null;
};

/**
 * Type of BREVO's BREVO_GET_ALL_EMAIL_TEMPLATES tool output.
 */
type BREVO_GET_ALL_EMAIL_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Count of transactional email templates
       * @default null
       */
      count: number | null;
      /**
       * Templates
       * @description List of transactional email templates
       * @default null
       */
      templates: {
          /**
           * Created At
           * @description Creation UTC date-time of the template (YYYY-MM-DDTHH:mm:ss.SSSZ)
           */
          createdAt: string;
          /**
           * Doi Template
           * @description It is true if template is a valid Double opt-in (DOI) template, otherwise it is false. This field will be available only in case of single template detail call.
           * @default null
           */
          doiTemplate: boolean | null;
          /**
           * Html Content
           * @description HTML content of the template
           */
          htmlContent: string;
          /**
           * Id
           * @description ID of the template
           */
          id: number;
          /**
           * Is Active
           * @description Status of template (true=active, false=inactive)
           */
          isActive: boolean;
          /**
           * Modified At
           * @description Last modification UTC date-time of the template (YYYY-MM-DDTHH:mm:ss.SSSZ)
           */
          modifiedAt: string;
          /**
           * Name
           * @description Name of the template
           */
          name: string;
          /**
           * Reply To
           * @description Email defined as the "Reply to" for the template
           */
          replyTo: string;
          /**
           * Sender
           * @description Sender object
           * @default null
           */
          sender: {
              /**
               * Email
               * @description Email of the sender
               * @default null
               */
              email: string | null;
              /**
               * Id
               * @description ID of the sender
               * @default null
               */
              id: number | null;
              /**
               * Name
               * @description Name of the sender
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Subject
           * @description Subject of the template
           */
          subject: string;
          /**
           * Tag
           * @description Tag of the template
           */
          tag: string;
          /**
           * Test Sent
           * @description Status of test sending for the template (true=test email has been sent, false=test email has not been sent)
           */
          testSent: boolean;
          /**
           * To Field
           * @description Customisation of the "to" field for the template
           */
          toField: string;
      }[] | null;
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
 * Type of BREVO's BREVO_GET_ALL_SENDERS tool input.
 */
type BREVO_GET_ALL_SENDERS_INPUT = {
  /**
   * Domain
   * @description Filter senders for a specific domain
   * @default null
   */
  domain: string | null;
  /**
   * Ip
   * @description Filter senders for a specific ip. Available for dedicated IP usage only
   * @default null
   */
  ip: string | null;
};

/**
 * Type of BREVO's BREVO_GET_ALL_SENDERS tool output.
 */
type BREVO_GET_ALL_SENDERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Senders
       * @description List of the senders available in your account
       * @default null
       */
      senders: {
          /**
           * Active
           * @description Status of sender (true=activated, false=deactivated)
           */
          active: boolean;
          /**
           * Email
           * @description From Email associated to the sender
           */
          email: string;
          /**
           * Id
           * @description Id of the sender
           */
          id: number;
          /**
           * Ips
           * @description List of dedicated IP(s) available in the account. This data is displayed only for dedicated IPs
           * @default null
           */
          ips: {
              /**
               * Domain
               * @description Domain of the IP
               */
              domain: string;
              /**
               * Ip
               * @description Dedicated IP available in your account
               */
              ip: string;
              /**
               * Weight
               * @description Weight of the IP for this sender
               */
              weight: number;
          }[] | null;
          /**
           * Name
           * @description From Name associated to the sender
           */
          name: string;
      }[] | null;
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
 * Type of BREVO's BREVO_GET_COMPANY_DETAILS tool input.
 */
type BREVO_GET_COMPANY_DETAILS_INPUT = {
  /**
   * Id
   * @description ID of the company to retrieve.
   */
  id?: string;
};

/**
 * Type of BREVO's BREVO_GET_COMPANY_DETAILS tool output.
 */
type BREVO_GET_COMPANY_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attributes
       * @description Company attributes with values.
       * @default null
       */
      attributes: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description Unique company ID.
       * @default null
       */
      id: string | null;
      /**
       * Linked Contacts Ids
       * @description Contact IDs for contacts linked to this company.
       * @default null
       */
      linkedContactsIds: number[] | null;
      /**
       * Linked Deals Ids
       * @description Deal IDs for deals linked to this company.
       * @default null
       */
      linkedDealsIds: string[] | null;
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
 * Type of BREVO's BREVO_GET_CONTACT_DETAILS tool input.
 */
type BREVO_GET_CONTACT_DETAILS_INPUT = {
  /**
   * Identifier
   * @description Identifier of the contact. Can be an email (URL-encoded), contact ID, SMS, WhatsApp, landline, or external ID. Brevo infers the type of identifier automatically.
   */
  identifier?: string;
};

/**
 * Type of BREVO's BREVO_GET_CONTACT_DETAILS tool output.
 */
type BREVO_GET_CONTACT_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attributes
       * @description Set of attributes of the contact.
       */
      attributes: {
          [key: string]: unknown;
      };
      /**
       * Created At
       * @description Creation UTC date-time of the contact (YYYY-MM-DDTHH:mm:ss.SSSZ).
       */
      createdAt: string;
      /**
       * Email
       * @description Email address of the contact.
       * @default null
       */
      email: string | null;
      /**
       * Email Blacklisted
       * @description Blacklist status for email campaigns.
       * @default null
       */
      emailBlacklisted: boolean | null;
      /**
       * Id
       * @description ID of the contact.
       */
      id: number;
      /**
       * List Ids
       * @description List IDs the contact belongs to.
       */
      listIds: number[];
      /**
       * List Unsubscribed
       * @description List IDs from which the contact is unsubscribed.
       * @default null
       */
      listUnsubscribed: number[] | null;
      /**
       * Modified At
       * @description Last modification UTC date-time of the contact (YYYY-MM-DDTHH:mm:ss.SSSZ).
       */
      modifiedAt: string;
      /**
       * Sms Blacklisted
       * @description Blacklist status for SMS campaigns.
       * @default null
       */
      smsBlacklisted: boolean | null;
      /**
       * Statistics
       * @description Campaign statistics of the contact.
       * @default null
       */
      statistics: {
          /**
           * Clicked
           * @default null
           */
          clicked: {
              /** Campaign Id */
              campaignId: number;
              /** Links */
              links: {
                  /** Count */
                  count: number;
                  /** Event Time */
                  eventTime: string;
                  /** Ip */
                  ip: string;
                  /** Url */
                  url: string;
              }[];
          }[] | null;
          /**
           * Complaints
           * @default null
           */
          complaints: {
              /** Campaign Id */
              campaignId: number;
              /** Event Time */
              eventTime: string;
          }[] | null;
          /**
           * Delivered
           * @default null
           */
          delivered: {
              /** Campaign Id */
              campaignId: number;
              /** Event Time */
              eventTime: string;
          }[] | null;
          /**
           * Hard Bounces
           * @default null
           */
          hardBounces: {
              /** Campaign Id */
              campaignId: number;
              /** Event Time */
              eventTime: string;
          }[] | null;
          /**
           * Messages Sent
           * @default null
           */
          messagesSent: {
              /** Campaign Id */
              campaignId: number;
              /** Event Time */
              eventTime: string;
          }[] | null;
          /**
           * Opened
           * @default null
           */
          opened: {
              /** Campaign Id */
              campaignId: number;
              /** Count */
              count: number;
              /** Event Time */
              eventTime: string;
              /** Ip */
              ip: string;
          }[] | null;
          /**
           * Soft Bounces
           * @default null
           */
          softBounces: {
              /** Campaign Id */
              campaignId: number;
              /** Event Time */
              eventTime: string;
          }[] | null;
          /**
           * Transac Attributes
           * @default null
           */
          transacAttributes: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Unsubscriptions
           * @default null
           */
          unsubscriptions: {
              /**
               * Master Unsubscription List
               * @default null
               */
              masterUnsubscriptionList: {
                  [key: string]: unknown;
              }[] | null;
              /**
               * User Unsubscription List
               * @default null
               */
              userUnsubscriptionList: {
                  [key: string]: unknown;
              }[] | null;
          } | null;
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
 * Type of BREVO's BREVO_GET_SMS_CAMPAIGNS tool input.
 */
type BREVO_GET_SMS_CAMPAIGNS_INPUT = {
  /**
   * End Date
   * @description Ending UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter sent SMS campaigns. Mandatory if startDate is used.
   * @default null
   */
  endDate: string | null;
  /**
   * Limit
   * @description Number of results to return.
   * @default 500
   */
  limit: number | null;
  /**
   * Offset
   * @description Beginning point in the list to retrieve from.
   * @default 0
   */
  offset: number | null;
  /**
   * Sort
   * @description Sort the results in ascending (asc) or descending (desc) order of record creation.
   * @default desc
   */
  sort: string | null;
  /**
   * Start Date
   * @description Starting UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter sent SMS campaigns. Mandatory if endDate is used.
   * @default null
   */
  startDate: string | null;
  /**
   * Status
   * @description Filter campaigns by their status.
   * @default null
   */
  status: string | null;
};

/**
 * Type of BREVO's BREVO_GET_SMS_CAMPAIGNS tool output.
 */
type BREVO_GET_SMS_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaigns
       * @description List of SMS campaigns.
       * @default null
       */
      campaigns: {
          /**
           * Content
           * @description Content of the SMS campaign.
           */
          content: string;
          /**
           * Created At
           * @description Creation date and time of the SMS campaign.
           */
          createdAt: string;
          /**
           * Id
           * @description ID of the SMS campaign.
           */
          id: number;
          /**
           * Modified At
           * @description Last modification date and time of the SMS campaign.
           */
          modifiedAt: string;
          /**
           * Name
           * @description Name of the SMS campaign.
           */
          name: string;
          /**
           * Recipients
           * @description Recipients of the SMS campaign.
           * @default null
           */
          recipients: {
              [key: string]: unknown;
          } | null;
          /**
           * Scheduled At
           * @description Scheduled date and time of the SMS campaign.
           * @default null
           */
          scheduledAt: string | null;
          /**
           * Sender
           * @description Sender of the SMS campaign.
           */
          sender: string;
          /**
           * Statistics
           * @description Statistics of the SMS campaign.
           * @default null
           */
          statistics: {
              [key: string]: unknown;
          } | null;
          /**
           * Status
           * @description Status of the SMS campaign.
           */
          status: string;
          /**
           * Test Sent
           * @description Indicates if a test SMS was sent for this campaign.
           */
          testSent: boolean;
      }[] | null;
      /**
       * Count
       * @description Number of SMS campaigns retrieved.
       * @default null
       */
      count: number | null;
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
 * Type of BREVO's BREVO_GET_SMS_CAMPAIGN_DETAILS tool input.
 */
type BREVO_GET_SMS_CAMPAIGN_DETAILS_INPUT = {
  /**
   * Campaign Id
   * @description Id of the campaign
   */
  campaign_id?: number;
};

/**
 * Type of BREVO's BREVO_GET_SMS_CAMPAIGN_DETAILS tool output.
 */
type BREVO_GET_SMS_CAMPAIGN_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Content of the campaign
       */
      content: string;
      /**
       * Created At
       * @description Creation date of the campaign
       */
      created_at: string;
      /**
       * Footer
       * @description Footer of the campaign
       * @default null
       */
      footer: string | null;
      /**
       * Header
       * @description Header of the campaign
       * @default null
       */
      header: string | null;
      /**
       * Id
       * @description ID of the campaign
       */
      id: number;
      /**
       * Inline Image Activation
       * @description Inline image activation status
       * @default null
       */
      inline_image_activation: boolean | null;
      /**
       * Mirror Active
       * @description Mirror active status
       * @default null
       */
      mirror_active: boolean | null;
      /**
       * Modified At
       * @description Last modification date of the campaign
       */
      modified_at: string;
      /**
       * Name
       * @description Name of the campaign
       */
      name: string;
      /**
       * Recurring
       * @description Recurring status
       * @default null
       */
      recurring: boolean | null;
      /**
       * Reply To
       * @description Reply to address of the campaign
       * @default null
       */
      reply_to: string | null;
      /**
       * Return Bounce
       * @description Return bounce count
       * @default null
       */
      return_bounce: number | null;
      /**
       * Scheduled At
       * @description Scheduled at date and time
       * @default null
       */
      scheduled_at: string | null;
      /**
       * Sender
       * @description Sender of the campaign
       */
      sender: string;
      /**
       * Sent Date
       * @description Sent date of the campaign
       * @default null
       */
      sent_date: string | null;
      /**
       * Status
       * @description Status of the campaign
       */
      status: string;
      /**
       * Test Sent
       * @description Test sent status
       * @default null
       */
      test_sent: boolean | null;
      /**
       * To Field
       * @description The field used to personalize the message
       * @default null
       */
      to_field: string | null;
      /**
       * To List
       * @description List of recipients
       * @default null
       */
      to_list: unknown;
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
 * Type of BREVO's BREVO_LIST_ALL_COMPANIES tool input.
 */
type BREVO_LIST_ALL_COMPANIES_INPUT = {
  /**
   * Filters
   * @description Filter by attributes. Example: '''{"attributes.name":"Company A"}'''. Refer to Brevo API documentation for more complex filtering options.
   * @default null
   */
  filters: string | null;
  /**
   * Limit
   * @description Number of documents per page. Default is 50, maximum is 100.
   * @default 50
   */
  limit: number | null;
  /**
   * Linked Contacts Ids
   * @description Filter by linked contact IDs. Pass a list of contact IDs.
   * @default null
   */
  linkedContactsIds: number[] | null;
  /**
   * Linked Deals Ids
   * @description Filter by linked deal IDs. Pass a list of deal IDs.
   * @default null
   */
  linkedDealsIds: string[] | null;
  /**
   * Page
   * @description Index of the page to retrieve. Starts at 0 or 1 depending on API (Brevo typically 1 for page, 0 for offset). API docs say 'Index of the first document of the page', usually means 0-indexed if 'limit' is also present, or 1-indexed if it's page number. Let's assume 0-indexed for 'page' as it's common with 'limit'. The example shows page=1, so it might be 1-indexed. For safety, let's assume it's flexible and the user provides the correct index based on their understanding or API docs.
   * @default null
   */
  page: number | null;
  /**
   * ListAllCompaniesRequestSortEnum
   * @description Sort the results in ascending or descending order. Default is descending by creation date if not specified.
   * @default desc
   * @enum {string|null}
   */
  sort: "asc" | "desc" | null;
  /**
   * Sort By
   * @description The field used to sort the results (e.g., 'createdAt', 'name', 'attributes.name'). Default is 'createdAt' if sort is specified.
   * @default null
   */
  sortBy: string | null;
};

/**
 * Type of BREVO's BREVO_LIST_ALL_COMPANIES tool output.
 */
type BREVO_LIST_ALL_COMPANIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of companies found
       */
      items: {
          /**
           * CompanyAttributes
           * @description Attributes of the company
           * @default null
           */
          attributes: ({
              /**
               * Created At
               * @description Creation date of the company
               * @default null
               */
              created_at: string | null;
              /**
               * Domain
               * @description Domain of the company
               * @default null
               */
              domain: string | null;
              /**
               * Last Updated At
               * @description Last update date of the company
               * @default null
               */
              last_updated_at: string | null;
              /**
               * Name
               * @description Name of the company
               * @default null
               */
              name: string | null;
              /**
               * Number Of Contacts
               * @description Number of contacts linked to the company
               * @default null
               */
              number_of_contacts: number | null;
              /**
               * Owner
               * @description Owner ID of the company
               * @default null
               */
              owner: string | null;
              /**
               * Owner Assign Date
               * @description Date when the owner was assigned
               * @default null
               */
              owner_assign_date: string | null;
              /**
               * Phone Number
               * @description Phone number of the company
               * @default null
               */
              phone_number: string | null;
              /**
               * Revenue
               * @description Revenue of the company
               * @default null
               */
              revenue: number | null;
          } & {
              [key: string]: unknown;
          }) | null;
          /**
           * Id
           * @description Unique ID of the company
           */
          id: string;
          /**
           * Linked Contacts Ids
           * @description List of linked contact IDs
           * @default null
           */
          linkedContactsIds: number[] | null;
          /**
           * Linked Deals Ids
           * @description List of linked deal IDs
           * @default null
           */
          linkedDealsIds: string[] | null;
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
 * Type of BREVO's BREVO_LIST_EMAIL_CAMPAIGNS tool input.
 */
type BREVO_LIST_EMAIL_CAMPAIGNS_INPUT = {
  /**
   * End Date
   * @description Mandatory if startDate is used. Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent email campaigns. Prefer to pass your timezone in date-time format for accurate result ( only available if either 'status' not passed and if passed is set to 'sent' )
   * @default null
   */
  endDate: string | null;
  /**
   * Exclude Html Content
   * @description Use this flag to exclude htmlContent from the response body. If set to true, htmlContent field will be returned as empty string in the response body.
   * @default null
   */
  excludeHtmlContent: boolean | null;
  /**
   * Limit
   * @description Number of documents per page.
   * @default 50
   */
  limit: number | null;
  /**
   * Offset
   * @description Index of the first document in the page.
   * @default 0
   */
  offset: number | null;
  /**
   * SortOrder
   * @description Sort the results in the ascending/descending order of record creation. Default order is descending if sort is not passed.
   * @default desc
   * @enum {string|null}
   */
  sort: "asc" | "desc" | null;
  /**
   * Start Date
   * @description Mandatory if endDate is used. Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent email campaigns. Prefer to pass your timezone in date-time format for accurate result ( only available if either 'status' not passed and if passed is set to 'sent' )
   * @default null
   */
  startDate: string | null;
  /**
   * CampaignStatistics
   * @description Filter on the type of statistics required. Example globalStats value will only fetch globalStats info of the campaign in returned response.
   * @default null
   * @enum {string|null}
   */
  statistics: "globalStats" | "linksStats" | "statsByDomain" | null;
  /**
   * CampaignStatus
   * @description Filter on the status of the campaign.
   * @default null
   * @enum {string|null}
   */
  status: "suspended" | "archive" | "sent" | "queued" | "draft" | "inProcess" | "inReview" | null;
  /**
   * CampaignType
   * @description Filter on the type of the campaigns.
   * @default null
   * @enum {string|null}
   */
  type: "classic" | "trigger" | null;
};

/**
 * Type of BREVO's BREVO_LIST_EMAIL_CAMPAIGNS tool output.
 */
type BREVO_LIST_EMAIL_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaigns
       * @description List of email campaigns
       * @default null
       */
      campaigns: {
          /**
           * Ab Testing
           * @description Status of A/B Test for the campaign. abTesting = false means it is disabled, & abTesting = true means it is enabled.
           * @default null
           */
          abTesting: boolean | null;
          /**
           * Created At
           * @description Creation UTC date-time of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
           */
          createdAt: string;
          /**
           * Footer
           * @description Footer of the campaign
           */
          footer: string;
          /**
           * Header
           * @description Header of the campaign
           */
          header: string;
          /**
           * Html Content
           * @description HTML content of the campaign
           * @default null
           */
          htmlContent: string | null;
          /**
           * Id
           * @description ID of the campaign
           */
          id: number;
          /**
           * Inline Image Activation
           * @description Status of inline image. inlineImageActivation = false means image can’t be embedded, & inlineImageActivation = true means image can be embedded, in the email.
           * @default null
           */
          inlineImageActivation: boolean | null;
          /**
           * Mirror Active
           * @description Status of mirror links in campaign. mirrorActive = false means mirror links are deactivated, & mirrorActive = true means mirror links are activated, in the campaign
           * @default null
           */
          mirrorActive: boolean | null;
          /**
           * Modified At
           * @description UTC date-time of last modification of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
           */
          modifiedAt: string;
          /**
           * Name
           * @description Name of the campaign
           */
          name: string;
          /**
           * Preview Text
           * @description Preview text or preheader of the email campaign
           * @default null
           */
          previewText: string | null;
          /**
           * Recipients
           * @description Recipients object
           */
          recipients: {
              /**
               * Excluded Lists
               * @description List of list ids to exclude from the campaign.
               * @default null
               */
              excludedLists: number[] | null;
              /**
               * Lists
               * @description List of list ids to send the campaign to.
               * @default null
               */
              lists: number[] | null;
              /**
               * Segments
               * @description List of segment ids to send the campaign to.
               * @default null
               */
              segments: number[] | null;
          };
          /**
           * Recurring
           * @description FOR TRIGGER ONLY ! Type of trigger campaign.recurring = false means contact can receive the same Trigger campaign only once, & recurring = true means contact can receive the same Trigger campaign several times
           * @default null
           */
          recurring: boolean | null;
          /**
           * Reply To
           * @description Email defined as the "Reply to" of the campaign
           */
          replyTo: string;
          /**
           * Return Bounce
           * @description Total number of non-delivered campaigns for a particular campaign id.
           * @default null
           */
          returnBounce: number | null;
          /**
           * Scheduled At
           * @description UTC date-time on which campaign is scheduled (YYYY-MM-DDTHH:mm:ss.SSSZ)
           * @default null
           */
          scheduledAt: string | null;
          /**
           * Send At Best Time
           * @description It is true if you have chosen to send your campaign at best time, otherwise it is false
           * @default null
           */
          sendAtBestTime: boolean | null;
          /**
           * Sender
           * @description Sender object
           */
          sender: {
              /**
               * Email
               * @description Email of the sender
               * @default null
               */
              email: string | null;
              /**
               * Id
               * @description ID of the sender
               * @default null
               */
              id: number | null;
              /**
               * Name
               * @description Name of the sender
               * @default null
               */
              name: string | null;
          };
          /**
           * Sent Date
           * @description Sent UTC date-time of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ). Only available if 'status' of the campaign is 'sent'
           * @default null
           */
          sentDate: string | null;
          /**
           * Share Link
           * @description Link to share the campaign on social medias
           * @default null
           */
          shareLink: string | null;
          /**
           * Split Rule
           * @description The size of your ab-test groups. Only available if `abTesting` flag of the campaign is `true`
           * @default null
           */
          splitRule: number | null;
          /**
           * CampaignStatisticsDetails
           * @description Statistics object
           * @default null
           */
          statistics: {
              /**
               * Global Stats
               * @description Global statistics of the campaign
               * @default null
               */
              globalStats: {
                  [key: string]: unknown;
              } | null;
              /**
               * Links Stats
               * @description Statistics of the links in the campaign
               * @default null
               */
              linksStats: {
                  [key: string]: unknown;
              } | null;
              /**
               * Stats By Domain
               * @description Statistics of the campaign by domain
               * @default null
               */
              statsByDomain: {
                  [key: string]: unknown;
              } | null;
          } | null;
          /**
           * Status
           * @description Status of the campaign
           * @enum {string}
           */
          status: "suspended" | "archive" | "sent" | "queued" | "draft" | "inProcess" | "inReview";
          /**
           * Subject
           * @description Subject of the campaign. Only available if `abTesting` flag of the campaign is `false`
           * @default null
           */
          subject: string | null;
          /**
           * Subject A
           * @description Subject A of the ab-test campaign. Only available if `abTesting` flag of the campaign is `true`
           * @default null
           */
          subjectA: string | null;
          /**
           * Subject B
           * @description Subject B of the ab-test campaign. Only available if `abTesting` flag of the campaign is `true`
           * @default null
           */
          subjectB: string | null;
          /**
           * Tag
           * @description Tag of the campaign
           * @default null
           */
          tag: string | null;
          /**
           * Test Sent
           * @description Retrieved the status of test email sending. (true=Test email has been sent false=Test email has not been sent)
           */
          testSent: boolean;
          /**
           * To Field
           * @description Customisation of the "to" field of the campaign
           * @default null
           */
          toField: string | null;
          /**
           * Type
           * @description Type of campaign
           * @enum {string}
           */
          type: "classic" | "trigger";
          /**
           * Utm Campaign Value
           * @description UTM campaign value
           * @default null
           */
          utmCampaignValue: string | null;
          /**
           * Winner Criteria
           * @description Criteria for the winning version. Only available if `abTesting` flag of the campaign is `true`
           * @default null
           */
          winnerCriteria: string | null;
          /**
           * Winner Delay
           * @description The duration of the test in hours at the end of which the winning version will be sent. Only available if `abTesting` flag of the campaign is `true`
           * @default null
           */
          winnerDelay: number | null;
      }[] | null;
      /**
       * Count
       * @description Number of Email campaigns retrieved
       * @default null
       */
      count: number | null;
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
 * Type of BREVO's BREVO_UPDATE_EMAIL_CAMPAIGN tool input.
 */
type BREVO_UPDATE_EMAIL_CAMPAIGN_INPUT = {
  /**
   * Ab Testing
   * @description Enable A/B testing.
   * @default null
   */
  abTesting: boolean | null;
  /**
   * Attachment Url
   * @description Absolute url of the attachment (no local file). Extensions allowed: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, msg, pub, mobi, epub, odt, ods, odp, odp.
   * @default null
   */
  attachmentUrl: string | null;
  /**
   * Campaign Id
   * @description ID of the campaign to update.
   */
  campaign_id?: number;
  /**
   * Footer
   * @description Email footer.
   * @default null
   */
  footer: string | null;
  /**
   * Header
   * @description Email header.
   * @default null
   */
  header: string | null;
  /**
   * Html Content
   * @description HTML content of the email. Required if html_url is empty.
   * @default null
   */
  htmlContent: string | null;
  /**
   * Html Url
   * @description URL of the HTML content. Required if html_content is empty.
   * @default null
   */
  htmlUrl: string | null;
  /**
   * Increase Rate
   * @description Increase rate for IP warmup (1-100).
   * @default null
   */
  increaseRate: number | null;
  /**
   * Initial Quota
   * @description Initial quota for IP warmup.
   * @default null
   */
  initialQuota: number | null;
  /**
   * Inline Image Activation
   * @description Activate inline images.
   * @default false
   */
  inlineImageActivation: boolean | null;
  /**
   * Ip Warmup Enable
   * @description Enable IP warmup.
   * @default null
   */
  ipWarmupEnable: boolean | null;
  /**
   * Mirror Active
   * @description Activate mirror link.
   * @default true
   */
  mirrorActive: boolean | null;
  /**
   * Name
   * @description Name of the campaign.
   * @default null
   */
  name: string | null;
  /**
   * Params
   * @description Pass the set of attributes to customize the campaign. For example, {'FNAME':'Joe', 'LNAME':'Doe'}. It's considered only if campaign is in New Template Language format.
   * @default null
   */
  params: {
      [key: string]: unknown;
  } | null;
  /**
   * Preview Text
   * @description Preview text of the email.
   * @default null
   */
  previewText: string | null;
  /**
   * Recipients
   * @description Recipient list details.
   * @default null
   */
  recipients: {
      /**
       * Exclusion List Ids
       * @description List of contact list IDs to exclude from the campaign.
       * @default null
       */
      exclusionListIds: number[] | null;
      /**
       * List Ids
       * @description List of contact list IDs to send the campaign to.
       * @default null
       */
      listIds: number[] | null;
  } | null;
  /**
   * Recurring
   * @description Set campaign as recurring (for trigger campaigns).
   * @default false
   */
  recurring: boolean | null;
  /**
   * Reply To
   * @description Reply-to email address.
   * @default null
   */
  replyTo: string | null;
  /**
   * Scheduled At
   * @description Scheduled time for the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ).
   * @default null
   */
  scheduledAt: string | null;
  /**
   * Send At Best Time
   * @description Send at best time (Brevo algorithm).
   * @default null
   */
  sendAtBestTime: boolean | null;
  /**
   * Sender
   * @description Sender details.
   * @default null
   */
  sender: {
      /**
       * Email
       * @description Email of the sender.
       * @default null
       */
      email: string | null;
      /**
       * Id
       * @description ID of the sender.
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description Name of the sender.
       * @default null
       */
      name: string | null;
  } | null;
  /**
   * Split Rule
   * @description Split rule for A/B test (1-99).
   * @default null
   */
  splitRule: number | null;
  /**
   * Subject
   * @description Subject of the campaign.
   * @default null
   */
  subject: string | null;
  /**
   * Subject A
   * @description Subject for A variant in A/B test.
   * @default null
   */
  subjectA: string | null;
  /**
   * Subject B
   * @description Subject for B variant in A/B test.
   * @default null
   */
  subjectB: string | null;
  /**
   * Tag
   * @description Tag of the campaign.
   * @default null
   */
  tag: string | null;
  /**
   * To Field
   * @description To field personalization (e.g., {FNAME} {LNAME}).
   * @default null
   */
  toField: string | null;
  /**
   * Unsubscription Page Id
   * @description Unsubscription page ID.
   * @default null
   */
  unsubscriptionPageId: string | null;
  /**
   * Update Form Id
   * @description Update profile form ID.
   * @default null
   */
  updateFormId: string | null;
  /**
   * Utm Campaign
   * @description UTM campaign tag.
   * @default null
   */
  utmCampaign: string | null;
  /**
   * WinnerCriteriaEnum
   * @description Winner criteria for A/B test.
   * @default null
   * @enum {string|null}
   */
  winnerCriteria: "open" | "click" | null;
  /**
   * Winner Delay
   * @description Winner delay in hours for A/B test (1-168).
   * @default null
   */
  winnerDelay: number | null;
};

/**
 * Type of BREVO's BREVO_UPDATE_EMAIL_CAMPAIGN tool output.
 */
type BREVO_UPDATE_EMAIL_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Success message indicating the campaign was updated.
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
 * Type map of all available tool input types for toolkit "BREVO".
 */
export type BREVO_TOOL_INPUTS = {
  CREATE_A_COMPANY: BREVO_CREATE_A_COMPANY_INPUT
  CREATE_OR_UPDATE_EMAIL_TEMPLATE: BREVO_CREATE_OR_UPDATE_EMAIL_TEMPLATE_INPUT
  CREATE_SMS_CAMPAIGN: BREVO_CREATE_SMS_CAMPAIGN_INPUT
  DELETE_COMPANY: BREVO_DELETE_COMPANY_INPUT
  DELETE_CONTACT: BREVO_DELETE_CONTACT_INPUT
  DELETE_EMAIL_TEMPLATE: BREVO_DELETE_EMAIL_TEMPLATE_INPUT
  DELETE_SMS_CAMPAIGN: BREVO_DELETE_SMS_CAMPAIGN_INPUT
  FIND_CONTACT: BREVO_FIND_CONTACT_INPUT
  GET_ACCOUNT_INFO: BREVO_GET_ACCOUNT_INFO_INPUT
  GET_ALL_CONTACTS: BREVO_GET_ALL_CONTACTS_INPUT
  GET_ALL_EMAIL_TEMPLATES: BREVO_GET_ALL_EMAIL_TEMPLATES_INPUT
  GET_ALL_SENDERS: BREVO_GET_ALL_SENDERS_INPUT
  GET_COMPANY_DETAILS: BREVO_GET_COMPANY_DETAILS_INPUT
  GET_CONTACT_DETAILS: BREVO_GET_CONTACT_DETAILS_INPUT
  GET_SMS_CAMPAIGNS: BREVO_GET_SMS_CAMPAIGNS_INPUT
  GET_SMS_CAMPAIGN_DETAILS: BREVO_GET_SMS_CAMPAIGN_DETAILS_INPUT
  LIST_ALL_COMPANIES: BREVO_LIST_ALL_COMPANIES_INPUT
  LIST_EMAIL_CAMPAIGNS: BREVO_LIST_EMAIL_CAMPAIGNS_INPUT
  UPDATE_EMAIL_CAMPAIGN: BREVO_UPDATE_EMAIL_CAMPAIGN_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BREVO".
 */
export type BREVO_TOOL_OUTPUTS = {
  CREATE_A_COMPANY: BREVO_CREATE_A_COMPANY_OUTPUT
  CREATE_OR_UPDATE_EMAIL_TEMPLATE: BREVO_CREATE_OR_UPDATE_EMAIL_TEMPLATE_OUTPUT
  CREATE_SMS_CAMPAIGN: BREVO_CREATE_SMS_CAMPAIGN_OUTPUT
  DELETE_COMPANY: BREVO_DELETE_COMPANY_OUTPUT
  DELETE_CONTACT: BREVO_DELETE_CONTACT_OUTPUT
  DELETE_EMAIL_TEMPLATE: BREVO_DELETE_EMAIL_TEMPLATE_OUTPUT
  DELETE_SMS_CAMPAIGN: BREVO_DELETE_SMS_CAMPAIGN_OUTPUT
  FIND_CONTACT: BREVO_FIND_CONTACT_OUTPUT
  GET_ACCOUNT_INFO: BREVO_GET_ACCOUNT_INFO_OUTPUT
  GET_ALL_CONTACTS: BREVO_GET_ALL_CONTACTS_OUTPUT
  GET_ALL_EMAIL_TEMPLATES: BREVO_GET_ALL_EMAIL_TEMPLATES_OUTPUT
  GET_ALL_SENDERS: BREVO_GET_ALL_SENDERS_OUTPUT
  GET_COMPANY_DETAILS: BREVO_GET_COMPANY_DETAILS_OUTPUT
  GET_CONTACT_DETAILS: BREVO_GET_CONTACT_DETAILS_OUTPUT
  GET_SMS_CAMPAIGNS: BREVO_GET_SMS_CAMPAIGNS_OUTPUT
  GET_SMS_CAMPAIGN_DETAILS: BREVO_GET_SMS_CAMPAIGN_DETAILS_OUTPUT
  LIST_ALL_COMPANIES: BREVO_LIST_ALL_COMPANIES_OUTPUT
  LIST_EMAIL_CAMPAIGNS: BREVO_LIST_EMAIL_CAMPAIGNS_OUTPUT
  UPDATE_EMAIL_CAMPAIGN: BREVO_UPDATE_EMAIL_CAMPAIGN_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BREVO toolkit.
 */
export const BREVO = {
  slug: "brevo",
  tools: {
    /**
     * This tool allows you to create a new company in your brevo account.
     */
    CREATE_A_COMPANY: "BREVO_CREATE_A_COMPANY",
    /**
     * This tool creates a new email template or updates an existing one in brevo. if a 'templateid' is provided, it performs an update; otherwise, it creates a new template.
     */
    CREATE_OR_UPDATE_EMAIL_TEMPLATE: "BREVO_CREATE_OR_UPDATE_EMAIL_TEMPLATE",
    /**
     * This tool allows you to create a new sms campaign in brevo. you can specify the campaign name, sender, content, recipients (by providing list ids, exclusion list ids, or segment ids), and optionally schedule the campaign for a specific time. you can also enable unicode characters, add an organization prefix, and include unsubscribe instructions.
     */
    CREATE_SMS_CAMPAIGN: "BREVO_CREATE_SMS_CAMPAIGN",
    /**
     * Deletes a company from brevo using its unique identifier.
     */
    DELETE_COMPANY: "BREVO_DELETE_COMPANY",
    /**
     * Deletes a contact from brevo using its unique identifier.
     */
    DELETE_CONTACT: "BREVO_DELETE_CONTACT",
    /**
     * This tool deletes an inactive email template from brevo. you need to provide the 'templateid' of the email template you want to delete. only inactive templates can be deleted.
     */
    DELETE_EMAIL_TEMPLATE: "BREVO_DELETE_EMAIL_TEMPLATE",
    /**
     * This tool deletes an existing sms campaign.
     */
    DELETE_SMS_CAMPAIGN: "BREVO_DELETE_SMS_CAMPAIGN",
    /**
     * This tool checks if a contact exists in brevo. it searches for a contact using either an email address or mobile number, with the email being prioritized if both are provided.
     */
    FIND_CONTACT: "BREVO_FIND_CONTACT",
    /**
     * This tool retrieves information about the brevo account, including account holder's email, first name, last name, company name, and address, as well as details about the current plan such as type, credits, start date, and end date.
     */
    GET_ACCOUNT_INFO: "BREVO_GET_ACCOUNT_INFO",
    /**
     * This tool retrieves all contacts from your brevo account. it allows for pagination and filtering based on modification/creation dates, list ids, segment ids, and contact attributes.
     */
    GET_ALL_CONTACTS: "BREVO_GET_ALL_CONTACTS",
    /**
     * This tool retrieves a list of all email templates created in your brevo account. it corresponds to the get /v3/smtp/templates endpoint as per the brevo api documentation, with optional parameters for filtering (templatestatus), pagination (limit, offset), and sorting (asc/desc).
     */
    GET_ALL_EMAIL_TEMPLATES: "BREVO_GET_ALL_EMAIL_TEMPLATES",
    /**
     * This tool retrieves a list of all senders associated with the brevo account. senders are the email addresses or domains that are authorized to send emails through brevo. this action can be useful for managing and verifying sender identities.
     */
    GET_ALL_SENDERS: "BREVO_GET_ALL_SENDERS",
    /**
     * This tool retrieves the details of a specific company by its unique id.
     */
    GET_COMPANY_DETAILS: "BREVO_GET_COMPANY_DETAILS",
    /**
     * This tool retrieves detailed information about a specific contact in brevo. you can identify the contact using their email address (url-encoded), their unique contact id, or their sms attribute value.
     */
    GET_CONTACT_DETAILS: "BREVO_GET_CONTACT_DETAILS",
    /**
     * This tool retrieves a list of all sms campaigns created in brevo. it supports filtering by status, start date, and end date, and also allows controlling the number of results returned (limit), the starting point in the list (offset), and the sort order (asc or desc).
     */
    GET_SMS_CAMPAIGNS: "BREVO_GET_SMS_CAMPAIGNS",
    /**
     * Retrieves the details of a specific sms campaign.
     */
    GET_SMS_CAMPAIGN_DETAILS: "BREVO_GET_SMS_CAMPAIGN_DETAILS",
    /**
     * This action retrieves a list of all companies stored in the brevo crm. it supports pagination and filtering by name and other attributes.
     */
    LIST_ALL_COMPANIES: "BREVO_LIST_ALL_COMPANIES",
    /**
     * This tool retrieves a list of all email campaigns associated with the user's brevo account. it allows filtering by campaign type, status, start date, and end date. the response includes the total count of campaigns and an array of campaign objects, each containing details like id, name, subject, type, status, scheduled date/time, sender information, and optionally, campaign statistics.
     */
    LIST_EMAIL_CAMPAIGNS: "BREVO_LIST_EMAIL_CAMPAIGNS",
    /**
     * Updates an email campaign in brevo using its unique identifier.
     */
    UPDATE_EMAIL_CAMPAIGN: "BREVO_UPDATE_EMAIL_CAMPAIGN",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BREVO".
 */
export type BREVO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BREVO".
 */
export type BREVO_TRIGGER_EVENTS = {}
