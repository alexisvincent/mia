// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of APALEO's APALEO_ARCHIVE_A_PROPERTY tool input.
 */
type APALEO_ARCHIVE_A_PROPERTY_INPUT = {
  /**
   * Id
   * @description The id of the property
   */
  id?: string;
};

/**
 * Type of APALEO's APALEO_ARCHIVE_A_PROPERTY tool output.
 */
type APALEO_ARCHIVE_A_PROPERTY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_CHECK_IF_A_PROPERTY_EXISTS tool input.
 */
type APALEO_CHECK_IF_A_PROPERTY_EXISTS_INPUT = {
  /**
   * Id
   * @description The id of the property.
   */
  id?: string;
};

/**
 * Type of APALEO's APALEO_CHECK_IF_A_PROPERTY_EXISTS tool output.
 */
type APALEO_CHECK_IF_A_PROPERTY_EXISTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_CHECK_IF_A_UNIT_ATTRIBUTE_EXISTS tool input.
 */
type APALEO_CHECK_IF_A_UNIT_ATTRIBUTE_EXISTS_INPUT = {
  /**
   * Id
   * @description The id of the unit attribute.
   */
  id?: string;
};

/**
 * Type of APALEO's APALEO_CHECK_IF_A_UNIT_ATTRIBUTE_EXISTS tool output.
 */
type APALEO_CHECK_IF_A_UNIT_ATTRIBUTE_EXISTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_CHECK_IF_A_UNIT_EXISTS tool input.
 */
type APALEO_CHECK_IF_A_UNIT_EXISTS_INPUT = {
  /**
   * Id
   * @description The id of the unit.
   */
  id?: string;
};

/**
 * Type of APALEO's APALEO_CHECK_IF_A_UNIT_EXISTS tool output.
 */
type APALEO_CHECK_IF_A_UNIT_EXISTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_CHECK_IF_A_UNIT_GROUP_EXISTS tool input.
 */
type APALEO_CHECK_IF_A_UNIT_GROUP_EXISTS_INPUT = {
  /**
   * Id
   * @description The id of the unit group.
   */
  id?: string;
};

/**
 * Type of APALEO's APALEO_CHECK_IF_A_UNIT_GROUP_EXISTS tool output.
 */
type APALEO_CHECK_IF_A_UNIT_GROUP_EXISTS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_CLONES_A_PROPERTY tool input.
 */
type APALEO_CLONES_A_PROPERTY_INPUT = {
  /**
   * Bank Account  Bank
   * @description Bank
   */
  bankAccount__bank?: string;
  /**
   * Bank Account  Bic
   * @description Bic
   */
  bankAccount__bic?: string;
  /**
   * Bank Account  Iban
   * @description Iban
   */
  bankAccount__iban?: string;
  /**
   * Code
   * @description The code for the property that can be shown in reports and table views
   */
  code?: string;
  /**
   * Commercial Register Entry
   * @description The entry in the Commercial Reigster of the company running the property, as it should appear on invoices
   */
  commercialRegisterEntry?: string;
  /**
   * Company Name
   * @description The legal name of the company running the property.
   */
  companyName?: string;
  /**
   * Currency Code
   * @description The currency a property works with.
   */
  currencyCode?: string;
  /**
   * Default Check In Time
   * @description The default check-in time<br />A time (without fractional second part) as defined in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  defaultCheckInTime?: string;
  /**
   * Default Check Out Time
   * @description The default check-out time<br />A time (without fractional second part) as defined in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  defaultCheckOutTime?: string;
  /**
   * Description
   * @description The description for the property
   */
  description?: {
      [key: string]: string;
  };
  /**
   * Id
   * @description The id of the property.
   */
  id?: string;
  /**
   * Location  Address Line1
   * @description Addressline1
   */
  location__addressLine1?: string;
  /**
   * Location  Address Line2
   * @description Addressline2
   */
  location__addressLine2?: string;
  /**
   * Location  City
   * @description City
   */
  location__city?: string;
  /**
   * Location  Country Code
   * @description The country code, in ISO 3166-1 alpha-2 code
   */
  location__countryCode?: string;
  /**
   * Location  Postal Code
   * @description Postalcode
   */
  location__postalCode?: string;
  /**
   * Location  Region Code
   * @description The ISO 3166-2 code
   */
  location__regionCode?: string;
  /**
   * Managing Directors
   * @description The managing director(s) of the company, as they should appear on invoices
   */
  managingDirectors?: string;
  /**
   * Name
   * @description The name for the property
   */
  name?: {
      [key: string]: string;
  };
  /**
   * Payment Terms
   * @description The payment terms used for all rate plans
   */
  paymentTerms?: {
      [key: string]: string;
  };
  /**
   * Tax Id
   * @description The Tax-ID of the company running the property, as it should appear on invoices
   */
  taxId?: string;
  /**
   * Time Zone
   * @description The time zone name of the property from the IANA Time Zone Database. (see: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
   */
  timeZone?: string;
};

