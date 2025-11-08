// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GAGELIST's GAGELIST_ADD_CALIBRATION_RECORD tool input.
 */
type GAGELIST_ADD_CALIBRATION_RECORD_INPUT = {
  /**
   * Action Required
   * @description Actions required post-calibration
   * @default null
   */
  ActionRequired: string | null;
  /**
   * Additional Comments
   * @description Additional comments or notes
   * @default null
   */
  AdditionalComments: string | null;
  /**
   * Adjustments Required
   * @description Adjustments required description
   * @default null
   */
  AdjustmentsRequired: string | null;
  /**
   * Appropriate Notified
   * @description Who was notified of results
   * @default null
   */
  AppropriateNotified: string | null;
  /**
   * Asset No
   * @description Asset number
   * @default null
   */
  AssetNo: string | null;
  /**
   * Attachments
   * @description Array of file attachments
   * @default null
   */
  Attachments: {
      /**
       * File Name
       * @description Name of the file with extension
       * @default null
       */
      FileName: string | null;
      /**
       * File Size
       * @description Size of the file in bytes
       * @default null
       */
      FileSize: number | null;
      /**
       * File Type
       * @description MIME type or general file type
       * @default null
       */
      FileType: string | null;
      /**
       * Id
       * @description Attachment identifier
       * @default null
       */
      Id: number | null;
      /**
       * Record Id
       * @description ID of the associated record
       * @default null
       */
      RecordId: number | null;
      /**
       * Record Type
       * @description Type/category of this attachment
       * @default null
       */
      RecordType: string | null;
  }[] | null;
  /**
   * Calibration Date
   * @description Date of calibration record (ISO 8601)
   * @default null
   */
  CalibrationDate: string | null;
  /**
   * Calibration Due Date
   * @description Next due calibration date (ISO 8601)
   * @default null
   */
  CalibrationDueDate: string | null;
  /**
   * Calibration Environment
   * @description Calibration environment conditions
   * @default null
   */
  CalibrationEnvironment: string | null;
  /**
   * Calibration Instructions
   * @description Calibration instructions or notes
   * @default null
   */
  CalibrationInstructions: string | null;
  /**
   * Calibration Techinician
   * @description Technician who performed calibration
   * @default null
   */
  CalibrationTechinician: string | null;
  /**
   * Calibration Test
   * @description General calibration test performed
   * @default null
   */
  CalibrationTest: string | null;
  /**
   * Calibration Test Mode
   * @description Mode of the calibration test
   * @default null
   */
  CalibrationTestMode: string | null;
  /**
   * Calibration Tests
   * @description Array of individual test entries
   * @default null
   */
  CalibrationTests: {
      /**
       * As Found
       * @description As-found reading
       * @default null
       */
      AsFound: string | null;
      /**
       * As Left
       * @description As-left reading
       * @default null
       */
      AsLeft: string | null;
      /**
       * Calibration Ref Id
       * @description Reference ID of the parent calibration record
       * @default null
       */
      CalibrationRefId: number | null;
      /**
       * Chk As Left
       * @description Check value after adjustments
       * @default null
       */
      ChkAsLeft: string | null;
      /**
       * Expected Result
       * @description Expected result for the test
       * @default null
       */
      ExpectedResult: string | null;
      /**
       * Id
       * @description Unique identifier of the test entry
       * @default null
       */
      Id: number | null;
      /**
       * Parameter
       * @description Test parameter name
       * @default null
       */
      Parameter: string | null;
      /**
       * Pass Fail
       * @description Pass/Fail result of the test
       * @default null
       */
      PassFail: string | null;
      /**
       * Ref Standard Id
       * @description Reference standard identifier
       * @default null
       */
      RefStandardID: string | null;
      /**
       * Test Number
       * @description Test number or code
       * @default null
       */
      TestNumber: string | null;
  }[] | null;
  /**
   * Condition Received
   * @description Condition when received
   * @default null
   */
  ConditionReceived: string | null;
  /**
   * Control Number
   * @description Internal control number
   * @default null
   */
  ControlNumber: string | null;
  /**
   * Counter Values
   * @description Array of custom counter values
   * @default null
   */
  CounterValues: {
      /**
       * Field Id
       * @description Custom field identifier
       * @default null
       */
      FieldId: number | null;
      /**
       * Field Value
       * @description Value of the custom field
       * @default null
       */
      FieldValue: string | null;
      /**
       * Id
       * @description Counter value entry ID
       * @default null
       */
      Id: number | null;
      /**
       * Ref Id
       * @description Reference ID for this field entry
       * @default null
       */
      RefID: number | null;
      /**
       * Ref Type
       * @description Reference type code
       * @default null
       */
      RefType: number | null;
      /**
       * Updated Date
       * @description Last update timestamp (ISO 8601)
       * @default null
       */
      UpdatedDate: string | null;
  }[] | null;
  /**
   * Created By
   * @description User who created the record
   * @default null
   */
  CreatedBy: string | null;
  /**
   * Date Calibrated
   * @description Actual calibration date (ISO 8601)
   * @default null
   */
  DateCalibrated: string | null;
  /**
   * Days
   * @description Interval days component
   * @default null
   */
  Days: number | null;
  /**
   * Described Repairs
   * @description Description of any repairs performed
   * @default null
   */
  DescribedRepairs: string | null;
  /**
   * Equipment As Found
   * @description Condition of equipment as found
   * @default null
   */
  EquipmentAsFound: string | null;
  /**
   * Equipment As Left
   * @description Condition of equipment as left
   * @default null
   */
  EquipmentAsLeft: string | null;
  /**
   * Equipment Ref Id
   * @description Reference ID of the equipment
   * @default null
   */
  EquipmentRefId: number | null;
  /**
   * Exernal Calibration Record
   * @description External calibration record reference
   * @default null
   */
  ExernalCalibrationRecord: string | null;
  /**
   * Fit Intended Purpose
   * @description Fit for intended purpose note
   * @default null
   */
  FitIntendedPurpose: string | null;
  /**
   * Interval
   * @description Calibration interval description
   * @default null
   */
  Interval: string | null;
  /**
   * Is Deleted
   * @description Soft delete flag
   * @default null
   */
  IsDeleted: boolean | null;
  /**
   * Last Calibration Date
   * @description Date of last calibration (ISO 8601)
   * @default null
   */
  LastCalibrationDate: string | null;
  /**
   * Location
   * @description Location of the equipment
   * @default null
   */
  Location: string | null;
  /**
   * Manufacturer
   * @description Equipment manufacturer name
   * @default null
   */
  Manufacturer: string | null;
  /**
   * Master Standard
   * @description Master standard used for calibration
   * @default null
   */
  MasterStandard: string | null;
  /**
   * Model
   * @description Equipment model
   * @default null
   */
  Model: string | null;
  /**
   * Months
   * @description Interval months component
   * @default null
   */
  Months: number | null;
  /**
   * Next Calibration Due
   * @description Next calibration due date (ISO 8601)
   * @default null
   */
  NextCalibrationDue: string | null;
  /**
   * Product Recalled
   * @description Product recalled flag or info
   * @default null
   */
  ProductRecalled: string | null;
  /**
   * Range Or Size
   * @description Operational range or size
   * @default null
   */
  RangeOrSize: string | null;
  /**
   * Record Number
   * @description Record number or code
   * @default null
   */
  RecordNumber: string | null;
  /**
   * Repairs Required
   * @description Repairs required description
   * @default null
   */
  RepairsRequired: string | null;
  /**
   * Responsible User
   * @description Responsible user for calibration
   * @default null
   */
  ResponsibleUser: string | null;
  /**
   * Serial Number
   * @description Equipment serial number
   * @default null
   */
  SerialNumber: string | null;
  /**
   * Signature Data
   * @description Signature data blob or token
   * @default null
   */
  SignatureData: string | null;
  /**
   * Signature Public Key
   * @description Public key for signature verification
   * @default null
   */
  SignaturePublicKey: string | null;
  /**
   * Signed By
   * @description User who signed
   * @default null
   */
  SignedBy: string | null;
  /**
   * Signed Date
   * @description Date of signature (ISO 8601)
   * @default null
   */
  SignedDate: string | null;
  /**
   * Signed Pdf
   * @description Base64 or URL of signed PDF document
   * @default null
   */
  SignedPDF: string | null;
  /**
   * Test Cost
   * @description Cost associated with calibration test
   * @default null
   */
  TestCost: string | null;
  /**
   * Test Equipment Availability
   * @description Availability of test equipment
   * @default null
   */
  TestEquipmentAvailability: string | null;
  /**
   * Test Equipment Falls
   * @description Test equipment falls information
   * @default null
   */
  TestEquipmentFalls: string | null;
  /**
   * Test Equipment Falls As Found
   * @description Equipment falls as found reading
   * @default null
   */
  TestEquipmentFallsAsFound: string | null;
  /**
   * Test Time
   * @description Duration of test or timestamp
   * @default null
   */
  TestTime: string | null;
  /**
   * Tolerance
   * @description Tolerance level
   * @default null
   */
  Tolerance: string | null;
  /**
   * Tolerance Comment
   * @description Comments on tolerance
   * @default null
   */
  ToleranceComment: string | null;
  /**
   * Tolerance Condition
   * @description Condition relative to tolerance
   * @default null
   */
  ToleranceCondition: string | null;
  /**
   * Type
   * @description Type or category of equipment
   * @default null
   */
  Type: string | null;
  /**
   * Types Measurement
   * @description Measurement types supported
   * @default null
   */
  TypesMeasurement: string | null;
  /**
   * Uncertainty
   * @description Measurement uncertainty
   * @default null
   */
  Uncertainty: string | null;
  /**
   * Unit Of Measure
   * @description Unit of measure
   * @default null
   */
  UnitOfMeasure: string | null;
  /**
   * Updated By
   * @description User who last updated the record
   * @default null
   */
  UpdatedBy: string | null;
  /**
   * Updated Date
   * @description Last update timestamp (ISO 8601)
   * @default null
   */
  UpdatedDate: string | null;
  /**
   * Website
   * @description Manufacturer website URL
   * @default null
   */
  Website: string | null;
  /**
   * Years
   * @description Interval years component
   * @default null
   */
  Years: number | null;
};

/**
 * Type of GAGELIST's GAGELIST_ADD_CALIBRATION_RECORD tool output.
 */
