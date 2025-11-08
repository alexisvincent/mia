// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of NEUTRINO's NEUTRINO_BAD_WORD_FILTER tool input.
 */
type NEUTRINO_BAD_WORD_FILTER_INPUT = {
  /**
   * Callback
   * @description Optional JSONP callback function name.
   * @default null
   */
  callback: string | null;
  /**
   * Catalog
   * @description Which catalog of bad words to use.
   * @default strict
   * @enum {string}
   */
  catalog: "strict" | "obscene" | "insult" | "custom";
  /**
   * Catalog Custom
   * @description Custom list of bad words (comma-separated). Requires catalog set to 'custom'.
   * @default null
   */
  "catalog-custom": string | null;
  /**
   * Censor Character
   * @description The character to use for censoring bad words, default is '*'.
   * @default *
   */
  "censor-character": string | null;
  /**
   * Content
   * @description The content to scan (plain text or HTML).
   */
  content?: string;
  /**
   * Language Code
   * @description ISO 639 language code, default is 'en'.
   * @default en
   */
  "language-code": string | null;
};

/**
 * Type of NEUTRINO's NEUTRINO_BAD_WORD_FILTER tool output.
 */
type NEUTRINO_BAD_WORD_FILTER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bad Words List
       * @description List of detected bad words.
       */
      "bad-words-list": string[];
      /**
       * Bad Words Total
       * @description Total number of bad words detected.
       */
      "bad-words-total": number;
      /**
       * Censored Content
       * @description The content with bad words censored.
       */
      "censored-content": string;
      /**
       * Is Bad
       * @description True if bad words found, otherwise False.
       */
      "is-bad": boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEUTRINO's NEUTRINO_BIN_LOOKUP tool input.
 */
type NEUTRINO_BIN_LOOKUP_INPUT = {
  /**
   * Bin Number
   * @description The BIN or IIN number (first 6-8 digits of a card)
   */
  "bin-number"?: unknown;
  /**
   * Customer Ip
   * Format: ipv4
   * @description Customer IP address for extra fraud checks
   * @default null
   */
  "customer-ip": unknown;
  /**
   * Output Case
   * @description Output casing style
   * @default camelCase
   * @enum {string}
   */
  "output-case": "camelCase" | "snake_case";
};

/**
 * Type of NEUTRINO's NEUTRINO_BIN_LOOKUP tool output.
 */
type NEUTRINO_BIN_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bin Number
       * @description The provided BIN number
       */
      "bin-number": string;
      /**
       * Card Brand
       * @description Card brand (e.g., Visa, MasterCard)
       */
      "card-brand": string;
      /**
       * Card Category
       * @description Card category (Classic, Platinum)
       */
      "card-category": string;
      /**
       * Card Type
       * @description Card type (debit, credit)
       */
      "card-type": string;
      /**
       * Country
       * @description 2-letter country code of issuer
       */
      country: string;
      /**
       * Country Name
       * @description Country name of issuer
       */
      "country-name": string;
      /**
       * Currency Code
       * @description Currency code of issuer country
       */
      "currency-code": string;
      /**
       * Ip Matches Bin
       * @description True if customer IP country matches BIN country (only if `customer-ip` provided)
       * @default null
       */
      "ip-matches-bin": boolean | null;
      /**
       * Is Eu
       * @description True if issuer is in the EU
       */
      "is-eu": boolean;
      /**
       * Issuer
       * @description Card issuer name
       */
      issuer: string;
      /**
       * Issuer Code
       * @description Issuer code
       */
      "issuer-code": string;
      /**
       * Issuer Phone
       * @description Issuer phone number
       * @default null
       */
      "issuer-phone": string | null;
      /**
       * Issuer Website
       * @description Issuer website URL
       * @default null
       */
      "issuer-website": string | null;
      /**
       * Valid
       * @description True if the BIN is valid
       */
      valid: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEUTRINO's NEUTRINO_CONVERT tool input.
 */
type NEUTRINO_CONVERT_INPUT = {
  /**
   * From Type
   * @description The unit or currency code of the input value (e.g., 'USD', 'kg', 'mile').
   */
  "from-type"?: string;
  /**
   * From Value
   * @description The numeric value (as a string) to convert from.
   */
  "from-value"?: string;
  /**
   * To Type
   * @description The unit or currency code to convert to (e.g., 'EUR', 'm', 'gram').
   */
  "to-type"?: string;
};

/**
 * Type of NEUTRINO's NEUTRINO_CONVERT tool output.
 */
type NEUTRINO_CONVERT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description The converted numeric value.
       */
      result: number;
      /**
       * Result Formatted
       * @description The converted value formatted as a string.
       */
      "result-formatted": string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEUTRINO's NEUTRINO_EMAIL_VALIDATE tool input.
 */
type NEUTRINO_EMAIL_VALIDATE_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address to validate.
   */
  email?: unknown;
  /**
   * Fix Typos
   * @description Automatically attempt to fix common typos in the email address.
   * @default null
   */
  "fix-typos": boolean | null;
};

/**
 * Type of NEUTRINO's NEUTRINO_EMAIL_VALIDATE tool output.
 */
type NEUTRINO_EMAIL_VALIDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domain
       * @description The domain part of the email address.
       */
      domain: string;
      /**
       * Domain Valid
       * @description True if the email domain is valid.
       */
      "domain-valid": boolean;
      /**
       * Is Blacklisted
       * @description True if suspicious or blacklisted.
       */
      "is-blacklisted": boolean;
      /**
       * Is Business
       * @description True if the email is a business/professional address.
       */
      "is-business": boolean;
      /**
       * Is Catch All
       * @description True if the domain is a catch-all domain.
       */
      "is-catch-all": boolean;
      /**
       * Is Disabled
       * @description True if the email is disabled.
       */
      "is-disabled": boolean;
      /**
       * Is Disposable
       * @description True if the email address is disposable.
       */
      "is-disposable": boolean;
      /**
       * Is Freemail
       * @description True if the domain is a free email provider.
       */
      "is-freemail": boolean;
      /**
       * Is Gibberish
       * @description True if the local part appears random or fake.
       */
      "is-gibberish": boolean;
      /**
       * Is Inbox Full
       * @description True if the inbox is full.
       */
      "is-inbox-full": boolean;
      /**
       * Is Personal
       * @description True if the email is likely personal.
       */
      "is-personal": boolean;
      /**
       * Is Server Down
       * @description True if the email server is down.
       */
      "is-server-down": boolean;
      /**
       * Provider
       * @description The service provider name.
       * @default null
       */
      provider: string | null;
      /**
       * Smtp Response
       * @description Full SMTP response.
       * @default null
       */
      "smtp-response": string | null;
      /**
       * Smtp Status
       * @description SMTP check result.
       * @default null
       */
      "smtp-status": string | null;
      /**
       * Spam Score
       * @description Spam rating from 0 (not spam) to 5 (highly spammy).
       * @default null
       */
      "spam-score": number | null;
      /**
       * Suggested Correction
       * @description Suggested correction if any typos found.
       * @default null
       */
      "suggested-correction": string | null;
      /**
       * Syntax Valid
       * @description True if the email has valid syntax.
       */
      "syntax-valid": boolean;
      /**
       * Valid
       * @description True if the email address is valid.
       */
      valid: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEUTRINO's NEUTRINO_EMAIL_VERIFY tool input.
 */
