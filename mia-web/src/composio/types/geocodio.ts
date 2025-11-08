// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GEOCODIO's GEOCODIO_APPEND_CANADIAN_STATISTICAL_BOUNDARIES tool input.
 */
type GEOCODIO_APPEND_CANADIAN_STATISTICAL_BOUNDARIES_INPUT = {
  /**
   * City
   * @description City name (required with street/state when not using `q`).
   * @default null
   */
  city: string | null;
  /**
   * Country
   * @description Country to geocode in; inferred from query or default to USA.
   * @default null
   * @enum {string|null}
   */
  country: "USA" | "Canada" | null;
  /**
   * County
   * @description County name (optional).
   * @default null
   */
  county: string | null;
  /**
   * Fields
   * @description Must be set to 'statcan' to append Canadian statistical boundaries.
   * @default statcan
   * @constant
   */
  fields: "statcan";
  /**
   * Format
   * @description Use 'simple' output format; `limit` has no effect.
   * @default null
   * @constant
   */
  format: "simple";
  /**
   * Limit
   * @description Maximum number of results to return; 0 or None means no limit.
   * @default null
   */
  limit: number | null;
  /**
   * Postal Code
   * @description Postal code (optional).
   * @default null
   */
  postal_code: string | null;
  /**
   * Q
   * @description Full address to geocode (e.g., '24 Sussex Dr, Ottawa, ON').
   * @default null
   */
  q: string | null;
  /**
   * State
   * @description State or province (required with street/city when not using `q`).
   * @default null
   */
  state: string | null;
  /**
   * Street
   * @description Street line when not using `q`.
   * @default null
   */
  street: string | null;
  /**
   * Street2
   * @description Second street line, such as apt/unit.
   * @default null
   */
  street2: string | null;
};

/**
 * Type of GEOCODIO's GEOCODIO_APPEND_CANADIAN_STATISTICAL_BOUNDARIES tool output.
 */
