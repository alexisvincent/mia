// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BRANDFETCH's BRANDFETCH_GET_BRAND_INFO tool input.
 */
type BRANDFETCH_GET_BRAND_INFO_INPUT = {
  /**
   * Identifier
   * @description Identifier to retrieve brand data. Can be a domain (e.g., 'nike.com'), Brand ID (e.g., 'id_0dwKPKT'), ISIN (e.g., 'US6541061031'), or Stock Ticker (e.g., 'NKE')
   */
  identifier?: string;
};

/**
 * Type of BRANDFETCH's BRANDFETCH_GET_BRAND_INFO tool output.
 */
type BRANDFETCH_GET_BRAND_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Claimed
       * @description If brand profile is claimed on Brandfetch
       */
      claimed: boolean;
      /**
       * Colors
       * @description Brand colors
       * @default null
       */
      colors: {
          /**
           * Brightness
           * @description Brightness value of the color
           * @default null
           */
          brightness: number | null;
          /**
           * Hex
           * @description Hex code of the color
           */
          hex: string;
          /**
           * Type
           * @description Type of the color (e.g., accent, primary)
           */
          type: string;
      }[] | null;
      /**
       * Company
       * @description Model for company information.
       * @default null
       */
      company: {
          /**
           * Employees
           * @description Number of employees
           * @default null
           */
          employees: number | null;
          /**
           * FinancialIdentifiers
           * @description Model for financial identifiers.
           * @default null
           */
          financialIdentifiers: {
              /**
               * Isin
               * @description List of ISIN numbers
               * @default null
               */
              isin: string[] | null;
              /**
               * Ticker
               * @description List of stock ticker symbols
               * @default null
               */
              ticker: string[] | null;
          } | null;
          /**
           * Founded Year
           * @description Year the company was founded
           * @default null
           */
          foundedYear: number | null;
          /**
           * Industries
           * @description List of industries
           * @default null
           */
          industries: {
              /**
               * Emoji
               * @description Industry emoji icon
               * @default null
               */
              emoji: string | null;
              /**
               * Id
               * @description Industry identifier
               */
              id: string;
              /**
               * Name
               * @description Industry name
               */
              name: string;
              /**
               * Score
               * @description Industry relevance score
               * @default null
               */
              score: number | null;
              /**
               * Slug
               * @description Industry slug
               */
              slug: string;
          }[] | null;
          /**
           * Kind
           * @description Kind of company
           * @default null
           */
          kind: string | null;
          /**
           * Location
           * @description Model for company location.
           * @default null
           */
          location: {
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
               * Country Code
               * @description Country code
               * @default null
               */
              countryCode: string | null;
              /**
               * Region
               * @description Region name
               * @default null
               */
              region: string | null;
              /**
               * State
               * @description State name
               * @default null
               */
              state: string | null;
              /**
               * Subregion
               * @description Subregion name
               * @default null
               */
              subregion: string | null;
          } | null;
      } | null;
      /**
       * Description
       * @description Short brand description
       * @default null
       */
      description: string | null;
      /**
       * Domain
       * @description Brand website URL
       */
      domain: string;
      /**
       * Fonts
       * @description Brand fonts
       * @default null
       */
      fonts: {
          /**
           * Name
           * @description Name of the font
           */
          name: string;
          /**
           * Origin
           * @description Origin of the font (e.g., google)
           * @default null
           */
          origin: string | null;
          /**
           * Origin Id
           * @description ID of the font in its origin system
           * @default null
           */
          originId: string | null;
          /**
           * Type
           * @description Type of the font (e.g., title, body)
           */
          type: string;
      }[] | null;
      /**
       * Id
       * @description Unique identifier for the brand
       */
      id: string;
      /**
       * Images
       * @description Brand images
       * @default null
       */
      images: {
          /**
           * Formats
           * @description Available formats of the image
           */
          formats: {
              /**
               * Background
               * @description Background type of the image
               * @default null
               */
              background: string | null;
              /**
               * Format
               * @description Format of the image (e.g., svg, png)
               */
              format: string;
              /**
               * Height
               * @description Height of the image in pixels
               * @default null
               */
              height: number | null;
              /**
               * Size
               * @description Size of the image in bytes
               * @default null
               */
              size: number | null;
              /**
               * Src
               * @description Source URL of the image
               */
              src: string;
              /**
               * Width
               * @description Width of the image in pixels
               * @default null
               */
              width: number | null;
          }[];
          /**
           * Type
           * @description Type of the image (e.g., banner)
           */
          type: string;
      }[] | null;
      /**
       * Is Nsfw
       * @description If brand is not safe for work
       * @default null
       */
      isNsfw: boolean | null;
      /**
       * Links
       * @description Social media links
       * @default null
       */
      links: {
          /**
           * Name
           * @description Name of the social media platform
           */
          name: string;
          /**
           * Url
           * @description URL of the social media profile
           */
          url: string;
      }[] | null;
      /**
       * Logos
       * @description Brand logos
       * @default null
       */
      logos: {
          /**
           * Formats
           * @description Available formats of the logo
           */
          formats: {
              /**
               * Background
               * @description Background type of the image
               * @default null
               */
              background: string | null;
              /**
               * Format
               * @description Format of the image (e.g., svg, png)
               */
              format: string;
              /**
               * Height
               * @description Height of the image in pixels
               * @default null
               */
              height: number | null;
              /**
               * Size
               * @description Size of the image in bytes
               * @default null
               */
              size: number | null;
              /**
               * Src
               * @description Source URL of the image
               */
              src: string;
              /**
               * Width
               * @description Width of the image in pixels
               * @default null
               */
              width: number | null;
          }[];
          /**
           * Theme
           * @description Theme of the logo (e.g., dark, light)
           * @default null
           */
          theme: string | null;
          /**
           * Type
           * @description Type of the logo (e.g., icon, logo)
           */
          type: string;
      }[] | null;
      /**
       * Long Description
       * @description Detailed brand description
       * @default null
       */
      longDescription: string | null;
      /**
       * Name
       * @description Brand name
       * @default null
       */
      name: string | null;
      /**
       * Quality Score
       * @description Score indicating data quality (0-1)
       * @default null
       */
      qualityScore: number | null;
      /**
       * Urn
       * @description Uniform Resource Name for the brand
       */
      urn: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BRANDFETCH's BRANDFETCH_GET_COMPANY_INFO tool input.
 */