/**
 * Type of APALEO's APALEO_CLONES_A_PROPERTY tool output.
 */
type APALEO_CLONES_A_PROPERTY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_CREATES_A_PROPERTY tool input.
 */
type APALEO_CREATES_A_PROPERTY_INPUT = {
  /**
   * Bank Account  Bank
   * @description Bank
   */
  bankAccount__bank?: string;
  /**
   * Bank Account  Bic
   * @description Bic
   */
  bankAccount__bic?: string;
  /**
   * Bank Account  Iban
   * @description Iban
   */
  bankAccount__iban?: string;
  /**
   * Code
   * @description The code for the property that can be shown in reports and table views
   */
  code?: string;
  /**
   * Commercial Register Entry
   * @description The entry in the Commercial Reigster of the company running the property, as it should appear on invoices
   */
  commercialRegisterEntry?: string;
  /**
   * Company Name
   * @description The legal name of the company running the property.
   */
  companyName?: string;
  /**
   * Currency Code
   * @description The currency a property works with.
   */
  currencyCode?: string;
  /**
   * Default Check In Time
   * @description The default check-in time<br />A time (without fractional second part) as defined in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  defaultCheckInTime?: string;
  /**
   * Default Check Out Time
   * @description The default check-out time<br />A time (without fractional second part) as defined in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  defaultCheckOutTime?: string;
  /**
   * Description
   * @description The description for the property
   */
  description?: {
      [key: string]: string;
  };
  /**
   * Location  Address Line1
   * @description Addressline1
   */
  location__addressLine1?: string;
  /**
   * Location  Address Line2
   * @description Addressline2
   */
  location__addressLine2?: string;
  /**
   * Location  City
   * @description City
   */
  location__city?: string;
  /**
   * Location  Country Code
   * @description The country code, in ISO 3166-1 alpha-2 code
   */
  location__countryCode?: string;
  /**
   * Location  Postal Code
   * @description Postalcode
   */
  location__postalCode?: string;
  /**
   * Location  Region Code
   * @description The ISO 3166-2 code
   */
  location__regionCode?: string;
  /**
   * Managing Directors
   * @description The managing director(s) of the company, as they should appear on invoices
   */
  managingDirectors?: string;
  /**
   * Name
   * @description The name for the property
   */
  name?: {
      [key: string]: string;
  };
  /**
   * Payment Terms
   * @description The payment terms used for all rate plans
   */
  paymentTerms?: {
      [key: string]: string;
  };
  /**
   * Tax Id
   * @description The Tax-ID of the company running the property, as it should appear on invoices
   */
  taxId?: string;
  /**
   * Time Zone
   * @description The time zone name of the property from the IANA Time Zone Database. (see: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
   */
  timeZone?: string;
};

/**
 * Type of APALEO's APALEO_CREATES_A_PROPERTY tool output.
 */
type APALEO_CREATES_A_PROPERTY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_CREATE_A_UNIT tool input.
 */
type APALEO_CREATE_A_UNIT_INPUT = {
  /**
   * Attributes
   * @description Collection of user defined attributes of unit
   */
  attributes?: {
      [key: string]: unknown;
  }[];
  /**
   * Condition
   * @description Condition of the unit
   * @enum {string}
   */
  condition?: "Clean" | "CleanToBeInspected" | "Dirty";
  /**
   * Connected Units
   * @description The list of units this unit is composed of
   */
  connectedUnits?: {
      [key: string]: unknown;
  }[];
  /**
   * Description
   * @description The description for the unit
   */
  description?: {
      [key: string]: string;
  };
  /**
   * Max Persons
   * @description Maximum number of persons for the unit
   */
  maxPersons?: number;
  /**
   * Name
   * @description The name for the unit
   */
  name?: string;
  /**
   * Property Id
   * @description The id of the property where the unit will be created
   */
  propertyId?: string;
  /**
   * Unit Group Id
   * @description The id of the unit group
   */
  unitGroupId?: string;
};

/**
 * Type of APALEO's APALEO_CREATE_A_UNIT tool output.
 */
type APALEO_CREATE_A_UNIT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_CREATE_A_UNIT_ATTRIBUTE tool input.
 */
type APALEO_CREATE_A_UNIT_ATTRIBUTE_INPUT = {
  /**
   * Description
   * @description The description of the unit attribute
   */
  description?: string;
  /**
   * Name
   * @description The name of the unit attribute
   */
  name?: string;
};

/**
 * Type of APALEO's APALEO_CREATE_A_UNIT_ATTRIBUTE tool output.
 */
type APALEO_CREATE_A_UNIT_ATTRIBUTE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_CREATE_A_UNIT_GROUP tool input.
 */