type GEOCODIO_APPEND_CANADIAN_STATISTICAL_BOUNDARIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of results each containing `fields.statcan`.
       */
      results: {
          /** Statcan */
          statcan: {
              /**
               * Census Year
               * @description Census year.
               */
              census_year: number;
              /**
               * CmaCa
               * @default null
               */
              cma_ca: {
                  /**
                   * Id
                   * @description CMA/CA ID.
                   */
                  id: string;
                  /**
                   * Name
                   * @description Name.
                   */
                  name: string;
                  /**
                   * Type
                   * @description Type.
                   */
                  type: string;
                  /**
                   * Type Description
                   * @description Type description.
                   */
                  type_description: string;
              } | null;
              /** Consolidated Subdivision */
              consolidated_subdivision: {
                  /**
                   * Id
                   * @description Consolidated subdivision ID.
                   */
                  id: string;
                  /**
                   * Name
                   * @description Name.
                   */
                  name: string;
              };
              /**
               * DesignatedPlace
               * @default null
               */
              designated_place: {
                  /**
                   * Id
                   * @description Designated place ID.
                   */
                  id: string;
                  /**
                   * Name
                   * @description Name.
                   */
                  name: string;
              } | null;
              /**
               * DisseminationArea
               * @default null
               */
              dissemination_area: {
                  /**
                   * Id
                   * @description Dissemination area ID.
                   */
                  id: string;
              } | null;
              /**
               * DisseminationBlock
               * @default null
               */
              dissemination_block: {
                  /**
                   * Id
                   * @description Block ID.
                   */
                  id: string;
                  /**
                   * Population
                   * @description Population.
                   */
                  population: string;
              } | null;
              /** Division */
              division: {
                  /**
                   * Id
                   * @description Census division ID.
                   */
                  id: string;
                  /**
                   * Name
                   * @description Census division name.
                   */
                  name: string;
                  /**
                   * Type
                   * @description Division type.
                   */
                  type: string;
                  /**
                   * Type Description
                   * @description Type description.
                   */
                  type_description: string;
              };
              /**
               * Economic Region
               * @description Economic region.
               */
              economic_region: string;
              /**
               * PopulationCentre
               * @default null
               */
              population_centre: {
                  /**
                   * Class
                   * @description Population centre class.
                   */
                  class: string;
                  /**
                   * Class Description
                   * @description Class description.
                   */
                  class_description: string;
                  /**
                   * Id
                   * @description Population centre ID.
                   */
                  id: string;
                  /**
                   * Name
                   * @description Name.
                   */
                  name: string;
                  /**
                   * Type
                   * @description Type.
                   */
                  type: string;
                  /**
                   * Type Description
                   * @description Type description.
                   */
                  type_description: string;
              } | null;
              /** Statistical Area */
              statistical_area: {
                  /**
                   * Code
                   * @description Area code.
                   */
                  code: string;
                  /**
                   * Code Description
                   * @description Code description.
                   */
                  code_description: string;
                  /**
                   * Type
                   * @description Type.
                   */
                  type: string;
                  /**
                   * Type Description
                   * @description Type description.
                   */
                  type_description: string;
              };
              /** Subdivision */
              subdivision: {
                  /**
                   * Id
                   * @description Subdivision ID.
                   */
                  id: string;
                  /**
                   * Name
                   * @description Name.
                   */
                  name: string;
                  /**
                   * Type
                   * @description Type.
                   */
                  type: string;
                  /**
                   * Type Description
                   * @description Type description.
                   */
                  type_description: string;
              };
              /**
               * Tract
               * @default null
               */
              tract: string | null;
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
 * Type of GEOCODIO's GEOCODIO_CANADIAN_PROVINCIAL_ELECTORAL_DISTRICT_APPEND tool input.
 */
type GEOCODIO_CANADIAN_PROVINCIAL_ELECTORAL_DISTRICT_APPEND_INPUT = {
  /**
   * City
   * @description City name.
   * @default null
   */
  city: string | null;
  /**
   * Country
   * @description Country override (e.g., 'Canada').
   * @default null
   */
  country: string | null;
  /**
   * County
   * @description County name.
   * @default null
   */
  county: string | null;
  /**
   * Fields
   * @description Field to append: 'provriding' for provincial electoral district.
   * @default provriding
   * @constant
   */
  fields: "provriding";
  /**
   * Format
   * @description Set to 'simple' for simplified JSON output.
   * @default null
   * @constant
   */
  format: "simple";
  /**
   * Limit
   * @description Max number of results to return; must be >=1.
   * @default null
   */
  limit: number | null;
  /**
   * Postal Code
   * @description Postal code.
   * @default null
   */
  postal_code: string | null;
  /**
   * Q
   * @description Full unstructured address string. Required if structured address components are not provided.
   * @default null
   */
  q: string | null;
  /**
   * State
   * @description State/province code (2-letter for Canada, e.g., 'ON').
   * @default null
   */
  state: string | null;
  /**
   * Street
   * @description Street line, e.g., house number and street name.
   * @default null
   */
  street: string | null;
  /**
   * Street2
   * @description Secondary unit, e.g., Apt/Suite.
   * @default null
   */
  street2: string | null;
};

/**
 * Type of GEOCODIO's GEOCODIO_CANADIAN_PROVINCIAL_ELECTORAL_DISTRICT_APPEND tool output.
 */
type GEOCODIO_CANADIAN_PROVINCIAL_ELECTORAL_DISTRICT_APPEND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Input
       * @description Parsed input.
       */
      input: {
          /**
           * Address Components
           * @description Echo of input components.
           */
          address_components: {
              /**
               * City
               * @description City name.
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country name/code.
               * @default null
               */
              country: string | null;
              /**
               * County
               * @description County name.
               * @default null
               */
              county: string | null;
              /**
               * Number
               * @description Street number.
               * @default null
               */
              number: string | null;
              /**
               * Postal Code
               * @description Postal code.
               * @default null
               */
              postal_code: string | null;
              /**
               * Postdirectional
               * @description Postdirectional (e.g., NE, SW).
               * @default null
               */
              postdirectional: string | null;
              /**
               * Predirectional
               * @description Predirectional (e.g., N, S, E, W).
               * @default null
               */
              predirectional: string | null;
              /**
               * State
               * @description State/province code/name.
               * @default null
               */
              state: string | null;
              /**
               * Street
               * @description Street name.
               * @default null
               */
              street: string | null;
              /**
               * Suffix
               * @description Street suffix (e.g., St, Ave).
               * @default null
               */
              suffix: string | null;
              /**
               * Unit
               * @description Secondary unit (e.g., Apt/Suite).
               * @default null
               */
              unit: string | null;
          };
          /**
           * Formatted Address
           * @description Echo of formatted input address.
           */
          formatted_address: string;
      };
      /**
       * Results
       * @description Geocoding results with appended data.
       */
      results: {
          /**
           * Accuracy
           * @description Match confidence score.
           */
          accuracy: number;
          /**
           * Accuracy Type
           * @description Type of accuracy (e.g., rooftop).
           */
          accuracy_type: string;
          /**
           * Address Components
           * @description Parsed address components.
           */
          address_components: {
              /**
               * City
               * @description City name.
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country name/code.
               * @default null
               */
              country: string | null;
              /**
               * County
               * @description County name.
               * @default null
               */
              county: string | null;
              /**
               * Number
               * @description Street number.
               * @default null
               */
              number: string | null;
              /**
               * Postal Code
               * @description Postal code.
               * @default null
               */
              postal_code: string | null;
              /**
               * Postdirectional
               * @description Postdirectional (e.g., NE, SW).
               * @default null
               */
              postdirectional: string | null;
              /**
               * Predirectional
               * @description Predirectional (e.g., N, S, E, W).
               * @default null
               */
              predirectional: string | null;
              /**
               * State
               * @description State/province code/name.
               * @default null
               */
              state: string | null;
              /**
               * Street
               * @description Street name.
               * @default null
               */
              street: string | null;
              /**
               * Suffix
               * @description Street suffix (e.g., St, Ave).
               * @default null
               */
              suffix: string | null;
              /**
               * Unit
               * @description Secondary unit (e.g., Apt/Suite).
               * @default null
               */
              unit: string | null;
          };
          /**
           * Address Lines
           * @description Formatted address lines.
           */
          address_lines: string[];
          /**
           * Fields
           * @description Requested append fields.
           */
          fields: {
              /**
               * Provincial Riding
               * @description Provincial electoral district info.
               */
              provincial_riding: {
                  /**
                   * Is Upcoming District
                   * @description True if upcoming district.
                   */
                  is_upcoming_district: boolean;
                  /**
                   * Name English
                   * @description Riding name in English.
                   */
                  name_english: string;
                  /**
                   * Name French
                   * @description Riding name in French.
                   */
                  name_french: string;
                  /**
                   * Ocd Id
                   * @description Open Civic Data division identifier.
                   */
                  ocd_id: string;
                  /**
                   * Source
                   * @description Source authority.
                   */
                  source: string;
              };
          };
          /**
           * Formatted Address
           * @description One-line formatted address.
           */
          formatted_address: string;
          /**
           * Location
           * @description Geocoded coordinates.
           */
          location: {
              /**
               * Lat
               * @description Latitude.
               */
              lat: number;
              /**
               * Lng
               * @description Longitude.
               */
              lng: number;
          };
          /**
           * Source
           * @description Data source.
           */
          source: string;
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
 * Type of GEOCODIO's GEOCODIO_CENSUS_DATA_APPEND tool input.
 */
type GEOCODIO_CENSUS_DATA_APPEND_INPUT = {
  /**
   * City
   * @description City name.
   * @default null
   */
  city: string | null;
  /**
   * Country
   * @description Country context for geocoding; defaults to inferred, falls back to USA.
   * @default null
   * @enum {string|null}
   */
  country: "USA" | "Canada" | null;
  /**
   * County
   * @description County name.
   * @default null
   */
  county: string | null;
  /**
   * Fields
   * @description List of census datasets to append; choose from census, census2000–census2024.
   * @default null
   */
  fields: string[] | null;
  /**
   * Format
   * @description Return simplified JSON structure; limit is ignored in simple format.
   * @default null
   * @constant
   */
  format: "simple";
  /**
   * Limit
   * @description Maximum number of results to return (>= 1).
   * @default null
   */
  limit: number | null;
  /**
   * Postal Code
   * @description ZIP or postal code.
   * @default null
   */
  postal_code: string | null;
  /**
   * Q
   * @description Full address to geocode.
   * @default null
   */
  q: string | null;
  /**
   * State
   * @description State or province code.
   * @default null
   */
  state: string | null;
  /**
   * Street
   * @description Primary street address.
   * @default null
   */
  street: string | null;
  /**
   * Street2
   * @description Secondary street address.
   * @default null
   */
  street2: string | null;
};

/**
 * Type of GEOCODIO's GEOCODIO_CENSUS_DATA_APPEND tool output.
 */
type GEOCODIO_CENSUS_DATA_APPEND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description Geocoding results with appended census data.
       */
      results: {
          /**
           * FieldsAppend
           * @description Appended census fields; present only when `fields` param is used.
           * @default null
           */
          fields: {
              /**
               * Census
               * @description Mapping of census year to detailed FIPS and area data.
               */
              census: {
                  [key: string]: {
                      /**
                       * Block Code
                       * @description Census block code.
                       */
                      block_code: string;
                      /**
                       * Block Group
                       * @description Census block group.
                       */
                      block_group: string;
                      /**
                       * Census Year
                       * @description Reference census year.
                       */
                      census_year: number;
                      /** StatisticalArea */
                      combined_statistical_area: {
                          /**
                           * Area Code
                           * @description MSA/CSA area code.
                           */
                          area_code: string;
                          /**
                           * Name
                           * @description Statistical area name.
                           */
                          name: string;
                          /**
                           * Type
                           * @description Area type (metropolitan or micropolitan).
                           * @default null
                           */
                          type: string | null;
                      };
                      /**
                       * County Fips
                       * @description 5-digit county FIPS code.
                       */
                      county_fips: string;
                      /**
                       * @description County subdivision, if present.
                       * @default null
                       */
                      county_subdivision: {
                          /**
                           * Fips
                           * @description County subdivision FIPS code.
                           */
                          fips: string;
                          /** CountySubdivisionFipsClass */
                          fips_class: {
                              /**
                               * Class Code
                               * @description Subdivision class code.
                               */
                              class_code: string;
                              /**
                               * Description
                               * @description Subdivision class description.
                               */
                              description: string;
                          };
                          /**
                           * Name
                           * @description County subdivision name.
                           */
                          name: string;
                      } | null;
                      /**
                       * Full Fips
                       * @description Full concatenated FIPS code.
                       */
                      full_fips: string;
                      /** StatisticalArea */
                      metro_micro_statistical_area: {
                          /**
                           * Area Code
                           * @description MSA/CSA area code.
                           */
                          area_code: string;
                          /**
                           * Name
                           * @description Statistical area name.
                           */
                          name: string;
                          /**
                           * Type
                           * @description Area type (metropolitan or micropolitan).
                           * @default null
                           */
                          type: string | null;
                      };
                      /** StatisticalArea */
                      metropolitan_division: {
                          /**
                           * Area Code
                           * @description MSA/CSA area code.
                           */
                          area_code: string;
                          /**
                           * Name
                           * @description Statistical area name.
                           */
                          name: string;
                          /**
                           * Type
                           * @description Area type (metropolitan or micropolitan).
                           * @default null
                           */
                          type: string | null;
                      };
                      /** FipsPlace */
                      place: {
                          /**
                           * Fips
                           * @description Place FIPS code.
                           */
                          fips: string;
                          /**
                           * Name
                           * @description Place name.
                           */
                          name: string;
                      };
                      /**
                       * Source
                       * @description Data source attribution.
                       */
                      source: string;
                      /**
                       * State Fips
                       * @description 2-digit state FIPS code.
                       */
                      state_fips: string;
                      /**
                       * Tract Code
                       * @description Census tract code.
                       */
                      tract_code: string;
                  };
              };
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
 * Type of GEOCODIO's GEOCODIO_CONGRESSIONAL_DISTRICT_APPEND tool input.
 */
type GEOCODIO_CONGRESSIONAL_DISTRICT_APPEND_INPUT = {
  /**
   * City
   * @description City name (structured form).
   * @default null
   */
  city: string | null;
  /**
   * Country
   * @description Country; inferred or default 'US' if omitted.
   * @default null
   */
  country: string | null;
  /**
   * County
   * @description County name (structured form).
   * @default null
   */
  county: string | null;
  /**
   * Format
   * @description Use 'simple' for a flattened JSON response; default is full JSON.
   * @default null
   * @constant
   */
  format: "simple";
  /**
   * Limit
   * @description Maximum number of results to return; ignored if format='simple'.
   * @default null
   */
  limit: number | null;
  /**
   * Postal Code
   * @description ZIP or postal code (structured form).
   * @default null
   */
  postal_code: string | null;
  /**
   * Q
   * @description Full address to geocode (e.g., '1109 N Highland St, Arlington VA').
   * @default null
   */
  q: string | null;
  /**
   * State
   * @description State or province (structured form), two-letter code preferred.
   * @default null
   */
  state: string | null;
  /**
   * Street
   * @description Primary street address (structured form).
   * @default null
   */
  street: string | null;
  /**
   * Street2
   * @description Second address line (apt, suite, etc.).
   * @default null
   */
  street2: string | null;
};

/**
 * Type of GEOCODIO's GEOCODIO_CONGRESSIONAL_DISTRICT_APPEND tool output.
 */
type GEOCODIO_CONGRESSIONAL_DISTRICT_APPEND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Input */
      input: {
          /** Address Components */
          address_components: {
              /** City */
              city: string | null;
              /** County */
              county: string | null;
              /** Number */
              number: string | null;
              /** Postdirectional */
              postdirectional: string | null;
              /** Predirectional */
              predirectional: string | null;
              /** State */
              state: string | null;
              /** Street */
              street: string | null;
              /** Suffix */
              suffix: string | null;
              /** Unit */
              unit: string | null;
              /**
               * Zip
               * @default null
               */
              zip: string | null;
              /**
               * Zip4
               * @default null
               */
              zip4: string | null;
          };
          /** Formatted Address */
          formatted_address: string;
      };
      /** Results */
      results: {
          /** Accuracy */
          accuracy: number;
          /** Accuracy Type */
          accuracy_type: string;
          /** Address Components */
          address_components: {
              /** City */
              city: string | null;
              /** County */
              county: string | null;
              /** Number */
              number: string | null;
              /** Postdirectional */
              postdirectional: string | null;
              /** Predirectional */
              predirectional: string | null;
              /** State */
              state: string | null;
              /** Street */
              street: string | null;
              /** Suffix */
              suffix: string | null;
              /** Unit */
              unit: string | null;
              /**
               * Zip
               * @default null
               */
              zip: string | null;
              /**
               * Zip4
               * @default null
               */
              zip4: string | null;
          };
          /** Address Lines */
          address_lines: string[];
          /** Fields */
          fields: {
              /** Congressional Districts */
              congressional_districts: {
                  /** Congress Number */
                  congress_number: number;
                  /** Congress Years */
                  congress_years: string;
                  /** Current Legislators */
                  current_legislators: {
                      /** Bio */
                      bio: {
                          /** Birthday */
                          birthday: string | null;
                          /** First Name */
                          first_name: string;
                          /** Gender */
                          gender: string | null;
                          /** Last Name */
                          last_name: string;
                          /** Party */
                          party: string | null;
                          /** Photo Url */
                          photo_url: string | null;
                      };
                      /** Contact */
                      contact: {
                          /** Address */
                          address: string | null;
                          /** Contact Form */
                          contact_form: string | null;
                          /** Email */
                          email: string | null;
                          /** Phone */
                          phone: string | null;
                          /** Url */
                          url: string | null;
                      };
                      /** References */
                      references: {
                          /** Ballotpedia Id */
                          ballotpedia_id: string | null;
                          /** Bioguide Id */
                          bioguide_id: string | null;
                          /** Cspan Id */
                          cspan_id: string | null;
                          /** Govtrack Id */
                          govtrack_id: string | null;
                          /** Icpsr Id */
                          icpsr_id: string | null;
                          /** Lis Id */
                          lis_id: string | null;
                          /** Opensecrets Id */
                          opensecrets_id: string | null;
                          /** Thomas Id */
                          thomas_id: string | null;
                          /** Votesmart Id */
                          votesmart_id: string | null;
                          /** Washington Post Id */
                          washington_post_id: string | null;
                          /** Wikipedia Id */
                          wikipedia_id: string | null;
                      };
                      /** Social */
                      social: {
                          /** Facebook */
                          facebook: string | null;
                          /** Rss Url */
                          rss_url: string | null;
                          /** Twitter */
                          twitter: string | null;
                          /** Youtube */
                          youtube: string | null;
                          /** Youtube Id */
                          youtube_id: string | null;
                      };
                      /** Source */
                      source: string;
                      /**
                       * Type
                       * @description 'representative' or 'senator'
                       */
                      type: string;
                  }[] | null;
                  /** District Number */
                  district_number: number | null;
                  /** Name */
                  name: string;
                  /** Ocd Id */
                  ocd_id: string | null;
                  /** Proportion */
                  proportion: number | null;
              }[];
          };
          /** Formatted Address */
          formatted_address: string;
          /** Location */
          location: {
              /** Lat */
              lat: number;
              /** Lng */
              lng: number;
          };
          /** Source */
          source: string;
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
 * Type of GEOCODIO's GEOCODIO_DELETE_LIST tool input.
 */
type GEOCODIO_DELETE_LIST_INPUT = {
  /**
   * List Id
   * @description Unique identifier of the list to delete
   */
  list_id?: number;
};

/**
 * Type of GEOCODIO's GEOCODIO_DELETE_LIST tool output.
 */
type GEOCODIO_DELETE_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error
       * @description Error message if deletion failed; None on success.
       * @default null
       */
      error: string | null;
      /**
       * Success
       * @description True if the list was deleted successfully
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
 * Type of GEOCODIO's GEOCODIO_FFIEC_APPEND tool input.
 */
type GEOCODIO_FFIEC_APPEND_INPUT = {
  /**
   * City
   * @description City name (structured form).
   * @default null
   */
  city: string | null;
  /**
   * Country
   * @description Country context; defaults to inferred (US only for FFIEC).
   * @default null
   * @enum {string|null}
   */
  country: "USA" | "Canada" | null;
  /**
   * County
   * @description County name (structured form).
   * @default null
   */
  county: string | null;
  /**
   * Format
   * @description Use 'simple' for a condensed response; fields still supported.
   * @default null
   * @constant
   */
  format: "simple";
  /**
   * Limit
   * @description Maximum number of candidate results to return; 0 means no limit.
   * @default null
   */
  limit: number | null;
  /**
   * Postal Code
   * @description ZIP or postal code (structured form).
   * @default null
   */
  postal_code: string | null;
  /**
   * Q
   * @description Full address to geocode (e.g., '1109 N Highland St, Arlington VA').
   * @default null
   */
  q: string | null;
  /**
   * State
   * @description State or province code (two-letter).
   * @default null
   */
  state: string | null;
  /**
   * Street
   * @description Primary street address (structured form).
   * @default null
   */
  street: string | null;
  /**
   * Street2
   * @description Second address line (apt, suite, etc.).
   * @default null
   */
  street2: string | null;
};

/**
 * Type of GEOCODIO's GEOCODIO_FFIEC_APPEND tool output.
 */
type GEOCODIO_FFIEC_APPEND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Input */
      input: {
          /** Address Components */
          address_components: {
              /** City */
              city: string | null;
              /** County */
              county: string | null;
              /** Number */
              number: string | null;
              /** Postdirectional */
              postdirectional: string | null;
              /** Predirectional */
              predirectional: string | null;
              /** State */
              state: string | null;
              /** Street */
              street: string | null;
              /** Suffix */
              suffix: string | null;
              /** Unit */
              unit: string | null;
              /**
               * Zip
               * @default null
               */
              zip: string | null;
          };
          /** Formatted Address */
          formatted_address: string;
      };
      /** Results */
      results: {
          /** Accuracy */
          accuracy: number;
          /** Accuracy Type */
          accuracy_type: string;
          /** Address Components */
          address_components: {
              /** City */
              city: string | null;
              /** County */
              county: string | null;
              /** Number */
              number: string | null;
              /** Postdirectional */
              postdirectional: string | null;
              /** Predirectional */
              predirectional: string | null;
              /** State */
              state: string | null;
              /** Street */
              street: string | null;
              /** Suffix */
              suffix: string | null;
              /** Unit */
              unit: string | null;
              /**
               * Zip
               * @default null
               */
              zip: string | null;
          };
          /** Address Lines */
          address_lines: string[];
          /** Fields */
          fields: {
              /** Ffiec */
              ffiec: {
                  /** Census Tract */
                  census_tract: string;
                  /** Collection Year */
                  collection_year: number;
                  /** Cra Distressed Criteria */
                  cra_distressed_criteria: boolean;
                  /** Cra Poverty Criteria */
                  cra_poverty_criteria: boolean;
                  /** Cra Remote Rural Low Density Criteria */
                  cra_remote_rural_low_density_criteria: boolean;
                  /** Cra Unemployment Criteria */
                  cra_unemployment_criteria: boolean;
                  /** Demographic Data */
                  demographic_data: {
                      /** Description */
                      description: string;
                      /** Flag */
                      flag: string;
                  };
                  /** Ffiec Estimated Msa Md Median Family Income */
                  ffiec_estimated_msa_md_median_family_income: number;
                  /** Fips County Code */
                  fips_county_code: string;
                  /** Fips State Code */
                  fips_state_code: string;
                  /** Income Indicator */
                  income_indicator: string;
                  /** Meets Current Previous Criteria */
                  meets_current_previous_criteria: boolean;
                  /** Msa Md Code */
                  msa_md_code: string;
                  /** Msa Md Median Family Income */
                  msa_md_median_family_income: number;
                  /** Msa Md Median Household Income */
                  msa_md_median_household_income: number;
                  /** Previous Year Cra Distressed Criteria */
                  previous_year_cra_distressed_criteria: boolean;
                  /** Previous Year Cra Underserved Criterion */
                  previous_year_cra_underserved_criterion: boolean;
                  /** Principal City */
                  principal_city: boolean;
                  /** Small County */
                  small_county: {
                      /** Description */
                      description: string;
                      /** Flag */
                      flag: string;
                  };
                  /** Split Tract */
                  split_tract: {
                      /** Description */
                      description: string;
                      /** Flag */
                      flag: string;
                  };
                  /** Tract Median Family Income Percentage */
                  tract_median_family_income_percentage: number;
                  /** Urban Rural Flag */
                  urban_rural_flag: {
                      /** Description */
                      description: string;
                      /** Flag */
                      flag: string;
                  };
              };
          };
          /** Formatted Address */
          formatted_address: string;
          /** Location */
          location: {
              /** Lat */
              lat: number;
              /** Lng */
              lng: number;
          };
          /** Source */
          source: string;
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
 * Type of GEOCODIO's GEOCODIO_GEOCODIO_BATCH_REVERSE_GEOCODE tool input.
 */
type GEOCODIO_GEOCODIO_BATCH_REVERSE_GEOCODE_INPUT = {
  /**
   * Coordinates
   * @description List of 'latitude,longitude' strings. Latitude first. Up to 10,000 items.
   */
  coordinates?: string[];
  /**
   * Fields
   * @description Comma-separated data-append codes to include (e.g., 'cd,stateleg').
   * @default null
   */
  fields: string | null;
  /**
   * Limit
   * @description Max number of candidate results per input; 0 means no limit. Must be non-negative.
   * @default null
   */
  limit: number | null;
};

/**
 * Type of GEOCODIO's GEOCODIO_GEOCODIO_BATCH_REVERSE_GEOCODE tool output.
 */
type GEOCODIO_GEOCODIO_BATCH_REVERSE_GEOCODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description Results array, one element per input coordinate
       */
      results: {
          /**
           * Query
           * @description Original coordinate string
           */
          query: string;
          /**
           * Response
           * @description Reverse geocode response for this query
           */
          response: {
              /**
               * Results
               * @description Candidate addresses ordered by accuracy
               */
              results: {
                  /**
                   * Accuracy
                   * @description Accuracy score
                   */
                  accuracy: number;
                  /**
                   * Accuracy Type
                   * @description Type of accuracy (e.g., rooftop, range_interpolation)
                   */
                  accuracy_type: string;
                  /**
                   * Address Components
                   * @description Parsed address components
                   */
                  address_components: {
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
                       * County
                       * @description County name
                       * @default null
                       */
                      county: string | null;
                      /**
                       * Formatted Street
                       * @description Full street name
                       * @default null
                       */
                      formatted_street: string | null;
                      /**
                       * Number
                       * @description Street number
                       * @default null
                       */
                      number: string | null;
                      /**
                       * Predirectional
                       * @description Predirectional designation (e.g., N, S)
                       * @default null
                       */
                      predirectional: string | null;
                      /**
                       * State
                       * @description State abbreviation
                       * @default null
                       */
                      state: string | null;
                      /**
                       * Street
                       * @description Street name
                       * @default null
                       */
                      street: string | null;
                      /**
                       * Suffix
                       * @description Street suffix (e.g., St, Rd)
                       * @default null
                       */
                      suffix: string | null;
                      /**
                       * Zip
                       * @description ZIP code
                       * @default null
                       */
                      zip: string | null;
                  };
                  /**
                   * Address Lines
                   * @description Address lines
                   */
                  address_lines: string[];
                  /**
                   * Fields
                   * @description Optional appended fields when 'fields' parameter is requested
                   * @default null
                   */
                  fields: {
                      [key: string]: unknown;
                  } | null;
                  /**
                   * Formatted Address
                   * @description Full formatted address
                   */
                  formatted_address: string;
                  /**
                   * Location
                   * @description Location with lat and lng
                   */
                  location: {
                      /**
                       * Lat
                       * @description Latitude of the result
                       */
                      lat: number;
                      /**
                       * Lng
                       * @description Longitude of the result
                       */
                      lng: number;
                  };
                  /**
                   * Source
                   * @description Data source identifier
                   */
                  source: string;
              }[];
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
 * Type of GEOCODIO's GEOCODIO_GEOCODIO_SINGLE_REVERSE_GEOCODE tool input.
 */
type GEOCODIO_GEOCODIO_SINGLE_REVERSE_GEOCODE_INPUT = {
  /**
   * Fields
   * @description Comma-separated list of data append codes to include (e.g., 'stateleg,timezone')
   * @default null
   */
  fields: string | null;
  /**
   * Format
   * @description Change output format; only valid value is 'simple' for a simplified response
   * @default null
   * @constant
   */
  format: "simple";
  /**
   * Lat
   * @description Latitude of the coordinate, between -90 and 90
   */
  lat?: number;
  /**
   * Limit
   * @description Maximum number of results to return; 0 means no limit (default no limit)
   * @default null
   */
  limit: number | null;
  /**
   * Lng
   * @description Longitude of the coordinate, between -180 and 180
   */
  lng?: number;
};

/**
 * Type of GEOCODIO's GEOCODIO_GEOCODIO_SINGLE_REVERSE_GEOCODE tool output.
 */
type GEOCODIO_GEOCODIO_SINGLE_REVERSE_GEOCODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accuracy
       * @description Accuracy score of best match when format='simple'
       * @default null
       */
      accuracy: number | null;
      /**
       * Accuracy Type
       * @description Accuracy type of best match when format='simple'
       * @default null
       */
      accuracy_type: string | null;
      /**
       * Address
       * @description Simplified formatted address when format='simple'
       * @default null
       */
      address: string | null;
      /**
       * Lat
       * @description Latitude of best match when format='simple'
       * @default null
       */
      lat: number | null;
      /**
       * Lng
       * @description Longitude of best match when format='simple'
       * @default null
       */
      lng: number | null;
      /**
       * Results
       * @description List of candidate matches; present when format is not 'simple'
       * @default null
       */
      results: {
          /**
           * Accuracy
           * @description Accuracy score ranging from 0.0 to 1.0
           */
          accuracy: number;
          /**
           * Accuracy Type
           * @description Accuracy type, e.g., rooftop, range_interpolation
           */
          accuracy_type: string;
          /**
           * Address Components
           * @description Parsed address components for the match
           */
          address_components: {
              /**
               * City
               * @description City name
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country code, e.g., US, CA
               * @default null
               */
              country: string | null;
              /**
               * County
               * @description County name
               * @default null
               */
              county: string | null;
              /**
               * Formatted Street
               * @description Normalized street string
               * @default null
               */
              formatted_street: string | null;
              /**
               * Number
               * @description House number component
               * @default null
               */
              number: string | null;
              /**
               * Postdirectional
               * @description Post-directional, e.g., NE
               * @default null
               */
              postdirectional: string | null;
              /**
               * Predirectional
               * @description Pre-directional, e.g., N, S
               * @default null
               */
              predirectional: string | null;
              /**
               * State
               * @description State or province code
               * @default null
               */
              state: string | null;
              /**
               * Street
               * @description Street name component
               * @default null
               */
              street: string | null;
              /**
               * Suffix
               * @description Street suffix, e.g., St, Ave
               * @default null
               */
              suffix: string | null;
              /**
               * Zip
               * @description ZIP or postal code
               * @default null
               */
              zip: string | null;
          };
          /**
           * Address Lines
           * @description Formatted multi-line address lines
           */
          address_lines: string[];
          /**
           * Fields
           * @description Optional appended fields when 'fields' parameter is requested
           * @default null
           */
          fields: {
              [key: string]: unknown;
          } | null;
          /**
           * Formatted Address
           * @description Single-line formatted address
           */
          formatted_address: string;
          /**
           * Location
           * @description Location with latitude and longitude
           */
          location: {
              /**
               * Lat
               * @description Latitude of the match result
               */
              lat: number;
              /**
               * Lng
               * @description Longitude of the match result
               */
              lng: number;
          };
          /**
           * Source
           * @description Primary data source for the match
           */
          source: string;
      }[] | null;
      /**
       * Source
       * @description Data source of best match when format='simple'
       * @default null
       */
      source: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GEOCODIO's GEOCODIO_GET_COORDINATES_FOR_BATCH_REVERSE_GEOCODE tool input.
 */
type GEOCODIO_GET_COORDINATES_FOR_BATCH_REVERSE_GEOCODE_INPUT = object;

/**
 * Type of GEOCODIO's GEOCODIO_GET_COORDINATES_FOR_BATCH_REVERSE_GEOCODE tool output.
 */
type GEOCODIO_GET_COORDINATES_FOR_BATCH_REVERSE_GEOCODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Coordinates
       * @description List of 'latitude,longitude' strings for batch reverse geocoding.
       */
      coordinates: string[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GEOCODIO's GEOCODIO_SCHOOL_DISTRICT_APPEND tool input.
 */
type GEOCODIO_SCHOOL_DISTRICT_APPEND_INPUT = {
  /**
   * City
   * @description City name (structured form).
   * @default null
   */
  city: string | null;
  /**
   * Country
   * @description Country; inferred or default 'US' if omitted.
   * @default null
   */
  country: string | null;
  /**
   * County
   * @description County name (structured form).
   * @default null
   */
  county: string | null;
  /**
   * Limit
   * @description Maximum number of results to return; 0 means no limit.
   * @default null
   */
  limit: number | null;
  /**
   * Postal Code
   * @description ZIP code (US) or FSA (Canada) (structured form).
   * @default null
   */
  postal_code: string | null;
  /**
   * Q
   * @description Full address to geocode (e.g., '1109 N Highland St, Arlington VA').
   * @default null
   */
  q: string | null;
  /**
   * State
   * @description State or province code (structured form), two-letter code preferred.
   * @default null
   */
  state: string | null;
  /**
   * Street
   * @description Primary street address (structured form).
   * @default null
   */
  street: string | null;
  /**
   * Street2
   * @description Second address line (apt, suite, etc.).
   * @default null
   */
  street2: string | null;
};

/**
 * Type of GEOCODIO's GEOCODIO_SCHOOL_DISTRICT_APPEND tool output.
 */
type GEOCODIO_SCHOOL_DISTRICT_APPEND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Input */
      input: {
          /** Address Components */
          address_components: {
              /** City */
              city: string | null;
              /** County */
              county: string | null;
              /** Number */
              number: string | null;
              /** Postdirectional */
              postdirectional: string | null;
              /** Predirectional */
              predirectional: string | null;
              /** State */
              state: string | null;
              /** Street */
              street: string | null;
              /** Suffix */
              suffix: string | null;
              /** Unit */
              unit: string | null;
              /**
               * Zip
               * @default null
               */
              zip: string | null;
              /**
               * Zip4
               * @default null
               */
              zip4: string | null;
          };
          /** Formatted Address */
          formatted_address: string;
      };
      /** Results */
      results: {
          /** Accuracy */
          accuracy: number;
          /** Accuracy Type */
          accuracy_type: string;
          /** Address Components */
          address_components: {
              /** City */
              city: string | null;
              /** County */
              county: string | null;
              /** Number */
              number: string | null;
              /** Postdirectional */
              postdirectional: string | null;
              /** Predirectional */
              predirectional: string | null;
              /** State */
              state: string | null;
              /** Street */
              street: string | null;
              /** Suffix */
              suffix: string | null;
              /** Unit */
              unit: string | null;
              /**
               * Zip
               * @default null
               */
              zip: string | null;
              /**
               * Zip4
               * @default null
               */
              zip4: string | null;
          };
          /** Address Lines */
          address_lines: string[];
          /** Fields */
          fields: {
              /**
               * School Districts
               * @description Appended school district information.
               */
              school_districts: {
                  /**
                   * SchoolDistrict
                   * @description Elementary district details when districts are split.
                   * @default null
                   */
                  elementary: {
                      /**
                       * Grade High
                       * @description Highest grade served (e.g., 12).
                       */
                      grade_high: string;
                      /**
                       * Grade Low
                       * @description Lowest grade served (e.g., PK, KG).
                       */
                      grade_low: string;
                      /**
                       * Lea Code
                       * @description Local Education Agency (LEA) code.
                       */
                      lea_code: string;
                      /**
                       * Name
                       * @description Full district name.
                       */
                      name: string;
                  } | null;
                  /**
                   * SchoolDistrict
                   * @description Secondary district details when districts are split.
                   * @default null
                   */
                  secondary: {
                      /**
                       * Grade High
                       * @description Highest grade served (e.g., 12).
                       */
                      grade_high: string;
                      /**
                       * Grade Low
                       * @description Lowest grade served (e.g., PK, KG).
                       */
                      grade_low: string;
                      /**
                       * Lea Code
                       * @description Local Education Agency (LEA) code.
                       */
                      lea_code: string;
                      /**
                       * Name
                       * @description Full district name.
                       */
                      name: string;
                  } | null;
                  /**
                   * SchoolDistrict
                   * @description Unified district details when available.
                   * @default null
                   */
                  unified: {
                      /**
                       * Grade High
                       * @description Highest grade served (e.g., 12).
                       */
                      grade_high: string;
                      /**
                       * Grade Low
                       * @description Lowest grade served (e.g., PK, KG).
                       */
                      grade_low: string;
                      /**
                       * Lea Code
                       * @description Local Education Agency (LEA) code.
                       */
                      lea_code: string;
                      /**
                       * Name
                       * @description Full district name.
                       */
                      name: string;
                  } | null;
              };
          };
          /** Formatted Address */
          formatted_address: string;
          /** Location */
          location: {
              /** Lat */
              lat: number;
              /** Lng */
              lng: number;
          };
          /** Source */
          source: string;
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
 * Type of GEOCODIO's GEOCODIO_SINGLE_GEOCODE tool input.
 */
type GEOCODIO_SINGLE_GEOCODE_INPUT = {
  /**
   * City
   * @description City name
   * @default null
   */
  city: string | null;
  /**
   * Country
   * @description Country context; USA or Canada
   * @default null
   */
  country: string | null;
  /**
   * County
   * @description County name
   * @default null
   */
  county: string | null;
  /**
   * Fields
   * @description Comma-separated list of data appends to include (e.g. 'timezone,cd')
   * @default null
   */
  fields: string | null;
  /**
   * Format
   * @description If 'simple', returns a flattened response schema
   * @default null
   * @constant
   */
  format: "simple";
  /**
   * Limit
   * @description Maximum number of results; 0 means no limit
   * @default null
   */
  limit: number | null;
  /**
   * Postal Code
   * @description Postal (ZIP) code
   * @default null
   */
  postal_code: string | null;
  /**
   * Q
   * @description Full address string to geocode; required if components not used
   * @default null
   */
  q: string | null;
  /**
   * State
   * @description State or province code
   * @default null
   */
  state: string | null;
  /**
   * Street
   * @description Street address component
   * @default null
   */
  street: string | null;
  /**
   * Street2
   * @description Secondary street address (unit etc)
   * @default null
   */
  street2: string | null;
};

/**
 * Type of GEOCODIO's GEOCODIO_SINGLE_GEOCODE tool output.
 */
type GEOCODIO_SINGLE_GEOCODE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Accuracy
       * @description Accuracy when format='simple'
       * @default null
       */
      accuracy: number | null;
      /**
       * Accuracy Type
       * @description Accuracy type when format='simple'
       * @default null
       */
      accuracy_type: string | null;
      /**
       * Address
       * @description Formatted address when format='simple'
       * @default null
       */
      address: string | null;
      /**
       * Lat
       * @description Latitude when format='simple'
       * @default null
       */
      lat: number | null;
      /**
       * Lng
       * @description Longitude when format='simple'
       * @default null
       */
      lng: number | null;
      /**
       * Results
       * @description Full list of matches when format not 'simple'
       * @default null
       */
      results: {
          /**
           * Accuracy
           * @description Accuracy score 0.0 to 1.0
           */
          accuracy: number;
          /**
           * Accuracy Type
           * @description Type of geocoding match (e.g. rooftop)
           */
          accuracy_type: string;
          /**
           * Address Components
           * @description Parsed result address components
           */
          address_components: {
              /**
               * City
               * @description City name
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country code
               * @default null
               */
              country: string | null;
              /**
               * County
               * @description County name
               * @default null
               */
              county: string | null;
              /**
               * Formatted Street
               * @description Normalized street line
               * @default null
               */
              formatted_street: string | null;
              /**
               * Number
               * @description House number component
               * @default null
               */
              number: string | null;
              /**
               * Postdirectional
               * @description Post-directional (e.g. NW)
               * @default null
               */
              postdirectional: string | null;
              /**
               * Predirectional
               * @description Pre-directional (e.g. N)
               * @default null
               */
              predirectional: string | null;
              /**
               * Prefix
               * @description Street prefix
               * @default null
               */
              prefix: string | null;
              /**
               * Secondarynumber
               * @description Unit number
               * @default null
               */
              secondarynumber: string | null;
              /**
               * Secondaryunit
               * @description Unit designator
               * @default null
               */
              secondaryunit: string | null;
              /**
               * State
               * @description State or province code
               * @default null
               */
              state: string | null;
              /**
               * Street
               * @description Street name
               * @default null
               */
              street: string | null;
              /**
               * Suffix
               * @description Street suffix (e.g. Ave)
               * @default null
               */
              suffix: string | null;
              /**
               * Zip
               * @description Postal code
               * @default null
               */
              zip: string | null;
          };
          /**
           * Address Lines
           * @description Multi-line formatted address lines
           */
          address_lines: string[];
          /**
           * Fields
           * @description Additional appended fields when 'fields' parameter is requested
           * @default null
           */
          fields: {
              [key: string]: unknown;
          } | null;
          /**
           * Formatted Address
           * @description Single-line formatted address
           */
          formatted_address: string;
          /**
           * Location
           * @description Location coordinates
           */
          location: {
              /**
               * Lat
               * @description Latitude of the geocoded location
               */
              lat: number;
              /**
               * Lng
               * @description Longitude of the geocoded location
               */
              lng: number;
          };
          /**
           * Source
           * @description Data source for this match
           */
          source: string;
      }[] | null;
      /**
       * Source
       * @description Data source when format='simple'
       * @default null
       */
      source: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GEOCODIO's GEOCODIO_STATE_LEGISLATIVE_DISTRICT_APPEND tool input.
 */
type GEOCODIO_STATE_LEGISLATIVE_DISTRICT_APPEND_INPUT = {
  /**
   * City
   * @description City name (structured form).
   * @default null
   */
  city: string | null;
  /**
   * Country
   * @description Country; inferred or default 'US' if omitted.
   * @default null
   */
  country: string | null;
  /**
   * County
   * @description County name (structured form).
   * @default null
   */
  county: string | null;
  /**
   * Format
   * @description Use 'simple' for a flattened JSON response; default is full JSON.
   * @default null
   * @constant
   */
  format: "simple";
  /**
   * Limit
   * @description Maximum number of results to return; ignored if format='simple'.
   * @default null
   */
  limit: number | null;
  /**
   * Postal Code
   * @description ZIP or postal code (structured form).
   * @default null
   */
  postal_code: string | null;
  /**
   * Q
   * @description Full address to geocode (e.g., '1109 N Highland St, Arlington VA').
   * @default null
   */
  q: string | null;
  /**
   * State
   * @description State or province (structured form), two-letter code preferred.
   * @default null
   */
  state: string | null;
  /**
   * Street
   * @description Primary street address (structured form).
   * @default null
   */
  street: string | null;
  /**
   * Street2
   * @description Second address line (apt, suite, etc.).
   * @default null
   */
  street2: string | null;
};

/**
 * Type of GEOCODIO's GEOCODIO_STATE_LEGISLATIVE_DISTRICT_APPEND tool output.
 */
type GEOCODIO_STATE_LEGISLATIVE_DISTRICT_APPEND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /** Input */
      input: {
          /** Address Components */
          address_components: {
              /** City */
              city: string | null;
              /** County */
              county: string | null;
              /** Number */
              number: string | null;
              /** Postdirectional */
              postdirectional: string | null;
              /** Predirectional */
              predirectional: string | null;
              /** State */
              state: string | null;
              /** Street */
              street: string | null;
              /** Suffix */
              suffix: string | null;
              /** Unit */
              unit: string | null;
              /**
               * Zip
               * @default null
               */
              zip: string | null;
              /**
               * Zip4
               * @default null
               */
              zip4: string | null;
          };
          /** Formatted Address */
          formatted_address: string;
      };
      /** Results */
      results: {
          /** Accuracy */
          accuracy: number;
          /** Accuracy Type */
          accuracy_type: string;
          /** Address Components */
          address_components: {
              /** City */
              city: string | null;
              /** County */
              county: string | null;
              /** Number */
              number: string | null;
              /** Postdirectional */
              postdirectional: string | null;
              /** Predirectional */
              predirectional: string | null;
              /** State */
              state: string | null;
              /** Street */
              street: string | null;
              /** Suffix */
              suffix: string | null;
              /** Unit */
              unit: string | null;
              /**
               * Zip
               * @default null
               */
              zip: string | null;
              /**
               * Zip4
               * @default null
               */
              zip4: string | null;
          };
          /** Address Lines */
          address_lines: string[];
          /** Fields */
          fields: {
              /** State Legislative Districts */
              state_legislative_districts: {
                  /** House */
                  house: {
                      /** Current Legislators */
                      current_legislators: {
                          /** Bio */
                          bio: {
                              /** Birthday */
                              birthday: string | null;
                              /** First Name */
                              first_name: string;
                              /** Gender */
                              gender: string | null;
                              /** Last Name */
                              last_name: string;
                              /** Party */
                              party: string | null;
                              /** Photo Url */
                              photo_url: string | null;
                          };
                          /** Contact */
                          contact: {
                              /** Address */
                              address: string | null;
                              /** Contact Form */
                              contact_form: string | null;
                              /** Email */
                              email: string | null;
                              /** Phone */
                              phone: string | null;
                              /** Url */
                              url: string | null;
                          };
                          /** References */
                          references: {
                              /** Ballotpedia Id */
                              ballotpedia_id: string | null;
                              /** Openstates Id */
                              openstates_id: string | null;
                              /** Votesmart Id */
                              votesmart_id: string | null;
                              /** Wikipedia Id */
                              wikipedia_id: string | null;
                          };
                          /** Social */
                          social: {
                              /** Facebook */
                              facebook: string | null;
                              /** Rss Url */
                              rss_url: string | null;
                              /** Twitter */
                              twitter: string | null;
                              /** Youtube */
                              youtube: string | null;
                              /** Youtube Id */
                              youtube_id: string | null;
                          };
                          /** Source */
                          source: string;
                          /**
                           * Type
                           * @description 'representative' or 'senator'
                           */
                          type: string;
                      }[] | null;
                      /** District Number */
                      district_number: number | null;
                      /** Is Upcoming State Legislative District */
                      is_upcoming_state_legislative_district: boolean;
                      /** Name */
                      name: string;
                      /** Ocd Id */
                      ocd_id: string | null;
                      /** Proportion */
                      proportion: number | null;
                  }[];
                  /** Senate */
                  senate: {
                      /** Current Legislators */
                      current_legislators: {
                          /** Bio */
                          bio: {
                              /** Birthday */
                              birthday: string | null;
                              /** First Name */
                              first_name: string;
                              /** Gender */
                              gender: string | null;
                              /** Last Name */
                              last_name: string;
                              /** Party */
                              party: string | null;
                              /** Photo Url */
                              photo_url: string | null;
                          };
                          /** Contact */
                          contact: {
                              /** Address */
                              address: string | null;
                              /** Contact Form */
                              contact_form: string | null;
                              /** Email */
                              email: string | null;
                              /** Phone */
                              phone: string | null;
                              /** Url */
                              url: string | null;
                          };
                          /** References */
                          references: {
                              /** Ballotpedia Id */
                              ballotpedia_id: string | null;
                              /** Openstates Id */
                              openstates_id: string | null;
                              /** Votesmart Id */
                              votesmart_id: string | null;
                              /** Wikipedia Id */
                              wikipedia_id: string | null;
                          };
                          /** Social */
                          social: {
                              /** Facebook */
                              facebook: string | null;
                              /** Rss Url */
                              rss_url: string | null;
                              /** Twitter */
                              twitter: string | null;
                              /** Youtube */
                              youtube: string | null;
                              /** Youtube Id */
                              youtube_id: string | null;
                          };
                          /** Source */
                          source: string;
                          /**
                           * Type
                           * @description 'representative' or 'senator'
                           */
                          type: string;
                      }[] | null;
                      /** District Number */
                      district_number: number | null;
                      /** Is Upcoming State Legislative District */
                      is_upcoming_state_legislative_district: boolean;
                      /** Name */
                      name: string;
                      /** Ocd Id */
                      ocd_id: string | null;
                      /** Proportion */
                      proportion: number | null;
                  }[];
              };
          };
          /** Formatted Address */
          formatted_address: string;
          /** Location */
          location: {
              /** Lat */
              lat: number;
              /** Lng */
              lng: number;
          };
          /** Source */
          source: string;
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
 * Type of GEOCODIO's GEOCODIO_TIMEZONE_APPEND tool input.
 */
type GEOCODIO_TIMEZONE_APPEND_INPUT = {
  /**
   * City
   * @description City name component.
   * @default null
   */
  city: string | null;
  /**
   * Country
   * @description Country name or code; defaults to 'US' if omitted.
   * @default null
   */
  country: string | null;
  /**
   * County
   * @description County name component.
   * @default null
   */
  county: string | null;
  /**
   * Format
   * @description Set to 'simple' for simplified (flattened) JSON output.
   * @default null
   * @constant
   */
  format: "simple";
  /**
   * Limit
   * @description Maximum number of results to return; 0 means no limit.
   * @default null
   */
  limit: number | null;
  /**
   * Postal Code
   * @description Postal or ZIP code component.
   * @default null
   */
  postal_code: string | null;
  /**
   * Q
   * @description Free-form address query to geocode.
   * @default null
   */
  q: string | null;
  /**
   * State
   * @description State or province component (2-letter code preferred).
   * @default null
   */
  state: string | null;
  /**
   * Street
   * @description Primary street address component.
   * @default null
   */
  street: string | null;
  /**
   * Street2
   * @description Secondary street address component (apt, suite, etc.).
   * @default null
   */
  street2: string | null;
};

/**
 * Type of GEOCODIO's GEOCODIO_TIMEZONE_APPEND tool output.
 */
type GEOCODIO_TIMEZONE_APPEND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Input
       * @description Echoed input details.
       */
      input: {
          /**
           * Address Components
           * @description Echo of the input address components.
           */
          address_components: {
              /**
               * City
               * @description City component.
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country component.
               * @default null
               */
              country: string | null;
              /**
               * County
               * @description County component.
               * @default null
               */
              county: string | null;
              /**
               * Number
               * @description House number component.
               * @default null
               */
              number: string | null;
              /**
               * Postal Code
               * @description Postal or ZIP code component.
               * @default null
               */
              postal_code: string | null;
              /**
               * Postdirectional
               * @description Street postdirectional component.
               * @default null
               */
              postdirectional: string | null;
              /**
               * Predirectional
               * @description Street predirectional component.
               * @default null
               */
              predirectional: string | null;
              /**
               * State
               * @description State or province component.
               * @default null
               */
              state: string | null;
              /**
               * Street
               * @description Street name component.
               * @default null
               */
              street: string | null;
              /**
               * Suffix
               * @description Street suffix component.
               * @default null
               */
              suffix: string | null;
              /**
               * Unit
               * @description Unit or apartment component.
               * @default null
               */
              unit: string | null;
          };
          /**
           * Formatted Address
           * @description Echo of the formatted input address.
           */
          formatted_address: string;
      };
      /**
       * Results
       * @description List of geocoding results with timezone appended.
       */
      results: {
          /**
           * Accuracy
           * @description Accuracy score of the geocoding match.
           */
          accuracy: number;
          /**
           * Accuracy Type
           * @description Type of accuracy, e.g., rooftop, interpolation.
           */
          accuracy_type: string;
          /**
           * Address Components
           * @description Parsed address components of the result.
           */
          address_components: {
              /**
               * City
               * @description City component.
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country component.
               * @default null
               */
              country: string | null;
              /**
               * County
               * @description County component.
               * @default null
               */
              county: string | null;
              /**
               * Number
               * @description House number component.
               * @default null
               */
              number: string | null;
              /**
               * Postal Code
               * @description Postal or ZIP code component.
               * @default null
               */
              postal_code: string | null;
              /**
               * Postdirectional
               * @description Street postdirectional component.
               * @default null
               */
              postdirectional: string | null;
              /**
               * Predirectional
               * @description Street predirectional component.
               * @default null
               */
              predirectional: string | null;
              /**
               * State
               * @description State or province component.
               * @default null
               */
              state: string | null;
              /**
               * Street
               * @description Street name component.
               * @default null
               */
              street: string | null;
              /**
               * Suffix
               * @description Street suffix component.
               * @default null
               */
              suffix: string | null;
              /**
               * Unit
               * @description Unit or apartment component.
               * @default null
               */
              unit: string | null;
          };
          /**
           * Address Lines
           * @description Formatted address lines.
           */
          address_lines: string[];
          /**
           * Fields
           * @description Additional appended fields data.
           */
          fields: {
              /**
               * Timezone
               * @description Appended timezone details for the location.
               */
              timezone: {
                  /**
                   * Abbreviation
                   * @description Timezone abbreviation, e.g., 'EST'.
                   */
                  abbreviation: string;
                  /**
                   * Name
                   * @description IANA timezone identifier, e.g., 'America/New_York'.
                   */
                  name: string;
                  /**
                   * Observes Dst
                   * @description Whether the location observes Daylight Saving Time.
                   */
                  observes_dst: boolean;
                  /**
                   * Source
                   * @description Data source attribution for timezone information.
                   */
                  source: string;
                  /**
                   * Utc Offset
                   * @description Offset in minutes from UTC/GMT.
                   */
                  utc_offset: number;
              };
          };
          /**
           * Formatted Address
           * @description Single-line formatted address of the result.
           */
          formatted_address: string;
          /**
           * Location
           * @description Geocoded location coordinates.
           */
          location: {
              /**
               * Lat
               * @description Latitude of the location.
               */
              lat: number;
              /**
               * Lng
               * @description Longitude of the location.
               */
              lng: number;
          };
          /**
           * Source
           * @description Primary data source for the geocoding match.
           */
          source: string;
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
 * Type of GEOCODIO's GEOCODIO_USPS_ZIP4_APPEND tool input.
 */
type GEOCODIO_USPS_ZIP4_APPEND_INPUT = {
  /**
   * City
   * @description City name.
   * @default null
   */
  city: string | null;
  /**
   * Country
   * @description Country name or code; default is US.
   * @default null
   */
  country: string | null;
  /**
   * County
   * @description County name.
   * @default null
   */
  county: string | null;
  /**
   * Format
   * @description Output format; only 'simple' supported beyond default JSON.
   * @default null
   */
  format: string | null;
  /**
   * Limit
   * @description Max number of results; 0 for unlimited.
   * @default null
   */
  limit: number | null;
  /**
   * Postal Code
   * @description Postal code or ZIP code.
   * @default null
   */
  postal_code: string | null;
  /**
   * Q
   * @description Full address string to geocode.
   * @default null
   */
  q: string | null;
  /**
   * State
   * @description State or province code.
   * @default null
   */
  state: string | null;
  /**
   * Street
   * @description Primary street address component.
   * @default null
   */
  street: string | null;
  /**
   * Street2
   * @description Secondary street address component.
   * @default null
   */
  street2: string | null;
};

/**
 * Type of GEOCODIO's GEOCODIO_USPS_ZIP4_APPEND tool output.
 */
type GEOCODIO_USPS_ZIP4_APPEND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of geocode results with ZIP+4 data.
       */
      results: {
          /**
           * Fields
           * @description Appended fields; contains 'zip4' data.
           */
          fields: {
              [key: string]: {
                  /**
                   * Building Or Firm Name
                   * @description USPS-registered building or firm name.
                   * @default null
                   */
                  building_or_firm_name: string | null;
                  /**
                   * CarrierRoute
                   * @description USPS carrier route information.
                   */
                  carrier_route: {
                      /**
                       * Description
                       * @description Description of the carrier route.
                       */
                      description: string;
                      /**
                       * Id
                       * @description USPS carrier route code (e.g., 'C007').
                       */
                      id: string;
                  };
                  /**
                   * City Delivery
                   * @description Whether city delivery carrier route exists.
                   */
                  city_delivery: boolean;
                  /**
                   * Exact Match
                   * @description True if the ZIP+4 result is unambiguous.
                   */
                  exact_match: boolean;
                  /**
                   * FacilityCode
                   * @description USPS facility code for the 5-digit ZIP.
                   */
                  facility_code: {
                      /**
                       * Code
                       * @description USPS facility code (B, C, N, P, S, U).
                       */
                      code: string;
                      /**
                       * Description
                       * @description Description of the facility code.
                       */
                      description: string;
                  };
                  /**
                   * @description Government building classification.
                   * @default null
                   */
                  government_building: {
                      /**
                       * Code
                       * @description Government building code (A–G).
                       */
                      code: string;
                      /**
                       * Description
                       * @description Description of the government building code.
                       */
                      description: string;
                  } | null;
                  /**
                   * Plus4
                   * @description ZIP+4 code values; may be empty or two-valued list.
                   */
                  plus4: string[];
                  /**
                   * RecordType
                   * @description Type of ZIP+4 match.
                   */
                  record_type: {
                      /**
                       * Code
                       * @description ZIP+4 record type code (F, G, H, P, R, S).
                       */
                      code: string;
                      /**
                       * Description
                       * @description Text description of the record type.
                       */
                      description: string;
                  };
                  /**
                   * Residential
                   * @description Residential indicator: true residential, false commercial, null unknown.
                   * @default null
                   */
                  residential: boolean | null;
                  /**
                   * Valid Delivery Area
                   * @description Whether the address is valid USPS delivery point.
                   */
                  valid_delivery_area: boolean;
                  /**
                   * Zip9
                   * @description Full ZIP+9 values corresponding to plus4.
                   */
                  zip9: string[];
              };
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
 * Type map of all available tool input types for toolkit "GEOCODIO".
 */
export type GEOCODIO_TOOL_INPUTS = {
  APPEND_CANADIAN_STATISTICAL_BOUNDARIES: GEOCODIO_APPEND_CANADIAN_STATISTICAL_BOUNDARIES_INPUT
  CANADIAN_PROVINCIAL_ELECTORAL_DISTRICT_APPEND: GEOCODIO_CANADIAN_PROVINCIAL_ELECTORAL_DISTRICT_APPEND_INPUT
  CENSUS_DATA_APPEND: GEOCODIO_CENSUS_DATA_APPEND_INPUT
  CONGRESSIONAL_DISTRICT_APPEND: GEOCODIO_CONGRESSIONAL_DISTRICT_APPEND_INPUT
  DELETE_LIST: GEOCODIO_DELETE_LIST_INPUT
  FFIEC_APPEND: GEOCODIO_FFIEC_APPEND_INPUT
  GEOCODIO_BATCH_REVERSE_GEOCODE: GEOCODIO_GEOCODIO_BATCH_REVERSE_GEOCODE_INPUT
  GEOCODIO_SINGLE_REVERSE_GEOCODE: GEOCODIO_GEOCODIO_SINGLE_REVERSE_GEOCODE_INPUT
  GET_COORDINATES_FOR_BATCH_REVERSE_GEOCODE: GEOCODIO_GET_COORDINATES_FOR_BATCH_REVERSE_GEOCODE_INPUT
  SCHOOL_DISTRICT_APPEND: GEOCODIO_SCHOOL_DISTRICT_APPEND_INPUT
  SINGLE_GEOCODE: GEOCODIO_SINGLE_GEOCODE_INPUT
  STATE_LEGISLATIVE_DISTRICT_APPEND: GEOCODIO_STATE_LEGISLATIVE_DISTRICT_APPEND_INPUT
  TIMEZONE_APPEND: GEOCODIO_TIMEZONE_APPEND_INPUT
  USPS_ZIP4_APPEND: GEOCODIO_USPS_ZIP4_APPEND_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GEOCODIO".
 */
export type GEOCODIO_TOOL_OUTPUTS = {
  APPEND_CANADIAN_STATISTICAL_BOUNDARIES: GEOCODIO_APPEND_CANADIAN_STATISTICAL_BOUNDARIES_OUTPUT
  CANADIAN_PROVINCIAL_ELECTORAL_DISTRICT_APPEND: GEOCODIO_CANADIAN_PROVINCIAL_ELECTORAL_DISTRICT_APPEND_OUTPUT
  CENSUS_DATA_APPEND: GEOCODIO_CENSUS_DATA_APPEND_OUTPUT
  CONGRESSIONAL_DISTRICT_APPEND: GEOCODIO_CONGRESSIONAL_DISTRICT_APPEND_OUTPUT
  DELETE_LIST: GEOCODIO_DELETE_LIST_OUTPUT
  FFIEC_APPEND: GEOCODIO_FFIEC_APPEND_OUTPUT
  GEOCODIO_BATCH_REVERSE_GEOCODE: GEOCODIO_GEOCODIO_BATCH_REVERSE_GEOCODE_OUTPUT
  GEOCODIO_SINGLE_REVERSE_GEOCODE: GEOCODIO_GEOCODIO_SINGLE_REVERSE_GEOCODE_OUTPUT
  GET_COORDINATES_FOR_BATCH_REVERSE_GEOCODE: GEOCODIO_GET_COORDINATES_FOR_BATCH_REVERSE_GEOCODE_OUTPUT
  SCHOOL_DISTRICT_APPEND: GEOCODIO_SCHOOL_DISTRICT_APPEND_OUTPUT
  SINGLE_GEOCODE: GEOCODIO_SINGLE_GEOCODE_OUTPUT
  STATE_LEGISLATIVE_DISTRICT_APPEND: GEOCODIO_STATE_LEGISLATIVE_DISTRICT_APPEND_OUTPUT
  TIMEZONE_APPEND: GEOCODIO_TIMEZONE_APPEND_OUTPUT
  USPS_ZIP4_APPEND: GEOCODIO_USPS_ZIP4_APPEND_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GEOCODIO toolkit.
 */
export const GEOCODIO = {
  slug: "geocodio",
  tools: {
    /**
     * Tool to append Canadian statistical boundaries from Statistics Canada. Use after geocoding addresses to enrich results with StatCan geography data.
     */
    APPEND_CANADIAN_STATISTICAL_BOUNDARIES: "GEOCODIO_APPEND_CANADIAN_STATISTICAL_BOUNDARIES",
    /**
     * Tool to append Canadian provincial electoral district to geocode results. Use when you need the provincial riding for a Canadian address.
     */
    CANADIAN_PROVINCIAL_ELECTORAL_DISTRICT_APPEND: "GEOCODIO_CANADIAN_PROVINCIAL_ELECTORAL_DISTRICT_APPEND",
    /**
     * Tool to append Census block/tract FIPS and MSA/CSA codes to geocoded addresses. Use when you need detailed Census boundaries and metropolitan area codes.
     */
    CENSUS_DATA_APPEND: "GEOCODIO_CENSUS_DATA_APPEND",
    /**
     * Tool to append Congressional District information to a geocoded address. Use after confirming address validity.
     */
    CONGRESSIONAL_DISTRICT_APPEND: "GEOCODIO_CONGRESSIONAL_DISTRICT_APPEND",
    /**
     * Tool to delete a specific list. Use when you need to permanently remove an existing list after confirming its list_id.
     */
    DELETE_LIST: "GEOCODIO_DELETE_LIST",
    /**
     * Tool to append FFIEC (Fair Lending) data to a geocoded address. Use after validating address input for detailed lending and demographic metrics.
     */
    FFIEC_APPEND: "GEOCODIO_FFIEC_APPEND",
    /**
     * Tool to batch reverse geocode up to 10,000 coordinates in one request. Use when you need addresses for many lat/lon pairs.
     */
    GEOCODIO_BATCH_REVERSE_GEOCODE: "GEOCODIO_GEOCODIO_BATCH_REVERSE_GEOCODE",
    /**
     * Tool to reverse geocode a single coordinate. Use when you need to convert one lat,lng to an address.
     */
    GEOCODIO_SINGLE_REVERSE_GEOCODE: "GEOCODIO_GEOCODIO_SINGLE_REVERSE_GEOCODE",
    /**
     * Tool to provide a predefined set of latitude,longitude strings. Use when testing batch reverse geocoding without calling external APIs.
     */
    GET_COORDINATES_FOR_BATCH_REVERSE_GEOCODE: "GEOCODIO_GET_COORDINATES_FOR_BATCH_REVERSE_GEOCODE",
    /**
     * Tool to append School District information to a geocoded address. Use after confirming address validity for K12 district boundaries.
     */
    SCHOOL_DISTRICT_APPEND: "GEOCODIO_SCHOOL_DISTRICT_APPEND",
    /**
     * Tool to forward geocode a single address. Use when you need coordinates and metadata for one address.
     */
    SINGLE_GEOCODE: "GEOCODIO_SINGLE_GEOCODE",
    /**
     * Tool to append state legislative district information to a geocoded address. Use after confirming the address validity.
     */
    STATE_LEGISLATIVE_DISTRICT_APPEND: "GEOCODIO_STATE_LEGISLATIVE_DISTRICT_APPEND",
    /**
     * Tool to append timezone information to geocode results. Use when you need local timezone details for a given address.
     */
    TIMEZONE_APPEND: "GEOCODIO_TIMEZONE_APPEND",
    /**
     * Tool to append USPS ZIP+4 information to US addresses. Use when detailed ZIP+4 data is required.
     */
    USPS_ZIP4_APPEND: "GEOCODIO_USPS_ZIP4_APPEND",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GEOCODIO".
 */
export type GEOCODIO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GEOCODIO".
 */
export type GEOCODIO_TRIGGER_EVENTS = {}
