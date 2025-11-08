// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FRAUDLABS_PRO's FRAUDLABS_PRO_CREATE_ACCOUNT tool input.
 */
type FRAUDLABS_PRO_CREATE_ACCOUNT_INPUT = {
  /**
   * Address1
   * @description Address line 1
   */
  address1?: string;
  /**
   * Address2
   * @description Address line 2
   * @default null
   */
  address2: string | null;
  /**
   * City
   * @description City
   */
  city?: string;
  /**
   * Company
   * @description Company name
   */
  company?: string;
  /**
   * Country
   * @description ISO 3166 alpha-2 country code
   */
  country?: string;
  /**
   * Email
   * Format: email
   * @description New account email
   */
  email?: string;
  /**
   * Fax
   * @description Fax number
   * @default null
   */
  fax: string | null;
  /**
   * Format
   * @description Response format: json or xml
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Industry
   * @description Industry ID
   */
  industry?: string;
  /**
   * Key
   * @description Reseller API key
   */
  key?: string;
  /**
   * Name
   * @description User full name
   */
  name?: string;
  /**
   * Phone
   * @description Phone number
   */
  phone?: string;
  /**
   * State
   * @description State/Province
   */
  state?: string;
  /**
   * Username
   * @description New account username
   */
  username?: string;
  /**
   * Zip Code
   * @description ZIP/Postal code
   */
  zip_code?: string;
};

/**
 * Type of FRAUDLABS_PRO's FRAUDLABS_PRO_CREATE_ACCOUNT tool output.
 */
type FRAUDLABS_PRO_CREATE_ACCOUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address1
       * @description Address line 1
       * @default null
       */
      address1: string | null;
      /**
       * Address2
       * @description Address line 2
       * @default null
       */
      address2: string | null;
      /**
       * City
       * @description City
       * @default null
       */
      city: string | null;
      /**
       * Company
       * @description Company name
       * @default null
       */
      company: string | null;
      /**
       * Country
       * @description Country code
       * @default null
       */
      country: string | null;
      /**
       * Email
       * @description Created account email
       * @default null
       */
      email: string | null;
      /**
       * Fax
       * @description Fax number
       * @default null
       */
      fax: string | null;
      /**
       * Fraudlabspro Error
       * @description Error code returned by FraudLabs Pro API
       */
      fraudlabspro_error: number;
      /**
       * Fraudlabspro Message
       * @description Status message from API
       */
      fraudlabspro_message: string;
      /**
       * Name
       * @description User full name
       * @default null
       */
      name: string | null;
      /**
       * Password
       * @description Created account password
       * @default null
       */
      password: string | null;
      /**
       * Phone
       * @description Phone number
       * @default null
       */
      phone: string | null;
      /**
       * State
       * @description State/Province
       * @default null
       */
      state: string | null;
      /**
       * Username
       * @description Created account username
       * @default null
       */
      username: string | null;
      /**
       * Zip Code
       * @description ZIP/Postal code
       * @default null
       */
      zip_code: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FRAUDLABS_PRO's FRAUDLABS_PRO_FLP_FEEDBACK_ORDER tool input.
 */
type FRAUDLABS_PRO_FLP_FEEDBACK_ORDER_INPUT = {
  /**
   * Action
   * @description Feedback action to perform. Allowed values: APPROVE, REJECT, REJECT_BLACKLIST.
   * @enum {string}
   */
  action?: "APPROVE" | "REJECT" | "REJECT_BLACKLIST";
  /**
   * Format
   * @description Response format. Defaults to 'json'.
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Id
   * @description Unique transaction ID returned by the screen-order API.
   */
  id?: string;
  /**
   * Key
   * @description Your FraudLabs Pro API license key.
   */
  key?: string;
  /**
   * Note
   * @description Optional note or reason for the feedback (e.g., 'False positive').
   * @default null
   */
  note: string | null;
};

/**
 * Type of FRAUDLABS_PRO's FRAUDLABS_PRO_FLP_FEEDBACK_ORDER tool output.
 */
type FRAUDLABS_PRO_FLP_FEEDBACK_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Fraudlabspro Id
       * @description The FraudLabs Pro transaction ID that was updated.
       */
      fraudlabspro_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FRAUDLABS_PRO's FRAUDLABS_PRO_FLP_SCREEN_ORDER tool input.
 */