type APALEO_CREATE_A_UNIT_GROUP_INPUT = {
  /**
   * Code
   * @description The code for the unit group that can be shown in reports and table views
   */
  code?: string;
  /**
   * Connected Unit Groups
   * @description The list of connected unit groups this unit group is composed of
   */
  connectedUnitGroups?: {
      [key: string]: unknown;
  }[];
  /**
   * Description
   * @description The description for the unit group
   */
  description?: {
      [key: string]: string;
  };
  /**
   * Max Persons
   * @description Maximum number of persons for the unit group
   */
  maxPersons?: number;
  /**
   * Name
   * @description The name for the unit group
   */
  name?: {
      [key: string]: string;
  };
  /**
   * Property Id
   * @description The id of the property where unit group will be created
   */
  propertyId?: string;
  /**
   * Rank
   * @description The unit group rank Restrictions: - Should be greater or equal to one
   */
  rank?: number;
  /**
   * Type
   * @description The unit group type
   * @enum {string}
   */
  type?: "BedRoom" | "MeetingRoom" | "EventSpace" | "ParkingLot";
};

/**
 * Type of APALEO's APALEO_CREATE_A_UNIT_GROUP tool output.
 */
type APALEO_CREATE_A_UNIT_GROUP_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_CREATE_MULTIPLE_UNITS tool input.
 */
type APALEO_CREATE_MULTIPLE_UNITS_INPUT = {
  /**
   * Units
   * @description Units
   */
  units?: {
      [key: string]: unknown;
  }[];
};

/**
 * Type of APALEO's APALEO_CREATE_MULTIPLE_UNITS tool output.
 */
type APALEO_CREATE_MULTIPLE_UNITS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_DELETES_UNIT_ATTRIBUTE tool input.
 */
type APALEO_DELETES_UNIT_ATTRIBUTE_INPUT = {
  /**
   * Id
   * @description Id of unit attribute
   */
  id?: string;
};

/**
 * Type of APALEO's APALEO_DELETES_UNIT_ATTRIBUTE tool output.
 */
type APALEO_DELETES_UNIT_ATTRIBUTE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_DELETE_A_UNIT tool input.
 */
type APALEO_DELETE_A_UNIT_INPUT = {
  /**
   * Id
   * @description The id of the unit.
   */
  id?: string;
};

/**
 * Type of APALEO's APALEO_DELETE_A_UNIT tool output.
 */
type APALEO_DELETE_A_UNIT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_DELETE_A_UNIT_GROUP tool input.
 */
type APALEO_DELETE_A_UNIT_GROUP_INPUT = {
  /**
   * Id
   * @description The id of the unit group.
   */
  id?: string;
};

/**
 * Type of APALEO's APALEO_DELETE_A_UNIT_GROUP tool output.
 */
type APALEO_DELETE_A_UNIT_GROUP_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_GET_A_PROPERTIES_LIST tool input.
 */
type APALEO_GET_A_PROPERTIES_LIST_INPUT = {
  /**
   * Country Code
   * @description Filter result by country code
   */
  countryCode?: string[];
  /**
   * Expand
   * @description List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.
   */
  expand?: string[];
  /**
   * Include Archived
   * @description Include archived properties in the result. If not set, or set to false, it only returns non-archived properties
   */
  includeArchived?: boolean;
  /**
   * Page Number
   * @description Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.
   * @default 1
   */
  pageNumber: number;
  /**
   * Page Size
   * @description Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.
   */
  pageSize?: number;
  /**
   * Status
   * @description Filter result by property status
   */
  status?: string[];
};

/**
 * Type of APALEO's APALEO_GET_A_PROPERTIES_LIST tool output.
 */
type APALEO_GET_A_PROPERTIES_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_GET_A_PROPERTY tool input.
 */
type APALEO_GET_A_PROPERTY_INPUT = {
  /**
   * Expand
   * @description List of all embedded resources that should be expanded in the response. Possible values are: actions. All other values will be silently ignored.
   */
  expand?: string[];
  /**
   * Id
   * @description The id of the property.
   */
  id?: string;
  /**
   * Languages
   * @description "all" or comma separated list of two-letter language codes (ISO Alpha-2)
   */
  languages?: string[];
};

/**
 * Type of APALEO's APALEO_GET_A_PROPERTY tool output.
 */
type APALEO_GET_A_PROPERTY_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_GET_A_UNIT tool input.
 */
type APALEO_GET_A_UNIT_INPUT = {
  /**
   * Expand
   * @description List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, connectedUnits. All other values will be silently ignored.
   */
  expand?: string[];
  /**
   * Id
   * @description The id of the unit.
   */
  id?: string;
  /**
   * Languages
   * @description "all" or comma separated list of two-letter language codes (ISO Alpha-2)
   */
  languages?: string[];
};

/**
 * Type of APALEO's APALEO_GET_A_UNIT tool output.
 */
type APALEO_GET_A_UNIT_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_GET_A_UNITS_LIST tool input.
 */
