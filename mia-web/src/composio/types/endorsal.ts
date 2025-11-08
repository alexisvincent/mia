// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ENDORSAL's ENDORSAL_CREATE_TESTIMONIAL tool input.
 */
type ENDORSAL_CREATE_TESTIMONIAL_INPUT = {
  /**
   * Company
   * @description Company name of the individual
   * @default null
   */
  company: string | null;
  /**
   * Email
   * @description Email address of the individual
   */
  email?: string;
  /**
   * Featured
   * @description Whether the testimonial is featured
   * @default false
   */
  featured: boolean | null;
  /**
   * Job
   * @description Job title of the individual
   * @default null
   */
  job: string | null;
  /**
   * Location
   * @description Location of the individual
   * @default null
   */
  location: string | null;
  /**
   * Name
   * @description Name of the individual giving the testimonial
   */
  name?: string;
  /**
   * Profile
   * Format: uri
   * @description Profile image URL
   * @default null
   */
  profile: string | null;
  /**
   * Rating
   * @description Rating value (1-5)
   * @default null
   */
  rating: number | null;
  /**
   * Testimonial
   * @description The testimonial text
   */
  testimonial?: string;
  /**
   * Website
   * Format: uri
   * @description Website URL of the individual or company
   * @default null
   */
  website: string | null;
};

/**
 * Type of ENDORSAL's ENDORSAL_CREATE_TESTIMONIAL tool output.
 */
type ENDORSAL_CREATE_TESTIMONIAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Company
       * @description Company provided
       * @default null
       */
      company: string | null;
      /**
       * Created At
       * @description Timestamp of creation
       */
      created_at: string;
      /**
       * Email
       * @description Email provided
       */
      email: string;
      /**
       * Featured
       * @description Featured status
       */
      featured: boolean;
      /**
       * Id
       * @description Testimonial ID
       */
      id: string;
      /**
       * Job
       * @description Job provided
       * @default null
       */
      job: string | null;
      /**
       * Location
       * @description Location
       * @default null
       */
      location: string | null;
      /**
       * Name
       * @description Name provided
       */
      name: string;
      /**
       * Profile
       * Format: uri
       * @description Profile URL provided
       * @default null
       */
      profile: string | null;
      /**
       * Rating
       * @description Rating
       * @default null
       */
      rating: number | null;
      /**
       * Status
       * @description Status of the operation
       */
      status: string;
      /**
       * Testimonial
       * @description Testimonial text
       */
      testimonial: string;
      /**
       * Website
       * Format: uri
       * @description Website provided
       * @default null
       */
      website: string | null;
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
 * Type of ENDORSAL's ENDORSAL_GET_AUTO_REQUEST_CAMPAIGN tool input.
 */
type ENDORSAL_GET_AUTO_REQUEST_CAMPAIGN_INPUT = {
  /**
   * Id
   * @description The unique identifier of the AutoRequest campaign.
   */
  id?: string;
};

/**
 * Type of ENDORSAL's ENDORSAL_GET_AUTO_REQUEST_CAMPAIGN tool output.
 */
type ENDORSAL_GET_AUTO_REQUEST_CAMPAIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Active
       * @description Whether the campaign is active or not.
       */
      active: boolean;
      /**
       * Company Id
       * @description ID of the company the campaign belongs to.
       */
      company_id: string;
      /**
       * Created At
       * Format: date-time
       * @description Creation datetime of the campaign.
       */
      created_at: string;
      /**
       * Email Message
       * @description Content of the AutoRequest email message.
       */
      email_message: string;
      /**
       * Email Subject
       * @description Subject of the AutoRequest emails.
       */
      email_subject: string;
      /**
       * Id
       * @description Unique identifier of the campaign.
       */
      id: string;
      /**
       * Key
       * @description Campaign key.
       */
      key: string;
      /**
       * Name
       * @description Campaign name.
       */
      name: string;
      /**
       * Review Link
       * @description The unique review link for the campaign.
       */
      review_link: string;
      /**
       * Updated At
       * Format: date-time
       * @description Last modification datetime of the campaign.
       */
      updated_at: string;
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
 * Type of ENDORSAL's ENDORSAL_GET_CONTACT tool input.
 */
