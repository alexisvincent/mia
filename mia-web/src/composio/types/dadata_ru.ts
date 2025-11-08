// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DADATA_RU's DADATA_RU_CLEAN_ADDRESS tool input.
 */
type DADATA_RU_CLEAN_ADDRESS_INPUT = {
  /**
   * Addresses
   * @description List of raw address strings to standardize. Must contain between 1 and 1000 items.
   */
  addresses?: string[];
};

/**
 * Type of DADATA_RU's DADATA_RU_CLEAN_ADDRESS tool output.
 */
type DADATA_RU_CLEAN_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Area
       * @description Area name
       * @default null
       */
      area: string | null;
      /**
       * Area Fias Id
       * @description FIAS area ID
       * @default null
       */
      area_fias_id: string | null;
      /**
       * Area Kladr Id
       * @description KLADR area ID
       * @default null
       */
      area_kladr_id: string | null;
      /**
       * Area Type
       * @description Area type abbreviation
       * @default null
       */
      area_type: string | null;
      /**
       * Area Type Full
       * @description Full area type
       * @default null
       */
      area_type_full: string | null;
      /**
       * Area With Type
       * @description Area with type
       * @default null
       */
      area_with_type: string | null;
      /**
       * Block
       * @description Block number
       * @default null
       */
      block: string | null;
      /**
       * Block Type
       * @description Block type
       * @default null
       */
      block_type: string | null;
      /**
       * Block Type Full
       * @description Full block type
       * @default null
       */
      block_type_full: string | null;
      /**
       * City
       * @description City name
       * @default null
       */
      city: string | null;
      /**
       * City Fias Id
       * @description FIAS city ID
       * @default null
       */
      city_fias_id: string | null;
      /**
       * City Kladr Id
       * @description KLADR city ID
       * @default null
       */
      city_kladr_id: string | null;
      /**
       * City Type
       * @description City type abbreviation
       * @default null
       */
      city_type: string | null;
      /**
       * City Type Full
       * @description Full city type
       * @default null
       */
      city_type_full: string | null;
      /**
       * City With Type
       * @description City with type
       * @default null
       */
      city_with_type: string | null;
      /**
       * Country
       * @description Country
       * @default null
       */
      country: string | null;
      /**
       * Flat
       * @description Flat number
       * @default null
       */
      flat: string | null;
      /**
       * Flat Type
       * @description Flat type
       * @default null
       */
      flat_type: string | null;
      /**
       * Flat Type Full
       * @description Full flat type
       * @default null
       */
      flat_type_full: string | null;
      /**
       * Geo Lat
       * @description Latitude
       * @default null
       */
      geo_lat: string | null;
      /**
       * Geo Lon
       * @description Longitude
       * @default null
       */
      geo_lon: string | null;
      /**
       * House
       * @description House number
       * @default null
       */
      house: string | null;
      /**
       * House Fias Id
       * @description FIAS house ID
       * @default null
       */
      house_fias_id: string | null;
      /**
       * House Kladr Id
       * @description KLADR house ID
       * @default null
       */
      house_kladr_id: string | null;
      /**
       * House Type
       * @description House type abbreviation
       * @default null
       */
      house_type: string | null;
      /**
       * House Type Full
       * @description Full house type
       * @default null
       */
      house_type_full: string | null;
      /**
       * Postal Code
       * @description Postal code
       * @default null
       */
      postal_code: string | null;
      /**
       * Qc
       * @description Quality code (0 = address found)
       * @default null
       */
      qc: number | null;
      /**
       * Qc Complete
       * @description Completeness quality code
       * @default null
       */
      qc_complete: number | null;
      /**
       * Qc Geo
       * @description Geocoding quality code
       * @default null
       */
      qc_geo: number | null;
      /**
       * Qc House
       * @description House recognition quality code
       * @default null
       */
      qc_house: number | null;
      /**
       * Qc Match
       * @description Match quality code
       * @default null
       */
      qc_match: number | null;
      /**
       * Region
       * @description Region name
       * @default null
       */
      region: string | null;
      /**
       * Region Fias Id
       * @description FIAS region ID
       * @default null
       */
      region_fias_id: string | null;
      /**
       * Region Kladr Id
       * @description KLADR region ID
       * @default null
       */
      region_kladr_id: string | null;
      /**
       * Region Type
       * @description Region type abbreviation
       * @default null
       */
      region_type: string | null;
      /**
       * Region Type Full
       * @description Full region type
       * @default null
       */
      region_type_full: string | null;
      /**
       * Region With Type
       * @description Region with type
       * @default null
       */
      region_with_type: string | null;
      /**
       * Result
       * @description Cleaned and standardized address
       */
      result: string;
      /**
       * Settlement
       * @description Settlement name
       * @default null
       */
      settlement: string | null;
      /**
       * Settlement Type
       * @description Settlement type abbreviation
       * @default null
       */
      settlement_type: string | null;
      /**
       * Settlement Type Full
       * @description Full settlement type
       * @default null
       */
      settlement_type_full: string | null;
      /**
       * Settlement With Type
       * @description Settlement with type
       * @default null
       */
      settlement_with_type: string | null;
      /**
       * Source
       * @description Original input address
       */
      source: string;
      /**
       * Street
       * @description Street name
       * @default null
       */
      street: string | null;
      /**
       * Street Fias Id
       * @description FIAS street ID
       * @default null
       */
      street_fias_id: string | null;
      /**
       * Street Kladr Id
       * @description KLADR street ID
       * @default null
       */
      street_kladr_id: string | null;
      /**
       * Street Type
       * @description Street type abbreviation
       * @default null
       */
      street_type: string | null;
      /**
       * Street Type Full
       * @description Full street type
       * @default null
       */
      street_type_full: string | null;
      /**
       * Street With Type
       * @description Street with type
       * @default null
       */
      street_with_type: string | null;
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
 * Type of DADATA_RU's DADATA_RU_CLEAN_BIRTHDATE tool input.
 */