type FRAUDLABS_PRO_FLP_SCREEN_ORDER_INPUT = {
  /**
   * Amount
   * @description Transaction amount (must be positive)
   * @default null
   */
  amount: number | null;
  /**
   * Avs Result
   * @description Single-character AVS result from processor
   * @default null
   */
  avs_result: string | null;
  /**
   * Bill Addr
   * @description Billing street address
   * @default null
   */
  bill_addr: string | null;
  /**
   * Bill City
   * @description Billing city
   * @default null
   */
  bill_city: string | null;
  /**
   * Bill Country
   * @description Billing country ISO-3166 alpha-2 code (e.g., US)
   * @default null
   */
  bill_country: string | null;
  /**
   * Bill State
   * @description Billing state or province (US/CA code, e.g., NY)
   * @default null
   */
  bill_state: string | null;
  /**
   * Bill Zip Code
   * @description Billing postal or ZIP code
   * @default null
   */
  bill_zip_code: string | null;
  /**
   * Bin No
   * @description First 6 or 8 digits of card for bank identification
   * @default null
   */
  bin_no: string | null;
  /**
   * Card Hash
   * @description SHA2 hash of card number
   * @default null
   */
  card_hash: string | null;
  /**
   * Currency
   * @description Transaction currency (ISO-4217 code, e.g., USD)
   * @default null
   */
  currency: string | null;
  /**
   * Cvv Result
   * @description Single-character CVV2 result (processor response)
   * @default null
   */
  cvv_result: string | null;
  /**
   * Department
   * @description Merchant product/service department ID
   * @default null
   */
  department: string | null;
  /**
   * Email
   * Format: email
   * @description User's email address
   * @default null
   */
  email: string | null;
  /**
   * Email Domain
   * @description Email domain; auto-extracted if email provided
   * @default null
   */
  email_domain: string | null;
  /**
   * Email Hash
   * @description SHA2 hash of email if email not provided
   * @default null
   */
  email_hash: string | null;
  /**
   * First Name
   * @description User's first name
   * @default null
   */
  first_name: string | null;
  /**
   * Flp Checksum
   * @description Device validation checksum from FraudLabs Pro JavaScript
   * @default null
   */
  flp_checksum: string | null;
  /**
   * Format
   * @description Response format
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Ip
   * @description Transaction IP address (IPv4 or IPv6)
   */
  ip?: string;
  /**
   * Key
   * @description API license key for FraudLabs Pro
   */
  key?: string;
  /**
   * Last Name
   * @description User's last name
   * @default null
   */
  last_name: string | null;
  /**
   * Payment Gateway
   * @description Payment gateway name
   * @default null
   */
  payment_gateway: string | null;
  /**
   * Payment Mode
   * @description Payment mode for transaction
   * @default null
   * @enum {string|null}
   */
  payment_mode: "creditcard" | "paypal" | "cod" | "bankdeposit" | "giftcard" | "crypto" | "wired" | "others" | null;
  /**
   * Quantity
   * @description Total quantity of items
   * @default null
   */
  quantity: number | null;
  /**
   * Ship Addr
   * @description Shipping street address
   * @default null
   */
  ship_addr: string | null;
  /**
   * Ship City
   * @description Shipping city
   * @default null
   */
  ship_city: string | null;
  /**
   * Ship Country
   * @description Shipping country ISO-3166 alpha-2 code (e.g., US)
   * @default null
   */
  ship_country: string | null;
  /**
   * Ship First Name
   * @description Shipping recipient first name
   * @default null
   */
  ship_first_name: string | null;
  /**
   * Ship Last Name
   * @description Shipping recipient last name
   * @default null
   */
  ship_last_name: string | null;
  /**
   * Ship State
   * @description Shipping state or province (US/CA code, e.g., NY)
   * @default null
   */
  ship_state: string | null;
  /**
   * Ship Zip Code
   * @description Shipping postal or ZIP code
   * @default null
   */
  ship_zip_code: string | null;
  /**
   * User Order Id
   * @description Merchant's order ID (max 15 chars)
   * @default null
   */
  user_order_id: string | null;
  /**
   * User Phone
   * @description User's phone number
   * @default null
   */
  user_phone: string | null;
  /**
   * Username
   * @description Username used for signup
   * @default null
   */
  username: string | null;
};

/**
 * Type of FRAUDLABS_PRO's FRAUDLABS_PRO_FLP_SCREEN_ORDER tool output.
 */