type APALEO_GET_A_UNITS_LIST_INPUT = {
  /**
   * Condition
   * @description Return units with a specific condition
   * @enum {string}
   */
  condition?: "Clean" | "CleanToBeInspected" | "Dirty";
  /**
   * Expand
   * @description List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, connectedUnits. All other values will be silently ignored.
   */
  expand?: string[];
  /**
   * Is Occupied
   * @description Return only occupied or vacant units
   */
  isOccupied?: boolean;
  /**
   * Maintenance Type
   * @description Return units with the specific maintenance type
   * @enum {string}
   */
  maintenanceType?: "OutOfService" | "OutOfOrder" | "OutOfInventory";
  /**
   * Page Number
   * @description Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.
   * @default 1
   */
  pageNumber: number;
  /**
   * Page Size
   * @description Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.
   */
  pageSize?: number;
  /**
   * Property Id
   * @description Return units for specific property
   */
  propertyId?: string;
  /**
   * Text Search
   * @description This will filter all units where the provided text is contained in the unit name. The search is case insensitive.
   */
  textSearch?: string;
  /**
   * Unit Attribute Ids
   * @description Return units with the specific unit attributes
   */
  unitAttributeIds?: string[];
  /**
   * Unit Group Id
   * @description Return units for the specific unit group - <b>DEPRECATED: This property will be removed 20.04.2022. Use `UnitGroupIds` instead</b>
   */
  unitGroupId?: string;
  /**
   * Unit Group Ids
   * @description Return units with the specific unit groups
   */
  unitGroupIds?: string[];
};

/**
 * Type of APALEO's APALEO_GET_A_UNITS_LIST tool output.
 */
type APALEO_GET_A_UNITS_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_GET_A_UNIT_GROUP tool input.
 */
type APALEO_GET_A_UNIT_GROUP_INPUT = {
  /**
   * Expand
   * @description List of all embedded resources that should be expanded in the response. Possible values are: property, connectedUnitGroups. All other values will be silently ignored.
   */
  expand?: string[];
  /**
   * Id
   * @description The id of the unit group.
   */
  id?: string;
  /**
   * Languages
   * @description "all" or comma separated list of two-letter language codes (ISO Alpha-2)
   */
  languages?: string[];
};

/**
 * Type of APALEO's APALEO_GET_A_UNIT_GROUP tool output.
 */
type APALEO_GET_A_UNIT_GROUP_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_GET_UNIT_ATTRIBUTE_BY_ID tool input.
 */
type APALEO_GET_UNIT_ATTRIBUTE_BY_ID_INPUT = {
  /**
   * Id
   * @description The id of the unit attribute
   */
  id?: string;
};

/**
 * Type of APALEO's APALEO_GET_UNIT_ATTRIBUTE_BY_ID tool output.
 */
type APALEO_GET_UNIT_ATTRIBUTE_BY_ID_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_GET_UNIT_ATTRIBUTE_LIST tool input.
 */
type APALEO_GET_UNIT_ATTRIBUTE_LIST_INPUT = {
  /**
   * Page Number
   * @description Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.
   * @default 1
   */
  pageNumber: number;
  /**
   * Page Size
   * @description Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.
   */
  pageSize?: number;
};

/**
 * Type of APALEO's APALEO_GET_UNIT_ATTRIBUTE_LIST tool output.
 */
type APALEO_GET_UNIT_ATTRIBUTE_LIST_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_LIST_UNIT_GROUPS tool input.
 */
type APALEO_LIST_UNIT_GROUPS_INPUT = {
  /**
   * Expand
   * @description List of all embedded resources that should be expanded in the response. Possible values are: property, connectedUnitGroups. All other values will be silently ignored.
   */
  expand?: string[];
  /**
   * Page Number
   * @description Page number, 1-based. Default value is 1 (if this is not set or not positive). Results in 204 if there are no items on that page.
   * @default 1
   */
  pageNumber: number;
  /**
   * Page Size
   * @description Page size. If this is not set or not positive, the pageNumber is ignored and all items are returned.
   */
  pageSize?: number;
  /**
   * Property Id
   * @description Return unit groups for specific property
   */
  propertyId?: string;
  /**
   * Unit Group Types
   * @description Unitgrouptypes
   */
  unitGroupTypes?: string[];
};

/**
 * Type of APALEO's APALEO_LIST_UNIT_GROUPS tool output.
 */
type APALEO_LIST_UNIT_GROUPS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_MOVE_PROPERTY_TO_LIVE tool input.
 */
type APALEO_MOVE_PROPERTY_TO_LIVE_INPUT = {
  /**
   * Id
   * @description The id of the property
   */
  id?: string;
};

/**
 * Type of APALEO's APALEO_MOVE_PROPERTY_TO_LIVE tool output.
 */
type APALEO_MOVE_PROPERTY_TO_LIVE_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_REPLACE_A_UNIT_GROUP tool input.
 */