type NEUTRINO_EMAIL_VERIFY_INPUT = {
  /**
   * Email
   * Format: email
   * @description The email address to verify.
   */
  email?: unknown;
  /**
   * Fast
   * @description For speed over accuracy in verification.
   * @default false
   */
  fast: boolean | null;
  /**
   * Fix Typos
   * @description Automatically attempt to fix typos in the address.
   * @default false
   */
  "fix-typos": boolean | null;
};

/**
 * Type of NEUTRINO's NEUTRINO_EMAIL_VERIFY tool output.
 */
type NEUTRINO_EMAIL_VERIFY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Blacklist
       * @description Is the address or domain blacklisted.
       */
      blacklist: boolean;
      /**
       * Domain
       * @description The email domain.
       */
      domain: string;
      /**
       * Domain Error
       * @description Domain-specific error.
       */
      "domain-error": boolean;
      /**
       * Domain Status
       * @description Status of the email domain (e.g., active, inactive, disposable).
       */
      "domain-status": string;
      /**
       * Is Disposable
       * @description Is this a disposable email address.
       */
      "is-disposable": boolean;
      /**
       * Is Freemail
       * @description Is the address from a free email provider.
       */
      "is-freemail": boolean;
      /**
       * Is Personal
       * @description Is this a personal email address.
       */
      "is-personal": boolean;
      /**
       * Is Role
       * @description Is this a role-based address (e.g., admin@, support@).
       */
      "is-role": boolean;
      /**
       * Last Send Date
       * @description Last send date to address in YYYY-MM-DD format or null.
       * @default null
       */
      "last-send-date": string | null;
      /**
       * Last Send Status
       * @description Status of last send-out (e.g., delivered, bounced, blocked, unknown).
       */
      "last-send-status": string;
      /**
       * Mx Found
       * @description MX records found for the domain.
       */
      "mx-found": boolean;
      /**
       * Provider
       * @description Email service provider domain.
       */
      provider: string;
      /**
       * Smtp Error
       * @description SMTP-level error during verification.
       */
      "smtp-error": boolean;
      /**
       * Smtp Score
       * @description Deliverability score from SMTP tests (0 to 1).
       */
      "smtp-score": number;
      /**
       * Syntax Error
       * @description Syntax error in the address.
       */
      "syntax-error": boolean;
      /**
       * Typos Fixed
       * @description Was a typo fixed in the address.
       */
      "typos-fixed": boolean;
      /**
       * Valid
       * @description Is this a valid email address.
       */
      valid: boolean;
      /**
       * Verified
       * @description Has the address been verified via SMTP.
       */
      verified: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEUTRINO's NEUTRINO_GEOCODE_ADDRESS tool input.
 */
type NEUTRINO_GEOCODE_ADDRESS_INPUT = {
  /**
   * Address
   * @description The full address or place name to geocode
   */
  address?: string;
  /**
   * Country Code
   * @description ISO 2-letter country code to limit results
   * @default null
   */
  "country-code": string | null;
  /**
   * Fuzzy Search
   * @description Enable enhanced matching for misspelled addresses
   * @default false
   */
  "fuzzy-search": boolean;
  /**
   * Language Code
   * @description ISO 2-letter language code for result translation
   * @default null
   */
  "language-code": string | null;
};

/**
 * Type of NEUTRINO's NEUTRINO_GEOCODE_ADDRESS tool output.
 */
type NEUTRINO_GEOCODE_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Found
       * @description Number of results found
       */
      found: number;
      /**
       * Locations
       * @description List of matching location objects
       */
      locations: ({
          /**
           * Address
           * @description Formatted address
           */
          address: string;
          /**
           * City
           * @description City or locality
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country name
           * @default null
           */
          country: string | null;
          /**
           * Country Code
           * @description ISO 2-letter country code
           * @default null
           */
          "country-code": string | null;
          /**
           * Latitude
           * @description Latitude coordinate
           */
          latitude: number;
          /**
           * Longitude
           * @description Longitude coordinate
           */
          longitude: number;
          /**
           * Postal Code
           * @description Postal code
           * @default null
           */
          "postal-code": string | null;
          /**
           * Provider
           * @description Geolocation provider used
           * @default null
           */
          provider: string | null;
          /**
           * State
           * @description State or region
           * @default null
           */
          state: string | null;
      } & {
          [key: string]: unknown;
      })[];
      /**
       * Valid
       * @description True if the address could be geocoded
       */
      valid: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEUTRINO's NEUTRINO_GEOCODE_REVERSE tool input.
 */
type NEUTRINO_GEOCODE_REVERSE_INPUT = {
  /**
   * Country Code
   * @description Filter results by ISO 2-letter country code
   * @default null
   */
  "country-code": string | null;
  /**
   * Language Code
   * @description The language to display results (ISO 639-1 code, default is 'en')
   * @default null
   */
  "language-code": string | null;
  /**
   * Latitude
   * @description The location latitude in decimal degrees format
   */
  latitude?: number;
  /**
   * Longitude
   * @description The location longitude in decimal degrees format
   */
  longitude?: number;
  /**
   * Zoom
   * @description The zoom level for returned address detail (1 to 18, default is 18)
   * @default null
   */
  zoom: number | null;
};

/**
 * Type of NEUTRINO's NEUTRINO_GEOCODE_REVERSE tool output.
 */
type NEUTRINO_GEOCODE_REVERSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Address
       * @description The fully formatted address
       * @default null
       */
      address: string | null;
      /**
       * AddressComponents
       * @description An object breaking down the address into individual components
       * @default null
       */
      "address-components": {
          /**
           * Administrative Area Level 1
           * @description State, region, or province
           * @default null
           */
          "administrative-area-level-1": string | null;
          /**
           * Country
           * @description Country name
           * @default null
           */
          country: string | null;
          /**
           * Locality
           * @description Locality or city
           * @default null
           */
          locality: string | null;
          /**
           * Postal Code
           * @description Postal code
           * @default null
           */
          "postal-code": string | null;
          /**
           * Route
           * @description Street or route name
           * @default null
           */
          route: string | null;
          /**
           * Street Number
           * @description House or building number
           * @default null
           */
          "street-number": string | null;
      } | null;
      /**
       * City
       * @description The city of the geocoded address
       * @default null
       */
      city: string | null;
      /**
       * Country
       * @description The country of the address location
       * @default null
       */
      country: string | null;
      /**
       * Country Code
       * @description The ISO 2-letter country code of the address location
       * @default null
       */
      "country-code": string | null;
      /**
       * Found
       * @description True if at least one matching address was found
       */
      found: boolean;
      /**
       * Latitude
       * @description The resolved latitude
       * @default null
       */
      latitude: number | null;
      /**
       * Location Type
       * @description The detected location type (e.g., 'address', 'city', 'postal-code')
       * @default null
       */
      "location-type": string | null;
      /**
       * Longitude
       * @description The resolved longitude
       * @default null
       */
      longitude: number | null;
      /**
       * Postal Code
       * @description The postal code of the address location
       * @default null
       */
      "postal-code": string | null;
      /**
       * Provider
       * @description The provider used to fetch address information
       * @default null
       */
      provider: string | null;
      /**
       * Region
       * @description The state, region, or province of the address location
       * @default null
       */
      region: string | null;
      /**
       * Street
       * @description The street part of the address location
       * @default null
       */
      street: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEUTRINO's NEUTRINO_HLR_LOOKUP tool input.
 */