type GAGELIST_ADD_CALIBRATION_RECORD_OUTPUT = {
  /**
   * Data
   * @description Newly created calibration record ID
   * @default null
   */
  data: number | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Optional message or error details
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates if the operation was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GAGELIST's GAGELIST_ADD_GAGE_RECORD tool input.
 */
type GAGELIST_ADD_GAGE_RECORD_INPUT = {
  /**
   * Area
   * @description Operational area
   * @default null
   */
  Area: string | null;
  /**
   * Asset No
   * @description Asset number
   * @default null
   */
  AssetNo: string | null;
  /**
   * Attachments
   * @description List of attachments
   * @default null
   */
  Attachments: {
      /**
       * File Name
       * @description Filename including extension
       */
      FileName: string;
      /**
       * File Size
       * @description Size of file in bytes
       */
      FileSize: number;
      /**
       * File Type
       * @description MIME type or general file type
       */
      FileType: string;
      /**
       * Id
       * @description Attachment unique identifier
       */
      Id: number;
      /**
       * Record Id
       * @description ID of the record this file is attached to
       */
      RecordId: number;
      /**
       * Record Type
       * @description Type/category of this attachment
       */
      RecordType: string;
  }[] | null;
  /**
   * Calibration Due Date
   * Format: date-time
   * @description Next calibration due date in ISO 8601 format
   * @default null
   */
  CalibrationDueDate: string | null;
  /**
   * Calibration Environment
   * @description Calibration environment conditions
   * @default null
   */
  CalibrationEnvironment: string | null;
  /**
   * Calibration Instructions
   * @description Calibration instructions
   * @default null
   */
  CalibrationInstructions: string | null;
  /**
   * Calibration Test Mode
   * @description Calibration test mode used
   * @default null
   */
  CalibrationTestMode: string | null;
  /**
   * Condition Aquired
   * @description Condition at acquisition
   * @default null
   */
  ConditionAquired: string | null;
  /**
   * Control Number
   * @description Control number
   * @default null
   */
  ControlNumber: string | null;
  /**
   * Created By
   * @description Record creator
   * @default null
   */
  CreatedBy: string | null;
  /**
   * Date Aquired
   * Format: date-time
   * @description Date acquired in ISO 8601 format
   * @default null
   */
  DateAquired: string | null;
  /**
   * Days
   * @description Calibration interval days
   * @default null
   */
  Days: number | null;
  /**
   * Id
   * @description Unique identifier; server assigns if omitted
   * @default null
   */
  Id: number | null;
  /**
   * Interval
   * @description Calibration interval description
   * @default null
   */
  Interval: string | null;
  /**
   * Is Deleted
   * @description Soft delete flag
   * @default null
   */
  IsDeleted: boolean | null;
  /**
   * Last Calibration Date
   * Format: date-time
   * @description Last calibration date in ISO 8601 format
   * @default null
   */
  LastCalibrationDate: string | null;
  /**
   * Location
   * @description Location of the gage
   * @default null
   */
  Location: string | null;
  /**
   * Manufacturer
   * @description Manufacturer name
   * @default null
   */
  Manufacturer: string | null;
  /**
   * Master Standard
   * @description Master standard used for calibration
   * @default null
   */
  MasterStandard: string | null;
  /**
   * Model
   * @description Model of the gage
   * @default null
   */
  Model: string | null;
  /**
   * Months
   * @description Calibration interval months
   * @default null
   */
  Months: number | null;
  /**
   * Nist Number
   * @description NIST standard number
   * @default null
   */
  NISTNumber: string | null;
  /**
   * Notification List
   * @description Comma-separated list of users to notify
   * @default null
   */
  NotificationList: string | null;
  /**
   * Other Information
   * @description Additional information
   * @default null
   */
  OtherInformation: string | null;
  /**
   * Purchase Price
   * @description Purchase price in USD
   * @default null
   */
  PurchasePrice: number | null;
  /**
   * Range Or Size
   * @description Operational range or size
   * @default null
   */
  RangeOrSize: string | null;
  /**
   * Responsible User
   * @description User responsible for the gage
   * @default null
   */
  ResponsibleUser: string | null;
  /**
   * Serial Number
   * @description Serial number of the gage record
   */
  SerialNumber?: string;
  /**
   * Source Or Vendor
   * @description Vendor or source of acquisition
   * @default null
   */
  SourceOrVendor: string | null;
  /**
   * Status
   * @description Current status of the gage
   * @default null
   */
  Status: string | null;
  /**
   * Test Templates
   * @description List of test templates
   * @default null
   */
  TestTemplates: {
      /**
       * Equipment Ref Id
       * @description Reference ID of the equipment
       */
      EquipmentRefId: number;
      /**
       * Expected Result
       * @description Expected outcome of the test
       */
      ExpectedResult: string;
      /**
       * Id
       * @description Unique identifier of the test template
       */
      Id: number;
      /**
       * Parameter
       * @description Parameter being tested
       */
      Parameter: string;
      /**
       * Ref Standard Id
       * @description Reference standard ID used
       */
      RefStandardID: string;
      /**
       * Test Number
       * @description Test number designation
       */
      TestNumber: string;
  }[] | null;
  /**
   * Tolerance
   * @description Tolerance level or specification
   * @default null
   */
  Tolerance: string | null;
  /**
   * Type
   * @description Gage type
   * @default null
   */
  Type: string | null;
  /**
   * Types Measurement
   * @description Measurement types supported
   * @default null
   */
  TypesMeasurement: string | null;
  /**
   * Unit Of Measure
   * @description Unit of measure used
   * @default null
   */
  UnitOfMeasure: string | null;
  /**
   * Updated By
   * @description Last user who updated record
   * @default null
   */
  UpdatedBy: string | null;
  /**
   * Updated Date
   * Format: date-time
   * @description Last updated date
   * @default null
   */
  UpdatedDate: string | null;
  /**
   * Website
   * Format: uri
   * @description Manufacturer website URL
   * @default null
   */
  Website: string | null;
  /**
   * Years
   * @description Calibration interval years
   * @default null
   */
  Years: number | null;
};

/**
 * Type of GAGELIST's GAGELIST_ADD_GAGE_RECORD tool output.
 */
type GAGELIST_ADD_GAGE_RECORD_OUTPUT = {
  /**
   * Data
   * @description Newly created gage record ID
   */
  data?: number;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Additional information or error message
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description True if creation succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GAGELIST's GAGELIST_ADD_MANUFACTURER tool input.
 */
type GAGELIST_ADD_MANUFACTURER_INPUT = {
  /**
   * Address
   * @description Address of the manufacturer.
   * @default null
   */
  Address: string | null;
  /**
   * Fax
   * @description Fax number of the manufacturer.
   * @default null
   */
  Fax: string | null;
  /**
   * Id
   * @description Identifier for the manufacturer. Use 0 or omit for create.
   * @default 0
   */
  Id: number | null;
  /**
   * Name
   * @description Name of the manufacturer.
   */
  Name?: string;
  /**
   * Phone
   * @description Phone number of the manufacturer.
   * @default null
   */
  Phone: string | null;
  /**
   * Website
   * @description Website URL of the manufacturer.
   * @default null
   */
  Website: string | null;
};

/**
 * Type of GAGELIST's GAGELIST_ADD_MANUFACTURER tool output.
 */
type GAGELIST_ADD_MANUFACTURER_OUTPUT = {
  /**
   * Data
   * @description Identifier of the created manufacturer.
   * @default null
   */
  data: number | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Response message from the API.
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates if the operation was successful.
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GAGELIST's GAGELIST_AUTHENTICATE_WITH_GAGELIST tool input.
 */
type GAGELIST_AUTHENTICATE_WITH_GAGELIST_INPUT = {
  /**
   * Client Id
   * @description Gagelist client ID issued for OAuth2 authentication
   */
  client_id?: string;
  /**
   * Client Secret
   * @description Gagelist client secret issued alongside the client ID
   */
  client_secret?: string;
};

/**
 * Type of GAGELIST's GAGELIST_AUTHENTICATE_WITH_GAGELIST tool output.
 */
type GAGELIST_AUTHENTICATE_WITH_GAGELIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Access Token
       * @description Bearer token string to authenticate subsequent API calls
       */
      access_token: string;
      /**
       * Expires In
       * @description Number of seconds before the token expires
       */
      expires_in: number;
      /**
       * Refresh Token
       * @description Token used to renew the access token (if provided)
       * @default null
       */
      refresh_token: string | null;
      /**
       * Scope
       * @description Scopes granted by the access token
       * @default null
       */
      scope: string | null;
      /**
       * Token Type
       * @description Type of the token issued. Typically 'Bearer'
       */
      token_type: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GAGELIST's GAGELIST_DELETE_CALIBRATION_RECORD tool input.
 */
type GAGELIST_DELETE_CALIBRATION_RECORD_INPUT = {
  /**
   * Id
   * @description Calibration record ID to delete (must be a positive integer)
   */
  id?: number;
};

/**
 * Type of GAGELIST's GAGELIST_DELETE_CALIBRATION_RECORD tool output.
 */
type GAGELIST_DELETE_CALIBRATION_RECORD_OUTPUT = {
  /**
   * Data
   * @description Numeric code returned by the API
   */
  data?: number;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Message returned by the API
   */
  message?: string;
  /**
   * Success
   * @description Indicates if the deletion was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GAGELIST's GAGELIST_DELETE_GAGE_RECORD tool input.
 */
type GAGELIST_DELETE_GAGE_RECORD_INPUT = {
  /**
   * Id
   * @description Gage record ID to delete
   */
  id?: number;
};

/**
 * Type of GAGELIST's GAGELIST_DELETE_GAGE_RECORD tool output.
 */
type GAGELIST_DELETE_GAGE_RECORD_OUTPUT = {
  /**
   * Data
   * @description API data field, typically 0 on success
   */
  data?: number;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description API informational message
   */
  message?: string;
  /**
   * Success
   * @description Whether the deletion was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GAGELIST's GAGELIST_DELETE_MANUFACTURER tool input.
 */
type GAGELIST_DELETE_MANUFACTURER_INPUT = {
  /**
   * Id
   * @description ID of the manufacturer to delete (must be a positive integer)
   */
  id?: number;
};

/**
 * Type of GAGELIST's GAGELIST_DELETE_MANUFACTURER tool output.
 */
type GAGELIST_DELETE_MANUFACTURER_OUTPUT = {
  /**
   * Data
   * @description API-specific return code (often 0 on success)
   */
  data?: number;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Informational message from the API
   */
  message?: string;
  /**
   * Success
   * @description Indicates whether the deletion succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GAGELIST's GAGELIST_GENERATE_CALIBRATION_CERTIFICATE tool input.
 */
type GAGELIST_GENERATE_CALIBRATION_CERTIFICATE_INPUT = {
  /**
   * Id
   * @description ID of the calibration record to generate the certificate for
   */
  id?: number;
};

/**
 * Type of GAGELIST's GAGELIST_GENERATE_CALIBRATION_CERTIFICATE tool output.
 */
type GAGELIST_GENERATE_CALIBRATION_CERTIFICATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description Raw PDF binary content of the generated calibration certificate
       */
      content: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GAGELIST's GAGELIST_GET_ACCOUNT_SETTINGS tool input.
 */
type GAGELIST_GET_ACCOUNT_SETTINGS_INPUT = object;

/**
 * Type of GAGELIST's GAGELIST_GET_ACCOUNT_SETTINGS tool output.
 */
type GAGELIST_GET_ACCOUNT_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Account settings payload
   */
  data?: {
      /**
       * All Active Statuses
       * @description All active status values
       */
      AllActiveStatuses: string[];
      /**
       * All Area
       * @description All work areas
       */
      AllArea: string[];
      /**
       * All Assignees
       * @description All users who can be assigned
       */
      AllAssignees: string[];
      /**
       * All Calibration Environment
       * @description All possible calibration environments
       */
      AllCalibrationEnvironment: string[];
      /**
       * All Calibration Instructions
       * @description All calibration instructions templates
       */
      AllCalibrationInstructions: string[];
      /**
       * All Condition Aquired
       * @description All acquisition conditions
       */
      AllConditionAquired: string[];
      /**
       * All Interval
       * @description All calibration intervals
       */
      AllInterval: string[];
      /**
       * All Localizations
       * @description Localization mappings for UI elements
       */
      AllLocalizations: {
          [key: string]: unknown;
      };
      /**
       * All Location
       * @description All gage locations
       */
      AllLocation: string[];
      /**
       * All Statuses
       * @description All possible status values
       */
      AllStatuses: string[];
      /**
       * All Type
       * @description All gage types available
       */
      AllType: string[];
      /**
       * All Types Measurement
       * @description All measurement types
       */
      AllTypesMeasurement: string[];
      /**
       * All Unit Of Measure
       * @description All available units of measure
       */
      AllUnitOfMeasure: string[];
      /**
       * Calibration Certificate Pdf Size
       * @description Default PDF size for calibration certificates
       */
      CalibrationCertificatePDFSize: string;
      /**
       * Date Format
       * @description Preferred date format
       */
      DateFormat: string;
      /**
       * Display Fields
       * @description Fields configured for display in the UI
       */
      DisplayFields: {
          [key: string]: unknown;
      };
      /**
       * Distributions
       * @description Default distribution list
       */
      Distributions: string[];
      /**
       * Editable Calibrated By
       * @description Controls if 'calibrated by' field is editable
       */
      EditableCalibratedBy: string;
      /**
       * Email Subject
       * @description Default email subject line
       */
      EmailSubject: string;
      /**
       * Include Gage Assignees
       * @description Flag controlling inclusion of gage assignees
       */
      IncludeGageAssignees: string;
      /**
       * Include Overdue
       * @description Flag controlling inclusion of overdue items
       */
      IncludeOverdue: string;
      /**
       * Introduction Text
       * @description Default introduction text in emails
       */
      IntroductionText: string;
      /**
       * My Time Zone
       * @description User's time zone
       */
      MyTimeZone: string;
      /**
       * Notification Days
       * @description Default days for sending notifications
       */
      NotificationDays: string[];
      /**
       * Notification Type
       * @description Default notification method
       */
      NotificationType: string;
      /**
       * Report To Include
       * @description Which report to include by default
       */
      ReportToInclude: string;
      /**
       * Required Fields
       * @description Fields that are marked required
       */
      RequiredFields: {
          [key: string]: unknown;
      };
      /**
       * Statement
       * @description Default statement text
       */
      Statement: string;
      /**
       * Updated Date
       * @description Timestamp of last settings update
       */
      UpdatedDate: string;
      /**
       * Upload Image Enabled
       * @description Flag indicating if image uploads are enabled
       */
      UploadImageEnabled: boolean;
      /**
       * View Export Format
       * @description Default format for exporting views
       */
      ViewExportFormat: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description A human-readable message from the API
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates if the API call was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GAGELIST's GAGELIST_GET_ACCOUNT_STATUS tool input.
 */
type GAGELIST_GET_ACCOUNT_STATUS_INPUT = object;

/**
 * Type of GAGELIST's GAGELIST_GET_ACCOUNT_STATUS tool output.
 */
type GAGELIST_GET_ACCOUNT_STATUS_OUTPUT = {
  /**
   * Data
   * @description Account status data
   */
  data?: {
      /** Accessible Sites */
      AccessibleSites: {
          /**
           * Allow Change Plan
           * @description Whether the user may change site plan
           */
          AllowChangePlan: boolean;
          /**
           * Allow User Management
           * @description Whether the user may manage other users
           */
          AllowUserManagement: boolean;
          /**
           * Enterprise Id
           * @description ID of the parent enterprise
           */
          EnterpriseId: number;
          /**
           * Guid
           * @description Site GUID
           */
          Guid: string;
          /**
           * Is Enterprise Site
           * @description If this site belongs to an enterprise
           */
          IsEnterpriseSite: boolean;
          /**
           * Logo Url
           * @description URL to this site’s logo
           * @default null
           */
          LogoUrl: string | null;
          /**
           * Name
           * @description Site name
           */
          Name: string;
          /**
           * Site Owner Customer Id
           * @description Customer ID of the site owner
           */
          SiteOwnerCustomerId: number;
      }[];
      /**
       * Active Gages
       * @description Number of active gages
       */
      ActiveGages: number;
      /**
       * Allow Attachments
       * @description Whether attachments are allowed
       */
      AllowAttachments: boolean;
      /**
       * Allow Branding
       * @description Whether custom branding is allowed
       */
      AllowBranding: boolean;
      /**
       * Allow Custom Fields
       * @description Whether custom fields are allowed
       */
      AllowCustomFields: boolean;
      /**
       * Allow Print Label
       * @description Whether printing labels is allowed
       */
      AllowPrintLabel: boolean;
      /**
       * Allow Signing
       * @description If signing records is allowed
       */
      AllowSigning: boolean;
      /**
       * Allow Unsigning
       * @description If unsigning records is allowed
       */
      AllowUnsigning: boolean;
      /**
       * Assigned Users
       * @description Current number of assigned users
       */
      AssignedUsers: number;
      /**
       * Can Add
       * @description Whether the user may add records
       */
      CanAdd: boolean;
      /**
       * Can Edit
       * @description Whether the user may edit records
       */
      CanEdit: boolean;
      /**
       * Can Edit Calibration
       * @description Whether the user may edit calibration records
       */
      CanEditCalibration: boolean;
      /**
       * Current Site Id
       * @description ID of the currently selected site
       */
      CurrentSiteId: number;
      /** Digital Signature Settings */
      DigitalSignatureSettings: {
          /**
           * Allow Admin Unsign
           * @description Whether admins may unsign records
           */
          AllowAdminUnsign: boolean;
          /**
           * Allow Unsign
           * @description Whether users may unsign records
           */
          AllowUnsign: boolean;
          /**
           * Banner Content For Signed Record
           * @description Custom banner text for signed records
           * @default null
           */
          BannerContentForSignedRecord: string | null;
          /**
           * Show Banner For Signed Record
           * @description Show a banner when viewing signed records
           */
          ShowBannerForSignedRecord: boolean;
          /**
           * Signature Statement
           * @description Statement shown on signature
           * @default null
           */
          SignatureStatement: string | null;
      };
      /**
       * Digitial Signature Enabled
       * @description If digital signatures are enabled
       */
      DigitialSignatureEnabled: boolean;
      /** Enterprise Info */
      EnterpriseInfo: {
          /**
           * Footer Text
           * @description Footer text for enterprise
           * @default null
           */
          FooterText: string | null;
          /**
           * Logo Url
           * @description URL to enterprise logo
           * @default null
           */
          LogoUrl: string | null;
          /**
           * Name
           * @description Enterprise name
           */
          Name: string;
      };
      /**
       * Gages Due30 Days
       * @description Gages due in the next 30 days
       */
      GagesDue30Days: number;
      /**
       * Gages Due60 Days
       * @description Gages due in the next 60 days
       */
      GagesDue60Days: number;
      /**
       * Gages Due90 Days
       * @description Gages due in the next 90 days
       */
      GagesDue90Days: number;
      /**
       * Gages Due This Month
       * @description Gages due this month
       */
      GagesDueThisMonth: number;
      /**
       * Gages Past Due
       * @description Gages past due
       */
      GagesPastDue: number;
      /**
       * Inactive Gages
       * @description Number of inactive gages
       */
      InactiveGages: number;
      /**
       * Localization Field Labels
       * @description Whether localization of labels is enabled
       */
      LocalizationFieldLabels: boolean;
      /**
       * Max Database Mb
       * @description Maximum database size in MB
       */
      MaxDatabaseMB: number;
      /**
       * Max Gages
       * @description Maximum number of gages
       */
      MaxGages: number;
      /**
       * Max Records
       * @description Maximum number of records
       */
      MaxRecords: number;
      /**
       * Max Users
       * @description Maximum allowed users
       */
      MaxUsers: number;
      /**
       * Mobile App First Login Date
       * @description First mobile app login date (ISO 8601)
       */
      MobileAppFirstLoginDate: string;
      /**
       * Mobile App Trial Days
       * @description Remaining trial days for mobile app
       */
      MobileAppTrialDays: number;
      /** Requested Site */
      RequestedSite: {
          /**
           * Allow Change Plan
           * @description Whether the user may change site plan
           */
          AllowChangePlan: boolean;
          /**
           * Allow User Management
           * @description Whether the user may manage other users
           */
          AllowUserManagement: boolean;
          /**
           * Enterprise Id
           * @description ID of the parent enterprise
           */
          EnterpriseId: number;
          /**
           * Guid
           * @description Site GUID
           */
          Guid: string;
          /**
           * Is Enterprise Site
           * @description If this site belongs to an enterprise
           */
          IsEnterpriseSite: boolean;
          /**
           * Logo Url
           * @description URL to this site’s logo
           * @default null
           */
          LogoUrl: string | null;
          /**
           * Name
           * @description Site name
           */
          Name: string;
          /**
           * Site Owner Customer Id
           * @description Customer ID of the site owner
           */
          SiteOwnerCustomerId: number;
      };
      /**
       * Roles
       * @description List of user roles
       */
      Roles: string[];
      /**
       * Scheduled Gages
       * @description Number of scheduled gages
       */
      ScheduledGages: number;
      /**
       * Total Gages
       * @description Total gages in the system
       */
      TotalGages: number;
      /**
       * Total Records
       * @description Total records in the system
       */
      TotalRecords: number;
      /**
       * Unlimited Reader
       * @description Whether unlimited read-only users are allowed
       */
      UnlimitedReader: boolean;
      /**
       * Unscheduled Gages
       * @description Number of unscheduled gages
       */
      UnscheduledGages: number;
      /**
       * Updated Date
       * @description Last update timestamp (ISO 8601)
       */
      UpdatedDate: string;
      /**
       * Used Database Mb
       * @description Current database usage in MB
       */
      UsedDatabaseMB: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Additional message from API
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates if the request succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GAGELIST's GAGELIST_GET_ALL_CALIBRATION_RECORDS tool input.
 */
type GAGELIST_GET_ALL_CALIBRATION_RECORDS_INPUT = {
  /**
   * Record Number
   * @description Number of records to return per page
   */
  record_number?: number;
  /**
   * Start
   * @description Zero-based index of the first record to return
   */
  start?: number;
};

/**
 * Type of GAGELIST's GAGELIST_GET_ALL_CALIBRATION_RECORDS tool output.
 */
type GAGELIST_GET_ALL_CALIBRATION_RECORDS_OUTPUT = {
  /**
   * Count
   * @description Number of records returned in this page
   * @default null
   */
  count: number | null;
  /**
   * Data
   * @description Array of calibration record objects
   * @default null
   */
  data: {
      /**
       * Action Required
       * @description Actions required post-calibration
       * @default null
       */
      ActionRequired: string | null;
      /**
       * Additional Comments
       * @description Extra comments
       * @default null
       */
      AdditionalComments: string | null;
      /**
       * Adjustments Required
       * @description Adjustments required
       * @default null
       */
      AdjustmentsRequired: string | null;
      /**
       * Appropriate Notified
       * @description Who was notified
       * @default null
       */
      AppropriateNotified: string | null;
      /**
       * Area
       * @description Operational area
       * @default null
       */
      Area: string | null;
      /**
       * Asset No
       * @description Asset number
       * @default null
       */
      AssetNo: string | null;
      /**
       * Calibration Date
       * @description Calibration date (ISO 8601)
       * @default null
       */
      CalibrationDate: string | null;
      /**
       * Calibration Date Str
       * @description Calibration date as string
       * @default null
       */
      CalibrationDateStr: string | null;
      /**
       * Calibration Due Date
       * @description Next due calibration date (ISO 8601)
       * @default null
       */
      CalibrationDueDate: string | null;
      /**
       * Calibration Environment
       * @description Environment during calibration
       * @default null
       */
      CalibrationEnvironment: string | null;
      /**
       * Calibration Instructions
       * @description Instructions for calibration
       * @default null
       */
      CalibrationInstructions: string | null;
      /**
       * Calibration Techinician
       * @description Technician who performed calibration
       * @default null
       */
      CalibrationTechinician: string | null;
      /**
       * Calibration Test
       * @description Test performed during calibration
       * @default null
       */
      CalibrationTest: string | null;
      /**
       * Calibration Test Mode
       * @description Mode of calibration test
       * @default null
       */
      CalibrationTestMode: string | null;
      /**
       * Condition Aquired
       * @description Condition when acquired
       * @default null
       */
      ConditionAquired: string | null;
      /**
       * Condition Received
       * @description Condition when equipment was received
       * @default null
       */
      ConditionReceived: string | null;
      /**
       * Control Number
       * @description Control number
       * @default null
       */
      ControlNumber: string | null;
      /**
       * Created By
       * @description User who created this record
       * @default null
       */
      CreatedBy: string | null;
      /**
       * Created Date
       * @description Creation timestamp (ISO 8601)
       * @default null
       */
      CreatedDate: string | null;
      /**
       * Date Aquired
       * @description Acquisition date (ISO 8601)
       * @default null
       */
      DateAquired: string | null;
      /**
       * Date Calibrated
       * @description Date calibrated (ISO 8601)
       * @default null
       */
      DateCalibrated: string | null;
      /**
       * Days
       * @description Interval days component
       * @default null
       */
      Days: number | null;
      /**
       * Days Late
       * @description Days past due calibration
       * @default null
       */
      DaysLate: number | null;
      /**
       * Described Repairs
       * @description Description of any repairs
       * @default null
       */
      DescribedRepairs: string | null;
      /**
       * Equipment As Found
       * @description Condition of equipment as found
       * @default null
       */
      EquipmentAsFound: string | null;
      /**
       * Equipment As Left
       * @description Condition of equipment as left
       * @default null
       */
      EquipmentAsLeft: string | null;
      /**
       * Equipment Ref Id
       * @description Equipment reference ID
       * @default null
       */
      EquipmentRefId: number | null;
      /**
       * Exernal Calibration Record
       * @description External record reference
       * @default null
       */
      ExernalCalibrationRecord: string | null;
      /**
       * Fit Intended Purpose
       * @description Fit for the intended purpose
       * @default null
       */
      FitIntendedPurpose: string | null;
      /**
       * Id
       * @description Unique calibration record ID
       * @default null
       */
      Id: number | null;
      /**
       * Interval
       * @description Calibration interval description
       * @default null
       */
      Interval: string | null;
      /**
       * Is Deleted
       * @description Flag indicating deletion status
       * @default null
       */
      IsDeleted: boolean | null;
      /**
       * Last Calibration Date
       * @description Last calibration date (ISO 8601)
       * @default null
       */
      LastCalibrationDate: string | null;
      /**
       * Location
       * @description Location of calibration
       * @default null
       */
      Location: string | null;
      /**
       * Manufacturer
       * @description Equipment manufacturer
       * @default null
       */
      Manufacturer: string | null;
      /**
       * Master Standard
       * @description Master standard used
       * @default null
       */
      MasterStandard: string | null;
      /**
       * Model
       * @description Equipment model
       * @default null
       */
      Model: string | null;
      /**
       * Months
       * @description Interval months component
       * @default null
       */
      Months: number | null;
      /**
       * Nist Number
       * @description NIST standard reference
       * @default null
       */
      NISTNumber: string | null;
      /**
       * Next Calibration Due
       * @description Next calibration due (ISO 8601)
       * @default null
       */
      NextCalibrationDue: string | null;
      /**
       * Product Recalled
       * @description If product was recalled
       * @default null
       */
      ProductRecalled: string | null;
      /**
       * Range Or Size
       * @description Measurement range or size
       * @default null
       */
      RangeOrSize: string | null;
      /**
       * Record Number
       * @description Record number
       * @default null
       */
      RecordNumber: string | null;
      /**
       * Ref Standard Id
       * @description Reference standard ID
       * @default null
       */
      RefStandardID: string | null;
      /**
       * Repairs Required
       * @description Repairs required
       * @default null
       */
      RepairsRequired: string | null;
      /**
       * Responsible User
       * @description User responsible for calibration
       * @default null
       */
      ResponsibleUser: string | null;
      /**
       * Serial Number
       * @description Equipment serial number
       * @default null
       */
      SerialNumber: string | null;
      /**
       * Source Or Vendor
       * @description Source or vendor
       * @default null
       */
      SourceOrVendor: string | null;
      /**
       * Test Cost
       * @description Cost of test
       * @default null
       */
      TestCost: string | null;
      /**
       * Test Equipment Availability
       * @description Availability of test equipment
       * @default null
       */
      TestEquipmentAvailability: string | null;
      /**
       * Test Equipment Falls
       * @description Test equipment falls
       * @default null
       */
      TestEquipmentFalls: string | null;
      /**
       * Test Equipment Falls As Found
       * @description Equipment falls as found
       * @default null
       */
      TestEquipmentFallsAsFound: string | null;
      /**
       * Test Time
       * @description Duration of test
       * @default null
       */
      TestTime: string | null;
      /**
       * Tolerance
       * @description Tolerance
       * @default null
       */
      Tolerance: string | null;
      /**
       * Tolerance Comment
       * @description Comments on tolerance
       * @default null
       */
      ToleranceComment: string | null;
      /**
       * Tolerance Condition
       * @description Condition relative to tolerance
       * @default null
       */
      ToleranceCondition: string | null;
      /**
       * Type
       * @description Type of equipment
       * @default null
       */
      Type: string | null;
      /**
       * Types Measurement
       * @description Types of measurements
       * @default null
       */
      TypesMeasurement: string | null;
      /**
       * Uncertainty
       * @description Measurement uncertainty
       * @default null
       */
      Uncertainty: string | null;
      /**
       * Unit Of Measure
       * @description Unit of measure
       * @default null
       */
      UnitOfMeasure: string | null;
      /**
       * Updated By
       * @description User who last updated this record
       * @default null
       */
      UpdatedBy: string | null;
      /**
       * Updated Date
       * @description Last update timestamp (ISO 8601)
       * @default null
       */
      UpdatedDate: string | null;
      /**
       * Website
       * @description Manufacturer's website
       * @default null
       */
      Website: string | null;
      /**
       * Years
       * @description Interval years component
       * @default null
       */
      Years: number | null;
  }[] | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Optional informational or error message
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates if the operation was successful
   * @default null
   */
  success: boolean | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of matching records
   * @default null
   */
  total: number | null;
};

/**
 * Type of GAGELIST's GAGELIST_GET_ALL_GAGE_RECORDS tool input.
 */
type GAGELIST_GET_ALL_GAGE_RECORDS_INPUT = {
  /**
   * Record Number
   * @description Number of records to retrieve.
   */
  record_number?: number;
  /**
   * Start
   * @description Zero-based index to start listing records.
   * @default 0
   */
  start: number;
};

/**
 * Type of GAGELIST's GAGELIST_GET_ALL_GAGE_RECORDS tool output.
 */
type GAGELIST_GET_ALL_GAGE_RECORDS_OUTPUT = {
  /**
   * Count
   * @description Number of records returned in this response
   * @default null
   */
  count: number | null;
  /**
   * Data
   * @description Array of gage record objects
   * @default null
   */
  data: {
      /**
       * Area
       * @description Area of usage
       * @default null
       */
      Area: string | null;
      /**
       * Asset No
       * @description Asset number
       * @default null
       */
      AssetNo: string | null;
      /**
       * Attachments
       * @description Attachments info or URLs
       * @default null
       */
      Attachments: string | null;
      /**
       * Calibration Count
       * @description Number of calibrations performed
       * @default null
       */
      CalibrationCount: number | null;
      /**
       * Calibration Due Date
       * @description Next calibration due date
       * @default null
       */
      CalibrationDueDate: string | null;
      /**
       * Calibration Environment
       * @description Environment details for calibration
       * @default null
       */
      CalibrationEnvironment: string | null;
      /**
       * Calibration Instructions
       * @description Calibration instructions
       * @default null
       */
      CalibrationInstructions: string | null;
      /**
       * Calibration Test Mode
       * @description Test mode used
       * @default null
       */
      CalibrationTestMode: string | null;
      /**
       * Condition Aquired
       * @description Condition when acquired
       * @default null
       */
      ConditionAquired: string | null;
      /**
       * Control Number
       * @description Control number assigned
       * @default null
       */
      ControlNumber: string | null;
      /**
       * Created By
       * @description User who created record
       * @default null
       */
      CreatedBy: string | null;
      /**
       * Created Date
       * @description Creation date of record
       * @default null
       */
      CreatedDate: string | null;
      /**
       * Date Aquired
       * @description Date acquired
       * @default null
       */
      DateAquired: string | null;
      /**
       * Days
       * @description Days component of interval
       * @default null
       */
      Days: number | null;
      /**
       * Id
       * @description Record ID
       * @default null
       */
      Id: number | null;
      /**
       * Image Name
       * @description Image file name
       * @default null
       */
      ImageName: string | null;
      /**
       * Interval
       * @description Calibration interval
       * @default null
       */
      Interval: string | null;
      /**
       * Interval Category
       * @description Interval category
       * @default null
       */
      IntervalCategory: string | null;
      /**
       * Is Deleted
       * @description Deletion flag
       * @default null
       */
      IsDeleted: boolean | null;
      /**
       * Last Calibration Date
       * @description Last calibration date
       * @default null
       */
      LastCalibrationDate: string | null;
      /**
       * Last Calibration Date Str
       * @description Last calibration date (formatted string)
       * @default null
       */
      LastCalibrationDateStr: string | null;
      /**
       * Location
       * @description Current location
       * @default null
       */
      Location: string | null;
      /**
       * Manufacturer
       * @description Manufacturer name
       * @default null
       */
      Manufacturer: string | null;
      /**
       * Master Standard
       * @description Master standard used
       * @default null
       */
      MasterStandard: string | null;
      /**
       * Model
       * @description Model number
       * @default null
       */
      Model: string | null;
      /**
       * Months
       * @description Months component of interval
       * @default null
       */
      Months: number | null;
      /**
       * Nist Number
       * @description NIST number
       * @default null
       */
      NISTNumber: string | null;
      /**
       * Notification List
       * @description List of notifications recipients
       * @default null
       */
      NotificationList: string | null;
      /**
       * Other Information
       * @description Other information
       * @default null
       */
      OtherInformation: string | null;
      /**
       * Purchase Price
       * @description Purchase price
       * @default null
       */
      PurchasePrice: number | null;
      /**
       * Range Or Size
       * @description Measurement range or size
       * @default null
       */
      RangeOrSize: string | null;
      /**
       * Responsible User
       * @description User responsible
       * @default null
       */
      ResponsibleUser: string | null;
      /**
       * Serial Number
       * @description Serial number
       * @default null
       */
      SerialNumber: string | null;
      /**
       * Source Or Vendor
       * @description Source or vendor from which acquired
       * @default null
       */
      SourceOrVendor: string | null;
      /**
       * Status
       * @description Current status of the gage
       * @default null
       */
      Status: string | null;
      /**
       * Tolerance
       * @description Tolerance specification
       * @default null
       */
      Tolerance: string | null;
      /**
       * Type
       * @description Gage type
       * @default null
       */
      Type: string | null;
      /**
       * Types Measurement
       * @description Measurement types
       * @default null
       */
      TypesMeasurement: string | null;
      /**
       * Unit Of Measure
       * @description Unit of measure
       * @default null
       */
      UnitOfMeasure: string | null;
      /**
       * Updated By
       * @description User who last updated record
       * @default null
       */
      UpdatedBy: string | null;
      /**
       * Updated Date
       * @description Last update date
       * @default null
       */
      UpdatedDate: string | null;
      /**
       * Website
       * @description Manufacturer website
       * @default null
       */
      Website: string | null;
      /**
       * Years
       * @description Years component of interval
       * @default null
       */
      Years: number | null;
  }[] | null;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Server-provided message or error details
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description True if API call succeeded
   * @default null
   */
  success: boolean | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of gage records available
   * @default null
   */
  total: number | null;
};

/**
 * Type of GAGELIST's GAGELIST_GET_ALL_MANUFACTURERS tool input.
 */
type GAGELIST_GET_ALL_MANUFACTURERS_INPUT = object;

/**
 * Type of GAGELIST's GAGELIST_GET_ALL_MANUFACTURERS tool output.
 */
type GAGELIST_GET_ALL_MANUFACTURERS_OUTPUT = {
  /**
   * Count
   * @description Number of manufacturers returned
   */
  count?: number;
  /**
   * Data
   * @description Array of manufacturer objects
   */
  data?: {
      /**
       * Address
       * @description Address of the manufacturer
       */
      Address: string;
      /**
       * Fax
       * @description Fax number of the manufacturer
       */
      Fax: string;
      /**
       * Id
       * @description Unique identifier of the manufacturer
       */
      Id: number;
      /**
       * Is Deleted
       * @description Indicates if the manufacturer is deleted
       */
      IsDeleted: boolean;
      /**
       * Name
       * @description Name of the manufacturer
       */
      Name: string;
      /**
       * Phone
       * @description Phone number of the manufacturer
       */
      Phone: string;
      /**
       * Updated Date
       * @description ISO 8601 datetime when the manufacturer was last updated
       */
      UpdatedDate: string;
      /**
       * Website
       * @description Website URL of the manufacturer
       */
      Website: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Informational message from the API
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates if the API call was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of manufacturers
   */
  total?: number;
};

/**
 * Type of GAGELIST's GAGELIST_GET_ATTACHMENT tool input.
 */
type GAGELIST_GET_ATTACHMENT_INPUT = {
  /**
   * Id
   * @description Identifier of the attachment to retrieve
   */
  id?: number;
};

/**
 * Type of GAGELIST's GAGELIST_GET_ATTACHMENT tool output.
 */
type GAGELIST_GET_ATTACHMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * Format: binary
       * @description Raw binary content of the attachment file
       */
      content: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GAGELIST's GAGELIST_GET_CUSTOM_FIELDS tool input.
 */
type GAGELIST_GET_CUSTOM_FIELDS_INPUT = object;

/**
 * Type of GAGELIST's GAGELIST_GET_CUSTOM_FIELDS tool output.
 */
type GAGELIST_GET_CUSTOM_FIELDS_OUTPUT = {
  /**
   * Count
   * @description Count of items in this response
   */
  count?: number;
  /**
   * Data
   * @description List of custom field definitions
   */
  data?: {
      /**
       * Calibration Default Value
       * @description Default value in calibration context
       */
      CalibrationDefaultValue: string;
      /**
       * Calibration Display Section
       * @description Section ordering index for display under calibration records
       */
      CalibrationDisplaySection: number;
      /**
       * Calibration Permission
       * @description Permission level for calibration context
       */
      CalibrationPermission: string;
      /**
       * Calibration Required
       * @description Whether required for calibration (0 = no, 1 = yes)
       */
      CalibrationRequired: number;
      /**
       * Display Order
       * @description Overall ordering index for this custom field
       */
      DisplayOrder: number;
      /**
       * Field Name
       * @description Name of the custom field
       */
      FieldName: string;
      /**
       * Field Options
       * @description Comma-separated options for choice fields, if any
       */
      FieldOptions: string;
      /**
       * Field Type
       * @description Data type of the custom field
       */
      FieldType: string;
      /**
       * For Type
       * @description Context this field applies to (e.g., 'Gage' or 'Calibration')
       */
      ForType: string;
      /**
       * Gage Default Value
       * @description Default value in gage context
       */
      GageDefaultValue: string;
      /**
       * Gage Display Section
       * @description Section ordering index for display under gage records
       */
      GageDisplaySection: number;
      /**
       * Gage Permission
       * @description Permission level for gage context
       */
      GagePermission: string;
      /**
       * Gage Required
       * @description Whether required for gage (0 = no, 1 = yes)
       */
      GageRequired: number;
      /**
       * Id
       * @description Unique identifier of the custom field
       */
      Id: number;
      /**
       * Status
       * @description Current status of the custom field (e.g., Active/Inactive)
       */
      Status: string;
      /**
       * Updated Date
       * @description Timestamp when this field was last updated (ISO 8601 format)
       */
      UpdatedDate: string;
      /**
       * Visible On Cert
       * @description Whether to show this field on the certificate (0 = no, 1 = yes)
       */
      VisibleOnCert: number;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Additional message from the API
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates whether the call succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of custom fields returned
   */
  total?: number;
};

/**
 * Type of GAGELIST's GAGELIST_GET_SINGLE_CALIBRATION_RECORD tool input.
 */
type GAGELIST_GET_SINGLE_CALIBRATION_RECORD_INPUT = {
  /**
   * Id
   * @description Calibration record identifier, must be a positive integer
   */
  id?: number;
};

/**
 * Type of GAGELIST's GAGELIST_GET_SINGLE_CALIBRATION_RECORD tool output.
 */
type GAGELIST_GET_SINGLE_CALIBRATION_RECORD_OUTPUT = {
  /**
   * Data
   * @description Detailed calibration record object
   */
  data?: {
      /**
       * Action Required
       * @description Action required post calibration
       */
      ActionRequired: string;
      /**
       * Additional Comments
       * @description Additional comments
       */
      AdditionalComments: string;
      /**
       * Adjustments Required
       * @description Adjustments required for calibration
       */
      AdjustmentsRequired: string;
      /**
       * Appropriate Notified
       * @description Appropriate parties notified
       */
      AppropriateNotified: string;
      /**
       * Asset No
       * @description Asset number
       */
      AssetNo: string;
      /**
       * Attachments
       * @description List of file attachments
       * @default []
       */
      Attachments: {
          /**
           * File Name
           * @description Original file name
           */
          FileName: string;
          /**
           * File Size
           * @description Size in bytes
           */
          FileSize: number;
          /**
           * File Type
           * @description MIME type or extension
           */
          FileType: string;
          /**
           * Id
           * @description Attachment unique identifier
           */
          Id: number;
          /**
           * Record Id
           * @description Parent record ID
           */
          RecordId: number;
          /**
           * Record Type
           * @description Type of record this attachment belongs to
           */
          RecordType: string;
      }[];
      /**
       * Calibration Date
       * @description Date of calibration (ISO 8601)
       */
      CalibrationDate: string;
      /**
       * Calibration Due Date
       * @description Calibration due date (ISO 8601)
       */
      CalibrationDueDate: string;
      /**
       * Calibration Environment
       * @description Calibration environment
       */
      CalibrationEnvironment: string;
      /**
       * Calibration Instructions
       * @description Calibration instructions
       */
      CalibrationInstructions: string;
      /**
       * Calibration Techinician
       * @description Calibration technician name
       */
      CalibrationTechinician: string;
      /**
       * Calibration Test
       * @description Calibration test procedures
       */
      CalibrationTest: string;
      /**
       * Calibration Test Mode
       * @description Calibration test mode
       */
      CalibrationTestMode: string;
      /**
       * Calibration Tests
       * @description List of individual test details
       * @default []
       */
      CalibrationTests: {
          /**
           * As Found
           * @description Value found before adjustment
           */
          AsFound: string;
          /**
           * As Left
           * @description Value after adjustment
           */
          AsLeft: string;
          /**
           * Calibration Ref Id
           * @description Reference to parent calibration record
           */
          CalibrationRefId: number;
          /**
           * Chk As Left
           * @description Check value after adjustment
           */
          ChkAsLeft: string;
          /**
           * Expected Result
           * @description Expected outcome/value
           */
          ExpectedResult: string;
          /**
           * Id
           * @description Test record unique identifier
           */
          Id: number;
          /**
           * Parameter
           * @description Parameter under test
           */
          Parameter: string;
          /**
           * Pass Fail
           * @description Pass or Fail result
           */
          PassFail: string;
          /**
           * Ref Standard Id
           * @description Reference standard identifier
           */
          RefStandardID: string;
          /**
           * Test Number
           * @description Sequential test number
           */
          TestNumber: string;
      }[];
      /**
       * Condition Received
       * @description Equipment condition when received
       */
      ConditionReceived: string;
      /**
       * Control Number
       * @description Control number
       */
      ControlNumber: string;
      /**
       * Counter Values
       * @description List of counter values
       * @default []
       */
      CounterValues: {
          /**
           * Field Id
           * @description Field definition identifier
           */
          FieldId: number;
          /**
           * Field Value
           * @description Stored field value
           */
          FieldValue: string;
          /**
           * Id
           * @description Counter value unique identifier
           */
          Id: number;
          /**
           * Ref Id
           * @description Reference record ID
           */
          RefID: number;
          /**
           * Ref Type
           * @description Reference record type
           */
          RefType: number;
          /**
           * Updated Date
           * @description Timestamp when the value was last updated
           */
          UpdatedDate: string;
      }[];
      /**
       * Created By
       * @description User who created the record
       */
      CreatedBy: string;
      /**
       * Date Calibrated
       * @description Date calibrated (ISO 8601)
       */
      DateCalibrated: string;
      /**
       * Days
       * @description Days component of interval
       */
      Days: number;
      /**
       * Described Repairs
       * @description Description of repairs performed
       */
      DescribedRepairs: string;
      /**
       * Equipment As Found
       * @description Equipment reading as found
       */
      EquipmentAsFound: string;
      /**
       * Equipment As Left
       * @description Equipment reading as left
       */
      EquipmentAsLeft: string;
      /**
       * Equipment Ref Id
       * @description Equipment reference ID
       */
      EquipmentRefId: number;
      /**
       * Exernal Calibration Record
       * @description External calibration record reference
       */
      ExernalCalibrationRecord: string;
      /**
       * Fit Intended Purpose
       * @description Fit intended purpose
       */
      FitIntendedPurpose: string;
      /**
       * Id
       * @description Calibration record identifier
       */
      Id: number;
      /**
       * Interval
       * @description Calibration interval description
       */
      Interval: string;
      /**
       * Is Deleted
       * @description Flag indicating if record is deleted
       */
      IsDeleted: boolean;
      /**
       * Is Signed
       * @description Flag indicating if record is signed
       */
      IsSigned: boolean;
      /**
       * Last Calibration Date
       * @description Last calibration date (ISO 8601)
       */
      LastCalibrationDate: string;
      /**
       * Location
       * @description Location of the equipment
       */
      Location: string;
      /**
       * Manufacturer
       * @description Manufacturer name
       */
      Manufacturer: string;
      /**
       * Master Standard
       * @description Master standard used
       */
      MasterStandard: string;
      /**
       * Model
       * @description Model number
       */
      Model: string;
      /**
       * Months
       * @description Months component of interval
       */
      Months: number;
      /**
       * Next Calibration Due
       * @description Next calibration due (ISO 8601)
       */
      NextCalibrationDue: string;
      /**
       * Product Recalled
       * @description Product recall status
       */
      ProductRecalled: string;
      /**
       * Range Or Size
       * @description Range or size of measurement
       */
      RangeOrSize: string;
      /**
       * Record Number
       * @description Record number assigned
       */
      RecordNumber: string;
      /**
       * Repairs Required
       * @description Repairs required
       */
      RepairsRequired: string;
      /**
       * Responsible User
       * @description User responsible for calibration
       */
      ResponsibleUser: string;
      /**
       * Serial Number
       * @description Serial number
       */
      SerialNumber: string;
      /**
       * Signature Data
       * @description Signature data
       */
      SignatureData: string;
      /**
       * Signature Public Key
       * @description Public key used for signature
       */
      SignaturePublicKey: string;
      /**
       * Signed By
       * @description User who signed the record
       */
      SignedBy: string;
      /**
       * Signed Date
       * @description Date record was signed (ISO 8601)
       */
      SignedDate: string;
      /**
       * Signed Pdf
       * @description Signed PDF document URL or data
       */
      SignedPDF: string;
      /**
       * Test Cost
       * @description Test cost
       */
      TestCost: string;
      /**
       * Test Equipment Availability
       * @description Test equipment availability
       */
      TestEquipmentAvailability: string;
      /**
       * Test Equipment Falls
       * @description Test equipment falls
       */
      TestEquipmentFalls: string;
      /**
       * Test Equipment Falls As Found
       * @description Test equipment falls as found
       */
      TestEquipmentFallsAsFound: string;
      /**
       * Test Time
       * @description Test time
       */
      TestTime: string;
      /**
       * Tolerance
       * @description Tolerance specification
       */
      Tolerance: string;
      /**
       * Tolerance Comment
       * @description Comments on tolerance
       */
      ToleranceComment: string;
      /**
       * Tolerance Condition
       * @description Tolerance condition
       */
      ToleranceCondition: string;
      /**
       * Type
       * @description Type of calibration
       */
      Type: string;
      /**
       * Types Measurement
       * @description Types of measurement
       */
      TypesMeasurement: string;
      /**
       * Uncertainty
       * @description Measurement uncertainty
       */
      Uncertainty: string;
      /**
       * Unit Of Measure
       * @description Unit of measure
       */
      UnitOfMeasure: string;
      /**
       * Updated By
       * @description User who last updated the record
       */
      UpdatedBy: string;
      /**
       * Updated Date
       * @description Date when record was last updated (ISO 8601)
       */
      UpdatedDate: string;
      /**
       * Website
       * @description Manufacturer website
       */
      Website: string;
      /**
       * Years
       * @description Years component of interval
       */
      Years: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description API-returned message
   */
  message?: string;
  /**
   * Success
   * @description Indicates if the operation was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GAGELIST's GAGELIST_GET_SINGLE_GAGE_RECORD tool input.
 */
type GAGELIST_GET_SINGLE_GAGE_RECORD_INPUT = {
  /**
   * Id
   * @description Unique identifier of the gage record
   */
  id?: number;
};

/**
 * Type of GAGELIST's GAGELIST_GET_SINGLE_GAGE_RECORD tool output.
 */
type GAGELIST_GET_SINGLE_GAGE_RECORD_OUTPUT = {
  /**
   * Data
   * @description Detailed gage record information
   */
  data?: {
      /**
       * Area
       * @description Area or department using the gage
       */
      Area: string;
      /**
       * Asset No
       * @description Asset number assigned to the gage
       */
      AssetNo: string;
      /**
       * Attachments
       * @description List of associated attachments
       */
      Attachments: {
          /**
           * File Name
           * @description Name of the attached file
           */
          FileName: string;
          /**
           * File Size
           * @description Size of the file in bytes
           */
          FileSize: number;
          /**
           * File Type
           * @description MIME type of the file
           */
          FileType: string;
          /**
           * Id
           * @description Attachment identifier
           */
          Id: number;
          /**
           * Record Id
           * @description ID of the record this attachment is linked to
           */
          RecordId: number;
          /**
           * Record Type
           * @description Type of record
           */
          RecordType: string;
      }[];
      /**
       * Calibration Due Date
       * @description ISO 8601 datetime when calibration is due
       */
      CalibrationDueDate: string;
      /**
       * Calibration Environment
       * @description Environment details for calibration
       */
      CalibrationEnvironment: string;
      /**
       * Calibration Instructions
       * @description Instructions for calibration
       */
      CalibrationInstructions: string;
      /**
       * Calibration Test Mode
       * @description Test mode used in calibration
       */
      CalibrationTestMode: string;
      /**
       * Condition Aquired
       * @description Condition at acquisition
       */
      ConditionAquired: string;
      /**
       * Control Number
       * @description Control number of the gage
       */
      ControlNumber: string;
      /**
       * Created By
       * @description User who created the record
       */
      CreatedBy: string;
      /**
       * Date Aquired
       * @description ISO 8601 datetime when acquired
       */
      DateAquired: string;
      /**
       * Days
       * @description Days component of the interval
       */
      Days: number;
      /**
       * Id
       * @description Gage record ID
       */
      Id: number;
      /**
       * Interval
       * @description Calibration interval description
       */
      Interval: string;
      /**
       * Is Deleted
       * @description Flag indicating if the record is deleted
       */
      IsDeleted: boolean;
      /**
       * Last Calibration Date
       * @description ISO 8601 datetime of last calibration
       */
      LastCalibrationDate: string;
      /**
       * Location
       * @description Current storage or usage location
       */
      Location: string;
      /**
       * Manufacturer
       * @description Manufacturer of the gage
       */
      Manufacturer: string;
      /**
       * Master Standard
       * @description Master standard used in calibration
       */
      MasterStandard: string;
      /**
       * Model
       * @description Model number of the gage
       */
      Model: string;
      /**
       * Months
       * @description Months component of the interval
       */
      Months: number;
      /**
       * Nist Number
       * @description NIST traceability number
       */
      NISTNumber: string;
      /**
       * Notification List
       * @description Comma-separated list of users to notify
       */
      NotificationList: string;
      /**
       * Other Information
       * @description Additional information
       */
      OtherInformation: string;
      /**
       * Purchase Price
       * @description Purchase price of the gage
       */
      PurchasePrice: number;
      /**
       * Range Or Size
       * @description Range or size specification
       */
      RangeOrSize: string;
      /**
       * Responsible User
       * @description User responsible for the gage
       */
      ResponsibleUser: string;
      /**
       * Serial Number
       * @description Serial number of the gage
       */
      SerialNumber: string;
      /**
       * Source Or Vendor
       * @description Vendor or source from which acquired
       */
      SourceOrVendor: string;
      /**
       * Status
       * @description Current status of the gage
       */
      Status: string;
      /**
       * Test Templates
       * @description List of associated test templates
       */
      TestTemplates: {
          /**
           * Equipment Ref Id
           * @description Reference ID of the associated equipment
           */
          EquipmentRefId: number;
          /**
           * Expected Result
           * @description Expected result of the test
           */
          ExpectedResult: string;
          /**
           * Id
           * @description Test template identifier
           */
          Id: number;
          /**
           * Parameter
           * @description Parameter under test
           */
          Parameter: string;
          /**
           * Ref Standard Id
           * @description Reference standard identifier
           */
          RefStandardID: string;
          /**
           * Test Number
           * @description Number of the test
           */
          TestNumber: string;
      }[];
      /**
       * Tolerance
       * @description Tolerance specification
       */
      Tolerance: string;
      /**
       * Type
       * @description Type of gage
       */
      Type: string;
      /**
       * Types Measurement
       * @description Measurement types supported
       */
      TypesMeasurement: string;
      /**
       * Unit Of Measure
       * @description Unit of measure used
       */
      UnitOfMeasure: string;
      /**
       * Updated By
       * @description User who last updated the record
       */
      UpdatedBy: string;
      /**
       * Updated Date
       * @description ISO 8601 datetime of last update
       */
      UpdatedDate: string;
      /**
       * Website
       * @description Manufacturer website URL
       */
      Website: string;
      /**
       * Years
       * @description Years component of the interval
       */
      Years: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description API response message
   */
  message?: string;
  /**
   * Success
   * @description Indicates if the request was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GAGELIST's GAGELIST_UPDATE_ACCOUNT_SETTINGS tool input.
 */
type GAGELIST_UPDATE_ACCOUNT_SETTINGS_INPUT = {
  /**
   * All Active Statuses
   * @description List of active status codes
   */
  AllActiveStatuses?: string[];
  /**
   * All Area
   * @description List of areas
   */
  AllArea?: string[];
  /**
   * All Assignees
   * @description List of user IDs for assignment
   */
  AllAssignees?: string[];
  /**
   * All Calibration Environment
   * @description List of calibration environments
   */
  AllCalibrationEnvironment?: string[];
  /**
   * All Calibration Instructions
   * @description List of calibration instructions
   */
  AllCalibrationInstructions?: string[];
  /**
   * All Condition Aquired
   * @description List of conditions acquired
   */
  AllConditionAquired?: string[];
  /**
   * All Interval
   * @description List of interval codes
   */
  AllInterval?: string[];
  /**
   * All Localizations
   * @description Localization map
   */
  AllLocalizations?: {
      [key: string]: unknown;
  };
  /**
   * All Location
   * @description List of locations
   */
  AllLocation?: string[];
  /**
   * All Statuses
   * @description List of status codes
   */
  AllStatuses?: string[];
  /**
   * All Type
   * @description List of measurement types
   */
  AllType?: string[];
  /**
   * All Types Measurement
   * @description List of measurement type identifiers
   */
  AllTypesMeasurement?: string[];
  /**
   * All Unit Of Measure
   * @description List of supported units of measure
   */
  AllUnitOfMeasure?: string[];
  /**
   * Calibration Certificate Pdf Size
   * @description PDF size option for certificates
   */
  CalibrationCertificatePDFSize?: string;
  /**
   * Date Format
   * @description Date format string, e.g., 'MM/DD/YYYY'
   */
  DateFormat?: string;
  /**
   * Display Fields
   * @description Which fields to display in lists
   */
  DisplayFields?: {
      [key: string]: unknown;
  };
  /**
   * Distributions
   * @description Distribution list identifiers
   */
  Distributions?: string[];
  /**
   * Editable Calibrated By
   * @description Who can edit the 'calibrated by' field
   */
  EditableCalibratedBy?: string;
  /**
   * Email Subject
   * @description Default email subject text
   */
  EmailSubject?: string;
  /**
   * Include Gage Assignees
   * @description Whether to include gage assignees, e.g., 'true' or 'false'
   */
  IncludeGageAssignees?: string;
  /**
   * Include Overdue
   * @description Flag to include overdue items, e.g., 'yes' or 'no'
   */
  IncludeOverdue?: string;
  /**
   * Introduction Text
   * @description Introductory text for communications
   */
  IntroductionText?: string;
  /**
   * My Time Zone
   * @description User's preferred time zone, e.g., 'America/New_York'
   */
  MyTimeZone?: string;
  /**
   * Notification Days
   * @description Days when notifications are sent
   */
  NotificationDays?: string[];
  /**
   * Notification Type
   * @description Type of notification, e.g., 'email'
   */
  NotificationType?: string;
  /**
   * Report To Include
   * @description Default report to include
   */
  ReportToInclude?: string;
  /**
   * Required Fields
   * @description Which fields are mandatory
   */
  RequiredFields?: {
      [key: string]: unknown;
  };
  /**
   * Statement
   * @description Default statement text
   */
  Statement?: string;
  /**
   * Updated Date
   * @description Timestamp in ISO 8601 format
   */
  UpdatedDate?: string;
  /**
   * Upload Image Enabled
   * @description Whether image upload is enabled
   */
  UploadImageEnabled?: boolean;
  /**
   * View Export Format
   * @description Export file format, e.g., 'csv' or 'xlsx'
   */
  ViewExportFormat?: string;
};

/**
 * Type of GAGELIST's GAGELIST_UPDATE_ACCOUNT_SETTINGS tool output.
 */
type GAGELIST_UPDATE_ACCOUNT_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Informational message from the API
       */
      message: string;
      /**
       * Success
       * @description True if operation succeeded
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
 * Type of GAGELIST's GAGELIST_UPDATE_CUSTOM_FIELD_VALUES tool input.
 */
type GAGELIST_UPDATE_CUSTOM_FIELD_VALUES_INPUT = {
  /**
   * Values
   * @description List of custom field value objects to update or create
   */
  values?: {
      /**
       * Field Id
       * @description Custom field definition ID
       */
      FieldId: number;
      /**
       * Field Value
       * @description Value to set for this custom field
       */
      FieldValue: string;
      /**
       * Id
       * @description Custom value record ID (0 to create a new record)
       */
      Id: number;
      /**
       * Ref Id
       * @description Parent record ID (gage or calibration)
       */
      RefID: number;
      /**
       * Ref Type
       * @description Reference type (1 = Gage, 2 = Calibration)
       */
      RefType: number;
      /**
       * Updated Date
       * @description ISO 8601 timestamp (ignored by server)
       * @default null
       */
      UpdatedDate: string | null;
  }[];
};

/**
 * Type of GAGELIST's GAGELIST_UPDATE_CUSTOM_FIELD_VALUES tool output.
 */
type GAGELIST_UPDATE_CUSTOM_FIELD_VALUES_OUTPUT = {
  /**
   * Data
   * @description List of IDs for the created or updated custom field value records
   */
  data?: number[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Optional message from the API
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Indicates whether the update operation succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GAGELIST's GAGELIST_UPDATE_MANUFACTURER tool input.
 */
type GAGELIST_UPDATE_MANUFACTURER_INPUT = {
  /**
   * Address
   * @description Address of the manufacturer.
   * @default null
   */
  Address: string | null;
  /**
   * Fax
   * @description Fax number of the manufacturer.
   * @default null
   */
  Fax: string | null;
  /**
   * Id
   * @description ID of the manufacturer to update (must be a positive integer)
   */
  Id?: number;
  /**
   * Name
   * @description Name of the manufacturer.
   * @default null
   */
  Name: string | null;
  /**
   * Phone
   * @description Phone number of the manufacturer.
   * @default null
   */
  Phone: string | null;
  /**
   * Website
   * @description Website URL of the manufacturer.
   * @default null
   */
  Website: string | null;
};

/**
 * Type of GAGELIST's GAGELIST_UPDATE_MANUFACTURER tool output.
 */
type GAGELIST_UPDATE_MANUFACTURER_OUTPUT = {
  /**
   * Data
   * @description API-specific return code or ID of the updated manufacturer
   */
  data?: number;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Informational message from the API
   */
  message?: string;
  /**
   * Success
   * @description Indicates whether the update succeeded
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GAGELIST's GAGELIST_UPLOAD_ATTACHMENT_TO_GAGE_RECORD tool input.
 */
type GAGELIST_UPLOAD_ATTACHMENT_TO_GAGE_RECORD_INPUT = {
  /**
   * Content Type
   * @description MIME type of the file
   * @default application/octet-stream
   */
  content_type: string;
  /**
   * File
   * Format: binary
   * @description Raw binary content of the file to upload
   */
  file?: string;
  /**
   * File Name
   * @description Name of the file, including extension
   */
  file_name?: string;
  /**
   * Id
   * @description Identifier of the gage record to which the attachment will be added
   */
  id?: number;
};

/**
 * Type of GAGELIST's GAGELIST_UPLOAD_ATTACHMENT_TO_GAGE_RECORD tool output.
 */
type GAGELIST_UPLOAD_ATTACHMENT_TO_GAGE_RECORD_OUTPUT = {
  /**
   * Data
   * @description Identifier of the uploaded attachment
   */
  data?: number;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Informational message returned by the API
   * @default null
   */
  message: string | null;
  /**
   * Success
   * @description Flag indicating if the upload was successful
   */
  success?: boolean;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "GAGELIST".
 */
export type GAGELIST_TOOL_INPUTS = {
  ADD_CALIBRATION_RECORD: GAGELIST_ADD_CALIBRATION_RECORD_INPUT
  ADD_GAGE_RECORD: GAGELIST_ADD_GAGE_RECORD_INPUT
  ADD_MANUFACTURER: GAGELIST_ADD_MANUFACTURER_INPUT
  AUTHENTICATE_WITH_GAGELIST: GAGELIST_AUTHENTICATE_WITH_GAGELIST_INPUT
  DELETE_CALIBRATION_RECORD: GAGELIST_DELETE_CALIBRATION_RECORD_INPUT
  DELETE_GAGE_RECORD: GAGELIST_DELETE_GAGE_RECORD_INPUT
  DELETE_MANUFACTURER: GAGELIST_DELETE_MANUFACTURER_INPUT
  GENERATE_CALIBRATION_CERTIFICATE: GAGELIST_GENERATE_CALIBRATION_CERTIFICATE_INPUT
  GET_ACCOUNT_SETTINGS: GAGELIST_GET_ACCOUNT_SETTINGS_INPUT
  GET_ACCOUNT_STATUS: GAGELIST_GET_ACCOUNT_STATUS_INPUT
  GET_ALL_CALIBRATION_RECORDS: GAGELIST_GET_ALL_CALIBRATION_RECORDS_INPUT
  GET_ALL_GAGE_RECORDS: GAGELIST_GET_ALL_GAGE_RECORDS_INPUT
  GET_ALL_MANUFACTURERS: GAGELIST_GET_ALL_MANUFACTURERS_INPUT
  GET_ATTACHMENT: GAGELIST_GET_ATTACHMENT_INPUT
  GET_CUSTOM_FIELDS: GAGELIST_GET_CUSTOM_FIELDS_INPUT
  GET_SINGLE_CALIBRATION_RECORD: GAGELIST_GET_SINGLE_CALIBRATION_RECORD_INPUT
  GET_SINGLE_GAGE_RECORD: GAGELIST_GET_SINGLE_GAGE_RECORD_INPUT
  UPDATE_ACCOUNT_SETTINGS: GAGELIST_UPDATE_ACCOUNT_SETTINGS_INPUT
  UPDATE_CUSTOM_FIELD_VALUES: GAGELIST_UPDATE_CUSTOM_FIELD_VALUES_INPUT
  UPDATE_MANUFACTURER: GAGELIST_UPDATE_MANUFACTURER_INPUT
  UPLOAD_ATTACHMENT_TO_GAGE_RECORD: GAGELIST_UPLOAD_ATTACHMENT_TO_GAGE_RECORD_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GAGELIST".
 */
export type GAGELIST_TOOL_OUTPUTS = {
  ADD_CALIBRATION_RECORD: GAGELIST_ADD_CALIBRATION_RECORD_OUTPUT
  ADD_GAGE_RECORD: GAGELIST_ADD_GAGE_RECORD_OUTPUT
  ADD_MANUFACTURER: GAGELIST_ADD_MANUFACTURER_OUTPUT
  AUTHENTICATE_WITH_GAGELIST: GAGELIST_AUTHENTICATE_WITH_GAGELIST_OUTPUT
  DELETE_CALIBRATION_RECORD: GAGELIST_DELETE_CALIBRATION_RECORD_OUTPUT
  DELETE_GAGE_RECORD: GAGELIST_DELETE_GAGE_RECORD_OUTPUT
  DELETE_MANUFACTURER: GAGELIST_DELETE_MANUFACTURER_OUTPUT
  GENERATE_CALIBRATION_CERTIFICATE: GAGELIST_GENERATE_CALIBRATION_CERTIFICATE_OUTPUT
  GET_ACCOUNT_SETTINGS: GAGELIST_GET_ACCOUNT_SETTINGS_OUTPUT
  GET_ACCOUNT_STATUS: GAGELIST_GET_ACCOUNT_STATUS_OUTPUT
  GET_ALL_CALIBRATION_RECORDS: GAGELIST_GET_ALL_CALIBRATION_RECORDS_OUTPUT
  GET_ALL_GAGE_RECORDS: GAGELIST_GET_ALL_GAGE_RECORDS_OUTPUT
  GET_ALL_MANUFACTURERS: GAGELIST_GET_ALL_MANUFACTURERS_OUTPUT
  GET_ATTACHMENT: GAGELIST_GET_ATTACHMENT_OUTPUT
  GET_CUSTOM_FIELDS: GAGELIST_GET_CUSTOM_FIELDS_OUTPUT
  GET_SINGLE_CALIBRATION_RECORD: GAGELIST_GET_SINGLE_CALIBRATION_RECORD_OUTPUT
  GET_SINGLE_GAGE_RECORD: GAGELIST_GET_SINGLE_GAGE_RECORD_OUTPUT
  UPDATE_ACCOUNT_SETTINGS: GAGELIST_UPDATE_ACCOUNT_SETTINGS_OUTPUT
  UPDATE_CUSTOM_FIELD_VALUES: GAGELIST_UPDATE_CUSTOM_FIELD_VALUES_OUTPUT
  UPDATE_MANUFACTURER: GAGELIST_UPDATE_MANUFACTURER_OUTPUT
  UPLOAD_ATTACHMENT_TO_GAGE_RECORD: GAGELIST_UPLOAD_ATTACHMENT_TO_GAGE_RECORD_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GAGELIST toolkit.
 */
export const GAGELIST = {
  slug: "gagelist",
  tools: {
    /**
     * Tool to add a new calibration record. Use when capturing calibration details for equipment in GageList.
     */
    ADD_CALIBRATION_RECORD: "GAGELIST_ADD_CALIBRATION_RECORD",
    /**
     * Tool to add a new gage record. Use after gathering all required gage attributes to create a record.
     */
    ADD_GAGE_RECORD: "GAGELIST_ADD_GAGE_RECORD",
    /**
     * Tool to add a new manufacturer. Use after gathering all manufacturer details.
     */
    ADD_MANUFACTURER: "GAGELIST_ADD_MANUFACTURER",
    /**
     * Tool to obtain a Gagelist API access token. Use when you need to authenticate with Gagelist using client credentials. Returns OAuth2 tokens for subsequent requests.
     */
    AUTHENTICATE_WITH_GAGELIST: "GAGELIST_AUTHENTICATE_WITH_GAGELIST",
    /**
     * Tool to delete a calibration record by its ID. Use when you need to remove an existing calibration record. Use after verifying the record exists.
     */
    DELETE_CALIBRATION_RECORD: "GAGELIST_DELETE_CALIBRATION_RECORD",
    /**
     * Tool to delete a gage record by its ID. Use when you need to remove a record after confirming the ID exists.
     */
    DELETE_GAGE_RECORD: "GAGELIST_DELETE_GAGE_RECORD",
    /**
     * Tool to delete a manufacturer by its ID. Use after confirming the manufacturer exists.
     */
    DELETE_MANUFACTURER: "GAGELIST_DELETE_MANUFACTURER",
    /**
     * Tool to generate a PDF certificate from a calibration record. Use after ensuring record ID and authentication.
     */
    GENERATE_CALIBRATION_CERTIFICATE: "GAGELIST_GENERATE_CALIBRATION_CERTIFICATE",
    /**
     * Tool to get account settings. Use after successful authentication to retrieve user-specific settings.
     */
    GET_ACCOUNT_SETTINGS: "GAGELIST_GET_ACCOUNT_SETTINGS",
    /**
     * Tool to retrieve account status. Use after authenticating with Gagelist.
     */
    GET_ACCOUNT_STATUS: "GAGELIST_GET_ACCOUNT_STATUS",
    /**
     * Tool to retrieve a paginated list of calibration records. Use after obtaining a valid access token.
     */
    GET_ALL_CALIBRATION_RECORDS: "GAGELIST_GET_ALL_CALIBRATION_RECORDS",
    /**
     * Tool to retrieve a paginated list of gage records. Use after confirming the access token.
     */
    GET_ALL_GAGE_RECORDS: "GAGELIST_GET_ALL_GAGE_RECORDS",
    /**
     * Tool to retrieve a list of all manufacturers. Use after obtaining a valid access token. Returns manufacturer details including ID, name, contact information, and timestamps.
     */
    GET_ALL_MANUFACTURERS: "GAGELIST_GET_ALL_MANUFACTURERS",
    /**
     * Tool to retrieve an attachment by its ID. Use when you need to download file attachments from the system.
     */
    GET_ATTACHMENT: "GAGELIST_GET_ATTACHMENT",
    /**
     * Tool to retrieve custom field definitions. Use when you need to list all custom fields configured for both gage and calibration items after authentication.
     */
    GET_CUSTOM_FIELDS: "GAGELIST_GET_CUSTOM_FIELDS",
    /**
     * Tool to retrieve details of a single calibration record. Use when you need a specific record's detailed data. Ensure a valid Bearer token is set.
     */
    GET_SINGLE_CALIBRATION_RECORD: "GAGELIST_GET_SINGLE_CALIBRATION_RECORD",
    /**
     * Tool to get details of a single gage record by ID. Use after authentication to retrieve full record info. Example: GET_SINGLE_GAGE_RECORD(id=123)
     */
    GET_SINGLE_GAGE_RECORD: "GAGELIST_GET_SINGLE_GAGE_RECORD",
    /**
     * Tool to update account settings. Use after retrieving current settings to apply user preference changes.
     */
    UPDATE_ACCOUNT_SETTINGS: "GAGELIST_UPDATE_ACCOUNT_SETTINGS",
    /**
     * Tool to update custom field values. Use when you need to set or modify custom field values for a gage or calibration record after authentication.
     */
    UPDATE_CUSTOM_FIELD_VALUES: "GAGELIST_UPDATE_CUSTOM_FIELD_VALUES",
    /**
     * Tool to update a manufacturer by its ID. Use after confirming the manufacturer exists.
     */
    UPDATE_MANUFACTURER: "GAGELIST_UPDATE_MANUFACTURER",
    /**
     * Tool to upload an attachment to a gage record. Use when adding files to an existing gage record.
     */
    UPLOAD_ATTACHMENT_TO_GAGE_RECORD: "GAGELIST_UPLOAD_ATTACHMENT_TO_GAGE_RECORD",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GAGELIST".
 */
export type GAGELIST_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GAGELIST".
 */
export type GAGELIST_TRIGGER_EVENTS = {}