type APALEO_REPLACE_A_UNIT_GROUP_INPUT = {
  /**
   * Connected Unit Groups
   * @description The list of connected unit groups this unit group is composed of
   */
  connectedUnitGroups?: {
      [key: string]: unknown;
  }[];
  /**
   * Description
   * @description The description for the unit group
   */
  description?: {
      [key: string]: string;
  };
  /**
   * Id
   * @description The id of the unit group.
   */
  id?: string;
  /**
   * Max Persons
   * @description Maximum number of persons for the unit group. If this value is increased, the surcharges for the related rate plans must be specified in order for the rate plans to be sellable for the new possible occupancies.
   */
  maxPersons?: number;
  /**
   * Name
   * @description The name for the unit group
   */
  name?: {
      [key: string]: string;
  };
  /**
   * Rank
   * @description The unit group rank Restrictions: - Should be greater or equal to one
   */
  rank?: number;
};

/**
 * Type of APALEO's APALEO_REPLACE_A_UNIT_GROUP tool output.
 */
type APALEO_REPLACE_A_UNIT_GROUP_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_RESET_PROPERTY_DATA tool input.
 */
type APALEO_RESET_PROPERTY_DATA_INPUT = {
  /**
   * Id
   * @description The id of the property
   */
  id?: string;
};

/**
 * Type of APALEO's APALEO_RESET_PROPERTY_DATA tool output.
 */
type APALEO_RESET_PROPERTY_DATA_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_RETURNS_A_LIST_OF_SUPPORTED_COUNTRIES tool input.
 */
type APALEO_RETURNS_A_LIST_OF_SUPPORTED_COUNTRIES_INPUT = object;

/**
 * Type of APALEO's APALEO_RETURNS_A_LIST_OF_SUPPORTED_COUNTRIES tool output.
 */
type APALEO_RETURNS_A_LIST_OF_SUPPORTED_COUNTRIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_RETURNS_NUMBER_OF_UNITS tool input.
 */
type APALEO_RETURNS_NUMBER_OF_UNITS_INPUT = {
  /**
   * Condition
   * @description Return units with a specific condition
   * @enum {string}
   */
  condition?: "Clean" | "CleanToBeInspected" | "Dirty";
  /**
   * Is Occupied
   * @description Return only occupied or vacant units
   */
  isOccupied?: boolean;
  /**
   * Maintenance Type
   * @description Return units with the specific maintenance type
   * @enum {string}
   */
  maintenanceType?: "OutOfService" | "OutOfOrder" | "OutOfInventory";
  /**
   * Property Id
   * @description Return units for specific property
   */
  propertyId?: string;
  /**
   * Text Search
   * @description This will filter all units where the provided text is contained in the unit name. The search is case insensitive.
   */
  textSearch?: string;
  /**
   * Unit Attribute Ids
   * @description Return units with the specific unit attributes
   */
  unitAttributeIds?: string[];
  /**
   * Unit Group Id
   * @description Return units for the specific unit group - <b>DEPRECATED: This property will be removed 20.04.2022. Use `UnitGroupIds` instead</b>
   */
  unitGroupId?: string;
  /**
   * Unit Group Ids
   * @description Return units with the specific unit groups
   */
  unitGroupIds?: string[];
};

/**
 * Type of APALEO's APALEO_RETURNS_NUMBER_OF_UNITS tool output.
 */
type APALEO_RETURNS_NUMBER_OF_UNITS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_RETURNS_NUMBER_OF_UNIT_GROUPS tool input.
 */
type APALEO_RETURNS_NUMBER_OF_UNIT_GROUPS_INPUT = {
  /**
   * Property Id
   * @description Return unit groups for specific property
   */
  propertyId?: string;
  /**
   * Unit Group Types
   * @description Unitgrouptypes
   */
  unitGroupTypes?: string[];
};

/**
 * Type of APALEO's APALEO_RETURNS_NUMBER_OF_UNIT_GROUPS tool output.
 */
type APALEO_RETURNS_NUMBER_OF_UNIT_GROUPS_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of APALEO's APALEO_RETURN_TOTAL_COUNT_OF_PROPERTIES tool input.
 */
type APALEO_RETURN_TOTAL_COUNT_OF_PROPERTIES_INPUT = object;

/**
 * Type of APALEO's APALEO_RETURN_TOTAL_COUNT_OF_PROPERTIES tool output.
 */