type ENDORSAL_GET_CONTACT_INPUT = {
  /**
   * Contact Id
   * @description Unique identifier of the contact to retrieve.
   */
  contact_id?: string;
};

/**
 * Type of ENDORSAL's ENDORSAL_GET_CONTACT tool output.
 */
type ENDORSAL_GET_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Timestamp when the contact was created, in ISO 8601 format.
       */
      created_at: string;
      /**
       * ContactCustomFields
       * @description Custom fields associated with the contact.
       * @default null
       */
      custom_fields: {
          [key: string]: string;
      } | null;
      /**
       * Email
       * @description Email address of the contact.
       */
      email: string;
      /**
       * Id
       * @description Unique identifier of the contact.
       */
      id: string;
      /**
       * Name
       * @description Name of the contact.
       */
      name: string;
      /**
       * Phone
       * @description Phone number of the contact, if available.
       * @default null
       */
      phone: string | null;
      /**
       * Updated At
       * @description Timestamp when the contact was last updated, in ISO 8601 format.
       */
      updated_at: string;
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
 * Type of ENDORSAL's ENDORSAL_GET_TAG tool input.
 */
type ENDORSAL_GET_TAG_INPUT = {
  /**
   * Id
   * @description The unique identifier of the tag to retrieve
   */
  id?: string;
};

/**
 * Type of ENDORSAL's ENDORSAL_GET_TAG tool output.
 */
type ENDORSAL_GET_TAG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Account Id
       * @description The account ID the tag belongs to
       */
      accountId: string;
      /**
       * Color
       * @description The HEX color of the tag, e.g., '#RRGGBB'
       */
      color: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the tag was created
       */
      createdAt: string;
      /**
       * External Id
       * @description The unique external identifier for the tag, if any
       * @default null
       */
      externalId: string | null;
      /**
       * Id
       * @description The tag's unique identifier
       */
      id: string;
      /**
       * Name
       * @description The name of the tag
       */
      name: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the tag was last updated
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
 * Type of ENDORSAL's ENDORSAL_GET_TESTIMONIAL tool input.
 */
type ENDORSAL_GET_TESTIMONIAL_INPUT = {
  /**
   * Item Id
   * @description Unique identifier of the testimonial to retrieve
   */
  item_id?: string;
};

/**
 * Type of ENDORSAL's ENDORSAL_GET_TESTIMONIAL tool output.
 */
type ENDORSAL_GET_TESTIMONIAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Author
       * @description Name of the testimonial's author
       */
      author: string;
      /**
       * Content
       * @description Content of the testimonial
       */
      content: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the testimonial was created
       */
      created_at: string;
      /**
       * Id
       * @description Testimonial unique identifier
       */
      id: string;
      /**
       * Rating
       * @description Numeric rating, non-negative
       */
      rating: number;
      /**
       * Source
       * @description Source or origin of the testimonial
       */
      source: string;
      /**
       * Updated At
       * @description ISO 8601 timestamp when the testimonial was last updated
       */
      updated_at: string;
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
 * Type of ENDORSAL's ENDORSAL_GET_WIDGET tool input.
 */
type ENDORSAL_GET_WIDGET_INPUT = {
  /**
   * Widget Id
   * @description The unique identifier for the widget
   */
  widget_id?: string;
};

/**
 * Type of ENDORSAL's ENDORSAL_GET_WIDGET tool output.
 */
