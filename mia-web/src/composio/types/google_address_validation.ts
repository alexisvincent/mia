// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOOGLE_ADDRESS_VALIDATION's GOOGLE_ADDRESS_VALIDATION_PROVIDE_VALIDATION_FEEDBACK tool input.
 */
type GOOGLE_ADDRESS_VALIDATION_PROVIDE_VALIDATION_FEEDBACK_INPUT = {
  /**
   * Conclusion
   * @description Outcome of the sequence of validation attempts. Must not be VALIDATION_CONCLUSION_UNSPECIFIED
   * @enum {string}
   */
  conclusion?: "VALIDATION_CONCLUSION_UNSPECIFIED" | "VALIDATED_VERSION_USED" | "USER_VERSION_USED" | "UNVALIDATED_VERSION_USED" | "UNUSED";
  /**
   * Response Id
   * @description ID of the response this feedback is for; the responseId from the first validateAddress response
   */
  responseId?: string;
};

/**
 * Type of GOOGLE_ADDRESS_VALIDATION's GOOGLE_ADDRESS_VALIDATION_PROVIDE_VALIDATION_FEEDBACK tool output.
 */
type GOOGLE_ADDRESS_VALIDATION_PROVIDE_VALIDATION_FEEDBACK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: Record<string, never>;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_ADDRESS_VALIDATION's GOOGLE_ADDRESS_VALIDATION_VALIDATE_ADDRESS tool input.
 */
type GOOGLE_ADDRESS_VALIDATION_VALIDATE_ADDRESS_INPUT = {
  /**
   * Address
   * @description Address to validate; use addressLines for unformatted addresses.
   */
  address?: {
      /**
       * Address Lines
       * @description Unstructured lines in envelope order; total length ≤280 chars.
       */
      addressLines: string[];
      /**
       * Administrative Area
       * @description Top-level administrative area (state/province).
       * @default null
       */
      administrativeArea: string | null;
      /**
       * Language Code
       * @description Ignored for this API.
       * @default null
       */
      languageCode: string | null;
      /**
       * Locality
       * @description City or town.
       * @default null
       */
      locality: string | null;
      /**
       * Organization
       * @description Ignored by this API.
       * @default null
       */
      organization: string | null;
      /**
       * Postal Code
       * @description Postal or ZIP code.
       * @default null
       */
      postalCode: string | null;
      /**
       * Recipients
       * @description Ignored by this API.
       * @default null
       */
      recipients: string[] | null;
      /**
       * Region Code
       * @description CLDR region code, e.g., 'US'.
       * @default null
       */
      regionCode: string | null;
      /**
       * Revision
       * @description Must be 0; any other value causes INVALID_ARGUMENT.
       * @default null
       */
      revision: number | null;
      /**
       * Sorting Code
       * @description Country-specific sorting code.
       * @default null
       */
      sortingCode: string | null;
      /**
       * Sublocality
       * @description Neighborhood or sublocality.
       * @default null
       */
      sublocality: string | null;
  };
  /**
   * Enable Usps Cass
   * @description Enable USPS CASS mode (US/PR only).
   * @default null
   */
  enableUspsCass: boolean | null;
  /**
   * LanguageOptions
   * @description Preview language options.
   * @default null
   */
  languageOptions: {
      /**
       * Return English Latin Address
       * @description Preview: return English/Latin transliteration.
       * @default null
       */
      returnEnglishLatinAddress: boolean | null;
  } | null;
  /**
   * Previous Response Id
   * @description For follow-up requests; omit on first request.
   * @default null
   */
  previousResponseId: string | null;
  /**
   * Session Token
   * @description Autocomplete session token (URL-safe base64, ≤36 chars).
   * @default null
   */
  sessionToken: string | null;
};

/**
 * Type of GOOGLE_ADDRESS_VALIDATION's GOOGLE_ADDRESS_VALIDATION_VALIDATE_ADDRESS tool output.
 */