type APALEO_RETURN_TOTAL_COUNT_OF_PROPERTIES_OUTPUT = {
  /** Data */
  data?: {
      [key: string]: unknown;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "APALEO".
 */
export type APALEO_TOOL_INPUTS = {
  ARCHIVE_A_PROPERTY: APALEO_ARCHIVE_A_PROPERTY_INPUT
  CHECK_IF_A_PROPERTY_EXISTS: APALEO_CHECK_IF_A_PROPERTY_EXISTS_INPUT
  CHECK_IF_A_UNIT_ATTRIBUTE_EXISTS: APALEO_CHECK_IF_A_UNIT_ATTRIBUTE_EXISTS_INPUT
  CHECK_IF_A_UNIT_EXISTS: APALEO_CHECK_IF_A_UNIT_EXISTS_INPUT
  CHECK_IF_A_UNIT_GROUP_EXISTS: APALEO_CHECK_IF_A_UNIT_GROUP_EXISTS_INPUT
  CLONES_A_PROPERTY: APALEO_CLONES_A_PROPERTY_INPUT
  CREATES_A_PROPERTY: APALEO_CREATES_A_PROPERTY_INPUT
  CREATE_A_UNIT: APALEO_CREATE_A_UNIT_INPUT
  CREATE_A_UNIT_ATTRIBUTE: APALEO_CREATE_A_UNIT_ATTRIBUTE_INPUT
  CREATE_A_UNIT_GROUP: APALEO_CREATE_A_UNIT_GROUP_INPUT
  CREATE_MULTIPLE_UNITS: APALEO_CREATE_MULTIPLE_UNITS_INPUT
  DELETES_UNIT_ATTRIBUTE: APALEO_DELETES_UNIT_ATTRIBUTE_INPUT
  DELETE_A_UNIT: APALEO_DELETE_A_UNIT_INPUT
  DELETE_A_UNIT_GROUP: APALEO_DELETE_A_UNIT_GROUP_INPUT
  GET_A_PROPERTIES_LIST: APALEO_GET_A_PROPERTIES_LIST_INPUT
  GET_A_PROPERTY: APALEO_GET_A_PROPERTY_INPUT
  GET_A_UNIT: APALEO_GET_A_UNIT_INPUT
  GET_A_UNITS_LIST: APALEO_GET_A_UNITS_LIST_INPUT
  GET_A_UNIT_GROUP: APALEO_GET_A_UNIT_GROUP_INPUT
  GET_UNIT_ATTRIBUTE_BY_ID: APALEO_GET_UNIT_ATTRIBUTE_BY_ID_INPUT
  GET_UNIT_ATTRIBUTE_LIST: APALEO_GET_UNIT_ATTRIBUTE_LIST_INPUT
  LIST_UNIT_GROUPS: APALEO_LIST_UNIT_GROUPS_INPUT
  MOVE_PROPERTY_TO_LIVE: APALEO_MOVE_PROPERTY_TO_LIVE_INPUT
  REPLACE_A_UNIT_GROUP: APALEO_REPLACE_A_UNIT_GROUP_INPUT
  RESET_PROPERTY_DATA: APALEO_RESET_PROPERTY_DATA_INPUT
  RETURNS_A_LIST_OF_SUPPORTED_COUNTRIES: APALEO_RETURNS_A_LIST_OF_SUPPORTED_COUNTRIES_INPUT
  RETURNS_NUMBER_OF_UNITS: APALEO_RETURNS_NUMBER_OF_UNITS_INPUT
  RETURNS_NUMBER_OF_UNIT_GROUPS: APALEO_RETURNS_NUMBER_OF_UNIT_GROUPS_INPUT
  RETURN_TOTAL_COUNT_OF_PROPERTIES: APALEO_RETURN_TOTAL_COUNT_OF_PROPERTIES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "APALEO".
 */
export type APALEO_TOOL_OUTPUTS = {
  ARCHIVE_A_PROPERTY: APALEO_ARCHIVE_A_PROPERTY_OUTPUT
  CHECK_IF_A_PROPERTY_EXISTS: APALEO_CHECK_IF_A_PROPERTY_EXISTS_OUTPUT
  CHECK_IF_A_UNIT_ATTRIBUTE_EXISTS: APALEO_CHECK_IF_A_UNIT_ATTRIBUTE_EXISTS_OUTPUT
  CHECK_IF_A_UNIT_EXISTS: APALEO_CHECK_IF_A_UNIT_EXISTS_OUTPUT
  CHECK_IF_A_UNIT_GROUP_EXISTS: APALEO_CHECK_IF_A_UNIT_GROUP_EXISTS_OUTPUT
  CLONES_A_PROPERTY: APALEO_CLONES_A_PROPERTY_OUTPUT
  CREATES_A_PROPERTY: APALEO_CREATES_A_PROPERTY_OUTPUT
  CREATE_A_UNIT: APALEO_CREATE_A_UNIT_OUTPUT
  CREATE_A_UNIT_ATTRIBUTE: APALEO_CREATE_A_UNIT_ATTRIBUTE_OUTPUT
  CREATE_A_UNIT_GROUP: APALEO_CREATE_A_UNIT_GROUP_OUTPUT
  CREATE_MULTIPLE_UNITS: APALEO_CREATE_MULTIPLE_UNITS_OUTPUT
  DELETES_UNIT_ATTRIBUTE: APALEO_DELETES_UNIT_ATTRIBUTE_OUTPUT
  DELETE_A_UNIT: APALEO_DELETE_A_UNIT_OUTPUT
  DELETE_A_UNIT_GROUP: APALEO_DELETE_A_UNIT_GROUP_OUTPUT
  GET_A_PROPERTIES_LIST: APALEO_GET_A_PROPERTIES_LIST_OUTPUT
  GET_A_PROPERTY: APALEO_GET_A_PROPERTY_OUTPUT
  GET_A_UNIT: APALEO_GET_A_UNIT_OUTPUT
  GET_A_UNITS_LIST: APALEO_GET_A_UNITS_LIST_OUTPUT
  GET_A_UNIT_GROUP: APALEO_GET_A_UNIT_GROUP_OUTPUT
  GET_UNIT_ATTRIBUTE_BY_ID: APALEO_GET_UNIT_ATTRIBUTE_BY_ID_OUTPUT
  GET_UNIT_ATTRIBUTE_LIST: APALEO_GET_UNIT_ATTRIBUTE_LIST_OUTPUT
  LIST_UNIT_GROUPS: APALEO_LIST_UNIT_GROUPS_OUTPUT
  MOVE_PROPERTY_TO_LIVE: APALEO_MOVE_PROPERTY_TO_LIVE_OUTPUT
  REPLACE_A_UNIT_GROUP: APALEO_REPLACE_A_UNIT_GROUP_OUTPUT
  RESET_PROPERTY_DATA: APALEO_RESET_PROPERTY_DATA_OUTPUT
  RETURNS_A_LIST_OF_SUPPORTED_COUNTRIES: APALEO_RETURNS_A_LIST_OF_SUPPORTED_COUNTRIES_OUTPUT
  RETURNS_NUMBER_OF_UNITS: APALEO_RETURNS_NUMBER_OF_UNITS_OUTPUT
  RETURNS_NUMBER_OF_UNIT_GROUPS: APALEO_RETURNS_NUMBER_OF_UNIT_GROUPS_OUTPUT
  RETURN_TOTAL_COUNT_OF_PROPERTIES: APALEO_RETURN_TOTAL_COUNT_OF_PROPERTIES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's APALEO toolkit.
 */
export const APALEO = {
  slug: "apaleo",
  tools: {
    /**
     * Use this endpoint to archive an existing live property this operation set the isarchived flag to true<br>you must have at least one of these scopes: 'properties.manage, setup.manage'.
     */
    ARCHIVE_A_PROPERTY: "APALEO_ARCHIVE_A_PROPERTY",
    /**
     * Check if a property exists by id.<br>you need to be authorized (no particular scope required)
     */
    CHECK_IF_A_PROPERTY_EXISTS: "APALEO_CHECK_IF_A_PROPERTY_EXISTS",
    /**
     * Check if a unit attribute exists<br>you must have at least one of these scopes: 'unitattributes.read, setup.read, setup.manage'.
     */
    CHECK_IF_A_UNIT_ATTRIBUTE_EXISTS: "APALEO_CHECK_IF_A_UNIT_ATTRIBUTE_EXISTS",
    /**
     * Check if a unit exists by id.<br>you must have at least one of these scopes: 'units.read, setup.read, setup.manage'.
     */
    CHECK_IF_A_UNIT_EXISTS: "APALEO_CHECK_IF_A_UNIT_EXISTS",
    /**
     * Check if a unit group exists by id.<br>you must have at least one of these scopes: 'unitgroups.read, setup.read, setup.manage'.
     */
    CHECK_IF_A_UNIT_GROUP_EXISTS: "APALEO_CHECK_IF_A_UNIT_GROUP_EXISTS",
    /**
     * Use this call to clone a specific property. this operation creates a new property with inventory and rate plans from the specified property.<br>you must have at least one of these scopes: 'properties.create, setup.manage'.
     */
    CLONES_A_PROPERTY: "APALEO_CLONES_A_PROPERTY",
    /**
     * Use this call to create a new property.<br>you must have at least one of these scopes: 'properties.create, setup.manage'.
     */
    CREATES_A_PROPERTY: "APALEO_CREATES_A_PROPERTY",
    /**
     * Use this call to create a new unit.<br>you must have at least one of these scopes: 'units.create, setup.manage'.
     */
    CREATE_A_UNIT: "APALEO_CREATE_A_UNIT",
    /**
     * Use this call to create a new unit attribute.<br>you must have at least one of these scopes: 'unitattributes.create, setup.manage'.
     */
    CREATE_A_UNIT_ATTRIBUTE: "APALEO_CREATE_A_UNIT_ATTRIBUTE",
    /**
     * Use this call to create a new unit group.<br>you must have at least one of these scopes: 'unitgroups.create, setup.manage'.
     */
    CREATE_A_UNIT_GROUP: "APALEO_CREATE_A_UNIT_GROUP",
    /**
     * Use this call to create multiple units, following a naming rule.<br>you must have at least one of these scopes: 'units.create, setup.manage'.
     */
    CREATE_MULTIPLE_UNITS: "APALEO_CREATE_MULTIPLE_UNITS",
    /**
     * Deletes unit attribute<br>you must have at least one of these scopes: 'unitattributes.delete, setup.manage'.
     */
    DELETES_UNIT_ATTRIBUTE: "APALEO_DELETES_UNIT_ATTRIBUTE",
    /**
     * Use this call to delete a unit.<br>you must have at least one of these scopes: 'units.delete, setup.manage'.
     */
    DELETE_A_UNIT: "APALEO_DELETE_A_UNIT",
    /**
     * Use this call to delete a unit group.<br>you must have at least one of these scopes: 'unitgroups.delete, setup.manage'.
     */
    DELETE_A_UNIT_GROUP: "APALEO_DELETE_A_UNIT_GROUP",
    /**
     * Get the list of properties.<br>you need to be authorized (no particular scope required)
     */
    GET_A_PROPERTIES_LIST: "APALEO_GET_A_PROPERTIES_LIST",
    /**
     * Get a property by id.<br>you need to be authorized (no particular scope required)
     */
    GET_A_PROPERTY: "APALEO_GET_A_PROPERTY",
    /**
     * Get a unit by id.<br>you must have at least one of these scopes: 'units.read, setup.read, setup.manage'.
     */
    GET_A_UNIT: "APALEO_GET_A_UNIT",
    /**
     * Get the list of units.<br>you must have at least one of these scopes: 'units.read, setup.read, setup.manage'.
     */
    GET_A_UNITS_LIST: "APALEO_GET_A_UNITS_LIST",
    /**
     * Get a unit group by id.<br>you must have at least one of these scopes: 'unitgroups.read, setup.read, setup.manage'.
     */
    GET_A_UNIT_GROUP: "APALEO_GET_A_UNIT_GROUP",
    /**
     * Get unit attribute by id<br>you must have at least one of these scopes: 'unitattributes.read, setup.read, setup.manage'.
     */
    GET_UNIT_ATTRIBUTE_BY_ID: "APALEO_GET_UNIT_ATTRIBUTE_BY_ID",
    /**
     * Get unit attribute list<br>you must have at least one of these scopes: 'unitattributes.read, setup.read, setup.manage'.
     */
    GET_UNIT_ATTRIBUTE_LIST: "APALEO_GET_UNIT_ATTRIBUTE_LIST",
    /**
     * Get the list of unit groups.<br>you must have at least one of these scopes: 'unitgroups.read, setup.read, setup.manage'.
     */
    LIST_UNIT_GROUPS: "APALEO_LIST_UNIT_GROUPS",
    /**
     * Use this endpoint to move an existing test property to live this operation changes the property status to 'live'<br>you must have at least one of these scopes: 'properties.manage, setup.manage'.
     */
    MOVE_PROPERTY_TO_LIVE: "APALEO_MOVE_PROPERTY_TO_LIVE",
    /**
     * Use this call to modify a unit group.<br>you must have at least one of these scopes: 'unitgroups.manage, setup.manage'.
     */
    REPLACE_A_UNIT_GROUP: "APALEO_REPLACE_A_UNIT_GROUP",
    /**
     * This endpoint deletes transactional data for a property in 'test' status. requires 'properties.manage' or 'setup.manage' scopes.
     */
    RESET_PROPERTY_DATA: "APALEO_RESET_PROPERTY_DATA",
    /**
     * Returns a list of iso country codes that could be used to create properties.<br>you need to be authorized (no particular scope required)
     */
    RETURNS_A_LIST_OF_SUPPORTED_COUNTRIES: "APALEO_RETURNS_A_LIST_OF_SUPPORTED_COUNTRIES",
    /**
     * Returns number of units matching the filter criteria<br>you must have at least one of these scopes: 'units.read, setup.read, setup.manage'.
     */
    RETURNS_NUMBER_OF_UNITS: "APALEO_RETURNS_NUMBER_OF_UNITS",
    /**
     * Returns number of unit groups matching the filter criteria<br>you must have at least one of these scopes: 'unitgroups.read, setup.read, setup.manage'.
     */
    RETURNS_NUMBER_OF_UNIT_GROUPS: "APALEO_RETURNS_NUMBER_OF_UNIT_GROUPS",
    /**
     * Return total count of properties<br>you need to be authorized (no particular scope required)
     */
    RETURN_TOTAL_COUNT_OF_PROPERTIES: "APALEO_RETURN_TOTAL_COUNT_OF_PROPERTIES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "APALEO".
 */
export type APALEO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "APALEO".
 */
export type APALEO_TRIGGER_EVENTS = {}