type ENDORSAL_GET_WIDGET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description Creation timestamp in ISO 8601 format
       */
      created_at: string;
      /**
       * Description
       * @description Description of the widget
       */
      description: string;
      /**
       * Embed Code
       * @description HTML code to embed the widget
       */
      embed_code: string;
      /**
       * Id
       * @description The unique ID of the widget
       */
      id: string;
      /**
       * Name
       * @description Name of the widget
       */
      name: string;
      /**
       * Project Id
       * @description Associated project ID
       */
      project_id: string;
      /**
       * Script Url
       * @description URL to the widget script
       */
      script_url: string;
      /**
       * Settings
       * @description Widget configuration settings
       */
      settings: {
          [key: string]: unknown;
      };
      /**
       * Status
       * @description Status of the widget (e.g., active, inactive)
       */
      status: string;
      /**
       * Type
       * @description Type of the widget
       */
      type: string;
      /**
       * Updated At
       * @description Last update timestamp in ISO 8601 format
       */
      updated_at: string;
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
 * Type of ENDORSAL's ENDORSAL_LIST_AUTOREQUEST_CAMPAIGNS tool input.
 */
type ENDORSAL_LIST_AUTOREQUEST_CAMPAIGNS_INPUT = object;

/**
 * Type of ENDORSAL's ENDORSAL_LIST_AUTOREQUEST_CAMPAIGNS tool output.
 */
