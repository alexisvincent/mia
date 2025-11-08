// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CAPSULE_CRM's CAPSULE_CRM_CREATE_PARTY tool input.
 */
type CAPSULE_CRM_CREATE_PARTY_INPUT = {
  /**
   * About
   * @description Free-text description.
   * @default null
   */
  about: string | null;
  /**
   * Addresses
   * @default null
   */
  addresses: {
      /**
       * City
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @default null
       */
      country: string | null;
      /**
       * State
       * @default null
       */
      state: string | null;
      /**
       * Street
       * @default null
       */
      street: string | null;
      /**
       * Type
       * @description Address type, e.g. 'Home' or 'Work'.
       * @default null
       */
      type: string | null;
      /**
       * Zip
       * @default null
       */
      zip: string | null;
  }[] | null;
  /**
   * Email Addresses
   * @default null
   */
  emailAddresses: {
      /**
       * Address
       * @description Email address in RFC format.
       */
      address: string;
      /**
       * Type
       * @description Email type, e.g. 'Work'.
       * @default null
       */
      type: string | null;
  }[] | null;
  /**
   * Fields
   * @default null
   */
  fields: {
      /**
       * Definition
       * @description Custom field definition reference by ID or object.
       */
      definition: number | null;
      /**
       * Value
       * @description Value for the custom field.
       */
      value: string;
  }[] | null;
  /**
   * First Name
   * @description Required when `type='person'`.
   * @default null
   */
  firstName: string | null;
  /**
   * Job Title
   * @description Job title for the person.
   * @default null
   */
  jobTitle: string | null;
  /**
   * Last Name
   * @description Required when `type='person'`.
   * @default null
   */
  lastName: string | null;
  /**
   * Name
   * @description Name for organisation when `type='organisation'`.
   * @default null
   */
  name: string | null;
  /**
   * PartyOrganisation
   * @description Link a person to an organisation by ID or name.
   * @default null
   */
  organisation: {
      /**
       * Id
       * @description ID of an existing organisation to link. If `name` is used instead and no organisation exists, it will be created.
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description Name of organisation to link or create. Required if ID is not provided.
       * @default null
       */
      name: string | null;
  } | null;
  /**
   * PartyOwner
   * @description Assign owner user ID or clear by setting `null`.
   * @default null
   */
  owner: {
      /**
       * Id
       * @description User ID to assign as owner. Omit to default to the token user; set explicitly to `null` to clear the owner.
       * @default null
       */
      id: number | null;
  } | null;
  /**
   * Phone Numbers
   * @default null
   */
  phoneNumbers: {
      /**
       * Number
       * @description Phone number digits.
       */
      number: string;
      /**
       * Type
       * @description Phone number type, e.g. 'Work' or 'Mobile'.
       * @default null
       */
      type: string | null;
  }[] | null;
  /**
   * Tags
   * @default null
   */
  tags: {
      /**
       * Id
       * @description Existing tag ID.
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description Name of tag to add.
       * @default null
       */
      name: string | null;
  }[] | null;
  /**
   * PartyTeam
   * @description Assign team ID or clear by setting `null`.
   * @default null
   */
  team: {
      /**
       * Id
       * @description Team ID to assign. Omit to use owner's default team; set explicitly to `null` to clear the team.
       * @default null
       */
      id: number | null;
  } | null;
  /**
   * Title
   * @description Person title, e.g. 'Mr' or 'Ms'.
   * @default null
   */
  title: string | null;
  /**
   * Type
   * @description Set to 'person' or 'organisation'.
   * @enum {string}
   */
  type?: "person" | "organisation";
  /**
   * Websites
   * @default null
   */
  websites: {
      /**
       * Address
       * @description The raw address or handle.
       */
      address: string;
      /**
       * Service
       * @description Service name, e.g. 'URL' or 'TWITTER'.
       * @default null
       */
      service: string | null;
      /**
       * Type
       * @description Website type, e.g. 'Home' or 'Work'.
       * @default null
       */
      type: string | null;
  }[] | null;
};

/**
 * Type of CAPSULE_CRM's CAPSULE_CRM_CREATE_PARTY tool output.
 */