type NEUTRINO_HLR_LOOKUP_INPUT = {
  /**
   * Country Code
   * @description ISO 2-letter country code (required if `number` not in international format)
   * @default null
   */
  "country-code": string | null;
  /**
   * Ip
   * Format: ipv4
   * @description User's IP address to fetch extra location data
   */
  ip?: unknown;
  /**
   * Number
   * @description The mobile phone number in full international format, e.g., +447911123456
   */
  number?: string;
};

/**
 * Type of NEUTRINO's NEUTRINO_HLR_LOOKUP tool output.
 */
type NEUTRINO_HLR_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Country
       * @description Full country name.
       */
      country: string;
      /**
       * Country Code
       * @description 2-letter ISO country code.
       */
      "country-code": string;
      /**
       * Error Code
       * @description Error code if lookup failed.
       * @default null
       */
      "error-code": string | null;
      /**
       * Error Message
       * @description Error message if lookup failed.
       * @default null
       */
      "error-message": string | null;
      /**
       * Imsi
       * @description The International Mobile Subscriber Identity.
       */
      imsi: string;
      /**
       * International Number
       * @description Number in full international format.
       */
      "international-number": string;
      /**
       * Is Mobile
       * @description True if the number is a mobile.
       */
      "is-mobile": boolean;
      /**
       * Local Number
       * @description Number in local dialing format.
       */
      "local-number": string;
      /**
       * Location
       * @description Location of the number.
       */
      location: string;
      /**
       * Mcc
       * @description Mobile country code.
       */
      mcc: string;
      /**
       * Mnc
       * @description Mobile network code.
       */
      mnc: string;
      /**
       * Mobile Type
       * @description Mobile type (prepaid or postpaid).
       */
      "mobile-type": string;
      /**
       * Network
       * @description Name of the mobile network.
       */
      network: string;
      /**
       * Number Valid
       * @description True if this a valid phone number.
       */
      "number-valid": boolean;
      /**
       * Ported
       * @description True if the number has been ported to a different network.
       */
      ported: boolean;
      /**
       * Reachable
       * @description Can be 'yes', 'no', or 'unknown'. Number reachability.
       */
      reachable: string;
      /**
       * Roaming
       * @description True if the number is currently roaming.
       */
      roaming: boolean;
      /**
       * Status
       * @description HLR status message.
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
 * Type of NEUTRINO's NEUTRINO_HOST_REPUTATION tool input.
 */
type NEUTRINO_HOST_REPUTATION_INPUT = {
  /**
   * Host
   * @description The IP address, domain name, or URL to check.
   */
  host?: string;
  /**
   * List Rating
   * @description The minimum DNSBL rating level to include in results (integer).
   * @default null
   */
  "list-rating": number | null;
  /**
   * Zones
   * @description Comma-separated list of DNSBL zones to check. If omitted all relevant zones are checked.
   * @default null
   */
  zones: string | null;
};

/**
 * Type of NEUTRINO's NEUTRINO_HOST_REPUTATION tool output.
 */