type BRANDFETCH_GET_COMPANY_INFO_INPUT = {
  /**
   * Identifier
   * @description Identifier for the brand. Can be a domain (e.g., nike.com), Brand ID (e.g., id_0dwKPKT), ISIN (e.g., US6541061031), or stock ticker (e.g., NKE)
   */
  identifier?: string;
};

/**
 * Type of BRANDFETCH's BRANDFETCH_GET_COMPANY_INFO tool output.
 */
type BRANDFETCH_GET_COMPANY_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * CompanyInfo
       * @description Model representing detailed company information.
       * @default null
       */
      company: {
          /**
           * Employees
           * @description Number of employees (1, 2-10, 11-50, 51-200, 201-500, 501-1000, 1001-5000, 5001-10000, 10001+)
           * @default null
           */
          employees: number | null;
          /**
           * FinancialIdentifiers
           * @description Model representing company financial identifiers.
           * @default null
           */
          financialIdentifiers: {
              /**
               * Isin
               * @description List of International Securities Identification Numbers
               * @default null
               */
              isin: string[] | null;
              /**
               * Ticker
               * @description List of stock ticker symbols
               * @default null
               */
              ticker: string[] | null;
          } | null;
          /**
           * Founded Year
           * @description Year the company was founded
           * @default null
           */
          foundedYear: number | null;
          /**
           * Industries
           * @description List of industries the company operates in
           * @default null
           */
          industries: {
              /**
               * Emoji
               * @description Emoji representation of the industry
               */
              emoji: string;
              /**
               * Id
               * @description Unique identifier for the industry
               */
              id: string;
              /**
               * Name
               * @description Name of the industry
               */
              name: string;
              /**
               * Parent
               * @description List of parent industries
               * @default null
               */
              parent: {
                  /**
                   * Emoji
                   * @description Emoji representation of the parent industry
                   */
                  emoji: string;
                  /**
                   * Id
                   * @description Unique identifier for the parent industry
                   */
                  id: string;
                  /**
                   * Name
                   * @description Name of the parent industry
                   */
                  name: string;
                  /**
                   * Slug
                   * @description URL-friendly version of the parent industry name
                   */
                  slug: string;
              }[] | null;
              /**
               * Score
               * @description Confidence score for the industry classification
               */
              score: number;
              /**
               * Slug
               * @description URL-friendly version of the industry name
               */
              slug: string;
          }[] | null;
          /**
           * Kind
           * @description Type of organization (e.g., EDUCATIONAL, GOVERNMENT_AGENCY, NON_PROFIT, etc.)
           * @default null
           */
          kind: string | null;
          /**
           * Location
           * @description Model representing a company's location.
           * @default null
           */
          location: {
              /**
               * City
               * @description City where the company is located
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country where the company is located
               * @default null
               */
              country: string | null;
              /**
               * Country Code
               * @description Two-letter country code
               * @default null
               */
              country_code: string | null;
              /**
               * Region
               * @description Region within the country
               * @default null
               */
              region: string | null;
              /**
               * State
               * @description State or province
               * @default null
               */
              state: string | null;
              /**
               * Subregion
               * @description Subregion within the region
               * @default null
               */
              subregion: string | null;
          } | null;
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
 * Type of BRANDFETCH's BRANDFETCH_GET_LOGO tool input.
 */
type BRANDFETCH_GET_LOGO_INPUT = {
  /**
   * LogoFallback
   * @description Enum for logo fallback options.
   * @default null
   * @enum {string|null}
   */
  fallback: "brandfetch" | "transparent" | "lettermark" | "404" | null;
  /**
   * Height
   * @description Desired height of the logo in pixels
   * @default null
   */
  height: number | null;
  /**
   * Identifier
   * @description Brand's identifier. Can be a domain (e.g., 'nike.com'), Brand ID (e.g., 'id_0dwKPKT'), ISIN (e.g., 'US6541061031'), or Stock Ticker (e.g., 'NKE')
   */
  identifier?: string;
  /**
   * LogoTheme
   * @description Enum for logo themes.
   * @default null
   * @enum {string|null}
   */
  theme: "light" | "dark" | null;
  /**
   * LogoType
   * @description Enum for logo types.
   * @default null
   * @enum {string|null}
   */
  type: "icon" | "logo" | "symbol" | null;
  /**
   * Width
   * @description Desired width of the logo in pixels
   * @default null
   */
  width: number | null;
};

/**
 * Type of BRANDFETCH's BRANDFETCH_GET_LOGO tool output.
 */
type BRANDFETCH_GET_LOGO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Logo Url
       * @description URL to the requested logo image
       */
      logo_url: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BRANDFETCH's BRANDFETCH_GET_TRANSACTION_INFO tool input.
 */
type BRANDFETCH_GET_TRANSACTION_INFO_INPUT = {
  /**
   * Country Code
   * @description ISO 3166-1 alpha-2 country code where the transaction took place
   */
  countryCode?: string;
  /**
   * Transaction Label
   * @description The raw transaction text from credit card statement
   */
  transactionLabel?: string;
};

/**
 * Type of BRANDFETCH's BRANDFETCH_GET_TRANSACTION_INFO tool output.
 */
type BRANDFETCH_GET_TRANSACTION_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Claimed
       * @description Whether the brand profile is claimed
       */
      claimed: boolean;
      /**
       * Colors
       * @description Brand colors
       */
      colors?: {
          /**
           * Brightness
           * @description Color brightness value
           */
          brightness: number;
          /**
           * Hex
           * @description Color HEX code
           */
          hex: string;
          /**
           * Type
           * @description Type of the color (accent/dark/light/brand)
           */
          type: string;
      }[];
      /**
       * Company
       * @description Model for company information.
       * @default null
       */
      company: {
          /**
           * Employees
           * @description Number of employees
           * @default null
           */
          employees: number | null;
          /**
           * FinancialIdentifiers
           * @description Model for company financial identifiers.
           * @default null
           */
          financialIdentifiers: {
              /**
               * Isin
               * @description ISIN codes
               * @default null
               */
              isin: string[] | null;
              /**
               * Ticker
               * @description Stock ticker symbols
               * @default null
               */
              ticker: string[] | null;
          } | null;
          /**
           * Founded Year
           * @description Year founded
           * @default null
           */
          foundedYear: number | null;
          /**
           * Industries
           * @description Industry categories
           */
          industries?: {
              /**
               * Emoji
               * @description Industry emoji icon
               */
              emoji: string;
              /**
               * Id
               * @description Industry identifier
               */
              id: string;
              /**
               * Name
               * @description Industry name
               */
              name: string;
              /**
               * Parent
               * @description Parent industry categories
               * @default null
               */
              parent: {
                  [key: string]: unknown;
              }[] | null;
              /**
               * Score
               * @description Confidence score for the industry classification
               */
              score: number;
              /**
               * Slug
               * @description Industry slug
               */
              slug: string;
          }[];
          /**
           * Kind
           * @description Organization type
           * @default null
           */
          kind: string | null;
          /**
           * Location
           * @description Model for company location information.
           * @default null
           */
          location: {
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
               * Country Code
               * @description Country code
               * @default null
               */
              countryCode: string | null;
              /**
               * Region
               * @description Region name
               * @default null
               */
              region: string | null;
              /**
               * State
               * @description State name
               * @default null
               */
              state: string | null;
              /**
               * Subregion
               * @description Subregion name
               * @default null
               */
              subregion: string | null;
          } | null;
      } | null;
      /**
       * Description
       * @description Brand description
       * @default null
       */
      description: string | null;
      /**
       * Domain
       * @description Brand website URL
       */
      domain: string;
      /**
       * Fonts
       * @description Brand fonts
       */
      fonts?: {
          /**
           * Name
           * @description Font family name
           * @default null
           */
          name: string | null;
          /**
           * Origin
           * @description Font origin (google/custom/system)
           */
          origin: string;
          /**
           * Origin Id
           * @description Font origin ID
           * @default null
           */
          originId: string | null;
          /**
           * Type
           * @description Font type (title/body)
           */
          type: string;
          /**
           * Weights
           * @description Font weights
           */
          weights?: {
              [key: string]: unknown;
          }[];
      }[];
      /**
       * Id
       * @description Unique identifier for the brand
       */
      id: string;
      /**
       * Images
       * @description Brand images
       */
      images?: {
          /**
           * Formats
           * @description Available formats of the image
           */
          formats: {
              /**
               * Background
               * @description Background type (e.g., transparent)
               * @default null
               */
              background: string | null;
              /**
               * Format
               * @description File format (e.g., svg, png)
               */
              format: string;
              /**
               * Height
               * @description Height of the image in pixels
               * @default null
               */
              height: number | null;
              /**
               * Size
               * @description File size in bytes
               * @default null
               */
              size: number | null;
              /**
               * Src
               * @description Source URL of the image
               */
              src: string;
              /**
               * Width
               * @description Width of the image in pixels
               * @default null
               */
              width: number | null;
          }[];
          /**
           * Tags
           * @description Tags associated with the image
           */
          tags?: {
              [key: string]: unknown;
          }[];
          /**
           * Type
           * @description Type of the image (banner/other)
           */
          type: string;
      }[];
      /**
       * Is Nsfw
       * @description Whether content is NSFW
       */
      isNsfw: boolean;
      /**
       * Links
       * @description Social media links
       */
      links?: {
          /**
           * Name
           * @description Name of the social media platform
           */
          name: string;
          /**
           * Url
           * @description URL of the social media profile
           */
          url: string;
      }[];
      /**
       * Logos
       * @description Brand logos
       */
      logos?: {
          /**
           * Formats
           * @description Available formats of the logo
           */
          formats: {
              /**
               * Background
               * @description Background type (e.g., transparent)
               * @default null
               */
              background: string | null;
              /**
               * Format
               * @description File format (e.g., svg, png)
               */
              format: string;
              /**
               * Height
               * @description Height of the image in pixels
               * @default null
               */
              height: number | null;
              /**
               * Size
               * @description File size in bytes
               * @default null
               */
              size: number | null;
              /**
               * Src
               * @description Source URL of the image
               */
              src: string;
              /**
               * Width
               * @description Width of the image in pixels
               * @default null
               */
              width: number | null;
          }[];
          /**
           * Tags
           * @description Tags associated with the logo
           */
          tags?: {
              [key: string]: unknown;
          }[];
          /**
           * Theme
           * @description Theme of the logo (dark/light)
           * @default null
           */
          theme: string | null;
          /**
           * Type
           * @description Type of the logo (icon/logo/symbol/other)
           */
          type: string;
      }[];
      /**
       * Long Description
       * @description Brand long description
       * @default null
       */
      longDescription: string | null;
      /**
       * Name
       * @description Brand name
       * @default null
       */
      name: string | null;
      /**
       * Quality Score
       * @description Data quality score
       */
      qualityScore: number;
      /**
       * Urn
       * @description Uniform Resource Name for the brand
       */
      urn: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BRANDFETCH's BRANDFETCH_IDENTIFY_MERCHANT tool input.
 */
type BRANDFETCH_IDENTIFY_MERCHANT_INPUT = {
  /**
   * Country Code
   * @description ISO 3166-1 alpha-2 country code where the transaction took place
   */
  country_code?: string;
  /**
   * Transaction Label
   * @description The raw transaction text (e.g., 'STARBUCKS 1523 OMAHA NE')
   */
  transaction_label?: string;
};

/**
 * Type of BRANDFETCH's BRANDFETCH_IDENTIFY_MERCHANT tool output.
 */
type BRANDFETCH_IDENTIFY_MERCHANT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Claimed
       * @description Whether the brand profile is claimed on Brandfetch
       */
      claimed: boolean;
      /**
       * Company
       * @description Model for company information.
       * @default null
       */
      company: {
          /**
           * Industries
           * @description List of industries the company operates in
           */
          industries?: {
              /**
               * Name
               * @description Name of the industry
               */
              name: string;
              /**
               * Slug
               * @description Slug identifier for the industry
               */
              slug: string;
          }[];
          /**
           * Location
           * @description Model for company location information.
           * @default null
           */
          location: {
              /**
               * Country
               * @description Country name
               * @default null
               */
              country: string | null;
              /**
               * Country Code
               * @description ISO 3166-1 alpha-2 country code
               * @default null
               */
              country_code: string | null;
          } | null;
      } | null;
      /**
       * Description
       * @description Brand description
       * @default null
       */
      description: string | null;
      /**
       * Domain
       * @description Brand website URL
       */
      domain: string;
      /**
       * Id
       * @description Unique identifier for the brand
       */
      id: string;
      /**
       * Logos
       * @description List of brand logos
       */
      logos?: {
          /**
           * Formats
           * @description Available formats of the logo
           */
          formats: {
              /**
               * Format
               * @description Format of the logo (e.g., svg, png)
               */
              format: string;
              /**
               * Height
               * @description Height of the logo in pixels
               * @default null
               */
              height: number | null;
              /**
               * Src
               * @description URL of the logo image
               */
              src: string;
              /**
               * Width
               * @description Width of the logo in pixels
               * @default null
               */
              width: number | null;
          }[];
          /**
           * Theme
           * @description Theme of the logo (dark or light)
           * @default null
           */
          theme: string | null;
          /**
           * Type
           * @description Type of the logo (icon, logo, symbol, other)
           */
          type: string;
      }[];
      /**
       * Name
       * @description Brand name
       * @default null
       */
      name: string | null;
      /**
       * Quality Score
       * @description Score between 0-1 indicating the quality of the data
       */
      quality_score: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BRANDFETCH's BRANDFETCH_SEARCH_BRANDS tool input.
 */
type BRANDFETCH_SEARCH_BRANDS_INPUT = {
  /**
   * Name
   * @description The brand name to search for
   */
  name?: string;
};

/**
 * Type of BRANDFETCH's BRANDFETCH_SEARCH_BRANDS tool output.
 */
type BRANDFETCH_SEARCH_BRANDS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description List of matching brand information
       */
      results: {
          /**
           * Brand Id
           * @description Unique identifier for the brand
           */
          brandId: string;
          /**
           * Claimed
           * @description If brand profile is claimed on Brandfetch
           */
          claimed: boolean;
          /**
           * Domain
           * @description Brand's website URL
           */
          domain: string;
          /**
           * Icon
           * @description URL of the brand's icon
           * @default null
           */
          icon: string | null;
          /**
           * Name
           * @description Brand name
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
 * Type map of all available tool input types for toolkit "BRANDFETCH".
 */
export type BRANDFETCH_TOOL_INPUTS = {
  GET_BRAND_INFO: BRANDFETCH_GET_BRAND_INFO_INPUT
  GET_COMPANY_INFO: BRANDFETCH_GET_COMPANY_INFO_INPUT
  GET_LOGO: BRANDFETCH_GET_LOGO_INPUT
  GET_TRANSACTION_INFO: BRANDFETCH_GET_TRANSACTION_INFO_INPUT
  IDENTIFY_MERCHANT: BRANDFETCH_IDENTIFY_MERCHANT_INPUT
  SEARCH_BRANDS: BRANDFETCH_SEARCH_BRANDS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BRANDFETCH".
 */
export type BRANDFETCH_TOOL_OUTPUTS = {
  GET_BRAND_INFO: BRANDFETCH_GET_BRAND_INFO_OUTPUT
  GET_COMPANY_INFO: BRANDFETCH_GET_COMPANY_INFO_OUTPUT
  GET_LOGO: BRANDFETCH_GET_LOGO_OUTPUT
  GET_TRANSACTION_INFO: BRANDFETCH_GET_TRANSACTION_INFO_OUTPUT
  IDENTIFY_MERCHANT: BRANDFETCH_IDENTIFY_MERCHANT_OUTPUT
  SEARCH_BRANDS: BRANDFETCH_SEARCH_BRANDS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BRANDFETCH toolkit.
 */
export const BRANDFETCH = {
  slug: "brandfetch",
  tools: {
    /**
     * This tool retrieves comprehensive brand information including logos, colors, fonts, and company details for any brand using their domain name, brand id, isin, or stock ticker symbol. it provides access to a brand's complete visual identity and company information.
     */
    GET_BRAND_INFO: "BRANDFETCH_GET_BRAND_INFO",
    /**
     * This action retrieves detailed company information for a given brand identifier. while the brandfetch get brand info tool provides general brand information, this tool specifically focuses on extracting and returning the company-related firmographic data from the response.
     */
    GET_COMPANY_INFO: "BRANDFETCH_GET_COMPANY_INFO",
    /**
     * This tool fetches the latest logo for any brand using brandfetch's brand api. it provides access to high-quality, up-to-date logos with customizable dimensions. the tool supports different logo types (icon, logo, symbol) and themes (light, dark).
     */
    GET_LOGO: "BRANDFETCH_GET_LOGO",
    /**
     * This tool converts payment transaction labels into detailed merchant brand information. it takes a transaction label (like what you see on your credit card statement) and returns comprehensive brand data (including logos, colors, fonts, and company information). it is useful for identifying merchants and enriching transaction data with detailed brand information.
     */
    GET_TRANSACTION_INFO: "BRANDFETCH_GET_TRANSACTION_INFO",
    /**
     * This tool identifies merchant brands from raw transaction data in a single call. it processes unstructured payment text (e.g., credit card transaction descriptions), maps it to a domain, and returns comprehensive brand details including name, logo, domain, and industry information.
     */
    IDENTIFY_MERCHANT: "BRANDFETCH_IDENTIFY_MERCHANT",
    /**
     * This tool allows searching for brands by name and returns matching brand information. it enables searching and matching brand names to their corresponding urls and icons, providing rich autocomplete experiences.
     */
    SEARCH_BRANDS: "BRANDFETCH_SEARCH_BRANDS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BRANDFETCH".
 */
export type BRANDFETCH_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BRANDFETCH".
 */
export type BRANDFETCH_TRIGGER_EVENTS = {}