type CAPSULE_CRM_CREATE_PARTY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Party
       * @description The created party record.
       */
      party: {
          /** About */
          about: string | null;
          /** Addresses */
          addresses: {
              /** City */
              city: string | null;
              /** Country */
              country: string | null;
              /** Id */
              id: number;
              /** State */
              state: string | null;
              /** Street */
              street: string | null;
              /** Type */
              type: string | null;
              /** Zip */
              zip: string | null;
          }[];
          /** Created At */
          createdAt: string;
          /** Email Addresses */
          emailAddresses: {
              /** Address */
              address: string;
              /** Id */
              id: number;
              /** Type */
              type: string | null;
          }[];
          /**
           * Fields
           * @default null
           */
          fields: {
              /** Definition */
              definition: number | null;
              /** Value */
              value: string;
          }[] | null;
          /**
           * First Name
           * @default null
           */
          firstName: string | null;
          /** Id */
          id: number;
          /**
           * Job Title
           * @default null
           */
          jobTitle: string | null;
          /** Last Contacted At */
          lastContactedAt: string | null;
          /**
           * Last Name
           * @default null
           */
          lastName: string | null;
          /**
           * Name
           * @default null
           */
          name: string | null;
          /**
           * PartyOrganisationOut
           * @default null
           */
          organisation: {
              /** Id */
              id: number;
              /** Name */
              name: string | null;
          } | null;
          /** UserOut */
          owner: {
              /** Id */
              id: number;
              /** Name */
              name: string | null;
              /** Username */
              username: string | null;
          } | null;
          /** Phone Numbers */
          phoneNumbers: {
              /** Id */
              id: number;
              /** Number */
              number: string;
              /** Type */
              type: string | null;
          }[];
          /**
           * Picture Url
           * @default null
           */
          pictureURL: string | null;
          /**
           * Tags
           * @default null
           */
          tags: {
              /** Id */
              id: number | null;
              /** Name */
              name: string | null;
          }[] | null;
          /** PartyTeamOut */
          team: {
              /** Id */
              id: number;
              /** Name */
              name: string | null;
          } | null;
          /**
           * Title
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @enum {string}
           */
          type: "person" | "organisation";
          /** Updated At */
          updatedAt: string;
          /** Websites */
          websites: {
              /** Address */
              address: string;
              /** Id */
              id: number;
              /** Service */
              service: string | null;
              /** Type */
              type: string | null;
              /** Url */
              url: string | null;
          }[];
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
 * Type of CAPSULE_CRM's CAPSULE_CRM_DELETE_PARTY tool input.
 */
type CAPSULE_CRM_DELETE_PARTY_INPUT = {
  /**
   * Party Id
   * Format: uuid
   * @description The unique identifier (UUID) of the party (person or organisation) to delete.
   */
  party_id?: unknown;
};

/**
 * Type of CAPSULE_CRM's CAPSULE_CRM_DELETE_PARTY tool output.
 */
type CAPSULE_CRM_DELETE_PARTY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description HTTP status code returned by the API.
       */
      code: number;
      /**
       * Status
       * @description Deletion status: 'deleted' if removed immediately, 'accepted' if scheduled deletion.
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
 * Type of CAPSULE_CRM's CAPSULE_CRM_LIST_DELETED_OPPORTUNITIES tool input.
 */
type CAPSULE_CRM_LIST_DELETED_OPPORTUNITIES_INPUT = {
  /**
   * Since
   * Format: date-time
   * @description ISO8601 date/time. If set then includes only entities that have been changed after this date.
   * @default null
   */
  since: string | null;
};

/**
 * Type of CAPSULE_CRM's CAPSULE_CRM_LIST_DELETED_OPPORTUNITIES tool output.
 */
type CAPSULE_CRM_LIST_DELETED_OPPORTUNITIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Opportunities
       * @description A list of deleted opportunities.
       */
      opportunities: {
          /**
           * Deleted At
           * Format: date-time
           * @description The ISO date/time when this opportunity was deleted.
           */
          deletedAt: string;
          /**
           * Id
           * @description The unique id of the deleted opportunity.
           */
          id: number;
      }[];
      /**
       * Restricted Opportunities
       * @description A list of restricted opportunities, if any were restricted.
       * @default null
       */
      restrictedOpportunities: {
          /**
           * Id
           * @description The unique id of the restricted opportunity.
           */
          id: number;
          /**
           * Is Restricted
           * @description Indicates whether this opportunity is restricted for the user.
           */
          isRestricted: boolean;
          /**
           * Name
           * @description The name of the opportunity. Contains 'Private' when inaccessible.
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
 * Type of CAPSULE_CRM's CAPSULE_CRM_LIST_DELETED_PARTIES tool input.
 */
type CAPSULE_CRM_LIST_DELETED_PARTIES_INPUT = {
  /**
   * Since
   * @description The since date is required to return only entities that have been deleted after this date. Must be in ISO8601 format.
   */
  since?: string;
};

/**
 * Type of CAPSULE_CRM's CAPSULE_CRM_LIST_DELETED_PARTIES tool output.
 */
type CAPSULE_CRM_LIST_DELETED_PARTIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Parties
       * @description List of deleted parties.
       */
      parties: {
          /**
           * Deleted At
           * @description Timestamp when the party was deleted, in ISO8601 format.
           */
          deletedAt: string;
          /**
           * Id
           * @description Unique ID of the deleted party.
           */
          id: number;
      }[];
      /**
       * Restricted Parties
       * @description List of parties that have been made restricted.
       * @default null
       */
      restrictedParties: {
          /**
           * First Name
           * @description First name of the person; null for organisations.
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @description Unique ID of the restricted party.
           */
          id: number;
          /**
           * Is Restricted
           * @description Whether the party is restricted for the caller.
           */
          isRestricted: boolean;
          /**
           * Last Name
           * @description Last name of the person; null for organisations.
           * @default null
           */
          lastName: string | null;
          /**
           * Name
           * @description Name of the organisation; null for person.
           * @default null
           */
          name: string | null;
          /**
           * Picture Url
           * @description URL of the party's avatar or picture.
           */
          pictureURL: string;
          /**
           * Type
           * @description Type of the party; either 'person' or 'organisation'.
           */
          type: string;
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
 * Type of CAPSULE_CRM's CAPSULE_CRM_LIST_ENTRIES_BY_DATE tool input.
 */
type CAPSULE_CRM_LIST_ENTRIES_BY_DATE_INPUT = {
  /**
   * Embed
   * @description Comma-separated list of additional data to embed. Allowed values: 'party', 'kase', 'opportunity', 'creator', 'activityType'.
   * @default null
   */
  embed: string[] | null;
  /**
   * Page
   * @description The page of results to return. Default: 1
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description The number of entries to return per page (1-100). Default: 50
   * @default 50
   */
  perPage: number;
};

/**
 * Type of CAPSULE_CRM's CAPSULE_CRM_LIST_ENTRIES_BY_DATE tool output.
 */
type CAPSULE_CRM_LIST_ENTRIES_BY_DATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Entries
       * @description Array of entry objects in descending order by date
       */
      entries: {
          /**
           * Activity Type
           * @description Type of activity for the entry
           */
          activityType: {
              /**
               * Id
               * @description Activity type identifier
               */
              id: number;
              /**
               * Name
               * @description Name of the activity type
               */
              name: string;
          };
          /**
           * Attachments
           * @description List of attachments for notes or emails, if any
           * @default null
           */
          attachments: {
              /**
               * Content Type
               * @description MIME type of the attachment
               */
              contentType: string;
              /**
               * Filename
               * @description Name of the attachment file
               */
              filename: string;
              /**
               * Id
               * @description Attachment identifier
               */
              id: number;
              /**
               * Size
               * @description Size of the attachment in bytes
               */
              size: number;
          }[] | null;
          /**
           * Content
           * @description Content of the entry
           */
          content: string;
          /**
           * Created At
           * @description Timestamp when the entry was created in ISO8601 format
           */
          createdAt: string;
          /**
           * Creator
           * @description User who created the entry
           */
          creator: {
              /**
               * Id
               * @description Creator user identifier
               */
              id: number;
              /**
               * Name
               * @description Full name of the creator
               */
              name: string;
              /**
               * Username
               * @description Username of the creator
               */
              username: string;
          };
          /**
           * Entry At
           * @description Timestamp when the entry occurred in ISO8601 format
           */
          entryAt: string;
          /**
           * Id
           * @description Entry identifier
           */
          id: number;
          /**
           * Participants
           * @description Email participants for email entries, if any
           * @default null
           */
          participants: {
              /**
               * Address
               * @description Email address of the participant
               */
              address: string;
              /**
               * Id
               * @description Participant identifier
               */
              id: number;
              /**
               * Name
               * @description Name of the participant
               */
              name: string;
              /**
               * Role
               * @description Role of the participant, e.g., 'TO', 'FROM'
               */
              role: string;
          }[] | null;
          /**
           * Parties
           * @description List of parties associated with email entries, if any
           * @default null
           */
          parties: {
              /**
               * Id
               * @description Party identifier
               */
              id: number;
              /**
               * Name
               * @description Name of the party
               */
              name: string;
              /**
               * Picture Url
               * @description URL of the party's picture
               */
              pictureURL: string;
              /**
               * Type
               * @description Party type, e.g., 'organisation'
               */
              type: string;
          }[] | null;
          /**
           * Party
           * @description The party associated with the entry, if applicable
           * @default null
           */
          party: {
              /**
               * Id
               * @description Party identifier
               */
              id: number;
              /**
               * Name
               * @description Name of the party
               */
              name: string;
              /**
               * Picture Url
               * @description URL of the party's picture
               */
              pictureURL: string;
              /**
               * Type
               * @description Party type, e.g., 'organisation'
               */
              type: string;
          } | null;
          /**
           * Subject
           * @description Subject line for email entries, if any
           * @default null
           */
          subject: string | null;
          /**
           * Type
           * @description Type of entry: 'note', 'email', or 'task'
           */
          type: string;
          /**
           * Updated At
           * @description Timestamp when the entry was last updated in ISO8601 format
           */
          updatedAt: string;
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
 * Type of CAPSULE_CRM's CAPSULE_CRM_LIST_ORG_EMPLOYEES tool input.
 */
type CAPSULE_CRM_LIST_ORG_EMPLOYEES_INPUT = {
  /**
   * Embed
   * @description List of additional data to include; allowed values: 'tags', 'fields', 'organisation', 'missingImportantFields'
   * @default null
   */
  embed: string[] | null;
  /**
   * Page
   * @description Page number of results to return, must be at least 1
   * @default 1
   */
  page: number;
  /**
   * Party Id
   * @description ID of the organisation (party) to list employees for
   */
  party_id?: number;
  /**
   * Per Page
   * @description Number of results per page, must be between 1 and 100
   * @default 50
   */
  perPage: number;
};

/**
 * Type of CAPSULE_CRM's CAPSULE_CRM_LIST_ORG_EMPLOYEES tool output.
 */
type CAPSULE_CRM_LIST_ORG_EMPLOYEES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Parties
       * @description List of employee records linked to the organisation
       */
      parties: {
          /**
           * About
           * @default null
           */
          about: string | null;
          /** Addresses */
          addresses: {
              /**
               * City
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @default null
               */
              country: string | null;
              /** Id */
              id: number;
              /**
               * State
               * @default null
               */
              state: string | null;
              /**
               * Street
               * @default null
               */
              street: string | null;
              /**
               * Type
               * @default null
               */
              type: string | null;
              /**
               * Zip
               * @default null
               */
              zip: string | null;
          }[];
          /**
           * Created At
           * Format: date-time
           */
          createdAt: string;
          /** Email Addresses */
          emailAddresses: {
              /** Address */
              address: string;
              /** Id */
              id: number;
              /**
               * Type
               * @default null
               */
              type: string | null;
          }[];
          /**
           * Fields
           * @default null
           */
          fields: {
              /** Definition */
              definition: {
                  /**
                   * Id
                   * @default null
                   */
                  id: number | null;
                  /**
                   * Name
                   * @default null
                   */
                  name: string | null;
                  /**
                   * Tag
                   * @default null
                   */
                  tag: number | null;
              };
              /**
               * Value
               * @description Value of the custom field; types may include string, number, boolean, or ISO8601 date
               */
              value: string | null;
          }[] | null;
          /**
           * First Name
           * @default null
           */
          firstName: string | null;
          /** Id */
          id: number;
          /**
           * Job Title
           * @default null
           */
          jobTitle: string | null;
          /**
           * Last Contacted At
           * Format: date-time
           * @default null
           */
          lastContactedAt: string | null;
          /**
           * Last Name
           * @default null
           */
          lastName: string | null;
          /**
           * OrganisationRef
           * @default null
           */
          organisation: {
              /** Id */
              id: number;
              /**
               * Name
               * @default null
               */
              name: string | null;
          } | null;
          /**
           * Owner
           * @default null
           */
          owner: {
              /** Id */
              id: number;
              /**
               * Name
               * @default null
               */
              name: string | null;
              /**
               * Username
               * @default null
               */
              username: string | null;
          } | null;
          /** Phone Numbers */
          phoneNumbers: {
              /** Id */
              id: number;
              /** Number */
              number: string;
              /**
               * Type
               * @default null
               */
              type: string | null;
          }[];
          /**
           * Picture Url
           * @default null
           */
          pictureURL: string | null;
          /**
           * Tags
           * @default null
           */
          tags: {
              /**
               * Id
               * @default null
               */
              id: number | null;
              /**
               * Name
               * @default null
               */
              name: string | null;
          }[] | null;
          /**
           * Team
           * @default null
           */
          team: {
              /** Id */
              id: number;
              /** Name */
              name: string;
          } | null;
          /**
           * Title
           * @default null
           */
          title: string | null;
          /** Type */
          type: string;
          /**
           * Updated At
           * Format: date-time
           */
          updatedAt: string;
          /** Websites */
          websites: {
              /** Address */
              address: string;
              /** Id */
              id: number;
              /** Service */
              service: string;
              /**
               * Type
               * @default null
               */
              type: string | null;
              /**
               * Url
               * @default null
               */
              url: string | null;
          }[];
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
 * Type of CAPSULE_CRM's CAPSULE_CRM_LIST_PARTIES tool input.
 */
type CAPSULE_CRM_LIST_PARTIES_INPUT = {
  /**
   * Embed
   * @description Comma-separated list of additional data to embed. Allowed values: 'tags', 'fields', 'organisation', 'missingImportantFields'.
   * @default null
   */
  embed: string[] | null;
  /**
   * Page
   * @description Page number of results to return (>=1). Default: 1.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of parties per page (1-100). Default: 50.
   * @default 50
   */
  perPage: number | null;
  /**
   * Since
   * @description Include only parties changed after this date (ISO8601 format).
   * @default null
   */
  since: string | null;
};

/**
 * Type of CAPSULE_CRM's CAPSULE_CRM_LIST_PARTIES tool output.
 */
type CAPSULE_CRM_LIST_PARTIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Parties
       * @description List of parties retrieved.
       */
      parties: {
          /**
           * About
           * @description Description of the party.
           * @default null
           */
          about: string | null;
          /**
           * Addresses
           * @description List of addresses.
           */
          addresses: {
              /**
               * City
               * @description City of the address.
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country of the address.
               * @default null
               */
              country: string | null;
              /**
               * Id
               * @description Unique identifier of the address.
               */
              id: number;
              /**
               * State
               * @description State of the address.
               * @default null
               */
              state: string | null;
              /**
               * Street
               * @description Street of the address.
               * @default null
               */
              street: string | null;
              /**
               * Type
               * @description Type of the address.
               * @default null
               */
              type: string | null;
              /**
               * Zip
               * @description ZIP code of the address.
               * @default null
               */
              zip: string | null;
          }[];
          /**
           * Created At
           * @description Creation timestamp (ISO8601 format).
           */
          createdAt: string;
          /**
           * Email Addresses
           * @description List of email addresses.
           */
          emailAddresses: {
              /**
               * Address
               * @description Email address.
               */
              address: string;
              /**
               * Id
               * @description Unique identifier of the email address.
               */
              id: number;
              /**
               * Type
               * @description Type of the email address.
               * @default null
               */
              type: string | null;
          }[];
          /**
           * First Name
           * @description First name of the person.
           * @default null
           */
          firstName: string | null;
          /**
           * Id
           * @description Unique identifier of the party.
           */
          id: number;
          /**
           * Job Title
           * @description Job title of the person.
           * @default null
           */
          jobTitle: string | null;
          /**
           * Last Contacted At
           * @description Last contacted timestamp (ISO8601 format).
           * @default null
           */
          lastContactedAt: string | null;
          /**
           * Last Name
           * @description Last name of the person.
           * @default null
           */
          lastName: string | null;
          /**
           * Organisation
           * @description Associated organisation details.
           * @default null
           */
          organisation: {
              /**
               * Id
               * @description Unique identifier of the organisation.
               */
              id: number;
              /**
               * Name
               * @description Name of the organisation.
               */
              name: string;
          } | null;
          /**
           * Owner
           * @description Owner details.
           * @default null
           */
          owner: {
              /**
               * Id
               * @description Unique identifier of the owner.
               */
              id: number;
              /**
               * Name
               * @description Name of the owner.
               */
              name: string;
          } | null;
          /**
           * Phone Numbers
           * @description List of phone numbers.
           */
          phoneNumbers: {
              /**
               * Id
               * @description Unique identifier of the phone number.
               */
              id: number;
              /**
               * Number
               * @description Phone number.
               */
              number: string;
              /**
               * Type
               * @description Type of the phone number.
               * @default null
               */
              type: string | null;
          }[];
          /**
           * Picture Url
           * @description URL of the party's picture.
           * @default null
           */
          pictureURL: string | null;
          /**
           * Team
           * @description Team details.
           * @default null
           */
          team: {
              /**
               * Id
               * @description Unique identifier of the team.
               */
              id: number;
              /**
               * Name
               * @description Name of the team.
               */
              name: string;
          } | null;
          /**
           * Title
           * @description Title of the person.
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @description Type of party.
           * @enum {string}
           */
          type: "person" | "organisation";
          /**
           * Updated At
           * @description Last update timestamp (ISO8601 format).
           */
          updatedAt: string;
          /**
           * Websites
           * @description List of websites.
           */
          websites: {
              /**
               * Address
               * @description Address portion of the website link.
               * @default null
               */
              address: string | null;
              /**
               * Id
               * @description Unique identifier of the website entry.
               */
              id: number;
              /**
               * Service
               * @description Service type (e.g., URL, TWITTER).
               * @default null
               */
              service: string | null;
              /**
               * Type
               * @description Type of the website.
               * @default null
               */
              type: string | null;
              /**
               * Url
               * @description URL of the website.
               */
              url: string;
          }[];
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
 * Type of CAPSULE_CRM's CAPSULE_CRM_LIST_PROJECTS tool input.
 */
type CAPSULE_CRM_LIST_PROJECTS_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of project fields to include (e.g., 'id,name,status').
   * @default null
   */
  fields: string | null;
  /**
   * Page
   * @description The page of results to return (>=1). Default: 1.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of projects per page (1-100). Default: 50.
   * @default 50
   */
  perPage: number | null;
  /**
   * Search
   * @description Search term to filter project names or descriptions.
   * @default null
   */
  search: string | null;
  /**
   * Status
   * @description Status to filter projects, e.g., 'Open', 'Completed'.
   * @default null
   */
  status: string | null;
};

/**
 * Type of CAPSULE_CRM's CAPSULE_CRM_LIST_PROJECTS tool output.
 */
type CAPSULE_CRM_LIST_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description List of projects retrieved.
       */
      projects: {
          /**
           * Created On
           * @description ISO8601 timestamp when the project was created.
           */
          createdOn: string;
          /**
           * Id
           * @description Unique identifier of the project (case).
           */
          id: number;
          /**
           * Name
           * @description Name of the project.
           */
          name: string;
          /**
           * Party
           * @description Party associated with the project.
           * @default null
           */
          party: {
              /**
               * Id
               * @description Unique identifier of the party associated with the project.
               */
              id: number;
              /**
               * Name
               * @description Name of the associated party.
               * @default null
               */
              name: string | null;
              /**
               * Type
               * @description Type of party, e.g., 'person' or 'organisation'.
               */
              type: string;
          } | null;
          /**
           * Status
           * @description Current status of the project.
           */
          status: string;
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
 * Type of CAPSULE_CRM's CAPSULE_CRM_LIST_TASKS tool input.
 */
type CAPSULE_CRM_LIST_TASKS_INPUT = {
  /**
   * Embed
   * @description Comma-separated list of additional data to embed. Allowed values: 'party', 'opportunity', 'kase', 'owner', 'nextTask'.
   * @default null
   */
  embed: string[] | null;
  /**
   * Page
   * @description The page of results to return. Default: 1.
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of tasks per page (1-100). Default: 50.
   * @default 50
   */
  perPage: number | null;
  /**
   * Status
   * @description Comma-separated list of task statuses to filter by. Allowed values: 'open', 'completed', 'pending'.
   * @default null
   */
  status: string[] | null;
};

/**
 * Type of CAPSULE_CRM's CAPSULE_CRM_LIST_TASKS tool output.
 */
type CAPSULE_CRM_LIST_TASKS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Tasks
       * @description List of tasks retrieved.
       */
      tasks: {
          /**
           * Category
           * @description Category details of the task.
           */
          category: {
              /**
               * Colour
               * @description Colour code of the category.
               * @default null
               */
              colour: string | null;
              /**
               * Id
               * @description Unique identifier of the category.
               */
              id: number;
              /**
               * Name
               * @description Name of the category.
               */
              name: string;
          };
          /**
           * Created At
           * @description Creation timestamp in ISO8601 format.
           */
          createdAt: string;
          /**
           * Description
           * @description Short description of the task.
           * @default null
           */
          description: string | null;
          /**
           * Due On
           * @description Due date of the task in ISO8601 format.
           * @default null
           */
          dueOn: string | null;
          /**
           * Has Track
           * @description Indicates if the task is part of a track.
           */
          hasTrack: boolean;
          /**
           * Id
           * @description Unique identifier of the task.
           */
          id: number;
          /**
           * Owner
           * @description Assigned owner details.
           * @default null
           */
          owner: {
              /**
               * Id
               * @description Unique identifier of the owner.
               */
              id: number;
              /**
               * Name
               * @description Full name of the owner.
               */
              name: string;
              /**
               * Username
               * @description Username of the owner.
               */
              username: string;
          } | null;
          /**
           * Party
           * @description Linked party details.
           * @default null
           */
          party: {
              /**
               * Id
               * @description Unique identifier of the party.
               */
              id: number;
              /**
               * Name
               * @description Name of the party.
               */
              name: string;
              /**
               * Picture Url
               * @description URL of the party's picture.
               * @default null
               */
              pictureURL: string | null;
              /**
               * Type
               * @description Type of party, e.g., 'person' or 'organisation'.
               */
              type: string;
          } | null;
          /**
           * Repeat
           * @description Repetition details for the task.
           * @default null
           */
          repeat: {
              /**
               * Frequency
               * @description Frequency of repetition.
               * @default null
               */
              frequency: string | null;
              /**
               * Interval
               * @description Interval between repeats.
               * @default null
               */
              interval: number | null;
              /**
               * On
               * @description Days on which to repeat the task.
               * @default null
               */
              on: string | null;
          } | null;
          /**
           * Status
           * @description Status of the task (OPEN, COMPLETED, or PENDING).
           */
          status: string;
          /**
           * Updated At
           * @description Last update timestamp in ISO8601 format.
           */
          updatedAt: string;
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
 * Type of CAPSULE_CRM's CAPSULE_CRM_LIST_USERS tool input.
 */
type CAPSULE_CRM_LIST_USERS_INPUT = {
  /**
   * Embed
   * @description Comma-separated list of additional data to embed. Supported: 'party'.
   * @default null
   */
  embed: "party"[] | null;
};

/**
 * Type of CAPSULE_CRM's CAPSULE_CRM_LIST_USERS tool output.
 */
type CAPSULE_CRM_LIST_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Users
       * @description List of users on the Capsule account.
       */
      users: {
          /**
           * Currency
           * @description Preferred currency code (ISO 4217).
           */
          currency: string;
          /**
           * Id
           * @description Unique identifier of the user.
           */
          id: number;
          /**
           * Last Login At
           * @description ISO8601 timestamp of last login.
           */
          lastLoginAt: string;
          /**
           * Locale
           * @description Language and region code (e.g., 'en_GB').
           */
          locale: string;
          /**
           * Name
           * @description Full name of the user.
           */
          name: string;
          /**
           * Party
           * @description Associated party record, if embedded.
           * @default null
           */
          party: {
              /**
               * About
               * @description Description or notes.
               * @default null
               */
              about: string | null;
              /**
               * Addresses
               * @description List of addresses.
               */
              addresses: {
                  /**
                   * City
                   * @description City of the address.
                   * @default null
                   */
                  city: string | null;
                  /**
                   * Country
                   * @description Country of the address.
                   * @default null
                   */
                  country: string | null;
                  /**
                   * Id
                   * @description Unique ID of the address.
                   */
                  id: number;
                  /**
                   * State
                   * @description State or region of the address.
                   * @default null
                   */
                  state: string | null;
                  /**
                   * Street
                   * @description Street portion of the address.
                   * @default null
                   */
                  street: string | null;
                  /**
                   * Type
                   * @description Type of the address.
                   * @default null
                   */
                  type: string | null;
                  /**
                   * Zip
                   * @description Postal code of the address.
                   * @default null
                   */
                  zip: string | null;
              }[];
              /**
               * Created At
               * @description ISO8601 creation timestamp.
               */
              createdAt: string;
              /**
               * Email Addresses
               * @description List of email addresses.
               */
              emailAddresses: {
                  /**
                   * Address
                   * @description The email address.
                   */
                  address: string;
                  /**
                   * Id
                   * @description Unique ID of the email address.
                   */
                  id: number;
                  /**
                   * Type
                   * @description Type of the email address.
                   * @default null
                   */
                  type: string | null;
              }[];
              /**
               * First Name
               * @description First name of the person.
               * @default null
               */
              firstName: string | null;
              /**
               * Id
               * @description Unique identifier of the party.
               */
              id: number;
              /**
               * Job Title
               * @description Job title of the person.
               * @default null
               */
              jobTitle: string | null;
              /**
               * Last Name
               * @description Last name of the person.
               * @default null
               */
              lastName: string | null;
              /**
               * PartyOrganization
               * @description Linked organisation.
               * @default null
               */
              organisation: {
                  /**
                   * Id
                   * @description Unique ID of the organization.
                   */
                  id: number;
                  /**
                   * Name
                   * @description Name of the organization.
                   */
                  name: string;
                  /**
                   * Picture Url
                   * @description URL of the organization's picture.
                   * @default null
                   */
                  pictureURL: string | null;
              } | null;
              /**
               * PartyOwner
               * @description Owner of the party.
               * @default null
               */
              owner: {
                  /**
                   * Id
                   * @description Unique ID of the owner.
                   */
                  id: number;
                  /**
                   * Name
                   * @description Full name of the owner.
                   */
                  name: string;
                  /**
                   * Username
                   * @description Username of the owner.
                   */
                  username: string;
              } | null;
              /**
               * Phone Numbers
               * @description List of phone numbers.
               */
              phoneNumbers: {
                  /**
                   * Id
                   * @description Unique ID of the phone number.
                   */
                  id: number;
                  /**
                   * Number
                   * @description The phone number.
                   */
                  number: string;
                  /**
                   * Type
                   * @description Type of the phone number.
                   * @default null
                   */
                  type: string | null;
              }[];
              /**
               * Picture Url
               * @description URL of the party's picture.
               * @default null
               */
              pictureURL: string | null;
              /**
               * PartyTeam
               * @description Team associated with the party.
               * @default null
               */
              team: {
                  /**
                   * Id
                   * @description Unique ID of the team.
                   */
                  id: number;
                  /**
                   * Name
                   * @description Name of the team.
                   */
                  name: string;
              } | null;
              /**
               * Title
               * @description Title of the person.
               * @default null
               */
              title: string | null;
              /**
               * Type
               * @description Type of party.
               * @enum {string}
               */
              type: "person" | "organisation";
              /**
               * Updated At
               * @description ISO8601 last update timestamp.
               */
              updatedAt: string;
              /**
               * Websites
               * @description List of websites.
               */
              websites: {
                  /**
                   * Address
                   * @description The address portion of the link.
                   * @default null
                   */
                  address: string | null;
                  /**
                   * Id
                   * @description Unique ID of the website entry.
                   */
                  id: number;
                  /**
                   * Service
                   * @description Service name, e.g., URL or TWITTER.
                   * @default null
                   */
                  service: string | null;
                  /**
                   * Type
                   * @description Type of the website link.
                   * @default null
                   */
                  type: string | null;
                  /**
                   * Url
                   * @description URL of the website.
                   * @default null
                   */
                  url: string | null;
              }[];
          } | null;
          /**
           * Status
           * @description User status (e.g., 'ACTIVE').
           */
          status: string;
          /**
           * Task Reminder
           * @description Whether the user receives task reminders.
           */
          taskReminder: boolean;
          /**
           * Timezone
           * @description IANA timezone (e.g., 'Europe/London').
           */
          timezone: string;
          /**
           * Username
           * @description User's username.
           */
          username: string;
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
 * Type of CAPSULE_CRM's CAPSULE_CRM_RUN_FILTER_QUERY tool input.
 */
type CAPSULE_CRM_RUN_FILTER_QUERY_INPUT = {
  /**
   * Embed
   * @description Additional data to include, comma-separated list. Supported values vary by entity.
   * @default null
   */
  embed: string[] | null;
  /**
   * Entity
   * @description Entity type to filter: parties, opportunities, or kases (projects).
   * @enum {string}
   */
  entity?: "parties" | "opportunities" | "kases";
  /**
   * Filter
   * @description Filter object containing conditions and optional sort order.
   */
  filter?: {
      /**
       * Conditions
       * @description List of filter conditions combined with 'and'.
       */
      conditions: {
          /**
           * Field
           * @description Field name to filter on. See filter reference for supported fields.
           */
          field: string;
          /**
           * Operator
           * @description Operator to use. Supported operators depend on the field (e.g., 'is', 'contains', 'is within last').
           */
          operator: string;
          /**
           * Value
           * @description Value to compare the field against. Type depends on the field and operator.
           */
          value: string | null;
      }[];
      /**
       * Order By
       * @description Sort order for the results.
       * @default null
       */
      orderBy: {
          /**
           * Direction
           * @description Sort direction: 'asc' or 'desc'.
           * @default asc
           * @enum {string}
           */
          direction: "asc" | "desc";
          /**
           * Field
           * @description Field name to sort by.
           */
          field: string;
      }[] | null;
  };
  /**
   * Page
   * @description Page of results to return. Default is 1.
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of entities per page (1-100). Default is 50.
   * @default null
   */
  perPage: number | null;
};

/**
 * Type of CAPSULE_CRM's CAPSULE_CRM_RUN_FILTER_QUERY tool output.
 */
type CAPSULE_CRM_RUN_FILTER_QUERY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Raw
       * @description Parsed JSON response from filter query.
       */
      raw: {
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
 * Type of CAPSULE_CRM's CAPSULE_CRM_UPDATE_PARTY tool input.
 */
type CAPSULE_CRM_UPDATE_PARTY_INPUT = {
  /**
   * Embed
   * @description Additional data to embed in response: tags, fields, organisation, or missingImportantFields
   * @default null
   */
  embed: string[] | null;
  /**
   * Party
   * @description Fields to update on the party object
   */
  party?: {
      /**
       * About
       * @description Short description of the party
       * @default null
       */
      about: string | null;
      /**
       * Addresses
       * @description Addresses to add/update/delete
       * @default null
       */
      addresses: {
          /**
           *  Delete
           * @description Set to true to delete this address
           * @default null
           */
          _delete: boolean | null;
          /**
           * City
           * @description City
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country
           * @default null
           */
          country: string | null;
          /**
           * Id
           * @description ID for updating or deleting the address
           * @default null
           */
          id: number | null;
          /**
           * State
           * @description State or province
           * @default null
           */
          state: string | null;
          /**
           * Street
           * @description Street
           * @default null
           */
          street: string | null;
          /**
           * Type
           * @description Type (e.g., 'Home', 'Work')
           * @default null
           */
          type: string | null;
          /**
           * Zip
           * @description ZIP or postal code
           * @default null
           */
          zip: string | null;
      }[] | null;
      /**
       * Email Addresses
       * @description Email addresses to add/update/delete
       * @default null
       */
      emailAddresses: {
          /**
           *  Delete
           * @description Set to true to delete this email address
           * @default null
           */
          _delete: boolean | null;
          /**
           * Address
           * @description Email address
           * @default null
           */
          address: string | null;
          /**
           * Id
           * @description ID for updating or deleting the email address
           * @default null
           */
          id: number | null;
          /**
           * Type
           * @description Type (e.g., 'Work', 'Home')
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Fields
       * @description Custom fields to add/update/delete
       * @default null
       */
      fields: {
          /**
           *  Delete
           * @description Set to true to delete this field value
           * @default null
           */
          _delete: boolean | null;
          /**
           * Definition
           * @description Reference to custom field definition
           */
          definition: number | null;
          /**
           * Value
           * @description Value to set
           */
          value: string;
      }[] | null;
      /**
       * First Name
       * @description First name of the person
       * @default null
       */
      firstName: string | null;
      /**
       * Job Title
       * @description Job title of the person
       * @default null
       */
      jobTitle: string | null;
      /**
       * Last Name
       * @description Last name of the person
       * @default null
       */
      lastName: string | null;
      /**
       * OrganisationLinkInput
       * @description Organisation link update
       * @default null
       */
      organisation: {
          /**
           * Id
           * @description Organisation ID to link
           * @default null
           */
          id: number | null;
          /**
           * Name
           * @description Organisation name to link or create
           * @default null
           */
          name: string | null;
      } | null;
      /**
       * PartyOwnerInput
       * @description Owner assignment; omit or null to clear
       * @default null
       */
      owner: {
          /**
           * Id
           * @description User ID to assign as owner; null to clear
           * @default null
           */
          id: number | null;
      } | null;
      /**
       * Phone Numbers
       * @description Phone numbers to add/update/delete
       * @default null
       */
      phoneNumbers: {
          /**
           *  Delete
           * @description Set to true to delete this phone number
           * @default null
           */
          _delete: boolean | null;
          /**
           * Id
           * @description ID for updating or deleting the phone number
           * @default null
           */
          id: number | null;
          /**
           * Number
           * @description The phone number
           * @default null
           */
          number: string | null;
          /**
           * Type
           * @description Type (e.g., 'Work', 'Home')
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Tags
       * @description Tags to add/remove
       * @default null
       */
      tags: {
          /**
           *  Delete
           * @description Set to true to remove the tag
           * @default null
           */
          _delete: boolean | null;
          /**
           * Id
           * @description ID for updating or removing the tag
           * @default null
           */
          id: number | null;
          /**
           * Name
           * @description Tag name to add
           * @default null
           */
          name: string | null;
      }[] | null;
      /**
       * PartyTeamInput
       * @description Team assignment; omit or null to clear
       * @default null
       */
      team: {
          /**
           * Id
           * @description Team ID to assign; null to clear
           * @default null
           */
          id: number | null;
      } | null;
      /**
       * Title
       * @description Title of the person if applicable
       * @default null
       */
      title: string | null;
      /**
       * Websites
       * @description Websites to add/update/delete
       * @default null
       */
      websites: {
          /**
           *  Delete
           * @description Set to true to delete this website
           * @default null
           */
          _delete: boolean | null;
          /**
           * Address
           * @description Website address or handle
           * @default null
           */
          address: string | null;
          /**
           * Id
           * @description ID for updating or deleting the website
           * @default null
           */
          id: number | null;
          /**
           * Service
           * @description Service label (e.g., 'URL', 'TWITTER')
           * @default null
           */
          service: string | null;
          /**
           * Type
           * @description Type (e.g., 'Home', 'Work')
           * @default null
           */
          type: string | null;
      }[] | null;
  };
  /**
   * Party Id
   * @description Unique ID of the party to update
   */
  partyId?: number;
};

/**
 * Type of CAPSULE_CRM's CAPSULE_CRM_UPDATE_PARTY tool output.
 */
type CAPSULE_CRM_UPDATE_PARTY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Party
       * @description The updated party record
       */
      party: {
          /**
           * About
           * @default null
           */
          about: string | null;
          /**
           * Addresses
           * @default []
           */
          addresses: {
              /** City */
              city: string | null;
              /** Country */
              country: string | null;
              /** Id */
              id: number;
              /** State */
              state: string | null;
              /** Street */
              street: string | null;
              /** Type */
              type: string | null;
              /** Zip */
              zip: string | null;
          }[];
          /** Created At */
          createdAt: string;
          /**
           * Email Addresses
           * @default []
           */
          emailAddresses: {
              /** Address */
              address: string;
              /** Id */
              id: number;
              /** Type */
              type: string | null;
          }[];
          /**
           * Fields
           * @default null
           */
          fields: {
              /** Definition */
              definition: number | null;
              /** Value */
              value: string;
          }[] | null;
          /**
           * First Name
           * @default null
           */
          firstName: string | null;
          /** Id */
          id: number;
          /**
           * Job Title
           * @default null
           */
          jobTitle: string | null;
          /**
           * Last Contacted At
           * @default null
           */
          lastContactedAt: string | null;
          /**
           * Last Name
           * @default null
           */
          lastName: string | null;
          /**
           * Name
           * @default null
           */
          name: string | null;
          /**
           * PartyOrganisationOut
           * @default null
           */
          organisation: {
              /** Id */
              id: number;
              /** Name */
              name: string | null;
          } | null;
          /**
           * UserOut
           * @default null
           */
          owner: {
              /** Id */
              id: number;
              /** Name */
              name: string | null;
              /** Username */
              username: string | null;
          } | null;
          /**
           * Phone Numbers
           * @default []
           */
          phoneNumbers: {
              /** Id */
              id: number;
              /** Number */
              number: string;
              /** Type */
              type: string | null;
          }[];
          /**
           * Picture Url
           * @default null
           */
          pictureURL: string | null;
          /**
           * Tags
           * @default null
           */
          tags: {
              /** Id */
              id: number | null;
              /** Name */
              name: string | null;
          }[] | null;
          /**
           * PartyTeamOut
           * @default null
           */
          team: {
              /** Id */
              id: number;
              /** Name */
              name: string | null;
          } | null;
          /**
           * Title
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @enum {string}
           */
          type: "person" | "organisation";
          /** Updated At */
          updatedAt: string;
          /**
           * Websites
           * @default []
           */
          websites: {
              /** Address */
              address: string;
              /** Id */
              id: number;
              /** Service */
              service: string | null;
              /** Type */
              type: string | null;
              /** Url */
              url: string | null;
          }[];
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
 * Type map of all available tool input types for toolkit "CAPSULE_CRM".
 */
export type CAPSULE_CRM_TOOL_INPUTS = {
  CREATE_PARTY: CAPSULE_CRM_CREATE_PARTY_INPUT
  DELETE_PARTY: CAPSULE_CRM_DELETE_PARTY_INPUT
  LIST_DELETED_OPPORTUNITIES: CAPSULE_CRM_LIST_DELETED_OPPORTUNITIES_INPUT
  LIST_DELETED_PARTIES: CAPSULE_CRM_LIST_DELETED_PARTIES_INPUT
  LIST_ENTRIES_BY_DATE: CAPSULE_CRM_LIST_ENTRIES_BY_DATE_INPUT
  LIST_ORG_EMPLOYEES: CAPSULE_CRM_LIST_ORG_EMPLOYEES_INPUT
  LIST_PARTIES: CAPSULE_CRM_LIST_PARTIES_INPUT
  LIST_PROJECTS: CAPSULE_CRM_LIST_PROJECTS_INPUT
  LIST_TASKS: CAPSULE_CRM_LIST_TASKS_INPUT
  LIST_USERS: CAPSULE_CRM_LIST_USERS_INPUT
  RUN_FILTER_QUERY: CAPSULE_CRM_RUN_FILTER_QUERY_INPUT
  UPDATE_PARTY: CAPSULE_CRM_UPDATE_PARTY_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CAPSULE_CRM".
 */
export type CAPSULE_CRM_TOOL_OUTPUTS = {
  CREATE_PARTY: CAPSULE_CRM_CREATE_PARTY_OUTPUT
  DELETE_PARTY: CAPSULE_CRM_DELETE_PARTY_OUTPUT
  LIST_DELETED_OPPORTUNITIES: CAPSULE_CRM_LIST_DELETED_OPPORTUNITIES_OUTPUT
  LIST_DELETED_PARTIES: CAPSULE_CRM_LIST_DELETED_PARTIES_OUTPUT
  LIST_ENTRIES_BY_DATE: CAPSULE_CRM_LIST_ENTRIES_BY_DATE_OUTPUT
  LIST_ORG_EMPLOYEES: CAPSULE_CRM_LIST_ORG_EMPLOYEES_OUTPUT
  LIST_PARTIES: CAPSULE_CRM_LIST_PARTIES_OUTPUT
  LIST_PROJECTS: CAPSULE_CRM_LIST_PROJECTS_OUTPUT
  LIST_TASKS: CAPSULE_CRM_LIST_TASKS_OUTPUT
  LIST_USERS: CAPSULE_CRM_LIST_USERS_OUTPUT
  RUN_FILTER_QUERY: CAPSULE_CRM_RUN_FILTER_QUERY_OUTPUT
  UPDATE_PARTY: CAPSULE_CRM_UPDATE_PARTY_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CAPSULE_CRM toolkit.
 */
export const CAPSULE_CRM = {
  slug: "capsule_crm",
  tools: {
    /**
     * Tool to create a party in capsule crm. use when you have collected a person's or organisation's details and need to add a new record.
     */
    CREATE_PARTY: "CAPSULE_CRM_CREATE_PARTY",
    /**
     * Tool to fully delete a specific party (person or organisation) from capsule crm. use when you need to completely remove a party after confirming no active references remain.
     */
    DELETE_PARTY: "CAPSULE_CRM_DELETE_PARTY",
    /**
     * Tool to list opportunities deleted or restricted since a given date. use when you need to identify recently deleted or restricted opportunities.
     */
    LIST_DELETED_OPPORTUNITIES: "CAPSULE_CRM_LIST_DELETED_OPPORTUNITIES",
    /**
     * Tool to retrieve parties deleted since a given date. use when you need to sync deletions.
     */
    LIST_DELETED_PARTIES: "CAPSULE_CRM_LIST_DELETED_PARTIES",
    /**
     * Tool to list notes, emails, and completed party tasks in descending order by entry date. use when you need the most recent entries first after authenticating.
     */
    LIST_ENTRIES_BY_DATE: "CAPSULE_CRM_LIST_ENTRIES_BY_DATE",
    /**
     * Tool to list employees linked to a specific organisation (party). use when you need to retrieve all employees under a given organisation.
     */
    LIST_ORG_EMPLOYEES: "CAPSULE_CRM_LIST_ORG_EMPLOYEES",
    /**
     * Tool to list all parties (contacts) on the account. use when you need to fetch contacts with optional filters or embed additional related data.
     */
    LIST_PARTIES: "CAPSULE_CRM_LIST_PARTIES",
    /**
     * Tool to list projects (cases) from capsule crm. use when you need a paginated or filtered view of projects.
     */
    LIST_PROJECTS: "CAPSULE_CRM_LIST_PROJECTS",
    /**
     * Tool to list tasks on the capsule account. use when you need to retrieve tasks with filters or embedded related data.
     */
    LIST_TASKS: "CAPSULE_CRM_LIST_TASKS",
    /**
     * Tool to list all users on the capsule account. use after authentication to enumerate users for reporting or auditing.
     */
    LIST_USERS: "CAPSULE_CRM_LIST_USERS",
    /**
     * Tool to run structured filter queries on parties, opportunities or kases. use when you need to retrieve entities matching specific filter conditions.
     */
    RUN_FILTER_QUERY: "CAPSULE_CRM_RUN_FILTER_QUERY",
    /**
     * Tool to update an existing person or organisation (party) in capsule crm. use when you need to modify specific fields of a party after confirming its id. example: "update party 11587 to remove phone number 12136 and add a new work email."
     */
    UPDATE_PARTY: "CAPSULE_CRM_UPDATE_PARTY",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CAPSULE_CRM".
 */
export type CAPSULE_CRM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CAPSULE_CRM".
 */
export type CAPSULE_CRM_TRIGGER_EVENTS = {}
