// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_BULK_CREATE_CREDENTIALS_V2 tool input.
 */
type ACCREDIBLE_CERTIFICATES_BULK_CREATE_CREDENTIALS_V2_INPUT = {
  /**
   * Credentials
   * @description List of up to 30 credentials to create in one batch
   */
  credentials?: {
      /**
       * Description
       * @description Description of the credential
       * @default null
       */
      description: string | null;
      /**
       * Group Id
       * @description ID of the group to which this credential belongs
       */
      group_id: number;
      /**
       * Name
       * @description Title of the credential
       */
      name: string;
      /**
       * Recipient
       * @description Recipient information for this credential
       */
      recipient: {
          /**
           * Email
           * Format: email
           * @description Email address of the recipient
           */
          email: unknown;
          /**
           * Name
           * @description Full name of the recipient
           */
          name: string;
      };
  }[];
};

/**
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_BULK_CREATE_CREDENTIALS_V2 tool output.
 */
type ACCREDIBLE_CERTIFICATES_BULK_CREATE_CREDENTIALS_V2_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description Results array with credential or error objects
       */
      results: {
          /**
           * CredentialNested
           * @description Credential data if creation succeeded
           * @default null
           */
          credential: {
              /**
               * Approve
               * @description Whether the credential is approved on creation
               */
              approve: boolean;
              /**
               * Complete
               * @description Whether the credential is marked complete
               */
              complete: boolean;
              /**
               * Course Link
               * @description Link to the course, if any
               * @default null
               */
              course_link: string | null;
              /**
               * Custom Attributes
               * @description Custom attributes on the credential
               * @default null
               */
              custom_attributes: {
                  [key: string]: unknown;
              } | null;
              /**
               * Description
               * @description Description of the credential
               * @default null
               */
              description: string | null;
              /**
               * Evidence Items
               * @description Evidence items attached to the credential
               */
              evidence_items: {
                  /**
                   * Description
                   * @description Description of the evidence item
                   */
                  description: string;
                  /**
                   * Id
                   * @description Identifier of the evidence item
                   */
                  id: number;
                  /**
                   * Link Url
                   * @description URL linking to the evidence item resource
                   * @default null
                   */
                  link_url: string | null;
                  /**
                   * Position
                   * @description Display order of the evidence item on the credential
                   */
                  position: number;
                  /**
                   * Preview Image Url
                   * @description URL of the preview image for the item
                   * @default null
                   */
                  preview_image_url: string | null;
                  /**
                   * String Object
                   * @description Supplemental numeric or string object for certain types
                   * @default null
                   */
                  string_object: {
                      [key: string]: number;
                  } | null;
                  /**
                   * Supplemental
                   * @description Indicates if this item is supplemental
                   */
                  supplemental: boolean;
                  /**
                   * Type
                   * @description Type of the evidence item
                   * @enum {string}
                   */
                  type: "file" | "url" | "video" | "grade" | "transcript";
              }[];
              /**
               * Expired On
               * @description Expiration date of the credential
               * @default null
               */
              expired_on: string | null;
              /**
               * Grade
               * @description Grade associated with the credential, if any
               * @default null
               */
              grade: string | null;
              /**
               * Group Name
               * @description Name of the group the credential belongs to
               */
              group_name: string;
              /**
               * Id
               * @description Unique identifier for the credential
               */
              id: number;
              /**
               * Issued On
               * @description Date when the credential was issued (YYYY-MM-DD)
               */
              issued_on: string;
              /**
               * Issuer
               * @description Nested issuer info
               */
              issuer: {
                  /**
                   * Description
                   * @description Description of the issuer
                   */
                  description: string;
                  /**
                   * Name
                   * @description Name of the issuer
                   */
                  name: string;
                  /**
                   * Url
                   * @description URL of the issuer
                   */
                  url: string;
              };
              /**
               * Meta Data
               * @description Additional metadata on the credential
               * @default null
               */
              meta_data: {
                  [key: string]: unknown;
              } | null;
              /**
               * Name
               * @description Name of the credential
               */
              name: string;
              /**
               * Recipient
               * @description Nested recipient info
               */
              recipient: {
                  /**
                   * Email
                   * @description Email of the recipient
                   */
                  email: string;
                  /**
                   * Id
                   * @description Identifier of the recipient
                   */
                  id: number | null;
                  /**
                   * Meta Data
                   * @description Additional metadata for the recipient
                   * @default null
                   */
                  meta_data: {
                      [key: string]: unknown;
                  } | null;
                  /**
                   * Name
                   * @description Name of the recipient
                   */
                  name: string;
              };
              /**
               * References
               * @description References attached to the credential
               */
              references: {
                  /**
                   * Raw
                   * @description Raw reference object as returned by the API
                   */
                  raw: {
                      [key: string]: unknown;
                  };
              }[];
              /**
               * Url
               * @description URL to view the credential
               */
              url: string;
          } | null;
          /**
           * Errors
           * @description Error information if creation failed
           * @default null
           */
          errors: {
              /**
               * Code
               * @description Error code
               */
              code: string;
              /**
               * Details
               * @description List of field-specific errors
               * @default null
               */
              details: {
                  /**
                   * Message
                   * @description Validation error message
                   */
                  message: string;
                  /**
                   * Property
                   * @description Field path where the error occurred
                   */
                  property: string;
              }[] | null;
              /**
               * Message
               * @description Error message
               */
              message: string;
          } | null;
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
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_CLONE_GROUP tool input.
 */
type ACCREDIBLE_CERTIFICATES_CLONE_GROUP_INPUT = {
  /**
   * Allow Duplicate Credentials
   * @description Override allowing duplicate credentials per email
   * @default null
   */
  allow_duplicate_credentials: boolean | null;
  /**
   * Attach Pdf
   * @description Override PDF attachment setting when notifying recipients
   * @default null
   */
  attach_pdf: boolean | null;
  /**
   * Auto Expiry
   * @description Override credential auto-expiry in years; ignored if <=0
   * @default null
   */
  auto_expiry: number | null;
  /**
   * Badge Design Id
   * @description Override badge design ID
   * @default null
   */
  badge_design_id: number | null;
  /**
   * Blockchain
   * @description Override blockchain recording setting
   * @default null
   */
  blockchain: boolean | null;
  /**
   * Certificate Design Id
   * @description Override certificate design ID
   * @default null
   */
  certificate_design_id: number | null;
  /**
   * Course Description
   * @description Override description visible to the recipient
   * @default null
   */
  course_description: string | null;
  /**
   * Course Link
   * Format: uri
   * @description Override URL for the course information page
   */
  course_link?: unknown;
  /**
   * Course Link Show
   * @description Override showing course link
   * @default null
   */
  course_link_show: boolean | null;
  /**
   * Course Name
   * @description Override course or achievement name visible to the recipient
   * @default null
   */
  course_name: string | null;
  /**
   * Generate Private Credential
   * @description Override private credential default: true, false, or null to inherit
   * @default null
   */
  generate_private_credential: boolean | null;
  /**
   * Group Id
   * @description ID of the group to clone
   */
  group_id?: number;
  /**
   * Language
   * @description Override language code for the group
   * @default null
   * @enum {string|null}
   */
  language: "en" | "es" | "vi" | "pt" | "ja" | "fr" | "da" | "nl" | "fi" | "no" | "nb" | "ro" | "sv" | "th" | "tw" | "zh" | "tr" | "ar" | "he" | "ms" | "de" | null;
  /**
   * Learning Outcomes
   * @description Override list of learning outcomes
   * @default null
   */
  learning_outcomes: string[] | null;
  /**
   * Meta Data
   * @description Override arbitrary metadata for the group
   * @default null
   */
  meta_data: {
      [key: string]: string;
  } | null;
  /**
   * Name
   * @description Override name of the cloned group (prefixed with 'Copy' if omitted)
   * @default null
   */
  name: string | null;
  /**
   * Organization Link Show
   * @description Override showing organization link
   * @default null
   */
  organization_link_show: boolean | null;
  /**
   * Primary Design Id
   * @description Override primary design ID
   * @default null
   */
  primary_design_id: number | null;
  /**
   * Signup Url
   * Format: uri
   * @description Override signup URL for course enrollment
   */
  signup_url?: unknown;
  /**
   * Signup Url Show
   * @description Override showing signup URL
   * @default null
   */
  signup_url_show: boolean | null;
  /**
   * Skill Category Id
   * @description Override skill category association
   * @default null
   */
  skill_category_id: number | null;
};

/**
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_CLONE_GROUP tool output.
 */
type ACCREDIBLE_CERTIFICATES_CLONE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Group
       * @description The cloned group record
       */
      group: {
          /**
           * Attach Pdf
           * @description Whether PDF is attached to notification email
           */
          attach_pdf: boolean;
          /**
           * Auto Expiry
           * @description Auto-expiry years set for credentials
           * @default null
           */
          auto_expiry: number | null;
          /**
           * Badge Design Id
           * @description Badge design ID in use
           * @default null
           */
          badge_design_id: number | null;
          /**
           * Blockchain
           * @description Whether blockchain recording is enabled
           */
          blockchain: boolean;
          /**
           * Certificate Design Id
           * @description Certificate design ID in use
           * @default null
           */
          certificate_design_id: number | null;
          /**
           * Collections
           * @description Collections assigned to this group
           * @default null
           */
          collections: {
              /**
               * Description
               * @description Collection description
               * @default null
               */
              description: string | null;
              /**
               * Id
               * @description Collection ID
               */
              id: number;
              /**
               * Name
               * @description Collection name
               */
              name: string;
          }[] | null;
          /**
           * Course Description
           * @description Course description visible to the recipient
           */
          course_description: string;
          /**
           * Course Link
           * @description URL to the course information page
           * @default null
           */
          course_link: string | null;
          /**
           * Course Link Show
           * @description Whether course link is displayed
           */
          course_link_show: boolean;
          /**
           * Course Name
           * @description Course name visible to the recipient
           */
          course_name: string;
          /**
           * Created At
           * @description Timestamp of creation
           */
          created_at: string;
          /**
           * Department Id
           * @description Department ID owning the group
           */
          department_id: number;
          /**
           * Design Id
           * @description Design ID in use (deprecated)
           * @default null
           */
          design_id: number | null;
          /**
           * Design Name
           * @description Name of the design in use
           * @default null
           */
          design_name: string | null;
          /**
           * Generate Private Credential
           * @description Default private credential setting for credentials
           * @default null
           */
          generate_private_credential: boolean | null;
          /**
           * Id
           * @description Unique identifier of the group
           */
          id: number;
          /**
           * Language
           * @description Language code for the group
           */
          language: string;
          /**
           * Learning Outcomes
           * @description Learning outcomes of the group
           * @default null
           */
          learning_outcomes: string[] | null;
          /**
           * Meta Data
           * @description Metadata of the group
           * @default null
           */
          meta_data: {
              [key: string]: string;
          } | null;
          /**
           * Name
           * @description Name of the group
           */
          name: string;
          /**
           * Organization Link Show
           * @description Whether organization link is displayed
           */
          organization_link_show: boolean;
          /**
           * Primary Design Id
           * @description Primary design ID in use
           * @default null
           */
          primary_design_id: number | null;
          /**
           * Signup Url
           * @description Signup URL for recipients
           * @default null
           */
          signup_url: string | null;
          /**
           * Signup Url Show
           * @description Whether signup URL is displayed
           */
          signup_url_show: boolean;
          /**
           * SkillCategory
           * @description Associated skill category
           * @default null
           */
          skill_category: {
              /**
               * Id
               * @description Skill category ID
               */
              id: number;
              /**
               * Name
               * @description Skill category name
               */
              name: string;
          } | null;
          /**
           * Updated At
           * @description Timestamp of last update
           */
          updated_at: string;
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
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_CREATE_COLLECTION tool input.
 */
type ACCREDIBLE_CERTIFICATES_CREATE_COLLECTION_INPUT = {
  /**
   * Description
   * @description Description of the collection
   * @default null
   */
  description: string | null;
  /**
   * Name
   * @description Name of the collection
   */
  name?: string;
  /**
   * Public
   * @description Whether the collection is public
   * @default null
   */
  public: boolean | null;
};

/**
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_CREATE_COLLECTION tool output.
 */
type ACCREDIBLE_CERTIFICATES_CREATE_COLLECTION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collection
       * @description Created collection object
       */
      collection: {
          /**
           * Description
           * @description Collection description
           * @default null
           */
          description: string | null;
          /**
           * Groups
           * @description List of groups assigned to collection
           */
          groups: {
              /**
               * Description
               * @description Group description
               * @default null
               */
              description: string | null;
              /**
               * Id
               * @description Group ID
               */
              id: number;
              /**
               * Name
               * @description Group name
               */
              name: string;
          }[];
          /**
           * Groups Count
           * @description Number of groups in collection
           */
          groups_count: number;
          /**
           * Id
           * @description Collection UUID
           */
          id: string;
          /**
           * Name
           * @description Collection name
           */
          name: string;
          /**
           * Organization Id
           * @description Organization ID
           */
          organization_id: number;
          /**
           * Public
           * @description Public visibility flag
           */
          public: boolean;
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
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_CREATE_EVIDENCE_ITEM tool input.
 */
type ACCREDIBLE_CERTIFICATES_CREATE_EVIDENCE_ITEM_INPUT = {
  /**
   * Category
   * @description Type of evidence item, dictates its display
   * @enum {string}
   */
  category?: "file" | "url" | "video" | "grade" | "transcript";
  /**
   * Credential Id
   * @description Global ID of the credential to attach the evidence item to
   */
  credential_id?: string;
  /**
   * Custom Insight
   * @description Override auto-generated insight text below the evidence item
   * @default null
   */
  custom_insight: string | null;
  /**
   * Description
   * @description Title text for the evidence item displayed on the credential
   */
  description?: string;
  /**
   * File
   * Format: uri
   * @description File URL when category is file
   */
  file?: unknown;
  /**
   * Position
   * @description Position index of the evidence item on the credential (0 = first)
   * @default null
   */
  position: number | null;
  /**
   * Preview
   * Format: uri
   * @description Override preview image URL for URL category
   */
  preview?: unknown;
  /**
   * String Object
   * @description String data for grade or transcript categories, e.g., '83'
   * @default null
   */
  string_object: string | null;
  /**
   * Url
   * Format: uri
   * @description URL of the item when category is url or video
   */
  url?: unknown;
};

/**
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_CREATE_EVIDENCE_ITEM tool output.
 */
type ACCREDIBLE_CERTIFICATES_CREATE_EVIDENCE_ITEM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Evidence Item */
      evidence_item: {
          /**
           * Description
           * @description Title text of the evidence item
           */
          description: string;
          /**
           * Id
           * @description Unique ID of the evidence item
           */
          id: number;
          /**
           * Link Url
           * @description Link URL of the evidence item, if applicable
           * @default null
           */
          link_url: string | null;
          /**
           * Position
           * @description Position index on the credential list
           */
          position: number;
          /**
           * Preview Image Url
           * @description Preview image URL for the evidence item
           * @default null
           */
          preview_image_url: string | null;
          /**
           * String Object
           * @description String data when type is grade or transcript
           * @default null
           */
          string_object: string | null;
          /**
           * Supplemental
           * @description Whether this item is supplemental to the credential
           */
          supplemental: boolean;
          /**
           * Type
           * @description Category/type of the evidence item
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
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_CREATE_GROUP tool input.
 */
type ACCREDIBLE_CERTIFICATES_CREATE_GROUP_INPUT = {
  /**
   * Allow Duplicate Credentials
   * @description Allow duplicate credentials per email: true/false
   * @default null
   */
  allow_duplicate_credentials: boolean | null;
  /**
   * Attach Pdf
   * @description Attach credential PDF to notification email
   * @default false
   */
  attach_pdf: boolean;
  /**
   * Auto Expiry
   * @description Years until auto-expiry of credential; ignored if <=0
   * @default null
   */
  auto_expiry: number | null;
  /**
   * Badge Design Id
   * @description Badge design ID to render credentials
   * @default null
   */
  badge_design_id: number | null;
  /**
   * Blockchain
   * @description Record credentials on blockchain
   * @default false
   */
  blockchain: boolean;
  /**
   * Certificate Design Id
   * @description Certificate design ID to render credentials
   * @default null
   */
  certificate_design_id: number | null;
  /**
   * Collections
   * @description List of collection objects with 'id' field
   * @default null
   */
  collections: {
      [key: string]: number;
  }[] | null;
  /**
   * Course Description
   * @description Description of the course or achievement visible to the recipient
   */
  course_description?: string;
  /**
   * Course Link
   * Format: uri
   * @description URL for course information page
   */
  course_link?: unknown;
  /**
   * Course Link Show
   * @description Display course link: true/false or null to inherit
   * @default null
   */
  course_link_show: boolean | null;
  /**
   * Course Name
   * @description Course or achievement name visible to the recipient
   */
  course_name?: string;
  /**
   * Department Id
   * @description Department ID for the group; defaults to org default
   * @default null
   */
  department_id: number | null;
  /**
   * Generate Private Credential
   * @description Override default private credential setting: true/false or null to inherit
   * @default null
   */
  generate_private_credential: boolean | null;
  /**
   * Language
   * @description Language code for the group
   * @default en
   * @enum {string}
   */
  language: "en" | "es" | "vi" | "pt" | "ja" | "fr" | "da" | "nl" | "fi" | "no" | "nb" | "ro" | "sv" | "th" | "tw" | "zh" | "tr" | "ar" | "he" | "ms" | "de";
  /**
   * Learning Outcomes
   * @description Learning outcomes list for this group
   * @default null
   */
  learning_outcomes: string[] | null;
  /**
   * Meta Data
   * @description Arbitrary string key-value metadata for this group
   * @default null
   */
  meta_data: {
      [key: string]: string;
  } | null;
  /**
   * Name
   * @description Name of the group (internal reference, not shown to the recipient)
   */
  name?: string;
  /**
   * Organization Link Show
   * @description Display organization link: true/false or null to inherit
   * @default null
   */
  organization_link_show: boolean | null;
  /**
   * Primary Design Id
   * @description Primary design ID to render credentials
   * @default null
   */
  primary_design_id: number | null;
  /**
   * Signup Url
   * Format: uri
   * @description Signup URL for course enrollment
   */
  signup_url?: unknown;
  /**
   * Signup Url Show
   * @description Display signup URL: true/false or null to inherit
   * @default null
   */
  signup_url_show: boolean | null;
  /**
   * Skill Category Id
   * @description Skill category ID to associate
   * @default null
   */
  skill_category_id: number | null;
};

/**
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_CREATE_GROUP tool output.
 */
type ACCREDIBLE_CERTIFICATES_CREATE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Group */
      group: {
          /** Allow Duplicate Credentials */
          allow_duplicate_credentials: boolean | null;
          /** Attach Pdf */
          attach_pdf: boolean;
          /** Auto Expiry */
          auto_expiry: number | null;
          /** Badge Design Id */
          badge_design_id: number | null;
          /** Blockchain */
          blockchain: boolean;
          /** Certificate Design Id */
          certificate_design_id: number | null;
          /** Collections */
          collections: {
              /**
               * Description
               * @description Collection description
               * @default null
               */
              description: string | null;
              /**
               * Id
               * @description Collection ID
               */
              id: number;
              /**
               * Name
               * @description Collection name
               */
              name: string;
          }[] | null;
          /** Course Description */
          course_description: string;
          /** Course Link */
          course_link: string | null;
          /** Course Link Show */
          course_link_show: boolean;
          /** Course Name */
          course_name: string;
          /** Created At */
          created_at: string;
          /** Department Id */
          department_id: number;
          /** Design Id */
          design_id: number | null;
          /** Design Name */
          design_name: string | null;
          /** Generate Private Credential */
          generate_private_credential: boolean | null;
          /** Id */
          id: number;
          /** Language */
          language: string;
          /** Learning Outcomes */
          learning_outcomes: string[] | null;
          /** Meta Data */
          meta_data: {
              [key: string]: string;
          } | null;
          /** Name */
          name: string;
          /** Organization Link Show */
          organization_link_show: boolean;
          /** Primary Design Id */
          primary_design_id: number | null;
          /** Signup Url */
          signup_url: string | null;
          /** Signup Url Show */
          signup_url_show: boolean;
          /** SkillCategory */
          skill_category: {
              /**
               * Id
               * @description Skill category ID
               */
              id: number;
              /**
               * Name
               * @description Skill category name
               */
              name: string;
          } | null;
          /** Updated At */
          updated_at: string;
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
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_DELETE_CREDENTIAL tool input.
 */
type ACCREDIBLE_CERTIFICATES_DELETE_CREDENTIAL_INPUT = {
  /**
   * Credential Id
   * @description The unique ID of the credential to delete
   */
  credential_id?: string;
};

/**
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_DELETE_CREDENTIAL tool output.
 */
type ACCREDIBLE_CERTIFICATES_DELETE_CREDENTIAL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description HTTP status code returned by the API
       */
      code: number;
      /**
       * Message
       * @description Status message for the deletion operation
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
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_DELETE_GROUP tool input.
 */
type ACCREDIBLE_CERTIFICATES_DELETE_GROUP_INPUT = {
  /**
   * Group Id
   * @description Numeric ID of the group to delete.
   */
  group_id?: number;
};

/**
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_DELETE_GROUP tool output.
 */
type ACCREDIBLE_CERTIFICATES_DELETE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Group
       * @description Deleted group object returned by the API
       */
      group: {
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
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_DELETE_REFERENCE tool input.
 */
type ACCREDIBLE_CERTIFICATES_DELETE_REFERENCE_INPUT = {
  /**
   * Credential Id
   * @description ID of the Credential to remove the reference from. May be numeric or string-formatted.
   */
  credential_id?: string;
  /**
   * Reference Id
   * @description ID of the Reference to delete (must be positive).
   */
  reference_id?: number;
};

/**
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_DELETE_REFERENCE tool output.
 */
type ACCREDIBLE_CERTIFICATES_DELETE_REFERENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Reference
       * @description The deleted reference object.
       */
      reference: {
          /**
           * Description
           * @description Description or feedback provided in the reference.
           */
          description: string;
          /**
           * Id
           * @description Reference ID.
           */
          id: number;
          /**
           * Referee
           * @description Referee details.
           */
          referee: {
              /**
               * Avatar
               * @description URL to the avatar image of the referee.
               * @default null
               */
              avatar: string | null;
              /**
               * Email
               * @description Email address of the referee.
               */
              email: string;
              /**
               * Name
               * @description Name of the referee.
               */
              name: string;
          };
          /**
           * Relationship
           * @description Relationship of referee to recipient.
           */
          relationship: string;
          /**
           * Supplemental
           * @description Whether this reference is supplemental.
           */
          supplemental: boolean;
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
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_GENERATE_PD_FS_FOR_CREDENTIALS tool input.
 */
type ACCREDIBLE_CERTIFICATES_GENERATE_PD_FS_FOR_CREDENTIALS_INPUT = {
  /**
   * Credential Ids
   * @description List of published credential IDs to generate PDFs for
   */
  credential_ids?: string[];
};

/**
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_GENERATE_PD_FS_FOR_CREDENTIALS tool output.
 */
type ACCREDIBLE_CERTIFICATES_GENERATE_PD_FS_FOR_CREDENTIALS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * @description URL link to the ZIP file containing the generated PDFs for the requested credentials
       * @default null
       */
      file: string | null;
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
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_LIST_TEMPLATES tool input.
 */
type ACCREDIBLE_CERTIFICATES_LIST_TEMPLATES_INPUT = {
  /**
   * Page
   * @description Page number of results to fetch
   * @default 1
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of templates per page
   * @default 50
   */
  per_page: number | null;
};

/**
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_LIST_TEMPLATES tool output.
 */
type ACCREDIBLE_CERTIFICATES_LIST_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Meta
       * @description Pagination metadata for the result set
       */
      meta: {
          /**
           * Current Page
           * @description Current page number returned
           */
          current_page: number;
          /**
           * Per Page
           * @description Number of templates per page returned
           */
          per_page: number;
          /**
           * Total Count
           * @description Total number of templates available
           */
          total_count: number;
          /**
           * Total Pages
           * @description Total number of pages available
           */
          total_pages: number;
      };
      /**
       * Templates
       * @description List of template objects
       */
      templates: {
          /**
           * Created At
           * @description Timestamp when the template was created (ISO 8601)
           */
          created_at: string;
          /**
           * Group Id
           * @description Identifier of the group this template belongs to
           */
          group_id: number;
          /**
           * Id
           * @description Unique identifier for the template
           */
          id: number;
          /**
           * Name
           * @description Name of the template
           */
          name: string;
          /**
           * Updated At
           * @description Timestamp when the template was last updated (ISO 8601)
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
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_SEARCH_COLLECTIONS tool input.
 */
type ACCREDIBLE_CERTIFICATES_SEARCH_COLLECTIONS_INPUT = {
  /**
   * PaginationMeta
   * @description Build pagination into your search.
   * @default null
   */
  meta: {
      /**
       * Page Number
       * @description Page to retrieve, starting at 1
       * @default 1
       */
      page_number: number;
      /**
       * Per Page
       * @description Number of items per page (max 100)
       * @default 50
       */
      per_page: number;
  } | null;
  /**
   * Query
   * @description Filtering criteria for collections
   */
  query?: {
      /**
       * Exclusion List
       * @description List of collection UUIDs to explicitly exclude from results
       * @default null
       */
      exclusion_list: string[] | null;
      /**
       * Ids
       * @description List of collection UUIDs to include in the results
       * @default null
       */
      ids: string[] | null;
      /**
       * Name
       * @description Match collections whose name contains this string
       * @default null
       */
      name: string | null;
      /**
       * Public
       * @description If true, only return publicly visible collections
       * @default null
       */
      public: boolean | null;
  };
  /**
   * SortOptions
   * @description Controls the order in which results are returned.
   * @default null
   */
  sort: {
      /**
       * Direction
       * @description Sort direction: 'asc' for ascending or 'desc' for descending
       * @default asc
       * @enum {string}
       */
      direction: "asc" | "desc";
      /**
       * Field
       * @description Field to sort by (e.g., 'name', 'created_at')
       */
      field: string;
  } | null;
};

/**
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_SEARCH_COLLECTIONS tool output.
 */
type ACCREDIBLE_CERTIFICATES_SEARCH_COLLECTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Collections
       * @description List of matching collections
       */
      collections: {
          /**
           * Description
           * @description Optional human-readable description of the collection
           * @default null
           */
          description: string | null;
          /**
           * Groups
           * @description List of group references in this collection
           */
          groups: {
              /**
               * Id
               * @description Unique ID of the group in this collection
               */
              id: number;
          }[];
          /**
           * Groups Count
           * @description Number of groups in the collection
           */
          groups_count: number;
          /**
           * Id
           * @description UUID of the collection
           */
          id: string;
          /**
           * Name
           * @description Name of the collection
           */
          name: string;
          /**
           * Organization Id
           * @description ID of the owning organization
           */
          organization_id: number;
          /**
           * Public
           * @description Visibility flag; true if public
           */
          public: boolean;
      }[];
      /**
       * Meta
       * @description Pagination metadata
       */
      meta: {
          /**
           * Current Page
           * @description Current page index
           */
          current_page: number;
          /**
           * Next Page
           * @description Next page index, if any
           * @default null
           */
          next_page: number | null;
          /**
           * Page Size
           * @description Number of collections returned per page
           */
          page_size: number;
          /**
           * Prev Page
           * @description Previous page index, if any
           * @default null
           */
          prev_page: number | null;
          /**
           * Total Count
           * @description Total number of matching collections
           */
          total_count: number;
          /**
           * Total Pages
           * @description Total number of pages available
           */
          total_pages: number;
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
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_UPDATE_GROUP tool input.
 */
type ACCREDIBLE_CERTIFICATES_UPDATE_GROUP_INPUT = {
  /**
   * Allow Duplicate Credentials
   * @description Whether an email address can receive more than one credential in this group; defaults to false
   * @default null
   */
  allow_duplicate_credentials: boolean | null;
  /**
   * Attach Pdf
   * @description Whether to attach the Credential PDF to the email when recipient is informed
   * @default null
   */
  attach_pdf: boolean | null;
  /**
   * Auto Expiry
   * @description Number of years from issue date after which the credential will automatically expire; ignored if <=0
   * @default null
   */
  auto_expiry: number | null;
  /**
   * Badge Design Id
   * @description Badge Design ID which the group will use to display credentials
   * @default null
   */
  badge_design_id: number | null;
  /**
   * Blockchain
   * @description Enable or disable recording of these Credentials on a Blockchain
   * @default null
   */
  blockchain: boolean | null;
  /**
   * Certificate Design Id
   * @description Certificate Design ID which the group will use to display credentials
   * @default null
   */
  certificate_design_id: number | null;
  /**
   * Collections
   * @description List of collections to assign; each object needs an 'id' field
   * @default null
   */
  collections: {
      [key: string]: number;
  }[] | null;
  /**
   * Course Description
   * @description Description of the course or achievement visible to the recipient
   * @default null
   */
  course_description: string | null;
  /**
   * Course Link
   * Format: uri
   * @description URL to the web page with information related to this group
   */
  course_link?: unknown;
  /**
   * Course Link Show
   * @description Show or hide the course link; true to show, false to hide, null to inherit default
   * @default null
   */
  course_link_show: boolean | null;
  /**
   * Course Name
   * @description Name of the course or achievement visible to the recipient
   * @default null
   */
  course_name: string | null;
  /**
   * Department Id
   * @description Department that the group belongs to; if not defined, it defaults to the organization's default department
   * @default null
   */
  department_id: number | null;
  /**
   * Generate Private Credential
   * @description Override department default for private credentials; true or false to override, null to inherit department setting
   * @default null
   */
  generate_private_credential: boolean | null;
  /**
   * Group Id
   * @description ID of the group to update
   */
  group_id?: number;
  /**
   * Language
   * @description Language for the group
   * @default null
   * @enum {string|null}
   */
  language: "en" | "es" | "vi" | "pt" | "ja" | "fr" | "da" | "nl" | "fi" | "no" | "nb" | "ro" | "sv" | "th" | "tw" | "zh" | "tr" | "ar" | "he" | "ms" | "de" | null;
  /**
   * Learning Outcomes
   * @description List of learning outcomes for this group
   * @default null
   */
  learning_outcomes: string[] | null;
  /**
   * Meta Data
   * @description Arbitrary metadata to associate with this group
   * @default null
   */
  meta_data: {
      [key: string]: unknown;
  } | null;
  /**
   * Name
   * @description Name of the group (for internal reference, not shown to the recipient)
   * @default null
   */
  name: string | null;
  /**
   * Organization Link Show
   * @description Show or hide link to the organization's homepage; true to show, false to hide, null to inherit default
   * @default null
   */
  organization_link_show: boolean | null;
  /**
   * Primary Design Id
   * @description Primary Design ID which the group will use to display credentials
   * @default null
   */
  primary_design_id: number | null;
  /**
   * Signup Url
   * Format: uri
   * @description URL for recipients to sign up for the course
   */
  signup_url?: unknown;
  /**
   * Signup Url Show
   * @description Show or hide the signup URL; true to show, false to hide, null to inherit default
   * @default null
   */
  signup_url_show: boolean | null;
  /**
   * Skill Category Id
   * @description ID of the skill category to associate with this group
   * @default null
   */
  skill_category_id: number | null;
};

/**
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_UPDATE_GROUP tool output.
 */
type ACCREDIBLE_CERTIFICATES_UPDATE_GROUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Group
       * @description The updated group record
       */
      group: {
          /**
           * Attach Pdf
           * @description Whether the PDF is attached to the recipient email
           */
          attach_pdf: boolean;
          /**
           * Auto Expiry
           * @description Auto-expiry years set for credentials
           * @default null
           */
          auto_expiry: number | null;
          /**
           * Badge Design Id
           * @description Badge design ID in use
           * @default null
           */
          badge_design_id: number | null;
          /**
           * Blockchain
           * @description Whether blockchain recording is enabled
           */
          blockchain: boolean;
          /**
           * Certificate Design Id
           * @description Certificate design ID in use
           * @default null
           */
          certificate_design_id: number | null;
          /**
           * Collections
           * @description Collections assigned to this group
           * @default null
           */
          collections: {
              /**
               * Description
               * @description Collection description
               * @default null
               */
              description: string | null;
              /**
               * Id
               * @description Collection ID
               */
              id: number;
              /**
               * Name
               * @description Collection name
               */
              name: string;
          }[] | null;
          /**
           * Course Description
           * @description Description of the course or achievement visible to the recipient
           */
          course_description: string;
          /**
           * Course Link
           * @description URL to the course information page
           * @default null
           */
          course_link: string | null;
          /**
           * Course Link Show
           * @description Whether course link is shown
           */
          course_link_show: boolean;
          /**
           * Course Name
           * @description Name of the course or achievement visible to the recipient
           */
          course_name: string;
          /**
           * Created At
           * @description Timestamp when the group was created
           */
          created_at: string;
          /**
           * Department Id
           * @description Department ID owning the group
           */
          department_id: number;
          /**
           * Design Id
           * @description Design ID in use (deprecated)
           * @default null
           */
          design_id: number | null;
          /**
           * Design Name
           * @description Name of the design in use
           * @default null
           */
          design_name: string | null;
          /**
           * Generate Private Credential
           * @description Default private credential setting
           * @default null
           */
          generate_private_credential: boolean | null;
          /**
           * Id
           * @description Unique identifier of the group
           */
          id: number;
          /**
           * Language
           * @description Language code for the group
           */
          language: string;
          /**
           * Learning Outcomes
           * @description Learning outcomes of the group
           * @default null
           */
          learning_outcomes: string[] | null;
          /**
           * Meta Data
           * @description Arbitrary metadata of the group
           * @default null
           */
          meta_data: {
              [key: string]: unknown;
          } | null;
          /**
           * Name
           * @description Name of the group
           */
          name: string;
          /**
           * Organization Link Show
           * @description Whether organization link is shown
           */
          organization_link_show: boolean;
          /**
           * Primary Design Id
           * @description Primary design ID in use
           * @default null
           */
          primary_design_id: number | null;
          /**
           * Signup Url
           * @description Signup URL for recipients
           * @default null
           */
          signup_url: string | null;
          /**
           * Signup Url Show
           * @description Whether signup URL is shown
           */
          signup_url_show: boolean;
          /**
           * SkillCategory
           * @description Associated skill category
           * @default null
           */
          skill_category: {
              /**
               * Id
               * @description Skill category ID
               */
              id: number;
              /**
               * Name
               * @description Skill category name
               */
              name: string;
          } | null;
          /**
           * Updated At
           * @description Timestamp when the group was last updated
           */
          updated_at: string;
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
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_UPDATE_REFERENCE tool input.
 */
type ACCREDIBLE_CERTIFICATES_UPDATE_REFERENCE_INPUT = {
  /**
   * Credential Id
   * @description ID of the credential containing the reference.
   */
  credential_id?: string;
  /**
   * Reference
   * @description Object containing only the reference fields to modify.
   */
  reference?: {
      /**
       * Description
       * @description Reference comments or text.
       * @default null
       */
      description: string | null;
      /**
       * Position
       * @description Numeric position of the reference on the credential (0 = first).
       * @default null
       */
      position: number | null;
      /**
       * Relationship
       * @description Relationship of the referee to the recipient. One of: taught, managed, mentored, worked, studied, friends, stranger, professor.
       * @default null
       * @enum {string|null}
       */
      relationship: "taught" | "managed" | "mentored" | "worked" | "studied" | "friends" | "stranger" | "professor" | null;
  };
  /**
   * Reference Id
   * @description ID of the reference to update.
   */
  reference_id?: number;
};

/**
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_UPDATE_REFERENCE tool output.
 */
type ACCREDIBLE_CERTIFICATES_UPDATE_REFERENCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Reference
       * @description The updated reference object.
       */
      reference: {
          /**
           * Description
           * @description Reference comments or text.
           */
          description: string;
          /**
           * Id
           * @description Identifier of the reference.
           */
          id: number;
          /**
           * Referee
           * @description Referee details.
           */
          referee: {
              /**
               * Avatar
               * @description URL of the referee's avatar image.
               * @default null
               */
              avatar: string | null;
              /**
               * Email
               * @description Email address of the referee.
               */
              email: string;
              /**
               * Name
               * @description Name of the referee.
               */
              name: string;
          };
          /**
           * Relationship
           * @description Relationship of the referee to the recipient.
           * @enum {string}
           */
          relationship: "taught" | "managed" | "mentored" | "worked" | "studied" | "friends" | "stranger" | "professor";
          /**
           * Supplemental
           * @description Indicates if the reference is supplemental.
           */
          supplemental: boolean;
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
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_VIEW_ALL_SKILL_CATEGORIES tool input.
 */
type ACCREDIBLE_CERTIFICATES_VIEW_ALL_SKILL_CATEGORIES_INPUT = object;

/**
 * Type of ACCREDIBLE_CERTIFICATES's ACCREDIBLE_CERTIFICATES_VIEW_ALL_SKILL_CATEGORIES tool output.
 */
type ACCREDIBLE_CERTIFICATES_VIEW_ALL_SKILL_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Skill Categories
       * @description List of all skill categories
       */
      skill_categories: {
          /**
           * Id
           * @description Unique identifier for the skill category
           */
          id: number;
          /**
           * Name
           * @description Name of the skill category
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
 * Type map of all available tool input types for toolkit "ACCREDIBLE_CERTIFICATES".
 */
export type ACCREDIBLE_CERTIFICATES_TOOL_INPUTS = {
  BULK_CREATE_CREDENTIALS_V2: ACCREDIBLE_CERTIFICATES_BULK_CREATE_CREDENTIALS_V2_INPUT
  CLONE_GROUP: ACCREDIBLE_CERTIFICATES_CLONE_GROUP_INPUT
  CREATE_COLLECTION: ACCREDIBLE_CERTIFICATES_CREATE_COLLECTION_INPUT
  CREATE_EVIDENCE_ITEM: ACCREDIBLE_CERTIFICATES_CREATE_EVIDENCE_ITEM_INPUT
  CREATE_GROUP: ACCREDIBLE_CERTIFICATES_CREATE_GROUP_INPUT
  DELETE_CREDENTIAL: ACCREDIBLE_CERTIFICATES_DELETE_CREDENTIAL_INPUT
  DELETE_GROUP: ACCREDIBLE_CERTIFICATES_DELETE_GROUP_INPUT
  DELETE_REFERENCE: ACCREDIBLE_CERTIFICATES_DELETE_REFERENCE_INPUT
  GENERATE_PD_FS_FOR_CREDENTIALS: ACCREDIBLE_CERTIFICATES_GENERATE_PD_FS_FOR_CREDENTIALS_INPUT
  LIST_TEMPLATES: ACCREDIBLE_CERTIFICATES_LIST_TEMPLATES_INPUT
  SEARCH_COLLECTIONS: ACCREDIBLE_CERTIFICATES_SEARCH_COLLECTIONS_INPUT
  UPDATE_GROUP: ACCREDIBLE_CERTIFICATES_UPDATE_GROUP_INPUT
  UPDATE_REFERENCE: ACCREDIBLE_CERTIFICATES_UPDATE_REFERENCE_INPUT
  VIEW_ALL_SKILL_CATEGORIES: ACCREDIBLE_CERTIFICATES_VIEW_ALL_SKILL_CATEGORIES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ACCREDIBLE_CERTIFICATES".
 */
export type ACCREDIBLE_CERTIFICATES_TOOL_OUTPUTS = {
  BULK_CREATE_CREDENTIALS_V2: ACCREDIBLE_CERTIFICATES_BULK_CREATE_CREDENTIALS_V2_OUTPUT
  CLONE_GROUP: ACCREDIBLE_CERTIFICATES_CLONE_GROUP_OUTPUT
  CREATE_COLLECTION: ACCREDIBLE_CERTIFICATES_CREATE_COLLECTION_OUTPUT
  CREATE_EVIDENCE_ITEM: ACCREDIBLE_CERTIFICATES_CREATE_EVIDENCE_ITEM_OUTPUT
  CREATE_GROUP: ACCREDIBLE_CERTIFICATES_CREATE_GROUP_OUTPUT
  DELETE_CREDENTIAL: ACCREDIBLE_CERTIFICATES_DELETE_CREDENTIAL_OUTPUT
  DELETE_GROUP: ACCREDIBLE_CERTIFICATES_DELETE_GROUP_OUTPUT
  DELETE_REFERENCE: ACCREDIBLE_CERTIFICATES_DELETE_REFERENCE_OUTPUT
  GENERATE_PD_FS_FOR_CREDENTIALS: ACCREDIBLE_CERTIFICATES_GENERATE_PD_FS_FOR_CREDENTIALS_OUTPUT
  LIST_TEMPLATES: ACCREDIBLE_CERTIFICATES_LIST_TEMPLATES_OUTPUT
  SEARCH_COLLECTIONS: ACCREDIBLE_CERTIFICATES_SEARCH_COLLECTIONS_OUTPUT
  UPDATE_GROUP: ACCREDIBLE_CERTIFICATES_UPDATE_GROUP_OUTPUT
  UPDATE_REFERENCE: ACCREDIBLE_CERTIFICATES_UPDATE_REFERENCE_OUTPUT
  VIEW_ALL_SKILL_CATEGORIES: ACCREDIBLE_CERTIFICATES_VIEW_ALL_SKILL_CATEGORIES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ACCREDIBLE_CERTIFICATES toolkit.
 */
export const ACCREDIBLE_CERTIFICATES = {
  slug: "accredible_certificates",
  tools: {
    /**
     * Tool to bulk create credentials. use when batching up to 30 credentials in one call; supports multi-status (207) responses.
     */
    BULK_CREATE_CREDENTIALS_V2: "ACCREDIBLE_CERTIFICATES_BULK_CREATE_CREDENTIALS_V2",
    /**
     * Tool to clone an existing group. use after confirming the source group exists and you need a copy with optional overrides.
     */
    CLONE_GROUP: "ACCREDIBLE_CERTIFICATES_CLONE_GROUP",
    /**
     * Tool to create a new collection. use when you need a curated set of groups.
     */
    CREATE_COLLECTION: "ACCREDIBLE_CERTIFICATES_CREATE_COLLECTION",
    /**
     * Tool to create a new evidence item for a credential. use after confirming credential id.
     */
    CREATE_EVIDENCE_ITEM: "ACCREDIBLE_CERTIFICATES_CREATE_EVIDENCE_ITEM",
    /**
     * Tool to create a new group. use after gathering all group details.
     */
    CREATE_GROUP: "ACCREDIBLE_CERTIFICATES_CREATE_GROUP",
    /**
     * Tool to delete a credential. use after confirming you want to permanently remove an existing credential. executes delete on /credentials/{credential id} endpoint and returns status code.
     */
    DELETE_CREDENTIAL: "ACCREDIBLE_CERTIFICATES_DELETE_CREDENTIAL",
    /**
     * Tool to delete a group. use after confirming no credentials remain and when you need to permanently remove the group.
     */
    DELETE_GROUP: "ACCREDIBLE_CERTIFICATES_DELETE_GROUP",
    /**
     * Tool to delete a specific reference by id. use after confirming both credential id and reference id. example: "delete reference 1234 from credential 'abc123'."
     */
    DELETE_REFERENCE: "ACCREDIBLE_CERTIFICATES_DELETE_REFERENCE",
    /**
     * Tool to generate pdfs for multiple credentials. use when you need to batch-download a zip archive of certificate pdfs for a list of published credential ids. example: "generate pdfs for credentials [10000005, 10272642]".
     */
    GENERATE_PD_FS_FOR_CREDENTIALS: "ACCREDIBLE_CERTIFICATES_GENERATE_PD_FS_FOR_CREDENTIALS",
    /**
     * Tool to retrieve a list of all templates. use after authentication to fetch paginated certificate templates.
     */
    LIST_TEMPLATES: "ACCREDIBLE_CERTIFICATES_LIST_TEMPLATES",
    /**
     * Tool to search for collections. use when you need to filter collections by ids, name, or public flag and paginate through results. e.g., "search for public collections named 'abc' on page 2."
     */
    SEARCH_COLLECTIONS: "ACCREDIBLE_CERTIFICATES_SEARCH_COLLECTIONS",
    /**
     * Tool to update an existing group. use when you need to modify group details after fetching its current data.
     */
    UPDATE_GROUP: "ACCREDIBLE_CERTIFICATES_UPDATE_GROUP",
    /**
     * Tool to update a reference by id. use when you need to modify a reference's details for a credential. use after retrieving the reference id to change comments or relationship.
     */
    UPDATE_REFERENCE: "ACCREDIBLE_CERTIFICATES_UPDATE_REFERENCE",
    /**
     * Tool to retrieve all skill categories. use when you need to list all available skill categories (e.g., to link them to groups).
     */
    VIEW_ALL_SKILL_CATEGORIES: "ACCREDIBLE_CERTIFICATES_VIEW_ALL_SKILL_CATEGORIES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ACCREDIBLE_CERTIFICATES".
 */
export type ACCREDIBLE_CERTIFICATES_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ACCREDIBLE_CERTIFICATES".
 */
export type ACCREDIBLE_CERTIFICATES_TRIGGER_EVENTS = {}