type GOOGLE_ADDRESS_VALIDATION_VALIDATE_ADDRESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Id
       * @description UUID identifying this response.
       */
      responseId: string;
      /**
       * Result
       * @description The address-validation result.
       */
      result: {
          /**
           * Address
           * @description Formatted and componentized address.
           */
          address: {
              /**
               * Address Components
               * @description Components with validation info.
               */
              addressComponents: {
                  /**
                   * Component Name
                   * @description Name and optional language of this component.
                   */
                  componentName: {
                      /**
                       * Language Code
                       * @description BCP-47 language code if provided.
                       * @default null
                       */
                      languageCode: string | null;
                      /**
                       * Text
                       * @description Component name text.
                       */
                      text: string;
                  };
                  /**
                   * Component Type
                   * @description Type of this address component.
                   */
                  componentType: string;
                  /**
                   * Confirmation Level
                   * @description Certainty of correctness of this component.
                   * @enum {string}
                   */
                  confirmationLevel: "CONFIRMATION_LEVEL_UNSPECIFIED" | "CONFIRMED" | "UNCONFIRMED_BUT_PLAUSIBLE" | "UNCONFIRMED_AND_SUSPICIOUS";
                  /**
                   * Inferred
                   * @description True if component was inferred by the API.
                   */
                  inferred: boolean;
                  /**
                   * Replaced
                   * @description True if component was replaced.
                   */
                  replaced: boolean;
                  /**
                   * Spell Corrected
                   * @description True if component was spell-corrected.
                   */
                  spellCorrected: boolean;
                  /**
                   * Unexpected
                   * @description True if component was unexpected for the region.
                   */
                  unexpected: boolean;
              }[];
              /**
               * Formatted Address
               * @description Single-line formatted address.
               */
              formattedAddress: string;
              /**
               * Missing Component Types
               * @description Expected but missing component types.
               */
              missingComponentTypes: string[];
              /**
               * Postal Address
               * @description Structured postal address returned by the API.
               */
              postalAddress: {
                  /**
                   * Address Lines
                   * @description Unstructured lines in envelope order; total length ≤280 chars.
                   */
                  addressLines: string[];
                  /**
                   * Administrative Area
                   * @description Top-level administrative area (state/province).
                   * @default null
                   */
                  administrativeArea: string | null;
                  /**
                   * Language Code
                   * @description Ignored for this API.
                   * @default null
                   */
                  languageCode: string | null;
                  /**
                   * Locality
                   * @description City or town.
                   * @default null
                   */
                  locality: string | null;
                  /**
                   * Organization
                   * @description Ignored by this API.
                   * @default null
                   */
                  organization: string | null;
                  /**
                   * Postal Code
                   * @description Postal or ZIP code.
                   * @default null
                   */
                  postalCode: string | null;
                  /**
                   * Recipients
                   * @description Ignored by this API.
                   * @default null
                   */
                  recipients: string[] | null;
                  /**
                   * Region Code
                   * @description CLDR region code, e.g., 'US'.
                   * @default null
                   */
                  regionCode: string | null;
                  /**
                   * Revision
                   * @description Must be 0; any other value causes INVALID_ARGUMENT.
                   * @default null
                   */
                  revision: number | null;
                  /**
                   * Sorting Code
                   * @description Country-specific sorting code.
                   * @default null
                   */
                  sortingCode: string | null;
                  /**
                   * Sublocality
                   * @description Neighborhood or sublocality.
                   * @default null
                   */
                  sublocality: string | null;
              };
              /**
               * Unconfirmed Component Types
               * @description Present but unconfirmed component types.
               */
              unconfirmedComponentTypes: string[];
              /**
               * Unresolved Tokens
               * @description Unrecognized tokens from the input.
               */
              unresolvedTokens: string[];
          };
          /**
           * Address
           * @description English/Latin transliteration.
           * @default null
           */
          englishLatinAddress: {
              /**
               * Address Components
               * @description Components with validation info.
               */
              addressComponents: {
                  /**
                   * Component Name
                   * @description Name and optional language of this component.
                   */
                  componentName: {
                      /**
                       * Language Code
                       * @description BCP-47 language code if provided.
                       * @default null
                       */
                      languageCode: string | null;
                      /**
                       * Text
                       * @description Component name text.
                       */
                      text: string;
                  };
                  /**
                   * Component Type
                   * @description Type of this address component.
                   */
                  componentType: string;
                  /**
                   * Confirmation Level
                   * @description Certainty of correctness of this component.
                   * @enum {string}
                   */
                  confirmationLevel: "CONFIRMATION_LEVEL_UNSPECIFIED" | "CONFIRMED" | "UNCONFIRMED_BUT_PLAUSIBLE" | "UNCONFIRMED_AND_SUSPICIOUS";
                  /**
                   * Inferred
                   * @description True if component was inferred by the API.
                   */
                  inferred: boolean;
                  /**
                   * Replaced
                   * @description True if component was replaced.
                   */
                  replaced: boolean;
                  /**
                   * Spell Corrected
                   * @description True if component was spell-corrected.
                   */
                  spellCorrected: boolean;
                  /**
                   * Unexpected
                   * @description True if component was unexpected for the region.
                   */
                  unexpected: boolean;
              }[];
              /**
               * Formatted Address
               * @description Single-line formatted address.
               */
              formattedAddress: string;
              /**
               * Missing Component Types
               * @description Expected but missing component types.
               */
              missingComponentTypes: string[];
              /**
               * Postal Address
               * @description Structured postal address returned by the API.
               */
              postalAddress: {
                  /**
                   * Address Lines
                   * @description Unstructured lines in envelope order; total length ≤280 chars.
                   */
                  addressLines: string[];
                  /**
                   * Administrative Area
                   * @description Top-level administrative area (state/province).
                   * @default null
                   */
                  administrativeArea: string | null;
                  /**
                   * Language Code
                   * @description Ignored for this API.
                   * @default null
                   */
                  languageCode: string | null;
                  /**
                   * Locality
                   * @description City or town.
                   * @default null
                   */
                  locality: string | null;
                  /**
                   * Organization
                   * @description Ignored by this API.
                   * @default null
                   */
                  organization: string | null;
                  /**
                   * Postal Code
                   * @description Postal or ZIP code.
                   * @default null
                   */
                  postalCode: string | null;
                  /**
                   * Recipients
                   * @description Ignored by this API.
                   * @default null
                   */
                  recipients: string[] | null;
                  /**
                   * Region Code
                   * @description CLDR region code, e.g., 'US'.
                   * @default null
                   */
                  regionCode: string | null;
                  /**
                   * Revision
                   * @description Must be 0; any other value causes INVALID_ARGUMENT.
                   * @default null
                   */
                  revision: number | null;
                  /**
                   * Sorting Code
                   * @description Country-specific sorting code.
                   * @default null
                   */
                  sortingCode: string | null;
                  /**
                   * Sublocality
                   * @description Neighborhood or sublocality.
                   * @default null
                   */
                  sublocality: string | null;
              };
              /**
               * Unconfirmed Component Types
               * @description Present but unconfirmed component types.
               */
              unconfirmedComponentTypes: string[];
              /**
               * Unresolved Tokens
               * @description Unrecognized tokens from the input.
               */
              unresolvedTokens: string[];
          } | null;
          /**
           * Geocode
           * @description Geocode information.
           */
          geocode: {
              /**
               * Viewport
               * @description Bounds of the geocoded place.
               * @default null
               */
              bounds: {
                  /**
                   * High
                   * @description Northeast corner of the viewport.
                   */
                  high: {
                      /**
                       * Latitude
                       * @description Latitude in degrees.
                       */
                      latitude: number;
                      /**
                       * Longitude
                       * @description Longitude in degrees.
                       */
                      longitude: number;
                  };
                  /**
                   * Low
                   * @description Southwest corner of the viewport.
                   */
                  low: {
                      /**
                       * Latitude
                       * @description Latitude in degrees.
                       */
                      latitude: number;
                      /**
                       * Longitude
                       * @description Longitude in degrees.
                       */
                      longitude: number;
                  };
              } | null;
              /**
               * Feature Size Meters
               * @description Physical size of place in meters.
               * @default null
               */
              featureSizeMeters: number | null;
              /**
               * Location
               * @description Geocoded latitude/longitude.
               */
              location: {
                  /**
                   * Latitude
                   * @description Latitude in degrees.
                   */
                  latitude: number;
                  /**
                   * Longitude
                   * @description Longitude in degrees.
                   */
                  longitude: number;
              };
              /**
               * Place Id
               * @description Google Place ID.
               * @default null
               */
              placeId: string | null;
              /**
               * Place Types
               * @description Types of the place.
               * @default null
               */
              placeTypes: string[] | null;
              /**
               * PlusCode
               * @description Plus code for the location.
               * @default null
               */
              plusCode: {
                  /**
                   * Compound Code
                   * @description Compound plus code.
                   * @default null
                   */
                  compoundCode: string | null;
                  /**
                   * Global Code
                   * @description Full plus code.
                   */
                  globalCode: string;
              } | null;
          };
          /**
           * Metadata
           * @description Deliverability metadata.
           */
          metadata: {
              /**
               * Business
               * @description True if a business address.
               * @default null
               */
              business: boolean | null;
              /**
               * Po Box
               * @description True if a PO Box address.
               * @default null
               */
              poBox: boolean | null;
              /**
               * Residential
               * @description True if a residential address.
               * @default null
               */
              residential: boolean | null;
          };
          /**
           * UspsData
           * @description USPS data (US/PR only).
           * @default null
           */
          uspsData: {
              /**
               * Abbreviated City
               * @description Abbreviated city name.
               * @default null
               */
              abbreviatedCity: string | null;
              /**
               * Address Record Type
               * @description Address record type.
               * @default null
               */
              addressRecordType: string | null;
              /**
               * Carrier Route
               * @description Carrier route code.
               * @default null
               */
              carrierRoute: string | null;
              /**
               * Carrier Route Indicator
               * @description Rate sort indicator.
               * @default null
               */
              carrierRouteIndicator: string | null;
              /**
               * Cass Processed
               * @description CASS processed indicator.
               * @default null
               */
              cassProcessed: boolean | null;
              /**
               * County
               * @description County name.
               * @default null
               */
              county: string | null;
              /**
               * Default Address
               * @description Default address indicator.
               * @default null
               */
              defaultAddress: boolean | null;
              /**
               * Delivery Point Check Digit
               * @description Delivery point check digit.
               * @default null
               */
              deliveryPointCheckDigit: string | null;
              /**
               * Delivery Point Code
               * @description Two-digit delivery point code.
               * @default null
               */
              deliveryPointCode: string | null;
              /**
               * Dpv Cmra
               * @description CMRA flag.
               * @default null
               */
              dpvCmra: string | null;
              /**
               * Dpv Confirmation
               * @description DPV confirmation code.
               * @default null
               */
              dpvConfirmation: string | null;
              /**
               * Dpv Door Not Accessible
               * @description Door not accessible flag.
               * @default null
               */
              dpvDoorNotAccessible: string | null;
              /**
               * Dpv Drop
               * @description DPV drop flag.
               * @default null
               */
              dpvDrop: string | null;
              /**
               * Dpv Enhanced Delivery Code
               * @description Enhanced delivery code.
               * @default null
               */
              dpvEnhancedDeliveryCode: string | null;
              /**
               * Dpv Footnote
               * @description DPV footnote.
               * @default null
               */
              dpvFootnote: string | null;
              /**
               * Dpv No Secure Location
               * @description No secure location flag.
               * @default null
               */
              dpvNoSecureLocation: string | null;
              /**
               * Dpv No Stat
               * @description No-stat flag.
               * @default null
               */
              dpvNoStat: string | null;
              /**
               * Dpv No Stat Reason Code
               * @description No-stat reason code.
               * @default null
               */
              dpvNoStatReasonCode: number | null;
              /**
               * Dpv Non Delivery Days
               * @description Non-delivery days flag.
               * @default null
               */
              dpvNonDeliveryDays: string | null;
              /**
               * Dpv Non Delivery Days Values
               * @description Bit flags for non-delivery days.
               * @default null
               */
              dpvNonDeliveryDaysValues: number | null;
              /**
               * Dpv Pbsa
               * @description PBSA match flag.
               * @default null
               */
              dpvPbsa: string | null;
              /**
               * Dpv Throwback
               * @description DPV throwback flag.
               * @default null
               */
              dpvThrowback: string | null;
              /**
               * Dpv Vacant
               * @description Vacancy flag.
               * @default null
               */
              dpvVacant: string | null;
              /**
               * Elot Flag
               * @description eLOT flag.
               * @default null
               */
              elotFlag: string | null;
              /**
               * Elot Number
               * @description eLOT number.
               * @default null
               */
              elotNumber: string | null;
              /**
               * Error Message
               * @description Error message for USPS processing.
               * @default null
               */
              errorMessage: string | null;
              /**
               * Ews No Match
               * @description Exact match indicator.
               * @default null
               */
              ewsNoMatch: boolean | null;
              /**
               * Fips County Code
               * @description FIPS county code.
               * @default null
               */
              fipsCountyCode: string | null;
              /**
               * Lacs Link Indicator
               * @description LACSLink indicator.
               * @default null
               */
              lacsLinkIndicator: string | null;
              /**
               * Lacs Link Return Code
               * @description LACSLink return code.
               * @default null
               */
              lacsLinkReturnCode: string | null;
              /**
               * Pmb Designator
               * @description PMB unit designator.
               * @default null
               */
              pmbDesignator: string | null;
              /**
               * Pmb Number
               * @description PMB number.
               * @default null
               */
              pmbNumber: string | null;
              /**
               * Po Box Only Postal Code
               * @description PO Box only postal code.
               * @default null
               */
              poBoxOnlyPostalCode: boolean | null;
              /**
               * Post Office City
               * @description Main post office city.
               * @default null
               */
              postOfficeCity: string | null;
              /**
               * Post Office State
               * @description Main post office state.
               * @default null
               */
              postOfficeState: string | null;
              /**
               * UspsAddress
               * @description Standardized USPS address.
               * @default null
               */
              standardizedAddress: {
                  /**
                   * City
                   * @description City name.
                   * @default null
                   */
                  city: string | null;
                  /**
                   * City State Zip Address Line
                   * @description USPS city/state/zip line.
                   * @default null
                   */
                  cityStateZipAddressLine: string | null;
                  /**
                   * Firm
                   * @description USPS firm name.
                   * @default null
                   */
                  firm: string | null;
                  /**
                   * First Address Line
                   * @description USPS first address line.
                   * @default null
                   */
                  firstAddressLine: string | null;
                  /**
                   * Second Address Line
                   * @description USPS second address line.
                   * @default null
                   */
                  secondAddressLine: string | null;
                  /**
                   * State
                   * @description State code.
                   * @default null
                   */
                  state: string | null;
                  /**
                   * Urbanization
                   * @description USPS urbanization.
                   * @default null
                   */
                  urbanization: string | null;
                  /**
                   * Zip Code
                   * @description ZIP code.
                   * @default null
                   */
                  zipCode: string | null;
                  /**
                   * Zip Code Extension
                   * @description ZIP+4 extension.
                   * @default null
                   */
                  zipCodeExtension: string | null;
              } | null;
              /**
               * Suitelink Footnote
               * @description SuiteLink footnote.
               * @default null
               */
              suitelinkFootnote: string | null;
          } | null;
          /**
           * Verdict
           * @description High-level validation verdict.
           */
          verdict: {
              /**
               * Address Complete
               * @description True if address has no missing or unexpected tokens.
               */
              addressComplete: boolean;
              /**
               * Geocode Granularity
               * @description Granularity of the geocoded location.
               * @enum {string}
               */
              geocodeGranularity: "GRANULARITY_UNSPECIFIED" | "SUB_PREMISE" | "PREMISE" | "PREMISE_PROXIMITY" | "BLOCK" | "ROUTE" | "OTHER";
              /**
               * Has Inferred Components
               * @description True if any component is inferred.
               */
              hasInferredComponents: boolean;
              /**
               * Has Replaced Components
               * @description True if any component is replaced.
               */
              hasReplacedComponents: boolean;
              /**
               * Has Spell Corrected Components
               * @description True if any component is spell-corrected.
               */
              hasSpellCorrectedComponents: boolean;
              /**
               * Has Unconfirmed Components
               * @description True if any component is unconfirmed.
               */
              hasUnconfirmedComponents: boolean;
              /**
               * Input Granularity
               * @description Granularity level of the parsed input.
               * @enum {string}
               */
              inputGranularity: "GRANULARITY_UNSPECIFIED" | "SUB_PREMISE" | "PREMISE" | "PREMISE_PROXIMITY" | "BLOCK" | "ROUTE" | "OTHER";
              /**
               * Possible Next Action
               * @description Suggested follow-up action.
               * @enum {string}
               */
              possibleNextAction: "POSSIBLE_NEXT_ACTION_UNSPECIFIED" | "FIX" | "CONFIRM_ADD_SUBPREMISES" | "CONFIRM" | "ACCEPT";
              /**
               * Validation Granularity
               * @description Highest level fully validated by the API.
               * @enum {string}
               */
              validationGranularity: "GRANULARITY_UNSPECIFIED" | "SUB_PREMISE" | "PREMISE" | "PREMISE_PROXIMITY" | "BLOCK" | "ROUTE" | "OTHER";
          };
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
 * Type map of all available tool input types for toolkit "GOOGLE_ADDRESS_VALIDATION".
 */
export type GOOGLE_ADDRESS_VALIDATION_TOOL_INPUTS = {
  PROVIDE_VALIDATION_FEEDBACK: GOOGLE_ADDRESS_VALIDATION_PROVIDE_VALIDATION_FEEDBACK_INPUT
  VALIDATE_ADDRESS: GOOGLE_ADDRESS_VALIDATION_VALIDATE_ADDRESS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOOGLE_ADDRESS_VALIDATION".
 */
export type GOOGLE_ADDRESS_VALIDATION_TOOL_OUTPUTS = {
  PROVIDE_VALIDATION_FEEDBACK: GOOGLE_ADDRESS_VALIDATION_PROVIDE_VALIDATION_FEEDBACK_OUTPUT
  VALIDATE_ADDRESS: GOOGLE_ADDRESS_VALIDATION_VALIDATE_ADDRESS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GOOGLE_ADDRESS_VALIDATION toolkit.
 */
export const GOOGLE_ADDRESS_VALIDATION = {
  slug: "google_address_validation",
  tools: {
    /**
     * Tool to provide feedback on an address validation attempt. Use after completing an address validation sequence.
     */
    PROVIDE_VALIDATION_FEEDBACK: "GOOGLE_ADDRESS_VALIDATION_PROVIDE_VALIDATION_FEEDBACK",
    /**
     * Tool to validate and standardize addresses. Use when you need detailed parsing, geocode, and deliverability verdict of an address.
     */
    VALIDATE_ADDRESS: "GOOGLE_ADDRESS_VALIDATION_VALIDATE_ADDRESS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GOOGLE_ADDRESS_VALIDATION".
 */
export type GOOGLE_ADDRESS_VALIDATION_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GOOGLE_ADDRESS_VALIDATION".
 */
export type GOOGLE_ADDRESS_VALIDATION_TRIGGER_EVENTS = {}
