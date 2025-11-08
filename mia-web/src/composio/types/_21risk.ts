// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of _21RISK's _21RISK_GET_COMPLIANCE tool input.
 */
type _21RISK_GET_COMPLIANCE_INPUT = {
  /**
   * $Count
   * @description Whether to include a total count of matching records.
   * @default null
   */
  $count: boolean | null;
  /**
   * $Expand
   * @description Comma-separated list of related entities to expand.
   * @default null
   */
  $expand: string | null;
  /**
   * $Filter
   * @description OData filter expression to narrow results (e.g., 'Rank gt 5').
   * @default null
   */
  $filter: string | null;
  /**
   * $Orderby
   * @description OData orderby clause to sort results (e.g., 'Rank desc').
   * @default null
   */
  $orderby: string | null;
  /**
   * $Select
   * @description Comma-separated list of properties to include in the response (e.g., 'Name,Rank').
   * @default null
   */
  $select: string | null;
  /**
   * $Skip
   * @description Number of records to skip for paging (minimum 0).
   * @default null
   */
  $skip: number | null;
  /**
   * $Skiptoken
   * @description Server-driven pagination token from previous response.
   * @default null
   */
  $skiptoken: string | null;
  /**
   * $Top
   * @description Maximum number of records to return (minimum 1).
   * @default null
   */
  $top: number | null;
  /**
   *  Max Page Size In Mb
   * @description Max size in MB for each request, between 1 and 450 (default is 50).
   * @default null
   */
  _maxPageSizeInMb: number | null;
};

/**
 * Type of _21RISK's _21RISK_GET_COMPLIANCE tool output.
 */
