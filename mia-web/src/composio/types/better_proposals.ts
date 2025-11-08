// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_BETTER_PROPOSALS_GET_ALL_DOCUMENT_TYPES tool input.
 */
type BETTER_PROPOSALS_BETTER_PROPOSALS_GET_ALL_DOCUMENT_TYPES_INPUT = {
  /**
   * Page
   * @description Page number to retrieve
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of document types per page
   * @default 10
   */
  per_page: number;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_BETTER_PROPOSALS_GET_ALL_DOCUMENT_TYPES tool output.
 */
type BETTER_PROPOSALS_BETTER_PROPOSALS_GET_ALL_DOCUMENT_TYPES_OUTPUT = {
  /**
   * Data
   * @description List of document types returned for the requested page
   */
  data?: {
      /**
       * Id
       * @description Unique ID of the document type
       */
      ID: number;
      /**
       * Number Of Outstanding Documents
       * @description Count of outstanding documents of this type
       */
      NumberOfOutstandingDocuments: number;
      /**
       * Number Of Templates
       * @description Count of templates for this document type
       */
      NumberOfTemplates: number;
      /**
       * Type Colour
       * @description Hex colour code for this type
       * @default null
       */
      TypeColour: string | null;
      /**
       * Type Icon
       * @description Icon identifier or URL for this type
       * @default null
       */
      TypeIcon: string | null;
      /**
       * Type Name
       * @description Name of the document type
       */
      TypeName: string;
      /**
       * Type Name Singular
       * @description Singular form of the document type name
       * @default null
       */
      TypeNameSingular: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Error message returned by the API if status is error
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description Response status: success or error
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_CREATE_COMPANY tool input.
 */
type BETTER_PROPOSALS_CREATE_COMPANY_INPUT = {
  /**
   * Company Name
   * @description Company name.
   */
  CompanyName?: string;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_CREATE_COMPANY tool output.
 */
type BETTER_PROPOSALS_CREATE_COMPANY_OUTPUT = {
  /**
   * Data
   * @description The newly created company data.
   */
  data?: {
      /**
       * Account Id
       * @description Account identifier.
       */
      AccountID: string;
      /**
       * Company Name
       * @description Name of the company.
       */
      CompanyName: string;
      /**
       * Created By
       * @description User ID who created the company.
       */
      CreatedBy: string;
      /**
       * Date Created
       * @description Timestamp when the company was created.
       */
      DateCreated: string;
      /**
       * Date Edited
       * @description Timestamp when the company was last edited.
       */
      DateEdited: string | null;
      /**
       * Demo Company
       * @description Demo company flag ('1' or '0').
       */
      DemoCompany: string;
      /**
       * Edited By
       * @description User ID who last edited the company.
       */
      EditedBy: string | null;
      /**
       * Id
       * @description Unique identifier of the company.
       */
      ID: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Error message if status is error.
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description Response status: success or error.
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_CREATE_DOCUMENT_TYPE tool input.
 */
type BETTER_PROPOSALS_CREATE_DOCUMENT_TYPE_INPUT = {
  /**
   * Type Colour
   * @description Hex colour for your new document type. Default is '#01A3EF'.
   * @default null
   */
  TypeColour: string | null;
  /**
   * Type Name
   * @description Document type name
   */
  TypeName?: string;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_CREATE_DOCUMENT_TYPE tool output.
 */
type BETTER_PROPOSALS_CREATE_DOCUMENT_TYPE_OUTPUT = {
  /**
   * Data
   * @description The newly created document type.
   */
  data?: {
      /**
       * Account Id
       * @description Account ID.
       */
      AccountID: string;
      /**
       * Category Icon
       * @description Category icon URL.
       * @default null
       */
      CategoryIcon: string | null;
      /**
       * Created By
       * @description User ID who created.
       */
      CreatedBy: string;
      /**
       * Date Created
       * @description Creation timestamp.
       */
      DateCreated: string;
      /**
       * Date Deleted
       * @description Deletion timestamp.
       * @default null
       */
      DateDeleted: string | null;
      /**
       * Date Edited
       * @description Last edited timestamp.
       * @default null
       */
      DateEdited: string | null;
      /**
       * Deleted
       * @description Deletion flag.
       */
      Deleted: string;
      /**
       * Deleted By
       * @description User ID who deleted.
       * @default null
       */
      DeletedBy: string | null;
      /**
       * Display Order
       * @description Display order.
       * @default null
       */
      DisplayOrder: string | null;
      /**
       * Edited By
       * @description User ID who edited.
       * @default null
       */
      EditedBy: string | null;
      /**
       * Id
       * @description Unique identifier of the document type.
       */
      ID: string;
      /**
       * Type Colour
       * @description Hex colour of document type.
       */
      TypeColour: string;
      /**
       * Type Icon
       * @description Icon URL.
       * @default null
       */
      TypeIcon: string | null;
      /**
       * Type Name
       * @description Document type name.
       */
      TypeName: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Status of the API call
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_CREATE_PROPOSAL_COVER tool input.
 */
type BETTER_PROPOSALS_CREATE_PROPOSAL_COVER_INPUT = {
  /**
   * Bg Colour
   * @description Background colour as 6-digit hex code, e.g. 'ffffff'
   * @default null
   */
  BGColour: string | null;
  /**
   * Brand Id
   * @description ID of the brand to use; if omitted, default brand settings are applied
   * @default null
   */
  BrandID: number | null;
  /**
   * Button Style
   * @description Style of the start button; 'round' or 'square'
   * @default null
   * @enum {string|null}
   */
  ButtonStyle: "round" | "square" | null;
  /**
   * Button Text
   * @description Label text for the start button
   * @default null
   */
  ButtonText: string | null;
  /**
   * Cover Name
   * @description Name for the cover; default is 'Untitled'
   * @default null
   */
  CoverName: string | null;
  /**
   * Headline
   * @description Main headline text on the cover
   * @default null
   */
  Headline: string | null;
  /**
   * Subheader
   * @description Subheader text on the cover
   * @default null
   */
  Subheader: string | null;
  /**
   * Text Align
   * @description Text alignment on the cover; one of 'left', 'center', or 'right'
   * @default null
   * @enum {string|null}
   */
  TextAlign: "left" | "center" | "right" | null;
  /**
   * Text Colour
   * @description Text colour as 6-digit hex code, e.g. 'ffffff'
   * @default null
   */
  TextColour: string | null;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_CREATE_PROPOSAL_COVER tool output.
 */
type BETTER_PROPOSALS_CREATE_PROPOSAL_COVER_OUTPUT = {
  /**
   * Data
   * @description Details of the created cover
   */
  data?: {
      /**
       * Bg Colour
       * @description Background color (hex)
       */
      BGColour: string;
      /**
       * Brand Id
       * @description Brand ID applied for this cover
       */
      BrandID: number;
      /**
       * Button Style
       * @description Button style
       * @enum {string}
       */
      ButtonStyle: "round" | "square";
      /**
       * Button Text
       * @description Button text label
       */
      ButtonText: string;
      /**
       * Cover Name
       * @description Name of the cover
       */
      CoverName: string;
      /**
       * Date Created
       * @description Timestamp when cover was created
       * @default null
       */
      DateCreated: string | null;
      /**
       * Headline
       * @description Cover headline text
       */
      Headline: string;
      /**
       * Id
       * @description Unique ID of the created cover
       */
      ID: number;
      /**
       * Subheader
       * @description Cover subheader text
       */
      Subheader: string;
      /**
       * Text Align
       * @description Text alignment
       * @enum {string}
       */
      TextAlign: "left" | "center" | "right";
      /**
       * Text Colour
       * @description Text color (hex)
       */
      TextColour: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API response status
   * @enum {string}
   */
  status?: "success" | "error";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_ALL_COMPANIES tool input.
 */
type BETTER_PROPOSALS_GET_ALL_COMPANIES_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (minimum 1)
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of companies per page (minimum 1)
   * @default 10
   */
  per_page: number;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_ALL_COMPANIES tool output.
 */
type BETTER_PROPOSALS_GET_ALL_COMPANIES_OUTPUT = {
  /**
   * Data
   * @description List of companies for the requested page
   */
  data?: {
      /**
       * Account Id
       * @description Account identifier
       */
      AccountID: string;
      /**
       * Company Name
       * @description Name of the company
       */
      CompanyName: string;
      /**
       * Created By
       * @description User ID who created the company
       */
      CreatedBy: string;
      /**
       * Date Created
       * @description Date when the company was created
       */
      DateCreated: string;
      /**
       * Date Edited
       * @description Date when the company was last edited
       * @default null
       */
      DateEdited: string | null;
      /**
       * Deleted
       * @description Deleted flag (1 or 0)
       */
      Deleted: string;
      /**
       * Deleted By
       * @description User ID who deleted the company, if deleted
       * @default null
       */
      DeletedBy: string | null;
      /**
       * Demo Company
       * @description Demo company flag (1 or 0)
       */
      DemoCompany: string;
      /**
       * Edited By
       * @description User ID who last edited the company
       * @default null
       */
      EditedBy: string | null;
      /**
       * Id
       * @description Company identifier
       */
      ID: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Error message if status is error
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description Response status: success or error
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_ALL_CURRENCIES tool input.
 */
type BETTER_PROPOSALS_GET_ALL_CURRENCIES_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (minimum 1)
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of currencies per page (minimum 1)
   * @default 10
   */
  per_page: number;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_ALL_CURRENCIES tool output.
 */
type BETTER_PROPOSALS_GET_ALL_CURRENCIES_OUTPUT = {
  /**
   * Data
   * @description List of currencies for the requested page
   */
  data?: {
      /**
       * Currency Code
       * @description Three-letter currency code
       */
      CurrencyCode: string;
      /**
       * Currency Name
       * @description Name of the currency
       */
      CurrencyName: string;
      /**
       * Currency Symbol
       * @description Symbol of the currency
       */
      CurrencySymbol: string;
      /**
       * Id
       * @description Currency identifier
       */
      ID: string;
      /**
       * Paypal Support
       * @description PayPal support flag (0 or 1)
       */
      PaypalSupport: string;
      /**
       * Stripe Support
       * @description Stripe support flag (0 or 1)
       */
      StripeSupport: string;
      /**
       * Zero Decimal
       * @description Zero decimal flag (0 or 1)
       */
      ZeroDecimal: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Error message if status is error
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description Response status: success or error
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_ALL_DOCUMENT_TYPES tool input.
 */
type BETTER_PROPOSALS_GET_ALL_DOCUMENT_TYPES_INPUT = {
  /**
   * Page
   * @description Page number to retrieve
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of document types per page
   * @default 10
   */
  per_page: number;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_ALL_DOCUMENT_TYPES tool output.
 */
type BETTER_PROPOSALS_GET_ALL_DOCUMENT_TYPES_OUTPUT = {
  /**
   * Data
   * @description List of document types for the requested page
   */
  data?: {
      /**
       * Id
       * @description Unique ID of the document type
       */
      ID: number;
      /**
       * Number Of Outstanding Documents
       * @description Count of outstanding documents of this type
       */
      NumberOfOutstandingDocuments: number;
      /**
       * Number Of Templates
       * @description Count of templates for this document type
       */
      NumberOfTemplates: number;
      /**
       * Type Colour
       * @description Hex colour code for this type
       * @default null
       */
      TypeColour: string | null;
      /**
       * Type Icon
       * @description Icon identifier or URL for this type
       * @default null
       */
      TypeIcon: string | null;
      /**
       * Type Name
       * @description Name of the document type
       */
      TypeName: string;
      /**
       * Type Name Singular
       * @description Singular form of the document type name
       * @default null
       */
      TypeNameSingular: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Error message if status is error
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description Response status: success or error
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_ALL_PROPOSALS tool input.
 */
type BETTER_PROPOSALS_GET_ALL_PROPOSALS_INPUT = {
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of proposals per page, must be >= 1
   * @default 10
   */
  per_page: number;
  /**
   * Type
   * @description Document Type ID to filter proposals
   * @default null
   */
  type: number | null;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_ALL_PROPOSALS tool output.
 */
type BETTER_PROPOSALS_GET_ALL_PROPOSALS_OUTPUT = {
  /**
   * Data
   * @description List of proposals
   */
  data?: {
      /**
       * Amount
       * @default null
       */
      Amount: string | null;
      /**
       * Amount Desc
       * @default null
       */
      AmountDesc: string | null;
      /**
       * Annual Total
       * @default null
       */
      AnnualTotal: string | null;
      /**
       * Assigned To
       * @default null
       */
      AssignedTo: string | null;
      /**
       * Brand Id
       * @default null
       */
      BrandID: string | null;
      /**
       * Crm Opportunity Id
       * @default null
       */
      CRMOpportunityID: string | null;
      /**
       * Company Crmid
       * @default null
       */
      CompanyCRMID: string | null;
      /**
       * Company Name
       * @default null
       */
      CompanyName: string | null;
      /**
       * Contacts
       * @default null
       */
      Contacts: {
          /**
           * Email
           * @description Contact email
           * @default null
           */
          Email: string | null;
          /**
           * First Name
           * @description Contact first name
           * @default null
           */
          FirstName: string | null;
          /**
           * Link
           * @description Link to proposal cover for contact
           * @default null
           */
          Link: string | null;
          /**
           * Surname
           * @description Contact surname
           * @default null
           */
          Surname: string | null;
      }[] | null;
      /**
       * Cover Id
       * @default null
       */
      CoverID: string | null;
      /**
       * Currency Code
       * @default null
       */
      CurrencyCode: string | null;
      /**
       * Currency Name
       * @default null
       */
      CurrencyName: string | null;
      /**
       * Currency Symbol
       * @default null
       */
      CurrencySymbol: string | null;
      /**
       * Customer Journey Id
       * @default null
       */
      CustomerJourneyID: string | null;
      /**
       * Date Created
       * @default null
       */
      DateCreated: string | null;
      /**
       * Date Paid
       * @default null
       */
      DatePaid: string | null;
      /**
       * Date Sent
       * @default null
       */
      DateSent: string | null;
      /**
       * Description
       * @default null
       */
      Description: string | null;
      /**
       * Edit Lock
       * @default null
       */
      EditLock: string | null;
      /**
       * Id
       * @default null
       */
      ID: string | null;
      /**
       * Monthly Total
       * @default null
       */
      MonthlyTotal: string | null;
      /**
       * One Off Total
       * @default null
       */
      OneOffTotal: string | null;
      /**
       * Original Date Sent
       * @default null
       */
      OriginalDateSent: string | null;
      /**
       * Paid
       * @default null
       */
      Paid: string | null;
      /**
       * Personal Message
       * @default null
       */
      PersonalMessage: string | null;
      /**
       * Preview
       * @default null
       */
      Preview: string | null;
      /**
       * Price Tables
       * @default null
       */
      PriceTables: {
          /**
           * Date Created
           * @default null
           */
          DateCreated: string | null;
          /**
           * Display Order
           * @default null
           */
          DisplayOrder: number | null;
          /**
           * Force Client Choice
           * @default null
           */
          ForceClientChoice: boolean | null;
          /**
           * Id
           * @default null
           */
          ID: string | null;
          /**
           * Items
           * @default null
           */
          Items: {
              /**
               * Can Client Set Quantity
               * @default null
               */
              CanClientSetQuantity: boolean | null;
              /**
               * Cost
               * @default null
               */
              Cost: string | null;
              /**
               * Date
               * @default null
               */
              Date: string | null;
              /**
               * Description
               * @default null
               */
              Description: string | null;
              /**
               * Discount
               * @default null
               */
              Discount: boolean | null;
              /**
               * Discount Amount
               * @default null
               */
              DiscountAmount: string | null;
              /**
               * Discount Type
               * @default null
               */
              DiscountType: boolean | null;
              /**
               * Display Order
               * @default null
               */
              DisplayOrder: number | null;
              /**
               * Id
               * @default null
               */
              ID: string | null;
              /**
               * Label
               * @default null
               */
              Label: string | null;
              /**
               * Monthly Cost
               * @default null
               */
              MonthlyCost: string | null;
              /**
               * Optional
               * @description Whether the item is optional
               * @default null
               */
              Optional: boolean | null;
              /**
               * Price Type
               * @default null
               */
              PriceType: string | null;
              /**
               * Quantity
               * @default null
               */
              Quantity: number | null;
              /**
               * Quantity Max
               * @default null
               */
              QuantityMax: number | null;
              /**
               * Quantity Min
               * @default null
               */
              QuantityMin: number | null;
              /**
               * Recurring Type
               * @default null
               */
              RecurringType: string | null;
              /**
               * Selectable
               * @default null
               */
              Selectable: boolean | null;
              /**
               * Selected
               * @default null
               */
              Selected: boolean | null;
              /**
               * Show Quantity
               * @default null
               */
              ShowQuantity: boolean | null;
              /**
               * Table Discount
               * @default null
               */
              TableDiscount: boolean | null;
              /**
               * Table Discount Amount
               * @default null
               */
              TableDiscountAmount: string | null;
              /**
               * Table Discount Type
               * @default null
               */
              TableDiscountType: boolean | null;
              /**
               * Tax Exemption Status
               * @default null
               */
              TaxExemptionStatus: boolean | null;
              /**
               * Unit Cost
               * @default null
               */
              UnitCost: string | null;
              /**
               * Is Quantity Limited
               * @default null
               */
              isQuantityLimited: boolean | null;
          }[] | null;
          /**
           * Show
           * @default null
           */
          Show: boolean | null;
          /**
           * Title
           * @default null
           */
          Title: string | null;
      }[] | null;
      /**
       * Proposal Password
       * @default null
       */
      ProposalPassword: string | null;
      /**
       * Proposal View
       * @default null
       */
      ProposalView: string | null;
      /**
       * Quarterly Total
       * @default null
       */
      QuarterlyTotal: string | null;
      /**
       * Quote Id
       * @default null
       */
      QuoteID: string | null;
      /**
       * Sign Order
       * @default null
       */
      SignOrder: string | null;
      /**
       * Signed
       * @default null
       */
      Signed: string | null;
      /**
       * Signed Date
       * @default null
       */
      SignedDate: string | null;
      /**
       * Signed Email
       * @default null
       */
      SignedEmail: string | null;
      /**
       * Signed First Name
       * @default null
       */
      SignedFirstName: string | null;
      /**
       * Signed Name
       * @default null
       */
      SignedName: string | null;
      /**
       * Signed Surname
       * @default null
       */
      SignedSurname: string | null;
      /**
       * Signed Time
       * @default null
       */
      SignedTime: string | null;
      /**
       * Subject Line
       * @default null
       */
      SubjectLine: string | null;
      /**
       * Tax
       * @default null
       */
      Tax: string | null;
      /**
       * Tax Amount
       * @default null
       */
      TaxAmount: string | null;
      /**
       * Tax Label
       * @default null
       */
      TaxLabel: string | null;
      /**
       * Type Id
       * @default null
       */
      TypeID: string | null;
      /**
       * View Type
       * @default null
       */
      ViewType: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API call status
   * @enum {string}
   */
  status?: "success" | "error";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_ALL_QUOTES tool input.
 */
type BETTER_PROPOSALS_GET_ALL_QUOTES_INPUT = {
  /**
   * Page
   * @description Page number to fetch, default is 1
   * @default null
   */
  page: number | null;
  /**
   * Per Page
   * @description Number of quotes per page, default is 10
   * @default null
   */
  per_page: number | null;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_ALL_QUOTES tool output.
 */
type BETTER_PROPOSALS_GET_ALL_QUOTES_OUTPUT = {
  /**
   * Data
   * @description List of quote items
   */
  data?: {
      /**
       * Account Id
       * @description Account ID associated with the quote
       */
      AccountID: string;
      /**
       * Annual Amount
       * @description Annual recurring amount, if any
       * @default null
       */
      AnnualAmount: string | null;
      /**
       * Archived
       * @description Flag indicating if quote is archived
       */
      Archived: string;
      /**
       * Archived By
       * @description User ID who archived the quote
       * @default null
       */
      ArchivedBy: string | null;
      /**
       * Company Id
       * @description Associated company ID
       */
      CompanyID: string;
      /**
       * Created By
       * @description User ID who created the quote
       */
      CreatedBy: string;
      /**
       * Date Accepted
       * @description Timestamp when the quote was accepted
       * @default null
       */
      DateAccepted: string | null;
      /**
       * Date Archived
       * @description Timestamp when the quote was archived
       * @default null
       */
      DateArchived: string | null;
      /**
       * Date Completed
       * @description Timestamp when the quote was completed
       * @default null
       */
      DateCompleted: string | null;
      /**
       * Date Created
       * @description Timestamp when the quote was created
       */
      DateCreated: string;
      /**
       * Date Deleted
       * @description Timestamp when the quote was deleted
       * @default null
       */
      DateDeleted: string | null;
      /**
       * Date Edited
       * @description Timestamp when the quote was last edited
       * @default null
       */
      DateEdited: string | null;
      /**
       * Date Marked Dead
       * @description Timestamp when the quote was marked dead
       * @default null
       */
      DateMarkedDead: string | null;
      /**
       * Deleted
       * @description Flag indicating if quote is deleted
       */
      Deleted: string;
      /**
       * Deleted By
       * @description User ID who deleted the quote
       * @default null
       */
      DeletedBy: string | null;
      /**
       * Edited By
       * @description User ID who last edited the quote
       * @default null
       */
      EditedBy: string | null;
      /**
       * Id
       * @description Quote unique identifier as string
       */
      ID: string;
      /**
       * Mark Dead
       * @description Flag indicating if quote is marked dead
       */
      MarkDead: string;
      /**
       * Marked Dead By
       * @description User ID who marked the quote dead
       * @default null
       */
      MarkedDeadBy: string | null;
      /**
       * Monthly Amount
       * @description Monthly recurring amount if applicable
       * @default null
       */
      MonthlyAmount: string | null;
      /**
       * Quarterly Amount
       * @description Quarterly recurring amount, if any
       * @default null
       */
      QuarterlyAmount: string | null;
      /**
       * Quote Amount
       * @description Total quote amount before tax
       * @default null
       */
      QuoteAmount: string | null;
      /**
       * Quote Total
       * @description Total amount including VAT
       * @default null
       */
      QuoteTotal: string | null;
      /**
       * Status
       * @description Status code of the quote
       */
      Status: string;
      /**
       * Vat Amount
       * @description VAT amount applied to the quote
       * @default null
       */
      VatAmount: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Response status, either 'success' or 'error'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_ALL_TEMPLATES tool input.
 */
type BETTER_PROPOSALS_GET_ALL_TEMPLATES_INPUT = {
  /**
   * Page
   * @description Page number to retrieve (minimum 1)
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of templates per page (minimum 1)
   * @default 10
   */
  per_page: number;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_ALL_TEMPLATES tool output.
 */
type BETTER_PROPOSALS_GET_ALL_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description List of templates returned
   */
  data?: {
      /**
       * Account Id
       * @description Account identifier
       */
      AccountID: string;
      /**
       * Annual Amount
       * @description Default annual amount
       * @default null
       */
      AnnualAmount: string | null;
      /**
       * Brand Id
       * @description Brand identifier
       */
      BrandID: string;
      /**
       * Category Id
       * @description Category identifier
       * @default null
       */
      CategoryID: string | null;
      /**
       * Cover Id
       * @description Cover identifier
       * @default null
       */
      CoverID: string | null;
      /**
       * Created By
       * @description User ID who created the template
       */
      CreatedBy: string;
      /**
       * Date Created
       * @description Date when the template was created
       */
      DateCreated: string;
      /**
       * Date Edited
       * @description Date when the template was last edited
       */
      DateEdited: string;
      /**
       * Default
       * @description Default template flag (1 or 0)
       */
      Default: string;
      /**
       * Deleted
       * @description Deleted flag (1 or 0)
       */
      Deleted: string;
      /**
       * Description
       * @description Template description
       * @default null
       */
      Description: string | null;
      /**
       * Edited By
       * @description User ID who last edited the template
       */
      EditedBy: string;
      /**
       * From Marketplace
       * @description Marketplace flag (1 or 0)
       */
      FromMarketplace: string;
      /**
       * Id
       * @description Template identifier
       */
      ID: string;
      /**
       * Industry Id
       * @description Industry identifier
       * @default null
       */
      IndustryID: string | null;
      /**
       * Monthly Amount
       * @description Default monthly amount
       * @default null
       */
      MonthlyAmount: string | null;
      /**
       * Quarterly Amount
       * @description Default quarterly amount
       * @default null
       */
      QuarterlyAmount: string | null;
      /**
       * Quote Amount
       * @description Default quote amount
       * @default null
       */
      QuoteAmount: string | null;
      /**
       * Sample Template
       * @description Sample template flag (1 or 0)
       */
      SampleTemplate: string;
      /**
       * Template Name
       * @description Template name
       */
      TemplateName: string;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Response status: 'success' or 'error'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_BRAND_SETTINGS tool input.
 */
type BETTER_PROPOSALS_GET_BRAND_SETTINGS_INPUT = object;

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_BRAND_SETTINGS tool output.
 */
type BETTER_PROPOSALS_GET_BRAND_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Default brand settings object
   */
  data?: {
      /**
       * Account Id
       * @description Account identifier
       */
      AccountID: string;
      /**
       * Company Name
       * @description Company name displayed in proposals
       */
      CompanyName: string;
      /**
       * Created By
       * @description User ID who created the brand settings
       * @default null
       */
      CreatedBy: string | null;
      /**
       * Currency Id
       * @description Default currency ID
       */
      CurrencyID: string;
      /**
       * Date Created
       * @description Date when the brand settings were created
       * @default null
       */
      DateCreated: string | null;
      /**
       * Date Edited
       * @description Date when the brand settings were last edited
       * @default null
       */
      DateEdited: string | null;
      /**
       * Default
       * @description Flag if this is the default brand (1 or 0)
       */
      Default: string;
      /**
       * Deleted
       * @description Flag if the brand is deleted (1 or 0)
       */
      Deleted: string;
      /**
       * Edited By
       * @description User ID who last edited the brand settings
       * @default null
       */
      EditedBy: string | null;
      /**
       * Id
       * @description Brand identifier
       */
      ID: string;
      /**
       * Name
       * @description Brand name
       */
      Name: string;
      /**
       * Page Title
       * @description Title displayed on the proposal preview
       * @default null
       */
      PageTitle: string | null;
      /**
       * Show Badge
       * @description Flag to show badge on proposals (1 or 0)
       */
      ShowBadge: string;
      /**
       * Tax
       * @description Flag to use tax (1 or 0)
       */
      Tax: string;
      /**
       * Tax Amount
       * @description Tax amount as string
       * @default null
       */
      TaxAmount: string | null;
      /**
       * Tax Label
       * @description Tax label for this brand
       * @default null
       */
      TaxLabel: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Error message if status is error
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description Response status: success or error
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_COMPANY tool input.
 */
type BETTER_PROPOSALS_GET_COMPANY_INPUT = {
  /**
   * Company Id
   * @description The unique identifier of the company to retrieve.
   */
  company_id?: string;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_COMPANY tool output.
 */
type BETTER_PROPOSALS_GET_COMPANY_OUTPUT = {
  /**
   * Data
   * @description Detailed company data
   */
  data?: {
      /**
       * Account Id
       * @description Account ID associated with the company
       */
      AccountID: string;
      /**
       * Company Name
       * @description Name of the company
       */
      CompanyName: string;
      /**
       * Created By
       * @description User ID who created the company
       */
      CreatedBy: string;
      /**
       * Date Created
       * @description Datetime when the company was created
       */
      DateCreated: string;
      /**
       * Date Edited
       * @description Datetime when the company was last edited
       * @default null
       */
      DateEdited: string | null;
      /**
       * Deleted
       * @description Deleted flag (1 or 0)
       */
      Deleted: string;
      /**
       * Deleted By
       * @description User ID who deleted the company, if deleted
       * @default null
       */
      DeletedBy: string | null;
      /**
       * Demo Company
       * @description Demo company flag (1 or 0)
       */
      DemoCompany: string;
      /**
       * Edited By
       * @description User ID who last edited the company
       * @default null
       */
      EditedBy: string | null;
      /**
       * Id
       * @description Company ID
       */
      ID: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Error message if status is error
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description Response status: success or error
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_CURRENCY tool input.
 */
type BETTER_PROPOSALS_GET_CURRENCY_INPUT = {
  /**
   * Currency Id
   * @description The unique identifier of the currency to retrieve.
   */
  currency_id?: string;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_CURRENCY tool output.
 */
type BETTER_PROPOSALS_GET_CURRENCY_OUTPUT = {
  /**
   * Data
   * @description Detailed currency information
   */
  data?: {
      /**
       * Currency Code
       * @description Three-letter currency code
       */
      CurrencyCode: string;
      /**
       * Currency Name
       * @description Name of the currency
       */
      CurrencyName: string;
      /**
       * Currency Symbol
       * @description Symbol of the currency
       */
      CurrencySymbol: string;
      /**
       * Id
       * @description Currency ID
       */
      ID: string;
      /**
       * Paypal Support
       * @description PayPal support flag (1 or 0)
       */
      PaypalSupport: string;
      /**
       * Stripe Support
       * @description Stripe support flag (1 or 0)
       */
      StripeSupport: string;
      /**
       * Zero Decimal
       * @description Zero decimal flag (1 or 0)
       */
      ZeroDecimal: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Error message if status is error
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description Response status: success or error
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_NEW_PROPOSALS tool input.
 */
type BETTER_PROPOSALS_GET_NEW_PROPOSALS_INPUT = {
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of proposals per page, must be >= 1
   * @default 10
   */
  per_page: number;
  /**
   * Type
   * @description Document Type ID to filter proposals
   * @default null
   */
  type: number | null;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_NEW_PROPOSALS tool output.
 */
type BETTER_PROPOSALS_GET_NEW_PROPOSALS_OUTPUT = {
  /**
   * Data
   * @description List of new proposals
   */
  data?: {
      /**
       * Annual Total
       * @default null
       */
      AnnualTotal: string | null;
      /**
       * Brand Id
       * @default null
       */
      BrandID: string | null;
      /**
       * Crm Opportunity Id
       * @default null
       */
      CRMOpportunityID: string | null;
      /**
       * Company Crmid
       * @default null
       */
      CompanyCRMID: string | null;
      /**
       * Company Name
       * @default null
       */
      CompanyName: string | null;
      /**
       * Contacts
       * @default null
       */
      Contacts: {
          /**
           * Email
           * @description Contact email
           * @default null
           */
          Email: string | null;
          /**
           * First Name
           * @description Contact first name
           * @default null
           */
          FirstName: string | null;
          /**
           * Link
           * @description Link to proposal cover for contact
           * @default null
           */
          Link: string | null;
          /**
           * Surname
           * @description Contact surname
           * @default null
           */
          Surname: string | null;
      }[] | null;
      /**
       * Cover Id
       * @default null
       */
      CoverID: string | null;
      /**
       * Currency Code
       * @default null
       */
      CurrencyCode: string | null;
      /**
       * Currency Name
       * @default null
       */
      CurrencyName: string | null;
      /**
       * Currency Symbol
       * @default null
       */
      CurrencySymbol: string | null;
      /**
       * Date Created
       * @default null
       */
      DateCreated: string | null;
      /**
       * Description
       * @default null
       */
      Description: string | null;
      /**
       * Id
       * @default null
       */
      ID: string | null;
      /**
       * Monthly Total
       * @default null
       */
      MonthlyTotal: string | null;
      /**
       * One Off Total
       * @default null
       */
      OneOffTotal: string | null;
      /**
       * Preview
       * @default null
       */
      Preview: string | null;
      /**
       * Price Tables
       * @default null
       */
      PriceTables: {
          /**
           * Date Created
           * @default null
           */
          DateCreated: string | null;
          /**
           * Display Order
           * @default null
           */
          DisplayOrder: number | null;
          /**
           * Force Client Choice
           * @default null
           */
          ForceClientChoice: boolean | null;
          /**
           * Id
           * @default null
           */
          ID: string | null;
          /**
           * Items
           * @default null
           */
          Items: {
              /**
               * Can Client Set Quantity
               * @default null
               */
              CanClientSetQuantity: boolean | null;
              /**
               * Cost
               * @default null
               */
              Cost: string | null;
              /**
               * Date
               * @default null
               */
              Date: string | null;
              /**
               * Description
               * @default null
               */
              Description: string | null;
              /**
               * Discount
               * @default null
               */
              Discount: boolean | null;
              /**
               * Discount Amount
               * @default null
               */
              DiscountAmount: string | null;
              /**
               * Discount Type
               * @default null
               */
              DiscountType: boolean | null;
              /**
               * Display Order
               * @default null
               */
              DisplayOrder: number | null;
              /**
               * Id
               * @default null
               */
              ID: string | null;
              /**
               * Label
               * @default null
               */
              Label: string | null;
              /**
               * Monthly Cost
               * @default null
               */
              MonthlyCost: string | null;
              /**
               * Optional
               * @description Whether the item is optional
               * @default null
               */
              Optional: boolean | null;
              /**
               * Price Type
               * @default null
               */
              PriceType: string | null;
              /**
               * Quantity
               * @default null
               */
              Quantity: number | null;
              /**
               * Quantity Max
               * @default null
               */
              QuantityMax: number | null;
              /**
               * Quantity Min
               * @default null
               */
              QuantityMin: number | null;
              /**
               * Recurring Type
               * @default null
               */
              RecurringType: string | null;
              /**
               * Selectable
               * @default null
               */
              Selectable: boolean | null;
              /**
               * Selected
               * @default null
               */
              Selected: boolean | null;
              /**
               * Show Quantity
               * @default null
               */
              ShowQuantity: boolean | null;
              /**
               * Table Discount
               * @default null
               */
              TableDiscount: boolean | null;
              /**
               * Table Discount Amount
               * @default null
               */
              TableDiscountAmount: string | null;
              /**
               * Table Discount Type
               * @default null
               */
              TableDiscountType: boolean | null;
              /**
               * Tax Exemption Status
               * @default null
               */
              TaxExemptionStatus: boolean | null;
              /**
               * Unit Cost
               * @default null
               */
              UnitCost: string | null;
              /**
               * Is Quantity Limited
               * @default null
               */
              isQuantityLimited: boolean | null;
          }[] | null;
          /**
           * Show
           * @default null
           */
          Show: boolean | null;
          /**
           * Title
           * @default null
           */
          Title: string | null;
      }[] | null;
      /**
       * Proposal View
       * @default null
       */
      ProposalView: string | null;
      /**
       * Quarterly Total
       * @default null
       */
      QuarterlyTotal: string | null;
      /**
       * Quote Id
       * @default null
       */
      QuoteID: string | null;
      /**
       * Tax Name
       * @default null
       */
      TaxName: string | null;
      /**
       * Tax Percentage
       * @default null
       */
      TaxPercentage: string | null;
      /**
       * Type Id
       * @default null
       */
      TypeID: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API call status
   * @enum {string}
   */
  status?: "success" | "error";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_OPENED_PROPOSALS tool input.
 */
type BETTER_PROPOSALS_GET_OPENED_PROPOSALS_INPUT = {
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of proposals per page, must be >= 1
   * @default 10
   */
  per_page: number;
  /**
   * Type
   * @description DocumentTypeID to filter proposals
   * @default null
   */
  type: number | null;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_OPENED_PROPOSALS tool output.
 */
type BETTER_PROPOSALS_GET_OPENED_PROPOSALS_OUTPUT = {
  /**
   * Data
   * @description List of opened proposals
   */
  data?: {
      /**
       * Annual Total
       * @description Annual total amount
       * @default null
       */
      AnnualTotal: string | null;
      /**
       * Brand Id
       * @description Brand used for proposal
       * @default null
       */
      BrandID: string | null;
      /**
       * Crm Opportunity Id
       * @description CRM opportunity ID
       * @default null
       */
      CRMOpportunityID: string | null;
      /**
       * Company Crmid
       * @description CRM ID of the company
       * @default null
       */
      CompanyCRMID: string | null;
      /**
       * Company Name
       * @description Name of the company
       * @default null
       */
      CompanyName: string | null;
      /**
       * Contacts
       * @description Contacts for proposal
       * @default null
       */
      Contacts: {
          /**
           * Email
           * @description Contact email
           * @default null
           */
          Email: string | null;
          /**
           * First Name
           * @description Contact first name
           * @default null
           */
          FirstName: string | null;
          /**
           * Surname
           * @description Contact surname
           * @default null
           */
          Surname: string | null;
      }[] | null;
      /**
       * Cover Id
       * @description Cover ID used for proposal
       * @default null
       */
      CoverID: string | null;
      /**
       * Currency Code
       * @description Currency code
       * @default null
       */
      CurrencyCode: string | null;
      /**
       * Currency Name
       * @description Currency name
       * @default null
       */
      CurrencyName: string | null;
      /**
       * Currency Symbol
       * @description Currency symbol
       * @default null
       */
      CurrencySymbol: string | null;
      /**
       * Date Created
       * @description Creation date of proposal
       * @default null
       */
      DateCreated: string | null;
      /**
       * Description
       * @description Proposal description
       * @default null
       */
      Description: string | null;
      /**
       * Email Message
       * @description Email message sent with proposal
       * @default null
       */
      EmailMessage: string | null;
      /**
       * Id
       * @description Proposal ID
       * @default null
       */
      ID: string | null;
      /**
       * Last Date Sent
       * @description Last send date
       * @default null
       */
      LastDateSent: string | null;
      /**
       * Monthly Total
       * @description Monthly total amount
       * @default null
       */
      MonthlyTotal: string | null;
      /**
       * One Off Total
       * @description One-off total amount
       * @default null
       */
      OneOffTotal: string | null;
      /**
       * Original Date Sent
       * @description Original send date
       * @default null
       */
      OriginalDateSent: string | null;
      /**
       * Preview
       * @description Preview URL of proposal
       * @default null
       */
      Preview: string | null;
      /**
       * Price Tables
       * @description Price tables in proposal
       * @default null
       */
      PriceTables: {
          /**
           * Date Created
           * @description Price table created at
           * @default null
           */
          DateCreated: string | null;
          /**
           * Display Order
           * @description Display order of table
           * @default null
           */
          DisplayOrder: number | null;
          /**
           * Force Client Choice
           * @description Whether client must choose an option
           * @default null
           */
          ForceClientChoice: boolean | null;
          /**
           * Id
           * @description Price table ID
           * @default null
           */
          ID: string | null;
          /**
           * Items
           * @description List of price items
           * @default null
           */
          Items: {
              /**
               * Can Client Set Quantity
               * @description Whether client can set quantity
               * @default null
               */
              CanClientSetQuantity: boolean | null;
              /**
               * Cost
               * @description Total cost
               * @default null
               */
              Cost: string | null;
              /**
               * Date
               * @description Item date
               * @default null
               */
              Date: string | null;
              /**
               * Description
               * @description Price item description
               * @default null
               */
              Description: string | null;
              /**
               * Discount
               * @description Whether discount is applied
               * @default null
               */
              Discount: boolean | null;
              /**
               * Discount Amount
               * @description Discount amount
               * @default null
               */
              DiscountAmount: string | null;
              /**
               * Discount Type
               * @description Type of discount applied
               * @default null
               */
              DiscountType: boolean | null;
              /**
               * Display Order
               * @description Display order of item
               * @default null
               */
              DisplayOrder: number | null;
              /**
               * Id
               * @description Price item ID
               * @default null
               */
              ID: string | null;
              /**
               * Label
               * @description Price item label
               * @default null
               */
              Label: string | null;
              /**
               * Monthly Cost
               * @description Monthly cost if recurring
               * @default null
               */
              MonthlyCost: string | null;
              /**
               * Optional
               * @description Whether item is optional
               * @default null
               */
              Optional: boolean | null;
              /**
               * Price Type
               * @description Price type
               * @default null
               */
              PriceType: string | null;
              /**
               * Quantity
               * @description Quantity
               * @default null
               */
              Quantity: number | null;
              /**
               * Quantity Max
               * @description Maximum quantity if limited
               * @default null
               */
              QuantityMax: number | null;
              /**
               * Quantity Min
               * @description Minimum quantity if limited
               * @default null
               */
              QuantityMin: number | null;
              /**
               * Recurring Type
               * @description Recurring type if any
               * @default null
               */
              RecurringType: string | null;
              /**
               * Selectable
               * @description Whether item is selectable by client
               * @default null
               */
              Selectable: boolean | null;
              /**
               * Selected
               * @description Whether item is selected
               * @default null
               */
              Selected: boolean | null;
              /**
               * Show Quantity
               * @description Whether to show quantity
               * @default null
               */
              ShowQuantity: boolean | null;
              /**
               * Table Discount
               * @description Whether table discount applied
               * @default null
               */
              TableDiscount: boolean | null;
              /**
               * Table Discount Amount
               * @description Table discount amount
               * @default null
               */
              TableDiscountAmount: string | null;
              /**
               * Table Discount Type
               * @description Type of table discount
               * @default null
               */
              TableDiscountType: boolean | null;
              /**
               * Tax Exemption Status
               * @description Tax exemption status
               * @default null
               */
              TaxExemptionStatus: boolean | null;
              /**
               * Unit Cost
               * @description Unit cost
               * @default null
               */
              UnitCost: string | null;
              /**
               * Is Quantity Limited
               * @description Whether quantity is limited
               * @default null
               */
              isQuantityLimited: boolean | null;
          }[] | null;
          /**
           * Show
           * @description Whether to show table
           * @default null
           */
          Show: boolean | null;
          /**
           * Title
           * @description Price table title
           * @default null
           */
          Title: string | null;
      }[] | null;
      /**
       * Proposal Opened
       * @description Timestamp when opened
       * @default null
       */
      ProposalOpened: string | null;
      /**
       * Proposal View
       * @description View URL of proposal
       * @default null
       */
      ProposalView: string | null;
      /**
       * Quarterly Total
       * @description Quarterly total amount
       * @default null
       */
      QuarterlyTotal: string | null;
      /**
       * Quote Id
       * @description Quote ID associated
       * @default null
       */
      QuoteID: string | null;
      /**
       * Subject Line
       * @description Subject line of the proposal
       * @default null
       */
      SubjectLine: string | null;
      /**
       * Tax Percentage
       * @description Tax percentage applied
       * @default null
       */
      TaxPercentage: string | null;
      /**
       * Type Id
       * @description Document type ID
       * @default null
       */
      TypeID: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API call status
   * @enum {string}
   */
  status?: "success" | "error";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_PAID_PROPOSALS tool input.
 */
type BETTER_PROPOSALS_GET_PAID_PROPOSALS_INPUT = {
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of paid proposals per page, must be >= 1
   * @default 10
   */
  per_page: number;
  /**
   * Type
   * @description Document Type ID to filter paid proposals
   * @default null
   */
  type: number | null;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_PAID_PROPOSALS tool output.
 */
type BETTER_PROPOSALS_GET_PAID_PROPOSALS_OUTPUT = {
  /**
   * Data
   * @description List of paid proposals
   */
  data?: {
      /**
       * Annual Total
       * @default null
       */
      AnnualTotal: string | null;
      /**
       * Brand Id
       * @default null
       */
      BrandID: string | null;
      /**
       * Crm Opportunity Id
       * @default null
       */
      CRMOpportunityID: string | null;
      /**
       * Company Crmid
       * @default null
       */
      CompanyCRMID: string | null;
      /**
       * Company Name
       * @default null
       */
      CompanyName: string | null;
      /**
       * Contacts
       * @default null
       */
      Contacts: {
          /**
           * Email
           * @description Contact email
           * @default null
           */
          Email: string | null;
          /**
           * First Name
           * @description Contact first name
           * @default null
           */
          FirstName: string | null;
          /**
           * Link
           * @description Link to proposal cover for contact
           * @default null
           */
          Link: string | null;
          /**
           * Surname
           * @description Contact surname
           * @default null
           */
          Surname: string | null;
      }[] | null;
      /**
       * Cover Id
       * @default null
       */
      CoverID: string | null;
      /**
       * Currency Code
       * @default null
       */
      CurrencyCode: string | null;
      /**
       * Currency Name
       * @default null
       */
      CurrencyName: string | null;
      /**
       * Currency Symbol
       * @default null
       */
      CurrencySymbol: string | null;
      /**
       * Date Created
       * @default null
       */
      DateCreated: string | null;
      /**
       * Date Paid
       * @default null
       */
      DatePaid: string | null;
      /**
       * Date Signed
       * @default null
       */
      DateSigned: string | null;
      /**
       * Description
       * @default null
       */
      Description: string | null;
      /**
       * Email Message
       * @default null
       */
      EmailMessage: string | null;
      /**
       * Id
       * @default null
       */
      ID: string | null;
      /**
       * Last Date Sent
       * @default null
       */
      LastDateSent: string | null;
      /**
       * Monthly Total
       * @default null
       */
      MonthlyTotal: string | null;
      /**
       * One Off Total
       * @default null
       */
      OneOffTotal: string | null;
      /**
       * Original Date Sent
       * @default null
       */
      OriginalDateSent: string | null;
      /**
       * Paid Amount
       * @default null
       */
      PaidAmount: string | null;
      /**
       * Preview
       * @default null
       */
      Preview: string | null;
      /**
       * Price Tables
       * @default null
       */
      PriceTables: {
          /**
           * Date Created
           * @default null
           */
          DateCreated: string | null;
          /**
           * Display Order
           * @default null
           */
          DisplayOrder: number | null;
          /**
           * Force Client Choice
           * @default null
           */
          ForceClientChoice: boolean | null;
          /**
           * Id
           * @default null
           */
          ID: string | null;
          /**
           * Items
           * @default null
           */
          Items: {
              /**
               * Can Client Set Quantity
               * @default null
               */
              CanClientSetQuantity: boolean | null;
              /**
               * Cost
               * @default null
               */
              Cost: string | null;
              /**
               * Date
               * @default null
               */
              Date: string | null;
              /**
               * Description
               * @default null
               */
              Description: string | null;
              /**
               * Discount
               * @default null
               */
              Discount: boolean | null;
              /**
               * Discount Amount
               * @default null
               */
              DiscountAmount: string | null;
              /**
               * Discount Type
               * @default null
               */
              DiscountType: boolean | null;
              /**
               * Display Order
               * @default null
               */
              DisplayOrder: number | null;
              /**
               * Id
               * @default null
               */
              ID: string | null;
              /**
               * Label
               * @default null
               */
              Label: string | null;
              /**
               * Monthly Cost
               * @default null
               */
              MonthlyCost: string | null;
              /**
               * Optional
               * @description Whether the item is optional
               * @default null
               */
              Optional: boolean | null;
              /**
               * Price Type
               * @default null
               */
              PriceType: string | null;
              /**
               * Quantity
               * @default null
               */
              Quantity: number | null;
              /**
               * Quantity Max
               * @default null
               */
              QuantityMax: number | null;
              /**
               * Quantity Min
               * @default null
               */
              QuantityMin: number | null;
              /**
               * Recurring Type
               * @default null
               */
              RecurringType: string | null;
              /**
               * Selectable
               * @default null
               */
              Selectable: boolean | null;
              /**
               * Selected
               * @default null
               */
              Selected: boolean | null;
              /**
               * Show Quantity
               * @default null
               */
              ShowQuantity: boolean | null;
              /**
               * Table Discount
               * @default null
               */
              TableDiscount: boolean | null;
              /**
               * Table Discount Amount
               * @default null
               */
              TableDiscountAmount: string | null;
              /**
               * Table Discount Type
               * @default null
               */
              TableDiscountType: boolean | null;
              /**
               * Tax Exemption Status
               * @default null
               */
              TaxExemptionStatus: boolean | null;
              /**
               * Unit Cost
               * @default null
               */
              UnitCost: string | null;
              /**
               * Is Quantity Limited
               * @default null
               */
              isQuantityLimited: boolean | null;
          }[] | null;
          /**
           * Show
           * @default null
           */
          Show: boolean | null;
          /**
           * Title
           * @default null
           */
          Title: string | null;
      }[] | null;
      /**
       * Proposal View
       * @default null
       */
      ProposalView: string | null;
      /**
       * Quarterly Total
       * @default null
       */
      QuarterlyTotal: string | null;
      /**
       * Quote Id
       * @default null
       */
      QuoteID: string | null;
      /**
       * Signed Email
       * @default null
       */
      SignedEmail: string | null;
      /**
       * Signed First Name
       * @default null
       */
      SignedFirstName: string | null;
      /**
       * Signed Signature
       * @default null
       */
      SignedSignature: string | null;
      /**
       * Signed Surname
       * @default null
       */
      SignedSurname: string | null;
      /**
       * Subject Line
       * @default null
       */
      SubjectLine: string | null;
      /**
       * Tax Name
       * @default null
       */
      TaxName: string | null;
      /**
       * Tax Percentage
       * @default null
       */
      TaxPercentage: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API call status
   * @enum {string}
   */
  status?: "success" | "error";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_PROPOSAL_COUNT tool input.
 */
type BETTER_PROPOSALS_GET_PROPOSAL_COUNT_INPUT = object;

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_PROPOSAL_COUNT tool output.
 */
type BETTER_PROPOSALS_GET_PROPOSAL_COUNT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Count
       * @description Total number of proposals.
       */
      count: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_QUOTE tool input.
 */
type BETTER_PROPOSALS_GET_QUOTE_INPUT = {
  /**
   * Quote Id
   * @description The unique identifier of the quote to retrieve.
   */
  quote_id?: string;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_QUOTE tool output.
 */
type BETTER_PROPOSALS_GET_QUOTE_OUTPUT = {
  /**
   * Data
   * @description Detailed quote data
   */
  data?: {
      /**
       * Account Id
       * @description Account ID
       */
      AccountID: string;
      /**
       * Annual Amount
       * @description Annual amount, if any
       * @default null
       */
      AnnualAmount: string | null;
      /**
       * Archived
       * @description Archived flag
       */
      Archived: string;
      /**
       * Archived By
       * @description ID of user who archived quote
       * @default null
       */
      ArchivedBy: string | null;
      /**
       * Company Id
       * @description Company ID
       */
      CompanyID: string;
      /**
       * Created By
       * @description ID of user who created the quote
       */
      CreatedBy: string;
      /**
       * Date Accepted
       * @description Datetime when quote was accepted
       * @default null
       */
      DateAccepted: string | null;
      /**
       * Date Archived
       * @description Datetime when quote was archived
       * @default null
       */
      DateArchived: string | null;
      /**
       * Date Completed
       * @description Datetime when quote was completed
       * @default null
       */
      DateCompleted: string | null;
      /**
       * Date Created
       * @description Datetime when quote was created
       */
      DateCreated: string;
      /**
       * Date Deleted
       * @description Datetime when quote was deleted
       * @default null
       */
      DateDeleted: string | null;
      /**
       * Date Edited
       * @description Datetime when quote was last edited
       * @default null
       */
      DateEdited: string | null;
      /**
       * Date Marked Dead
       * @description Datetime when quote was marked dead
       * @default null
       */
      DateMarkedDead: string | null;
      /**
       * Deleted
       * @description Deleted flag
       */
      Deleted: string;
      /**
       * Deleted By
       * @description ID of user who deleted quote
       * @default null
       */
      DeletedBy: string | null;
      /**
       * Edited By
       * @description ID of user who last edited quote
       * @default null
       */
      EditedBy: string | null;
      /**
       * Id
       * @description Quote ID
       */
      ID: string;
      /**
       * Mark Dead
       * @description Mark dead flag
       */
      MarkDead: string;
      /**
       * Marked Dead By
       * @description ID of user who marked quote dead
       * @default null
       */
      MarkedDeadBy: string | null;
      /**
       * Monthly Amount
       * @description Monthly amount
       * @default null
       */
      MonthlyAmount: string | null;
      /**
       * Quarterly Amount
       * @description Quarterly amount, if any
       * @default null
       */
      QuarterlyAmount: string | null;
      /**
       * Quote Amount
       * @description Total quote amount
       * @default null
       */
      QuoteAmount: string | null;
      /**
       * Quote Total
       * @description Total quote including VAT
       * @default null
       */
      QuoteTotal: string | null;
      /**
       * Status
       * @description Status of the quote
       */
      Status: string;
      /**
       * Vat Amount
       * @description VAT amount
       * @default null
       */
      VatAmount: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Response status, either 'success' or 'error'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_SENT_PROPOSALS tool input.
 */
type BETTER_PROPOSALS_GET_SENT_PROPOSALS_INPUT = {
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of proposals per page, must be >= 1
   * @default 10
   */
  per_page: number;
  /**
   * Type
   * @description Document Type ID to filter proposals
   * @default null
   */
  type: number | null;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_SENT_PROPOSALS tool output.
 */
type BETTER_PROPOSALS_GET_SENT_PROPOSALS_OUTPUT = {
  /**
   * Data
   * @description List of sent proposals
   */
  data?: {
      /**
       * Annual Total
       * @default null
       */
      AnnualTotal: string | null;
      /**
       * Brand Id
       * @default null
       */
      BrandID: string | null;
      /**
       * Crm Opportunity Id
       * @default null
       */
      CRMOpportunityID: string | null;
      /**
       * Company Crmid
       * @default null
       */
      CompanyCRMID: string | null;
      /**
       * Company Name
       * @default null
       */
      CompanyName: string | null;
      /**
       * Contacts
       * @default null
       */
      Contacts: {
          /**
           * Email
           * @description Contact email
           * @default null
           */
          Email: string | null;
          /**
           * First Name
           * @description Contact first name
           * @default null
           */
          FirstName: string | null;
          /**
           * Last Date Sent
           * @description Timestamp when this contact was last sent the proposal
           * @default null
           */
          LastDateSent: string | null;
          /**
           * Link
           * @description Link to proposal cover for contact
           * @default null
           */
          Link: string | null;
          /**
           * Surname
           * @description Contact surname
           * @default null
           */
          Surname: string | null;
      }[] | null;
      /**
       * Cover Id
       * @default null
       */
      CoverID: string | null;
      /**
       * Currency Code
       * @default null
       */
      CurrencyCode: string | null;
      /**
       * Currency Name
       * @default null
       */
      CurrencyName: string | null;
      /**
       * Currency Symbol
       * @default null
       */
      CurrencySymbol: string | null;
      /**
       * Date Created
       * @default null
       */
      DateCreated: string | null;
      /**
       * Description
       * @default null
       */
      Description: string | null;
      /**
       * Email Message
       * @default null
       */
      EmailMessage: string | null;
      /**
       * Id
       * @default null
       */
      ID: string | null;
      /**
       * Monthly Total
       * @default null
       */
      MonthlyTotal: string | null;
      /**
       * One Off Total
       * @default null
       */
      OneOffTotal: string | null;
      /**
       * Original Date Sent
       * @default null
       */
      OriginalDateSent: string | null;
      /**
       * Preview
       * @default null
       */
      Preview: string | null;
      /**
       * Price Tables
       * @default null
       */
      PriceTables: {
          /**
           * Date Created
           * @default null
           */
          DateCreated: string | null;
          /**
           * Display Order
           * @default null
           */
          DisplayOrder: number | null;
          /**
           * Force Client Choice
           * @default null
           */
          ForceClientChoice: boolean | null;
          /**
           * Id
           * @default null
           */
          ID: string | null;
          /**
           * Items
           * @default null
           */
          Items: {
              /**
               * Can Client Set Quantity
               * @default null
               */
              CanClientSetQuantity: boolean | null;
              /**
               * Cost
               * @default null
               */
              Cost: string | null;
              /**
               * Date
               * @default null
               */
              Date: string | null;
              /**
               * Description
               * @default null
               */
              Description: string | null;
              /**
               * Discount
               * @default null
               */
              Discount: boolean | null;
              /**
               * Discount Amount
               * @default null
               */
              DiscountAmount: string | null;
              /**
               * Discount Type
               * @default null
               */
              DiscountType: boolean | null;
              /**
               * Display Order
               * @default null
               */
              DisplayOrder: number | null;
              /**
               * Id
               * @default null
               */
              ID: string | null;
              /**
               * Label
               * @default null
               */
              Label: string | null;
              /**
               * Monthly Cost
               * @default null
               */
              MonthlyCost: string | null;
              /**
               * Optional
               * @description Whether the item is optional
               * @default null
               */
              Optional: boolean | null;
              /**
               * Price Type
               * @default null
               */
              PriceType: string | null;
              /**
               * Quantity
               * @default null
               */
              Quantity: number | null;
              /**
               * Quantity Max
               * @default null
               */
              QuantityMax: number | null;
              /**
               * Quantity Min
               * @default null
               */
              QuantityMin: number | null;
              /**
               * Recurring Type
               * @default null
               */
              RecurringType: string | null;
              /**
               * Selectable
               * @default null
               */
              Selectable: boolean | null;
              /**
               * Selected
               * @default null
               */
              Selected: boolean | null;
              /**
               * Show Quantity
               * @default null
               */
              ShowQuantity: boolean | null;
              /**
               * Table Discount
               * @default null
               */
              TableDiscount: boolean | null;
              /**
               * Table Discount Amount
               * @default null
               */
              TableDiscountAmount: string | null;
              /**
               * Table Discount Type
               * @default null
               */
              TableDiscountType: boolean | null;
              /**
               * Tax Exemption Status
               * @default null
               */
              TaxExemptionStatus: boolean | null;
              /**
               * Unit Cost
               * @default null
               */
              UnitCost: string | null;
              /**
               * Is Quantity Limited
               * @default null
               */
              isQuantityLimited: boolean | null;
          }[] | null;
          /**
           * Show
           * @default null
           */
          Show: boolean | null;
          /**
           * Title
           * @default null
           */
          Title: string | null;
      }[] | null;
      /**
       * Proposal View
       * @default null
       */
      ProposalView: string | null;
      /**
       * Quarterly Total
       * @default null
       */
      QuarterlyTotal: string | null;
      /**
       * Quote Id
       * @default null
       */
      QuoteID: string | null;
      /**
       * Subject Line
       * @default null
       */
      SubjectLine: string | null;
      /**
       * Tax Added
       * @default null
       */
      TaxAdded: string | null;
      /**
       * Tax Name
       * @default null
       */
      TaxName: string | null;
      /**
       * Tax Percentage
       * @default null
       */
      TaxPercentage: string | null;
      /**
       * Type Id
       * @default null
       */
      TypeID: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API call status
   * @enum {string}
   */
  status?: "success" | "error";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_SETTINGS tool input.
 */
type BETTER_PROPOSALS_GET_SETTINGS_INPUT = object;

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_SETTINGS tool output.
 */
type BETTER_PROPOSALS_GET_SETTINGS_OUTPUT = {
  /**
   * Data
   * @description Account settings data object
   */
  data?: {
      /**
       * Account Id
       * @description Account ID associated with the settings
       */
      AccountID: string;
      /**
       * Currency Id
       * @description Default currency ID for the account
       */
      CurrencyID: string;
      /**
       * Customer Journeys Active
       * @description Flag indicating if customer journeys are active (1 or 0)
       * @default null
       */
      CustomerJourneysActive: string | null;
      /**
       * Customer Journeys Default
       * @description Default customer journeys ID
       * @default null
       */
      CustomerJourneysDefault: string | null;
      /**
       * Date Edited
       * @description Datetime when the settings were last edited
       * @default null
       */
      DateEdited: string | null;
      /**
       * Edited By
       * @description User ID who last edited the settings
       * @default null
       */
      EditedBy: string | null;
      /**
       * Id
       * @description Settings ID
       */
      ID: string;
      /**
       * Tax
       * @description Flag indicating if tax is enabled (1) or disabled (0)
       */
      Tax: string;
      /**
       * Tax Amount
       * @description Default tax amount as decimal string
       * @default null
       */
      TaxAmount: string | null;
      /**
       * Tax Label
       * @description Label for the default tax, e.g. VAT
       * @default null
       */
      TaxLabel: string | null;
      /**
       * Time Zone
       * @description Account timezone in IANA format, e.g. Europe/London
       */
      TimeZone: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Message
   * @description Error message if status is error
   * @default null
   */
  message: string | null;
  /**
   * Status
   * @description Response status: success or error
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_SIGNED_PROPOSALS tool input.
 */
type BETTER_PROPOSALS_GET_SIGNED_PROPOSALS_INPUT = {
  /**
   * Page
   * @description Page number for pagination, must be >= 1
   * @default 1
   */
  page: number;
  /**
   * Per Page
   * @description Number of signed proposals per page, must be >= 1
   * @default 10
   */
  per_page: number;
  /**
   * Type
   * @description Document Type ID to filter signed proposals
   * @default null
   */
  type: number | null;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_SIGNED_PROPOSALS tool output.
 */
type BETTER_PROPOSALS_GET_SIGNED_PROPOSALS_OUTPUT = {
  /**
   * Data
   * @description List of signed proposals
   */
  data?: {
      /**
       * Annual Total
       * @default null
       */
      AnnualTotal: string | null;
      /**
       * Brand Id
       * @default null
       */
      BrandID: string | null;
      /**
       * Crm Opportunity Id
       * @default null
       */
      CRMOpportunityID: string | null;
      /**
       * Company Crmid
       * @default null
       */
      CompanyCRMID: string | null;
      /**
       * Company Name
       * @default null
       */
      CompanyName: string | null;
      /**
       * Contacts
       * @default null
       */
      Contacts: {
          /**
           * Email
           * @description Contact email
           * @default null
           */
          Email: string | null;
          /**
           * First Name
           * @description Contact first name
           * @default null
           */
          FirstName: string | null;
          /**
           * Link
           * @description Link to proposal cover for contact
           * @default null
           */
          Link: string | null;
          /**
           * Surname
           * @description Contact surname
           * @default null
           */
          Surname: string | null;
      }[] | null;
      /**
       * Cover Id
       * @default null
       */
      CoverID: string | null;
      /**
       * Currency Code
       * @default null
       */
      CurrencyCode: string | null;
      /**
       * Currency Name
       * @default null
       */
      CurrencyName: string | null;
      /**
       * Currency Symbol
       * @default null
       */
      CurrencySymbol: string | null;
      /**
       * Date Created
       * @default null
       */
      DateCreated: string | null;
      /**
       * Date Signed
       * @default null
       */
      DateSigned: string | null;
      /**
       * Description
       * @default null
       */
      Description: string | null;
      /**
       * Email Message
       * @default null
       */
      EmailMessage: string | null;
      /**
       * Id
       * @default null
       */
      ID: string | null;
      /**
       * Last Date Sent
       * @default null
       */
      LastDateSent: string | null;
      /**
       * Monthly Total
       * @default null
       */
      MonthlyTotal: string | null;
      /**
       * One Off Total
       * @default null
       */
      OneOffTotal: string | null;
      /**
       * Original Date Sent
       * @default null
       */
      OriginalDateSent: string | null;
      /**
       * Preview
       * @default null
       */
      Preview: string | null;
      /**
       * Price Tables
       * @default null
       */
      PriceTables: {
          /**
           * Date Created
           * @default null
           */
          DateCreated: string | null;
          /**
           * Display Order
           * @default null
           */
          DisplayOrder: number | null;
          /**
           * Force Client Choice
           * @default null
           */
          ForceClientChoice: boolean | null;
          /**
           * Id
           * @default null
           */
          ID: string | null;
          /**
           * Items
           * @default null
           */
          Items: {
              /**
               * Can Client Set Quantity
               * @default null
               */
              CanClientSetQuantity: boolean | null;
              /**
               * Cost
               * @default null
               */
              Cost: string | null;
              /**
               * Date
               * @default null
               */
              Date: string | null;
              /**
               * Description
               * @default null
               */
              Description: string | null;
              /**
               * Discount
               * @default null
               */
              Discount: boolean | null;
              /**
               * Discount Amount
               * @default null
               */
              DiscountAmount: string | null;
              /**
               * Discount Type
               * @default null
               */
              DiscountType: boolean | null;
              /**
               * Display Order
               * @default null
               */
              DisplayOrder: number | null;
              /**
               * Id
               * @default null
               */
              ID: string | null;
              /**
               * Label
               * @default null
               */
              Label: string | null;
              /**
               * Monthly Cost
               * @default null
               */
              MonthlyCost: string | null;
              /**
               * Optional
               * @description Whether the item is optional
               * @default null
               */
              Optional: boolean | null;
              /**
               * Price Type
               * @default null
               */
              PriceType: string | null;
              /**
               * Quantity
               * @default null
               */
              Quantity: number | null;
              /**
               * Quantity Min
               * @default null
               */
              QuantityMin: number | null;
              /**
               * Recurring Type
               * @default null
               */
              RecurringType: string | null;
              /**
               * Selectable
               * @default null
               */
              Selectable: boolean | null;
              /**
               * Selected
               * @default null
               */
              Selected: boolean | null;
              /**
               * Show Quantity
               * @default null
               */
              ShowQuantity: boolean | null;
              /**
               * Table Discount
               * @default null
               */
              TableDiscount: boolean | null;
              /**
               * Table Discount Amount
               * @default null
               */
              TableDiscountAmount: string | null;
              /**
               * Table Discount Type
               * @default null
               */
              TableDiscountType: boolean | null;
              /**
               * Tax Exemption Status
               * @default null
               */
              TaxExemptionStatus: boolean | null;
              /**
               * Unit Cost
               * @default null
               */
              UnitCost: string | null;
              /**
               * Is Quantity Limited
               * @default null
               */
              isQuantityLimited: boolean | null;
          }[] | null;
          /**
           * Show
           * @default null
           */
          Show: boolean | null;
          /**
           * Title
           * @default null
           */
          Title: string | null;
      }[] | null;
      /**
       * Proposal View
       * @default null
       */
      ProposalView: string | null;
      /**
       * Quarterly Total
       * @default null
       */
      QuarterlyTotal: string | null;
      /**
       * Quote Id
       * @default null
       */
      QuoteID: string | null;
      /**
       * Signed Email
       * @default null
       */
      SignedEmail: string | null;
      /**
       * Signed First Name
       * @default null
       */
      SignedFirstName: string | null;
      /**
       * Signed Signature
       * @default null
       */
      SignedSignature: string | null;
      /**
       * Signed Surname
       * @default null
       */
      SignedSurname: string | null;
      /**
       * Subject Line
       * @default null
       */
      SubjectLine: string | null;
      /**
       * Tax Name
       * @default null
       */
      TaxName: string | null;
      /**
       * Tax Percentage
       * @default null
       */
      TaxPercentage: string | null;
      /**
       * Type Id
       * @default null
       */
      TypeID: string | null;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description API call status
   * @enum {string}
   */
  status?: "success" | "error";
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_TEMPLATE tool input.
 */
type BETTER_PROPOSALS_GET_TEMPLATE_INPUT = {
  /**
   * Template Id
   * @description The unique identifier of the template to retrieve
   */
  template_id?: string;
};

/**
 * Type of BETTER_PROPOSALS's BETTER_PROPOSALS_GET_TEMPLATE tool output.
 */
type BETTER_PROPOSALS_GET_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Template details returned by the API
   */
  data?: {
      /**
       * Account Id
       * @description Account ID associated with the template
       */
      AccountID: string;
      /**
       * Annual Amount
       * @description Default annual amount if set
       * @default null
       */
      AnnualAmount: string | null;
      /**
       * Brand Id
       * @description Brand ID for the template
       */
      BrandID: string;
      /**
       * Category Id
       * @description Category ID for this template
       * @default null
       */
      CategoryID: string | null;
      /**
       * Cover Id
       * @description Cover ID associated with this template
       * @default null
       */
      CoverID: string | null;
      /**
       * Created By
       * @description User ID who created this template
       */
      CreatedBy: string;
      /**
       * Date Created
       * @description Timestamp when this template was created
       */
      DateCreated: string;
      /**
       * Date Edited
       * @description Last edited timestamp
       */
      DateEdited: string;
      /**
       * Default
       * @description 1 if this is the default template, 0 otherwise
       */
      Default: string;
      /**
       * Deleted
       * @description 1 if this template has been deleted, 0 otherwise
       */
      Deleted: string;
      /**
       * Description
       * @description Optional description of the template
       * @default null
       */
      Description: string | null;
      /**
       * Edited By
       * @description User ID who last edited this template
       */
      EditedBy: string;
      /**
       * From Marketplace
       * @description 1 if sourced from the marketplace, 0 otherwise
       */
      FromMarketplace: string;
      /**
       * Id
       * @description Unique template ID
       */
      ID: string;
      /**
       * Industry Id
       * @description Industry ID assigned to this template
       * @default null
       */
      IndustryID: string | null;
      /**
       * Monthly Amount
       * @description Default monthly amount if set
       * @default null
       */
      MonthlyAmount: string | null;
      /**
       * Quarterly Amount
       * @description Default quarterly amount if set
       * @default null
       */
      QuarterlyAmount: string | null;
      /**
       * Quote Amount
       * @description Default quote amount if set
       * @default null
       */
      QuoteAmount: string | null;
      /**
       * Sample Template
       * @description 1 if this is a sample template, 0 otherwise
       */
      SampleTemplate: string;
      /**
       * Template Name
       * @description Name of the template
       */
      TemplateName: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Status
   * @description Response status: 'success' or 'error'
   */
  status?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "BETTER_PROPOSALS".
 */
export type BETTER_PROPOSALS_TOOL_INPUTS = {
  BETTER_PROPOSALS_GET_ALL_DOCUMENT_TYPES: BETTER_PROPOSALS_BETTER_PROPOSALS_GET_ALL_DOCUMENT_TYPES_INPUT
  CREATE_COMPANY: BETTER_PROPOSALS_CREATE_COMPANY_INPUT
  CREATE_DOCUMENT_TYPE: BETTER_PROPOSALS_CREATE_DOCUMENT_TYPE_INPUT
  CREATE_PROPOSAL_COVER: BETTER_PROPOSALS_CREATE_PROPOSAL_COVER_INPUT
  GET_ALL_COMPANIES: BETTER_PROPOSALS_GET_ALL_COMPANIES_INPUT
  GET_ALL_CURRENCIES: BETTER_PROPOSALS_GET_ALL_CURRENCIES_INPUT
  GET_ALL_DOCUMENT_TYPES: BETTER_PROPOSALS_GET_ALL_DOCUMENT_TYPES_INPUT
  GET_ALL_PROPOSALS: BETTER_PROPOSALS_GET_ALL_PROPOSALS_INPUT
  GET_ALL_QUOTES: BETTER_PROPOSALS_GET_ALL_QUOTES_INPUT
  GET_ALL_TEMPLATES: BETTER_PROPOSALS_GET_ALL_TEMPLATES_INPUT
  GET_BRAND_SETTINGS: BETTER_PROPOSALS_GET_BRAND_SETTINGS_INPUT
  GET_COMPANY: BETTER_PROPOSALS_GET_COMPANY_INPUT
  GET_CURRENCY: BETTER_PROPOSALS_GET_CURRENCY_INPUT
  GET_NEW_PROPOSALS: BETTER_PROPOSALS_GET_NEW_PROPOSALS_INPUT
  GET_OPENED_PROPOSALS: BETTER_PROPOSALS_GET_OPENED_PROPOSALS_INPUT
  GET_PAID_PROPOSALS: BETTER_PROPOSALS_GET_PAID_PROPOSALS_INPUT
  GET_PROPOSAL_COUNT: BETTER_PROPOSALS_GET_PROPOSAL_COUNT_INPUT
  GET_QUOTE: BETTER_PROPOSALS_GET_QUOTE_INPUT
  GET_SENT_PROPOSALS: BETTER_PROPOSALS_GET_SENT_PROPOSALS_INPUT
  GET_SETTINGS: BETTER_PROPOSALS_GET_SETTINGS_INPUT
  GET_SIGNED_PROPOSALS: BETTER_PROPOSALS_GET_SIGNED_PROPOSALS_INPUT
  GET_TEMPLATE: BETTER_PROPOSALS_GET_TEMPLATE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BETTER_PROPOSALS".
 */
export type BETTER_PROPOSALS_TOOL_OUTPUTS = {
  BETTER_PROPOSALS_GET_ALL_DOCUMENT_TYPES: BETTER_PROPOSALS_BETTER_PROPOSALS_GET_ALL_DOCUMENT_TYPES_OUTPUT
  CREATE_COMPANY: BETTER_PROPOSALS_CREATE_COMPANY_OUTPUT
  CREATE_DOCUMENT_TYPE: BETTER_PROPOSALS_CREATE_DOCUMENT_TYPE_OUTPUT
  CREATE_PROPOSAL_COVER: BETTER_PROPOSALS_CREATE_PROPOSAL_COVER_OUTPUT
  GET_ALL_COMPANIES: BETTER_PROPOSALS_GET_ALL_COMPANIES_OUTPUT
  GET_ALL_CURRENCIES: BETTER_PROPOSALS_GET_ALL_CURRENCIES_OUTPUT
  GET_ALL_DOCUMENT_TYPES: BETTER_PROPOSALS_GET_ALL_DOCUMENT_TYPES_OUTPUT
  GET_ALL_PROPOSALS: BETTER_PROPOSALS_GET_ALL_PROPOSALS_OUTPUT
  GET_ALL_QUOTES: BETTER_PROPOSALS_GET_ALL_QUOTES_OUTPUT
  GET_ALL_TEMPLATES: BETTER_PROPOSALS_GET_ALL_TEMPLATES_OUTPUT
  GET_BRAND_SETTINGS: BETTER_PROPOSALS_GET_BRAND_SETTINGS_OUTPUT
  GET_COMPANY: BETTER_PROPOSALS_GET_COMPANY_OUTPUT
  GET_CURRENCY: BETTER_PROPOSALS_GET_CURRENCY_OUTPUT
  GET_NEW_PROPOSALS: BETTER_PROPOSALS_GET_NEW_PROPOSALS_OUTPUT
  GET_OPENED_PROPOSALS: BETTER_PROPOSALS_GET_OPENED_PROPOSALS_OUTPUT
  GET_PAID_PROPOSALS: BETTER_PROPOSALS_GET_PAID_PROPOSALS_OUTPUT
  GET_PROPOSAL_COUNT: BETTER_PROPOSALS_GET_PROPOSAL_COUNT_OUTPUT
  GET_QUOTE: BETTER_PROPOSALS_GET_QUOTE_OUTPUT
  GET_SENT_PROPOSALS: BETTER_PROPOSALS_GET_SENT_PROPOSALS_OUTPUT
  GET_SETTINGS: BETTER_PROPOSALS_GET_SETTINGS_OUTPUT
  GET_SIGNED_PROPOSALS: BETTER_PROPOSALS_GET_SIGNED_PROPOSALS_OUTPUT
  GET_TEMPLATE: BETTER_PROPOSALS_GET_TEMPLATE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BETTER_PROPOSALS toolkit.
 */
export const BETTER_PROPOSALS = {
  slug: "better_proposals",
  tools: {
    /**
     * Tool to retrieve a paginated list of all document types. use when you need to display or select a document type id.
     */
    BETTER_PROPOSALS_GET_ALL_DOCUMENT_TYPES: "BETTER_PROPOSALS_BETTER_PROPOSALS_GET_ALL_DOCUMENT_TYPES",
    /**
     * Tool to create a new company. use after confirming the company does not already exist.
     */
    CREATE_COMPANY: "BETTER_PROPOSALS_CREATE_COMPANY",
    /**
     * Tool to create a new document type. use after confirming the desired type name does not already exist.
     */
    CREATE_DOCUMENT_TYPE: "BETTER_PROPOSALS_CREATE_DOCUMENT_TYPE",
    /**
     * Tool to create a new proposal cover design. use when you need a custom cover design before sending out a proposal. use after finalizing cover settings.
     */
    CREATE_PROPOSAL_COVER: "BETTER_PROPOSALS_CREATE_PROPOSAL_COVER",
    /**
     * Tool to retrieve a paginated list of all companies. use when listing available companies for display or selection.
     */
    GET_ALL_COMPANIES: "BETTER_PROPOSALS_GET_ALL_COMPANIES",
    /**
     * Tool to retrieve a paginated list of all currencies. use when listing available currency options before selection.
     */
    GET_ALL_CURRENCIES: "BETTER_PROPOSALS_GET_ALL_CURRENCIES",
    /**
     * Tool to retrieve a paginated list of all document types. use when you need to display or select a document type id.
     */
    GET_ALL_DOCUMENT_TYPES: "BETTER_PROPOSALS_GET_ALL_DOCUMENT_TYPES",
    /**
     * Tool to retrieve a paginated list of all proposals. use when you need to fetch proposals list after validating credentials.
     */
    GET_ALL_PROPOSALS: "BETTER_PROPOSALS_GET_ALL_PROPOSALS",
    /**
     * Tool to retrieve a paginated list of all quotes. use after setting pagination parameters.
     */
    GET_ALL_QUOTES: "BETTER_PROPOSALS_GET_ALL_QUOTES",
    /**
     * Tool to retrieve a paginated list of all templates. use when you need to list available templates for selection.
     */
    GET_ALL_TEMPLATES: "BETTER_PROPOSALS_GET_ALL_TEMPLATES",
    /**
     * Tool to retrieve settings for the default brand. use when you need default-brand configuration (colors, tax, name, etc.) before creating or customizing documents.
     */
    GET_BRAND_SETTINGS: "BETTER_PROPOSALS_GET_BRAND_SETTINGS",
    /**
     * Tool to retrieve details of a specific company. use when you need company metadata by id.
     */
    GET_COMPANY: "BETTER_PROPOSALS_GET_COMPANY",
    /**
     * Tool to retrieve details of a specific currency. use when you need currency metadata by id.
     */
    GET_CURRENCY: "BETTER_PROPOSALS_GET_CURRENCY",
    /**
     * Tool to retrieve all new proposals. use after validating credentials when you need only newly created proposals.
     */
    GET_NEW_PROPOSALS: "BETTER_PROPOSALS_GET_NEW_PROPOSALS",
    /**
     * Tool to retrieve all opened proposals. use when you need proposals that recipients have opened.
     */
    GET_OPENED_PROPOSALS: "BETTER_PROPOSALS_GET_OPENED_PROPOSALS",
    /**
     * Tool to retrieve all paid proposals. use when you need to list proposals that have been paid.
     */
    GET_PAID_PROPOSALS: "BETTER_PROPOSALS_GET_PAID_PROPOSALS",
    /**
     * Tool to retrieve the total count of proposals. use when you need to know how many proposals exist.
     */
    GET_PROPOSAL_COUNT: "BETTER_PROPOSALS_GET_PROPOSAL_COUNT",
    /**
     * Tool to retrieve details of a specific quote. use when you need full quote data by id.
     */
    GET_QUOTE: "BETTER_PROPOSALS_GET_QUOTE",
    /**
     * Tool to retrieve all sent proposals. use after dispatching proposals to clients to list them.
     */
    GET_SENT_PROPOSALS: "BETTER_PROPOSALS_GET_SENT_PROPOSALS",
    /**
     * Tool to retrieve current account settings. use when you need default currency, tax, and timezone configuration before creating proposals.
     */
    GET_SETTINGS: "BETTER_PROPOSALS_GET_SETTINGS",
    /**
     * Tool to retrieve all signed proposals. use when you need to list proposals clients have signed after confirming credentials.
     */
    GET_SIGNED_PROPOSALS: "BETTER_PROPOSALS_GET_SIGNED_PROPOSALS",
    /**
     * Tool to retrieve details of a specific template. use after selecting the template id to fetch metadata.
     */
    GET_TEMPLATE: "BETTER_PROPOSALS_GET_TEMPLATE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BETTER_PROPOSALS".
 */
export type BETTER_PROPOSALS_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BETTER_PROPOSALS".
 */
export type BETTER_PROPOSALS_TRIGGER_EVENTS = {}
