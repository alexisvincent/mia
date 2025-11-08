// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SENDGRID's SENDGRID_ACTIVATE_TEMPLATE_VERSION tool input.
 */
type SENDGRID_ACTIVATE_TEMPLATE_VERSION_INPUT = {
  /**
   * Template Id
   * @description The ID of the original template
   */
  template_id?: string;
  /**
   * Version Id
   * @description The ID of the template version
   */
  version_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_ACTIVATE_TEMPLATE_VERSION tool output.
 */
type SENDGRID_ACTIVATE_TEMPLATE_VERSION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_ADD_AN_IP_ADDRESS_TO_A_POOL tool input.
 */
type SENDGRID_ADD_AN_IP_ADDRESS_TO_A_POOL_INPUT = {
  /**
   * Ip
   * @description The IP address that you want to add to the named pool.
   */
  ip?: string;
  /**
   * Pool Name
   * @description The name of the IP pool you want to add the address to. If the name contains spaces, they must be URL encoded (e.g., "Test Pool" becomes "Test%20Pool").
   */
  pool_name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_ADD_AN_IP_ADDRESS_TO_A_POOL tool output.
 */
type SENDGRID_ADD_AN_IP_ADDRESS_TO_A_POOL_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_ADD_AN_IP_TO_AN_AUTHENTICATED_DOMAIN tool input.
 */
type SENDGRID_ADD_AN_IP_TO_AN_AUTHENTICATED_DOMAIN_INPUT = {
  /**
   * Id
   * @description ID of the domain to which you are adding an IP
   */
  id?: number;
  /**
   * Ip
   * @description IP to associate with the domain. Used for manually specifying IPs for custom SPF.
   */
  ip?: string;
};

/**
 * Type of SENDGRID's SENDGRID_ADD_AN_IP_TO_AN_AUTHENTICATED_DOMAIN tool output.
 */
type SENDGRID_ADD_AN_IP_TO_AN_AUTHENTICATED_DOMAIN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_ADD_A_BATCH_OF_IPS_TO_AN_IP_POOL tool input.
 */
type SENDGRID_ADD_A_BATCH_OF_IPS_TO_AN_IP_POOL_INPUT = {
  /**
   * Ips
   * @description An array of IP addresses to assign to the specified IP Pool. All assignments must succeed.
   */
  ips?: string[];
  /**
   * Poolid
   * @description Specifies the unique ID for an IP Pool.
   */
  poolid?: string;
};

/**
 * Type of SENDGRID's SENDGRID_ADD_A_BATCH_OF_IPS_TO_AN_IP_POOL tool output.
 */
type SENDGRID_ADD_A_BATCH_OF_IPS_TO_AN_IP_POOL_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_ADD_A_SINGLE_RECIPIENT_TO_A_LIST tool input.
 */
type SENDGRID_ADD_A_SINGLE_RECIPIENT_TO_A_LIST_INPUT = {
  /**
   * List Id
   * @description The ID of the list that you want to add the recipient to.
   */
  list_id?: number;
  /**
   * Recipient Id
   * @description The ID of the recipient you are adding to the list.
   */
  recipient_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_ADD_A_SINGLE_RECIPIENT_TO_A_LIST tool output.
 */
type SENDGRID_ADD_A_SINGLE_RECIPIENT_TO_A_LIST_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_ADD_A_TWILIO_SEND_GRID_IP_ADDRESS tool input.
 */
type SENDGRID_ADD_A_TWILIO_SEND_GRID_IP_ADDRESS_INPUT = {
  /**
   * Include Region
   * @description Boolean indicating whether or not to return the IP address"s region information in the response.
   * @default false
   */
  include_region: boolean;
  /**
   * Is Auto Warmup
   * @description Indicates if the IP address is set to automatically [warmup](https://docs.sendgrid.com/ui/sending-email/warming-up-an-ip-address).
   */
  is_auto_warmup?: boolean;
  /**
   * Is Parent Assigned
   * @description Indicates if a parent on the account is able to send email from the IP address.
   */
  is_parent_assigned?: boolean;
  /**
   * Region
   * @description Region
   * @enum {string}
   */
  region?: "global" | "eu";
  /**
   * Subusers
   * @description An array of Subuser IDs the IP address will be assigned to.
   */
  subusers?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_ADD_A_TWILIO_SEND_GRID_IP_ADDRESS tool output.
 */
type SENDGRID_ADD_A_TWILIO_SEND_GRID_IP_ADDRESS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_ADD_IPS tool input.
 */
type SENDGRID_ADD_IPS_INPUT = {
  /**
   * Count
   * @description The amount of IPs to add to the account.
   */
  count?: number;
  /**
   * Subusers
   * @description Array of usernames to be assigned a send IP.
   */
  subusers?: string[];
  /**
   * Warmup
   * @description Whether or not to warmup the IPs being added.
   * @default false
   */
  warmup: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_ADD_IPS tool output.
 */
type SENDGRID_ADD_IPS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_ADD_ONE_OR_MORE_IPS_TO_THE_ALLOW_LIST tool input.
 */
type SENDGRID_ADD_ONE_OR_MORE_IPS_TO_THE_ALLOW_LIST_INPUT = {
  /**
   * Ips
   * @description An array containing the IP(s) you want to allow.
   */
  ips?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of SENDGRID's SENDGRID_ADD_ONE_OR_MORE_IPS_TO_THE_ALLOW_LIST tool output.
 */
type SENDGRID_ADD_ONE_OR_MORE_IPS_TO_THE_ALLOW_LIST_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_ADD_OR_UPDATE_A_CONTACT tool input.
 */
type SENDGRID_ADD_OR_UPDATE_A_CONTACT_INPUT = {
  /**
   * Contacts
   * @description One or more contacts objects that you intend to upsert. Each contact needs to include at least one of `email`, `phone_number_id`, `external_id`, or `anonymous_id` as an identifier.
   */
  contacts?: {
      [key: string]: unknown;
  }[];
  /**
   * List Ids
   * @description An array of List ID strings that this contact will be added to.
   */
  list_ids?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_ADD_OR_UPDATE_A_CONTACT tool output.
 */
type SENDGRID_ADD_OR_UPDATE_A_CONTACT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_ADD_RECIPIENT_ADDRESSES_TO_THE_GLOBAL_SUPPRESSION_GROUP tool input.
 */
type SENDGRID_ADD_RECIPIENT_ADDRESSES_TO_THE_GLOBAL_SUPPRESSION_GROUP_INPUT = {
  /**
   * Recipient Emails
   * @description The array of email addresses to add or find.
   */
  recipient_emails?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_ADD_RECIPIENT_ADDRESSES_TO_THE_GLOBAL_SUPPRESSION_GROUP tool output.
 */
type SENDGRID_ADD_RECIPIENT_ADDRESSES_TO_THE_GLOBAL_SUPPRESSION_GROUP_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_ADD_SUPPRESSIONS_TO_A_SUPPRESSION_GROUP tool input.
 */
type SENDGRID_ADD_SUPPRESSIONS_TO_A_SUPPRESSION_GROUP_INPUT = {
  /**
   * Group Id
   * @description The id of the unsubscribe group that you are adding suppressions to.
   */
  group_id?: string;
  /**
   * Recipient Emails
   * @description The array of email addresses to add or find.
   */
  recipient_emails?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_ADD_SUPPRESSIONS_TO_A_SUPPRESSION_GROUP tool output.
 */
type SENDGRID_ADD_SUPPRESSIONS_TO_A_SUPPRESSION_GROUP_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_APPROVE_ACCESS_REQUEST tool input.
 */
type SENDGRID_APPROVE_ACCESS_REQUEST_INPUT = {
  /**
   * Request Id
   * @description The ID of the request that you want to approve.
   */
  request_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_APPROVE_ACCESS_REQUEST tool output.
 */
type SENDGRID_APPROVE_ACCESS_REQUEST_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_ASSIGN_A_BATCH_OF_SUBUSERS_TO_AN_IP tool input.
 */
type SENDGRID_ASSIGN_A_BATCH_OF_SUBUSERS_TO_AN_IP_INPUT = {
  /**
   * Ip
   * @description The `ip` path parameter specifies an IP address to make the request against.
   */
  ip?: string;
  /**
   * Subusers
   * @description An array of Subuser IDs to be assigned to the specified IP address. All Subuser assignments must succeed.
   */
  subusers?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_ASSIGN_A_BATCH_OF_SUBUSERS_TO_AN_IP tool output.
 */
type SENDGRID_ASSIGN_A_BATCH_OF_SUBUSERS_TO_AN_IP_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_ASSOCIATE_AN_AUTHENTICATED_DOMAIN_WITH_A_GIVEN_USER tool input.
 */
type SENDGRID_ASSOCIATE_AN_AUTHENTICATED_DOMAIN_WITH_A_GIVEN_USER_INPUT = {
  /**
   * Domain Id
   * @description ID of the authenticated domain to associate with the subuser.
   */
  domain_id?: number;
  /**
   * Username
   * @description Username to associate with the authenticated domain.
   */
  username?: string;
};

/**
 * Type of SENDGRID's SENDGRID_ASSOCIATE_AN_AUTHENTICATED_DOMAIN_WITH_A_GIVEN_USER tool output.
 */
type SENDGRID_ASSOCIATE_AN_AUTHENTICATED_DOMAIN_WITH_A_GIVEN_USER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_ASSOCIATE_A_BRANDED_LINK_WITH_A_SUBUSER tool input.
 */
type SENDGRID_ASSOCIATE_A_BRANDED_LINK_WITH_A_SUBUSER_INPUT = {
  /**
   * Link Id
   * @description The ID of the branded link you want to associate.
   */
  link_id?: number;
  /**
   * Username
   * @description The username of the subuser account that you want to associate the branded link with.
   */
  username?: string;
};

/**
 * Type of SENDGRID's SENDGRID_ASSOCIATE_A_BRANDED_LINK_WITH_A_SUBUSER tool output.
 */
type SENDGRID_ASSOCIATE_A_BRANDED_LINK_WITH_A_SUBUSER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_AUTHENTICATE_AN_ACCOUNT_WITH_SINGLE_SIGN_ON tool input.
 */
type SENDGRID_AUTHENTICATE_AN_ACCOUNT_WITH_SINGLE_SIGN_ON_INPUT = {
  /**
   * Account Id
   * @description Twilio SendGrid account ID
   */
  accountID?: string;
};

/**
 * Type of SENDGRID's SENDGRID_AUTHENTICATE_AN_ACCOUNT_WITH_SINGLE_SIGN_ON tool output.
 */
type SENDGRID_AUTHENTICATE_AN_ACCOUNT_WITH_SINGLE_SIGN_ON_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_AUTHENTICATE_A_DOMAIN tool input.
 */
type SENDGRID_AUTHENTICATE_A_DOMAIN_INPUT = {
  /**
   * Automatic Security
   * @description Whether to allow SendGrid to manage your SPF records, DKIM keys, and DKIM key rotation.
   */
  automatic_security?: boolean;
  /**
   * Custom Dkim Selector
   * @description Add a custom DKIM selector. Accepts three letters or numbers.
   */
  custom_dkim_selector?: string;
  /**
   * Custom Spf
   * @description Specify whether to use a custom SPF or allow SendGrid to manage your SPF. This option is only available to authenticated domains set up for manual security.
   */
  custom_spf?: boolean;
  /**
   * Default
   * @description Whether to use this authenticated domain as the fallback if no authenticated domains match the sender"s domain.
   */
  default?: boolean;
  /**
   * Domain
   * @description Domain being authenticated.
   */
  domain?: string;
  /**
   * Ips
   * @description The IP addresses that will be included in the custom SPF record for this authenticated domain.
   */
  ips?: string[];
  /**
   * Region
   * @description The region of the domain. Allowed values are `global` and `eu`. The default value is `global`.
   */
  region?: string;
  /**
   * Subdomain
   * @description The subdomain to use for this authenticated domain.
   */
  subdomain?: string;
  /**
   * Username
   * @description The username associated with this domain.
   */
  username?: string;
};

/**
 * Type of SENDGRID's SENDGRID_AUTHENTICATE_A_DOMAIN tool output.
 */
type SENDGRID_AUTHENTICATE_A_DOMAIN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_BIND_AUTHENTICATED_DOMAINS_TO_USER tool input.
 */
type SENDGRID_BIND_AUTHENTICATED_DOMAINS_TO_USER_INPUT = {
  /**
   * Domain Id
   * @description ID of the authenticated domain to associate with the subuser.
   */
  domain_id?: number;
  /**
   * Username
   * @description Username to associate with the authenticated domain.
   */
  username?: string;
};

/**
 * Type of SENDGRID's SENDGRID_BIND_AUTHENTICATED_DOMAINS_TO_USER tool output.
 */
type SENDGRID_BIND_AUTHENTICATED_DOMAINS_TO_USER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_BULK_DELETE_SINGLE_SENDS tool input.
 */
type SENDGRID_BULK_DELETE_SINGLE_SENDS_INPUT = {
  /**
   * Ids
   * @description Single Send IDs to delete
   */
  ids?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_BULK_DELETE_SINGLE_SENDS tool output.
 */
type SENDGRID_BULK_DELETE_SINGLE_SENDS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CANCEL_OR_PAUSE_A_SCHEDULED_SEND tool input.
 */
type SENDGRID_CANCEL_OR_PAUSE_A_SCHEDULED_SEND_INPUT = {
  /**
   * Batch Id
   * @description The batch ID is the identifier that your scheduled mail sends share.
   */
  batch_id?: string;
  /**
   * Status
   * @description Status
   * @enum {string}
   */
  status?: "pause" | "cancel";
};

/**
 * Type of SENDGRID's SENDGRID_CANCEL_OR_PAUSE_A_SCHEDULED_SEND tool output.
 */
type SENDGRID_CANCEL_OR_PAUSE_A_SCHEDULED_SEND_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_COMPLETED_STEPS tool input.
 */
type SENDGRID_COMPLETED_STEPS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_COMPLETED_STEPS tool output.
 */
type SENDGRID_COMPLETED_STEPS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_AN_ACCOUNT tool input.
 */
type SENDGRID_CREATE_AN_ACCOUNT_INPUT = {
  /**
   * Offerings
   * @description List of offering names to assign to account.
   */
  offerings?: {
      [key: string]: unknown;
  }[];
  /**
   * Profile  Company  Name
   * @description Company name of the account holder
   */
  profile__company__name?: string;
  /**
   * Profile  Company  Website
   * @description Company website of the account holder
   */
  profile__company__website?: string;
  /**
   * Profile  Email
   * @description Email of the account holder
   */
  profile__email?: string;
  /**
   * Profile  First  Name
   * @description First name of the account holder
   */
  profile__first__name?: string;
  /**
   * Profile  Last  Name
   * @description Last name of the account holder
   */
  profile__last__name?: string;
  /**
   * Profile  Phone
   * @description Phone number with a maximum of fifteen digits formatted using the E.164 standard consisting of [+] [country code] [subscriber number including area code]
   */
  profile__phone?: string;
  /**
   * Profile  Timezone
   * @description Area/Location as listed in the [IANA Time Zone database](https://www.iana.org/time-zones)
   */
  profile__timezone?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_AN_ACCOUNT tool output.
 */
type SENDGRID_CREATE_AN_ACCOUNT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_AN_IP_POOL tool input.
 */
type SENDGRID_CREATE_AN_IP_POOL_INPUT = {
  /**
   * Name
   * @description The name of your new IP pool.
   */
  name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_AN_IP_POOL tool output.
 */
type SENDGRID_CREATE_AN_IP_POOL_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_AN_IP_POOL_WITH_A_NAME_AND_IP_ASSIGNMENTS tool input.
 */
type SENDGRID_CREATE_AN_IP_POOL_WITH_A_NAME_AND_IP_ASSIGNMENTS_INPUT = {
  /**
   * Ips
   * @description An array of IP addresses to assign to the IP Pool. All assignments must succeed.
   */
  ips?: string[];
  /**
   * Name
   * @description The name to assign to the IP Pool. An IP Pool name cannot begin with a space or period.
   */
  name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_AN_IP_POOL_WITH_A_NAME_AND_IP_ASSIGNMENTS tool output.
 */
type SENDGRID_CREATE_AN_IP_POOL_WITH_A_NAME_AND_IP_ASSIGNMENTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_AN_SSO_CERTIFICATE tool input.
 */
type SENDGRID_CREATE_AN_SSO_CERTIFICATE_INPUT = {
  /**
   * Enabled
   * @description Indicates if the certificate is enabled.
   */
  enabled?: boolean;
  /**
   * Integration Id
   * @description An ID that matches a certificate to a specific IdP integration. This is the `id` returned by the "Get All SSO Integrations" endpoint.
   */
  integration_id?: string;
  /**
   * Public Certificate
   * @description This public certificate allows SendGrid to verify that SAML requests it receives are signed by an IdP that it recognizes.
   */
  public_certificate?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_AN_SSO_CERTIFICATE tool output.
 */
type SENDGRID_CREATE_AN_SSO_CERTIFICATE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_AN_SSO_INTEGRATION tool input.
 */
type SENDGRID_CREATE_AN_SSO_INTEGRATION_INPUT = {
  /**
   * Completed Integration
   * @description Indicates if the integration is complete.
   */
  completed_integration?: boolean;
  /**
   * Enabled
   * @description Indicates if the integration is enabled.
   */
  enabled?: boolean;
  /**
   * Entity Id
   * @description An identifier provided by your IdP to identify Twilio SendGrid in the SAML interaction. This is called the "SAML Issuer ID" in the Twilio SendGrid UI.
   */
  entity_id?: string;
  /**
   * Name
   * @description The name of your integration. This name can be anything that makes sense for your organization (eg. Twilio SendGrid)
   */
  name?: string;
  /**
   * Signin Url
   * @description The IdP"s SAML POST endpoint. This endpoint should receive requests and initiate an SSO login flow. This is called the "Embed Link" in the Twilio SendGrid UI.
   */
  signin_url?: string;
  /**
   * Signout Url
   * @description This URL is relevant only for an IdP-initiated authentication flow. If a user authenticates from their IdP, this URL will return them to their IdP when logging out.
   */
  signout_url?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_AN_SSO_INTEGRATION tool output.
 */
type SENDGRID_CREATE_AN_SSO_INTEGRATION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_AN_SSO_TEAMMATE tool input.
 */
type SENDGRID_CREATE_AN_SSO_TEAMMATE_INPUT = {
  /**
   * Email
   * Format: email
   * @description Set this property to the Teammate"s email address. This email address will also function as the Teammate"s username and must match the address assigned to the user in your IdP. This address cannot be changed after the Teammate is created.
   */
  email?: string;
  /**
   * First Name
   * @description Set this property to the Teammate"s first name.
   */
  first_name?: string;
  /**
   * Has Restricted Subuser Access
   * @description Set this property to `true` to give the Teammate permissions to operate only on behalf of a Subuser. This property value must be `true` if the `subuser_access` property is not empty. The `subuser_access` property determines which Subusers the Teammate may act on behalf of. If this property is set to `true`, you cannot specify individual `scopes`, assign a `persona`, or set `is_admin` to `true`—a Teammate cannot specify scopes for the parent account and have restricted Subuser access.
   */
  has_restricted_subuser_access?: boolean;
  /**
   * Is Admin
   * @description Set this property to `true` if the Teammate has admin permissions. You should not include the `scopes` or `persona` properties when setting the `is_admin` property to `true`—an admin will be allocated all scopes. See [**Teammate Permissions**](https://docs.sendgrid.com/ui/account-and-settings/teammate-permissions) for a complete list of scopes.
   */
  is_admin?: boolean;
  /**
   * Last Name
   * @description Set this property to the Teammate"s last name.
   */
  last_name?: string;
  /**
   * Persona
   * @description Persona
   * @enum {string}
   */
  persona?: "accountant" | "developer" | "marketer" | "observer";
  /**
   * Scopes
   * @description Add or remove permissions from a Teammate using this `scopes` property. See [**Teammate Permissions**](https://docs.sendgrid.com/ui/account-and-settings/teammate-permissions) for a complete list of available scopes. You should not include this propety in the request when using the `persona` property or when setting the `is_admin` property to `true`—assigning a `persona` or setting `is_admin` to `true` will allocate a group of permissions to the Teammate.
   */
  scopes?: string[];
  /**
   * Subuser Access
   * @description Specify which Subusers the Teammate may access and act on behalf of with this property. If this property is populated, you must set the `has_restricted_subuser_access` property to `true`.
   */
  subuser_access?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_AN_SSO_TEAMMATE tool output.
 */
type SENDGRID_CREATE_AN_SSO_TEAMMATE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_API_KEYS tool input.
 */
type SENDGRID_CREATE_API_KEYS_INPUT = {
  /**
   * Name
   * @description The name you will use to describe this API Key.
   */
  name?: string;
  /**
   * Scopes
   * @description The individual permissions that you are giving to this API Key.
   */
  scopes?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_API_KEYS tool output.
 */
type SENDGRID_CREATE_API_KEYS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_BATCH_ID tool input.
 */
type SENDGRID_CREATE_A_BATCH_ID_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_BATCH_ID tool output.
 */
type SENDGRID_CREATE_A_BATCH_ID_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_BRANDED_LINK tool input.
 */
type SENDGRID_CREATE_A_BRANDED_LINK_INPUT = {
  /**
   * Default
   * @description Default
   */
  default?: boolean;
  /**
   * Domain
   * @description The root domain for the subdomain that you are creating the link branding for. This should match your FROM email address.
   */
  domain?: string;
  /**
   * Region
   * @description Region
   * @enum {string}
   */
  region?: "all" | "global" | "eu";
  /**
   * Subdomain
   * @description The subdomain to create the link branding for. Must be different from the subdomain you used for authenticating your domain.
   */
  subdomain?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_BRANDED_LINK tool output.
 */
type SENDGRID_CREATE_A_BRANDED_LINK_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_CAMPAIGN tool input.
 */
type SENDGRID_CREATE_A_CAMPAIGN_INPUT = {
  /**
   * Categories
   * @description The categories you would like associated to this campaign.
   */
  categories?: string[];
  /**
   * Custom Unsubscribe Url
   * @description This is the url of the custom unsubscribe page that you provide for customers to unsubscribe from your suppression groups.
   */
  custom_unsubscribe_url?: string;
  /**
   * Editor
   * @description Editor
   * @enum {string}
   */
  editor?: "code" | "design";
  /**
   * Html Content
   * @description The HTML of your marketing email.
   */
  html_content?: string;
  /**
   * Ip Pool
   * @description The pool of IPs that you would like to send this email from.
   */
  ip_pool?: string;
  /**
   * List Ids
   * @description The IDs of the lists you are sending this campaign to. You can have both segment IDs and list IDs
   */
  list_ids?: number[];
  /**
   * Plain Content
   * @description The plain text content of your emails.
   */
  plain_content?: string;
  /**
   * Segment Ids
   * @description The segment IDs that you are sending this list to. You can have both segment IDs and list IDs. Segments are limited to 10 segment IDs.
   */
  segment_ids?: number[];
  /**
   * Sender Id
   * @description The ID of the "sender" identity that you have created. Your recipients will see this as the "from" on your marketing emails.
   */
  sender_id?: number;
  /**
   * Subject
   * @description The subject of your campaign that your recipients will see.
   */
  subject?: string;
  /**
   * Suppression Group Id
   * @description The suppression group that this marketing email belongs to, allowing recipients to opt-out of emails of this type.
   */
  suppression_group_id?: number;
  /**
   * Title
   * @description The display title of your campaign. This will be viewable by you in the Marketing Campaigns UI.
   */
  title?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_CAMPAIGN tool output.
 */
type SENDGRID_CREATE_A_CAMPAIGN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_CUSTOM_FIELD tool input.
 */
type SENDGRID_CREATE_A_CUSTOM_FIELD_INPUT = {
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Type
   * @description Type
   */
  type?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_CUSTOM_FIELD tool output.
 */
type SENDGRID_CREATE_A_CUSTOM_FIELD_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_LIST tool input.
 */
type SENDGRID_CREATE_A_LIST_INPUT = {
  /**
   * Name
   * @description Name
   */
  name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_LIST tool output.
 */
type SENDGRID_CREATE_A_LIST_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_NEW_ALERT tool input.
 */
type SENDGRID_CREATE_A_NEW_ALERT_INPUT = {
  /**
   * Email To
   * Format: email
   * @description The email address the alert will be sent to. Example: test@example.com
   */
  email_to?: string;
  /**
   * Frequency
   * @description Required for stats_notification. How frequently the alert will be sent. Example: daily
   */
  frequency?: string;
  /**
   * Percentage
   * @description Required for usage_limit. When this usage threshold is reached, the alert will be sent. Example: 90
   */
  percentage?: number;
  /**
   * Type
   * @description Type
   * @enum {string}
   */
  type?: "unlimited" | "recurring" | "nonrecurring";
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_NEW_ALERT tool output.
 */
type SENDGRID_CREATE_A_NEW_ALERT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_NEW_EVENT_WEBHOOK tool input.
 */
type SENDGRID_CREATE_A_NEW_EVENT_WEBHOOK_INPUT = {
  /**
   * Bounce
   * @description Set this property to `true` to receive bounce events. A bounce occurs when a receiving server could not or would not accept a message.
   */
  bounce?: boolean;
  /**
   * Click
   * @description Set this property to `true` to receive click events. Click events occur when a recipient clicks on a link within the message. You must [enable Click Tracking](https://docs.sendgrid.com/ui/account-and-settings/tracking#click-tracking) to receive this type of event.
   */
  click?: boolean;
  /**
   * Deferred
   * @description Set this property to `true` to receive deferred events. Deferred events occur when a recipient"s email server temporarily rejects a message.
   */
  deferred?: boolean;
  /**
   * Delivered
   * @description Set this property to `true` to receive delivered events. Delivered events occur when a message has been successfully delivered to the receiving server.
   */
  delivered?: boolean;
  /**
   * Dropped
   * @description Set this property to `true` to receive dropped events. Dropped events occur when your message is not delivered by Twilio SendGrid. Dropped events are accomponied by a `reason` property, which indicates why the message was dropped. Reasons for a dropped message include: Invalid SMTPAPI header, Spam Content (if spam checker app enabled), Unsubscribed Address, Bounced Address, Spam Reporting Address, Invalid, Recipient List over Package Quota.
   */
  dropped?: boolean;
  /**
   * Enabled
   * @description Set this property to `true` to enable the Event Webhook or `false` to disable it.
   */
  enabled?: boolean;
  /**
   * Friendly Name
   * @description Optionally set this property to a friendly name for the Event Webhook. A friendly name may be assigned to each of your webhooks to help you differentiate them. The friendly name is for convenience only. You should use the webhook `id` property for any programmatic tasks.
   */
  friendly_name?: string;
  /**
   * Group Resubscribe
   * @description Set this property to `true` to receive group resubscribe events. Group resubscribes occur when recipients resubscribe to a specific [unsubscribe group](https://docs.sendgrid.com/ui/sending-email/create-and-manage-unsubscribe-groups) by updating their subscription preferences. You must [enable Subscription Tracking](https://docs.sendgrid.com/ui/account-and-settings/tracking#subscription-tracking) to receive this type of event.
   */
  group_resubscribe?: boolean;
  /**
   * Group Unsubscribe
   * @description Set this property to `true` to receive group unsubscribe events. Group unsubscribes occur when recipients unsubscribe from a specific [unsubscribe group](https://docs.sendgrid.com/ui/sending-email/create-and-manage-unsubscribe-groups) either by direct link or by updating their subscription preferences. You must [enable Subscription Tracking](https://docs.sendgrid.com/ui/account-and-settings/tracking#subscription-tracking) to receive this type of event.
   */
  group_unsubscribe?: boolean;
  /**
   * Oauth Client Id
   * @description Set this property to the OAuth client ID that SendGrid will pass to your OAuth server or service provider to generate an OAuth access token. When passing data in this property, you must also include the `oauth_token_url` property.
   */
  oauth_client_id?: string;
  /**
   * Oauth Client Secret
   * @description Set this property to the OAuth client secret that SendGrid will pass to your OAuth server or service provider to generate an OAuth access token. This secret is needed only once to create an access token. SendGrid will store the secret, allowing you to update your client ID and Token URL without passing the secret to SendGrid again. When passing data in this field, you must also include the `oauth_client_id` and `oauth_token_url` properties.
   */
  oauth_client_secret?: string;
  /**
   * Oauth Token Url
   * @description Set this property to the URL where SendGrid will send the OAuth client ID and client secret to generate an OAuth access token. This should be your OAuth server or service provider. When passing data in this field, you must also include the `oauth_client_id` property.
   */
  oauth_token_url?: string;
  /**
   * Open
   * @description Set this property to `true` to receive open events. Open events occur when a recipient has opened the HTML message. You must [enable Open Tracking](https://docs.sendgrid.com/ui/account-and-settings/tracking#open-tracking) to receive this type of event.
   */
  open?: boolean;
  /**
   * Processed
   * @description Set this property to `true` to receive processed events. Processed events occur when a message has been received by Twilio SendGrid and the message is ready to be delivered.
   */
  processed?: boolean;
  /**
   * Spam Report
   * @description Set this property to `true` to receive spam report events. Spam reports occur when recipients mark a message as spam.
   */
  spam_report?: boolean;
  /**
   * Unsubscribe
   * @description Set this property to `true` to receive unsubscribe events. Unsubscribes occur when recipients click on a message"s subscription management link. You must [enable Subscription Tracking](https://docs.sendgrid.com/ui/account-and-settings/tracking#subscription-tracking) to receive this type of event.
   */
  unsubscribe?: boolean;
  /**
   * Url
   * @description Set this property to the URL where you want the Event Webhook to send event data.
   */
  url?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_NEW_EVENT_WEBHOOK tool output.
 */
type SENDGRID_CREATE_A_NEW_EVENT_WEBHOOK_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_NEW_SUPPRESSION_GROUP tool input.
 */
type SENDGRID_CREATE_A_NEW_SUPPRESSION_GROUP_INPUT = {
  /**
   * Description
   * @description A brief description of your suppression group. Required when creating a group.
   */
  description?: string;
  /**
   * Is Default
   * @description Indicates if you would like this to be your default suppression group.
   */
  is_default?: boolean;
  /**
   * Name
   * @description The name of your suppression group. Required when creating a group.
   */
  name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_NEW_SUPPRESSION_GROUP tool output.
 */
type SENDGRID_CREATE_A_NEW_SUPPRESSION_GROUP_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_NEW_TRANSACTIONAL_TEMPLATE_VERSION tool input.
 */
type SENDGRID_CREATE_A_NEW_TRANSACTIONAL_TEMPLATE_VERSION_INPUT = {
  /**
   * Active
   * @description Active
   */
  active?: number;
  /**
   * Editor
   * @description Editor
   * @enum {string}
   */
  editor?: "code" | "design";
  /**
   * Generate Plain Content
   * @description If true, plain_content is always generated from html_content. If false, plain_content is not altered.
   * @default true
   */
  generate_plain_content: boolean;
  /**
   * Html Content
   * @description The HTML content of the version. Maximum of 1048576 bytes allowed.
   */
  html_content?: string;
  /**
   * Name
   * @description Name of the transactional template version.
   */
  name?: string;
  /**
   * Plain Content
   * @description Text/plain content of the transactional template version. Maximum of 1048576 bytes allowed.
   * @default <generated from html_content if left empty>
   */
  plain_content: string;
  /**
   * Subject
   * @description Subject of the new transactional template version.
   */
  subject?: string;
  /**
   * Template Id
   * @description Template Id
   */
  template_id?: string;
  /**
   * Test Data
   * @description For dynamic templates only, the mock json data that will be used for template preview and test sends.
   */
  test_data?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_NEW_TRANSACTIONAL_TEMPLATE_VERSION tool output.
 */
type SENDGRID_CREATE_A_NEW_TRANSACTIONAL_TEMPLATE_VERSION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_PARSE_SETTING tool input.
 */
type SENDGRID_CREATE_A_PARSE_SETTING_INPUT = {
  /**
   * Hostname
   * @description A specific and unique domain or subdomain that you have created to use exclusively to parse your incoming email. For example, `parse.yourdomain.com`.
   */
  hostname?: string;
  /**
   * Send Raw
   * @description Indicates if you would like SendGrid to post the original MIME-type content of your parsed email. When this parameter is set to `true`, SendGrid will send a JSON payload of the content of your email.
   */
  send_raw?: boolean;
  /**
   * Spam Check
   * @description Indicates if you would like SendGrid to check the content parsed from your emails for spam before POSTing them to your domain.
   */
  spam_check?: boolean;
  /**
   * Url
   * @description The public URL where you would like SendGrid to POST the data parsed from your email. Any emails sent with the given hostname provided (whose MX records have been updated to point to SendGrid) will be parsed and POSTed to this URL.
   */
  url?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_PARSE_SETTING tool output.
 */
type SENDGRID_CREATE_A_PARSE_SETTING_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_SEGMENT tool input.
 */
type SENDGRID_CREATE_A_SEGMENT_INPUT = {
  /**
   * Conditions
   * @description The conditions for a recipient to be included in this segment.
   */
  conditions?: {
      [key: string]: unknown;
  }[];
  /**
   * List Id
   * @description The list id from which to make this segment. Not including this ID will mean your segment is created from the main contactdb rather than a list.
   */
  list_id?: number;
  /**
   * Name
   * @description The name of this segment.
   */
  name?: string;
  /**
   * Recipient Count
   * @description The count of recipients in this list. This is not included on creation of segments.
   */
  recipient_count?: number;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_SEGMENT tool output.
 */
type SENDGRID_CREATE_A_SEGMENT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_SENDER tool input.
 */
type SENDGRID_CREATE_A_SENDER_INPUT = {
  /**
   * Address
   * @description The physical address of the Sender.
   */
  address?: string;
  /**
   * Address 2
   * @description Additional Sender address information.
   */
  address_2?: string;
  /**
   * City
   * @description The city of the Sender.
   */
  city?: string;
  /**
   * Country
   * @description The country of the Sender.
   */
  country?: string;
  /**
   * From  Email
   * @description The email address from which your recipient will receive emails.
   */
  from__email?: string;
  /**
   * From  Name
   * @description The name appended to the from email field. Typically your name or company name.
   */
  from__name?: string;
  /**
   * Nickname
   * @description A nickname for the Sender. Not used for sending.
   */
  nickname?: string;
  /**
   * Reply  To  Email
   * @description The email address to which your recipient will reply.
   */
  reply__to__email?: string;
  /**
   * Reply  To  Name
   * @description The name appended to the reply to email field. Typically your name or company name.
   */
  reply__to__name?: string;
  /**
   * State
   * @description The state of the Sender.
   */
  state?: string;
  /**
   * Zip
   * @description The zipcode of the Sender.
   */
  zip?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_SENDER tool output.
 */
type SENDGRID_CREATE_A_SENDER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_SENDER_IDENTITY tool input.
 */
type SENDGRID_CREATE_A_SENDER_IDENTITY_INPUT = {
  /**
   * Address
   * @description The physical address of the sender identity.
   */
  address?: string;
  /**
   * Address 2
   * @description Additional sender identity address information.
   */
  address_2?: string;
  /**
   * City
   * @description The city of the sender identity.
   */
  city?: string;
  /**
   * Country
   * @description The country of the sender identity.
   */
  country?: string;
  /**
   * Nickname
   * @description A nickname for the sender identity. Not used for sending.
   */
  nickname?: string;
  /**
   * State
   * @description The state of the sender identity.
   */
  state?: string;
  /**
   * Zip
   * @description The zipcode of the sender identity.
   */
  zip?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_SENDER_IDENTITY tool output.
 */
type SENDGRID_CREATE_A_SENDER_IDENTITY_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_TRANSACTIONAL_TEMPLATE tool input.
 */
type SENDGRID_CREATE_A_TRANSACTIONAL_TEMPLATE_INPUT = {
  /**
   * Generation
   * @description Generation
   * @enum {string}
   */
  generation?: "legacy" | "dynamic";
  /**
   * Name
   * @description The name for the new transactional template.
   */
  name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_A_TRANSACTIONAL_TEMPLATE tool output.
 */
type SENDGRID_CREATE_A_TRANSACTIONAL_TEMPLATE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_CUSTOM_FIELD_DEFINITION tool input.
 */
type SENDGRID_CREATE_CUSTOM_FIELD_DEFINITION_INPUT = {
  /**
   * Field Type
   * @description Field Type
   * @enum {string}
   */
  field_type?: "Text" | "Number" | "Date";
  /**
   * Name
   * @description Name
   */
  name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_CUSTOM_FIELD_DEFINITION tool output.
 */
type SENDGRID_CREATE_CUSTOM_FIELD_DEFINITION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_DESIGN tool input.
 */
type SENDGRID_CREATE_DESIGN_INPUT = {
  /**
   * Editor
   * @description Editor
   * @enum {string}
   */
  editor?: "code" | "design";
  /**
   * Html Content
   * @description The HTML content of the Design.
   */
  html_content?: string;
  /**
   * Name
   * @description The name of the new design.
   * @default Duplicate: <original design name>
   */
  name: string;
  /**
   * Plain Content
   * @description Plain text content of the Design.
   * @default <generated from html_content if left empty>
   */
  plain_content: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_DESIGN tool output.
 */
type SENDGRID_CREATE_DESIGN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_INTEGRATION tool input.
 */
type SENDGRID_CREATE_INTEGRATION_INPUT = {
  /**
   * Destination
   * @description Destination
   * @enum {string}
   */
  destination?: "Segment";
  /**
   * Filters  Email  Events
   * @description The possible SendGrid email event types for event forwarding. Specify all the email event types that you would like to forward to the Integration"s destination.
   */
  filters__email__events?: string[];
  /**
   * Label
   * @description The nickname for the Integration.
   * @default Untitled Integration
   */
  label: string;
  /**
   * Properties  Destination  Region
   * @description Destination Region
   * @enum {string}
   */
  properties__destination__region?: "EU" | "US";
  /**
   * Properties  Write  Key
   * @description The write key provided by the Segment Source you"d like to have events forwarded to. Must be between 6 and 51 characters.
   */
  properties__write__key?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_INTEGRATION tool output.
 */
type SENDGRID_CREATE_INTEGRATION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_LIST tool input.
 */
type SENDGRID_CREATE_LIST_INPUT = {
  /**
   * Name
   * @description Your name for your list
   */
  name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_LIST tool output.
 */
type SENDGRID_CREATE_LIST_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_SEGMENT tool input.
 */
type SENDGRID_CREATE_SEGMENT_INPUT = {
  /**
   * Name
   * @description Name of the segment.
   */
  name?: string;
  /**
   * Parent List Ids
   * @description The array of list ids to filter contacts on when building this segment. It allows only one such list id for now. We will support more in future
   */
  parent_list_ids?: string[];
  /**
   * Query Dsl
   * @description SQL query which will filter contacts based on the conditions provided
   */
  query_dsl?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_SEGMENT tool output.
 */
type SENDGRID_CREATE_SEGMENT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_SINGLE_SEND tool input.
 */
type SENDGRID_CREATE_SINGLE_SEND_INPUT = {
  /**
   * Categories
   * @description The categories to associate with this Single Send.
   */
  categories?: string[];
  /**
   * Email  Config  Custom  Unsubscribe  Url
   * Format: uri
   * @description The URL allowing recipients to unsubscribe — you must provide this or the `suppression_group_id`.
   */
  email__config__custom__unsubscribe__url?: string;
  /**
   * Email  Config  Design  Id
   * @description A `design_id` can be used in place of `html_content`, `plain_content`, and/or `subject`. You can retrieve a design"s ID from the ["List Designs" endpoint](https://docs.sendgrid.com/api-reference/designs-api/list-designs) or by pulling it from the design"s detail page URL in the Marketing Campaigns App.
   */
  email__config__design__id?: string;
  /**
   * Email  Config  Editor
   * @description Editor
   * @enum {string}
   */
  email__config__editor?: "code" | "design";
  /**
   * Email  Config  Generate  Plain  Content
   * @description If set to `true`, `plain_content` is always generated from `html_content`. If set to false, `plain_content` is not altered.
   * @default true
   */
  email__config__generate__plain__content: boolean;
  /**
   * Email  Config  Html  Content
   * @description The HTML content of the Single Send. Do not include this field when using a `design_id`.
   */
  email__config__html__content?: string;
  /**
   * Email  Config  Ip  Pool
   * @description The name of the IP Pool from which the Single Send emails are sent.
   */
  email__config__ip__pool?: string;
  /**
   * Email  Config  Plain  Content
   * @description The plain text content of the Single Send. Do not include this field when using a `design_id`.
   */
  email__config__plain__content?: string;
  /**
   * Email  Config  Sender  Id
   * @description The ID of the verified Sender. You can retrieve a verified Sender"s ID from the ["Get Verified Senders" endpoint](https://www.twilio.com/docs/sendgrid/api-reference/sender-verification/get-all-verified-senders) or by pulling it from the Sender"s detail page URL in the SendGrid App.
   */
  email__config__sender__id?: number;
  /**
   * Email  Config  Subject
   * @description The subject line of the Single Send. Do not include this field when using a `design_id`.
   */
  email__config__subject?: string;
  /**
   * Email  Config  Suppression  Group  Id
   * @description The ID of the Suppression Group to allow recipients to unsubscribe — you must provide this or the `custom_unsubscribe_url`.
   */
  email__config__suppression__group__id?: number;
  /**
   * Name
   * @description The name of the Single Send.
   */
  name?: string;
  /**
   * Send  To  All
   * @description Set to `true` to send to All Contacts. If set to `false`, at least one `list_ids` or `segment_ids` value must be provided before the Single Send is scheduled to be sent to recipients.
   * @default false
   */
  send__to__all: boolean;
  /**
   * Send  To  List  Ids
   * @description The recipient List IDs that will receive the Single Send.
   */
  send__to__list__ids?: string[];
  /**
   * Send  To  Segment  Ids
   * @description The recipient Segment IDs that will receive the Single Send.
   */
  send__to__segment__ids?: string[];
  /**
   * Send At
   * Format: date-time
   * @description Set this property to an ISO 8601 formatted date-time when you would like to send the Single Send. Please note that any `send_at` property value set with this endpoint will prepopulate the send date in the SendGrid user interface (UI). However, the Single Send will remain an unscheduled draft until it"s updated with the [**Schedule Single Send**](https://docs.sendgrid.com/api-reference/single-sends/schedule-single-send) endpoint or SendGrid application UI. Additionally, the `now` keyword is a valid `send_at` value only when using the Schedule Single Send endpoint. Setting this property to `now` with this endpoint will cause an error.
   */
  send_at?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_SINGLE_SEND tool output.
 */
type SENDGRID_CREATE_SINGLE_SEND_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_SUBUSER tool input.
 */
type SENDGRID_CREATE_SUBUSER_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address of the subuser.
   */
  email?: string;
  /**
   * Include Region
   * @description A flag that determines if the Subuser"s region should be returned in the response. (Regional email is in Public Beta and requires SendGrid Pro plan or above.)
   * @default false
   */
  include_region: boolean;
  /**
   * Ips
   * @description The IP addresses that should be assigned to this subuser.
   */
  ips?: string[];
  /**
   * Password
   * @description The password this subuser will use when logging into SendGrid.
   */
  password?: string;
  /**
   * Region
   * @description Region
   * @enum {string}
   */
  region?: "global" | "eu";
  /**
   * Username
   * @description The username for this subuser.
   */
  username?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_SUBUSER tool output.
 */
type SENDGRID_CREATE_SUBUSER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_VERIFIED_SENDER_REQUEST tool input.
 */
type SENDGRID_CREATE_VERIFIED_SENDER_REQUEST_INPUT = {
  /**
   * Address
   * @description Address
   */
  address?: string;
  /**
   * Address2
   * @description Address2
   */
  address2?: string;
  /**
   * City
   * @description City
   */
  city?: string;
  /**
   * Country
   * @description Country
   */
  country?: string;
  /**
   * From Email
   * Format: email
   * @description From Email
   */
  from_email?: string;
  /**
   * From Name
   * @description From Name
   */
  from_name?: string;
  /**
   * Nickname
   * @description Nickname
   */
  nickname?: string;
  /**
   * Reply To
   * Format: email
   * @description Reply To
   */
  reply_to?: string;
  /**
   * Reply To Name
   * @description Reply To Name
   */
  reply_to_name?: string;
  /**
   * State
   * @description State
   */
  state?: string;
  /**
   * Zip
   * @description Zip
   */
  zip?: string;
};

/**
 * Type of SENDGRID's SENDGRID_CREATE_VERIFIED_SENDER_REQUEST tool output.
 */
type SENDGRID_CREATE_VERIFIED_SENDER_REQUEST_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_AN_ACCOUNT tool input.
 */
type SENDGRID_DELETE_AN_ACCOUNT_INPUT = {
  /**
   * Account Id
   * @description Twilio SendGrid account ID
   */
  accountID?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_AN_ACCOUNT tool output.
 */
type SENDGRID_DELETE_AN_ACCOUNT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_AN_ALERT tool input.
 */
type SENDGRID_DELETE_AN_ALERT_INPUT = {
  /**
   * Alert Id
   * @description The ID of the alert you would like to retrieve.
   */
  alert_id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_AN_ALERT tool output.
 */
type SENDGRID_DELETE_AN_ALERT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_AN_AUTHENTICATED_DOMAIN tool input.
 */
type SENDGRID_DELETE_AN_AUTHENTICATED_DOMAIN_INPUT = {
  /**
   * Domain Id
   * @description Domain Id
   */
  domain_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_AN_AUTHENTICATED_DOMAIN tool output.
 */
type SENDGRID_DELETE_AN_AUTHENTICATED_DOMAIN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_AN_IP_POOL tool input.
 */
type SENDGRID_DELETE_AN_IP_POOL_INPUT = {
  /**
   * Pool Name
   * @description The name of the IP pool that you want to retrieve the IP addresses for.
   */
  pool_name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_AN_IP_POOL tool output.
 */
type SENDGRID_DELETE_AN_IP_POOL_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_AN_SSO_CERTIFICATE tool input.
 */
type SENDGRID_DELETE_AN_SSO_CERTIFICATE_INPUT = {
  /**
   * Cert Id
   * @description Cert Id
   */
  cert_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_AN_SSO_CERTIFICATE tool output.
 */
type SENDGRID_DELETE_AN_SSO_CERTIFICATE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_AN_SSO_INTEGRATION tool input.
 */
type SENDGRID_DELETE_AN_SSO_INTEGRATION_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_AN_SSO_INTEGRATION tool output.
 */
type SENDGRID_DELETE_AN_SSO_INTEGRATION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_API_KEYS tool input.
 */
type SENDGRID_DELETE_API_KEYS_INPUT = {
  /** Api Key Id */
  api_key_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_API_KEYS tool output.
 */
type SENDGRID_DELETE_API_KEYS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_BATCH_OF_IPS_FROM_AN_IP_POOL tool input.
 */
type SENDGRID_DELETE_A_BATCH_OF_IPS_FROM_AN_IP_POOL_INPUT = {
  /**
   * Ips
   * @description An array of IP addresses to remove from the specified IP Pool.
   */
  ips?: string[];
  /**
   * Poolid
   * @description Specifies the unique ID for an IP Pool.
   */
  poolid?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_BATCH_OF_IPS_FROM_AN_IP_POOL tool output.
 */
type SENDGRID_DELETE_A_BATCH_OF_IPS_FROM_AN_IP_POOL_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_BATCH_OF_SUBUSERS_FROM_AN_IP tool input.
 */
type SENDGRID_DELETE_A_BATCH_OF_SUBUSERS_FROM_AN_IP_INPUT = {
  /**
   * Ip
   * @description The `ip` path parameter specifies an IP address to make the request against.
   */
  ip?: string;
  /**
   * Subusers
   * @description An array of Subuser IDs to be removed from the specified IP address.
   */
  subusers?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_BATCH_OF_SUBUSERS_FROM_AN_IP tool output.
 */
type SENDGRID_DELETE_A_BATCH_OF_SUBUSERS_FROM_AN_IP_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_BOUNCE tool input.
 */
type SENDGRID_DELETE_A_BOUNCE_INPUT = {
  /**
   * Email
   * @description The email address you would like to remove from the bounce list.
   */
  email?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_BOUNCE tool output.
 */
type SENDGRID_DELETE_A_BOUNCE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_BRANDED_LINK tool input.
 */
type SENDGRID_DELETE_A_BRANDED_LINK_INPUT = {
  /**
   * Id
   * @description The ID of the branded link you want to retrieve.
   */
  id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_BRANDED_LINK tool output.
 */
type SENDGRID_DELETE_A_BRANDED_LINK_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_CAMPAIGN tool input.
 */
type SENDGRID_DELETE_A_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The id of the campaign you would like to retrieve.
   */
  campaign_id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_CAMPAIGN tool output.
 */
type SENDGRID_DELETE_A_CAMPAIGN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_CANCELLATION_OR_PAUSE_FROM_A_SCHEDULED_SEND tool input.
 */
type SENDGRID_DELETE_A_CANCELLATION_OR_PAUSE_FROM_A_SCHEDULED_SEND_INPUT = {
  /**
   * Batch Id
   * @description Batch Id
   */
  batch_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_CANCELLATION_OR_PAUSE_FROM_A_SCHEDULED_SEND tool output.
 */
type SENDGRID_DELETE_A_CANCELLATION_OR_PAUSE_FROM_A_SCHEDULED_SEND_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_CONTACT_IDENTIFIER tool input.
 */
type SENDGRID_DELETE_A_CONTACT_IDENTIFIER_INPUT = {
  /**
   * Contact Id
   * @description Must be set to the `contact_id` of the contact you want to remove the identifier from.
   */
  contact_id?: string;
  /**
   * Identifier Type
   * @description Identifier Type
   * @enum {string}
   */
  identifier_type?: "EMAIL" | "PHONENUMBERID" | "EXTERNALID" | "ANONYMOUSID";
  /**
   * Identifier Value
   * @description The value of the identifier you want to remove from the contact.
   */
  identifier_value?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_CONTACT_IDENTIFIER tool output.
 */
type SENDGRID_DELETE_A_CONTACT_IDENTIFIER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_CUSTOM_FIELD tool input.
 */
type SENDGRID_DELETE_A_CUSTOM_FIELD_INPUT = {
  /**
   * Custom Field Id
   * @description The ID of the custom field that you want to retrieve.
   */
  custom_field_id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_CUSTOM_FIELD tool output.
 */
type SENDGRID_DELETE_A_CUSTOM_FIELD_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_GLOBAL_SUPPRESSION tool input.
 */
type SENDGRID_DELETE_A_GLOBAL_SUPPRESSION_INPUT = {
  /**
   * Email
   * @description The email address of the global suppression you want to retrieve. Or, if you want to check if an email address is on the global suppressions list, enter that email address here.
   */
  email?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_GLOBAL_SUPPRESSION tool output.
 */
type SENDGRID_DELETE_A_GLOBAL_SUPPRESSION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_LIST tool input.
 */
type SENDGRID_DELETE_A_LIST_INPUT = {
  /**
   * Delete Contacts
   * @description Adds the ability to delete all contacts on the list in addition to deleting the list.
   */
  delete_contacts?: boolean;
  /**
   * List Id
   * @description List Id
   */
  list_id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_LIST tool output.
 */
type SENDGRID_DELETE_A_LIST_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_PARSE_SETTING tool input.
 */
type SENDGRID_DELETE_A_PARSE_SETTING_INPUT = {
  /**
   * Hostname
   * @description The hostname associated with the inbound parse setting that you would like to retrieve.
   */
  hostname?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_PARSE_SETTING tool output.
 */
type SENDGRID_DELETE_A_PARSE_SETTING_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_RECIPIENT tool input.
 */
type SENDGRID_DELETE_A_RECIPIENT_INPUT = {
  /**
   * Recipient Id
   * @description The ID of the recipient that you want to retrieve.
   */
  recipient_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_RECIPIENT tool output.
 */
type SENDGRID_DELETE_A_RECIPIENT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_REVERSE_DNS_RECORD tool input.
 */
type SENDGRID_DELETE_A_REVERSE_DNS_RECORD_INPUT = {
  /**
   * Id
   * @description The ID of the reverse DNS record that you would like to retrieve.
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_REVERSE_DNS_RECORD tool output.
 */
type SENDGRID_DELETE_A_REVERSE_DNS_RECORD_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SEGMENT tool input.
 */
type SENDGRID_DELETE_A_SEGMENT_INPUT = {
  /**
   * Delete Contacts
   * @description True to delete all contacts matching the segment in addition to deleting the segment
   */
  delete_contacts?: boolean;
  /**
   * Segment Id
   * @description Segment Id
   */
  segment_id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SEGMENT tool output.
 */
type SENDGRID_DELETE_A_SEGMENT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SENDER tool input.
 */
type SENDGRID_DELETE_A_SENDER_INPUT = {
  /**
   * Id
   * @description The unique identifier of the Sender.
   */
  id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SENDER tool output.
 */
type SENDGRID_DELETE_A_SENDER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SENDER_IDENTITY tool input.
 */
type SENDGRID_DELETE_A_SENDER_IDENTITY_INPUT = {
  /**
   * Sender Id
   * @description The ID of the sender identity that you want to retrieve.
   */
  sender_id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SENDER_IDENTITY tool output.
 */
type SENDGRID_DELETE_A_SENDER_IDENTITY_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SINGLE_EVENT_WEBHOOK_BY_ID tool input.
 */
type SENDGRID_DELETE_A_SINGLE_EVENT_WEBHOOK_BY_ID_INPUT = {
  /**
   * Id
   * @description The ID of the Event Webhook you want to retrieve.
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SINGLE_EVENT_WEBHOOK_BY_ID tool output.
 */
type SENDGRID_DELETE_A_SINGLE_EVENT_WEBHOOK_BY_ID_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SINGLE_RECIPIENT_FROM_A_SINGLE_LIST tool input.
 */
type SENDGRID_DELETE_A_SINGLE_RECIPIENT_FROM_A_SINGLE_LIST_INPUT = {
  /**
   * List Id
   * @description The ID of the list that you want to add the recipient to.
   */
  list_id?: number;
  /**
   * Recipient Id
   * @description The ID of the recipient you are adding to the list.
   */
  recipient_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SINGLE_RECIPIENT_FROM_A_SINGLE_LIST tool output.
 */
type SENDGRID_DELETE_A_SINGLE_RECIPIENT_FROM_A_SINGLE_LIST_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SPECIFIC_BLOCK tool input.
 */
type SENDGRID_DELETE_A_SPECIFIC_BLOCK_INPUT = {
  /**
   * Email
   * @description The email address of the specific block.
   */
  email?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SPECIFIC_BLOCK tool output.
 */
type SENDGRID_DELETE_A_SPECIFIC_BLOCK_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SPECIFIC_INVALID_EMAIL tool input.
 */
type SENDGRID_DELETE_A_SPECIFIC_INVALID_EMAIL_INPUT = {
  /**
   * Email
   * @description The specific email address of the invalid email entry that you want to retrieve.
   */
  email?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SPECIFIC_INVALID_EMAIL tool output.
 */
type SENDGRID_DELETE_A_SPECIFIC_INVALID_EMAIL_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SPECIFIC_SPAM_REPORT tool input.
 */
type SENDGRID_DELETE_A_SPECIFIC_SPAM_REPORT_INPUT = {
  /**
   * Email
   * @description The email address of a specific spam report that you want to retrieve.
   */
  email?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SPECIFIC_SPAM_REPORT tool output.
 */
type SENDGRID_DELETE_A_SPECIFIC_SPAM_REPORT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SUBUSER tool input.
 */
type SENDGRID_DELETE_A_SUBUSER_INPUT = {
  /**
   * Subuser Name
   * @description The username of the Subuser.
   */
  subuser_name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SUBUSER tool output.
 */
type SENDGRID_DELETE_A_SUBUSER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SUPPRESSION_FROM_A_SUPPRESSION_GROUP tool input.
 */
type SENDGRID_DELETE_A_SUPPRESSION_FROM_A_SUPPRESSION_GROUP_INPUT = {
  /**
   * Email
   * @description The email address that you want to remove from the suppression group.
   */
  email?: string;
  /**
   * Group Id
   * @description The id of the suppression group that you are removing an email address from.
   */
  group_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SUPPRESSION_FROM_A_SUPPRESSION_GROUP tool output.
 */
type SENDGRID_DELETE_A_SUPPRESSION_FROM_A_SUPPRESSION_GROUP_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SUPPRESSION_GROUP tool input.
 */
type SENDGRID_DELETE_A_SUPPRESSION_GROUP_INPUT = {
  /**
   * Group Id
   * @description The ID of the suppression group you would like to retrieve.
   */
  group_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_SUPPRESSION_GROUP tool output.
 */
type SENDGRID_DELETE_A_SUPPRESSION_GROUP_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_TEMPLATE tool input.
 */
type SENDGRID_DELETE_A_TEMPLATE_INPUT = {
  /**
   * Template Id
   * @description Template Id
   */
  template_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_TEMPLATE tool output.
 */
type SENDGRID_DELETE_A_TEMPLATE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_TRANSACTIONAL_TEMPLATE_VERSION tool input.
 */
type SENDGRID_DELETE_A_TRANSACTIONAL_TEMPLATE_VERSION_INPUT = {
  /**
   * Template Id
   * @description  The ID of the original template
   */
  template_id?: string;
  /**
   * Version Id
   * @description The ID of the template version
   */
  version_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_A_TRANSACTIONAL_TEMPLATE_VERSION tool output.
 */
type SENDGRID_DELETE_A_TRANSACTIONAL_TEMPLATE_VERSION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_BLOCKS tool input.
 */
type SENDGRID_DELETE_BLOCKS_INPUT = {
  /**
   * Delete All
   * @description Indicates if you want to delete all blocked email addresses.
   */
  delete_all?: boolean;
  /**
   * Emails
   * @description The specific blocked email addresses that you want to delete.
   */
  emails?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_BLOCKS tool output.
 */
type SENDGRID_DELETE_BLOCKS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_BOUNCES tool input.
 */
type SENDGRID_DELETE_BOUNCES_INPUT = {
  /**
   * Delete All
   * @description This parameter allows you to delete **every** email in your bounce list. This should not be used with the emails parameter.
   */
  delete_all?: boolean;
  /**
   * Emails
   * @description Delete multiple emails from your bounce list at the same time. This should not be used with the delete_all parameter.
   */
  emails?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_BOUNCES tool output.
 */
type SENDGRID_DELETE_BOUNCES_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_BULK_INTEGRATION tool input.
 */
type SENDGRID_DELETE_BULK_INTEGRATION_INPUT = {
  /**
   * Ids
   * @description Comma-delimited Integration IDs for the Integrations to delete.
   */
  ids?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_BULK_INTEGRATION tool output.
 */
type SENDGRID_DELETE_BULK_INTEGRATION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_CONTACTS tool input.
 */
type SENDGRID_DELETE_CONTACTS_INPUT = {
  /**
   * Delete All Contacts
   * @description Must be set to `"true"` to delete all contacts.
   */
  delete_all_contacts?: string;
  /**
   * Ids
   * @description A comma-separated list of contact IDs.
   */
  ids?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_CONTACTS tool output.
 */
type SENDGRID_DELETE_CONTACTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_CUSTOM_FIELD_DEFINITION tool input.
 */
type SENDGRID_DELETE_CUSTOM_FIELD_DEFINITION_INPUT = {
  /**
   * Custom Field Id
   * @description Custom Field Id
   */
  custom_field_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_CUSTOM_FIELD_DEFINITION tool output.
 */
type SENDGRID_DELETE_CUSTOM_FIELD_DEFINITION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_DESIGN tool input.
 */
type SENDGRID_DELETE_DESIGN_INPUT = {
  /**
   * Id
   * @description The ID of the Design you want to duplicate.
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_DESIGN tool output.
 */
type SENDGRID_DELETE_DESIGN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_INVALID_EMAILS tool input.
 */
type SENDGRID_DELETE_INVALID_EMAILS_INPUT = {
  /**
   * Delete All
   * @description Indicates if you want to remove all email address from the invalid emails list.
   */
  delete_all?: boolean;
  /**
   * Emails
   * @description The list of specific email addresses that you want to remove.
   */
  emails?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_INVALID_EMAILS tool output.
 */
type SENDGRID_DELETE_INVALID_EMAILS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_IP_POOL tool input.
 */
type SENDGRID_DELETE_IP_POOL_INPUT = {
  /**
   * Poolid
   * @description Specifies the unique ID for an IP Pool.
   */
  poolid?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_IP_POOL tool output.
 */
type SENDGRID_DELETE_IP_POOL_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_PENDING_TEAMMATE tool input.
 */
type SENDGRID_DELETE_PENDING_TEAMMATE_INPUT = {
  /**
   * Token
   * @description The token for the invite you want to delete.
   */
  token?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_PENDING_TEAMMATE tool output.
 */
type SENDGRID_DELETE_PENDING_TEAMMATE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_SEGMENT tool input.
 */
type SENDGRID_DELETE_SEGMENT_INPUT = {
  /**
   * Segment Id
   * @description Segment Id
   */
  segment_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_SEGMENT tool output.
 */
type SENDGRID_DELETE_SEGMENT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_SINGLE_SEND_BY_ID tool input.
 */
type SENDGRID_DELETE_SINGLE_SEND_BY_ID_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_SINGLE_SEND_BY_ID tool output.
 */
type SENDGRID_DELETE_SINGLE_SEND_BY_ID_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_SINGLE_SEND_SCHEDULE tool input.
 */
type SENDGRID_DELETE_SINGLE_SEND_SCHEDULE_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_SINGLE_SEND_SCHEDULE tool output.
 */
type SENDGRID_DELETE_SINGLE_SEND_SCHEDULE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_SPAM_REPORTS tool input.
 */
type SENDGRID_DELETE_SPAM_REPORTS_INPUT = {
  /**
   * Delete All
   * @description Indicates if you want to delete all email addresses on the spam report list.
   */
  delete_all?: boolean;
  /**
   * Emails
   * @description A list of specific email addresses that you want to remove from the spam report list.
   */
  emails?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_SPAM_REPORTS tool output.
 */
type SENDGRID_DELETE_SPAM_REPORTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_TEAMMATE tool input.
 */
type SENDGRID_DELETE_TEAMMATE_INPUT = {
  /**
   * Username
   * @description The username of the teammate that you want to retrieve.
   */
  username?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_TEAMMATE tool output.
 */
type SENDGRID_DELETE_TEAMMATE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_VERIFIED_SENDER tool input.
 */
type SENDGRID_DELETE_VERIFIED_SENDER_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DELETE_VERIFIED_SENDER tool output.
 */
type SENDGRID_DELETE_VERIFIED_SENDER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DENY_ACCESS_REQUEST tool input.
 */
type SENDGRID_DENY_ACCESS_REQUEST_INPUT = {
  /**
   * Request Id
   * @description The ID of the request that you want to deny.
   */
  request_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DENY_ACCESS_REQUEST tool output.
 */
type SENDGRID_DENY_ACCESS_REQUEST_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DISASSOCIATE_AN_AUTHENTICATED_DOMAIN_FROM_A_GIVEN_USER tool input.
 */
type SENDGRID_DISASSOCIATE_AN_AUTHENTICATED_DOMAIN_FROM_A_GIVEN_USER_INPUT = {
  /**
   * Username
   * @description Username for the subuser to find associated authenticated domain.
   */
  username?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DISASSOCIATE_AN_AUTHENTICATED_DOMAIN_FROM_A_GIVEN_USER tool output.
 */
type SENDGRID_DISASSOCIATE_AN_AUTHENTICATED_DOMAIN_FROM_A_GIVEN_USER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DISASSOCIATE_A_BRANDED_LINK_FROM_A_SUBUSER tool input.
 */
type SENDGRID_DISASSOCIATE_A_BRANDED_LINK_FROM_A_SUBUSER_INPUT = {
  /**
   * Username
   * @description The username of the subuser account that you want to disassociate a branded link from.
   */
  username?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DISASSOCIATE_A_BRANDED_LINK_FROM_A_SUBUSER tool output.
 */
type SENDGRID_DISASSOCIATE_A_BRANDED_LINK_FROM_A_SUBUSER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DOMAIN_WARN_LIST tool input.
 */
type SENDGRID_DOMAIN_WARN_LIST_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_DOMAIN_WARN_LIST tool output.
 */
type SENDGRID_DOMAIN_WARN_LIST_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DOWNLOAD_CSV tool input.
 */
type SENDGRID_DOWNLOAD_CSV_INPUT = {
  /**
   * Download Uuid
   * @description UUID used to locate the download csv request entry in the DB. This is the UUID provided in the email sent to the user when their csv file is ready to download
   */
  download_uuid?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DOWNLOAD_CSV tool output.
 */
type SENDGRID_DOWNLOAD_CSV_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DUPLICATE_A_TRANSACTIONAL_TEMPLATE tool input.
 */
type SENDGRID_DUPLICATE_A_TRANSACTIONAL_TEMPLATE_INPUT = {
  /**
   * Name
   * @description The name for the new transactional template.
   */
  name?: string;
  /**
   * Template Id
   * @description Template Id
   */
  template_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DUPLICATE_A_TRANSACTIONAL_TEMPLATE tool output.
 */
type SENDGRID_DUPLICATE_A_TRANSACTIONAL_TEMPLATE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DUPLICATE_DESIGN tool input.
 */
type SENDGRID_DUPLICATE_DESIGN_INPUT = {
  /**
   * Editor
   * @description Editor
   * @enum {string}
   */
  editor?: "code" | "design";
  /**
   * Id
   * @description The ID of the Design you want to duplicate.
   */
  id?: string;
  /**
   * Name
   * @description The name of the new design.
   * @default Duplicate: <original design name>
   */
  name: string;
};

/**
 * Type of SENDGRID's SENDGRID_DUPLICATE_DESIGN tool output.
 */
type SENDGRID_DUPLICATE_DESIGN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DUPLICATE_SEND_GRID_PRE_BUILT_DESIGN tool input.
 */
type SENDGRID_DUPLICATE_SEND_GRID_PRE_BUILT_DESIGN_INPUT = {
  /**
   * Editor
   * @description Editor
   * @enum {string}
   */
  editor?: "code" | "design";
  /**
   * Id
   * @description The ID of the pre-built Design you want to duplicate.
   */
  id?: string;
  /**
   * Name
   * @description The name of the new design.
   * @default Duplicate: <original design name>
   */
  name: string;
};

/**
 * Type of SENDGRID's SENDGRID_DUPLICATE_SEND_GRID_PRE_BUILT_DESIGN tool output.
 */
type SENDGRID_DUPLICATE_SEND_GRID_PRE_BUILT_DESIGN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_DUPLICATE_SINGLE_SEND tool input.
 */
type SENDGRID_DUPLICATE_SINGLE_SEND_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Name
   * @description The name of the duplicate Single Send. If you choose to leave the name field blank, your duplicate will be assigned the name of the Single Send it was copied from with the text "Copy of " prepended to it. The end of the new Single Send name, including "Copy of ", will be trimmed if the name exceeds the character limit.
   */
  name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_DUPLICATE_SINGLE_SEND tool output.
 */
type SENDGRID_DUPLICATE_SINGLE_SEND_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_EDIT_AN_SSO_TEAMMATE tool input.
 */
type SENDGRID_EDIT_AN_SSO_TEAMMATE_INPUT = {
  /**
   * First Name
   * @description Set this property to the Teammate"s first name.
   */
  first_name?: string;
  /**
   * Has Restricted Subuser Access
   * @description Set this property to `true` to give the Teammate permissions to operate only on behalf of a Subuser. This property value must be `true` if the `subuser_access` property is not empty. The `subuser_access` property determines which Subusers the Teammate may act on behalf of. If this property is set to `true`, you cannot specify individual `scopes`, assign a `persona`, or set `is_admin` to `true`—a Teammate cannot specify scopes for the parent account and have restricted Subuser access.
   */
  has_restricted_subuser_access?: boolean;
  /**
   * Is Admin
   * @description Set this property to `true` if the Teammate has admin permissions. You should not include the `scopes` or `persona` properties when setting the `is_admin` property to `true`—an admin will be allocated all scopes. See [**Teammate Permissions**](https://docs.sendgrid.com/ui/account-and-settings/teammate-permissions) for a complete list of scopes.
   */
  is_admin?: boolean;
  /**
   * Last Name
   * @description Set this property to the Teammate"s last name.
   */
  last_name?: string;
  /**
   * Persona
   * @description Persona
   * @enum {string}
   */
  persona?: "accountant" | "developer" | "marketer" | "observer";
  /**
   * Scopes
   * @description Add or remove permissions from a Teammate using this `scopes` property. See [**Teammate Permissions**](https://docs.sendgrid.com/ui/account-and-settings/teammate-permissions) for a complete list of available scopes. You should not include this propety in the request when using the `persona` property or when setting the `is_admin` property to `true`—assigning a `persona` or setting `is_admin` to `true` will allocate a group of permissions to the Teammate.
   */
  scopes?: string[];
  /**
   * Subuser Access
   * @description Specify which Subusers the Teammate may access and act on behalf of with this property. If this property is populated, you must set the `has_restricted_subuser_access` property to `true`.
   */
  subuser_access?: {
      [key: string]: unknown;
  }[];
  /**
   * Username
   * @description Set this parameter to the Teammate"s email address. This address must be the same address assigned to the Teammate in your IdP.
   */
  username?: string;
};

/**
 * Type of SENDGRID's SENDGRID_EDIT_AN_SSO_TEAMMATE tool output.
 */
type SENDGRID_EDIT_AN_SSO_TEAMMATE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_EDIT_A_TRANSACTIONAL_TEMPLATE tool input.
 */
type SENDGRID_EDIT_A_TRANSACTIONAL_TEMPLATE_INPUT = {
  /**
   * Name
   * @description The name of the transactional template.
   */
  name?: string;
  /**
   * Template Id
   * @description Template Id
   */
  template_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_EDIT_A_TRANSACTIONAL_TEMPLATE tool output.
 */
type SENDGRID_EDIT_A_TRANSACTIONAL_TEMPLATE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_EDIT_A_TRANSACTIONAL_TEMPLATE_VERSION tool input.
 */
type SENDGRID_EDIT_A_TRANSACTIONAL_TEMPLATE_VERSION_INPUT = {
  /**
   * Active
   * @description Active
   */
  active?: number;
  /**
   * Editor
   * @description Editor
   * @enum {string}
   */
  editor?: "code" | "design";
  /**
   * Generate Plain Content
   * @description If true, plain_content is always generated from html_content. If false, plain_content is not altered.
   * @default true
   */
  generate_plain_content: boolean;
  /**
   * Html Content
   * @description The HTML content of the version. Maximum of 1048576 bytes allowed.
   */
  html_content?: string;
  /**
   * Name
   * @description Name of the transactional template version.
   */
  name?: string;
  /**
   * Plain Content
   * @description Text/plain content of the transactional template version. Maximum of 1048576 bytes allowed.
   * @default <generated from html_content if left empty>
   */
  plain_content: string;
  /**
   * Subject
   * @description Subject of the new transactional template version.
   */
  subject?: string;
  /**
   * Template Id
   * @description  The ID of the original template
   */
  template_id?: string;
  /**
   * Test Data
   * @description For dynamic templates only, the mock json data that will be used for template preview and test sends.
   */
  test_data?: string;
  /**
   * Version Id
   * @description The ID of the template version
   */
  version_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_EDIT_A_TRANSACTIONAL_TEMPLATE_VERSION tool output.
 */
type SENDGRID_EDIT_A_TRANSACTIONAL_TEMPLATE_VERSION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_EDIT_VERIFIED_SENDER tool input.
 */
type SENDGRID_EDIT_VERIFIED_SENDER_INPUT = {
  /**
   * Address
   * @description Address
   */
  address?: string;
  /**
   * Address2
   * @description Address2
   */
  address2?: string;
  /**
   * City
   * @description City
   */
  city?: string;
  /**
   * Country
   * @description Country
   */
  country?: string;
  /**
   * From Email
   * Format: email
   * @description From Email
   */
  from_email?: string;
  /**
   * From Name
   * @description From Name
   */
  from_name?: string;
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Nickname
   * @description Nickname
   */
  nickname?: string;
  /**
   * Reply To
   * Format: email
   * @description Reply To
   */
  reply_to?: string;
  /**
   * Reply To Name
   * @description Reply To Name
   */
  reply_to_name?: string;
  /**
   * State
   * @description State
   */
  state?: string;
  /**
   * Zip
   * @description Zip
   */
  zip?: string;
};

/**
 * Type of SENDGRID's SENDGRID_EDIT_VERIFIED_SENDER tool output.
 */
type SENDGRID_EDIT_VERIFIED_SENDER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_EMAIL_DNS_RECORDS_TO_A_CO_WORKER tool input.
 */
type SENDGRID_EMAIL_DNS_RECORDS_TO_A_CO_WORKER_INPUT = {
  /**
   * Domain Id
   * @description The ID of your SendGrid domain record.
   */
  domain_id?: number;
  /**
   * Email
   * Format: email
   * @description The email address to send the DNS information to.
   */
  email?: string;
  /**
   * Link Id
   * @description The ID of the branded link.
   */
  link_id?: number;
  /**
   * Message
   * @description A custom text block to include in the email body sent with the records.
   * @default Please set these DNS records in our hosting solution.
   */
  message: string;
};

/**
 * Type of SENDGRID's SENDGRID_EMAIL_DNS_RECORDS_TO_A_CO_WORKER tool output.
 */
type SENDGRID_EMAIL_DNS_RECORDS_TO_A_CO_WORKER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_ENABLE_DISABLE_A_SUBUSER tool input.
 */
type SENDGRID_ENABLE_DISABLE_A_SUBUSER_INPUT = {
  /**
   * Disabled
   * @description Whether or not this subuser is disabled. `true` means disabled, `false` means enabled.
   */
  disabled?: boolean;
  /**
   * Subuser Name
   * @description The username of the Subuser.
   */
  subuser_name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_ENABLE_DISABLE_A_SUBUSER tool output.
 */
type SENDGRID_ENABLE_DISABLE_A_SUBUSER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_ENABLE_DISABLE_WEBSITE_ACCESS_FOR_A_SUBUSER tool input.
 */
type SENDGRID_ENABLE_DISABLE_WEBSITE_ACCESS_FOR_A_SUBUSER_INPUT = {
  /**
   * Disabled
   * @description Whether or not to disable website access to the Subuser. `true` means disabled, `false` means enabled.
   */
  disabled?: boolean;
  /**
   * Subuser Name
   * @description Subuser Name
   */
  subuser_name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_ENABLE_DISABLE_WEBSITE_ACCESS_FOR_A_SUBUSER tool output.
 */
type SENDGRID_ENABLE_DISABLE_WEBSITE_ACCESS_FOR_A_SUBUSER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_ERASE_RECIPIENTS_EMAIL_DATA tool input.
 */
type SENDGRID_ERASE_RECIPIENTS_EMAIL_DATA_INPUT = {
  /**
   * Email Addresses
   * @description List of unique recipient email addresses whose PII will be erased. You may include a maximum of 5,000 addresses or a maximum payload size of 256Kb, whichever comes first.
   */
  email_addresses?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_ERASE_RECIPIENTS_EMAIL_DATA tool output.
 */
type SENDGRID_ERASE_RECIPIENTS_EMAIL_DATA_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_EXPORT_CONTACTS tool input.
 */
type SENDGRID_EXPORT_CONTACTS_INPUT = {
  /**
   * File Type
   * @description File Type
   * @enum {string}
   */
  file_type?: "csv" | "json";
  /**
   * List Ids
   * @description IDs of the contact lists you want to export.
   */
  list_ids?: string[];
  /**
   * Max File Size
   * @description The maximum size of an export file in MB. Note that when this option is specified, multiple output files may be returned from the export.
   * @default 5000
   */
  max_file_size: number;
  /**
   * Notifications  Email
   * @description Email
   */
  notifications__email?: boolean;
  /**
   * Segment Ids
   * @description IDs of the contact segments you want to export.
   */
  segment_ids?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_EXPORT_CONTACTS tool output.
 */
type SENDGRID_EXPORT_CONTACTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_EXPORT_CONTACTS_STATUS tool input.
 */
type SENDGRID_EXPORT_CONTACTS_STATUS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_EXPORT_CONTACTS_STATUS tool output.
 */
type SENDGRID_EXPORT_CONTACTS_STATUS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_EXPORT_SINGLE_SEND_STATS tool input.
 */
type SENDGRID_EXPORT_SINGLE_SEND_STATS_INPUT = {
  /**
   * Ids
   * @description The IDs of Single Sends for which to export stats.
   */
  ids?: string[];
  /**
   * Timezone
   * @description The [IANA Area/Region](https://en.wikipedia.org/wiki/Tz_database#Names_of_timezones) string representing the timezone in which the stats are to be presented; i.e. `"America/Chicago"`. This parameter changes the timezone format only; it does not alter which stats are returned.
   * @default UTC
   */
  timezone: string;
};

/**
 * Type of SENDGRID's SENDGRID_EXPORT_SINGLE_SEND_STATS tool output.
 */
type SENDGRID_EXPORT_SINGLE_SEND_STATS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_FILTER_ALL_MESSAGES tool input.
 */
type SENDGRID_FILTER_ALL_MESSAGES_INPUT = {
  /**
   * Limit
   * @description The number of messages returned. This parameter must be greater than 0 and less than or equal to 1000
   * @default 10
   */
  limit: number;
  /**
   * Query
   * @description Use the query syntax  to filter your email activity.
   */
  query?: string;
};

/**
 * Type of SENDGRID's SENDGRID_FILTER_ALL_MESSAGES tool output.
 */
type SENDGRID_FILTER_ALL_MESSAGES_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_FILTER_MESSAGES_BY_MESSAGE_ID tool input.
 */
type SENDGRID_FILTER_MESSAGES_BY_MESSAGE_ID_INPUT = {
  /**
   * Msg Id
   * @description The ID of the message you are requesting details for.
   */
  msg_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_FILTER_MESSAGES_BY_MESSAGE_ID tool output.
 */
type SENDGRID_FILTER_MESSAGES_BY_MESSAGE_ID_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_FILTER_SEGMENTS_BY_PARENT_IDS tool input.
 */
type SENDGRID_FILTER_SEGMENTS_BY_PARENT_IDS_INPUT = {
  /**
   * Ids
   * @description A list of segment IDs to retrieve. When this parameter is included, the `no_parent_list_ids` and `parent_list_ids` parameters are ignored and only segments with given IDs are returned.
   */
  ids?: string[];
  /**
   * No Parent List Id
   * @description If set to `true`, segments with an empty value of `parent_list_id` will be returned in the filter.  If the value is not present, it defaults to "false".
   * @default false
   */
  no_parent_list_id: boolean;
  /**
   * Parent List Ids
   * @description A comma separated list up to 50 in size, to filter segments on.  Only segments that have any of these list ids as the parent list will be retrieved. This is different from the parameter of the same name used when creating a segment.
   */
  parent_list_ids?: string;
};

/**
 * Type of SENDGRID's SENDGRID_FILTER_SEGMENTS_BY_PARENT_IDS tool output.
 */
type SENDGRID_FILTER_SEGMENTS_BY_PARENT_IDS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ACCOUNT_OFFERINGS tool input.
 */
type SENDGRID_GET_ACCOUNT_OFFERINGS_INPUT = {
  /**
   * Account Id
   * @description Twilio SendGrid account ID
   */
  accountID?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ACCOUNT_OFFERINGS tool output.
 */
type SENDGRID_GET_ACCOUNT_OFFERINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_ACCOUNTS tool input.
 */
type SENDGRID_GET_ALL_ACCOUNTS_INPUT = {
  /**
   * Limit
   * @description The number of items to return
   * @default 10
   */
  limit: number;
  /**
   * Offset
   * @description The last item successfully retrieved
   */
  offset?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_ACCOUNTS tool output.
 */
type SENDGRID_GET_ALL_ACCOUNTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_AUTOMATION_STATS tool input.
 */
type SENDGRID_GET_ALL_AUTOMATION_STATS_INPUT = {
  /**
   * Automation Ids
   * @description This endpoint returns all automation IDs if no `automation_ids` are specified.
   */
  automation_ids?: string[];
  /**
   * Page Size
   * @description The number of elements you want returned on each page.
   * @default 25
   */
  page_size: number;
  /**
   * Page Token
   * @description The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn"t exist, you"re at the first page. Similarly, if `_metadata.next` is not present, you"re at the last page.
   */
  page_token?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_AUTOMATION_STATS tool output.
 */
type SENDGRID_GET_ALL_AUTOMATION_STATS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_AVAILABLE_OFFERINGS tool input.
 */
type SENDGRID_GET_ALL_AVAILABLE_OFFERINGS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_AVAILABLE_OFFERINGS tool output.
 */
type SENDGRID_GET_ALL_AVAILABLE_OFFERINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_CATEGORIES tool input.
 */
type SENDGRID_GET_ALL_CATEGORIES_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_CATEGORIES tool output.
 */
type SENDGRID_GET_ALL_CATEGORIES_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_EXISTING_EXPORTS tool input.
 */
type SENDGRID_GET_ALL_EXISTING_EXPORTS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_EXISTING_EXPORTS tool output.
 */
type SENDGRID_GET_ALL_EXISTING_EXPORTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_FIELD_DEFINITIONS tool input.
 */
type SENDGRID_GET_ALL_FIELD_DEFINITIONS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_FIELD_DEFINITIONS tool output.
 */
type SENDGRID_GET_ALL_FIELD_DEFINITIONS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_IP_POOLS_THAT_HAVE_ASSOCIATED_IPS tool input.
 */
type SENDGRID_GET_ALL_IP_POOLS_THAT_HAVE_ASSOCIATED_IPS_INPUT = {
  /**
   * After Key
   * @description Specifies which items to be returned by the API. When the `after_key` is specified, the API will return items beginning from the first item after the item specified. This parameter can be used in combination with `limit` to iterate through paginated results.
   */
  after_key?: number;
  /**
   * Include Region
   * @description Boolean indicating whether or not to return the IP Pool"s region information in the response.
   * @default false
   */
  include_region: boolean;
  /**
   * Ip
   * @description Specifies an IP address. The `ip` query parameter can be used to filter results by IP address.
   */
  ip?: string;
  /**
   * Limit
   * @description Specifies the number of results to be returned by the API. This parameter can be used in combination with the `before_key` or `after_key` parameters to iterate through paginated results.
   */
  limit?: number;
  /**
   * Region
   * @description Allowed values are `all`, `eu`, and `us`. If you provide a specific region, results will include all pools that have at least one IP in the filtered region. If `all`, pools with at least one IP (regardless of region) will be returned. If the `region` filter is not provided, the query returns all pools, including empty ones.
   * @enum {string}
   */
  region?: "all" | "eu" | "us";
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_IP_POOLS_THAT_HAVE_ASSOCIATED_IPS tool output.
 */
type SENDGRID_GET_ALL_IP_POOLS_THAT_HAVE_ASSOCIATED_IPS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_LISTS tool input.
 */
type SENDGRID_GET_ALL_LISTS_INPUT = {
  /**
   * Page Size
   * @description Maximum number of elements to return. Defaults to 100, returns 1000 max
   * @default 100
   */
  page_size: number;
  /**
   * Page Token
   * @description Page Token
   */
  page_token?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_LISTS tool output.
 */
type SENDGRID_GET_ALL_LISTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_SENDER_IDENTITIES tool input.
 */
type SENDGRID_GET_ALL_SENDER_IDENTITIES_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_SENDER_IDENTITIES tool output.
 */
type SENDGRID_GET_ALL_SENDER_IDENTITIES_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_SINGLE_SENDS tool input.
 */
type SENDGRID_GET_ALL_SINGLE_SENDS_INPUT = {
  /**
   * Page Size
   * @description Page Size
   */
  page_size?: number;
  /**
   * Page Token
   * @description Page Token
   */
  page_token?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_SINGLE_SENDS tool output.
 */
type SENDGRID_GET_ALL_SINGLE_SENDS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_SINGLE_SENDS_STATS tool input.
 */
type SENDGRID_GET_ALL_SINGLE_SENDS_STATS_INPUT = {
  /**
   * Page Size
   * @description The number of elements you want returned on each page.
   * @default 25
   */
  page_size: number;
  /**
   * Page Token
   * @description The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn"t exist, you"re at the first page. Similarly, if `_metadata.next` is not present, you"re at the last page.
   */
  page_token?: string;
  /**
   * Singlesend Ids
   * @description This endpoint returns all Single Send IDs if no IDs are included in `singlesend_ids`.
   */
  singlesend_ids?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_SINGLE_SENDS_STATS tool output.
 */
type SENDGRID_GET_ALL_SINGLE_SENDS_STATS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_SSO_CERTIFICATES_BY_INTEGRATION tool input.
 */
type SENDGRID_GET_ALL_SSO_CERTIFICATES_BY_INTEGRATION_INPUT = {
  /**
   * Integration Id
   * @description An ID that matches a certificate to a specific IdP integration.
   */
  integration_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_SSO_CERTIFICATES_BY_INTEGRATION tool output.
 */
type SENDGRID_GET_ALL_SSO_CERTIFICATES_BY_INTEGRATION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_SSO_INTEGRATIONS tool input.
 */
type SENDGRID_GET_ALL_SSO_INTEGRATIONS_INPUT = {
  /**
   * Si
   * @description If this parameter is set to `true`, the response will include the `completed_integration` field.
   */
  si?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_SSO_INTEGRATIONS tool output.
 */
type SENDGRID_GET_ALL_SSO_INTEGRATIONS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_VERIFIED_SENDERS tool input.
 */
type SENDGRID_GET_ALL_VERIFIED_SENDERS_INPUT = {
  /**
   * Id
   * @description Returns information about only the Sender Identity passed in the request.
   */
  id?: number;
  /**
   * Last Seen Id
   * @description Returns senders with an ID number occurring after the passed in ID. In other words, the `lastSeenID` provides a starting point from which SendGrid will iterate to find Sender Identities associated with your account.
   */
  lastSeenID?: number;
  /**
   * Limit
   * @description Specifies the number of results to be returned by the API. This parameter can be used to limit the results returned or in combination with the `lastSeenID` parameter to iterate through paginated results.
   */
  limit?: number;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ALL_VERIFIED_SENDERS tool output.
 */
type SENDGRID_GET_ALL_VERIFIED_SENDERS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_AN_ACCOUNT_S_STATE tool input.
 */
type SENDGRID_GET_AN_ACCOUNT_S_STATE_INPUT = {
  /**
   * Account Id
   * @description Twilio SendGrid account ID
   */
  accountID?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_AN_ACCOUNT_S_STATE tool output.
 */
type SENDGRID_GET_AN_ACCOUNT_S_STATE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_AN_SSO_CERTIFICATE tool input.
 */
type SENDGRID_GET_AN_SSO_CERTIFICATE_INPUT = {
  /**
   * Cert Id
   * @description Cert Id
   */
  cert_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_AN_SSO_CERTIFICATE tool output.
 */
type SENDGRID_GET_AN_SSO_CERTIFICATE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_AN_SSO_INTEGRATION tool input.
 */
type SENDGRID_GET_AN_SSO_INTEGRATION_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Si
   * @description If this parameter is set to `true`, the response will include the `completed_integration` field.
   */
  si?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_AN_SSO_INTEGRATION tool output.
 */
type SENDGRID_GET_AN_SSO_INTEGRATION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_AUTOMATION_CLICK_TRACKING_STATS_BY_ID tool input.
 */
type SENDGRID_GET_AUTOMATION_CLICK_TRACKING_STATS_BY_ID_INPUT = {
  /**
   * Group By
   * @description Automations can have multiple steps. Including `step_id` as a `group_by` metric allows further granularity of stats.
   */
  group_by?: string[];
  /**
   * Id
   * @description The ID of the Automation you want to get click tracking stats for.
   */
  id?: string;
  /**
   * Page Size
   * @description The number of elements you want returned on each page.
   * @default 25
   */
  page_size: number;
  /**
   * Page Token
   * @description The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn"t exist, you"re at the first page. Similarly, if `_metadata.next` is not present, you"re at the last page.
   */
  page_token?: string;
  /**
   * Step Ids
   * @description Comma-separated list of `step_ids` that you want the link stats for.
   */
  step_ids?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_GET_AUTOMATION_CLICK_TRACKING_STATS_BY_ID tool output.
 */
type SENDGRID_GET_AUTOMATION_CLICK_TRACKING_STATS_BY_ID_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_AUTOMATION_STATS_BY_ID tool input.
 */
type SENDGRID_GET_AUTOMATION_STATS_BY_ID_INPUT = {
  /**
   * Aggregated By
   * @description Dictates how the stats are time-sliced. Currently, `"total"` and `"day"` are supported.
   * @enum {string}
   */
  aggregated_by?: "day" | "week" | "month";
  /**
   * End Date
   * @description Format: `YYYY-MM-DD`.If this parameter is included, the stats" end date is included in the search.
   * @default 2021-12-31
   */
  end_date: string;
  /**
   * Group By
   * @description Automations can have multiple steps. Including `step_id` as a `group_by` metric allows further granularity of stats.
   */
  group_by?: string[];
  /**
   * Id
   * @description The ID of the Automation for which you want to retrieve statistics.
   */
  id?: string;
  /**
   * Page Size
   * @description The number of elements you want returned on each page.
   * @default 25
   */
  page_size: number;
  /**
   * Page Token
   * @description The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn"t exist, you"re at the first page. Similarly, if `_metadata.next` is not present, you"re at the last page.
   */
  page_token?: string;
  /**
   * Start Date
   * @description Format: `YYYY-MM-DD`. If this parameter is included, the stats" start date is included in the search.
   * @default 2021-01-01
   */
  start_date: string;
  /**
   * Step Ids
   * @description Comma-separated list of `step_ids` that you want the link stats for.
   */
  step_ids?: string[];
  /**
   * Timezone
   * @description [IANA Area/Region](https://en.wikipedia.org/wiki/Tz_database#Names_of_timezones) string representing the timezone in which the stats are to be presented, e.g., "America/Chicago".
   * @default UTC
   */
  timezone: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_AUTOMATION_STATS_BY_ID tool output.
 */
type SENDGRID_GET_AUTOMATION_STATS_BY_ID_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_A_CONTACT_BY_ID tool input.
 */
type SENDGRID_GET_A_CONTACT_BY_ID_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_A_CONTACT_BY_ID tool output.
 */
type SENDGRID_GET_A_CONTACT_BY_ID_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_A_LIST_BY_ID tool input.
 */
type SENDGRID_GET_A_LIST_BY_ID_INPUT = {
  /**
   * Contact Sample
   * @description Setting this parameter to the true  will cause the contact_sample to be returned
   * @default false
   */
  contact_sample: boolean;
  /**
   * Id
   * @description The ID of the list on which you want to perform the operation.
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_A_LIST_BY_ID tool output.
 */
type SENDGRID_GET_A_LIST_BY_ID_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_A_LIST_OF_ALL_IP_ADDRESSES_ON_YOUR_ACCOUNT tool input.
 */
type SENDGRID_GET_A_LIST_OF_ALL_IP_ADDRESSES_ON_YOUR_ACCOUNT_INPUT = {
  /**
   * After Key
   * @description Specifies which items to be returned by the API. When the `after_key` is specified, the API will return items beginning from the first item after the item specified. This parameter can be used in combination with `limit` to iterate through paginated results.
   */
  after_key?: number;
  /**
   * Before Key
   * @description Specifies which items to be returned by the API. When the `before_key` is specified, the API will return items beginning from the first item before the item specified. This parameter can be used in combination with `limit` to iterate through paginated results.
   */
  before_key?: string;
  /**
   * End Added At
   * @description The `start_added_at` and `end_added_at` parameters are used to set a time window. IP addresses that were added to your account in the specified time window will be returned. The `end_added_at` parameter sets the end of the time window.
   */
  end_added_at?: number;
  /**
   * Include Region
   * @description Boolean indicating whether or not to return the IP Pool"s region information in the response.
   * @default false
   */
  include_region: boolean;
  /**
   * Ip
   * @description Specifies an IP address. The `ip` query parameter can be used to filter results by IP address.
   */
  ip?: string;
  /**
   * Is Enabled
   * @description Indicates if the IP address is billed and able to send email. This parameter applies to non-Twilio SendGrid APIs that been added to your Twilio SendGrid account. This parameter"s value is `null` for Twilio SendGrid IP addresses.
   */
  is_enabled?: boolean;
  /**
   * Is Leased
   * @description Indicates whether an IP address is leased from Twilio SendGrid. If `false`, the IP address is not a Twilio SendGrid IP; it is a customer"s own IP that has been added to their Twilio SendGrid account.
   */
  is_leased?: boolean;
  /**
   * Is Parent Assigned
   * @description A parent must be assigned to an IP address before the parent can send mail from the IP and before the address can be assigned to an IP pool. Set this parameter value to true to allow the parent to send mail from the IP and make the IP eligible for IP pool assignment using the IP pool endpoints.
   */
  is_parent_assigned?: boolean;
  /**
   * Limit
   * @description Specifies the number of results to be returned by the API. This parameter can be used in combination with the `before_key` or `after_key` parameters to iterate through paginated results.
   */
  limit?: number;
  /**
   * Pool
   * @description Specifies the unique ID for an IP Pool. When included, only IP addresses belonging to the specified Pool will be returned.
   */
  pool?: string;
  /**
   * Region
   * @description Allowed values are `all`, `eu`, and `us`. If you provide a specific region, results will include all pools that have at least one IP in the filtered region. If `all`, pools with at least one IP (regardless of region) will be returned. If the `region` filter is not provided, the query returns all pools, including empty ones.
   * @enum {string}
   */
  region?: "all" | "eu" | "us";
  /**
   * Start Added At
   * @description The `start_added_at` and `end_added_at` parameters are used to set a time window. IP addresses that were added to your account in the specified time window will be returned. The `start_added_at` parameter sets the beginning of the time window.
   */
  start_added_at?: number;
};

/**
 * Type of SENDGRID's SENDGRID_GET_A_LIST_OF_ALL_IP_ADDRESSES_ON_YOUR_ACCOUNT tool output.
 */
type SENDGRID_GET_A_LIST_OF_ALL_IP_ADDRESSES_ON_YOUR_ACCOUNT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_A_LIST_OF_ALL_SENDERS tool input.
 */
type SENDGRID_GET_A_LIST_OF_ALL_SENDERS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_GET_A_LIST_OF_ALL_SENDERS tool output.
 */
type SENDGRID_GET_A_LIST_OF_ALL_SENDERS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_A_LIST_OF_SUBUSERS_ASSIGNED_TO_AN_IP tool input.
 */
type SENDGRID_GET_A_LIST_OF_SUBUSERS_ASSIGNED_TO_AN_IP_INPUT = {
  /**
   * After Key
   * @description Specifies which items to be returned by the API. When the `after_key` is specified, the API will return items beginning from the first item after the item specified. This parameter can be used in combination with `limit` to iterate through paginated results.
   */
  after_key?: number;
  /**
   * Ip
   * @description The `ip` path parameter specifies an IP address to make the request against.
   */
  ip?: string;
  /**
   * Limit
   * @description Specifies the number of results to be returned by the API. This parameter can be used in combination with the `after_key` parameters to iterate through paginated results. The maximum limit is 100.
   */
  limit?: number;
};

/**
 * Type of SENDGRID's SENDGRID_GET_A_LIST_OF_SUBUSERS_ASSIGNED_TO_AN_IP tool output.
 */
type SENDGRID_GET_A_LIST_OF_SUBUSERS_ASSIGNED_TO_AN_IP_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_A_SPECIFIC_SENDER tool input.
 */
type SENDGRID_GET_A_SPECIFIC_SENDER_INPUT = {
  /**
   * Id
   * @description The unique identifier of the Sender.
   */
  id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_GET_A_SPECIFIC_SENDER tool output.
 */
type SENDGRID_GET_A_SPECIFIC_SENDER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_A_USER_S_ACCOUNT_INFORMATION tool input.
 */
type SENDGRID_GET_A_USER_S_ACCOUNT_INFORMATION_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_GET_A_USER_S_ACCOUNT_INFORMATION tool output.
 */
type SENDGRID_GET_A_USER_S_ACCOUNT_INFORMATION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_A_USER_S_PROFILE tool input.
 */
type SENDGRID_GET_A_USER_S_PROFILE_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_GET_A_USER_S_PROFILE tool output.
 */
type SENDGRID_GET_A_USER_S_PROFILE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_BATCHED_CONTACTS_BY_IDS tool input.
 */
type SENDGRID_GET_BATCHED_CONTACTS_BY_IDS_INPUT = {
  /**
   * Ids
   * @description Ids
   */
  ids?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_GET_BATCHED_CONTACTS_BY_IDS tool output.
 */
type SENDGRID_GET_BATCHED_CONTACTS_BY_IDS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_BOUNCE_CLASS_STATS tool input.
 */
type SENDGRID_GET_BOUNCE_CLASS_STATS_INPUT = {
  /**
   * Classification
   * @description The classification you want to filter by. Possible values are: `Content`, `Frequency or Volume Too High`, `Invalid Address`, `Mailbox Unavailable`, `Reputation`, `Technical Failure`, `Unclassified`.
   * @enum {string}
   */
  classification?: "Content" | "Frequency or Volume Too High" | "Invalid Address" | "Mailbox Unavailable" | "Reputation" | "Technical Failure" | "Unclassified";
  /**
   * End Date
   * @description The end of the time range, in YYYY-MM-DD format, when a bounce was created (inclusive).
   */
  end_date?: string;
  /**
   * Start Date
   * @description The start of the time range, in YYYY-MM-DD format, when a bounce was created (inclusive).
   */
  start_date?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_BOUNCE_CLASS_STATS tool output.
 */
type SENDGRID_GET_BOUNCE_CLASS_STATS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_CONTACTS_BY_EMAILS tool input.
 */
type SENDGRID_GET_CONTACTS_BY_EMAILS_INPUT = {
  /**
   * Anonymous Id
   * @description The contact"s Anonymous ID.
   */
  anonymous_id?: string;
  /**
   * Emails
   * @description One or more primary and/or alternate email addresses to search for in your Marketing Campaigns contacts.
   */
  emails?: string[];
  /**
   * External Id
   * @description The contact"s External ID.
   */
  external_id?: string;
  /**
   * Phone Number Id
   * @description The contact"s Phone Number ID. This is required to be a valid phone number.
   */
  phone_number_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_CONTACTS_BY_EMAILS tool output.
 */
type SENDGRID_GET_CONTACTS_BY_EMAILS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_CONTACTS_BY_IDENTIFIERS tool input.
 */
type SENDGRID_GET_CONTACTS_BY_IDENTIFIERS_INPUT = {
  /**
   * Identifier Type
   * @description The type of identifier to search for.
   * @enum {string}
   */
  identifier_type?: "email" | "phone_number_id" | "external_id" | "anonymous_id";
  /**
   * Identifiers
   * @description One or more more identifier values to search for in your Marketing Campaigns contacts.
   */
  identifiers?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_GET_CONTACTS_BY_IDENTIFIERS tool output.
 */
type SENDGRID_GET_CONTACTS_BY_IDENTIFIERS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_DESIGN tool input.
 */
type SENDGRID_GET_DESIGN_INPUT = {
  /**
   * Id
   * @description The ID of the Design you want to duplicate.
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_DESIGN tool output.
 */
type SENDGRID_GET_DESIGN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_DETAILS_FOR_AN_IP_ADDRESS tool input.
 */
type SENDGRID_GET_DETAILS_FOR_AN_IP_ADDRESS_INPUT = {
  /**
   * Include Region
   * @description Boolean indicating whether or not to return the IP Pool"s region information in the response.
   * @default false
   */
  include_region: boolean;
  /**
   * Ip
   * @description The `ip` path parameter specifies an IP address to make the request against.
   */
  ip?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_DETAILS_FOR_AN_IP_ADDRESS tool output.
 */
type SENDGRID_GET_DETAILS_FOR_AN_IP_ADDRESS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_DETAILS_FOR_AN_IP_POOL tool input.
 */
type SENDGRID_GET_DETAILS_FOR_AN_IP_POOL_INPUT = {
  /**
   * Include Region
   * @description Boolean indicating whether or not to return the IP Pool"s region information in the response.
   * @default false
   */
  include_region: boolean;
  /**
   * Poolid
   * @description Specifies the unique ID for an IP Pool.
   */
  poolid?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_DETAILS_FOR_AN_IP_POOL tool output.
 */
type SENDGRID_GET_DETAILS_FOR_AN_IP_POOL_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ENGAGEMENT_QUALITY_SCORES tool input.
 */
type SENDGRID_GET_ENGAGEMENT_QUALITY_SCORES_INPUT = {
  /**
   * From
   * @description The starting date in YYYY-MM-DD format (UTC) for which you want to retrieve scores.
   */
  from?: string;
  /**
   * To
   * @description The ending date in YYYY-MM-DD format (UTC) for which you want to retrieve scores.
   */
  to?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_ENGAGEMENT_QUALITY_SCORES tool output.
 */
type SENDGRID_GET_ENGAGEMENT_QUALITY_SCORES_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_INFORMATION_ON_A_SINGLE_SUPPRESSION_GROUP tool input.
 */
type SENDGRID_GET_INFORMATION_ON_A_SINGLE_SUPPRESSION_GROUP_INPUT = {
  /**
   * Group Id
   * @description The ID of the suppression group you would like to retrieve.
   */
  group_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_INFORMATION_ON_A_SINGLE_SUPPRESSION_GROUP tool output.
 */
type SENDGRID_GET_INFORMATION_ON_A_SINGLE_SUPPRESSION_GROUP_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_INTEGRATION tool input.
 */
type SENDGRID_GET_INTEGRATION_INPUT = {
  /**
   * Id
   * @description The ID of the Integration you would like to retrieve.
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_INTEGRATION tool output.
 */
type SENDGRID_GET_INTEGRATION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_IPS_ASSIGNED_TO_AN_IP_POOL tool input.
 */
type SENDGRID_GET_IPS_ASSIGNED_TO_AN_IP_POOL_INPUT = {
  /**
   * After Key
   * @description Specifies which items to be returned by the API. When the `after_key` is specified, the API will return items beginning from the first item after the item specified. This parameter can be used in combination with `limit` to iterate through paginated results.
   */
  after_key?: number;
  /**
   * Include Region
   * @description Boolean indicating whether or not to return the IP Pool"s region information in the response.
   * @default false
   */
  include_region: boolean;
  /**
   * Limit
   * @description Specifies the number of results to be returned by the API. This parameter can be used in combination with the `before_key` or `after_key` parameters to iterate through paginated results.
   */
  limit?: number;
  /**
   * Poolid
   * @description Specifies the unique ID for an IP Pool.
   */
  poolid?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_IPS_ASSIGNED_TO_AN_IP_POOL tool output.
 */
type SENDGRID_GET_IPS_ASSIGNED_TO_AN_IP_POOL_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_LIST_CONTACT_COUNT tool input.
 */
type SENDGRID_GET_LIST_CONTACT_COUNT_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_LIST_CONTACT_COUNT tool output.
 */
type SENDGRID_GET_LIST_CONTACT_COUNT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_LIST_OF_SEGMENTS tool input.
 */
type SENDGRID_GET_LIST_OF_SEGMENTS_INPUT = {
  /**
   * Ids
   * @description A list of segment IDs to retrieve. When this parameter is included, the `no_parent_list_ids` and `parent_list_ids` parameters are ignored and only segments with given IDs are returned.
   */
  ids?: string[];
  /**
   * No Parent List Id
   * @description If set to `true` segments with an empty value of `parent_list_id` will be returned in the filter.  If the value is not present it defaults to "false".
   * @default false
   */
  no_parent_list_id: boolean;
  /**
   * Parent List Ids
   * @description A comma separated list of list ids to be used when searching for segments with the specified parent_list_id, no more than 50 is allowed
   */
  parent_list_ids?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_LIST_OF_SEGMENTS tool output.
 */
type SENDGRID_GET_LIST_OF_SEGMENTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_OPEN_TRACKING_SETTINGS tool input.
 */
type SENDGRID_GET_OPEN_TRACKING_SETTINGS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_GET_OPEN_TRACKING_SETTINGS tool output.
 */
type SENDGRID_GET_OPEN_TRACKING_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_RECIPIENT_UPLOAD_STATUS tool input.
 */
type SENDGRID_GET_RECIPIENT_UPLOAD_STATUS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_GET_RECIPIENT_UPLOAD_STATUS tool output.
 */
type SENDGRID_GET_RECIPIENT_UPLOAD_STATUS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_REMAINING_IPS_COUNT tool input.
 */
type SENDGRID_GET_REMAINING_IPS_COUNT_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_GET_REMAINING_IPS_COUNT tool output.
 */
type SENDGRID_GET_REMAINING_IPS_COUNT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SAMPLE_CONTACTS tool input.
 */
type SENDGRID_GET_SAMPLE_CONTACTS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_GET_SAMPLE_CONTACTS tool output.
 */
type SENDGRID_GET_SAMPLE_CONTACTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SEGMENT_BY_ID tool input.
 */
type SENDGRID_GET_SEGMENT_BY_ID_INPUT = {
  /**
   * Contacts Sample
   * @description Defaults to `true`. Set to `false` to exclude the contacts_sample in the response.
   */
  contacts_sample?: boolean;
  /**
   * Segment Id
   * @description Segment Id
   */
  segment_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SEGMENT_BY_ID tool output.
 */
type SENDGRID_GET_SEGMENT_BY_ID_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SEND_GRID_PRE_BUILT_DESIGN tool input.
 */
type SENDGRID_GET_SEND_GRID_PRE_BUILT_DESIGN_INPUT = {
  /**
   * Id
   * @description The ID of the pre-built Design you want to duplicate.
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SEND_GRID_PRE_BUILT_DESIGN tool output.
 */
type SENDGRID_GET_SEND_GRID_PRE_BUILT_DESIGN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SIGNED_EVENT_WEBHOOK_S_PUBLIC_KEY tool input.
 */
type SENDGRID_GET_SIGNED_EVENT_WEBHOOK_S_PUBLIC_KEY_INPUT = {
  /**
   * Id
   * @description The ID of the Event Webhook you want to retrieve.
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SIGNED_EVENT_WEBHOOK_S_PUBLIC_KEY tool output.
 */
type SENDGRID_GET_SIGNED_EVENT_WEBHOOK_S_PUBLIC_KEY_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SINGLE_SENDS_SEARCH tool input.
 */
type SENDGRID_GET_SINGLE_SENDS_SEARCH_INPUT = {
  /**
   * Categories
   * @description categories to associate with this Single Send, match any single send that has at least one of the categories
   */
  categories?: string[];
  /**
   * Name
   * @description leading and trailing wildcard search on name of the Single Send
   */
  name?: string;
  /**
   * Page Size
   * @description Page Size
   */
  page_size?: number;
  /**
   * Page Token
   * @description Page Token
   */
  page_token?: string;
  /**
   * Status
   * @description current status of the Single Send
   */
  status?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_GET_SINGLE_SENDS_SEARCH tool output.
 */
type SENDGRID_GET_SINGLE_SENDS_SEARCH_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SINGLE_SEND_BY_ID tool input.
 */
type SENDGRID_GET_SINGLE_SEND_BY_ID_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SINGLE_SEND_BY_ID tool output.
 */
type SENDGRID_GET_SINGLE_SEND_BY_ID_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SINGLE_SEND_CLICK_TRACKING_STATS_BY_ID tool input.
 */
type SENDGRID_GET_SINGLE_SEND_CLICK_TRACKING_STATS_BY_ID_INPUT = {
  /**
   * Ab Phase Id
   * @description Ab Phase Id
   * @enum {string}
   */
  ab_phase_id?: "test" | "send";
  /**
   * Ab Variation Id
   * @description Ab Variation Id
   */
  ab_variation_id?: string;
  /**
   * Group By
   * @description A/B Single Sends have multiple variation IDs and phase IDs. Including these additional fields allows further granularity of stats by these fields.
   */
  group_by?: string[];
  /**
   * Id
   * @description The ID of Single Send for which you want to retrieve link stats.
   */
  id?: string;
  /**
   * Page Size
   * @description The number of elements you want returned on each page.
   * @default 25
   */
  page_size: number;
  /**
   * Page Token
   * @description The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn"t exist, you"re at the first page. Similarly, if `_metadata.next` is not present, you"re at the last page.
   */
  page_token?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SINGLE_SEND_CLICK_TRACKING_STATS_BY_ID tool output.
 */
type SENDGRID_GET_SINGLE_SEND_CLICK_TRACKING_STATS_BY_ID_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SINGLE_SEND_STATS_BY_ID tool input.
 */
type SENDGRID_GET_SINGLE_SEND_STATS_BY_ID_INPUT = {
  /**
   * Aggregated By
   * @description Dictates how the stats are time-sliced. Currently, `"total"` and `"day"` are supported.
   * @enum {string}
   */
  aggregated_by?: "day" | "week" | "month";
  /**
   * End Date
   * @description Format: `YYYY-MM-DD`.If this parameter is included, the stats" end date is included in the search.
   * @default 2021-12-31
   */
  end_date: string;
  /**
   * Group By
   * @description A/B Single Sends have multiple variation IDs and phase IDs. Including these additional fields allows further granularity of stats by these fields.
   */
  group_by?: string[];
  /**
   * Id
   * @description The ID of Single Send for which you want to retrieve stats.
   */
  id?: string;
  /**
   * Page Size
   * @description The number of elements you want returned on each page.
   * @default 25
   */
  page_size: number;
  /**
   * Page Token
   * @description The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn"t exist, you"re at the first page. Similarly, if `_metadata.next` is not present, you"re at the last page.
   */
  page_token?: string;
  /**
   * Start Date
   * @description Format: `YYYY-MM-DD`. If this parameter is included, the stats" start date is included in the search.
   * @default 2021-01-01
   */
  start_date: string;
  /**
   * Timezone
   * @description [IANA Area/Region](https://en.wikipedia.org/wiki/Tz_database#Names_of_timezones) string representing the timezone in which the stats are to be presented, e.g., "America/Chicago".
   * @default UTC
   */
  timezone: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SINGLE_SEND_STATS_BY_ID tool output.
 */
type SENDGRID_GET_SINGLE_SEND_STATS_BY_ID_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SUBUSERS_ENGAGEMENT_QUALITY_SCORES tool input.
 */
type SENDGRID_GET_SUBUSERS_ENGAGEMENT_QUALITY_SCORES_INPUT = {
  /**
   * After Key
   * @description Specifies which items to be returned by the API. When the `after_key` is specified, the API will return items beginning from the first item after the item specified. This parameter can be used in combination with `limit` to iterate through paginated results.
   */
  after_key?: number;
  /**
   * Date
   * @description The date in YYYY-MM-DD format (UTC) for which you want to retrieve a SendGrid Engagement Quality score.
   */
  date?: string;
  /**
   * Limit
   * @description Specifies the number of results to be returned by the API. This parameter can be used to limit the results returned or in combination with the `after_key` parameter to iterate through paginated results.
   * @default 1000
   */
  limit: number;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SUBUSERS_ENGAGEMENT_QUALITY_SCORES tool output.
 */
type SENDGRID_GET_SUBUSERS_ENGAGEMENT_QUALITY_SCORES_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SUBUSER_MONTHLY_STATS tool input.
 */
type SENDGRID_GET_SUBUSER_MONTHLY_STATS_INPUT = {
  /**
   * Date
   * @description The date of the month to retrieve statistics for. Must be formatted YYYY-MM-DD
   */
  date?: string;
  /**
   * Limit
   * @description Optional field to limit the number of results returned.
   * @default 5
   */
  limit: number;
  /**
   * Offset
   * @description Optional beginning point in the list to retrieve from.
   * @default 0
   */
  offset: number;
  /**
   * Sort By Direction
   * @description The direction you want to sort.
   * @enum {string}
   */
  sort_by_direction?: "desc" | "asc";
  /**
   * Sort By Metric
   * @description The metric that you want to sort by. Metrics that you can sort by are: `blocks`, `bounces`, `clicks`, `delivered`, `opens`, `requests`, `unique_clicks`, `unique_opens`, and `unsubscribes`."
   * @default delivered
   */
  sort_by_metric: string;
  /**
   * Subuser Name
   * @description The username of the Subuser.
   */
  subuser_name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SUBUSER_MONTHLY_STATS tool output.
 */
type SENDGRID_GET_SUBUSER_MONTHLY_STATS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SUPPRESSION_GROUPS tool input.
 */
type SENDGRID_GET_SUPPRESSION_GROUPS_INPUT = {
  /**
   * Id
   * @description The ID of the suppression group(s) you want to retrieve.
   */
  id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_GET_SUPPRESSION_GROUPS tool output.
 */
type SENDGRID_GET_SUPPRESSION_GROUPS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_TEAMMATE_SUBUSER_ACCESS tool input.
 */
type SENDGRID_GET_TEAMMATE_SUBUSER_ACCESS_INPUT = {
  /**
   * After Subuser Id
   * @description The Subuser ID from which the API request will begin retrieving Subusers. This query parameter can be used in successive API calls to retrieve additional Subusers.
   */
  after_subuser_id?: number;
  /**
   * Limit
   * @description Limit the number of Subusers to be returned. The default `limit` is `100` per request.
   * @default 100
   */
  limit: number;
  /**
   * Teammate Name
   * @description The username of the Teammate for whom you want to retrieve Subuser access information.
   */
  teammate_name?: string;
  /**
   * Username
   * @description A Subuser"s username that will be used to filter the returned result.
   */
  username?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_TEAMMATE_SUBUSER_ACCESS tool output.
 */
type SENDGRID_GET_TEAMMATE_SUBUSER_ACCESS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_THE_CREDITS_FOR_A_SUBUSER tool input.
 */
type SENDGRID_GET_THE_CREDITS_FOR_A_SUBUSER_INPUT = {
  /**
   * Subuser Name
   * @description The username of the Subuser.
   */
  subuser_name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_THE_CREDITS_FOR_A_SUBUSER tool output.
 */
type SENDGRID_GET_THE_CREDITS_FOR_A_SUBUSER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_THE_DEFAULT_AUTHENTICATION tool input.
 */
type SENDGRID_GET_THE_DEFAULT_AUTHENTICATION_INPUT = {
  /**
   * Domain
   * @description The domain to find a default authentication.
   */
  domain?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_THE_DEFAULT_AUTHENTICATION tool output.
 */
type SENDGRID_GET_THE_DEFAULT_AUTHENTICATION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_THE_SETTINGS_FOR_A_SINGLE_EVENT_WEBHOOK tool input.
 */
type SENDGRID_GET_THE_SETTINGS_FOR_A_SINGLE_EVENT_WEBHOOK_INPUT = {
  /**
   * Id
   * @description The ID of the Event Webhook you want to retrieve.
   */
  id?: string;
  /**
   * Include
   * @description Use this to include optional fields in the response payload. When this is set to `include=account_status_change`, the `account_status_change` field will be part of the response payload and set to `false` by default. See [Update an event webhook](https://docs.sendgrid.com/api-reference/webhooks/update-an-event-webhook) for enabling this webhook notification which lets you subscribe to account status change events related to compliance action taken by SendGrid.
   */
  include?: string;
};

/**
 * Type of SENDGRID's SENDGRID_GET_THE_SETTINGS_FOR_A_SINGLE_EVENT_WEBHOOK tool output.
 */
type SENDGRID_GET_THE_SETTINGS_FOR_A_SINGLE_EVENT_WEBHOOK_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_TOTAL_CONTACT_COUNT tool input.
 */
type SENDGRID_GET_TOTAL_CONTACT_COUNT_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_GET_TOTAL_CONTACT_COUNT tool output.
 */
type SENDGRID_GET_TOTAL_CONTACT_COUNT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_GET_USER_SCOPES tool input.
 */
type SENDGRID_GET_USER_SCOPES_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_GET_USER_SCOPES tool output.
 */
type SENDGRID_GET_USER_SCOPES_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_IMPORT_CONTACTS tool input.
 */
type SENDGRID_IMPORT_CONTACTS_INPUT = {
  /**
   * Field Mappings
   * @description Import file header to reserved/custom field mapping.
   */
  field_mappings?: string[];
  /**
   * File Type
   * @description File Type
   * @enum {string}
   */
  file_type?: "csv";
  /**
   * List Ids
   * @description All contacts will be added to each of the specified lists.
   */
  list_ids?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_IMPORT_CONTACTS tool output.
 */
type SENDGRID_IMPORT_CONTACTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_IMPORT_CONTACTS_STATUS tool input.
 */
type SENDGRID_IMPORT_CONTACTS_STATUS_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_IMPORT_CONTACTS_STATUS tool output.
 */
type SENDGRID_IMPORT_CONTACTS_STATUS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_INVITE_TEAMMATE tool input.
 */
type SENDGRID_INVITE_TEAMMATE_INPUT = {
  /**
   * Email
   * @description New teammate"s email
   */
  email?: string;
  /**
   * Is Admin
   * @description Set to true if teammate should be an admin user
   * @default false
   */
  is_admin: boolean;
  /**
   * Scopes
   * @description Set to specify list of scopes that teammate should have. Should be empty if teammate is an admin.
   */
  scopes?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_INVITE_TEAMMATE tool output.
 */
type SENDGRID_INVITE_TEAMMATE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_LIST_ALL_AUTHENTICATED_DOMAINS tool input.
 */
type SENDGRID_LIST_ALL_AUTHENTICATED_DOMAINS_INPUT = {
  /**
   * Domain
   * @description Search for authenticated domains.
   */
  domain?: string;
  /**
   * Exclude Subusers
   * @description Exclude subuser domains from the result.
   */
  exclude_subusers?: boolean;
  /**
   * Limit
   * @description `limit` sets the page size, i.e. maximum number of items from the list to be returned for a single API request. If omitted, the default page size is used.
   */
  limit?: number;
  /**
   * Offset
   * @description The number of items in the list to skip over before starting to retrieve the items for the requested page. The default `offset` of `0` represents the beginning of the list, i.e. the start of the first page. To request the second page of the list, set the `offset` to the page size as determined by `limit`. Use multiples of the page size as your `offset` to request further consecutive pages. E.g. assume your page size is set to `10`. An `offset` of `10` requests the second page, an `offset` of `20` requests the third page and so on, provided there are sufficiently many items in your list.
   * @default 0
   */
  offset: number;
  /**
   * Username
   * @description The username associated with an authenticated domain.
   */
  username?: string;
};

/**
 * Type of SENDGRID's SENDGRID_LIST_ALL_AUTHENTICATED_DOMAINS tool output.
 */
type SENDGRID_LIST_ALL_AUTHENTICATED_DOMAINS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_LIST_ALL_SUBUSERS tool input.
 */
type SENDGRID_LIST_ALL_SUBUSERS_INPUT = {
  /**
   * Include Region
   * @description Optional flag to include the regions of the Subusers in the response. If not provided, the region will be omitted from the response.
   * @default false
   */
  include_region: boolean;
  /**
   * Limit
   * @description `limit` sets the page size, i.e. maximum number of items from the list to be returned for a single API request. If omitted, the default page size is used.
   */
  limit?: number;
  /**
   * Offset
   * @description The number of items in the list to skip over before starting to retrieve the items for the requested page. The default `offset` of `0` represents the beginning of the list, i.e. the start of the first page. To request the second page of the list, set the `offset` to the page size as determined by `limit`. Use multiples of the page size as your `offset` to request further consecutive pages. E.g. assume your page size is set to `10`. An `offset` of `10` requests the second page, an `offset` of `20` requests the third page and so on, provided there are sufficiently many items in your list.
   * @default 0
   */
  offset: number;
  /**
   * Region
   * @description Filter for Subusers in this region. If not provided, all Subusers will be returned. All users can also be explicitly requested by using the filter `all`. Users who are not pinned to a region will be displayed as `global`.
   * @enum {string}
   */
  region?: "all" | "global" | "eu";
  /**
   * Username
   * @description The username of this subuser.
   */
  username?: string;
};

/**
 * Type of SENDGRID's SENDGRID_LIST_ALL_SUBUSERS tool output.
 */
type SENDGRID_LIST_ALL_SUBUSERS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_LIST_API_KEYS tool input.
 */
type SENDGRID_LIST_API_KEYS_INPUT = {
  /**
   * Limit
   * @description Limit
   */
  limit?: number;
};

/**
 * Type of SENDGRID's SENDGRID_LIST_API_KEYS tool output.
 */
type SENDGRID_LIST_API_KEYS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_LIST_BULK_EMAIL_VALIDATION_JOBS tool input.
 */
type SENDGRID_LIST_BULK_EMAIL_VALIDATION_JOBS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_LIST_BULK_EMAIL_VALIDATION_JOBS tool output.
 */
type SENDGRID_LIST_BULK_EMAIL_VALIDATION_JOBS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_LIST_DESIGNS tool input.
 */
type SENDGRID_LIST_DESIGNS_INPUT = {
  /**
   * Page Size
   * @description number of results to return
   * @default 100
   */
  page_size: number;
  /**
   * Page Token
   * @description token corresponding to a specific page of results, as provided by metadata
   */
  page_token?: string;
  /**
   * Summary
   * @description set to false to return all fields
   * @default true
   */
  summary: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_LIST_DESIGNS tool output.
 */
type SENDGRID_LIST_DESIGNS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_LIST_INTEGRATION tool input.
 */
type SENDGRID_LIST_INTEGRATION_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_LIST_INTEGRATION tool output.
 */
type SENDGRID_LIST_INTEGRATION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_LIST_SEND_GRID_PRE_BUILT_DESIGNS tool input.
 */
type SENDGRID_LIST_SEND_GRID_PRE_BUILT_DESIGNS_INPUT = {
  /**
   * Page Size
   * @description number of results to return
   * @default 100
   */
  page_size: number;
  /**
   * Page Token
   * @description token corresponding to a specific page of results, as provided by metadata
   */
  page_token?: string;
  /**
   * Summary
   * @description set to false to return all fields
   * @default true
   */
  summary: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_LIST_SEND_GRID_PRE_BUILT_DESIGNS tool output.
 */
type SENDGRID_LIST_SEND_GRID_PRE_BUILT_DESIGNS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_LIST_USER_AUTH_DOMAINS tool input.
 */
type SENDGRID_LIST_USER_AUTH_DOMAINS_INPUT = {
  /**
   * Username
   * @description Username for the subuser to find associated authenticated domain.
   */
  username?: string;
};

/**
 * Type of SENDGRID's SENDGRID_LIST_USER_AUTH_DOMAINS tool output.
 */
type SENDGRID_LIST_USER_AUTH_DOMAINS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_MANUALLY_REFRESH_A_SEGMENT tool input.
 */
type SENDGRID_MANUALLY_REFRESH_A_SEGMENT_INPUT = {
  /**
   * Segment Id
   * @description Segment Id
   */
  segment_id?: string;
  /**
   * User Time Zone
   * @description The user"s timezone. The timezone is used to reset the refresh count at midnight in the user"s local time. Only [IANA time zone format](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) is accepted.
   */
  user_time_zone?: string;
};

/**
 * Type of SENDGRID's SENDGRID_MANUALLY_REFRESH_A_SEGMENT tool output.
 */
type SENDGRID_MANUALLY_REFRESH_A_SEGMENT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_PRESIGNED_URL_HEADERS_FOR_BULK_EMAIL_VALIDATION tool input.
 */
type SENDGRID_PRESIGNED_URL_HEADERS_FOR_BULK_EMAIL_VALIDATION_INPUT = {
  /**
   * File Type
   * @description File Type
   * @enum {string}
   */
  file_type?: "csv" | "json";
};

/**
 * Type of SENDGRID's SENDGRID_PRESIGNED_URL_HEADERS_FOR_BULK_EMAIL_VALIDATION tool output.
 */
type SENDGRID_PRESIGNED_URL_HEADERS_FOR_BULK_EMAIL_VALIDATION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_REMOVE_AN_IP_ADDRESS_FROM_A_POOL tool input.
 */
type SENDGRID_REMOVE_AN_IP_ADDRESS_FROM_A_POOL_INPUT = {
  /**
   * Ip
   * @description The IP address that you wish to remove.
   */
  ip?: string;
  /**
   * Pool Name
   * @description The name of the IP pool that you are removing the IP address from.
   */
  pool_name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_REMOVE_AN_IP_ADDRESS_FROM_A_POOL tool output.
 */
type SENDGRID_REMOVE_AN_IP_ADDRESS_FROM_A_POOL_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_REMOVE_AN_IP_FROM_AN_AUTHENTICATED_DOMAIN tool input.
 */
type SENDGRID_REMOVE_AN_IP_FROM_AN_AUTHENTICATED_DOMAIN_INPUT = {
  /**
   * Id
   * @description ID of the domain to delete the IP from.
   */
  id?: number;
  /**
   * Ip
   * @description IP to remove from the domain.
   */
  ip?: string;
};

/**
 * Type of SENDGRID's SENDGRID_REMOVE_AN_IP_FROM_AN_AUTHENTICATED_DOMAIN tool output.
 */
type SENDGRID_REMOVE_AN_IP_FROM_AN_AUTHENTICATED_DOMAIN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_REMOVE_A_SPECIFIC_IP_FROM_THE_ALLOWED_LIST tool input.
 */
type SENDGRID_REMOVE_A_SPECIFIC_IP_FROM_THE_ALLOWED_LIST_INPUT = {
  /**
   * Rule Id
   * @description The ID of the allowed IP address that you want to retrieve.
   */
  rule_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_REMOVE_A_SPECIFIC_IP_FROM_THE_ALLOWED_LIST tool output.
 */
type SENDGRID_REMOVE_A_SPECIFIC_IP_FROM_THE_ALLOWED_LIST_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_REMOVE_CONTACTS_FROM_A_LIST tool input.
 */
type SENDGRID_REMOVE_CONTACTS_FROM_A_LIST_INPUT = {
  /**
   * Contact Ids
   * @description Comma separated list of contact IDs that you want to remove from the specified contacts list.
   */
  contact_ids?: string;
  /**
   * Id
   * @description The ID of the list on which you want to perform the operation.
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_REMOVE_CONTACTS_FROM_A_LIST tool output.
 */
type SENDGRID_REMOVE_CONTACTS_FROM_A_LIST_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_REMOVE_LIST_AND_OPTIONAL_CONTACTS tool input.
 */
type SENDGRID_REMOVE_LIST_AND_OPTIONAL_CONTACTS_INPUT = {
  /**
   * Delete Contacts
   * @description Flag indicates that all contacts on the list are also to be deleted.
   * @default false
   */
  delete_contacts: boolean;
  /**
   * Id
   * @description The ID of the list on which you want to perform the operation.
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_REMOVE_LIST_AND_OPTIONAL_CONTACTS tool output.
 */
type SENDGRID_REMOVE_LIST_AND_OPTIONAL_CONTACTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_REMOVE_ONE_OR_MORE_IPS_FROM_THE_ALLOW_LIST tool input.
 */
type SENDGRID_REMOVE_ONE_OR_MORE_IPS_FROM_THE_ALLOW_LIST_INPUT = {
  /**
   * Ids
   * @description An array of the IDs of the IP address that you want to remove from your allow list.
   */
  ids?: number[];
};

/**
 * Type of SENDGRID's SENDGRID_REMOVE_ONE_OR_MORE_IPS_FROM_THE_ALLOW_LIST tool output.
 */
type SENDGRID_REMOVE_ONE_OR_MORE_IPS_FROM_THE_ALLOW_LIST_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_REMOVE_SEGMENT_WITHOUT_AFFECTING_CONTACTS tool input.
 */
type SENDGRID_REMOVE_SEGMENT_WITHOUT_AFFECTING_CONTACTS_INPUT = {
  /**
   * Segment Id
   * @description Segment Id
   */
  segment_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_REMOVE_SEGMENT_WITHOUT_AFFECTING_CONTACTS tool output.
 */
type SENDGRID_REMOVE_SEGMENT_WITHOUT_AFFECTING_CONTACTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RENAME_AN_IP_POOL tool input.
 */
type SENDGRID_RENAME_AN_IP_POOL_INPUT = {
  /**
   * Name
   * @description The new name for your IP pool.
   */
  name?: string;
  /**
   * Pool Name
   * @description The name of the IP pool that you want to retrieve the IP addresses for.
   */
  pool_name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RENAME_AN_IP_POOL tool output.
 */
type SENDGRID_RENAME_AN_IP_POOL_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_REQUEST_CSV tool input.
 */
type SENDGRID_REQUEST_CSV_INPUT = {
  /**
   * Query
   * @description Uses a SQL like syntax to indicate which messages to include in the CSV
   */
  query?: string;
};

/**
 * Type of SENDGRID's SENDGRID_REQUEST_CSV tool output.
 */
type SENDGRID_REQUEST_CSV_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RESEND_A_SENDER_VERIFICATION tool input.
 */
type SENDGRID_RESEND_A_SENDER_VERIFICATION_INPUT = {
  /**
   * Id
   * @description The unique identifier of the Sender.
   */
  id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_RESEND_A_SENDER_VERIFICATION tool output.
 */
type SENDGRID_RESEND_A_SENDER_VERIFICATION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RESEND_SENDER_IDENTITY_VERIFICATION tool input.
 */
type SENDGRID_RESEND_SENDER_IDENTITY_VERIFICATION_INPUT = {
  /**
   * Sender Id
   * @description The ID of the sender identity for which you would like to resend a verification email.
   */
  sender_id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_RESEND_SENDER_IDENTITY_VERIFICATION tool output.
 */
type SENDGRID_RESEND_SENDER_IDENTITY_VERIFICATION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RESEND_TEAMMATE_INVITE tool input.
 */
type SENDGRID_RESEND_TEAMMATE_INVITE_INPUT = {
  /**
   * Token
   * @description The token for the invite that you want to resend.
   */
  token?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RESEND_TEAMMATE_INVITE tool output.
 */
type SENDGRID_RESEND_TEAMMATE_INVITE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RESEND_VERIFIED_SENDER_REQUEST tool input.
 */
type SENDGRID_RESEND_VERIFIED_SENDER_REQUEST_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RESEND_VERIFIED_SENDER_REQUEST tool output.
 */
type SENDGRID_RESEND_VERIFIED_SENDER_REQUEST_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVES_INBOUND_PARSE_WEBHOOK_STATISTICS tool input.
 */
type SENDGRID_RETRIEVES_INBOUND_PARSE_WEBHOOK_STATISTICS_INPUT = {
  /**
   * Aggregated By
   * @description How you would like the statistics to by grouped.
   * @enum {string}
   */
  aggregated_by?: "day" | "week" | "month";
  /**
   * End Date
   * @description The end date of the statistics you want to retrieve. Must be in the format YYYY-MM-DD
   * @default The day the request is made.
   */
  end_date: string;
  /**
   * Limit
   * @description The number of statistics to return on each page.
   */
  limit?: string;
  /**
   * Offset
   * @description The number of statistics to skip.
   */
  offset?: string;
  /**
   * Start Date
   * @description The starting date of the statistics you want to retrieve. Must be in the format YYYY-MM-DD
   */
  start_date?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVES_INBOUND_PARSE_WEBHOOK_STATISTICS tool output.
 */
type SENDGRID_RETRIEVES_INBOUND_PARSE_WEBHOOK_STATISTICS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ACCESS_REQUESTS tool input.
 */
type SENDGRID_RETRIEVE_ACCESS_REQUESTS_INPUT = {
  /**
   * Limit
   * @description `limit` sets the page size, i.e. maximum number of items from the list to be returned for a single API request. If omitted, the default page size is used.
   * @default 50
   */
  limit: number;
  /**
   * Offset
   * @description The number of items in the list to skip over before starting to retrieve the items for the requested page. The default `offset` of `0` represents the beginning of the list, i.e. the start of the first page. To request the second page of the list, set the `offset` to the page size as determined by `limit`. Use multiples of the page size as your `offset` to request further consecutive pages. E.g. assume your page size is set to `10`. An `offset` of `10` requests the second page, an `offset` of `20` requests the third page and so on, provided there are sufficiently many items in your list.
   * @default 0
   */
  offset: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ACCESS_REQUESTS tool output.
 */
type SENDGRID_RETRIEVE_ACCESS_REQUESTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ADDRESS_WHITELIST_MAIL_SETTINGS tool input.
 */
type SENDGRID_RETRIEVE_ADDRESS_WHITELIST_MAIL_SETTINGS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ADDRESS_WHITELIST_MAIL_SETTINGS tool output.
 */
type SENDGRID_RETRIEVE_ADDRESS_WHITELIST_MAIL_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_ALERTS tool input.
 */
type SENDGRID_RETRIEVE_ALL_ALERTS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_ALERTS tool output.
 */
type SENDGRID_RETRIEVE_ALL_ALERTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_ASSIGNED_IPS tool input.
 */
type SENDGRID_RETRIEVE_ALL_ASSIGNED_IPS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_ASSIGNED_IPS tool output.
 */
type SENDGRID_RETRIEVE_ALL_ASSIGNED_IPS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_BLOCKS tool input.
 */
type SENDGRID_RETRIEVE_ALL_BLOCKS_INPUT = {
  /**
   * Email
   * @description Specifies which records to return based on the records" associated email addresses. For example, `sales` returns records with email addresses that start with "sales", such as `salesdepartment@example.com` or `sales@example.com`.  You can also use `%25` as a wildcard. For example, `%25market` returns records containing email addresses with the string "market" anywhere in the email address, and `%25market%25tree` returns records containing email addresses with the string "market" followed by the string "tree". Any reserved characters should be [percent-encoded](https://en.wikipedia.org/wiki/Percent-encoding#Reserved_characters), e.g., the `@` symbol should be encoded as `%40`.
   */
  email?: string;
  /**
   * End Time
   * @description The end of the time range when a blocked email was created (inclusive). This is a unix timestamp.
   */
  end_time?: number;
  /**
   * Limit
   * @description `limit` sets the page size, i.e. maximum number of items from the list to be returned for a single API request. If omitted, the default page size is used. The maximum page size for this endpoint is 500 items per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The number of items in the list to skip over before starting to retrieve the items for the requested page. The default `offset` of `0` represents the beginning of the list, i.e. the start of the first page. To request the second page of the list, set the `offset` to the page size as determined by `limit`. Use multiples of the page size as your `offset` to request further consecutive pages. E.g. assume your page size is set to `10`. An `offset` of `10` requests the second page, an `offset` of `20` requests the third page and so on, provided there are sufficiently many items in your list.
   * @default 0
   */
  offset: number;
  /**
   * Start Time
   * @description The start of the time range when a blocked email was created (inclusive). This is a unix timestamp.
   */
  start_time?: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_BLOCKS tool output.
 */
type SENDGRID_RETRIEVE_ALL_BLOCKS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_BOUNCES tool input.
 */
type SENDGRID_RETRIEVE_ALL_BOUNCES_INPUT = {
  /**
   * Email
   * @description Specifies which records to return based on the records" associated email addresses. For example, `sales` returns records with email addresses that start with "sales", such as `salesdepartment@example.com` or `sales@example.com`.  You can also use `%25` as a wildcard. For example, `%25market` returns records containing email addresses with the string "market" anywhere in the email address, and `%25market%25tree` returns records containing email addresses with the string "market" followed by the string "tree". Any reserved characters should be [percent-encoded](https://en.wikipedia.org/wiki/Percent-encoding#Reserved_characters), e.g., the `@` symbol should be encoded as `%40`.
   */
  email?: string;
  /**
   * End Time
   * @description Refers end of the time range in unix timestamp when a bounce was created (inclusive).
   */
  end_time?: number;
  /**
   * Limit
   * @description `limit` sets the page size, i.e. maximum number of items from the list to be returned for a single API request. If omitted, the default page size is used. The maximum page size for this endpoint is 500 items per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The number of items in the list to skip over before starting to retrieve the items for the requested page. The default `offset` of `0` represents the beginning of the list, i.e. the start of the first page. To request the second page of the list, set the `offset` to the page size as determined by `limit`. Use multiples of the page size as your `offset` to request further consecutive pages. E.g. assume your page size is set to `10`. An `offset` of `10` requests the second page, an `offset` of `20` requests the third page and so on, provided there are sufficiently many items in your list.
   * @default 0
   */
  offset: number;
  /**
   * Start Time
   * @description Refers start of the time range in unix timestamp when a bounce was created (inclusive).
   */
  start_time?: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_BOUNCES tool output.
 */
type SENDGRID_RETRIEVE_ALL_BOUNCES_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_BRANDED_LINKS tool input.
 */
type SENDGRID_RETRIEVE_ALL_BRANDED_LINKS_INPUT = {
  /**
   * Limit
   * @description Limits the number of results returned per page.
   */
  limit?: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_BRANDED_LINKS tool output.
 */
type SENDGRID_RETRIEVE_ALL_BRANDED_LINKS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_CAMPAIGNS tool input.
 */
type SENDGRID_RETRIEVE_ALL_CAMPAIGNS_INPUT = {
  /**
   * Limit
   * @description `limit` sets the page size, i.e. maximum number of items from the list to be returned for a single API request. If omitted, the default page size is used.
   * @default 10
   */
  limit: number;
  /**
   * Offset
   * @description The number of items in the list to skip over before starting to retrieve the items for the requested page. The default `offset` of `0` represents the beginning of the list, i.e. the start of the first page. To request the second page of the list, set the `offset` to the page size as determined by `limit`. Use multiples of the page size as your `offset` to request further consecutive pages. E.g. assume your page size is set to `10`. An `offset` of `10` requests the second page, an `offset` of `20` requests the third page and so on, provided there are sufficiently many items in your list.
   * @default 0
   */
  offset: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_CAMPAIGNS tool output.
 */
type SENDGRID_RETRIEVE_ALL_CAMPAIGNS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_CATEGORIES tool input.
 */
type SENDGRID_RETRIEVE_ALL_CATEGORIES_INPUT = {
  /**
   * Category
   * @description Allows you to perform a prefix search on this particular category.
   */
  category?: string;
  /**
   * Limit
   * @description `limit` sets the page size, i.e. maximum number of items from the list to be returned for a single API request. If omitted, the default page size is used.
   * @default 50
   */
  limit: number;
  /**
   * Offset
   * @description The number of items in the list to skip over before starting to retrieve the items for the requested page. The default `offset` of `0` represents the beginning of the list, i.e. the start of the first page. To request the second page of the list, set the `offset` to the page size as determined by `limit`. Use multiples of the page size as your `offset` to request further consecutive pages. E.g. assume your page size is set to `10`. An `offset` of `10` requests the second page, an `offset` of `20` requests the third page and so on, provided there are sufficiently many items in your list.
   * @default 0
   */
  offset: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_CATEGORIES tool output.
 */
type SENDGRID_RETRIEVE_ALL_CATEGORIES_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_CUSTOM_FIELDS tool input.
 */
type SENDGRID_RETRIEVE_ALL_CUSTOM_FIELDS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_CUSTOM_FIELDS tool output.
 */
type SENDGRID_RETRIEVE_ALL_CUSTOM_FIELDS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_GLOBAL_SUPPRESSIONS tool input.
 */
type SENDGRID_RETRIEVE_ALL_GLOBAL_SUPPRESSIONS_INPUT = {
  /**
   * Email
   * @description Specifies which records to return based on the records" associated email addresses. For example, `sales` returns records with email addresses that start with "sales", such as `salesdepartment@example.com` or `sales@example.com`.  You can also use `%25` as a wildcard. For example, `%25market` returns records containing email addresses with the string "market" anywhere in the email address, and `%25market%25tree` returns records containing email addresses with the string "market" followed by the string "tree". Any reserved characters should be [percent-encoded](https://en.wikipedia.org/wiki/Percent-encoding#Reserved_characters), e.g., the `@` symbol should be encoded as `%40`.
   */
  email?: string;
  /**
   * End Time
   * @description Refers end of the time range in unix timestamp when an unsubscribe email was created (inclusive).
   */
  end_time?: number;
  /**
   * Limit
   * @description `limit` sets the page size, i.e. maximum number of items from the list to be returned for a single API request. If omitted, the default page size is used. The maximum page size for this endpoint is 500 items per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The number of items in the list to skip over before starting to retrieve the items for the requested page. The default `offset` of `0` represents the beginning of the list, i.e. the start of the first page. To request the second page of the list, set the `offset` to the page size as determined by `limit`. Use multiples of the page size as your `offset` to request further consecutive pages. E.g. assume your page size is set to `10`. An `offset` of `10` requests the second page, an `offset` of `20` requests the third page and so on, provided there are sufficiently many items in your list.
   * @default 0
   */
  offset: number;
  /**
   * Start Time
   * @description Refers start of the time range in unix timestamp when an unsubscribe email was created (inclusive).
   */
  start_time?: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_GLOBAL_SUPPRESSIONS tool output.
 */
type SENDGRID_RETRIEVE_ALL_GLOBAL_SUPPRESSIONS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_INVALID_EMAILS tool input.
 */
type SENDGRID_RETRIEVE_ALL_INVALID_EMAILS_INPUT = {
  /**
   * Email
   * @description This parameter allows you to filter results by email address. Only invalid addresses matching an address passed in this parameter will be returned.
   */
  email?: string;
  /**
   * End Time
   * @description Refers end of the time range in unix timestamp when an invalid email was created (inclusive).
   */
  end_time?: number;
  /**
   * Limit
   * @description `limit` sets the page size, i.e. maximum number of items from the list to be returned for a single API request. If omitted, the default page size is used. The maximum page size for this endpoint is 500 items per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The number of items in the list to skip over before starting to retrieve the items for the requested page. The default `offset` of `0` represents the beginning of the list, i.e. the start of the first page. To request the second page of the list, set the `offset` to the page size as determined by `limit`. Use multiples of the page size as your `offset` to request further consecutive pages. E.g. assume your page size is set to `10`. An `offset` of `10` requests the second page, an `offset` of `20` requests the third page and so on, provided there are sufficiently many items in your list.
   * @default 0
   */
  offset: number;
  /**
   * Start Time
   * @description Refers start of the time range in unix timestamp when an invalid email was created (inclusive).
   */
  start_time?: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_INVALID_EMAILS tool output.
 */
type SENDGRID_RETRIEVE_ALL_INVALID_EMAILS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_IPS_CURRENTLY_IN_WARMUP tool input.
 */
type SENDGRID_RETRIEVE_ALL_IPS_CURRENTLY_IN_WARMUP_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_IPS_CURRENTLY_IN_WARMUP tool output.
 */
type SENDGRID_RETRIEVE_ALL_IPS_CURRENTLY_IN_WARMUP_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_IP_ADDRESSES tool input.
 */
type SENDGRID_RETRIEVE_ALL_IP_ADDRESSES_INPUT = {
  /**
   * Exclude Whitelabels
   * @description Should we exclude reverse DNS records (whitelabels)?
   */
  exclude_whitelabels?: boolean;
  /**
   * Ip
   * @description The IP address to get
   */
  ip?: string;
  /**
   * Limit
   * @description `limit` sets the page size, i.e. maximum number of items from the list to be returned for a single API request. If omitted, the default page size is used.
   * @default 10
   */
  limit: number;
  /**
   * Offset
   * @description The number of items in the list to skip over before starting to retrieve the items for the requested page. The default `offset` of `0` represents the beginning of the list, i.e. the start of the first page. To request the second page of the list, set the `offset` to the page size as determined by `limit`. Use multiples of the page size as your `offset` to request further consecutive pages. E.g. assume your page size is set to `10`. An `offset` of `10` requests the second page, an `offset` of `20` requests the third page and so on, provided there are sufficiently many items in your list.
   * @default 0
   */
  offset: number;
  /**
   * Sort By Direction
   * @description The direction to sort the results.
   * @enum {string}
   */
  sort_by_direction?: "desc" | "asc";
  /**
   * Subuser
   * @description The subuser you are requesting for.
   */
  subuser?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_IP_ADDRESSES tool output.
 */
type SENDGRID_RETRIEVE_ALL_IP_ADDRESSES_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_IP_POOLS tool input.
 */
type SENDGRID_RETRIEVE_ALL_IP_POOLS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_IP_POOLS tool output.
 */
type SENDGRID_RETRIEVE_ALL_IP_POOLS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_IP_POOLS_AN_IP_ADDRESS_BELONGS_TO tool input.
 */
type SENDGRID_RETRIEVE_ALL_IP_POOLS_AN_IP_ADDRESS_BELONGS_TO_INPUT = {
  /**
   * Ip Address
   * @description The IP address you are retrieving the IP pools for.
   */
  ip_address?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_IP_POOLS_AN_IP_ADDRESS_BELONGS_TO tool output.
 */
type SENDGRID_RETRIEVE_ALL_IP_POOLS_AN_IP_ADDRESS_BELONGS_TO_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_LISTS tool input.
 */
type SENDGRID_RETRIEVE_ALL_LISTS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_LISTS tool output.
 */
type SENDGRID_RETRIEVE_ALL_LISTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_MAIL_SETTINGS tool input.
 */
type SENDGRID_RETRIEVE_ALL_MAIL_SETTINGS_INPUT = {
  /**
   * Limit
   * @description `limit` sets the page size, i.e. maximum number of items from the list to be returned for a single API request. If omitted, the default page size is used.
   */
  limit?: number;
  /**
   * Offset
   * @description The number of items in the list to skip over before starting to retrieve the items for the requested page. The default `offset` of `0` represents the beginning of the list, i.e. the start of the first page. To request the second page of the list, set the `offset` to the page size as determined by `limit`. Use multiples of the page size as your `offset` to request further consecutive pages. E.g. assume your page size is set to `10`. An `offset` of `10` requests the second page, an `offset` of `20` requests the third page and so on, provided there are sufficiently many items in your list.
   * @default 0
   */
  offset: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_MAIL_SETTINGS tool output.
 */
type SENDGRID_RETRIEVE_ALL_MAIL_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_OF_YOUR_EVENT_WEBHOOKS tool input.
 */
type SENDGRID_RETRIEVE_ALL_OF_YOUR_EVENT_WEBHOOKS_INPUT = {
  /**
   * Include
   * @description Use this to include optional fields in the response payload. When this is set to `include=account_status_change`, the `account_status_change` field will be part of the response payload and set to `false` by default. See [Update an event webhook](https://docs.sendgrid.com/api-reference/webhooks/update-an-event-webhook) for enabling this webhook notification which lets you subscribe to account status change events related to compliance action taken by SendGrid.
   */
  include?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_OF_YOUR_EVENT_WEBHOOKS tool output.
 */
type SENDGRID_RETRIEVE_ALL_OF_YOUR_EVENT_WEBHOOKS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_PARSE_SETTINGS tool input.
 */
type SENDGRID_RETRIEVE_ALL_PARSE_SETTINGS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_PARSE_SETTINGS tool output.
 */
type SENDGRID_RETRIEVE_ALL_PARSE_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_PENDING_TEAMMATES tool input.
 */
type SENDGRID_RETRIEVE_ALL_PENDING_TEAMMATES_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_PENDING_TEAMMATES tool output.
 */
type SENDGRID_RETRIEVE_ALL_PENDING_TEAMMATES_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_RECENT_ACCESS_ATTEMPTS tool input.
 */
type SENDGRID_RETRIEVE_ALL_RECENT_ACCESS_ATTEMPTS_INPUT = {
  /**
   * Limit
   * @description Limits the number of IPs to return.
   * @default 20
   */
  limit: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_RECENT_ACCESS_ATTEMPTS tool output.
 */
type SENDGRID_RETRIEVE_ALL_RECENT_ACCESS_ATTEMPTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_RECIPIENTS_ON_A_LIST tool input.
 */
type SENDGRID_RETRIEVE_ALL_RECIPIENTS_ON_A_LIST_INPUT = {
  /**
   * List Id
   * @description The id of the list of recipients you want to retrieve.
   */
  list_id?: number;
  /**
   * Page
   * @description Page index of first recipient to return (must be a positive integer)
   */
  page?: number;
  /**
   * Page Size
   * @description Number of recipients to return at a time (must be a positive integer between 1 and 1000)
   */
  page_size?: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_RECIPIENTS_ON_A_LIST tool output.
 */
type SENDGRID_RETRIEVE_ALL_RECIPIENTS_ON_A_LIST_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_REVERSE_DNS_RECORDS tool input.
 */
type SENDGRID_RETRIEVE_ALL_REVERSE_DNS_RECORDS_INPUT = {
  /**
   * Ip
   * @description The IP address segment that you"d like to use in a prefix search.
   */
  ip?: string;
  /**
   * Limit
   * @description `limit` sets the page size, i.e. maximum number of items from the list to be returned for a single API request. If omitted, the default page size is used.
   */
  limit?: number;
  /**
   * Offset
   * @description The number of items in the list to skip over before starting to retrieve the items for the requested page. The default `offset` of `0` represents the beginning of the list, i.e. the start of the first page. To request the second page of the list, set the `offset` to the page size as determined by `limit`. Use multiples of the page size as your `offset` to request further consecutive pages. E.g. assume your page size is set to `10`. An `offset` of `10` requests the second page, an `offset` of `20` requests the third page and so on, provided there are sufficiently many items in your list.
   * @default 0
   */
  offset: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_REVERSE_DNS_RECORDS tool output.
 */
type SENDGRID_RETRIEVE_ALL_REVERSE_DNS_RECORDS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_SCHEDULED_SENDS tool input.
 */
type SENDGRID_RETRIEVE_ALL_SCHEDULED_SENDS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_SCHEDULED_SENDS tool output.
 */
type SENDGRID_RETRIEVE_ALL_SCHEDULED_SENDS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_SEGMENTS tool input.
 */
type SENDGRID_RETRIEVE_ALL_SEGMENTS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_SEGMENTS tool output.
 */
type SENDGRID_RETRIEVE_ALL_SEGMENTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_SPAM_REPORTS tool input.
 */
type SENDGRID_RETRIEVE_ALL_SPAM_REPORTS_INPUT = {
  /**
   * Email
   * @description Specifies which records to return based on the records" associated email addresses. For example, `sales` returns records with email addresses that start with "sales", such as `salesdepartment@example.com` or `sales@example.com`.  You can also use `%25` as a wildcard. For example, `%25market` returns records containing email addresses with the string "market" anywhere in the email address, and `%25market%25tree` returns records containing email addresses with the string "market" followed by the string "tree". Any reserved characters should be [percent-encoded](https://en.wikipedia.org/wiki/Percent-encoding#Reserved_characters), e.g., the `@` symbol should be encoded as `%40`.
   */
  email?: string;
  /**
   * End Time
   * @description The end of the time range when a spam report was created (inclusive). This is a unix timestamp.
   */
  end_time?: number;
  /**
   * Limit
   * @description `limit` sets the page size, i.e. maximum number of items from the list to be returned for a single API request. If omitted, the default page size is used. The maximum page size for this endpoint is 500 items per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The number of items in the list to skip over before starting to retrieve the items for the requested page. The default `offset` of `0` represents the beginning of the list, i.e. the start of the first page. To request the second page of the list, set the `offset` to the page size as determined by `limit`. Use multiples of the page size as your `offset` to request further consecutive pages. E.g. assume your page size is set to `10`. An `offset` of `10` requests the second page, an `offset` of `20` requests the third page and so on, provided there are sufficiently many items in your list.
   * @default 0
   */
  offset: number;
  /**
   * Start Time
   * @description The start of the time range when a spam report was created (inclusive). This is a unix timestamp.
   */
  start_time?: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_SPAM_REPORTS tool output.
 */
type SENDGRID_RETRIEVE_ALL_SPAM_REPORTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_SUPPRESSIONS tool input.
 */
type SENDGRID_RETRIEVE_ALL_SUPPRESSIONS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_SUPPRESSIONS tool output.
 */
type SENDGRID_RETRIEVE_ALL_SUPPRESSIONS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_SUPPRESSIONS_FOR_A_SUPPRESSION_GROUP tool input.
 */
type SENDGRID_RETRIEVE_ALL_SUPPRESSIONS_FOR_A_SUPPRESSION_GROUP_INPUT = {
  /**
   * Group Id
   * @description The id of the unsubscribe group that you are adding suppressions to.
   */
  group_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_SUPPRESSIONS_FOR_A_SUPPRESSION_GROUP tool output.
 */
type SENDGRID_RETRIEVE_ALL_SUPPRESSIONS_FOR_A_SUPPRESSION_GROUP_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_SUPPRESSION_GROUPS_FOR_AN_EMAIL_ADDRESS tool input.
 */
type SENDGRID_RETRIEVE_ALL_SUPPRESSION_GROUPS_FOR_AN_EMAIL_ADDRESS_INPUT = {
  /**
   * Email
   * @description The email address that you want to search suppression groups for.
   */
  email?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_SUPPRESSION_GROUPS_FOR_AN_EMAIL_ADDRESS tool output.
 */
type SENDGRID_RETRIEVE_ALL_SUPPRESSION_GROUPS_FOR_AN_EMAIL_ADDRESS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_TEAMMATES tool input.
 */
type SENDGRID_RETRIEVE_ALL_TEAMMATES_INPUT = {
  /**
   * Limit
   * @description `limit` sets the page size, i.e. maximum number of items from the list to be returned for a single API request. If omitted, the default page size is used. The maximum page size for this endpoint is 500 items per page.
   * @default 500
   */
  limit: number;
  /**
   * Offset
   * @description The number of items in the list to skip over before starting to retrieve the items for the requested page. The default `offset` of `0` represents the beginning of the list, i.e. the start of the first page. To request the second page of the list, set the `offset` to the page size as determined by `limit`. Use multiples of the page size as your `offset` to request further consecutive pages. E.g. assume your page size is set to `10`. An `offset` of `10` requests the second page, an `offset` of `20` requests the third page and so on, provided there are sufficiently many items in your list.
   * @default 0
   */
  offset: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_TEAMMATES tool output.
 */
type SENDGRID_RETRIEVE_ALL_TEAMMATES_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_THE_IPS_IN_A_SPECIFIED_POOL tool input.
 */
type SENDGRID_RETRIEVE_ALL_THE_IPS_IN_A_SPECIFIED_POOL_INPUT = {
  /**
   * Pool Name
   * @description The name of the IP pool that you want to retrieve the IP addresses for.
   */
  pool_name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_ALL_THE_IPS_IN_A_SPECIFIED_POOL tool output.
 */
type SENDGRID_RETRIEVE_ALL_THE_IPS_IN_A_SPECIFIED_POOL_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_AN_AUTHENTICATED_DOMAIN tool input.
 */
type SENDGRID_RETRIEVE_AN_AUTHENTICATED_DOMAIN_INPUT = {
  /**
   * Domain Id
   * @description Domain Id
   */
  domain_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_AN_AUTHENTICATED_DOMAIN tool output.
 */
type SENDGRID_RETRIEVE_AN_AUTHENTICATED_DOMAIN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_AN_EXISTING_API_KEY tool input.
 */
type SENDGRID_RETRIEVE_AN_EXISTING_API_KEY_INPUT = {
  /** Api Key Id */
  api_key_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_AN_EXISTING_API_KEY tool output.
 */
type SENDGRID_RETRIEVE_AN_EXISTING_API_KEY_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_BOUNCE tool input.
 */
type SENDGRID_RETRIEVE_A_BOUNCE_INPUT = {
  /**
   * Email
   * @description The email address of the specific bounce you would like to retrieve
   */
  email?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_BOUNCE tool output.
 */
type SENDGRID_RETRIEVE_A_BOUNCE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_BRANDED_LINK tool input.
 */
type SENDGRID_RETRIEVE_A_BRANDED_LINK_INPUT = {
  /**
   * Id
   * @description The ID of the branded link you want to retrieve.
   */
  id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_BRANDED_LINK tool output.
 */
type SENDGRID_RETRIEVE_A_BRANDED_LINK_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_COUNT_OF_RECIPIENTS tool input.
 */
type SENDGRID_RETRIEVE_A_COUNT_OF_RECIPIENTS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_COUNT_OF_RECIPIENTS tool output.
 */
type SENDGRID_RETRIEVE_A_COUNT_OF_RECIPIENTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_CUSTOM_FIELD tool input.
 */
type SENDGRID_RETRIEVE_A_CUSTOM_FIELD_INPUT = {
  /**
   * Custom Field Id
   * @description The ID of the custom field that you want to retrieve.
   */
  custom_field_id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_CUSTOM_FIELD tool output.
 */
type SENDGRID_RETRIEVE_A_CUSTOM_FIELD_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_GLOBAL_SUPPRESSION tool input.
 */
type SENDGRID_RETRIEVE_A_GLOBAL_SUPPRESSION_INPUT = {
  /**
   * Email
   * @description The email address of the global suppression you want to retrieve. Or, if you want to check if an email address is on the global suppressions list, enter that email address here.
   */
  email?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_GLOBAL_SUPPRESSION tool output.
 */
type SENDGRID_RETRIEVE_A_GLOBAL_SUPPRESSION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_LIST_OF_CURRENTLY_ALLOWED_IPS tool input.
 */
type SENDGRID_RETRIEVE_A_LIST_OF_CURRENTLY_ALLOWED_IPS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_LIST_OF_CURRENTLY_ALLOWED_IPS tool output.
 */
type SENDGRID_RETRIEVE_A_LIST_OF_CURRENTLY_ALLOWED_IPS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_REVERSE_DNS_RECORD tool input.
 */
type SENDGRID_RETRIEVE_A_REVERSE_DNS_RECORD_INPUT = {
  /**
   * Id
   * @description The ID of the reverse DNS record that you would like to retrieve.
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_REVERSE_DNS_RECORD tool output.
 */
type SENDGRID_RETRIEVE_A_REVERSE_DNS_RECORD_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SEGMENT tool input.
 */
type SENDGRID_RETRIEVE_A_SEGMENT_INPUT = {
  /**
   * Segment Id
   * @description Segment Id
   */
  segment_id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SEGMENT tool output.
 */
type SENDGRID_RETRIEVE_A_SEGMENT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SINGLE_CAMPAIGN tool input.
 */
type SENDGRID_RETRIEVE_A_SINGLE_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The id of the campaign you would like to retrieve.
   */
  campaign_id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SINGLE_CAMPAIGN tool output.
 */
type SENDGRID_RETRIEVE_A_SINGLE_CAMPAIGN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SINGLE_LIST tool input.
 */
type SENDGRID_RETRIEVE_A_SINGLE_LIST_INPUT = {
  /**
   * List Id
   * @description List Id
   */
  list_id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SINGLE_LIST tool output.
 */
type SENDGRID_RETRIEVE_A_SINGLE_LIST_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SINGLE_RECIPIENT tool input.
 */
type SENDGRID_RETRIEVE_A_SINGLE_RECIPIENT_INPUT = {
  /**
   * Recipient Id
   * @description The ID of the recipient that you want to retrieve.
   */
  recipient_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SINGLE_RECIPIENT tool output.
 */
type SENDGRID_RETRIEVE_A_SINGLE_RECIPIENT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SINGLE_TRANSACTIONAL_TEMPLATE tool input.
 */
type SENDGRID_RETRIEVE_A_SINGLE_TRANSACTIONAL_TEMPLATE_INPUT = {
  /**
   * Template Id
   * @description Template Id
   */
  template_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SINGLE_TRANSACTIONAL_TEMPLATE tool output.
 */
type SENDGRID_RETRIEVE_A_SINGLE_TRANSACTIONAL_TEMPLATE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SPECIFIC_ALERT tool input.
 */
type SENDGRID_RETRIEVE_A_SPECIFIC_ALERT_INPUT = {
  /**
   * Alert Id
   * @description The ID of the alert you would like to retrieve.
   */
  alert_id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SPECIFIC_ALERT tool output.
 */
type SENDGRID_RETRIEVE_A_SPECIFIC_ALERT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SPECIFIC_ALLOWED_IP tool input.
 */
type SENDGRID_RETRIEVE_A_SPECIFIC_ALLOWED_IP_INPUT = {
  /**
   * Rule Id
   * @description The ID of the allowed IP address that you want to retrieve.
   */
  rule_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SPECIFIC_ALLOWED_IP tool output.
 */
type SENDGRID_RETRIEVE_A_SPECIFIC_ALLOWED_IP_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SPECIFIC_BLOCK tool input.
 */
type SENDGRID_RETRIEVE_A_SPECIFIC_BLOCK_INPUT = {
  /**
   * Email
   * @description The email address of the specific block.
   */
  email?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SPECIFIC_BLOCK tool output.
 */
type SENDGRID_RETRIEVE_A_SPECIFIC_BLOCK_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SPECIFIC_INVALID_EMAIL tool input.
 */
type SENDGRID_RETRIEVE_A_SPECIFIC_INVALID_EMAIL_INPUT = {
  /**
   * Email
   * @description The specific email address of the invalid email entry that you want to retrieve.
   */
  email?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SPECIFIC_INVALID_EMAIL tool output.
 */
type SENDGRID_RETRIEVE_A_SPECIFIC_INVALID_EMAIL_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SPECIFIC_PARSE_SETTING tool input.
 */
type SENDGRID_RETRIEVE_A_SPECIFIC_PARSE_SETTING_INPUT = {
  /**
   * Hostname
   * @description The hostname associated with the inbound parse setting that you would like to retrieve.
   */
  hostname?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SPECIFIC_PARSE_SETTING tool output.
 */
type SENDGRID_RETRIEVE_A_SPECIFIC_PARSE_SETTING_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SPECIFIC_SPAM_REPORT tool input.
 */
type SENDGRID_RETRIEVE_A_SPECIFIC_SPAM_REPORT_INPUT = {
  /**
   * Email
   * @description The email address of a specific spam report that you want to retrieve.
   */
  email?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SPECIFIC_SPAM_REPORT tool output.
 */
type SENDGRID_RETRIEVE_A_SPECIFIC_SPAM_REPORT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SPECIFIC_TRANSACTIONAL_TEMPLATE_VERSION tool input.
 */
type SENDGRID_RETRIEVE_A_SPECIFIC_TRANSACTIONAL_TEMPLATE_VERSION_INPUT = {
  /**
   * Template Id
   * @description  The ID of the original template
   */
  template_id?: string;
  /**
   * Version Id
   * @description The ID of the template version
   */
  version_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SPECIFIC_TRANSACTIONAL_TEMPLATE_VERSION tool output.
 */
type SENDGRID_RETRIEVE_A_SPECIFIC_TRANSACTIONAL_TEMPLATE_VERSION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SUBUSER_S_BRANDED_LINK tool input.
 */
type SENDGRID_RETRIEVE_A_SUBUSER_S_BRANDED_LINK_INPUT = {
  /**
   * Username
   * @description The username of the subuser to retrieve associated branded links for.
   */
  username?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_A_SUBUSER_S_BRANDED_LINK tool output.
 */
type SENDGRID_RETRIEVE_A_SUBUSER_S_BRANDED_LINK_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_BOUNCE_CLASSIFICATION_TOTALS tool input.
 */
type SENDGRID_RETRIEVE_BOUNCE_CLASSIFICATION_TOTALS_INPUT = {
  /**
   * End Date
   * @description The end of the time range, in YYYY-MM-DD format, when a bounce was created (inclusive).
   */
  end_date?: string;
  /**
   * Start Date
   * @description The start of the time range, in YYYY-MM-DD format, when a bounce was created (inclusive).
   */
  start_date?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_BOUNCE_CLASSIFICATION_TOTALS tool output.
 */
type SENDGRID_RETRIEVE_BOUNCE_CLASSIFICATION_TOTALS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_BOUNCE_PURGE_MAIL_SETTINGS tool input.
 */
type SENDGRID_RETRIEVE_BOUNCE_PURGE_MAIL_SETTINGS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_BOUNCE_PURGE_MAIL_SETTINGS tool output.
 */
type SENDGRID_RETRIEVE_BOUNCE_PURGE_MAIL_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_CLICK_TRACK_SETTINGS tool input.
 */
type SENDGRID_RETRIEVE_CLICK_TRACK_SETTINGS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_CLICK_TRACK_SETTINGS tool output.
 */
type SENDGRID_RETRIEVE_CLICK_TRACK_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_CURRENT_ENFORCED_TLS_SETTINGS tool input.
 */
type SENDGRID_RETRIEVE_CURRENT_ENFORCED_TLS_SETTINGS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_CURRENT_ENFORCED_TLS_SETTINGS tool output.
 */
type SENDGRID_RETRIEVE_CURRENT_ENFORCED_TLS_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_BROWSER tool input.
 */
type SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_BROWSER_INPUT = {
  /**
   * Aggregated By
   * @description How to group the statistics. Must be either "day", "week", or "month".
   * @enum {string}
   */
  aggregated_by?: "day" | "week" | "month";
  /**
   * Browsers
   * @description The browsers to get statistics for. You can include up to 10 different browsers by including this parameter multiple times.
   */
  browsers?: string;
  /**
   * End Date
   * @description The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
   */
  end_date?: string;
  /**
   * Limit
   * @description The number of results to return.
   */
  limit?: number;
  /**
   * Offset
   * @description The point in the list to begin retrieving results.
   */
  offset?: number;
  /**
   * Start Date
   * @description The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
   */
  start_date?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_BROWSER tool output.
 */
type SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_BROWSER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_CLIENT_TYPE tool input.
 */
type SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_CLIENT_TYPE_INPUT = {
  /**
   * Aggregated By
   * @description How to group the statistics. Must be either "day", "week", or "month".
   * @enum {string}
   */
  aggregated_by?: "day" | "week" | "month";
  /**
   * End Date
   * @description The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
   */
  end_date?: string;
  /**
   * Start Date
   * @description The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
   */
  start_date?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_CLIENT_TYPE tool output.
 */
type SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_CLIENT_TYPE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_COUNTRY_AND_STATE_PROVINCE tool input.
 */
type SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_COUNTRY_AND_STATE_PROVINCE_INPUT = {
  /**
   * Aggregated By
   * @description How to group the statistics. Must be either "day", "week", or "month".
   * @enum {string}
   */
  aggregated_by?: "day" | "week" | "month";
  /**
   * Country
   * @description The country you would like to see statistics for. Currently only supported for US and CA.
   * @enum {string}
   */
  country?: "US" | "CA";
  /**
   * End Date
   * @description The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
   */
  end_date?: string;
  /**
   * Limit
   * @description The number of results to return.
   */
  limit?: number;
  /**
   * Offset
   * @description The point in the list to begin retrieving results.
   */
  offset?: number;
  /**
   * Start Date
   * @description The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
   */
  start_date?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_COUNTRY_AND_STATE_PROVINCE tool output.
 */
type SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_COUNTRY_AND_STATE_PROVINCE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_DEVICE_TYPE tool input.
 */
type SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_DEVICE_TYPE_INPUT = {
  /**
   * Aggregated By
   * @description How to group the statistics. Must be either "day", "week", or "month".
   * @enum {string}
   */
  aggregated_by?: "day" | "week" | "month";
  /**
   * End Date
   * @description The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
   */
  end_date?: string;
  /**
   * Limit
   * @description The number of results to return.
   */
  limit?: number;
  /**
   * Offset
   * @description The point in the list to begin retrieving results.
   */
  offset?: number;
  /**
   * Start Date
   * @description The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
   */
  start_date?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_DEVICE_TYPE tool output.
 */
type SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_DEVICE_TYPE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_MAILBOX_PROVIDER tool input.
 */
type SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_MAILBOX_PROVIDER_INPUT = {
  /**
   * Aggregated By
   * @description How to group the statistics. Must be either "day", "week", or "month".
   * @enum {string}
   */
  aggregated_by?: "day" | "week" | "month";
  /**
   * End Date
   * @description The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
   */
  end_date?: string;
  /**
   * Limit
   * @description The number of results to return.
   */
  limit?: number;
  /**
   * Mailbox Providers
   * @description The mail box providers to get statistics for. You can include up to 10 by including this parameter multiple times.
   */
  mailbox_providers?: string;
  /**
   * Offset
   * @description The point in the list to begin retrieving results.
   */
  offset?: number;
  /**
   * Start Date
   * @description The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
   */
  start_date?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_MAILBOX_PROVIDER tool output.
 */
type SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_MAILBOX_PROVIDER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_EMAIL_STATISTICS_FOR_CATEGORIES tool input.
 */
type SENDGRID_RETRIEVE_EMAIL_STATISTICS_FOR_CATEGORIES_INPUT = {
  /**
   * Aggregated By
   * @description How to group the statistics. Must be either "day", "week", or "month".
   * @enum {string}
   */
  aggregated_by?: "day" | "week" | "month";
  /**
   * Categories
   * @description The individual categories that you want to retrieve statistics for. You may include up to 10 different categories.
   */
  categories?: string;
  /**
   * End Date
   * @description The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
   */
  end_date?: string;
  /**
   * Start Date
   * @description The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD
   */
  start_date?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_EMAIL_STATISTICS_FOR_CATEGORIES tool output.
 */
type SENDGRID_RETRIEVE_EMAIL_STATISTICS_FOR_CATEGORIES_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_EMAIL_STATISTICS_FOR_YOUR_SUBUSERS tool input.
 */
type SENDGRID_RETRIEVE_EMAIL_STATISTICS_FOR_YOUR_SUBUSERS_INPUT = {
  /**
   * Aggregated By
   * @description How to group the statistics. Must be either "day", "week", or "month".
   * @enum {string}
   */
  aggregated_by?: "day" | "week" | "month";
  /**
   * End Date
   * @description The end date of the statistics to retrieve. Defaults to today.
   */
  end_date?: string;
  /**
   * Limit
   * @description Limits the number of results returned per page.
   */
  limit?: number;
  /**
   * Offset
   * @description The point in the list to begin retrieving results from.
   */
  offset?: number;
  /**
   * Start Date
   * @description The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
   */
  start_date?: string;
  /**
   * Subusers
   * @description The subuser you want to retrieve statistics for. You may include this parameter up to 10 times to retrieve statistics for multiple subusers.
   */
  subusers?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_EMAIL_STATISTICS_FOR_YOUR_SUBUSERS tool output.
 */
type SENDGRID_RETRIEVE_EMAIL_STATISTICS_FOR_YOUR_SUBUSERS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_FOOTER_MAIL_SETTINGS tool input.
 */
type SENDGRID_RETRIEVE_FOOTER_MAIL_SETTINGS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_FOOTER_MAIL_SETTINGS tool output.
 */
type SENDGRID_RETRIEVE_FOOTER_MAIL_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_FORWARD_BOUNCE_MAIL_SETTINGS tool input.
 */
type SENDGRID_RETRIEVE_FORWARD_BOUNCE_MAIL_SETTINGS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_FORWARD_BOUNCE_MAIL_SETTINGS tool output.
 */
type SENDGRID_RETRIEVE_FORWARD_BOUNCE_MAIL_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_FORWARD_SPAM_MAIL_SETTINGS tool input.
 */
type SENDGRID_RETRIEVE_FORWARD_SPAM_MAIL_SETTINGS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_FORWARD_SPAM_MAIL_SETTINGS tool output.
 */
type SENDGRID_RETRIEVE_FORWARD_SPAM_MAIL_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_GLOBAL_EMAIL_STATISTICS tool input.
 */
type SENDGRID_RETRIEVE_GLOBAL_EMAIL_STATISTICS_INPUT = {
  /**
   * Aggregated By
   * @description How to group the statistics. Must be either "day", "week", or "month".
   * @enum {string}
   */
  aggregated_by?: "day" | "week" | "month";
  /**
   * End Date
   * @description The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
   */
  end_date?: string;
  /**
   * Limit
   * @description The number of results to return.
   */
  limit?: number;
  /**
   * Offset
   * @description The point in the list to begin retrieving results.
   */
  offset?: number;
  /**
   * Start Date
   * @description The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
   */
  start_date?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_GLOBAL_EMAIL_STATISTICS tool output.
 */
type SENDGRID_RETRIEVE_GLOBAL_EMAIL_STATISTICS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_GOOGLE_ANALYTICS_SETTINGS tool input.
 */
type SENDGRID_RETRIEVE_GOOGLE_ANALYTICS_SETTINGS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_GOOGLE_ANALYTICS_SETTINGS tool output.
 */
type SENDGRID_RETRIEVE_GOOGLE_ANALYTICS_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_LEGACY_TEMPLATE_MAIL_SETTINGS tool input.
 */
type SENDGRID_RETRIEVE_LEGACY_TEMPLATE_MAIL_SETTINGS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_LEGACY_TEMPLATE_MAIL_SETTINGS tool output.
 */
type SENDGRID_RETRIEVE_LEGACY_TEMPLATE_MAIL_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_MONTHLY_STATS_FOR_ALL_SUBUSERS tool input.
 */
type SENDGRID_RETRIEVE_MONTHLY_STATS_FOR_ALL_SUBUSERS_INPUT = {
  /**
   * Date
   * @description The date of the month to retrieve statistics for. Must be formatted YYYY-MM-DD
   */
  date?: string;
  /**
   * Limit
   * @description Optional field to limit the number of results returned.
   * @default 5
   */
  limit: number;
  /**
   * Offset
   * @description Optional beginning point in the list to retrieve from.
   * @default 0
   */
  offset: number;
  /**
   * Sort By Direction
   * @description The direction you want to sort.
   * @enum {string}
   */
  sort_by_direction?: "desc" | "asc";
  /**
   * Sort By Metric
   * @description The metric that you want to sort by. Metrics that you can sort by are: `blocks`, `bounces`, `clicks`, `delivered`, `opens`, `requests`, `unique_clicks`, `unique_opens`, and `unsubscribes`."
   * @enum {string}
   */
  sort_by_metric?: "blocks" | "bounces" | "clicks" | "delivered" | "opens" | "requests" | "unique_clicks" | "unique_opens" | "unsubscribes";
  /**
   * Subuser
   * @description A substring search of your subusers.
   */
  subuser?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_MONTHLY_STATS_FOR_ALL_SUBUSERS tool output.
 */
type SENDGRID_RETRIEVE_MONTHLY_STATS_FOR_ALL_SUBUSERS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_PAGED_TRANSACTIONAL_TEMPLATES tool input.
 */
type SENDGRID_RETRIEVE_PAGED_TRANSACTIONAL_TEMPLATES_INPUT = {
  /**
   * Generations
   * @description Comma-delimited list specifying which generations of templates to return. Options are `legacy`, `dynamic` or `legacy,dynamic`.
   * @enum {string}
   */
  generations?: "legacy" | "dynamic" | "legacy,dynamic";
  /**
   * Page Size
   * @description The number of templates to be returned in each page of results
   */
  page_size?: number;
  /**
   * Page Token
   * @description A token corresponding to a specific page of results, as provided by metadata
   */
  page_token?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_PAGED_TRANSACTIONAL_TEMPLATES tool output.
 */
type SENDGRID_RETRIEVE_PAGED_TRANSACTIONAL_TEMPLATES_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_RECIPIENTS tool input.
 */
type SENDGRID_RETRIEVE_RECIPIENTS_INPUT = {
  /**
   * Page
   * @description Page index of first recipients to return (must be a positive integer)
   */
  page?: number;
  /**
   * Page Size
   * @description Number of recipients to return at a time (must be a positive integer between 1 and 1000)
   */
  page_size?: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_RECIPIENTS tool output.
 */
type SENDGRID_RETRIEVE_RECIPIENTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_RECIPIENTS_ON_A_SEGMENT tool input.
 */
type SENDGRID_RETRIEVE_RECIPIENTS_ON_A_SEGMENT_INPUT = {
  /**
   * Page
   * @description Page
   */
  page?: number;
  /**
   * Page Size
   * @description Page Size
   */
  page_size?: number;
  /**
   * Segment Id
   * @description The ID of the segment from which you want to retrieve recipients.
   */
  segment_id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_RECIPIENTS_ON_A_SEGMENT tool output.
 */
type SENDGRID_RETRIEVE_RECIPIENTS_ON_A_SEGMENT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_RESERVED_FIELDS tool input.
 */
type SENDGRID_RETRIEVE_RESERVED_FIELDS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_RESERVED_FIELDS tool output.
 */
type SENDGRID_RETRIEVE_RESERVED_FIELDS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_SCHEDULED_SEND tool input.
 */
type SENDGRID_RETRIEVE_SCHEDULED_SEND_INPUT = {
  /**
   * Batch Id
   * @description Batch Id
   */
  batch_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_SCHEDULED_SEND tool output.
 */
type SENDGRID_RETRIEVE_SCHEDULED_SEND_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_SINGLE_SEGMENT_ENDPOINT tool input.
 */
type SENDGRID_RETRIEVE_SINGLE_SEGMENT_ENDPOINT_INPUT = {
  /**
   * Query Json
   * @description Defaults to `false`.  Set to `true` to return the parsed SQL AST as a JSON object in the field `query_json`
   */
  query_json?: boolean;
  /**
   * Segment Id
   * @description Segment Id
   */
  segment_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_SINGLE_SEGMENT_ENDPOINT tool output.
 */
type SENDGRID_RETRIEVE_SINGLE_SEGMENT_ENDPOINT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_SPECIFIC_TEAMMATE tool input.
 */
type SENDGRID_RETRIEVE_SPECIFIC_TEAMMATE_INPUT = {
  /**
   * Username
   * @description The username of the teammate that you want to retrieve.
   */
  username?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_SPECIFIC_TEAMMATE tool output.
 */
type SENDGRID_RETRIEVE_SPECIFIC_TEAMMATE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_STATS_BY_A_SPECIFIC_CLIENT_TYPE tool input.
 */
type SENDGRID_RETRIEVE_STATS_BY_A_SPECIFIC_CLIENT_TYPE_INPUT = {
  /**
   * Aggregated By
   * @description How to group the statistics. Must be either "day", "week", or "month".
   * @enum {string}
   */
  aggregated_by?: "day" | "week" | "month";
  /**
   * Client Type
   * @description Specifies the type of client to retrieve stats for. Must be either "phone", "tablet", "webmail", or "desktop".
   * @enum {string}
   */
  client_type?: "phone" | "tablet" | "webmail" | "desktop";
  /**
   * End Date
   * @description The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
   */
  end_date?: string;
  /**
   * Start Date
   * @description The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
   */
  start_date?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_STATS_BY_A_SPECIFIC_CLIENT_TYPE tool output.
 */
type SENDGRID_RETRIEVE_STATS_BY_A_SPECIFIC_CLIENT_TYPE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_SUBSCRIPTION_TRACKING_SETTINGS tool input.
 */
type SENDGRID_RETRIEVE_SUBSCRIPTION_TRACKING_SETTINGS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_SUBSCRIPTION_TRACKING_SETTINGS tool output.
 */
type SENDGRID_RETRIEVE_SUBSCRIPTION_TRACKING_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_SUBUSER_REPUTATIONS tool input.
 */
type SENDGRID_RETRIEVE_SUBUSER_REPUTATIONS_INPUT = {
  /**
   * Usernames
   * @description Usernames
   */
  usernames?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_SUBUSER_REPUTATIONS tool output.
 */
type SENDGRID_RETRIEVE_SUBUSER_REPUTATIONS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_SUMS_OF_EMAIL_STATS_FOR_EACH_CATEGORY tool input.
 */
type SENDGRID_RETRIEVE_SUMS_OF_EMAIL_STATS_FOR_EACH_CATEGORY_INPUT = {
  /**
   * Aggregated By
   * @description How to group the statistics. Must be either "day", "week", or "month".
   * @enum {string}
   */
  aggregated_by?: "day" | "week" | "month";
  /**
   * End Date
   * @description The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
   */
  end_date?: string;
  /**
   * Limit
   * @description Limits the number of results returned.
   * @default 5
   */
  limit: number;
  /**
   * Offset
   * @description The point in the list to begin retrieving results.
   * @default 0
   */
  offset: number;
  /**
   * Sort By Direction
   * @description The direction you want to sort.
   * @enum {string}
   */
  sort_by_direction?: "desc" | "asc";
  /**
   * Sort By Metric
   * @description The metric that you want to sort by.  Must be a single metric.
   * @default delivered
   */
  sort_by_metric: string;
  /**
   * Start Date
   * @description The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
   */
  start_date?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_SUMS_OF_EMAIL_STATS_FOR_EACH_CATEGORY tool output.
 */
type SENDGRID_RETRIEVE_SUMS_OF_EMAIL_STATS_FOR_EACH_CATEGORY_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_THE_COUNT_OF_BILLABLE_RECIPIENTS tool input.
 */
type SENDGRID_RETRIEVE_THE_COUNT_OF_BILLABLE_RECIPIENTS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_THE_COUNT_OF_BILLABLE_RECIPIENTS tool output.
 */
type SENDGRID_RETRIEVE_THE_COUNT_OF_BILLABLE_RECIPIENTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_THE_DEFAULT_BRANDED_LINK tool input.
 */
type SENDGRID_RETRIEVE_THE_DEFAULT_BRANDED_LINK_INPUT = {
  /**
   * Domain
   * @description The domain to match against when finding the default branded link.
   */
  domain?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_THE_DEFAULT_BRANDED_LINK tool output.
 */
type SENDGRID_RETRIEVE_THE_DEFAULT_BRANDED_LINK_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_THE_LISTS_THAT_A_RECIPIENT_IS_ON tool input.
 */
type SENDGRID_RETRIEVE_THE_LISTS_THAT_A_RECIPIENT_IS_ON_INPUT = {
  /**
   * Recipient Id
   * @description The ID of the recipient for whom you are retrieving lists.
   */
  recipient_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_THE_LISTS_THAT_A_RECIPIENT_IS_ON tool output.
 */
type SENDGRID_RETRIEVE_THE_LISTS_THAT_A_RECIPIENT_IS_ON_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_THE_WARMUP_STATUS_FOR_A_SPECIFIC_IP_ADDRESS tool input.
 */
type SENDGRID_RETRIEVE_THE_WARMUP_STATUS_FOR_A_SPECIFIC_IP_ADDRESS_INPUT = {
  /**
   * Ip Address
   * @description The IP address that you want to retrieve the warmup status for.
   */
  ip_address?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_THE_WARMUP_STATUS_FOR_A_SPECIFIC_IP_ADDRESS tool output.
 */
type SENDGRID_RETRIEVE_THE_WARMUP_STATUS_FOR_A_SPECIFIC_IP_ADDRESS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_TRACKING_SETTINGS tool input.
 */
type SENDGRID_RETRIEVE_TRACKING_SETTINGS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_TRACKING_SETTINGS tool output.
 */
type SENDGRID_RETRIEVE_TRACKING_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_USER_S_AUTHENTICATED_DOMAINS tool input.
 */
type SENDGRID_RETRIEVE_USER_S_AUTHENTICATED_DOMAINS_INPUT = {
  /**
   * Username
   * @description Username for the subuser to find associated authenticated domains.
   */
  username?: string;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_USER_S_AUTHENTICATED_DOMAINS tool output.
 */
type SENDGRID_RETRIEVE_USER_S_AUTHENTICATED_DOMAINS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_YOUR_ACCOUNT_EMAIL_ADDRESS tool input.
 */
type SENDGRID_RETRIEVE_YOUR_ACCOUNT_EMAIL_ADDRESS_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_YOUR_ACCOUNT_EMAIL_ADDRESS tool output.
 */
type SENDGRID_RETRIEVE_YOUR_ACCOUNT_EMAIL_ADDRESS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_YOUR_CREDIT_BALANCE tool input.
 */
type SENDGRID_RETRIEVE_YOUR_CREDIT_BALANCE_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_YOUR_CREDIT_BALANCE tool output.
 */
type SENDGRID_RETRIEVE_YOUR_CREDIT_BALANCE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_YOUR_USERNAME tool input.
 */
type SENDGRID_RETRIEVE_YOUR_USERNAME_INPUT = object;

/**
 * Type of SENDGRID's SENDGRID_RETRIEVE_YOUR_USERNAME tool output.
 */
type SENDGRID_RETRIEVE_YOUR_USERNAME_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_RETURNS_A_LIST_OF_ALL_PARTNER_SETTINGS tool input.
 */
type SENDGRID_RETURNS_A_LIST_OF_ALL_PARTNER_SETTINGS_INPUT = {
  /**
   * Limit
   * @description `limit` sets the page size, i.e. maximum number of items from the list to be returned for a single API request. If omitted, the default page size is used.
   */
  limit?: number;
  /**
   * Offset
   * @description The number of items in the list to skip over before starting to retrieve the items for the requested page. The default `offset` of `0` represents the beginning of the list, i.e. the start of the first page. To request the second page of the list, set the `offset` to the page size as determined by `limit`. Use multiples of the page size as your `offset` to request further consecutive pages. E.g. assume your page size is set to `10`. An `offset` of `10` requests the second page, an `offset` of `20` requests the third page and so on, provided there are sufficiently many items in your list.
   * @default 0
   */
  offset: number;
};

/**
 * Type of SENDGRID's SENDGRID_RETURNS_A_LIST_OF_ALL_PARTNER_SETTINGS tool output.
 */
type SENDGRID_RETURNS_A_LIST_OF_ALL_PARTNER_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_SCHEDULE_A_CAMPAIGN tool input.
 */
type SENDGRID_SCHEDULE_A_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description Campaign Id
   */
  campaign_id?: number;
  /**
   * Send At
   * @description The unix timestamp for the date and time you would like your campaign to be sent out.
   */
  send_at?: number;
};

/**
 * Type of SENDGRID's SENDGRID_SCHEDULE_A_CAMPAIGN tool output.
 */
type SENDGRID_SCHEDULE_A_CAMPAIGN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_SCHEDULE_SINGLE_SEND tool input.
 */
type SENDGRID_SCHEDULE_SINGLE_SEND_INPUT = {
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Send At
   * Format: date-time
   * @description The ISO 8601 time at which to send the Single Send. This must be in future or the string `now`. SendGrid [Mail Send](https://docs.sendgrid.com/api-reference/mail-send/mail-send) emails can be scheduled up to 72 hours in advance. However, this scheduling constraint does not apply to emails sent via [Marketing Campaigns](https://docs.sendgrid.com/ui/sending-email/how-to-send-email-with-marketing-campaigns/).
   */
  send_at?: string;
};

/**
 * Type of SENDGRID's SENDGRID_SCHEDULE_SINGLE_SEND tool output.
 */
type SENDGRID_SCHEDULE_SINGLE_SEND_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_SEARCH_CONTACTS tool input.
 */
type SENDGRID_SEARCH_CONTACTS_INPUT = {
  /**
   * Query
   * @description An SGQL search string or other pattern.
   */
  query?: string;
};

/**
 * Type of SENDGRID's SENDGRID_SEARCH_CONTACTS tool output.
 */
type SENDGRID_SEARCH_CONTACTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_SEARCH_FOR_SUPPRESSIONS_WITHIN_A_GROUP tool input.
 */
type SENDGRID_SEARCH_FOR_SUPPRESSIONS_WITHIN_A_GROUP_INPUT = {
  /**
   * Group Id
   * @description The ID of the suppression group that you would like to search.
   */
  group_id?: string;
  /**
   * Recipient Emails
   * @description The array of email addresses to add or find.
   */
  recipient_emails?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_SEARCH_FOR_SUPPRESSIONS_WITHIN_A_GROUP tool output.
 */
type SENDGRID_SEARCH_FOR_SUPPRESSIONS_WITHIN_A_GROUP_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_SEARCH_RECIPIENTS tool input.
 */
type SENDGRID_SEARCH_RECIPIENTS_INPUT = {
  /**
   * Field  Name
   * @description Field Name
   */
  field__name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_SEARCH_RECIPIENTS tool output.
 */
type SENDGRID_SEARCH_RECIPIENTS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_SEGMENT_JSON_DATA_BY_SPECIFIC_CRITERIA tool input.
 */
type SENDGRID_SEGMENT_JSON_DATA_BY_SPECIFIC_CRITERIA_INPUT = {
  /**
   * Conditions
   * @description The conditions by which this segment should be created.
   */
  conditions?: {
      [key: string]: unknown;
  }[];
  /**
   * List Id
   * @description List Id
   */
  list_id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_SEGMENT_JSON_DATA_BY_SPECIFIC_CRITERIA tool output.
 */
type SENDGRID_SEGMENT_JSON_DATA_BY_SPECIFIC_CRITERIA_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_SEND_A_CAMPAIGN tool input.
 */
type SENDGRID_SEND_A_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description Campaign Id
   */
  campaign_id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_SEND_A_CAMPAIGN tool output.
 */
type SENDGRID_SEND_A_CAMPAIGN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_SEND_A_TEST_CAMPAIGN tool input.
 */
type SENDGRID_SEND_A_TEST_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description Campaign Id
   */
  campaign_id?: number;
  /**
   * To
   * Format: email
   * @description The email address that should receive the test campaign.
   */
  to?: string;
};

/**
 * Type of SENDGRID's SENDGRID_SEND_A_TEST_CAMPAIGN tool output.
 */
type SENDGRID_SEND_A_TEST_CAMPAIGN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_SEND_A_TEST_MARKETING_EMAIL tool input.
 */
type SENDGRID_SEND_A_TEST_MARKETING_EMAIL_INPUT = {
  /**
   * Custom Unsubscribe Url
   * @description A custom unsubscribe URL.
   */
  custom_unsubscribe_url?: string;
  /**
   * Emails
   * @description An array of email addresses you want to send the test message to.
   */
  emails?: string[];
  /**
   * From Address
   * Format: email
   * @description You can either specify this address or specify a verified sender ID.
   */
  from_address?: string;
  /**
   * Sender Id
   * @description This ID must belong to a verified sender. Alternatively, you may supply a `from_address` email.
   */
  sender_id?: number;
  /**
   * Suppression Group Id
   * @description Suppression Group Id
   */
  suppression_group_id?: number;
  /**
   * Template Id
   * Format: uuid
   * @description The ID of the template that you would like to use. If you use a template that contains a subject and content (either text or HTML), then those values specified at the personalizations or message level will not be used.
   */
  template_id?: string;
  /**
   * Version Id Override
   * Format: uuid
   * @description  You can override the active template with an alternative template version by passing the version ID in this field. If this field is blank, the active template version will be used.
   */
  version_id_override?: string;
};

/**
 * Type of SENDGRID's SENDGRID_SEND_A_TEST_MARKETING_EMAIL tool output.
 */
type SENDGRID_SEND_A_TEST_MARKETING_EMAIL_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_SEND_EMAIL_WITH_TWILIO_SEND_GRID tool input.
 */
type SENDGRID_SEND_EMAIL_WITH_TWILIO_SEND_GRID_INPUT = {
  /**
   * Asm  Group  Id
   * @description The unsubscribe group to associate with this email. See the [Suppressions API](https://docs.sendgrid.com/api-reference/suppressions/) to manage unsubscribe group IDs.
   */
  asm__group__id?: number;
  /**
   * Asm  Groups  To  Display
   * @description An array containing the unsubscribe groups that you would like to be displayed to a recipient on the unsubscribe preferences page. This page is displayed in the recipient"s browser when they click the unsubscribe link in your message.
   */
  asm__groups__to__display?: number[];
  /**
   * Attachments
   * @description An array of objects where you can define any attachments to be included with the message. Each object contains a `content` property, which must be a Base64 encoded string of the attachment itself, and `type`, `filename`, `disposition`, and `content_id` properties that tell SendGrid how to handle the attachment.
   */
  attachments?: {
      [key: string]: unknown;
  }[];
  /**
   * Batch Id
   * @description An ID representing a batch of emails to be sent at the same time. Including a `batch_id` in your request allows you to include this email in that batch. It also enables you to cancel or pause the delivery of that batch. See the [Scheduled Sends API](https://sendgrid.com/docs/api-reference/) for more information about scheduling your email.
   */
  batch_id?: string;
  /**
   * Categories
   * @description An array of category names assigned to this message. Categories allow you to group messages by categories you define. Categories should be used sparingly to create general groups that are relevant to you. Categories are not meant to be used to track individual mail sends. For more granular categorization and tracking, use the `custom_args` property. A category name cannot exceed 255 characters. See [**Working with Categories**](https://docs.sendgrid.com/for-developers/sending-email/categories) for more information.
   */
  categories?: string[];
  /**
   * Content
   * @description An array of objects, each containing a message body"s content and [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types). You must specify at least one MIME type and may include multiple. To include more than one MIME type, add an object for each type to the array.
   */
  content?: {
      [key: string]: unknown;
  }[];
  /**
   * Custom Args
   * @description Values that are specific to the entire send that will be carried along with the email and its activity data. Substitutions will not be made on custom arguments, so any string that is assigned to this property will be assumed to be the custom argument that you would like to be used. This parameter is overridden by `custom_args` set at the personalizations level. Total `custom_args` size may not exceed 10,000 bytes.
   */
  custom_args?: string;
  /**
   * From  Email
   * Format: email
   * @description The email address from which messages are sent. This address should be a verified sender in your Twilio SendGrid account. Email addresses specified in `personalizations` will override addresses set at the message level outside of the `personalizations` object.
   */
  from__email?: string;
  /**
   * From  Name
   * @description A name or title associated with the email address such as "Support" or "Alex".
   */
  from__name?: string;
  /**
   * Ip Pool Name
   * @description The IP Pool that you would like to send this email from. IP Pools allow you to group your dedicated Twilio SendGrid IP addresses in order to have more control over your deliverability. See [**IP Pools**](https://docs.sendgrid.com/ui/account-and-settings/ip-pools) for more information.
   */
  ip_pool_name?: string;
  /**
   * Mail  Settings  Bypass  Bounce  Management  Enable
   * @description Indicates if this setting is enabled.
   */
  mail__settings__bypass__bounce__management__enable?: boolean;
  /**
   * Mail  Settings  Bypass  List  Management  Enable
   * @description Indicates if this setting is enabled.
   */
  mail__settings__bypass__list__management__enable?: boolean;
  /**
   * Mail  Settings  Bypass  Spam  Management  Enable
   * @description Indicates if this setting is enabled.
   */
  mail__settings__bypass__spam__management__enable?: boolean;
  /**
   * Mail  Settings  Bypass  Unsubscribe  Management  Enable
   * @description Indicates if this setting is enabled.
   */
  mail__settings__bypass__unsubscribe__management__enable?: boolean;
  /**
   * Mail  Settings  Footer  Enable
   * @description Indicates if this setting is enabled.
   */
  mail__settings__footer__enable?: boolean;
  /**
   * Mail  Settings  Footer  Html
   * @description The HTML content of your footer.
   */
  mail__settings__footer__html?: string;
  /**
   * Mail  Settings  Footer  Text
   * @description The plain text content of your footer.
   */
  mail__settings__footer__text?: string;
  /**
   * Mail  Settings  Sandbox  Mode  Enable
   * @description Indicates if this setting is enabled.
   */
  mail__settings__sandbox__mode__enable?: boolean;
  /**
   * Personalizations
   * @description An array of messages and their metadata. Each object within the `personalizations` array can be thought of as a mail envelope—it defines who should receive an individual message and how that message should be handled. See [**Personalizations**](https://sendgrid.com/docs/for-developers/sending-email/personalizations/) for more information.
   */
  personalizations?: {
      [key: string]: unknown;
  }[];
  /**
   * Reply  To  Email
   * Format: email
   * @description An email address to which a message is sent. Email addresses specified in `personalizations` will override addresses set at the message level outside of the `personalizations` object.
   */
  reply__to__email?: string;
  /**
   * Reply  To  Name
   * @description A name or title associated with the email address such as "Alex".
   */
  reply__to__name?: string;
  /**
   * Reply To List
   * @description An array of recipients to whom replies will be sent. Each object in this array must contain a recipient"s email address. Each object in the array may optionally contain a recipient"s name. You can use either the `reply_to` property or `reply_to_list` property but not both.
   */
  reply_to_list?: {
      [key: string]: unknown;
  }[];
  /**
   * Send At
   * @description A [unix timestamp](https://en.wikipedia.org/wiki/Unix_time) allowing you to specify when your email should be sent. A send cannot be scheduled more than 72 hours in advance. This property may be overridden by the `send_at` property set at the personalizations level.
   */
  send_at?: number;
  /**
   * Subject
   * @description The global or _message level_ subject of your email. Subject lines set in personalizations objects will override this global subject line. See line length limits specified in [RFC 2822](https://www.rfc-editor.org/rfc/rfc2822#section-2.1.1) for guidance on subject line character limits.
   */
  subject?: string;
  /**
   * Template Id
   * @description An email template ID. A template that contains a subject and content—either text or html—will override any subject and content values specified at the `personalizations` or message level. If a template ID begins with `d-`, it is a dynamic template and will work with the `dynamic_template_data` property. If the template ID does not begin with `d-`, it is a standard SendGrid template and will work with the `substitutions` property. See [**How to Send an Email with Dynamic Templates**](https://docs.sendgrid.com/ui/sending-email/how-to-send-an-email-with-dynamic-templates) for more information about working with templates.
   */
  template_id?: string;
  /**
   * Tracking  Settings  Click  Tracking  Enable
   * @description Indicates if this setting is enabled.
   */
  tracking__settings__click__tracking__enable?: boolean;
  /**
   * Tracking  Settings  Click  Tracking  Enable  Text
   * @description Indicates if this setting should be included in the `text/plain` portion of your email.
   */
  tracking__settings__click__tracking__enable__text?: boolean;
  /**
   * Tracking  Settings  Ganalytics  Enable
   * @description Indicates if this setting is enabled.
   */
  tracking__settings__ganalytics__enable?: boolean;
  /**
   * Tracking  Settings  Ganalytics  Utm  Campaign
   * @description The name of the campaign.
   */
  tracking__settings__ganalytics__utm__campaign?: string;
  /**
   * Tracking  Settings  Ganalytics  Utm  Content
   * @description Used to differentiate your campaign from advertisements.
   */
  tracking__settings__ganalytics__utm__content?: string;
  /**
   * Tracking  Settings  Ganalytics  Utm  Medium
   * @description Name of the marketing medium. (e.g., Email)
   */
  tracking__settings__ganalytics__utm__medium?: string;
  /**
   * Tracking  Settings  Ganalytics  Utm  Source
   * @description Name of the referrer source. (e.g., Google, SomeDomain.com, or Marketing Email)
   */
  tracking__settings__ganalytics__utm__source?: string;
  /**
   * Tracking  Settings  Ganalytics  Utm  Term
   * @description Used to identify any paid keywords.
   */
  tracking__settings__ganalytics__utm__term?: string;
  /**
   * Tracking  Settings  Open  Tracking  Enable
   * @description Indicates if this setting is enabled.
   */
  tracking__settings__open__tracking__enable?: boolean;
  /**
   * Tracking  Settings  Open  Tracking  Substitution  Tag
   * @description Allows you to specify a substitution tag that you can insert in the body of your email at a location that you desire. This tag will be replaced by the open tracking pixel.
   */
  tracking__settings__open__tracking__substitution__tag?: string;
  /**
   * Tracking  Settings  Subscription  Tracking  Enable
   * @description Indicates if this setting is enabled.
   */
  tracking__settings__subscription__tracking__enable?: boolean;
  /**
   * Tracking  Settings  Subscription  Tracking  Html
   * @description HTML to be appended to the email with the subscription tracking link.
   */
  tracking__settings__subscription__tracking__html?: string;
  /**
   * Tracking  Settings  Subscription  Tracking  Substitution  Tag
   * @description A tag that will be replaced with the unsubscribe URL. If this property is used, it will override both the `text` and `html` properties. The URL of the link will be placed at the substitution tag"s location in the message body with no additional formatting.
   */
  tracking__settings__subscription__tracking__substitution__tag?: string;
  /**
   * Tracking  Settings  Subscription  Tracking  Text
   * @description Text to be appended to the email with the subscription tracking link.
   */
  tracking__settings__subscription__tracking__text?: string;
};

/**
 * Type of SENDGRID's SENDGRID_SEND_EMAIL_WITH_TWILIO_SEND_GRID tool output.
 */
type SENDGRID_SEND_EMAIL_WITH_TWILIO_SEND_GRID_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_SET_UP_REVERSE_DNS tool input.
 */
type SENDGRID_SET_UP_REVERSE_DNS_INPUT = {
  /**
   * Domain
   * @description The root, or sending, domain that will be used to send message from the IP address.
   */
  domain?: string;
  /**
   * Ip
   * @description The IP address for which you want to set up reverse DNS.
   */
  ip?: string;
  /**
   * Subdomain
   * @description The subdomain that will be used to send emails from the IP address. This should be the same as the subdomain used to set up an authenticated domain.
   */
  subdomain?: string;
};

/**
 * Type of SENDGRID's SENDGRID_SET_UP_REVERSE_DNS tool output.
 */
type SENDGRID_SET_UP_REVERSE_DNS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_SINGLE_SEND_CSV_STATS_RETRIEVAL tool input.
 */
type SENDGRID_SINGLE_SEND_CSV_STATS_RETRIEVAL_INPUT = {
  /**
   * Ids
   * @description The IDs of Single Sends for which to export stats.
   */
  ids?: string[];
  /**
   * Timezone
   * @description The [IANA Area/Region](https://en.wikipedia.org/wiki/Tz_database#Names_of_timezones) string representing the timezone in which the stats are to be presented; i.e. `"America/Chicago"`. This parameter changes the timezone format only; it does not alter which stats are returned.
   * @default UTC
   */
  timezone: string;
};

/**
 * Type of SENDGRID's SENDGRID_SINGLE_SEND_CSV_STATS_RETRIEVAL tool output.
 */
type SENDGRID_SINGLE_SEND_CSV_STATS_RETRIEVAL_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_START_WARMING_UP_AN_IP_ADDRESS tool input.
 */
type SENDGRID_START_WARMING_UP_AN_IP_ADDRESS_INPUT = {
  /**
   * Ip
   * @description The IP address that you want to begin warming up.
   */
  ip?: string;
};

/**
 * Type of SENDGRID's SENDGRID_START_WARMING_UP_AN_IP_ADDRESS tool output.
 */
type SENDGRID_START_WARMING_UP_AN_IP_ADDRESS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_STOP_WARMING_UP_AN_IP_ADDRESS tool input.
 */
type SENDGRID_STOP_WARMING_UP_AN_IP_ADDRESS_INPUT = {
  /**
   * Ip Address
   * @description The IP address that you want to retrieve the warmup status for.
   */
  ip_address?: string;
};

/**
 * Type of SENDGRID's SENDGRID_STOP_WARMING_UP_AN_IP_ADDRESS tool output.
 */
type SENDGRID_STOP_WARMING_UP_AN_IP_ADDRESS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_SUM_EMAIL_STATS_FOR_SUBUSERS tool input.
 */
type SENDGRID_SUM_EMAIL_STATS_FOR_SUBUSERS_INPUT = {
  /**
   * Aggregated By
   * @description How to group the statistics. Defaults to today. Must follow format YYYY-MM-DD.
   */
  aggregated_by?: string;
  /**
   * End Date
   * @description The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD.
   */
  end_date?: string;
  /**
   * Limit
   * @description Limits the number of results returned per page.
   * @default 5
   */
  limit: number;
  /**
   * Offset
   * @description The point in the list to begin retrieving results from.
   * @default 0
   */
  offset: number;
  /**
   * Sort By Direction
   * @description The direction you want to sort.
   * @enum {string}
   */
  sort_by_direction?: "desc" | "asc";
  /**
   * Sort By Metric
   * @description The metric that you want to sort by.  Must be a single metric.
   * @default delivered
   */
  sort_by_metric: string;
  /**
   * Start Date
   * @description The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.
   */
  start_date?: string;
};

/**
 * Type of SENDGRID's SENDGRID_SUM_EMAIL_STATS_FOR_SUBUSERS tool output.
 */
type SENDGRID_SUM_EMAIL_STATS_FOR_SUBUSERS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_TEST_AN_EVENT_WEBHOOK_S_SETTINGS tool input.
 */
type SENDGRID_TEST_AN_EVENT_WEBHOOK_S_SETTINGS_INPUT = {
  /**
   * Id
   * @description The ID of the Event Webhook you want to retrieve.
   */
  id?: string;
  /**
   * Oauth Client Id
   * @description The client ID Twilio SendGrid sends to your OAuth server or service provider to generate an OAuth access token. When passing data in this property, you must also include the `oauth_token_url` property.
   */
  oauth_client_id?: string;
  /**
   * Oauth Client Secret
   * @description The `oauth_client_secret` is needed only once to create an access token. SendGrid will store this secret, allowing you to update your Client ID and Token URL without passing the secret to SendGrid again. When passing data in this field, you must also include the `oauth_client_id` and `oauth_token_url` properties.
   */
  oauth_client_secret?: string;
  /**
   * Oauth Token Url
   * @description The URL where Twilio SendGrid sends the Client ID and Client Secret to generate an access token. This should be your OAuth server or service provider. When passing data in this field, you must also include the `oauth_client_id` property.
   */
  oauth_token_url?: string;
  /**
   * Url
   * @description The URL where you would like the test notification to be sent.
   */
  url?: string;
};

/**
 * Type of SENDGRID's SENDGRID_TEST_AN_EVENT_WEBHOOK_S_SETTINGS tool output.
 */
type SENDGRID_TEST_AN_EVENT_WEBHOOK_S_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_THIS_REQUEST_RETURNS_A_SINGLE_BULK_EMAIL_VALIDATION_JOB tool input.
 */
type SENDGRID_THIS_REQUEST_RETURNS_A_SINGLE_BULK_EMAIL_VALIDATION_JOB_INPUT = {
  /**
   * Job Id
   * @description The ID of the Bulk Email Address Validation Job you wish to retrieve.
   */
  job_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_THIS_REQUEST_RETURNS_A_SINGLE_BULK_EMAIL_VALIDATION_JOB tool output.
 */
type SENDGRID_THIS_REQUEST_RETURNS_A_SINGLE_BULK_EMAIL_VALIDATION_JOB_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_TOGGLE_WEBHOOK_SIGNATURE tool input.
 */
type SENDGRID_TOGGLE_WEBHOOK_SIGNATURE_INPUT = {
  /**
   * Enabled
   * @description Enable or disable the webhook by setting this property to `true` or `false`, respectively.
   */
  enabled?: boolean;
  /**
   * Id
   * @description The ID of the Event Webhook you want to retrieve.
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_TOGGLE_WEBHOOK_SIGNATURE tool output.
 */
type SENDGRID_TOGGLE_WEBHOOK_SIGNATURE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UNLINK_SUBUSER_DOMAIN tool input.
 */
type SENDGRID_UNLINK_SUBUSER_DOMAIN_INPUT = {
  /**
   * Domain Id
   * @description ID of the authenticated domain to be disassociated with the subuser.
   */
  domain_id?: number;
  /**
   * Username
   * @description Username for the subuser to find associated authenticated domain.
   */
  username?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UNLINK_SUBUSER_DOMAIN tool output.
 */
type SENDGRID_UNLINK_SUBUSER_DOMAIN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UNSCHEDULE_A_SCHEDULED_CAMPAIGN tool input.
 */
type SENDGRID_UNSCHEDULE_A_SCHEDULED_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description Campaign Id
   */
  campaign_id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_UNSCHEDULE_A_SCHEDULED_CAMPAIGN tool output.
 */
type SENDGRID_UNSCHEDULE_A_SCHEDULED_CAMPAIGN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_ACCOUNT_OFFERINGS tool input.
 */
type SENDGRID_UPDATE_ACCOUNT_OFFERINGS_INPUT = {
  /**
   * Account Id
   * @description Twilio SendGrid account ID
   */
  accountID?: string;
  /**
   * Offerings
   * @description List of offerings to assign to account.
   */
  offerings?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_ACCOUNT_OFFERINGS tool output.
 */
type SENDGRID_UPDATE_ACCOUNT_OFFERINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_ADDRESS_WHITELIST_MAIL_SETTINGS tool input.
 */
type SENDGRID_UPDATE_ADDRESS_WHITELIST_MAIL_SETTINGS_INPUT = {
  /**
   * Enabled
   * @description Indicates if your email address whitelist is enabled.
   */
  enabled?: boolean;
  /**
   * List
   * @description Either a single email address that you want whitelisted or a domain, for which all email addresses belonging to this domain will be whitelisted.
   */
  list?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_ADDRESS_WHITELIST_MAIL_SETTINGS tool output.
 */
type SENDGRID_UPDATE_ADDRESS_WHITELIST_MAIL_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_AN_ACCOUNT_S_STATE tool input.
 */
type SENDGRID_UPDATE_AN_ACCOUNT_S_STATE_INPUT = {
  /**
   * Account Id
   * @description Twilio SendGrid account ID
   */
  accountID?: string;
  /**
   * State
   * @description State
   * @enum {string}
   */
  state?: "activated" | "deactivated";
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_AN_ACCOUNT_S_STATE tool output.
 */
type SENDGRID_UPDATE_AN_ACCOUNT_S_STATE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_AN_ALERT tool input.
 */
type SENDGRID_UPDATE_AN_ALERT_INPUT = {
  /**
   * Alert Id
   * @description The ID of the alert you would like to retrieve.
   */
  alert_id?: number;
  /**
   * Email To
   * @description The new email address you want your alert to be sent to. Example: test@example.com
   */
  email_to?: string;
  /**
   * Frequency
   * @description The new frequency at which to send the stats_notification alert. Example: monthly
   */
  frequency?: string;
  /**
   * Percentage
   * @description The new percentage threshold at which the usage_limit alert will be sent. Example: 90
   */
  percentage?: number;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_AN_ALERT tool output.
 */
type SENDGRID_UPDATE_AN_ALERT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_AN_AUTHENTICATED_DOMAIN tool input.
 */
type SENDGRID_UPDATE_AN_AUTHENTICATED_DOMAIN_INPUT = {
  /**
   * Custom Spf
   * @description Indicates whether to generate a custom SPF record for manual security.
   * @default false
   */
  custom_spf: boolean;
  /**
   * Default
   * @description Indicates whether this is the default authenticated domain.
   * @default false
   */
  default: boolean;
  /**
   * Domain Id
   * @description Domain Id
   */
  domain_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_AN_AUTHENTICATED_DOMAIN tool output.
 */
type SENDGRID_UPDATE_AN_AUTHENTICATED_DOMAIN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_AN_IP_POOL_NAME tool input.
 */
type SENDGRID_UPDATE_AN_IP_POOL_NAME_INPUT = {
  /**
   * Name
   * @description The name to assign to the IP Pool. An IP Pool name cannot begin with a space or period.
   */
  name?: string;
  /**
   * Poolid
   * @description Specifies the unique ID for an IP Pool.
   */
  poolid?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_AN_IP_POOL_NAME tool output.
 */
type SENDGRID_UPDATE_AN_IP_POOL_NAME_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_AN_SSO_INTEGRATION tool input.
 */
type SENDGRID_UPDATE_AN_SSO_INTEGRATION_INPUT = {
  /**
   * Completed Integration
   * @description Indicates if the integration is complete.
   */
  completed_integration?: boolean;
  /**
   * Enabled
   * @description Indicates if the integration is enabled.
   */
  enabled?: boolean;
  /**
   * Entity Id
   * @description An identifier provided by your IdP to identify Twilio SendGrid in the SAML interaction. This is called the "SAML Issuer ID" in the Twilio SendGrid UI.
   */
  entity_id?: string;
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Name
   * @description The name of your integration. This name can be anything that makes sense for your organization (eg. Twilio SendGrid)
   */
  name?: string;
  /**
   * Si
   * @description If this parameter is set to `true`, the response will include the `completed_integration` field.
   */
  si?: boolean;
  /**
   * Signin Url
   * @description The IdP"s SAML POST endpoint. This endpoint should receive requests and initiate an SSO login flow. This is called the "Embed Link" in the Twilio SendGrid UI.
   */
  signin_url?: string;
  /**
   * Signout Url
   * @description This URL is relevant only for an IdP-initiated authentication flow. If a user authenticates from their IdP, this URL will return them to their IdP when logging out.
   */
  signout_url?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_AN_SSO_INTEGRATION tool output.
 */
type SENDGRID_UPDATE_AN_SSO_INTEGRATION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_API_KEY_NAME tool input.
 */
type SENDGRID_UPDATE_API_KEY_NAME_INPUT = {
  /** Api Key Id */
  api_key_id?: string;
  /**
   * Name
   * @description The new name of the API Key.
   */
  name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_API_KEY_NAME tool output.
 */
type SENDGRID_UPDATE_API_KEY_NAME_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_API_KEY_NAME_AND_SCOPES tool input.
 */
type SENDGRID_UPDATE_API_KEY_NAME_AND_SCOPES_INPUT = {
  /** Api Key Id */
  api_key_id?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Scopes
   * @description Scopes
   */
  scopes?: string[];
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_API_KEY_NAME_AND_SCOPES tool output.
 */
type SENDGRID_UPDATE_API_KEY_NAME_AND_SCOPES_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_BRANDED_LINK tool input.
 */
type SENDGRID_UPDATE_A_BRANDED_LINK_INPUT = {
  /**
   * Default
   * @description Default
   */
  default?: boolean;
  /**
   * Id
   * @description The ID of the branded link you want to retrieve.
   */
  id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_BRANDED_LINK tool output.
 */
type SENDGRID_UPDATE_A_BRANDED_LINK_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_CAMPAIGN tool input.
 */
type SENDGRID_UPDATE_A_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description The id of the campaign you would like to retrieve.
   */
  campaign_id?: number;
  /**
   * Categories
   * @description The categories you want to tag on this campaign.
   */
  categories?: string[];
  /**
   * Html Content
   * @description The HTML content of this campaign.
   */
  html_content?: string;
  /**
   * Plain Content
   * @description The plain content of this campaign.
   */
  plain_content?: string;
  /**
   * Subject
   * @description The subject line for your campaign.
   */
  subject?: string;
  /**
   * Title
   * @description The title of the campaign.
   */
  title?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_CAMPAIGN tool output.
 */
type SENDGRID_UPDATE_A_CAMPAIGN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_LIST tool input.
 */
type SENDGRID_UPDATE_A_LIST_INPUT = {
  /**
   * List Id
   * @description List Id
   */
  list_id?: number;
  /**
   * Name
   * @description The new name for your list.
   */
  name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_LIST tool output.
 */
type SENDGRID_UPDATE_A_LIST_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_PARSE_SETTING tool input.
 */
type SENDGRID_UPDATE_A_PARSE_SETTING_INPUT = {
  /**
   * Hostname
   * @description A specific and unique domain or subdomain that you have created to use exclusively to parse your incoming email. For example, `parse.yourdomain.com`.
   */
  hostname?: string;
  /**
   * Send Raw
   * @description Indicates if you would like SendGrid to post the original MIME-type content of your parsed email. When this parameter is set to `true`, SendGrid will send a JSON payload of the content of your email.
   */
  send_raw?: boolean;
  /**
   * Spam Check
   * @description Indicates if you would like SendGrid to check the content parsed from your emails for spam before POSTing them to your domain.
   */
  spam_check?: boolean;
  /**
   * Url
   * @description The public URL where you would like SendGrid to POST the data parsed from your email. Any emails sent with the given hostname provided (whose MX records have been updated to point to SendGrid) will be parsed and POSTed to this URL.
   */
  url?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_PARSE_SETTING tool output.
 */
type SENDGRID_UPDATE_A_PARSE_SETTING_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_SCHEDULED_CAMPAIGN tool input.
 */
type SENDGRID_UPDATE_A_SCHEDULED_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description Campaign Id
   */
  campaign_id?: number;
  /**
   * Send At
   * @description Send At
   */
  send_at?: number;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_SCHEDULED_CAMPAIGN tool output.
 */
type SENDGRID_UPDATE_A_SCHEDULED_CAMPAIGN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_SCHEDULED_SEND tool input.
 */
type SENDGRID_UPDATE_A_SCHEDULED_SEND_INPUT = {
  /**
   * Batch Id
   * @description Batch Id
   */
  batch_id?: string;
  /**
   * Status
   * @description Status
   * @enum {string}
   */
  status?: "cancel" | "pause";
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_SCHEDULED_SEND tool output.
 */
type SENDGRID_UPDATE_A_SCHEDULED_SEND_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_SEGMENT tool input.
 */
type SENDGRID_UPDATE_A_SEGMENT_INPUT = {
  /**
   * Conditions
   * @description The conditions by which this segment should be created.
   */
  conditions?: {
      [key: string]: unknown;
  }[];
  /**
   * List Id
   * @description The list ID you would like this segment to be built from.
   */
  list_id?: number;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Segment Id
   * @description Segment Id
   */
  segment_id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_SEGMENT tool output.
 */
type SENDGRID_UPDATE_A_SEGMENT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_SENDER tool input.
 */
type SENDGRID_UPDATE_A_SENDER_INPUT = {
  /**
   * Address
   * @description The physical address of the Sender.
   */
  address?: string;
  /**
   * Address 2
   * @description Additional Sender address information.
   */
  address_2?: string;
  /**
   * City
   * @description The city of the Sender.
   */
  city?: string;
  /**
   * Country
   * @description The country of the Sender.
   */
  country?: string;
  /**
   * From  Email
   * @description The email address from which your recipient will receive emails.
   */
  from__email?: string;
  /**
   * From  Name
   * @description The name appended to the from email field. Typically your name or company name.
   */
  from__name?: string;
  /**
   * Id
   * @description The unique identifier of the Sender.
   */
  id?: number;
  /**
   * Nickname
   * @description A nickname for the Sender. Not used for sending.
   */
  nickname?: string;
  /**
   * Reply  To  Email
   * @description The email address to which your recipient will reply.
   */
  reply__to__email?: string;
  /**
   * Reply  To  Name
   * @description The name appended to the reply to email field. Typically your name or company name.
   */
  reply__to__name?: string;
  /**
   * State
   * @description The state of the Sender.
   */
  state?: string;
  /**
   * Zip
   * @description The zipcode of the Sender.
   */
  zip?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_SENDER tool output.
 */
type SENDGRID_UPDATE_A_SENDER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_SENDER_IDENTITY tool input.
 */
type SENDGRID_UPDATE_A_SENDER_IDENTITY_INPUT = {
  /**
   * Address
   * @description The physical address of the sender identity.
   */
  address?: string;
  /**
   * Address 2
   * @description Additional sender identity address information.
   */
  address_2?: string;
  /**
   * City
   * @description The city of the sender identity.
   */
  city?: string;
  /**
   * Country
   * @description The country of the sender identity.
   */
  country?: string;
  /**
   * From  Email
   * @description The email address from which your recipient will receive emails.
   */
  from__email?: string;
  /**
   * From  Name
   * @description The name appended to the from email field. Typically your name or company name.
   */
  from__name?: string;
  /**
   * Nickname
   * @description A nickname for the sender identity. Not used for sending.
   */
  nickname?: string;
  /**
   * Reply  To  Email
   * @description The email address to which your recipient will reply.
   */
  reply__to__email?: string;
  /**
   * Reply  To  Name
   * @description The name appended to the reply to email field. Typically your name or company name.
   */
  reply__to__name?: string;
  /**
   * Sender Id
   * @description The ID of the sender identity that you want to retrieve.
   */
  sender_id?: number;
  /**
   * State
   * @description The state of the sender identity.
   */
  state?: string;
  /**
   * Zip
   * @description The zipcode of the sender identity.
   */
  zip?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_SENDER_IDENTITY tool output.
 */
type SENDGRID_UPDATE_A_SENDER_IDENTITY_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_SINGLE_EVENT_WEBHOOK_BY_ID tool input.
 */
type SENDGRID_UPDATE_A_SINGLE_EVENT_WEBHOOK_BY_ID_INPUT = {
  /**
   * Bounce
   * @description Set this property to `true` to receive bounce events. A bounce occurs when a receiving server could not or would not accept a message.
   */
  bounce?: boolean;
  /**
   * Click
   * @description Set this property to `true` to receive click events. Click events occur when a recipient clicks on a link within the message. You must [enable Click Tracking](https://docs.sendgrid.com/ui/account-and-settings/tracking#click-tracking) to receive this type of event.
   */
  click?: boolean;
  /**
   * Deferred
   * @description Set this property to `true` to receive deferred events. Deferred events occur when a recipient"s email server temporarily rejects a message.
   */
  deferred?: boolean;
  /**
   * Delivered
   * @description Set this property to `true` to receive delivered events. Delivered events occur when a message has been successfully delivered to the receiving server.
   */
  delivered?: boolean;
  /**
   * Dropped
   * @description Set this property to `true` to receive dropped events. Dropped events occur when your message is not delivered by Twilio SendGrid. Dropped events are accomponied by a `reason` property, which indicates why the message was dropped. Reasons for a dropped message include: Invalid SMTPAPI header, Spam Content (if spam checker app enabled), Unsubscribed Address, Bounced Address, Spam Reporting Address, Invalid, Recipient List over Package Quota.
   */
  dropped?: boolean;
  /**
   * Enabled
   * @description Set this property to `true` to enable the Event Webhook or `false` to disable it.
   */
  enabled?: boolean;
  /**
   * Friendly Name
   * @description Optionally set this property to a friendly name for the Event Webhook. A friendly name may be assigned to each of your webhooks to help you differentiate them. The friendly name is for convenience only. You should use the webhook `id` property for any programmatic tasks.
   */
  friendly_name?: string;
  /**
   * Group Resubscribe
   * @description Set this property to `true` to receive group resubscribe events. Group resubscribes occur when recipients resubscribe to a specific [unsubscribe group](https://docs.sendgrid.com/ui/sending-email/create-and-manage-unsubscribe-groups) by updating their subscription preferences. You must [enable Subscription Tracking](https://docs.sendgrid.com/ui/account-and-settings/tracking#subscription-tracking) to receive this type of event.
   */
  group_resubscribe?: boolean;
  /**
   * Group Unsubscribe
   * @description Set this property to `true` to receive group unsubscribe events. Group unsubscribes occur when recipients unsubscribe from a specific [unsubscribe group](https://docs.sendgrid.com/ui/sending-email/create-and-manage-unsubscribe-groups) either by direct link or by updating their subscription preferences. You must [enable Subscription Tracking](https://docs.sendgrid.com/ui/account-and-settings/tracking#subscription-tracking) to receive this type of event.
   */
  group_unsubscribe?: boolean;
  /**
   * Id
   * @description The ID of the Event Webhook you want to retrieve.
   */
  id?: string;
  /**
   * Include
   * @description Use this to include optional fields in the response payload. When this is set to `include=account_status_change`, the `account_status_change` field will be part of the response payload and set to `false` by default. See [Update an event webhook](https://docs.sendgrid.com/api-reference/webhooks/update-an-event-webhook) for enabling this webhook notification which lets you subscribe to account status change events related to compliance action taken by SendGrid.
   */
  include?: string;
  /**
   * Oauth Client Id
   * @description Set this property to the OAuth client ID that SendGrid will pass to your OAuth server or service provider to generate an OAuth access token. When passing data in this property, you must also include the `oauth_token_url` property.
   */
  oauth_client_id?: string;
  /**
   * Oauth Client Secret
   * @description Set this property to the OAuth client secret that SendGrid will pass to your OAuth server or service provider to generate an OAuth access token. This secret is needed only once to create an access token. SendGrid will store the secret, allowing you to update your client ID and Token URL without passing the secret to SendGrid again. When passing data in this field, you must also include the `oauth_client_id` and `oauth_token_url` properties.
   */
  oauth_client_secret?: string;
  /**
   * Oauth Token Url
   * @description Set this property to the URL where SendGrid will send the OAuth client ID and client secret to generate an OAuth access token. This should be your OAuth server or service provider. When passing data in this field, you must also include the `oauth_client_id` property.
   */
  oauth_token_url?: string;
  /**
   * Open
   * @description Set this property to `true` to receive open events. Open events occur when a recipient has opened the HTML message. You must [enable Open Tracking](https://docs.sendgrid.com/ui/account-and-settings/tracking#open-tracking) to receive this type of event.
   */
  open?: boolean;
  /**
   * Processed
   * @description Set this property to `true` to receive processed events. Processed events occur when a message has been received by Twilio SendGrid and the message is ready to be delivered.
   */
  processed?: boolean;
  /**
   * Spam Report
   * @description Set this property to `true` to receive spam report events. Spam reports occur when recipients mark a message as spam.
   */
  spam_report?: boolean;
  /**
   * Unsubscribe
   * @description Set this property to `true` to receive unsubscribe events. Unsubscribes occur when recipients click on a message"s subscription management link. You must [enable Subscription Tracking](https://docs.sendgrid.com/ui/account-and-settings/tracking#subscription-tracking) to receive this type of event.
   */
  unsubscribe?: boolean;
  /**
   * Url
   * @description Set this property to the URL where you want the Event Webhook to send event data.
   */
  url?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_SINGLE_EVENT_WEBHOOK_BY_ID tool output.
 */
type SENDGRID_UPDATE_A_SINGLE_EVENT_WEBHOOK_BY_ID_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_SUPPRESSION_GROUP tool input.
 */
type SENDGRID_UPDATE_A_SUPPRESSION_GROUP_INPUT = {
  /**
   * Description
   * @description A brief description of your suppression group. Required when creating a group.
   */
  description?: string;
  /**
   * Group Id
   * @description The ID of the suppression group you would like to retrieve.
   */
  group_id?: string;
  /**
   * Is Default
   * @description Indicates if you would like this to be your default suppression group.
   */
  is_default?: boolean;
  /**
   * Name
   * @description The name of your suppression group. Required when creating a group.
   */
  name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_SUPPRESSION_GROUP tool output.
 */
type SENDGRID_UPDATE_A_SUPPRESSION_GROUP_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_USER_S_PROFILE tool input.
 */
type SENDGRID_UPDATE_A_USER_S_PROFILE_INPUT = {
  /**
   * Address
   * @description The street address for this user profile.
   */
  address?: string;
  /**
   * Address2
   * @description An optional second line for the street address of this user profile.
   */
  address2?: string;
  /**
   * City
   * @description The city for the user profile.
   */
  city?: string;
  /**
   * Company
   * @description That company that this user profile is associated with.
   */
  company?: string;
  /**
   * Country
   * @description Th country of this user profile.
   */
  country?: string;
  /**
   * First Name
   * @description The first name of the user.
   */
  first_name?: string;
  /**
   * Last Name
   * @description The last name of the user.
   */
  last_name?: string;
  /**
   * Phone
   * @description The phone number for the user.
   */
  phone?: string;
  /**
   * State
   * @description The state for this user.
   */
  state?: string;
  /**
   * Website
   * @description The website associated with this user.
   */
  website?: string;
  /**
   * Zip
   * @description The zip code for this user.
   */
  zip?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_A_USER_S_PROFILE tool output.
 */
type SENDGRID_UPDATE_A_USER_S_PROFILE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_BOUNCE_PURGE_MAIL_SETTINGS tool input.
 */
type SENDGRID_UPDATE_BOUNCE_PURGE_MAIL_SETTINGS_INPUT = {
  /**
   * Enabled
   * @description Indicates if the bounce purge mail setting is enabled.
   */
  enabled?: boolean;
  /**
   * Hard Bounces
   * @description The number of days after which SendGrid will purge all contacts from your hard bounces suppression lists.
   */
  hard_bounces?: number;
  /**
   * Soft Bounces
   * @description The number of days after which SendGrid will purge all contacts from your soft bounces suppression lists.
   */
  soft_bounces?: number;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_BOUNCE_PURGE_MAIL_SETTINGS tool output.
 */
type SENDGRID_UPDATE_BOUNCE_PURGE_MAIL_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_CLICK_TRACKING_SETTINGS tool input.
 */
type SENDGRID_UPDATE_CLICK_TRACKING_SETTINGS_INPUT = {
  /**
   * Enabled
   * @description The setting you want to use for click tracking.
   */
  enabled?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_CLICK_TRACKING_SETTINGS tool output.
 */
type SENDGRID_UPDATE_CLICK_TRACKING_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_CUSTOM_FIELD_DEFINITION tool input.
 */
type SENDGRID_UPDATE_CUSTOM_FIELD_DEFINITION_INPUT = {
  /**
   * Custom Field Id
   * @description Custom Field Id
   */
  custom_field_id?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_CUSTOM_FIELD_DEFINITION tool output.
 */
type SENDGRID_UPDATE_CUSTOM_FIELD_DEFINITION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_DESIGN tool input.
 */
type SENDGRID_UPDATE_DESIGN_INPUT = {
  /**
   * Categories
   * @description The list of categories applied to the design
   */
  categories?: string[];
  /**
   * Generate Plain Content
   * @description If true, plain_content is always generated from html_content. If false, plain_content is not altered.
   * @default true
   */
  generate_plain_content: boolean;
  /**
   * Html Content
   * @description The HTML content of the Design.
   */
  html_content?: string;
  /**
   * Id
   * @description The ID of the Design you want to duplicate.
   */
  id?: string;
  /**
   * Name
   * @description Name of the Design.
   * @default My Design
   */
  name: string;
  /**
   * Plain Content
   * @description Plain text content of the Design.
   * @default <generated from html_content if left empty>
   */
  plain_content: string;
  /**
   * Subject
   * @description Subject of the Design.
   */
  subject?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_DESIGN tool output.
 */
type SENDGRID_UPDATE_DESIGN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_DETAILS_FOR_AN_IP_ADDRESS tool input.
 */
type SENDGRID_UPDATE_DETAILS_FOR_AN_IP_ADDRESS_INPUT = {
  /**
   * Ip
   * @description The `ip` path parameter specifies an IP address to make the request against.
   */
  ip?: string;
  /**
   * Is Auto Warmup
   * @description Indicates if the IP address is set to automatically [warmup](https://docs.sendgrid.com/ui/sending-email/warming-up-an-ip-address).
   */
  is_auto_warmup?: boolean;
  /**
   * Is Enabled
   * @description Indicates if the IP address is billed and able to send email. This parameter applies to non-Twilio SendGrid APIs that been added to your Twilio SendGrid account. This parameter"s value is `null` for Twilio SendGrid IP addresses.
   */
  is_enabled?: boolean;
  /**
   * Is Parent Assigned
   * @description Indicates if a parent on the account is able to send email from the IP address.
   */
  is_parent_assigned?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_DETAILS_FOR_AN_IP_ADDRESS tool output.
 */
type SENDGRID_UPDATE_DETAILS_FOR_AN_IP_ADDRESS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_ENFORCED_TLS_SETTINGS tool input.
 */
type SENDGRID_UPDATE_ENFORCED_TLS_SETTINGS_INPUT = {
  /**
   * Require Tls
   * @description Indicates if you want to require your recipients to support TLS.
   */
  require_tls?: boolean;
  /**
   * Require Valid Cert
   * @description Indicates if you want to require your recipients to have a valid certificate.
   */
  require_valid_cert?: boolean;
  /**
   * Version
   * @description Version
   */
  version?: number;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_ENFORCED_TLS_SETTINGS tool output.
 */
type SENDGRID_UPDATE_ENFORCED_TLS_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_FOOTER_MAIL_SETTINGS tool input.
 */
type SENDGRID_UPDATE_FOOTER_MAIL_SETTINGS_INPUT = {
  /**
   * Enabled
   * @description Indicates if the Footer mail setting is currently enabled.
   */
  enabled?: boolean;
  /**
   * Html Content
   * @description The custom HTML content of your email footer.
   */
  html_content?: string;
  /**
   * Plain Content
   * @description The plain text content of your email footer.
   */
  plain_content?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_FOOTER_MAIL_SETTINGS tool output.
 */
type SENDGRID_UPDATE_FOOTER_MAIL_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_FORWARD_BOUNCE_MAIL_SETTINGS tool input.
 */
type SENDGRID_UPDATE_FORWARD_BOUNCE_MAIL_SETTINGS_INPUT = {
  /**
   * Email
   * @description The email address that you would like your bounce reports forwarded to.
   */
  email?: string;
  /**
   * Enabled
   * @description Indicates if the bounce forwarding mail setting is enabled.
   */
  enabled?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_FORWARD_BOUNCE_MAIL_SETTINGS tool output.
 */
type SENDGRID_UPDATE_FORWARD_BOUNCE_MAIL_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_FORWARD_SPAM_MAIL_SETTINGS tool input.
 */
type SENDGRID_UPDATE_FORWARD_SPAM_MAIL_SETTINGS_INPUT = {
  /**
   * Email
   * @description The email address where you would like the spam reports to be forwarded.
   */
  email?: string;
  /**
   * Enabled
   * @description Indicates if the Forward Spam setting is enabled.
   */
  enabled?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_FORWARD_SPAM_MAIL_SETTINGS tool output.
 */
type SENDGRID_UPDATE_FORWARD_SPAM_MAIL_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_GOOGLE_ANALYTICS_SETTINGS tool input.
 */
type SENDGRID_UPDATE_GOOGLE_ANALYTICS_SETTINGS_INPUT = {
  /**
   * Enabled
   * @description Indicates if Google Analytics is enabled.
   */
  enabled?: boolean;
  /**
   * Utm Campaign
   * @description The name of the campaign.
   */
  utm_campaign?: string;
  /**
   * Utm Content
   * @description Used to differentiate ads
   */
  utm_content?: string;
  /**
   * Utm Medium
   * @description Name of the marketing medium (e.g. "Email").
   */
  utm_medium?: string;
  /**
   * Utm Source
   * @description Name of the referrer source.
   */
  utm_source?: string;
  /**
   * Utm Term
   * @description Any paid keywords.
   */
  utm_term?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_GOOGLE_ANALYTICS_SETTINGS tool output.
 */
type SENDGRID_UPDATE_GOOGLE_ANALYTICS_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_INTEGRATION tool input.
 */
type SENDGRID_UPDATE_INTEGRATION_INPUT = {
  /**
   * Destination
   * @description Destination
   * @enum {string}
   */
  destination?: "Segment";
  /**
   * Filters  Email  Events
   * @description The possible SendGrid email event types for event forwarding. Specify all the email event types that you would like to forward to the Integration"s destination.
   */
  filters__email__events?: string[];
  /**
   * Id
   * @description The ID of the Integration you would like to update.
   */
  id?: string;
  /**
   * Label
   * @description The nickname for the Integration.
   * @default Untitled Integration
   */
  label: string;
  /**
   * Properties  Destination  Region
   * @description Destination Region
   * @enum {string}
   */
  properties__destination__region?: "EU" | "US";
  /**
   * Properties  Write  Key
   * @description The write key provided by the Segment Source you"d like to have events forwarded to. Must be between 6 and 51 characters.
   */
  properties__write__key?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_INTEGRATION tool output.
 */
type SENDGRID_UPDATE_INTEGRATION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_LIST tool input.
 */
type SENDGRID_UPDATE_LIST_INPUT = {
  /**
   * Id
   * @description The ID of the list on which you want to perform the operation.
   */
  id?: string;
  /**
   * Name
   * @description Your name for your list.
   */
  name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_LIST tool output.
 */
type SENDGRID_UPDATE_LIST_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_OPEN_TRACKING_SETTINGS tool input.
 */
type SENDGRID_UPDATE_OPEN_TRACKING_SETTINGS_INPUT = {
  /**
   * Enabled
   * @description The new status that you want to set for open tracking.
   */
  enabled?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_OPEN_TRACKING_SETTINGS tool output.
 */
type SENDGRID_UPDATE_OPEN_TRACKING_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_SEGMENT tool input.
 */
type SENDGRID_UPDATE_SEGMENT_INPUT = {
  /**
   * Name
   * @description Name of the segment.
   */
  name?: string;
  /**
   * Query Dsl
   * @description SQL query which will filter contacts based on the conditions provided
   */
  query_dsl?: string;
  /**
   * Segment Id
   * @description Segment Id
   */
  segment_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_SEGMENT tool output.
 */
type SENDGRID_UPDATE_SEGMENT_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_SINGLE_SEND tool input.
 */
type SENDGRID_UPDATE_SINGLE_SEND_INPUT = {
  /**
   * Categories
   * @description The categories to associate with this Single Send.
   */
  categories?: string[];
  /**
   * Email  Config  Custom  Unsubscribe  Url
   * Format: uri
   * @description The URL allowing recipients to unsubscribe — you must provide this or the `suppression_group_id`.
   */
  email__config__custom__unsubscribe__url?: string;
  /**
   * Email  Config  Design  Id
   * @description A `design_id` can be used in place of `html_content`, `plain_content`, and/or `subject`. You can retrieve a design"s ID from the ["List Designs" endpoint](https://docs.sendgrid.com/api-reference/designs-api/list-designs) or by pulling it from the design"s detail page URL in the Marketing Campaigns App.
   */
  email__config__design__id?: string;
  /**
   * Email  Config  Editor
   * @description Editor
   * @enum {string}
   */
  email__config__editor?: "code" | "design";
  /**
   * Email  Config  Generate  Plain  Content
   * @description If set to `true`, `plain_content` is always generated from `html_content`. If set to false, `plain_content` is not altered.
   * @default true
   */
  email__config__generate__plain__content: boolean;
  /**
   * Email  Config  Html  Content
   * @description The HTML content of the Single Send. Do not include this field when using a `design_id`.
   */
  email__config__html__content?: string;
  /**
   * Email  Config  Ip  Pool
   * @description The name of the IP Pool from which the Single Send emails are sent.
   */
  email__config__ip__pool?: string;
  /**
   * Email  Config  Plain  Content
   * @description The plain text content of the Single Send. Do not include this field when using a `design_id`.
   */
  email__config__plain__content?: string;
  /**
   * Email  Config  Sender  Id
   * @description The ID of the verified Sender. You can retrieve a verified Sender"s ID from the ["Get Verified Senders" endpoint](https://www.twilio.com/docs/sendgrid/api-reference/sender-verification/get-all-verified-senders) or by pulling it from the Sender"s detail page URL in the SendGrid App.
   */
  email__config__sender__id?: number;
  /**
   * Email  Config  Subject
   * @description The subject line of the Single Send. Do not include this field when using a `design_id`.
   */
  email__config__subject?: string;
  /**
   * Email  Config  Suppression  Group  Id
   * @description The ID of the Suppression Group to allow recipients to unsubscribe — you must provide this or the `custom_unsubscribe_url`.
   */
  email__config__suppression__group__id?: number;
  /**
   * Id
   * @description Id
   */
  id?: string;
  /**
   * Name
   * @description The name of the Single Send.
   */
  name?: string;
  /**
   * Send  To  All
   * @description Set to `true` to send to All Contacts. If set to `false`, at least one `list_ids` or `segment_ids` value must be provided before the Single Send is scheduled to be sent to recipients.
   * @default false
   */
  send__to__all: boolean;
  /**
   * Send  To  List  Ids
   * @description The recipient List IDs that will receive the Single Send.
   */
  send__to__list__ids?: string[];
  /**
   * Send  To  Segment  Ids
   * @description The recipient Segment IDs that will receive the Single Send.
   */
  send__to__segment__ids?: string[];
  /**
   * Send At
   * Format: date-time
   * @description Set this property to an ISO 8601 formatted date-time when you would like to send the Single Send. Please note that any `send_at` property value set with this endpoint will prepopulate the send date in the SendGrid user interface (UI). However, the Single Send will remain an unscheduled draft until it"s updated with the [**Schedule Single Send**](https://docs.sendgrid.com/api-reference/single-sends/schedule-single-send) endpoint or SendGrid application UI. Additionally, the `now` keyword is a valid `send_at` value only when using the Schedule Single Send endpoint. Setting this property to `now` with this endpoint will cause an error.
   */
  send_at?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_SINGLE_SEND tool output.
 */
type SENDGRID_UPDATE_SINGLE_SEND_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_SSO_CERTIFICATE tool input.
 */
type SENDGRID_UPDATE_SSO_CERTIFICATE_INPUT = {
  /**
   * Cert Id
   * @description Cert Id
   */
  cert_id?: string;
  /**
   * Enabled
   * @description Indicates whether or not the certificate is enabled.
   */
  enabled?: boolean;
  /**
   * Integration Id
   * @description An ID that matches a certificate to a specific IdP integration.
   */
  integration_id?: string;
  /**
   * Public Certificate
   * @description This public certificate allows SendGrid to verify that SAML requests it receives are signed by an IdP that it recognizes.
   */
  public_certificate?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_SSO_CERTIFICATE tool output.
 */
type SENDGRID_UPDATE_SSO_CERTIFICATE_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_SUBSCRIPTION_TRACKING_SETTINGS tool input.
 */
type SENDGRID_UPDATE_SUBSCRIPTION_TRACKING_SETTINGS_INPUT = {
  /**
   * Enabled
   * @description Indicates if subscription tracking is enabled.
   */
  enabled?: boolean;
  /**
   * Html Content
   * @description The information and HTML for your unsubscribe link.
   */
  html_content?: string;
  /**
   * Landing
   * @description The HTML that will be displayed on the page that your customers will see after clicking unsubscribe, hosted on SendGrid’s server.
   */
  landing?: string;
  /**
   * Plain Content
   * @description The information in plain text for your unsubscribe link. You should have the “<% %>” tag in your content, otherwise the user will have no URL for unsubscribing.
   */
  plain_content?: string;
  /**
   * Replace
   * @description Your custom defined replacement tag for your templates. Use this tag to place your unsubscribe content anywhere in your emailtemplate.
   */
  replace?: string;
  /**
   * Url
   * Format: uri
   * @description The URL where you would like your users sent to unsubscribe.
   */
  url?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_SUBSCRIPTION_TRACKING_SETTINGS tool output.
 */
type SENDGRID_UPDATE_SUBSCRIPTION_TRACKING_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_TEAMMATE_S_PERMISSIONS tool input.
 */
type SENDGRID_UPDATE_TEAMMATE_S_PERMISSIONS_INPUT = {
  /**
   * Is Admin
   * @description Set to True if this teammate should be promoted to an admin user. If True, scopes should be an empty array.
   */
  is_admin?: boolean;
  /**
   * Scopes
   * @description Provide list of scopes that should be given to teammate. If specifying list of scopes, is_admin should be set to False.
   */
  scopes?: string[];
  /**
   * Username
   * @description The username of the teammate that you want to retrieve.
   */
  username?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_TEAMMATE_S_PERMISSIONS tool output.
 */
type SENDGRID_UPDATE_TEAMMATE_S_PERMISSIONS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_TEMPLATE_MAIL_SETTINGS tool input.
 */
type SENDGRID_UPDATE_TEMPLATE_MAIL_SETTINGS_INPUT = {
  /**
   * Enabled
   * @description Indicates if you want to enable the legacy email template mail setting.
   */
  enabled?: boolean;
  /**
   * Html Content
   * @description The new HTML content for your legacy email template.
   */
  html_content?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_TEMPLATE_MAIL_SETTINGS tool output.
 */
type SENDGRID_UPDATE_TEMPLATE_MAIL_SETTINGS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_THE_CREDITS_FOR_A_SUBUSER tool input.
 */
type SENDGRID_UPDATE_THE_CREDITS_FOR_A_SUBUSER_INPUT = {
  /**
   * Reset Frequency
   * @description Reset Frequency
   * @enum {string}
   */
  reset_frequency?: "monthly" | "weekly" | "daily";
  /**
   * Subuser Name
   * @description The username of the Subuser.
   */
  subuser_name?: string;
  /**
   * Total
   * @description Total number of credits to which the Subuser is to be reset. If `type` is `nonrecurring` then the Subuser"s credits will be reset to `total` on a one-time basis. If `type` is `recurring` then the Subuser"s credits will be reset to `total` every time a reset is scheduled in accordance with the `reset_frequency`. Do _not_ include `total` if you choose a reset `type` value of `unlimited`.
   */
  total?: number;
  /**
   * Type
   * @description Type
   * @enum {string}
   */
  type?: "unlimited" | "recurring" | "nonrecurring";
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_THE_CREDITS_FOR_A_SUBUSER tool output.
 */
type SENDGRID_UPDATE_THE_CREDITS_FOR_A_SUBUSER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_THE_REMAINING_CREDITS_FOR_A_SUBUSER tool input.
 */
type SENDGRID_UPDATE_THE_REMAINING_CREDITS_FOR_A_SUBUSER_INPUT = {
  /**
   * Allocation Update
   * @description The number of credits to add to or subtract from the current remaining credits for the Subuser. Use a positive number to increase the remaining credits or a negative number to reduce the remaining credits.
   */
  allocation_update?: number;
  /**
   * Subuser Name
   * @description The username of the Subuser.
   */
  subuser_name?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_THE_REMAINING_CREDITS_FOR_A_SUBUSER tool output.
 */
type SENDGRID_UPDATE_THE_REMAINING_CREDITS_FOR_A_SUBUSER_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_YOUR_ACCOUNT_EMAIL_ADDRESS tool input.
 */
type SENDGRID_UPDATE_YOUR_ACCOUNT_EMAIL_ADDRESS_INPUT = {
  /**
   * Email
   * @description The new email address that you would like to use for your account.
   */
  email?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_YOUR_ACCOUNT_EMAIL_ADDRESS tool output.
 */
type SENDGRID_UPDATE_YOUR_ACCOUNT_EMAIL_ADDRESS_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_YOUR_PASSWORD tool input.
 */
type SENDGRID_UPDATE_YOUR_PASSWORD_INPUT = {
  /**
   * New Password
   * @description The new password you would like to use for your account.
   */
  new_password?: string;
  /**
   * Old Password
   * @description The old password for your account.
   */
  old_password?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_YOUR_PASSWORD tool output.
 */
type SENDGRID_UPDATE_YOUR_PASSWORD_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_YOUR_USERNAME tool input.
 */
type SENDGRID_UPDATE_YOUR_USERNAME_INPUT = {
  /**
   * Username
   * @description The new username you would like to use for your account.
   */
  username?: string;
};

/**
 * Type of SENDGRID's SENDGRID_UPDATE_YOUR_USERNAME tool output.
 */
type SENDGRID_UPDATE_YOUR_USERNAME_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_VALIDATE_AN_EMAIL tool input.
 */
type SENDGRID_VALIDATE_AN_EMAIL_INPUT = {
  /**
   * Email
   * @description The email address that you want to validate.
   */
  email?: string;
  /**
   * Source
   * @description A one-word classifier for where this validation originated.
   */
  source?: string;
};

/**
 * Type of SENDGRID's SENDGRID_VALIDATE_AN_EMAIL tool output.
 */
type SENDGRID_VALIDATE_AN_EMAIL_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_VALIDATE_A_BATCH_ID tool input.
 */
type SENDGRID_VALIDATE_A_BATCH_ID_INPUT = {
  /**
   * Batch Id
   * @description Set this parameter to the batch ID that"s associated with the mail send you want to retrieve.
   */
  batch_id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_VALIDATE_A_BATCH_ID tool output.
 */
type SENDGRID_VALIDATE_A_BATCH_ID_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_VALIDATE_A_BRANDED_LINK tool input.
 */
type SENDGRID_VALIDATE_A_BRANDED_LINK_INPUT = {
  /**
   * Id
   * @description The ID of the branded link that you want to validate.
   */
  id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_VALIDATE_A_BRANDED_LINK tool output.
 */
type SENDGRID_VALIDATE_A_BRANDED_LINK_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_VALIDATE_A_DOMAIN_AUTHENTICATION tool input.
 */
type SENDGRID_VALIDATE_A_DOMAIN_AUTHENTICATION_INPUT = {
  /**
   * Id
   * @description ID of the domain to validate.
   */
  id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_VALIDATE_A_DOMAIN_AUTHENTICATION tool output.
 */
type SENDGRID_VALIDATE_A_DOMAIN_AUTHENTICATION_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_VALIDATE_A_REVERSE_DNS_RECORD tool input.
 */
type SENDGRID_VALIDATE_A_REVERSE_DNS_RECORD_INPUT = {
  /**
   * Id
   * @description The ID of the reverse DNS record that you would like to validate.
   */
  id?: string;
};

/**
 * Type of SENDGRID's SENDGRID_VALIDATE_A_REVERSE_DNS_RECORD tool output.
 */
type SENDGRID_VALIDATE_A_REVERSE_DNS_RECORD_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_VERIFY_SENDER_REQUEST tool input.
 */
type SENDGRID_VERIFY_SENDER_REQUEST_INPUT = {
  /**
   * Token
   * @description Token
   */
  token?: string;
};

/**
 * Type of SENDGRID's SENDGRID_VERIFY_SENDER_REQUEST tool output.
 */
type SENDGRID_VERIFY_SENDER_REQUEST_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_VIEW_A_SENDER_IDENTITY tool input.
 */
type SENDGRID_VIEW_A_SENDER_IDENTITY_INPUT = {
  /**
   * Sender Id
   * @description The ID of the sender identity that you want to retrieve.
   */
  sender_id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_VIEW_A_SENDER_IDENTITY tool output.
 */
type SENDGRID_VIEW_A_SENDER_IDENTITY_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of SENDGRID's SENDGRID_VIEW_SCHEDULED_TIME_OF_A_CAMPAIGN tool input.
 */
type SENDGRID_VIEW_SCHEDULED_TIME_OF_A_CAMPAIGN_INPUT = {
  /**
   * Campaign Id
   * @description Campaign Id
   */
  campaign_id?: number;
};

/**
 * Type of SENDGRID's SENDGRID_VIEW_SCHEDULED_TIME_OF_A_CAMPAIGN tool output.
 */
type SENDGRID_VIEW_SCHEDULED_TIME_OF_A_CAMPAIGN_OUTPUT = {
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
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "SENDGRID".
 */
export type SENDGRID_TOOL_INPUTS = {
  ACTIVATE_TEMPLATE_VERSION: SENDGRID_ACTIVATE_TEMPLATE_VERSION_INPUT
  ADD_AN_IP_ADDRESS_TO_A_POOL: SENDGRID_ADD_AN_IP_ADDRESS_TO_A_POOL_INPUT
  ADD_AN_IP_TO_AN_AUTHENTICATED_DOMAIN: SENDGRID_ADD_AN_IP_TO_AN_AUTHENTICATED_DOMAIN_INPUT
  ADD_A_BATCH_OF_IPS_TO_AN_IP_POOL: SENDGRID_ADD_A_BATCH_OF_IPS_TO_AN_IP_POOL_INPUT
  ADD_A_SINGLE_RECIPIENT_TO_A_LIST: SENDGRID_ADD_A_SINGLE_RECIPIENT_TO_A_LIST_INPUT
  ADD_A_TWILIO_SEND_GRID_IP_ADDRESS: SENDGRID_ADD_A_TWILIO_SEND_GRID_IP_ADDRESS_INPUT
  ADD_IPS: SENDGRID_ADD_IPS_INPUT
  ADD_ONE_OR_MORE_IPS_TO_THE_ALLOW_LIST: SENDGRID_ADD_ONE_OR_MORE_IPS_TO_THE_ALLOW_LIST_INPUT
  ADD_OR_UPDATE_A_CONTACT: SENDGRID_ADD_OR_UPDATE_A_CONTACT_INPUT
  ADD_RECIPIENT_ADDRESSES_TO_THE_GLOBAL_SUPPRESSION_GROUP: SENDGRID_ADD_RECIPIENT_ADDRESSES_TO_THE_GLOBAL_SUPPRESSION_GROUP_INPUT
  ADD_SUPPRESSIONS_TO_A_SUPPRESSION_GROUP: SENDGRID_ADD_SUPPRESSIONS_TO_A_SUPPRESSION_GROUP_INPUT
  APPROVE_ACCESS_REQUEST: SENDGRID_APPROVE_ACCESS_REQUEST_INPUT
  ASSIGN_A_BATCH_OF_SUBUSERS_TO_AN_IP: SENDGRID_ASSIGN_A_BATCH_OF_SUBUSERS_TO_AN_IP_INPUT
  ASSOCIATE_AN_AUTHENTICATED_DOMAIN_WITH_A_GIVEN_USER: SENDGRID_ASSOCIATE_AN_AUTHENTICATED_DOMAIN_WITH_A_GIVEN_USER_INPUT
  ASSOCIATE_A_BRANDED_LINK_WITH_A_SUBUSER: SENDGRID_ASSOCIATE_A_BRANDED_LINK_WITH_A_SUBUSER_INPUT
  AUTHENTICATE_AN_ACCOUNT_WITH_SINGLE_SIGN_ON: SENDGRID_AUTHENTICATE_AN_ACCOUNT_WITH_SINGLE_SIGN_ON_INPUT
  AUTHENTICATE_A_DOMAIN: SENDGRID_AUTHENTICATE_A_DOMAIN_INPUT
  BIND_AUTHENTICATED_DOMAINS_TO_USER: SENDGRID_BIND_AUTHENTICATED_DOMAINS_TO_USER_INPUT
  BULK_DELETE_SINGLE_SENDS: SENDGRID_BULK_DELETE_SINGLE_SENDS_INPUT
  CANCEL_OR_PAUSE_A_SCHEDULED_SEND: SENDGRID_CANCEL_OR_PAUSE_A_SCHEDULED_SEND_INPUT
  COMPLETED_STEPS: SENDGRID_COMPLETED_STEPS_INPUT
  CREATE_AN_ACCOUNT: SENDGRID_CREATE_AN_ACCOUNT_INPUT
  CREATE_AN_IP_POOL: SENDGRID_CREATE_AN_IP_POOL_INPUT
  CREATE_AN_IP_POOL_WITH_A_NAME_AND_IP_ASSIGNMENTS: SENDGRID_CREATE_AN_IP_POOL_WITH_A_NAME_AND_IP_ASSIGNMENTS_INPUT
  CREATE_AN_SSO_CERTIFICATE: SENDGRID_CREATE_AN_SSO_CERTIFICATE_INPUT
  CREATE_AN_SSO_INTEGRATION: SENDGRID_CREATE_AN_SSO_INTEGRATION_INPUT
  CREATE_AN_SSO_TEAMMATE: SENDGRID_CREATE_AN_SSO_TEAMMATE_INPUT
  CREATE_API_KEYS: SENDGRID_CREATE_API_KEYS_INPUT
  CREATE_A_BATCH_ID: SENDGRID_CREATE_A_BATCH_ID_INPUT
  CREATE_A_BRANDED_LINK: SENDGRID_CREATE_A_BRANDED_LINK_INPUT
  CREATE_A_CAMPAIGN: SENDGRID_CREATE_A_CAMPAIGN_INPUT
  CREATE_A_CUSTOM_FIELD: SENDGRID_CREATE_A_CUSTOM_FIELD_INPUT
  CREATE_A_LIST: SENDGRID_CREATE_A_LIST_INPUT
  CREATE_A_NEW_ALERT: SENDGRID_CREATE_A_NEW_ALERT_INPUT
  CREATE_A_NEW_EVENT_WEBHOOK: SENDGRID_CREATE_A_NEW_EVENT_WEBHOOK_INPUT
  CREATE_A_NEW_SUPPRESSION_GROUP: SENDGRID_CREATE_A_NEW_SUPPRESSION_GROUP_INPUT
  CREATE_A_NEW_TRANSACTIONAL_TEMPLATE_VERSION: SENDGRID_CREATE_A_NEW_TRANSACTIONAL_TEMPLATE_VERSION_INPUT
  CREATE_A_PARSE_SETTING: SENDGRID_CREATE_A_PARSE_SETTING_INPUT
  CREATE_A_SEGMENT: SENDGRID_CREATE_A_SEGMENT_INPUT
  CREATE_A_SENDER: SENDGRID_CREATE_A_SENDER_INPUT
  CREATE_A_SENDER_IDENTITY: SENDGRID_CREATE_A_SENDER_IDENTITY_INPUT
  CREATE_A_TRANSACTIONAL_TEMPLATE: SENDGRID_CREATE_A_TRANSACTIONAL_TEMPLATE_INPUT
  CREATE_CUSTOM_FIELD_DEFINITION: SENDGRID_CREATE_CUSTOM_FIELD_DEFINITION_INPUT
  CREATE_DESIGN: SENDGRID_CREATE_DESIGN_INPUT
  CREATE_INTEGRATION: SENDGRID_CREATE_INTEGRATION_INPUT
  CREATE_LIST: SENDGRID_CREATE_LIST_INPUT
  CREATE_SEGMENT: SENDGRID_CREATE_SEGMENT_INPUT
  CREATE_SINGLE_SEND: SENDGRID_CREATE_SINGLE_SEND_INPUT
  CREATE_SUBUSER: SENDGRID_CREATE_SUBUSER_INPUT
  CREATE_VERIFIED_SENDER_REQUEST: SENDGRID_CREATE_VERIFIED_SENDER_REQUEST_INPUT
  DELETE_AN_ACCOUNT: SENDGRID_DELETE_AN_ACCOUNT_INPUT
  DELETE_AN_ALERT: SENDGRID_DELETE_AN_ALERT_INPUT
  DELETE_AN_AUTHENTICATED_DOMAIN: SENDGRID_DELETE_AN_AUTHENTICATED_DOMAIN_INPUT
  DELETE_AN_IP_POOL: SENDGRID_DELETE_AN_IP_POOL_INPUT
  DELETE_AN_SSO_CERTIFICATE: SENDGRID_DELETE_AN_SSO_CERTIFICATE_INPUT
  DELETE_AN_SSO_INTEGRATION: SENDGRID_DELETE_AN_SSO_INTEGRATION_INPUT
  DELETE_API_KEYS: SENDGRID_DELETE_API_KEYS_INPUT
  DELETE_A_BATCH_OF_IPS_FROM_AN_IP_POOL: SENDGRID_DELETE_A_BATCH_OF_IPS_FROM_AN_IP_POOL_INPUT
  DELETE_A_BATCH_OF_SUBUSERS_FROM_AN_IP: SENDGRID_DELETE_A_BATCH_OF_SUBUSERS_FROM_AN_IP_INPUT
  DELETE_A_BOUNCE: SENDGRID_DELETE_A_BOUNCE_INPUT
  DELETE_A_BRANDED_LINK: SENDGRID_DELETE_A_BRANDED_LINK_INPUT
  DELETE_A_CAMPAIGN: SENDGRID_DELETE_A_CAMPAIGN_INPUT
  DELETE_A_CANCELLATION_OR_PAUSE_FROM_A_SCHEDULED_SEND: SENDGRID_DELETE_A_CANCELLATION_OR_PAUSE_FROM_A_SCHEDULED_SEND_INPUT
  DELETE_A_CONTACT_IDENTIFIER: SENDGRID_DELETE_A_CONTACT_IDENTIFIER_INPUT
  DELETE_A_CUSTOM_FIELD: SENDGRID_DELETE_A_CUSTOM_FIELD_INPUT
  DELETE_A_GLOBAL_SUPPRESSION: SENDGRID_DELETE_A_GLOBAL_SUPPRESSION_INPUT
  DELETE_A_LIST: SENDGRID_DELETE_A_LIST_INPUT
  DELETE_A_PARSE_SETTING: SENDGRID_DELETE_A_PARSE_SETTING_INPUT
  DELETE_A_RECIPIENT: SENDGRID_DELETE_A_RECIPIENT_INPUT
  DELETE_A_REVERSE_DNS_RECORD: SENDGRID_DELETE_A_REVERSE_DNS_RECORD_INPUT
  DELETE_A_SEGMENT: SENDGRID_DELETE_A_SEGMENT_INPUT
  DELETE_A_SENDER: SENDGRID_DELETE_A_SENDER_INPUT
  DELETE_A_SENDER_IDENTITY: SENDGRID_DELETE_A_SENDER_IDENTITY_INPUT
  DELETE_A_SINGLE_EVENT_WEBHOOK_BY_ID: SENDGRID_DELETE_A_SINGLE_EVENT_WEBHOOK_BY_ID_INPUT
  DELETE_A_SINGLE_RECIPIENT_FROM_A_SINGLE_LIST: SENDGRID_DELETE_A_SINGLE_RECIPIENT_FROM_A_SINGLE_LIST_INPUT
  DELETE_A_SPECIFIC_BLOCK: SENDGRID_DELETE_A_SPECIFIC_BLOCK_INPUT
  DELETE_A_SPECIFIC_INVALID_EMAIL: SENDGRID_DELETE_A_SPECIFIC_INVALID_EMAIL_INPUT
  DELETE_A_SPECIFIC_SPAM_REPORT: SENDGRID_DELETE_A_SPECIFIC_SPAM_REPORT_INPUT
  DELETE_A_SUBUSER: SENDGRID_DELETE_A_SUBUSER_INPUT
  DELETE_A_SUPPRESSION_FROM_A_SUPPRESSION_GROUP: SENDGRID_DELETE_A_SUPPRESSION_FROM_A_SUPPRESSION_GROUP_INPUT
  DELETE_A_SUPPRESSION_GROUP: SENDGRID_DELETE_A_SUPPRESSION_GROUP_INPUT
  DELETE_A_TEMPLATE: SENDGRID_DELETE_A_TEMPLATE_INPUT
  DELETE_A_TRANSACTIONAL_TEMPLATE_VERSION: SENDGRID_DELETE_A_TRANSACTIONAL_TEMPLATE_VERSION_INPUT
  DELETE_BLOCKS: SENDGRID_DELETE_BLOCKS_INPUT
  DELETE_BOUNCES: SENDGRID_DELETE_BOUNCES_INPUT
  DELETE_BULK_INTEGRATION: SENDGRID_DELETE_BULK_INTEGRATION_INPUT
  DELETE_CONTACTS: SENDGRID_DELETE_CONTACTS_INPUT
  DELETE_CUSTOM_FIELD_DEFINITION: SENDGRID_DELETE_CUSTOM_FIELD_DEFINITION_INPUT
  DELETE_DESIGN: SENDGRID_DELETE_DESIGN_INPUT
  DELETE_INVALID_EMAILS: SENDGRID_DELETE_INVALID_EMAILS_INPUT
  DELETE_IP_POOL: SENDGRID_DELETE_IP_POOL_INPUT
  DELETE_PENDING_TEAMMATE: SENDGRID_DELETE_PENDING_TEAMMATE_INPUT
  DELETE_SEGMENT: SENDGRID_DELETE_SEGMENT_INPUT
  DELETE_SINGLE_SEND_BY_ID: SENDGRID_DELETE_SINGLE_SEND_BY_ID_INPUT
  DELETE_SINGLE_SEND_SCHEDULE: SENDGRID_DELETE_SINGLE_SEND_SCHEDULE_INPUT
  DELETE_SPAM_REPORTS: SENDGRID_DELETE_SPAM_REPORTS_INPUT
  DELETE_TEAMMATE: SENDGRID_DELETE_TEAMMATE_INPUT
  DELETE_VERIFIED_SENDER: SENDGRID_DELETE_VERIFIED_SENDER_INPUT
  DENY_ACCESS_REQUEST: SENDGRID_DENY_ACCESS_REQUEST_INPUT
  DISASSOCIATE_AN_AUTHENTICATED_DOMAIN_FROM_A_GIVEN_USER: SENDGRID_DISASSOCIATE_AN_AUTHENTICATED_DOMAIN_FROM_A_GIVEN_USER_INPUT
  DISASSOCIATE_A_BRANDED_LINK_FROM_A_SUBUSER: SENDGRID_DISASSOCIATE_A_BRANDED_LINK_FROM_A_SUBUSER_INPUT
  DOMAIN_WARN_LIST: SENDGRID_DOMAIN_WARN_LIST_INPUT
  DOWNLOAD_CSV: SENDGRID_DOWNLOAD_CSV_INPUT
  DUPLICATE_A_TRANSACTIONAL_TEMPLATE: SENDGRID_DUPLICATE_A_TRANSACTIONAL_TEMPLATE_INPUT
  DUPLICATE_DESIGN: SENDGRID_DUPLICATE_DESIGN_INPUT
  DUPLICATE_SEND_GRID_PRE_BUILT_DESIGN: SENDGRID_DUPLICATE_SEND_GRID_PRE_BUILT_DESIGN_INPUT
  DUPLICATE_SINGLE_SEND: SENDGRID_DUPLICATE_SINGLE_SEND_INPUT
  EDIT_AN_SSO_TEAMMATE: SENDGRID_EDIT_AN_SSO_TEAMMATE_INPUT
  EDIT_A_TRANSACTIONAL_TEMPLATE: SENDGRID_EDIT_A_TRANSACTIONAL_TEMPLATE_INPUT
  EDIT_A_TRANSACTIONAL_TEMPLATE_VERSION: SENDGRID_EDIT_A_TRANSACTIONAL_TEMPLATE_VERSION_INPUT
  EDIT_VERIFIED_SENDER: SENDGRID_EDIT_VERIFIED_SENDER_INPUT
  EMAIL_DNS_RECORDS_TO_A_CO_WORKER: SENDGRID_EMAIL_DNS_RECORDS_TO_A_CO_WORKER_INPUT
  ENABLE_DISABLE_A_SUBUSER: SENDGRID_ENABLE_DISABLE_A_SUBUSER_INPUT
  ENABLE_DISABLE_WEBSITE_ACCESS_FOR_A_SUBUSER: SENDGRID_ENABLE_DISABLE_WEBSITE_ACCESS_FOR_A_SUBUSER_INPUT
  ERASE_RECIPIENTS_EMAIL_DATA: SENDGRID_ERASE_RECIPIENTS_EMAIL_DATA_INPUT
  EXPORT_CONTACTS: SENDGRID_EXPORT_CONTACTS_INPUT
  EXPORT_CONTACTS_STATUS: SENDGRID_EXPORT_CONTACTS_STATUS_INPUT
  EXPORT_SINGLE_SEND_STATS: SENDGRID_EXPORT_SINGLE_SEND_STATS_INPUT
  FILTER_ALL_MESSAGES: SENDGRID_FILTER_ALL_MESSAGES_INPUT
  FILTER_MESSAGES_BY_MESSAGE_ID: SENDGRID_FILTER_MESSAGES_BY_MESSAGE_ID_INPUT
  FILTER_SEGMENTS_BY_PARENT_IDS: SENDGRID_FILTER_SEGMENTS_BY_PARENT_IDS_INPUT
  GET_ACCOUNT_OFFERINGS: SENDGRID_GET_ACCOUNT_OFFERINGS_INPUT
  GET_ALL_ACCOUNTS: SENDGRID_GET_ALL_ACCOUNTS_INPUT
  GET_ALL_AUTOMATION_STATS: SENDGRID_GET_ALL_AUTOMATION_STATS_INPUT
  GET_ALL_AVAILABLE_OFFERINGS: SENDGRID_GET_ALL_AVAILABLE_OFFERINGS_INPUT
  GET_ALL_CATEGORIES: SENDGRID_GET_ALL_CATEGORIES_INPUT
  GET_ALL_EXISTING_EXPORTS: SENDGRID_GET_ALL_EXISTING_EXPORTS_INPUT
  GET_ALL_FIELD_DEFINITIONS: SENDGRID_GET_ALL_FIELD_DEFINITIONS_INPUT
  GET_ALL_IP_POOLS_THAT_HAVE_ASSOCIATED_IPS: SENDGRID_GET_ALL_IP_POOLS_THAT_HAVE_ASSOCIATED_IPS_INPUT
  GET_ALL_LISTS: SENDGRID_GET_ALL_LISTS_INPUT
  GET_ALL_SENDER_IDENTITIES: SENDGRID_GET_ALL_SENDER_IDENTITIES_INPUT
  GET_ALL_SINGLE_SENDS: SENDGRID_GET_ALL_SINGLE_SENDS_INPUT
  GET_ALL_SINGLE_SENDS_STATS: SENDGRID_GET_ALL_SINGLE_SENDS_STATS_INPUT
  GET_ALL_SSO_CERTIFICATES_BY_INTEGRATION: SENDGRID_GET_ALL_SSO_CERTIFICATES_BY_INTEGRATION_INPUT
  GET_ALL_SSO_INTEGRATIONS: SENDGRID_GET_ALL_SSO_INTEGRATIONS_INPUT
  GET_ALL_VERIFIED_SENDERS: SENDGRID_GET_ALL_VERIFIED_SENDERS_INPUT
  GET_AN_ACCOUNT_S_STATE: SENDGRID_GET_AN_ACCOUNT_S_STATE_INPUT
  GET_AN_SSO_CERTIFICATE: SENDGRID_GET_AN_SSO_CERTIFICATE_INPUT
  GET_AN_SSO_INTEGRATION: SENDGRID_GET_AN_SSO_INTEGRATION_INPUT
  GET_AUTOMATION_CLICK_TRACKING_STATS_BY_ID: SENDGRID_GET_AUTOMATION_CLICK_TRACKING_STATS_BY_ID_INPUT
  GET_AUTOMATION_STATS_BY_ID: SENDGRID_GET_AUTOMATION_STATS_BY_ID_INPUT
  GET_A_CONTACT_BY_ID: SENDGRID_GET_A_CONTACT_BY_ID_INPUT
  GET_A_LIST_BY_ID: SENDGRID_GET_A_LIST_BY_ID_INPUT
  GET_A_LIST_OF_ALL_IP_ADDRESSES_ON_YOUR_ACCOUNT: SENDGRID_GET_A_LIST_OF_ALL_IP_ADDRESSES_ON_YOUR_ACCOUNT_INPUT
  GET_A_LIST_OF_ALL_SENDERS: SENDGRID_GET_A_LIST_OF_ALL_SENDERS_INPUT
  GET_A_LIST_OF_SUBUSERS_ASSIGNED_TO_AN_IP: SENDGRID_GET_A_LIST_OF_SUBUSERS_ASSIGNED_TO_AN_IP_INPUT
  GET_A_SPECIFIC_SENDER: SENDGRID_GET_A_SPECIFIC_SENDER_INPUT
  GET_A_USER_S_ACCOUNT_INFORMATION: SENDGRID_GET_A_USER_S_ACCOUNT_INFORMATION_INPUT
  GET_A_USER_S_PROFILE: SENDGRID_GET_A_USER_S_PROFILE_INPUT
  GET_BATCHED_CONTACTS_BY_IDS: SENDGRID_GET_BATCHED_CONTACTS_BY_IDS_INPUT
  GET_BOUNCE_CLASS_STATS: SENDGRID_GET_BOUNCE_CLASS_STATS_INPUT
  GET_CONTACTS_BY_EMAILS: SENDGRID_GET_CONTACTS_BY_EMAILS_INPUT
  GET_CONTACTS_BY_IDENTIFIERS: SENDGRID_GET_CONTACTS_BY_IDENTIFIERS_INPUT
  GET_DESIGN: SENDGRID_GET_DESIGN_INPUT
  GET_DETAILS_FOR_AN_IP_ADDRESS: SENDGRID_GET_DETAILS_FOR_AN_IP_ADDRESS_INPUT
  GET_DETAILS_FOR_AN_IP_POOL: SENDGRID_GET_DETAILS_FOR_AN_IP_POOL_INPUT
  GET_ENGAGEMENT_QUALITY_SCORES: SENDGRID_GET_ENGAGEMENT_QUALITY_SCORES_INPUT
  GET_INFORMATION_ON_A_SINGLE_SUPPRESSION_GROUP: SENDGRID_GET_INFORMATION_ON_A_SINGLE_SUPPRESSION_GROUP_INPUT
  GET_INTEGRATION: SENDGRID_GET_INTEGRATION_INPUT
  GET_IPS_ASSIGNED_TO_AN_IP_POOL: SENDGRID_GET_IPS_ASSIGNED_TO_AN_IP_POOL_INPUT
  GET_LIST_CONTACT_COUNT: SENDGRID_GET_LIST_CONTACT_COUNT_INPUT
  GET_LIST_OF_SEGMENTS: SENDGRID_GET_LIST_OF_SEGMENTS_INPUT
  GET_OPEN_TRACKING_SETTINGS: SENDGRID_GET_OPEN_TRACKING_SETTINGS_INPUT
  GET_RECIPIENT_UPLOAD_STATUS: SENDGRID_GET_RECIPIENT_UPLOAD_STATUS_INPUT
  GET_REMAINING_IPS_COUNT: SENDGRID_GET_REMAINING_IPS_COUNT_INPUT
  GET_SAMPLE_CONTACTS: SENDGRID_GET_SAMPLE_CONTACTS_INPUT
  GET_SEGMENT_BY_ID: SENDGRID_GET_SEGMENT_BY_ID_INPUT
  GET_SEND_GRID_PRE_BUILT_DESIGN: SENDGRID_GET_SEND_GRID_PRE_BUILT_DESIGN_INPUT
  GET_SIGNED_EVENT_WEBHOOK_S_PUBLIC_KEY: SENDGRID_GET_SIGNED_EVENT_WEBHOOK_S_PUBLIC_KEY_INPUT
  GET_SINGLE_SENDS_SEARCH: SENDGRID_GET_SINGLE_SENDS_SEARCH_INPUT
  GET_SINGLE_SEND_BY_ID: SENDGRID_GET_SINGLE_SEND_BY_ID_INPUT
  GET_SINGLE_SEND_CLICK_TRACKING_STATS_BY_ID: SENDGRID_GET_SINGLE_SEND_CLICK_TRACKING_STATS_BY_ID_INPUT
  GET_SINGLE_SEND_STATS_BY_ID: SENDGRID_GET_SINGLE_SEND_STATS_BY_ID_INPUT
  GET_SUBUSERS_ENGAGEMENT_QUALITY_SCORES: SENDGRID_GET_SUBUSERS_ENGAGEMENT_QUALITY_SCORES_INPUT
  GET_SUBUSER_MONTHLY_STATS: SENDGRID_GET_SUBUSER_MONTHLY_STATS_INPUT
  GET_SUPPRESSION_GROUPS: SENDGRID_GET_SUPPRESSION_GROUPS_INPUT
  GET_TEAMMATE_SUBUSER_ACCESS: SENDGRID_GET_TEAMMATE_SUBUSER_ACCESS_INPUT
  GET_THE_CREDITS_FOR_A_SUBUSER: SENDGRID_GET_THE_CREDITS_FOR_A_SUBUSER_INPUT
  GET_THE_DEFAULT_AUTHENTICATION: SENDGRID_GET_THE_DEFAULT_AUTHENTICATION_INPUT
  GET_THE_SETTINGS_FOR_A_SINGLE_EVENT_WEBHOOK: SENDGRID_GET_THE_SETTINGS_FOR_A_SINGLE_EVENT_WEBHOOK_INPUT
  GET_TOTAL_CONTACT_COUNT: SENDGRID_GET_TOTAL_CONTACT_COUNT_INPUT
  GET_USER_SCOPES: SENDGRID_GET_USER_SCOPES_INPUT
  IMPORT_CONTACTS: SENDGRID_IMPORT_CONTACTS_INPUT
  IMPORT_CONTACTS_STATUS: SENDGRID_IMPORT_CONTACTS_STATUS_INPUT
  INVITE_TEAMMATE: SENDGRID_INVITE_TEAMMATE_INPUT
  LIST_ALL_AUTHENTICATED_DOMAINS: SENDGRID_LIST_ALL_AUTHENTICATED_DOMAINS_INPUT
  LIST_ALL_SUBUSERS: SENDGRID_LIST_ALL_SUBUSERS_INPUT
  LIST_API_KEYS: SENDGRID_LIST_API_KEYS_INPUT
  LIST_BULK_EMAIL_VALIDATION_JOBS: SENDGRID_LIST_BULK_EMAIL_VALIDATION_JOBS_INPUT
  LIST_DESIGNS: SENDGRID_LIST_DESIGNS_INPUT
  LIST_INTEGRATION: SENDGRID_LIST_INTEGRATION_INPUT
  LIST_SEND_GRID_PRE_BUILT_DESIGNS: SENDGRID_LIST_SEND_GRID_PRE_BUILT_DESIGNS_INPUT
  LIST_USER_AUTH_DOMAINS: SENDGRID_LIST_USER_AUTH_DOMAINS_INPUT
  MANUALLY_REFRESH_A_SEGMENT: SENDGRID_MANUALLY_REFRESH_A_SEGMENT_INPUT
  PRESIGNED_URL_HEADERS_FOR_BULK_EMAIL_VALIDATION: SENDGRID_PRESIGNED_URL_HEADERS_FOR_BULK_EMAIL_VALIDATION_INPUT
  REMOVE_AN_IP_ADDRESS_FROM_A_POOL: SENDGRID_REMOVE_AN_IP_ADDRESS_FROM_A_POOL_INPUT
  REMOVE_AN_IP_FROM_AN_AUTHENTICATED_DOMAIN: SENDGRID_REMOVE_AN_IP_FROM_AN_AUTHENTICATED_DOMAIN_INPUT
  REMOVE_A_SPECIFIC_IP_FROM_THE_ALLOWED_LIST: SENDGRID_REMOVE_A_SPECIFIC_IP_FROM_THE_ALLOWED_LIST_INPUT
  REMOVE_CONTACTS_FROM_A_LIST: SENDGRID_REMOVE_CONTACTS_FROM_A_LIST_INPUT
  REMOVE_LIST_AND_OPTIONAL_CONTACTS: SENDGRID_REMOVE_LIST_AND_OPTIONAL_CONTACTS_INPUT
  REMOVE_ONE_OR_MORE_IPS_FROM_THE_ALLOW_LIST: SENDGRID_REMOVE_ONE_OR_MORE_IPS_FROM_THE_ALLOW_LIST_INPUT
  REMOVE_SEGMENT_WITHOUT_AFFECTING_CONTACTS: SENDGRID_REMOVE_SEGMENT_WITHOUT_AFFECTING_CONTACTS_INPUT
  RENAME_AN_IP_POOL: SENDGRID_RENAME_AN_IP_POOL_INPUT
  REQUEST_CSV: SENDGRID_REQUEST_CSV_INPUT
  RESEND_A_SENDER_VERIFICATION: SENDGRID_RESEND_A_SENDER_VERIFICATION_INPUT
  RESEND_SENDER_IDENTITY_VERIFICATION: SENDGRID_RESEND_SENDER_IDENTITY_VERIFICATION_INPUT
  RESEND_TEAMMATE_INVITE: SENDGRID_RESEND_TEAMMATE_INVITE_INPUT
  RESEND_VERIFIED_SENDER_REQUEST: SENDGRID_RESEND_VERIFIED_SENDER_REQUEST_INPUT
  RETRIEVES_INBOUND_PARSE_WEBHOOK_STATISTICS: SENDGRID_RETRIEVES_INBOUND_PARSE_WEBHOOK_STATISTICS_INPUT
  RETRIEVE_ACCESS_REQUESTS: SENDGRID_RETRIEVE_ACCESS_REQUESTS_INPUT
  RETRIEVE_ADDRESS_WHITELIST_MAIL_SETTINGS: SENDGRID_RETRIEVE_ADDRESS_WHITELIST_MAIL_SETTINGS_INPUT
  RETRIEVE_ALL_ALERTS: SENDGRID_RETRIEVE_ALL_ALERTS_INPUT
  RETRIEVE_ALL_ASSIGNED_IPS: SENDGRID_RETRIEVE_ALL_ASSIGNED_IPS_INPUT
  RETRIEVE_ALL_BLOCKS: SENDGRID_RETRIEVE_ALL_BLOCKS_INPUT
  RETRIEVE_ALL_BOUNCES: SENDGRID_RETRIEVE_ALL_BOUNCES_INPUT
  RETRIEVE_ALL_BRANDED_LINKS: SENDGRID_RETRIEVE_ALL_BRANDED_LINKS_INPUT
  RETRIEVE_ALL_CAMPAIGNS: SENDGRID_RETRIEVE_ALL_CAMPAIGNS_INPUT
  RETRIEVE_ALL_CATEGORIES: SENDGRID_RETRIEVE_ALL_CATEGORIES_INPUT
  RETRIEVE_ALL_CUSTOM_FIELDS: SENDGRID_RETRIEVE_ALL_CUSTOM_FIELDS_INPUT
  RETRIEVE_ALL_GLOBAL_SUPPRESSIONS: SENDGRID_RETRIEVE_ALL_GLOBAL_SUPPRESSIONS_INPUT
  RETRIEVE_ALL_INVALID_EMAILS: SENDGRID_RETRIEVE_ALL_INVALID_EMAILS_INPUT
  RETRIEVE_ALL_IPS_CURRENTLY_IN_WARMUP: SENDGRID_RETRIEVE_ALL_IPS_CURRENTLY_IN_WARMUP_INPUT
  RETRIEVE_ALL_IP_ADDRESSES: SENDGRID_RETRIEVE_ALL_IP_ADDRESSES_INPUT
  RETRIEVE_ALL_IP_POOLS: SENDGRID_RETRIEVE_ALL_IP_POOLS_INPUT
  RETRIEVE_ALL_IP_POOLS_AN_IP_ADDRESS_BELONGS_TO: SENDGRID_RETRIEVE_ALL_IP_POOLS_AN_IP_ADDRESS_BELONGS_TO_INPUT
  RETRIEVE_ALL_LISTS: SENDGRID_RETRIEVE_ALL_LISTS_INPUT
  RETRIEVE_ALL_MAIL_SETTINGS: SENDGRID_RETRIEVE_ALL_MAIL_SETTINGS_INPUT
  RETRIEVE_ALL_OF_YOUR_EVENT_WEBHOOKS: SENDGRID_RETRIEVE_ALL_OF_YOUR_EVENT_WEBHOOKS_INPUT
  RETRIEVE_ALL_PARSE_SETTINGS: SENDGRID_RETRIEVE_ALL_PARSE_SETTINGS_INPUT
  RETRIEVE_ALL_PENDING_TEAMMATES: SENDGRID_RETRIEVE_ALL_PENDING_TEAMMATES_INPUT
  RETRIEVE_ALL_RECENT_ACCESS_ATTEMPTS: SENDGRID_RETRIEVE_ALL_RECENT_ACCESS_ATTEMPTS_INPUT
  RETRIEVE_ALL_RECIPIENTS_ON_A_LIST: SENDGRID_RETRIEVE_ALL_RECIPIENTS_ON_A_LIST_INPUT
  RETRIEVE_ALL_REVERSE_DNS_RECORDS: SENDGRID_RETRIEVE_ALL_REVERSE_DNS_RECORDS_INPUT
  RETRIEVE_ALL_SCHEDULED_SENDS: SENDGRID_RETRIEVE_ALL_SCHEDULED_SENDS_INPUT
  RETRIEVE_ALL_SEGMENTS: SENDGRID_RETRIEVE_ALL_SEGMENTS_INPUT
  RETRIEVE_ALL_SPAM_REPORTS: SENDGRID_RETRIEVE_ALL_SPAM_REPORTS_INPUT
  RETRIEVE_ALL_SUPPRESSIONS: SENDGRID_RETRIEVE_ALL_SUPPRESSIONS_INPUT
  RETRIEVE_ALL_SUPPRESSIONS_FOR_A_SUPPRESSION_GROUP: SENDGRID_RETRIEVE_ALL_SUPPRESSIONS_FOR_A_SUPPRESSION_GROUP_INPUT
  RETRIEVE_ALL_SUPPRESSION_GROUPS_FOR_AN_EMAIL_ADDRESS: SENDGRID_RETRIEVE_ALL_SUPPRESSION_GROUPS_FOR_AN_EMAIL_ADDRESS_INPUT
  RETRIEVE_ALL_TEAMMATES: SENDGRID_RETRIEVE_ALL_TEAMMATES_INPUT
  RETRIEVE_ALL_THE_IPS_IN_A_SPECIFIED_POOL: SENDGRID_RETRIEVE_ALL_THE_IPS_IN_A_SPECIFIED_POOL_INPUT
  RETRIEVE_AN_AUTHENTICATED_DOMAIN: SENDGRID_RETRIEVE_AN_AUTHENTICATED_DOMAIN_INPUT
  RETRIEVE_AN_EXISTING_API_KEY: SENDGRID_RETRIEVE_AN_EXISTING_API_KEY_INPUT
  RETRIEVE_A_BOUNCE: SENDGRID_RETRIEVE_A_BOUNCE_INPUT
  RETRIEVE_A_BRANDED_LINK: SENDGRID_RETRIEVE_A_BRANDED_LINK_INPUT
  RETRIEVE_A_COUNT_OF_RECIPIENTS: SENDGRID_RETRIEVE_A_COUNT_OF_RECIPIENTS_INPUT
  RETRIEVE_A_CUSTOM_FIELD: SENDGRID_RETRIEVE_A_CUSTOM_FIELD_INPUT
  RETRIEVE_A_GLOBAL_SUPPRESSION: SENDGRID_RETRIEVE_A_GLOBAL_SUPPRESSION_INPUT
  RETRIEVE_A_LIST_OF_CURRENTLY_ALLOWED_IPS: SENDGRID_RETRIEVE_A_LIST_OF_CURRENTLY_ALLOWED_IPS_INPUT
  RETRIEVE_A_REVERSE_DNS_RECORD: SENDGRID_RETRIEVE_A_REVERSE_DNS_RECORD_INPUT
  RETRIEVE_A_SEGMENT: SENDGRID_RETRIEVE_A_SEGMENT_INPUT
  RETRIEVE_A_SINGLE_CAMPAIGN: SENDGRID_RETRIEVE_A_SINGLE_CAMPAIGN_INPUT
  RETRIEVE_A_SINGLE_LIST: SENDGRID_RETRIEVE_A_SINGLE_LIST_INPUT
  RETRIEVE_A_SINGLE_RECIPIENT: SENDGRID_RETRIEVE_A_SINGLE_RECIPIENT_INPUT
  RETRIEVE_A_SINGLE_TRANSACTIONAL_TEMPLATE: SENDGRID_RETRIEVE_A_SINGLE_TRANSACTIONAL_TEMPLATE_INPUT
  RETRIEVE_A_SPECIFIC_ALERT: SENDGRID_RETRIEVE_A_SPECIFIC_ALERT_INPUT
  RETRIEVE_A_SPECIFIC_ALLOWED_IP: SENDGRID_RETRIEVE_A_SPECIFIC_ALLOWED_IP_INPUT
  RETRIEVE_A_SPECIFIC_BLOCK: SENDGRID_RETRIEVE_A_SPECIFIC_BLOCK_INPUT
  RETRIEVE_A_SPECIFIC_INVALID_EMAIL: SENDGRID_RETRIEVE_A_SPECIFIC_INVALID_EMAIL_INPUT
  RETRIEVE_A_SPECIFIC_PARSE_SETTING: SENDGRID_RETRIEVE_A_SPECIFIC_PARSE_SETTING_INPUT
  RETRIEVE_A_SPECIFIC_SPAM_REPORT: SENDGRID_RETRIEVE_A_SPECIFIC_SPAM_REPORT_INPUT
  RETRIEVE_A_SPECIFIC_TRANSACTIONAL_TEMPLATE_VERSION: SENDGRID_RETRIEVE_A_SPECIFIC_TRANSACTIONAL_TEMPLATE_VERSION_INPUT
  RETRIEVE_A_SUBUSER_S_BRANDED_LINK: SENDGRID_RETRIEVE_A_SUBUSER_S_BRANDED_LINK_INPUT
  RETRIEVE_BOUNCE_CLASSIFICATION_TOTALS: SENDGRID_RETRIEVE_BOUNCE_CLASSIFICATION_TOTALS_INPUT
  RETRIEVE_BOUNCE_PURGE_MAIL_SETTINGS: SENDGRID_RETRIEVE_BOUNCE_PURGE_MAIL_SETTINGS_INPUT
  RETRIEVE_CLICK_TRACK_SETTINGS: SENDGRID_RETRIEVE_CLICK_TRACK_SETTINGS_INPUT
  RETRIEVE_CURRENT_ENFORCED_TLS_SETTINGS: SENDGRID_RETRIEVE_CURRENT_ENFORCED_TLS_SETTINGS_INPUT
  RETRIEVE_EMAIL_STATISTICS_BY_BROWSER: SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_BROWSER_INPUT
  RETRIEVE_EMAIL_STATISTICS_BY_CLIENT_TYPE: SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_CLIENT_TYPE_INPUT
  RETRIEVE_EMAIL_STATISTICS_BY_COUNTRY_AND_STATE_PROVINCE: SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_COUNTRY_AND_STATE_PROVINCE_INPUT
  RETRIEVE_EMAIL_STATISTICS_BY_DEVICE_TYPE: SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_DEVICE_TYPE_INPUT
  RETRIEVE_EMAIL_STATISTICS_BY_MAILBOX_PROVIDER: SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_MAILBOX_PROVIDER_INPUT
  RETRIEVE_EMAIL_STATISTICS_FOR_CATEGORIES: SENDGRID_RETRIEVE_EMAIL_STATISTICS_FOR_CATEGORIES_INPUT
  RETRIEVE_EMAIL_STATISTICS_FOR_YOUR_SUBUSERS: SENDGRID_RETRIEVE_EMAIL_STATISTICS_FOR_YOUR_SUBUSERS_INPUT
  RETRIEVE_FOOTER_MAIL_SETTINGS: SENDGRID_RETRIEVE_FOOTER_MAIL_SETTINGS_INPUT
  RETRIEVE_FORWARD_BOUNCE_MAIL_SETTINGS: SENDGRID_RETRIEVE_FORWARD_BOUNCE_MAIL_SETTINGS_INPUT
  RETRIEVE_FORWARD_SPAM_MAIL_SETTINGS: SENDGRID_RETRIEVE_FORWARD_SPAM_MAIL_SETTINGS_INPUT
  RETRIEVE_GLOBAL_EMAIL_STATISTICS: SENDGRID_RETRIEVE_GLOBAL_EMAIL_STATISTICS_INPUT
  RETRIEVE_GOOGLE_ANALYTICS_SETTINGS: SENDGRID_RETRIEVE_GOOGLE_ANALYTICS_SETTINGS_INPUT
  RETRIEVE_LEGACY_TEMPLATE_MAIL_SETTINGS: SENDGRID_RETRIEVE_LEGACY_TEMPLATE_MAIL_SETTINGS_INPUT
  RETRIEVE_MONTHLY_STATS_FOR_ALL_SUBUSERS: SENDGRID_RETRIEVE_MONTHLY_STATS_FOR_ALL_SUBUSERS_INPUT
  RETRIEVE_PAGED_TRANSACTIONAL_TEMPLATES: SENDGRID_RETRIEVE_PAGED_TRANSACTIONAL_TEMPLATES_INPUT
  RETRIEVE_RECIPIENTS: SENDGRID_RETRIEVE_RECIPIENTS_INPUT
  RETRIEVE_RECIPIENTS_ON_A_SEGMENT: SENDGRID_RETRIEVE_RECIPIENTS_ON_A_SEGMENT_INPUT
  RETRIEVE_RESERVED_FIELDS: SENDGRID_RETRIEVE_RESERVED_FIELDS_INPUT
  RETRIEVE_SCHEDULED_SEND: SENDGRID_RETRIEVE_SCHEDULED_SEND_INPUT
  RETRIEVE_SINGLE_SEGMENT_ENDPOINT: SENDGRID_RETRIEVE_SINGLE_SEGMENT_ENDPOINT_INPUT
  RETRIEVE_SPECIFIC_TEAMMATE: SENDGRID_RETRIEVE_SPECIFIC_TEAMMATE_INPUT
  RETRIEVE_STATS_BY_A_SPECIFIC_CLIENT_TYPE: SENDGRID_RETRIEVE_STATS_BY_A_SPECIFIC_CLIENT_TYPE_INPUT
  RETRIEVE_SUBSCRIPTION_TRACKING_SETTINGS: SENDGRID_RETRIEVE_SUBSCRIPTION_TRACKING_SETTINGS_INPUT
  RETRIEVE_SUBUSER_REPUTATIONS: SENDGRID_RETRIEVE_SUBUSER_REPUTATIONS_INPUT
  RETRIEVE_SUMS_OF_EMAIL_STATS_FOR_EACH_CATEGORY: SENDGRID_RETRIEVE_SUMS_OF_EMAIL_STATS_FOR_EACH_CATEGORY_INPUT
  RETRIEVE_THE_COUNT_OF_BILLABLE_RECIPIENTS: SENDGRID_RETRIEVE_THE_COUNT_OF_BILLABLE_RECIPIENTS_INPUT
  RETRIEVE_THE_DEFAULT_BRANDED_LINK: SENDGRID_RETRIEVE_THE_DEFAULT_BRANDED_LINK_INPUT
  RETRIEVE_THE_LISTS_THAT_A_RECIPIENT_IS_ON: SENDGRID_RETRIEVE_THE_LISTS_THAT_A_RECIPIENT_IS_ON_INPUT
  RETRIEVE_THE_WARMUP_STATUS_FOR_A_SPECIFIC_IP_ADDRESS: SENDGRID_RETRIEVE_THE_WARMUP_STATUS_FOR_A_SPECIFIC_IP_ADDRESS_INPUT
  RETRIEVE_TRACKING_SETTINGS: SENDGRID_RETRIEVE_TRACKING_SETTINGS_INPUT
  RETRIEVE_USER_S_AUTHENTICATED_DOMAINS: SENDGRID_RETRIEVE_USER_S_AUTHENTICATED_DOMAINS_INPUT
  RETRIEVE_YOUR_ACCOUNT_EMAIL_ADDRESS: SENDGRID_RETRIEVE_YOUR_ACCOUNT_EMAIL_ADDRESS_INPUT
  RETRIEVE_YOUR_CREDIT_BALANCE: SENDGRID_RETRIEVE_YOUR_CREDIT_BALANCE_INPUT
  RETRIEVE_YOUR_USERNAME: SENDGRID_RETRIEVE_YOUR_USERNAME_INPUT
  RETURNS_A_LIST_OF_ALL_PARTNER_SETTINGS: SENDGRID_RETURNS_A_LIST_OF_ALL_PARTNER_SETTINGS_INPUT
  SCHEDULE_A_CAMPAIGN: SENDGRID_SCHEDULE_A_CAMPAIGN_INPUT
  SCHEDULE_SINGLE_SEND: SENDGRID_SCHEDULE_SINGLE_SEND_INPUT
  SEARCH_CONTACTS: SENDGRID_SEARCH_CONTACTS_INPUT
  SEARCH_FOR_SUPPRESSIONS_WITHIN_A_GROUP: SENDGRID_SEARCH_FOR_SUPPRESSIONS_WITHIN_A_GROUP_INPUT
  SEARCH_RECIPIENTS: SENDGRID_SEARCH_RECIPIENTS_INPUT
  SEGMENT_JSON_DATA_BY_SPECIFIC_CRITERIA: SENDGRID_SEGMENT_JSON_DATA_BY_SPECIFIC_CRITERIA_INPUT
  SEND_A_CAMPAIGN: SENDGRID_SEND_A_CAMPAIGN_INPUT
  SEND_A_TEST_CAMPAIGN: SENDGRID_SEND_A_TEST_CAMPAIGN_INPUT
  SEND_A_TEST_MARKETING_EMAIL: SENDGRID_SEND_A_TEST_MARKETING_EMAIL_INPUT
  SEND_EMAIL_WITH_TWILIO_SEND_GRID: SENDGRID_SEND_EMAIL_WITH_TWILIO_SEND_GRID_INPUT
  SET_UP_REVERSE_DNS: SENDGRID_SET_UP_REVERSE_DNS_INPUT
  SINGLE_SEND_CSV_STATS_RETRIEVAL: SENDGRID_SINGLE_SEND_CSV_STATS_RETRIEVAL_INPUT
  START_WARMING_UP_AN_IP_ADDRESS: SENDGRID_START_WARMING_UP_AN_IP_ADDRESS_INPUT
  STOP_WARMING_UP_AN_IP_ADDRESS: SENDGRID_STOP_WARMING_UP_AN_IP_ADDRESS_INPUT
  SUM_EMAIL_STATS_FOR_SUBUSERS: SENDGRID_SUM_EMAIL_STATS_FOR_SUBUSERS_INPUT
  TEST_AN_EVENT_WEBHOOK_S_SETTINGS: SENDGRID_TEST_AN_EVENT_WEBHOOK_S_SETTINGS_INPUT
  THIS_REQUEST_RETURNS_A_SINGLE_BULK_EMAIL_VALIDATION_JOB: SENDGRID_THIS_REQUEST_RETURNS_A_SINGLE_BULK_EMAIL_VALIDATION_JOB_INPUT
  TOGGLE_WEBHOOK_SIGNATURE: SENDGRID_TOGGLE_WEBHOOK_SIGNATURE_INPUT
  UNLINK_SUBUSER_DOMAIN: SENDGRID_UNLINK_SUBUSER_DOMAIN_INPUT
  UNSCHEDULE_A_SCHEDULED_CAMPAIGN: SENDGRID_UNSCHEDULE_A_SCHEDULED_CAMPAIGN_INPUT
  UPDATE_ACCOUNT_OFFERINGS: SENDGRID_UPDATE_ACCOUNT_OFFERINGS_INPUT
  UPDATE_ADDRESS_WHITELIST_MAIL_SETTINGS: SENDGRID_UPDATE_ADDRESS_WHITELIST_MAIL_SETTINGS_INPUT
  UPDATE_AN_ACCOUNT_S_STATE: SENDGRID_UPDATE_AN_ACCOUNT_S_STATE_INPUT
  UPDATE_AN_ALERT: SENDGRID_UPDATE_AN_ALERT_INPUT
  UPDATE_AN_AUTHENTICATED_DOMAIN: SENDGRID_UPDATE_AN_AUTHENTICATED_DOMAIN_INPUT
  UPDATE_AN_IP_POOL_NAME: SENDGRID_UPDATE_AN_IP_POOL_NAME_INPUT
  UPDATE_AN_SSO_INTEGRATION: SENDGRID_UPDATE_AN_SSO_INTEGRATION_INPUT
  UPDATE_API_KEY_NAME: SENDGRID_UPDATE_API_KEY_NAME_INPUT
  UPDATE_API_KEY_NAME_AND_SCOPES: SENDGRID_UPDATE_API_KEY_NAME_AND_SCOPES_INPUT
  UPDATE_A_BRANDED_LINK: SENDGRID_UPDATE_A_BRANDED_LINK_INPUT
  UPDATE_A_CAMPAIGN: SENDGRID_UPDATE_A_CAMPAIGN_INPUT
  UPDATE_A_LIST: SENDGRID_UPDATE_A_LIST_INPUT
  UPDATE_A_PARSE_SETTING: SENDGRID_UPDATE_A_PARSE_SETTING_INPUT
  UPDATE_A_SCHEDULED_CAMPAIGN: SENDGRID_UPDATE_A_SCHEDULED_CAMPAIGN_INPUT
  UPDATE_A_SCHEDULED_SEND: SENDGRID_UPDATE_A_SCHEDULED_SEND_INPUT
  UPDATE_A_SEGMENT: SENDGRID_UPDATE_A_SEGMENT_INPUT
  UPDATE_A_SENDER: SENDGRID_UPDATE_A_SENDER_INPUT
  UPDATE_A_SENDER_IDENTITY: SENDGRID_UPDATE_A_SENDER_IDENTITY_INPUT
  UPDATE_A_SINGLE_EVENT_WEBHOOK_BY_ID: SENDGRID_UPDATE_A_SINGLE_EVENT_WEBHOOK_BY_ID_INPUT
  UPDATE_A_SUPPRESSION_GROUP: SENDGRID_UPDATE_A_SUPPRESSION_GROUP_INPUT
  UPDATE_A_USER_S_PROFILE: SENDGRID_UPDATE_A_USER_S_PROFILE_INPUT
  UPDATE_BOUNCE_PURGE_MAIL_SETTINGS: SENDGRID_UPDATE_BOUNCE_PURGE_MAIL_SETTINGS_INPUT
  UPDATE_CLICK_TRACKING_SETTINGS: SENDGRID_UPDATE_CLICK_TRACKING_SETTINGS_INPUT
  UPDATE_CUSTOM_FIELD_DEFINITION: SENDGRID_UPDATE_CUSTOM_FIELD_DEFINITION_INPUT
  UPDATE_DESIGN: SENDGRID_UPDATE_DESIGN_INPUT
  UPDATE_DETAILS_FOR_AN_IP_ADDRESS: SENDGRID_UPDATE_DETAILS_FOR_AN_IP_ADDRESS_INPUT
  UPDATE_ENFORCED_TLS_SETTINGS: SENDGRID_UPDATE_ENFORCED_TLS_SETTINGS_INPUT
  UPDATE_FOOTER_MAIL_SETTINGS: SENDGRID_UPDATE_FOOTER_MAIL_SETTINGS_INPUT
  UPDATE_FORWARD_BOUNCE_MAIL_SETTINGS: SENDGRID_UPDATE_FORWARD_BOUNCE_MAIL_SETTINGS_INPUT
  UPDATE_FORWARD_SPAM_MAIL_SETTINGS: SENDGRID_UPDATE_FORWARD_SPAM_MAIL_SETTINGS_INPUT
  UPDATE_GOOGLE_ANALYTICS_SETTINGS: SENDGRID_UPDATE_GOOGLE_ANALYTICS_SETTINGS_INPUT
  UPDATE_INTEGRATION: SENDGRID_UPDATE_INTEGRATION_INPUT
  UPDATE_LIST: SENDGRID_UPDATE_LIST_INPUT
  UPDATE_OPEN_TRACKING_SETTINGS: SENDGRID_UPDATE_OPEN_TRACKING_SETTINGS_INPUT
  UPDATE_SEGMENT: SENDGRID_UPDATE_SEGMENT_INPUT
  UPDATE_SINGLE_SEND: SENDGRID_UPDATE_SINGLE_SEND_INPUT
  UPDATE_SSO_CERTIFICATE: SENDGRID_UPDATE_SSO_CERTIFICATE_INPUT
  UPDATE_SUBSCRIPTION_TRACKING_SETTINGS: SENDGRID_UPDATE_SUBSCRIPTION_TRACKING_SETTINGS_INPUT
  UPDATE_TEAMMATE_S_PERMISSIONS: SENDGRID_UPDATE_TEAMMATE_S_PERMISSIONS_INPUT
  UPDATE_TEMPLATE_MAIL_SETTINGS: SENDGRID_UPDATE_TEMPLATE_MAIL_SETTINGS_INPUT
  UPDATE_THE_CREDITS_FOR_A_SUBUSER: SENDGRID_UPDATE_THE_CREDITS_FOR_A_SUBUSER_INPUT
  UPDATE_THE_REMAINING_CREDITS_FOR_A_SUBUSER: SENDGRID_UPDATE_THE_REMAINING_CREDITS_FOR_A_SUBUSER_INPUT
  UPDATE_YOUR_ACCOUNT_EMAIL_ADDRESS: SENDGRID_UPDATE_YOUR_ACCOUNT_EMAIL_ADDRESS_INPUT
  UPDATE_YOUR_PASSWORD: SENDGRID_UPDATE_YOUR_PASSWORD_INPUT
  UPDATE_YOUR_USERNAME: SENDGRID_UPDATE_YOUR_USERNAME_INPUT
  VALIDATE_AN_EMAIL: SENDGRID_VALIDATE_AN_EMAIL_INPUT
  VALIDATE_A_BATCH_ID: SENDGRID_VALIDATE_A_BATCH_ID_INPUT
  VALIDATE_A_BRANDED_LINK: SENDGRID_VALIDATE_A_BRANDED_LINK_INPUT
  VALIDATE_A_DOMAIN_AUTHENTICATION: SENDGRID_VALIDATE_A_DOMAIN_AUTHENTICATION_INPUT
  VALIDATE_A_REVERSE_DNS_RECORD: SENDGRID_VALIDATE_A_REVERSE_DNS_RECORD_INPUT
  VERIFY_SENDER_REQUEST: SENDGRID_VERIFY_SENDER_REQUEST_INPUT
  VIEW_A_SENDER_IDENTITY: SENDGRID_VIEW_A_SENDER_IDENTITY_INPUT
  VIEW_SCHEDULED_TIME_OF_A_CAMPAIGN: SENDGRID_VIEW_SCHEDULED_TIME_OF_A_CAMPAIGN_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SENDGRID".
 */
export type SENDGRID_TOOL_OUTPUTS = {
  ACTIVATE_TEMPLATE_VERSION: SENDGRID_ACTIVATE_TEMPLATE_VERSION_OUTPUT
  ADD_AN_IP_ADDRESS_TO_A_POOL: SENDGRID_ADD_AN_IP_ADDRESS_TO_A_POOL_OUTPUT
  ADD_AN_IP_TO_AN_AUTHENTICATED_DOMAIN: SENDGRID_ADD_AN_IP_TO_AN_AUTHENTICATED_DOMAIN_OUTPUT
  ADD_A_BATCH_OF_IPS_TO_AN_IP_POOL: SENDGRID_ADD_A_BATCH_OF_IPS_TO_AN_IP_POOL_OUTPUT
  ADD_A_SINGLE_RECIPIENT_TO_A_LIST: SENDGRID_ADD_A_SINGLE_RECIPIENT_TO_A_LIST_OUTPUT
  ADD_A_TWILIO_SEND_GRID_IP_ADDRESS: SENDGRID_ADD_A_TWILIO_SEND_GRID_IP_ADDRESS_OUTPUT
  ADD_IPS: SENDGRID_ADD_IPS_OUTPUT
  ADD_ONE_OR_MORE_IPS_TO_THE_ALLOW_LIST: SENDGRID_ADD_ONE_OR_MORE_IPS_TO_THE_ALLOW_LIST_OUTPUT
  ADD_OR_UPDATE_A_CONTACT: SENDGRID_ADD_OR_UPDATE_A_CONTACT_OUTPUT
  ADD_RECIPIENT_ADDRESSES_TO_THE_GLOBAL_SUPPRESSION_GROUP: SENDGRID_ADD_RECIPIENT_ADDRESSES_TO_THE_GLOBAL_SUPPRESSION_GROUP_OUTPUT
  ADD_SUPPRESSIONS_TO_A_SUPPRESSION_GROUP: SENDGRID_ADD_SUPPRESSIONS_TO_A_SUPPRESSION_GROUP_OUTPUT
  APPROVE_ACCESS_REQUEST: SENDGRID_APPROVE_ACCESS_REQUEST_OUTPUT
  ASSIGN_A_BATCH_OF_SUBUSERS_TO_AN_IP: SENDGRID_ASSIGN_A_BATCH_OF_SUBUSERS_TO_AN_IP_OUTPUT
  ASSOCIATE_AN_AUTHENTICATED_DOMAIN_WITH_A_GIVEN_USER: SENDGRID_ASSOCIATE_AN_AUTHENTICATED_DOMAIN_WITH_A_GIVEN_USER_OUTPUT
  ASSOCIATE_A_BRANDED_LINK_WITH_A_SUBUSER: SENDGRID_ASSOCIATE_A_BRANDED_LINK_WITH_A_SUBUSER_OUTPUT
  AUTHENTICATE_AN_ACCOUNT_WITH_SINGLE_SIGN_ON: SENDGRID_AUTHENTICATE_AN_ACCOUNT_WITH_SINGLE_SIGN_ON_OUTPUT
  AUTHENTICATE_A_DOMAIN: SENDGRID_AUTHENTICATE_A_DOMAIN_OUTPUT
  BIND_AUTHENTICATED_DOMAINS_TO_USER: SENDGRID_BIND_AUTHENTICATED_DOMAINS_TO_USER_OUTPUT
  BULK_DELETE_SINGLE_SENDS: SENDGRID_BULK_DELETE_SINGLE_SENDS_OUTPUT
  CANCEL_OR_PAUSE_A_SCHEDULED_SEND: SENDGRID_CANCEL_OR_PAUSE_A_SCHEDULED_SEND_OUTPUT
  COMPLETED_STEPS: SENDGRID_COMPLETED_STEPS_OUTPUT
  CREATE_AN_ACCOUNT: SENDGRID_CREATE_AN_ACCOUNT_OUTPUT
  CREATE_AN_IP_POOL: SENDGRID_CREATE_AN_IP_POOL_OUTPUT
  CREATE_AN_IP_POOL_WITH_A_NAME_AND_IP_ASSIGNMENTS: SENDGRID_CREATE_AN_IP_POOL_WITH_A_NAME_AND_IP_ASSIGNMENTS_OUTPUT
  CREATE_AN_SSO_CERTIFICATE: SENDGRID_CREATE_AN_SSO_CERTIFICATE_OUTPUT
  CREATE_AN_SSO_INTEGRATION: SENDGRID_CREATE_AN_SSO_INTEGRATION_OUTPUT
  CREATE_AN_SSO_TEAMMATE: SENDGRID_CREATE_AN_SSO_TEAMMATE_OUTPUT
  CREATE_API_KEYS: SENDGRID_CREATE_API_KEYS_OUTPUT
  CREATE_A_BATCH_ID: SENDGRID_CREATE_A_BATCH_ID_OUTPUT
  CREATE_A_BRANDED_LINK: SENDGRID_CREATE_A_BRANDED_LINK_OUTPUT
  CREATE_A_CAMPAIGN: SENDGRID_CREATE_A_CAMPAIGN_OUTPUT
  CREATE_A_CUSTOM_FIELD: SENDGRID_CREATE_A_CUSTOM_FIELD_OUTPUT
  CREATE_A_LIST: SENDGRID_CREATE_A_LIST_OUTPUT
  CREATE_A_NEW_ALERT: SENDGRID_CREATE_A_NEW_ALERT_OUTPUT
  CREATE_A_NEW_EVENT_WEBHOOK: SENDGRID_CREATE_A_NEW_EVENT_WEBHOOK_OUTPUT
  CREATE_A_NEW_SUPPRESSION_GROUP: SENDGRID_CREATE_A_NEW_SUPPRESSION_GROUP_OUTPUT
  CREATE_A_NEW_TRANSACTIONAL_TEMPLATE_VERSION: SENDGRID_CREATE_A_NEW_TRANSACTIONAL_TEMPLATE_VERSION_OUTPUT
  CREATE_A_PARSE_SETTING: SENDGRID_CREATE_A_PARSE_SETTING_OUTPUT
  CREATE_A_SEGMENT: SENDGRID_CREATE_A_SEGMENT_OUTPUT
  CREATE_A_SENDER: SENDGRID_CREATE_A_SENDER_OUTPUT
  CREATE_A_SENDER_IDENTITY: SENDGRID_CREATE_A_SENDER_IDENTITY_OUTPUT
  CREATE_A_TRANSACTIONAL_TEMPLATE: SENDGRID_CREATE_A_TRANSACTIONAL_TEMPLATE_OUTPUT
  CREATE_CUSTOM_FIELD_DEFINITION: SENDGRID_CREATE_CUSTOM_FIELD_DEFINITION_OUTPUT
  CREATE_DESIGN: SENDGRID_CREATE_DESIGN_OUTPUT
  CREATE_INTEGRATION: SENDGRID_CREATE_INTEGRATION_OUTPUT
  CREATE_LIST: SENDGRID_CREATE_LIST_OUTPUT
  CREATE_SEGMENT: SENDGRID_CREATE_SEGMENT_OUTPUT
  CREATE_SINGLE_SEND: SENDGRID_CREATE_SINGLE_SEND_OUTPUT
  CREATE_SUBUSER: SENDGRID_CREATE_SUBUSER_OUTPUT
  CREATE_VERIFIED_SENDER_REQUEST: SENDGRID_CREATE_VERIFIED_SENDER_REQUEST_OUTPUT
  DELETE_AN_ACCOUNT: SENDGRID_DELETE_AN_ACCOUNT_OUTPUT
  DELETE_AN_ALERT: SENDGRID_DELETE_AN_ALERT_OUTPUT
  DELETE_AN_AUTHENTICATED_DOMAIN: SENDGRID_DELETE_AN_AUTHENTICATED_DOMAIN_OUTPUT
  DELETE_AN_IP_POOL: SENDGRID_DELETE_AN_IP_POOL_OUTPUT
  DELETE_AN_SSO_CERTIFICATE: SENDGRID_DELETE_AN_SSO_CERTIFICATE_OUTPUT
  DELETE_AN_SSO_INTEGRATION: SENDGRID_DELETE_AN_SSO_INTEGRATION_OUTPUT
  DELETE_API_KEYS: SENDGRID_DELETE_API_KEYS_OUTPUT
  DELETE_A_BATCH_OF_IPS_FROM_AN_IP_POOL: SENDGRID_DELETE_A_BATCH_OF_IPS_FROM_AN_IP_POOL_OUTPUT
  DELETE_A_BATCH_OF_SUBUSERS_FROM_AN_IP: SENDGRID_DELETE_A_BATCH_OF_SUBUSERS_FROM_AN_IP_OUTPUT
  DELETE_A_BOUNCE: SENDGRID_DELETE_A_BOUNCE_OUTPUT
  DELETE_A_BRANDED_LINK: SENDGRID_DELETE_A_BRANDED_LINK_OUTPUT
  DELETE_A_CAMPAIGN: SENDGRID_DELETE_A_CAMPAIGN_OUTPUT
  DELETE_A_CANCELLATION_OR_PAUSE_FROM_A_SCHEDULED_SEND: SENDGRID_DELETE_A_CANCELLATION_OR_PAUSE_FROM_A_SCHEDULED_SEND_OUTPUT
  DELETE_A_CONTACT_IDENTIFIER: SENDGRID_DELETE_A_CONTACT_IDENTIFIER_OUTPUT
  DELETE_A_CUSTOM_FIELD: SENDGRID_DELETE_A_CUSTOM_FIELD_OUTPUT
  DELETE_A_GLOBAL_SUPPRESSION: SENDGRID_DELETE_A_GLOBAL_SUPPRESSION_OUTPUT
  DELETE_A_LIST: SENDGRID_DELETE_A_LIST_OUTPUT
  DELETE_A_PARSE_SETTING: SENDGRID_DELETE_A_PARSE_SETTING_OUTPUT
  DELETE_A_RECIPIENT: SENDGRID_DELETE_A_RECIPIENT_OUTPUT
  DELETE_A_REVERSE_DNS_RECORD: SENDGRID_DELETE_A_REVERSE_DNS_RECORD_OUTPUT
  DELETE_A_SEGMENT: SENDGRID_DELETE_A_SEGMENT_OUTPUT
  DELETE_A_SENDER: SENDGRID_DELETE_A_SENDER_OUTPUT
  DELETE_A_SENDER_IDENTITY: SENDGRID_DELETE_A_SENDER_IDENTITY_OUTPUT
  DELETE_A_SINGLE_EVENT_WEBHOOK_BY_ID: SENDGRID_DELETE_A_SINGLE_EVENT_WEBHOOK_BY_ID_OUTPUT
  DELETE_A_SINGLE_RECIPIENT_FROM_A_SINGLE_LIST: SENDGRID_DELETE_A_SINGLE_RECIPIENT_FROM_A_SINGLE_LIST_OUTPUT
  DELETE_A_SPECIFIC_BLOCK: SENDGRID_DELETE_A_SPECIFIC_BLOCK_OUTPUT
  DELETE_A_SPECIFIC_INVALID_EMAIL: SENDGRID_DELETE_A_SPECIFIC_INVALID_EMAIL_OUTPUT
  DELETE_A_SPECIFIC_SPAM_REPORT: SENDGRID_DELETE_A_SPECIFIC_SPAM_REPORT_OUTPUT
  DELETE_A_SUBUSER: SENDGRID_DELETE_A_SUBUSER_OUTPUT
  DELETE_A_SUPPRESSION_FROM_A_SUPPRESSION_GROUP: SENDGRID_DELETE_A_SUPPRESSION_FROM_A_SUPPRESSION_GROUP_OUTPUT
  DELETE_A_SUPPRESSION_GROUP: SENDGRID_DELETE_A_SUPPRESSION_GROUP_OUTPUT
  DELETE_A_TEMPLATE: SENDGRID_DELETE_A_TEMPLATE_OUTPUT
  DELETE_A_TRANSACTIONAL_TEMPLATE_VERSION: SENDGRID_DELETE_A_TRANSACTIONAL_TEMPLATE_VERSION_OUTPUT
  DELETE_BLOCKS: SENDGRID_DELETE_BLOCKS_OUTPUT
  DELETE_BOUNCES: SENDGRID_DELETE_BOUNCES_OUTPUT
  DELETE_BULK_INTEGRATION: SENDGRID_DELETE_BULK_INTEGRATION_OUTPUT
  DELETE_CONTACTS: SENDGRID_DELETE_CONTACTS_OUTPUT
  DELETE_CUSTOM_FIELD_DEFINITION: SENDGRID_DELETE_CUSTOM_FIELD_DEFINITION_OUTPUT
  DELETE_DESIGN: SENDGRID_DELETE_DESIGN_OUTPUT
  DELETE_INVALID_EMAILS: SENDGRID_DELETE_INVALID_EMAILS_OUTPUT
  DELETE_IP_POOL: SENDGRID_DELETE_IP_POOL_OUTPUT
  DELETE_PENDING_TEAMMATE: SENDGRID_DELETE_PENDING_TEAMMATE_OUTPUT
  DELETE_SEGMENT: SENDGRID_DELETE_SEGMENT_OUTPUT
  DELETE_SINGLE_SEND_BY_ID: SENDGRID_DELETE_SINGLE_SEND_BY_ID_OUTPUT
  DELETE_SINGLE_SEND_SCHEDULE: SENDGRID_DELETE_SINGLE_SEND_SCHEDULE_OUTPUT
  DELETE_SPAM_REPORTS: SENDGRID_DELETE_SPAM_REPORTS_OUTPUT
  DELETE_TEAMMATE: SENDGRID_DELETE_TEAMMATE_OUTPUT
  DELETE_VERIFIED_SENDER: SENDGRID_DELETE_VERIFIED_SENDER_OUTPUT
  DENY_ACCESS_REQUEST: SENDGRID_DENY_ACCESS_REQUEST_OUTPUT
  DISASSOCIATE_AN_AUTHENTICATED_DOMAIN_FROM_A_GIVEN_USER: SENDGRID_DISASSOCIATE_AN_AUTHENTICATED_DOMAIN_FROM_A_GIVEN_USER_OUTPUT
  DISASSOCIATE_A_BRANDED_LINK_FROM_A_SUBUSER: SENDGRID_DISASSOCIATE_A_BRANDED_LINK_FROM_A_SUBUSER_OUTPUT
  DOMAIN_WARN_LIST: SENDGRID_DOMAIN_WARN_LIST_OUTPUT
  DOWNLOAD_CSV: SENDGRID_DOWNLOAD_CSV_OUTPUT
  DUPLICATE_A_TRANSACTIONAL_TEMPLATE: SENDGRID_DUPLICATE_A_TRANSACTIONAL_TEMPLATE_OUTPUT
  DUPLICATE_DESIGN: SENDGRID_DUPLICATE_DESIGN_OUTPUT
  DUPLICATE_SEND_GRID_PRE_BUILT_DESIGN: SENDGRID_DUPLICATE_SEND_GRID_PRE_BUILT_DESIGN_OUTPUT
  DUPLICATE_SINGLE_SEND: SENDGRID_DUPLICATE_SINGLE_SEND_OUTPUT
  EDIT_AN_SSO_TEAMMATE: SENDGRID_EDIT_AN_SSO_TEAMMATE_OUTPUT
  EDIT_A_TRANSACTIONAL_TEMPLATE: SENDGRID_EDIT_A_TRANSACTIONAL_TEMPLATE_OUTPUT
  EDIT_A_TRANSACTIONAL_TEMPLATE_VERSION: SENDGRID_EDIT_A_TRANSACTIONAL_TEMPLATE_VERSION_OUTPUT
  EDIT_VERIFIED_SENDER: SENDGRID_EDIT_VERIFIED_SENDER_OUTPUT
  EMAIL_DNS_RECORDS_TO_A_CO_WORKER: SENDGRID_EMAIL_DNS_RECORDS_TO_A_CO_WORKER_OUTPUT
  ENABLE_DISABLE_A_SUBUSER: SENDGRID_ENABLE_DISABLE_A_SUBUSER_OUTPUT
  ENABLE_DISABLE_WEBSITE_ACCESS_FOR_A_SUBUSER: SENDGRID_ENABLE_DISABLE_WEBSITE_ACCESS_FOR_A_SUBUSER_OUTPUT
  ERASE_RECIPIENTS_EMAIL_DATA: SENDGRID_ERASE_RECIPIENTS_EMAIL_DATA_OUTPUT
  EXPORT_CONTACTS: SENDGRID_EXPORT_CONTACTS_OUTPUT
  EXPORT_CONTACTS_STATUS: SENDGRID_EXPORT_CONTACTS_STATUS_OUTPUT
  EXPORT_SINGLE_SEND_STATS: SENDGRID_EXPORT_SINGLE_SEND_STATS_OUTPUT
  FILTER_ALL_MESSAGES: SENDGRID_FILTER_ALL_MESSAGES_OUTPUT
  FILTER_MESSAGES_BY_MESSAGE_ID: SENDGRID_FILTER_MESSAGES_BY_MESSAGE_ID_OUTPUT
  FILTER_SEGMENTS_BY_PARENT_IDS: SENDGRID_FILTER_SEGMENTS_BY_PARENT_IDS_OUTPUT
  GET_ACCOUNT_OFFERINGS: SENDGRID_GET_ACCOUNT_OFFERINGS_OUTPUT
  GET_ALL_ACCOUNTS: SENDGRID_GET_ALL_ACCOUNTS_OUTPUT
  GET_ALL_AUTOMATION_STATS: SENDGRID_GET_ALL_AUTOMATION_STATS_OUTPUT
  GET_ALL_AVAILABLE_OFFERINGS: SENDGRID_GET_ALL_AVAILABLE_OFFERINGS_OUTPUT
  GET_ALL_CATEGORIES: SENDGRID_GET_ALL_CATEGORIES_OUTPUT
  GET_ALL_EXISTING_EXPORTS: SENDGRID_GET_ALL_EXISTING_EXPORTS_OUTPUT
  GET_ALL_FIELD_DEFINITIONS: SENDGRID_GET_ALL_FIELD_DEFINITIONS_OUTPUT
  GET_ALL_IP_POOLS_THAT_HAVE_ASSOCIATED_IPS: SENDGRID_GET_ALL_IP_POOLS_THAT_HAVE_ASSOCIATED_IPS_OUTPUT
  GET_ALL_LISTS: SENDGRID_GET_ALL_LISTS_OUTPUT
  GET_ALL_SENDER_IDENTITIES: SENDGRID_GET_ALL_SENDER_IDENTITIES_OUTPUT
  GET_ALL_SINGLE_SENDS: SENDGRID_GET_ALL_SINGLE_SENDS_OUTPUT
  GET_ALL_SINGLE_SENDS_STATS: SENDGRID_GET_ALL_SINGLE_SENDS_STATS_OUTPUT
  GET_ALL_SSO_CERTIFICATES_BY_INTEGRATION: SENDGRID_GET_ALL_SSO_CERTIFICATES_BY_INTEGRATION_OUTPUT
  GET_ALL_SSO_INTEGRATIONS: SENDGRID_GET_ALL_SSO_INTEGRATIONS_OUTPUT
  GET_ALL_VERIFIED_SENDERS: SENDGRID_GET_ALL_VERIFIED_SENDERS_OUTPUT
  GET_AN_ACCOUNT_S_STATE: SENDGRID_GET_AN_ACCOUNT_S_STATE_OUTPUT
  GET_AN_SSO_CERTIFICATE: SENDGRID_GET_AN_SSO_CERTIFICATE_OUTPUT
  GET_AN_SSO_INTEGRATION: SENDGRID_GET_AN_SSO_INTEGRATION_OUTPUT
  GET_AUTOMATION_CLICK_TRACKING_STATS_BY_ID: SENDGRID_GET_AUTOMATION_CLICK_TRACKING_STATS_BY_ID_OUTPUT
  GET_AUTOMATION_STATS_BY_ID: SENDGRID_GET_AUTOMATION_STATS_BY_ID_OUTPUT
  GET_A_CONTACT_BY_ID: SENDGRID_GET_A_CONTACT_BY_ID_OUTPUT
  GET_A_LIST_BY_ID: SENDGRID_GET_A_LIST_BY_ID_OUTPUT
  GET_A_LIST_OF_ALL_IP_ADDRESSES_ON_YOUR_ACCOUNT: SENDGRID_GET_A_LIST_OF_ALL_IP_ADDRESSES_ON_YOUR_ACCOUNT_OUTPUT
  GET_A_LIST_OF_ALL_SENDERS: SENDGRID_GET_A_LIST_OF_ALL_SENDERS_OUTPUT
  GET_A_LIST_OF_SUBUSERS_ASSIGNED_TO_AN_IP: SENDGRID_GET_A_LIST_OF_SUBUSERS_ASSIGNED_TO_AN_IP_OUTPUT
  GET_A_SPECIFIC_SENDER: SENDGRID_GET_A_SPECIFIC_SENDER_OUTPUT
  GET_A_USER_S_ACCOUNT_INFORMATION: SENDGRID_GET_A_USER_S_ACCOUNT_INFORMATION_OUTPUT
  GET_A_USER_S_PROFILE: SENDGRID_GET_A_USER_S_PROFILE_OUTPUT
  GET_BATCHED_CONTACTS_BY_IDS: SENDGRID_GET_BATCHED_CONTACTS_BY_IDS_OUTPUT
  GET_BOUNCE_CLASS_STATS: SENDGRID_GET_BOUNCE_CLASS_STATS_OUTPUT
  GET_CONTACTS_BY_EMAILS: SENDGRID_GET_CONTACTS_BY_EMAILS_OUTPUT
  GET_CONTACTS_BY_IDENTIFIERS: SENDGRID_GET_CONTACTS_BY_IDENTIFIERS_OUTPUT
  GET_DESIGN: SENDGRID_GET_DESIGN_OUTPUT
  GET_DETAILS_FOR_AN_IP_ADDRESS: SENDGRID_GET_DETAILS_FOR_AN_IP_ADDRESS_OUTPUT
  GET_DETAILS_FOR_AN_IP_POOL: SENDGRID_GET_DETAILS_FOR_AN_IP_POOL_OUTPUT
  GET_ENGAGEMENT_QUALITY_SCORES: SENDGRID_GET_ENGAGEMENT_QUALITY_SCORES_OUTPUT
  GET_INFORMATION_ON_A_SINGLE_SUPPRESSION_GROUP: SENDGRID_GET_INFORMATION_ON_A_SINGLE_SUPPRESSION_GROUP_OUTPUT
  GET_INTEGRATION: SENDGRID_GET_INTEGRATION_OUTPUT
  GET_IPS_ASSIGNED_TO_AN_IP_POOL: SENDGRID_GET_IPS_ASSIGNED_TO_AN_IP_POOL_OUTPUT
  GET_LIST_CONTACT_COUNT: SENDGRID_GET_LIST_CONTACT_COUNT_OUTPUT
  GET_LIST_OF_SEGMENTS: SENDGRID_GET_LIST_OF_SEGMENTS_OUTPUT
  GET_OPEN_TRACKING_SETTINGS: SENDGRID_GET_OPEN_TRACKING_SETTINGS_OUTPUT
  GET_RECIPIENT_UPLOAD_STATUS: SENDGRID_GET_RECIPIENT_UPLOAD_STATUS_OUTPUT
  GET_REMAINING_IPS_COUNT: SENDGRID_GET_REMAINING_IPS_COUNT_OUTPUT
  GET_SAMPLE_CONTACTS: SENDGRID_GET_SAMPLE_CONTACTS_OUTPUT
  GET_SEGMENT_BY_ID: SENDGRID_GET_SEGMENT_BY_ID_OUTPUT
  GET_SEND_GRID_PRE_BUILT_DESIGN: SENDGRID_GET_SEND_GRID_PRE_BUILT_DESIGN_OUTPUT
  GET_SIGNED_EVENT_WEBHOOK_S_PUBLIC_KEY: SENDGRID_GET_SIGNED_EVENT_WEBHOOK_S_PUBLIC_KEY_OUTPUT
  GET_SINGLE_SENDS_SEARCH: SENDGRID_GET_SINGLE_SENDS_SEARCH_OUTPUT
  GET_SINGLE_SEND_BY_ID: SENDGRID_GET_SINGLE_SEND_BY_ID_OUTPUT
  GET_SINGLE_SEND_CLICK_TRACKING_STATS_BY_ID: SENDGRID_GET_SINGLE_SEND_CLICK_TRACKING_STATS_BY_ID_OUTPUT
  GET_SINGLE_SEND_STATS_BY_ID: SENDGRID_GET_SINGLE_SEND_STATS_BY_ID_OUTPUT
  GET_SUBUSERS_ENGAGEMENT_QUALITY_SCORES: SENDGRID_GET_SUBUSERS_ENGAGEMENT_QUALITY_SCORES_OUTPUT
  GET_SUBUSER_MONTHLY_STATS: SENDGRID_GET_SUBUSER_MONTHLY_STATS_OUTPUT
  GET_SUPPRESSION_GROUPS: SENDGRID_GET_SUPPRESSION_GROUPS_OUTPUT
  GET_TEAMMATE_SUBUSER_ACCESS: SENDGRID_GET_TEAMMATE_SUBUSER_ACCESS_OUTPUT
  GET_THE_CREDITS_FOR_A_SUBUSER: SENDGRID_GET_THE_CREDITS_FOR_A_SUBUSER_OUTPUT
  GET_THE_DEFAULT_AUTHENTICATION: SENDGRID_GET_THE_DEFAULT_AUTHENTICATION_OUTPUT
  GET_THE_SETTINGS_FOR_A_SINGLE_EVENT_WEBHOOK: SENDGRID_GET_THE_SETTINGS_FOR_A_SINGLE_EVENT_WEBHOOK_OUTPUT
  GET_TOTAL_CONTACT_COUNT: SENDGRID_GET_TOTAL_CONTACT_COUNT_OUTPUT
  GET_USER_SCOPES: SENDGRID_GET_USER_SCOPES_OUTPUT
  IMPORT_CONTACTS: SENDGRID_IMPORT_CONTACTS_OUTPUT
  IMPORT_CONTACTS_STATUS: SENDGRID_IMPORT_CONTACTS_STATUS_OUTPUT
  INVITE_TEAMMATE: SENDGRID_INVITE_TEAMMATE_OUTPUT
  LIST_ALL_AUTHENTICATED_DOMAINS: SENDGRID_LIST_ALL_AUTHENTICATED_DOMAINS_OUTPUT
  LIST_ALL_SUBUSERS: SENDGRID_LIST_ALL_SUBUSERS_OUTPUT
  LIST_API_KEYS: SENDGRID_LIST_API_KEYS_OUTPUT
  LIST_BULK_EMAIL_VALIDATION_JOBS: SENDGRID_LIST_BULK_EMAIL_VALIDATION_JOBS_OUTPUT
  LIST_DESIGNS: SENDGRID_LIST_DESIGNS_OUTPUT
  LIST_INTEGRATION: SENDGRID_LIST_INTEGRATION_OUTPUT
  LIST_SEND_GRID_PRE_BUILT_DESIGNS: SENDGRID_LIST_SEND_GRID_PRE_BUILT_DESIGNS_OUTPUT
  LIST_USER_AUTH_DOMAINS: SENDGRID_LIST_USER_AUTH_DOMAINS_OUTPUT
  MANUALLY_REFRESH_A_SEGMENT: SENDGRID_MANUALLY_REFRESH_A_SEGMENT_OUTPUT
  PRESIGNED_URL_HEADERS_FOR_BULK_EMAIL_VALIDATION: SENDGRID_PRESIGNED_URL_HEADERS_FOR_BULK_EMAIL_VALIDATION_OUTPUT
  REMOVE_AN_IP_ADDRESS_FROM_A_POOL: SENDGRID_REMOVE_AN_IP_ADDRESS_FROM_A_POOL_OUTPUT
  REMOVE_AN_IP_FROM_AN_AUTHENTICATED_DOMAIN: SENDGRID_REMOVE_AN_IP_FROM_AN_AUTHENTICATED_DOMAIN_OUTPUT
  REMOVE_A_SPECIFIC_IP_FROM_THE_ALLOWED_LIST: SENDGRID_REMOVE_A_SPECIFIC_IP_FROM_THE_ALLOWED_LIST_OUTPUT
  REMOVE_CONTACTS_FROM_A_LIST: SENDGRID_REMOVE_CONTACTS_FROM_A_LIST_OUTPUT
  REMOVE_LIST_AND_OPTIONAL_CONTACTS: SENDGRID_REMOVE_LIST_AND_OPTIONAL_CONTACTS_OUTPUT
  REMOVE_ONE_OR_MORE_IPS_FROM_THE_ALLOW_LIST: SENDGRID_REMOVE_ONE_OR_MORE_IPS_FROM_THE_ALLOW_LIST_OUTPUT
  REMOVE_SEGMENT_WITHOUT_AFFECTING_CONTACTS: SENDGRID_REMOVE_SEGMENT_WITHOUT_AFFECTING_CONTACTS_OUTPUT
  RENAME_AN_IP_POOL: SENDGRID_RENAME_AN_IP_POOL_OUTPUT
  REQUEST_CSV: SENDGRID_REQUEST_CSV_OUTPUT
  RESEND_A_SENDER_VERIFICATION: SENDGRID_RESEND_A_SENDER_VERIFICATION_OUTPUT
  RESEND_SENDER_IDENTITY_VERIFICATION: SENDGRID_RESEND_SENDER_IDENTITY_VERIFICATION_OUTPUT
  RESEND_TEAMMATE_INVITE: SENDGRID_RESEND_TEAMMATE_INVITE_OUTPUT
  RESEND_VERIFIED_SENDER_REQUEST: SENDGRID_RESEND_VERIFIED_SENDER_REQUEST_OUTPUT
  RETRIEVES_INBOUND_PARSE_WEBHOOK_STATISTICS: SENDGRID_RETRIEVES_INBOUND_PARSE_WEBHOOK_STATISTICS_OUTPUT
  RETRIEVE_ACCESS_REQUESTS: SENDGRID_RETRIEVE_ACCESS_REQUESTS_OUTPUT
  RETRIEVE_ADDRESS_WHITELIST_MAIL_SETTINGS: SENDGRID_RETRIEVE_ADDRESS_WHITELIST_MAIL_SETTINGS_OUTPUT
  RETRIEVE_ALL_ALERTS: SENDGRID_RETRIEVE_ALL_ALERTS_OUTPUT
  RETRIEVE_ALL_ASSIGNED_IPS: SENDGRID_RETRIEVE_ALL_ASSIGNED_IPS_OUTPUT
  RETRIEVE_ALL_BLOCKS: SENDGRID_RETRIEVE_ALL_BLOCKS_OUTPUT
  RETRIEVE_ALL_BOUNCES: SENDGRID_RETRIEVE_ALL_BOUNCES_OUTPUT
  RETRIEVE_ALL_BRANDED_LINKS: SENDGRID_RETRIEVE_ALL_BRANDED_LINKS_OUTPUT
  RETRIEVE_ALL_CAMPAIGNS: SENDGRID_RETRIEVE_ALL_CAMPAIGNS_OUTPUT
  RETRIEVE_ALL_CATEGORIES: SENDGRID_RETRIEVE_ALL_CATEGORIES_OUTPUT
  RETRIEVE_ALL_CUSTOM_FIELDS: SENDGRID_RETRIEVE_ALL_CUSTOM_FIELDS_OUTPUT
  RETRIEVE_ALL_GLOBAL_SUPPRESSIONS: SENDGRID_RETRIEVE_ALL_GLOBAL_SUPPRESSIONS_OUTPUT
  RETRIEVE_ALL_INVALID_EMAILS: SENDGRID_RETRIEVE_ALL_INVALID_EMAILS_OUTPUT
  RETRIEVE_ALL_IPS_CURRENTLY_IN_WARMUP: SENDGRID_RETRIEVE_ALL_IPS_CURRENTLY_IN_WARMUP_OUTPUT
  RETRIEVE_ALL_IP_ADDRESSES: SENDGRID_RETRIEVE_ALL_IP_ADDRESSES_OUTPUT
  RETRIEVE_ALL_IP_POOLS: SENDGRID_RETRIEVE_ALL_IP_POOLS_OUTPUT
  RETRIEVE_ALL_IP_POOLS_AN_IP_ADDRESS_BELONGS_TO: SENDGRID_RETRIEVE_ALL_IP_POOLS_AN_IP_ADDRESS_BELONGS_TO_OUTPUT
  RETRIEVE_ALL_LISTS: SENDGRID_RETRIEVE_ALL_LISTS_OUTPUT
  RETRIEVE_ALL_MAIL_SETTINGS: SENDGRID_RETRIEVE_ALL_MAIL_SETTINGS_OUTPUT
  RETRIEVE_ALL_OF_YOUR_EVENT_WEBHOOKS: SENDGRID_RETRIEVE_ALL_OF_YOUR_EVENT_WEBHOOKS_OUTPUT
  RETRIEVE_ALL_PARSE_SETTINGS: SENDGRID_RETRIEVE_ALL_PARSE_SETTINGS_OUTPUT
  RETRIEVE_ALL_PENDING_TEAMMATES: SENDGRID_RETRIEVE_ALL_PENDING_TEAMMATES_OUTPUT
  RETRIEVE_ALL_RECENT_ACCESS_ATTEMPTS: SENDGRID_RETRIEVE_ALL_RECENT_ACCESS_ATTEMPTS_OUTPUT
  RETRIEVE_ALL_RECIPIENTS_ON_A_LIST: SENDGRID_RETRIEVE_ALL_RECIPIENTS_ON_A_LIST_OUTPUT
  RETRIEVE_ALL_REVERSE_DNS_RECORDS: SENDGRID_RETRIEVE_ALL_REVERSE_DNS_RECORDS_OUTPUT
  RETRIEVE_ALL_SCHEDULED_SENDS: SENDGRID_RETRIEVE_ALL_SCHEDULED_SENDS_OUTPUT
  RETRIEVE_ALL_SEGMENTS: SENDGRID_RETRIEVE_ALL_SEGMENTS_OUTPUT
  RETRIEVE_ALL_SPAM_REPORTS: SENDGRID_RETRIEVE_ALL_SPAM_REPORTS_OUTPUT
  RETRIEVE_ALL_SUPPRESSIONS: SENDGRID_RETRIEVE_ALL_SUPPRESSIONS_OUTPUT
  RETRIEVE_ALL_SUPPRESSIONS_FOR_A_SUPPRESSION_GROUP: SENDGRID_RETRIEVE_ALL_SUPPRESSIONS_FOR_A_SUPPRESSION_GROUP_OUTPUT
  RETRIEVE_ALL_SUPPRESSION_GROUPS_FOR_AN_EMAIL_ADDRESS: SENDGRID_RETRIEVE_ALL_SUPPRESSION_GROUPS_FOR_AN_EMAIL_ADDRESS_OUTPUT
  RETRIEVE_ALL_TEAMMATES: SENDGRID_RETRIEVE_ALL_TEAMMATES_OUTPUT
  RETRIEVE_ALL_THE_IPS_IN_A_SPECIFIED_POOL: SENDGRID_RETRIEVE_ALL_THE_IPS_IN_A_SPECIFIED_POOL_OUTPUT
  RETRIEVE_AN_AUTHENTICATED_DOMAIN: SENDGRID_RETRIEVE_AN_AUTHENTICATED_DOMAIN_OUTPUT
  RETRIEVE_AN_EXISTING_API_KEY: SENDGRID_RETRIEVE_AN_EXISTING_API_KEY_OUTPUT
  RETRIEVE_A_BOUNCE: SENDGRID_RETRIEVE_A_BOUNCE_OUTPUT
  RETRIEVE_A_BRANDED_LINK: SENDGRID_RETRIEVE_A_BRANDED_LINK_OUTPUT
  RETRIEVE_A_COUNT_OF_RECIPIENTS: SENDGRID_RETRIEVE_A_COUNT_OF_RECIPIENTS_OUTPUT
  RETRIEVE_A_CUSTOM_FIELD: SENDGRID_RETRIEVE_A_CUSTOM_FIELD_OUTPUT
  RETRIEVE_A_GLOBAL_SUPPRESSION: SENDGRID_RETRIEVE_A_GLOBAL_SUPPRESSION_OUTPUT
  RETRIEVE_A_LIST_OF_CURRENTLY_ALLOWED_IPS: SENDGRID_RETRIEVE_A_LIST_OF_CURRENTLY_ALLOWED_IPS_OUTPUT
  RETRIEVE_A_REVERSE_DNS_RECORD: SENDGRID_RETRIEVE_A_REVERSE_DNS_RECORD_OUTPUT
  RETRIEVE_A_SEGMENT: SENDGRID_RETRIEVE_A_SEGMENT_OUTPUT
  RETRIEVE_A_SINGLE_CAMPAIGN: SENDGRID_RETRIEVE_A_SINGLE_CAMPAIGN_OUTPUT
  RETRIEVE_A_SINGLE_LIST: SENDGRID_RETRIEVE_A_SINGLE_LIST_OUTPUT
  RETRIEVE_A_SINGLE_RECIPIENT: SENDGRID_RETRIEVE_A_SINGLE_RECIPIENT_OUTPUT
  RETRIEVE_A_SINGLE_TRANSACTIONAL_TEMPLATE: SENDGRID_RETRIEVE_A_SINGLE_TRANSACTIONAL_TEMPLATE_OUTPUT
  RETRIEVE_A_SPECIFIC_ALERT: SENDGRID_RETRIEVE_A_SPECIFIC_ALERT_OUTPUT
  RETRIEVE_A_SPECIFIC_ALLOWED_IP: SENDGRID_RETRIEVE_A_SPECIFIC_ALLOWED_IP_OUTPUT
  RETRIEVE_A_SPECIFIC_BLOCK: SENDGRID_RETRIEVE_A_SPECIFIC_BLOCK_OUTPUT
  RETRIEVE_A_SPECIFIC_INVALID_EMAIL: SENDGRID_RETRIEVE_A_SPECIFIC_INVALID_EMAIL_OUTPUT
  RETRIEVE_A_SPECIFIC_PARSE_SETTING: SENDGRID_RETRIEVE_A_SPECIFIC_PARSE_SETTING_OUTPUT
  RETRIEVE_A_SPECIFIC_SPAM_REPORT: SENDGRID_RETRIEVE_A_SPECIFIC_SPAM_REPORT_OUTPUT
  RETRIEVE_A_SPECIFIC_TRANSACTIONAL_TEMPLATE_VERSION: SENDGRID_RETRIEVE_A_SPECIFIC_TRANSACTIONAL_TEMPLATE_VERSION_OUTPUT
  RETRIEVE_A_SUBUSER_S_BRANDED_LINK: SENDGRID_RETRIEVE_A_SUBUSER_S_BRANDED_LINK_OUTPUT
  RETRIEVE_BOUNCE_CLASSIFICATION_TOTALS: SENDGRID_RETRIEVE_BOUNCE_CLASSIFICATION_TOTALS_OUTPUT
  RETRIEVE_BOUNCE_PURGE_MAIL_SETTINGS: SENDGRID_RETRIEVE_BOUNCE_PURGE_MAIL_SETTINGS_OUTPUT
  RETRIEVE_CLICK_TRACK_SETTINGS: SENDGRID_RETRIEVE_CLICK_TRACK_SETTINGS_OUTPUT
  RETRIEVE_CURRENT_ENFORCED_TLS_SETTINGS: SENDGRID_RETRIEVE_CURRENT_ENFORCED_TLS_SETTINGS_OUTPUT
  RETRIEVE_EMAIL_STATISTICS_BY_BROWSER: SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_BROWSER_OUTPUT
  RETRIEVE_EMAIL_STATISTICS_BY_CLIENT_TYPE: SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_CLIENT_TYPE_OUTPUT
  RETRIEVE_EMAIL_STATISTICS_BY_COUNTRY_AND_STATE_PROVINCE: SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_COUNTRY_AND_STATE_PROVINCE_OUTPUT
  RETRIEVE_EMAIL_STATISTICS_BY_DEVICE_TYPE: SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_DEVICE_TYPE_OUTPUT
  RETRIEVE_EMAIL_STATISTICS_BY_MAILBOX_PROVIDER: SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_MAILBOX_PROVIDER_OUTPUT
  RETRIEVE_EMAIL_STATISTICS_FOR_CATEGORIES: SENDGRID_RETRIEVE_EMAIL_STATISTICS_FOR_CATEGORIES_OUTPUT
  RETRIEVE_EMAIL_STATISTICS_FOR_YOUR_SUBUSERS: SENDGRID_RETRIEVE_EMAIL_STATISTICS_FOR_YOUR_SUBUSERS_OUTPUT
  RETRIEVE_FOOTER_MAIL_SETTINGS: SENDGRID_RETRIEVE_FOOTER_MAIL_SETTINGS_OUTPUT
  RETRIEVE_FORWARD_BOUNCE_MAIL_SETTINGS: SENDGRID_RETRIEVE_FORWARD_BOUNCE_MAIL_SETTINGS_OUTPUT
  RETRIEVE_FORWARD_SPAM_MAIL_SETTINGS: SENDGRID_RETRIEVE_FORWARD_SPAM_MAIL_SETTINGS_OUTPUT
  RETRIEVE_GLOBAL_EMAIL_STATISTICS: SENDGRID_RETRIEVE_GLOBAL_EMAIL_STATISTICS_OUTPUT
  RETRIEVE_GOOGLE_ANALYTICS_SETTINGS: SENDGRID_RETRIEVE_GOOGLE_ANALYTICS_SETTINGS_OUTPUT
  RETRIEVE_LEGACY_TEMPLATE_MAIL_SETTINGS: SENDGRID_RETRIEVE_LEGACY_TEMPLATE_MAIL_SETTINGS_OUTPUT
  RETRIEVE_MONTHLY_STATS_FOR_ALL_SUBUSERS: SENDGRID_RETRIEVE_MONTHLY_STATS_FOR_ALL_SUBUSERS_OUTPUT
  RETRIEVE_PAGED_TRANSACTIONAL_TEMPLATES: SENDGRID_RETRIEVE_PAGED_TRANSACTIONAL_TEMPLATES_OUTPUT
  RETRIEVE_RECIPIENTS: SENDGRID_RETRIEVE_RECIPIENTS_OUTPUT
  RETRIEVE_RECIPIENTS_ON_A_SEGMENT: SENDGRID_RETRIEVE_RECIPIENTS_ON_A_SEGMENT_OUTPUT
  RETRIEVE_RESERVED_FIELDS: SENDGRID_RETRIEVE_RESERVED_FIELDS_OUTPUT
  RETRIEVE_SCHEDULED_SEND: SENDGRID_RETRIEVE_SCHEDULED_SEND_OUTPUT
  RETRIEVE_SINGLE_SEGMENT_ENDPOINT: SENDGRID_RETRIEVE_SINGLE_SEGMENT_ENDPOINT_OUTPUT
  RETRIEVE_SPECIFIC_TEAMMATE: SENDGRID_RETRIEVE_SPECIFIC_TEAMMATE_OUTPUT
  RETRIEVE_STATS_BY_A_SPECIFIC_CLIENT_TYPE: SENDGRID_RETRIEVE_STATS_BY_A_SPECIFIC_CLIENT_TYPE_OUTPUT
  RETRIEVE_SUBSCRIPTION_TRACKING_SETTINGS: SENDGRID_RETRIEVE_SUBSCRIPTION_TRACKING_SETTINGS_OUTPUT
  RETRIEVE_SUBUSER_REPUTATIONS: SENDGRID_RETRIEVE_SUBUSER_REPUTATIONS_OUTPUT
  RETRIEVE_SUMS_OF_EMAIL_STATS_FOR_EACH_CATEGORY: SENDGRID_RETRIEVE_SUMS_OF_EMAIL_STATS_FOR_EACH_CATEGORY_OUTPUT
  RETRIEVE_THE_COUNT_OF_BILLABLE_RECIPIENTS: SENDGRID_RETRIEVE_THE_COUNT_OF_BILLABLE_RECIPIENTS_OUTPUT
  RETRIEVE_THE_DEFAULT_BRANDED_LINK: SENDGRID_RETRIEVE_THE_DEFAULT_BRANDED_LINK_OUTPUT
  RETRIEVE_THE_LISTS_THAT_A_RECIPIENT_IS_ON: SENDGRID_RETRIEVE_THE_LISTS_THAT_A_RECIPIENT_IS_ON_OUTPUT
  RETRIEVE_THE_WARMUP_STATUS_FOR_A_SPECIFIC_IP_ADDRESS: SENDGRID_RETRIEVE_THE_WARMUP_STATUS_FOR_A_SPECIFIC_IP_ADDRESS_OUTPUT
  RETRIEVE_TRACKING_SETTINGS: SENDGRID_RETRIEVE_TRACKING_SETTINGS_OUTPUT
  RETRIEVE_USER_S_AUTHENTICATED_DOMAINS: SENDGRID_RETRIEVE_USER_S_AUTHENTICATED_DOMAINS_OUTPUT
  RETRIEVE_YOUR_ACCOUNT_EMAIL_ADDRESS: SENDGRID_RETRIEVE_YOUR_ACCOUNT_EMAIL_ADDRESS_OUTPUT
  RETRIEVE_YOUR_CREDIT_BALANCE: SENDGRID_RETRIEVE_YOUR_CREDIT_BALANCE_OUTPUT
  RETRIEVE_YOUR_USERNAME: SENDGRID_RETRIEVE_YOUR_USERNAME_OUTPUT
  RETURNS_A_LIST_OF_ALL_PARTNER_SETTINGS: SENDGRID_RETURNS_A_LIST_OF_ALL_PARTNER_SETTINGS_OUTPUT
  SCHEDULE_A_CAMPAIGN: SENDGRID_SCHEDULE_A_CAMPAIGN_OUTPUT
  SCHEDULE_SINGLE_SEND: SENDGRID_SCHEDULE_SINGLE_SEND_OUTPUT
  SEARCH_CONTACTS: SENDGRID_SEARCH_CONTACTS_OUTPUT
  SEARCH_FOR_SUPPRESSIONS_WITHIN_A_GROUP: SENDGRID_SEARCH_FOR_SUPPRESSIONS_WITHIN_A_GROUP_OUTPUT
  SEARCH_RECIPIENTS: SENDGRID_SEARCH_RECIPIENTS_OUTPUT
  SEGMENT_JSON_DATA_BY_SPECIFIC_CRITERIA: SENDGRID_SEGMENT_JSON_DATA_BY_SPECIFIC_CRITERIA_OUTPUT
  SEND_A_CAMPAIGN: SENDGRID_SEND_A_CAMPAIGN_OUTPUT
  SEND_A_TEST_CAMPAIGN: SENDGRID_SEND_A_TEST_CAMPAIGN_OUTPUT
  SEND_A_TEST_MARKETING_EMAIL: SENDGRID_SEND_A_TEST_MARKETING_EMAIL_OUTPUT
  SEND_EMAIL_WITH_TWILIO_SEND_GRID: SENDGRID_SEND_EMAIL_WITH_TWILIO_SEND_GRID_OUTPUT
  SET_UP_REVERSE_DNS: SENDGRID_SET_UP_REVERSE_DNS_OUTPUT
  SINGLE_SEND_CSV_STATS_RETRIEVAL: SENDGRID_SINGLE_SEND_CSV_STATS_RETRIEVAL_OUTPUT
  START_WARMING_UP_AN_IP_ADDRESS: SENDGRID_START_WARMING_UP_AN_IP_ADDRESS_OUTPUT
  STOP_WARMING_UP_AN_IP_ADDRESS: SENDGRID_STOP_WARMING_UP_AN_IP_ADDRESS_OUTPUT
  SUM_EMAIL_STATS_FOR_SUBUSERS: SENDGRID_SUM_EMAIL_STATS_FOR_SUBUSERS_OUTPUT
  TEST_AN_EVENT_WEBHOOK_S_SETTINGS: SENDGRID_TEST_AN_EVENT_WEBHOOK_S_SETTINGS_OUTPUT
  THIS_REQUEST_RETURNS_A_SINGLE_BULK_EMAIL_VALIDATION_JOB: SENDGRID_THIS_REQUEST_RETURNS_A_SINGLE_BULK_EMAIL_VALIDATION_JOB_OUTPUT
  TOGGLE_WEBHOOK_SIGNATURE: SENDGRID_TOGGLE_WEBHOOK_SIGNATURE_OUTPUT
  UNLINK_SUBUSER_DOMAIN: SENDGRID_UNLINK_SUBUSER_DOMAIN_OUTPUT
  UNSCHEDULE_A_SCHEDULED_CAMPAIGN: SENDGRID_UNSCHEDULE_A_SCHEDULED_CAMPAIGN_OUTPUT
  UPDATE_ACCOUNT_OFFERINGS: SENDGRID_UPDATE_ACCOUNT_OFFERINGS_OUTPUT
  UPDATE_ADDRESS_WHITELIST_MAIL_SETTINGS: SENDGRID_UPDATE_ADDRESS_WHITELIST_MAIL_SETTINGS_OUTPUT
  UPDATE_AN_ACCOUNT_S_STATE: SENDGRID_UPDATE_AN_ACCOUNT_S_STATE_OUTPUT
  UPDATE_AN_ALERT: SENDGRID_UPDATE_AN_ALERT_OUTPUT
  UPDATE_AN_AUTHENTICATED_DOMAIN: SENDGRID_UPDATE_AN_AUTHENTICATED_DOMAIN_OUTPUT
  UPDATE_AN_IP_POOL_NAME: SENDGRID_UPDATE_AN_IP_POOL_NAME_OUTPUT
  UPDATE_AN_SSO_INTEGRATION: SENDGRID_UPDATE_AN_SSO_INTEGRATION_OUTPUT
  UPDATE_API_KEY_NAME: SENDGRID_UPDATE_API_KEY_NAME_OUTPUT
  UPDATE_API_KEY_NAME_AND_SCOPES: SENDGRID_UPDATE_API_KEY_NAME_AND_SCOPES_OUTPUT
  UPDATE_A_BRANDED_LINK: SENDGRID_UPDATE_A_BRANDED_LINK_OUTPUT
  UPDATE_A_CAMPAIGN: SENDGRID_UPDATE_A_CAMPAIGN_OUTPUT
  UPDATE_A_LIST: SENDGRID_UPDATE_A_LIST_OUTPUT
  UPDATE_A_PARSE_SETTING: SENDGRID_UPDATE_A_PARSE_SETTING_OUTPUT
  UPDATE_A_SCHEDULED_CAMPAIGN: SENDGRID_UPDATE_A_SCHEDULED_CAMPAIGN_OUTPUT
  UPDATE_A_SCHEDULED_SEND: SENDGRID_UPDATE_A_SCHEDULED_SEND_OUTPUT
  UPDATE_A_SEGMENT: SENDGRID_UPDATE_A_SEGMENT_OUTPUT
  UPDATE_A_SENDER: SENDGRID_UPDATE_A_SENDER_OUTPUT
  UPDATE_A_SENDER_IDENTITY: SENDGRID_UPDATE_A_SENDER_IDENTITY_OUTPUT
  UPDATE_A_SINGLE_EVENT_WEBHOOK_BY_ID: SENDGRID_UPDATE_A_SINGLE_EVENT_WEBHOOK_BY_ID_OUTPUT
  UPDATE_A_SUPPRESSION_GROUP: SENDGRID_UPDATE_A_SUPPRESSION_GROUP_OUTPUT
  UPDATE_A_USER_S_PROFILE: SENDGRID_UPDATE_A_USER_S_PROFILE_OUTPUT
  UPDATE_BOUNCE_PURGE_MAIL_SETTINGS: SENDGRID_UPDATE_BOUNCE_PURGE_MAIL_SETTINGS_OUTPUT
  UPDATE_CLICK_TRACKING_SETTINGS: SENDGRID_UPDATE_CLICK_TRACKING_SETTINGS_OUTPUT
  UPDATE_CUSTOM_FIELD_DEFINITION: SENDGRID_UPDATE_CUSTOM_FIELD_DEFINITION_OUTPUT
  UPDATE_DESIGN: SENDGRID_UPDATE_DESIGN_OUTPUT
  UPDATE_DETAILS_FOR_AN_IP_ADDRESS: SENDGRID_UPDATE_DETAILS_FOR_AN_IP_ADDRESS_OUTPUT
  UPDATE_ENFORCED_TLS_SETTINGS: SENDGRID_UPDATE_ENFORCED_TLS_SETTINGS_OUTPUT
  UPDATE_FOOTER_MAIL_SETTINGS: SENDGRID_UPDATE_FOOTER_MAIL_SETTINGS_OUTPUT
  UPDATE_FORWARD_BOUNCE_MAIL_SETTINGS: SENDGRID_UPDATE_FORWARD_BOUNCE_MAIL_SETTINGS_OUTPUT
  UPDATE_FORWARD_SPAM_MAIL_SETTINGS: SENDGRID_UPDATE_FORWARD_SPAM_MAIL_SETTINGS_OUTPUT
  UPDATE_GOOGLE_ANALYTICS_SETTINGS: SENDGRID_UPDATE_GOOGLE_ANALYTICS_SETTINGS_OUTPUT
  UPDATE_INTEGRATION: SENDGRID_UPDATE_INTEGRATION_OUTPUT
  UPDATE_LIST: SENDGRID_UPDATE_LIST_OUTPUT
  UPDATE_OPEN_TRACKING_SETTINGS: SENDGRID_UPDATE_OPEN_TRACKING_SETTINGS_OUTPUT
  UPDATE_SEGMENT: SENDGRID_UPDATE_SEGMENT_OUTPUT
  UPDATE_SINGLE_SEND: SENDGRID_UPDATE_SINGLE_SEND_OUTPUT
  UPDATE_SSO_CERTIFICATE: SENDGRID_UPDATE_SSO_CERTIFICATE_OUTPUT
  UPDATE_SUBSCRIPTION_TRACKING_SETTINGS: SENDGRID_UPDATE_SUBSCRIPTION_TRACKING_SETTINGS_OUTPUT
  UPDATE_TEAMMATE_S_PERMISSIONS: SENDGRID_UPDATE_TEAMMATE_S_PERMISSIONS_OUTPUT
  UPDATE_TEMPLATE_MAIL_SETTINGS: SENDGRID_UPDATE_TEMPLATE_MAIL_SETTINGS_OUTPUT
  UPDATE_THE_CREDITS_FOR_A_SUBUSER: SENDGRID_UPDATE_THE_CREDITS_FOR_A_SUBUSER_OUTPUT
  UPDATE_THE_REMAINING_CREDITS_FOR_A_SUBUSER: SENDGRID_UPDATE_THE_REMAINING_CREDITS_FOR_A_SUBUSER_OUTPUT
  UPDATE_YOUR_ACCOUNT_EMAIL_ADDRESS: SENDGRID_UPDATE_YOUR_ACCOUNT_EMAIL_ADDRESS_OUTPUT
  UPDATE_YOUR_PASSWORD: SENDGRID_UPDATE_YOUR_PASSWORD_OUTPUT
  UPDATE_YOUR_USERNAME: SENDGRID_UPDATE_YOUR_USERNAME_OUTPUT
  VALIDATE_AN_EMAIL: SENDGRID_VALIDATE_AN_EMAIL_OUTPUT
  VALIDATE_A_BATCH_ID: SENDGRID_VALIDATE_A_BATCH_ID_OUTPUT
  VALIDATE_A_BRANDED_LINK: SENDGRID_VALIDATE_A_BRANDED_LINK_OUTPUT
  VALIDATE_A_DOMAIN_AUTHENTICATION: SENDGRID_VALIDATE_A_DOMAIN_AUTHENTICATION_OUTPUT
  VALIDATE_A_REVERSE_DNS_RECORD: SENDGRID_VALIDATE_A_REVERSE_DNS_RECORD_OUTPUT
  VERIFY_SENDER_REQUEST: SENDGRID_VERIFY_SENDER_REQUEST_OUTPUT
  VIEW_A_SENDER_IDENTITY: SENDGRID_VIEW_A_SENDER_IDENTITY_OUTPUT
  VIEW_SCHEDULED_TIME_OF_A_CAMPAIGN: SENDGRID_VIEW_SCHEDULED_TIME_OF_A_CAMPAIGN_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SENDGRID toolkit.
 */
export const SENDGRID = {
  slug: "sendgrid",
  tools: {
    /**
     * **this endpoint allows you to activate a version of one of your templates.**
     */
    ACTIVATE_TEMPLATE_VERSION: "SENDGRID_ACTIVATE_TEMPLATE_VERSION",
    /**
     * Add an ip address to a pool with this endpoint. activation in sendgrid needed first. it takes up to 60 seconds. possible to add to multiple pools. retrieve ips via a specific endpoint.
     */
    ADD_AN_IP_ADDRESS_TO_A_POOL: "SENDGRID_ADD_AN_IP_ADDRESS_TO_A_POOL",
    /**
     * **this endpoint allows you to add an ip address to an authenticated domain.**
     */
    ADD_AN_IP_TO_AN_AUTHENTICATED_DOMAIN: "SENDGRID_ADD_AN_IP_TO_AN_AUTHENTICATED_DOMAIN",
    /**
     * This operation appends a batch of ips to an ip pool. this operation requires all ip assignments to succeed. if any ip assignments fail, this endpoint will return an error.
     */
    ADD_A_BATCH_OF_IPS_TO_AN_IP_POOL: "SENDGRID_ADD_A_BATCH_OF_IPS_TO_AN_IP_POOL",
    /**
     * **this endpoint allows you to add a single recipient to a list.**
     */
    ADD_A_SINGLE_RECIPIENT_TO_A_LIST: "SENDGRID_ADD_A_SINGLE_RECIPIENT_TO_A_LIST",
    /**
     * This operation adds a twilio sendgrid ip address to your account. you can also assign up to 100 subusers to the ip address at creation.
     */
    ADD_A_TWILIO_SEND_GRID_IP_ADDRESS: "SENDGRID_ADD_A_TWILIO_SEND_GRID_IP_ADDRESS",
    /**
     * **this endpoint is for adding a(n) ip address(es) to your account.**
     */
    ADD_IPS: "SENDGRID_ADD_IPS",
    /**
     * This endpoint adds allowed ip addresses to a list, which then assigns each ip an id for future removal; ids can be retrieved via a specific retrieval endpoint.
     */
    ADD_ONE_OR_MORE_IPS_TO_THE_ALLOW_LIST: "SENDGRID_ADD_ONE_OR_MORE_IPS_TO_THE_ALLOW_LIST",
    /**
     * The endpoint can handle 30k contacts or 6mb, reports queuing/errors, needs extra steps to confirm changes and retrieve ids. custom fields must pre-exist and exact identifiers are required for updates; email addresses are auto-lowered in case.
     */
    ADD_OR_UPDATE_A_CONTACT: "SENDGRID_ADD_OR_UPDATE_A_CONTACT",
    /**
     * **this endpoint allows you to add one or more email addresses to the global suppressions group.**
     */
    ADD_RECIPIENT_ADDRESSES_TO_THE_GLOBAL_SUPPRESSION_GROUP: "SENDGRID_ADD_RECIPIENT_ADDRESSES_TO_THE_GLOBAL_SUPPRESSION_GROUP",
    /**
     * **this endpoint allows you to add email addresses to an unsubscribe group.** if you attempt to add suppressions to a group that has been deleted or does not exist, the suppressions will be added to the global suppressions list.
     */
    ADD_SUPPRESSIONS_TO_A_SUPPRESSION_GROUP: "SENDGRID_ADD_SUPPRESSIONS_TO_A_SUPPRESSION_GROUP",
    /**
     * **this endpoint allows you to approve an access attempt.** **note:** only teammate admins may approve another teammate’s access request.
     */
    APPROVE_ACCESS_REQUEST: "SENDGRID_APPROVE_ACCESS_REQUEST",
    /**
     * This operation appends a batch of subusers to a specified ip address. this endpoint requires all subuser assignments to succeed. if a subuser assignment fails, this endpoint will return an error.
     */
    ASSIGN_A_BATCH_OF_SUBUSERS_TO_AN_IP: "SENDGRID_ASSIGN_A_BATCH_OF_SUBUSERS_TO_AN_IP",
    /**
     * Associate authenticated domains with subusers under a parent account to enable email sending using the parent's domain. authentication by the parent is required. multiple domains can be linked using the specified endpoint.
     */
    ASSOCIATE_AN_AUTHENTICATED_DOMAIN_WITH_A_GIVEN_USER: "SENDGRID_ASSOCIATE_AN_AUTHENTICATED_DOMAIN_WITH_A_GIVEN_USER",
    /**
     * Parent accounts can create and validate branded links, then assign them to subusers through the api or twilio sendgrid app, enabling subusers to use the branded links for mail.
     */
    ASSOCIATE_A_BRANDED_LINK_WITH_A_SUBUSER: "SENDGRID_ASSOCIATE_A_BRANDED_LINK_WITH_A_SUBUSER",
    /**
     * Authenticates and logs in a user to twilio sendgrid as a specific admin identity configured for sso by partner. any additional teammates or subusers will need to log in directly via app.sendgrid.com
     */
    AUTHENTICATE_AN_ACCOUNT_WITH_SINGLE_SIGN_ON: "SENDGRID_AUTHENTICATE_AN_ACCOUNT_WITH_SINGLE_SIGN_ON",
    /**
     * The endpoint enables domain authentication for users or subusers, offering two methods—'username' parameter for visibility and modification, or the association workflow for a fixed, non-editable domain assignment.
     */
    AUTHENTICATE_A_DOMAIN: "SENDGRID_AUTHENTICATE_A_DOMAIN",
    /**
     * This endpoint enables linking up to five authenticated domains from a parent account to a subuser, giving them permission to send emails with the parent's domain. domains are prioritized when sending emails.
     */
    BIND_AUTHENTICATED_DOMAINS_TO_USER: "SENDGRID_BIND_AUTHENTICATED_DOMAINS_TO_USER",
    /**
     * This api endpoint enables the deletion of multiple single sends by providing their ids. retrieve ids with a get request to `/marketing/singlensends`. deletions are irreversible.
     */
    BULK_DELETE_SINGLE_SENDS: "SENDGRID_BULK_DELETE_SINGLE_SENDS",
    /**
     * This api endpoint allows users to cancel or pause a scheduled email by providing its `batch id`. to change or remove this status, specific endpoints must be used; exceeding limits or duplicating actions will trigger a `400` error.
     */
    CANCEL_OR_PAUSE_A_SCHEDULED_SEND: "SENDGRID_CANCEL_OR_PAUSE_A_SCHEDULED_SEND",
    /**
     * This api endpoint checks if a sendgrid account has completed domain authentication (`domain verified`) and single sender verification (`sender verified`), returning boolean values for each.
     */
    COMPLETED_STEPS: "SENDGRID_COMPLETED_STEPS",
    /**
     * Creates a new account, with specified offering, under the organization.
     */
    CREATE_AN_ACCOUNT: "SENDGRID_CREATE_AN_ACCOUNT",
    /**
     * Create an ip pool by activating an ip in sendgrid: log in, go to settings > ip addresses, edit selected ip, check to allow sending, and save.
     */
    CREATE_AN_IP_POOL: "SENDGRID_CREATE_AN_IP_POOL",
    /**
     * Creating an ip pool associates specified ips with it. all ips must be successfully assigned, or creation fails with an error. a pool can have up to 100 ips.
     */
    CREATE_AN_IP_POOL_WITH_A_NAME_AND_IP_ASSIGNMENTS: "SENDGRID_CREATE_AN_IP_POOL_WITH_A_NAME_AND_IP_ASSIGNMENTS",
    /**
     * **this endpoint allows you to create an sso certificate.**
     */
    CREATE_AN_SSO_CERTIFICATE: "SENDGRID_CREATE_AN_SSO_CERTIFICATE",
    /**
     * **this endpoint allows you to create an sso integration.**
     */
    CREATE_AN_SSO_INTEGRATION: "SENDGRID_CREATE_AN_SSO_INTEGRATION",
    /**
     * Create an sso teammate with email as username. assign roles using `is admin`, `scopes`, or `persona`. admins have full rights, personas have predefined permissions, and scopes are specific rights. teammates can manage subusers with potential limitations.
     */
    CREATE_AN_SSO_TEAMMATE: "SENDGRID_CREATE_AN_SSO_TEAMMATE",
    /**
     * Use sendgrid app to create an initial api key; then manage others via api. json with 'name' required; 100 key limit. keys have unique ids, default 'full access' unless scopes specified. update scopes with 'update api keys' endpoint.
     */
    CREATE_API_KEYS: "SENDGRID_CREATE_API_KEYS",
    /**
     * Create a new mail batch id to group email sends, allowing pause or cancel actions via the scheduled sends api.
     */
    CREATE_A_BATCH_ID: "SENDGRID_CREATE_A_BATCH_ID",
    /**
     * Create a new branded link by specifying the root domain, which must align with your from email, and an optional unique subdomain. subusers can request using the `on-behalf-of` header.
     */
    CREATE_A_BRANDED_LINK: "SENDGRID_CREATE_A_BRANDED_LINK",
    /**
     * This endpoint enables campaign creation, requiring a subject, sender id, content (html and text suggested), and a list or segment id for sending or scheduling, but not for initial creation.
     */
    CREATE_A_CAMPAIGN: "SENDGRID_CREATE_A_CAMPAIGN",
    /**
     * **this endpoint allows you to create a custom field.** **you can create up to 120 custom fields.**
     */
    CREATE_A_CUSTOM_FIELD: "SENDGRID_CREATE_A_CUSTOM_FIELD",
    /**
     * **this endpoint allows you to create a list for your recipients.**
     */
    CREATE_A_LIST: "SENDGRID_CREATE_A_LIST",
    /**
     * **this endpoint allows you to create a new alert.**
     */
    CREATE_A_NEW_ALERT: "SENDGRID_CREATE_A_NEW_ALERT",
    /**
     * Set up an event webhook by providing a url, choosing events for post requests, and receive a unique id. after creation, you can add names, oauth, and signature verification.
     */
    CREATE_A_NEW_EVENT_WEBHOOK: "SENDGRID_CREATE_A_NEW_EVENT_WEBHOOK",
    /**
     * **this endpoint allows you to create a new suppression group.** to add an email address to the suppression group, [create a suppression](https://docs.sendgrid.com/api-reference/suppressions-suppressions/add-suppressions-to-a-suppression-group).
     */
    CREATE_A_NEW_SUPPRESSION_GROUP: "SENDGRID_CREATE_A_NEW_SUPPRESSION_GROUP",
    /**
     * **this endpoint allows you to create a new version of a template.**
     */
    CREATE_A_NEW_TRANSACTIONAL_TEMPLATE_VERSION: "SENDGRID_CREATE_A_NEW_TRANSACTIONAL_TEMPLATE_VERSION",
    /**
     * Create a new inbound parse setting with a twilio sendgrid authenticated `hostname` and a public `url` to receive parsed messages via http post. complete domain authentication and mx record setup as instructed in sendgrid documentation.
     */
    CREATE_A_PARSE_SETTING: "SENDGRID_CREATE_A_PARSE_SETTING",
    /**
     * New segment endpoint created: supports various operators for date, text, number, and email fields. values must be strings, can specify campaign for email actions. conditions combinable via "and"/"or".
     */
    CREATE_A_SEGMENT: "SENDGRID_CREATE_A_SEGMENT",
    /**
     * This api endpoint is for creating new senders, with a limit of 100. verification is mandatory, either automatic upon domain authentication or via a confirmation email sent to the sender's address.
     */
    CREATE_A_SENDER: "SENDGRID_CREATE_A_SENDER",
    /**
     * **this endpoint allows you to create a new sender identity.** you may create up to 100 unique sender identities.
     */
    CREATE_A_SENDER_IDENTITY: "SENDGRID_CREATE_A_SENDER_IDENTITY",
    /**
     * **this endpoint allows you to create a transactional template.**
     */
    CREATE_A_TRANSACTIONAL_TEMPLATE: "SENDGRID_CREATE_A_TRANSACTIONAL_TEMPLATE",
    /**
     * Create unique case-insensitive custom fields with alphanumeric/underscore names starting with a letter/underscore. save the id for edits/deletes. limited to 500 fields of type date, text, or number. avoid starting with numbers to prevent campaign issues.
     */
    CREATE_CUSTOM_FIELD_DEFINITION: "SENDGRID_CREATE_CUSTOM_FIELD_DEFINITION",
    /**
     * Create new designs via `/designs` by submitting html content. consider email client limitations and see the guide for best practices. convert html to editable modules in the design library, or use preferred tools/migrate existing designs.
     */
    CREATE_DESIGN: "SENDGRID_CREATE_DESIGN",
    /**
     * This endpoint creates an integration for email event forwarding. each integration has a maximum number of allowed integration instances per user. for example, users can create up to 10 segment integrations.
     */
    CREATE_INTEGRATION: "SENDGRID_CREATE_INTEGRATION",
    /**
     * This endpoint enables the creation of a new contacts list, which can automate email sending when new contacts are added. a link to the new list is provided in ` metadata`.
     */
    CREATE_LIST: "SENDGRID_CREATE_LIST",
    /**
     * Segment `name` has to be unique. a user can not create a new segment with an existing segment name.
     */
    CREATE_SEGMENT: "SENDGRID_CREATE_SEGMENT",
    /**
     * The endpoint lets you create a single send draft without needing a template id; it now uses `email config`. a set `send at` doesn't schedule it; it must be done through another endpoint or ui.
     */
    CREATE_SINGLE_SEND: "SENDGRID_CREATE_SINGLE_SEND",
    /**
     * **this endpoint allows you to create a new subuser.**
     */
    CREATE_SUBUSER: "SENDGRID_CREATE_SUBUSER",
    /**
     * This endpoint creates a new sender identity via `post`, sends a verification email to `from email`, and requires email verification. to resend, use `/resend/{id}`. for domain authentication, refer to the domain authentication api.
     */
    CREATE_VERIFIED_SENDER_REQUEST: "SENDGRID_CREATE_VERIFIED_SENDER_REQUEST",
    /**
     * To delete an organization's account by id: it revokes api keys/sso, removes sendgrid resources like dedicated ips, and stops billing immediately. this action is irreversible.
     */
    DELETE_AN_ACCOUNT: "SENDGRID_DELETE_AN_ACCOUNT",
    /**
     * **this endpoint allows you to delete an alert.**
     */
    DELETE_AN_ALERT: "SENDGRID_DELETE_AN_ALERT",
    /**
     * **this endpoint allows you to delete an authenticated domain.**
     */
    DELETE_AN_AUTHENTICATED_DOMAIN: "SENDGRID_DELETE_AN_AUTHENTICATED_DOMAIN",
    /**
     * **this endpoint allows you to delete an ip pool.**
     */
    DELETE_AN_IP_POOL: "SENDGRID_DELETE_AN_IP_POOL",
    /**
     * **this endpoint allows you to delete an sso certificate.** you can retrieve a certificate's id from the response provided by the "get all sso integrations" endpoint.
     */
    DELETE_AN_SSO_CERTIFICATE: "SENDGRID_DELETE_AN_SSO_CERTIFICATE",
    /**
     * **this endpoint allows you to delete an idp configuration by id.** you can retrieve the ids for your configurations from the response provided by the "get all sso integrations" endpoint.
     */
    DELETE_AN_SSO_INTEGRATION: "SENDGRID_DELETE_AN_SSO_INTEGRATION",
    /**
     * **this endpoint allows you to revoke an existing api key using an `api key id`** authentications using a revoked api key will fail after after some small propogation delay. if the api key id does not exist, a `404` status will be returned.
     */
    DELETE_API_KEYS: "SENDGRID_DELETE_API_KEYS",
    /**
     * This operation removes a batch of ips from an ip pool. all ips associated with the pool will be unassigned from the deleted pool. however, this operation does not remove the ips from your account.
     */
    DELETE_A_BATCH_OF_IPS_FROM_AN_IP_POOL: "SENDGRID_DELETE_A_BATCH_OF_IPS_FROM_AN_IP_POOL",
    /**
     * This operation removes a batch of subusers from a specified ip address.
     */
    DELETE_A_BATCH_OF_SUBUSERS_FROM_AN_IP: "SENDGRID_DELETE_A_BATCH_OF_SUBUSERS_FROM_AN_IP",
    /**
     * **this endpoint allows you to remove an email address from your bounce list.**
     */
    DELETE_A_BOUNCE: "SENDGRID_DELETE_A_BOUNCE",
    /**
     * Delete a branded link using this endpoint; successful deletion returns a 204 status. record link details beforehand as they're not provided. subuser deletions are possible with their id in the header.
     */
    DELETE_A_BRANDED_LINK: "SENDGRID_DELETE_A_BRANDED_LINK",
    /**
     * **this endpoint allows you to delete a specific campaign.**
     */
    DELETE_A_CAMPAIGN: "SENDGRID_DELETE_A_CAMPAIGN",
    /**
     * **this endpoint allows you to delete the cancellation/pause of a scheduled send.** scheduled sends cancelled less than 10 minutes before the scheduled time are not guaranteed to be cancelled.
     */
    DELETE_A_CANCELLATION_OR_PAUSE_FROM_A_SCHEDULED_SEND: "SENDGRID_DELETE_A_CANCELLATION_OR_PAUSE_FROM_A_SCHEDULED_SEND",
    /**
     * This endpoint asynchronously deletes an identifier (not the entire contact) from a contact, failing if it's their only one. allowed identifier types are email, phonenumberid, externalid, or anonymousid.
     */
    DELETE_A_CONTACT_IDENTIFIER: "SENDGRID_DELETE_A_CONTACT_IDENTIFIER",
    /**
     * **this endpoint allows you to delete a custom field by id.**
     */
    DELETE_A_CUSTOM_FIELD: "SENDGRID_DELETE_A_CUSTOM_FIELD",
    /**
     * This endpoint removes an email from suppressions, allowing future emails to be sent to it. use with consent or bypass filters for one-off emails.
     */
    DELETE_A_GLOBAL_SUPPRESSION: "SENDGRID_DELETE_A_GLOBAL_SUPPRESSION",
    /**
     * **this endpoint allows you to delete a specific recipient list with the given id.**
     */
    DELETE_A_LIST: "SENDGRID_DELETE_A_LIST",
    /**
     * **this endpoint allows you to delete a specific inbound parse setting by hostname.** you can retrieve all your inbound parse settings and their associated host names with the "retrieve all parse settings" endpoint.
     */
    DELETE_A_PARSE_SETTING: "SENDGRID_DELETE_A_PARSE_SETTING",
    /**
     * **this endpoint allows you to delete a single recipient with the given id from your contact database.** > use this to permanently delete your recipients from all of your contact lists and all segments if required by applicable law.
     */
    DELETE_A_RECIPIENT: "SENDGRID_DELETE_A_RECIPIENT",
    /**
     * This endpoint deletes a reverse dns record, returning a 204 code on success. retrieve record ids using the "retrieve all reverse dns records" endpoint.
     */
    DELETE_A_REVERSE_DNS_RECORD: "SENDGRID_DELETE_A_REVERSE_DNS_RECORD",
    /**
     * **this endpoint allows you to delete a segment from your recipients database.** you also have the option to delete all the contacts from your marketing campaigns recipient database who were in this segment.
     */
    DELETE_A_SEGMENT: "SENDGRID_DELETE_A_SEGMENT",
    /**
     * **this endpoint allows you to delete an existing sender.**
     */
    DELETE_A_SENDER: "SENDGRID_DELETE_A_SENDER",
    /**
     * **this endpoint allows you to delete one of your sender identities.**
     */
    DELETE_A_SENDER_IDENTITY: "SENDGRID_DELETE_A_SENDER_IDENTITY",
    /**
     * Delete a specific event webhook by id with this endpoint. unlike other endpoints which default to the oldest webhook, this requires an id, else it errors to prevent accidental deletions. to disable, not delete, use `enabled` property to `false`.
     */
    DELETE_A_SINGLE_EVENT_WEBHOOK_BY_ID: "SENDGRID_DELETE_A_SINGLE_EVENT_WEBHOOK_BY_ID",
    /**
     * **this endpoint allows you to delete a single recipient from a list.**
     */
    DELETE_A_SINGLE_RECIPIENT_FROM_A_SINGLE_LIST: "SENDGRID_DELETE_A_SINGLE_RECIPIENT_FROM_A_SINGLE_LIST",
    /**
     * **this endpoint allows you to delete a specific email address from your blocks list.**
     */
    DELETE_A_SPECIFIC_BLOCK: "SENDGRID_DELETE_A_SPECIFIC_BLOCK",
    /**
     * **this endpoint allows you to remove a specific email address from the invalid email address list.**
     */
    DELETE_A_SPECIFIC_INVALID_EMAIL: "SENDGRID_DELETE_A_SPECIFIC_INVALID_EMAIL",
    /**
     * This endpoint removes a spam report for an email, lifting suppression and allowing email to be sent to that address. use with caution and recipient consent, or use bypass filters for exceptions.
     */
    DELETE_A_SPECIFIC_SPAM_REPORT: "SENDGRID_DELETE_A_SPECIFIC_SPAM_REPORT",
    /**
     * **this endpoint allows you to delete a subuser.** this is a permanent action. once deleted, a subuser cannot be retrieved.
     */
    DELETE_A_SUBUSER: "SENDGRID_DELETE_A_SUBUSER",
    /**
     * This endpoint removes an email from a suppression group, re-enabling email delivery unless specified otherwise, and should only be used when recipients opt back in.
     */
    DELETE_A_SUPPRESSION_FROM_A_SUPPRESSION_GROUP: "SENDGRID_DELETE_A_SUPPRESSION_FROM_A_SUPPRESSION_GROUP",
    /**
     * This api endpoint deletes email suppression groups. deleted group members get globally suppressed if they unsubscribe. use with caution, only if recipients want to resubscribe. bypass filters available for exceptions.
     */
    DELETE_A_SUPPRESSION_GROUP: "SENDGRID_DELETE_A_SUPPRESSION_GROUP",
    /**
     * **this endpoint allows you to delete a transactional template.**
     */
    DELETE_A_TEMPLATE: "SENDGRID_DELETE_A_TEMPLATE",
    /**
     * **this endpoint allows you to delete a transactional template version.**
     */
    DELETE_A_TRANSACTIONAL_TEMPLATE_VERSION: "SENDGRID_DELETE_A_TRANSACTIONAL_TEMPLATE_VERSION",
    /**
     * This endpoint enables clearing blocked emails either by deleting all with `delete all`=true or by specifying addresses in the `emails` array.
     */
    DELETE_BLOCKS: "SENDGRID_DELETE_BLOCKS",
    /**
     * This api endpoint lets users delete bounced emails: either all by setting `delete all` to true, or specific ones by listing them in `emails`. do not use both options together.
     */
    DELETE_BOUNCES: "SENDGRID_DELETE_BOUNCES",
    /**
     * This endpoint deletes integrations.
     */
    DELETE_BULK_INTEGRATION: "SENDGRID_DELETE_BULK_INTEGRATION",
    /**
     * Use this endpoint to bulk delete contacts with `ids` as a list of ids or `delete all contacts` set to `"true"` for all. deletions are asynchronous. regularly export contacts as a backup.
     */
    DELETE_CONTACTS: "SENDGRID_DELETE_CONTACTS",
    /**
     * **this endpoint deletes a defined custom field.** you can delete only custom fields; reserved fields cannot be deleted.
     */
    DELETE_CUSTOM_FIELD_DEFINITION: "SENDGRID_DELETE_CUSTOM_FIELD_DEFINITION",
    /**
     * **this endpoint allows you to delete a single design**. be sure to check the id of the design you intend to delete before making this request; deleting a design is a permanent action.
     */
    DELETE_DESIGN: "SENDGRID_DELETE_DESIGN",
    /**
     * This endpoint lets you delete email addresses from your invalid list; delete all by setting `delete all` to true, or specify individual addresses to remove.
     */
    DELETE_INVALID_EMAILS: "SENDGRID_DELETE_INVALID_EMAILS",
    /**
     * This operation deletes an ip pool and unassigns all ip addresses associated with the pool. ip addresses associated with the deleted pool will remain in your account.
     */
    DELETE_IP_POOL: "SENDGRID_DELETE_IP_POOL",
    /**
     * **this endpoint allows you to delete a pending teammate invite.**
     */
    DELETE_PENDING_TEAMMATE: "SENDGRID_DELETE_PENDING_TEAMMATE",
    /**
     * **this endpoint allows you to delete a segment by id.**
     */
    DELETE_SEGMENT: "SENDGRID_DELETE_SEGMENT",
    /**
     * This endpoint lets you delete a single send with its id, which you can obtain by a get request to `/marketing/singlensends`. note: deletion is irreversible.
     */
    DELETE_SINGLE_SEND_BY_ID: "SENDGRID_DELETE_SINGLE_SEND_BY_ID",
    /**
     * Cancel a scheduled single send by making a delete request with its id to the endpoint. this action doesn't delete the single send content, only stops the send-out.
     */
    DELETE_SINGLE_SEND_SCHEDULE: "SENDGRID_DELETE_SINGLE_SEND_SCHEDULE",
    /**
     * This endpoint lets users delete spam reports, lifting email suppression for specified addresses. it's advised only when recipients want to resume emails. two deletion methods: 'delete all' or listing emails. use 'bypass filters' for exceptions.
     */
    DELETE_SPAM_REPORTS: "SENDGRID_DELETE_SPAM_REPORTS",
    /**
     * **this endpoint allows you to delete a teammate.** **only the parent user or an admin teammate can delete another teammate.**
     */
    DELETE_TEAMMATE: "SENDGRID_DELETE_TEAMMATE",
    /**
     * Use this endpoint with a sender identity's `id` to remove it from your account. find sender identity ids through the "get all verified senders" endpoint.
     */
    DELETE_VERIFIED_SENDER: "SENDGRID_DELETE_VERIFIED_SENDER",
    /**
     * **this endpoint allows you to deny an attempt to access your account.** **note:** only teammate admins may delete a teammate's access request.
     */
    DENY_ACCESS_REQUEST: "SENDGRID_DENY_ACCESS_REQUEST",
    /**
     * Disassociate an authenticated domain from a given user.
     */
    DISASSOCIATE_AN_AUTHENTICATED_DOMAIN_FROM_A_GIVEN_USER: "SENDGRID_DISASSOCIATE_AN_AUTHENTICATED_DOMAIN_FROM_A_GIVEN_USER",
    /**
     * The endpoint permits parent accounts to remove a branded link from a subuser, with successful disassociations confirmed by a 204 status code response.
     */
    DISASSOCIATE_A_BRANDED_LINK_FROM_A_SUBUSER: "SENDGRID_DISASSOCIATE_A_BRANDED_LINK_FROM_A_SUBUSER",
    /**
     * The endpoint provides a list of domains with dmarc, divided by how they fail (hard or soft). hard failures prevent mail delivery using those domains as sender identities. for more on dmarc, visit sendgrid's guide.
     */
    DOMAIN_WARN_LIST: "SENDGRID_DOMAIN_WARN_LIST",
    /**
     * **this endpoint will return a presigned url that can be used to download the csv that was requested from the "request a csv" endpoint.**
     */
    DOWNLOAD_CSV: "SENDGRID_DOWNLOAD_CSV",
    /**
     * **this endpoint allows you to duplicate a transactional template.**
     */
    DUPLICATE_A_TRANSACTIONAL_TEMPLATE: "SENDGRID_DUPLICATE_A_TRANSACTIONAL_TEMPLATE",
    /**
     * This endpoint duplicates existing designs without requiring data in the request body. if you don't specify a `name`, it's labeled "duplicate:" plus the original's name, but you can set a new name upon creation. each copy gets a unique id.
     */
    DUPLICATE_DESIGN: "SENDGRID_DUPLICATE_DESIGN",
    /**
     * The endpoint lets you duplicate twilio sendgrid pre-built designs without data. if unnamed, "duplicate:" precedes the original name. the copy gets a unique id, modifiable upon creation. use "list sendgrid pre-built designs" for ids.
     */
    DUPLICATE_SEND_GRID_PRE_BUILT_DESIGN: "SENDGRID_DUPLICATE_SEND_GRID_PRE_BUILT_DESIGN",
    /**
     * This endpoint duplicates single sends using an id for easy creation, allowing edits via patch. duplicates are named as "copy of" the original, with a 100-character limit for names.
     */
    DUPLICATE_SINGLE_SEND: "SENDGRID_DUPLICATE_SINGLE_SEND",
    /**
     * This endpoint allows admin or parent users to adjust sso teammate permissions using 'is admin', 'scopes', or 'persona', and to control subuser access, including restrictions.
     */
    EDIT_AN_SSO_TEAMMATE: "SENDGRID_EDIT_AN_SSO_TEAMMATE",
    /**
     * This endpoint lets you change the name of a transactional template. for template modifications, create a new version using the provided link.
     */
    EDIT_A_TRANSACTIONAL_TEMPLATE: "SENDGRID_EDIT_A_TRANSACTIONAL_TEMPLATE",
    /**
     * **this endpoint allows you to edit the content of your template version.**
     */
    EDIT_A_TRANSACTIONAL_TEMPLATE_VERSION: "SENDGRID_EDIT_A_TRANSACTIONAL_TEMPLATE_VERSION",
    /**
     * Update a sender identity by sending a `patch` request with the `id` and json-formatted changes. unchanged fields will stay the same. retrieve ids via `get` to `/verified senders`.
     */
    EDIT_VERIFIED_SENDER: "SENDGRID_EDIT_VERIFIED_SENDER",
    /**
     * Use sendgrid for domain validation and branding by sharing dns records—cname for automated security, or txt/mx otherwise. include `link id` for link branding and `domain id` for domain auth.
     */
    EMAIL_DNS_RECORDS_TO_A_CO_WORKER: "SENDGRID_EMAIL_DNS_RECORDS_TO_A_CO_WORKER",
    /**
     * **this endpoint allows you to enable or disable a subuser.**
     */
    ENABLE_DISABLE_A_SUBUSER: "SENDGRID_ENABLE_DISABLE_A_SUBUSER",
    /**
     * Enable/disable website access for a subuser, while still preserving email send functionality.
     */
    ENABLE_DISABLE_WEBSITE_ACCESS_FOR_A_SUBUSER: "SENDGRID_ENABLE_DISABLE_WEBSITE_ACCESS_FOR_A_SUBUSER",
    /**
     * Sendgrid's delete recipients' email data operation removes personal data of up to 5,000 unique email recipients or a 256kb payload per request. invalid emails return an error, and deletions are account-specific, not affecting subusers.
     */
    ERASE_RECIPIENTS_EMAIL_DATA: "SENDGRID_ERASE_RECIPIENTS_EMAIL_DATA",
    /**
     * Use the endpoint to export contact lists or segments by email, with notifications, or download as csvs using an 'id'. specify the data by id and choose json or csv output with a max file size option.
     */
    EXPORT_CONTACTS: "SENDGRID_EXPORT_CONTACTS",
    /**
     * Use this endpoint with an `id` from "export contacts" to check the status and get `urls` for downloading your csv contact export files. regular exports are recommended for backups.
     */
    EXPORT_CONTACTS_STATUS: "SENDGRID_EXPORT_CONTACTS_STATUS",
    /**
     * This endpoint exports single send stats in .csv format, allowing specification of multiple single sends by separating their ids with commas in the `ids` parameter.
     */
    EXPORT_SINGLE_SEND_STATS: "SENDGRID_EXPORT_SINGLE_SEND_STATS",
    /**
     * Summarize email activity filtering: use url-encoded queries in the format `query={type}="{content}"` to search email activity. example: filter by email with `query=to email%3d"example@example.com"`. reference more at sendgrid query reference.
     */
    FILTER_ALL_MESSAGES: "SENDGRID_FILTER_ALL_MESSAGES",
    /**
     * Get all of the details about the specified message.
     */
    FILTER_MESSAGES_BY_MESSAGE_ID: "SENDGRID_FILTER_MESSAGES_BY_MESSAGE_ID",
    /**
     * Retrieve segments using `parent list ids` as a filter. an empty or unmatched query returns an empty result with a 200 code. filters combine `parent list ids` and the absence or presence of `no parent list id` with segment ids.
     */
    FILTER_SEGMENTS_BY_PARENT_IDS: "SENDGRID_FILTER_SEGMENTS_BY_PARENT_IDS",
    /**
     * Retrieves offering information about the specified account.
     */
    GET_ACCOUNT_OFFERINGS: "SENDGRID_GET_ACCOUNT_OFFERINGS",
    /**
     * Retrieves all accounts under the organization.
     */
    GET_ALL_ACCOUNTS: "SENDGRID_GET_ALL_ACCOUNTS",
    /**
     * Retrieve all your automation stats by default or specify with 'automation ids'. results are paginated with customizable 'page size' (1-50, default 25) and 'page token' for specific pages.
     */
    GET_ALL_AUTOMATION_STATS: "SENDGRID_GET_ALL_AUTOMATION_STATS",
    /**
     * Retrieves offerings available under the organization.
     */
    GET_ALL_AVAILABLE_OFFERINGS: "SENDGRID_GET_ALL_AVAILABLE_OFFERINGS",
    /**
     * **this endpoint allows you to retrieve all the categories associated with your single sends.** this endpoint will return your latest 1,000 categories.
     */
    GET_ALL_CATEGORIES: "SENDGRID_GET_ALL_CATEGORIES",
    /**
     * This endpoint provides an array with details on active or completed export jobs. each object includes `export type`, `status`, and downloadable `urls` for ready exports. useful when export ids are unknown.
     */
    GET_ALL_EXISTING_EXPORTS: "SENDGRID_GET_ALL_EXISTING_EXPORTS",
    /**
     * **this endpoint retrieves all defined custom fields and reserved fields.**
     */
    GET_ALL_FIELD_DEFINITIONS: "SENDGRID_GET_ALL_FIELD_DEFINITIONS",
    /**
     * The function lists your ip pools and samples up to 10 ips from each. for more ips per pool, use "get ips assigned to an ip pool." max of 100 ip pools per user.
     */
    GET_ALL_IP_POOLS_THAT_HAVE_ASSOCIATED_IPS: "SENDGRID_GET_ALL_IP_POOLS_THAT_HAVE_ASSOCIATED_IPS",
    /**
     * **this endpoint returns an array of all of your contact lists.**
     */
    GET_ALL_LISTS: "SENDGRID_GET_ALL_LISTS",
    /**
     * **this endpoint allows you to retrieve a list of all sender identities that have been created for your account.**
     */
    GET_ALL_SENDER_IDENTITIES: "SENDGRID_GET_ALL_SENDER_IDENTITIES",
    /**
     * Retrieve a list of your single sends with brief details, including their ids. for in-depth information on a specific single send, use its id at the `/marketing/singlesends/{id}` endpoint.
     */
    GET_ALL_SINGLE_SENDS: "SENDGRID_GET_ALL_SINGLE_SENDS",
    /**
     * Retrieve single sends stats with options for filtering by ids, pagination, and custom page sizes from 1-50. default response batch is 25.
     */
    GET_ALL_SINGLE_SENDS_STATS: "SENDGRID_GET_ALL_SINGLE_SENDS_STATS",
    /**
     * **this endpoint allows you to retrieve all your idp configurations by configuration id.** the `integration id` expected by this endpoint is the `id` returned in the response by the "get all sso integrations" endpoint.
     */
    GET_ALL_SSO_CERTIFICATES_BY_INTEGRATION: "SENDGRID_GET_ALL_SSO_CERTIFICATES_BY_INTEGRATION",
    /**
     * **this endpoint allows you to retrieve all sso integrations tied to your twilio sendgrid account.** the ids returned by this endpoint can be used by the apis additional endpoints to modify your sso integrations.
     */
    GET_ALL_SSO_INTEGRATIONS: "SENDGRID_GET_ALL_SSO_INTEGRATIONS",
    /**
     * Retrieve all sender identities (verified/unverified) for an account via an endpoint. customize results using `limit`, `lastseenid`, and `id` parameters to define the results scope.
     */
    GET_ALL_VERIFIED_SENDERS: "SENDGRID_GET_ALL_VERIFIED_SENDERS",
    /**
     * Retrieve the state of the specified account.
     */
    GET_AN_ACCOUNT_S_STATE: "SENDGRID_GET_AN_ACCOUNT_S_STATE",
    /**
     * **this endpoint allows you to retrieve an individual sso certificate.**
     */
    GET_AN_SSO_CERTIFICATE: "SENDGRID_GET_AN_SSO_CERTIFICATE",
    /**
     * **this endpoint allows you to retrieve an sso integration by id.** you can retrieve the ids for your configurations from the response provided by the "get all sso integrations" endpoint.
     */
    GET_AN_SSO_INTEGRATION: "SENDGRID_GET_AN_SSO_INTEGRATION",
    /**
     * **this endpoint lets you retrieve click-tracking stats for a single automation**. the stats returned list the urls embedded in your automation and the number of clicks each one received.
     */
    GET_AUTOMATION_CLICK_TRACKING_STATS_BY_ID: "SENDGRID_GET_AUTOMATION_CLICK_TRACKING_STATS_BY_ID",
    /**
     * Retrieve detailed stats for a specific automation by id, with optional date and aggregation filters, or use another endpoint to get stats for multiple automations.
     */
    GET_AUTOMATION_STATS_BY_ID: "SENDGRID_GET_AUTOMATION_STATS_BY_ID",
    /**
     * **this endpoint returns the full details and all fields for the specified contact**. the "get contacts by identifier" endpoint can be used to get the id of a contact.
     */
    GET_A_CONTACT_BY_ID: "SENDGRID_GET_A_CONTACT_BY_ID",
    /**
     * This endpoint fetches detailed information on a list. using `contact sample=true` includes up to 50 recent contacts and the total contact count in the response.
     */
    GET_A_LIST_BY_ID: "SENDGRID_GET_A_LIST_BY_ID",
    /**
     * Fetches your account's ip addresses with details such as pool association and warm-up status. 'is parent assigned' and 'pool' must be exclusive. pagination needs 'limit' and 'before key' or 'after key'.
     */
    GET_A_LIST_OF_ALL_IP_ADDRESSES_ON_YOUR_ACCOUNT: "SENDGRID_GET_A_LIST_OF_ALL_IP_ADDRESSES_ON_YOUR_ACCOUNT",
    /**
     * **this endpoint allows you to get a list of all your senders.**
     */
    GET_A_LIST_OF_ALL_SENDERS: "SENDGRID_GET_A_LIST_OF_ALL_SENDERS",
    /**
     * The api lists subuser ids with a specific ip, retrieves up to 100 per request, and iterates with `after key` for more. use [subusers api](https://docs.sendgrid.com/api-reference/subusers-api/list-all-subusers) for details.
     */
    GET_A_LIST_OF_SUBUSERS_ASSIGNED_TO_AN_IP: "SENDGRID_GET_A_LIST_OF_SUBUSERS_ASSIGNED_TO_AN_IP",
    /**
     * **this endpoint allows you to get the details for a specific sender by `id`.**
     */
    GET_A_SPECIFIC_SENDER: "SENDGRID_GET_A_SPECIFIC_SENDER",
    /**
     * **this endpoint allows you to retrieve your user account details.** your user's account information includes the user's account type and reputation.
     */
    GET_A_USER_S_ACCOUNT_INFORMATION: "SENDGRID_GET_A_USER_S_ACCOUNT_INFORMATION",
    /**
     * **this endpoint allows you to retrieve your current profile details.**
     */
    GET_A_USER_S_PROFILE: "SENDGRID_GET_A_USER_S_PROFILE",
    /**
     * This endpoint fetches multiple contacts using their ids, allowing up to 100 ids per request for efficiency over single `get` requests. regular export of contacts is advised for backup.
     */
    GET_BATCHED_CONTACTS_BY_IDS: "SENDGRID_GET_BATCHED_CONTACTS_BY_IDS",
    /**
     * This endpoint will return the number of bounces for the classification specified in descending order for each day. you can retrieve the bounce classification totals in csv format by specifying `"text/csv"` in the accept header.
     */
    GET_BOUNCE_CLASS_STATS: "SENDGRID_GET_BOUNCE_CLASS_STATS",
    /**
     * Endpoint retrieves up to 100 contacts by email, ignoring case/space; simpler than sgql's search. success returns `200`, `404` for no match, `400` for invalid emails. regular contact backups recommended.
     */
    GET_CONTACTS_BY_EMAILS: "SENDGRID_GET_CONTACTS_BY_EMAILS",
    /**
     * Use the endpoint to fetch up to 100 contacts by identifiers (email, phone number, etc.). successful queries return 200, no results return 404, and errors return 400. regular backups are advised.
     */
    GET_CONTACTS_BY_IDENTIFIERS: "SENDGRID_GET_CONTACTS_BY_IDENTIFIERS",
    /**
     * Access a specific design's details in your design library with a get request to `/designs/{id}`. this endpoint is useful for obtaining info to update via patch request.
     */
    GET_DESIGN: "SENDGRID_GET_DESIGN",
    /**
     * The operation provides details for an ip address, such as its parent account status, warm-up settings, associated pools, add/modify dates, lease status, and enablement, excluding subuser info, which requires a different endpoint.
     */
    GET_DETAILS_FOR_AN_IP_ADDRESS: "SENDGRID_GET_DETAILS_FOR_AN_IP_ADDRESS",
    /**
     * This operation retrieves details of an ip pool, such as name, id, some sample ips (up to 10), and the total ip count. for more ips, use "get ips assigned to an ip pool."
     */
    GET_DETAILS_FOR_AN_IP_POOL: "SENDGRID_GET_DETAILS_FOR_AN_IP_POOL",
    /**
     * Retrieve your sendgrid engagement quality (seq) scores via api for a chosen date range. get a `200` response for available scores, or a `202` if scores haven't been calculated yet. scores range from 1 to 5, higher indicating better engagement.
     */
    GET_ENGAGEMENT_QUALITY_SCORES: "SENDGRID_GET_ENGAGEMENT_QUALITY_SCORES",
    /**
     * **this endpoint allows you to retrieve a single suppression group.**
     */
    GET_INFORMATION_ON_A_SINGLE_SUPPRESSION_GROUP: "SENDGRID_GET_INFORMATION_ON_A_SINGLE_SUPPRESSION_GROUP",
    /**
     * This endpoint returns the data for a specific integration.
     */
    GET_INTEGRATION: "SENDGRID_GET_INTEGRATION",
    /**
     * This operation returns the ip addresses that are assigned to the specified ip pool.
     */
    GET_IPS_ASSIGNED_TO_AN_IP_POOL: "SENDGRID_GET_IPS_ASSIGNED_TO_AN_IP_POOL",
    /**
     * **this endpoint returns the number of contacts on a specific list.**
     */
    GET_LIST_CONTACT_COUNT: "SENDGRID_GET_LIST_CONTACT_COUNT",
    /**
     * The api endpoint retrieves segments, using `parent list ids` to filter results. if no matches are found, a 200 code with an empty array is returned. filters include list ids, absence of parent ids, or specific segment ids.
     */
    GET_LIST_OF_SEGMENTS: "SENDGRID_GET_LIST_OF_SEGMENTS",
    /**
     * The endpoint retrieves settings for tracking email opens using an invisible image. it logs open events when images load, with data available in sendgrid's statistics portal and event webhook.
     */
    GET_OPEN_TRACKING_SETTINGS: "SENDGRID_GET_OPEN_TRACKING_SETTINGS",
    /**
     * **this endpoint allows you to check the upload status of a marketing campaigns recipient.**
     */
    GET_RECIPIENT_UPLOAD_STATUS: "SENDGRID_GET_RECIPIENT_UPLOAD_STATUS",
    /**
     * **this endpoint gets amount of ip addresses that can still be created during a given period and the price of those ips.**
     */
    GET_REMAINING_IPS_COUNT: "SENDGRID_GET_REMAINING_IPS_COUNT",
    /**
     * The endpoint returns the latest 50 contacts, sorted by email, with the total count included. pagination is deprecated; regular export of contacts is advised.
     */
    GET_SAMPLE_CONTACTS: "SENDGRID_GET_SAMPLE_CONTACTS",
    /**
     * Get marketing campaigns segment by id
     */
    GET_SEGMENT_BY_ID: "SENDGRID_GET_SEGMENT_BY_ID",
    /**
     * The endpoint `/designs/pre-builts/{id}` is used to fetch details about a particular pre-built design for duplication and modification.
     */
    GET_SEND_GRID_PRE_BUILT_DESIGN: "SENDGRID_GET_SEND_GRID_PRE_BUILT_DESIGN",
    /**
     * Retrieve a webhook's public key using its id via this endpoint; if no id is given, the oldest key is returned. useful for signature verification and toggling signature settings. multiple ids can be found using the "get all event webhooks" endpoint.
     */
    GET_SIGNED_EVENT_WEBHOOK_S_PUBLIC_KEY: "SENDGRID_GET_SIGNED_EVENT_WEBHOOK_S_PUBLIC_KEY",
    /**
     * Search for single sends by specifying `name`, `status`, and `categories` in the request body. example provided for drafts or scheduled items related to "shoes".
     */
    GET_SINGLE_SENDS_SEARCH: "SENDGRID_GET_SINGLE_SENDS_SEARCH",
    /**
     * **this endpoint allows you to retrieve details about one single send using a single send id.** you can retrieve all of your single sends by making a get request to the `/marketing/singlesends` endpoint.
     */
    GET_SINGLE_SEND_BY_ID: "SENDGRID_GET_SINGLE_SEND_BY_ID",
    /**
     * **this endpoint lets you retrieve click-tracking stats for one single send**. the stats returned list the urls embedded in the specified single send and the number of clicks each one received.
     */
    GET_SINGLE_SEND_CLICK_TRACKING_STATS_BY_ID: "SENDGRID_GET_SINGLE_SEND_CLICK_TRACKING_STATS_BY_ID",
    /**
     * Retrieve individual single send stats using its id. for multiple ids, use "get all single sends stats". filter results by date or refine with `group by` and `aggregated by` parameters.
     */
    GET_SINGLE_SEND_STATS_BY_ID: "SENDGRID_GET_SINGLE_SEND_STATS_BY_ID",
    /**
     * Retrieve seq scores for sendgrid subusers/accounts on a specific date; expect ‘200’ with scores or ‘202’ if unavailable yet, possibly accessible later. scores range from 1-5, with higher numbers indicating better engagement.
     */
    GET_SUBUSERS_ENGAGEMENT_QUALITY_SCORES: "SENDGRID_GET_SUBUSERS_ENGAGEMENT_QUALITY_SCORES",
    /**
     * Retrieve monthly email stats for subusers with `sort by metric`, excluding sorts by `bounce drops`, `deferred`, `invalid emails`, `processed`, `spam report drops`, `spam reports`, `unsubscribe drops`.
     */
    GET_SUBUSER_MONTHLY_STATS: "SENDGRID_GET_SUBUSER_MONTHLY_STATS",
    /**
     * This endpoint provides a list of user-created suppression groups and can return info for multiple groups when their ids are added to the request with `?id=123456`.
     */
    GET_SUPPRESSION_GROUPS: "SENDGRID_GET_SUPPRESSION_GROUPS",
    /**
     * Retrieve subusers accessible to a specified teammate, with available scopes. admin teammates get access to all subusers.
     */
    GET_TEAMMATE_SUBUSER_ACCESS: "SENDGRID_GET_TEAMMATE_SUBUSER_ACCESS",
    /**
     * **this endpoint allows you to retrieve a credits overview for a subuser.**
     */
    GET_THE_CREDITS_FOR_A_SUBUSER: "SENDGRID_GET_THE_CREDITS_FOR_A_SUBUSER",
    /**
     * This endpoint fetches the default domain authentication, used for sending all mail unless overridden by a 'from' address match. it provides domain details if a default is set; otherwise, it gives general authentication info.
     */
    GET_THE_DEFAULT_AUTHENTICATION: "SENDGRID_GET_THE_DEFAULT_AUTHENTICATION",
    /**
     * Retrieve an event webhook by id to get settings, event types, and url details. without id, the oldest is returned. signatures and oauth webhooks have extra properties. use another endpoint for multiple webhook ids.
     */
    GET_THE_SETTINGS_FOR_A_SINGLE_EVENT_WEBHOOK: "SENDGRID_GET_THE_SETTINGS_FOR_A_SINGLE_EVENT_WEBHOOK",
    /**
     * **this endpoint returns the total number of contacts you have stored.** twilio sendgrid recommends exporting your contacts regularly as a backup to avoid issues or lost data.
     */
    GET_TOTAL_CONTACT_COUNT: "SENDGRID_GET_TOTAL_CONTACT_COUNT",
    /**
     * Retrieve a list of scopes for which this user has access
     */
    GET_USER_SCOPES: "SENDGRID_GET_USER_SCOPES",
    /**
     * The endpoint permits async csv uploads for up to 1m contacts or 5gb with specified identifiers and file type, supports gzip, field mappings, uses job id for tracking, and recommends regular backups.
     */
    IMPORT_CONTACTS: "SENDGRID_IMPORT_CONTACTS",
    /**
     * Check the status of contact import jobs using `job id` via this endpoint. it shows if the job is pending, completed, errored, or failed. for errors, download the `errors url` file. regular contact exports are advised for backup.
     */
    IMPORT_CONTACTS_STATUS: "SENDGRID_IMPORT_CONTACTS_STATUS",
    /**
     * Invite teammates to your account through email with this endpoint, assigning initial permissions via the `scopes` array. invites expire after 7 days but can be resent.
     */
    INVITE_TEAMMATE: "SENDGRID_INVITE_TEAMMATE",
    /**
     * Retrieve authenticated domain lists in pages using the `limit` parameter for page size and `offset` to start from specific list positions. multiple requests handle large lists.
     */
    LIST_ALL_AUTHENTICATED_DOMAINS: "SENDGRID_LIST_ALL_AUTHENTICATED_DOMAINS",
    /**
     * Retrieve a paginated list of subusers with filtering options. use `username` to filter, `limit` to set page size, and `offset` to navigate through the list.
     */
    LIST_ALL_SUBUSERS: "SENDGRID_LIST_ALL_SUBUSERS",
    /**
     * Retrieve user's api key names and ids with this endpoint; keys themself cannot be retrieved for security. lost keys require recreation. use 'api key id' to manage keys.
     */
    LIST_API_KEYS: "SENDGRID_LIST_API_KEYS",
    /**
     * **this endpoint returns a list of all of a user's bulk email validation jobs.**
     */
    LIST_BULK_EMAIL_VALIDATION_JOBS: "SENDGRID_LIST_BULK_EMAIL_VALIDATION_JOBS",
    /**
     * The `/designs` endpoint fetches a list of user's stored designs, restricted to 100 per request by default but adjustable with `page size`. pre-built designs are at `/designs/pre-builts`.
     */
    LIST_DESIGNS: "SENDGRID_LIST_DESIGNS",
    /**
     * This endpoint returns all the integrations for the user making this call.
     */
    LIST_INTEGRATION: "SENDGRID_LIST_INTEGRATION",
    /**
     * The `designs/pre-builts` endpoint fetches a list of twilio sendgrid's ready-made designs, not user-specific ones, with 100 results per request by default, adjustable with `page size`. useful for duplicating and editing design ids.
     */
    LIST_SEND_GRID_PRE_BUILT_DESIGNS: "SENDGRID_LIST_SEND_GRID_PRE_BUILT_DESIGNS",
    /**
     * Parent accounts can link validated domains to subusers through an endpoint, allowing subusers to email from those domains. the api supports multiple domain associations and listings.
     */
    LIST_USER_AUTH_DOMAINS: "SENDGRID_LIST_USER_AUTH_DOMAINS",
    /**
     * Manually refresh a segment by segment id.
     */
    MANUALLY_REFRESH_A_SEGMENT: "SENDGRID_MANUALLY_REFRESH_A_SEGMENT",
    /**
     * Get a presigned url and headers to upload an email list for verification. ensure the 'content-type' matches 'file type' in the 'put' request. visit the bulk validation overview page for format and sample request.
     */
    PRESIGNED_URL_HEADERS_FOR_BULK_EMAIL_VALIDATION: "SENDGRID_PRESIGNED_URL_HEADERS_FOR_BULK_EMAIL_VALIDATION",
    /**
     * **this endpoint allows you to remove an ip address from an ip pool.**
     */
    REMOVE_AN_IP_ADDRESS_FROM_A_POOL: "SENDGRID_REMOVE_AN_IP_ADDRESS_FROM_A_POOL",
    /**
     * **this endpoint allows you to remove an ip address from that domain's authentication.**
     */
    REMOVE_AN_IP_FROM_AN_AUTHENTICATED_DOMAIN: "SENDGRID_REMOVE_AN_IP_FROM_AN_AUTHENTICATED_DOMAIN",
    /**
     * This endpoint lets you delete an allowed ip address using its id, obtainable via the "retrieve allowed ips" endpoint.
     */
    REMOVE_A_SPECIFIC_IP_FROM_THE_ALLOWED_LIST: "SENDGRID_REMOVE_A_SPECIFIC_IP_FROM_THE_ALLOWED_LIST",
    /**
     * **this endpoint allows you to remove contacts from a given list.** the contacts will not be deleted. only their list membership will be changed.
     */
    REMOVE_CONTACTS_FROM_A_LIST: "SENDGRID_REMOVE_CONTACTS_FROM_A_LIST",
    /**
     * **this endpoint allows you to deletes a specific list.** optionally, you can also delete contacts associated to the list. the query parameter, `delete contacts=true`, will delete the list and start an asynchronous job to delete associated contacts.
     */
    REMOVE_LIST_AND_OPTIONAL_CONTACTS: "SENDGRID_REMOVE_LIST_AND_OPTIONAL_CONTACTS",
    /**
     * This endpoint lets you remove ips from your allowed list by sending an array of their ids, obtained from another endpoint. carefully select ips to avoid blocking your account access. if blocked, submit a support ticket.
     */
    REMOVE_ONE_OR_MORE_IPS_FROM_THE_ALLOW_LIST: "SENDGRID_REMOVE_ONE_OR_MORE_IPS_FROM_THE_ALLOW_LIST",
    /**
     * This endpoint permits the deletion of a segment using `segment id`, but associated contacts remain in the overall list and any other segments they're part of.
     */
    REMOVE_SEGMENT_WITHOUT_AFFECTING_CONTACTS: "SENDGRID_REMOVE_SEGMENT_WITHOUT_AFFECTING_CONTACTS",
    /**
     * **this endpoint allows you to update the name of an ip pool.**
     */
    RENAME_AN_IP_POOL: "SENDGRID_RENAME_AN_IP_POOL",
    /**
     * Initiating a backend process creates a csv file of up to 1 million events from the last 30 days, emailed to the user with a 3-day expiry link. limited to one request per 12 hours, it's similar to the get single message but for csv downloads.
     */
    REQUEST_CSV: "SENDGRID_REQUEST_CSV",
    /**
     * **this endpoint allows you to resend the verification request for a specific sender.**
     */
    RESEND_A_SENDER_VERIFICATION: "SENDGRID_RESEND_A_SENDER_VERIFICATION",
    /**
     * **this endpoint allows you to resend a sender identity verification email.**
     */
    RESEND_SENDER_IDENTITY_VERIFICATION: "SENDGRID_RESEND_SENDER_IDENTITY_VERIFICATION",
    /**
     * **this endpoint allows you to resend a teammate invitation.** teammate invitations will expire after 7 days. resending an invitation will reset the expiration date.
     */
    RESEND_TEAMMATE_INVITE: "SENDGRID_RESEND_TEAMMATE_INVITE",
    /**
     * This endpoint resends a verification email to a sender identity's 'from address' by using the 'id' of the sender. useful if the original email is lost or needs to be resent. retrieve ids via "get all verified senders" endpoint.
     */
    RESEND_VERIFIED_SENDER_REQUEST: "SENDGRID_RESEND_VERIFIED_SENDER_REQUEST",
    /**
     * Sendgrid's inbound parse webhook parses incoming emails, up to 30mb, and posts to a specified url, with available integrations listed in their library index.
     */
    RETRIEVES_INBOUND_PARSE_WEBHOOK_STATISTICS: "SENDGRID_RETRIEVES_INBOUND_PARSE_WEBHOOK_STATISTICS",
    /**
     * Retrieve a list of recent access requests using pagination with `limit` for page size and `offset` to control the start position for additional items.
     */
    RETRIEVE_ACCESS_REQUESTS: "SENDGRID_RETRIEVE_ACCESS_REQUESTS",
    /**
     * This endpoint lets you access settings for whitelisting specific emails or domains to prevent email suppression due to bounces, blocks, or unsubscribes.
     */
    RETRIEVE_ADDRESS_WHITELIST_MAIL_SETTINGS: "SENDGRID_RETRIEVE_ADDRESS_WHITELIST_MAIL_SETTINGS",
    /**
     * **this endpoint allows you to retrieve all of your alerts.**
     */
    RETRIEVE_ALL_ALERTS: "SENDGRID_RETRIEVE_ALL_ALERTS",
    /**
     * This api endpoint retrieves assigned ip addresses used to send emails for various domains, where the ip's reputation is influenced by the collective performance of all sending users.
     */
    RETRIEVE_ALL_ASSIGNED_IPS: "SENDGRID_RETRIEVE_ALL_ASSIGNED_IPS",
    /**
     * Retrieve a paginated list of blocked emails using this endpoint, with adjustable page sizes via the 'limit' parameter and starting points with 'offset' for multiple requests.
     */
    RETRIEVE_ALL_BLOCKS: "SENDGRID_RETRIEVE_ALL_BLOCKS",
    /**
     * This endpoint retrieves a paginated list of all your bounces, allowing customization of page size with `limit` and starting position with `offset` for multiple requests.
     */
    RETRIEVE_ALL_BOUNCES: "SENDGRID_RETRIEVE_ALL_BOUNCES",
    /**
     * **this endpoint allows you to retrieve all branded links**. you can submit this request as one of your subusers if you include their id in the `on-behalf-of` header in the request.
     */
    RETRIEVE_ALL_BRANDED_LINKS: "SENDGRID_RETRIEVE_ALL_BRANDED_LINKS",
    /**
     * Retrieve a paginated list of campaigns in reverse creation order with the api endpoint. if none exist, get an empty array. adjust page size with `limit`, and fetch more with `offset`.
     */
    RETRIEVE_ALL_CAMPAIGNS: "SENDGRID_RETRIEVE_ALL_CAMPAIGNS",
    /**
     * This endpoint provides a paginated list of user categories, with adjustable page size using the `limit` and pagination control using `offset`. multiple requests are needed for large lists.
     */
    RETRIEVE_ALL_CATEGORIES: "SENDGRID_RETRIEVE_ALL_CATEGORIES",
    /**
     * **this endpoint allows you to retrieve all custom fields.**
     */
    RETRIEVE_ALL_CUSTOM_FIELDS: "SENDGRID_RETRIEVE_ALL_CUSTOM_FIELDS",
    /**
     * Retrieve paginated lists of globally suppressed emails using `limit` for page size and `offset` to start from a specific list position. multiple requests may be needed for large lists.
     */
    RETRIEVE_ALL_GLOBAL_SUPPRESSIONS: "SENDGRID_RETRIEVE_ALL_GLOBAL_SUPPRESSIONS",
    /**
     * Retrieve paginated lists of invalid emails with 'limit' for page size and 'offset' to start from a specific position for lists exceeding the limit.
     */
    RETRIEVE_ALL_INVALID_EMAILS: "SENDGRID_RETRIEVE_ALL_INVALID_EMAILS",
    /**
     * **this endpoint allows you to retrieve all of your ip addresses that are currently warming up.**
     */
    RETRIEVE_ALL_IPS_CURRENTLY_IN_WARMUP: "SENDGRID_RETRIEVE_ALL_IPS_CURRENTLY_IN_WARMUP",
    /**
     * Retrieve a paginated list of assigned/unassigned ips with warmup status, pools, subusers, and dns info. ip reputation is based on email traffic. use `limit` and `offset` parameters to control pagination.
     */
    RETRIEVE_ALL_IP_ADDRESSES: "SENDGRID_RETRIEVE_ALL_IP_ADDRESSES",
    /**
     * **this endpoint allows you to get all of your ip pools.**
     */
    RETRIEVE_ALL_IP_POOLS: "SENDGRID_RETRIEVE_ALL_IP_POOLS",
    /**
     * This endpoint checks which ip pools contain a specific ip, which may be shared across multiple ip pools and affect the ip's reputation based on collective usage for email sending.
     */
    RETRIEVE_ALL_IP_POOLS_AN_IP_ADDRESS_BELONGS_TO: "SENDGRID_RETRIEVE_ALL_IP_POOLS_AN_IP_ADDRESS_BELONGS_TO",
    /**
     * **this endpoint allows you to retrieve all of your recipient lists. if you don't have any lists, an empty array will be returned.**
     */
    RETRIEVE_ALL_LISTS: "SENDGRID_RETRIEVE_ALL_LISTS",
    /**
     * Retrieve a paginated list of mail settings with their `enabled` status and descriptions. control page size with `limit` and list position with `offset` for multiple requests.
     */
    RETRIEVE_ALL_MAIL_SETTINGS: "SENDGRID_RETRIEVE_ALL_MAIL_SETTINGS",
    /**
     * The endpoint fetches all event webhooks as objects in an array, showing each webhook's configuration and id, used to update, delete, or manage signature verification and oauth settings.
     */
    RETRIEVE_ALL_OF_YOUR_EVENT_WEBHOOKS: "SENDGRID_RETRIEVE_ALL_OF_YOUR_EVENT_WEBHOOKS",
    /**
     * **this endpoint allows you to retrieve all of your current inbound parse settings.**
     */
    RETRIEVE_ALL_PARSE_SETTINGS: "SENDGRID_RETRIEVE_ALL_PARSE_SETTINGS",
    /**
     * **this endpoint allows you to retrieve a list of all pending teammate invitations.** each teammate invitation is valid for 7 days. users may resend the invitation to refresh the expiration date.
     */
    RETRIEVE_ALL_PENDING_TEAMMATES: "SENDGRID_RETRIEVE_ALL_PENDING_TEAMMATES",
    /**
     * **this endpoint allows you to retrieve a list of all of the ip addresses that recently attempted to access your account either through the user interface or the api.**
     */
    RETRIEVE_ALL_RECENT_ACCESS_ATTEMPTS: "SENDGRID_RETRIEVE_ALL_RECENT_ACCESS_ATTEMPTS",
    /**
     * **this endpoint allows you to retrieve all recipients on the list with the given id.**
     */
    RETRIEVE_ALL_RECIPIENTS_ON_A_LIST: "SENDGRID_RETRIEVE_ALL_RECIPIENTS_ON_A_LIST",
    /**
     * The endpoint provides a paginated list of reverse dns records, with optional ip prefix search and adjustable page size using 'limit' and 'offset' parameters.
     */
    RETRIEVE_ALL_REVERSE_DNS_RECORDS: "SENDGRID_RETRIEVE_ALL_REVERSE_DNS_RECORDS",
    /**
     * The endpoint provides details of cancelled or paused scheduled sends but only if they have a `batch id`. sends scheduled without a `batch id` via `/mail/send` won't be listed and can't be paused or cancelled later through this endpoint.
     */
    RETRIEVE_ALL_SCHEDULED_SENDS: "SENDGRID_RETRIEVE_ALL_SCHEDULED_SENDS",
    /**
     * **this endpoint allows you to retrieve all of your segments.**
     */
    RETRIEVE_ALL_SEGMENTS: "SENDGRID_RETRIEVE_ALL_SEGMENTS",
    /**
     * Retrieve spam reports in pages using `limit` for page size and `offset` to continue from a specific list position. multiple requests handle larger lists.
     */
    RETRIEVE_ALL_SPAM_REPORTS: "SENDGRID_RETRIEVE_ALL_SPAM_REPORTS",
    /**
     * **this endpoint allows you to retrieve a list of all suppressions.**
     */
    RETRIEVE_ALL_SUPPRESSIONS: "SENDGRID_RETRIEVE_ALL_SUPPRESSIONS",
    /**
     * **this endpoint allows you to retrieve all suppressed email addresses belonging to the given group.**
     */
    RETRIEVE_ALL_SUPPRESSIONS_FOR_A_SUPPRESSION_GROUP: "SENDGRID_RETRIEVE_ALL_SUPPRESSIONS_FOR_A_SUPPRESSION_GROUP",
    /**
     * Retrieve all suppression groups for an email address
     */
    RETRIEVE_ALL_SUPPRESSION_GROUPS_FOR_AN_EMAIL_ADDRESS: "SENDGRID_RETRIEVE_ALL_SUPPRESSION_GROUPS_FOR_AN_EMAIL_ADDRESS",
    /**
     * Retrieve a paginated list of teammates with the `limit` parameter to set page size and `offset` to specify the starting point for additional items. make multiple requests if needed.
     */
    RETRIEVE_ALL_TEAMMATES: "SENDGRID_RETRIEVE_ALL_TEAMMATES",
    /**
     * **this endpoint allows you to get all of the ip addresses that are in a specific ip pool.**
     */
    RETRIEVE_ALL_THE_IPS_IN_A_SPECIFIED_POOL: "SENDGRID_RETRIEVE_ALL_THE_IPS_IN_A_SPECIFIED_POOL",
    /**
     * **this endpoint allows you to retrieve a specific authenticated domain.**
     */
    RETRIEVE_AN_AUTHENTICATED_DOMAIN: "SENDGRID_RETRIEVE_AN_AUTHENTICATED_DOMAIN",
    /**
     * Retrieve an api key's details with its id via this endpoint. nonexistent keys yield a 404 error. key scopes can be modified later. refer to the documentation for scope details.
     */
    RETRIEVE_AN_EXISTING_API_KEY: "SENDGRID_RETRIEVE_AN_EXISTING_API_KEY",
    /**
     * **this endpoint allows you to retrieve a specific bounce by email address.**
     */
    RETRIEVE_A_BOUNCE: "SENDGRID_RETRIEVE_A_BOUNCE",
    /**
     * **this endpoint allows you to retrieve a specific branded link by providing its id.** you can submit this request as one of your subusers if you include their id in the `on-behalf-of` header in the request.
     */
    RETRIEVE_A_BRANDED_LINK: "SENDGRID_RETRIEVE_A_BRANDED_LINK",
    /**
     * **this endpoint allows you to retrieve the total number of marketing campaigns recipients.**
     */
    RETRIEVE_A_COUNT_OF_RECIPIENTS: "SENDGRID_RETRIEVE_A_COUNT_OF_RECIPIENTS",
    /**
     * **this endpoint allows you to retrieve a custom field by id.**
     */
    RETRIEVE_A_CUSTOM_FIELD: "SENDGRID_RETRIEVE_A_CUSTOM_FIELD",
    /**
     * This endpoint retrieves global email suppressions and confirms if an email is suppressed. if suppressed, the email is returned in the response; if not, an empty json object is returned.
     */
    RETRIEVE_A_GLOBAL_SUPPRESSION: "SENDGRID_RETRIEVE_A_GLOBAL_SUPPRESSION",
    /**
     * This endpoint provides a list of authorized ip addresses for your account, each with creation, update dates, and a unique id for potential removal.
     */
    RETRIEVE_A_LIST_OF_CURRENTLY_ALLOWED_IPS: "SENDGRID_RETRIEVE_A_LIST_OF_CURRENTLY_ALLOWED_IPS",
    /**
     * **this endpoint allows you to retrieve a reverse dns record.** you can retrieve the ids associated with all your reverse dns records using the "retrieve all reverse dns records" endpoint.
     */
    RETRIEVE_A_REVERSE_DNS_RECORD: "SENDGRID_RETRIEVE_A_REVERSE_DNS_RECORD",
    /**
     * **this endpoint allows you to retrieve a single segment with the given id.**
     */
    RETRIEVE_A_SEGMENT: "SENDGRID_RETRIEVE_A_SEGMENT",
    /**
     * **this endpoint allows you to retrieve a specific campaign.**
     */
    RETRIEVE_A_SINGLE_CAMPAIGN: "SENDGRID_RETRIEVE_A_SINGLE_CAMPAIGN",
    /**
     * **this endpoint allows you to retrieve a single recipient list.**
     */
    RETRIEVE_A_SINGLE_LIST: "SENDGRID_RETRIEVE_A_SINGLE_LIST",
    /**
     * **this endpoint allows you to retrieve a single recipient by id from your contact database.**
     */
    RETRIEVE_A_SINGLE_RECIPIENT: "SENDGRID_RETRIEVE_A_SINGLE_RECIPIENT",
    /**
     * **this endpoint allows you to retrieve a single transactional template.**
     */
    RETRIEVE_A_SINGLE_TRANSACTIONAL_TEMPLATE: "SENDGRID_RETRIEVE_A_SINGLE_TRANSACTIONAL_TEMPLATE",
    /**
     * **this endpoint allows you to retrieve a specific alert.**
     */
    RETRIEVE_A_SPECIFIC_ALERT: "SENDGRID_RETRIEVE_A_SPECIFIC_ALERT",
    /**
     * This endpoint retrieves an allowed ip for your account using its id, with ids obtainable from the endpoint listing currently allowed ips.
     */
    RETRIEVE_A_SPECIFIC_ALLOWED_IP: "SENDGRID_RETRIEVE_A_SPECIFIC_ALLOWED_IP",
    /**
     * **this endpoint allows you to retrieve a specific email address from your blocks list.**
     */
    RETRIEVE_A_SPECIFIC_BLOCK: "SENDGRID_RETRIEVE_A_SPECIFIC_BLOCK",
    /**
     * **this endpoint allows you to retrieve a specific invalid email addresses.**
     */
    RETRIEVE_A_SPECIFIC_INVALID_EMAIL: "SENDGRID_RETRIEVE_A_SPECIFIC_INVALID_EMAIL",
    /**
     * **this endpoint allows you to retrieve a specific inbound parse setting by hostname.** you can retrieve all your inbound parse settings and their associated host names with the "retrieve all parse settings" endpoint.
     */
    RETRIEVE_A_SPECIFIC_PARSE_SETTING: "SENDGRID_RETRIEVE_A_SPECIFIC_PARSE_SETTING",
    /**
     * **this endpoint allows you to retrieve a specific spam report by email address.**
     */
    RETRIEVE_A_SPECIFIC_SPAM_REPORT: "SENDGRID_RETRIEVE_A_SPECIFIC_SPAM_REPORT",
    /**
     * **this endpoint allows you to retrieve a specific version of a template.**
     */
    RETRIEVE_A_SPECIFIC_TRANSACTIONAL_TEMPLATE_VERSION: "SENDGRID_RETRIEVE_A_SPECIFIC_TRANSACTIONAL_TEMPLATE_VERSION",
    /**
     * Retrieve a subuser's branded link, created and validated by the parent account, available through the api or twilio sendgrid's subuser management page.
     */
    RETRIEVE_A_SUBUSER_S_BRANDED_LINK: "SENDGRID_RETRIEVE_A_SUBUSER_S_BRANDED_LINK",
    /**
     * This endpoint will return the total number of bounces by classification in descending order for each day. you can retrieve the bounce classification totals in csv format by specifying `"text/csv"` in the accept header.
     */
    RETRIEVE_BOUNCE_CLASSIFICATION_TOTALS: "SENDGRID_RETRIEVE_BOUNCE_CLASSIFICATION_TOTALS",
    /**
     * Retrieve and manage your bounce/purge settings for soft/hard bounce suppression lists with twilio sendgrid, either automatically or manually via the app/api.
     */
    RETRIEVE_BOUNCE_PURGE_MAIL_SETTINGS: "SENDGRID_RETRIEVE_BOUNCE_PURGE_MAIL_SETTINGS",
    /**
     * This endpoint retrieves your click tracking settings in sendgrid which tracks user engagement by redirecting and monitoring clicks on up to 1000 links per email.
     */
    RETRIEVE_CLICK_TRACK_SETTINGS: "SENDGRID_RETRIEVE_CLICK_TRACK_SETTINGS",
    /**
     * This endpoint retrieves enforced tls settings that mandate recipients to support tls 1.1+ or have a valid certificate. if not met, messages are dropped with a "tls required but not supported" block event.
     */
    RETRIEVE_CURRENT_ENFORCED_TLS_SETTINGS: "SENDGRID_RETRIEVE_CURRENT_ENFORCED_TLS_SETTINGS",
    /**
     * Retrieve email stats by browser with advanced stats api, storing 7 days of data, and defaulting to 500 items per request. segment by location, device, and more. visit provided link for details.
     */
    RETRIEVE_EMAIL_STATISTICS_BY_BROWSER: "SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_BROWSER",
    /**
     * Retrieve email stats by client type with endpoint; stats stored for 7 days, 500 items per request. advanced stats offer detailed insights, segmentable by location, device, and more. visit the provided link for details.
     */
    RETRIEVE_EMAIL_STATISTICS_BY_CLIENT_TYPE: "SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_CLIENT_TYPE",
    /**
     * Retrieve email statistics by country and state/province.
     */
    RETRIEVE_EMAIL_STATISTICS_BY_COUNTRY_AND_STATE_PROVINCE: "SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_COUNTRY_AND_STATE_PROVINCE",
    /**
     * Retrieve email stats by device type with a 7-day data retention limit. the advanced stats api returns 500 items per request. device types include desktop, webmail, phone, tablet, and other. more analytics available at sendgrid's statistics overview.
     */
    RETRIEVE_EMAIL_STATISTICS_BY_DEVICE_TYPE: "SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_DEVICE_TYPE",
    /**
     * Retrieve email stats by provider with advanced stats api, displaying details like location and device. only 7 days of data stored, 500 items per request. more info at sendgrid's statistics overview.
     */
    RETRIEVE_EMAIL_STATISTICS_BY_MAILBOX_PROVIDER: "SENDGRID_RETRIEVE_EMAIL_STATISTICS_BY_MAILBOX_PROVIDER",
    /**
     * **this endpoint allows you to retrieve all of your email statistics for each of your categories.** if you do not define any query parameters, this endpoint will return a sum for each category in groups of 10.
     */
    RETRIEVE_EMAIL_STATISTICS_FOR_CATEGORIES: "SENDGRID_RETRIEVE_EMAIL_STATISTICS_FOR_CATEGORIES",
    /**
     * **this endpoint allows you to retrieve the email statistics for the given subusers.** you may retrieve statistics for up to 10 different subusers by including an additional  subusers  parameter for each additional subuser.
     */
    RETRIEVE_EMAIL_STATISTICS_FOR_YOUR_SUBUSERS: "SENDGRID_RETRIEVE_EMAIL_STATISTICS_FOR_YOUR_SUBUSERS",
    /**
     * Retrieve and customize your footer settings for email bodies via this endpoint, directly or through twilio sendgrid's mail settings menu.
     */
    RETRIEVE_FOOTER_MAIL_SETTINGS: "SENDGRID_RETRIEVE_FOOTER_MAIL_SETTINGS",
    /**
     * This endpoint fetches the current email forwarding settings for bounce messages, including the recipient email and whether the feature is active.
     */
    RETRIEVE_FORWARD_BOUNCE_MAIL_SETTINGS: "SENDGRID_RETRIEVE_FORWARD_BOUNCE_MAIL_SETTINGS",
    /**
     * This endpoint retrieves current forward spam settings, listing specified email addresses receiving spam reports and showing if the feature is active.
     */
    RETRIEVE_FORWARD_SPAM_MAIL_SETTINGS: "SENDGRID_RETRIEVE_FORWARD_SPAM_MAIL_SETTINGS",
    /**
     * Retrieve your global email stats within a specific date range, with parent accounts viewing their own or a subuser's aggregated data via the `on-behalf-of` header, while subusers see only their stats.
     */
    RETRIEVE_GLOBAL_EMAIL_STATISTICS: "SENDGRID_RETRIEVE_GLOBAL_EMAIL_STATISTICS",
    /**
     * Retrieve your google analytics settings, which are set to google's recommended defaults, to understand user site activity. for details, use google's guides and best practices links.
     */
    RETRIEVE_GOOGLE_ANALYTICS_SETTINGS: "SENDGRID_RETRIEVE_GOOGLE_ANALYTICS_SETTINGS",
    /**
     * The endpoint retrieves settings for original email templates, with a guide for using and migrating from legacy to newer dynamic transactional templates.
     */
    RETRIEVE_LEGACY_TEMPLATE_MAIL_SETTINGS: "SENDGRID_RETRIEVE_LEGACY_TEMPLATE_MAIL_SETTINGS",
    /**
     * Retrieve monthly subuser email stats for a date range but can't sort by metrics like bounce drops, deferred, invalid emails, processed, spam reports, or unsubscribe drops.
     */
    RETRIEVE_MONTHLY_STATS_FOR_ALL_SUBUSERS: "SENDGRID_RETRIEVE_MONTHLY_STATS_FOR_ALL_SUBUSERS",
    /**
     * **this endpoint allows you to retrieve all transactional templates.**
     */
    RETRIEVE_PAGED_TRANSACTIONAL_TEMPLATES: "SENDGRID_RETRIEVE_PAGED_TRANSACTIONAL_TEMPLATES",
    /**
     * Retrieve all marketing campaign recipients via this endpoint. use batch deletion carefully, as it may lead to empty pages. continue iterating pages until a 404 error occurs to ensure complete retrieval.
     */
    RETRIEVE_RECIPIENTS: "SENDGRID_RETRIEVE_RECIPIENTS",
    /**
     * **this endpoint allows you to retrieve all of the recipients in a segment with the given id.**
     */
    RETRIEVE_RECIPIENTS_ON_A_SEGMENT: "SENDGRID_RETRIEVE_RECIPIENTS_ON_A_SEGMENT",
    /**
     * **this endpoint allows you to list all fields that are reserved and can't be used for custom field names.**
     */
    RETRIEVE_RESERVED_FIELDS: "SENDGRID_RETRIEVE_RESERVED_FIELDS",
    /**
     * **this endpoint allows you to retrieve the cancel/paused scheduled send information for a specific `batch id`.**
     */
    RETRIEVE_SCHEDULED_SEND: "SENDGRID_RETRIEVE_SCHEDULED_SEND",
    /**
     * **this endpoint allows you to retrieve a single segment by id.**
     */
    RETRIEVE_SINGLE_SEGMENT_ENDPOINT: "SENDGRID_RETRIEVE_SINGLE_SEGMENT_ENDPOINT",
    /**
     * **this endpoint allows you to retrieve a specific teammate by username.** you can retrieve the username's for each of your teammates using the "retrieve all teammates" endpoint.
     */
    RETRIEVE_SPECIFIC_TEAMMATE: "SENDGRID_RETRIEVE_SPECIFIC_TEAMMATE",
    /**
     * Use advanced stats api to get email statistics by client type (e.g., phone, desktop), offering location and device details. data storage is limited to 7 days with up to 500 items per request. see statistics overview for further information.
     */
    RETRIEVE_STATS_BY_A_SPECIFIC_CLIENT_TYPE: "SENDGRID_RETRIEVE_STATS_BY_A_SPECIFIC_CLIENT_TYPE",
    /**
     * **this endpoint allows you to retrieve your current settings for subscription tracking.** subscription tracking adds links to the bottom of your emails that allows your recipients to subscribe to, or unsubscribe from, your emails.
     */
    RETRIEVE_SUBSCRIPTION_TRACKING_SETTINGS: "SENDGRID_RETRIEVE_SUBSCRIPTION_TRACKING_SETTINGS",
    /**
     * This endpoint provides sender reputation scores for subusers, reflecting their email performance based on recipient responses and negative actions like bounces or spam reports.
     */
    RETRIEVE_SUBUSER_REPUTATIONS: "SENDGRID_RETRIEVE_SUBUSER_REPUTATIONS",
    /**
     * **this endpoint allows you to retrieve the total sum of each email statistic for every category over the given date range.** if you do not define any query parameters, this endpoint will return a sum for each category in groups of 10.
     */
    RETRIEVE_SUMS_OF_EMAIL_STATS_FOR_EACH_CATEGORY: "SENDGRID_RETRIEVE_SUMS_OF_EMAIL_STATS_FOR_EACH_CATEGORY",
    /**
     * This endpoint provides the billable count of recipients for marketing campaigns, based on the highest number reached in your account.
     */
    RETRIEVE_THE_COUNT_OF_BILLABLE_RECIPIENTS: "SENDGRID_RETRIEVE_THE_COUNT_OF_BILLABLE_RECIPIENTS",
    /**
     * The endpoint retrieves the default branded link for message sending, prioritizing user-set default, legacy, or sendgrid's default links. subuser requests are possible with id in the header.
     */
    RETRIEVE_THE_DEFAULT_BRANDED_LINK: "SENDGRID_RETRIEVE_THE_DEFAULT_BRANDED_LINK",
    /**
     * **this endpoint allows you to retrieve the lists that a given recipient belongs to.** each recipient can be on many lists. this endpoint gives you all of the lists that any one recipient has been added to.
     */
    RETRIEVE_THE_LISTS_THAT_A_RECIPIENT_IS_ON: "SENDGRID_RETRIEVE_THE_LISTS_THAT_A_RECIPIENT_IS_ON",
    /**
     * Retrieve the warmup status for a specific ip address
     */
    RETRIEVE_THE_WARMUP_STATUS_FOR_A_SPECIFIC_IP_ADDRESS: "SENDGRID_RETRIEVE_THE_WARMUP_STATUS_FOR_A_SPECIFIC_IP_ADDRESS",
    /**
     * **this endpoint allows you to retrieve a list of all tracking settings on your account.**
     */
    RETRIEVE_TRACKING_SETTINGS: "SENDGRID_RETRIEVE_TRACKING_SETTINGS",
    /**
     * The api endpoint allows subusers to fetch up to five domains verified by the main account for sending emails, with a defined order of domain selection.
     */
    RETRIEVE_USER_S_AUTHENTICATED_DOMAINS: "SENDGRID_RETRIEVE_USER_S_AUTHENTICATED_DOMAINS",
    /**
     * **this endpoint allows you to retrieve the email address currently on file for your account.**
     */
    RETRIEVE_YOUR_ACCOUNT_EMAIL_ADDRESS: "SENDGRID_RETRIEVE_YOUR_ACCOUNT_EMAIL_ADDRESS",
    /**
     * This endpoint checks an account's base email sending credit balance, which affects per-email charges. more details at sendgrid's billing documentation.
     */
    RETRIEVE_YOUR_CREDIT_BALANCE: "SENDGRID_RETRIEVE_YOUR_CREDIT_BALANCE",
    /**
     * **this endpoint allows you to retrieve your current account username.**
     */
    RETRIEVE_YOUR_USERNAME: "SENDGRID_RETRIEVE_YOUR_USERNAME",
    /**
     * Retrieve a paginated list of partner settings using the `limit` to set page size and `offset` to specify the starting point for additional items. multiple requests may be needed for long lists.
     */
    RETURNS_A_LIST_OF_ALL_PARTNER_SETTINGS: "SENDGRID_RETURNS_A_LIST_OF_ALL_PARTNER_SETTINGS",
    /**
     * This endpoint schedules campaign emails for a specific time, recommending off-peak times like 10:53 instead of on the hour to minimize server deferrals and enhance delivery rates.
     */
    SCHEDULE_A_CAMPAIGN: "SENDGRID_SCHEDULE_A_CAMPAIGN",
    /**
     * Use this endpoint to send a message right away by setting `send at` to `now`, or schedule it by specifying a future time in iso 8601 format (`yyyy-mm-ddthh:mm:ssz`).
     */
    SCHEDULE_SINGLE_SEND: "SENDGRID_SCHEDULE_SINGLE_SEND",
    /**
     * Find contacts using this endpoint with a body containing a `query` in sgql. searches must use lowercase, and only the first 50 matches are returned. queries over 20s will timeout. dates are in iso format, not unix timestamps.
     */
    SEARCH_CONTACTS: "SENDGRID_SEARCH_CONTACTS",
    /**
     * **this endpoint allows you to search a suppression group for multiple suppressions.** when given a list of email addresses and a group id, this endpoint will only return the email addresses that have been unsubscribed from the given group.
     */
    SEARCH_FOR_SUPPRESSIONS_WITHIN_A_GROUP: "SENDGRID_SEARCH_FOR_SUPPRESSIONS_WITHIN_A_GROUP",
    /**
     * This endpoint searches marketing campaigns recipients. variable 'field name' represents custom text fields (url-encoded) or date fields (by unix timestamp) and auto-converts epoch time for 'reserved' date fields to a full day range.
     */
    SEARCH_RECIPIENTS: "SENDGRID_SEARCH_RECIPIENTS",
    /**
     * Search json data for segments by specifying criteria for dates, text, and campaign ids using operators and boolean logic. optional list ids can refine results. used for email metrics.
     */
    SEGMENT_JSON_DATA_BY_SPECIFIC_CRITERIA: "SENDGRID_SEGMENT_JSON_DATA_BY_SPECIFIC_CRITERIA",
    /**
     * **this endpoint allows you to immediately send an existing campaign.** normally a post request would have a body, but since this endpoint is telling us to send a resource that is already created, a request body is not needed.
     */
    SEND_A_CAMPAIGN: "SENDGRID_SEND_A_CAMPAIGN",
    /**
     * **this endpoint allows you to send a test campaign.** to send to multiple addresses, use an array for the json "to" value ["one@address","two@address"]
     */
    SEND_A_TEST_CAMPAIGN: "SENDGRID_SEND_A_TEST_CAMPAIGN",
    /**
     * Use the endpoint to test marketing emails with a `template id` and up to 10 contacts. requires a `from address` or `sender id`. supports only dynamic transactional templates. manage with sendgrid app or api.
     */
    SEND_A_TEST_MARKETING_EMAIL: "SENDGRID_SEND_A_TEST_MARKETING_EMAIL",
    /**
     * The mail send operation uses sendgrid's v3 api to send emails. visit the provided link for an overview, features, limitations, quickstarts, and helper libraries.
     */
    SEND_EMAIL_WITH_TWILIO_SEND_GRID: "SENDGRID_SEND_EMAIL_WITH_TWILIO_SEND_GRID",
    /**
     * **this endpoint allows you to set up reverse dns.**
     */
    SET_UP_REVERSE_DNS: "SENDGRID_SET_UP_REVERSE_DNS",
    /**
     * Export single send stats in .csv format by specifying one or multiple single send ids in the `ids` query string, separated by commas. data is returned as plain text in .csv for flexible use or saving.
     */
    SINGLE_SEND_CSV_STATS_RETRIEVAL: "SENDGRID_SINGLE_SEND_CSV_STATS_RETRIEVAL",
    /**
     * **this endpoint allows you to put an ip address into warmup mode.**
     */
    START_WARMING_UP_AN_IP_ADDRESS: "SENDGRID_START_WARMING_UP_AN_IP_ADDRESS",
    /**
     * This endpoint removes an ip from warmup mode, returning a 204 code if successful. for warmup status details prior to removal, use the "retrieve warmup status" endpoint.
     */
    STOP_WARMING_UP_AN_IP_ADDRESS: "SENDGRID_STOP_WARMING_UP_AN_IP_ADDRESS",
    /**
     * **this endpoint allows you to retrieve the total sums of each email statistic metric for all subusers over the given date range.**
     */
    SUM_EMAIL_STATS_FOR_SUBUSERS: "SENDGRID_SUM_EMAIL_STATS_FOR_SUBUSERS",
    /**
     * The endpoint tests event webhooks by sending a fake event to your url. it has unique retry logic and requires specific oauth properties to test oauth configurations. saved credentials can be retrieved except for `oauth client secret`.
     */
    TEST_AN_EVENT_WEBHOOK_S_SETTINGS: "SENDGRID_TEST_AN_EVENT_WEBHOOK_S_SETTINGS",
    /**
     * This request returns a single bulk email validation job
     */
    THIS_REQUEST_RETURNS_A_SINGLE_BULK_EMAIL_VALIDATION_JOB: "SENDGRID_THIS_REQUEST_RETURNS_A_SINGLE_BULK_EMAIL_VALIDATION_JOB",
    /**
     * Toggle signature verification for a single event webhook by id
     */
    TOGGLE_WEBHOOK_SIGNATURE: "SENDGRID_TOGGLE_WEBHOOK_SIGNATURE",
    /**
     * The endpoint enables removal of an authenticated domain from subusers, each limited to five domains, to allow mail sending under a parent domain.
     */
    UNLINK_SUBUSER_DOMAIN: "SENDGRID_UNLINK_SUBUSER_DOMAIN",
    /**
     * **this endpoint allows you to unschedule a campaign that has already been scheduled to be sent.** a successful unschedule will return a 204. if the specified campaign is in the process of being sent, the only option is to cancel (a different method).
     */
    UNSCHEDULE_A_SCHEDULED_CAMPAIGN: "SENDGRID_UNSCHEDULE_A_SCHEDULED_CAMPAIGN",
    /**
     * Updates an account's package and attaches optional add-ons like marketing campaigns, dedicated ips, and expert services. note: accounts are limited to one package.
     */
    UPDATE_ACCOUNT_OFFERINGS: "SENDGRID_UPDATE_ACCOUNT_OFFERINGS",
    /**
     * Update email whitelist settings by toggling `enabled`. use `list` to replace entries - include all desired. exclude generic domains for can-spam compliance; whitelist bypasses bounces/unsubscribes for included contacts.
     */
    UPDATE_ADDRESS_WHITELIST_MAIL_SETTINGS: "SENDGRID_UPDATE_ADDRESS_WHITELIST_MAIL_SETTINGS",
    /**
     * Update the state of the specified account.
     */
    UPDATE_AN_ACCOUNT_S_STATE: "SENDGRID_UPDATE_AN_ACCOUNT_S_STATE",
    /**
     * **this endpoint allows you to update an alert.**
     */
    UPDATE_AN_ALERT: "SENDGRID_UPDATE_AN_ALERT",
    /**
     * **this endpoint allows you to update the settings for an authenticated domain.**
     */
    UPDATE_AN_AUTHENTICATED_DOMAIN: "SENDGRID_UPDATE_AN_AUTHENTICATED_DOMAIN",
    /**
     * This operation will rename an ip pool. an ip pool name cannot start with a dot/period (.) or space.
     */
    UPDATE_AN_IP_POOL_NAME: "SENDGRID_UPDATE_AN_IP_POOL_NAME",
    /**
     * **this endpoint allows you to modify an exisiting sso integration.** you can retrieve the ids for your configurations from the response provided by the "get all sso integrations" endpoint.
     */
    UPDATE_AN_SSO_INTEGRATION: "SENDGRID_UPDATE_AN_SSO_INTEGRATION",
    /**
     * **this endpoint allows you to update the name of an existing api key.** you must pass this endpoint a json request body with a `name` property, which will be used to rename the key associated with the `api key id` passed in the url.
     */
    UPDATE_API_KEY_NAME: "SENDGRID_UPDATE_API_KEY_NAME",
    /**
     * Update an api key's name and/or scopes using json with a `name` field and `scopes` array. to change only scopes, reuse the existing name. for just a name update, use another endpoint. see the permissions list for scope options. (https://docs.sendgrid.com)
     */
    UPDATE_API_KEY_NAME_AND_SCOPES: "SENDGRID_UPDATE_API_KEY_NAME_AND_SCOPES",
    /**
     * **this endpoint allows you to update a specific branded link. you can use this endpoint to change a branded link's default status.** you can submit this request as one of your subusers if you include their id in the `on-behalf-of` header in the request.
     */
    UPDATE_A_BRANDED_LINK: "SENDGRID_UPDATE_A_BRANDED_LINK",
    /**
     * **this endpoint allows you to update a specific campaign.** this is especially useful if you only set up the campaign using post /campaigns, but didn't set many of the parameters.
     */
    UPDATE_A_CAMPAIGN: "SENDGRID_UPDATE_A_CAMPAIGN",
    /**
     * **this endpoint allows you to update the name of one of your recipient lists.**
     */
    UPDATE_A_LIST: "SENDGRID_UPDATE_A_LIST",
    /**
     * **this endpoint allows you to update a specific inbound parse setting by hostname.** you can retrieve all your inbound parse settings and their associated host names with the "retrieve all parse settings" endpoint.
     */
    UPDATE_A_PARSE_SETTING: "SENDGRID_UPDATE_A_PARSE_SETTING",
    /**
     * **this endpoint allows to you change the scheduled time and date for a campaign to be sent.**
     */
    UPDATE_A_SCHEDULED_CAMPAIGN: "SENDGRID_UPDATE_A_SCHEDULED_CAMPAIGN",
    /**
     * Use this endpoint to change the status of a scheduled send by batch id. status updates fail with a 400 error if previously set with the cancel/pause endpoint.
     */
    UPDATE_A_SCHEDULED_SEND: "SENDGRID_UPDATE_A_SCHEDULED_SEND",
    /**
     * **this endpoint allows you to update a segment.**
     */
    UPDATE_A_SEGMENT: "SENDGRID_UPDATE_A_SEGMENT",
    /**
     * This endpoint updates an existing sender. changes to `from.email` need re-verification. if domain authenticated, new senders auto verify; else, verification email sent. partial updates can be made, but "required" fields in a `patch` must not be empty.
     */
    UPDATE_A_SENDER: "SENDGRID_UPDATE_A_SENDER",
    /**
     * This api endpoint enables updates to sender identities. changing `from.email` necessitates re-verification. partial updates are valid, but "required" fields must not be empty in patch requests.
     */
    UPDATE_A_SENDER_IDENTITY: "SENDGRID_UPDATE_A_SENDER_IDENTITY",
    /**
     * Update event webhooks by id with this endpoint or without id to update the oldest one. enable or disable, set url, choose event types, give friendly names, and configure oauth. for signature verification, use a different endpoint.
     */
    UPDATE_A_SINGLE_EVENT_WEBHOOK_BY_ID: "SENDGRID_UPDATE_A_SINGLE_EVENT_WEBHOOK_BY_ID",
    /**
     * **this endpoint allows you to update or change a suppression group.**
     */
    UPDATE_A_SUPPRESSION_GROUP: "SENDGRID_UPDATE_A_SUPPRESSION_GROUP",
    /**
     * **this endpoint allows you to update your current profile details.** any one or more of the parameters can be updated via the patch `/user/profile` endpoint. you must include at least one when you patch.
     */
    UPDATE_A_USER_S_PROFILE: "SENDGRID_UPDATE_A_USER_S_PROFILE",
    /**
     * Update your bounce settings with twilio sendgrid to automatically delete contacts from suppression lists based on a set schedule in full days for both soft and hard email bounces. manage settings via their app or api.
     */
    UPDATE_BOUNCE_PURGE_MAIL_SETTINGS: "SENDGRID_UPDATE_BOUNCE_PURGE_MAIL_SETTINGS",
    /**
     * This endpoint configures click tracking for emails, redirecting links through sendgrid or branded domains for engagement analysis, with a limit of 1000 links per email.
     */
    UPDATE_CLICK_TRACKING_SETTINGS: "SENDGRID_UPDATE_CLICK_TRACKING_SETTINGS",
    /**
     * **this endpoint allows you to update a defined custom field.** only your custom fields can be modified; reserved fields cannot be updated.
     */
    UPDATE_CUSTOM_FIELD_DEFINITION: "SENDGRID_UPDATE_CUSTOM_FIELD_DEFINITION",
    /**
     * The design api enables partial design updates using patch requests, changing only specified fields, like the 'name' field, with no impact on other data.
     */
    UPDATE_DESIGN: "SENDGRID_UPDATE_DESIGN",
    /**
     * The operation modifies an ip address's settings, such as auto warm-up status, parent account assignment, and active status. the request must have one of `is auto warmup`, `is parent assigned`, or `is enabled`.
     */
    UPDATE_DETAILS_FOR_AN_IP_ADDRESS: "SENDGRID_UPDATE_DETAILS_FOR_AN_IP_ADDRESS",
    /**
     * Update tls settings through the endpoint by setting 'require tls' to 'true' for compulsory tls 1.1+ and valid certificates with recipients. messages without tls are blocked with a specific event notice.
     */
    UPDATE_ENFORCED_TLS_SETTINGS: "SENDGRID_UPDATE_ENFORCED_TLS_SETTINGS",
    /**
     * This endpoint updates your email footer settings, enabling a custom footer addition in text/html emails. edit directly or via the twilio sendgrid app.
     */
    UPDATE_FOOTER_MAIL_SETTINGS: "SENDGRID_UPDATE_FOOTER_MAIL_SETTINGS",
    /**
     * This endpoint updates bounce forwarding mail settings, allowing users to set an email for bounce report forwards and configure spam mail forwarding in twilio sendgrid app.
     */
    UPDATE_FORWARD_BOUNCE_MAIL_SETTINGS: "SENDGRID_UPDATE_FORWARD_BOUNCE_MAIL_SETTINGS",
    /**
     * Activate forward spam to send spam reports to specified emails; supports multiple addresses and authenticating domains to receive abuse/postmaster mails. configure via twilio sendgrid app.
     */
    UPDATE_FORWARD_SPAM_MAIL_SETTINGS: "SENDGRID_UPDATE_FORWARD_SPAM_MAIL_SETTINGS",
    /**
     * Update your google analytics settings to track user activity on your site more effectively; defaults follow google's recommendations. for guidance, visit google's url builder and campaign building best practices.
     */
    UPDATE_GOOGLE_ANALYTICS_SETTINGS: "SENDGRID_UPDATE_GOOGLE_ANALYTICS_SETTINGS",
    /**
     * This endpoint updates an existing integration.
     */
    UPDATE_INTEGRATION: "SENDGRID_UPDATE_INTEGRATION",
    /**
     * **this endpoint updates the name of a list.**
     */
    UPDATE_LIST: "SENDGRID_UPDATE_LIST",
    /**
     * Update your email settings to enable open tracking with sendgrid, which uses an invisible image to log email opens in various reports if the recipient allows images.
     */
    UPDATE_OPEN_TRACKING_SETTINGS: "SENDGRID_UPDATE_OPEN_TRACKING_SETTINGS",
    /**
     * Segment `name` has to be unique. a user can not create a new segment with an existing segment name.
     */
    UPDATE_SEGMENT: "SENDGRID_UPDATE_SEGMENT",
    /**
     * Update single send drafts using its id via this endpoint; only changed properties are affected. the 'send at' property sets a date but doesn't schedule it; use schedule single send endpoint or ui to schedule.
     */
    UPDATE_SINGLE_SEND: "SENDGRID_UPDATE_SINGLE_SEND",
    /**
     * **this endpoint allows you to update an existing certificate by id.** you can retrieve a certificate's id from the response provided by the "get all sso integrations" endpoint.
     */
    UPDATE_SSO_CERTIFICATE: "SENDGRID_UPDATE_SSO_CERTIFICATE",
    /**
     * **this endpoint allows you to update your current settings for subscription tracking.** subscription tracking adds links to the bottom of your emails that allows your recipients to subscribe to, or unsubscribe from, your emails.
     */
    UPDATE_SUBSCRIPTION_TRACKING_SETTINGS: "SENDGRID_UPDATE_SUBSCRIPTION_TRACKING_SETTINGS",
    /**
     * This endpoint updates teammate permissions: set `is admin` to `true` for admin rights, otherwise to `false` with relevant scopes. only parent users or admins can modify these settings, and admin users are limited to permission changes.
     */
    UPDATE_TEAMMATE_S_PERMISSIONS: "SENDGRID_UPDATE_TEAMMATE_S_PERMISSIONS",
    /**
     * The endpoint updates legacy email templates, replaced by more advanced dynamic transactional templates. legacy templates are html-wrapped email content useful for marketing. guidance is available for using and migrating from legacy templates.
     */
    UPDATE_TEMPLATE_MAIL_SETTINGS: "SENDGRID_UPDATE_TEMPLATE_MAIL_SETTINGS",
    /**
     * **this endpoint allows you to update the credits for a subuser.**
     */
    UPDATE_THE_CREDITS_FOR_A_SUBUSER: "SENDGRID_UPDATE_THE_CREDITS_FOR_A_SUBUSER",
    /**
     * **this endpoint allows you to update the remaining credits for a subuser.**
     */
    UPDATE_THE_REMAINING_CREDITS_FOR_A_SUBUSER: "SENDGRID_UPDATE_THE_REMAINING_CREDITS_FOR_A_SUBUSER",
    /**
     * **this endpoint allows you to update the email address currently on file for your account.**
     */
    UPDATE_YOUR_ACCOUNT_EMAIL_ADDRESS: "SENDGRID_UPDATE_YOUR_ACCOUNT_EMAIL_ADDRESS",
    /**
     * **this endpoint allows you to update your password.**
     */
    UPDATE_YOUR_PASSWORD: "SENDGRID_UPDATE_YOUR_PASSWORD",
    /**
     * **this endpoint allows you to update the username for your account.**
     */
    UPDATE_YOUR_USERNAME: "SENDGRID_UPDATE_YOUR_USERNAME",
    /**
     * **this endpoint allows you to validate an email address.**
     */
    VALIDATE_AN_EMAIL: "SENDGRID_VALIDATE_AN_EMAIL",
    /**
     * Validate a mail batch id to get a `200` status code for a valid one, or a `400` code for an invalid. a valid id simply means it's created, not necessarily assigned to a send.
     */
    VALIDATE_A_BATCH_ID: "SENDGRID_VALIDATE_A_BATCH_ID",
    /**
     * **this endpoint allows you to validate a branded link.** you can submit this request as one of your subusers if you include their id in the `on-behalf-of` header in the request.
     */
    VALIDATE_A_BRANDED_LINK: "SENDGRID_VALIDATE_A_BRANDED_LINK",
    /**
     * **this endpoint allows you to validate an authenticated domain. if it fails, it will return an error message describing why the domain could not be validated.**
     */
    VALIDATE_A_DOMAIN_AUTHENTICATION: "SENDGRID_VALIDATE_A_DOMAIN_AUTHENTICATION",
    /**
     * Endpoint checks reverse dns record validity via `valid` in `validation results.a record`. if `false`, it's undetermined, not necessarily invalid. check `reason` for explanation. retrieve ids with "retrieve all reverse dns records" endpoint.
     */
    VALIDATE_A_REVERSE_DNS_RECORD: "SENDGRID_VALIDATE_A_REVERSE_DNS_RECORD",
    /**
     * **this endpoint allows you to verify a sender requests.** the token is generated by sendgrid and included in a verification email delivered to the address that's pending verification.
     */
    VERIFY_SENDER_REQUEST: "SENDGRID_VERIFY_SENDER_REQUEST",
    /**
     * **this endpoint allows you to retrieve a specific sender identity.**
     */
    VIEW_A_SENDER_IDENTITY: "SENDGRID_VIEW_A_SENDER_IDENTITY",
    /**
     * **this endpoint allows you to retrieve the date and time that a campaign has been scheduled to be sent.**
     */
    VIEW_SCHEDULED_TIME_OF_A_CAMPAIGN: "SENDGRID_VIEW_SCHEDULED_TIME_OF_A_CAMPAIGN",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SENDGRID".
 */
export type SENDGRID_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SENDGRID".
 */
export type SENDGRID_TRIGGER_EVENTS = {}