type FRAUDLABS_PRO_FLP_SCREEN_ORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Version
       * @description API engine version used
       */
      api_version: string;
      /**
       * Billing Address
       * @description Billing address fraud checks
       */
      billing_address: {
          /**
           * Ip Distance In Km
           * @description Distance between IP and billing in km
           * @default null
           */
          ip_distance_in_km: number | null;
          /**
           * Ip Distance In Mile
           * @description Distance between IP and billing in miles
           * @default null
           */
          ip_distance_in_mile: number | null;
          /**
           * Is Ip Country Match
           * @description IP country matches billing country
           * @default null
           */
          is_ip_country_match: boolean | null;
      };
      /**
       * Credit Card
       * @description Credit card fraud checks
       */
      credit_card: {
          /**
           * Card Brand
           * @description Credit card brand
           * @default null
           */
          card_brand: string | null;
          /**
           * Card Issuing Bank
           * @description Issuing bank name
           * @default null
           */
          card_issuing_bank: string | null;
          /**
           * Card Issuing Country
           * @description Issuing country ISO code
           * @default null
           */
          card_issuing_country: string | null;
          /**
           * Card Type
           * @description Credit or debit card type
           * @default null
           */
          card_type: string | null;
          /**
           * Is Bin Country Match
           * @description BIN country matches issuing country
           * @default null
           */
          is_bin_country_match: boolean | null;
          /**
           * Is Bin Exist
           * @description Whether BIN exists in list
           * @default null
           */
          is_bin_exist: boolean | null;
          /**
           * Is In Blacklist
           * @description Card in blacklist
           * @default null
           */
          is_in_blacklist: boolean | null;
          /**
           * Is Prepaid
           * @description Whether card is prepaid
           * @default null
           */
          is_prepaid: boolean | null;
      };
      /**
       * Device
       * @description Device fraud checks
       */
      device: {
          /**
           * Is In Blacklist
           * @description Device ID in blacklist
           * @default null
           */
          is_in_blacklist: boolean | null;
          /**
           * Is Malware Exploit
           * @description Device appears infected by malware
           * @default null
           */
          is_malware_exploit: boolean | null;
      };
      /**
       * Email Address
       * @description Email fraud checks
       */
      email_address: {
          /**
           * Is Disposable
           * @description Disposable email address
           * @default null
           */
          is_disposable: boolean | null;
          /**
           * Is Domain Exist
           * @description Email domain exists and is valid
           * @default null
           */
          is_domain_exist: boolean | null;
          /**
           * Is Free
           * @description Email from free provider
           * @default null
           */
          is_free: boolean | null;
          /**
           * Is In Blacklist
           * @description Email address in blacklist
           * @default null
           */
          is_in_blacklist: boolean | null;
          /**
           * Is New Domain Name
           * @description Newly registered domain name
           * @default null
           */
          is_new_domain_name: boolean | null;
      };
      /**
       * Fraudlabspro Id
       * @description Unique API transaction ID
       */
      fraudlabspro_id: string;
      /**
       * Fraudlabspro Rules
       * @description Rules triggered during screening
       * @default null
       */
      fraudlabspro_rules: string[] | null;
      /**
       * Fraudlabspro Score
       * @description Fraud score (1–100, higher is riskier)
       */
      fraudlabspro_score: number;
      /**
       * Fraudlabspro Status
       * @description Final decision status
       * @enum {string}
       */
      fraudlabspro_status: "APPROVE" | "REJECT" | "REVIEW";
      /**
       * Ip Geolocation
       * @description IP geolocation data
       */
      ip_geolocation: {
          /**
           * City
           * @description City
           */
          city: string;
          /**
           * Continent
           * @description Estimated continent
           */
          continent: string;
          /**
           * Country Code
           * @description ISO-3166 country code
           */
          country_code: string;
          /**
           * Country Name
           * @description Country name
           */
          country_name: string;
          /**
           * Domain
           * @description ISP domain name
           * @default null
           */
          domain: string | null;
          /**
           * Elevation
           * @description Elevation in meters
           * @default null
           */
          elevation: number | null;
          /**
           * Ip
           * @description Transaction IP address
           */
          ip: string;
          /**
           * Is In Blacklist
           * @description Whether IP is in blacklist
           */
          is_in_blacklist: boolean;
          /**
           * Is Proxy
           * @description Whether IP is known anonymous proxy
           */
          is_proxy: boolean;
          /**
           * Isp Name
           * @description Internet service provider name
           * @default null
           */
          isp_name: string | null;
          /**
           * Latitude
           * @description Latitude with precision up to 4 decimals
           */
          latitude: number | null;
          /**
           * Longitude
           * @description Longitude with precision up to 4 decimals
           */
          longitude: number | null;
          /**
           * Mobile Brand
           * @description Mobile brand name
           * @default null
           */
          mobile_brand: string | null;
          /**
           * Mobile Mcc
           * @description Mobile network MCC code
           * @default null
           */
          mobile_mcc: string | null;
          /**
           * Mobile Mnc
           * @description Mobile network MNC code
           * @default null
           */
          mobile_mnc: string | null;
          /**
           * Netspeed
           * @description Network speed type
           * @default null
           */
          netspeed: string | null;
          /**
           * Region
           * @description Region or state
           */
          region: string;
          /**
           * Timezone
           * @description Timezone
           * @default null
           */
          timezone: string | null;
          /**
           * Usage Type
           * @description Usage type (e.g., Commercial)
           * @default null
           */
          usage_type: string | null;
          /**
           * Zip Code
           * @description ZIP or postal code
           * @default null
           */
          zip_code: string | null;
      };
      /**
       * Phone Number
       * @description Phone number fraud checks
       */
      phone_number: {
          /**
           * Is Disposable
           * @description Disposable phone number
           * @default null
           */
          is_disposable: boolean | null;
          /**
           * Is In Blacklist
           * @description Phone number in blacklist
           * @default null
           */
          is_in_blacklist: boolean | null;
      };
      /**
       * Remaining Credits
       * @description Remaining query credits
       */
      remaining_credits: number;
      /**
       * Shipping Address
       * @description Shipping address fraud checks
       */
      shipping_address: {
          /**
           * Is Address Ship Forward
           * @description Shipping address is known mail drop
           * @default null
           */
          is_address_ship_forward: boolean | null;
          /**
           * Is Bill City Match
           * @description Billing city matches shipping city
           * @default null
           */
          is_bill_city_match: boolean | null;
          /**
           * Is Bill Country Match
           * @description Billing country matches shipping country
           * @default null
           */
          is_bill_country_match: boolean | null;
          /**
           * Is Bill Postcode Match
           * @description Billing postal code matches shipping postal code
           * @default null
           */
          is_bill_postcode_match: boolean | null;
          /**
           * Is Bill State Match
           * @description Billing state matches shipping state
           * @default null
           */
          is_bill_state_match: boolean | null;
          /**
           * Is Export Controlled Country
           * @description Country is embargoed
           * @default null
           */
          is_export_controlled_country: boolean | null;
          /**
           * Is In Blacklist
           * @description Shipping address in blacklist
           * @default null
           */
          is_in_blacklist: boolean | null;
      };
      /**
       * User Order Id
       * @description Echoed merchant order ID
       * @default null
       */
      user_order_id: string | null;
      /**
       * Username
       * @description Username fraud checks
       */
      username: {
          /**
           * Is High Risk
           * @description Username found in high-risk database
           * @default null
           */
          is_high_risk: boolean | null;
          /**
           * Is In Blacklist
           * @description Username in blacklist
           * @default null
           */
          is_in_blacklist: boolean | null;
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
 * Type of FRAUDLABS_PRO's FRAUDLABS_PRO_GET_ORDER_RESULT tool input.
 */
type FRAUDLABS_PRO_GET_ORDER_RESULT_INPUT = {
  /**
   * Format
   * @description Response format; json (default) or xml
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Id
   * @description Unique transaction ID from FraudLabs Pro (fraudlabspro_id) or your platform's order ID
   */
  id?: string;
  /**
   * Key
   * @description FraudLabs Pro API key. If not provided, will attempt to use key from metadata.query_params.
   * @default null
   */
  key: string | null;
};

/**
 * Type of FRAUDLABS_PRO's FRAUDLABS_PRO_GET_ORDER_RESULT tool output.
 */
type FRAUDLABS_PRO_GET_ORDER_RESULT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * BillingAddress
       * @description Billing address analysis
       * @default null
       */
      billing_address: {
          /**
           * Distance In Km
           * @description IP-to-billing distance in kilometers
           * @default null
           */
          distance_in_km: number | null;
          /**
           * Distance In Mile
           * @description IP-to-billing distance in miles
           * @default null
           */
          distance_in_mile: number | null;
          /**
           * Is Ip Country Match
           * @description IP country matches billing country
           * @default null
           */
          is_ip_country_match: boolean | null;
      } | null;
      /**
       * CreditCard
       * @description Credit card analysis
       * @default null
       */
      credit_card: {
          /**
           * Card Brand
           * @description Credit card brand
           * @default null
           */
          card_brand: string | null;
          /**
           * Card Issuing Bank
           * @description Issuing bank of the card
           * @default null
           */
          card_issuing_bank: string | null;
          /**
           * Card Issuing Country
           * @description ISO-3166 alpha-2 code of issuing country
           * @default null
           */
          card_issuing_country: string | null;
          /**
           * Card Type
           * @description Credit card type
           * @default null
           */
          card_type: string | null;
          /**
           * Is Bin Country Match
           * @description BIN country matches card country
           * @default null
           */
          is_bin_country_match: boolean | null;
          /**
           * Is Bin Exist
           * @description Whether the BIN exists
           * @default null
           */
          is_bin_exist: boolean | null;
          /**
           * Is In Blacklist
           * @description Credit card is in blacklist
           * @default null
           */
          is_in_blacklist: boolean | null;
          /**
           * Is Prepaid
           * @description Whether the card is prepaid
           * @default null
           */
          is_prepaid: boolean | null;
      } | null;
      /**
       * Device
       * @description Device analysis
       * @default null
       */
      device: {
          /**
           * Is In Blacklist
           * @description Device is in blacklist
           * @default null
           */
          is_in_blacklist: boolean | null;
          /**
           * Is Malware Exploit
           * @description Device has malware/exploit risk
           * @default null
           */
          is_malware_exploit: boolean | null;
      } | null;
      /**
       * EmailAddress
       * @description Email address analysis
       * @default null
       */
      email_address: {
          /**
           * Is Disposable
           * @description Disposable email provider
           * @default null
           */
          is_disposable: boolean | null;
          /**
           * Is Domain Exists
           * @description Email domain exists
           * @default null
           */
          is_domain_exists: boolean | null;
          /**
           * Is Free
           * @description Free email provider
           * @default null
           */
          is_free: boolean | null;
          /**
           * Is In Blacklist
           * @description Email domain is in blacklist
           * @default null
           */
          is_in_blacklist: boolean | null;
          /**
           * Is New Domain Name
           * @description Newly registered domain
           * @default null
           */
          is_new_domain_name: boolean | null;
      } | null;
      /**
       * Fraudlabspro Id
       * @description FraudLabs Pro transaction ID
       * @default null
       */
      fraudlabspro_id: string | null;
      /**
       * Fraudlabspro Rules
       * @description List of rules triggered in screening
       * @default null
       */
      fraudlabspro_rules: string[] | null;
      /**
       * Fraudlabspro Score
       * @description Risk score (1-100; higher is riskier)
       * @default null
       */
      fraudlabspro_score: number | null;
      /**
       * Fraudlabspro Status
       * @description Final action; APPROVE, REJECT, or REVIEW
       * @default null
       */
      fraudlabspro_status: string | null;
      /**
       * IPGeolocation
       * @description Geolocation data for the IP address
       * @default null
       */
      ip_geolocation: {
          /**
           * City
           * @description City
           * @default null
           */
          city: string | null;
          /**
           * Continent
           * @description Estimated continent
           * @default null
           */
          continent: string | null;
          /**
           * Country Code
           * @description ISO-3166 alpha-2 country code
           * @default null
           */
          country_code: string | null;
          /**
           * Country Name
           * @description Country name
           * @default null
           */
          country_name: string | null;
          /**
           * Domain
           * @description Domain
           * @default null
           */
          domain: string | null;
          /**
           * Elevation
           * @description Elevation
           * @default null
           */
          elevation: number | null;
          /**
           * Ip
           * @description Transaction IP address
           * @default null
           */
          ip: string | null;
          /**
           * Is In Blacklist
           * @description Whether the IP is in blacklist
           * @default null
           */
          is_in_blacklist: boolean | null;
          /**
           * Is Proxy
           * @description Whether the IP is a proxy
           * @default null
           */
          is_proxy: boolean | null;
          /**
           * Isp Name
           * @description ISP name
           * @default null
           */
          isp_name: string | null;
          /**
           * Latitude
           * @description Latitude
           * @default null
           */
          latitude: number | null;
          /**
           * Longitude
           * @description Longitude
           * @default null
           */
          longitude: number | null;
          /**
           * Mobile Brand
           * @description Mobile brand
           * @default null
           */
          mobile_brand: string | null;
          /**
           * Mobile Mcc
           * @description Mobile country code
           * @default null
           */
          mobile_mcc: string | null;
          /**
           * Mobile Mnc
           * @description Mobile network code
           * @default null
           */
          mobile_mnc: string | null;
          /**
           * Netspeed
           * @description Network speed
           * @default null
           */
          netspeed: string | null;
          /**
           * Region
           * @description Region
           * @default null
           */
          region: string | null;
          /**
           * Timezone
           * @description Timezone
           * @default null
           */
          timezone: string | null;
          /**
           * Usage Type
           * @description Usage type
           * @default null
           */
          usage_type: string | null;
          /**
           * Zip Code
           * @description ZIP/postal code
           * @default null
           */
          zip_code: string | null;
      } | null;
      /**
       * PhoneNumber
       * @description Phone number analysis
       * @default null
       */
      phone_number: {
          /**
           * Is Disposable
           * @description Disposable phone number
           * @default null
           */
          is_disposable: boolean | null;
          /**
           * Is In Blacklist
           * @description Phone number is in blacklist
           * @default null
           */
          is_in_blacklist: boolean | null;
      } | null;
      /**
       * ShippingAddress
       * @description Shipping address analysis
       * @default null
       */
      shipping_address: {
          /**
           * Is Address Ship Forward
           * @description Known mail drop/forwarding address
           * @default null
           */
          is_address_ship_forward: boolean | null;
          /**
           * Is Bill City Match
           * @description Billing city matches shipping city
           * @default null
           */
          is_bill_city_match: boolean | null;
          /**
           * Is Bill Country Match
           * @description Billing country matches shipping country
           * @default null
           */
          is_bill_country_match: boolean | null;
          /**
           * Is Bill Postcode Match
           * @description Billing postcode matches shipping postcode
           * @default null
           */
          is_bill_postcode_match: boolean | null;
          /**
           * Is Bill State Match
           * @description Billing state matches shipping state
           * @default null
           */
          is_bill_state_match: boolean | null;
          /**
           * Is Export Controlled Country
           * @description Order shipping to embargoed country
           * @default null
           */
          is_export_controlled_country: boolean | null;
          /**
           * Is In Blacklist
           * @description Shipping address is in blacklist
           * @default null
           */
          is_in_blacklist: boolean | null;
      } | null;
      /**
       * User Order Id
       * @description Your order identifier
       * @default null
       */
      user_order_id: string | null;
      /**
       * Username
       * @description Username analysis
       * @default null
       */
      username: {
          /**
           * Is High Risk
           * @description Username is flagged as high risk
           * @default null
           */
          is_high_risk: boolean | null;
          /**
           * Is In Blacklist
           * @description Username is in blacklist
           * @default null
           */
          is_in_blacklist: boolean | null;
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
 * Type of FRAUDLABS_PRO's FRAUDLABS_PRO_GET_SMS_VERIFICATION_RESULT tool input.
 */
type FRAUDLABS_PRO_GET_SMS_VERIFICATION_RESULT_INPUT = {
  /**
   * Format
   * @description Response format, 'json' (default) or 'xml'
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Key
   * @description FraudLabs Pro API key
   */
  key?: string;
  /**
   * Otp
   * @description One-time password sent via SMS to the recipient's phone
   */
  otp?: string;
  /**
   * Tran Id
   * @description Unique transaction ID returned by the Send SMS Verification API
   */
  tran_id?: string;
};

/**
 * Type of FRAUDLABS_PRO's FRAUDLABS_PRO_GET_SMS_VERIFICATION_RESULT tool output.
 */
type FRAUDLABS_PRO_GET_SMS_VERIFICATION_RESULT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Y if the provided OTP is valid; N if invalid or expired.
       * @enum {string}
       */
      result: "Y" | "N";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FRAUDLABS_PRO's FRAUDLABS_PRO_SEND_SMS_VERIFICATION tool input.
 */
type FRAUDLABS_PRO_SEND_SMS_VERIFICATION_INPUT = {
  /**
   * Country Code
   * @description ISO 3166 country code for the phone, e.g., US
   * @default null
   */
  country_code: string | null;
  /**
   * Format
   * @description Response format: json (default) or xml
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Key
   * @description FraudLabs Pro API key
   */
  key?: string;
  /**
   * Mesg
   * @description SMS message template; must include <otp> placeholder; max 140 characters
   */
  mesg?: string;
  /**
   * Otp Timeout
   * @description OTP timeout in seconds; default 3600; min 15; max 86400
   * @default null
   */
  otp_timeout: number | null;
  /**
   * Tel
   * @description Recipient mobile number in E.164 format, e.g., +12015550123
   */
  tel?: string;
};

/**
 * Type of FRAUDLABS_PRO's FRAUDLABS_PRO_SEND_SMS_VERIFICATION tool output.
 */
type FRAUDLABS_PRO_SEND_SMS_VERIFICATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Credits Remaining
       * @description Remaining SMS credits after this request
       */
      credits_remaining: number;
      /**
       * Tran Id
       * @description Unique transaction ID for this SMS verification call
       */
      tran_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FRAUDLABS_PRO's FRAUDLABS_PRO_SUBSCRIBE_PLAN tool input.
 */
type FRAUDLABS_PRO_SUBSCRIBE_PLAN_INPUT = {
  /**
   * Format
   * @description Response format. Valid values: json, xml. Default is json.
   * @default json
   * @enum {string}
   */
  format: "json" | "xml";
  /**
   * Key
   * @description Your Reseller API key.
   */
  key?: string;
  /**
   * Plan
   * @description Plan code. Only MICRO plan is currently accepted.
   * @enum {string}
   */
  plan?: "MICRO" | "SMALL" | "MEDIUM" | "LARGE" | "ENTERPRISE";
  /**
   * Username
   * @description Username of the account to subscribe.
   */
  username?: string;
};

/**
 * Type of FRAUDLABS_PRO's FRAUDLABS_PRO_SUBSCRIBE_PLAN tool output.
 */
type FRAUDLABS_PRO_SUBSCRIBE_PLAN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Key
       * @description API key issued for the subscribed plan.
       * @default null
       */
      api_key: string | null;
      /**
       * Fraudlabspro Error
       * @description Error code for this transaction.
       */
      fraudlabspro_error: number;
      /**
       * Fraudlabspro Message
       * @description More information about the status of this transaction.
       */
      fraudlabspro_message: string;
      /**
       * Plan Name
       * @description Name of the subscribed plan.
       * @default null
       */
      plan_name: string | null;
      /**
       * Query Limit
       * @description Total queries available for the subscribed plan.
       * @default null
       */
      query_limit: number | null;
      /**
       * Rule Limit
       * @description Maximum number of rules allowed for the plan.
       * @default null
       */
      rule_limit: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of FRAUDLABS_PRO's FRAUDLABS_PRO_WEBHOOK_ORDER_STATUS_CHANGED tool input.
 */
type FRAUDLABS_PRO_WEBHOOK_ORDER_STATUS_CHANGED_INPUT = {
  /**
   * Callback Url
   * Format: uri
   * @description URL to receive FraudLabs Pro order status change notifications
   */
  callback_url?: string;
  /**
   * Extra Fields
   * @description Additional key/value pairs to include in the payload
   * @default null
   */
  extra_fields: {
      [key: string]: string;
  } | null;
  /**
   * Payload Format
   * @description Payload encoding format for the test webhook POST
   * @default form
   * @enum {string|null}
   */
  payload_format: "form" | "json" | null;
  /**
   * Test Action
   * @description FraudLabs Pro status to include in the webhook payload
   * @default null
   * @enum {string|null}
   */
  test_action: "APPROVE" | "REJECT" | null;
  /**
   * Test Id
   * @description Test transaction id to include in the webhook payload
   * @default null
   */
  test_id: string | null;
};

/**
 * Type of FRAUDLABS_PRO's FRAUDLABS_PRO_WEBHOOK_ORDER_STATUS_CHANGED tool output.
 */
type FRAUDLABS_PRO_WEBHOOK_ORDER_STATUS_CHANGED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Echoed
       * @description Echoed response content from the callback, if JSON
       * @default null
       */
      echoed: {
          [key: string]: unknown;
      } | null;
      /**
       * Message
       * @description Information about webhook test delivery status
       */
      message: string;
      /**
       * Status Code
       * @description HTTP status code returned by callback
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
 * Type map of all available tool input types for toolkit "FRAUDLABS_PRO".
 */
export type FRAUDLABS_PRO_TOOL_INPUTS = {
  CREATE_ACCOUNT: FRAUDLABS_PRO_CREATE_ACCOUNT_INPUT
  FLP_FEEDBACK_ORDER: FRAUDLABS_PRO_FLP_FEEDBACK_ORDER_INPUT
  FLP_SCREEN_ORDER: FRAUDLABS_PRO_FLP_SCREEN_ORDER_INPUT
  GET_ORDER_RESULT: FRAUDLABS_PRO_GET_ORDER_RESULT_INPUT
  GET_SMS_VERIFICATION_RESULT: FRAUDLABS_PRO_GET_SMS_VERIFICATION_RESULT_INPUT
  SEND_SMS_VERIFICATION: FRAUDLABS_PRO_SEND_SMS_VERIFICATION_INPUT
  SUBSCRIBE_PLAN: FRAUDLABS_PRO_SUBSCRIBE_PLAN_INPUT
  WEBHOOK_ORDER_STATUS_CHANGED: FRAUDLABS_PRO_WEBHOOK_ORDER_STATUS_CHANGED_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FRAUDLABS_PRO".
 */
export type FRAUDLABS_PRO_TOOL_OUTPUTS = {
  CREATE_ACCOUNT: FRAUDLABS_PRO_CREATE_ACCOUNT_OUTPUT
  FLP_FEEDBACK_ORDER: FRAUDLABS_PRO_FLP_FEEDBACK_ORDER_OUTPUT
  FLP_SCREEN_ORDER: FRAUDLABS_PRO_FLP_SCREEN_ORDER_OUTPUT
  GET_ORDER_RESULT: FRAUDLABS_PRO_GET_ORDER_RESULT_OUTPUT
  GET_SMS_VERIFICATION_RESULT: FRAUDLABS_PRO_GET_SMS_VERIFICATION_RESULT_OUTPUT
  SEND_SMS_VERIFICATION: FRAUDLABS_PRO_SEND_SMS_VERIFICATION_OUTPUT
  SUBSCRIBE_PLAN: FRAUDLABS_PRO_SUBSCRIBE_PLAN_OUTPUT
  WEBHOOK_ORDER_STATUS_CHANGED: FRAUDLABS_PRO_WEBHOOK_ORDER_STATUS_CHANGED_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FRAUDLABS_PRO toolkit.
 */
export const FRAUDLABS_PRO = {
  slug: "fraudlabs_pro",
  tools: {
    /**
     * Tool to create a new user account under a reseller. Use after gathering personal and company details.
     */
    CREATE_ACCOUNT: "FRAUDLABS_PRO_CREATE_ACCOUNT",
    /**
     * Tool to submit feedback on a screened order. Use after determining whether a flagged order was approved or rejected to improve future fraud detection.
     */
    FLP_FEEDBACK_ORDER: "FRAUDLABS_PRO_FLP_FEEDBACK_ORDER",
    /**
     * Tool to screen orders for fraud. Use when you need to assess transaction risk before fulfillment.
     */
    FLP_SCREEN_ORDER: "FRAUDLABS_PRO_FLP_SCREEN_ORDER",
    /**
     * Tool to retrieve the fraud analysis result of a previously screened order. Use after initial screening when you need to check an order's risk.
     */
    GET_ORDER_RESULT: "FRAUDLABS_PRO_GET_ORDER_RESULT",
    /**
     * Tool to retrieve SMS verification result. Use after sending an OTP via SMS to confirm validity.
     */
    GET_SMS_VERIFICATION_RESULT: "FRAUDLABS_PRO_GET_SMS_VERIFICATION_RESULT",
    /**
     * Tool to send SMS OTP for phone verification. Use when you need to deliver a one-time password via SMS before verifying user identity.
     */
    SEND_SMS_VERIFICATION: "FRAUDLABS_PRO_SEND_SMS_VERIFICATION",
    /**
     * Tool to subscribe a reseller account to a specific plan. Use after obtaining a reseller API key and selecting a plan. Example: Subscribe user "john_doe" to the MICRO plan.
     */
    SUBSCRIBE_PLAN: "FRAUDLABS_PRO_SUBSCRIBE_PLAN",
    /**
     * Tool to send a test webhook payload to the provided callback URL for FraudLabs Pro order status change notifications. This helps validate your endpoint behavior. Important: FraudLabs Pro webhook registration must be configured manually via dashboard.
     */
    WEBHOOK_ORDER_STATUS_CHANGED: "FRAUDLABS_PRO_WEBHOOK_ORDER_STATUS_CHANGED",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FRAUDLABS_PRO".
 */
export type FRAUDLABS_PRO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FRAUDLABS_PRO".
 */
export type FRAUDLABS_PRO_TRIGGER_EVENTS = {}