type DADATA_RU_CLEAN_BIRTHDATE_INPUT = {
  /**
   * Birthdate
   * @description Birthdate string to clean (e.g., '22.08.1966', '3/7/85').
   */
  birthdate?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_CLEAN_BIRTHDATE tool output.
 */
type DADATA_RU_CLEAN_BIRTHDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Birthdate
       * @description Normalized birthdate in YYYY-MM-DD format.
       */
      birthdate: string;
      /**
       * Qc
       * @description Quality code: 0=valid; 1=invalid date; 2=impossible date; 3=invalid format; 4=missing value
       */
      qc: number;
      /**
       * Source
       * @description Original input string.
       */
      source: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DADATA_RU's DADATA_RU_CLEAN_EMAIL tool input.
 */
type DADATA_RU_CLEAN_EMAIL_INPUT = {
  /**
   * Emails
   * @description List of email addresses to clean and validate
   */
  emails?: unknown[];
};

/**
 * Type of DADATA_RU's DADATA_RU_CLEAN_EMAIL tool output.
 */
type DADATA_RU_CLEAN_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Cleaned email records, in the same order as input
       */
      result: {
          /**
           * Domain
           * @description Domain part (after '@') of the email
           */
          domain: string;
          /**
           * Email
           * @description Standardized and corrected email address
           */
          email: string;
          /**
           * Local
           * @description Local part (before '@') of the email
           */
          local: string;
          /**
           * Qc
           * @description Quality code: 0=correct & deliverable, 1=syntax error, 2=domain error, 3=user not found, 4=disposable
           */
          qc: number;
          /**
           * Source
           * @description Original email address from request
           */
          source: string;
          /**
           * Type
           * @description Classification of the email address type
           * @enum {string}
           */
          type: "CORPORATE" | "PERSONAL" | "UNKNOWN";
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
 * Type of DADATA_RU's DADATA_RU_CLEAN_NAME tool input.
 */
type DADATA_RU_CLEAN_NAME_INPUT = {
  /**
   * Fios
   * @description List of raw full name strings (FIO) to standardize and parse.
   */
  fios?: string[];
};

/**
 * Type of DADATA_RU's DADATA_RU_CLEAN_NAME tool output.
 */
type DADATA_RU_CLEAN_NAME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description List of cleaned FIO objects
       */
      result: {
          /**
           * Gender
           * @description Gender: 'М' — male, 'Ж' — female, 'НД' — not determined
           */
          gender: string;
          /**
           * Name
           * @description Parsed given name
           */
          name: string;
          /**
           * Patronymic
           * @description Parsed patronymic
           */
          patronymic: string;
          /**
           * Qc
           * @description Quality code: 0 — confident, 1 — review recommended
           */
          qc: number;
          /**
           * Result
           * @description Standardized FIO string
           */
          result: string;
          /**
           * Result Ablative
           * @description FIO in instrumental case (кем?)
           */
          result_ablative: string;
          /**
           * Result Dative
           * @description FIO in dative case (кому?)
           */
          result_dative: string;
          /**
           * Result Genitive
           * @description FIO in genitive case (кого?)
           */
          result_genitive: string;
          /**
           * Source
           * @description Original input FIO string
           */
          source: string;
          /**
           * Surname
           * @description Parsed surname
           */
          surname: string;
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
 * Type of DADATA_RU's DADATA_RU_CLEAN_PASSPORT tool input.
 */
type DADATA_RU_CLEAN_PASSPORT_INPUT = {
  /**
   * Passport
   * @description Passport series and number in a single string, e.g. '4509 235857'
   */
  passport?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_CLEAN_PASSPORT tool output.
 */
type DADATA_RU_CLEAN_PASSPORT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Number
       * @description Passport number
       * @default null
       */
      number: string | null;
      /**
       * Qc
       * @description Quality code: 0=valid; 1=format error; 2=empty; 10=invalid
       */
      qc: number;
      /**
       * Series
       * @description Passport series
       * @default null
       */
      series: string | null;
      /**
       * Source
       * @description Original input string provided
       */
      source: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DADATA_RU's DADATA_RU_CLEAN_PHONE tool input.
 */
type DADATA_RU_CLEAN_PHONE_INPUT = {
  /**
   * Phones
   * @description List of phone numbers to standardize and validate. Provide numbers in any format, including international formats.
   */
  phones?: string[];
};

/**
 * Type of DADATA_RU's DADATA_RU_CLEAN_PHONE tool output.
 */
type DADATA_RU_CLEAN_PHONE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Cleaned phone records, in original order
       */
      result: {
          /**
           * City Code
           * @description City or area code, e.g., '495'
           * @default null
           */
          city_code: string | null;
          /**
           * Country
           * @description Country name, e.g., 'Russia'
           * @default null
           */
          country: string | null;
          /**
           * Country Code
           * @description Country calling code, e.g., '+7'
           * @default null
           */
          country_code: string | null;
          /**
           * Extension
           * @description Phone extension, if present
           * @default null
           */
          extension: string | null;
          /**
           * Number
           * @description Local subscriber number without codes
           * @default null
           */
          number: string | null;
          /**
           * Phone
           * @description Standardized 11-digit phone number
           * @default null
           */
          phone: string | null;
          /**
           * Provider
           * @description Telecom operator name, e.g., 'MTS'
           * @default null
           */
          provider: string | null;
          /**
           * Qc
           * @description Overall quality code (0 = OK, >0 = various issues)
           */
          qc: number;
          /**
           * Qc Conflict
           * @description Quality code for conflict checks (higher means more suspicious)
           * @default null
           */
          qc_conflict: number | null;
          /**
           * Region
           * @description Region or federal subject name
           * @default null
           */
          region: string | null;
          /**
           * Source
           * @description Original input phone number
           */
          source: string;
          /**
           * Timezone
           * @description Time zone of the number, e.g., 'UTC+3'
           * @default null
           */
          timezone: string | null;
          /**
           * Type
           * @description Detected phone type
           * @default null
           * @enum {string|null}
           */
          type: "EXT" | "FED" | "CITY" | "MOBILE" | "FIXED" | "SHORT" | "NUMBER_8800" | "NUMBER_8900" | "REDIRECT" | "UNKNOWN" | "EMPTY" | null;
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
 * Type of DADATA_RU's DADATA_RU_CLEAN_VEHICLE tool input.
 */
type DADATA_RU_CLEAN_VEHICLE_INPUT = {
  /**
   * Vehicles
   * @description List of vehicle strings to clean (e.g., license plate, VIN, model).
   */
  vehicles?: string[];
};

/**
 * Type of DADATA_RU's DADATA_RU_CLEAN_VEHICLE tool output.
 */
type DADATA_RU_CLEAN_VEHICLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Body Number
       * @description Vehicle body number.
       * @default null
       */
      body_number: string | null;
      /**
       * Brand
       * @description Standardized vehicle brand.
       * @default null
       */
      brand: string | null;
      /**
       * Chassis Number
       * @description Chassis number.
       * @default null
       */
      chassis_number: string | null;
      /**
       * Model
       * @description Standardized vehicle model.
       * @default null
       */
      model: string | null;
      /**
       * Qc
       * @description Quality code of the result (0 = exact match).
       * @default null
       */
      qc: number | null;
      /**
       * Vehicle
       * @description Original input string.
       * @default null
       */
      vehicle: string | null;
      /**
       * Vin
       * @description Vehicle Identification Number.
       * @default null
       */
      vin: string | null;
      /**
       * Year
       * @description Year of production.
       * @default null
       */
      year: number | null;
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
 * Type of DADATA_RU's DADATA_RU_FIND_ADDRESS tool input.
 */
type DADATA_RU_FIND_ADDRESS_INPUT = {
  /**
   * Query
   * @description Unique address identifier (cadastral number, FIAS ID, or KLADR code).
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_FIND_ADDRESS tool output.
 */
type DADATA_RU_FIND_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of address suggestions matching the identifier
       */
      suggestions: {
          /**
           * Data
           * @description Structured address data
           */
          data: {
              /**
               * City
               * @description City name
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
               * Fias Id
               * @description FIAS identifier
               * @default null
               */
              fias_id: string | null;
              /**
               * Geo Lat
               * @description Latitude coordinate
               * @default null
               */
              geo_lat: string | null;
              /**
               * Geo Lon
               * @description Longitude coordinate
               * @default null
               */
              geo_lon: string | null;
              /**
               * House
               * @description House number, if applicable
               * @default null
               */
              house: string | null;
              /**
               * Kladr Id
               * @description KLADR identifier
               * @default null
               */
              kladr_id: string | null;
              /**
               * Postal Code
               * @description Postal code
               * @default null
               */
              postal_code: string | null;
              /**
               * Region With Type
               * @description Region name with type
               * @default null
               */
              region_with_type: string | null;
              /**
               * Settlement With Type
               * @description Settlement with type, if applicable
               * @default null
               */
              settlement_with_type: string | null;
              /**
               * Street With Type
               * @description Street with type, if applicable
               * @default null
               */
              street_with_type: string | null;
          };
          /**
           * Unrestricted Value
           * @description Full address with all details
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Formatted address string
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_FIND_BANK tool input.
 */
type DADATA_RU_FIND_BANK_INPUT = {
  /**
   * Kpp
   * @description Tax Registration Reason Code (KPP), used together with INN for specific branch queries
   * @default null
   */
  kpp: string | null;
  /**
   * Query
   * @description Bank identifier: BIC, SWIFT, INN, or registration number
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_FIND_BANK tool output.
 */
type DADATA_RU_FIND_BANK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of bank suggestions matching the query
       */
      suggestions: {
          /**
           * Data
           * @description Detailed bank data object
           */
          data: {
              /**
               * Address
               * @description Postal address details
               */
              address: {
                  /**
                   * Data
                   * @description Structured nested address data
                   * @default null
                   */
                  data: {
                      [key: string]: unknown;
                  } | null;
                  /**
                   * Unrestricted Value
                   * @description Full expanded address string
                   * @default null
                   */
                  unrestricted_value: string | null;
                  /**
                   * Value
                   * @description Address string as entered
                   * @default null
                   */
                  value: string | null;
              };
              /**
               * Bic
               * @description Bank Identifier Code (BIC)
               * @default null
               */
              bic: string | null;
              /**
               * Cbr
               * @description Central Bank of Russia branch details
               * @default null
               */
              cbr: {
                  /**
                   * Address
                   * @description Address details for CBR branch
                   */
                  address: {
                      /**
                       * Data
                       * @description Additional structured address data for CBR branch
                       * @default null
                       */
                      data: {
                          [key: string]: unknown;
                      } | null;
                      /**
                       * Unrestricted Value
                       * @description Full address string for CBR branch
                       * @default null
                       */
                      unrestricted_value: string | null;
                      /**
                       * Value
                       * @description Address string for CBR branch
                       * @default null
                       */
                      value: string | null;
                  };
                  /**
                   * Bic
                   * @description BIC code of CBR branch
                   * @default null
                   */
                  bic: string | null;
                  /**
                   * Name
                   * @description Name details for CBR branch
                   */
                  name: {
                      /**
                       * Full
                       * @description Full name for CBR branch
                       * @default null
                       */
                      full: string | null;
                      /**
                       * Payment
                       * @description Payment name for CBR branch
                       * @default null
                       */
                      payment: string | null;
                      /**
                       * Short
                       * @description Short name for CBR branch
                       * @default null
                       */
                      short: string | null;
                  };
                  /**
                   * Phones
                   * @description List of phone numbers for CBR branch
                   * @default null
                   */
                  phones: string[] | null;
              } | null;
              /**
               * Correspondent Account
               * @description Correspondent account number
               * @default null
               */
              correspondent_account: string | null;
              /**
               * Inn
               * @description Taxpayer Identification Number (INN)
               * @default null
               */
              inn: string | null;
              /**
               * Kpp
               * @description Tax Registration Reason Code (KPP)
               * @default null
               */
              kpp: string | null;
              /**
               * Name
               * @description Structured bank name details
               */
              name: {
                  /**
                   * Full
                   * @description Full bank name
                   * @default null
                   */
                  full: string | null;
                  /**
                   * Payment
                   * @description Bank name for payments
                   * @default null
                   */
                  payment: string | null;
                  /**
                   * Short
                   * @description Short bank name
                   * @default null
                   */
                  short: string | null;
              };
              /**
               * Okpo
               * @description All-Russian Classifier of Enterprises and Organizations code (OKPO)
               * @default null
               */
              okpo: string | null;
              /**
               * Opf
               * @description Organizational and legal form details
               */
              opf: {
                  /**
                   * Full
                   * @description Full name of the legal form
                   * @default null
                   */
                  full: string | null;
                  /**
                   * Short
                   * @description Short name of the legal form
                   * @default null
                   */
                  short: string | null;
                  /**
                   * Type
                   * @description Organizational and legal form type, e.g., BANK
                   * @default null
                   */
                  type: string | null;
              };
              /**
               * Payment City
               * @description City for payments
               * @default null
               */
              payment_city: string | null;
              /**
               * Registration Number
               * @description Registration number assigned by Bank of Russia
               * @default null
               */
              registration_number: string | null;
              /**
               * Rkc
               * @description RKC code
               * @default null
               */
              rkc: string | null;
              /**
               * State
               * @description Registration and status details of the bank
               */
              state: {
                  /**
                   * Actuality Date
                   * @description Timestamp of last update (ms since epoch)
                   * @default null
                   */
                  actuality_date: number | null;
                  /**
                   * Liquidation Date
                   * @description Timestamp of liquidation, if applicable (ms since epoch)
                   * @default null
                   */
                  liquidation_date: number | null;
                  /**
                   * Registration Date
                   * @description Timestamp of registration (ms since epoch)
                   * @default null
                   */
                  registration_date: number | null;
                  /**
                   * Status
                   * @description Bank status, e.g., ACTIVE or LIQUIDATED
                   * @default null
                   */
                  status: string | null;
              };
              /**
               * Swift
               * @description SWIFT code
               * @default null
               */
              swift: string | null;
              /**
               * Treasury Accounts
               * @description List of treasury account numbers
               * @default null
               */
              treasury_accounts: string[] | null;
          };
          /**
           * Unrestricted Value
           * @description Full bank name with additional details
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Primary bank name
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_FIND_CAR_BRAND tool input.
 */
type DADATA_RU_FIND_CAR_BRAND_INPUT = {
  /**
   * Query
   * @description Car brand code (ID) to search for.
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_FIND_CAR_BRAND tool output.
 */
type DADATA_RU_FIND_CAR_BRAND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of car brand suggestions with detailed data.
       */
      suggestions: {
          /**
           * Data
           * @description Structured data object with additional brand details.
           */
          data: {
              /**
               * Code
               * @description Brand code (ID).
               * @default null
               */
              code: string | null;
              /**
               * Country
               * @description ISO country code of the brand origin.
               * @default null
               */
              country: string | null;
              /**
               * Name
               * @description Official brand name.
               * @default null
               */
              name: string | null;
              /**
               * Synonyms
               * @description Common synonyms or alternative names for the brand.
               * @default null
               */
              synonyms: string[] | null;
          };
          /**
           * Unrestricted Value
           * @description Full, unabbreviated brand name.
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Short display name of the brand.
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_FIND_COUNTRY tool input.
 */
type DADATA_RU_FIND_COUNTRY_INPUT = {
  /**
   * Language
   * @description Response language: 'ru' (default) or 'en'
   * @default null
   * @enum {string|null}
   */
  language: "ru" | "en" | null;
  /**
   * Query
   * @description Country code in ISO 3166-1 alpha-2, alpha-3, or numeric format
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_FIND_COUNTRY tool output.
 */
type DADATA_RU_FIND_COUNTRY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of matching countries with metadata
       */
      suggestions: {
          /**
           * Data
           * @description Detailed country metadata
           */
          data: {
              /**
               * Citizenship
               * @description Citizenship term (native)
               * @default null
               */
              citizenship: string | null;
              /**
               * Code
               * @description ISO 3166-1 alpha-2 code
               * @default null
               */
              code: string | null;
              /**
               * Code3
               * @description ISO 3166-1 alpha-3 code
               * @default null
               */
              code3: string | null;
              /**
               * Code Numeric
               * @description Numeric country code
               * @default null
               */
              code_numeric: string | null;
              /**
               * Name
               * @description Full country name (native)
               * @default null
               */
              name: string | null;
              /**
               * Name En
               * @description Full country name (English)
               * @default null
               */
              name_en: string | null;
              /**
               * Name Short
               * @description Short country name (native)
               * @default null
               */
              name_short: string | null;
              /**
               * Name Short En
               * @description Short country name (English)
               * @default null
               */
              name_short_en: string | null;
          };
          /**
           * Unrestricted Value
           * @description Country name (unrestricted)
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Country name (formatted)
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_FIND_CURRENCY tool input.
 */
type DADATA_RU_FIND_CURRENCY_INPUT = {
  /**
   * Query
   * @description Currency code (numeric ISO 4217 or alphabetic ISO 4217, e.g., '643' or 'RUB')
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_FIND_CURRENCY tool output.
 */
type DADATA_RU_FIND_CURRENCY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of matching currency suggestions
       */
      suggestions: {
          /**
           * Data
           * @description Detailed currency data object
           */
          data: {
              /**
               * Code
               * @description Numeric ISO 4217 currency code, e.g., '643'
               */
              code: string;
              /**
               * Countries
               * @description List of countries using this currency, e.g. ['Russia']
               */
              countries: string[];
              /**
               * Eng
               * @description English name of the currency, e.g., 'Russian Ruble'
               */
              eng: string;
              /**
               * Name
               * @description Local name of the currency, e.g., 'российский рубль'
               */
              name: string;
              /**
               * Nominal
               * @description Nominal value of the currency, e.g., '1'
               */
              nominal: string;
              /**
               * Strcode
               * @description Alphabetic ISO 4217 currency code, e.g., 'RUB'
               */
              strcode: string;
              /**
               * Unit
               * @description Currency unit, e.g., '1'
               */
              unit: string;
          };
          /**
           * Unrestricted Value
           * @description Extended denomination of the currency
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Short denomination of the currency
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_FIND_DELIVERY tool input.
 */
type DADATA_RU_FIND_DELIVERY_INPUT = {
  /**
   * Query
   * @description KLADR code of the city to retrieve delivery service identifiers for
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_FIND_DELIVERY tool output.
 */
type DADATA_RU_FIND_DELIVERY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of suggestions; empty if no data found for given KLADR code
       */
      suggestions: {
          /**
           * Data
           * @description Delivery service identifiers data
           */
          data: {
              /**
               * Boxberry Id
               * @description Identifier of the city in Boxberry service
               */
              boxberry_id: string;
              /**
               * Cdek Id
               * @description Identifier of the city in CDEK service
               */
              cdek_id: string;
              /**
               * Dpd Id
               * @description Identifier of the city in DPD service
               */
              dpd_id: string;
              /**
               * Fias Id
               * @description FIAS ID of the city
               */
              fias_id: string;
              /**
               * Kladr Id
               * @description KLADR code of the city
               */
              kladr_id: string;
          };
          /**
           * Unrestricted Value
           * @description Unrestricted identifier value, e.g., FIAS ID
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Returned KLADR query value
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_FIND_FMS_UNIT tool input.
 */
type DADATA_RU_FIND_FMS_UNIT_INPUT = {
  /**
   * Query
   * @description FMS unit code (e.g., '770-001') or unit name to search for
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_FIND_FMS_UNIT tool output.
 */
type DADATA_RU_FIND_FMS_UNIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of matching FMS units
       */
      suggestions: {
          /**
           * Data
           * @description Structured unit data
           */
          data: {
              /**
               * Address
               * @description Address of the unit
               */
              address: string;
              /**
               * Code
               * @description FMS unit code
               */
              code: string;
              /**
               * Name
               * @description FMS unit name
               */
              name: string;
              /**
               * Phone
               * @description Phone number of the unit
               */
              phone: string;
              /**
               * Region Code
               * @description Region code of the unit
               */
              region_code: string;
              /**
               * Type
               * @description Type of the unit
               */
              type: string;
          };
          /**
           * Unrestricted Value
           * @description Full FMS unit name with details
           */
          unrestricted_value: string;
          /**
           * Value
           * @description FMS unit name
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_FIND_FTS_UNIT tool input.
 */
type DADATA_RU_FIND_FTS_UNIT_INPUT = {
  /**
   * Count
   * @description Number of results to return (default 1)
   * @default null
   */
  count: number | null;
  /**
   * Query
   * @description Identifier of the FTS unit (code or GUID)
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_FIND_FTS_UNIT tool output.
 */
type DADATA_RU_FIND_FTS_UNIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of matching FTS units
       */
      suggestions: {
          /**
           * Data
           * @description Structured data of the FTS unit
           */
          data: {
              /**
               * Address
               * @description Address object of the FTS unit
               */
              address: {
                  /**
                   * Unrestricted Value
                   * @description Unrestricted address of the FTS unit
                   */
                  unrestricted_value: string;
                  /**
                   * Value
                   * @description Formatted address of the FTS unit
                   */
                  value: string;
              };
              /**
               * Code
               * @description Code of the FTS unit
               * @default null
               */
              code: string | null;
              /**
               * Ifns Fl
               * @description IFNS code for individuals
               * @default null
               */
              ifns_fl: string | null;
              /**
               * Ifns Ul
               * @description IFNS code for legal entities
               * @default null
               */
              ifns_ul: string | null;
              /**
               * Name
               * @description Name object of the FTS unit
               */
              name: {
                  /**
                   * Full
                   * @description Full name of the FTS unit with details
                   */
                  full: string;
                  /**
                   * Short
                   * @description Short name of the FTS unit
                   */
                  short: string;
              };
              /**
               * Oktmo
               * @description OKTMO code
               * @default null
               */
              oktmo: string | null;
              /**
               * Oktmo Id
               * @description OKTMO identifier
               * @default null
               */
              oktmo_id: string | null;
              /**
               * Phone
               * @description Phone number of the FTS unit
               * @default null
               */
              phone: string | null;
              /**
               * Region Code
               * @description Region code of the FTS unit
               * @default null
               */
              region_code: string | null;
              /**
               * Type
               * @description Type of the FTS unit
               * @default null
               */
              type: string | null;
          };
          /**
           * Unrestricted Value
           * @description Full name with details of the FTS unit
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Full name of the FTS unit
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_FIND_MKTU tool input.
 */
type DADATA_RU_FIND_MKTU_INPUT = {
  /**
   * Count
   * @description Number of results to return (1-20). Default is 1 if not specified
   * @default null
   */
  count: number | null;
  /**
   * Query
   * @description MKTU code to search for (e.g., '250173')
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_FIND_MKTU tool output.
 */
type DADATA_RU_FIND_MKTU_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of MKTU classification suggestions
       */
      suggestions: {
          /**
           * Data
           * @description Detailed MKTU classification data
           */
          data: {
              /**
               * Classes
               * @description List of class numbers
               */
              classes: number[];
              /**
               * Code
               * @description MKTU classification code
               */
              code: string;
              /**
               * Desc
               * @description Description in Russian
               */
              desc: string;
              /**
               * Desc En
               * @description Description in English
               */
              desc_en: string;
              /**
               * Excludes
               * @description What the class excludes
               */
              excludes: string[];
              /**
               * Includes
               * @description What the class includes
               */
              includes: string[];
              /**
               * Notes
               * @description Usage notes, if available
               * @default null
               */
              notes: string | null;
              /**
               * Remarks
               * @description Additional remarks or clarifications
               */
              remarks: string[];
          };
          /**
           * Value
           * @description MKTU code value
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_FIND_OKVED2 tool input.
 */
type DADATA_RU_FIND_OKVED2_INPUT = {
  /**
   * Query
   * @description OKVED2 classifier code to search for
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_FIND_OKVED2 tool output.
 */
type DADATA_RU_FIND_OKVED2_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of matching OKVED2 classifications
       */
      suggestions: {
          /**
           * Data
           * @description Detailed OKVED2 classification data
           */
          data: {
              /**
               * Code
               * @description OKVED2 code
               */
              code: string;
              /**
               * Comment
               * @description Additional comments, if any
               * @default null
               */
              comment: string | null;
              /**
               * Group
               * @description Group code
               */
              group: string;
              /**
               * Name
               * @description Description of the class
               */
              name: string;
              /**
               * Section
               * @description Letter of the section
               */
              section: string;
              /**
               * Section Code
               * @description Section numeric code
               */
              section_code: string;
              /**
               * Subgroup
               * @description Subgroup code
               */
              subgroup: string;
          };
          /**
           * Unrestricted Value
           * @description Full name of the OKVED2 class without formatting constraints
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Formatted name of the OKVED2 class
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_FIND_PARTY tool input.
 */
type DADATA_RU_FIND_PARTY_INPUT = {
  /**
   * Branch Type
   * @description Filter by branch type: 'MAIN' for head office or 'BRANCH' for branches
   * @default null
   * @enum {string|null}
   */
  branch_type: "MAIN" | "BRANCH" | null;
  /**
   * Query
   * @description INN, OGRN, or KPP of the company or entrepreneur to find
   */
  query?: string;
  /**
   * Type
   * @description Filter by entity type: 'LEGAL' or 'INDIVIDUAL'
   * @default null
   * @enum {string|null}
   */
  type: "LEGAL" | "INDIVIDUAL" | null;
};

/**
 * Type of DADATA_RU's DADATA_RU_FIND_PARTY tool output.
 */
type DADATA_RU_FIND_PARTY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of matched companies or entrepreneurs with full details
       */
      suggestions: {
          /**
           * Data
           * @description Detailed entity data object
           */
          data: {
              /**
               * Address
               * @description Primary registered address
               */
              address: {
                  /**
                   * Unrestricted Value
                   * @description Full address without formatting constraints
                   */
                  unrestricted_value: string;
                  /**
                   * Value
                   * @description Formatted address string
                   */
                  value: string;
              };
              /**
               * Branch Count
               * @description Number of branches, if any
               * @default null
               */
              branch_count: number | null;
              /**
               * Branch Type
               * @description Branch type: MAIN or BRANCH
               * @default null
               */
              branch_type: string | null;
              /**
               * Capital
               * @description Authorized capital amount, if any
               * @default null
               */
              capital: string | null;
              /**
               * Inn
               * @description Taxpayer Identification Number
               */
              inn: string;
              /**
               * Kpp
               * @description Tax Registration Reason Code
               * @default null
               */
              kpp: string | null;
              /**
               * Management
               * @description Current manager details, if any
               * @default null
               */
              management: {
                  /**
                   * Inn
                   * @description INN of the manager, if available
                   * @default null
                   */
                  inn: string | null;
                  /**
                   * Name
                   * @description Full name of the manager
                   */
                  name: string;
                  /**
                   * Post
                   * @description Position of the manager
                   */
                  post: string;
              } | null;
              /**
               * Name
               * @description Structured names of the entity
               */
              name: {
                  /**
                   * Full With Opf
                   * @description Full official name with legal form
                   */
                  full_with_opf: string;
                  /**
                   * Latin
                   * @description Name in Latin alphabet, if available
                   * @default null
                   */
                  latin: string | null;
                  /**
                   * Short With Opf
                   * @description Short name with legal form
                   */
                  short_with_opf: string;
              };
              /**
               * Ogrn
               * @description Primary State Registration Number
               */
              ogrn: string;
              /**
               * Ogrn Date
               * @description OGRN registration timestamp in milliseconds
               * @default null
               */
              ogrn_date: number | null;
              /**
               * Opf
               * @description Organizational-legal form details
               */
              opf: {
                  /**
                   * Code
                   * @description OPF code
                   */
                  code: string;
                  /**
                   * Full
                   * @description Full form of organizational-legal form
                   */
                  full: string;
                  /**
                   * Short
                   * @description Short form of organizational-legal form
                   */
                  short: string;
                  /**
                   * Type
                   * @description OPF type, e.g., 'LEGAL' or 'INDIVIDUAL'
                   */
                  type: string;
              };
              /**
               * State
               * @description Current registration and status details
               */
              state: {
                  /**
                   * Actuality Date
                   * @description Timestamp of last status update in milliseconds
                   * @default null
                   */
                  actuality_date: number | null;
                  /**
                   * Liquidation Date
                   * @description Timestamp of liquidation in milliseconds, if any
                   * @default null
                   */
                  liquidation_date: number | null;
                  /**
                   * Registration Date
                   * @description Timestamp of registration in milliseconds
                   * @default null
                   */
                  registration_date: number | null;
                  /**
                   * Status
                   * @description Current status, e.g., 'ACTIVE', 'LIQUIDATED'
                   */
                  status: string;
              };
              /**
               * Type
               * @description Entity type, LEGAL or INDIVIDUAL
               */
              type: string;
          };
          /**
           * Unrestricted Value
           * @description Full name or representation without truncation
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Displayed name of the entity
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_FIND_PARTY_BY tool input.
 */
type DADATA_RU_FIND_PARTY_BY_INPUT = {
  /**
   * Filters
   * @description Optional list of filters to narrow results. Each filter may include `status` or `type`.
   * @default null
   */
  filters: {
      /**
       * Status
       * @description Filter by organization status. One of ACTIVE, LIQUIDATING, LIQUIDATED, BANKRUPT, SUSPENDED, REORGANIZING.
       * @default null
       * @enum {string|null}
       */
      status: "ACTIVE" | "LIQUIDATING" | "LIQUIDATED" | "BANKRUPT" | "SUSPENDED" | "REORGANIZING" | null;
      /**
       * Type
       * @description Filter by entity type: INDIVIDUAL or LEGAL.
       * @default null
       * @enum {string|null}
       */
      type: "LEGAL" | "INDIVIDUAL" | null;
  }[] | null;
  /**
   * Query
   * @description UNP (Belarus taxpayer ID) or other identifier to lookup.
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_FIND_PARTY_BY tool output.
 */
type DADATA_RU_FIND_PARTY_BY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of matched companies or entrepreneurs (usually one).
       */
      suggestions: {
          /**
           * Data
           * @description Detailed registry data for the party
           */
          data: {
              /**
               * Actuality Date
               * @description Last update date in ISO 8601 format or timestamp
               * @default null
               */
              actuality_date: string | null;
              /**
               * Full Name By
               * @description Full name in Belarusian
               * @default null
               */
              full_name_by: string | null;
              /**
               * Full Name Ru
               * @description Full name in Russian
               * @default null
               */
              full_name_ru: string | null;
              /**
               * Registration Date
               * @description Registration date in ISO 8601 format or timestamp
               * @default null
               */
              registration_date: string | null;
              /**
               * Removal Date
               * @description Removal date from registry in ISO 8601 format or timestamp
               * @default null
               */
              removal_date: string | null;
              /**
               * Short Name By
               * @description Short name in Belarusian
               * @default null
               */
              short_name_by: string | null;
              /**
               * Short Name Ru
               * @description Short name in Russian
               * @default null
               */
              short_name_ru: string | null;
              /**
               * Status
               * @description Current organization status
               * @enum {string}
               */
              status: "ACTIVE" | "LIQUIDATING" | "LIQUIDATED" | "BANKRUPT" | "SUSPENDED" | "REORGANIZING";
              /**
               * Trade Name By
               * @description Trade name in Belarusian (for legal entities)
               * @default null
               */
              trade_name_by: string | null;
              /**
               * Trade Name Ru
               * @description Trade name in Russian (for legal entities)
               * @default null
               */
              trade_name_ru: string | null;
              /**
               * Type
               * @description Entity type
               * @enum {string}
               */
              type: "INDIVIDUAL" | "LEGAL";
              /**
               * Unp
               * @description Belarusian Taxpayer Identification Number (UNP)
               */
              unp: string;
          };
          /**
           * Unrestricted Value
           * @description Full legal name plus UNP
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Short display name plus UNP
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_FIND_PARTY_KZ tool input.
 */
type DADATA_RU_FIND_PARTY_KZ_INPUT = {
  /**
   * Kpp
   * @description Tax Registration Reason Code (KPP) for the company, if available
   * @default null
   */
  kpp: string | null;
  /**
   * Query
   * @description BIN (Business Identification Number) or company name to search for
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_FIND_PARTY_KZ tool output.
 */
type DADATA_RU_FIND_PARTY_KZ_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of matched Kazakhstan companies or entrepreneurs
       */
      suggestions: {
          /**
           * Data
           * @description Detailed data of the company suggestion
           */
          data: {
              /**
               * Address
               * @description Registered address details
               */
              address: {
                  /**
                   * Unrestricted Value
                   * @description Unrestricted full address string
                   */
                  unrestricted_value: string;
                  /**
                   * Value
                   * @description Formatted address string
                   */
                  value: string;
              };
              /**
               * Bic
               * @description Bank Identifier Code (BIC)
               * @default null
               */
              bic: string | null;
              /**
               * Inn
               * @description Taxpayer Identification Number (INN)
               * @default null
               */
              inn: string | null;
              /**
               * Kpp
               * @description Tax Registration Reason Code (KPP)
               * @default null
               */
              kpp: string | null;
              /**
               * Name
               * @description Structured names of the company
               */
              name: {
                  /**
                   * Full With Opf
                   * @description Full company name including organizational-legal form
                   */
                  full_with_opf: string;
                  /**
                   * Latin
                   * @description Company name in Latin alphabet, if available
                   * @default null
                   */
                  latin: string | null;
                  /**
                   * Short With Opf
                   * @description Short company name including organizational-legal form
                   */
                  short_with_opf: string;
              };
              /**
               * Ogrn
               * @description Primary State Registration Number (OGRN)
               * @default null
               */
              ogrn: string | null;
              /**
               * Opf
               * @description Organizational-legal form details
               */
              opf: {
                  /**
                   * Code
                   * @description Code of organizational-legal form
                   */
                  code: string;
                  /**
                   * Full
                   * @description Full text of organizational-legal form
                   */
                  full: string;
                  /**
                   * Short
                   * @description Short text of organizational-legal form
                   */
                  short: string;
                  /**
                   * Type
                   * @description Type of organizational-legal form
                   */
                  type: string;
              };
              /**
               * State
               * @description Registration state and status details
               */
              state: {
                  /**
                   * Actuality Date
                   * @description Timestamp of last status update in milliseconds
                   * @default null
                   */
                  actuality_date: number | null;
                  /**
                   * Code
                   * @description Status code, if provided
                   * @default null
                   */
                  code: string | null;
                  /**
                   * Status
                   * @description Current registration status, e.g., 'ACTIVE', 'LIQUIDATING'
                   */
                  status: string;
              };
          };
          /**
           * Unrestricted Value
           * @description Unrestricted full name of the company suggestion
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Display name of the company suggestion
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_GEOLOCATE_ADDRESS tool input.
 */
type DADATA_RU_GEOLOCATE_ADDRESS_INPUT = {
  /**
   * Count
   * @description Number of results to return (max: 20, default: 5)
   * @default null
   */
  count: number | null;
  /**
   * Lat
   * @description Latitude of the point in decimal degrees
   */
  lat?: number;
  /**
   * Lon
   * @description Longitude of the point in decimal degrees
   */
  lon?: number;
  /**
   * Radius Meters
   * @description Search radius in meters (default: 100)
   * @default null
   */
  radius_meters: number | null;
};

/**
 * Type of DADATA_RU's DADATA_RU_GEOLOCATE_ADDRESS tool output.
 */
type DADATA_RU_GEOLOCATE_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of address suggestions nearest to the specified coordinates
       */
      suggestions: {
          /**
           * Data
           * @description Detailed address information
           */
          data: {
              /**
               * City With Type
               * @description City with type, e.g., 'г Москва'
               * @default null
               */
              city_with_type: string | null;
              /**
               * Country
               * @description Country name
               * @default null
               */
              country: string | null;
              /**
               * Geo Lat
               * @description Latitude of the found address as string
               * @default null
               */
              geo_lat: string | null;
              /**
               * Geo Lon
               * @description Longitude of the found address as string
               * @default null
               */
              geo_lon: string | null;
              /**
               * House
               * @description House number
               * @default null
               */
              house: string | null;
              /**
               * House Type
               * @description House type abbreviation, e.g., 'д'
               * @default null
               */
              house_type: string | null;
              /**
               * Postal Code
               * @description Postal code of the address
               * @default null
               */
              postal_code: string | null;
              /**
               * Region With Type
               * @description Region with type, e.g., 'г Москва'
               * @default null
               */
              region_with_type: string | null;
              /**
               * Settlement With Type
               * @description Settlement with type, if any
               * @default null
               */
              settlement_with_type: string | null;
              /**
               * Street With Type
               * @description Street with type, if any
               * @default null
               */
              street_with_type: string | null;
          };
          /**
           * Unrestricted Value
           * @description Full address suggestion without truncation
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Address suggestion as a single line
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_GET_PROFILE_BALANCE tool input.
 */
type DADATA_RU_GET_PROFILE_BALANCE_INPUT = object;

/**
 * Type of DADATA_RU's DADATA_RU_GET_PROFILE_BALANCE tool output.
 */
type DADATA_RU_GET_PROFILE_BALANCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Balance
       * @description Current balance in rubles.
       */
      balance: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DADATA_RU's DADATA_RU_GET_PROFILE_STATISTICS tool input.
 */
type DADATA_RU_GET_PROFILE_STATISTICS_INPUT = {
  /**
   * Date
   * @description Date for statistics in YYYY-MM-DD format (default: today)
   * @default null
   */
  date: string | null;
};

/**
 * Type of DADATA_RU's DADATA_RU_GET_PROFILE_STATISTICS tool output.
 */
type DADATA_RU_GET_PROFILE_STATISTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Stats
       * @description List of daily usage statistics entries
       */
      stats: {
          /**
           * Date
           * @description Date of statistic entry in YYYY-MM-DD format
           */
          date: string;
          /**
           * Services
           * @description Mapping of service name to its statistics
           */
          services: {
              [key: string]: {
                  /**
                   * Balance
                   * @description Remaining balance for the service in rubles
                   */
                  balance: number;
                  /**
                   * Count
                   * @description Number of API calls for the service
                   */
                  count: number;
              };
          };
          /**
           * Total
           * @description Summary statistics of all services combined
           */
          total: {
              /**
               * Balance
               * @description Remaining balance for the service in rubles
               */
              balance: number;
              /**
               * Count
               * @description Number of API calls for the service
               */
              count: number;
          };
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
 * Type of DADATA_RU's DADATA_RU_GET_REFERENCE_VERSIONS tool input.
 */
type DADATA_RU_GET_REFERENCE_VERSIONS_INPUT = object;

/**
 * Type of DADATA_RU's DADATA_RU_GET_REFERENCE_VERSIONS tool output.
 */
type DADATA_RU_GET_REFERENCE_VERSIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Dadata
       * @description Information about DaData core service version
       */
      dadata: {
          /**
           * Version
           * @description Version string of the DaData core service
           */
          version: string;
      };
      /**
       * Factor
       * @description Information about standardization (factor) service versions
       */
      factor: {
          /**
           * Resources
           * @description Mapping of standardization reference names to their last update dates
           */
          resources: {
              [key: string]: string;
          };
          /**
           * Version
           * @description Version string of the standardization (factor) service
           */
          version: string;
      };
      /**
       * Suggestions
       * @description Information about suggestions service versions
       */
      suggestions: {
          /**
           * Resources
           * @description Mapping of suggestions reference names to their last update dates
           */
          resources: {
              [key: string]: string;
          };
          /**
           * Version
           * @description Version string of the suggestions service
           */
          version: string;
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
 * Type of DADATA_RU's DADATA_RU_IP_LOCATE_ADDRESS tool input.
 */
type DADATA_RU_IP_LOCATE_ADDRESS_INPUT = {
  /**
   * Ip
   * @description IPv4 or IPv6 address to locate within Russia
   */
  ip?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_IP_LOCATE_ADDRESS tool output.
 */
type DADATA_RU_IP_LOCATE_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Ip
       * @description The input IP address
       */
      ip: string;
      /**
       * Location
       * @description Address suggestion for the given IP
       */
      location: {
          /**
           * Data
           * @description Structured geographic data for the address
           */
          data: {
              /**
               * City
               * @description City name
               * @default null
               */
              city: string | null;
              /**
               * City Type
               * @description City type
               * @default null
               */
              city_type: string | null;
              /**
               * City Type Full
               * @description Full city type description
               * @default null
               */
              city_type_full: string | null;
              /**
               * City With Type
               * @description City name with type
               * @default null
               */
              city_with_type: string | null;
              /**
               * Country
               * @description Country name
               * @default null
               */
              country: string | null;
              /**
               * Country Iso Code
               * @description ISO country code
               * @default null
               */
              country_iso_code: string | null;
              /**
               * Federal District
               * @description Federal district
               * @default null
               */
              federal_district: string | null;
              /**
               * Geo Lat
               * @description Latitude coordinate
               * @default null
               */
              geo_lat: string | null;
              /**
               * Geo Lon
               * @description Longitude coordinate
               * @default null
               */
              geo_lon: string | null;
              /**
               * Postal Code
               * @description Postal code
               * @default null
               */
              postal_code: string | null;
              /**
               * Region
               * @description Region name
               * @default null
               */
              region: string | null;
              /**
               * Region Type
               * @description Region type
               * @default null
               */
              region_type: string | null;
              /**
               * Region Type Full
               * @description Full region type description
               * @default null
               */
              region_type_full: string | null;
              /**
               * Region With Type
               * @description Region name with type
               * @default null
               */
              region_with_type: string | null;
              /**
               * Timezone
               * @description Time zone identifier
               * @default null
               */
              timezone: string | null;
              /**
               * Utc Offset
               * @description UTC offset
               * @default null
               */
              utc_offset: string | null;
          } & {
              [key: string]: unknown;
          };
          /**
           * Unrestricted Value
           * @description Unrestricted/detailed address string
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Full address string
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_SUGGEST_ADDRESS tool input.
 */
type DADATA_RU_SUGGEST_ADDRESS_INPUT = {
  /**
   * Bounds
   * @description Restrict suggestions to certain address levels (e.g., ['city','street'])
   * @default null
   */
  bounds: string[] | null;
  /**
   * Count
   * @description Number of suggestions to return (1–20). Defaults to 10 if omitted
   * @default null
   */
  count: number | null;
  /**
   * Bound
   * @description Lower boundary of address granularity
   * @default null
   */
  from_bound: {
      /**
       * Value
       * @description Address granularity bound (e.g., 'region', 'city', 'street')
       * @enum {string}
       */
      value: "region" | "area" | "city" | "settlement" | "street" | "house";
  } | null;
  /**
   * Geo Lat
   * @description Latitude for geo-based ranking of suggestions
   * @default null
   */
  geo_lat: number | null;
  /**
   * Geo Lon
   * @description Longitude for geo-based ranking of suggestions
   * @default null
   */
  geo_lon: number | null;
  /**
   * Language
   * @description Response language: 'ru' or 'en'
   * @default null
   * @enum {string|null}
   */
  language: "ru" | "en" | null;
  /**
   * Query
   * @description Text fragment to autocomplete addresses
   */
  query?: string;
  /**
   * Radius Meters
   * @description Radius around geo coordinates in meters to narrow search
   * @default null
   */
  radius_meters: number | null;
  /**
   * Restrict Value
   * @description Whether to restrict results to the specified bounds only
   * @default null
   */
  restrict_value: boolean | null;
  /**
   * Bound
   * @description Upper boundary of address granularity
   * @default null
   */
  to_bound: {
      /**
       * Value
       * @description Address granularity bound (e.g., 'region', 'city', 'street')
       * @enum {string}
       */
      value: "region" | "area" | "city" | "settlement" | "street" | "house";
  } | null;
};

/**
 * Type of DADATA_RU's DADATA_RU_SUGGEST_ADDRESS tool output.
 */
type DADATA_RU_SUGGEST_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of address suggestions
       */
      suggestions: {
          /**
           * Data
           * @description Structured address details
           */
          data: {
              /**
               * City
               * @description City name
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
               * Fias Id
               * @description FIAS identifier
               * @default null
               */
              fias_id: string | null;
              /**
               * Geo Lat
               * @description Latitude coordinate
               * @default null
               */
              geo_lat: string | null;
              /**
               * Geo Lon
               * @description Longitude coordinate
               * @default null
               */
              geo_lon: string | null;
              /**
               * House
               * @description House number, if applicable
               * @default null
               */
              house: string | null;
              /**
               * Kladr Id
               * @description KLADR identifier
               * @default null
               */
              kladr_id: string | null;
              /**
               * Postal Code
               * @description Postal code
               * @default null
               */
              postal_code: string | null;
              /**
               * Region With Type
               * @description Region name with type, e.g., 'г Москва'
               * @default null
               */
              region_with_type: string | null;
              /**
               * Settlement With Type
               * @description Settlement with type, if applicable
               * @default null
               */
              settlement_with_type: string | null;
              /**
               * Street With Type
               * @description Street with type, if applicable
               * @default null
               */
              street_with_type: string | null;
          };
          /**
           * Unrestricted Value
           * @description Full unrestricted address string
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Formatted address suggestion
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_SUGGEST_BANK tool input.
 */
type DADATA_RU_SUGGEST_BANK_INPUT = {
  /**
   * Count
   * @description Number of suggestions to return (1–20)
   * @default null
   */
  count: number | null;
  /**
   * SuggestBankFilters
   * @description Optional filters to refine bank suggestions.
   * @default null
   */
  filters: {
      /**
       * Status
       * @description Filter by bank status
       * @default null
       * @enum {string|null}
       */
      status: "ACTIVE" | "LIQUIDATING" | "LIQUIDATED" | null;
      /**
       * Type
       * @description Filter by bank type
       * @default null
       * @enum {string|null}
       */
      type: "BANK" | "NKO" | "RKC" | "OIV" | "FOREIGN" | "BANK_BRANCH" | "NKO_BRANCH" | null;
  } | null;
  /**
   * Query
   * @description Search text: partial name, BIC, INN, SWIFT, or registration number
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_SUGGEST_BANK tool output.
 */
type DADATA_RU_SUGGEST_BANK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of bank suggestions matching the query
       */
      suggestions: {
          /**
           * Data
           * @description Detailed bank information
           */
          data: {
              /**
               * Address
               * @description Structured address data
               * @default null
               */
              address: {
                  [key: string]: unknown;
              } | null;
              /**
               * Bic
               * @description Bank Identifier Code (BIK)
               * @default null
               */
              bic: string | null;
              /**
               * Corres Account
               * @description Correspondent account number
               * @default null
               */
              corres_account: string | null;
              /**
               * Inn
               * @description Taxpayer Identification Number (INN)
               * @default null
               */
              inn: string | null;
              /**
               * Kpp
               * @description Tax Registration Reason Code (KPP)
               * @default null
               */
              kpp: string | null;
              /**
               * BankName
               * @description Structured bank name details
               * @default null
               */
              name: {
                  /**
                   * Full With Opf
                   * @description Full bank name with organizational form
                   * @default null
                   */
                  full_with_opf: string | null;
                  /**
                   * Payment
                   * @description Bank name used in payment documents
                   * @default null
                   */
                  payment: string | null;
              } | null;
              /**
               * Okpo
               * @description All-Russian classifier code (OKPO)
               * @default null
               */
              okpo: string | null;
              /**
               * Opf
               * @description Organizational-legal form details
               * @default null
               */
              opf: {
                  [key: string]: unknown;
              } | null;
              /**
               * Payment City
               * @description City for payments
               * @default null
               */
              payment_city: string | null;
              /**
               * Registration Number
               * @description Registration number
               * @default null
               */
              registration_number: string | null;
              /**
               * State
               * @description Bank status details
               * @default null
               */
              state: {
                  [key: string]: unknown;
              } | null;
              /**
               * Swift
               * @description SWIFT code
               * @default null
               */
              swift: string | null;
              /**
               * Type
               * @description Bank type (e.g., BANK, NKO)
               * @default null
               */
              type: string | null;
          };
          /**
           * Unrestricted Value
           * @description Suggested full name with extra details
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Suggested full bank name
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_SUGGEST_CAR_BRAND tool input.
 */
type DADATA_RU_SUGGEST_CAR_BRAND_INPUT = {
  /**
   * Count
   * @description Maximum number of suggestions to return. Defaults to 10
   * @default null
   */
  count: number | null;
  /**
   * Query
   * @description Text fragment to autocomplete car brands
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_SUGGEST_CAR_BRAND tool output.
 */
type DADATA_RU_SUGGEST_CAR_BRAND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of car brand suggestions
       */
      suggestions: {
          /**
           * Data
           * @description Additional data about the suggestion
           */
          data: {
              /**
               * Code
               * @description Car brand code in DaData database
               * @default null
               */
              code: string | null;
          };
          /**
           * Unrestricted Value
           * @description Suggested car brand name in unrestricted form
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Suggested car brand name
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_SUGGEST_COURT tool input.
 */
type DADATA_RU_SUGGEST_COURT_INPUT = {
  /**
   * Count
   * @description Number of suggestions to return (1–20). Defaults to 10 if omitted
   * @default null
   */
  count: number | null;
  /**
   * Filters
   * @description Additional search filters (e.g., {'region_code': '77', 'court_type': 'arbitration'})
   * @default null
   */
  filters: {
      [key: string]: unknown;
  } | null;
  /**
   * Locations
   * @description Filter results by FIAS-based location identifiers
   * @default null
   */
  locations: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Query
   * @description Text fragment to search courts by name or address
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_SUGGEST_COURT tool output.
 */
type DADATA_RU_SUGGEST_COURT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of court suggestions matching the query
       */
      suggestions: {
          /**
           * Data
           * @description Structured court details
           */
          data: {
              /**
               * Address
               * @description Court address information
               */
              address: {
                  /**
                   * Data
                   * @description Structured address details as in DaData Address API
                   * @default null
                   */
                  data: {
                      [key: string]: unknown;
                  } | null;
                  /**
                   * Unrestricted Value
                   * @description Full address string for the court
                   * @default null
                   */
                  unrestricted_value: string | null;
                  /**
                   * Value
                   * @description Formatted address string for the court
                   * @default null
                   */
                  value: string | null;
              };
              /**
               * Code
               * @description Court code identifier
               * @default null
               */
              code: string | null;
              /**
               * Name
               * @description Court name
               * @default null
               */
              name: string | null;
              /**
               * Region
               * @description Region where the court is located
               * @default null
               */
              region: string | null;
              /**
               * Type
               * @description Court type (e.g., arbitration, general jurisdiction, magistrate)
               * @default null
               */
              type: string | null;
          };
          /**
           * Unrestricted Value
           * @description Full court name and address
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Suggested court name and address summary
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_SUGGEST_CURRENCY tool input.
 */
type DADATA_RU_SUGGEST_CURRENCY_INPUT = {
  /**
   * Count
   * @description Number of suggestions to return (1–20). Defaults to 10 if omitted
   * @default null
   */
  count: number | null;
  /**
   * Query
   * @description Currency code or name to search for
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_SUGGEST_CURRENCY tool output.
 */
type DADATA_RU_SUGGEST_CURRENCY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of currency suggestions
       */
      suggestions: {
          /**
           * Data
           * @description Structured currency details
           */
          data: {
              /**
               * Code
               * @description ISO 4217 alphabetic currency code
               */
              code: string;
              /**
               * Id
               * @description ISO 4217 numeric currency code
               */
              id: string;
              /**
               * Name
               * @description Full currency name
               */
              name: string;
          };
          /**
           * Unrestricted Value
           * @description Unrestricted currency name
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Suggested currency name
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_SUGGEST_EMAIL tool input.
 */
type DADATA_RU_SUGGEST_EMAIL_INPUT = {
  /**
   * Count
   * @description Number of suggestions to return (1–20). Defaults to 10 if omitted
   * @default null
   */
  count: number | null;
  /**
   * Query
   * @description Email prefix or partial email to autocomplete
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_SUGGEST_EMAIL tool output.
 */
type DADATA_RU_SUGGEST_EMAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of email suggestions
       */
      suggestions: {
          /**
           * Data
           * @description Additional data object (always null for email suggestions)
           * @default null
           */
          data: {
              [key: string]: unknown;
          } | null;
          /**
           * Unrestricted Value
           * @description Same as value (for compatibility)
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Suggested full email address
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_SUGGEST_FMS_UNIT tool input.
 */
type DADATA_RU_SUGGEST_FMS_UNIT_INPUT = {
  /**
   * Count
   * @description Number of suggestions to return (1–20). Defaults to 10 if omitted
   * @default null
   */
  count: number | null;
  /**
   * Query
   * @description Text fragment to search for a passport issuing authority by code or name
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_SUGGEST_FMS_UNIT tool output.
 */
type DADATA_RU_SUGGEST_FMS_UNIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of passport issuing authority suggestions
       */
      suggestions: {
          /**
           * Data
           * @description Structured FMS unit details
           */
          data: {
              /**
               * Address
               * @description Address of the FMS unit
               * @default null
               */
              address: string | null;
              /**
               * Code
               * @description FMS unit code
               * @default null
               */
              code: string | null;
              /**
               * Name
               * @description FMS unit name
               * @default null
               */
              name: string | null;
              /**
               * Region Code
               * @description Region code
               * @default null
               */
              region_code: string | null;
              /**
               * Type
               * @description Type of the FMS unit
               * @default null
               */
              type: string | null;
              /**
               * Type Full
               * @description Full type name of the FMS unit
               * @default null
               */
              type_full: string | null;
          };
          /**
           * Unrestricted Value
           * @description Detailed FMS unit name and code
           */
          unrestricted_value: string;
          /**
           * Value
           * @description FMS unit name and code
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_SUGGEST_FNS_UNIT tool input.
 */
type DADATA_RU_SUGGEST_FNS_UNIT_INPUT = {
  /**
   * Count
   * @description Number of suggestions to return (120); defaults to 10 if omitted
   * @default null
   */
  count: number | null;
  /**
   * Query
   * @description Text fragment to search for a tax inspection unit by name or code
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_SUGGEST_FNS_UNIT tool output.
 */
type DADATA_RU_SUGGEST_FNS_UNIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of suggested tax inspection units
       */
      suggestions: {
          /**
           * Data
           * @description Detailed inspection unit info
           */
          data: {
              /**
               * Address
               * @description Address details of the inspection unit
               */
              address: {
                  /**
                   * Data
                   * @description Structured address data returned by DaData
                   */
                  data: {
                      [key: string]: unknown;
                  };
                  /**
                   * Unrestricted Value
                   * @description Full unrestricted address string
                   */
                  unrestricted_value: string;
                  /**
                   * Value
                   * @description Address as a single-line string
                   */
                  value: string;
              };
              /**
               * Code
               * @description Tax inspection code, e.g., '7700'
               */
              code: string;
              /**
               * Name
               * @description Name details of the inspection unit
               */
              name: {
                  /**
                   * Full
                   * @description Full unit name without the type
                   */
                  full: string;
                  /**
                   * Full With Type
                   * @description Full name including the type
                   */
                  full_with_type: string;
                  /**
                   * Short
                   * @description Shortened unit name without the type
                   */
                  short: string;
                  /**
                   * Short With Type
                   * @description Short name including the type, e.g., 'УФНС по г. Москве'
                   */
                  short_with_type: string;
              };
          };
          /**
           * Unrestricted Value
           * @description Full suggested unit name
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Suggested unit name
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_SUGGEST_FTS_UNIT tool input.
 */
type DADATA_RU_SUGGEST_FTS_UNIT_INPUT = {
  /**
   * Count
   * @description Number of suggestions to return (1–20). Defaults to 10 if omitted
   * @default null
   */
  count: number | null;
  /**
   * FtsUnitFilters
   * @description Optional filters to narrow suggestions
   * @default null
   */
  filters: {
      /**
       * Customs Code
       * @description Customs code prefix to filter offices
       * @default null
       */
      customs_code: string | null;
      /**
       * Region Code
       * @description Federal region code to filter customs offices
       * @default null
       */
      region_code: string | null;
  } | null;
  /**
   * Query
   * @description Text fragment for FTS unit (customs office) autocomplete
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_SUGGEST_FTS_UNIT tool output.
 */
type DADATA_RU_SUGGEST_FTS_UNIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of FTS unit suggestions
       */
      suggestions: {
          /**
           * Data
           * @description Detailed data about the customs office
           */
          data: {
              /**
               * Code
               * @description FTS office code
               * @default null
               */
              code: string | null;
              /**
               * Customs Code
               * @description Customs code prefix for the office
               * @default null
               */
              customs_code: string | null;
              /**
               * Region Code
               * @description Federal region code
               * @default null
               */
              region_code: string | null;
              /**
               * Type
               * @description Type of the customs office
               * @default null
               */
              type: string | null;
          };
          /**
           * Unrestricted Value
           * @description Full customs office name
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Formatted customs office suggestion
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_SUGGEST_METRO tool input.
 */
type DADATA_RU_SUGGEST_METRO_INPUT = {
  /**
   * Count
   * @description Number of suggestions to return (minimum 1)
   * @default null
   */
  count: number | null;
  /**
   * Filters
   * @description Optional list of filters to narrow down suggestions
   * @default null
   */
  filters: {
      /**
       * City
       * @description Name of the city to filter by
       * @default null
       */
      city: string | null;
      /**
       * City Fias Id
       * @description FIAS ID of the city
       * @default null
       */
      city_fias_id: string | null;
      /**
       * City Kladr Id
       * @description KLADR code of the city
       * @default null
       */
      city_kladr_id: string | null;
      /**
       * Is Closed
       * @description Whether to include closed stations only (true) or only open stations (false)
       * @default null
       */
      is_closed: boolean | null;
      /**
       * Line Id
       * @description ID of the metro line to filter suggestions
       * @default null
       */
      line_id: string | null;
  }[] | null;
  /**
   * Query
   * @description Text fragment to autocomplete metro station names
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_SUGGEST_METRO tool output.
 */
type DADATA_RU_SUGGEST_METRO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of metro station suggestions
       */
      suggestions: {
          /**
           * Data
           * @description Structured details of the metro station
           */
          data: {
              /**
               * City
               * @description City name
               * @default null
               */
              city: string | null;
              /**
               * City Fias Id
               * @description FIAS ID of the city
               * @default null
               */
              city_fias_id: string | null;
              /**
               * City Kladr Id
               * @description KLADR code of the city
               * @default null
               */
              city_kladr_id: string | null;
              /**
               * Color
               * @description RGB color code of the line
               * @default null
               */
              color: string | null;
              /**
               * Geo Lat
               * @description Latitude of the station
               * @default null
               */
              geo_lat: number | null;
              /**
               * Geo Lon
               * @description Longitude of the station
               * @default null
               */
              geo_lon: number | null;
              /**
               * Is Closed
               * @description Station closed status: true if closed, false if open
               * @default null
               */
              is_closed: boolean | null;
              /**
               * Line Id
               * @description ID of the metro line
               * @default null
               */
              line_id: string | null;
              /**
               * Line Name
               * @description Name of the metro line
               * @default null
               */
              line_name: string | null;
              /**
               * Name
               * @description Metro station name
               * @default null
               */
              name: string | null;
          };
          /**
           * Value
           * @description Suggested metro station entry as a single line
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_SUGGEST_MKTU tool input.
 */
type DADATA_RU_SUGGEST_MKTU_INPUT = {
  /**
   * Count
   * @description Number of suggestions to return (1–20). Defaults to 10 if omitted
   * @default null
   */
  count: number | null;
  /**
   * Filter
   * @description Additional filters to narrow suggestions. E.g., {'code': '35'}
   * @default null
   */
  filter: {
      [key: string]: unknown;
  } | null;
  /**
   * Query
   * @description Text to search suggestions by MKTU name, code, or description
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_SUGGEST_MKTU tool output.
 */
type DADATA_RU_SUGGEST_MKTU_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of MKTU suggestions
       */
      suggestions: {
          /**
           * Code
           * @description MKTU class code (e.g., '35')
           */
          code: string;
          /**
           * Data
           * @description Detailed classifier data
           */
          data: {
              /**
               * Okpd2 Codes
               * @description Associated OKPD2 codes
               */
              okpd2_codes: string[];
              /**
               * Okved2 Codes
               * @description Associated OKVED2 codes
               */
              okved2_codes: string[];
          };
          /**
           * Description
           * @description Description of the MKTU entry
           */
          description: string;
          /**
           * Value
           * @description Suggested MKTU entry name
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_SUGGEST_NAME tool input.
 */
type DADATA_RU_SUGGEST_NAME_INPUT = {
  /**
   * Count
   * @description Number of suggestions to return (1–20). Defaults to 10 if omitted
   * @default null
   */
  count: number | null;
  /**
   * Gender
   * @description Desired gender for suggestions: 'MALE' or 'FEMALE'
   * @default null
   * @enum {string|null}
   */
  gender: "MALE" | "FEMALE" | null;
  /**
   * Language
   * @description Response language: 'ru' or 'en'. Defaults to 'ru'
   * @default null
   * @enum {string|null}
   */
  language: "ru" | "en" | null;
  /**
   * Parts
   * @description Specific name parts to search: ['SURNAME','NAME','PATRONYMIC']
   * @default null
   */
  parts: string[] | null;
  /**
   * Query
   * @description Text fragment to autocomplete full names (FIO)
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_SUGGEST_NAME tool output.
 */
type DADATA_RU_SUGGEST_NAME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of name suggestions
       */
      suggestions: {
          /**
           * Data
           * @description Structured name details
           */
          data: {
              /**
               * Gender
               * @description Gender of suggested name
               * @default null
               * @enum {string|null}
               */
              gender: "MALE" | "FEMALE" | null;
              /**
               * Name
               * @description Suggested given name part
               * @default null
               */
              name: string | null;
              /**
               * Patronymic
               * @description Suggested patronymic part
               * @default null
               */
              patronymic: string | null;
              /**
               * Qc
               * @description Quality code of the suggestion
               * @default null
               */
              qc: number | null;
              /**
               * Source
               * @description Original source string for suggestion
               * @default null
               */
              source: string | null;
              /**
               * Surname
               * @description Suggested surname part
               * @default null
               */
              surname: string | null;
          };
          /**
           * Unrestricted Value
           * @description Full unrestricted name string
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Formatted full name suggestion
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_SUGGEST_OKPD2 tool input.
 */
type DADATA_RU_SUGGEST_OKPD2_INPUT = {
  /**
   * Count
   * @description Number of suggestions to return (1–20). Defaults to 10 if omitted
   * @default null
   */
  count: number | null;
  /**
   * Query
   * @description Search query for OKPD2 code or name
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_SUGGEST_OKPD2 tool output.
 */
type DADATA_RU_SUGGEST_OKPD2_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of OKPD2 suggestions matching the query
       */
      suggestions: {
          /**
           * Data
           * @description Structured OKPD2 suggestion data
           */
          data: {
              /**
               * Code
               * @description OKPD2 classifier code
               * @default null
               */
              code: string | null;
              /**
               * Comment
               * @description Additional information or comment
               * @default null
               */
              comment: string | null;
              /**
               * Level
               * @description Hierarchy level of the classifier code
               * @default null
               */
              level: number | null;
              /**
               * Section
               * @description Section of the OKPD2 classifier
               * @default null
               */
              section: string | null;
          };
          /**
           * Unrestricted Value
           * @description Full OKPD2 code and name
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Suggested OKPD2 code and name
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_SUGGEST_OKTMO tool input.
 */
type DADATA_RU_SUGGEST_OKTMO_INPUT = {
  /**
   * Count
   * @description Number of suggestions to return (1–20). Defaults to 10 if omitted
   * @default null
   */
  count: number | null;
  /**
   * Query
   * @description Search query for OKTMO codes (name or code fragment)
   */
  query?: string;
  /**
   * Status
   * @description Filter by status values 'ACTIVE' or 'LIQUIDATED'
   * @default null
   */
  status: string[] | null;
};

/**
 * Type of DADATA_RU's DADATA_RU_SUGGEST_OKTMO tool output.
 */
type DADATA_RU_SUGGEST_OKTMO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of OKTMO suggestions
       */
      suggestions: {
          /**
           * Data
           * @description Structured OKTMO details
           */
          data: {
              /**
               * Level
               * @description Administrative level of the territory
               */
              level: string;
              /**
               * Name
               * @description Name details with type
               */
              name: {
                  /**
                   * Full
                   * @description Full name without type
                   */
                  full: string;
                  /**
                   * Full With Type
                   * @description Full name with type
                   */
                  full_with_type: string;
                  /**
                   * Short
                   * @description Short name without type
                   */
                  short: string;
                  /**
                   * Short With Type
                   * @description Short name with type
                   */
                  short_with_type: string;
                  /**
                   * Type
                   * @description Type of the territory
                   */
                  type: string;
                  /**
                   * Type Full
                   * @description Full type of the territory
                   */
                  type_full: string;
                  /**
                   * Type Short
                   * @description Short type of the territory
                   */
                  type_short: string;
              };
              /**
               * Oktmo
               * @description OKTMO code
               */
              oktmo: string;
              /**
               * Status
               * @description Status of the territory
               * @enum {string}
               */
              status: "ACTIVE" | "LIQUIDATED";
              /**
               * Type
               * @description Object type of the territory
               */
              type: string;
          };
          /**
           * Unrestricted Value
           * @description Detailed OKTMO information
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Display value (OKTMO name or code)
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_SUGGEST_OKVED2 tool input.
 */
type DADATA_RU_SUGGEST_OKVED2_INPUT = {
  /**
   * Count
   * @description Number of suggestions to return (1–20). Defaults to 10 if omitted.
   * @default null
   */
  count: number | null;
  /**
   * Bound
   * @description Lower boundary of OKVED2 selection
   * @default null
   */
  from_bound: {
      /**
       * Value
       * @description OKVED2 boundary value (section or exact code), e.g. 'A' or '62.01'
       */
      value: string;
  } | null;
  /**
   * Query
   * @description Fragment of OKVED2 code or activity name to search for
   */
  query?: string;
  /**
   * Bound
   * @description Upper boundary of OKVED2 selection
   * @default null
   */
  to_bound: {
      /**
       * Value
       * @description OKVED2 boundary value (section or exact code), e.g. 'A' or '62.01'
       */
      value: string;
  } | null;
};

/**
 * Type of DADATA_RU's DADATA_RU_SUGGEST_OKVED2 tool output.
 */
type DADATA_RU_SUGGEST_OKVED2_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of OKVED2 suggestions
       */
      suggestions: {
          /**
           * Data
           * @description Structured OKVED2 data
           */
          data: {
              /**
               * Code
               * @description OKVED2 code, e.g. '62.01'
               */
              code: string;
              /**
               * Name
               * @description Name of the activity
               */
              name: string;
              /**
               * Okved2DataParent
               * @description Parent activity data, if any
               * @default null
               */
              parent: {
                  /**
                   * Code
                   * @description Parent OKVED2 code
                   */
                  code: string;
                  /**
                   * Name
                   * @description Parent OKVED2 name
                   */
                  name: string;
              } | null;
              /**
               * Section
               * @description OKVED2 section symbol, e.g. 'J'
               */
              section: string;
          };
          /**
           * Unrestricted Value
           * @description Full unrestricted code and name
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Complete code and name, e.g. '62.01 - Разработка компьютерного программного обеспечения'
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_SUGGEST_PARTY tool input.
 */
type DADATA_RU_SUGGEST_PARTY_INPUT = {
  /**
   * Branches
   * @description Which branches to include: "main" only, or "all" (default).
   * @default null
   * @enum {string|null}
   */
  branches: "main" | "all" | null;
  /**
   * Count
   * @description Number of suggestions to return (1–20). Defaults to 10 if omitted.
   * @default null
   */
  count: number | null;
  /**
   * Filters
   * @description Additional filters as defined in DaData docs (e.g., legalForm, region).
   * @default null
   */
  filters: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Query
   * @description Search query: company name, INN, OGRN, address, etc.
   */
  query?: string;
  /**
   * Status
   * @description Filter by entity status.
   * @default null
   */
  status: string[] | null;
  /**
   * Type
   * @description Filter by entity type: "LEGAL" (juridical) or "INDIVIDUAL" (entrepreneur).
   * @default null
   * @enum {string|null}
   */
  type: "LEGAL" | "INDIVIDUAL" | null;
};

/**
 * Type of DADATA_RU's DADATA_RU_SUGGEST_PARTY tool output.
 */
type DADATA_RU_SUGGEST_PARTY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of party suggestions matching the query
       */
      suggestions: {
          /**
           * Data
           * @description Detailed party information
           */
          data: {
              /**
               * Address
               * @description Structured address information
               * @default null
               */
              address: {
                  [key: string]: unknown;
              } | null;
              /**
               * Inn
               * @description INN (Taxpayer Identification Number)
               * @default null
               */
              inn: string | null;
              /**
               * Kpp
               * @description KPP (Tax Registration Reason Code)
               * @default null
               */
              kpp: string | null;
              /**
               * Management
               * @description Management data
               * @default null
               */
              management: {
                  [key: string]: unknown;
              } | null;
              /**
               * Name
               * @description Structured name information
               * @default null
               */
              name: {
                  [key: string]: unknown;
              } | null;
              /**
               * Ogrn
               * @description OGRN/OGRNIP (Primary State Registration Number)
               * @default null
               */
              ogrn: string | null;
              /**
               * Ogrn Date
               * @description OGRN registration date as UNIX timestamp
               * @default null
               */
              ogrn_date: number | null;
              /**
               * State
               * @description Entity status details
               * @default null
               */
              state: {
                  [key: string]: unknown;
              } | null;
              /**
               * Type
               * @description Entity type returned by DaData
               * @default null
               * @enum {string|null}
               */
              type: "LEGAL" | "INDIVIDUAL" | null;
          };
          /**
           * Unrestricted Value
           * @description Full unformatted value
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Suggested entity name or identifier
           */
          value: string;
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
 * Type of DADATA_RU's DADATA_RU_SUGGEST_POSTAL_UNIT tool input.
 */
type DADATA_RU_SUGGEST_POSTAL_UNIT_INPUT = {
  /**
   * Count
   * @description Number of suggestions to return (1–20). Defaults to 10 if omitted
   * @default null
   */
  count: number | null;
  /**
   * SuggestPostalUnitFilters
   * @description Optional filters to refine postal unit suggestions.
   * @default null
   */
  filters: {
      /**
       * City Kladr Id
       * @description KLADR identifier of the city to filter by
       * @default null
       */
      city_kladr_id: string | null;
      /**
       * Region Kladr Id
       * @description KLADR identifier of the region to filter by
       * @default null
       */
      region_kladr_id: string | null;
  } | null;
  /**
   * Query
   * @description Search string: postal unit name, address fragment, or postal code
   */
  query?: string;
};

/**
 * Type of DADATA_RU's DADATA_RU_SUGGEST_POSTAL_UNIT tool output.
 */
type DADATA_RU_SUGGEST_POSTAL_UNIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Suggestions
       * @description List of postal unit suggestions
       */
      suggestions: {
          /**
           * Data
           * @description Additional data about the postal unit
           */
          data: {
              /**
               * Address
               * @description Structured address of the postal unit
               * @default null
               */
              address: {
                  [key: string]: unknown;
              } | null;
              /**
               * Code
               * @description Postal unit code
               * @default null
               */
              code: string | null;
              /**
               * Name
               * @description Name of the postal unit
               * @default null
               */
              name: string | null;
              /**
               * Phones
               * @description List of contact phone numbers
               * @default null
               */
              phones: string[] | null;
              /**
               * Type
               * @description Type of the postal unit
               * @default null
               */
              type: string | null;
          };
          /**
           * Unrestricted Value
           * @description Full suggestion value without abbreviation
           */
          unrestricted_value: string;
          /**
           * Value
           * @description Formatted suggestion value
           */
          value: string;
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
 * Type map of all available tool input types for toolkit "DADATA_RU".
 */
export type DADATA_RU_TOOL_INPUTS = {
  CLEAN_ADDRESS: DADATA_RU_CLEAN_ADDRESS_INPUT
  CLEAN_BIRTHDATE: DADATA_RU_CLEAN_BIRTHDATE_INPUT
  CLEAN_EMAIL: DADATA_RU_CLEAN_EMAIL_INPUT
  CLEAN_NAME: DADATA_RU_CLEAN_NAME_INPUT
  CLEAN_PASSPORT: DADATA_RU_CLEAN_PASSPORT_INPUT
  CLEAN_PHONE: DADATA_RU_CLEAN_PHONE_INPUT
  CLEAN_VEHICLE: DADATA_RU_CLEAN_VEHICLE_INPUT
  FIND_ADDRESS: DADATA_RU_FIND_ADDRESS_INPUT
  FIND_BANK: DADATA_RU_FIND_BANK_INPUT
  FIND_CAR_BRAND: DADATA_RU_FIND_CAR_BRAND_INPUT
  FIND_COUNTRY: DADATA_RU_FIND_COUNTRY_INPUT
  FIND_CURRENCY: DADATA_RU_FIND_CURRENCY_INPUT
  FIND_DELIVERY: DADATA_RU_FIND_DELIVERY_INPUT
  FIND_FMS_UNIT: DADATA_RU_FIND_FMS_UNIT_INPUT
  FIND_FTS_UNIT: DADATA_RU_FIND_FTS_UNIT_INPUT
  FIND_MKTU: DADATA_RU_FIND_MKTU_INPUT
  FIND_OKVED2: DADATA_RU_FIND_OKVED2_INPUT
  FIND_PARTY: DADATA_RU_FIND_PARTY_INPUT
  FIND_PARTY_BY: DADATA_RU_FIND_PARTY_BY_INPUT
  FIND_PARTY_KZ: DADATA_RU_FIND_PARTY_KZ_INPUT
  GEOLOCATE_ADDRESS: DADATA_RU_GEOLOCATE_ADDRESS_INPUT
  GET_PROFILE_BALANCE: DADATA_RU_GET_PROFILE_BALANCE_INPUT
  GET_PROFILE_STATISTICS: DADATA_RU_GET_PROFILE_STATISTICS_INPUT
  GET_REFERENCE_VERSIONS: DADATA_RU_GET_REFERENCE_VERSIONS_INPUT
  IP_LOCATE_ADDRESS: DADATA_RU_IP_LOCATE_ADDRESS_INPUT
  SUGGEST_ADDRESS: DADATA_RU_SUGGEST_ADDRESS_INPUT
  SUGGEST_BANK: DADATA_RU_SUGGEST_BANK_INPUT
  SUGGEST_CAR_BRAND: DADATA_RU_SUGGEST_CAR_BRAND_INPUT
  SUGGEST_COURT: DADATA_RU_SUGGEST_COURT_INPUT
  SUGGEST_CURRENCY: DADATA_RU_SUGGEST_CURRENCY_INPUT
  SUGGEST_EMAIL: DADATA_RU_SUGGEST_EMAIL_INPUT
  SUGGEST_FMS_UNIT: DADATA_RU_SUGGEST_FMS_UNIT_INPUT
  SUGGEST_FNS_UNIT: DADATA_RU_SUGGEST_FNS_UNIT_INPUT
  SUGGEST_FTS_UNIT: DADATA_RU_SUGGEST_FTS_UNIT_INPUT
  SUGGEST_METRO: DADATA_RU_SUGGEST_METRO_INPUT
  SUGGEST_MKTU: DADATA_RU_SUGGEST_MKTU_INPUT
  SUGGEST_NAME: DADATA_RU_SUGGEST_NAME_INPUT
  SUGGEST_OKPD2: DADATA_RU_SUGGEST_OKPD2_INPUT
  SUGGEST_OKTMO: DADATA_RU_SUGGEST_OKTMO_INPUT
  SUGGEST_OKVED2: DADATA_RU_SUGGEST_OKVED2_INPUT
  SUGGEST_PARTY: DADATA_RU_SUGGEST_PARTY_INPUT
  SUGGEST_POSTAL_UNIT: DADATA_RU_SUGGEST_POSTAL_UNIT_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DADATA_RU".
 */
export type DADATA_RU_TOOL_OUTPUTS = {
  CLEAN_ADDRESS: DADATA_RU_CLEAN_ADDRESS_OUTPUT
  CLEAN_BIRTHDATE: DADATA_RU_CLEAN_BIRTHDATE_OUTPUT
  CLEAN_EMAIL: DADATA_RU_CLEAN_EMAIL_OUTPUT
  CLEAN_NAME: DADATA_RU_CLEAN_NAME_OUTPUT
  CLEAN_PASSPORT: DADATA_RU_CLEAN_PASSPORT_OUTPUT
  CLEAN_PHONE: DADATA_RU_CLEAN_PHONE_OUTPUT
  CLEAN_VEHICLE: DADATA_RU_CLEAN_VEHICLE_OUTPUT
  FIND_ADDRESS: DADATA_RU_FIND_ADDRESS_OUTPUT
  FIND_BANK: DADATA_RU_FIND_BANK_OUTPUT
  FIND_CAR_BRAND: DADATA_RU_FIND_CAR_BRAND_OUTPUT
  FIND_COUNTRY: DADATA_RU_FIND_COUNTRY_OUTPUT
  FIND_CURRENCY: DADATA_RU_FIND_CURRENCY_OUTPUT
  FIND_DELIVERY: DADATA_RU_FIND_DELIVERY_OUTPUT
  FIND_FMS_UNIT: DADATA_RU_FIND_FMS_UNIT_OUTPUT
  FIND_FTS_UNIT: DADATA_RU_FIND_FTS_UNIT_OUTPUT
  FIND_MKTU: DADATA_RU_FIND_MKTU_OUTPUT
  FIND_OKVED2: DADATA_RU_FIND_OKVED2_OUTPUT
  FIND_PARTY: DADATA_RU_FIND_PARTY_OUTPUT
  FIND_PARTY_BY: DADATA_RU_FIND_PARTY_BY_OUTPUT
  FIND_PARTY_KZ: DADATA_RU_FIND_PARTY_KZ_OUTPUT
  GEOLOCATE_ADDRESS: DADATA_RU_GEOLOCATE_ADDRESS_OUTPUT
  GET_PROFILE_BALANCE: DADATA_RU_GET_PROFILE_BALANCE_OUTPUT
  GET_PROFILE_STATISTICS: DADATA_RU_GET_PROFILE_STATISTICS_OUTPUT
  GET_REFERENCE_VERSIONS: DADATA_RU_GET_REFERENCE_VERSIONS_OUTPUT
  IP_LOCATE_ADDRESS: DADATA_RU_IP_LOCATE_ADDRESS_OUTPUT
  SUGGEST_ADDRESS: DADATA_RU_SUGGEST_ADDRESS_OUTPUT
  SUGGEST_BANK: DADATA_RU_SUGGEST_BANK_OUTPUT
  SUGGEST_CAR_BRAND: DADATA_RU_SUGGEST_CAR_BRAND_OUTPUT
  SUGGEST_COURT: DADATA_RU_SUGGEST_COURT_OUTPUT
  SUGGEST_CURRENCY: DADATA_RU_SUGGEST_CURRENCY_OUTPUT
  SUGGEST_EMAIL: DADATA_RU_SUGGEST_EMAIL_OUTPUT
  SUGGEST_FMS_UNIT: DADATA_RU_SUGGEST_FMS_UNIT_OUTPUT
  SUGGEST_FNS_UNIT: DADATA_RU_SUGGEST_FNS_UNIT_OUTPUT
  SUGGEST_FTS_UNIT: DADATA_RU_SUGGEST_FTS_UNIT_OUTPUT
  SUGGEST_METRO: DADATA_RU_SUGGEST_METRO_OUTPUT
  SUGGEST_MKTU: DADATA_RU_SUGGEST_MKTU_OUTPUT
  SUGGEST_NAME: DADATA_RU_SUGGEST_NAME_OUTPUT
  SUGGEST_OKPD2: DADATA_RU_SUGGEST_OKPD2_OUTPUT
  SUGGEST_OKTMO: DADATA_RU_SUGGEST_OKTMO_OUTPUT
  SUGGEST_OKVED2: DADATA_RU_SUGGEST_OKVED2_OUTPUT
  SUGGEST_PARTY: DADATA_RU_SUGGEST_PARTY_OUTPUT
  SUGGEST_POSTAL_UNIT: DADATA_RU_SUGGEST_POSTAL_UNIT_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DADATA_RU toolkit.
 */
export const DADATA_RU = {
  slug: "dadata_ru",
  tools: {
    /**
     * Tool to clean and standardize russian postal addresses. use when you need structured address fields from raw strings.
     */
    CLEAN_ADDRESS: "DADATA_RU_CLEAN_ADDRESS",
    /**
     * Tool to standardize and validate birthdate strings. use after capturing raw birthdate inputs to normalize them to yyyy-mm-dd.
     */
    CLEAN_BIRTHDATE: "DADATA_RU_CLEAN_BIRTHDATE",
    /**
     * Tool to standardize and validate email addresses. use when you have raw email input and need to fix typos, correct domains, and classify as personal, corporate, or disposable. use after collecting user-provided emails.
     */
    CLEAN_EMAIL: "DADATA_RU_CLEAN_EMAIL",
    /**
     * Tool to standardize and parse full names (fio), detect gender, and return grammatical cases. use when you need structured name parsing and declensions from raw fio inputs.
     */
    CLEAN_NAME: "DADATA_RU_CLEAN_NAME",
    /**
     * Tool to validate a russian passport number against the official registry. use after collecting passport details.
     */
    CLEAN_PASSPORT: "DADATA_RU_CLEAN_PASSPORT",
    /**
     * Tool to standardize and validate phone numbers. use when you need to convert arbitrary phone inputs into a uniform, validated 11-digit format for further processing.
     */
    CLEAN_PHONE: "DADATA_RU_CLEAN_PHONE",
    /**
     * Tool to standardize and parse vehicle data fields. use after obtaining raw vehicle info to extract brand, model, year, vin, and other identifiers.
     */
    CLEAN_VEHICLE: "DADATA_RU_CLEAN_VEHICLE",
    /**
     * Tool to find address by identifier. use when you need full address details from a cadastral number, fias id, or kladr code.
     */
    FIND_ADDRESS: "DADATA_RU_FIND_ADDRESS",
    /**
     * Tool to find bank by bic, swift, inn, or registration number. use when you need full bank details for a specific identifier. provide optional kpp for branch-level queries.
     */
    FIND_BANK: "DADATA_RU_FIND_BANK",
    /**
     * Tool to find car brand by its identifier. use when you need detailed car brand information by code. example: find details for brand code '1010'.
     */
    FIND_CAR_BRAND: "DADATA_RU_FIND_CAR_BRAND",
    /**
     * Tool to find country details by iso or numeric code. use when you have a valid country code and need full metadata.
     */
    FIND_COUNTRY: "DADATA_RU_FIND_COUNTRY",
    /**
     * Tool to find currency details by iso 4217 code. use when you have a currency code and need its full metadata.
     */
    FIND_CURRENCY: "DADATA_RU_FIND_CURRENCY",
    /**
     * Tool to get delivery service city ids by kladr code. use when you need the cdek, boxberry, or dpd city identifiers for a given kladr code.
     */
    FIND_DELIVERY: "DADATA_RU_FIND_DELIVERY",
    /**
     * Tool to find passport authority (fms unit) by code. use when you have the fms unit code or name and need to retrieve detailed authority information.
     */
    FIND_FMS_UNIT: "DADATA_RU_FIND_FMS_UNIT",
    /**
     * Tool to find customs (fts) office by code. use when you have a customs office identifier and need detailed information.
     */
    FIND_FTS_UNIT: "DADATA_RU_FIND_FTS_UNIT",
    /**
     * Tool to find mktu classification details by code. use when you have an mktu code and need its descriptions and metadata.
     */
    FIND_MKTU: "DADATA_RU_FIND_MKTU",
    /**
     * Tool to find okved2 classifier entries by code. use when you have an okved2 code and need full metadata.
     */
    FIND_OKVED2: "DADATA_RU_FIND_OKVED2",
    /**
     * Tool to find company or individual entrepreneur details by inn, ogrn, or kpp. use when you have a valid identifier and need full registration data.
     */
    FIND_PARTY: "DADATA_RU_FIND_PARTY",
    /**
     * Tool to find a belarusian company or entrepreneur by unp. use when you have the unp and need the full registry record. example: "find party by unp = 190657494".
     */
    FIND_PARTY_BY: "DADATA_RU_FIND_PARTY_BY",
    /**
     * Tool to find kazakhstan company or entrepreneur details by bin or name. use when you have a bin or official name and need specific registration data for kz entities.
     */
    FIND_PARTY_KZ: "DADATA_RU_FIND_PARTY_KZ",
    /**
     * Tool to find nearest addresses by geographic coordinates. use when you need address suggestions around a specific location.
     */
    GEOLOCATE_ADDRESS: "DADATA_RU_GEOLOCATE_ADDRESS",
    /**
     * Tool to retrieve current dadata account balance. use before making api calls that consume funds.
     */
    GET_PROFILE_BALANCE: "DADATA_RU_GET_PROFILE_BALANCE",
    /**
     * Tool to get daily aggregated usage statistics per dadata api service. use when you need a breakdown of calls and remaining balances for a specific date.
     */
    GET_PROFILE_STATISTICS: "DADATA_RU_GET_PROFILE_STATISTICS",
    /**
     * Tool to retrieve the last update dates for dadata reference datasets (fias, egrul, banks, etc.). use before performing operations that depend on the currency of reference data.
     */
    GET_REFERENCE_VERSIONS: "DADATA_RU_GET_REFERENCE_VERSIONS",
    /**
     * Tool to determine russian address by ip. use when you need to resolve an ip to city/region data.
     */
    IP_LOCATE_ADDRESS: "DADATA_RU_IP_LOCATE_ADDRESS",
    /**
     * Tool to autocomplete and suggest addresses. use when user types partial address fragments to retrieve possible address completions.
     */
    SUGGEST_ADDRESS: "DADATA_RU_SUGGEST_ADDRESS",
    /**
     * Tool to autocomplete and suggest banks by partial details. use when you need to find russian banks by name, bic, inn, swift, or registry number.
     */
    SUGGEST_BANK: "DADATA_RU_SUGGEST_BANK",
    /**
     * Tool to suggest car brands. use when you need to autocomplete or correct partial car brand names in russian or english.
     */
    SUGGEST_CAR_BRAND: "DADATA_RU_SUGGEST_CAR_BRAND",
    /**
     * Tool to suggest russian courts by name or location. use when user types partial court name or provides filters to retrieve possible court suggestions.
     */
    SUGGEST_COURT: "DADATA_RU_SUGGEST_COURT",
    /**
     * Tool to suggest currencies by iso 4217 code or name. use when you need currency autocompletion.
     */
    SUGGEST_CURRENCY: "DADATA_RU_SUGGEST_CURRENCY",
    /**
     * Tool to autocomplete and suggest email addresses. use when user provides an email prefix and you need possible completions.
     */
    SUGGEST_EMAIL: "DADATA_RU_SUGGEST_EMAIL",
    /**
     * Tool to autocomplete and suggest passport issuing authorities. use when you need to lookup russian fms units by partial code or name.
     */
    SUGGEST_FMS_UNIT: "DADATA_RU_SUGGEST_FMS_UNIT",
    /**
     * Tool to suggest russian tax inspection units by partial name or code. use when you need to identify a tax inspection authority from incomplete user input. for example, use query='7700' to retrieve units with code 7700.
     */
    SUGGEST_FNS_UNIT: "DADATA_RU_SUGGEST_FNS_UNIT",
    /**
     * Tool to autocomplete and suggest russian customs (fts) units. use when user provides partial name or code to retrieve matching offices.
     */
    SUGGEST_FTS_UNIT: "DADATA_RU_SUGGEST_FTS_UNIT",
    /**
     * Tool to suggest metro stations. use when you need to autocomplete metro station names in russian cities.
     */
    SUGGEST_METRO: "DADATA_RU_SUGGEST_METRO",
    /**
     * Tool to suggest mktu entries. use when you need to autocomplete or find international classifier of goods and services codes based on name or description.
     */
    SUGGEST_MKTU: "DADATA_RU_SUGGEST_MKTU",
    /**
     * Tool to autocomplete and suggest full names (fio). use when user types partial name fragments to retrieve possible full name completions.
     */
    SUGGEST_NAME: "DADATA_RU_SUGGEST_NAME",
    /**
     * Tool to autocomplete and suggest russian product classification codes (okpd2). use when you need to find or validate okpd2 codes by partial queries.
     */
    SUGGEST_OKPD2: "DADATA_RU_SUGGEST_OKPD2",
    /**
     * Tool to suggest russian municipal territory codes (oktmo). use when user needs to autocomplete or search for oktmo codes by name or code fragment.
     */
    SUGGEST_OKTMO: "DADATA_RU_SUGGEST_OKTMO",
    /**
     * Tool to suggest okved2 codes by text query. use when you have a fragment of a russian economic activity code or name and need structured suggestions.
     */
    SUGGEST_OKVED2: "DADATA_RU_SUGGEST_OKVED2",
    /**
     * Tool to autocomplete and suggest russian companies or entrepreneurs. use when you have a partial name, inn, ogrn, or address and need structured suggestions.
     */
    SUGGEST_PARTY: "DADATA_RU_SUGGEST_PARTY",
    /**
     * Tool to suggest russian postal units by index or coordinates. use when autocompleting postal office codes or finding nearby mail offices.
     */
    SUGGEST_POSTAL_UNIT: "DADATA_RU_SUGGEST_POSTAL_UNIT",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DADATA_RU".
 */
export type DADATA_RU_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DADATA_RU".
 */
export type DADATA_RU_TRIGGER_EVENTS = {}
