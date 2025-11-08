// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of BORNEO's BORNEO_ACCESS_SCAN_ITERATION_BY_ID tool input.
 */
type BORNEO_ACCESS_SCAN_ITERATION_BY_ID_INPUT = {
  /**
   * Scan Iteration Id
   * @description The unique resource ID.
   */
  scanIterationId?: string;
};

/**
 * Type of BORNEO's BORNEO_ACCESS_SCAN_ITERATION_BY_ID tool output.
 */
type BORNEO_ACCESS_SCAN_ITERATION_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_ADD_DISCOVERED_RECIPIENTS tool input.
 */
type BORNEO_ADD_DISCOVERED_RECIPIENTS_INPUT = {
  /**
   * Discovered Recipient Ids
   * @description Identifiers of the discovered recipients to add as recipients.
   */
  discoveredRecipientIds?: string[];
};

/**
 * Type of BORNEO's BORNEO_ADD_DISCOVERED_RECIPIENTS tool output.
 */
type BORNEO_ADD_DISCOVERED_RECIPIENTS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_ARCHIVE_DISCOVERED_RECIPIENT tool input.
 */
type BORNEO_ARCHIVE_DISCOVERED_RECIPIENT_INPUT = {
  /**
   * Discovered Recipient Id
   * @description Identifier of the discovered recipient.
   */
  discoveredRecipientId?: string;
};

/**
 * Type of BORNEO's BORNEO_ARCHIVE_DISCOVERED_RECIPIENT tool output.
 */
type BORNEO_ARCHIVE_DISCOVERED_RECIPIENT_OUTPUT = {
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
 * Type of BORNEO's BORNEO_BORNEO_DELETE_DATA_BREACH_BY_ID tool input.
 */
type BORNEO_BORNEO_DELETE_DATA_BREACH_BY_ID_INPUT = {
  /**
   * Data Breach Id
   * @description Databreachid
   */
  dataBreachId?: string;
};

/**
 * Type of BORNEO's BORNEO_BORNEO_DELETE_DATA_BREACH_BY_ID tool output.
 */
type BORNEO_BORNEO_DELETE_DATA_BREACH_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_CREATE_AND_SCHEDULE_CLOUD_RESOURCE_SCAN tool input.
 */
type BORNEO_CREATE_AND_SCHEDULE_CLOUD_RESOURCE_SCAN_INPUT = {
  /**
   * Connector Id
   * @description The ID of the connector to use for the scan. The connector type must match the resource type.
   */
  connectorId?: string;
  /**
   * Cron
   * @description The cron schedule expression to use for a recurring scan. Only a fixed set of cron expressions can be used to run scans at 30 minute, 1 hour, 1 day, or 1 week intervals.
   * @enum {string}
   */
  cron?: "*/30 * * * *" | "0 */1 * * *" | "0 */12 * * *" | "0 */4 * * *" | "0 */6 * * *" | "0 */8 * * *" | "0 0 * * *" | "0 0 * * 0" | "0 0 1 * *" | "0 0 1 1,4,7,10 *" | "0 0 1 1,7 *";
  /**
   * Inspection Policy  Collect Tokens
   * @description If true, the scan will capture details about every infotype match, including the matched token, and exact location of the token. If false, the scan will capture only aggregate results (a.k.a. "snapshot" results).
   */
  inspectionPolicy__collectTokens?: boolean;
  /**
   * Inspection Policy  Compliance
   * @description List of infotype categories to scan for. All enabled infotypes included in the specified categories will be used in the scan. If `infotypes` is also specified, this list of infotype categories will be ignored.
   */
  inspectionPolicy__compliance?: string[];
  /**
   * Inspection Policy  Infotypes
   * @description List of infotypes to scan for. If empty, all enabled infotypes will be included.
   */
  inspectionPolicy__infotypes?: string[];
  /**
   * Inspection Policy  Mask Details
   * @description If true, the matched tokens captured as part of the detailed scan results will be masked. If false, the raw, unmasked tokens will be captured. Use with caution. Only applicable if `detailed` scan results are enabled.
   */
  inspectionPolicy__maskDetails?: boolean;
  /**
   * Name
   * @description The name of the scan.
   */
  name?: string;
  /**
   * Resource Type
   * @description The type of resource to scan.
   */
  resourceType?: string;
  /**
   * Resources  Account Id
   * @description The account ID of the cloud account to which the resoure belongs. E.g. a 12-digit AWS account ID.
   */
  resources__accountId?: string;
  /**
   * Resources  All
   * @description Set this to `true` to determine the set of resources to scan based on the filter conditions in the `resources` property. If set to `false`, a static set of `resourceIds` must be specified.
   */
  resources__all?: boolean;
  /**
   * Resources  Database
   * @description Filter the resources with the list of databaseses for selected connector types
   */
  resources__database?: string[];
  /**
   * Resources  Dataset
   * @description Filter the resources with the list of datasetss for selected connector types
   */
  resources__dataset?: string[];
  /**
   * Resources  Drive Id
   * @description Filter the resources with the list of driveIds for gdrive connector types
   */
  resources__driveId?: string[];
  /**
   * Resources  Drive Type
   * @description Filter the resources with the list of driveTypes for gdrive connector types
   */
  resources__driveType?: string[];
  /**
   * Resources  Google Groups
   * @description Googlegroups
   */
  resources__googleGroups?: string[];
  /**
   * Resources  Info Types  Info Types
   * @description The list of infotypes to filter on.
   */
  resources__infoTypes__infoTypes?: string[];
  /**
   * Resources  Info Types  Ops
   * @description Ops
   * @enum {string}
   */
  resources__infoTypes__ops?: "AND" | "OR";
  /**
   * Resources  Is Archived
   * @description Filter the channels marked as archived for Slack connector types
   */
  resources__isArchived?: boolean;
  /**
   * Resources  Is External
   * @description Filter the channels marked as external for Slack connector types
   */
  resources__isExternal?: boolean;
  /**
   * Resources  Is Private
   * @description Private channels, for Slack Enterprise Connector
   */
  resources__isPrivate?: boolean;
  /**
   * Resources  Is Public
   * @description Filter the resources which are public.
   */
  resources__isPublic?: boolean;
  /**
   * Resources  Is Slack Direct Messages
   * @description Fetch DMs, for Slack Enterprise Connector
   */
  resources__isSlackDirectMessages?: boolean;
  /**
   * Resources  Is Unencrypted
   * @description Filter the resources which are un-unencrypted.
   */
  resources__isUnencrypted?: boolean;
  /**
   * Resources  Name
   * @description Name
   */
  resources__name?: string[];
  /**
   * Resources  Org Unit Id
   * @description Filter the resources with the list of orgUnits for gdrive connector types
   */
  resources__orgUnitId?: string[];
  /**
   * Resources  Parent Id
   * @description Filter the resources which has the specified parent id.
   */
  resources__parentId?: string;
  /**
   * Resources  Region
   * @description The region of the cloud account to which the resoure belongs.
   */
  resources__region?: string;
  /**
   * Resources  Regions
   * @description List of regions to which the resoure belongs to in that cloud account.
   */
  resources__regions?: string[];
  /**
   * Resources  Resource Ids
   * @description One or more resource IDs to return.
   */
  resources__resourceIds?: string[];
  /**
   * Resources  Resource Type
   * @description Filter the resources based on the resource type.
   */
  resources__resourceType?: string;
  /**
   * Resources  Schema
   * @description Filter the resources with the list of schemas for selected connector types
   */
  resources__schema?: string[];
  /**
   * Resources  Search
   * @description Free-text search on the resource name.
   */
  resources__search?: string;
  /**
   * Resources  Space Status
   * @description Filter conlfluences based on status
   */
  resources__spaceStatus?: string[];
  /**
   * Resources  Space Type
   * @description Filter conlfluences based on type
   */
  resources__spaceType?: string[];
  /**
   * Resources  Tags
   * @description Filter the resources which have teh tags
   */
  resources__tags?: {
      /**
       * Action
       * @description Action
       * @enum {string}
       */
      action: "exclude" | "include";
      /**
       * Tag Key
       * @description Tagkey
       */
      tagKey: string;
      /**
       * Tag Value
       * @description Tagvalue
       */
      tagValue?: string;
  }[];
  /**
   * Resources  Team Id
   * @description Slack Workspace id in Slack Enterprise Connector
   */
  resources__teamId?: string;
  /**
   * Resources  Team Name
   * @description Slack Workspace name in Slack Enterprise Connector
   */
  resources__teamName?: string;
  /**
   * Resources  Team Url
   * @description Slack Workspace URL in Slack Enterprise Connector
   */
  resources__teamUrl?: string;
  /**
   * Resources  Zendesk Group Id
   * @description Zendeskgroupid
   */
  resources__zendeskGroupId?: number[];
  /**
   * Scan Filter
   * @description Filter conditions to apply to the scan.
   */
  scanFilter?: {
      /**
       * Filters
       * @description One or more filter values to apply. The number and type of values depends on the filter type.
       */
      filters?: string[];
      /**
       * Type
       * @description The type of filter to apply. Not all connector types support all filter types.
       * @enum {string}
       */
      type?: "fileExtensions" | "internalDomains" | "jiraProjects" | "lastModifiedGreaterThan" | "lastModifiedLessThan" | "onlyIncludeKeys" | "prefix" | "scanAttachments" | "visibilityFilter" | "zendeskGroups";
  }[];
  /**
   * Scan Limits  Items Per Batch
   * @description Maximum number of item (records, objects, etc.) to scan per resource. Supported for sample scans on the following resource types: S3, DynamoDB, PostgreSQL, MySQL, Presto, MongoDB, BigQuery, Cassandra.
   */
  scanLimits__itemsPerBatch?: number;
  /**
   * Scan Limits  Max Cumulative Data Size Mb
   * @description Maximum data size to scan per resource in MB. Supported for full scans on the following resource types: PostgreSQL, MySQL.
   */
  scanLimits__maxCumulativeDataSizeMb?: number;
  /**
   * Scan Limits  Sample Duration Minutes
   * @description Sampledurationminutes
   */
  scanLimits__sampleDurationMinutes?: number;
  /**
   * Scan Limits  Sample Percentage
   * @description Percentage of data to scan per resource. Supported for full scans on the following resource types: S3, BigQuery.
   */
  scanLimits__samplePercentage?: number;
  /**
   * Scan Type
   * @description The type of scan to perform, i.e. either full scan or sample scan.
   * @enum {string}
   */
  scanType?: "full" | "sample";
  /**
   * Schedule Type
   * @description A schedule type of "once" indicates that the scan will be executed once immediately at the time it is created or once as per the scheduled calendar time. A schedule type of "cron" creates a recurring scan that will be executed at the specified cron schedule.
   * @enum {string}
   */
  scheduleType?: "cron" | "once";
  /**
   * Schedule  Calendars
   * @description List of schedules
   */
  schedule__calendars?: {
      /**
       * Day Of Month
       * @description Dayofmonth
       */
      dayOfMonth?: number;
      /**
       * Hour
       * @description Hour
       */
      hour?: number;
      /**
       * Minute
       * @description Minute
       */
      minute?: number;
      /**
       * Month
       * @description Month
       * @enum {string}
       */
      month?: "APRIL" | "AUGUST" | "DECEMBER" | "FEBRUARY" | "JANUARY" | "JULY" | "JUNE" | "MARCH" | "MAY" | "NOVEMBER" | "OCTOBER" | "SEPTEMBER";
      /**
       * Second
       * @description Second
       */
      second?: number;
      /**
       * Year
       * @description Year
       */
      year?: number;
  }[];
  /**
   * Schedule  Timezone
   * @description time zone to be considered for the schedule
   */
  schedule__timezone?: string;
};

/**
 * Type of BORNEO's BORNEO_CREATE_AND_SCHEDULE_CLOUD_RESOURCE_SCAN tool output.
 */
type BORNEO_CREATE_AND_SCHEDULE_CLOUD_RESOURCE_SCAN_OUTPUT = {
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
 * Type of BORNEO's BORNEO_CREATE_DASHBOARD_USER tool input.
 */
type BORNEO_CREATE_DASHBOARD_USER_INPUT = {
  /**
   * Email
   * @description Email
   */
  email?: string;
  /**
   * Filter  Id
   * @description Id
   */
  filter__id?: string;
  /**
   * Filter  Type
   * @description Type
   * @enum {string}
   */
  filter__type?: "GCP" | "OKTA";
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Organisations
   * @description Organisations
   */
  organisations?: {
      /**
       * Departments
       * @description Departments
       */
      departments?: string[];
      /**
       * Organisation Id
       * @description Organisationid
       */
      organisationId?: number;
      /**
       * Roles
       * @description Roles
       */
      roles: string[];
  }[];
  /**
   * Roles
   * @description Roles
   */
  roles?: string[];
};

/**
 * Type of BORNEO's BORNEO_CREATE_DASHBOARD_USER tool output.
 */
type BORNEO_CREATE_DASHBOARD_USER_OUTPUT = {
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
 * Type of BORNEO's BORNEO_CREATE_DEPARTMENT_WITH_TRANSLATIONS tool input.
 */
type BORNEO_CREATE_DEPARTMENT_WITH_TRANSLATIONS_INPUT = {
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Translations
   * @description Translations
   */
  translations?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
};

/**
 * Type of BORNEO's BORNEO_CREATE_DEPARTMENT_WITH_TRANSLATIONS tool output.
 */
type BORNEO_CREATE_DEPARTMENT_WITH_TRANSLATIONS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_CREATE_DOMAIN_WITH_POLLING_FREQUENCY tool input.
 */
type BORNEO_CREATE_DOMAIN_WITH_POLLING_FREQUENCY_INPUT = {
  /**
   * Frequency
   * @description Frequency of polling for a domain. Manual polling means that this domain will not be polled automatically.
   * @enum {string}
   */
  frequency?: "12h" | "1d" | "1w" | "30d" | "6h" | "manual";
  /**
   * Name
   * @description Name of the domain.
   */
  name?: string;
};

/**
 * Type of BORNEO's BORNEO_CREATE_DOMAIN_WITH_POLLING_FREQUENCY tool output.
 */
type BORNEO_CREATE_DOMAIN_WITH_POLLING_FREQUENCY_OUTPUT = {
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
 * Type of BORNEO's BORNEO_CREATE_DPIA_FOR_PROCESSING_ACTIVITY tool input.
 */
type BORNEO_CREATE_DPIA_FOR_PROCESSING_ACTIVITY_INPUT = {
  /**
   * Additional Information
   * @description Additionalinformation
   */
  additionalInformation?: string;
  /**
   * Additional Information Files
   * @description Additionalinformationfiles
   */
  additionalInformationFiles?: string[];
  /**
   * Availability  Baseline Comment
   * @description Comment to add additional information about the baseline risk of the availablity
   */
  availability__baselineComment?: string;
  /**
   * Availability  Baseline Likelihood
   * @description Baselinelikelihood
   * @enum {string}
   */
  availability__baselineLikelihood?: "likely" | "limited" | "maximum" | "negligible" | "unlikely";
  /**
   * Availability  Baseline Severity
   * @description Represents the severity of a risk
   * @enum {string}
   */
  availability__baselineSeverity?: "high" | "low" | "medium" | "very_high" | "very_low";
  /**
   * Availability  Impacts
   * @description List of impacts that availability risk can have. At least one element is necessary DPIA is saved as activated
   */
  availability__impacts?: {
      /**
       * Id
       * @description Identifier for the impact of confidentiality risk. Can be an UUID if it"s a custom impact or one of the keys of the default impacts that we offer
       */
      id: string;
      /**
       * Name
       * @description Name
       */
      name?: string;
  }[];
  /**
   * Availability  Impacts Comment
   * @description Comment to add additional information about the impact
   */
  availability__impactsComment?: string;
  /**
   * Availability  Implemented Toms
   * @description List of implemented TOMs that applies to the availability risk. At least one element is necessary DPIA is saved as activated
   */
  availability__implementedToms?: string[];
  /**
   * Availability  Implemented Toms Comment
   * @description Comment to add additional information about the implemented TOMs
   */
  availability__implementedTomsComment?: string;
  /**
   * Availability  Planned Toms
   * @description List of TOMs planned to be implemented and that applies to the availability risk. At least one element is necessary DPIA is saved as activated
   */
  availability__plannedToms?: string[];
  /**
   * Availability  Planned Toms Comment
   * @description Comment to add additional information about the planned TOMs
   */
  availability__plannedTomsComment?: string;
  /**
   * Availability  Residual Risk Comment
   * @description Comment to add additional information about the residual risk of the availability
   */
  availability__residualRiskComment?: string;
  /**
   * Availability  Residual Risk Likelihood
   * @description Residualrisklikelihood
   * @enum {string}
   */
  availability__residualRiskLikelihood?: "likely" | "limited" | "maximum" | "negligible" | "unlikely";
  /**
   * Availability  Residual Risk Severity
   * @description Represents the severity of a risk
   * @enum {string}
   */
  availability__residualRiskSeverity?: "high" | "low" | "medium" | "very_high" | "very_low";
  /**
   * Availability  Risk Sources
   * @description List of risk sources that availability risk can have. At least one element is necessary DPIA is saved as activated
   */
  availability__riskSources?: {
      /**
       * Id
       * @description Identifier for the risk source of a risk. Can be an UUID if it"s a custom risk source or one of the keys of the default risk sources that we offer
       */
      id: string;
      /**
       * Name
       * @description Name of the risk source
       */
      name?: string;
  }[];
  /**
   * Availability  Risk Sources Comment
   * @description Comment to add additional information about the availability risk sources
   */
  availability__riskSourcesComment?: string;
  /**
   * Availability  Threats
   * @description List of threats that availability risk can have. At least one element is necessary DPIA is saved as activated
   */
  availability__threats?: {
      /**
       * Id
       * @description Identifier for the threat of confidentiality risk. Can be an UUID if it"s a custom threat or one of the keys of the default threats that we offer
       */
      id: string;
      /**
       * Name
       * @description Name
       */
      name?: string;
  }[];
  /**
   * Availability  Threats Comment
   * @description Comment to add additional information about the threat
   */
  availability__threatsComment?: string;
  /**
   * Confidentiality  Baseline Comment
   * @description Comment to add additional information about the baseline risk of the confidentiality
   */
  confidentiality__baselineComment?: string;
  /**
   * Confidentiality  Baseline Likelihood
   * @description Baselinelikelihood
   * @enum {string}
   */
  confidentiality__baselineLikelihood?: "likely" | "limited" | "maximum" | "negligible" | "unlikely";
  /**
   * Confidentiality  Baseline Severity
   * @description Represents the severity of a risk
   * @enum {string}
   */
  confidentiality__baselineSeverity?: "high" | "low" | "medium" | "very_high" | "very_low";
  /**
   * Confidentiality  Impacts
   * @description List of impacts that confidentiality risk can have. At least one element is necessary DPIA is saved as activated
   */
  confidentiality__impacts?: {
      /**
       * Id
       * @description Identifier for the impact of confidentiality risk. Can be an UUID if it"s a custom impact or one of the keys of the default impacts that we offer
       */
      id: string;
      /**
       * Name
       * @description Name
       */
      name?: string;
  }[];
  /**
   * Confidentiality  Impacts Comment
   * @description Comment to add additional information about the confidentiality risk impacts
   */
  confidentiality__impactsComment?: string;
  /**
   * Confidentiality  Implemented Toms
   * @description List of TOMs that are implemented to prevent confidentiality risk. At least one element is necessary DPIA is saved as activated
   */
  confidentiality__implementedToms?: string[];
  /**
   * Confidentiality  Implemented Toms Comment
   * @description Comment to add additional information about implemented TOMs to prevent confidentiality risk
   */
  confidentiality__implementedTomsComment?: string;
  /**
   * Confidentiality  Planned Toms
   * @description List of TOMs that are planned to be implemented to prevent confidentiality risk. At least one element is necessary DPIA is saved as activated
   */
  confidentiality__plannedToms?: string[];
  /**
   * Confidentiality  Planned Toms Comment
   * @description Comment to add additional information about planned TOMs to prevent confidentiality risk
   */
  confidentiality__plannedTomsComment?: string;
  /**
   * Confidentiality  Residual Risk Comment
   * @description Comment to add additional information about the residual risk of the confidentiality
   */
  confidentiality__residualRiskComment?: string;
  /**
   * Confidentiality  Residual Risk Likelihood
   * @description Residualrisklikelihood
   * @enum {string}
   */
  confidentiality__residualRiskLikelihood?: "likely" | "limited" | "maximum" | "negligible" | "unlikely";
  /**
   * Confidentiality  Residual Risk Severity
   * @description Represents the severity of a risk
   * @enum {string}
   */
  confidentiality__residualRiskSeverity?: "high" | "low" | "medium" | "very_high" | "very_low";
  /**
   * Confidentiality  Risk Sources
   * @description List of risk sources that confidentiality risk can have. At least one element is necessary DPIA is saved as activated
   */
  confidentiality__riskSources?: {
      /**
       * Id
       * @description Identifier for the risk source of a risk. Can be an UUID if it"s a custom risk source or one of the keys of the default risk sources that we offer
       */
      id: string;
      /**
       * Name
       * @description Name of the risk source
       */
      name?: string;
  }[];
  /**
   * Confidentiality  Risk Sources Comment
   * @description Comment to add additional information about the confidentiality risk sources
   */
  confidentiality__riskSourcesComment?: string;
  /**
   * Confidentiality  Threats
   * @description List of threats that confidentiality risk can have. At least one element is necessary DPIA is saved as activated
   */
  confidentiality__threats?: {
      /**
       * Id
       * @description Identifier for the threat of confidentiality risk. Can be an UUID if it"s a custom threat or one of the keys of the default threats that we offer
       */
      id: string;
      /**
       * Name
       * @description Name
       */
      name?: string;
  }[];
  /**
   * Confidentiality  Threats Comment
   * @description Comment to add additional information about the confidentiality risk threats
   */
  confidentiality__threatsComment?: string;
  /**
   * Created At
   * @description Createdat
   */
  createdAt?: number;
  /**
   * Integrity  Baseline Comment
   * @description Comment to add additional information about the baseline risk of the integrity
   */
  integrity__baselineComment?: string;
  /**
   * Integrity  Baseline Likelihood
   * @description Baselinelikelihood
   * @enum {string}
   */
  integrity__baselineLikelihood?: "likely" | "limited" | "maximum" | "negligible" | "unlikely";
  /**
   * Integrity  Baseline Severity
   * @description Represents the severity of a risk
   * @enum {string}
   */
  integrity__baselineSeverity?: "high" | "low" | "medium" | "very_high" | "very_low";
  /**
   * Integrity  Impacts
   * @description List of impacts that integrity risk can have. At least one element is necessary DPIA is saved as activated
   */
  integrity__impacts?: {
      /**
       * Id
       * @description Identifier for the impact of confidentiality risk. Can be an UUID if it"s a custom impact or one of the keys of the default impacts that we offer
       */
      id: string;
      /**
       * Name
       * @description Name
       */
      name?: string;
  }[];
  /**
   * Integrity  Impacts Comment
   * @description Comment to add additional information about the integrity impacts
   */
  integrity__impactsComment?: string;
  /**
   * Integrity  Implemented Toms
   * @description List of TOMs that are implemented to prevent integrity risk. At least one element is necessary DPIA is saved as activated
   */
  integrity__implementedToms?: string[];
  /**
   * Integrity  Implemented Toms Comment
   * @description Comment to add additional information about implemented TOMs to prevent integrity risk
   */
  integrity__implementedTomsComment?: string;
  /**
   * Integrity  Planned Toms
   * @description List of TOMs that are planned to be implemented to prevent integrity risk. At least one element is necessary DPIA is saved as activated
   */
  integrity__plannedToms?: string[];
  /**
   * Integrity  Planned Toms Comment
   * @description Comment to add additional information about planned TOMs to prevent integrity risk
   */
  integrity__plannedTomsComment?: string;
  /**
   * Integrity  Residual Risk Comment
   * @description Comment to add additional information about the residual risk of the integrity
   */
  integrity__residualRiskComment?: string;
  /**
   * Integrity  Residual Risk Likelihood
   * @description Residualrisklikelihood
   * @enum {string}
   */
  integrity__residualRiskLikelihood?: "likely" | "limited" | "maximum" | "negligible" | "unlikely";
  /**
   * Integrity  Residual Risk Severity
   * @description Represents the severity of a risk
   * @enum {string}
   */
  integrity__residualRiskSeverity?: "high" | "low" | "medium" | "very_high" | "very_low";
  /**
   * Integrity  Risk Sources
   * @description List of risk sources that integrity risk can have. At least one element is necessary DPIA is saved as activated
   */
  integrity__riskSources?: {
      /**
       * Id
       * @description Identifier for the risk source of a risk. Can be an UUID if it"s a custom risk source or one of the keys of the default risk sources that we offer
       */
      id: string;
      /**
       * Name
       * @description Name of the risk source
       */
      name?: string;
  }[];
  /**
   * Integrity  Risk Sources Comment
   * @description Comment to add additional information about the integrity risk sources
   */
  integrity__riskSourcesComment?: string;
  /**
   * Integrity  Threats
   * @description List of threats that integrity risk can have. At least one element is necessary DPIA is saved as activated
   */
  integrity__threats?: {
      /**
       * Id
       * @description Identifier for the threat of confidentiality risk. Can be an UUID if it"s a custom threat or one of the keys of the default threats that we offer
       */
      id: string;
      /**
       * Name
       * @description Name
       */
      name?: string;
  }[];
  /**
   * Integrity  Threats Comment
   * @description Comment to add additional information about the integrity threats
   */
  integrity__threatsComment?: string;
  /**
   * Privacy Framework  Accuracy
   * @description Field to explain if the data processed is accurate, high quality and up-to-date Mandatory if DPIA is saved as activated
   */
  privacyFramework__accuracy?: string;
  /**
   * Privacy Framework  Additional Comment
   * @description Field to add more information related to the privacy framework of the DPIA
   */
  privacyFramework__additionalComment?: string;
  /**
   * Privacy Framework  Consent
   * @description Field to describe the measures to ensure that the consent of the data subjects has been obtained and how the given consent can be revoked Mandatory if DPIA is saved as activated and the lawfulness "consent_person_concerned" selected
   */
  privacyFramework__consent?: string;
  /**
   * Privacy Framework  Data Minimisation
   * @description Field to explain if the data collected adequate, relevant, and limited to what is necessary concerning the purposes for which it is processed Mandatory if DPIA is saved as activated
   */
  privacyFramework__dataMinimisation?: string;
  /**
   * Privacy Framework  Data Rights Exercised
   * @description Field to describe how do data subjects exercise their data subject rights? Mandatory if DPIA is saved as activated
   */
  privacyFramework__dataRightsExercised?: string;
  /**
   * Privacy Framework  Purpose Limitation
   * @description Field to explain the clear, specific and legitimate purpose of conducting the processing activity. Mandatory if DPIA is saved as activated
   */
  privacyFramework__purposeLimitation?: string;
  /**
   * Privacy Framework  Retention
   * @description Is the retention period lawful and clearly defined? Mandatory if DPIA is saved as activated
   */
  privacyFramework__retention?: boolean;
  /**
   * Privacy Framework  Retention Comment
   * @description Field to add comment on the retention period
   */
  privacyFramework__retentionComment?: string;
  /**
   * Privacy Framework  Transparency
   * @description Field to describe what kind of notice information is given to data subjects about this processing, and how is it provided to the data subjects? Mandatory if DPIA is saved as activated
   */
  privacyFramework__transparency?: string;
  /**
   * Processing Activity Id
   * @description Identifier of the processing activity for which we are creating a DPIA
   */
  processingActivityId?: string;
  /**
   * Status
   * @description The status of the DPIA. If a DPIA is saved as activated, several fields are required
   * @enum {string}
   */
  status?: "activated" | "draft";
  /**
   * Translations
   * @description Translations
   */
  translations?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Updated At
   * @description Updatedat
   */
  updatedAt?: number;
};

/**
 * Type of BORNEO's BORNEO_CREATE_DPIA_FOR_PROCESSING_ACTIVITY tool output.
 */
type BORNEO_CREATE_DPIA_FOR_PROCESSING_ACTIVITY_OUTPUT = {
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
 * Type of BORNEO's BORNEO_CREATE_EMPLOYEE_WITH_JSON_PAYLOAD tool input.
 */
type BORNEO_CREATE_EMPLOYEE_WITH_JSON_PAYLOAD_INPUT = {
  /**
   * Created By
   * @description Createdby
   */
  createdBy?: string;
  /**
   * Department
   * @description the department of the employee
   */
  department?: string;
  /**
   * Email
   * @description the email of the employee
   */
  email?: string;
  /**
   * End Date
   * @description Date when the employee end to work in your company
   */
  endDate?: string;
  /**
   * Manager
   * @description employeeId of the employee who is manager of the employee
   */
  manager?: string;
  /**
   * Name
   * @description The name of the employee
   */
  name?: string;
  /**
   * Nif
   * @description The NIF of the employee
   */
  nif?: string;
  /**
   * Position
   * @description The position of the employee in the company.
   */
  position?: string;
  /**
   * Reference Id
   * @description Internal identifier to synchronize with external APIS
   */
  referenceId?: string;
  /**
   * Start Date
   * @description Date when the employee began to work in your company
   */
  startDate?: string;
  /**
   * Surname
   * @description The surname of the employee
   */
  surname?: string;
};

/**
 * Type of BORNEO's BORNEO_CREATE_EMPLOYEE_WITH_JSON_PAYLOAD tool output.
 */
type BORNEO_CREATE_EMPLOYEE_WITH_JSON_PAYLOAD_OUTPUT = {
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
 * Type of BORNEO's BORNEO_CREATE_HEADQUARTER_ENTRY tool input.
 */
type BORNEO_CREATE_HEADQUARTER_ENTRY_INPUT = {
  /**
   * Address
   * @description The address of the headquarter
   */
  address?: string;
  /**
   * City
   * @description The locality of the headquarter
   */
  city?: string;
  /**
   * Country
   * @description 2 letter code that identifies a country.
   */
  country?: string;
  /**
   * Name
   * @description The name of the headquarter
   */
  name?: string;
  /**
   * Tom Ids
   * @description Tomids
   */
  tomIds?: string[];
  /**
   * Zipcode
   * @description The zipcode of the headquarter
   */
  zipcode?: string;
};

/**
 * Type of BORNEO's BORNEO_CREATE_HEADQUARTER_ENTRY tool output.
 */
type BORNEO_CREATE_HEADQUARTER_ENTRY_OUTPUT = {
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
 * Type of BORNEO's BORNEO_CREATE_LEGAL_DOCUMENT_ENTRY tool input.
 */
type BORNEO_CREATE_LEGAL_DOCUMENT_ENTRY_INPUT = {
  /**
   * Document Link
   * @description Documentlink
   */
  documentLink?: string;
  /**
   * From Discovered Document Id
   * @description Fromdiscovereddocumentid
   */
  fromDiscoveredDocumentId?: string;
  /**
   * Is Discover Infotype
   * @description Isdiscoverinfotype
   */
  isDiscoverInfotype?: boolean;
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Region
   * @description Region
   */
  region?: string;
  /**
   * Source
   * @description Source
   */
  source?: string;
  /**
   * Type
   * @description Type
   * @enum {string}
   */
  type?: "DATA_PROCESSING" | "PRIVACY_POLICY";
};

/**
 * Type of BORNEO's BORNEO_CREATE_LEGAL_DOCUMENT_ENTRY tool output.
 */
type BORNEO_CREATE_LEGAL_DOCUMENT_ENTRY_OUTPUT = {
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
 * Type of BORNEO's BORNEO_CREATE_NEW_ASSET tool input.
 */
type BORNEO_CREATE_NEW_ASSET_INPUT = {
  /**
   * Created At
   * @description Createdat
   */
  createdAt?: number;
  /**
   * Location Id
   * @description Locationid
   */
  locationId?: string;
  /**
   * Location Type
   * @description Locationtype
   * @enum {string}
   */
  locationType?: "external" | "office" | "remote";
  /**
   * Name
   * @description Name of the asset to create
   */
  name?: string;
  /**
   * Tom Ids
   * @description Tomids
   */
  tomIds?: string[];
  /**
   * Type
   * @description Indicates the type of the asset. An asset can be one of the several options.
   * @enum {string}
   */
  type?: "applications" | "cloudServices" | "communications" | "dataInformation" | "externalStorage" | "filingRoom" | "furniture" | "hardware" | "hosting" | "other" | "paperDocumentation" | "printer" | "server" | "shredder" | "videoSurveillance";
};

/**
 * Type of BORNEO's BORNEO_CREATE_NEW_ASSET tool output.
 */
type BORNEO_CREATE_NEW_ASSET_OUTPUT = {
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
 * Type of BORNEO's BORNEO_CREATE_NEW_INFOTYPE_CATEGORY tool input.
 */
type BORNEO_CREATE_NEW_INFOTYPE_CATEGORY_INPUT = {
  /**
   * Category Label
   * @description The name of the infotype category.
   */
  categoryLabel?: string;
  /**
   * Description
   * @description Description of the infotype category.
   */
  description?: string;
  /**
   * Infotypes
   * @description The list of infotypes that belong to this category.
   */
  infotypes?: string[];
};

/**
 * Type of BORNEO's BORNEO_CREATE_NEW_INFOTYPE_CATEGORY tool output.
 */
type BORNEO_CREATE_NEW_INFOTYPE_CATEGORY_OUTPUT = {
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
 * Type of BORNEO's BORNEO_CREATE_PROCESSING_ACTIVITY tool input.
 */
type BORNEO_CREATE_PROCESSING_ACTIVITY_INPUT = {
  /**
   * Active
   * @description Flag to create the processing activity as activated or draft
   */
  active?: boolean;
  /**
   * Additional Info
   * @description Text to add more information about the processing activity
   */
  additionalInfo?: string;
  /**
   * Additional Info Files
   * @description List of uploaded file ids.
   */
  additionalInfoFiles?: string[];
  /**
   * Are Access Requests Managed
   * @description Indicates if the data subject access requests are managed.
   */
  areAccessRequestsManaged?: boolean;
  /**
   * Assets
   * @description List assets ids related to the processing activity.
   */
  assets?: string[];
  /**
   * Company Role
   * @description Companyrole
   */
  companyRole?: string[];
  /**
   * Contact Person
   * @description Contact person for the processing activity.
   */
  contactPerson?: string;
  /**
   * Created At
   * @description Createdat
   */
  createdAt?: number;
  /**
   * Data Flow Relationships
   * @description Dataflowrelationships
   */
  dataFlowRelationships?: {
      /**
       * From  Type
       * @description Type
       * @enum {string}
       */
      from__type?: "MyOrganisation" | "dataSource" | "recipient" | "specificProcessingActivity";
      /**
       * From  Value
       * @description Value
       */
      from__value?: string;
      /**
       * To  Type
       * @description Type
       * @enum {string}
       */
      to__type?: "MyOrganisation" | "dataSource" | "recipient" | "specificProcessingActivity";
      /**
       * To  Value
       * @description Value
       */
      to__value?: string;
  }[];
  /**
   * Data Sources
   * @description Datasources
   */
  dataSources?: string[];
  /**
   * Data Subjects
   * @description List of Data Subjects affected by the processing activity
   */
  dataSubjects?: string[];
  /**
   * Data Types
   * @description Datatypes
   */
  dataTypes?: string[];
  /**
   * Departments
   * @description List departments related with the processing activity.
   */
  departments?: string[];
  /**
   * Infotype Categories
   * @description List of info types categories related with the processing activity.
   */
  infotypeCategories?: string[];
  /**
   * Infotype Volume
   * @description Ranges of the processed infotype volume.
   * @enum {string}
   */
  infotypeVolume?: "0-1000" | "1000-10000" | "10000-100000" | "100000+";
  /**
   * Infotypes
   * @description List of info types related with the processing activity.
   */
  infotypes?: string[];
  /**
   * Is Data Stored
   * @description Indicates if you store the data.
   */
  isDataStored?: boolean;
  /**
   * Language
   * @description Language
   * @enum {string}
   */
  language?: "ar" | "de" | "en" | "es" | "es-EC" | "es-MX" | "fr" | "hi" | "it" | "ja" | "pt" | "zh";
  /**
   * Lawful Basis
   * @description List of Lawfulness types affected by a processing activity
   */
  lawfulBasis?: {
      /**
       * Comment
       * @description Comment
       */
      comment?: string;
      /**
       * Lawfulness Type
       * @description Represents a Lawful Basis
       * @enum {string}
       */
      lawfulnessType: "consent_person_concerned" | "contract" | "legal_obligation" | "legitimate_interest" | "public_interest" | "stakeholder_vital_interest";
  }[];
  /**
   * Management Methods
   * @description Managementmethods
   */
  managementMethods?: {
      /**
       * Email
       * @description Email
       */
      email?: string;
      /**
       * Method Type
       * @description Management method type of data subject access requests.
       * @enum {string}
       */
      methodType: "email" | "postal";
      /**
       * Postal Address  City
       * @description City
       */
      postalAddress__city?: string;
      /**
       * Postal Address  Country
       * @description 2 letter code that identifies a country.
       */
      postalAddress__country?: string;
      /**
       * Postal Address  Street
       * @description Street
       */
      postalAddress__street?: string;
      /**
       * Postal Address  Zipcode
       * @description The zipcode of the headquarter
       */
      postalAddress__zipcode?: string;
  }[];
  /**
   * Model Id
   * @description Modelid
   */
  modelId?: string;
  /**
   * Name
   * @description Name of the processing activity
   */
  name?: string;
  /**
   * Owner
   * @description Owner
   */
  owner?: string;
  /**
   * Processing Activities As Data Sources
   * @description Processingactivitiesasdatasources
   */
  processingActivitiesAsDataSources?: string[];
  /**
   * Processing Frequency
   * @description Data processing frequency.
   * @enum {string}
   */
  processingFrequency?: "is_systematic" | "not_systematic";
  /**
   * Processing Frequency Comment
   * @description Processingfrequencycomment
   */
  processingFrequencyComment?: string;
  /**
   * Purpose
   * @description Purpose
   */
  purpose?: string;
  /**
   * Recipients
   * @description List of recipients related with the processing activity.
   */
  recipients?: {
      /**
       * Comment
       * @description Comment
       */
      comment?: string;
      /**
       * Recipient Id
       * @description Identifier of the recipient
       */
      recipientId: string;
      /**
       * Role
       * @description Role of the recipient for this processing activity. The role of a recipient can be different between processing activities
       */
      role: string[];
  }[];
  /**
   * Retention Period Comment
   * @description Retentionperiodcomment
   */
  retentionPeriodComment?: string;
  /**
   * Retention Period  Unit
   * @description Unit of time that is used for retention period
   * @enum {string}
   */
  retentionPeriod__unit?: "day" | "month" | "week" | "year";
  /**
   * Retention Period  Value
   * @description Value
   */
  retentionPeriod__value?: number;
  /**
   * Show On Ropa Document
   * @description Showonropadocument
   */
  showOnRopaDocument?: boolean;
  /**
   * Translations
   * @description Translations
   */
  translations?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Updated At
   * @description Updatedat
   */
  updatedAt?: number;
};

/**
 * Type of BORNEO's BORNEO_CREATE_PROCESSING_ACTIVITY tool output.
 */
type BORNEO_CREATE_PROCESSING_ACTIVITY_OUTPUT = {
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
 * Type of BORNEO's BORNEO_CREATE_PROCESSING_ACTIVITY_THRESHOLD tool input.
 */
type BORNEO_CREATE_PROCESSING_ACTIVITY_THRESHOLD_INPUT = {
  /**
   * Additional Comment
   * @description Additionalcomment
   */
  additionalComment?: boolean;
  /**
   * Comment
   * @description Additional information related to the Threshold
   */
  comment?: string;
  /**
   * Freedom Risk Processing Data
   * @description Freedomriskprocessingdata
   */
  freedomRiskProcessingData?: boolean;
  /**
   * Innovative Technologies Used
   * @description Innovativetechnologiesused
   */
  innovativeTechnologiesUsed?: boolean;
  /**
   * Large Scale Observation
   * @description Largescaleobservation
   */
  largeScaleObservation?: boolean;
  /**
   * Processing Activity Id
   * @description Identifier of the processing activity for which the threshold will be created
   */
  processingActivityId?: string;
  /**
   * Processing Personal Data Risk
   * @description Processingpersonaldatarisk
   */
  processingPersonalDataRisk?: boolean;
  /**
   * Processing Vulnerable Data Subject
   * @description Processingvulnerabledatasubject
   */
  processingVulnerableDataSubject?: boolean;
  /**
   * Rights Risk Processing Data
   * @description Rightsriskprocessingdata
   */
  rightsRiskProcessingData?: boolean;
  /**
   * Sensitive Or Special Data
   * @description Sensitiveorspecialdata
   */
  sensitiveOrSpecialData?: boolean;
  /**
   * Special Category Data Processed
   * @description Specialcategorydataprocessed
   */
  specialCategoryDataProcessed?: boolean;
  /**
   * Status
   * @description Status of the threshold. Can be draft or activated.
   * @enum {string}
   */
  status?: "activated" | "draft";
  /**
   * Systematic Personal Assessment
   * @description Systematicpersonalassessment
   */
  systematicPersonalAssessment?: boolean;
};

/**
 * Type of BORNEO's BORNEO_CREATE_PROCESSING_ACTIVITY_THRESHOLD tool output.
 */
type BORNEO_CREATE_PROCESSING_ACTIVITY_THRESHOLD_OUTPUT = {
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
 * Type of BORNEO's BORNEO_CREATE_RECIPIENT_WITH_DETAILS tool input.
 */
type BORNEO_CREATE_RECIPIENT_WITH_DETAILS_INPUT = {
  /**
   * Business Name
   * @description Business name of the recipient
   */
  businessName?: string;
  /**
   * Categories
   * @description list of recipient category
   */
  categories?: string[];
  /**
   * Country
   * @description 2 letter code that identifies a country.
   */
  country?: string;
  /**
   * Created At
   * @description Createdat
   */
  createdAt?: number;
  /**
   * Data Storage Location
   * @description List of countries where the data related to this recipient are stored
   */
  dataStorageLocation?: string[];
  /**
   * Dpa
   * @description The url to the DPA of the recipient
   */
  dpa?: string;
  /**
   * Dpa Files
   * @description List of uploaded file ids.
   */
  dpaFiles?: string[];
  /**
   * Dpa Status
   * @description The status of the DPA of the recipient. Attached if the DPA is provided. Not required when it"s not necessary to provide the information. Requested when we ask for the DPA and we are waiting for it.
   * @enum {string}
   */
  dpaStatus?: "attached" | "notRequired" | "requested";
  /**
   * From Discovered Recipient Id
   * @description Fromdiscoveredrecipientid
   */
  fromDiscoveredRecipientId?: string;
  /**
   * Name
   * @description Name of the recipient. Has to be unique, 2 different recipients can"t have the same name.
   */
  name?: string;
  /**
   * Recipient Model Id
   * @description Identifier of the Recipient Model in case that the Recipient is created bases in a Recipient Model
   */
  recipientModelId?: string;
  /**
   * Recipient State
   * @description Recipientstate
   * @enum {string}
   */
  recipientState?: "active" | "assessment";
  /**
   * Recipient Warranties
   * @description List of lawful basis types that applies to the recipient.
   */
  recipientWarranties?: string[];
  /**
   * Role
   * @description Role
   */
  role?: string[];
  /**
   * State
   * @description 2 letter code that identifies the state of the recipient. It only applies when the recipient country is US
   * @enum {string}
   */
  state?: "AK" | "AL" | "AR" | "AZ" | "CA" | "CO" | "CT" | "DC" | "DE" | "FL" | "GA" | "HI" | "IA" | "ID" | "IL" | "IN" | "KS" | "KY" | "LA" | "MA" | "MD" | "ME" | "MI" | "MN" | "MO" | "MS" | "MT" | "NC" | "ND" | "NE" | "NH" | "NJ" | "NM" | "NV" | "NY" | "OH" | "OK" | "OR" | "PA" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VA" | "VT" | "WA" | "WI" | "WV" | "WY";
  /**
   * Status
   * @description The status of the recipient. Can be archived or validated.
   * @enum {string}
   */
  status?: "archived" | "validated";
  /**
   * Sub Processor Ids
   * @description Subprocessorids
   */
  subProcessorIds?: string[];
  /**
   * Updated At
   * @description Updatedat
   */
  updatedAt?: number;
};

/**
 * Type of BORNEO's BORNEO_CREATE_RECIPIENT_WITH_DETAILS tool output.
 */
type BORNEO_CREATE_RECIPIENT_WITH_DETAILS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_CREATE_THRESHOLD_FOR_PROCESSING_ACTIVITY tool input.
 */
type BORNEO_CREATE_THRESHOLD_FOR_PROCESSING_ACTIVITY_INPUT = {
  /**
   * Automated Decision Making
   * @description Indicates if there is automated decision-making with legal effect, or similarly significant effect involved
   */
  automatedDecisionMaking?: boolean;
  /**
   * Blacklist
   * @description Indicates if the data processing is included in a black list
   */
  blacklist?: boolean;
  /**
   * Classifying Data Subject
   * @description Indicates if this data processing is assessing or classifying data subjects
   */
  classifyingDataSubject?: boolean;
  /**
   * Comment
   * @description Additional information related to the Threshold
   */
  comment?: string;
  /**
   * Created At
   * @description Createdat
   */
  createdAt?: number;
  /**
   * Extensive Automated Evaluation Characteristics
   * @description Indicates if the data processing involve any systematic, extensive and automated evaluation of personal characteristics with effect for the data subjects.
   */
  extensiveAutomatedEvaluationCharacteristics?: boolean;
  /**
   * Innovative Technologies Used
   * @description Indicates if there are innovative technologies used
   */
  innovativeTechnologiesUsed?: boolean;
  /**
   * Large Scale Data Processing
   * @description Indicates if is a large scale data processing
   */
  largeScaleDataProcessing?: boolean;
  /**
   * Large Scale Processing Sensitive Data
   * @description Indicates if the data processing is large scale processing of sensitive data.
   */
  largeScaleProcessingSensitiveData?: boolean;
  /**
   * Matching Merging Records Involved
   * @description Indicates if there is matching or merging of the records involved
   */
  matchingMergingRecordsInvolved?: boolean;
  /**
   * Monitoring Publicly Accessible Areas
   * @description Indicates if the data processing is systematic and large scale monitoring of publicly accessible areas involved.
   */
  monitoringPubliclyAccessibleAreas?: boolean;
  /**
   * Prevent Data Subjects Exercising Their Rights
   * @description Indicates if the data processing prevents the data subjects from exercising their rights, using a service or performing a contract
   */
  preventDataSubjectsExercisingTheirRights?: boolean;
  /**
   * Processing Activity Id
   * @description Identifier of the processing activity for which the threshold will be created
   */
  processingActivityId?: string;
  /**
   * Processing Confidential Sensitive Data
   * @description Indicates if there is processing of confidential or sensitive data
   */
  processingConfidentialSensitiveData?: boolean;
  /**
   * Processing Vulnerable Data Subject
   * @description Indicates if there is processing of data of vulnerable data subjects
   */
  processingVulnerableDataSubject?: boolean;
  /**
   * Status
   * @description Status of the threshold. Can be draft or activated.
   * @enum {string}
   */
  status?: "activated" | "draft";
  /**
   * Systematic Monitoring Data Subject
   * @description Indicates if there is systematic monitoring of data subjects involved
   */
  systematicMonitoringDataSubject?: boolean;
  /**
   * Translations
   * @description Translations
   */
  translations?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
  /**
   * Updated At
   * @description Updatedat
   */
  updatedAt?: number;
};

/**
 * Type of BORNEO's BORNEO_CREATE_THRESHOLD_FOR_PROCESSING_ACTIVITY tool output.
 */
type BORNEO_CREATE_THRESHOLD_FOR_PROCESSING_ACTIVITY_OUTPUT = {
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
 * Type of BORNEO's BORNEO_DELETE_ASSET_BY_ID tool input.
 */
type BORNEO_DELETE_ASSET_BY_ID_INPUT = {
  /**
   * Asset Id
   * @description Identifier of the asset
   */
  assetId?: string;
};

/**
 * Type of BORNEO's BORNEO_DELETE_ASSET_BY_ID tool output.
 */
type BORNEO_DELETE_ASSET_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_DELETE_CATEGORY_BY_LABEL tool input.
 */
type BORNEO_DELETE_CATEGORY_BY_LABEL_INPUT = {
  /**
   * Category Label
   * @description The name of the infotype category.
   */
  categoryLabel?: string;
};

/**
 * Type of BORNEO's BORNEO_DELETE_CATEGORY_BY_LABEL tool output.
 */
type BORNEO_DELETE_CATEGORY_BY_LABEL_OUTPUT = {
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
 * Type of BORNEO's BORNEO_DELETE_DASHBOARD_REPORT_BY_ID tool input.
 */
type BORNEO_DELETE_DASHBOARD_REPORT_BY_ID_INPUT = {
  /**
   * Dashboard Report Id
   * @description Dashboardreportid
   */
  dashboardReportId?: string;
};

/**
 * Type of BORNEO's BORNEO_DELETE_DASHBOARD_REPORT_BY_ID tool output.
 */
type BORNEO_DELETE_DASHBOARD_REPORT_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_DELETE_DEPARTMENT_BY_ID tool input.
 */
type BORNEO_DELETE_DEPARTMENT_BY_ID_INPUT = {
  /**
   * Department Id
   * @description Identifier of the department.
   */
  departmentId?: string;
};

/**
 * Type of BORNEO's BORNEO_DELETE_DEPARTMENT_BY_ID tool output.
 */
type BORNEO_DELETE_DEPARTMENT_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_DELETE_DOMAIN_BY_ID tool input.
 */
type BORNEO_DELETE_DOMAIN_BY_ID_INPUT = {
  /**
   * Domain Id
   * @description Identifier of the domain.
   */
  domainId?: string;
};

/**
 * Type of BORNEO's BORNEO_DELETE_DOMAIN_BY_ID tool output.
 */
type BORNEO_DELETE_DOMAIN_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_DELETE_DPIA_BY_ID tool input.
 */
type BORNEO_DELETE_DPIA_BY_ID_INPUT = {
  /**
   * Dpia Id
   * @description Identifier of the DPIA
   */
  dpiaId?: string;
};

/**
 * Type of BORNEO's BORNEO_DELETE_DPIA_BY_ID tool output.
 */
type BORNEO_DELETE_DPIA_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_DELETE_EMPLOYEE_BY_ID tool input.
 */
type BORNEO_DELETE_EMPLOYEE_BY_ID_INPUT = {
  /**
   * Employee Id
   * @description Identifier of the employee
   */
  employeeId?: string;
};

/**
 * Type of BORNEO's BORNEO_DELETE_EMPLOYEE_BY_ID tool output.
 */
type BORNEO_DELETE_EMPLOYEE_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_DELETE_HEADQUARTERS_BY_ID tool input.
 */
type BORNEO_DELETE_HEADQUARTERS_BY_ID_INPUT = {
  /**
   * Headquarter Id
   * @description The identifier of the headquarter
   */
  headquarterId?: string;
};

/**
 * Type of BORNEO's BORNEO_DELETE_HEADQUARTERS_BY_ID tool output.
 */
type BORNEO_DELETE_HEADQUARTERS_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_DELETE_LEGAL_DOCUMENT_BY_ID tool input.
 */
type BORNEO_DELETE_LEGAL_DOCUMENT_BY_ID_INPUT = {
  /**
   * Document Id
   * @description Documentid
   */
  documentId?: string;
};

/**
 * Type of BORNEO's BORNEO_DELETE_LEGAL_DOCUMENT_BY_ID tool output.
 */
type BORNEO_DELETE_LEGAL_DOCUMENT_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_DELETE_LOPDP_THRESHOLD_BY_ID tool input.
 */
type BORNEO_DELETE_LOPDP_THRESHOLD_BY_ID_INPUT = {
  /**
   * Lopdp Threshold Id
   * @description Identifier of the Threshold
   */
  lopdpThresholdId?: string;
};

/**
 * Type of BORNEO's BORNEO_DELETE_LOPDP_THRESHOLD_BY_ID tool output.
 */
type BORNEO_DELETE_LOPDP_THRESHOLD_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_DELETE_PROCESSING_ACTIVITY_BY_ID tool input.
 */
type BORNEO_DELETE_PROCESSING_ACTIVITY_BY_ID_INPUT = {
  /**
   * Processing Activity Id
   * @description Identifier of the Processing Activity
   */
  processingActivityId?: string;
};

/**
 * Type of BORNEO's BORNEO_DELETE_PROCESSING_ACTIVITY_BY_ID tool output.
 */
type BORNEO_DELETE_PROCESSING_ACTIVITY_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_DELETE_RECIPIENT_BY_ID tool input.
 */
type BORNEO_DELETE_RECIPIENT_BY_ID_INPUT = {
  /**
   * Recipient Id
   * @description Identifier of the Recipient
   */
  recipientId?: string;
};

/**
 * Type of BORNEO's BORNEO_DELETE_RECIPIENT_BY_ID tool output.
 */
type BORNEO_DELETE_RECIPIENT_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_DELETE_TAG_FROM_RESOURCE tool input.
 */
type BORNEO_DELETE_TAG_FROM_RESOURCE_INPUT = {
  /**
   * Tag Key
   * @description Tagkey
   */
  tagKey?: string;
  /**
   * Tag Resources
   * @description Tagresources
   */
  tagResources?: {
      [key: string]: unknown;
  };
  /**
   * Tag Value
   * @description Tagvalue
   */
  tagValue?: string;
};

/**
 * Type of BORNEO's BORNEO_DELETE_TAG_FROM_RESOURCE tool output.
 */
type BORNEO_DELETE_TAG_FROM_RESOURCE_OUTPUT = {
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
 * Type of BORNEO's BORNEO_DELETE_THRESHOLD_BY_ID tool input.
 */
type BORNEO_DELETE_THRESHOLD_BY_ID_INPUT = {
  /**
   * Threshold Id
   * @description Identifier of the Threshold
   */
  thresholdId?: string;
};

/**
 * Type of BORNEO's BORNEO_DELETE_THRESHOLD_BY_ID tool output.
 */
type BORNEO_DELETE_THRESHOLD_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_DISABLE_DASHBOARD_USER_BY_USERNAME tool input.
 */
type BORNEO_DISABLE_DASHBOARD_USER_BY_USERNAME_INPUT = {
  /**
   * Username
   * @description Username
   */
  username?: string;
};

/**
 * Type of BORNEO's BORNEO_DISABLE_DASHBOARD_USER_BY_USERNAME tool output.
 */
type BORNEO_DISABLE_DASHBOARD_USER_BY_USERNAME_OUTPUT = {
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
 * Type of BORNEO's BORNEO_DOWNLOAD_DASHBOARD_REPORT tool input.
 */
type BORNEO_DOWNLOAD_DASHBOARD_REPORT_INPUT = {
  /**
   * Report Type
   * @description Reporttype
   * @enum {string}
   */
  reportType?: "DATA_DISCOVERY_DASHBOARD" | "PRIVACY_OPS_DASHBOARD" | "PRIVACY_OPS_DATA_FLOW";
};

/**
 * Type of BORNEO's BORNEO_DOWNLOAD_DASHBOARD_REPORT tool output.
 */
type BORNEO_DOWNLOAD_DASHBOARD_REPORT_OUTPUT = {
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
 * Type of BORNEO's BORNEO_DOWNLOAD_DASHBOARD_REPORT_EDITION tool input.
 */
type BORNEO_DOWNLOAD_DASHBOARD_REPORT_EDITION_INPUT = {
  /**
   * Report Edition Id
   * @description Reporteditionid
   */
  reportEditionId?: string;
};

/**
 * Type of BORNEO's BORNEO_DOWNLOAD_DASHBOARD_REPORT_EDITION tool output.
 */
type BORNEO_DOWNLOAD_DASHBOARD_REPORT_EDITION_OUTPUT = {
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
 * Type of BORNEO's BORNEO_ENABLE_DASHBOARD_USER tool input.
 */
type BORNEO_ENABLE_DASHBOARD_USER_INPUT = {
  /**
   * Username
   * @description Username
   */
  username?: string;
};

/**
 * Type of BORNEO's BORNEO_ENABLE_DASHBOARD_USER tool output.
 */
type BORNEO_ENABLE_DASHBOARD_USER_OUTPUT = {
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
 * Type of BORNEO's BORNEO_EVALUATE_DATA_BREACH_IMPACT tool input.
 */
type BORNEO_EVALUATE_DATA_BREACH_IMPACT_INPUT = {
  /**
   * Authorities Notified
   * @description Authoritiesnotified
   */
  authoritiesNotified?: boolean;
  /**
   * Companies Affected
   * @description Companiesaffected
   */
  companiesAffected?: string;
  /**
   * Data Breach Controller
   * @description Databreachcontroller
   */
  dataBreachController?: string;
  /**
   * Data Breach Id
   * @description Identifier of the DataBreach
   */
  dataBreachId?: string;
  /**
   * Data Breach Location
   * @description Databreachlocation
   * @enum {string}
   */
  dataBreachLocation?: "ourOrganisation" | "thirdPartyProcessor";
  /**
   * Data Subjects Notified
   * @description Datasubjectsnotified
   */
  dataSubjectsNotified?: boolean;
  /**
   * Evaluation
   * @description Evaluation
   */
  evaluation?: string;
  /**
   * Processor Notified
   * @description Processornotified
   */
  processorNotified?: boolean;
  /**
   * Processors Involved
   * @description Processorsinvolved
   */
  processorsInvolved?: string;
  /**
   * Report Language
   * @description Reportlanguage
   * @enum {string}
   */
  reportLanguage?: "ar" | "de" | "en" | "es" | "es-EC" | "es-MX" | "fr" | "hi" | "it" | "ja" | "pt" | "zh";
  /**
   * Role
   * @description Role of the recipient.
   * @enum {string}
   */
  role?: "controller" | "independent_controller" | "joint_controller" | "processor" | "sub_processor";
  /**
   * Save As Draft
   * @description Saveasdraft
   */
  saveAsDraft?: boolean;
};

/**
 * Type of BORNEO's BORNEO_EVALUATE_DATA_BREACH_IMPACT tool output.
 */
type BORNEO_EVALUATE_DATA_BREACH_IMPACT_OUTPUT = {
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
 * Type of BORNEO's BORNEO_EXPORT_FILTERED_LEAF_RESOURCES tool input.
 */
type BORNEO_EXPORT_FILTERED_LEAF_RESOURCES_INPUT = {
  /**
   * Detailed
   * @description Set to `true` if the results exported to have detailed column level information of the detected infotypes.
   */
  detailed?: boolean;
  /**
   * Filter  Account
   * @description One or more cloud provider account IDs.
   */
  filter__account?: string[];
  /**
   * Filter  Categories
   * @description Filter the resources matching with the list of categories.
   */
  filter__categories?: string[];
  /**
   * Filter  Classification
   * @description Filter the resources matching with the list of classifications.
   */
  filter__classification?: string[];
  /**
   * Filter  Database
   * @description List tables from a specific database. Supported for the following resource types: (RDS) PostgreSQL, (RDS) MySQL, MongoDB.
   */
  filter__database?: string[];
  /**
   * Filter  Dataset
   * @description List tables from a specific dataset. Supported for on the following resource types: BigQuery.
   */
  filter__dataset?: string[];
  /**
   * Filter  Drive Id
   * @description List drives from a specific driveId. Supported for the following resource types: Gdrive.
   */
  filter__driveId?: string[];
  /**
   * Filter  Drive Type
   * @description List drives from a specific drive type. Supported for the following resource types: Gdrive.
   */
  filter__driveType?: string[];
  /**
   * Filter  First Seen
   * @description Set of conditions for comparing two timestamps.
   */
  filter__firstSeen?: {
      [key: string]: number;
  };
  /**
   * Filter  Has Owner
   * @description Include only resources that have been assigned an owner.
   */
  filter__hasOwner?: boolean;
  /**
   * Filter  Info Types  Info Types
   * @description The list of infotypes to filter on.
   */
  filter__infoTypes__infoTypes?: string[];
  /**
   * Filter  Info Types  Ops
   * @description Ops
   * @enum {string}
   */
  filter__infoTypes__ops?: "AND" | "OR";
  /**
   * Filter  Instance
   * @description One or more resource IDs of the instances to which the resources belong, i.e. the parent resource ID.
   */
  filter__instance?: string[];
  /**
   * Filter  No Owner
   * @description Include only resources that have not been assigned an owner.
   */
  filter__noOwner?: boolean;
  /**
   * Filter  Org Unit Id
   * @description List orgUnits from a specific orgUnitIds. Supported for the following resource types: Gdrive.
   */
  filter__orgUnitId?: string[];
  /**
   * Filter  Parent Id
   * @description Filter the resources which has the specified parent ID.
   */
  filter__parentId?: string;
  /**
   * Filter  Region
   * @description One or more cloud provider regions.
   */
  filter__region?: string[];
  /**
   * Filter  Resource Id
   * @description Filter the resources with the specified resource IDs.
   */
  filter__resourceId?: string[];
  /**
   * Filter  Resource Tags
   * @description Filter the resources based on tags
   */
  filter__resourceTags?: {
      /**
       * Source
       * @description Source
       */
      source: string;
      /**
       * Tag Key
       * @description Tagkey
       */
      tagKey: string;
      /**
       * Tag Value
       * @description Tagvalue
       */
      tagValue: string;
  }[];
  /**
   * Filter  Resource Type
   * @description Filter the resources which can be scanned by Borneo.
   */
  filter__resourceType?: string[];
  /**
   * Filter  Scanned
   * @description Include only resources that have been scanned.
   */
  filter__scanned?: boolean;
  /**
   * Filter  Schema
   * @description List tables from a specific schema. Supported for the following resource types: Presto.
   */
  filter__schema?: string[];
  /**
   * Filter  Search
   * @description Free-text search on the resource name.
   */
  filter__search?: string;
  /**
   * Filter  Severity Score
   * @description Filter the resources based on the assigned risk severity score; "critical" = 4, "high" = 3, "medium" = 2, "low" = 1.
   */
  filter__severityScore?: string[];
  /**
   * Filter  Space Status
   * @description Filter conlfluences based on status
   */
  filter__spaceStatus?: string[];
  /**
   * Filter  Space Type
   * @description Filter conlfluences based on type
   */
  filter__spaceType?: string[];
  /**
   * Filter  Status
   * @description Filter the resources based on list of status.
   */
  filter__status?: string[];
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
  /**
   * Source Type
   * @description Filter resource based on the source type. eg: "MYSQL", "RDS_MYSQL", "S3", "PRESTO", etc.
   */
  sourceType?: string;
};

/**
 * Type of BORNEO's BORNEO_EXPORT_FILTERED_LEAF_RESOURCES tool output.
 */
type BORNEO_EXPORT_FILTERED_LEAF_RESOURCES_OUTPUT = {
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
 * Type of BORNEO's BORNEO_EXPORT_INSIGHT_PAGE_USING_SCAN_ID tool input.
 */
type BORNEO_EXPORT_INSIGHT_PAGE_USING_SCAN_ID_INPUT = {
  /**
   * Detailed
   * @description Set to `true` if the results exported to have detailed column level information of the detected infotypes  with masked tokens if captured.
   */
  detailed?: boolean;
  /**
   * Filter  Categories
   * @description infotype categories
   */
  filter__categories?: string[];
  /**
   * Filter  File Extension
   * @description Fileextension
   */
  filter__fileExtension?: string[];
  /**
   * Filter  Info Types  Info Types
   * @description The list of infotypes to filter on.
   */
  filter__infoTypes__infoTypes?: string[];
  /**
   * Filter  Info Types  Ops
   * @description Ops
   * @enum {string}
   */
  filter__infoTypes__ops?: "AND" | "OR";
  /**
   * Filter  Infotype Confidence
   * @description Infotypeconfidence
   */
  filter__infotypeConfidence?: string[];
  /**
   * Filter  Page Id
   * @description Unique page ID. Only applicable to page-level results.
   */
  filter__pageId?: string;
  /**
   * Filter  Resource Ids
   * @description One or more resource IDs for which to retrieve results. Only applicable to page-level results.
   */
  filter__resourceIds?: string[];
  /**
   * Filter  Resource Type
   * @description Resource type to filter results by.
   */
  filter__resourceType?: string;
  /**
   * Filter  Scan Id
   * @description Unique scan ID.
   */
  filter__scanId?: string;
  /**
   * Filter  Scan Iteration Id
   * @description Unique scan iteration ID to fetch results for a specific run of
   */
  filter__scanIterationId?: string;
  /**
   * Filter  Search
   * @description Free-text search on the resource name.
   */
  filter__search?: string;
  /**
   * Filter  Status
   * @description Status
   */
  filter__status?: string[];
  /**
   * Filter  User Emails
   * @description Useremails
   */
  filter__userEmails?: string[];
  /**
   * Scan Id
   * @description The unique scan ID.
   */
  scanId?: string;
};

/**
 * Type of BORNEO's BORNEO_EXPORT_INSIGHT_PAGE_USING_SCAN_ID tool output.
 */
type BORNEO_EXPORT_INSIGHT_PAGE_USING_SCAN_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_EXPORT_INVENTORY_RESOURCE_LIST tool input.
 */
type BORNEO_EXPORT_INVENTORY_RESOURCE_LIST_INPUT = {
  /**
   * Filter  Account Id
   * @description The account ID of the cloud account to which the resoure belongs. E.g. a 12-digit AWS account ID.
   */
  filter__accountId?: string;
  /**
   * Filter  Classification
   * @description Filter the resources based on classification and are non-compliant. eg "PII_L1", "PII_L2", "PII_L3". Custom added classifications is also supported.
   */
  filter__classification?: string[];
  /**
   * Filter  Data Risks
   * @description Filter the resources that has data risks.
   */
  filter__dataRisks?: string[];
  /**
   * Filter  Data Source Categories
   * @description Filter the resources based on the data source category Current supported values: AWS_DATA_STORES, GCP_DATA_STORES, STANDALONE_DATA_STORES, CLOUD_APPLICATIONS, DISCOVERED_APPLICATIONS
   */
  filter__dataSourceCategories?: string[];
  /**
   * Filter  First Seen
   * @description Set of conditions for comparing two timestamps.
   */
  filter__firstSeen?: {
      [key: string]: number;
  };
  /**
   * Filter  Has Owner
   * @description Include only resources that have been assigned an owner.
   */
  filter__hasOwner?: boolean;
  /**
   * Filter  Has Pii
   * @description Include only resources that have a high likelihood of containing PII based on the resource metadata.
   */
  filter__hasPii?: boolean;
  /**
   * Filter  Hide Borneo Resources
   * @description Whether to hide resources that are part of the Borneo data plane.
   * @default false
   */
  filter__hideBorneoResources: boolean;
  /**
   * Filter  No Owner
   * @description Include only resources that have not been assigned an owner.
   */
  filter__noOwner?: boolean;
  /**
   * Filter  Parent Id
   * @description The parent Id of the resource. E.g. Borneo-specific GCP subscription ID for GCP resources
   */
  filter__parentId?: string;
  /**
   * Filter  Region
   * @description The region of the cloud account to which the resoure belongs.
   */
  filter__region?: string;
  /**
   * Filter  Regions
   * @description List of regions to which the resoure belongs to in that cloud account.
   */
  filter__regions?: string[];
  /**
   * Filter  Resource Ids
   * @description One or more resource IDs to return.
   */
  filter__resourceIds?: string[];
  /**
   * Filter  Resource Tags
   * @description Filter the resources based on tags
   */
  filter__resourceTags?: {
      /**
       * Source
       * @description Source
       */
      source: string;
      /**
       * Tag Key
       * @description Tagkey
       */
      tagKey: string;
      /**
       * Tag Value
       * @description Tagvalue
       */
      tagValue: string;
  }[];
  /**
   * Filter  Resource Type
   * @description Filter the resources based on the resource type.
   */
  filter__resourceType?: string;
  /**
   * Filter  Scannable Resource Types
   * @description Filter the resources that are scannable
   */
  filter__scannableResourceTypes?: boolean;
  /**
   * Filter  Search
   * @description Free-text search on the resource name.
   */
  filter__search?: string;
  /**
   * Filter  Severity Score
   * @description Filter the resources based on the assigned risk severity score; "critical" = 4, "high" = 3, "medium" = 2, "low" = 1.
   */
  filter__severityScore?: number[];
  /**
   * Include  Child Resource Stats  Data Size
   * @description Include aggregate data size stats from child resources.
   */
  include__childResourceStats__dataSize?: boolean;
  /**
   * Include  Child Resource Stats  Scans
   * @description Include aggregate scan stats from child resources.
   */
  include__childResourceStats__scans?: boolean;
  /**
   * Include  Framework Exceptions Count
   * @description Include framework exceptions count for the resource and its children
   */
  include__frameworkExceptionsCount?: boolean;
  /**
   * Include  Violation Metrics
   * @description Include violation count by severity for resource and child resources.
   */
  include__violationMetrics?: boolean;
  /**
   * Next Token
   * @description Optional "nextToken" value from the last API response.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Select
   * @description A list of property names to return in the response. If not specified, all resource properties will be returned.
   */
  select?: string[];
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_EXPORT_INVENTORY_RESOURCE_LIST tool output.
 */
type BORNEO_EXPORT_INVENTORY_RESOURCE_LIST_OUTPUT = {
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
 * Type of BORNEO's BORNEO_EXPORT_PROCESSING_ACTIVITIES_LIST tool input.
 */
type BORNEO_EXPORT_PROCESSING_ACTIVITIES_LIST_INPUT = {
  /**
   * Export Types
   * @description Exporttypes
   */
  exportTypes?: string[];
  /**
   * Filter  Data Subjects
   * @description Datasubjects
   */
  filter__dataSubjects?: string[];
  /**
   * Filter  Departments
   * @description Departments
   */
  filter__departments?: string[];
  /**
   * Filter  Employees
   * @description Employees
   */
  filter__employees?: string[];
  /**
   * Filter  Infotypes
   * @description Infotypes
   */
  filter__infotypes?: string[];
  /**
   * Filter  Owners
   * @description Owners
   */
  filter__owners?: string[];
  /**
   * Filter  Processing Activity Id
   * @description Processingactivityid
   */
  filter__processingActivityId?: string;
  /**
   * Filter  Recipients
   * @description Recipients
   */
  filter__recipients?: string[];
  /**
   * Filter  Search
   * @description Search
   */
  filter__search?: string;
  /**
   * Filter  Status
   * @description Status
   */
  filter__status?: string[];
  /**
   * Language
   * @description Language
   * @enum {string}
   */
  language?: "ar" | "de" | "en" | "es" | "es-EC" | "es-MX" | "fr" | "hi" | "it" | "ja" | "pt" | "zh";
};

/**
 * Type of BORNEO's BORNEO_EXPORT_PROCESSING_ACTIVITIES_LIST tool output.
 */
type BORNEO_EXPORT_PROCESSING_ACTIVITIES_LIST_OUTPUT = {
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
 * Type of BORNEO's BORNEO_EXPORT_RECIPIENTS_LIST_WITH_FILTER tool input.
 */
type BORNEO_EXPORT_RECIPIENTS_LIST_WITH_FILTER_INPUT = {
  /**
   * Export Types
   * @description Exporttypes
   */
  exportTypes?: string[];
  /**
   * Filter  Automation Status
   * @description Automationstatus
   */
  filter__automationStatus?: string[];
  /**
   * Filter  Categories
   * @description list of recipient category
   */
  filter__categories?: string[];
  /**
   * Filter  Departments
   * @description Departments
   */
  filter__departments?: string[];
  /**
   * Filter  Discovery Source
   * @description Discoverysource
   */
  filter__discoverySource?: string[];
  /**
   * Filter  Recipient Ids
   * @description Recipientids
   */
  filter__recipientIds?: string[];
  /**
   * Filter  Recipient State
   * @description Recipientstate
   */
  filter__recipientState?: string[];
  /**
   * Filter  Recipient Warranties
   * @description Recipientwarranties
   */
  filter__recipientWarranties?: string[];
  /**
   * Filter  Role
   * @description Role
   */
  filter__role?: string[];
  /**
   * Filter  Search
   * @description Free-form text search to apply to the Recipient name.
   */
  filter__search?: string;
  /**
   * Filter  Status
   * @description The status of the recipient. Can be archived or validated.
   * @enum {string}
   */
  filter__status?: "archived" | "validated";
  /**
   * Filter  Sub Processor Ids
   * @description Subprocessorids
   */
  filter__subProcessorIds?: string[];
  /**
   * Filter  Used In
   * @description Usedin
   */
  filter__usedIn?: {
      [key: string]: unknown;
  };
  /**
   * Filter  With No Processing Activity
   * @description Withnoprocessingactivity
   */
  filter__withNoProcessingActivity?: boolean;
};

/**
 * Type of BORNEO's BORNEO_EXPORT_RECIPIENTS_LIST_WITH_FILTER tool output.
 */
type BORNEO_EXPORT_RECIPIENTS_LIST_WITH_FILTER_OUTPUT = {
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
 * Type of BORNEO's BORNEO_FETCH_DASHBOARD_REPORT_BY_ID tool input.
 */
type BORNEO_FETCH_DASHBOARD_REPORT_BY_ID_INPUT = {
  /**
   * Dashboard Report Id
   * @description Dashboardreportid
   */
  dashboardReportId?: string;
};

/**
 * Type of BORNEO's BORNEO_FETCH_DASHBOARD_REPORT_BY_ID tool output.
 */
type BORNEO_FETCH_DASHBOARD_REPORT_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_FETCH_DATA_BREACH_EVALUATION tool input.
 */
type BORNEO_FETCH_DATA_BREACH_EVALUATION_INPUT = {
  /**
   * Data Breach Id
   * @description Identifier of the DataBreach
   */
  dataBreachId?: string;
};

/**
 * Type of BORNEO's BORNEO_FETCH_DATA_BREACH_EVALUATION tool output.
 */
type BORNEO_FETCH_DATA_BREACH_EVALUATION_OUTPUT = {
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
 * Type of BORNEO's BORNEO_FILTER_AND_LIST_INSPECTION_RESULTS tool input.
 */
type BORNEO_FILTER_AND_LIST_INSPECTION_RESULTS_INPUT = {
  /**
   * Filter  Categories
   * @description infotype categories
   */
  filter__categories?: string[];
  /**
   * Filter  File Extension
   * @description Fileextension
   */
  filter__fileExtension?: string[];
  /**
   * Filter  Info Types  Info Types
   * @description The list of infotypes to filter on.
   */
  filter__infoTypes__infoTypes?: string[];
  /**
   * Filter  Info Types  Ops
   * @description Ops
   * @enum {string}
   */
  filter__infoTypes__ops?: "AND" | "OR";
  /**
   * Filter  Infotype Confidence
   * @description Infotypeconfidence
   */
  filter__infotypeConfidence?: string[];
  /**
   * Filter  Page Id
   * @description Unique page ID. Only applicable to page-level results.
   */
  filter__pageId?: string;
  /**
   * Filter  Resource Ids
   * @description One or more resource IDs for which to retrieve results. Only applicable to page-level results.
   */
  filter__resourceIds?: string[];
  /**
   * Filter  Resource Type
   * @description Resource type to filter results by.
   */
  filter__resourceType?: string;
  /**
   * Filter  Scan Id
   * @description Unique scan ID.
   */
  filter__scanId?: string;
  /**
   * Filter  Scan Iteration Id
   * @description Unique scan iteration ID to fetch results for a specific run of
   */
  filter__scanIterationId?: string;
  /**
   * Filter  Search
   * @description Free-text search on the resource name.
   */
  filter__search?: string;
  /**
   * Filter  Status
   * @description Status
   */
  filter__status?: string[];
  /**
   * Filter  User Emails
   * @description Useremails
   */
  filter__userEmails?: string[];
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
  /**
   * Type
   * @description Type of inspection result, i.e. scan-level or page-level results.
   * @enum {string}
   */
  type?: "page" | "scan";
};

/**
 * Type of BORNEO's BORNEO_FILTER_AND_LIST_INSPECTION_RESULTS tool output.
 */
type BORNEO_FILTER_AND_LIST_INSPECTION_RESULTS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_FILTER_AND_SORT_ASSETS_LIST tool input.
 */
type BORNEO_FILTER_AND_SORT_ASSETS_LIST_INPUT = {
  /**
   * Filter  Search
   * @description Free-form text search to apply to the asset name.
   */
  filter__search?: string;
  /**
   * Filter  Type
   * @description Type
   */
  filter__type?: string[];
  /**
   * Max Results
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  maxResults?: number;
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_FILTER_AND_SORT_ASSETS_LIST tool output.
 */
type BORNEO_FILTER_AND_SORT_ASSETS_LIST_OUTPUT = {
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
 * Type of BORNEO's BORNEO_FILTER_EMPLOYEE_LIST tool input.
 */
type BORNEO_FILTER_EMPLOYEE_LIST_INPUT = object;

/**
 * Type of BORNEO's BORNEO_FILTER_EMPLOYEE_LIST tool output.
 */
type BORNEO_FILTER_EMPLOYEE_LIST_OUTPUT = {
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
 * Type of BORNEO's BORNEO_FILTER_RECIPIENTS_LIST tool input.
 */
type BORNEO_FILTER_RECIPIENTS_LIST_INPUT = object;

/**
 * Type of BORNEO's BORNEO_FILTER_RECIPIENTS_LIST tool output.
 */
type BORNEO_FILTER_RECIPIENTS_LIST_OUTPUT = {
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
 * Type of BORNEO's BORNEO_GET_CATEGORY_BY_LABEL tool input.
 */
type BORNEO_GET_CATEGORY_BY_LABEL_INPUT = {
  /**
   * Category Label
   * @description The name of the infotype category.
   */
  categoryLabel?: string;
};

/**
 * Type of BORNEO's BORNEO_GET_CATEGORY_BY_LABEL tool output.
 */
type BORNEO_GET_CATEGORY_BY_LABEL_OUTPUT = {
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
 * Type of BORNEO's BORNEO_GET_CLOUD_ACCOUNT_BY_ID tool input.
 */
type BORNEO_GET_CLOUD_ACCOUNT_BY_ID_INPUT = {
  /**
   * Cloud Account Id
   * @description The cloud-provider specific account ID, e.g. a 12-digit AWS account ID.
   */
  cloudAccountId?: string;
};

/**
 * Type of BORNEO's BORNEO_GET_CLOUD_ACCOUNT_BY_ID tool output.
 */
type BORNEO_GET_CLOUD_ACCOUNT_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_GET_DASHBOARD_REPORT_EDITION_BY_ID tool input.
 */
type BORNEO_GET_DASHBOARD_REPORT_EDITION_BY_ID_INPUT = {
  /**
   * Report Edition Id
   * @description Reporteditionid
   */
  reportEditionId?: string;
};

/**
 * Type of BORNEO's BORNEO_GET_DASHBOARD_REPORT_EDITION_BY_ID tool output.
 */
type BORNEO_GET_DASHBOARD_REPORT_EDITION_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_GET_DEPARTMENT_FILTER_LIST tool input.
 */
type BORNEO_GET_DEPARTMENT_FILTER_LIST_INPUT = object;

/**
 * Type of BORNEO's BORNEO_GET_DEPARTMENT_FILTER_LIST tool output.
 */
type BORNEO_GET_DEPARTMENT_FILTER_LIST_OUTPUT = {
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
 * Type of BORNEO's BORNEO_GET_DOMAIN_BY_ID tool input.
 */
type BORNEO_GET_DOMAIN_BY_ID_INPUT = {
  /**
   * Domain Id
   * @description Identifier of the domain.
   */
  domainId?: string;
};

/**
 * Type of BORNEO's BORNEO_GET_DOMAIN_BY_ID tool output.
 */
type BORNEO_GET_DOMAIN_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_GET_HEADQUARTERS_BY_ID tool input.
 */
type BORNEO_GET_HEADQUARTERS_BY_ID_INPUT = {
  /**
   * Headquarter Id
   * @description The identifier of the headquarter
   */
  headquarterId?: string;
};

/**
 * Type of BORNEO's BORNEO_GET_HEADQUARTERS_BY_ID tool output.
 */
type BORNEO_GET_HEADQUARTERS_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_GET_INSIGHT_BY_TYPE_AND_ID tool input.
 */
type BORNEO_GET_INSIGHT_BY_TYPE_AND_ID_INPUT = {
  /**
   * Id
   * @description The unique ID of the inspection result to fetch.
   */
  id?: string;
  /**
   * Type
   * @description The type of inspection result to fetch.
   * @enum {string}
   */
  type?: "page" | "scan";
};

/**
 * Type of BORNEO's BORNEO_GET_INSIGHT_BY_TYPE_AND_ID tool output.
 */
type BORNEO_GET_INSIGHT_BY_TYPE_AND_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_GET_RESOURCE_INVENTORY_BY_ID tool input.
 */
type BORNEO_GET_RESOURCE_INVENTORY_BY_ID_INPUT = {
  /**
   * Resource Id
   * @description The unique resource ID.
   */
  resourceId?: string;
};

/**
 * Type of BORNEO's BORNEO_GET_RESOURCE_INVENTORY_BY_ID tool output.
 */
type BORNEO_GET_RESOURCE_INVENTORY_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_GET_SCAN_BY_SCAN_ID tool input.
 */
type BORNEO_GET_SCAN_BY_SCAN_ID_INPUT = {
  /**
   * Scan Id
   * @description Scanid
   */
  scanId?: string;
};

/**
 * Type of BORNEO's BORNEO_GET_SCAN_BY_SCAN_ID tool output.
 */
type BORNEO_GET_SCAN_BY_SCAN_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_GET_THRESHOLD_BY_ID tool input.
 */
type BORNEO_GET_THRESHOLD_BY_ID_INPUT = {
  /**
   * Threshold Id
   * @description Identifier of the Threshold
   */
  thresholdId?: string;
};

/**
 * Type of BORNEO's BORNEO_GET_THRESHOLD_BY_ID tool output.
 */
type BORNEO_GET_THRESHOLD_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_GET_USER_PROFILE_BY_ID tool input.
 */
type BORNEO_GET_USER_PROFILE_BY_ID_INPUT = {
  /**
   * User Id
   * @description Userid
   */
  userId?: string;
};

/**
 * Type of BORNEO's BORNEO_GET_USER_PROFILE_BY_ID tool output.
 */
type BORNEO_GET_USER_PROFILE_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_DASHBOARD_REPORTS_WITH_FILTERS tool input.
 */
type BORNEO_LIST_DASHBOARD_REPORTS_WITH_FILTERS_INPUT = {
  /**
   * Filter  Frequency
   * @description Frequency
   */
  filter__frequency?: string[];
  /**
   * Filter  Search
   * @description Free-form text search to apply to the scan name.
   */
  filter__search?: string;
  /**
   * Filter  Type
   * @description Type
   */
  filter__type?: string[];
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_DASHBOARD_REPORTS_WITH_FILTERS tool output.
 */
type BORNEO_LIST_DASHBOARD_REPORTS_WITH_FILTERS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_DASHBOARD_REPORT_EDITIONS tool input.
 */
type BORNEO_LIST_DASHBOARD_REPORT_EDITIONS_INPUT = {
  /**
   * Dashboard Report Id
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  dashboardReportId?: string;
  /**
   * Next Token
   * @description Nexttoken
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_DASHBOARD_REPORT_EDITIONS tool output.
 */
type BORNEO_LIST_DASHBOARD_REPORT_EDITIONS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_DASHBOARD_USERS_WITH_FILTERS tool input.
 */
type BORNEO_LIST_DASHBOARD_USERS_WITH_FILTERS_INPUT = {
  /**
   * Filter  Departments
   * @description Departments
   */
  filter__departments?: string[];
  /**
   * Filter  Organisation Id
   * @description Organisationid
   */
  filter__organisationId?: number;
  /**
   * Filter  Roles
   * @description Roles
   */
  filter__roles?: string[];
  /**
   * Filter  Tenant Id
   * @description Tenantid
   */
  filter__tenantId?: string;
};

/**
 * Type of BORNEO's BORNEO_LIST_DASHBOARD_USERS_WITH_FILTERS tool output.
 */
type BORNEO_LIST_DASHBOARD_USERS_WITH_FILTERS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_DATA_BREACHES_WITH_FILTERS tool input.
 */
type BORNEO_LIST_DATA_BREACHES_WITH_FILTERS_INPUT = {
  /**
   * Filter  Authorities Notified
   * @description Authoritiesnotified
   */
  filter__authoritiesNotified?: boolean[];
  /**
   * Filter  Owner
   * @description Owner
   */
  filter__owner?: string[];
  /**
   * Filter  Search
   * @description Free-form text search to apply to data breaches short description.
   */
  filter__search?: string;
  /**
   * Filter  Status
   * @description Status
   */
  filter__status?: string[];
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_DATA_BREACHES_WITH_FILTERS tool output.
 */
type BORNEO_LIST_DATA_BREACHES_WITH_FILTERS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_DATA_BREACH_FILTERS tool input.
 */
type BORNEO_LIST_DATA_BREACH_FILTERS_INPUT = {
  /**
   * Filter Type
   * @description Filtertype
   * @enum {string}
   */
  filterType?: "owner" | "status";
};

/**
 * Type of BORNEO's BORNEO_LIST_DATA_BREACH_FILTERS tool output.
 */
type BORNEO_LIST_DATA_BREACH_FILTERS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_DEPARTMENTS_WITH_SORT_AND_PAGINATION tool input.
 */
type BORNEO_LIST_DEPARTMENTS_WITH_SORT_AND_PAGINATION_INPUT = {
  /**
   * Filter  Search
   * @description Free-form text search to apply to the department name.
   */
  filter__search?: string;
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_DEPARTMENTS_WITH_SORT_AND_PAGINATION tool output.
 */
type BORNEO_LIST_DEPARTMENTS_WITH_SORT_AND_PAGINATION_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_DISCOVERED_DOCUMENT tool input.
 */
type BORNEO_LIST_DISCOVERED_DOCUMENT_INPUT = {
  /**
   * Filter  Search
   * @description Free-form text search to apply to the scan name.
   */
  filter__search?: string;
  /**
   * Filter  Status
   * @description Status
   * @enum {string}
   */
  filter__status?: "ADDED" | "DELETED" | "DOMAIN_DELETED" | "IGNORED" | "NEW";
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_DISCOVERED_DOCUMENT tool output.
 */
type BORNEO_LIST_DISCOVERED_DOCUMENT_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_DISCOVERED_INFOTYPES tool input.
 */
type BORNEO_LIST_DISCOVERED_INFOTYPES_INPUT = {
  /**
   * Filter  Search
   * @description Free-form text search to apply to the scan name.
   */
  filter__search?: string;
  /**
   * Filter  Status
   * @description Status
   * @enum {string}
   */
  filter__status?: "APPROVED" | "APPROVED_AUTOMATICALLY" | "DELETED" | "IGNORED" | "NEW" | "NOT_PRESENT" | "REQUESTED";
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_DISCOVERED_INFOTYPES tool output.
 */
type BORNEO_LIST_DISCOVERED_INFOTYPES_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_DISCOVERED_RECIPIENTS tool input.
 */
type BORNEO_LIST_DISCOVERED_RECIPIENTS_INPUT = {
  /**
   * Filter  Discovery Source
   * @description Discoverysource
   */
  filter__discoverySource?: string[];
  /**
   * Filter  Search
   * @description Free-form text search to apply to the DiscoveredRecipient name.
   */
  filter__search?: string;
  /**
   * Filter  Status
   * @description Status of the discovered recipient. Can be new or ignored if it"s marked as ignored.
   * @enum {string}
   */
  filter__status?: "ignored" | "new";
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_DISCOVERED_RECIPIENTS tool output.
 */
type BORNEO_LIST_DISCOVERED_RECIPIENTS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_DOMAINS_WITH_PAGINATION_AND_SORTING tool input.
 */
type BORNEO_LIST_DOMAINS_WITH_PAGINATION_AND_SORTING_INPUT = {
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_DOMAINS_WITH_PAGINATION_AND_SORTING tool output.
 */
type BORNEO_LIST_DOMAINS_WITH_PAGINATION_AND_SORTING_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_EMPLOYEES_WITH_FILTERS tool input.
 */
type BORNEO_LIST_EMPLOYEES_WITH_FILTERS_INPUT = {
  /**
   * Filter  Department
   * @description Department
   */
  filter__department?: string[];
  /**
   * Filter  Search
   * @description Free-form text search to apply to the employee name.
   */
  filter__search?: string;
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_EMPLOYEES_WITH_FILTERS tool output.
 */
type BORNEO_LIST_EMPLOYEES_WITH_FILTERS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_ERROR_DETAILS_FROM_FILTERED_SCAN_ITERATIONS tool input.
 */
type BORNEO_LIST_ERROR_DETAILS_FROM_FILTERED_SCAN_ITERATIONS_INPUT = {
  /**
   * Filter  Account Id
   * @description Accountid
   */
  filter__accountId?: string;
  /**
   * Filter  Resource Id
   * @description Resourceid
   */
  filter__resourceId?: string;
  /**
   * Filter  Scan Execution Id
   * @description Scanexecutionid
   */
  filter__scanExecutionId?: string;
  /**
   * Filter  Scan Id
   * @description Scanid
   */
  filter__scanId?: string;
  /**
   * Filter  Scan Iteration Id
   * @description Scaniterationid
   */
  filter__scanIterationId?: string;
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Select
   * @description List of column names to include in the response.
   */
  select?: string[];
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_ERROR_DETAILS_FROM_FILTERED_SCAN_ITERATIONS tool output.
 */
type BORNEO_LIST_ERROR_DETAILS_FROM_FILTERED_SCAN_ITERATIONS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_EVENTS_WITH_FILTERS tool input.
 */
type BORNEO_LIST_EVENTS_WITH_FILTERS_INPUT = {
  /**
   * Filter  Event Id
   * @description Eventid
   */
  filter__eventId?: string[];
  /**
   * Filter  Issue Id
   * @description Issueid
   */
  filter__issueId?: string[];
  /**
   * Filter  Issue Type
   * @description Issuetype
   */
  filter__issueType?: string[];
  /**
   * Filter  New Infotype Found
   * @description Newinfotypefound
   */
  filter__newInfotypeFound?: boolean;
  /**
   * Filter  Resource Id
   * @description Resourceid
   */
  filter__resourceId?: string[];
  /**
   * Filter  Scan Id
   * @description Scanid
   */
  filter__scanId?: string[];
  /**
   * Filter  Search
   * @description Search
   */
  filter__search?: string;
  /**
   * Filter  User Id
   * @description Userid
   */
  filter__userId?: string[];
  /**
   * Next Token
   * @description Nexttoken
   */
  nextToken?: string;
  /**
   * Page Size
   * @description Pagesize
   */
  pageSize?: number;
  /**
   * Select
   * @description Select
   */
  select?: string[];
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_EVENTS_WITH_FILTERS tool output.
 */
type BORNEO_LIST_EVENTS_WITH_FILTERS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_FILTERED_SORTED_CATEGORIES tool input.
 */
type BORNEO_LIST_FILTERED_SORTED_CATEGORIES_INPUT = {
  /**
   * Filter  Categories
   * @description Categories
   */
  filter__categories?: string[];
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_FILTERED_SORTED_CATEGORIES tool output.
 */
type BORNEO_LIST_FILTERED_SORTED_CATEGORIES_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_FILTER_OPTIONS_FOR_RECIPIENTS tool input.
 */
type BORNEO_LIST_FILTER_OPTIONS_FOR_RECIPIENTS_INPUT = {
  /**
   * Filter Type
   * @description Filtertype
   * @enum {string}
   */
  filterType?: "categories" | "role";
};

/**
 * Type of BORNEO's BORNEO_LIST_FILTER_OPTIONS_FOR_RECIPIENTS tool output.
 */
type BORNEO_LIST_FILTER_OPTIONS_FOR_RECIPIENTS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_HEADQUARTERS_WITH_SORTING tool input.
 */
type BORNEO_LIST_HEADQUARTERS_WITH_SORTING_INPUT = {
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_HEADQUARTERS_WITH_SORTING tool output.
 */
type BORNEO_LIST_HEADQUARTERS_WITH_SORTING_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_INSIGHT_FILTERS tool input.
 */
type BORNEO_LIST_INSIGHT_FILTERS_INPUT = {
  /**
   * Filter Type
   * @description Filtertype
   * @enum {string}
   */
  filterType?: "fileExtension";
  /**
   * Scan Id
   * @description Scanid
   */
  scanId?: string;
};

/**
 * Type of BORNEO's BORNEO_LIST_INSIGHT_FILTERS tool output.
 */
type BORNEO_LIST_INSIGHT_FILTERS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_INVENTORY_RESOURCES_WITH_FILTERS tool input.
 */
type BORNEO_LIST_INVENTORY_RESOURCES_WITH_FILTERS_INPUT = {
  /**
   * Filter  Account Id
   * @description The account ID of the cloud account to which the resoure belongs. E.g. a 12-digit AWS account ID.
   */
  filter__accountId?: string;
  /**
   * Filter  Classification
   * @description Filter the resources based on classification and are non-compliant. eg "PII_L1", "PII_L2", "PII_L3". Custom added classifications is also supported.
   */
  filter__classification?: string[];
  /**
   * Filter  Data Risks
   * @description Filter the resources that has data risks.
   */
  filter__dataRisks?: string[];
  /**
   * Filter  Data Source Categories
   * @description Filter the resources based on the data source category Current supported values: AWS_DATA_STORES, GCP_DATA_STORES, STANDALONE_DATA_STORES, CLOUD_APPLICATIONS, DISCOVERED_APPLICATIONS
   */
  filter__dataSourceCategories?: string[];
  /**
   * Filter  First Seen
   * @description Set of conditions for comparing two timestamps.
   */
  filter__firstSeen?: {
      [key: string]: number;
  };
  /**
   * Filter  Has Owner
   * @description Include only resources that have been assigned an owner.
   */
  filter__hasOwner?: boolean;
  /**
   * Filter  Has Pii
   * @description Include only resources that have a high likelihood of containing PII based on the resource metadata.
   */
  filter__hasPii?: boolean;
  /**
   * Filter  Hide Borneo Resources
   * @description Whether to hide resources that are part of the Borneo data plane.
   * @default false
   */
  filter__hideBorneoResources: boolean;
  /**
   * Filter  No Owner
   * @description Include only resources that have not been assigned an owner.
   */
  filter__noOwner?: boolean;
  /**
   * Filter  Parent Id
   * @description The parent Id of the resource. E.g. Borneo-specific GCP subscription ID for GCP resources
   */
  filter__parentId?: string;
  /**
   * Filter  Region
   * @description The region of the cloud account to which the resoure belongs.
   */
  filter__region?: string;
  /**
   * Filter  Regions
   * @description List of regions to which the resoure belongs to in that cloud account.
   */
  filter__regions?: string[];
  /**
   * Filter  Resource Ids
   * @description One or more resource IDs to return.
   */
  filter__resourceIds?: string[];
  /**
   * Filter  Resource Tags
   * @description Filter the resources based on tags
   */
  filter__resourceTags?: {
      /**
       * Source
       * @description Source
       */
      source: string;
      /**
       * Tag Key
       * @description Tagkey
       */
      tagKey: string;
      /**
       * Tag Value
       * @description Tagvalue
       */
      tagValue: string;
  }[];
  /**
   * Filter  Resource Type
   * @description Filter the resources based on the resource type.
   */
  filter__resourceType?: string;
  /**
   * Filter  Scannable Resource Types
   * @description Filter the resources that are scannable
   */
  filter__scannableResourceTypes?: boolean;
  /**
   * Filter  Search
   * @description Free-text search on the resource name.
   */
  filter__search?: string;
  /**
   * Filter  Severity Score
   * @description Filter the resources based on the assigned risk severity score; "critical" = 4, "high" = 3, "medium" = 2, "low" = 1.
   */
  filter__severityScore?: number[];
  /**
   * Include  Child Resource Stats  Data Size
   * @description Include aggregate data size stats from child resources.
   */
  include__childResourceStats__dataSize?: boolean;
  /**
   * Include  Child Resource Stats  Scans
   * @description Include aggregate scan stats from child resources.
   */
  include__childResourceStats__scans?: boolean;
  /**
   * Include  Framework Exceptions Count
   * @description Include framework exceptions count for the resource and its children
   */
  include__frameworkExceptionsCount?: boolean;
  /**
   * Include  Violation Metrics
   * @description Include violation count by severity for resource and child resources.
   */
  include__violationMetrics?: boolean;
  /**
   * Next Token
   * @description Optional "nextToken" value from the last API response.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Select
   * @description A list of property names to return in the response. If not specified, all resource properties will be returned.
   */
  select?: string[];
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_INVENTORY_RESOURCES_WITH_FILTERS tool output.
 */
type BORNEO_LIST_INVENTORY_RESOURCES_WITH_FILTERS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_ISSUES_WITH_FILTERS tool input.
 */
type BORNEO_LIST_ISSUES_WITH_FILTERS_INPUT = {
  /**
   * Filter  Cloud Account Ids
   * @description List of cloud provider account IDs to filter by.
   */
  filter__cloudAccountIds?: string[];
  /**
   * Filter  Cloud Account Types
   * @description List of cloud provider account types to filter by.
   */
  filter__cloudAccountTypes?: string[];
  /**
   * Filter  Failed Controls
   * @description List of failed controls to filter by.
   */
  filter__failedControls?: string[];
  /**
   * Filter  Resource Types
   * @description List of resource types to filter by.
   */
  filter__resourceTypes?: string[];
  /**
   * Filter  Resources
   * @description List of resource IDs to filter by.
   */
  filter__resources?: string[];
  /**
   * Filter  Search
   * @description Free-text search on the resource name.
   */
  filter__search?: string;
  /**
   * Filter  Severities
   * @description List of issue severities to filter by.
   */
  filter__severities?: string[];
  /**
   * Filter  States
   * @description List of isssue states to filter by.
   */
  filter__states?: string[];
  /**
   * Include
   * @description The set of related resources that should be included in the response using a join-query.
   */
  include?: {
      [key: string]: boolean;
  };
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   * @default 10
   */
  pageSize: number;
  /**
   * Select
   * @description List of column names to include in the response.
   */
  select?: string[];
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_ISSUES_WITH_FILTERS tool output.
 */
type BORNEO_LIST_ISSUES_WITH_FILTERS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_LEAF_RESOURCES_WITH_FILTERS tool input.
 */
type BORNEO_LIST_LEAF_RESOURCES_WITH_FILTERS_INPUT = {
  /**
   * Filter  Account
   * @description One or more cloud provider account IDs.
   */
  filter__account?: string[];
  /**
   * Filter  Categories
   * @description Filter the resources matching with the list of categories.
   */
  filter__categories?: string[];
  /**
   * Filter  Classification
   * @description Filter the resources matching with the list of classifications.
   */
  filter__classification?: string[];
  /**
   * Filter  Database
   * @description List tables from a specific database. Supported for the following resource types: (RDS) PostgreSQL, (RDS) MySQL, MongoDB.
   */
  filter__database?: string[];
  /**
   * Filter  Dataset
   * @description List tables from a specific dataset. Supported for on the following resource types: BigQuery.
   */
  filter__dataset?: string[];
  /**
   * Filter  Drive Id
   * @description List drives from a specific driveId. Supported for the following resource types: Gdrive.
   */
  filter__driveId?: string[];
  /**
   * Filter  Drive Type
   * @description List drives from a specific drive type. Supported for the following resource types: Gdrive.
   */
  filter__driveType?: string[];
  /**
   * Filter  First Seen
   * @description Set of conditions for comparing two timestamps.
   */
  filter__firstSeen?: {
      [key: string]: number;
  };
  /**
   * Filter  Has Owner
   * @description Include only resources that have been assigned an owner.
   */
  filter__hasOwner?: boolean;
  /**
   * Filter  Info Types  Info Types
   * @description The list of infotypes to filter on.
   */
  filter__infoTypes__infoTypes?: string[];
  /**
   * Filter  Info Types  Ops
   * @description Ops
   * @enum {string}
   */
  filter__infoTypes__ops?: "AND" | "OR";
  /**
   * Filter  Instance
   * @description One or more resource IDs of the instances to which the resources belong, i.e. the parent resource ID.
   */
  filter__instance?: string[];
  /**
   * Filter  No Owner
   * @description Include only resources that have not been assigned an owner.
   */
  filter__noOwner?: boolean;
  /**
   * Filter  Org Unit Id
   * @description List orgUnits from a specific orgUnitIds. Supported for the following resource types: Gdrive.
   */
  filter__orgUnitId?: string[];
  /**
   * Filter  Parent Id
   * @description Filter the resources which has the specified parent ID.
   */
  filter__parentId?: string;
  /**
   * Filter  Region
   * @description One or more cloud provider regions.
   */
  filter__region?: string[];
  /**
   * Filter  Resource Id
   * @description Filter the resources with the specified resource IDs.
   */
  filter__resourceId?: string[];
  /**
   * Filter  Resource Tags
   * @description Filter the resources based on tags
   */
  filter__resourceTags?: {
      /**
       * Source
       * @description Source
       */
      source: string;
      /**
       * Tag Key
       * @description Tagkey
       */
      tagKey: string;
      /**
       * Tag Value
       * @description Tagvalue
       */
      tagValue: string;
  }[];
  /**
   * Filter  Resource Type
   * @description Filter the resources which can be scanned by Borneo.
   */
  filter__resourceType?: string[];
  /**
   * Filter  Scanned
   * @description Include only resources that have been scanned.
   */
  filter__scanned?: boolean;
  /**
   * Filter  Schema
   * @description List tables from a specific schema. Supported for the following resource types: Presto.
   */
  filter__schema?: string[];
  /**
   * Filter  Search
   * @description Free-text search on the resource name.
   */
  filter__search?: string;
  /**
   * Filter  Severity Score
   * @description Filter the resources based on the assigned risk severity score; "critical" = 4, "high" = 3, "medium" = 2, "low" = 1.
   */
  filter__severityScore?: string[];
  /**
   * Filter  Space Status
   * @description Filter conlfluences based on status
   */
  filter__spaceStatus?: string[];
  /**
   * Filter  Space Type
   * @description Filter conlfluences based on type
   */
  filter__spaceType?: string[];
  /**
   * Filter  Status
   * @description Filter the resources based on list of status.
   */
  filter__status?: string[];
  /**
   * Include  Framework Exceptions Count
   * @description Frameworkexceptionscount
   */
  include__frameworkExceptionsCount?: boolean;
  /**
   * Include  Violation Summary
   * @description Violationsummary
   */
  include__violationSummary?: boolean;
  /**
   * Next Token
   * @description Optional "nextToken" value from the last API response.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
  /**
   * Source Type
   * @description Filter resource based on the resource type.
   */
  sourceType?: string;
};

/**
 * Type of BORNEO's BORNEO_LIST_LEAF_RESOURCES_WITH_FILTERS tool output.
 */
type BORNEO_LIST_LEAF_RESOURCES_WITH_FILTERS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_LEGAL_DOCUMENTS_WITH_PAGINATION tool input.
 */
type BORNEO_LIST_LEGAL_DOCUMENTS_WITH_PAGINATION_INPUT = {
  /**
   * Filter  Search
   * @description Free-form text search to apply to the scan name.
   */
  filter__search?: string;
  /**
   * Filter  Status
   * @description Status
   * @enum {string}
   */
  filter__status?: "CREATED" | "DELETED" | "SCANNING";
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_LEGAL_DOCUMENTS_WITH_PAGINATION tool output.
 */
type BORNEO_LIST_LEGAL_DOCUMENTS_WITH_PAGINATION_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_OR_FILTER_RECIPIENTS tool input.
 */
type BORNEO_LIST_OR_FILTER_RECIPIENTS_INPUT = {
  /**
   * Filter  Automation Status
   * @description Automationstatus
   */
  filter__automationStatus?: string[];
  /**
   * Filter  Categories
   * @description list of recipient category
   */
  filter__categories?: string[];
  /**
   * Filter  Departments
   * @description Departments
   */
  filter__departments?: string[];
  /**
   * Filter  Discovery Source
   * @description Discoverysource
   */
  filter__discoverySource?: string[];
  /**
   * Filter  Recipient Ids
   * @description Recipientids
   */
  filter__recipientIds?: string[];
  /**
   * Filter  Recipient State
   * @description Recipientstate
   */
  filter__recipientState?: string[];
  /**
   * Filter  Recipient Warranties
   * @description Recipientwarranties
   */
  filter__recipientWarranties?: string[];
  /**
   * Filter  Role
   * @description Role
   */
  filter__role?: string[];
  /**
   * Filter  Search
   * @description Free-form text search to apply to the Recipient name.
   */
  filter__search?: string;
  /**
   * Filter  Status
   * @description The status of the recipient. Can be archived or validated.
   * @enum {string}
   */
  filter__status?: "archived" | "validated";
  /**
   * Filter  Sub Processor Ids
   * @description Subprocessorids
   */
  filter__subProcessorIds?: string[];
  /**
   * Filter  Used In
   * @description Usedin
   */
  filter__usedIn?: {
      [key: string]: unknown;
  };
  /**
   * Filter  With No Processing Activity
   * @description Withnoprocessingactivity
   */
  filter__withNoProcessingActivity?: boolean;
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_OR_FILTER_RECIPIENTS tool output.
 */
type BORNEO_LIST_OR_FILTER_RECIPIENTS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_PROCESSING_ACTIVITIES tool input.
 */
type BORNEO_LIST_PROCESSING_ACTIVITIES_INPUT = {
  /**
   * Filter  Assets
   * @description Assets
   */
  filter__assets?: string[];
  /**
   * Filter  Company Roles
   * @description Companyroles
   */
  filter__companyRoles?: string[];
  /**
   * Filter  Data Sources
   * @description Datasources
   */
  filter__dataSources?: string[];
  /**
   * Filter  Data Subjects
   * @description Datasubjects
   */
  filter__dataSubjects?: string[];
  /**
   * Filter  Data Types
   * @description Datatypes
   */
  filter__dataTypes?: string[];
  /**
   * Filter  Departments
   * @description Departments
   */
  filter__departments?: string[];
  /**
   * Filter  Employees
   * @description Employees
   */
  filter__employees?: string[];
  /**
   * Filter  Infotype Categories
   * @description Infotypecategories
   */
  filter__infotypeCategories?: string[];
  /**
   * Filter  Infotypes
   * @description Infotypes
   */
  filter__infotypes?: string[];
  /**
   * Filter  Languages
   * @description Languages
   */
  filter__languages?: string[];
  /**
   * Filter  Owners
   * @description Owners
   */
  filter__owners?: string[];
  /**
   * Filter  Pa As Data Source
   * @description Paasdatasource
   */
  filter__paAsDataSource?: string[];
  /**
   * Filter  Recipients
   * @description Recipients
   */
  filter__recipients?: string[];
  /**
   * Filter  Search
   * @description Free-form text search to apply to processing activity name.
   */
  filter__search?: string;
  /**
   * Filter  Status
   * @description Status
   */
  filter__status?: string[];
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_PROCESSING_ACTIVITIES tool output.
 */
type BORNEO_LIST_PROCESSING_ACTIVITIES_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_PROCESSING_ACTIVITIES_FILTERS tool input.
 */
type BORNEO_LIST_PROCESSING_ACTIVITIES_FILTERS_INPUT = {
  /**
   * Filter Type
   * @description Filtertype
   * @enum {string}
   */
  filterType?: "asset" | "companyRole" | "dataSubject" | "department" | "employee" | "owner" | "recipient" | "status";
};

/**
 * Type of BORNEO's BORNEO_LIST_PROCESSING_ACTIVITIES_FILTERS tool output.
 */
type BORNEO_LIST_PROCESSING_ACTIVITIES_FILTERS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_SCANS_WITH_FILTERS tool input.
 */
type BORNEO_LIST_SCANS_WITH_FILTERS_INPUT = {
  /**
   * Filter  Account Id
   * @description One or more AWS accounts to filter results by.
   */
  filter__accountId?: string[];
  /**
   * Filter  Connector Id
   * @description One or more connector IDs to filter results by.
   */
  filter__connectorId?: string[];
  /**
   * Filter  Data Plane Id
   * @description One or more data plane IDs to filter results by.
   */
  filter__dataPlaneId?: string[];
  /**
   * Filter  Data Plane Name
   * @description One or more data plane names to filter results by.
   */
  filter__dataPlaneName?: string[];
  /**
   * Filter  Gcp Project Id
   * @description One or more GCP projects to filter results by.
   */
  filter__gcpProjectId?: string[];
  /**
   * Filter  Info Types  Info Types
   * @description The list of infotypes to filter on.
   */
  filter__infoTypes__infoTypes?: string[];
  /**
   * Filter  Info Types  Ops
   * @description Ops
   * @enum {string}
   */
  filter__infoTypes__ops?: "AND" | "OR";
  /**
   * Filter  Resource Type
   * @description One or moreresource types to filter results by.
   */
  filter__resourceType?: string[];
  /**
   * Filter  Resources
   * @description One or more resource IDs to filter results by.
   */
  filter__resources?: string[];
  /**
   * Filter  Scan Type
   * @description One or more scan types (i.e. "full" or "sample") to filter results by.
   */
  filter__scanType?: string[];
  /**
   * Filter  Search
   * @description Free-form text search to apply to the scan name.
   */
  filter__search?: string;
  /**
   * Filter  Status
   * @description One or more scan statuses (e.g. `inprogress`, `completed`, etc.) to filter results by.
   */
  filter__status?: string[];
  /**
   * Get Next Execution
   * @description IF true, nextExecution will be populated for postponed and repeated scans
   */
  getNextExecution?: boolean;
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Select
   * @description List of column names to include in the response.
   */
  select?: string[];
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_SCANS_WITH_FILTERS tool output.
 */
type BORNEO_LIST_SCANS_WITH_FILTERS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_SCAN_EXECUTION_RESULTS tool input.
 */
type BORNEO_LIST_SCAN_EXECUTION_RESULTS_INPUT = {
  /**
   * Filter  Info Types  Info Types
   * @description The list of infotypes to filter on.
   */
  filter__infoTypes__infoTypes?: string[];
  /**
   * Filter  Info Types  Ops
   * @description Ops
   * @enum {string}
   */
  filter__infoTypes__ops?: "AND" | "OR";
  /**
   * Filter  Infotype Confidence
   * @description One or more confidence matches for the scan.
   */
  filter__infotypeConfidence?: string[];
  /**
   * Filter  Resource Ids
   * @description One or more resource IDs for which to retrieve results. Only applicable to page-level results.
   */
  filter__resourceIds?: string[];
  /**
   * Filter  Scan Id
   * @description Unique scan ID.
   */
  filter__scanId?: string;
  /**
   * Filter  Scan Iteration Id
   * @description Scaniterationid
   */
  filter__scanIterationId?: string;
  /**
   * Filter  Search
   * @description Free-text search on the resource name.
   */
  filter__search?: string;
  /**
   * Filter  Statuses
   * @description Statuses
   */
  filter__statuses?: string[];
  /**
   * Next Token
   * @description Nexttoken
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_SCAN_EXECUTION_RESULTS tool output.
 */
type BORNEO_LIST_SCAN_EXECUTION_RESULTS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_SCAN_ITERATIONS_WITH_FILTER tool input.
 */
type BORNEO_LIST_SCAN_ITERATIONS_WITH_FILTER_INPUT = {
  /**
   * Filter  Resource Id
   * @description Resourceid
   */
  filter__resourceId?: string;
  /**
   * Filter  Scan Id
   * @description Scanid
   */
  filter__scanId?: string;
  /**
   * Filter  Scan Iteration Id
   * @description Scaniterationid
   */
  filter__scanIterationId?: string;
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Select
   * @description List of column names to include in the response.
   */
  select?: string[];
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_SCAN_ITERATIONS_WITH_FILTER tool output.
 */
type BORNEO_LIST_SCAN_ITERATIONS_WITH_FILTER_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_TOMS_WITH_FILTER_AND_PAGINATION_OPTIONS tool input.
 */
type BORNEO_LIST_TOMS_WITH_FILTER_AND_PAGINATION_OPTIONS_INPUT = {
  /**
   * Filter  Category
   * @description Category
   */
  filter__category?: string[];
  /**
   * Filter  List
   * @description List
   */
  filter__list?: string[];
  /**
   * Filter  Object Category
   * @description Objectcategory
   */
  filter__objectCategory?: string[];
  /**
   * Filter  Search
   * @description Free-form text search to apply to the toms name.
   */
  filter__search?: string;
  /**
   * Filter  Status
   * @description Status
   */
  filter__status?: string[];
  /**
   * Filter  Tom Id
   * @description Tomid
   */
  filter__tomId?: string[];
  /**
   * Filter  Type
   * @description Type
   */
  filter__type?: string[];
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_TOMS_WITH_FILTER_AND_PAGINATION_OPTIONS tool output.
 */
type BORNEO_LIST_TOMS_WITH_FILTER_AND_PAGINATION_OPTIONS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_LIST_USER_PROFILE_WITH_FILTERS_AND_SORTING tool input.
 */
type BORNEO_LIST_USER_PROFILE_WITH_FILTERS_AND_SORTING_INPUT = {
  /**
   * Filter  Search
   * @description Search
   */
  filter__search?: string;
  /**
   * Next Token
   * @description Nexttoken
   */
  nextToken?: string;
  /**
   * Page Size
   * @description Pagesize
   */
  pageSize?: number;
  /**
   * Select
   * @description Select
   */
  select?: string[];
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_LIST_USER_PROFILE_WITH_FILTERS_AND_SORTING tool output.
 */
type BORNEO_LIST_USER_PROFILE_WITH_FILTERS_AND_SORTING_OUTPUT = {
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
 * Type of BORNEO's BORNEO_MARK_SCAN_FALSE_POSITIVES_BY_ID tool input.
 */
type BORNEO_MARK_SCAN_FALSE_POSITIVES_BY_ID_INPUT = {
  /**
   * Reports
   * @description Reports
   */
  reports?: string[];
  /**
   * Scan Id
   * @description The unique scan ID.
   */
  scanId?: string;
};

/**
 * Type of BORNEO's BORNEO_MARK_SCAN_FALSE_POSITIVES_BY_ID tool output.
 */
type BORNEO_MARK_SCAN_FALSE_POSITIVES_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_PAUSE_SCAN_BY_ID tool input.
 */
type BORNEO_PAUSE_SCAN_BY_ID_INPUT = {
  /**
   * Scan Id
   * @description The unique scan ID.
   */
  scanId?: string;
};

/**
 * Type of BORNEO's BORNEO_PAUSE_SCAN_BY_ID tool output.
 */
type BORNEO_PAUSE_SCAN_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_POLL_DOMAIN_BY_ID tool input.
 */
type BORNEO_POLL_DOMAIN_BY_ID_INPUT = {
  /**
   * Domain Id
   * @description Identifier of the domain.
   */
  domainId?: string;
};

/**
 * Type of BORNEO's BORNEO_POLL_DOMAIN_BY_ID tool output.
 */
type BORNEO_POLL_DOMAIN_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_POST_ACCOUNTS_WITH_FILTER_AND_SORT_OPTIONS tool input.
 */
type BORNEO_POST_ACCOUNTS_WITH_FILTER_AND_SORT_OPTIONS_INPUT = {
  /**
   * Filter  Account Id
   * @description Filter accounts by the Borneo account ID.
   */
  filter__accountId?: string[];
  /**
   * Filter  Active States
   * @description Filters out accounts which are not in deleting or deleted states
   */
  filter__activeStates?: boolean;
  /**
   * Filter  Cloud Account Id
   * @description Filter accounts by the cloud-provider specific account ID.
   */
  filter__cloudAccountId?: string[];
  /**
   * Filter  Search
   * @description Search for accounts by name.
   */
  filter__search?: string;
  /**
   * Filter  Status
   * @description Filter accounts by status.
   */
  filter__status?: string[];
  /**
   * Filter  Type
   * @description Filter accounts by account type.
   */
  filter__type?: string;
  /**
   * Next Token
   * @description Optional "nextToken" value from the last API response.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_POST_ACCOUNTS_WITH_FILTER_AND_SORT_OPTIONS tool output.
 */
type BORNEO_POST_ACCOUNTS_WITH_FILTER_AND_SORT_OPTIONS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_POST_CLASSIFICATION_STATS tool input.
 */
type BORNEO_POST_CLASSIFICATION_STATS_INPUT = {
  /**
   * Filter  Classification
   * @description Classification
   */
  filter__classification?: string;
};

/**
 * Type of BORNEO's BORNEO_POST_CLASSIFICATION_STATS tool output.
 */
type BORNEO_POST_CLASSIFICATION_STATS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_POST_CONNECTOR_WITH_FILTERING_OPTIONS tool input.
 */
type BORNEO_POST_CONNECTOR_WITH_FILTERING_OPTIONS_INPUT = {
  /**
   * Filter  Active States
   * @description Filters out connectors which are not in destroying or destroyed states
   */
  filter__activeStates?: boolean;
  /**
   * Filter  Connector Ids
   * @description Filter based on the connector IDs.
   */
  filter__connectorIds?: string[];
  /**
   * Filter  Connector Types
   * @description Filter based on the connector type.
   */
  filter__connectorTypes?: string[];
  /**
   * Filter  Data Plane Ids
   * @description Filter based on the data plane in which the connector is deployed.
   */
  filter__dataPlaneIds?: string[];
  /**
   * Filter  Names
   * @description Filter based on connector name.
   */
  filter__names?: string[];
  /**
   * Filter  Resource Ids
   * @description Filter based on the resource ID of the data source instance associated with the connector.
   */
  filter__resourceIds?: string[];
  /**
   * Filter  Resource Types
   * @description Filter based on the resource type that the connector supports.
   */
  filter__resourceTypes?: string[];
  /**
   * Filter  Search
   * @description Search for connectors by name.
   */
  filter__search?: string;
  /**
   * Filter  States
   * @description Filter based on connector state.
   */
  filter__states?: string[];
  /**
   * Next Token
   * @description Optional "nextToken" value from the last API response.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_POST_CONNECTOR_WITH_FILTERING_OPTIONS tool output.
 */
type BORNEO_POST_CONNECTOR_WITH_FILTERING_OPTIONS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_POST_CURRENT_DASHBOARD_USER tool input.
 */
type BORNEO_POST_CURRENT_DASHBOARD_USER_INPUT = object;

/**
 * Type of BORNEO's BORNEO_POST_CURRENT_DASHBOARD_USER tool output.
 */
type BORNEO_POST_CURRENT_DASHBOARD_USER_OUTPUT = {
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
 * Type of BORNEO's BORNEO_POST_DASHBOARD_REPORT tool input.
 */
type BORNEO_POST_DASHBOARD_REPORT_INPUT = {
  /**
   * Created By
   * @description Createdby
   */
  createdBy?: string;
  /**
   * External Email
   * @description Externalemail
   */
  externalEmail?: string[];
  /**
   * Frequency
   * @description The cron schedule expression to use for a recurring scan. Only a fixed set of cron expressions can be used to run scans at 30 minute, 1 hour, 1 day, or 1 week intervals.
   * @enum {string}
   */
  frequency?: "*/30 * * * *" | "0 */1 * * *" | "0 */12 * * *" | "0 */4 * * *" | "0 */6 * * *" | "0 */8 * * *" | "0 0 * * *" | "0 0 * * 0" | "0 0 1 * *" | "0 0 1 1,4,7,10 *" | "0 0 1 1,7 *";
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Recipients Email
   * @description Recipientsemail
   */
  recipientsEmail?: string[];
  /**
   * Report Types
   * @description Reporttypes
   */
  reportTypes?: string[];
  /**
   * Roles
   * @description Roles
   */
  roles?: string[];
  /**
   * Status
   * @description Status
   * @enum {string}
   */
  status?: "DELETED" | "ONCE" | "SCHEDULED";
  /**
   * Trigger Immediately
   * @description Triggerimmediately
   */
  triggerImmediately?: boolean;
};

/**
 * Type of BORNEO's BORNEO_POST_DASHBOARD_REPORT tool output.
 */
type BORNEO_POST_DASHBOARD_REPORT_OUTPUT = {
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
 * Type of BORNEO's BORNEO_POST_DATA_BREACH_INFORMATION tool input.
 */
type BORNEO_POST_DATA_BREACH_INFORMATION_INPUT = {
  /**
   * Additional Information
   * @description Additionalinformation
   */
  additionalInformation?: string[];
  /**
   * Affected People From
   * @description Affectedpeoplefrom
   */
  affectedPeopleFrom?: string;
  /**
   * Authorities Informed
   * @description Authoritiesinformed
   */
  authoritiesInformed?: string;
  /**
   * Compromised Sensitive Data
   * @description Compromisedsensitivedata
   */
  compromisedSensitiveData?: string;
  /**
   * Consequences
   * @description Consequences
   */
  consequences?: string;
  /**
   * Created At
   * @description Createdat
   */
  createdAt?: number;
  /**
   * Created By
   * @description Createdby
   */
  createdBy?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Discovered At
   * @description Discoveredat
   */
  discoveredAt?: number;
  /**
   * How Discovered
   * @description Howdiscovered
   */
  howDiscovered?: string;
  /**
   * Kind Of Data
   * @description Kindofdata
   */
  kindOfData?: string;
  /**
   * Language
   * @description Language
   * @enum {string}
   */
  language?: "ar" | "de" | "en" | "es" | "es-EC" | "es-MX" | "fr" | "hi" | "it" | "ja" | "pt" | "zh";
  /**
   * Measures To Prevent
   * @description Measurestoprevent
   */
  measuresToPrevent?: string;
  /**
   * Number Affected People
   * @description Numberaffectedpeople
   */
  numberAffectedPeople?: number;
  /**
   * Occurred At
   * @description Occurredat
   */
  occurredAt?: number;
  /**
   * People Informed
   * @description Peopleinformed
   */
  peopleInformed?: string;
  /**
   * Problem Of Security Measures
   * @description Problemofsecuritymeasures
   */
  problemOfSecurityMeasures?: string;
  /**
   * Profile People Affected
   * @description Profilepeopleaffected
   */
  profilePeopleAffected?: string;
  /**
   * Save As Draft
   * @description Saveasdraft
   */
  saveAsDraft?: boolean;
  /**
   * Security Measures Or Protocols
   * @description Securitymeasuresorprotocols
   */
  securityMeasuresOrProtocols?: string;
  /**
   * Short Description
   * @description Shortdescription
   */
  shortDescription?: string;
  /**
   * Was Intentional
   * @description Wasintentional
   */
  wasIntentional?: string;
};

/**
 * Type of BORNEO's BORNEO_POST_DATA_BREACH_INFORMATION tool output.
 */
type BORNEO_POST_DATA_BREACH_INFORMATION_OUTPUT = {
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
 * Type of BORNEO's BORNEO_POST_DISCOVERED_RECIPIENT_BY_ID tool input.
 */
type BORNEO_POST_DISCOVERED_RECIPIENT_BY_ID_INPUT = {
  /**
   * Discovered Recipient Id
   * @description Discoveredrecipientid
   */
  discoveredRecipientId?: string;
};

/**
 * Type of BORNEO's BORNEO_POST_DISCOVERED_RECIPIENT_BY_ID tool output.
 */
type BORNEO_POST_DISCOVERED_RECIPIENT_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_POST_FILTERED_ACCESS_LOGS tool input.
 */
type BORNEO_POST_FILTERED_ACCESS_LOGS_INPUT = {
  /**
   * Filter  Email
   * @description Filters all logs with user email eg. "user@example.com".
   */
  filter__email?: string;
  /**
   * Filter  End
   * @description List logs ending in between a specific timestamps with nonoseconds eg. 1715076399359944184.
   */
  filter__end?: string;
  /**
   * Filter  Operation Name
   * @description List logs based on operation type eg. "ListConnectors", "CreateOktaConnection".
   */
  filter__operationName?: string;
  /**
   * Filter  Request Id
   * @description List logs from a specific requestId eg. "clvuywyoq009407rj61sxcrpc"
   */
  filter__requestId?: string;
  /**
   * Filter  Search
   * @description Free-text search on the logs.
   */
  filter__search?: string;
  /**
   * Filter  Start
   * @description List logs starting in between a specific timestamps with nonoseconds eg. 1715076388657800827.
   */
  filter__start?: string;
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of logs to return per API call.
   */
  pageSize?: number;
};

/**
 * Type of BORNEO's BORNEO_POST_FILTERED_ACCESS_LOGS tool output.
 */
type BORNEO_POST_FILTERED_ACCESS_LOGS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_POST_LOG_AUDIT_RECORDS_WITH_FILTER_CRITERIA tool input.
 */
type BORNEO_POST_LOG_AUDIT_RECORDS_WITH_FILTER_CRITERIA_INPUT = {
  /**
   * Filter  Account Id
   * @description List logs for a specific AWS account
   */
  filter__accountId?: string;
  /**
   * Filter  Azure Connection Id
   * @description List logs for a specific Azure connection
   */
  filter__azureConnectionId?: string;
  /**
   * Filter  Azure Subscription Id
   * @description List logs for a specific Azure project
   */
  filter__azureSubscriptionId?: string;
  /**
   * Filter  Category
   * @description Category
   * @enum {string}
   */
  filter__category?: "cloudAWS" | "cloudAzure" | "cloudGCP" | "connector" | "dataPlane" | "notification" | "scan";
  /**
   * Filter  Connector Id
   * @description List logs for a specific connector
   */
  filter__connectorId?: string;
  /**
   * Filter  Data Plane Id
   * @description List logs for a specific dataPlane
   */
  filter__dataPlaneId?: string;
  /**
   * Filter  End
   * @description List logs ending in between a specific timestamps with nonoseconds eg. 1715076399359944184.
   */
  filter__end?: string;
  /**
   * Filter  Gcp Connection Id
   * @description List logs for a specific GCP connection
   */
  filter__gcpConnectionId?: string;
  /**
   * Filter  Gcp Project Id
   * @description List logs for a specific GCP project
   */
  filter__gcpProjectId?: string;
  /**
   * Filter  Scan Id
   * @description List logs for a specific scan
   */
  filter__scanId?: string;
  /**
   * Filter  Search
   * @description Free-text search on the logs.
   */
  filter__search?: string;
  /**
   * Filter  Start
   * @description List logs starting in between a specific timestamps with nonoseconds eg. 1715076388657800827.
   */
  filter__start?: string;
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of logs to return per API call.
   */
  pageSize?: number;
};

/**
 * Type of BORNEO's BORNEO_POST_LOG_AUDIT_RECORDS_WITH_FILTER_CRITERIA tool output.
 */
type BORNEO_POST_LOG_AUDIT_RECORDS_WITH_FILTER_CRITERIA_OUTPUT = {
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
 * Type of BORNEO's BORNEO_POST_RESOURCE_LINEAGE_FILTER tool input.
 */
type BORNEO_POST_RESOURCE_LINEAGE_FILTER_INPUT = {
  /**
   * Filter  Downstream Depth
   * @description Downstreamdepth
   */
  filter__downstreamDepth?: number;
  /**
   * Filter  Resource Id
   * @description Resourceid
   */
  filter__resourceId?: string;
  /**
   * Filter  Upstream Depth
   * @description Upstreamdepth
   */
  filter__upstreamDepth?: number;
};

/**
 * Type of BORNEO's BORNEO_POST_RESOURCE_LINEAGE_FILTER tool output.
 */
type BORNEO_POST_RESOURCE_LINEAGE_FILTER_OUTPUT = {
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
 * Type of BORNEO's BORNEO_POST_RESOURCE_STATS_WITH_DELETED_RESOURCES tool input.
 */
type BORNEO_POST_RESOURCE_STATS_WITH_DELETED_RESOURCES_INPUT = {
  /**
   * Include Deleted Resources
   * @description Includedeletedresources
   */
  includeDeletedResources?: boolean;
};

/**
 * Type of BORNEO's BORNEO_POST_RESOURCE_STATS_WITH_DELETED_RESOURCES tool output.
 */
type BORNEO_POST_RESOURCE_STATS_WITH_DELETED_RESOURCES_OUTPUT = {
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
 * Type of BORNEO's BORNEO_POST_SCAN_RESOURCE_STATUS tool input.
 */
type BORNEO_POST_SCAN_RESOURCE_STATUS_INPUT = {
  /**
   * Filter  Name
   * @description Name
   */
  filter__name?: string;
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Scan Id
   * @description The unique scan ID.
   */
  scanId?: string;
};

/**
 * Type of BORNEO's BORNEO_POST_SCAN_RESOURCE_STATUS tool output.
 */
type BORNEO_POST_SCAN_RESOURCE_STATUS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_POST_SUPPORT_CHAT_QUERY tool input.
 */
type BORNEO_POST_SUPPORT_CHAT_QUERY_INPUT = {
  /**
   * Query
   * @description Query
   */
  query?: string;
  /**
   * Session Id
   * @description Sessionid
   */
  sessionId?: string;
};

/**
 * Type of BORNEO's BORNEO_POST_SUPPORT_CHAT_QUERY tool output.
 */
type BORNEO_POST_SUPPORT_CHAT_QUERY_OUTPUT = {
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
 * Type of BORNEO's BORNEO_PUT_TOM_STATUS_AND_NOTE tool input.
 */
type BORNEO_PUT_TOM_STATUS_AND_NOTE_INPUT = {
  /**
   * Document Files
   * @description Uploaded file id list.
   */
  documentFiles?: string[];
  /**
   * Note
   * @description Note
   */
  note?: string;
  /**
   * Status
   * @description Status of the TOM, i.e. whether the TOM is already implemented, implementation is pending, or the TOM is not implemented.
   * @enum {string}
   */
  status?: "available" | "implemented" | "pendingToImplement";
  /**
   * Tom Id
   * @description Tomid
   */
  tomId?: string;
};

/**
 * Type of BORNEO's BORNEO_PUT_TOM_STATUS_AND_NOTE tool output.
 */
type BORNEO_PUT_TOM_STATUS_AND_NOTE_OUTPUT = {
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
 * Type of BORNEO's BORNEO_REMOVE_DASHBOARD_USER_BY_USERNAME tool input.
 */
type BORNEO_REMOVE_DASHBOARD_USER_BY_USERNAME_INPUT = {
  /**
   * Username
   * @description Username
   */
  username?: string;
};

/**
 * Type of BORNEO's BORNEO_REMOVE_DASHBOARD_USER_BY_USERNAME tool output.
 */
type BORNEO_REMOVE_DASHBOARD_USER_BY_USERNAME_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RESET_DASHBOARD_USER_PASSWORD tool input.
 */
type BORNEO_RESET_DASHBOARD_USER_PASSWORD_INPUT = {
  /**
   * Username
   * @description Username
   */
  username?: string;
};

/**
 * Type of BORNEO's BORNEO_RESET_DASHBOARD_USER_PASSWORD tool output.
 */
type BORNEO_RESET_DASHBOARD_USER_PASSWORD_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RESUME_SCAN_BY_ID tool input.
 */
type BORNEO_RESUME_SCAN_BY_ID_INPUT = {
  /**
   * Scan Id
   * @description The unique scan ID.
   */
  scanId?: string;
};

/**
 * Type of BORNEO's BORNEO_RESUME_SCAN_BY_ID tool output.
 */
type BORNEO_RESUME_SCAN_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_ACCOUNT_DETAILS_BY_ID tool input.
 */
type BORNEO_RETRIEVE_ACCOUNT_DETAILS_BY_ID_INPUT = {
  /**
   * Account Id
   * @description The unique Borneo account ID.
   */
  accountId?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_ACCOUNT_DETAILS_BY_ID tool output.
 */
type BORNEO_RETRIEVE_ACCOUNT_DETAILS_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_ASSET_BY_ID tool input.
 */
type BORNEO_RETRIEVE_ASSET_BY_ID_INPUT = {
  /**
   * Asset Id
   * @description Identifier of the asset
   */
  assetId?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_ASSET_BY_ID tool output.
 */
type BORNEO_RETRIEVE_ASSET_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_CONNECTOR_BY_ID tool input.
 */
type BORNEO_RETRIEVE_CONNECTOR_BY_ID_INPUT = {
  /**
   * Connector Id
   * @description The unique Borneo connector ID.
   */
  connectorId?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_CONNECTOR_BY_ID tool output.
 */
type BORNEO_RETRIEVE_CONNECTOR_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_DATA_BREACH_BY_ID tool input.
 */
type BORNEO_RETRIEVE_DATA_BREACH_BY_ID_INPUT = {
  /**
   * Data Breach Id
   * @description Identifier of the DataBreach
   */
  dataBreachId?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_DATA_BREACH_BY_ID tool output.
 */
type BORNEO_RETRIEVE_DATA_BREACH_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_DATA_RESOURCE_STATISTICS tool input.
 */
type BORNEO_RETRIEVE_DATA_RESOURCE_STATISTICS_INPUT = {
  /**
   * Source Type
   * @description Sourcetype
   */
  sourceType?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_DATA_RESOURCE_STATISTICS tool output.
 */
type BORNEO_RETRIEVE_DATA_RESOURCE_STATISTICS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_DEPARTMENT_INFORMATION tool input.
 */
type BORNEO_RETRIEVE_DEPARTMENT_INFORMATION_INPUT = {
  /**
   * Department Id
   * @description Identifier of the department.
   */
  departmentId?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_DEPARTMENT_INFORMATION tool output.
 */
type BORNEO_RETRIEVE_DEPARTMENT_INFORMATION_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_DISCOVERED_DOCUMENT_BY_ID tool input.
 */
type BORNEO_RETRIEVE_DISCOVERED_DOCUMENT_BY_ID_INPUT = {
  /**
   * Discovered Document Id
   * @description Discovereddocumentid
   */
  discoveredDocumentId?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_DISCOVERED_DOCUMENT_BY_ID tool output.
 */
type BORNEO_RETRIEVE_DISCOVERED_DOCUMENT_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_DISCOVERED_INFOTYPE_BY_ID tool input.
 */
type BORNEO_RETRIEVE_DISCOVERED_INFOTYPE_BY_ID_INPUT = {
  /**
   * Discovered Infotype Id
   * @description Discoveredinfotypeid
   */
  discoveredInfotypeId?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_DISCOVERED_INFOTYPE_BY_ID tool output.
 */
type BORNEO_RETRIEVE_DISCOVERED_INFOTYPE_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_DISCOVERED_RECIPIENT_BY_ID tool input.
 */
type BORNEO_RETRIEVE_DISCOVERED_RECIPIENT_BY_ID_INPUT = {
  /**
   * Discovered Recipient Id
   * @description Identifier of the discovered recipient.
   */
  discoveredRecipientId?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_DISCOVERED_RECIPIENT_BY_ID tool output.
 */
type BORNEO_RETRIEVE_DISCOVERED_RECIPIENT_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_DPIA_BY_ID tool input.
 */
type BORNEO_RETRIEVE_DPIA_BY_ID_INPUT = {
  /**
   * Dpia Id
   * @description Identifier of the DPIA
   */
  dpiaId?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_DPIA_BY_ID tool output.
 */
type BORNEO_RETRIEVE_DPIA_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_EMPLOYEE_DETAILS_BY_ID tool input.
 */
type BORNEO_RETRIEVE_EMPLOYEE_DETAILS_BY_ID_INPUT = {
  /**
   * Employee Id
   * @description Identifier of the employee
   */
  employeeId?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_EMPLOYEE_DETAILS_BY_ID tool output.
 */
type BORNEO_RETRIEVE_EMPLOYEE_DETAILS_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_ERROR_DETAILS_BY_ID tool input.
 */
type BORNEO_RETRIEVE_ERROR_DETAILS_BY_ID_INPUT = {
  /**
   * Error Id
   * @description The unique resource ID.
   */
  errorId?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_ERROR_DETAILS_BY_ID tool output.
 */
type BORNEO_RETRIEVE_ERROR_DETAILS_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_ISSUE_BY_ID tool input.
 */
type BORNEO_RETRIEVE_ISSUE_BY_ID_INPUT = {
  /**
   * Issue Id
   * @description The unique issue ID.
   */
  issueId?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_ISSUE_BY_ID tool output.
 */
type BORNEO_RETRIEVE_ISSUE_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_LEGAL_DOCUMENT_BY_ID tool input.
 */
type BORNEO_RETRIEVE_LEGAL_DOCUMENT_BY_ID_INPUT = {
  /**
   * Document Id
   * @description Documentid
   */
  documentId?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_LEGAL_DOCUMENT_BY_ID tool output.
 */
type BORNEO_RETRIEVE_LEGAL_DOCUMENT_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_LOPDP_THRESHOLD_BY_ID tool input.
 */
type BORNEO_RETRIEVE_LOPDP_THRESHOLD_BY_ID_INPUT = {
  /**
   * Lopdp Threshold Id
   * @description Identifier of the Threshold
   */
  lopdpThresholdId?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_LOPDP_THRESHOLD_BY_ID tool output.
 */
type BORNEO_RETRIEVE_LOPDP_THRESHOLD_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_PROCESSING_ACTIVITY_BY_ID tool input.
 */
type BORNEO_RETRIEVE_PROCESSING_ACTIVITY_BY_ID_INPUT = {
  /**
   * Processing Activity Id
   * @description Identifier of the Processing Activity
   */
  processingActivityId?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_PROCESSING_ACTIVITY_BY_ID tool output.
 */
type BORNEO_RETRIEVE_PROCESSING_ACTIVITY_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_RECIPIENT_DETAILS tool input.
 */
type BORNEO_RETRIEVE_RECIPIENT_DETAILS_INPUT = {
  /**
   * Recipient Id
   * @description Identifier of the Recipient
   */
  recipientId?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_RECIPIENT_DETAILS tool output.
 */
type BORNEO_RETRIEVE_RECIPIENT_DETAILS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_RECIPIENT_PROCESSING_ACTIVITIES tool input.
 */
type BORNEO_RETRIEVE_RECIPIENT_PROCESSING_ACTIVITIES_INPUT = {
  /**
   * Next Token
   * @description The `nextToken` from the last page of results to retrieve the next page of results.
   */
  nextToken?: string;
  /**
   * Page Size
   * @description The maximum number of records to return per API call. If more records are available, the response will be truncated and will contain a "nextToken" value, which can be used to return additional records.
   */
  pageSize?: number;
  /**
   * Recipient Id
   * @description Identifier of the Recipient
   */
  recipientId?: string;
  /**
   * Sort  Column
   * @description The column name to sort on.
   */
  sort__column?: string;
  /**
   * Sort  Order
   * @description Order
   * @enum {string}
   */
  sort__order?: "ASC" | "DESC";
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_RECIPIENT_PROCESSING_ACTIVITIES tool output.
 */
type BORNEO_RETRIEVE_RECIPIENT_PROCESSING_ACTIVITIES_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_RESOURCE_CATALOG_BY_ID tool input.
 */
type BORNEO_RETRIEVE_RESOURCE_CATALOG_BY_ID_INPUT = {
  /**
   * Include Parent Details
   * @description Includeparentdetails
   */
  includeParentDetails?: boolean;
  /**
   * Resource Id
   * @description The unique resource ID.
   */
  resourceId?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_RESOURCE_CATALOG_BY_ID tool output.
 */
type BORNEO_RETRIEVE_RESOURCE_CATALOG_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_RESOURCE_COLUMNS tool input.
 */
type BORNEO_RETRIEVE_RESOURCE_COLUMNS_INPUT = {
  /**
   * Dataspace
   * @description Dataspace
   */
  dataspace?: string[];
  /**
   * Parent Resource Id
   * @description Parentresourceid
   */
  parentResourceId?: string;
  /**
   * Resource Id
   * @description Resourceid
   */
  resourceId?: string[];
  /**
   * Search Key
   * @description Searchkey
   */
  searchKey?: string;
  /**
   * Source Type
   * @description Sourcetype
   */
  sourceType?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_RESOURCE_COLUMNS tool output.
 */
type BORNEO_RETRIEVE_RESOURCE_COLUMNS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_RETRIEVE_TOM_BY_ID tool input.
 */
type BORNEO_RETRIEVE_TOM_BY_ID_INPUT = {
  /**
   * Tom Id
   * @description Identifier of the TOM
   */
  tomId?: string;
};

/**
 * Type of BORNEO's BORNEO_RETRIEVE_TOM_BY_ID tool output.
 */
type BORNEO_RETRIEVE_TOM_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_SCAN_LEGAL_DOCUMENT_BY_ID tool input.
 */
type BORNEO_SCAN_LEGAL_DOCUMENT_BY_ID_INPUT = {
  /**
   * Document Id
   * @description Documentid
   */
  documentId?: string;
};

/**
 * Type of BORNEO's BORNEO_SCAN_LEGAL_DOCUMENT_BY_ID tool output.
 */
type BORNEO_SCAN_LEGAL_DOCUMENT_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_STOP_SCAN_VIA_SCAN_ID tool input.
 */
type BORNEO_STOP_SCAN_VIA_SCAN_ID_INPUT = {
  /**
   * Scan Id
   * @description The unique scan ID.
   */
  scanId?: string;
};

/**
 * Type of BORNEO's BORNEO_STOP_SCAN_VIA_SCAN_ID tool output.
 */
type BORNEO_STOP_SCAN_VIA_SCAN_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_SUBMIT_CHAT_FEEDBACK tool input.
 */
type BORNEO_SUBMIT_CHAT_FEEDBACK_INPUT = {
  /**
   * Post Id
   * @description Postid
   */
  postId?: string;
  /**
   * Rating
   * @description Rating
   */
  rating?: number;
};

/**
 * Type of BORNEO's BORNEO_SUBMIT_CHAT_FEEDBACK tool output.
 */
type BORNEO_SUBMIT_CHAT_FEEDBACK_OUTPUT = {
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
 * Type of BORNEO's BORNEO_SUBMIT_DETAILED_SCAN_RESULTS tool input.
 */
type BORNEO_SUBMIT_DETAILED_SCAN_RESULTS_INPUT = {
  /**
   * Page Id
   * @description Page ID for one of the pages produced by the scan.
   */
  pageId?: string;
  /**
   * Resource Id
   * @description Resource ID for the resource for which the page was produced.
   */
  resourceId?: string;
  /**
   * Scan Id
   * @description Scan ID of the scan that produced the inspection result.
   */
  scanId?: string;
  /**
   * Scan Iteration Id
   * @description ScanIteration ID of the scan that produced the inspection result.
   */
  scanIterationId?: string;
};

/**
 * Type of BORNEO's BORNEO_SUBMIT_DETAILED_SCAN_RESULTS tool output.
 */
type BORNEO_SUBMIT_DETAILED_SCAN_RESULTS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_TRIGGER_DASHBOARD_REPORT_BY_REPORT_ID tool input.
 */
type BORNEO_TRIGGER_DASHBOARD_REPORT_BY_REPORT_ID_INPUT = {
  /**
   * Dashboard Report Id
   * @description Dashboardreportid
   */
  dashboardReportId?: string;
};

/**
 * Type of BORNEO's BORNEO_TRIGGER_DASHBOARD_REPORT_BY_REPORT_ID tool output.
 */
type BORNEO_TRIGGER_DASHBOARD_REPORT_BY_REPORT_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_UPDATE_ASSET_INFORMATION_BY_ID tool input.
 */
type BORNEO_UPDATE_ASSET_INFORMATION_BY_ID_INPUT = {
  /**
   * Asset Id
   * @description Identifier of the asset
   */
  assetId?: string;
  /**
   * Location Id
   * @description Locationid
   */
  locationId?: string;
  /**
   * Location Type
   * @description Locationtype
   * @enum {string}
   */
  locationType?: "external" | "office" | "remote";
  /**
   * Name
   * @description Name of the asset
   */
  name?: string;
  /**
   * Tom Ids
   * @description Tomids
   */
  tomIds?: string[];
  /**
   * Type
   * @description Indicates the type of the asset. An asset can be one of the several options.
   * @enum {string}
   */
  type?: "applications" | "cloudServices" | "communications" | "dataInformation" | "externalStorage" | "filingRoom" | "furniture" | "hardware" | "hosting" | "other" | "paperDocumentation" | "printer" | "server" | "shredder" | "videoSurveillance";
};

/**
 * Type of BORNEO's BORNEO_UPDATE_ASSET_INFORMATION_BY_ID tool output.
 */
type BORNEO_UPDATE_ASSET_INFORMATION_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_UPDATE_CATEGORY_INFOTYPES tool input.
 */
type BORNEO_UPDATE_CATEGORY_INFOTYPES_INPUT = {
  /**
   * Category Label
   * @description The name of the infotype category.
   */
  categoryLabel?: string;
  /**
   * Description
   * @description The description of the infotype category.
   */
  description?: string;
  /**
   * Infotypes
   * @description The list of infotypes that belong to this category.
   */
  infotypes?: string[];
};

/**
 * Type of BORNEO's BORNEO_UPDATE_CATEGORY_INFOTYPES tool output.
 */
type BORNEO_UPDATE_CATEGORY_INFOTYPES_OUTPUT = {
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
 * Type of BORNEO's BORNEO_UPDATE_DASHBOARD_REPORT_FREQUENCY_AND_RECIPIENTS tool input.
 */
type BORNEO_UPDATE_DASHBOARD_REPORT_FREQUENCY_AND_RECIPIENTS_INPUT = {
  /**
   * Dashboard Report Id
   * @description Dashboardreportid
   */
  dashboardReportId?: string;
  /**
   * External Email
   * @description Externalemail
   */
  externalEmail?: string[];
  /**
   * Frequency
   * @description The cron schedule expression to use for a recurring scan. Only a fixed set of cron expressions can be used to run scans at 30 minute, 1 hour, 1 day, or 1 week intervals.
   * @enum {string}
   */
  frequency?: "*/30 * * * *" | "0 */1 * * *" | "0 */12 * * *" | "0 */4 * * *" | "0 */6 * * *" | "0 */8 * * *" | "0 0 * * *" | "0 0 * * 0" | "0 0 1 * *" | "0 0 1 1,4,7,10 *" | "0 0 1 1,7 *";
  /**
   * Recipients Email
   * @description Recipientsemail
   */
  recipientsEmail?: string[];
  /**
   * Roles
   * @description Roles
   */
  roles?: string[];
};

/**
 * Type of BORNEO's BORNEO_UPDATE_DASHBOARD_REPORT_FREQUENCY_AND_RECIPIENTS tool output.
 */
type BORNEO_UPDATE_DASHBOARD_REPORT_FREQUENCY_AND_RECIPIENTS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_UPDATE_DASHBOARD_USER_DETAILS tool input.
 */
type BORNEO_UPDATE_DASHBOARD_USER_DETAILS_INPUT = {
  /**
   * Name
   * @description Name
   */
  name?: string;
  /**
   * Username
   * @description Username
   */
  username?: string;
};

/**
 * Type of BORNEO's BORNEO_UPDATE_DASHBOARD_USER_DETAILS tool output.
 */
type BORNEO_UPDATE_DASHBOARD_USER_DETAILS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_UPDATE_DASHBOARD_USER_ROLES tool input.
 */
type BORNEO_UPDATE_DASHBOARD_USER_ROLES_INPUT = {
  /**
   * Organisations
   * @description Organisations
   */
  organisations?: {
      /**
       * Departments
       * @description Departments
       */
      departments?: string[];
      /**
       * Organisation Id
       * @description Organisationid
       */
      organisationId?: number;
      /**
       * Roles
       * @description Roles
       */
      roles: string[];
  }[];
  /**
   * Username
   * @description Username
   */
  username?: string;
};

/**
 * Type of BORNEO's BORNEO_UPDATE_DASHBOARD_USER_ROLES tool output.
 */
type BORNEO_UPDATE_DASHBOARD_USER_ROLES_OUTPUT = {
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
 * Type of BORNEO's BORNEO_UPDATE_DATA_BREACH_ENTRY tool input.
 */
type BORNEO_UPDATE_DATA_BREACH_ENTRY_INPUT = {
  /**
   * Additional Information
   * @description Additionalinformation
   */
  additionalInformation?: string[];
  /**
   * Affected People From
   * @description Affectedpeoplefrom
   */
  affectedPeopleFrom?: string;
  /**
   * Authorities Informed
   * @description Authoritiesinformed
   */
  authoritiesInformed?: string;
  /**
   * Compromised Sensitive Data
   * @description Compromisedsensitivedata
   */
  compromisedSensitiveData?: string;
  /**
   * Consequences
   * @description Consequences
   */
  consequences?: string;
  /**
   * Created By
   * @description Createdby
   */
  createdBy?: string;
  /**
   * Data Breach Id
   * @description Identifier of the DataBreach
   */
  dataBreachId?: string;
  /**
   * Description
   * @description Description
   */
  description?: string;
  /**
   * Discovered At
   * @description Discoveredat
   */
  discoveredAt?: number;
  /**
   * How Discovered
   * @description Howdiscovered
   */
  howDiscovered?: string;
  /**
   * Kind Of Data
   * @description Kindofdata
   */
  kindOfData?: string;
  /**
   * Measures To Prevent
   * @description Measurestoprevent
   */
  measuresToPrevent?: string;
  /**
   * Number Affected People
   * @description Numberaffectedpeople
   */
  numberAffectedPeople?: number;
  /**
   * Occurred At
   * @description Occurredat
   */
  occurredAt?: number;
  /**
   * People Informed
   * @description Peopleinformed
   */
  peopleInformed?: string;
  /**
   * Problem Of Security Measures
   * @description Problemofsecuritymeasures
   */
  problemOfSecurityMeasures?: string;
  /**
   * Profile People Affected
   * @description Profilepeopleaffected
   */
  profilePeopleAffected?: string;
  /**
   * Save As Draft
   * @description Saveasdraft
   */
  saveAsDraft?: boolean;
  /**
   * Security Measures Or Protocols
   * @description Securitymeasuresorprotocols
   */
  securityMeasuresOrProtocols?: string;
  /**
   * Short Description
   * @description Shortdescription
   */
  shortDescription?: string;
  /**
   * Was Intentional
   * @description Wasintentional
   */
  wasIntentional?: string;
};

/**
 * Type of BORNEO's BORNEO_UPDATE_DATA_BREACH_ENTRY tool output.
 */
type BORNEO_UPDATE_DATA_BREACH_ENTRY_OUTPUT = {
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
 * Type of BORNEO's BORNEO_UPDATE_DEPARTMENT_NAME tool input.
 */
type BORNEO_UPDATE_DEPARTMENT_NAME_INPUT = {
  /**
   * Department Id
   * @description Identifier of the department.
   */
  departmentId?: string;
  /**
   * Name
   * @description Name
   */
  name?: string;
};

/**
 * Type of BORNEO's BORNEO_UPDATE_DEPARTMENT_NAME tool output.
 */
type BORNEO_UPDATE_DEPARTMENT_NAME_OUTPUT = {
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
 * Type of BORNEO's BORNEO_UPDATE_DISCOVERED_DOCUMENT_STATUS tool input.
 */
type BORNEO_UPDATE_DISCOVERED_DOCUMENT_STATUS_INPUT = {
  /**
   * Discovered Document Id
   * @description Discovereddocumentid
   */
  discoveredDocumentId?: string;
  /**
   * Status
   * @description Status
   * @enum {string}
   */
  status?: "ADDED" | "DELETED" | "DOMAIN_DELETED" | "IGNORED" | "NEW";
};

/**
 * Type of BORNEO's BORNEO_UPDATE_DISCOVERED_DOCUMENT_STATUS tool output.
 */
type BORNEO_UPDATE_DISCOVERED_DOCUMENT_STATUS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_UPDATE_DISCOVERED_INFOTYPE_STATUS tool input.
 */
type BORNEO_UPDATE_DISCOVERED_INFOTYPE_STATUS_INPUT = {
  /**
   * Discovered Infotype Id
   * @description Discoveredinfotypeid
   */
  discoveredInfotypeId?: string;
  /**
   * Status
   * @description Status
   * @enum {string}
   */
  status?: "APPROVED" | "APPROVED_AUTOMATICALLY" | "DELETED" | "IGNORED" | "NEW" | "NOT_PRESENT" | "REQUESTED";
};

/**
 * Type of BORNEO's BORNEO_UPDATE_DISCOVERED_INFOTYPE_STATUS tool output.
 */
type BORNEO_UPDATE_DISCOVERED_INFOTYPE_STATUS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_UPDATE_DOMAIN_DETAILS tool input.
 */
type BORNEO_UPDATE_DOMAIN_DETAILS_INPUT = {
  /**
   * Domain Id
   * @description Identifier of the domain.
   */
  domainId?: string;
  /**
   * Frequency
   * @description Frequency of polling for a domain. Manual polling means that this domain will not be polled automatically.
   * @enum {string}
   */
  frequency?: "12h" | "1d" | "1w" | "30d" | "6h" | "manual";
  /**
   * Name
   * @description Name of the domain.
   */
  name?: string;
};

/**
 * Type of BORNEO's BORNEO_UPDATE_DOMAIN_DETAILS tool output.
 */
type BORNEO_UPDATE_DOMAIN_DETAILS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_UPDATE_DPIA_BY_ID tool input.
 */
type BORNEO_UPDATE_DPIA_BY_ID_INPUT = {
  /**
   * Additional Information
   * @description Additionalinformation
   */
  additionalInformation?: string;
  /**
   * Additional Information Files
   * @description Additionalinformationfiles
   */
  additionalInformationFiles?: string[];
  /**
   * Availability  Baseline Comment
   * @description Comment to add additional information about the baseline risk of the availablity
   */
  availability__baselineComment?: string;
  /**
   * Availability  Baseline Likelihood
   * @description Baselinelikelihood
   * @enum {string}
   */
  availability__baselineLikelihood?: "likely" | "limited" | "maximum" | "negligible" | "unlikely";
  /**
   * Availability  Baseline Severity
   * @description Represents the severity of a risk
   * @enum {string}
   */
  availability__baselineSeverity?: "high" | "low" | "medium" | "very_high" | "very_low";
  /**
   * Availability  Impacts
   * @description List of impacts that availability risk can have. At least one element is necessary DPIA is saved as activated
   */
  availability__impacts?: {
      /**
       * Id
       * @description Identifier for the impact of confidentiality risk. Can be an UUID if it"s a custom impact or one of the keys of the default impacts that we offer
       */
      id: string;
      /**
       * Name
       * @description Name
       */
      name?: string;
  }[];
  /**
   * Availability  Impacts Comment
   * @description Comment to add additional information about the impact
   */
  availability__impactsComment?: string;
  /**
   * Availability  Implemented Toms
   * @description List of implemented TOMs that applies to the availability risk. At least one element is necessary DPIA is saved as activated
   */
  availability__implementedToms?: string[];
  /**
   * Availability  Implemented Toms Comment
   * @description Comment to add additional information about the implemented TOMs
   */
  availability__implementedTomsComment?: string;
  /**
   * Availability  Planned Toms
   * @description List of TOMs planned to be implemented and that applies to the availability risk. At least one element is necessary DPIA is saved as activated
   */
  availability__plannedToms?: string[];
  /**
   * Availability  Planned Toms Comment
   * @description Comment to add additional information about the planned TOMs
   */
  availability__plannedTomsComment?: string;
  /**
   * Availability  Residual Risk Comment
   * @description Comment to add additional information about the residual risk of the availability
   */
  availability__residualRiskComment?: string;
  /**
   * Availability  Residual Risk Likelihood
   * @description Residualrisklikelihood
   * @enum {string}
   */
  availability__residualRiskLikelihood?: "likely" | "limited" | "maximum" | "negligible" | "unlikely";
  /**
   * Availability  Residual Risk Severity
   * @description Represents the severity of a risk
   * @enum {string}
   */
  availability__residualRiskSeverity?: "high" | "low" | "medium" | "very_high" | "very_low";
  /**
   * Availability  Risk Sources
   * @description List of risk sources that availability risk can have. At least one element is necessary DPIA is saved as activated
   */
  availability__riskSources?: {
      /**
       * Id
       * @description Identifier for the risk source of a risk. Can be an UUID if it"s a custom risk source or one of the keys of the default risk sources that we offer
       */
      id: string;
      /**
       * Name
       * @description Name of the risk source
       */
      name?: string;
  }[];
  /**
   * Availability  Risk Sources Comment
   * @description Comment to add additional information about the availability risk sources
   */
  availability__riskSourcesComment?: string;
  /**
   * Availability  Threats
   * @description List of threats that availability risk can have. At least one element is necessary DPIA is saved as activated
   */
  availability__threats?: {
      /**
       * Id
       * @description Identifier for the threat of confidentiality risk. Can be an UUID if it"s a custom threat or one of the keys of the default threats that we offer
       */
      id: string;
      /**
       * Name
       * @description Name
       */
      name?: string;
  }[];
  /**
   * Availability  Threats Comment
   * @description Comment to add additional information about the threat
   */
  availability__threatsComment?: string;
  /**
   * Confidentiality  Baseline Comment
   * @description Comment to add additional information about the baseline risk of the confidentiality
   */
  confidentiality__baselineComment?: string;
  /**
   * Confidentiality  Baseline Likelihood
   * @description Baselinelikelihood
   * @enum {string}
   */
  confidentiality__baselineLikelihood?: "likely" | "limited" | "maximum" | "negligible" | "unlikely";
  /**
   * Confidentiality  Baseline Severity
   * @description Represents the severity of a risk
   * @enum {string}
   */
  confidentiality__baselineSeverity?: "high" | "low" | "medium" | "very_high" | "very_low";
  /**
   * Confidentiality  Impacts
   * @description List of impacts that confidentiality risk can have. At least one element is necessary DPIA is saved as activated
   */
  confidentiality__impacts?: {
      /**
       * Id
       * @description Identifier for the impact of confidentiality risk. Can be an UUID if it"s a custom impact or one of the keys of the default impacts that we offer
       */
      id: string;
      /**
       * Name
       * @description Name
       */
      name?: string;
  }[];
  /**
   * Confidentiality  Impacts Comment
   * @description Comment to add additional information about the confidentiality risk impacts
   */
  confidentiality__impactsComment?: string;
  /**
   * Confidentiality  Implemented Toms
   * @description List of TOMs that are implemented to prevent confidentiality risk. At least one element is necessary DPIA is saved as activated
   */
  confidentiality__implementedToms?: string[];
  /**
   * Confidentiality  Implemented Toms Comment
   * @description Comment to add additional information about implemented TOMs to prevent confidentiality risk
   */
  confidentiality__implementedTomsComment?: string;
  /**
   * Confidentiality  Planned Toms
   * @description List of TOMs that are planned to be implemented to prevent confidentiality risk. At least one element is necessary DPIA is saved as activated
   */
  confidentiality__plannedToms?: string[];
  /**
   * Confidentiality  Planned Toms Comment
   * @description Comment to add additional information about planned TOMs to prevent confidentiality risk
   */
  confidentiality__plannedTomsComment?: string;
  /**
   * Confidentiality  Residual Risk Comment
   * @description Comment to add additional information about the residual risk of the confidentiality
   */
  confidentiality__residualRiskComment?: string;
  /**
   * Confidentiality  Residual Risk Likelihood
   * @description Residualrisklikelihood
   * @enum {string}
   */
  confidentiality__residualRiskLikelihood?: "likely" | "limited" | "maximum" | "negligible" | "unlikely";
  /**
   * Confidentiality  Residual Risk Severity
   * @description Represents the severity of a risk
   * @enum {string}
   */
  confidentiality__residualRiskSeverity?: "high" | "low" | "medium" | "very_high" | "very_low";
  /**
   * Confidentiality  Risk Sources
   * @description List of risk sources that confidentiality risk can have. At least one element is necessary DPIA is saved as activated
   */
  confidentiality__riskSources?: {
      /**
       * Id
       * @description Identifier for the risk source of a risk. Can be an UUID if it"s a custom risk source or one of the keys of the default risk sources that we offer
       */
      id: string;
      /**
       * Name
       * @description Name of the risk source
       */
      name?: string;
  }[];
  /**
   * Confidentiality  Risk Sources Comment
   * @description Comment to add additional information about the confidentiality risk sources
   */
  confidentiality__riskSourcesComment?: string;
  /**
   * Confidentiality  Threats
   * @description List of threats that confidentiality risk can have. At least one element is necessary DPIA is saved as activated
   */
  confidentiality__threats?: {
      /**
       * Id
       * @description Identifier for the threat of confidentiality risk. Can be an UUID if it"s a custom threat or one of the keys of the default threats that we offer
       */
      id: string;
      /**
       * Name
       * @description Name
       */
      name?: string;
  }[];
  /**
   * Confidentiality  Threats Comment
   * @description Comment to add additional information about the confidentiality risk threats
   */
  confidentiality__threatsComment?: string;
  /**
   * Dpia Id
   * @description Identifier of the DPIA
   */
  dpiaId?: string;
  /**
   * Integrity  Baseline Comment
   * @description Comment to add additional information about the baseline risk of the integrity
   */
  integrity__baselineComment?: string;
  /**
   * Integrity  Baseline Likelihood
   * @description Baselinelikelihood
   * @enum {string}
   */
  integrity__baselineLikelihood?: "likely" | "limited" | "maximum" | "negligible" | "unlikely";
  /**
   * Integrity  Baseline Severity
   * @description Represents the severity of a risk
   * @enum {string}
   */
  integrity__baselineSeverity?: "high" | "low" | "medium" | "very_high" | "very_low";
  /**
   * Integrity  Impacts
   * @description List of impacts that integrity risk can have. At least one element is necessary DPIA is saved as activated
   */
  integrity__impacts?: {
      /**
       * Id
       * @description Identifier for the impact of confidentiality risk. Can be an UUID if it"s a custom impact or one of the keys of the default impacts that we offer
       */
      id: string;
      /**
       * Name
       * @description Name
       */
      name?: string;
  }[];
  /**
   * Integrity  Impacts Comment
   * @description Comment to add additional information about the integrity impacts
   */
  integrity__impactsComment?: string;
  /**
   * Integrity  Implemented Toms
   * @description List of TOMs that are implemented to prevent integrity risk. At least one element is necessary DPIA is saved as activated
   */
  integrity__implementedToms?: string[];
  /**
   * Integrity  Implemented Toms Comment
   * @description Comment to add additional information about implemented TOMs to prevent integrity risk
   */
  integrity__implementedTomsComment?: string;
  /**
   * Integrity  Planned Toms
   * @description List of TOMs that are planned to be implemented to prevent integrity risk. At least one element is necessary DPIA is saved as activated
   */
  integrity__plannedToms?: string[];
  /**
   * Integrity  Planned Toms Comment
   * @description Comment to add additional information about planned TOMs to prevent integrity risk
   */
  integrity__plannedTomsComment?: string;
  /**
   * Integrity  Residual Risk Comment
   * @description Comment to add additional information about the residual risk of the integrity
   */
  integrity__residualRiskComment?: string;
  /**
   * Integrity  Residual Risk Likelihood
   * @description Residualrisklikelihood
   * @enum {string}
   */
  integrity__residualRiskLikelihood?: "likely" | "limited" | "maximum" | "negligible" | "unlikely";
  /**
   * Integrity  Residual Risk Severity
   * @description Represents the severity of a risk
   * @enum {string}
   */
  integrity__residualRiskSeverity?: "high" | "low" | "medium" | "very_high" | "very_low";
  /**
   * Integrity  Risk Sources
   * @description List of risk sources that integrity risk can have. At least one element is necessary DPIA is saved as activated
   */
  integrity__riskSources?: {
      /**
       * Id
       * @description Identifier for the risk source of a risk. Can be an UUID if it"s a custom risk source or one of the keys of the default risk sources that we offer
       */
      id: string;
      /**
       * Name
       * @description Name of the risk source
       */
      name?: string;
  }[];
  /**
   * Integrity  Risk Sources Comment
   * @description Comment to add additional information about the integrity risk sources
   */
  integrity__riskSourcesComment?: string;
  /**
   * Integrity  Threats
   * @description List of threats that integrity risk can have. At least one element is necessary DPIA is saved as activated
   */
  integrity__threats?: {
      /**
       * Id
       * @description Identifier for the threat of confidentiality risk. Can be an UUID if it"s a custom threat or one of the keys of the default threats that we offer
       */
      id: string;
      /**
       * Name
       * @description Name
       */
      name?: string;
  }[];
  /**
   * Integrity  Threats Comment
   * @description Comment to add additional information about the integrity threats
   */
  integrity__threatsComment?: string;
  /**
   * Privacy Framework  Accuracy
   * @description Field to explain if the data processed is accurate, high quality and up-to-date Mandatory if DPIA is saved as activated
   */
  privacyFramework__accuracy?: string;
  /**
   * Privacy Framework  Additional Comment
   * @description Field to add more information related to the privacy framework of the DPIA
   */
  privacyFramework__additionalComment?: string;
  /**
   * Privacy Framework  Consent
   * @description Field to describe the measures to ensure that the consent of the data subjects has been obtained and how the given consent can be revoked Mandatory if DPIA is saved as activated and the lawfulness "consent_person_concerned" selected
   */
  privacyFramework__consent?: string;
  /**
   * Privacy Framework  Data Minimisation
   * @description Field to explain if the data collected adequate, relevant, and limited to what is necessary concerning the purposes for which it is processed Mandatory if DPIA is saved as activated
   */
  privacyFramework__dataMinimisation?: string;
  /**
   * Privacy Framework  Data Rights Exercised
   * @description Field to describe how do data subjects exercise their data subject rights? Mandatory if DPIA is saved as activated
   */
  privacyFramework__dataRightsExercised?: string;
  /**
   * Privacy Framework  Purpose Limitation
   * @description Field to explain the clear, specific and legitimate purpose of conducting the processing activity. Mandatory if DPIA is saved as activated
   */
  privacyFramework__purposeLimitation?: string;
  /**
   * Privacy Framework  Retention
   * @description Is the retention period lawful and clearly defined? Mandatory if DPIA is saved as activated
   */
  privacyFramework__retention?: boolean;
  /**
   * Privacy Framework  Retention Comment
   * @description Field to add comment on the retention period
   */
  privacyFramework__retentionComment?: string;
  /**
   * Privacy Framework  Transparency
   * @description Field to describe what kind of notice information is given to data subjects about this processing, and how is it provided to the data subjects? Mandatory if DPIA is saved as activated
   */
  privacyFramework__transparency?: string;
  /**
   * Status
   * @description The status of the DPIA. If a DPIA is saved as activated, several fields are required
   * @enum {string}
   */
  status?: "activated" | "draft";
  /**
   * Translations
   * @description Translations
   */
  translations?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
};

/**
 * Type of BORNEO's BORNEO_UPDATE_DPIA_BY_ID tool output.
 */
type BORNEO_UPDATE_DPIA_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_UPDATE_EMPLOYEE_BY_ID tool input.
 */
type BORNEO_UPDATE_EMPLOYEE_BY_ID_INPUT = {
  /**
   * Department
   * @description The department of the employee
   */
  department?: string;
  /**
   * Email
   * @description The email of the employee. Has to be unique within the company.
   */
  email?: string;
  /**
   * Employee Id
   * @description Identifier of the employee
   */
  employeeId?: string;
  /**
   * End Date
   * @description Date when the employee end to work in your company
   */
  endDate?: string;
  /**
   * Manager
   * @description The employee"s direct manager.
   */
  manager?: string;
  /**
   * Name
   * @description The name of the employee
   */
  name?: string;
  /**
   * Nif
   * @description The NIF (Spanish Tax Identification Number) of the employee
   */
  nif?: string;
  /**
   * Position
   * @description The position in the company of the employee
   */
  position?: string;
  /**
   * Start Date
   * @description Date when the employee began to work in your company
   */
  startDate?: string;
  /**
   * Surname
   * @description The surname of the employee
   */
  surname?: string;
};

/**
 * Type of BORNEO's BORNEO_UPDATE_EMPLOYEE_BY_ID tool output.
 */
type BORNEO_UPDATE_EMPLOYEE_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_UPDATE_HEADQUARTER_DETAILS_BY_ID tool input.
 */
type BORNEO_UPDATE_HEADQUARTER_DETAILS_BY_ID_INPUT = {
  /**
   * Address
   * @description The address of the headquarter
   */
  address?: string;
  /**
   * City
   * @description The locality of the headquarter
   */
  city?: string;
  /**
   * Country
   * @description 2 letter code that identifies a country.
   */
  country?: string;
  /**
   * Headquarter Id
   * @description The identifier of the headquarter
   */
  headquarterId?: string;
  /**
   * Name
   * @description The name of the headquarter
   */
  name?: string;
  /**
   * Tom Ids
   * @description Tomids
   */
  tomIds?: string[];
  /**
   * Zipcode
   * @description The zipcode of the headquarter
   */
  zipcode?: string;
};

/**
 * Type of BORNEO's BORNEO_UPDATE_HEADQUARTER_DETAILS_BY_ID tool output.
 */
type BORNEO_UPDATE_HEADQUARTER_DETAILS_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_UPDATE_LOPDP_THRESHOLD_BY_ID tool input.
 */
type BORNEO_UPDATE_LOPDP_THRESHOLD_BY_ID_INPUT = {
  /**
   * Additional Comment
   * @description Additionalcomment
   */
  additionalComment?: boolean;
  /**
   * Comment
   * @description Additional information related to the Threshold
   */
  comment?: string;
  /**
   * Freedom Risk Processing Data
   * @description Freedomriskprocessingdata
   */
  freedomRiskProcessingData?: boolean;
  /**
   * Innovative Technologies Used
   * @description Innovativetechnologiesused
   */
  innovativeTechnologiesUsed?: boolean;
  /**
   * Large Scale Observation
   * @description Largescaleobservation
   */
  largeScaleObservation?: boolean;
  /**
   * Lopdp Threshold Id
   * @description Identifier of the Threshold
   */
  lopdpThresholdId?: string;
  /**
   * Processing Personal Data Risk
   * @description Processingpersonaldatarisk
   */
  processingPersonalDataRisk?: boolean;
  /**
   * Processing Vulnerable Data Subject
   * @description Processingvulnerabledatasubject
   */
  processingVulnerableDataSubject?: boolean;
  /**
   * Rights Risk Processing Data
   * @description Rightsriskprocessingdata
   */
  rightsRiskProcessingData?: boolean;
  /**
   * Sensitive Or Special Data
   * @description Sensitiveorspecialdata
   */
  sensitiveOrSpecialData?: boolean;
  /**
   * Special Category Data Processed
   * @description Specialcategorydataprocessed
   */
  specialCategoryDataProcessed?: boolean;
  /**
   * Status
   * @description Status of the threshold. Can be draft or activated.
   * @enum {string}
   */
  status?: "activated" | "draft";
  /**
   * Systematic Personal Assessment
   * @description Systematicpersonalassessment
   */
  systematicPersonalAssessment?: boolean;
};

/**
 * Type of BORNEO's BORNEO_UPDATE_LOPDP_THRESHOLD_BY_ID tool output.
 */
type BORNEO_UPDATE_LOPDP_THRESHOLD_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_UPDATE_PROCESSING_ACTIVITY_DETAILS tool input.
 */
type BORNEO_UPDATE_PROCESSING_ACTIVITY_DETAILS_INPUT = {
  /**
   * Active
   * @description Flag to create the processing activity as activated or draft
   */
  active?: boolean;
  /**
   * Additional Info
   * @description Text to add more information about the processing activity
   */
  additionalInfo?: string;
  /**
   * Additional Info Files
   * @description List of uploaded file ids.
   */
  additionalInfoFiles?: string[];
  /**
   * Are Access Requests Managed
   * @description Indicates if the data subject access requests are managed.
   */
  areAccessRequestsManaged?: boolean;
  /**
   * Assets
   * @description List assets ids related to the processing activity.
   */
  assets?: string[];
  /**
   * Company Role
   * @description Companyrole
   */
  companyRole?: string[];
  /**
   * Contact Person
   * @description Contact person for the processing activity.
   */
  contactPerson?: string;
  /**
   * Data Flow Relationships
   * @description Dataflowrelationships
   */
  dataFlowRelationships?: {
      /**
       * From  Type
       * @description Type
       * @enum {string}
       */
      from__type?: "MyOrganisation" | "dataSource" | "recipient" | "specificProcessingActivity";
      /**
       * From  Value
       * @description Value
       */
      from__value?: string;
      /**
       * To  Type
       * @description Type
       * @enum {string}
       */
      to__type?: "MyOrganisation" | "dataSource" | "recipient" | "specificProcessingActivity";
      /**
       * To  Value
       * @description Value
       */
      to__value?: string;
  }[];
  /**
   * Data Sources
   * @description Datasources
   */
  dataSources?: string[];
  /**
   * Data Subjects
   * @description List of Data Subjects affected by the processing activity
   */
  dataSubjects?: string[];
  /**
   * Data Types
   * @description Datatypes
   */
  dataTypes?: string[];
  /**
   * Departments
   * @description List departments related with the processing activity.
   */
  departments?: string[];
  /**
   * Infotype Categories
   * @description List of info types categories related with the processing activity.
   */
  infotypeCategories?: string[];
  /**
   * Infotype Volume
   * @description Ranges of the processed infotype volume.
   * @enum {string}
   */
  infotypeVolume?: "0-1000" | "1000-10000" | "10000-100000" | "100000+";
  /**
   * Infotypes
   * @description List of info types related with the processing activity.
   */
  infotypes?: string[];
  /**
   * Is Data Stored
   * @description Indicates if you store the data.
   */
  isDataStored?: boolean;
  /**
   * Lawful Basis
   * @description List of Lawfulness types affected by a processing activity
   */
  lawfulBasis?: {
      /**
       * Comment
       * @description Comment
       */
      comment?: string;
      /**
       * Lawfulness Type
       * @description Represents a Lawful Basis
       * @enum {string}
       */
      lawfulnessType: "consent_person_concerned" | "contract" | "legal_obligation" | "legitimate_interest" | "public_interest" | "stakeholder_vital_interest";
  }[];
  /**
   * Management Methods
   * @description Managementmethods
   */
  managementMethods?: {
      /**
       * Email
       * @description Email
       */
      email?: string;
      /**
       * Method Type
       * @description Management method type of data subject access requests.
       * @enum {string}
       */
      methodType: "email" | "postal";
      /**
       * Postal Address  City
       * @description City
       */
      postalAddress__city?: string;
      /**
       * Postal Address  Country
       * @description 2 letter code that identifies a country.
       */
      postalAddress__country?: string;
      /**
       * Postal Address  Street
       * @description Street
       */
      postalAddress__street?: string;
      /**
       * Postal Address  Zipcode
       * @description The zipcode of the headquarter
       */
      postalAddress__zipcode?: string;
  }[];
  /**
   * Model Id
   * @description Modelid
   */
  modelId?: string;
  /**
   * Name
   * @description Name of the processing activity
   */
  name?: string;
  /**
   * Owner
   * @description Owner
   */
  owner?: string;
  /**
   * Processing Activities As Data Sources
   * @description Processingactivitiesasdatasources
   */
  processingActivitiesAsDataSources?: string[];
  /**
   * Processing Activity Id
   * @description Identifier of the Processing Activity
   */
  processingActivityId?: string;
  /**
   * Processing Frequency
   * @description Data processing frequency.
   * @enum {string}
   */
  processingFrequency?: "is_systematic" | "not_systematic";
  /**
   * Processing Frequency Comment
   * @description Processingfrequencycomment
   */
  processingFrequencyComment?: string;
  /**
   * Purpose
   * @description Purpose of the processing activity
   */
  purpose?: string;
  /**
   * Recipients
   * @description List of recipients related with the processing activity.
   */
  recipients?: {
      /**
       * Comment
       * @description Comment
       */
      comment?: string;
      /**
       * Recipient Id
       * @description Identifier of the recipient
       */
      recipientId: string;
      /**
       * Role
       * @description Role of the recipient for this processing activity. The role of a recipient can be different between processing activities
       */
      role: string[];
  }[];
  /**
   * Retention Period Comment
   * @description Additional information related to the retention period
   */
  retentionPeriodComment?: string;
  /**
   * Retention Period  Unit
   * @description Unit of time that is used for retention period
   * @enum {string}
   */
  retentionPeriod__unit?: "day" | "month" | "week" | "year";
  /**
   * Retention Period  Value
   * @description Value
   */
  retentionPeriod__value?: number;
  /**
   * Show On Ropa Document
   * @description Showonropadocument
   */
  showOnRopaDocument?: boolean;
  /**
   * Translations
   * @description Translations
   */
  translations?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
};

/**
 * Type of BORNEO's BORNEO_UPDATE_PROCESSING_ACTIVITY_DETAILS tool output.
 */
type BORNEO_UPDATE_PROCESSING_ACTIVITY_DETAILS_OUTPUT = {
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
 * Type of BORNEO's BORNEO_UPDATE_RECIPIENT_DETAILS_BY_ID tool input.
 */
type BORNEO_UPDATE_RECIPIENT_DETAILS_BY_ID_INPUT = {
  /**
   * Automation Status
   * @description Automationstatus
   * @enum {string}
   */
  automationStatus?: "created" | "ignored" | "new";
  /**
   * Business Name
   * @description Business name of the recipient
   */
  businessName?: string;
  /**
   * Categories
   * @description list of recipient category
   */
  categories?: string[];
  /**
   * Country
   * @description 2 letter code that identifies a country.
   */
  country?: string;
  /**
   * Data Storage Location
   * @description List of countries where the data related to this recipient are stored
   */
  dataStorageLocation?: string[];
  /**
   * Dpa
   * @description The url to the DPA of the recipient
   */
  dpa?: string;
  /**
   * Dpa Files
   * @description List of uploaded file ids.
   */
  dpaFiles?: string[];
  /**
   * Dpa Status
   * @description The status of the DPA of the recipient. Attached if the DPA is provided. Not required when it"s not necessary to provide the information. Requested when we ask for the DPA and we are waiting for it.
   * @enum {string}
   */
  dpaStatus?: "attached" | "notRequired" | "requested";
  /**
   * Name
   * @description Name of the recipient. Has to be unique, 2 different recipients can"t have the same name.
   */
  name?: string;
  /**
   * Recipient Id
   * @description Identifier of the Recipient
   */
  recipientId?: string;
  /**
   * Recipient State
   * @description Recipientstate
   * @enum {string}
   */
  recipientState?: "active" | "assessment";
  /**
   * Recipient Warranties
   * @description List of lawful basis types that applies to the recipient.
   */
  recipientWarranties?: string[];
  /**
   * Role
   * @description Role
   */
  role?: string[];
  /**
   * State
   * @description 2 letter code that identifies the state of the recipient. It only applies when the recipient country is US
   * @enum {string}
   */
  state?: "AK" | "AL" | "AR" | "AZ" | "CA" | "CO" | "CT" | "DC" | "DE" | "FL" | "GA" | "HI" | "IA" | "ID" | "IL" | "IN" | "KS" | "KY" | "LA" | "MA" | "MD" | "ME" | "MI" | "MN" | "MO" | "MS" | "MT" | "NC" | "ND" | "NE" | "NH" | "NJ" | "NM" | "NV" | "NY" | "OH" | "OK" | "OR" | "PA" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VA" | "VT" | "WA" | "WI" | "WV" | "WY";
  /**
   * Status
   * @description The status of the recipient. Can be archived or validated.
   * @enum {string}
   */
  status?: "archived" | "validated";
  /**
   * Sub Processor Ids
   * @description Subprocessorids
   */
  subProcessorIds?: string[];
};

/**
 * Type of BORNEO's BORNEO_UPDATE_RECIPIENT_DETAILS_BY_ID tool output.
 */
type BORNEO_UPDATE_RECIPIENT_DETAILS_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_UPDATE_RECIPIENT_STATUS_VIA_ID tool input.
 */
type BORNEO_UPDATE_RECIPIENT_STATUS_VIA_ID_INPUT = {
  /**
   * Automation Status
   * @description Automationstatus
   * @enum {string}
   */
  automationStatus?: "created" | "ignored" | "new";
  /**
   * Recipient Id
   * @description Identifier of the Recipient
   */
  recipientId?: string;
  /**
   * Status
   * @description The status of the recipient. Can be archived or validated.
   * @enum {string}
   */
  status?: "archived" | "validated";
};

/**
 * Type of BORNEO's BORNEO_UPDATE_RECIPIENT_STATUS_VIA_ID tool output.
 */
type BORNEO_UPDATE_RECIPIENT_STATUS_VIA_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_UPDATE_THRESHOLD_BY_ID tool input.
 */
type BORNEO_UPDATE_THRESHOLD_BY_ID_INPUT = {
  /**
   * Automated Decision Making
   * @description Indicates if there is automated decision-making with legal effect, or similarly significant effect involved
   */
  automatedDecisionMaking?: boolean;
  /**
   * Blacklist
   * @description Indicates if the data processing is included in a black list
   */
  blacklist?: boolean;
  /**
   * Classifying Data Subject
   * @description Indicates if this data processing is assessing or classifying data subjects
   */
  classifyingDataSubject?: boolean;
  /**
   * Comment
   * @description Additional information related to the Threshold
   */
  comment?: string;
  /**
   * Extensive Automated Evaluation Characteristics
   * @description Indicates if the data processing involve any systematic, extensive and automated evaluation of personal characteristics with effect for the data subjects.
   */
  extensiveAutomatedEvaluationCharacteristics?: boolean;
  /**
   * Innovative Technologies Used
   * @description Indicates if there are innovative technologies used
   */
  innovativeTechnologiesUsed?: boolean;
  /**
   * Large Scale Data Processing
   * @description Indicates if is a large scale data processing
   */
  largeScaleDataProcessing?: boolean;
  /**
   * Large Scale Processing Sensitive Data
   * @description Indicates if the data processing is large scale processing of sensitive data.
   */
  largeScaleProcessingSensitiveData?: boolean;
  /**
   * Matching Merging Records Involved
   * @description Indicates if there is matching or merging of the records involved
   */
  matchingMergingRecordsInvolved?: boolean;
  /**
   * Monitoring Publicly Accessible Areas
   * @description Indicates if the data processing is systematic and large scale monitoring of publicly accessible areas involved.
   */
  monitoringPubliclyAccessibleAreas?: boolean;
  /**
   * Prevent Data Subjects Exercising Their Rights
   * @description Indicates if the data processing prevents the data subjects from exercising their rights, using a service or performing a contract
   */
  preventDataSubjectsExercisingTheirRights?: boolean;
  /**
   * Processing Confidential Sensitive Data
   * @description Indicates if there is processing of confidential or sensitive data
   */
  processingConfidentialSensitiveData?: boolean;
  /**
   * Processing Vulnerable Data Subject
   * @description Indicates if there is processing of data of vulnerable data subjects
   */
  processingVulnerableDataSubject?: boolean;
  /**
   * Status
   * @description Status of the threshold. Can be draft or activated.
   * @enum {string}
   */
  status?: "activated" | "draft";
  /**
   * Systematic Monitoring Data Subject
   * @description Indicates if there is systematic monitoring of data subjects involved
   */
  systematicMonitoringDataSubject?: boolean;
  /**
   * Threshold Id
   * @description Identifier of the Threshold
   */
  thresholdId?: string;
  /**
   * Translations
   * @description Translations
   */
  translations?: {
      [key: string]: {
          [key: string]: unknown;
      };
  };
};

/**
 * Type of BORNEO's BORNEO_UPDATE_THRESHOLD_BY_ID tool output.
 */
type BORNEO_UPDATE_THRESHOLD_BY_ID_OUTPUT = {
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
 * Type of BORNEO's BORNEO_VERIFY_EMAIL_WITH_ID_AND_TOKEN tool input.
 */
type BORNEO_VERIFY_EMAIL_WITH_ID_AND_TOKEN_INPUT = {
  /**
   * Token
   * @description Token
   */
  token?: string;
  /**
   * Verification Id
   * @description Verificationid
   */
  verificationId?: string;
};

/**
 * Type of BORNEO's BORNEO_VERIFY_EMAIL_WITH_ID_AND_TOKEN tool output.
 */
type BORNEO_VERIFY_EMAIL_WITH_ID_AND_TOKEN_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "BORNEO".
 */
export type BORNEO_TOOL_INPUTS = {
  ACCESS_SCAN_ITERATION_BY_ID: BORNEO_ACCESS_SCAN_ITERATION_BY_ID_INPUT
  ADD_DISCOVERED_RECIPIENTS: BORNEO_ADD_DISCOVERED_RECIPIENTS_INPUT
  ARCHIVE_DISCOVERED_RECIPIENT: BORNEO_ARCHIVE_DISCOVERED_RECIPIENT_INPUT
  BORNEO_DELETE_DATA_BREACH_BY_ID: BORNEO_BORNEO_DELETE_DATA_BREACH_BY_ID_INPUT
  CREATE_AND_SCHEDULE_CLOUD_RESOURCE_SCAN: BORNEO_CREATE_AND_SCHEDULE_CLOUD_RESOURCE_SCAN_INPUT
  CREATE_DASHBOARD_USER: BORNEO_CREATE_DASHBOARD_USER_INPUT
  CREATE_DEPARTMENT_WITH_TRANSLATIONS: BORNEO_CREATE_DEPARTMENT_WITH_TRANSLATIONS_INPUT
  CREATE_DOMAIN_WITH_POLLING_FREQUENCY: BORNEO_CREATE_DOMAIN_WITH_POLLING_FREQUENCY_INPUT
  CREATE_DPIA_FOR_PROCESSING_ACTIVITY: BORNEO_CREATE_DPIA_FOR_PROCESSING_ACTIVITY_INPUT
  CREATE_EMPLOYEE_WITH_JSON_PAYLOAD: BORNEO_CREATE_EMPLOYEE_WITH_JSON_PAYLOAD_INPUT
  CREATE_HEADQUARTER_ENTRY: BORNEO_CREATE_HEADQUARTER_ENTRY_INPUT
  CREATE_LEGAL_DOCUMENT_ENTRY: BORNEO_CREATE_LEGAL_DOCUMENT_ENTRY_INPUT
  CREATE_NEW_ASSET: BORNEO_CREATE_NEW_ASSET_INPUT
  CREATE_NEW_INFOTYPE_CATEGORY: BORNEO_CREATE_NEW_INFOTYPE_CATEGORY_INPUT
  CREATE_PROCESSING_ACTIVITY: BORNEO_CREATE_PROCESSING_ACTIVITY_INPUT
  CREATE_PROCESSING_ACTIVITY_THRESHOLD: BORNEO_CREATE_PROCESSING_ACTIVITY_THRESHOLD_INPUT
  CREATE_RECIPIENT_WITH_DETAILS: BORNEO_CREATE_RECIPIENT_WITH_DETAILS_INPUT
  CREATE_THRESHOLD_FOR_PROCESSING_ACTIVITY: BORNEO_CREATE_THRESHOLD_FOR_PROCESSING_ACTIVITY_INPUT
  DELETE_ASSET_BY_ID: BORNEO_DELETE_ASSET_BY_ID_INPUT
  DELETE_CATEGORY_BY_LABEL: BORNEO_DELETE_CATEGORY_BY_LABEL_INPUT
  DELETE_DASHBOARD_REPORT_BY_ID: BORNEO_DELETE_DASHBOARD_REPORT_BY_ID_INPUT
  DELETE_DEPARTMENT_BY_ID: BORNEO_DELETE_DEPARTMENT_BY_ID_INPUT
  DELETE_DOMAIN_BY_ID: BORNEO_DELETE_DOMAIN_BY_ID_INPUT
  DELETE_DPIA_BY_ID: BORNEO_DELETE_DPIA_BY_ID_INPUT
  DELETE_EMPLOYEE_BY_ID: BORNEO_DELETE_EMPLOYEE_BY_ID_INPUT
  DELETE_HEADQUARTERS_BY_ID: BORNEO_DELETE_HEADQUARTERS_BY_ID_INPUT
  DELETE_LEGAL_DOCUMENT_BY_ID: BORNEO_DELETE_LEGAL_DOCUMENT_BY_ID_INPUT
  DELETE_LOPDP_THRESHOLD_BY_ID: BORNEO_DELETE_LOPDP_THRESHOLD_BY_ID_INPUT
  DELETE_PROCESSING_ACTIVITY_BY_ID: BORNEO_DELETE_PROCESSING_ACTIVITY_BY_ID_INPUT
  DELETE_RECIPIENT_BY_ID: BORNEO_DELETE_RECIPIENT_BY_ID_INPUT
  DELETE_TAG_FROM_RESOURCE: BORNEO_DELETE_TAG_FROM_RESOURCE_INPUT
  DELETE_THRESHOLD_BY_ID: BORNEO_DELETE_THRESHOLD_BY_ID_INPUT
  DISABLE_DASHBOARD_USER_BY_USERNAME: BORNEO_DISABLE_DASHBOARD_USER_BY_USERNAME_INPUT
  DOWNLOAD_DASHBOARD_REPORT: BORNEO_DOWNLOAD_DASHBOARD_REPORT_INPUT
  DOWNLOAD_DASHBOARD_REPORT_EDITION: BORNEO_DOWNLOAD_DASHBOARD_REPORT_EDITION_INPUT
  ENABLE_DASHBOARD_USER: BORNEO_ENABLE_DASHBOARD_USER_INPUT
  EVALUATE_DATA_BREACH_IMPACT: BORNEO_EVALUATE_DATA_BREACH_IMPACT_INPUT
  EXPORT_FILTERED_LEAF_RESOURCES: BORNEO_EXPORT_FILTERED_LEAF_RESOURCES_INPUT
  EXPORT_INSIGHT_PAGE_USING_SCAN_ID: BORNEO_EXPORT_INSIGHT_PAGE_USING_SCAN_ID_INPUT
  EXPORT_INVENTORY_RESOURCE_LIST: BORNEO_EXPORT_INVENTORY_RESOURCE_LIST_INPUT
  EXPORT_PROCESSING_ACTIVITIES_LIST: BORNEO_EXPORT_PROCESSING_ACTIVITIES_LIST_INPUT
  EXPORT_RECIPIENTS_LIST_WITH_FILTER: BORNEO_EXPORT_RECIPIENTS_LIST_WITH_FILTER_INPUT
  FETCH_DASHBOARD_REPORT_BY_ID: BORNEO_FETCH_DASHBOARD_REPORT_BY_ID_INPUT
  FETCH_DATA_BREACH_EVALUATION: BORNEO_FETCH_DATA_BREACH_EVALUATION_INPUT
  FILTER_AND_LIST_INSPECTION_RESULTS: BORNEO_FILTER_AND_LIST_INSPECTION_RESULTS_INPUT
  FILTER_AND_SORT_ASSETS_LIST: BORNEO_FILTER_AND_SORT_ASSETS_LIST_INPUT
  FILTER_EMPLOYEE_LIST: BORNEO_FILTER_EMPLOYEE_LIST_INPUT
  FILTER_RECIPIENTS_LIST: BORNEO_FILTER_RECIPIENTS_LIST_INPUT
  GET_CATEGORY_BY_LABEL: BORNEO_GET_CATEGORY_BY_LABEL_INPUT
  GET_CLOUD_ACCOUNT_BY_ID: BORNEO_GET_CLOUD_ACCOUNT_BY_ID_INPUT
  GET_DASHBOARD_REPORT_EDITION_BY_ID: BORNEO_GET_DASHBOARD_REPORT_EDITION_BY_ID_INPUT
  GET_DEPARTMENT_FILTER_LIST: BORNEO_GET_DEPARTMENT_FILTER_LIST_INPUT
  GET_DOMAIN_BY_ID: BORNEO_GET_DOMAIN_BY_ID_INPUT
  GET_HEADQUARTERS_BY_ID: BORNEO_GET_HEADQUARTERS_BY_ID_INPUT
  GET_INSIGHT_BY_TYPE_AND_ID: BORNEO_GET_INSIGHT_BY_TYPE_AND_ID_INPUT
  GET_RESOURCE_INVENTORY_BY_ID: BORNEO_GET_RESOURCE_INVENTORY_BY_ID_INPUT
  GET_SCAN_BY_SCAN_ID: BORNEO_GET_SCAN_BY_SCAN_ID_INPUT
  GET_THRESHOLD_BY_ID: BORNEO_GET_THRESHOLD_BY_ID_INPUT
  GET_USER_PROFILE_BY_ID: BORNEO_GET_USER_PROFILE_BY_ID_INPUT
  LIST_DASHBOARD_REPORTS_WITH_FILTERS: BORNEO_LIST_DASHBOARD_REPORTS_WITH_FILTERS_INPUT
  LIST_DASHBOARD_REPORT_EDITIONS: BORNEO_LIST_DASHBOARD_REPORT_EDITIONS_INPUT
  LIST_DASHBOARD_USERS_WITH_FILTERS: BORNEO_LIST_DASHBOARD_USERS_WITH_FILTERS_INPUT
  LIST_DATA_BREACHES_WITH_FILTERS: BORNEO_LIST_DATA_BREACHES_WITH_FILTERS_INPUT
  LIST_DATA_BREACH_FILTERS: BORNEO_LIST_DATA_BREACH_FILTERS_INPUT
  LIST_DEPARTMENTS_WITH_SORT_AND_PAGINATION: BORNEO_LIST_DEPARTMENTS_WITH_SORT_AND_PAGINATION_INPUT
  LIST_DISCOVERED_DOCUMENT: BORNEO_LIST_DISCOVERED_DOCUMENT_INPUT
  LIST_DISCOVERED_INFOTYPES: BORNEO_LIST_DISCOVERED_INFOTYPES_INPUT
  LIST_DISCOVERED_RECIPIENTS: BORNEO_LIST_DISCOVERED_RECIPIENTS_INPUT
  LIST_DOMAINS_WITH_PAGINATION_AND_SORTING: BORNEO_LIST_DOMAINS_WITH_PAGINATION_AND_SORTING_INPUT
  LIST_EMPLOYEES_WITH_FILTERS: BORNEO_LIST_EMPLOYEES_WITH_FILTERS_INPUT
  LIST_ERROR_DETAILS_FROM_FILTERED_SCAN_ITERATIONS: BORNEO_LIST_ERROR_DETAILS_FROM_FILTERED_SCAN_ITERATIONS_INPUT
  LIST_EVENTS_WITH_FILTERS: BORNEO_LIST_EVENTS_WITH_FILTERS_INPUT
  LIST_FILTERED_SORTED_CATEGORIES: BORNEO_LIST_FILTERED_SORTED_CATEGORIES_INPUT
  LIST_FILTER_OPTIONS_FOR_RECIPIENTS: BORNEO_LIST_FILTER_OPTIONS_FOR_RECIPIENTS_INPUT
  LIST_HEADQUARTERS_WITH_SORTING: BORNEO_LIST_HEADQUARTERS_WITH_SORTING_INPUT
  LIST_INSIGHT_FILTERS: BORNEO_LIST_INSIGHT_FILTERS_INPUT
  LIST_INVENTORY_RESOURCES_WITH_FILTERS: BORNEO_LIST_INVENTORY_RESOURCES_WITH_FILTERS_INPUT
  LIST_ISSUES_WITH_FILTERS: BORNEO_LIST_ISSUES_WITH_FILTERS_INPUT
  LIST_LEAF_RESOURCES_WITH_FILTERS: BORNEO_LIST_LEAF_RESOURCES_WITH_FILTERS_INPUT
  LIST_LEGAL_DOCUMENTS_WITH_PAGINATION: BORNEO_LIST_LEGAL_DOCUMENTS_WITH_PAGINATION_INPUT
  LIST_OR_FILTER_RECIPIENTS: BORNEO_LIST_OR_FILTER_RECIPIENTS_INPUT
  LIST_PROCESSING_ACTIVITIES: BORNEO_LIST_PROCESSING_ACTIVITIES_INPUT
  LIST_PROCESSING_ACTIVITIES_FILTERS: BORNEO_LIST_PROCESSING_ACTIVITIES_FILTERS_INPUT
  LIST_SCANS_WITH_FILTERS: BORNEO_LIST_SCANS_WITH_FILTERS_INPUT
  LIST_SCAN_EXECUTION_RESULTS: BORNEO_LIST_SCAN_EXECUTION_RESULTS_INPUT
  LIST_SCAN_ITERATIONS_WITH_FILTER: BORNEO_LIST_SCAN_ITERATIONS_WITH_FILTER_INPUT
  LIST_TOMS_WITH_FILTER_AND_PAGINATION_OPTIONS: BORNEO_LIST_TOMS_WITH_FILTER_AND_PAGINATION_OPTIONS_INPUT
  LIST_USER_PROFILE_WITH_FILTERS_AND_SORTING: BORNEO_LIST_USER_PROFILE_WITH_FILTERS_AND_SORTING_INPUT
  MARK_SCAN_FALSE_POSITIVES_BY_ID: BORNEO_MARK_SCAN_FALSE_POSITIVES_BY_ID_INPUT
  PAUSE_SCAN_BY_ID: BORNEO_PAUSE_SCAN_BY_ID_INPUT
  POLL_DOMAIN_BY_ID: BORNEO_POLL_DOMAIN_BY_ID_INPUT
  POST_ACCOUNTS_WITH_FILTER_AND_SORT_OPTIONS: BORNEO_POST_ACCOUNTS_WITH_FILTER_AND_SORT_OPTIONS_INPUT
  POST_CLASSIFICATION_STATS: BORNEO_POST_CLASSIFICATION_STATS_INPUT
  POST_CONNECTOR_WITH_FILTERING_OPTIONS: BORNEO_POST_CONNECTOR_WITH_FILTERING_OPTIONS_INPUT
  POST_CURRENT_DASHBOARD_USER: BORNEO_POST_CURRENT_DASHBOARD_USER_INPUT
  POST_DASHBOARD_REPORT: BORNEO_POST_DASHBOARD_REPORT_INPUT
  POST_DATA_BREACH_INFORMATION: BORNEO_POST_DATA_BREACH_INFORMATION_INPUT
  POST_DISCOVERED_RECIPIENT_BY_ID: BORNEO_POST_DISCOVERED_RECIPIENT_BY_ID_INPUT
  POST_FILTERED_ACCESS_LOGS: BORNEO_POST_FILTERED_ACCESS_LOGS_INPUT
  POST_LOG_AUDIT_RECORDS_WITH_FILTER_CRITERIA: BORNEO_POST_LOG_AUDIT_RECORDS_WITH_FILTER_CRITERIA_INPUT
  POST_RESOURCE_LINEAGE_FILTER: BORNEO_POST_RESOURCE_LINEAGE_FILTER_INPUT
  POST_RESOURCE_STATS_WITH_DELETED_RESOURCES: BORNEO_POST_RESOURCE_STATS_WITH_DELETED_RESOURCES_INPUT
  POST_SCAN_RESOURCE_STATUS: BORNEO_POST_SCAN_RESOURCE_STATUS_INPUT
  POST_SUPPORT_CHAT_QUERY: BORNEO_POST_SUPPORT_CHAT_QUERY_INPUT
  PUT_TOM_STATUS_AND_NOTE: BORNEO_PUT_TOM_STATUS_AND_NOTE_INPUT
  REMOVE_DASHBOARD_USER_BY_USERNAME: BORNEO_REMOVE_DASHBOARD_USER_BY_USERNAME_INPUT
  RESET_DASHBOARD_USER_PASSWORD: BORNEO_RESET_DASHBOARD_USER_PASSWORD_INPUT
  RESUME_SCAN_BY_ID: BORNEO_RESUME_SCAN_BY_ID_INPUT
  RETRIEVE_ACCOUNT_DETAILS_BY_ID: BORNEO_RETRIEVE_ACCOUNT_DETAILS_BY_ID_INPUT
  RETRIEVE_ASSET_BY_ID: BORNEO_RETRIEVE_ASSET_BY_ID_INPUT
  RETRIEVE_CONNECTOR_BY_ID: BORNEO_RETRIEVE_CONNECTOR_BY_ID_INPUT
  RETRIEVE_DATA_BREACH_BY_ID: BORNEO_RETRIEVE_DATA_BREACH_BY_ID_INPUT
  RETRIEVE_DATA_RESOURCE_STATISTICS: BORNEO_RETRIEVE_DATA_RESOURCE_STATISTICS_INPUT
  RETRIEVE_DEPARTMENT_INFORMATION: BORNEO_RETRIEVE_DEPARTMENT_INFORMATION_INPUT
  RETRIEVE_DISCOVERED_DOCUMENT_BY_ID: BORNEO_RETRIEVE_DISCOVERED_DOCUMENT_BY_ID_INPUT
  RETRIEVE_DISCOVERED_INFOTYPE_BY_ID: BORNEO_RETRIEVE_DISCOVERED_INFOTYPE_BY_ID_INPUT
  RETRIEVE_DISCOVERED_RECIPIENT_BY_ID: BORNEO_RETRIEVE_DISCOVERED_RECIPIENT_BY_ID_INPUT
  RETRIEVE_DPIA_BY_ID: BORNEO_RETRIEVE_DPIA_BY_ID_INPUT
  RETRIEVE_EMPLOYEE_DETAILS_BY_ID: BORNEO_RETRIEVE_EMPLOYEE_DETAILS_BY_ID_INPUT
  RETRIEVE_ERROR_DETAILS_BY_ID: BORNEO_RETRIEVE_ERROR_DETAILS_BY_ID_INPUT
  RETRIEVE_ISSUE_BY_ID: BORNEO_RETRIEVE_ISSUE_BY_ID_INPUT
  RETRIEVE_LEGAL_DOCUMENT_BY_ID: BORNEO_RETRIEVE_LEGAL_DOCUMENT_BY_ID_INPUT
  RETRIEVE_LOPDP_THRESHOLD_BY_ID: BORNEO_RETRIEVE_LOPDP_THRESHOLD_BY_ID_INPUT
  RETRIEVE_PROCESSING_ACTIVITY_BY_ID: BORNEO_RETRIEVE_PROCESSING_ACTIVITY_BY_ID_INPUT
  RETRIEVE_RECIPIENT_DETAILS: BORNEO_RETRIEVE_RECIPIENT_DETAILS_INPUT
  RETRIEVE_RECIPIENT_PROCESSING_ACTIVITIES: BORNEO_RETRIEVE_RECIPIENT_PROCESSING_ACTIVITIES_INPUT
  RETRIEVE_RESOURCE_CATALOG_BY_ID: BORNEO_RETRIEVE_RESOURCE_CATALOG_BY_ID_INPUT
  RETRIEVE_RESOURCE_COLUMNS: BORNEO_RETRIEVE_RESOURCE_COLUMNS_INPUT
  RETRIEVE_TOM_BY_ID: BORNEO_RETRIEVE_TOM_BY_ID_INPUT
  SCAN_LEGAL_DOCUMENT_BY_ID: BORNEO_SCAN_LEGAL_DOCUMENT_BY_ID_INPUT
  STOP_SCAN_VIA_SCAN_ID: BORNEO_STOP_SCAN_VIA_SCAN_ID_INPUT
  SUBMIT_CHAT_FEEDBACK: BORNEO_SUBMIT_CHAT_FEEDBACK_INPUT
  SUBMIT_DETAILED_SCAN_RESULTS: BORNEO_SUBMIT_DETAILED_SCAN_RESULTS_INPUT
  TRIGGER_DASHBOARD_REPORT_BY_REPORT_ID: BORNEO_TRIGGER_DASHBOARD_REPORT_BY_REPORT_ID_INPUT
  UPDATE_ASSET_INFORMATION_BY_ID: BORNEO_UPDATE_ASSET_INFORMATION_BY_ID_INPUT
  UPDATE_CATEGORY_INFOTYPES: BORNEO_UPDATE_CATEGORY_INFOTYPES_INPUT
  UPDATE_DASHBOARD_REPORT_FREQUENCY_AND_RECIPIENTS: BORNEO_UPDATE_DASHBOARD_REPORT_FREQUENCY_AND_RECIPIENTS_INPUT
  UPDATE_DASHBOARD_USER_DETAILS: BORNEO_UPDATE_DASHBOARD_USER_DETAILS_INPUT
  UPDATE_DASHBOARD_USER_ROLES: BORNEO_UPDATE_DASHBOARD_USER_ROLES_INPUT
  UPDATE_DATA_BREACH_ENTRY: BORNEO_UPDATE_DATA_BREACH_ENTRY_INPUT
  UPDATE_DEPARTMENT_NAME: BORNEO_UPDATE_DEPARTMENT_NAME_INPUT
  UPDATE_DISCOVERED_DOCUMENT_STATUS: BORNEO_UPDATE_DISCOVERED_DOCUMENT_STATUS_INPUT
  UPDATE_DISCOVERED_INFOTYPE_STATUS: BORNEO_UPDATE_DISCOVERED_INFOTYPE_STATUS_INPUT
  UPDATE_DOMAIN_DETAILS: BORNEO_UPDATE_DOMAIN_DETAILS_INPUT
  UPDATE_DPIA_BY_ID: BORNEO_UPDATE_DPIA_BY_ID_INPUT
  UPDATE_EMPLOYEE_BY_ID: BORNEO_UPDATE_EMPLOYEE_BY_ID_INPUT
  UPDATE_HEADQUARTER_DETAILS_BY_ID: BORNEO_UPDATE_HEADQUARTER_DETAILS_BY_ID_INPUT
  UPDATE_LOPDP_THRESHOLD_BY_ID: BORNEO_UPDATE_LOPDP_THRESHOLD_BY_ID_INPUT
  UPDATE_PROCESSING_ACTIVITY_DETAILS: BORNEO_UPDATE_PROCESSING_ACTIVITY_DETAILS_INPUT
  UPDATE_RECIPIENT_DETAILS_BY_ID: BORNEO_UPDATE_RECIPIENT_DETAILS_BY_ID_INPUT
  UPDATE_RECIPIENT_STATUS_VIA_ID: BORNEO_UPDATE_RECIPIENT_STATUS_VIA_ID_INPUT
  UPDATE_THRESHOLD_BY_ID: BORNEO_UPDATE_THRESHOLD_BY_ID_INPUT
  VERIFY_EMAIL_WITH_ID_AND_TOKEN: BORNEO_VERIFY_EMAIL_WITH_ID_AND_TOKEN_INPUT
}

/**
 * Type map of all available tool input types for toolkit "BORNEO".
 */
export type BORNEO_TOOL_OUTPUTS = {
  ACCESS_SCAN_ITERATION_BY_ID: BORNEO_ACCESS_SCAN_ITERATION_BY_ID_OUTPUT
  ADD_DISCOVERED_RECIPIENTS: BORNEO_ADD_DISCOVERED_RECIPIENTS_OUTPUT
  ARCHIVE_DISCOVERED_RECIPIENT: BORNEO_ARCHIVE_DISCOVERED_RECIPIENT_OUTPUT
  BORNEO_DELETE_DATA_BREACH_BY_ID: BORNEO_BORNEO_DELETE_DATA_BREACH_BY_ID_OUTPUT
  CREATE_AND_SCHEDULE_CLOUD_RESOURCE_SCAN: BORNEO_CREATE_AND_SCHEDULE_CLOUD_RESOURCE_SCAN_OUTPUT
  CREATE_DASHBOARD_USER: BORNEO_CREATE_DASHBOARD_USER_OUTPUT
  CREATE_DEPARTMENT_WITH_TRANSLATIONS: BORNEO_CREATE_DEPARTMENT_WITH_TRANSLATIONS_OUTPUT
  CREATE_DOMAIN_WITH_POLLING_FREQUENCY: BORNEO_CREATE_DOMAIN_WITH_POLLING_FREQUENCY_OUTPUT
  CREATE_DPIA_FOR_PROCESSING_ACTIVITY: BORNEO_CREATE_DPIA_FOR_PROCESSING_ACTIVITY_OUTPUT
  CREATE_EMPLOYEE_WITH_JSON_PAYLOAD: BORNEO_CREATE_EMPLOYEE_WITH_JSON_PAYLOAD_OUTPUT
  CREATE_HEADQUARTER_ENTRY: BORNEO_CREATE_HEADQUARTER_ENTRY_OUTPUT
  CREATE_LEGAL_DOCUMENT_ENTRY: BORNEO_CREATE_LEGAL_DOCUMENT_ENTRY_OUTPUT
  CREATE_NEW_ASSET: BORNEO_CREATE_NEW_ASSET_OUTPUT
  CREATE_NEW_INFOTYPE_CATEGORY: BORNEO_CREATE_NEW_INFOTYPE_CATEGORY_OUTPUT
  CREATE_PROCESSING_ACTIVITY: BORNEO_CREATE_PROCESSING_ACTIVITY_OUTPUT
  CREATE_PROCESSING_ACTIVITY_THRESHOLD: BORNEO_CREATE_PROCESSING_ACTIVITY_THRESHOLD_OUTPUT
  CREATE_RECIPIENT_WITH_DETAILS: BORNEO_CREATE_RECIPIENT_WITH_DETAILS_OUTPUT
  CREATE_THRESHOLD_FOR_PROCESSING_ACTIVITY: BORNEO_CREATE_THRESHOLD_FOR_PROCESSING_ACTIVITY_OUTPUT
  DELETE_ASSET_BY_ID: BORNEO_DELETE_ASSET_BY_ID_OUTPUT
  DELETE_CATEGORY_BY_LABEL: BORNEO_DELETE_CATEGORY_BY_LABEL_OUTPUT
  DELETE_DASHBOARD_REPORT_BY_ID: BORNEO_DELETE_DASHBOARD_REPORT_BY_ID_OUTPUT
  DELETE_DEPARTMENT_BY_ID: BORNEO_DELETE_DEPARTMENT_BY_ID_OUTPUT
  DELETE_DOMAIN_BY_ID: BORNEO_DELETE_DOMAIN_BY_ID_OUTPUT
  DELETE_DPIA_BY_ID: BORNEO_DELETE_DPIA_BY_ID_OUTPUT
  DELETE_EMPLOYEE_BY_ID: BORNEO_DELETE_EMPLOYEE_BY_ID_OUTPUT
  DELETE_HEADQUARTERS_BY_ID: BORNEO_DELETE_HEADQUARTERS_BY_ID_OUTPUT
  DELETE_LEGAL_DOCUMENT_BY_ID: BORNEO_DELETE_LEGAL_DOCUMENT_BY_ID_OUTPUT
  DELETE_LOPDP_THRESHOLD_BY_ID: BORNEO_DELETE_LOPDP_THRESHOLD_BY_ID_OUTPUT
  DELETE_PROCESSING_ACTIVITY_BY_ID: BORNEO_DELETE_PROCESSING_ACTIVITY_BY_ID_OUTPUT
  DELETE_RECIPIENT_BY_ID: BORNEO_DELETE_RECIPIENT_BY_ID_OUTPUT
  DELETE_TAG_FROM_RESOURCE: BORNEO_DELETE_TAG_FROM_RESOURCE_OUTPUT
  DELETE_THRESHOLD_BY_ID: BORNEO_DELETE_THRESHOLD_BY_ID_OUTPUT
  DISABLE_DASHBOARD_USER_BY_USERNAME: BORNEO_DISABLE_DASHBOARD_USER_BY_USERNAME_OUTPUT
  DOWNLOAD_DASHBOARD_REPORT: BORNEO_DOWNLOAD_DASHBOARD_REPORT_OUTPUT
  DOWNLOAD_DASHBOARD_REPORT_EDITION: BORNEO_DOWNLOAD_DASHBOARD_REPORT_EDITION_OUTPUT
  ENABLE_DASHBOARD_USER: BORNEO_ENABLE_DASHBOARD_USER_OUTPUT
  EVALUATE_DATA_BREACH_IMPACT: BORNEO_EVALUATE_DATA_BREACH_IMPACT_OUTPUT
  EXPORT_FILTERED_LEAF_RESOURCES: BORNEO_EXPORT_FILTERED_LEAF_RESOURCES_OUTPUT
  EXPORT_INSIGHT_PAGE_USING_SCAN_ID: BORNEO_EXPORT_INSIGHT_PAGE_USING_SCAN_ID_OUTPUT
  EXPORT_INVENTORY_RESOURCE_LIST: BORNEO_EXPORT_INVENTORY_RESOURCE_LIST_OUTPUT
  EXPORT_PROCESSING_ACTIVITIES_LIST: BORNEO_EXPORT_PROCESSING_ACTIVITIES_LIST_OUTPUT
  EXPORT_RECIPIENTS_LIST_WITH_FILTER: BORNEO_EXPORT_RECIPIENTS_LIST_WITH_FILTER_OUTPUT
  FETCH_DASHBOARD_REPORT_BY_ID: BORNEO_FETCH_DASHBOARD_REPORT_BY_ID_OUTPUT
  FETCH_DATA_BREACH_EVALUATION: BORNEO_FETCH_DATA_BREACH_EVALUATION_OUTPUT
  FILTER_AND_LIST_INSPECTION_RESULTS: BORNEO_FILTER_AND_LIST_INSPECTION_RESULTS_OUTPUT
  FILTER_AND_SORT_ASSETS_LIST: BORNEO_FILTER_AND_SORT_ASSETS_LIST_OUTPUT
  FILTER_EMPLOYEE_LIST: BORNEO_FILTER_EMPLOYEE_LIST_OUTPUT
  FILTER_RECIPIENTS_LIST: BORNEO_FILTER_RECIPIENTS_LIST_OUTPUT
  GET_CATEGORY_BY_LABEL: BORNEO_GET_CATEGORY_BY_LABEL_OUTPUT
  GET_CLOUD_ACCOUNT_BY_ID: BORNEO_GET_CLOUD_ACCOUNT_BY_ID_OUTPUT
  GET_DASHBOARD_REPORT_EDITION_BY_ID: BORNEO_GET_DASHBOARD_REPORT_EDITION_BY_ID_OUTPUT
  GET_DEPARTMENT_FILTER_LIST: BORNEO_GET_DEPARTMENT_FILTER_LIST_OUTPUT
  GET_DOMAIN_BY_ID: BORNEO_GET_DOMAIN_BY_ID_OUTPUT
  GET_HEADQUARTERS_BY_ID: BORNEO_GET_HEADQUARTERS_BY_ID_OUTPUT
  GET_INSIGHT_BY_TYPE_AND_ID: BORNEO_GET_INSIGHT_BY_TYPE_AND_ID_OUTPUT
  GET_RESOURCE_INVENTORY_BY_ID: BORNEO_GET_RESOURCE_INVENTORY_BY_ID_OUTPUT
  GET_SCAN_BY_SCAN_ID: BORNEO_GET_SCAN_BY_SCAN_ID_OUTPUT
  GET_THRESHOLD_BY_ID: BORNEO_GET_THRESHOLD_BY_ID_OUTPUT
  GET_USER_PROFILE_BY_ID: BORNEO_GET_USER_PROFILE_BY_ID_OUTPUT
  LIST_DASHBOARD_REPORTS_WITH_FILTERS: BORNEO_LIST_DASHBOARD_REPORTS_WITH_FILTERS_OUTPUT
  LIST_DASHBOARD_REPORT_EDITIONS: BORNEO_LIST_DASHBOARD_REPORT_EDITIONS_OUTPUT
  LIST_DASHBOARD_USERS_WITH_FILTERS: BORNEO_LIST_DASHBOARD_USERS_WITH_FILTERS_OUTPUT
  LIST_DATA_BREACHES_WITH_FILTERS: BORNEO_LIST_DATA_BREACHES_WITH_FILTERS_OUTPUT
  LIST_DATA_BREACH_FILTERS: BORNEO_LIST_DATA_BREACH_FILTERS_OUTPUT
  LIST_DEPARTMENTS_WITH_SORT_AND_PAGINATION: BORNEO_LIST_DEPARTMENTS_WITH_SORT_AND_PAGINATION_OUTPUT
  LIST_DISCOVERED_DOCUMENT: BORNEO_LIST_DISCOVERED_DOCUMENT_OUTPUT
  LIST_DISCOVERED_INFOTYPES: BORNEO_LIST_DISCOVERED_INFOTYPES_OUTPUT
  LIST_DISCOVERED_RECIPIENTS: BORNEO_LIST_DISCOVERED_RECIPIENTS_OUTPUT
  LIST_DOMAINS_WITH_PAGINATION_AND_SORTING: BORNEO_LIST_DOMAINS_WITH_PAGINATION_AND_SORTING_OUTPUT
  LIST_EMPLOYEES_WITH_FILTERS: BORNEO_LIST_EMPLOYEES_WITH_FILTERS_OUTPUT
  LIST_ERROR_DETAILS_FROM_FILTERED_SCAN_ITERATIONS: BORNEO_LIST_ERROR_DETAILS_FROM_FILTERED_SCAN_ITERATIONS_OUTPUT
  LIST_EVENTS_WITH_FILTERS: BORNEO_LIST_EVENTS_WITH_FILTERS_OUTPUT
  LIST_FILTERED_SORTED_CATEGORIES: BORNEO_LIST_FILTERED_SORTED_CATEGORIES_OUTPUT
  LIST_FILTER_OPTIONS_FOR_RECIPIENTS: BORNEO_LIST_FILTER_OPTIONS_FOR_RECIPIENTS_OUTPUT
  LIST_HEADQUARTERS_WITH_SORTING: BORNEO_LIST_HEADQUARTERS_WITH_SORTING_OUTPUT
  LIST_INSIGHT_FILTERS: BORNEO_LIST_INSIGHT_FILTERS_OUTPUT
  LIST_INVENTORY_RESOURCES_WITH_FILTERS: BORNEO_LIST_INVENTORY_RESOURCES_WITH_FILTERS_OUTPUT
  LIST_ISSUES_WITH_FILTERS: BORNEO_LIST_ISSUES_WITH_FILTERS_OUTPUT
  LIST_LEAF_RESOURCES_WITH_FILTERS: BORNEO_LIST_LEAF_RESOURCES_WITH_FILTERS_OUTPUT
  LIST_LEGAL_DOCUMENTS_WITH_PAGINATION: BORNEO_LIST_LEGAL_DOCUMENTS_WITH_PAGINATION_OUTPUT
  LIST_OR_FILTER_RECIPIENTS: BORNEO_LIST_OR_FILTER_RECIPIENTS_OUTPUT
  LIST_PROCESSING_ACTIVITIES: BORNEO_LIST_PROCESSING_ACTIVITIES_OUTPUT
  LIST_PROCESSING_ACTIVITIES_FILTERS: BORNEO_LIST_PROCESSING_ACTIVITIES_FILTERS_OUTPUT
  LIST_SCANS_WITH_FILTERS: BORNEO_LIST_SCANS_WITH_FILTERS_OUTPUT
  LIST_SCAN_EXECUTION_RESULTS: BORNEO_LIST_SCAN_EXECUTION_RESULTS_OUTPUT
  LIST_SCAN_ITERATIONS_WITH_FILTER: BORNEO_LIST_SCAN_ITERATIONS_WITH_FILTER_OUTPUT
  LIST_TOMS_WITH_FILTER_AND_PAGINATION_OPTIONS: BORNEO_LIST_TOMS_WITH_FILTER_AND_PAGINATION_OPTIONS_OUTPUT
  LIST_USER_PROFILE_WITH_FILTERS_AND_SORTING: BORNEO_LIST_USER_PROFILE_WITH_FILTERS_AND_SORTING_OUTPUT
  MARK_SCAN_FALSE_POSITIVES_BY_ID: BORNEO_MARK_SCAN_FALSE_POSITIVES_BY_ID_OUTPUT
  PAUSE_SCAN_BY_ID: BORNEO_PAUSE_SCAN_BY_ID_OUTPUT
  POLL_DOMAIN_BY_ID: BORNEO_POLL_DOMAIN_BY_ID_OUTPUT
  POST_ACCOUNTS_WITH_FILTER_AND_SORT_OPTIONS: BORNEO_POST_ACCOUNTS_WITH_FILTER_AND_SORT_OPTIONS_OUTPUT
  POST_CLASSIFICATION_STATS: BORNEO_POST_CLASSIFICATION_STATS_OUTPUT
  POST_CONNECTOR_WITH_FILTERING_OPTIONS: BORNEO_POST_CONNECTOR_WITH_FILTERING_OPTIONS_OUTPUT
  POST_CURRENT_DASHBOARD_USER: BORNEO_POST_CURRENT_DASHBOARD_USER_OUTPUT
  POST_DASHBOARD_REPORT: BORNEO_POST_DASHBOARD_REPORT_OUTPUT
  POST_DATA_BREACH_INFORMATION: BORNEO_POST_DATA_BREACH_INFORMATION_OUTPUT
  POST_DISCOVERED_RECIPIENT_BY_ID: BORNEO_POST_DISCOVERED_RECIPIENT_BY_ID_OUTPUT
  POST_FILTERED_ACCESS_LOGS: BORNEO_POST_FILTERED_ACCESS_LOGS_OUTPUT
  POST_LOG_AUDIT_RECORDS_WITH_FILTER_CRITERIA: BORNEO_POST_LOG_AUDIT_RECORDS_WITH_FILTER_CRITERIA_OUTPUT
  POST_RESOURCE_LINEAGE_FILTER: BORNEO_POST_RESOURCE_LINEAGE_FILTER_OUTPUT
  POST_RESOURCE_STATS_WITH_DELETED_RESOURCES: BORNEO_POST_RESOURCE_STATS_WITH_DELETED_RESOURCES_OUTPUT
  POST_SCAN_RESOURCE_STATUS: BORNEO_POST_SCAN_RESOURCE_STATUS_OUTPUT
  POST_SUPPORT_CHAT_QUERY: BORNEO_POST_SUPPORT_CHAT_QUERY_OUTPUT
  PUT_TOM_STATUS_AND_NOTE: BORNEO_PUT_TOM_STATUS_AND_NOTE_OUTPUT
  REMOVE_DASHBOARD_USER_BY_USERNAME: BORNEO_REMOVE_DASHBOARD_USER_BY_USERNAME_OUTPUT
  RESET_DASHBOARD_USER_PASSWORD: BORNEO_RESET_DASHBOARD_USER_PASSWORD_OUTPUT
  RESUME_SCAN_BY_ID: BORNEO_RESUME_SCAN_BY_ID_OUTPUT
  RETRIEVE_ACCOUNT_DETAILS_BY_ID: BORNEO_RETRIEVE_ACCOUNT_DETAILS_BY_ID_OUTPUT
  RETRIEVE_ASSET_BY_ID: BORNEO_RETRIEVE_ASSET_BY_ID_OUTPUT
  RETRIEVE_CONNECTOR_BY_ID: BORNEO_RETRIEVE_CONNECTOR_BY_ID_OUTPUT
  RETRIEVE_DATA_BREACH_BY_ID: BORNEO_RETRIEVE_DATA_BREACH_BY_ID_OUTPUT
  RETRIEVE_DATA_RESOURCE_STATISTICS: BORNEO_RETRIEVE_DATA_RESOURCE_STATISTICS_OUTPUT
  RETRIEVE_DEPARTMENT_INFORMATION: BORNEO_RETRIEVE_DEPARTMENT_INFORMATION_OUTPUT
  RETRIEVE_DISCOVERED_DOCUMENT_BY_ID: BORNEO_RETRIEVE_DISCOVERED_DOCUMENT_BY_ID_OUTPUT
  RETRIEVE_DISCOVERED_INFOTYPE_BY_ID: BORNEO_RETRIEVE_DISCOVERED_INFOTYPE_BY_ID_OUTPUT
  RETRIEVE_DISCOVERED_RECIPIENT_BY_ID: BORNEO_RETRIEVE_DISCOVERED_RECIPIENT_BY_ID_OUTPUT
  RETRIEVE_DPIA_BY_ID: BORNEO_RETRIEVE_DPIA_BY_ID_OUTPUT
  RETRIEVE_EMPLOYEE_DETAILS_BY_ID: BORNEO_RETRIEVE_EMPLOYEE_DETAILS_BY_ID_OUTPUT
  RETRIEVE_ERROR_DETAILS_BY_ID: BORNEO_RETRIEVE_ERROR_DETAILS_BY_ID_OUTPUT
  RETRIEVE_ISSUE_BY_ID: BORNEO_RETRIEVE_ISSUE_BY_ID_OUTPUT
  RETRIEVE_LEGAL_DOCUMENT_BY_ID: BORNEO_RETRIEVE_LEGAL_DOCUMENT_BY_ID_OUTPUT
  RETRIEVE_LOPDP_THRESHOLD_BY_ID: BORNEO_RETRIEVE_LOPDP_THRESHOLD_BY_ID_OUTPUT
  RETRIEVE_PROCESSING_ACTIVITY_BY_ID: BORNEO_RETRIEVE_PROCESSING_ACTIVITY_BY_ID_OUTPUT
  RETRIEVE_RECIPIENT_DETAILS: BORNEO_RETRIEVE_RECIPIENT_DETAILS_OUTPUT
  RETRIEVE_RECIPIENT_PROCESSING_ACTIVITIES: BORNEO_RETRIEVE_RECIPIENT_PROCESSING_ACTIVITIES_OUTPUT
  RETRIEVE_RESOURCE_CATALOG_BY_ID: BORNEO_RETRIEVE_RESOURCE_CATALOG_BY_ID_OUTPUT
  RETRIEVE_RESOURCE_COLUMNS: BORNEO_RETRIEVE_RESOURCE_COLUMNS_OUTPUT
  RETRIEVE_TOM_BY_ID: BORNEO_RETRIEVE_TOM_BY_ID_OUTPUT
  SCAN_LEGAL_DOCUMENT_BY_ID: BORNEO_SCAN_LEGAL_DOCUMENT_BY_ID_OUTPUT
  STOP_SCAN_VIA_SCAN_ID: BORNEO_STOP_SCAN_VIA_SCAN_ID_OUTPUT
  SUBMIT_CHAT_FEEDBACK: BORNEO_SUBMIT_CHAT_FEEDBACK_OUTPUT
  SUBMIT_DETAILED_SCAN_RESULTS: BORNEO_SUBMIT_DETAILED_SCAN_RESULTS_OUTPUT
  TRIGGER_DASHBOARD_REPORT_BY_REPORT_ID: BORNEO_TRIGGER_DASHBOARD_REPORT_BY_REPORT_ID_OUTPUT
  UPDATE_ASSET_INFORMATION_BY_ID: BORNEO_UPDATE_ASSET_INFORMATION_BY_ID_OUTPUT
  UPDATE_CATEGORY_INFOTYPES: BORNEO_UPDATE_CATEGORY_INFOTYPES_OUTPUT
  UPDATE_DASHBOARD_REPORT_FREQUENCY_AND_RECIPIENTS: BORNEO_UPDATE_DASHBOARD_REPORT_FREQUENCY_AND_RECIPIENTS_OUTPUT
  UPDATE_DASHBOARD_USER_DETAILS: BORNEO_UPDATE_DASHBOARD_USER_DETAILS_OUTPUT
  UPDATE_DASHBOARD_USER_ROLES: BORNEO_UPDATE_DASHBOARD_USER_ROLES_OUTPUT
  UPDATE_DATA_BREACH_ENTRY: BORNEO_UPDATE_DATA_BREACH_ENTRY_OUTPUT
  UPDATE_DEPARTMENT_NAME: BORNEO_UPDATE_DEPARTMENT_NAME_OUTPUT
  UPDATE_DISCOVERED_DOCUMENT_STATUS: BORNEO_UPDATE_DISCOVERED_DOCUMENT_STATUS_OUTPUT
  UPDATE_DISCOVERED_INFOTYPE_STATUS: BORNEO_UPDATE_DISCOVERED_INFOTYPE_STATUS_OUTPUT
  UPDATE_DOMAIN_DETAILS: BORNEO_UPDATE_DOMAIN_DETAILS_OUTPUT
  UPDATE_DPIA_BY_ID: BORNEO_UPDATE_DPIA_BY_ID_OUTPUT
  UPDATE_EMPLOYEE_BY_ID: BORNEO_UPDATE_EMPLOYEE_BY_ID_OUTPUT
  UPDATE_HEADQUARTER_DETAILS_BY_ID: BORNEO_UPDATE_HEADQUARTER_DETAILS_BY_ID_OUTPUT
  UPDATE_LOPDP_THRESHOLD_BY_ID: BORNEO_UPDATE_LOPDP_THRESHOLD_BY_ID_OUTPUT
  UPDATE_PROCESSING_ACTIVITY_DETAILS: BORNEO_UPDATE_PROCESSING_ACTIVITY_DETAILS_OUTPUT
  UPDATE_RECIPIENT_DETAILS_BY_ID: BORNEO_UPDATE_RECIPIENT_DETAILS_BY_ID_OUTPUT
  UPDATE_RECIPIENT_STATUS_VIA_ID: BORNEO_UPDATE_RECIPIENT_STATUS_VIA_ID_OUTPUT
  UPDATE_THRESHOLD_BY_ID: BORNEO_UPDATE_THRESHOLD_BY_ID_OUTPUT
  VERIFY_EMAIL_WITH_ID_AND_TOKEN: BORNEO_VERIFY_EMAIL_WITH_ID_AND_TOKEN_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's BORNEO toolkit.
 */
export const BORNEO = {
  slug: "borneo",
  tools: {
    /**
     * Retrieves detailed information about a specific scan iteration in the borneo integration platform. this endpoint allows users to fetch the current status, results, and metadata associated with a particular scan iteration. it should be used when monitoring the progress of a scan, analyzing results, or troubleshooting integration workflows. the endpoint provides a snapshot of the scan iteration at the time of the request and may not reflect real-time updates if the scan is still in progress. it's particularly useful for auditing, reporting, and maintaining a history of scan operations within borneo's automation and integration processes.
     */
    ACCESS_SCAN_ITERATION_BY_ID: "BORNEO_ACCESS_SCAN_ITERATION_BY_ID",
    /**
     * Adds multiple discovered recipients to the system as confirmed recipients. this endpoint should be used when you have a list of previously discovered recipient ids that you want to officially add to your recipient database. it's particularly useful for bulk operations where multiple recipients need to be added simultaneously. the endpoint accepts an array of unique uuids, allowing for efficient processing of multiple recipients in a single api call. note that this endpoint only adds recipients; it does not provide any information about the recipients or perform any other actions beyond adding them to the system.
     */
    ADD_DISCOVERED_RECIPIENTS: "BORNEO_ADD_DISCOVERED_RECIPIENTS",
    /**
     * Archives a specific discovered recipient in the borneo platform. this endpoint is used to move a discovered recipient's data into an archived state, which may be useful for compliance, data retention, or organizational purposes. it should be called when you need to store historical data about a recipient that has been identified through borneo's data visibility and privacy automation processes. the endpoint uses a post method, suggesting it may trigger backend processes to properly archive the recipient's data. note that this operation might affect the visibility or accessibility of the recipient's data in other parts of the system.
     */
    ARCHIVE_DISCOVERED_RECIPIENT: "BORNEO_ARCHIVE_DISCOVERED_RECIPIENT",
    /**
     * Deletes a specific data breach evaluation record from the borneo system. this endpoint should be used when an organization needs to remove an evaluation record, typically in cases where the record is no longer relevant, contains errors, or needs to be purged for compliance reasons. the operation is irreversible, so it should be used with caution. this tool is part of borneo's databreachmanagement functionality, supporting the platform's data protection and privacy management capabilities. it helps maintain an accurate and up-to-date record of data breach evaluations, which is crucial for regulatory compliance and risk management.
     */
    BORNEO_DELETE_DATA_BREACH_BY_ID: "BORNEO_BORNEO_DELETE_DATA_BREACH_BY_ID",
    /**
     * The createscan endpoint initiates a new scan operation in the borneo integration platform, allowing users to configure and schedule data scans across various cloud resources. this powerful tool enables users to set up both one-time and recurring scans, with extensive customization options for resource selection, data inspection policies, and scan limits. it's particularly useful for compliance checks, sensitive data discovery, and regular security audits across cloud environments. the endpoint supports a wide range of resource types and provides flexible scheduling options, from immediate execution to complex cron-based recurring scans. users should carefully consider the scan configuration to balance thoroughness with resource utilization, especially for large-scale environments. while highly versatile, users should note that some features may be resource-type dependent, and should refer to borneo's documentation for specific connector and filter support.
     */
    CREATE_AND_SCHEDULE_CLOUD_RESOURCE_SCAN: "BORNEO_CREATE_AND_SCHEDULE_CLOUD_RESOURCE_SCAN",
    /**
     * Creates a new dashboard user in the borneo integration platform with specified roles, organizational access, and authentication settings. this endpoint allows for granular control over user permissions across different organizations and departments within the borneo ecosystem. it supports integration with external identity providers (okta or gcp) for authentication. use this endpoint when onboarding new users or updating existing user permissions. note that while only the email is required, it's recommended to provide comprehensive role and organization information for proper access control.
     */
    CREATE_DASHBOARD_USER: "BORNEO_CREATE_DASHBOARD_USER",
    /**
     * Creates a new department in the borneo integration platform. this endpoint allows you to add a department to the system with support for multilingual information. it's particularly useful when setting up the organizational structure within borneo or when expanding to new regions requiring localized department names. the endpoint should be used when you need to establish a new department entity that other parts of the system can reference. it's important to note that this endpoint only creates the department and does not associate it with any specific workflows or integrations - those would need to be set up separately.
     */
    CREATE_DEPARTMENT_WITH_TRANSLATIONS: "BORNEO_CREATE_DEPARTMENT_WITH_TRANSLATIONS",
    /**
     * Creates a new domain within the borneo integration platform, allowing for automatic polling and management of connected systems or applications. this endpoint is used to set up a new integration point with a specific name and polling frequency. it should be used when establishing a new connection or integration within the borneo ecosystem. the endpoint is particularly useful for setting up automated data synchronization or workflow triggers between different business applications. it does not provide information about existing domains or modify existing ones; it is strictly for creating new domains.
     */
    CREATE_DOMAIN_WITH_POLLING_FREQUENCY: "BORNEO_CREATE_DOMAIN_WITH_POLLING_FREQUENCY",
    /**
     * Creates a new data protection impact assessment (dpia) for a specific processing activity in the borneo application. this endpoint allows users to comprehensively assess and document privacy risks associated with data processing, including confidentiality, integrity, and availability risks. it should be used when initiating a new dpia process or updating an existing one with detailed risk assessments and mitigation measures. the tool provides a structured approach to evaluating privacy concerns and ensuring compliance with data protection regulations. however, it does not automatically implement any risk mitigation measures; it only facilitates the assessment and documentation process.
     */
    CREATE_DPIA_FOR_PROCESSING_ACTIVITY: "BORNEO_CREATE_DPIA_FOR_PROCESSING_ACTIVITY",
    /**
     * Creates a new employee record in the borneo integration platform. this endpoint allows you to add an employee to the system with various details such as personal information, job-related data, and organizational structure. it's primarily used when onboarding new employees or updating the system with employee information from external sources. the endpoint captures both mandatory fields (name, surname, createdby) and optional fields for a comprehensive employee profile. it's particularly useful for hr systems integration, allowing synchronization with external apis through the referenceid field. note that while it collects employment dates, it doesn't automatically handle employee status changes or departures; these would likely require separate api calls or processes.
     */
    CREATE_EMPLOYEE_WITH_JSON_PAYLOAD: "BORNEO_CREATE_EMPLOYEE_WITH_JSON_PAYLOAD",
    /**
     * Creates a new headquarters entry in the borneo integration platform. this endpoint allows users to register the main office or primary location of a company or organization within the system. it captures essential information about the headquarters, including its name, address, and associated identifiers. use this endpoint when setting up a new company profile or updating the primary business location. the endpoint ensures data consistency by enforcing specific formatting rules for each field. it's particularly useful for organizations managing multiple locations or integrating headquarters data with other business systems.
     */
    CREATE_HEADQUARTER_ENTRY: "BORNEO_CREATE_HEADQUARTER_ENTRY",
    /**
     * Creates or uploads a new legal document in the borneo integration platform with specified metadata. this endpoint allows users to add various types of legal documents, such as privacy policies or data processing agreements, to the system. it captures essential information about the document, including its location, type, applicable region, and discovery settings. use this endpoint when you need to integrate new legal documents into your workflow or update existing ones with new versions. the tool is particularly useful for maintaining a centralized repository of legal documents across different regions and categories within your organization.
     */
    CREATE_LEGAL_DOCUMENT_ENTRY: "BORNEO_CREATE_LEGAL_DOCUMENT_ENTRY",
    /**
     * Creates a new asset in the borneo integration platform. this endpoint allows users to add various types of assets to their inventory, ranging from hardware and software applications to office furniture and documentation. it's primarily used when onboarding new resources or updating the asset registry. the endpoint captures essential information about each asset, including its type, location, and associated identifiers. it's particularly useful for organizations managing diverse asset portfolios across multiple locations. note that while creating an asset, only the name and type are required, allowing for flexible asset management workflows.
     */
    CREATE_NEW_ASSET: "BORNEO_CREATE_NEW_ASSET",
    /**
     * Creates a new infotype category in the borneo integration platform, allowing users to organize and group related sensitive data types. this endpoint is used to establish a structured hierarchy for managing various infotypes, such as pii, pfi, and phi, enhancing data protection and compliance efforts. the created category serves as a container for specific infotypes, facilitating efficient data classification and management within the borneo ecosystem.
     */
    CREATE_NEW_INFOTYPE_CATEGORY: "BORNEO_CREATE_NEW_INFOTYPE_CATEGORY",
    /**
     * Creates a new processing activity in the borneo integration platform. this endpoint allows users to define and configure detailed attributes of a data processing activity, including its purpose, legal basis, data sources, subjects, retention policies, and organizational roles. it's essential for organizations to document their data processing activities for compliance with data protection regulations. use this endpoint when setting up a new data processing workflow or updating existing processes in your organization's data management strategy.
     */
    CREATE_PROCESSING_ACTIVITY: "BORNEO_CREATE_PROCESSING_ACTIVITY",
    /**
     * Creates a new threshold for a specific data processing activity in the context of lopdp (law on personal data protection) compliance. this endpoint is used to define and assess various risk factors associated with data processing activities. it allows for the creation of detailed risk profiles by setting multiple boolean flags for different aspects of data processing, such as systematic personal assessment, large-scale observation, and handling of sensitive data. the threshold can be saved as a draft or activated immediately. this tool is essential for organizations to evaluate and document their data processing activities for compliance purposes and risk management.
     */
    CREATE_PROCESSING_ACTIVITY_THRESHOLD: "BORNEO_CREATE_PROCESSING_ACTIVITY_THRESHOLD",
    /**
     * Creates a new recipient in the borneo integration platform. this endpoint is used to register and manage detailed information about entities that receive or process data within the system. it captures essential details for compliance with data protection regulations, including the recipient's role, location, data storage information, and associated legal documents like data processing agreements (dpas). the endpoint is particularly useful for organizations managing complex data ecosystems with multiple partners, vendors, or internal departments. it should be used when onboarding new data recipients or updating existing recipient information to maintain accurate records for auditing and compliance purposes. note that while many fields are optional, providing comprehensive information enhances the system's ability to manage data flow and compliance effectively.
     */
    CREATE_RECIPIENT_WITH_DETAILS: "BORNEO_CREATE_RECIPIENT_WITH_DETAILS",
    /**
     * Creates a new threshold for a specific data processing activity in the borneo integration platform. this endpoint is used to define and set various characteristics and risk factors associated with a data processing activity, which is crucial for privacy compliance and risk assessment. the threshold creation process captures detailed information about the nature, scope, and potential impact of data processing, allowing organizations to evaluate and manage privacy risks effectively. use this endpoint when setting up new data processing activities or updating the risk profile of existing ones. the created threshold can be in either 'draft' or 'activated' status, allowing for review before finalizing. note that while many parameters are optional, providing comprehensive information ensures a more accurate risk assessment.
     */
    CREATE_THRESHOLD_FOR_PROCESSING_ACTIVITY: "BORNEO_CREATE_THRESHOLD_FOR_PROCESSING_ACTIVITY",
    /**
     * The deleteasset endpoint removes a specific asset from the borneo integration platform. this operation is used when an asset needs to be permanently deleted from the system, such as when it's no longer relevant or has been decommissioned. the deletion is irreversible, so it should be used with caution. this endpoint is particularly useful for maintaining an up-to-date asset inventory, cleaning up obsolete data, or managing system resources. it's important to note that deleting an asset may have implications on related data or integrations, so users should ensure that the asset is no longer needed before proceeding with deletion.
     */
    DELETE_ASSET_BY_ID: "BORNEO_DELETE_ASSET_BY_ID",
    /**
     * Deletes a specific category from the borneo integration platform using its unique label. this endpoint should be used when you need to remove an entire category and all its associated data from the system. it's particularly useful for cleaning up outdated or unnecessary categories. be cautious when using this endpoint, as the deletion is permanent and cannot be undone. this operation will fail if the specified category doesn't exist or if there are any dependencies preventing its deletion.
     */
    DELETE_CATEGORY_BY_LABEL: "BORNEO_DELETE_CATEGORY_BY_LABEL",
    /**
     * Deletes a specific dashboard report from the borneo integration platform. this endpoint should be used when you need to permanently remove a dashboard report that is no longer needed or relevant. it's important to note that this action is irreversible, and once a report is deleted, it cannot be recovered. use this endpoint with caution, ensuring that the report is no longer required before deletion. the endpoint does not return the deleted report data, so make sure to retrieve any necessary information before deletion if needed.
     */
    DELETE_DASHBOARD_REPORT_BY_ID: "BORNEO_DELETE_DASHBOARD_REPORT_BY_ID",
    /**
     * Deletes a specific department from the borneo platform using its unique identifier. this endpoint should be used when you need to remove a department that is no longer relevant or has been decommissioned. it's important to note that this operation is irreversible and will permanently remove all data associated with the specified department. use this endpoint with caution, as it may impact resource management and organizational structure within the borneo context. before deletion, ensure that all necessary data has been backed up or transferred to other relevant departments if required.
     */
    DELETE_DEPARTMENT_BY_ID: "BORNEO_DELETE_DEPARTMENT_BY_ID",
    /**
     * Deletes a specific domain from the borneo integration platform. this endpoint permanently removes all data and configurations associated with the specified domain. use this operation with caution, as it cannot be undone. it should be used when a domain is no longer needed or when cleaning up unused resources. this operation may have cascading effects on related integrations or workflows, so ensure all dependencies are considered before deletion. the api will likely require appropriate authentication and authorization to perform this sensitive operation.
     */
    DELETE_DOMAIN_BY_ID: "BORNEO_DELETE_DOMAIN_BY_ID",
    /**
     * Deletes a specific data protection impact assessment (dpia) from the borneo system. this endpoint should be used when a dpia is no longer needed or relevant, such as when a project has been completed or cancelled, or when the assessment needs to be removed due to policy changes. the operation is irreversible, so it should be used with caution. once deleted, the dpia and its associated data cannot be recovered through the api. this endpoint is part of borneo's data privacy management features, allowing organizations to maintain an up-to-date repository of their dpias.
     */
    DELETE_DPIA_BY_ID: "BORNEO_DELETE_DPIA_BY_ID",
    /**
     * Deletes an employee record from the borneo system using the specified employee id. this endpoint should be used when an employee leaves the organization or when their record needs to be permanently removed from the system. once deleted, the employee data cannot be recovered through the api, so use this endpoint with caution. it's recommended to archive or backup employee data before deletion if retention is required for compliance or record-keeping purposes. this operation is final and irreversible within the borneo platform.
     */
    DELETE_EMPLOYEE_BY_ID: "BORNEO_DELETE_EMPLOYEE_BY_ID",
    /**
     * Deletes a specific headquarters record from the borneo system. this endpoint should be used when you need to permanently remove a headquarters entry from your organization's data. it's particularly useful for cleaning up obsolete or erroneous headquarters data. exercise caution when using this endpoint, as the deletion is irreversible and will remove all associated data for the specified headquarters. ensure you have the correct headquarterid before proceeding with the deletion to avoid unintended data loss. this operation may have cascading effects on related data, such as employee records or location-based configurations.
     */
    DELETE_HEADQUARTERS_BY_ID: "BORNEO_DELETE_HEADQUARTERS_BY_ID",
    /**
     * Deletes a specific legal document from the borneo platform using its unique identifier. this endpoint should be used when a document needs to be permanently removed from the system, such as when it's no longer relevant, outdated, or to comply with data retention policies. it's important to note that this operation is irreversible and should be used with caution. the deletion process ensures compliance with gdpr and fedramp standards, maintaining a secure audit trail of the action. before deletion, ensure that all necessary backups or archival processes have been completed, as the document will no longer be accessible through the system after this operation.
     */
    DELETE_LEGAL_DOCUMENT_BY_ID: "BORNEO_DELETE_LEGAL_DOCUMENT_BY_ID",
    /**
     * This endpoint deletes a specific lopdp (local public data protection) threshold from the borneo integration platform. it is used to remove outdated, incorrect, or no longer applicable thresholds related to data protection regulations. the deletion is permanent and cannot be undone, so it should be used with caution. this endpoint is particularly useful when updating compliance settings or when certain thresholds are no longer relevant due to changes in regulations or business processes. it should not be used for temporary disabling of thresholds; instead, use it only when the threshold needs to be completely removed from the system.
     */
    DELETE_LOPDP_THRESHOLD_BY_ID: "BORNEO_DELETE_LOPDP_THRESHOLD_BY_ID",
    /**
     * Deletes a specific processing activity from the borneo integration platform. this endpoint should be used when you need to permanently remove a data processing activity that is no longer required or valid. it's important to note that this action is irreversible, and once a processing activity is deleted, it cannot be recovered. use this endpoint with caution, as it may impact existing data flows or integrations that depend on the deleted activity. the endpoint does not return the deleted data; it typically returns a success status if the deletion was completed successfully.
     */
    DELETE_PROCESSING_ACTIVITY_BY_ID: "BORNEO_DELETE_PROCESSING_ACTIVITY_BY_ID",
    /**
     * Deletes a specific recipient from the borneo integration platform. this endpoint should be used when you need to permanently remove a recipient's information from the system, such as when a contact is no longer valid or when correcting erroneous entries. the operation is irreversible, so it should be used with caution. once a recipient is deleted, any associated data or integration settings for that recipient will also be removed. this endpoint is particularly useful for maintaining data hygiene and complying with data retention policies.
     */
    DELETE_RECIPIENT_BY_ID: "BORNEO_DELETE_RECIPIENT_BY_ID",
    /**
     * The deletetags endpoint removes specified tags from resources in the borneo integration platform. it allows users to delete tags based on their key, and optionally, their value, from a set of resources defined either by a filter or a list of resource ids. this endpoint is useful for maintaining clean and organized resource tagging, especially when tags become obsolete or need to be updated en masse. it's particularly helpful for bulk tag removal across multiple resources or resource types. however, users should exercise caution as tag deletion is irreversible and may affect resource management and organization within the borneo platform.
     */
    DELETE_TAG_FROM_RESOURCE: "BORNEO_DELETE_TAG_FROM_RESOURCE",
    /**
     * Deletes a specific threshold from the borneo integration platform. this endpoint should be used when you need to remove a threshold that is no longer required for monitoring or alerting purposes within your integrations. it permanently removes the threshold configuration from the system, so use with caution. this operation cannot be undone, and once a threshold is deleted, any associated alerts or monitoring rules will cease to function. ensure that the threshold is no longer needed before deletion to avoid disrupting active monitoring processes.
     */
    DELETE_THRESHOLD_BY_ID: "BORNEO_DELETE_THRESHOLD_BY_ID",
    /**
     * Disables a specified user account in the borneo dashboard, preventing further access to the system. this endpoint should be used when an administrator needs to revoke a user's access to the borneo integration platform, such as when an employee leaves the organization or their role changes. the operation is not reversible through this endpoint, so it should be used with caution. note that disabling a user does not delete their account or associated data; it only restricts their ability to log in and use the dashboard.
     */
    DISABLE_DASHBOARD_USER_BY_USERNAME: "BORNEO_DISABLE_DASHBOARD_USER_BY_USERNAME",
    /**
     * The downloaddashboardreport endpoint allows users to download specific types of dashboard reports from the borneo integration platform. this post endpoint is designed to generate and retrieve comprehensive reports related to privacy operations, data discovery, and data flow within an organization's systems. it should be used when detailed insights into data management, privacy compliance, or data flow visualizations are required. the endpoint is particularly useful for privacy officers, data analysts, or system administrators who need to review or present aggregated data on the organization's data handling practices. note that the report generation process may take some time depending on the complexity and amount of data being analyzed, so users should be prepared for a potential delay before receiving the downloaded report.
     */
    DOWNLOAD_DASHBOARD_REPORT: "BORNEO_DOWNLOAD_DASHBOARD_REPORT",
    /**
     * Downloads a specific dashboard report edition from the borneo integration platform. this endpoint allows users to retrieve a particular version or iteration of a dashboard report by providing its unique identifier. it should be used when a user needs to access or save a specific report edition, perhaps for archival purposes, offline analysis, or to compare different versions of a report. the endpoint accepts a post request with a json payload containing the report edition id. it's important to note that this tool only handles the download process and does not provide functionalities for listing available reports, creating new reports, or modifying existing ones. users should ensure they have the correct reporteditionid before making the request, as the schema does not specify any error handling for invalid ids.
     */
    DOWNLOAD_DASHBOARD_REPORT_EDITION: "BORNEO_DOWNLOAD_DASHBOARD_REPORT_EDITION",
    /**
     * Enables dashboard access for a specified user in the borneo integration platform. this endpoint is used to grant or restore a user's ability to view and interact with dashboards within the system. it should be called when an administrator needs to activate a user's dashboard privileges, such as after initial account creation or if access was previously revoked. the endpoint only handles enabling access and does not provide information about the user's current access status or other account details. note that this operation does not create a new user account; it assumes the specified username already exists in the system.
     */
    ENABLE_DASHBOARD_USER: "BORNEO_ENABLE_DASHBOARD_USER",
    /**
     * This endpoint allows users to evaluate and document details of a data breach incident. it is used to capture comprehensive information about a breach, including notifications made, affected parties, and an overall assessment. the endpoint supports saving evaluations as drafts, enabling users to revisit and complete the documentation process over multiple sessions if needed. the tool should be used when there's a need to record and assess the impact and response to a data breach, whether it's a new incident or an update to an existing evaluation. it's particularly useful for compliance purposes, helping organizations track their breach notification efforts and maintain detailed records of each incident. it's important to note that this endpoint does not automatically notify authorities or affected parties; it merely records whether such notifications have been made. users should ensure they follow appropriate breach notification procedures separately from using this tool.
     */
    EVALUATE_DATA_BREACH_IMPACT: "BORNEO_EVALUATE_DATA_BREACH_IMPACT",
    /**
     * The listleafresources endpoint exports a comprehensive list of leaf resources in the borneo integration platform, allowing for extensive filtering, sorting, and detailed information retrieval. it's designed to facilitate data discovery, classification, and management across various cloud providers and services. this endpoint is particularly useful for conducting audits, managing data governance, or preparing reports on resource usage and sensitive data distribution across the organization's digital landscape. the function supports a wide range of filtering options, enabling precise querying based on resource attributes, metadata, and detected sensitive information. users can customize the output by sorting results and requesting detailed column-level information on detected infotypes. while powerful, users should be mindful of potential performance impacts when requesting detailed information or using complex filters on large datasets.
     */
    EXPORT_FILTERED_LEAF_RESOURCES: "BORNEO_EXPORT_FILTERED_LEAF_RESOURCES",
    /**
     * The exportpageinsight endpoint allows users to export filtered inspection results from a specific scan in the borneo integration platform. this tool is particularly useful for retrieving and analyzing detailed information about scanned pages, resources, and detected info types. it provides extensive filtering capabilities to customize the exported data according to various criteria such as resource types, user associations, file types, and detection confidence levels. the endpoint should be used when a comprehensive export of scan results is needed, especially for further analysis or reporting purposes. it's important to note that while the filtering options are extensive, the performance may be affected when exporting large datasets with multiple complex filters applied simultaneously.
     */
    EXPORT_INSIGHT_PAGE_USING_SCAN_ID: "BORNEO_EXPORT_INSIGHT_PAGE_USING_SCAN_ID",
    /**
     * Exports a filtered and sorted list of inventory resources from the borneo integration platform. this endpoint allows for extensive customization of the exported data, including pagination, field selection, sorting, and filtering based on various criteria such as account, region, resource type, and tags. it also provides options to include aggregated statistics from child resources, violation metrics, and framework exception counts. use this endpoint when you need to retrieve a comprehensive, customized view of your inventory resources for analysis, reporting, or integration with other systems. the exported data can be further processed or used for compliance, resource management, or security auditing purposes. note that the response may be paginated for large result sets, requiring multiple api calls to retrieve all data.
     */
    EXPORT_INVENTORY_RESOURCE_LIST: "BORNEO_EXPORT_INVENTORY_RESOURCE_LIST",
    /**
     * This endpoint exports a filtered list of processing activities in specified formats and languages. it allows users to retrieve data about various data processing activities, which can be customized using multiple filter criteria. the export can be generated in csv, pdf, or doc formats, supporting multiple languages for localization. this tool is particularly useful for generating reports, conducting audits, or sharing processing activity information with stakeholders in their preferred format and language. note that at least one export format and a language must be specified for a successful request.
     */
    EXPORT_PROCESSING_ACTIVITIES_LIST: "BORNEO_EXPORT_PROCESSING_ACTIVITIES_LIST",
    /**
     * The exportrecipientslist endpoint generates and exports a list of recipients based on specified criteria. it allows for flexible data extraction in multiple formats (csv, pdf, or doc) with extensive filtering options. this endpoint is ideal for generating reports, performing data analysis, or creating backups of recipient information. it can handle complex queries to narrow down the recipient list based on various attributes such as categories, roles, processing activities, and more. however, it does not provide real-time updates and should be used for point-in-time exports rather than live data access. the endpoint is particularly useful for compliance reporting, auditing, or transferring recipient data to other systems.
     */
    EXPORT_RECIPIENTS_LIST_WITH_FILTER: "BORNEO_EXPORT_RECIPIENTS_LIST_WITH_FILTER",
    /**
     * Retrieves a specific dashboard report from the borneo integration platform. this endpoint allows users to access detailed analytics and reporting data for a particular dashboard, providing insights into data exchange, workflow automation, and potentially sensitive data breach information. it should be used when a user needs to view or analyze a specific report's contents, such as performance metrics, data sharing statistics, or privacy incident details. the endpoint is particularly useful for generating up-to-date reports for monitoring and decision-making purposes. note that this endpoint only retrieves existing reports and does not generate new ones or modify report data.
     */
    FETCH_DASHBOARD_REPORT_BY_ID: "BORNEO_FETCH_DASHBOARD_REPORT_BY_ID",
    /**
     * Retrieves detailed information about a specific evaluated data breach incident. this endpoint should be used when you need to access comprehensive details about a particular data breach that has been assessed within the borneo platform. it provides insights into the nature, scope, and potential impact of the breach, which can be crucial for incident response, compliance reporting, and risk assessment. the tool is particularly useful for security teams, compliance officers, and data protection officers who need to review or report on specific data breach incidents. note that this endpoint only provides information about breaches that have already been evaluated and recorded in the system; it cannot be used to report new breaches or assess ongoing incidents.
     */
    FETCH_DATA_BREACH_EVALUATION: "BORNEO_FETCH_DATA_BREACH_EVALUATION",
    /**
     * The insightlistpost endpoint retrieves a list of inspection results from the borneo integration platform. it allows users to fetch either scan-level or page-level results based on specified criteria. this endpoint is particularly useful for analyzing data security and compliance across various resources and scans. it supports extensive filtering options, pagination for large result sets, and customizable sorting, making it ideal for generating comprehensive reports or conducting detailed investigations into data insights. the endpoint should be used when a detailed overview of inspection results is required, but it may not provide real-time updates for ongoing scans.
     */
    FILTER_AND_LIST_INSPECTION_RESULTS: "BORNEO_FILTER_AND_LIST_INSPECTION_RESULTS",
    /**
     * The listassets endpoint retrieves a customized list of assets from borneo. it supports flexible filtering and sorting, enabling efficient asset management. use this endpoint for generating reports, conducting audits, or searching specific items. while powerful, it may not provide detailed asset information in the initial response.
     */
    FILTER_AND_SORT_ASSETS_LIST: "BORNEO_FILTER_AND_SORT_ASSETS_LIST",
    /**
     * The filteremployeelist endpoint allows you to retrieve a filtered list of employees based on specified criteria. this post operation is designed for querying employee data within the borneo integration platform, enabling efficient data retrieval for various business processes and integrations. use this endpoint when you need to fetch a subset of employee records matching particular conditions, such as department, job title, or hire date. the endpoint supports pagination for handling large result sets, making it suitable for applications that need to display or process employee data in manageable chunks. note that the specific filterable fields may vary depending on your borneo instance configuration and available employee data.
     */
    FILTER_EMPLOYEE_LIST: "BORNEO_FILTER_EMPLOYEE_LIST",
    /**
     * The filterrecipientslist endpoint allows users to retrieve a filtered list of recipients based on specified criteria. this post method endpoint is designed to narrow down a potentially large set of recipients to a more manageable subset that meets certain conditions. it's particularly useful for targeting specific groups of recipients for communication, data analysis, or other operations within the borneo integration platform. the endpoint supports pagination to handle large result sets efficiently. while it provides powerful filtering capabilities, users should be aware that the performance may vary depending on the complexity of the filter criteria and the size of the recipient database. this endpoint should be used when there's a need to identify and work with a specific subset of recipients rather than the entire list.
     */
    FILTER_RECIPIENTS_LIST: "BORNEO_FILTER_RECIPIENTS_LIST",
    /**
     * Retrieves detailed information about a specific category within borneo's data classification system using the category's unique label. this endpoint is used to fetch metadata, attributes, and potentially associated data points for a given category. it's particularly useful for understanding the structure and properties of a category, which can be crucial for data governance, compliance reporting, and workflow automation tasks. the endpoint should be used when detailed information about a specific category is needed, such as during data discovery processes, access governance reviews, or when setting up data lineage mappings. it does not modify any data and is primarily for information retrieval purposes.
     */
    GET_CATEGORY_BY_LABEL: "BORNEO_GET_CATEGORY_BY_LABEL",
    /**
     * Retrieves detailed information about a specific cloud account within the borneo integration platform. this endpoint should be used when you need to access or verify the configuration, status, or properties of a particular cloud account. it provides essential data for account management, such as associated services, integration status, and account-specific settings. this tool is particularly useful for administrators managing multiple cloud accounts or for auditing purposes. note that it only retrieves information and does not modify the account in any way. the endpoint may not provide sensitive information like access keys or full credential details for security reasons.
     */
    GET_CLOUD_ACCOUNT_BY_ID: "BORNEO_GET_CLOUD_ACCOUNT_BY_ID",
    /**
     * Retrieves a specific edition of a dashboard report from the borneo integration platform. this endpoint is used to fetch detailed information about a particular version of a report, allowing users to access historical data or compare different iterations of the same report. it's particularly useful for tracking changes in business event impacts over time or analyzing data from specific periods. the endpoint should be used when there's a need to review or analyze a specific report edition, rather than just the most recent data. it may not provide real-time updates and is limited to retrieving one report edition at a time.
     */
    GET_DASHBOARD_REPORT_EDITION_BY_ID: "BORNEO_GET_DASHBOARD_REPORT_EDITION_BY_ID",
    /**
     * The filterdepartmentlist endpoint allows users to retrieve a filtered list of departments from the borneo integration platform. it accepts various filtering criteria to narrow down the results based on department attributes such as name, location, or size. this endpoint is particularly useful for searching specific departments or generating customized department lists for reporting or integration purposes. the filtered results can be sorted and paginated for easier data handling and display. while it provides powerful filtering capabilities, it does not modify any department data and is intended for read-only operations.
     */
    GET_DEPARTMENT_FILTER_LIST: "BORNEO_GET_DEPARTMENT_FILTER_LIST",
    /**
     * Retrieves detailed information about a specific domain within the borneo integration platform. this endpoint should be used when you need to access the current configuration, status, or other attributes of a particular domain. it provides a comprehensive view of the domain's settings, which can be useful for auditing, troubleshooting, or gathering information for further operations. the endpoint does not modify any domain data and is safe for frequent use. however, it's important to note that this endpoint only retrieves information for a single domain at a time and does not provide aggregated data across multiple domains.
     */
    GET_DOMAIN_BY_ID: "BORNEO_GET_DOMAIN_BY_ID",
    /**
     * Retrieves detailed information about a specific headquarters registered in the borneo system. this endpoint allows users to access comprehensive data about an organization's headquarters, which may include its location, data governance practices, compliance status, and security measures. it's particularly useful for auditing purposes, reviewing data management strategies, or assessing the overall data security posture of a specific organizational unit. the endpoint should be used when detailed information about a particular headquarters is needed, especially in the context of data security and governance. it may not provide real-time operational data or information about other organizational units not classified as headquarters.
     */
    GET_HEADQUARTERS_BY_ID: "BORNEO_GET_HEADQUARTERS_BY_ID",
    /**
     * Retrieves a specific insight from the borneo platform based on its type and unique identifier. this endpoint is crucial for accessing detailed information about data observability, security, privacy, or compliance issues identified by borneo's ml-powered classifiers. use this when you need to fetch comprehensive data about a particular finding, such as sensitive data trends, privacy violations, or security gaps. the endpoint provides focused, in-depth information about a single insight, making it ideal for detailed investigations or generating specific reports. it does not provide aggregated data or lists of multiple insights; for those purposes, you would need to use a different endpoint.
     */
    GET_INSIGHT_BY_TYPE_AND_ID: "BORNEO_GET_INSIGHT_BY_TYPE_AND_ID",
    /**
     * Retrieves detailed inventory information for a specific resource identified by its unique resourceid. this endpoint is designed to provide up-to-date data on the quantity, quality, and status of resources managed by borneo resource investments ltd., such as mineral deposits or gold mines. it should be used when accurate, current inventory data is needed for resource planning, reporting, or analysis purposes. the endpoint returns comprehensive inventory details, which may include resource quantity, grade, extraction status, and other relevant metrics. however, it does not provide historical inventory data or future projections; it only reflects the current state of the resource inventory.
     */
    GET_RESOURCE_INVENTORY_BY_ID: "BORNEO_GET_RESOURCE_INVENTORY_BY_ID",
    /**
     * Retrieves detailed information about a specific data scan performed by borneo's data risk remediation platform. this endpoint allows users to fetch the results and metadata of a particular scan, including identified sensitive data, compliance status, and any automated tagging applied. it should be used when you need to review the outcome of a specific scan, track the progress of ongoing scans, or audit historical scan data. the endpoint focuses solely on providing scan-related information and does not modify any data or trigger new scans.
     */
    GET_SCAN_BY_SCAN_ID: "BORNEO_GET_SCAN_BY_SCAN_ID",
    /**
     * Retrieves detailed information about a specific threshold setting in the borneo integration platform. this endpoint allows users to fetch the configuration and current status of a particular threshold, which may be used for monitoring, alerting, or controlling data flows between integrated systems. it should be used when detailed information about a known threshold is required, such as during system audits, troubleshooting, or when adjusting integration workflows. the endpoint will not modify the threshold settings; it is for retrieval purposes only. users should ensure they have the correct thresholdid before making the request, as invalid ids will likely result in error responses.
     */
    GET_THRESHOLD_BY_ID: "BORNEO_GET_THRESHOLD_BY_ID",
    /**
     * Retrieves the user profile information for a specific user in the borneo integration platform. this endpoint should be used when detailed information about a user's profile is needed, such as for displaying user data, verifying user details, or performing user-related operations within the borneo ecosystem. the endpoint focuses on providing user-specific data while maintaining borneo's emphasis on data security and privacy observability. it's important to note that this endpoint only retrieves profile information and does not modify or delete user data. the response will likely include various user attributes, but the exact structure and fields are not specified in the given schema.
     */
    GET_USER_PROFILE_BY_ID: "BORNEO_GET_USER_PROFILE_BY_ID",
    /**
     * Retrieves a list of dashboard reports from the borneo integration platform, allowing for filtered, paginated, and sorted results. this endpoint is useful for obtaining an overview of available reports, such as privacy operations dashboards, data discovery dashboards, and privacy ops data flow reports. it supports complex querying through its filter object, enabling users to search by name, type, and frequency. the endpoint facilitates efficient data retrieval through pagination and customizable sorting, making it ideal for applications that need to display or process large sets of report data. use this when you need to fetch multiple dashboard reports at once, especially when implementing report listing features or performing bulk operations on report data.
     */
    LIST_DASHBOARD_REPORTS_WITH_FILTERS: "BORNEO_LIST_DASHBOARD_REPORTS_WITH_FILTERS",
    /**
     * Lists the editions of a specific dashboard report in the borneo integration platform. this endpoint allows users to retrieve a paginated list of dashboard report editions, with options for sorting and specifying the number of results per page. it's particularly useful for managing and reviewing multiple versions or iterations of a dashboard report, enabling users to track changes over time or select specific editions for further analysis or comparison. the endpoint supports efficient navigation through large sets of editions using pagination tokens and customizable sorting, making it suitable for applications that need to display or process dashboard report history.
     */
    LIST_DASHBOARD_REPORT_EDITIONS: "BORNEO_LIST_DASHBOARD_REPORT_EDITIONS",
    /**
     * Lists and filters dashboard users in the borneo integration platform based on specified criteria. this endpoint allows retrieval of user data filtered by roles, tenant, organization, and departments. it's useful for user management, access control, and generating reports on user distribution across different organizational units. the endpoint supports complex queries by combining multiple filter criteria, enabling precise user data retrieval for various administrative and analytical purposes.
     */
    LIST_DASHBOARD_USERS_WITH_FILTERS: "BORNEO_LIST_DASHBOARD_USERS_WITH_FILTERS",
    /**
     * The listdatabreaches endpoint retrieves a list of data breaches based on specified filter conditions, allowing for detailed searching and sorting of breach information. it supports pagination for handling large result sets and provides flexible filtering options including free-text search, authority notification status, owner, and breach status. this endpoint is particularly useful for compliance teams, security analysts, and it administrators who need to monitor, review, or report on data breach incidents within their organization. the tool facilitates efficient data breach management, enabling users to quickly locate specific incidents or generate comprehensive reports based on various criteria.
     */
    LIST_DATA_BREACHES_WITH_FILTERS: "BORNEO_LIST_DATA_BREACHES_WITH_FILTERS",
    /**
     * Retrieves a list of available filter options for data breaches in the borneo platform. this endpoint allows users to obtain specific filter criteria based on either the owner of the data breach or its current status. it's particularly useful for preparing dynamic filter options in user interfaces or for understanding the range of possible values when filtering data breaches. the endpoint should be called when setting up data breach management dashboards or when implementing search and filter functionality for data breach records. note that this endpoint only provides filter options and does not return actual data breach information.
     */
    LIST_DATA_BREACH_FILTERS: "BORNEO_LIST_DATA_BREACH_FILTERS",
    /**
     * The listdepartments endpoint retrieves a list of departments within the borneo integration platform. it offers flexible querying with filtering, pagination, and sorting options. use this endpoint to explore organizational structure, manage department hierarchies, or integrate department information into other systems. note that it does not support creating, updating, or deleting departments.
     */
    LIST_DEPARTMENTS_WITH_SORT_AND_PAGINATION: "BORNEO_LIST_DEPARTMENTS_WITH_SORT_AND_PAGINATION",
    /**
     * Retrieves a list of discovered documents in the borneo integration platform, allowing for flexible querying, filtering, and sorting of results. this endpoint is used to fetch information about documents that have been discovered by the system, such as newly added files, deleted documents, or items with specific statuses. it supports pagination for handling large datasets and provides sorting capabilities to organize the results according to user preferences. use this endpoint when you need to review, monitor, or analyze the discovered documents within your borneo integration environment.
     */
    LIST_DISCOVERED_DOCUMENT: "BORNEO_LIST_DISCOVERED_DOCUMENT",
    /**
     * The listdiscoveredinfotypes endpoint retrieves discovered info types from borneo, supporting flexible querying, filtering, sorting, and pagination. it's used for exploring sensitive information identified in your data ecosystem, aiding in data governance and compliance monitoring. the endpoint offers advanced filtering and efficient handling of large datasets.
     */
    LIST_DISCOVERED_INFOTYPES: "BORNEO_LIST_DISCOVERED_INFOTYPES",
    /**
     * Lists and retrieves discovered recipients in the borneo integration platform. this endpoint allows for paginated, sorted, and filtered access to the discovered recipients data. it's designed for efficiently managing and exploring large sets of recipient information, supporting various query parameters for customized result sets. use this endpoint when you need to browse, search, or analyze discovered recipients based on specific criteria or in a particular order.
     */
    LIST_DISCOVERED_RECIPIENTS: "BORNEO_LIST_DISCOVERED_RECIPIENTS",
    /**
     * Retrieves a list of domains in the borneo integration platform with support for pagination and custom sorting. this endpoint allows users to fetch domain information in manageable chunks and order the results based on specific criteria. it's particularly useful for applications that need to display or process large sets of domain data efficiently. the endpoint does not provide filtering capabilities, so all domains accessible to the authenticated user will be listed. use this when you need to enumerate or browse through the domains registered in your borneo account, such as for administrative purposes or to populate domain selection interfaces.
     */
    LIST_DOMAINS_WITH_PAGINATION_AND_SORTING: "BORNEO_LIST_DOMAINS_WITH_PAGINATION_AND_SORTING",
    /**
     * Retrieves a list of employees based on specified filtering and sorting criteria. this endpoint allows for flexible querying of employee data, supporting both simple and complex search scenarios. it can be used to find employees by name, filter by departments, and sort the results based on various attributes. the endpoint is particularly useful for generating reports, populating employee directories, or performing data analysis on the workforce. it does not modify any employee data and is intended for read-only operations. note that the response structure and pagination details are not specified in the given schema, so additional documentation may be needed for handling large result sets.
     */
    LIST_EMPLOYEES_WITH_FILTERS: "BORNEO_LIST_EMPLOYEES_WITH_FILTERS",
    /**
     * The errorlist endpoint retrieves errors related to scan iterations in borneo. it offers flexible filtering, sorting, and pagination for efficient error analysis. use for debugging, monitoring, or reporting across various scans and resources. supports up to 10,000 records per call.
     */
    LIST_ERROR_DETAILS_FROM_FILTERED_SCAN_ITERATIONS: "BORNEO_LIST_ERROR_DETAILS_FROM_FILTERED_SCAN_ITERATIONS",
    /**
     * Lists and retrieves events based on specified criteria, with options for filtering, sorting, and pagination. this endpoint is designed for querying event data in the borneo integration platform, allowing users to fetch events related to various entities such as issues, resources, scans, and users. it offers flexible querying capabilities through its filter object, custom sorting, and efficient pagination for handling large datasets. use this endpoint when you need to search, analyze, or monitor events within your borneo-integrated systems. the endpoint is particularly useful for generating reports, tracking specific issues, or monitoring system activities across different resources and users.
     */
    LIST_EVENTS_WITH_FILTERS: "BORNEO_LIST_EVENTS_WITH_FILTERS",
    /**
     * The listcategories endpoint allows users to retrieve a list of categories from the borneo integration platform. it provides flexible options for filtering and sorting the results, enabling efficient category management and exploration. this endpoint is particularly useful when you need to fetch a subset of categories or organize them in a specific order for display or processing purposes. the response will include category information based on the applied filters and sorting criteria. note that this endpoint does not create, update, or delete categories; it is solely for retrieving existing category data.
     */
    LIST_FILTERED_SORTED_CATEGORIES: "BORNEO_LIST_FILTERED_SORTED_CATEGORIES",
    /**
     * Lists the available filters for recipients in the borneo integration platform based on the specified filter type. this endpoint allows users to retrieve either category-based or role-based filters, which can be used to manage and organize recipients for targeted data distribution or notification purposes. use this endpoint when you need to access the current set of filters available for recipient management, either by categories or roles. it provides a comprehensive list of filters but does not apply or modify any filters; it's purely for retrieval purposes. this tool is particularly useful for administrators or integrators who need to understand the current filter structure before applying filters to recipients or setting up data distribution rules.
     */
    LIST_FILTER_OPTIONS_FOR_RECIPIENTS: "BORNEO_LIST_FILTER_OPTIONS_FOR_RECIPIENTS",
    /**
     * The headquarters list endpoint retrieves a paginated list of headquarters records from borneo. it supports efficient querying of large datasets through pagination and custom sorting. this endpoint is ideal for applications needing to display or process headquarters information in batches, such as for reports or dashboards. it offers flexible result retrieval and sorting capabilities, but lacks built-in filtering options.
     */
    LIST_HEADQUARTERS_WITH_SORTING: "BORNEO_LIST_HEADQUARTERS_WITH_SORTING",
    /**
     * The list-filters endpoint retrieves a list of available filters for data insights, specifically focused on file extension filters. this tool is used to obtain filtering options for managing and analyzing data within borneo's integration platform. it's particularly useful when users need to understand or apply filters based on file types in their data streams or integration processes. the endpoint requires a specific scan id, suggesting that filters are contextual to particular data scans or integration jobs. currently, the tool is limited to listing file extension filters, which may be used for data categorization, processing, or compliance purposes in data integration workflows.
     */
    LIST_INSIGHT_FILTERS: "BORNEO_LIST_INSIGHT_FILTERS",
    /**
     * Retrieves a comprehensive list of resources from borneo's inventory. supports detailed filtering, sorting, and pagination for efficient resource management and analysis across multiple cloud providers. ideal for security auditing, compliance monitoring, and inventory management tasks.
     */
    LIST_INVENTORY_RESOURCES_WITH_FILTERS: "BORNEO_LIST_INVENTORY_RESOURCES_WITH_FILTERS",
    /**
     * The listissues endpoint allows users to retrieve a filtered and sorted list of issues from the borneo integration platform. it provides extensive filtering capabilities to narrow down results based on various criteria such as resources, cloud accounts, issue states, and severities. the endpoint supports pagination for handling large result sets efficiently and allows customization of the returned data through column selection and inclusion of related resources. this powerful querying tool is essential for monitoring, troubleshooting, and managing issues across integrated systems and cloud environments in borneo.
     */
    LIST_ISSUES_WITH_FILTERS: "BORNEO_LIST_ISSUES_WITH_FILTERS",
    /**
     * The listleafresources endpoint retrieves and filters leaf resources from borneo's catalog. it supports detailed searching across various criteria, enabling efficient resource management and discovery. users can paginate results, include additional information, and sort outputs as needed.
     */
    LIST_LEAF_RESOURCES_WITH_FILTERS: "BORNEO_LIST_LEAF_RESOURCES_WITH_FILTERS",
    /**
     * Retrieves a paginated and sortable list of legal documents based on specified filter criteria. this endpoint allows for efficient searching, filtering, and organizing of legal documents within the borneo integration platform. it supports free-text search on document names, filtering by document status, and custom sorting options. use this endpoint when you need to fetch multiple legal documents that match specific criteria or when you want to implement a paginated document browsing feature in your application. the endpoint is particularly useful for document management systems, legal workflow automation, or any scenario requiring bulk retrieval of legal document metadata.
     */
    LIST_LEGAL_DOCUMENTS_WITH_PAGINATION: "BORNEO_LIST_LEGAL_DOCUMENTS_WITH_PAGINATION",
    /**
     * The listrecipients endpoint retrieves a paginated and filtered list of recipients from the borneo application. it allows for extensive customization of the query through sorting and filtering options, making it suitable for various recipient management and data integration tasks. the endpoint supports pagination for efficient handling of large datasets and provides detailed filtering capabilities to narrow down results based on multiple criteria such as categories, roles, status, and associated entities. this tool is ideal for generating reports, auditing recipient data, or populating user interfaces with recipient information. it should be used when a comprehensive view of recipients is needed, with the ability to apply complex filters and sort the results as required. the endpoint does not modify any data and is solely for retrieval purposes.
     */
    LIST_OR_FILTER_RECIPIENTS: "BORNEO_LIST_OR_FILTER_RECIPIENTS",
    /**
     * Listprocessingactivities retrieves a list of processing activities with extensive filtering, sorting, and pagination. it's ideal for auditing, reporting, or managing data processing activities. the endpoint supports complex querying via the 'filter' object and efficient pagination. while powerful for retrieval, it doesn't modify records.
     */
    LIST_PROCESSING_ACTIVITIES: "BORNEO_LIST_PROCESSING_ACTIVITIES",
    /**
     * This endpoint retrieves a list of available filters for processing activities in the pops (processing of personal data) dashboard. it allows users to obtain filter options based on various categories related to data processing activities. the endpoint is designed to support dynamic filtering capabilities in the dashboard, enabling users to refine their view of processing activities according to different criteria. use this endpoint when you need to populate filter options in the user interface or when preparing to filter the main processing activities list. it's important to note that this endpoint only returns the available filter options and does not perform the actual filtering of processing activities.
     */
    LIST_PROCESSING_ACTIVITIES_FILTERS: "BORNEO_LIST_PROCESSING_ACTIVITIES_FILTERS",
    /**
     * The list scans endpoint retrieves a filtered and sorted list of scans from the borneo integration platform. it allows users to query scan data with extensive filtering options, including search terms, scan types, connector ids, resources, data planes, and scan statuses. the endpoint supports pagination for handling large result sets and provides control over the returned fields and sorting order. this tool is particularly useful for monitoring scan activities, analyzing scan results across different resources and connectors, and managing large-scale scanning operations in cloud environments.
     */
    LIST_SCANS_WITH_FILTERS: "BORNEO_LIST_SCANS_WITH_FILTERS",
    /**
     * The listscanexecutions endpoint retrieves and filters inspection results from scan executions in the borneo integration platform. it allows users to query scan results with highly granular control, supporting filtering by scan ids, resource ids, infotypes, statuses, and confidence levels. this endpoint is particularly useful for analyzing scan outcomes, tracking specific resources, and managing large datasets through pagination and sorting capabilities. it should be used when you need to review or analyze the results of previous scans, especially when dealing with a large number of scanned resources or when looking for specific types of detected information. the endpoint does not perform new scans; it only retrieves and organizes existing scan results. keep in mind that the response may be truncated if there are more results than the specified page size, requiring the use of the nexttoken for subsequent requests to retrieve all relevant data.
     */
    LIST_SCAN_EXECUTION_RESULTS: "BORNEO_LIST_SCAN_EXECUTION_RESULTS",
    /**
     * The listscaniterations endpoint allows users to retrieve a paginated list of scan iterations with customizable filtering, sorting, and field selection options. this post request is ideal for querying and analyzing scan iteration data across multiple scans or resources. use it to fetch specific subsets of scan iterations, sort results based on various criteria, and control the amount of data returned in each api call. the endpoint supports efficient pagination for handling large datasets, making it suitable for both small-scale queries and extensive data analysis tasks. it's particularly useful for monitoring scan progress, auditing scan history, or gathering insights across multiple scan iterations.
     */
    LIST_SCAN_ITERATIONS_WITH_FILTER: "BORNEO_LIST_SCAN_ITERATIONS_WITH_FILTER",
    /**
     * The listtoms endpoint retrieves a filtered, sorted, and paginated list of toms from the borneo integration platform. it allows for complex querying of tom objects based on various criteria such as text search, categories, types, statuses, and ids. the endpoint supports pagination for handling large result sets and provides sorting capabilities for customized data presentation. this tool is ideal for browsing, searching, and analyzing collections of toms within the borneo system, enabling efficient data exploration and management. it should be used when a comprehensive view of toms is needed, subject to specific filtering and sorting requirements. the endpoint does not create, update, or delete toms; it is purely for retrieval and listing purposes.
     */
    LIST_TOMS_WITH_FILTER_AND_PAGINATION_OPTIONS: "BORNEO_LIST_TOMS_WITH_FILTER_AND_PAGINATION_OPTIONS",
    /**
     * The listuserprofiles endpoint retrieves a paginated and filterable list of user profiles from borneo. it supports custom querying with search, field selection, sorting, and pagination. ideal for user management, reporting, and data synchronization tasks. the endpoint offers flexible data retrieval, optimizing for efficiency. note the 10,000 item limit per request, requiring pagination for larger datasets.
     */
    LIST_USER_PROFILE_WITH_FILTERS_AND_SORTING: "BORNEO_LIST_USER_PROFILE_WITH_FILTERS_AND_SORTING",
    /**
     * Marks specified reports as false positives within a given scan in the borneo platform. this endpoint is used to refine scan results by identifying and flagging reports that are determined to be false alarms. it helps in improving the accuracy of security scans and reducing noise in the results. the function takes a scan id and a list of report uuids to be marked as false positives. it should be used when security analysts or automated systems have reviewed scan results and identified certain findings as non-issues or false alarms. this action helps in training the system and improving future scan accuracy. note that this operation is likely irreversible, so care should be taken to ensure only genuinely false positive reports are marked.
     */
    MARK_SCAN_FALSE_POSITIVES_BY_ID: "BORNEO_MARK_SCAN_FALSE_POSITIVES_BY_ID",
    /**
     * The pausescan endpoint allows users to temporarily halt an ongoing scan process in the borneo integration platform. this tool is used to pause the scanning and analysis of sensitive data within connected systems or data streams. it's particularly useful when you need to temporarily suspend data processing for maintenance, to manage system resources, or to address any issues that may have arisen during the scan. the endpoint should be used when there's a need to interrupt a scan without completely terminating it, allowing for later resumption. it's important to note that this action doesn't delete or reset the scan progress; it simply suspends further processing until explicitly resumed. the pause operation is immediate, but any in-progress data processing may complete before the pause takes full effect.
     */
    PAUSE_SCAN_BY_ID: "BORNEO_PAUSE_SCAN_BY_ID",
    /**
     * This endpoint allows you to initiate a poll operation or submit data for a specific domain within the borneo integration platform. it is used when you need to gather information, trigger a data collection process, or update the status of a particular domain identified by its unique domainid. the post method suggests that you're sending data to the server, possibly to start a new poll, update an existing one, or submit responses to a poll. this endpoint should be used when interacting with domain-specific polling functionality in borneo, such as collecting integration status updates or triggering scheduled data synchronizations. it's important to note that the exact behavior and data requirements may vary depending on the specific implementation and purpose of polling in your borneo setup.
     */
    POLL_DOMAIN_BY_ID: "BORNEO_POLL_DOMAIN_BY_ID",
    /**
     * The listaccounts endpoint retrieves a filtered and sorted list of accounts from the borneo platform. it supports complex querying based on various criteria, offers pagination for large datasets, and allows custom sorting. while providing extensive filtering, it doesn't return detailed account information or support real-time updates.
     */
    POST_ACCOUNTS_WITH_FILTER_AND_SORT_OPTIONS: "BORNEO_POST_ACCOUNTS_WITH_FILTER_AND_SORT_OPTIONS",
    /**
     * Retrieves statistical information about resource classifications based on the specified filter criteria. this endpoint allows you to query classification data for resources in the borneo integration platform. use this when you need to analyze the distribution or frequency of specific classifications within your integrated data. the endpoint returns aggregated statistics, not individual resource details. it's particularly useful for generating reports, monitoring classification trends, or validating the effectiveness of your classification processes within borneo.
     */
    POST_CLASSIFICATION_STATS: "BORNEO_POST_CLASSIFICATION_STATS",
    /**
     * Retrieves a filtered and sorted list of connectors from the borneo integration platform. this endpoint allows you to search, filter, and paginate through available connectors based on various criteria such as names, states, types, and associated resources. it's particularly useful for managing large numbers of connectors, monitoring their states, or finding specific connectors within your integration ecosystem. the endpoint supports advanced filtering options, pagination for handling large result sets, and customizable sorting to organize the returned data. use this when you need to audit your connector inventory, check the status of multiple connectors, or find connectors matching specific criteria.
     */
    POST_CONNECTOR_WITH_FILTERING_OPTIONS: "BORNEO_POST_CONNECTOR_WITH_FILTERING_OPTIONS",
    /**
     * Retrieves or updates information about the currently authenticated user in the borneo dashboard. this endpoint is designed to provide or modify user-specific data within the context of the borneo integration platform's dashboard. it should be used when the application needs to access or update the current user's profile, preferences, or permissions. the endpoint relies on the existing authentication context to identify the user, eliminating the need for additional parameters. it's important to note that this endpoint may not provide general user management functions and is specifically tailored for the authenticated user's dashboard experience.
     */
    POST_CURRENT_DASHBOARD_USER: "BORNEO_POST_CURRENT_DASHBOARD_USER",
    /**
     * Creates or schedules a dashboard report in the borneo integration platform for privacy operations and data discovery. this endpoint allows users to generate various types of reports, including privacy ops dashboard, data discovery dashboard, and privacy ops data flow. it supports both immediate and scheduled report generation with flexible frequency options. the tool is designed to help organizations track sensitive data, ensure compliance, and manage privacy across their infrastructure. use this endpoint when you need to set up regular privacy and data discovery reports or generate one-time reports for immediate analysis. note that the endpoint does not provide real-time data but rather creates reports based on the most recent data available at the time of report generation.
     */
    POST_DASHBOARD_REPORT: "BORNEO_POST_DASHBOARD_REPORT",
    /**
     * Creates a new data breach report in the borneo platform. this endpoint allows users to submit comprehensive information about a data breach incident, including details about the occurrence, discovery, affected data and individuals, security measures, and follow-up actions. the report can be saved as a draft or submitted as a final version. it supports multiple languages and allows for the inclusion of additional related information through uuids. this tool should be used when documenting and reporting data breach incidents within an organization, helping to ensure compliance with data protection regulations and facilitating incident response and analysis. it's particularly useful for security teams, compliance officers, and data protection officers who need to maintain detailed records of data breaches.
     */
    POST_DATA_BREACH_INFORMATION: "BORNEO_POST_DATA_BREACH_INFORMATION",
    /**
     * Updates or processes information for a specific discovered recipient user in the borneo integration platform. this endpoint allows you to interact with user data that has been automatically discovered by the system, potentially as part of the integration process between different applications. use this when you need to modify, confirm, or take action on a discovered user's information. the exact actions performed depend on the request body (not specified in the schema) but may include tasks such as confirming the user's identity, updating their details, or initiating further integration steps. this endpoint is specific to individual users and requires the unique discoveredrecipientid to target the correct record.
     */
    POST_DISCOVERED_RECIPIENT_BY_ID: "BORNEO_POST_DISCOVERED_RECIPIENT_BY_ID",
    /**
     * The listaccesslogs endpoint retrieves and filters access logs from the borneo integration platform. it allows users to search, filter, and paginate through logs based on various criteria such as user email, operation type, request id, and time range. this endpoint is essential for monitoring system activity, troubleshooting issues, and maintaining security compliance. use this endpoint when you need to analyze system usage, track specific user actions, or investigate particular requests or operations. it's particularly useful for auditing purposes, performance monitoring, and identifying patterns or anomalies in system access. the endpoint supports detailed filtering options, allowing for precise log retrieval. however, it's important to note that the results are limited to api logs only, and the maximum number of logs returned per call is capped at 10,000. for comprehensive log analysis, multiple calls may be necessary using the pagination feature.
     */
    POST_FILTERED_ACCESS_LOGS: "BORNEO_POST_FILTERED_ACCESS_LOGS",
    /**
     * The retrieveauditlogs endpoint fetches filtered audit logs from borneo. it offers extensive filtering options for precise log retrieval across various cloud platforms and system components. use it for investigations, troubleshooting, and compliance checks. supports pagination with a 10,000 entry limit per call.
     */
    POST_LOG_AUDIT_RECORDS_WITH_FILTER_CRITERIA: "BORNEO_POST_LOG_AUDIT_RECORDS_WITH_FILTER_CRITERIA",
    /**
     * Retrieves the lineage information for a specified resource within the borneo integration platform. this endpoint allows users to trace the data flow both upstream and downstream from a given resource, providing crucial insights into data provenance and impact analysis. it's particularly useful for data governance, compliance tracking, and understanding data transformations within your integrated systems. the endpoint requires specifying the resource id and the depth of lineage to explore in both directions, enabling fine-grained control over the scope of the lineage query. use this when you need to understand the origin, transformations, and downstream effects of your data resources in borneo.
     */
    POST_RESOURCE_LINEAGE_FILTER: "BORNEO_POST_RESOURCE_LINEAGE_FILTER",
    /**
     * Retrieves statistics about resources within the borneo integration platform. this endpoint provides valuable insights into the current state and usage of resources in your borneo environment. it can be used to monitor resource utilization, track changes over time, and inform decision-making about resource management and scaling. the endpoint allows for optional inclusion of deleted resources in the statistics, providing flexibility in data analysis. it's particularly useful for administrators and developers who need to understand the overall resource landscape of their borneo implementation. note that this endpoint focuses on aggregated statistics and may not provide detailed information about individual resources.
     */
    POST_RESOURCE_STATS_WITH_DELETED_RESOURCES: "BORNEO_POST_RESOURCE_STATS_WITH_DELETED_RESOURCES",
    /**
     * Retrieves and filters the resource status for a specific scan iteration in the borneo integration platform. this endpoint allows users to fetch detailed information about the status of resources associated with a particular scan, supporting pagination for large datasets and filtering by resource name. it's particularly useful for monitoring the progress of scans, troubleshooting issues with specific resources, or gathering data for reporting purposes. the endpoint should be used when detailed status information about scan resources is required, especially when dealing with large-scale scans that may involve numerous resources. note that while it supports retrieving up to 10,000 records per call, for very large scans, multiple calls using the nexttoken may be necessary to retrieve all data.
     */
    POST_SCAN_RESOURCE_STATUS: "BORNEO_POST_SCAN_RESOURCE_STATUS",
    /**
     * The post /support/chat endpoint handles chat support interactions in borneo. it processes user queries for real-time assistance with platform issues or inquiries. use this endpoint to start or continue support conversations, enabling interactive problem-solving within borneo's ecosystem. not suitable for non-support communications or large data submissions.
     */
    POST_SUPPORT_CHAT_QUERY: "BORNEO_POST_SUPPORT_CHAT_QUERY",
    /**
     * Updates a specific technical operating model (tom) in the borneo integration platform. this endpoint allows users to modify the implementation status of a tom, add explanatory notes, and attach relevant documentation. it's primarily used for tracking and managing the lifecycle of toms within an organization's integration processes. the endpoint is particularly useful when the status of a tom changes, when additional context needs to be provided, or when supporting documents need to be linked to the tom. it should be used to keep tom information up-to-date and to maintain a clear record of tom progress and associated documentation.
     */
    PUT_TOM_STATUS_AND_NOTE: "BORNEO_PUT_TOM_STATUS_AND_NOTE",
    /**
     * Removes a specified user from the dashboard in the borneo integration platform. this endpoint should be used when you need to revoke a user's access to the dashboard, typically during offboarding processes or when adjusting user permissions. the operation is irreversible, so use it with caution. it only removes the user from the dashboard and does not affect their overall account status in the borneo platform. this endpoint is particularly useful for administrators managing user access to specific dashboards within the system.
     */
    REMOVE_DASHBOARD_USER_BY_USERNAME: "BORNEO_REMOVE_DASHBOARD_USER_BY_USERNAME",
    /**
     * Initiates a password reset process for a specified dashboard user in the borneo platform. this endpoint should be used when a user has forgotten their password or needs to change it for security reasons. it triggers the password reset mechanism, which typically involves sending a reset link or temporary password to the user's registered email address. this tool does not actually change the password but starts the secure reset process. it's important to note that this endpoint doesn't return the new password or reset token directly for security reasons.
     */
    RESET_DASHBOARD_USER_PASSWORD: "BORNEO_RESET_DASHBOARD_USER_PASSWORD",
    /**
     * The resumedatascan endpoint allows users to resume a previously paused or interrupted data scan operation within the borneo integration platform. this put request is used to continue the scanning process for privacy risks or data vulnerabilities that was halted earlier. the endpoint is particularly useful in scenarios where a scan was temporarily stopped due to system maintenance, network issues, or intentional pausing. it should be used when there's a need to complete an unfinished scan without starting the entire process from the beginning. this tool doesn't initiate new scans or modify the scan parameters; it simply continues the existing scan from where it left off.
     */
    RESUME_SCAN_BY_ID: "BORNEO_RESUME_SCAN_BY_ID",
    /**
     * Retrieves detailed information for a specific account within the borneo integration platform. this endpoint should be used when you need to access comprehensive account data, including settings, permissions, integration configurations, and other relevant information associated with the account. it's particularly useful for account management tasks, auditing, or when displaying account details in a user interface. the endpoint returns the most up-to-date information available for the specified account. note that this endpoint does not provide real-time data security or privacy observability information; for those features, you may need to use separate dedicated endpoints within the borneo api.
     */
    RETRIEVE_ACCOUNT_DETAILS_BY_ID: "BORNEO_RETRIEVE_ACCOUNT_DETAILS_BY_ID",
    /**
     * Retrieves detailed information about a specific asset within the borneo integration platform. this endpoint allows users to fetch comprehensive data about a single asset, including its properties, metadata, and current status. it should be used when detailed information about a particular asset is needed, such as during asset management, auditing, or when integrating asset data with other systems. the endpoint provides a snapshot of the asset's current state and attributes, which can be crucial for decision-making in data governance, security analysis, or integration processes. note that this endpoint only retrieves information and does not modify the asset in any way. it may not provide historical data or version history of the asset, focusing instead on its current state.
     */
    RETRIEVE_ASSET_BY_ID: "BORNEO_RETRIEVE_ASSET_BY_ID",
    /**
     * Retrieves detailed information about a specific connector in the borneo integration platform. this endpoint allows you to fetch the configuration, status, and other relevant details of a connector using its unique identifier. use this endpoint when you need to inspect or troubleshoot a particular connector's settings or performance. it's particularly useful for administrators or developers managing integrations within the borneo ecosystem. the endpoint will not modify any connector settings; it's a read-only operation designed for information retrieval only.
     */
    RETRIEVE_CONNECTOR_BY_ID: "BORNEO_RETRIEVE_CONNECTOR_BY_ID",
    /**
     * Retrieves detailed information about a specific data breach incident using its unique identifier. this endpoint is crucial for investigating and managing data breaches within the borneo platform. it provides comprehensive details about the breach, which may include the date of occurrence, affected data types, potential impact, and current status of the breach. use this endpoint when you need in-depth information about a particular data breach for compliance reporting, incident response, or forensic analysis. the endpoint focuses solely on providing information and does not perform any actions or modifications related to the data breach.
     */
    RETRIEVE_DATA_BREACH_BY_ID: "BORNEO_RETRIEVE_DATA_BREACH_BY_ID",
    /**
     * Retrieves comprehensive statistical information about data resources across the borneo integration platform. this endpoint provides valuable insights into the overall data landscape, including metrics related to data security, privacy intelligence, and observability. it should be used when you need a high-level overview of your data resources, including potential security risks, privacy compliance status, and data distribution across integrated systems. the endpoint does not accept any parameters, suggesting it returns a complete snapshot of data stats for all accessible resources. keep in mind that the response may be extensive and could take longer to process for large-scale integrations with numerous data sources.
     */
    RETRIEVE_DATA_RESOURCE_STATISTICS: "BORNEO_RETRIEVE_DATA_RESOURCE_STATISTICS",
    /**
     * Retrieves detailed information about a specific department within the borneo integration platform. this endpoint is part of the departmentsapi and is used to fetch comprehensive data about a single department, including its configuration, associated workflows, and integration settings. it's particularly useful when you need to review or audit a department's setup within the borneo ecosystem. the endpoint should be used when detailed information about a specific department is required, such as during troubleshooting, reporting, or when updating department configurations. note that this endpoint only provides read access to department data and cannot be used to modify department information.
     */
    RETRIEVE_DEPARTMENT_INFORMATION: "BORNEO_RETRIEVE_DEPARTMENT_INFORMATION",
    /**
     * Retrieves detailed information about a specific discovered document within the borneo system. this endpoint allows users to access metadata, content, or processing status of a document that has been ingested, processed, or otherwise managed by borneo's document management capabilities. it should be used when detailed information about a particular document is needed, such as during workflow processing, auditing, or information retrieval tasks. the endpoint is particularly useful for tracking the lifecycle of a document within borneo's ecosystem, from discovery to final processing or archival stages. note that this endpoint only provides information about a single document; for bulk operations or document listings, a different endpoint would be more appropriate.
     */
    RETRIEVE_DISCOVERED_DOCUMENT_BY_ID: "BORNEO_RETRIEVE_DISCOVERED_DOCUMENT_BY_ID",
    /**
     * Retrieves detailed information about a specific discovered infotype from the borneo platform. this endpoint is used to access the characteristics, classification, and metadata of a particular data type that has been identified and categorized during the data discovery process. it is particularly useful for understanding the nature of sensitive or important data within your organization's systems. the endpoint should be used when you need to review or analyze the properties of a specific discovered infotype, such as its sensitivity level, applicable compliance rules, or prevalence in your data landscape. it does not modify or create new infotypes; it only provides read access to existing discovered infotype information.
     */
    RETRIEVE_DISCOVERED_INFOTYPE_BY_ID: "BORNEO_RETRIEVE_DISCOVERED_INFOTYPE_BY_ID",
    /**
     * Retrieves detailed information about a specific discovered recipient using their unique identifier. this endpoint is part of the recipient management and discovery process within the borneo integration platform. it should be used when you need to access comprehensive data about a particular recipient that has been identified or discovered by the system. the endpoint is useful for verifying recipient details, updating records, or integrating recipient information into other workflows. note that this endpoint only provides information for recipients that have already been discovered and added to the system; it cannot be used to search for new recipients or modify existing recipient data.
     */
    RETRIEVE_DISCOVERED_RECIPIENT_BY_ID: "BORNEO_RETRIEVE_DISCOVERED_RECIPIENT_BY_ID",
    /**
     * Retrieves a specific data protection impact assessment (dpia) using its unique identifier. this endpoint is used to access detailed information about a particular dpia, which is crucial for understanding and managing privacy risks associated with data processing activities in borneo's conservation and resource management efforts. it should be used when detailed information about a specific dpia is required, such as for reviewing, updating, or referencing the assessment. the endpoint does not provide a list of all dpias or create new ones; it is specifically for retrieving individual dpia records. users should ensure they have the correct dpia identifier before making the request, as incorrect identifiers will likely result in a "not found" error.
     */
    RETRIEVE_DPIA_BY_ID: "BORNEO_RETRIEVE_DPIA_BY_ID",
    /**
     * Retrieves detailed information for a specific employee within the borneo integration platform. this endpoint should be used when you need to access comprehensive data about an individual employee, such as their personal details, job information, or any other relevant data stored in the system. it's particularly useful for displaying employee profiles, verifying employee information, or as part of more complex workflows that require up-to-date employee data. the endpoint returns a single employee record based on the provided employee id. note that this endpoint only retrieves data and does not modify any employee information. it should not be used for bulk data retrieval or when you need summarized information about multiple employees.
     */
    RETRIEVE_EMPLOYEE_DETAILS_BY_ID: "BORNEO_RETRIEVE_EMPLOYEE_DETAILS_BY_ID",
    /**
     * The geterrordetails endpoint retrieves detailed information about a specific error in the borneo integration platform using its unique identifier. this tool is designed to provide comprehensive error data, including error type, description, timestamp, and any associated metadata, which is crucial for effective error management and resolution. it should be used when investigating specific error occurrences, troubleshooting issues, or gathering data for error analysis and reporting. the endpoint is particularly useful for system administrators, developers, and support teams who need to access detailed error information quickly. however, it does not provide aggregated error statistics or perform any error resolution actions; it's purely for fetching individual error details.
     */
    RETRIEVE_ERROR_DETAILS_BY_ID: "BORNEO_RETRIEVE_ERROR_DETAILS_BY_ID",
    /**
     * Retrieves detailed information about a specific issue in the borneo system. this endpoint should be used when you need to fetch comprehensive data about a particular issue, such as its current status, associated tasks, or related workflow information. it's particularly useful for tracking the progress of data integration processes, workflow automation tasks, or privacy compliance issues. the endpoint returns a single issue's details and does not provide a list or summary of multiple issues. note that the exact structure of the returned data is not specified in the given schema, so users should be prepared to handle various fields related to issue management in borneo's context.
     */
    RETRIEVE_ISSUE_BY_ID: "BORNEO_RETRIEVE_ISSUE_BY_ID",
    /**
     * Retrieves a specific legal document from the borneo system using its unique identifier. this endpoint is designed to access individual legal documents related to borneo, such as the native courts ordinance, the malaysia agreement, or other important legal frameworks and governance documents. it should be used when detailed information about a particular legal document is required. the endpoint returns the full content and metadata of the requested document. it does not provide search functionality or return multiple documents; for those purposes, a separate endpoint would be necessary.
     */
    RETRIEVE_LEGAL_DOCUMENT_BY_ID: "BORNEO_RETRIEVE_LEGAL_DOCUMENT_BY_ID",
    /**
     * Retrieves detailed information about a specific lopdp (logical object data point) threshold configuration within the borneo integration platform. this endpoint is used to access the settings and parameters of a particular threshold, which are crucial for monitoring system performance and triggering alerts. it should be used when detailed information about a specific threshold's configuration is needed, such as during system audits, troubleshooting, or when adjusting monitoring parameters. the endpoint does not modify any settings; it only provides read access to the existing configuration. keep in mind that the response will likely include sensitive system configuration data, so access should be restricted to authorized personnel.
     */
    RETRIEVE_LOPDP_THRESHOLD_BY_ID: "BORNEO_RETRIEVE_LOPDP_THRESHOLD_BY_ID",
    /**
     * Retrieves detailed information about a specific processing activity within the borneo platform. this endpoint allows users to access comprehensive data related to a particular data processing task or workflow, including its current status, associated metadata, and any relevant compliance information. it is particularly useful for monitoring ongoing activities, auditing past processes, or gathering information for reporting purposes. the endpoint should be used when detailed insights into a single processing activity are required, but it won't provide an overview of multiple activities or system-wide statistics.
     */
    RETRIEVE_PROCESSING_ACTIVITY_BY_ID: "BORNEO_RETRIEVE_PROCESSING_ACTIVITY_BY_ID",
    /**
     * Retrieves detailed information about a specific recipient identified by their unique recipientid within the borneo integration platform. this endpoint is used to fetch comprehensive data about a recipient, which may include personal details, contact information, associated accounts, or any other relevant data stored in the borneo system. it's particularly useful when you need to access or display a recipient's full profile or verify their information. the endpoint should be used when detailed recipient information is required for operations such as data verification, profile updates, or displaying recipient details in a user interface. note that this endpoint only provides read access to recipient data and cannot be used to modify recipient information.
     */
    RETRIEVE_RECIPIENT_DETAILS: "BORNEO_RETRIEVE_RECIPIENT_DETAILS",
    /**
     * Retrieves a paginated list of processing activities associated with a specific recipient in the borneo integration platform. this endpoint allows you to fetch and navigate through large sets of processing activity data efficiently. it supports sorting and pagination to help manage the volume of data returned. use this endpoint when you need to review or analyze the processing activities for a particular recipient, such as for compliance audits or data governance purposes. the endpoint does not provide filtering capabilities beyond the recipient id, so all processing activities for the specified recipient will be included in the results.
     */
    RETRIEVE_RECIPIENT_PROCESSING_ACTIVITIES: "BORNEO_RETRIEVE_RECIPIENT_PROCESSING_ACTIVITIES",
    /**
     * Retrieves detailed information about a specific resource from the borneo catalog using its unique identifier. this endpoint is used to access comprehensive data about a particular resource, which could include metadata, associated files, or other relevant information. it should be used when detailed information about a known resource is required, such as for display purposes or further processing within an integration workflow. the endpoint will not modify the resource or return information about multiple resources. it's important to note that the response structure is not specified in the given schema, so users should refer to borneo's documentation for the exact format of the returned data.
     */
    RETRIEVE_RESOURCE_CATALOG_BY_ID: "BORNEO_RETRIEVE_RESOURCE_CATALOG_BY_ID",
    /**
     * Retrieves column information for resources in the borneo integration platform. this endpoint allows users to fetch metadata about the structure of resources, including column names, data types, and potentially other attributes. it's particularly useful when you need to understand the schema of available resources for integration purposes or data analysis. the endpoint returns a comprehensive list of columns across all accessible resources, enabling developers to plan data mappings, transformations, or queries effectively. note that while this endpoint provides structural information, it does not return the actual data contained within the columns.
     */
    RETRIEVE_RESOURCE_COLUMNS: "BORNEO_RETRIEVE_RESOURCE_COLUMNS",
    /**
     * Retrieves detailed information about a specific tom resource using its unique identifier. this endpoint is crucial for accessing individual tom data within the borneo integration platform. it should be used when you need to fetch comprehensive details about a particular tom, such as its configuration, status, or associated metadata. the endpoint is particularly useful for monitoring, updating, or troubleshooting specific tom instances in your integration workflows. note that this endpoint only provides information for a single tom and cannot be used to list or search multiple toms simultaneously.
     */
    RETRIEVE_TOM_BY_ID: "BORNEO_RETRIEVE_TOM_BY_ID",
    /**
     * Initiates a scanning process for a specified legal document within the borneo integration platform. this endpoint is used to digitize and process a legal document, making it available for further analysis, storage, or integration with other systems. the scan operation is asynchronous, meaning it will start the scanning process but may not immediately return the results. use this endpoint when you need to convert a physical or digital legal document into a format that can be easily managed and searched within the borneo ecosystem. it's particularly useful for automating the intake of new legal documents into the system. note that this endpoint only initiates the scan and does not provide immediate access to the scanned content; additional api calls may be required to retrieve the processed document or check the scan status.
     */
    SCAN_LEGAL_DOCUMENT_BY_ID: "BORNEO_SCAN_LEGAL_DOCUMENT_BY_ID",
    /**
     * Stops an ongoing scan operation in the borneo integration platform. this endpoint allows users to halt a specific scan process that is currently in progress. it should be used when there's a need to interrupt a scan before its natural completion, such as when the scan is taking too long, consuming excessive resources, or if the desired information has already been obtained. the endpoint requires the unique identifier of the scan to be stopped, ensuring precise control over individual scan operations. it's important to note that stopping a scan may result in incomplete data collection or analysis, so it should be used judiciously. this operation is irreversible; once stopped, a scan cannot be resumed and would need to be restarted if further scanning is required.
     */
    STOP_SCAN_VIA_SCAN_ID: "BORNEO_STOP_SCAN_VIA_SCAN_ID",
    /**
     * The submitchatfeedback endpoint allows users to provide feedback on a chat support interaction within the borneo integration platform. this endpoint is crucial for collecting user satisfaction data, which can be used to improve the quality of support and enhance the overall user experience. it should be called after a chat support session has concluded, enabling users to rate their interaction with the support team. the feedback submitted through this endpoint can help borneo identify areas for improvement in their support processes and recognize high-performing support agents. note that this endpoint focuses solely on collecting numerical ratings and does not appear to support additional comments or detailed feedback.
     */
    SUBMIT_CHAT_FEEDBACK: "BORNEO_SUBMIT_CHAT_FEEDBACK",
    /**
     * Retrieves detailed insights for a specific scan iteration of a particular resource in the borneo integration platform. this endpoint allows users to access in-depth information about scan results, which can be used for thorough analysis, troubleshooting, or reporting purposes. it's particularly useful when you need to examine the outcomes of a specific scan iteration in detail, either for the entire scan or for a specific page within the scan results. the endpoint requires both the resource and scan iteration identifiers to ensure precise retrieval of the relevant data. use this when you need comprehensive information about a scan's findings, especially in scenarios involving data quality assessment, integration verification, or system health checks.
     */
    SUBMIT_DETAILED_SCAN_RESULTS: "BORNEO_SUBMIT_DETAILED_SCAN_RESULTS",
    /**
     * Triggers the generation or retrieval of a specific dashboard report in the borneo integration platform. this endpoint is used to initiate the process of compiling and presenting data for a predefined dashboard report. it's particularly useful when you need to refresh or generate an up-to-date version of a report on demand. the endpoint should be called when a user or system requires the latest data to be reflected in a dashboard report. it's important to note that this endpoint only initiates the report generation process and may not immediately return the report data. depending on the complexity and size of the report, there might be a processing time before the actual report becomes available.
     */
    TRIGGER_DASHBOARD_REPORT_BY_REPORT_ID: "BORNEO_TRIGGER_DASHBOARD_REPORT_BY_REPORT_ID",
    /**
     * The updateasset endpoint allows you to modify the details of an existing asset in the borneo integration platform. this put operation at `/assets/{assetid}` updates the specified asset's information, including its name, type, associated ids, and location details. it's crucial for maintaining accurate and up-to-date asset records within the system. use this endpoint when you need to change any attribute of an asset, such as its name, type, or location. the endpoint requires at least the asset's name and type, with options to update additional properties like associated tom ids and location information. note that this operation will overwrite the existing asset data, so include all required fields even if only updating a subset of properties.
     */
    UPDATE_ASSET_INFORMATION_BY_ID: "BORNEO_UPDATE_ASSET_INFORMATION_BY_ID",
    /**
     * Updates the infotypes associated with a specific category in the borneo integration platform. this endpoint allows you to modify the list of infotypes belonging to a category and optionally update the category's description. it's used for maintaining and organizing the classification of data types within the system, which is crucial for efficient data exchange and workflow automation. the endpoint replaces the entire list of infotypes for the specified category, so it should be used carefully to ensure no unintended removal of existing infotypes. this operation is particularly useful when restructuring data classifications or when new types of information need to be incorporated into existing categories.
     */
    UPDATE_CATEGORY_INFOTYPES: "BORNEO_UPDATE_CATEGORY_INFOTYPES",
    /**
     * Updates the settings of an existing dashboard report in the borneo integration platform. this endpoint allows you to modify the recipients, roles, and frequency of a specific dashboard report. use this when you need to change who receives the report, adjust access permissions, or alter the schedule for report generation. the function is particularly useful for maintaining up-to-date distribution lists and ensuring that reports are generated and sent at the most appropriate intervals for your organization's needs. note that this endpoint only updates the report settings and does not generate or send the report itself.
     */
    UPDATE_DASHBOARD_REPORT_FREQUENCY_AND_RECIPIENTS: "BORNEO_UPDATE_DASHBOARD_REPORT_FREQUENCY_AND_RECIPIENTS",
    /**
     * Updates the information of an existing dashboard user in the borneo integration platform. this endpoint allows you to modify the name associated with a user's account while maintaining their unique username. it should be used when there's a need to update a user's display name or correct any errors in the existing name. the endpoint requires both the username (for identification) and the new name to be provided. it's important to note that this operation only updates the user's name and does not affect any other user data or permissions.
     */
    UPDATE_DASHBOARD_USER_DETAILS: "BORNEO_UPDATE_DASHBOARD_USER_DETAILS",
    /**
     * Updates the roles and department associations for a specified user across multiple organizations in the borneo dashboard. this endpoint allows administrators to modify a user's access levels and departmental affiliations within the borneo system. it's particularly useful for managing user permissions when responsibilities change or when adjusting access across different organizations and departments. the endpoint requires specifying the username and at least one organization with assigned roles. department associations are optional but must be provided as valid uuids when included. this tool should be used when there's a need to modify existing user role configurations, not for creating new users or removing users from the system entirely.
     */
    UPDATE_DASHBOARD_USER_ROLES: "BORNEO_UPDATE_DASHBOARD_USER_ROLES",
    /**
     * The updatedatabreach endpoint allows users to create or update detailed information about a specific data breach incident in the borneo integration platform. this endpoint is crucial for maintaining accurate and comprehensive records of data breach incidents, which is essential for compliance, risk management, and improving security measures. the endpoint captures a wide range of information about the data breach, including its occurrence, discovery, affected parties, potential consequences, and measures taken in response. it provides flexibility by allowing users to save the information as a draft or finalize the report. this endpoint should be used when there's a need to document a new data breach or update existing information about a breach. it's particularly useful for security teams, compliance officers, and risk management professionals who need to maintain detailed records of security incidents.
     */
    UPDATE_DATA_BREACH_ENTRY: "BORNEO_UPDATE_DATA_BREACH_ENTRY",
    /**
     * This endpoint updates the information of an existing department within the borneo integration platform. it allows you to modify the name of a specific department identified by its unique departmentid. use this endpoint when you need to rename a department or correct its name in the system. the endpoint is particularly useful for maintaining accurate organizational structure data, which is crucial for workflow automation and integration processes. note that this operation only updates the department's name and does not affect any other attributes or associations of the department. ensure that the new name adheres to your organization's naming conventions and accurately represents the department's function.
     */
    UPDATE_DEPARTMENT_NAME: "BORNEO_UPDATE_DEPARTMENT_NAME",
    /**
     * This endpoint updates the status of a specific discovered document in the borneo integration platform. it is used as part of the workflow automation process to manage the lifecycle of documents within the system. the endpoint accepts a document id and a new status, allowing users to change how the document is treated in subsequent processes. this tool should be used when there's a need to modify the processing state of a discovered document, such as marking it for deletion or indicating that it has been successfully added to the system. it's important to note that this endpoint only updates the status and doesn't perform any other operations on the document itself.
     */
    UPDATE_DISCOVERED_DOCUMENT_STATUS: "BORNEO_UPDATE_DISCOVERED_DOCUMENT_STATUS",
    /**
     * Updates the status of a specific discovered infotype in the borneo integration platform. this endpoint allows users to change the state of an infotype that has been identified during data discovery processes. it is used to manage the lifecycle of discovered infotypes, enabling actions such as approval, ignoring, or deletion. the endpoint should be called when there's a need to change the current status of a discovered infotype, typically as part of data governance or classification workflows. it's important to note that this endpoint only updates the status and doesn't provide additional information about the infotype itself.
     */
    UPDATE_DISCOVERED_INFOTYPE_STATUS: "BORNEO_UPDATE_DISCOVERED_INFOTYPE_STATUS",
    /**
     * Updates the properties of an existing domain within the borneo integration platform. this endpoint allows you to modify the name and polling frequency of a specific domain identified by its unique domainid. use this when you need to rename a domain or adjust its automated polling schedule. it's particularly useful for fine-tuning the integration processes or adapting to changing business requirements. the endpoint doesn't provide information about other domain properties or the success of the update operation, so additional verification may be necessary after making changes.
     */
    UPDATE_DOMAIN_DETAILS: "BORNEO_UPDATE_DOMAIN_DETAILS",
    /**
     * Updates an existing data protection impact assessment (dpia) in the borneo system. this endpoint allows for comprehensive modification of a dpia's privacy framework, risk assessments (confidentiality, integrity, and availability), and associated metadata. it's used to refine and complete a dpia throughout its lifecycle, from draft to activation. the tool supports detailed documentation of privacy principles, risk analyses, and mitigation measures. it's particularly useful for privacy professionals and data protection officers managing complex data processing activities. note that activating a dpia requires filling in numerous mandatory fields, ensuring a thorough privacy impact assessment.
     */
    UPDATE_DPIA_BY_ID: "BORNEO_UPDATE_DPIA_BY_ID",
    /**
     * Updates the information of an existing employee in the borneo integration platform. this endpoint allows you to modify various details of an employee's record, including personal information, job-related data, and organizational relationships. it's primarily used for maintaining up-to-date employee records, reflecting changes in positions, departments, or personal details. the endpoint requires the employee's unique identifier and accepts a json object containing the updated information. while it offers flexibility in updating multiple fields, it's important to note that the email address must remain unique within the company. this tool should be used whenever there are changes to an employee's information that need to be reflected in the system, but should not be used for creating new employee records or for bulk updates.
     */
    UPDATE_EMPLOYEE_BY_ID: "BORNEO_UPDATE_EMPLOYEE_BY_ID",
    /**
     * Updates the information for an existing headquarter in the borneo integration platform. this endpoint allows you to modify various details of a headquarter, such as its name, address, and associated tom ids. it should be used when there are changes to a headquarter's information or when correcting existing data. the endpoint requires the headquarter's unique identifier and accepts a json payload with the updated information. it enforces strict validation rules to ensure data integrity and consistency across the platform. note that while some fields are optional, others (name, city, address, and country) are mandatory and must be provided with each update request.
     */
    UPDATE_HEADQUARTER_DETAILS_BY_ID: "BORNEO_UPDATE_HEADQUARTER_DETAILS_BY_ID",
    /**
     * Updates the lopdp (likely operational privacy data protection) threshold settings for a specific threshold identified by the lopdpthresholdid. this endpoint allows you to modify various data protection and privacy compliance parameters related to data processing activities. use this endpoint when you need to adjust risk assessments, update processing characteristics, or change the status of a threshold. the endpoint is crucial for maintaining up-to-date privacy impact assessments and ensuring compliance with data protection regulations. note that this endpoint only updates the threshold settings and does not perform any actual data processing or risk mitigation actions.
     */
    UPDATE_LOPDP_THRESHOLD_BY_ID: "BORNEO_UPDATE_LOPDP_THRESHOLD_BY_ID",
    /**
     * This endpoint updates an existing processing activity in a data privacy management system. it modifies details about personal data processing, crucial for compliance with regulations like gdpr. use it to update activity status, purpose, legal basis, data subjects, and more. only 'active' and 'name' fields are required, but providing comprehensive information is recommended for accurate records.
     */
    UPDATE_PROCESSING_ACTIVITY_DETAILS: "BORNEO_UPDATE_PROCESSING_ACTIVITY_DETAILS",
    /**
     * Updates the information of an existing recipient in the borneo integration platform. this endpoint allows you to modify various details of a recipient, including their name, business information, status, categories, roles, and data protection-related information. it's used when you need to change or update any aspect of a recipient's profile, such as updating their dpa status, changing their role, or modifying their data storage locations. this endpoint is particularly useful for maintaining up-to-date records of your business partners and ensuring compliance with data protection regulations. note that some fields are required and must be included in every update request, while others are optional and can be omitted if no changes are needed.
     */
    UPDATE_RECIPIENT_DETAILS_BY_ID: "BORNEO_UPDATE_RECIPIENT_DETAILS_BY_ID",
    /**
     * Updates the status and automation status of a specific recipient in the borneo integration platform. this endpoint allows users to modify a recipient's overall status (archived or validated) and their automation status (ignored, created, or new). it's particularly useful for managing recipient data lifecycle and controlling how recipients are handled in automated workflows. the endpoint should be used when there's a need to change a recipient's status due to changes in their relevance or to adjust their interaction with automated processes. it's important to note that this endpoint only updates status information and does not modify other recipient details.
     */
    UPDATE_RECIPIENT_STATUS_VIA_ID: "BORNEO_UPDATE_RECIPIENT_STATUS_VIA_ID",
    /**
     * Updates an existing threshold in the borneo integration platform with new settings and information related to data processing and compliance. this endpoint allows you to modify various aspects of a threshold, including its status, comments, and multiple boolean flags that define the characteristics of the data processing activities. use this endpoint when you need to adjust the parameters of a threshold to reflect changes in data handling practices, compliance requirements, or to activate a draft threshold. the endpoint is particularly useful for maintaining up-to-date records of data processing activities and ensuring compliance with data protection regulations. note that updating a threshold does not automatically apply the changes to ongoing data processing; it may require additional steps to implement the updated settings in your data workflows.
     */
    UPDATE_THRESHOLD_BY_ID: "BORNEO_UPDATE_THRESHOLD_BY_ID",
    /**
     * Completes the email verification process for a user account in the borneo integration platform. this endpoint is called when a user clicks on the verification link sent to their email address. it validates the provided verificationid and token to confirm the user's email address. this is a crucial step in the user authentication workflow, ensuring that users have provided valid email addresses and helping to prevent unauthorized access. the endpoint should only be used once per verification attempt, as tokens are typically single-use and time-limited for security reasons. note that this endpoint doesn't handle the initial request for email verification or resending verification emails; it's specifically for completing the verification process.
     */
    VERIFY_EMAIL_WITH_ID_AND_TOKEN: "BORNEO_VERIFY_EMAIL_WITH_ID_AND_TOKEN",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "BORNEO".
 */
export type BORNEO_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "BORNEO".
 */
export type BORNEO_TRIGGER_EVENTS = {}