type _21RISK_GET_COMPLIANCE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Count
       * @description Total number of matching records (only present if $count=true).
       * @default null
       */
      "@odata.count": number | null;
      /**
       * @Odata.Next Link
       * @description URL to fetch next page of results.
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description List of compliance items matching the query.
       */
      value: {
          /**
           * Color
           * @description Associated color code for this compliance item.
           * @default null
           */
          Color: string | null;
          /**
           * Name
           * @description Human-readable name of the compliance category.
           */
          Name: string;
          /**
           * Rank
           * @description Numeric rank or order of this compliance item.
           * @default null
           */
          Rank: number | null;
          /**
           *  Key Compliance
           * @description Unique identifier for the compliance record.
           */
          _KeyCompliance: string;
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
 * Type of _21RISK's _21RISK_GET_ITEMS tool input.
 */
type _21RISK_GET_ITEMS_INPUT = {
  /**
   * $Expand
   * @description Navigation properties to expand.
   * @default null
   */
  $expand: string | null;
  /**
   * $Filter
   * @description OData $filter expression, e.g., 'Item Cost gt 100'.
   * @default null
   */
  $filter: string | null;
  /**
   * $Orderby
   * @description Comma-separated ordering of properties, e.g., 'Item Date desc'.
   * @default null
   */
  $orderby: string | null;
  /**
   * $Select
   * @description Comma-separated list of properties to include in the response, e.g., 'Item Cost,Item Date'.
   * @default null
   */
  $select: string | null;
  /**
   * $Skip
   * @description Number of items to skip (offset) for pagination.
   * @default null
   */
  $skip: number | null;
  /**
   * $Top
   * @description Maximum number of items to return (>=1).
   * @default null
   */
  $top: number | null;
};

/**
 * Type of _21RISK's _21RISK_GET_ITEMS tool output.
 */
type _21RISK_GET_ITEMS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Context
       * @description OData metadata context URL.
       */
      "@odata.context": string;
      /**
       * Value
       * @description List of Item records.
       */
      value: {
          /**
           * Item Comment As Text
           * @description Text comment for the item.
           * @default null
           */
          "Item CommentAsText": string | null;
          /**
           * Item Cost
           * @description Cost associated with the item.
           * @default null
           */
          "Item Cost": number | null;
          /**
           * Item Date
           * @description Timestamp when the item was recorded.
           * @default null
           */
          "Item Date": string | null;
          /**
           * Item Has Action
           * @description Flag indicating if the item has an action.
           * @default null
           */
          "Item HasAction": boolean | null;
          /**
           * Item Level
           * @description Level/category of the item.
           * @default null
           */
          "Item Level": string | null;
          /**
           * Item Tags
           * @description Comma-separated tags associated with the item.
           * @default null
           */
          "Item Tags": string | null;
          /**
           *  Key Action Id
           * @description Foreign key ID for the action.
           * @default null
           */
          _KeyActionId: string | null;
          /**
           *  Key Compliance
           * @description Foreign key ID for the compliance record.
           * @default null
           */
          _KeyCompliance: string | null;
          /**
           *  Key Model Id
           * @description Foreign key ID for the risk model.
           * @default null
           */
          _KeyModelId: string | null;
          /**
           *  Key Report Category
           * @description Foreign key ID for the report category.
           * @default null
           */
          _KeyReportCategory: string | null;
          /**
           *  Key Report Id
           * @description Foreign key ID for the report.
           * @default null
           */
          _KeyReportId: string | null;
          /**
           *  Key Responsible Id
           * @description Foreign key ID for the responsible user.
           * @default null
           */
          _KeyResponsibleId: string | null;
          /**
           *  Key Risk Model Category
           * @description Foreign key ID for the risk model category.
           * @default null
           */
          _KeyRiskModelCategory: string | null;
          /**
           *  Key Risk Type Id
           * @description Foreign key ID for the risk type.
           * @default null
           */
          _KeyRiskTypeId: string | null;
          /**
           *  Key Site Id
           * @description Foreign key ID for the site.
           * @default null
           */
          _KeySiteId: string | null;
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
 * Type of _21RISK's _21RISK_GET_ITEMS_PER_MONTH tool input.
 */
type _21RISK_GET_ITEMS_PER_MONTH_INPUT = {
  /**
   * $Filter
   * @description OData filter expression, e.g. siteId eq '123' and year eq 2023
   * @default null
   */
  $filter: string | null;
  /**
   * $Select
   * @description Comma-separated list of properties to include, e.g. 'siteId,questionId,month,year'
   * @default null
   */
  $select: string | null;
  /**
   * $Skip
   * @description Number of records to skip for pagination
   * @default null
   */
  $skip: number | null;
  /**
   * $Top
   * @description Maximum number of records to return
   * @default null
   */
  $top: number | null;
  /**
   * Max Page Size In Mb
   * @description Maximum payload size per request in MB (1–450)
   * @default 50
   */
  maxPageSizeInMb: number | null;
};

/**
 * Type of _21RISK's _21RISK_GET_ITEMS_PER_MONTH tool output.
 */
type _21RISK_GET_ITEMS_PER_MONTH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Value
       * @description List of ItemsPerMonth rows, one per question per site per month
       */
      value: {
          /**
           * Compliance Status
           * @description Compliance status for the item
           */
          complianceStatus: string;
          /**
           * Created At
           * Format: date-time
           * @description Timestamp when the item was created
           */
          createdAt: unknown;
          /**
           * Id
           * @description Unique identifier for the item
           */
          id: string;
          /**
           * Month
           * @description Month of the data (1–12)
           */
          month: number;
          /**
           * Not Applicable
           * @description Indicates if the item is not applicable
           */
          notApplicable: boolean;
          /**
           * Question Id
           * @description Identifier for the question
           */
          questionId: string;
          /**
           * Site Id
           * @description Identifier for the site
           */
          siteId: string;
          /**
           * Updated At
           * Format: date-time
           * @description Timestamp when the item was last updated
           */
          updatedAt: unknown;
          /**
           * Year
           * @description Year of the data
           */
          year: number;
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
 * Type of _21RISK's _21RISK_GET_ORGANIZATIONS tool input.
 */
type _21RISK_GET_ORGANIZATIONS_INPUT = {
  /**
   * $Filter
   * @description OData $filter expression to filter organizations, e.g., 'Status eq 1'.
   * @default null
   */
  $filter: string | null;
  /**
   * $Orderby
   * @description OData $orderby expression to sort results, e.g., 'Name desc'.
   * @default null
   */
  $orderby: string | null;
  /**
   * $Skip
   * @description Number of organizations to skip (offset) for pagination.
   * @default null
   */
  $skip: number | null;
  /**
   * $Top
   * @description Maximum number of organizations to return (>=1).
   * @default null
   */
  $top: number | null;
};

/**
 * Type of _21RISK's _21RISK_GET_ORGANIZATIONS tool output.
 */
type _21RISK_GET_ORGANIZATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Context
       * @description OData metadata context URL.
       * @default null
       */
      "@odata.context": string | null;
      /**
       * @Odata.Count
       * @description Total count of records if requested.
       * @default null
       */
      "@odata.count": number | null;
      /**
       * @Odata.Next Link
       * @description URL to fetch next page of results.
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description List of organization records.
       */
      value: {
          /**
           * Created By
           * @description User ID who created the organization.
           * @default null
           */
          CreatedBy: string | null;
          /**
           * Created On
           * @description ISO-8601 timestamp when the organization was created.
           * @default null
           */
          CreatedOn: string | null;
          /**
           * Demand Partner Labels
           * @description List of labels assigned to demand partners.
           * @default null
           */
          DemandPartnerLabels: string[] | null;
          /**
           * Id
           * @description Unique identifier of the organization.
           */
          Id: string;
          /**
           * Last Modified
           * @description ISO-8601 timestamp of the last modification.
           * @default null
           */
          LastModified: string | null;
          /**
           * Modified By
           * @description User ID who last modified the organization.
           * @default null
           */
          ModifiedBy: string | null;
          /**
           * Name
           * @description Name of the organization.
           */
          Name: string;
          /**
           * Status
           * @description Current status code of the organization.
           * @default null
           */
          Status: number | null;
          /**
           * Supply Partner Labels
           * @description List of labels assigned to supply partners.
           * @default null
           */
          SupplyPartnerLabels: string[] | null;
          /**
           * Time Zone
           * @description Organization's time zone, e.g., 'UTC'.
           * @default null
           */
          TimeZone: string | null;
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
 * Type of _21RISK's _21RISK_GET_PROPERTIES tool input.
 */
type _21RISK_GET_PROPERTIES_INPUT = {
  /**
   * $Filter
   * @description OData $filter expression to filter properties, e.g., 'Site Status eq 'Active''.
   * @default null
   */
  $filter: string | null;
  /**
   * $Orderby
   * @description Comma-separated list of fields to order by, e.g., 'Site Name desc'.
   * @default null
   */
  $orderby: string | null;
  /**
   * $Select
   * @description Comma-separated list of fields to include, e.g., 'Site Name,Site Address'.
   * @default null
   */
  $select: string | null;
  /**
   * $Skip
   * @description Number of records to skip for pagination (>=0).
   * @default null
   */
  $skip: number | null;
  /**
   * $Top
   * @description Maximum number of records to return (>=1).
   * @default null
   */
  $top: number | null;
};

/**
 * Type of _21RISK's _21RISK_GET_PROPERTIES tool output.
 */
type _21RISK_GET_PROPERTIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Context
       * @description OData metadata context URL.
       */
      "@odata.context": string;
      /**
       * Value
       * @description List of Property records.
       */
      value: {
          /**
           * Site Address
           * @description Physical address of the property/site.
           * @default null
           */
          "Site Address": string | null;
          /**
           * Site Country
           * @description Country where the property/site is located.
           * @default null
           */
          "Site Country": string | null;
          /**
           * Site Latitude
           * @description Latitude coordinate of the property/site.
           * @default null
           */
          "Site Latitude": number | null;
          /**
           * Site Longitude
           * @description Longitude coordinate of the property/site.
           * @default null
           */
          "Site Longitude": number | null;
          /**
           * Site Name
           * @description Name of the property/site.
           * @default null
           */
          "Site Name": string | null;
          /**
           * Site Status
           * @description Current status of the property/site.
           * @default null
           */
          "Site Status": string | null;
          /**
           * Site Tsi Buildings
           * @description COPE - TSI score for building structure.
           * @default null
           */
          "Site TSI Buildings": number | null;
          /**
           * Site Tsi Business Interruption
           * @description COPE - TSI score for business interruption.
           * @default null
           */
          "Site TSI Business Interruption": number | null;
          /**
           * Site Tsi Machinery And Equipment
           * @description COPE - TSI score for machinery and equipment.
           * @default null
           */
          "Site TSI Machinery And Equipment": number | null;
          /**
           * Site Tsi Stock And Supplies
           * @description COPE - TSI score for stock and supplies.
           * @default null
           */
          "Site TSI Stock And Supplies": number | null;
          /**
           *  Key Organization Id
           * @description Organization identifier for the property/site.
           * @default null
           */
          _KeyOrganizationId: string | null;
          /**
           *  Key Site Id
           * @description Unique identifier of the site/propery.
           * @default null
           */
          _KeySiteId: string | null;
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
 * Type of _21RISK's _21RISK_GET_REPORTS tool input.
 */
type _21RISK_GET_REPORTS_INPUT = {
  /**
   * $Filter
   * @description OData filter to narrow results (e.g., `Report Status eq 'published'`).
   * @default null
   */
  $filter: string | null;
  /**
   * $Skiptoken
   * @description Opaque token for server-driven pagination from previous responses.
   * @default null
   */
  $skiptoken: string | null;
  /**
   * $Top
   * @description Number of items to include in the result (>=1).
   * @default null
   */
  $top: number | null;
  /**
   * Max Page Size In Mb
   * @description Maximum payload size in MB for each request (1-450). Defaults to 50 if not provided.
   * @default null
   */
  maxPageSizeInMb: number | null;
};

/**
 * Type of _21RISK's _21RISK_GET_REPORTS tool output.
 */
type _21RISK_GET_REPORTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Context
       * @description OData context URL for this response.
       * @default null
       */
      "@odata.context": string | null;
      /**
       * @Odata.Next Link
       * @description URL to fetch the next page of results.
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description List of audit reports matching the query.
       */
      value: {
          /**
           * Report Audit Date
           * @default null
           */
          "Report Audit Date": string | null;
          /**
           * Report Auditor Id
           * @default null
           */
          "Report AuditorId": string | null;
          /** Report Created Date */
          "Report CreatedDate": string;
          /**
           * Report Last Modified
           * @default null
           */
          "Report Last Modified": string | null;
          /** Report Link */
          "Report Link": string;
          /** Report Participants Count */
          "Report Participants Count": number;
          /**
           * Report Published Date
           * @default null
           */
          "Report Published Date": string | null;
          /**
           * Report Published Or Last Modified Date
           * @default null
           */
          "Report Published Or Last Modified Date": string | null;
          /** Report Status */
          "Report Status": string;
          /**  Key Location Id */
          _KeyLocationId: string;
          /**
           *  Key Model Id
           * @default null
           */
          _KeyModelId: string | null;
          /**  Key Organization Id */
          _KeyOrganizationId: string;
          /**  Key Report Id */
          _KeyReportId: string;
          /**  Key Risk Type Id */
          _KeyRiskTypeId: string;
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
 * Type of _21RISK's _21RISK_GET_RISKMODEL_CATEGORIES tool input.
 */
type _21RISK_GET_RISKMODEL_CATEGORIES_INPUT = {
  /**
   * $Count
   * @description Whether to include a total count of matching records in the response
   * @default null
   */
  $count: boolean | null;
  /**
   * $Expand
   * @description Comma-separated list of related entities to expand
   * @default null
   */
  $expand: string | null;
  /**
   * $Filter
   * @description OData filter expression to narrow results, e.g., _KeyModelId eq 'model123'
   * @default null
   */
  $filter: string | null;
  /**
   * $Orderby
   * @description OData orderby clause to sort results, e.g., 'Category Level Sort Order desc'
   * @default null
   */
  $orderby: string | null;
  /**
   * $Select
   * @description Comma-separated list of properties to include in the response, e.g., 'Category Name,Category Level'
   * @default null
   */
  $select: string | null;
  /**
   * $Skip
   * @description Number of records to skip for pagination (minimum 0)
   * @default null
   */
  $skip: number | null;
  /**
   * $Skiptoken
   * @description Server-driven pagination token from previous response
   * @default null
   */
  $skiptoken: string | null;
  /**
   * $Top
   * @description Maximum number of records to return (minimum 1)
   * @default null
   */
  $top: number | null;
  /**
   * Max Page Size In Mb
   * @description Maximum payload size per request in MB (1–450)
   * @default 50
   */
  maxPageSizeInMb: number | null;
};

/**
 * Type of _21RISK's _21RISK_GET_RISKMODEL_CATEGORIES tool output.
 */
type _21RISK_GET_RISKMODEL_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Count
       * @description Total number of matching records (only present if $count=true)
       * @default null
       */
      "@odata.count": number | null;
      /**
       * @Odata.Next Link
       * @description URL to fetch next page of results
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description List of risk model category items
       */
      value: {
          /**
           * Category Description
           * @description Description of the category
           * @default null
           */
          "Category Description": string | null;
          /**
           * Category Hierarchy Depth
           * @description Depth of the category hierarchy
           * @default null
           */
          "Category Hierarchy Depth": number | null;
          /**
           * Category Level
           * @description Level of the category in the hierarchy
           * @default null
           */
          "Category Level": string | null;
          /**
           * Category Level Sort Order
           * @description Sort order for this category level
           * @default null
           */
          "Category Level Sort Order": number | null;
          /**
           * Category Level And Name
           * @description Combined level and category name
           * @default null
           */
          "Category Level and name": string | null;
          /**
           * Category Level1
           * @description First level category
           * @default null
           */
          "Category Level1": string | null;
          /**
           * Category Level1 Sort Order
           * @description Sort order for first level category
           * @default null
           */
          "Category Level1 Sort Order": number | null;
          /**
           * Category Level2
           * @description Second level category
           * @default null
           */
          "Category Level2": string | null;
          /**
           * Category Level2 Sort Order
           * @description Sort order for second level category
           * @default null
           */
          "Category Level2 Sort Order": number | null;
          /**
           * Category Level3
           * @description Third level category
           * @default null
           */
          "Category Level3": string | null;
          /**
           * Category Level3 Sort Order
           * @description Sort order for third level category
           * @default null
           */
          "Category Level3 Sort Order": number | null;
          /**
           * Category Level4
           * @description Fourth level category
           * @default null
           */
          "Category Level4": string | null;
          /**
           * Category Level4 Sort Order
           * @description Sort order for fourth level category
           * @default null
           */
          "Category Level4 Sort Order": number | null;
          /**
           * Category Name
           * @description Name of the risk model category
           */
          "Category Name": string;
          /**
           * Category Path
           * @description Hierarchical path of the category
           */
          "Category Path": string;
          /**
           * Category Public
           * @description Indicates if the category is public
           * @default null
           */
          "Category Public": boolean | null;
          /**
           * Category Tags
           * @description Tags associated with the category
           * @default null
           */
          "Category Tags": string | null;
          /**
           * Category Id
           * @description Public identifier for the category
           * @default null
           */
          CategoryId: string | null;
          /**
           *  Key First Category Tag
           * @description Identifier of the first category tag
           * @default null
           */
          _KeyFirstCategoryTag: string | null;
          /**
           *  Key Model Id
           * @description Identifier of the associated risk model
           */
          _KeyModelId: string;
          /**
           *  Key Organization Id
           * @description Identifier of the organization
           * @default null
           */
          _KeyOrganizationId: string | null;
          /**
           *  Key Risk Model Category
           * @description Unique identifier for the risk model category
           */
          _KeyRiskModelCategory: string;
          /**
           *  Key Risk Type Id
           * @description Identifier of the associated risk type
           */
          _KeyRiskTypeId: string;
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
 * Type of _21RISK's _21RISK_GET_RISK_MODELS tool input.
 */
type _21RISK_GET_RISK_MODELS_INPUT = {
  /**
   * $Count
   * @description Include total count of matching records when set to true.
   * @default null
   */
  $count: boolean | null;
  /**
   * $Expand
   * @description OData $expand expression to include related entities inline.
   * @default null
   */
  $expand: string | null;
  /**
   * $Filter
   * @description OData $filter expression to filter risk models, e.g., `Name eq 'Operational Risk'`.
   * @default null
   */
  $filter: string | null;
  /**
   * $Orderby
   * @description OData $orderby expression to sort results, e.g., `CreatedDate desc`.
   * @default null
   */
  $orderby: string | null;
  /**
   * $Select
   * @description OData $select expression to limit fields returned, e.g., `Name,Description`.
   * @default null
   */
  $select: string | null;
  /**
   * $Skip
   * @description Number of risk models to skip (offset) for pagination, default is 0.
   * @default null
   */
  $skip: number | null;
  /**
   * $Skiptoken
   * @description Opaque token for server-driven pagination from previous responses.
   * @default null
   */
  $skiptoken: string | null;
  /**
   * $Top
   * @description Maximum number of risk models to return (>=1).
   * @default null
   */
  $top: number | null;
  /**
   * Max Page Size In Mb
   * @description Maximum payload size in MB for each request (1-450). Defaults to service default if not set.
   * @default null
   */
  maxPageSizeInMb: number | null;
};

/**
 * Type of _21RISK's _21RISK_GET_RISK_MODELS tool output.
 */
type _21RISK_GET_RISK_MODELS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Context
       * @description OData context URL.
       * @default null
       */
      "@odata.context": string | null;
      /**
       * @Odata.Count
       * @description Total count of records if requested.
       * @default null
       */
      "@odata.count": number | null;
      /**
       * @Odata.Next Link
       * @description URL to fetch next page of results.
       * @default null
       */
      "@odata.nextLink": string | null;
      /**
       * Value
       * @description List of risk models matching the query.
       */
      value: {
          /**
           * Created Date
           * @description ISO-8601 timestamp when the model was created.
           */
          CreatedDate: string;
          /**
           * Description
           * @description Description of the risk model.
           * @default null
           */
          Description: string | null;
          /**
           * Id
           * @description Unique identifier of the risk model.
           */
          Id: string;
          /**
           * Modified Date
           * @description ISO-8601 timestamp when the model was last modified.
           */
          ModifiedDate: string;
          /**
           * Name
           * @description Name of the risk model.
           */
          Name: string;
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
 * Type of _21RISK's _21RISK_GET_SITES tool input.
 */
type _21RISK_GET_SITES_INPUT = {
  /**
   * $Count
   * @description Include count of all matching records (true/false).
   * @default null
   */
  $count: boolean | null;
  /**
   * $Expand
   * @description Navigation properties to expand in the response.
   * @default null
   */
  $expand: string | null;
  /**
   * $Filter
   * @description OData $filter expression to filter sites, e.g., 'Site Country eq 'USA''.
   * @default null
   */
  $filter: string | null;
  /**
   * $Orderby
   * @description Comma-separated ordering of properties, e.g., 'Site Name desc'.
   * @default null
   */
  $orderby: string | null;
  /**
   * $Search
   * @description Search expression to match text properties.
   * @default null
   */
  $search: string | null;
  /**
   * $Select
   * @description Comma-separated list of properties to include in the response, e.g., 'Site Name,Site Address'.
   * @default null
   */
  $select: string | null;
  /**
   * $Skip
   * @description Number of sites to skip (offset) for pagination.
   * @default null
   */
  $skip: number | null;
  /**
   * $Top
   * @description Maximum number of sites to return (>=1).
   * @default null
   */
  $top: number | null;
};

/**
 * Type of _21RISK's _21RISK_GET_SITES tool output.
 */
type _21RISK_GET_SITES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * @Odata.Context
       * @description OData metadata context URL.
       */
      "@odata.context": string;
      /**
       * Value
       * @description List of Site records.
       */
      value: {
          /**
           * Site Address
           * @description Physical address of the site.
           * @default null
           */
          "Site Address": string | null;
          /**
           * Site Country
           * @description Country where the site is located.
           * @default null
           */
          "Site Country": string | null;
          /**
           * Site Custom Columns
           * @description Custom columns defined for the site.
           * @default null
           */
          "Site Custom Columns": string | null;
          /**
           * Site Engineering Reports
           * @description Engineering report references for the site.
           * @default null
           */
          "Site Engineering Reports": string | null;
          /**
           * Site Hierarchy Level 1
           * @description Hierarchy level 1 name.
           * @default null
           */
          "Site Hierarchy Level 1": string | null;
          /**
           * Site Hierarchy Level 2
           * @description Hierarchy level 2 name.
           * @default null
           */
          "Site Hierarchy Level 2": string | null;
          /**
           * Site Hierarchy Level 3
           * @description Hierarchy level 3 name.
           * @default null
           */
          "Site Hierarchy Level 3": string | null;
          /**
           * Site Hierarchy Level 4
           * @description Hierarchy level 4 name.
           * @default null
           */
          "Site Hierarchy Level 4": string | null;
          /**
           * Site Hierarchy Level 5
           * @description Hierarchy level 5 name.
           * @default null
           */
          "Site Hierarchy Level 5": string | null;
          /**
           * Site Hierarchy Level 6
           * @description Hierarchy level 6 name.
           * @default null
           */
          "Site Hierarchy Level 6": string | null;
          /**
           * Site Latitude
           * @description Latitude of the site.
           * @default null
           */
          "Site Latitude": number | null;
          /**
           * Site Longitude
           * @description Longitude of the site.
           * @default null
           */
          "Site Longitude": number | null;
          /**
           * Site Name
           * @description Name of the site.
           * @default null
           */
          "Site Name": string | null;
          /**
           * Site Parent Id
           * @description Parent site ID for hierarchy.
           * @default null
           */
          "Site ParentId": string | null;
          /**
           * Site Status
           * @description Current status of the site.
           * @default null
           */
          "Site Status": string | null;
          /**
           * Site Tsi Buildings
           * @description TSI score for buildings.
           * @default null
           */
          "Site TSI Buildings": number | null;
          /**
           * Site Tsi Business Interruption
           * @description TSI score for business interruption.
           * @default null
           */
          "Site TSI Business Interruption": number | null;
          /**
           * Site Tsi Machinery And Equipment
           * @description TSI score for machinery and equipment.
           * @default null
           */
          "Site TSI Machinery And Equipment": number | null;
          /**
           * Site Tsi Stock And Supplies
           * @description TSI score for stock and supplies.
           * @default null
           */
          "Site TSI Stock And Supplies": number | null;
          /**
           * Site Tags
           * @description Comma-separated tags assigned to the site.
           * @default null
           */
          "Site Tags": string | null;
          /**
           *  Key Organization Id
           * @description Organization identifier for the site.
           * @default null
           */
          _KeyOrganizationId: string | null;
          /**
           *  Key Site Id
           * @description Unique identifier of the site.
           * @default null
           */
          _KeySiteId: string | null;
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
 * Type map of all available tool input types for toolkit "_21RISK".
 */
export type _21RISK_TOOL_INPUTS = {
  GET_COMPLIANCE: _21RISK_GET_COMPLIANCE_INPUT
  GET_ITEMS: _21RISK_GET_ITEMS_INPUT
  GET_ITEMS_PER_MONTH: _21RISK_GET_ITEMS_PER_MONTH_INPUT
  GET_ORGANIZATIONS: _21RISK_GET_ORGANIZATIONS_INPUT
  GET_PROPERTIES: _21RISK_GET_PROPERTIES_INPUT
  GET_REPORTS: _21RISK_GET_REPORTS_INPUT
  GET_RISKMODEL_CATEGORIES: _21RISK_GET_RISKMODEL_CATEGORIES_INPUT
  GET_RISK_MODELS: _21RISK_GET_RISK_MODELS_INPUT
  GET_SITES: _21RISK_GET_SITES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "_21RISK".
 */
export type _21RISK_TOOL_OUTPUTS = {
  GET_COMPLIANCE: _21RISK_GET_COMPLIANCE_OUTPUT
  GET_ITEMS: _21RISK_GET_ITEMS_OUTPUT
  GET_ITEMS_PER_MONTH: _21RISK_GET_ITEMS_PER_MONTH_OUTPUT
  GET_ORGANIZATIONS: _21RISK_GET_ORGANIZATIONS_OUTPUT
  GET_PROPERTIES: _21RISK_GET_PROPERTIES_OUTPUT
  GET_REPORTS: _21RISK_GET_REPORTS_OUTPUT
  GET_RISKMODEL_CATEGORIES: _21RISK_GET_RISKMODEL_CATEGORIES_OUTPUT
  GET_RISK_MODELS: _21RISK_GET_RISK_MODELS_OUTPUT
  GET_SITES: _21RISK_GET_SITES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's _21RISK toolkit.
 */
export const _21RISK = {
  slug: "_21risk",
  tools: {
    /**
     * Tool to retrieve compliance data for sites, categories, or questions. use when you need odata-based compliance data for analytics or reporting.
     */
    GET_COMPLIANCE: "_21RISK_GET_COMPLIANCE",
    /**
     * Tool to retrieve items (beta) from the 21risk odata api. use when you need a filtered and paged list of items for analytics and reporting. example: get items($filter="item cost gt 100", $top=50).
     */
    GET_ITEMS: "_21RISK_GET_ITEMS",
    /**
     * Tool to retrieve fact table data for itemspermonth, one row per question per site per month. use when querying monthly item data with odata parameters ($filter, $top, $skip, $select, maxpagesizeinmb).
     */
    GET_ITEMS_PER_MONTH: "_21RISK_GET_ITEMS_PER_MONTH",
    /**
     * Tool to retrieve organizations from the 21risk odata api. use when you need to list, filter, or paginate organizations via odata parameters after authentication is confirmed.
     */
    GET_ORGANIZATIONS: "_21RISK_GET_ORGANIZATIONS",
    /**
     * Tool to fetch a list of properties related to sites, including cope information and other relevant data. use when you need property insurance details via odata api after authentication.
     */
    GET_PROPERTIES: "_21RISK_GET_PROPERTIES",
    /**
     * Tool to retrieve audit reports, including draft, published, and scheduled reports. use when you need a paginated list of reports with optional odata filtering.
     */
    GET_REPORTS: "_21RISK_GET_REPORTS",
    /**
     * Tool to retrieve risk model categories for grouping questions and compliance checks. use when you need to filter, select, or paginate risk model categories via odata parameters ($filter, $select, $orderby, $top, $skip, $count).
     */
    GET_RISKMODEL_CATEGORIES: "_21RISK_GET_RISKMODEL_CATEGORIES",
    /**
     * Tool to retrieve risk models used for audits and compliance. use when you need to list available risk models with optional odata queries.
     */
    GET_RISK_MODELS: "_21RISK_GET_RISK_MODELS",
    /**
     * Tool to retrieve sites (locations) from the 21risk odata api. use when you need to list, filter, or page sites with odata query parameters after authentication is confirmed.
     */
    GET_SITES: "_21RISK_GET_SITES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "_21RISK".
 */
export type _21RISK_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "_21RISK".
 */
export type _21RISK_TRIGGER_EVENTS = {}