type NEUTRINO_HOST_REPUTATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Host
       * @description The host that was checked.
       */
      host: string;
      /**
       * Is Listed
       * @description True if the host is listed in any DNSBL.
       */
      "is-listed": boolean;
      /**
       * List Count
       * @description Total number of DNSBLs the host is listed in.
       */
      "list-count": number;
      /**
       * Lists
       * @description List of DNSBL details for the host.
       */
      lists: {
          /**
           * Is Listed
           * @description If the host is listed in this zone.
           */
          "is-listed": boolean;
          /**
           * List Host
           * @description The DNSBL zone host.
           */
          "list-host": string;
          /**
           * List Name
           * @description The DNSBL zone name.
           */
          "list-name": string;
          /**
           * List Rating
           * @description DNSBL rating (integer).
           */
          "list-rating": number;
          /**
           * Response Time
           * @description Response time in milliseconds.
           */
          "response-time": number;
          /**
           * Return Code
           * @description Return code from DNSBL lookup.
           */
          "return-code": string;
          /**
           * Txt Record
           * @description Returned TXT record if any.
           */
          "txt-record": string;
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
 * Type of NEUTRINO's NEUTRINO_HTML_CLEAN tool input.
 */
type NEUTRINO_HTML_CLEAN_INPUT = {
  /**
   * Clean Level
   * @description The level of cleaning to apply. 'basic', 'relaxed', or 'custom'.
   * @default basic
   * @enum {string}
   */
  "clean-level": "basic" | "relaxed" | "custom";
  /**
   * Content
   * @description The HTML content to clean.
   */
  content?: string;
  /**
   * Output Type
   * @description The output format. 'plain-text' for text-only output, 'html' for sanitized HTML.
   * @default html
   * @enum {string}
   */
  "output-type": "plain-text" | "html";
  /**
   * Strip Attributes
   * @description Comma-separated list of HTML attributes to remove (e.g. 'style,onload').
   * @default null
   */
  "strip-attributes": string | null;
  /**
   * Strip Tags
   * @description Comma-separated list of HTML tags to strip entirely (e.g. 'script,iframe').
   * @default null
   */
  "strip-tags": string | null;
};

/**
 * Type of NEUTRINO's NEUTRINO_HTML_CLEAN tool output.
 */
type NEUTRINO_HTML_CLEAN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Clean Html
       * @description The cleaned and sanitized HTML content.
       */
      "clean-html": string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEUTRINO's NEUTRINO_HTML_RENDER tool input.
 */
type NEUTRINO_HTML_RENDER_INPUT = {
  /**
   * Content
   * @description The HTML content to render.
   */
  content?: string;
  /**
   * Delay
   * @description Delay in seconds before rendering (useful for pages with JavaScript).
   * @default null
   */
  delay: number | null;
  /**
   * Format
   * @description Set to 'base64' to return the file as a base64-encoded string instead of binary.
   * @default null
   * @constant
   */
  format: "base64";
  /**
   * Image Height
   * @description Image height in pixels for PNG output, overrides page-height.
   * @default null
   */
  "image-height": number | null;
  /**
   * Image Width
   * @description Image width in pixels for PNG output, overrides page-width.
   * @default null
   */
  "image-width": number | null;
  /**
   * Output Type
   * @description The output format, either 'png' or 'pdf'. Default is 'png'.
   * @default png
   * @enum {string}
   */
  "output-type": "png" | "pdf";
  /**
   * Page Height
   * @description Page height in pixels for the output PDF or image. Ignored if image-height is set.
   * @default null
   */
  "page-height": number | null;
  /**
   * Page Width
   * @description Page width in pixels for the output PDF or image. Ignored if image-width is set.
   * @default null
   */
  "page-width": number | null;
  /**
   * User Agent
   * @description Custom User-Agent header for HTTP rendering.
   * @default null
   */
  "user-agent": string | null;
};

/**
 * Type of NEUTRINO's NEUTRINO_HTML_RENDER tool output.
 */
type NEUTRINO_HTML_RENDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content Type
       * @description The MIME type of the rendered output.
       */
      "content-type": string;
      /**
       * File
       * Format: binary
       * @description The rendered file content. Bytes for binary output or base64 string if format='base64'.
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
 * Type of NEUTRINO's NEUTRINO_IMAGE_RESIZE tool input.
 */
type NEUTRINO_IMAGE_RESIZE_INPUT = {
  /**
   * Bgcolor
   * @description Background color as hex (e.g. '#ffffff') when padding is needed.
   * @default null
   */
  bgcolor: string | null;
  /**
   * Fit
   * @description Fit method: 'scale' to fit or 'crop' to fill the dimensions.
   * @default scale
   * @enum {string|null}
   */
  fit: "scale" | "crop" | null;
  /**
   * Format
   * @description Output image format. One of png, jpg, webp, gif. Defaults to source format.
   * @default null
   * @enum {string|null}
   */
  format: "png" | "jpg" | "webp" | "gif" | null;
  /**
   * Height
   * @description Desired output height in pixels (1-5000).
   */
  height?: number;
  /**
   * Image
   * Format: binary
   * @description Raw image file bytes (max 10 MB). Required if not providing image-url.
   * @default null
   */
  image: string | null;
  /**
   * Image Url
   * @description HTTP or HTTPS URL to the source image (max 10 MB).
   * @default null
   */
  "image-url": string | null;
  /**
   * Width
   * @description Desired output width in pixels (1-5000).
   */
  width?: number;
};

/**
 * Type of NEUTRINO's NEUTRINO_IMAGE_RESIZE tool output.
 */
type NEUTRINO_IMAGE_RESIZE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * Format: binary
       * @description The resized image binary data in the requested format.
       */
      file: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEUTRINO's NEUTRINO_IP_INFO tool input.
 */
type NEUTRINO_IP_INFO_INPUT = {
  /**
   * Ip
   * Format: ipvanyaddress
   * @description IPv4 or IPv6 address to look up
   */
  ip?: string;
  /**
   * Reverse Lookup
   * @description Perform a reverse DNS (PTR) lookup
   * @default false
   */
  "reverse-lookup": boolean;
  /**
   * User Agent
   * @description User-Agent string for device and browser details
   * @default null
   */
  "user-agent": string | null;
  /**
   * Vpn Lookup
   * @description Perform VPN and proxy detection
   * @default false
   */
  "vpn-lookup": boolean;
};

/**
 * Type of NEUTRINO's NEUTRINO_IP_INFO tool output.
 */
type NEUTRINO_IP_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * As Name
       * @description Autonomous System Name (ASN owner)
       * @default null
       */
      "as-name": string | null;
      /**
       * As Number
       * @description Autonomous System Number (ASN)
       * @default null
       */
      "as-number": number | null;
      /**
       * City
       * @description City name if available
       * @default null
       */
      city: string | null;
      /**
       * Continent
       * @description Continent name
       * @default null
       */
      continent: string | null;
      /**
       * Continent Code
       * @description Continent code
       * @default null
       */
      "continent-code": string | null;
      /**
       * Country
       * @description Full country name
       * @default null
       */
      country: string | null;
      /**
       * Country Calling Code
       * @description International calling code
       * @default null
       */
      "country-calling-code": string | null;
      /**
       * Country Code
       * @description ISO 2-letter country code
       * @default null
       */
      "country-code": string | null;
      /**
       * Country Code3
       * @description ISO 3-letter country code
       * @default null
       */
      "country-code3": string | null;
      /**
       * Currency Code
       * @description ISO currency code
       * @default null
       */
      "currency-code": string | null;
      /**
       * Hostname
       * @description Hostname if reverse lookup requested and available
       * @default null
       */
      hostname: string | null;
      /**
       * Is Eu
       * @description True if the country is in the EU
       * @default null
       */
      "is-eu": boolean | null;
      /**
       * Is Icloud Relay
       * @description True if IP is from Apple iCloud Private Relay
       * @default null
       */
      "is-icloud-relay": boolean | null;
      /**
       * Is Proxy
       * @description True if IP is a proxy
       * @default null
       */
      "is-proxy": boolean | null;
      /**
       * Is Tor
       * @description True if IP is from the Tor network
       * @default null
       */
      "is-tor": boolean | null;
      /**
       * Is Vpn
       * @description True if IP is part of a VPN or proxy
       * @default null
       */
      "is-vpn": boolean | null;
      /**
       * Isp
       * @description ISP or organization name
       * @default null
       */
      isp: string | null;
      /**
       * Latitude
       * @description Latitude coordinate if available
       * @default null
       */
      latitude: number | null;
      /**
       * Longitude
       * @description Longitude coordinate if available
       * @default null
       */
      longitude: number | null;
      /**
       * Organization
       * @description Organization name
       * @default null
       */
      organization: string | null;
      /**
       * Postal Code
       * @description Postal or ZIP code if available
       * @default null
       */
      "postal-code": string | null;
      /**
       * Region
       * @description Full region or state name
       * @default null
       */
      region: string | null;
      /**
       * Region Code
       * @description ISO region code
       * @default null
       */
      "region-code": string | null;
      /**
       * Timezone
       * @description Timezone ID
       * @default null
       */
      timezone: string | null;
      /**
       * User Agent Details
       * @description Decoded device, browser, and OS details from the user-agent
       * @default null
       */
      "user-agent-details": {
          [key: string]: string;
      } | null;
      /**
       * Utc Offset
       * @description UTC offset
       * @default null
       */
      "utc-offset": string | null;
      /**
       * Valid
       * @description True if this is a valid IP address
       */
      valid: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEUTRINO's NEUTRINO_IP_LOOKUP tool input.
 */
type NEUTRINO_IP_LOOKUP_INPUT = {
  /**
   * Ip
   * @description The IP address to lookup (IPv4 or IPv6).
   */
  ip?: string;
  /**
   * Reverse Lookup
   * @description Perform a reverse DNS (PTR) lookup. Default is false.
   * @default false
   */
  "reverse-lookup": boolean | null;
};

/**
 * Type of NEUTRINO's NEUTRINO_IP_LOOKUP tool output.
 */
type NEUTRINO_IP_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asn
       * @description Autonomous System Number.
       * @default null
       */
      asn: number | null;
      /**
       * Asn Org
       * @description Organization owning the ASN.
       * @default null
       */
      "asn-org": string | null;
      /**
       * City
       * @description City name.
       */
      city: string;
      /**
       * Connection Type
       * @description Connection type (fixed-line, mobile, hosting).
       * @default null
       */
      "connection-type": string | null;
      /**
       * Country
       * @description Full country name.
       */
      country: string;
      /**
       * Country Capital
       * @description Capital city of the country.
       */
      "country-capital": string;
      /**
       * Country Code
       * @description ISO 2-letter country code.
       */
      "country-code": string;
      /**
       * Country Code Iso
       * @description ISO 3166-1 numeric country code.
       */
      "country-code-iso": string;
      /**
       * Country Code3
       * @description ISO 3-letter country code.
       */
      "country-code3": string;
      /**
       * Country Tld
       * @description Country top-level domain.
       */
      "country-tld": string;
      /**
       * Host Domain
       * @description Host domain name (if reverse lookup enabled).
       * @default null
       */
      "host-domain": string | null;
      /**
       * Host Domain Fqdn
       * @description Fully qualified domain name.
       * @default null
       */
      "host-domain-fqdn": string | null;
      /**
       * Host Domain Root
       * @description Root domain if available.
       * @default null
       */
      "host-domain-root": string | null;
      /**
       * Hosting
       * @description True if the IP is identified as a hosting provider.
       */
      hosting: boolean;
      /**
       * Hostname
       * @description Detected hostname (if available).
       * @default null
       */
      hostname: string | null;
      /**
       * Latitude
       * @description Latitude coordinate.
       */
      latitude: number;
      /**
       * Longitude
       * @description Longitude coordinate.
       */
      longitude: number;
      /**
       * Mobile
       * @description True if the IP is identified as mobile.
       */
      mobile: boolean;
      /**
       * Postal Code
       * @description Postal code.
       */
      "postal-code": string;
      /**
       * Provider Type
       * @description Connection provider type.
       * @default null
       */
      "provider-type": string | null;
      /**
       * Proxy
       * @description True if the IP is identified as a proxy.
       */
      proxy: boolean;
      /**
       * Region
       * @description Full region name (state, province).
       */
      region: string;
      /**
       * Region Code
       * @description ISO 3166-2 region code.
       */
      "region-code": string;
      /**
       * Threat Level
       * @description Threat level (low, medium, high).
       * @default null
       */
      "threat-level": string | null;
      /**
       * Threat Types
       * @description List of threat types identified.
       * @default null
       */
      "threat-types": string[] | null;
      /**
       * Tor
       * @description True if the IP is identified as a TOR exit node.
       */
      tor: boolean;
      /**
       * User Agent
       * @description Detected user agent (if any).
       * @default null
       */
      "user-agent": string | null;
      /**
       * User Type
       * @description Detected user type (residential, business, etc).
       * @default null
       */
      "user-type": string | null;
      /**
       * Valid
       * @description True if this is a valid IPv4 or IPv6 address.
       */
      valid: boolean;
      /**
       * Vpn
       * @description True if the IP is identified as a VPN.
       */
      vpn: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEUTRINO's NEUTRINO_IP_PROBE tool input.
 */
type NEUTRINO_IP_PROBE_INPUT = {
  /**
   * Forward Lookup
   * @description For domains, perform a DNS A record lookup
   * @default false
   */
  "forward-lookup": boolean;
  /**
   * Ip
   * @description The IPv4 or IPv6 address to analyze
   */
  ip?: string;
  /**
   * Reverse Lookup
   * @description Perform a reverse DNS lookup to get hostname
   * @default false
   */
  "reverse-lookup": boolean;
  /**
   * User Agent
   * @description User-Agent string for device and browser detection
   * @default null
   */
  "user-agent": string | null;
};

/**
 * Type of NEUTRINO's NEUTRINO_IP_PROBE tool output.
 */
type NEUTRINO_IP_PROBE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Asn
       * @description Autonomous System Number
       */
      asn: number;
      /**
       * Asn Name
       * @description ASN organization name
       */
      "asn-name": string;
      /**
       * City
       * @description City name
       */
      city: string;
      /**
       * Continent
       * @description Continent name
       */
      continent: string;
      /**
       * Continent Code
       * @description Continent code
       */
      "continent-code": string;
      /**
       * Country
       * @description Full country name
       */
      country: string;
      /**
       * Country Capital
       * @description Capital city of the country
       */
      "country-capital": string;
      /**
       * Country Code
       * @description ISO 2-letter country code
       */
      "country-code": string;
      /**
       * Country Code3
       * @description ISO 3-letter country code
       */
      "country-code3": string;
      /**
       * Country Tld
       * @description Country top-level domain
       */
      "country-tld": string;
      /**
       * Currency Code
       * @description Currency code
       */
      "currency-code": string;
      /**
       * Currency Name
       * @description Currency name
       */
      "currency-name": string;
      /**
       * Eu Member
       * @description True if country is a member of the EU
       */
      "eu-member": boolean;
      /**
       * Geo Currency Code
       * @description Local currency code
       */
      "geo-currency-code": string;
      /**
       * Geo Currency Name
       * @description Local currency name
       */
      "geo-currency-name": string;
      /**
       * Hostname
       * @description Hostname via reverse DNS (if lookup enabled)
       * @default null
       */
      hostname: string | null;
      /**
       * Ip
       * @description The analyzed IP address
       */
      ip: string;
      /**
       * Is Hosting
       * @description True if the IP is from a hosting provider
       */
      "is-hosting": boolean;
      /**
       * Is Icloud Relay
       * @description True if Apple iCloud Private Relay is detected
       */
      "is-icloud-relay": boolean;
      /**
       * Is Proxy
       * @description True if a proxy is detected
       */
      "is-proxy": boolean;
      /**
       * Is Tor
       * @description True if the IP is part of the TOR network
       */
      "is-tor": boolean;
      /**
       * Is Vpn
       * @description True if a VPN service is detected
       */
      "is-vpn": boolean;
      /**
       * Latitude
       * @description Latitude coordinate
       */
      latitude: number;
      /**
       * Longitude
       * @description Longitude coordinate
       */
      longitude: number;
      /**
       * Metro Code
       * @description Metro code if available
       */
      "metro-code": string;
      /**
       * Organization
       * @description Organization name associated with the IP
       */
      organization: string;
      /**
       * Postal Code
       * @description Postal or ZIP code
       */
      "postal-code": string;
      /**
       * Provider
       * @description Name of the ISP or provider
       */
      provider: string;
      /**
       * Provider Type
       * @description Type of internet provider
       */
      "provider-type": string;
      /**
       * Region
       * @description Region/state/province name
       */
      region: string;
      /**
       * Region Code
       * @description Region code
       */
      "region-code": string;
      /**
       * Timezone
       * @description The timezone of the IP location
       */
      timezone: string;
      /**
       * Valid
       * @description True if the IP address is valid
       */
      valid: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEUTRINO's NEUTRINO_PHONE_VALIDATE tool input.
 */
type NEUTRINO_PHONE_VALIDATE_INPUT = {
  /**
   * Country Code
   * @description ISO 2-letter country code (required if number not in international format).
   * @default null
   */
  "country-code": string | null;
  /**
   * Ip
   * Format: ipv4
   * @description User's IP address to help with number location.
   */
  ip?: unknown;
  /**
   * Number
   * @description The phone number to validate in international format.
   */
  number?: string;
};

/**
 * Type of NEUTRINO's NEUTRINO_PHONE_VALIDATE tool output.
 */
type NEUTRINO_PHONE_VALIDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Carrier
       * @description Carrier name.
       */
      carrier: string;
      /**
       * Country
       * @description Country name.
       */
      country: string;
      /**
       * Country Code
       * @description ISO 2-letter country code.
       */
      "country-code": string;
      /**
       * Country Code 3
       * @description ISO 3-letter country code.
       */
      "country-code-3": string;
      /**
       * Country Prefix
       * @description Country dialing prefix.
       */
      "country-prefix": string;
      /**
       * Currency Code
       * @description ISO 3-letter currency code.
       */
      "currency-code": string;
      /**
       * E164
       * @description Number in E.164 format.
       */
      e164: string;
      /**
       * Hz
       * @description True if the number is a HLR lookup.
       */
      hz: boolean;
      /**
       * Imsi
       * @description International Mobile Subscriber Identity, if available.
       * @default null
       */
      imsi: string | null;
      /**
       * International Calling Code
       * @description International calling code.
       */
      "international-calling-code": string;
      /**
       * International Number
       * @description Number in international format.
       */
      "international-number": string;
      /**
       * Local Number
       * @description Number in local format.
       */
      "local-number": string;
      /**
       * Location
       * @description Location or city.
       */
      location: string;
      /**
       * Mcc
       * @description Mobile country code, if available.
       * @default null
       */
      mcc: string | null;
      /**
       * Mnc
       * @description Mobile network code, if available.
       * @default null
       */
      mnc: string | null;
      /**
       * National Number
       * @description National significant number.
       */
      "national-number": string;
      /**
       * Ported
       * @description True if the number has been ported between networks.
       */
      ported: boolean;
      /**
       * Region
       * @description Region of the phone number.
       */
      region: string;
      /**
       * Time Zones
       * @description List of timezone(s) for the number's location.
       */
      "time-zones": string[];
      /**
       * Type
       * @description Phone number type (mobile, fixed-line, etc.).
       */
      type: string;
      /**
       * Valid
       * @description True if the phone number is valid.
       */
      valid: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEUTRINO's NEUTRINO_QR_CODE tool input.
 */
type NEUTRINO_QR_CODE_INPUT = {
  /**
   * Bg Color
   * @description Hex color for background; default is #FFFFFF
   * @default #FFFFFF
   */
  "bg-color": string;
  /**
   * Content
   * @description The content (text or URL) to encode
   */
  content?: string;
  /**
   * Error Correction
   * @description Error correction level L, M, Q, or H; default is M
   * @default M
   * @enum {string}
   */
  "error-correction": "L" | "M" | "Q" | "H";
  /**
   * Fg Color
   * @description Hex color for foreground; default is #000000
   * @default #000000
   */
  "fg-color": string;
  /**
   * Format
   * @description Output image format: png or jpg; default is png
   * @default png
   * @enum {string}
   */
  format: "png" | "jpg";
  /**
   * Logo Url
   * Format: uri
   * @description URL of an image to embed at center
   * @default null
   */
  "logo-url": string | null;
  /**
   * Size
   * @description Width and height in pixels (square); default is 256, max 2048
   * @default 256
   */
  size: number | null;
  /**
   * Style
   * @description QR code style; default is normal
   * @default normal
   * @enum {string}
   */
  style: "normal" | "rounded" | "dots";
};

/**
 * Type of NEUTRINO's NEUTRINO_QR_CODE tool output.
 */
type NEUTRINO_QR_CODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File
       * Format: binary
       * @description The generated QR code image as binary data.
       */
      file: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEUTRINO's NEUTRINO_SMS_VERIFY tool input.
 */
type NEUTRINO_SMS_VERIFY_INPUT = {
  /**
   * Brand Name
   * @description Your brand name to display in the SMS (up to 30 characters).
   * @default null
   */
  "brand-name": string | null;
  /**
   * Code Length
   * @description The number of digits in the security code (4–12). Default is 5.
   * @default 5
   */
  "code-length": number | null;
  /**
   * Code Validity
   * @description How long the code is valid for in minutes (1–1440). Default is 60.
   * @default 60
   */
  "code-validity": number | null;
  /**
   * Country Code
   * @description Country dialing code if number is in local format, e.g. '44' for the U.K.'
   * @default null
   */
  "country-code": string | null;
  /**
   * Ip
   * @description The user's IP address, used for enhanced verification checks.
   * @default null
   */
  ip: string | null;
  /**
   * Language Code
   * @description ISO 639 language code for the SMS message. Default is 'en'.
   * @default en
   */
  "language-code": string | null;
  /**
   * Number
   * @description The phone number to send the verification code to, in international format (E.164).
   */
  number?: string;
  /**
   * Security Code
   * @description Pass in your own numeric security code. Must only contain digits and match the length given by code-length.
   * @default null
   */
  "security-code": string | null;
};

/**
 * Type of NEUTRINO's NEUTRINO_SMS_VERIFY tool output.
 */
type NEUTRINO_SMS_VERIFY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Number Valid
       * @description True if the phone number is valid.
       */
      "number-valid": boolean;
      /**
       * Security Code
       * @description The actual security code sent in the SMS.
       */
      "security-code": string;
      /**
       * Sms Id
       * @description A unique ID for this SMS verification request.
       */
      "sms-id": string;
      /**
       * Status
       * @description Delivery status. 'ok' if sent successfully.
       */
      status: string;
      /**
       * Status Message
       * @description A human-readable status message.
       */
      "status-message": string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEUTRINO's NEUTRINO_UA_LOOKUP tool input.
 */
type NEUTRINO_UA_LOOKUP_INPUT = {
  /**
   * Client Hints
   * @description Full set of User-Agent Client Hints HTTP headers as comma-separated string.
   * @default null
   */
  "client-hints": string | null;
  /**
   * Ua
   * @description The user-agent string to look up.
   */
  ua?: string;
};

/**
 * Type of NEUTRINO's NEUTRINO_UA_LOOKUP tool output.
 */
type NEUTRINO_UA_LOOKUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bot
       * @description True if a known bot/crawler.
       */
      bot: boolean;
      /**
       * Bot Name
       * @description Name of detected bot/crawler.
       * @default null
       */
      "bot-name": string | null;
      /**
       * Browser Engine
       * @description Browser engine.
       * @default null
       */
      "browser-engine": string | null;
      /**
       * Browser Engine Version
       * @description Engine version.
       * @default null
       */
      "browser-engine-version": string | null;
      /**
       * Browser Name
       * @description Browser name.
       * @default null
       */
      "browser-name": string | null;
      /**
       * Browser Version
       * @description Browser version.
       * @default null
       */
      "browser-version": string | null;
      /**
       * Device Brand
       * @description Brand of the device.
       * @default null
       */
      "device-brand": string | null;
      /**
       * Device Imei
       * @description Detected IMEI, if available.
       * @default null
       */
      "device-imei": string | null;
      /**
       * Device Model
       * @description Device model name/number.
       * @default null
       */
      "device-model": string | null;
      /**
       * Device Name
       * @description Device name.
       * @default null
       */
      "device-name": string | null;
      /**
       * Device Type
       * @description Device type, e.g., 'phone', 'tablet'.
       * @default null
       */
      "device-type": string | null;
      /**
       * Mobile Device
       * @description True if a mobile device.
       */
      "mobile-device": boolean;
      /**
       * Os Family
       * @description Operating system family name.
       * @default null
       */
      "os-family": string | null;
      /**
       * Os Name
       * @description Operating system name.
       * @default null
       */
      "os-name": string | null;
      /**
       * Os Platform
       * @description Operating system platform.
       * @default null
       */
      "os-platform": string | null;
      /**
       * Os Version
       * @description OS version.
       * @default null
       */
      "os-version": string | null;
      /**
       * Raw
       * @description Raw parsed data.
       * @default null
       */
      raw: {
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
 * Type of NEUTRINO's NEUTRINO_URL_INFO tool input.
 */
type NEUTRINO_URL_INFO_INPUT = {
  /**
   * Fetch Content
   * @description If true, fetch and return the full content of the URL
   * @default false
   */
  "fetch-content": boolean;
  /**
   * Url
   * @description The URL to analyze
   */
  url?: string;
};

/**
 * Type of NEUTRINO's NEUTRINO_URL_INFO tool output.
 */
type NEUTRINO_URL_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Full page content if fetch-content was enabled
       * @default null
       */
      content: string | null;
      /**
       * Has Www
       * @description True if the hostname starts with 'www'
       */
      "has-www": boolean;
      /**
       * Host
       * @description The URL's hostname
       */
      host: string;
      /**
       * Is Entire Domain
       * @description True if this URL is a root domain without a path
       */
      "is-entire-domain": boolean;
      /**
       * Is Ip Address
       * @description True if the host is an IP address
       */
      "is-ip-address": boolean;
      /**
       * Is Secure
       * @description True if the URL uses HTTPS
       */
      "is-secure": boolean;
      /**
       * Is Webpage
       * @description True if the URL points to a standard web page
       */
      "is-webpage": boolean;
      /**
       * Second Level Domain
       * @description The second-level domain (SLD)
       * @default null
       */
      "second-level-domain": string | null;
      /**
       * Server City
       * @description Server's city
       * @default null
       */
      "server-city": string | null;
      /**
       * Server Country
       * @description Server's country name
       * @default null
       */
      "server-country": string | null;
      /**
       * Server Country Code
       * @description Server's 2-letter ISO country code
       * @default null
       */
      "server-country-code": string | null;
      /**
       * Server Hostname
       * @description Server's reverse DNS hostname
       * @default null
       */
      "server-hostname": string | null;
      /**
       * Server Ip
       * @description The resolved server IP address
       * @default null
       */
      "server-ip": string | null;
      /**
       * Server Region
       * @description Server's region/state
       * @default null
       */
      "server-region": string | null;
      /**
       * Top Level Domain
       * @description The domain's top-level domain (TLD)
       * @default null
       */
      "top-level-domain": string | null;
      /**
       * Url
       * @description The full URL analyzed
       */
      url: string;
      /**
       * Valid
       * @description True if the URL is valid
       */
      valid: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of NEUTRINO's NEUTRINO_VERIFY_SECURITY_CODE tool input.
 */
type NEUTRINO_VERIFY_SECURITY_CODE_INPUT = {
  /**
   * Code Id
   * @description The unique ID returned by the Generate Security Code API.
   */
  "code-id"?: string;
  /**
   * Ip
   * @description Remote IP address to help prevent brute-force attacks.
   * @default null
   */
  ip: string | null;
  /**
   * Security Code
   * @description The security code to verify.
   */
  "security-code"?: string;
};

/**
 * Type of NEUTRINO's NEUTRINO_VERIFY_SECURITY_CODE tool output.
 */
type NEUTRINO_VERIFY_SECURITY_CODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Api Error
       * @description True if an API error occurred during verification.
       */
      "api-error": boolean;
      /**
       * Code Id
       * @description The unique ID for this security code.
       */
      "code-id": string;
      /**
       * Executable Check
       * @description True if security checks pass.
       */
      "executable-check": boolean;
      /**
       * Security Code
       * @description The code received.
       */
      "security-code": string;
      /**
       * Timed Out
       * @description True if the code has expired.
       */
      "timed-out": boolean;
      /**
       * Verified
       * @description True if the code is valid and verified.
       */
      verified: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "NEUTRINO".
 */
export type NEUTRINO_TOOL_INPUTS = {
  BAD_WORD_FILTER: NEUTRINO_BAD_WORD_FILTER_INPUT
  BIN_LOOKUP: NEUTRINO_BIN_LOOKUP_INPUT
  CONVERT: NEUTRINO_CONVERT_INPUT
  EMAIL_VALIDATE: NEUTRINO_EMAIL_VALIDATE_INPUT
  EMAIL_VERIFY: NEUTRINO_EMAIL_VERIFY_INPUT
  GEOCODE_ADDRESS: NEUTRINO_GEOCODE_ADDRESS_INPUT
  GEOCODE_REVERSE: NEUTRINO_GEOCODE_REVERSE_INPUT
  HLR_LOOKUP: NEUTRINO_HLR_LOOKUP_INPUT
  HOST_REPUTATION: NEUTRINO_HOST_REPUTATION_INPUT
  HTML_CLEAN: NEUTRINO_HTML_CLEAN_INPUT
  HTML_RENDER: NEUTRINO_HTML_RENDER_INPUT
  IMAGE_RESIZE: NEUTRINO_IMAGE_RESIZE_INPUT
  IP_INFO: NEUTRINO_IP_INFO_INPUT
  IP_LOOKUP: NEUTRINO_IP_LOOKUP_INPUT
  IP_PROBE: NEUTRINO_IP_PROBE_INPUT
  PHONE_VALIDATE: NEUTRINO_PHONE_VALIDATE_INPUT
  QR_CODE: NEUTRINO_QR_CODE_INPUT
  SMS_VERIFY: NEUTRINO_SMS_VERIFY_INPUT
  UA_LOOKUP: NEUTRINO_UA_LOOKUP_INPUT
  URL_INFO: NEUTRINO_URL_INFO_INPUT
  VERIFY_SECURITY_CODE: NEUTRINO_VERIFY_SECURITY_CODE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "NEUTRINO".
 */
export type NEUTRINO_TOOL_OUTPUTS = {
  BAD_WORD_FILTER: NEUTRINO_BAD_WORD_FILTER_OUTPUT
  BIN_LOOKUP: NEUTRINO_BIN_LOOKUP_OUTPUT
  CONVERT: NEUTRINO_CONVERT_OUTPUT
  EMAIL_VALIDATE: NEUTRINO_EMAIL_VALIDATE_OUTPUT
  EMAIL_VERIFY: NEUTRINO_EMAIL_VERIFY_OUTPUT
  GEOCODE_ADDRESS: NEUTRINO_GEOCODE_ADDRESS_OUTPUT
  GEOCODE_REVERSE: NEUTRINO_GEOCODE_REVERSE_OUTPUT
  HLR_LOOKUP: NEUTRINO_HLR_LOOKUP_OUTPUT
  HOST_REPUTATION: NEUTRINO_HOST_REPUTATION_OUTPUT
  HTML_CLEAN: NEUTRINO_HTML_CLEAN_OUTPUT
  HTML_RENDER: NEUTRINO_HTML_RENDER_OUTPUT
  IMAGE_RESIZE: NEUTRINO_IMAGE_RESIZE_OUTPUT
  IP_INFO: NEUTRINO_IP_INFO_OUTPUT
  IP_LOOKUP: NEUTRINO_IP_LOOKUP_OUTPUT
  IP_PROBE: NEUTRINO_IP_PROBE_OUTPUT
  PHONE_VALIDATE: NEUTRINO_PHONE_VALIDATE_OUTPUT
  QR_CODE: NEUTRINO_QR_CODE_OUTPUT
  SMS_VERIFY: NEUTRINO_SMS_VERIFY_OUTPUT
  UA_LOOKUP: NEUTRINO_UA_LOOKUP_OUTPUT
  URL_INFO: NEUTRINO_URL_INFO_OUTPUT
  VERIFY_SECURITY_CODE: NEUTRINO_VERIFY_SECURITY_CODE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's NEUTRINO toolkit.
 */
export const NEUTRINO = {
  slug: "neutrino",
  tools: {
    /**
     * Tool to detect bad words and profanity in text. use when scanning content for swear words.
     */
    BAD_WORD_FILTER: "NEUTRINO_BAD_WORD_FILTER",
    /**
     * Tool to perform a bin (bank iin) lookup. use when you need card details for a bin prefix.
     */
    BIN_LOOKUP: "NEUTRINO_BIN_LOOKUP",
    /**
     * Tool to perform unit and currency conversions. use when you need to convert a value from one unit or currency to another. example: convert 100 usd to eur.
     */
    CONVERT: "NEUTRINO_CONVERT",
    /**
     * Tool to parse, validate, and clean an email address. use after gathering the email to ensure deliverability and correct typos.
     */
    EMAIL_VALIDATE: "NEUTRINO_EMAIL_VALIDATE",
    /**
     * Tool to verify and analyze the deliverability of an email address. use when you need smtp-based validation before sending emails.
     */
    EMAIL_VERIFY: "NEUTRINO_EMAIL_VERIFY",
    /**
     * Tool to geocode an address. use when you need geographic coordinates for an address or place name.
     */
    GEOCODE_ADDRESS: "NEUTRINO_GEOCODE_ADDRESS",
    /**
     * Tool to convert geographic coordinates to a physical address. use when you have latitude and longitude and need a real-world address.
     */
    GEOCODE_REVERSE: "NEUTRINO_GEOCODE_REVERSE",
    /**
     * Tool to perform real-time hlr lookup and mobile number validation. use after confirming the number format to retrieve network, reachability, and roaming status.
     */
    HLR_LOOKUP: "NEUTRINO_HLR_LOOKUP",
    /**
     * Tool to check the reputation of a host against dnsbls.
     */
    HOST_REPUTATION: "NEUTRINO_HOST_REPUTATION",
    /**
     * Tool to clean and sanitize untrusted html. use when you need to strip or neutralize unwanted tags and attributes before rendering.
     */
    HTML_CLEAN: "NEUTRINO_HTML_CLEAN",
    /**
     * Tool to render html content into png or pdf. use when you need to convert html snippets or pages into downloadable files.
     */
    HTML_RENDER: "NEUTRINO_HTML_RENDER",
    /**
     * Tool to resize, crop, and convert images. use when you need to adjust an image to specific dimensions and format before further processing.
     */
    IMAGE_RESIZE: "NEUTRINO_IMAGE_RESIZE",
    /**
     * Tool to retrieve ip location and network information. use when you need to look up geographic data, isp, vpn/proxy status, and hostnames for an ip address.
     */
    IP_INFO: "NEUTRINO_IP_INFO",
    /**
     * Tool to geolocate an ip address and retrieve isp, asn, blocklist, and threat metadata. use when you need to enrich an ipv4 or ipv6 address with geolocation and security details.
     */
    IP_LOOKUP: "NEUTRINO_IP_LOOKUP",
    /**
     * Tool to analyze an ip address to determine its threat level and associated risk factors. use when you need to assess ip address security context.
     */
    IP_PROBE: "NEUTRINO_IP_PROBE",
    /**
     * Tool to validate and lookup phone numbers. use when you need to confirm number format and fetch location, carrier, and type details.
     */
    PHONE_VALIDATE: "NEUTRINO_PHONE_VALIDATE",
    /**
     * Tool to generate a qr code image from text or url. use when you need a png or jpg qr code for embedding or download. example: generate a qr code for a url after validating the link.
     */
    QR_CODE: "NEUTRINO_QR_CODE",
    /**
     * Tool to send a unique security code via sms. use when verifying a user's phone number after collection.
     */
    SMS_VERIFY: "NEUTRINO_SMS_VERIFY",
    /**
     * Tool to parse, validate, and get detailed user-agent information. use when you need to analyze browser, device, and os details from a ua string or client hints.
     */
    UA_LOOKUP: "NEUTRINO_UA_LOOKUP",
    /**
     * Tool to parse, analyze, and retrieve content from the supplied url. use when you need detailed url metadata or to fetch page content.
     */
    URL_INFO: "NEUTRINO_URL_INFO",
    /**
     * Tool to verify a security code generated by the generate security code api. use after obtaining a code-id and security code to check validity and detect expiration.
     */
    VERIFY_SECURITY_CODE: "NEUTRINO_VERIFY_SECURITY_CODE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "NEUTRINO".
 */
export type NEUTRINO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "NEUTRINO".
 */
export type NEUTRINO_TRIGGER_EVENTS = {}