type ENDORSAL_LIST_AUTOREQUEST_CAMPAIGNS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Campaigns
       * @description Array of AutoRequest campaign objects
       */
      campaigns: {
          /**
           * Active
           * @description Whether the campaign is currently active
           */
          active: boolean;
          /**
           * Created
           * Format: date-time
           * @description ISO 8601 timestamp when the campaign was created
           */
          created: string;
          /**
           * Id
           * @description Unique identifier for the campaign
           */
          id: string;
          /**
           * Last Sent
           * Format: date-time
           * @description ISO 8601 timestamp of the last send, or null if never sent
           * @default null
           */
          last_sent: string | null;
          /**
           * Name
           * @description Name of the campaign
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
 * Type of ENDORSAL's ENDORSAL_LIST_CONTACTS tool input.
 */
type ENDORSAL_LIST_CONTACTS_INPUT = {
  /**
   * Page
   * @description Page number to retrieve. Defaults to 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of results per page. Defaults to 10, maximum is 100.
   * @default null
   */
  per_page: number | null;
  /**
   * Property Id
   * @description Unique identifier for the property
   */
  property_id?: string;
};

/**
 * Type of ENDORSAL's ENDORSAL_LIST_CONTACTS tool output.
 */
type ENDORSAL_LIST_CONTACTS_OUTPUT = {
  /**
   * Data
   * @description List of contact records.
   */
  data?: {
      /**
       * Created At
       * @description ISO-8601 timestamp when the contact was created.
       */
      created_at: string;
      /**
       * Email
       * @description Email address of the contact.
       */
      email: string;
      /**
       * Id
       * @description Unique identifier for the contact.
       */
      id: string;
      /**
       * Name
       * @description Name of the contact.
       */
      name: string;
      /**
       * Source
       * @description Source where contact was collected.
       */
      source: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Meta
   * @description Pagination metadata.
   */
  meta?: {
      /**
       * Current Page
       * @description Current page number.
       */
      current_page: number;
      /**
       * Last Page
       * @description Last page number.
       */
      last_page: number;
      /**
       * Next Page Url
       * @description URL for the next page.
       * @default null
       */
      next_page_url: string | null;
      /**
       * Per Page
       * @description Number of contacts per page.
       */
      per_page: number;
      /**
       * Prev Page Url
       * @description URL for the previous page.
       * @default null
       */
      prev_page_url: string | null;
      /**
       * Total
       * @description Total number of contacts.
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
 * Type of ENDORSAL's ENDORSAL_LIST_CONTACT_TESTIMONIALS tool input.
 */
type ENDORSAL_LIST_CONTACT_TESTIMONIALS_INPUT = {
  /**
   * Contact Id
   * @description Unique identifier of the contact
   */
  contact_id?: string;
  /**
   * Page
   * @description Page number for pagination (1-based index)
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of testimonials per page
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of ENDORSAL's ENDORSAL_LIST_CONTACT_TESTIMONIALS tool output.
 */
type ENDORSAL_LIST_CONTACT_TESTIMONIALS_OUTPUT = {
  /**
   * Data
   * @description List of testimonial objects for the contact
   */
  data?: {
      /**
       * Contact Id
       * @description ID of the contact that submitted the testimonial
       */
      contact_id: string;
      /**
       * Content
       * @description Content of the testimonial
       */
      content: string;
      /**
       * Created At
       * @description ISO 8601 date when the testimonial was created
       */
      created_at: string;
      /**
       * Id
       * @description Testimonial ID
       */
      id: string;
      /**
       * Status
       * @description Status of the testimonial, e.g., published
       */
      status: string;
      /**
       * Updated At
       * @description ISO 8601 date when the testimonial was last updated
       */
      updated_at: string;
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
       * Current Page
       * @description Current page number
       */
      current_page: number;
      /**
       * Total Items
       * @description Total number of testimonials
       */
      total_items: number;
      /**
       * Total Pages
       * @description Total number of pages available
       */
      total_pages: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ENDORSAL's ENDORSAL_LIST_PROPERTIES tool input.
 */
type ENDORSAL_LIST_PROPERTIES_INPUT = object;

/**
 * Type of ENDORSAL's ENDORSAL_LIST_PROPERTIES tool output.
 */
type ENDORSAL_LIST_PROPERTIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Properties
       * @description List of all properties associated with the authenticated account
       */
      properties: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the property was created
           */
          created_at: string;
          /**
           * Domain
           * @description Domain associated with the property
           */
          domain: string;
          /**
           * Name
           * @description Name of the property
           */
          name: string;
          /**
           * Property Id
           * @description Unique identifier for the property
           */
          propertyId: string;
          /**
           * Status
           * @description Current status of the property (e.g., active, inactive)
           */
          status: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the property was last updated
           */
          updated_at: string;
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
 * Type of ENDORSAL's ENDORSAL_LIST_TAGS tool input.
 */
type ENDORSAL_LIST_TAGS_INPUT = {
  /**
   * Property Id
   * @description The unique identifier for the property.
   */
  propertyId?: string;
};

/**
 * Type of ENDORSAL's ENDORSAL_LIST_TAGS tool output.
 */
type ENDORSAL_LIST_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tags
       * @description List of tags associated with the specified property.
       */
      tags: {
          /**
           * Color
           * @description The color code of the tag (e.g., '#RRGGBB').
           */
          color: string;
          /**
           * Id
           * @description The unique identifier of the tag.
           */
          id: string;
          /**
           * Name
           * @description The name of the tag.
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
 * Type of ENDORSAL's ENDORSAL_LIST_TAG_TESTIMONIALS tool input.
 */
type ENDORSAL_LIST_TAG_TESTIMONIALS_INPUT = {
  /**
   * Limit
   * @description Number of items per page. Defaults to 50, maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Page
   * @description Page number for paginated results. Defaults to 1.
   * @default null
   */
  page: number | null;
  /**
   * Tag Id
   * @description The unique identifier of the tag to filter testimonials by.
   */
  tag_id?: string;
};

/**
 * Type of ENDORSAL's ENDORSAL_LIST_TAG_TESTIMONIALS tool output.
 */
type ENDORSAL_LIST_TAG_TESTIMONIALS_OUTPUT = {
  /**
   * Data
   * @description List of testimonials for the specified tag
   */
  data?: {
      /**
       * Author
       * @description Information about the testimonial author
       */
      author: {
          /**
           * Avatar
           * @description URL to author's avatar image
           */
          avatar: string;
          /**
           * Email
           * @description Author's email address
           */
          email: string;
          /**
           * Name
           * @description Author's name
           */
          name: string;
      };
      /**
       * Content
       * @description Content of the testimonial
       */
      content: string;
      /**
       * Created At
       * @description ISO 8601 timestamp when the testimonial was created
       */
      created_at: string;
      /**
       * Id
       * @description Unique identifier for the testimonial
       */
      id: string;
      /**
       * Rating
       * @description Rating value of the testimonial
       */
      rating: number;
      /**
       * Tag Ids
       * @description List of tag IDs associated with the testimonial
       */
      tag_ids: string[];
      /**
       * Updated At
       * @description ISO 8601 timestamp when the testimonial was last updated
       */
      updated_at: string;
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
       * Current Page
       * @description Current page number.
       */
      current_page: number;
      /**
       * Per Page
       * @description Number of testimonials per page.
       */
      per_page: number;
      /**
       * Total
       * @description Total number of testimonials.
       */
      total: number;
      /**
       * Total Pages
       * @description Total number of pages.
       */
      total_pages: number;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of ENDORSAL's ENDORSAL_LIST_WIDGETS tool input.
 */
type ENDORSAL_LIST_WIDGETS_INPUT = object;

/**
 * Type of ENDORSAL's ENDORSAL_LIST_WIDGETS tool output.
 */
type ENDORSAL_LIST_WIDGETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Widgets
       * @description List of widget objects for the authenticated account
       */
      widgets: ({
          /**
           * Created At
           * @description ISO 8601 timestamp when the widget was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the widget
           */
          id: string;
          /**
           * Name
           * @description Display name of the widget
           */
          name: string;
          /**
           * Status
           * @description Current status of the widget (e.g., 'active')
           */
          status: string;
          /**
           * Updated At
           * @description ISO 8601 timestamp when the widget was last updated
           */
          updated_at: string;
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
 * Type map of all available tool input types for toolkit "ENDORSAL".
 */
export type ENDORSAL_TOOL_INPUTS = {
  CREATE_TESTIMONIAL: ENDORSAL_CREATE_TESTIMONIAL_INPUT
  GET_AUTO_REQUEST_CAMPAIGN: ENDORSAL_GET_AUTO_REQUEST_CAMPAIGN_INPUT
  GET_CONTACT: ENDORSAL_GET_CONTACT_INPUT
  GET_TAG: ENDORSAL_GET_TAG_INPUT
  GET_TESTIMONIAL: ENDORSAL_GET_TESTIMONIAL_INPUT
  GET_WIDGET: ENDORSAL_GET_WIDGET_INPUT
  LIST_AUTOREQUEST_CAMPAIGNS: ENDORSAL_LIST_AUTOREQUEST_CAMPAIGNS_INPUT
  LIST_CONTACTS: ENDORSAL_LIST_CONTACTS_INPUT
  LIST_CONTACT_TESTIMONIALS: ENDORSAL_LIST_CONTACT_TESTIMONIALS_INPUT
  LIST_PROPERTIES: ENDORSAL_LIST_PROPERTIES_INPUT
  LIST_TAGS: ENDORSAL_LIST_TAGS_INPUT
  LIST_TAG_TESTIMONIALS: ENDORSAL_LIST_TAG_TESTIMONIALS_INPUT
  LIST_WIDGETS: ENDORSAL_LIST_WIDGETS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ENDORSAL".
 */
export type ENDORSAL_TOOL_OUTPUTS = {
  CREATE_TESTIMONIAL: ENDORSAL_CREATE_TESTIMONIAL_OUTPUT
  GET_AUTO_REQUEST_CAMPAIGN: ENDORSAL_GET_AUTO_REQUEST_CAMPAIGN_OUTPUT
  GET_CONTACT: ENDORSAL_GET_CONTACT_OUTPUT
  GET_TAG: ENDORSAL_GET_TAG_OUTPUT
  GET_TESTIMONIAL: ENDORSAL_GET_TESTIMONIAL_OUTPUT
  GET_WIDGET: ENDORSAL_GET_WIDGET_OUTPUT
  LIST_AUTOREQUEST_CAMPAIGNS: ENDORSAL_LIST_AUTOREQUEST_CAMPAIGNS_OUTPUT
  LIST_CONTACTS: ENDORSAL_LIST_CONTACTS_OUTPUT
  LIST_CONTACT_TESTIMONIALS: ENDORSAL_LIST_CONTACT_TESTIMONIALS_OUTPUT
  LIST_PROPERTIES: ENDORSAL_LIST_PROPERTIES_OUTPUT
  LIST_TAGS: ENDORSAL_LIST_TAGS_OUTPUT
  LIST_TAG_TESTIMONIALS: ENDORSAL_LIST_TAG_TESTIMONIALS_OUTPUT
  LIST_WIDGETS: ENDORSAL_LIST_WIDGETS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ENDORSAL toolkit.
 */
export const ENDORSAL = {
  slug: "endorsal",
  tools: {
    /**
     * Tool to submit a new testimonial. use when adding customer feedback to your endorsal account after gathering input.
     */
    CREATE_TESTIMONIAL: "ENDORSAL_CREATE_TESTIMONIAL",
    /**
     * Tool to retrieve a specific autorequest campaign by its unique identifier. use when you need to fetch details of an existing autorequest campaign.
     */
    GET_AUTO_REQUEST_CAMPAIGN: "ENDORSAL_GET_AUTO_REQUEST_CAMPAIGN",
    /**
     * Tool to retrieve details of a specific contact by its unique identifier. use when you have the contact id and need to fetch complete contact details.
     */
    GET_CONTACT: "ENDORSAL_GET_CONTACT",
    /**
     * Tool to retrieve details of a specific tag by its unique identifier. use when you have a tag id and need full tag metadata.
     */
    GET_TAG: "ENDORSAL_GET_TAG",
    /**
     * Tool to retrieve details of a specific testimonial by its unique identifier. use after obtaining the testimonial id to fetch its full details.
     */
    GET_TESTIMONIAL: "ENDORSAL_GET_TESTIMONIAL",
    /**
     * Tool to retrieve details of a specific widget by its unique identifier. use when you need full widget details before editing or analysis.
     */
    GET_WIDGET: "ENDORSAL_GET_WIDGET",
    /**
     * Tool to retrieve a list of all autorequest campaigns. use when you need to view both active and inactive campaigns.
     */
    LIST_AUTOREQUEST_CAMPAIGNS: "ENDORSAL_LIST_AUTOREQUEST_CAMPAIGNS",
    /**
     * Tool to retrieve all contacts associated with your account. use when you need to browse or manage your contact list after authentication.
     */
    LIST_CONTACTS: "ENDORSAL_LIST_CONTACTS",
    /**
     * Tool to retrieve all testimonials submitted by a specific contact. use when you have a contact id and need to paginate through their testimonials.
     */
    LIST_CONTACT_TESTIMONIALS: "ENDORSAL_LIST_CONTACT_TESTIMONIALS",
    /**
     * Tool to retrieve all properties for the authenticated account. use after obtaining a valid api key and login.
     */
    LIST_PROPERTIES: "ENDORSAL_LIST_PROPERTIES",
    /**
     * Tool to retrieve all tags for a specific property. use when you need to browse available tags before assigning them. use after confirming the property id.
     */
    LIST_TAGS: "ENDORSAL_LIST_TAGS",
    /**
     * Tool to retrieve all testimonials for a given tag. use when you need to list testimonials filtered by tag id for pagination and display.
     */
    LIST_TAG_TESTIMONIALS: "ENDORSAL_LIST_TAG_TESTIMONIALS",
    /**
     * Tool to retrieve all widgets associated with your account. use when you need to enumerate available widgets for management.
     */
    LIST_WIDGETS: "ENDORSAL_LIST_WIDGETS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ENDORSAL".
 */
export type ENDORSAL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ENDORSAL".
 */
export type ENDORSAL_TRIGGER_EVENTS = {}
