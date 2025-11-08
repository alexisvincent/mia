// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of WORKDAY's WORKDAY_CREATE_TIME_OFF_REQUEST tool input.
 */
type WORKDAY_CREATE_TIME_OFF_REQUEST_INPUT = {
  /**
   * Id
   * @description The Workday ID of the worker resource.
   */
  ID?: string;
  /**
   * Business Process Parameters
   * @description Business process parameters for the time off request.
   */
  businessProcessParameters?: {
      /**
       * Action
       * @description Action with id - must specify submit action WID: d9e4223e446c11de98360015c5e6daf6
       */
      action: {
          [key: string]: unknown;
      };
      /**
       * Comment
       * @description Business process comment.
       * @default null
       */
      comment: string | null;
  };
  /**
   * Days
   * @description List of time off entries for the request.
   */
  days?: {
      /**
       * Comment
       * @description Comment on the time off entry.
       * @default null
       */
      comment: string | null;
      /**
       * Daily Quantity
       * @description Time Off Entry hours or days quantity.
       * @default null
       */
      dailyQuantity: number | null;
      /**
       * Date
       * @description Time Off Entry date using yyyy-mm-dd format.
       */
      date: string;
      /**
       * End
       * @description End time of the time off entry (if required by type).
       * @default null
       */
      end: string | null;
      /**
       * Position
       * @description Position for the time off entry with id and descriptor.
       * @default null
       */
      position: {
          [key: string]: unknown;
      } | null;
      /**
       * Reason
       * @description Reason for the time off entry with id and descriptor.
       * @default null
       */
      reason: {
          [key: string]: unknown;
      } | null;
      /**
       * Start
       * @description Start time of the time off entry (if required by type).
       * @default null
       */
      start: string | null;
      /**
       * Time Off Type
       * @description The time off type with id and descriptor.
       */
      timeOffType: {
          [key: string]: unknown;
      };
  }[];
  /** Time Off Request Event View */
  timeOffRequestEventView?: string;
};

/**
 * Type of WORKDAY's WORKDAY_CREATE_TIME_OFF_REQUEST tool output.
 */
type WORKDAY_CREATE_TIME_OFF_REQUEST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Business Process Parameters
       * @description Business process parameters from response.
       * @default null
       */
      businessProcessParameters: {
          [key: string]: unknown;
      } | null;
      /**
       * Days
       * @description Time off entries from response.
       * @default null
       */
      days: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Id
       * @description ID of the created time off request.
       * @default null
       */
      id: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of WORKDAY's WORKDAY_GET_ABSENCE_BALANCE tool input.
 */
type WORKDAY_GET_ABSENCE_BALANCE_INPUT = {
  /**
   * Id
   * @description The Workday ID of the balance resource.
   */
  ID?: string;
};

/**
 * Type of WORKDAY's WORKDAY_GET_ABSENCE_BALANCE tool output.
 */
type WORKDAY_GET_ABSENCE_BALANCE_OUTPUT = {
  /**
   * Data
   * @description Absence balance object from Workday API
   */
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
 * Type of WORKDAY's WORKDAY_GET_BALANCE_DETAILS tool input.
 */
type WORKDAY_GET_BALANCE_DETAILS_INPUT = {
  /**
   * Id
   * @description The Workday ID of the balance resource.
   */
  ID?: string;
};

/**
 * Type of WORKDAY's WORKDAY_GET_BALANCE_DETAILS tool output.
 */
type WORKDAY_GET_BALANCE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Absence Plan
       * @description The time off, absence table or leave type for which the balance is returned.
       * @default null
       */
      absencePlan: {
          [key: string]: unknown;
      } | null;
      /**
       * Category
       * @description The category indicating whether the Absence Container is a time off plan, absence table or leave of absence type.
       * @default null
       */
      category: {
          [key: string]: unknown;
      } | null;
      /**
       * Date Of First Absence
       * @description The first day of leave for the corresponding leave type for which the balance is returned.
       * @default null
       */
      dateOfFirstAbsence: string | null;
      /**
       * Effective Date
       * @description The date for which the balance is returned.
       * @default null
       */
      effectiveDate: string | null;
      /**
       * Id
       * @description ID of the balance instance.
       * @default null
       */
      id: string | null;
      /**
       * Position
       * @description The worker's position on the time off or leave of absence.
       * @default null
       */
      position: {
          [key: string]: unknown;
      } | null;
      /**
       * Quantity
       * @description The balance for the time off, absence table or leave type.
       * @default null
       */
      quantity: number | null;
      /**
       * Unit
       * @description The unit of time for the time off or leave type.
       * @default null
       */
      unit: {
          [key: string]: unknown;
      } | null;
      /**
       * Worker
       * @description The worker on the time off or leave of absence.
       * @default null
       */
      worker: {
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
 * Type of WORKDAY's WORKDAY_GET_CURRENT_USER tool input.
 */
type WORKDAY_GET_CURRENT_USER_INPUT = object;

/**
 * Type of WORKDAY's WORKDAY_GET_CURRENT_USER tool output.
 */
type WORKDAY_GET_CURRENT_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Email
       * @description Primary email address of the current worker
       * @default null
       */
      email: string | null;
      /**
       * Worker Data
       * @description Complete worker profile data for the authenticated user
       */
      worker_data: {
          [key: string]: unknown;
      };
      /**
       * Worker Id
       * @description The Workday ID of the current worker
       */
      worker_id: string;
      /**
       * Worker Name
       * @description Full name of the current worker
       */
      worker_name: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of WORKDAY's WORKDAY_GET_HOLIDAY_EVENTS tool input.
 */
type WORKDAY_GET_HOLIDAY_EVENTS_INPUT = {
  /**
   * From Date
   * @description The start of a date range filter using the yyyy-mm-dd format.
   * @default null
   */
  fromDate: string | null;
  /**
   * Limit
   * @description The maximum number of objects in a single response. The default is 20. The maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection.
   * @default null
   */
  offset: number | null;
  /**
   * To Date
   * @description The end of a date range filter using the yyyy-mm-dd format.
   * @default null
   */
  toDate: string | null;
  /**
   * Worker
   * @description Array of worker IDs to filter holiday events for specific workers.
   * @default null
   */
  worker: string[] | null;
};

/**
 * Type of WORKDAY's WORKDAY_GET_HOLIDAY_EVENTS tool output.
 */
type WORKDAY_GET_HOLIDAY_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Array of holiday event objects from Workday API
   */
  data?: {
      [key: string]: unknown;
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
  /**
   * Total
   * @description Total number of holiday events available
   * @default null
   */
  total: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_GET_INTERVIEW_FEEDBACK tool input.
 */
type WORKDAY_GET_INTERVIEW_FEEDBACK_INPUT = {
  /**
   * Id
   * @description The Workday ID of the interview resource.
   */
  ID?: string;
  /**
   * Limit
   * @description The maximum number of objects in a single response. The default is 20. The maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_GET_INTERVIEW_FEEDBACK tool output.
 */
type WORKDAY_GET_INTERVIEW_FEEDBACK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comments
       * @description List of all comments from feedback entries
       */
      comments?: string[];
      /**
       * Feedback Entries
       * @description List of feedback entries from the interview
       */
      feedback_entries: {
          [key: string]: unknown;
      }[];
      /**
       * Interview Id
       * @description The interview ID this feedback belongs to
       */
      interview_id: string;
      /**
       * Overall Ratings
       * @description List of overall ratings from feedback entries
       */
      overall_ratings?: {
          [key: string]: unknown;
      }[];
      /**
       * Total Feedback
       * @description Total number of feedback entries
       */
      total_feedback: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of WORKDAY's WORKDAY_GET_JOB_POSTING tool input.
 */
type WORKDAY_GET_JOB_POSTING_INPUT = {
  /**
   * Id
   * @description The Workday ID of the job posting resource.
   */
  ID?: string;
};

/**
 * Type of WORKDAY's WORKDAY_GET_JOB_POSTING tool output.
 */
type WORKDAY_GET_JOB_POSTING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Department
       * @description The department associated with the job posting.
       * @default null
       */
      department: {
          [key: string]: unknown;
      } | null;
      /**
       * Descriptor
       * @description A preview of the job posting.
       * @default null
       */
      descriptor: string | null;
      /**
       * Employment Type
       * @description The type of employment (Full-time, Part-time, etc.).
       * @default null
       */
      employmentType: {
          [key: string]: unknown;
      } | null;
      /**
       * Experience Level
       * @description The required experience level for the position.
       * @default null
       */
      experienceLevel: {
          [key: string]: unknown;
      } | null;
      /**
       * Hiring Manager
       * @description The hiring manager for the job posting.
       * @default null
       */
      hiringManager: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description ID of the job posting instance.
       * @default null
       */
      id: string | null;
      /**
       * Job Description
       * @description The detailed job description content.
       * @default null
       */
      jobDescription: string | null;
      /**
       * Job Requisition
       * @description The job requisition associated with this posting.
       * @default null
       */
      jobRequisition: {
          [key: string]: unknown;
      } | null;
      /**
       * Job Title
       * @description The title of the job posting.
       * @default null
       */
      jobTitle: string | null;
      /**
       * Location
       * @description The location for the job posting.
       * @default null
       */
      location: {
          [key: string]: unknown;
      } | null;
      /**
       * Position
       * @description The position details for the job posting.
       * @default null
       */
      position: {
          [key: string]: unknown;
      } | null;
      /**
       * Posting End Date
       * @description The end date for the job posting.
       * @default null
       */
      postingEndDate: string | null;
      /**
       * Posting Start Date
       * @description The start date for the job posting.
       * @default null
       */
      postingStartDate: string | null;
      /**
       * Posting Status
       * @description The current status of the job posting.
       * @default null
       */
      postingStatus: {
          [key: string]: unknown;
      } | null;
      /**
       * Posting Title
       * @description The posting title for the job.
       * @default null
       */
      postingTitle: string | null;
      /**
       * Recruiters
       * @description List of recruiters assigned to the job posting.
       * @default null
       */
      recruiters: {
          [key: string]: unknown;
      }[] | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of WORKDAY's WORKDAY_GET_JOB_POSTING_QUESTIONNAIRE tool input.
 */
type WORKDAY_GET_JOB_POSTING_QUESTIONNAIRE_INPUT = {
  /**
   * Id
   * @description The Workday ID of the job posting resource.
   */
  ID?: string;
  /**
   * Limit
   * @description The maximum number of objects in a single response. The default is 20. The maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.
   * @default null
   */
  offset: number | null;
  /**
   * Questionnaire Type
   * @description questionnaireType
   * @default null
   */
  questionnaireType: string[] | null;
};

/**
 * Type of WORKDAY's WORKDAY_GET_JOB_POSTING_QUESTIONNAIRE tool output.
 */
type WORKDAY_GET_JOB_POSTING_QUESTIONNAIRE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Questionnaires
       * @description List of questionnaires associated with the job posting
       */
      questionnaires: {
          [key: string]: unknown;
      }[];
      /**
       * Questions
       * @description Flattened list of all questions from all questionnaires
       */
      questions?: {
          [key: string]: unknown;
      }[];
      /**
       * Total Questionnaires
       * @description Total number of questionnaires found
       */
      total_questionnaires: number;
      /**
       * Total Questions
       * @description Total number of questions across all questionnaires
       */
      total_questions: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of WORKDAY's WORKDAY_GET_LEAVE_STATUS_VALUES tool input.
 */
type WORKDAY_GET_LEAVE_STATUS_VALUES_INPUT = object;

/**
 * Type of WORKDAY's WORKDAY_GET_LEAVE_STATUS_VALUES tool output.
 */
type WORKDAY_GET_LEAVE_STATUS_VALUES_OUTPUT = {
  /**
   * Data
   * @description Array of leave status value objects from Workday API
   */
  data?: {
      [key: string]: unknown;
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
 * Type of WORKDAY's WORKDAY_GET_MY_JOB_POSTINGS tool input.
 */
type WORKDAY_GET_MY_JOB_POSTINGS_INPUT = {
  /**
   * Include Closed
   * @description Include closed job postings in results
   * @default false
   */
  include_closed: boolean | null;
  /**
   * Limit
   * @description Maximum number of postings to return per requisition
   * @default 100
   */
  limit: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_GET_MY_JOB_POSTINGS tool output.
 */
type WORKDAY_GET_MY_JOB_POSTINGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assigned Job Postings
       * @description List of job postings assigned to the recruiter
       */
      assigned_job_postings: {
          [key: string]: unknown;
      }[];
      /**
       * Assigned Requisitions
       * @description List of job requisition IDs found for the recruiter
       */
      assigned_requisitions: string[];
      /**
       * Open Postings
       * @description Number of currently open job postings
       */
      open_postings: number;
      /**
       * Total Postings
       * @description Total number of job postings found
       */
      total_postings: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of WORKDAY's WORKDAY_GET_PROSPECT tool input.
 */
type WORKDAY_GET_PROSPECT_INPUT = {
  /**
   * Id
   * @description The Workday ID of the prospect resource.
   */
  ID?: string;
};

/**
 * Type of WORKDAY's WORKDAY_GET_PROSPECT tool output.
 */
type WORKDAY_GET_PROSPECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Prospect Data
       * @description The prospect data including personal information, contact details, and basic profile
       */
      prospect_data: {
          [key: string]: unknown;
      };
      /**
       * Prospect Id
       * @description The Workday ID of the prospect
       */
      prospect_id: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of WORKDAY's WORKDAY_GET_PROSPECT_EDUCATIONS tool input.
 */
type WORKDAY_GET_PROSPECT_EDUCATIONS_INPUT = {
  /**
   * Id
   * @description The Workday ID of the prospect resource.
   */
  ID?: string;
  /**
   * Limit
   * @description The maximum number of objects in a single response. The default is 20. The maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_GET_PROSPECT_EDUCATIONS tool output.
 */
type WORKDAY_GET_PROSPECT_EDUCATIONS_OUTPUT = {
  /**
   * Data
   * @description Array of education objects for the prospect
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Prospect Id
   * @description The prospect ID these educations belong to
   */
  prospect_id?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of educations available for the prospect
   * @default null
   */
  total: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_GET_PROSPECT_EXPERIENCES tool input.
 */
type WORKDAY_GET_PROSPECT_EXPERIENCES_INPUT = {
  /**
   * Id
   * @description The Workday ID of the prospect resource.
   */
  ID?: string;
  /**
   * Limit
   * @description The maximum number of objects in a single response. The default is 20. The maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_GET_PROSPECT_EXPERIENCES tool output.
 */
type WORKDAY_GET_PROSPECT_EXPERIENCES_OUTPUT = {
  /**
   * Data
   * @description Array of work experience objects for the prospect
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Prospect Id
   * @description The prospect ID these experiences belong to
   */
  prospect_id?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of work experiences available for the prospect
   * @default null
   */
  total: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_GET_PROSPECT_RESUME_ATTACHMENTS tool input.
 */
type WORKDAY_GET_PROSPECT_RESUME_ATTACHMENTS_INPUT = {
  /**
   * Id
   * @description The Workday ID of the prospect resource.
   */
  ID?: string;
  /**
   * Limit
   * @description The maximum number of objects in a single response. The default is 20. The maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_GET_PROSPECT_RESUME_ATTACHMENTS tool output.
 */
type WORKDAY_GET_PROSPECT_RESUME_ATTACHMENTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Attachment Count
       * @description Total number of resume attachments found
       */
      attachment_count: number;
      /**
       * Prospect Id
       * @description The prospect ID these attachments belong to
       */
      prospect_id: string;
      /**
       * Resume Attachments
       * @description List of resume attachment objects for the prospect
       */
      resume_attachments: {
          [key: string]: unknown;
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
 * Type of WORKDAY's WORKDAY_GET_PROSPECT_SKILLS tool input.
 */
type WORKDAY_GET_PROSPECT_SKILLS_INPUT = {
  /**
   * Id
   * @description The Workday ID of the prospect resource.
   */
  ID?: string;
  /**
   * Limit
   * @description The maximum number of objects in a single response. The default is 20. The maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_GET_PROSPECT_SKILLS tool output.
 */
type WORKDAY_GET_PROSPECT_SKILLS_OUTPUT = {
  /**
   * Data
   * @description Array of skill objects for the prospect
   */
  data?: {
      [key: string]: unknown;
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Prospect Id
   * @description The prospect ID these skills belong to
   */
  prospect_id?: string;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
  /**
   * Total
   * @description Total number of skills available for the prospect
   * @default null
   */
  total: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_GET_TIME_OFF_STATUS_VALUES tool input.
 */
type WORKDAY_GET_TIME_OFF_STATUS_VALUES_INPUT = object;

/**
 * Type of WORKDAY's WORKDAY_GET_TIME_OFF_STATUS_VALUES tool output.
 */
type WORKDAY_GET_TIME_OFF_STATUS_VALUES_OUTPUT = {
  /**
   * Data
   * @description Array of time off status value objects from Workday API
   */
  data?: {
      [key: string]: unknown;
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
 * Type of WORKDAY's WORKDAY_GET_WORKER_ELIGIBLE_ABSENCE_TYPES tool input.
 */
type WORKDAY_GET_WORKER_ELIGIBLE_ABSENCE_TYPES_INPUT = {
  /**
   * Id
   * @description The Workday ID of the worker resource.
   */
  ID?: string;
  /**
   * Category
   * @description The Workday ID of the absence type category. Valid values: Leave of Absence Type (17bd6531c90c100016d74f8dfae007d0), Absence Table (17bd6531c90c100016da3f5b554007d2), Time Off (17bd6531c90c100016d4b06f2b8a07ce).
   * @default null
   */
  category: string | null;
  /**
   * Effective
   * @description The effective date for which eligible absence types need to be returned for the worker.
   * @default null
   */
  effective: string | null;
  /**
   * Limit
   * @description The maximum number of objects in a single response. The default is 20. The maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_GET_WORKER_ELIGIBLE_ABSENCE_TYPES tool output.
 */
type WORKDAY_GET_WORKER_ELIGIBLE_ABSENCE_TYPES_OUTPUT = {
  /**
   * Data
   * @description Array of eligible absence type objects from Workday API
   */
  data?: {
      [key: string]: unknown;
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
  /**
   * Total
   * @description Total number of eligible absence types available
   * @default null
   */
  total: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_GET_WORKER_LEAVES_OF_ABSENCE tool input.
 */
type WORKDAY_GET_WORKER_LEAVES_OF_ABSENCE_INPUT = {
  /**
   * Id
   * @description The Workday ID of the worker resource.
   */
  ID?: string;
  /**
   * From Date
   * @description The start of a date range filter using the yyyy-mm-dd format.
   * @default null
   */
  fromDate: string | null;
  /**
   * Leave Type
   * @description The Workday ID of the type of Leave Of Absence. You can specify multiple leaveType query parameters.
   * @default null
   */
  leaveType: string[] | null;
  /**
   * Limit
   * @description The maximum number of objects in a single response. The default is 20. The maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection.
   * @default null
   */
  offset: number | null;
  /**
   * Status
   * @description The Workday ID of the status of the Leave Of Absence. The valid statuses are Successfully Completed, In Progress, Canceled, Rescinded, and Process Terminated. You can specify multiple status query parameters.
   * @default null
   */
  status: string[] | null;
  /**
   * To Date
   * @description The end of a date range filter using the yyyy-mm-dd format.
   * @default null
   */
  toDate: string | null;
};

/**
 * Type of WORKDAY's WORKDAY_GET_WORKER_LEAVES_OF_ABSENCE tool output.
 */
type WORKDAY_GET_WORKER_LEAVES_OF_ABSENCE_OUTPUT = {
  /**
   * Data
   * @description Array of leaves of absence objects from Workday API
   */
  data?: {
      [key: string]: unknown;
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
  /**
   * Total
   * @description Total number of leaves of absence available
   * @default null
   */
  total: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_GET_WORKER_TIME_OFF_DETAILS tool input.
 */
type WORKDAY_GET_WORKER_TIME_OFF_DETAILS_INPUT = {
  /**
   * Id
   * @description The Workday ID of the worker resource.
   */
  ID?: string;
  /**
   * From Date
   * @description The start of a date range filter using the yyyy-mm-dd format.
   * @default null
   */
  fromDate: string | null;
  /**
   * Limit
   * @description The maximum number of objects in a single response. The default is 20. The maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection.
   * @default null
   */
  offset: number | null;
  /**
   * Status
   * @description The Workday ID of the time off status. You can specify multiple status query parameters. The valid statuses are Approved, Submitted, Not Submitted, and Sent Back.
   * @default null
   */
  status: string[] | null;
  /**
   * Time Off Type
   * @description The Workday ID of the Time Off Type. You can specify multiple timeOffType query parameters.
   * @default null
   */
  timeOffType: string[] | null;
  /**
   * To Date
   * @description The end of a date range filter using the yyyy-mm-dd format.
   * @default null
   */
  toDate: string | null;
};

/**
 * Type of WORKDAY's WORKDAY_GET_WORKER_TIME_OFF_DETAILS tool output.
 */
type WORKDAY_GET_WORKER_TIME_OFF_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Array of time off details objects from Workday API
   */
  data?: {
      [key: string]: unknown;
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
  /**
   * Total
   * @description Total number of time off details available
   * @default null
   */
  total: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_GET_WORKER_VALID_TIME_OFF_DATES tool input.
 */
type WORKDAY_GET_WORKER_VALID_TIME_OFF_DATES_INPUT = {
  /**
   * Id
   * @description The Workday ID of the worker resource.
   */
  ID?: string;
  /**
   * Date
   * @description The dates being requested for which to validate using the yyyy-mm-dd format.
   * @default null
   */
  date: string | null;
  /**
   * Limit
   * @description The maximum number of objects in a single response. The default is 20. The maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection.
   * @default null
   */
  offset: number | null;
  /**
   * Position
   * @description The Workday ID of the Position.
   * @default null
   */
  position: string | null;
  /**
   * Time Off
   * @description The Workday ID of the Time Off.
   * @default null
   */
  timeOff: string | null;
};

/**
 * Type of WORKDAY's WORKDAY_GET_WORKER_VALID_TIME_OFF_DATES tool output.
 */
type WORKDAY_GET_WORKER_VALID_TIME_OFF_DATES_OUTPUT = {
  /**
   * Data
   * @description Array of valid time off date objects from Workday API
   */
  data?: {
      [key: string]: unknown;
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
  /**
   * Total
   * @description Total number of valid time off dates available
   * @default null
   */
  total: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_LIST_ABSENCE_BALANCES tool input.
 */
type WORKDAY_LIST_ABSENCE_BALANCES_INPUT = {
  /**
   * Category
   * @description The Workday ID of the Time Off, Leave Type, or Absence Table.
   * @default null
   */
  category: string | null;
  /**
   * Effective
   * @description Absence balances as of the specified date using the yyyy-mm-dd format.
   * @default null
   */
  effective: string | null;
  /**
   * Limit
   * @description The maximum number of objects in a single response. The default is 20. The maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection.
   * @default null
   */
  offset: number | null;
  /**
   * Worker
   * @description The Workday ID of the worker for which balances are returned.
   * @default null
   */
  worker: string | null;
};

/**
 * Type of WORKDAY's WORKDAY_LIST_ABSENCE_BALANCES tool output.
 */
type WORKDAY_LIST_ABSENCE_BALANCES_OUTPUT = {
  /**
   * Data
   * @description Array of absence balance objects from Workday API
   */
  data?: {
      [key: string]: unknown;
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
  /**
   * Total
   * @description Total number of absence balances available
   * @default null
   */
  total: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_LIST_BALANCES tool input.
 */
type WORKDAY_LIST_BALANCES_INPUT = {
  /**
   * Category
   * @description The Workday ID of the Time Off, Leave Type, or Absence Table. Valid values: Leave of Absence Type (17bd6531c90c100016d74f8dfae007d0), Absence Table (17bd6531c90c100016da3f5b554007d2), Time Off (7bd6531c90c100016d4b06f2b8a07ce).
   * @default null
   */
  category: string | null;
  /**
   * Effective
   * @description Absence balances as of the specified date using the yyyy-mm-dd format.
   * @default null
   */
  effective: string | null;
  /**
   * Limit
   * @description The maximum number of objects in a single response. The default is 20. The maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection.
   * @default null
   */
  offset: number | null;
  /**
   * Worker
   * @description The Workday ID of the worker for which balances are returned.
   * @default null
   */
  worker: string | null;
};

/**
 * Type of WORKDAY's WORKDAY_LIST_BALANCES tool output.
 */
type WORKDAY_LIST_BALANCES_OUTPUT = {
  /**
   * Data
   * @description Array of absence balance objects from Workday API
   */
  data?: {
      [key: string]: unknown;
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
  /**
   * Total
   * @description Total number of absence balances available
   * @default null
   */
  total: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_LIST_INTERVIEWS tool input.
 */
type WORKDAY_LIST_INTERVIEWS_INPUT = {
  /**
   * Interview Status
   * @description All applicable interview statuses for an Interview event. Can be: AWAITING_ME, COMPLETED, FEEDBACK_COMPLETE, NOT_SCHEDULED, PENDING_FEEDBACK, SCHEDULED, SUBMITTED_FEEDBACK, MAKE_INTERVIEW_DECISION.
   * @default null
   */
  interviewStatus: string[] | null;
  /**
   * Limit
   * @description The maximum number of objects in a single response. The default is 20. The maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_LIST_INTERVIEWS tool output.
 */
type WORKDAY_LIST_INTERVIEWS_OUTPUT = {
  /**
   * Data
   * @description Array of interview objects from Workday Recruiting API
   */
  data?: {
      [key: string]: unknown;
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
  /**
   * Total
   * @description Total number of interviews available
   * @default null
   */
  total: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_LIST_JOB_POSTINGS tool input.
 */
type WORKDAY_LIST_JOB_POSTINGS_INPUT = {
  /**
   * Category
   * @default null
   */
  category: string[] | null;
  /**
   * Job Posting
   * @description Job Posting for Job Posting Anchor
   * @default null
   */
  jobPosting: string[] | null;
  /**
   * Job Requisition
   * @description Job Requisition for Job Posting Anchor
   * @default null
   */
  jobRequisition: string[] | null;
  /**
   * Job Site
   * @default null
   */
  jobSite: string[] | null;
  /**
   * Limit
   * @description The maximum number of objects in a single response. The default is 20. The maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection.
   * @default null
   */
  offset: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_LIST_JOB_POSTINGS tool output.
 */
type WORKDAY_LIST_JOB_POSTINGS_OUTPUT = {
  /**
   * Data
   * @description Array of job posting objects from Workday Recruiting API
   */
  data?: {
      [key: string]: unknown;
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
  /**
   * Total
   * @description Total number of job postings available
   * @default null
   */
  total: number | null;
};

/**
 * Type of WORKDAY's WORKDAY_LIST_WORKERS tool input.
 */
type WORKDAY_LIST_WORKERS_INPUT = {
  /**
   * Include Terminated Workers
   * @description Include terminated workers in the output
   * @default null
   */
  includeTerminatedWorkers: boolean | null;
  /**
   * Limit
   * @description The maximum number of objects in a single response. The default is 20. The maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Offset
   * @description The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection.
   * @default null
   */
  offset: number | null;
  /**
   * Search
   * @description Searches workers by name or worker ID. The search is case-insensitive. You can include space-delimited search strings for an OR search.
   * @default null
   */
  search: string | null;
};

/**
 * Type of WORKDAY's WORKDAY_LIST_WORKERS tool output.
 */
type WORKDAY_LIST_WORKERS_OUTPUT = {
  /**
   * Data
   * @description Array of worker objects from Workday API
   */
  data?: {
      [key: string]: unknown;
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
  /**
   * Total
   * @description Total number of workers available
   */
  total?: number;
};

/**
 * Type map of all available tool input types for toolkit "WORKDAY".
 */
export type WORKDAY_TOOL_INPUTS = {
  CREATE_TIME_OFF_REQUEST: WORKDAY_CREATE_TIME_OFF_REQUEST_INPUT
  GET_ABSENCE_BALANCE: WORKDAY_GET_ABSENCE_BALANCE_INPUT
  GET_BALANCE_DETAILS: WORKDAY_GET_BALANCE_DETAILS_INPUT
  GET_CURRENT_USER: WORKDAY_GET_CURRENT_USER_INPUT
  GET_HOLIDAY_EVENTS: WORKDAY_GET_HOLIDAY_EVENTS_INPUT
  GET_INTERVIEW_FEEDBACK: WORKDAY_GET_INTERVIEW_FEEDBACK_INPUT
  GET_JOB_POSTING: WORKDAY_GET_JOB_POSTING_INPUT
  GET_JOB_POSTING_QUESTIONNAIRE: WORKDAY_GET_JOB_POSTING_QUESTIONNAIRE_INPUT
  GET_LEAVE_STATUS_VALUES: WORKDAY_GET_LEAVE_STATUS_VALUES_INPUT
  GET_MY_JOB_POSTINGS: WORKDAY_GET_MY_JOB_POSTINGS_INPUT
  GET_PROSPECT: WORKDAY_GET_PROSPECT_INPUT
  GET_PROSPECT_EDUCATIONS: WORKDAY_GET_PROSPECT_EDUCATIONS_INPUT
  GET_PROSPECT_EXPERIENCES: WORKDAY_GET_PROSPECT_EXPERIENCES_INPUT
  GET_PROSPECT_RESUME_ATTACHMENTS: WORKDAY_GET_PROSPECT_RESUME_ATTACHMENTS_INPUT
  GET_PROSPECT_SKILLS: WORKDAY_GET_PROSPECT_SKILLS_INPUT
  GET_TIME_OFF_STATUS_VALUES: WORKDAY_GET_TIME_OFF_STATUS_VALUES_INPUT
  GET_WORKER_ELIGIBLE_ABSENCE_TYPES: WORKDAY_GET_WORKER_ELIGIBLE_ABSENCE_TYPES_INPUT
  GET_WORKER_LEAVES_OF_ABSENCE: WORKDAY_GET_WORKER_LEAVES_OF_ABSENCE_INPUT
  GET_WORKER_TIME_OFF_DETAILS: WORKDAY_GET_WORKER_TIME_OFF_DETAILS_INPUT
  GET_WORKER_VALID_TIME_OFF_DATES: WORKDAY_GET_WORKER_VALID_TIME_OFF_DATES_INPUT
  LIST_ABSENCE_BALANCES: WORKDAY_LIST_ABSENCE_BALANCES_INPUT
  LIST_BALANCES: WORKDAY_LIST_BALANCES_INPUT
  LIST_INTERVIEWS: WORKDAY_LIST_INTERVIEWS_INPUT
  LIST_JOB_POSTINGS: WORKDAY_LIST_JOB_POSTINGS_INPUT
  LIST_WORKERS: WORKDAY_LIST_WORKERS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "WORKDAY".
 */
export type WORKDAY_TOOL_OUTPUTS = {
  CREATE_TIME_OFF_REQUEST: WORKDAY_CREATE_TIME_OFF_REQUEST_OUTPUT
  GET_ABSENCE_BALANCE: WORKDAY_GET_ABSENCE_BALANCE_OUTPUT
  GET_BALANCE_DETAILS: WORKDAY_GET_BALANCE_DETAILS_OUTPUT
  GET_CURRENT_USER: WORKDAY_GET_CURRENT_USER_OUTPUT
  GET_HOLIDAY_EVENTS: WORKDAY_GET_HOLIDAY_EVENTS_OUTPUT
  GET_INTERVIEW_FEEDBACK: WORKDAY_GET_INTERVIEW_FEEDBACK_OUTPUT
  GET_JOB_POSTING: WORKDAY_GET_JOB_POSTING_OUTPUT
  GET_JOB_POSTING_QUESTIONNAIRE: WORKDAY_GET_JOB_POSTING_QUESTIONNAIRE_OUTPUT
  GET_LEAVE_STATUS_VALUES: WORKDAY_GET_LEAVE_STATUS_VALUES_OUTPUT
  GET_MY_JOB_POSTINGS: WORKDAY_GET_MY_JOB_POSTINGS_OUTPUT
  GET_PROSPECT: WORKDAY_GET_PROSPECT_OUTPUT
  GET_PROSPECT_EDUCATIONS: WORKDAY_GET_PROSPECT_EDUCATIONS_OUTPUT
  GET_PROSPECT_EXPERIENCES: WORKDAY_GET_PROSPECT_EXPERIENCES_OUTPUT
  GET_PROSPECT_RESUME_ATTACHMENTS: WORKDAY_GET_PROSPECT_RESUME_ATTACHMENTS_OUTPUT
  GET_PROSPECT_SKILLS: WORKDAY_GET_PROSPECT_SKILLS_OUTPUT
  GET_TIME_OFF_STATUS_VALUES: WORKDAY_GET_TIME_OFF_STATUS_VALUES_OUTPUT
  GET_WORKER_ELIGIBLE_ABSENCE_TYPES: WORKDAY_GET_WORKER_ELIGIBLE_ABSENCE_TYPES_OUTPUT
  GET_WORKER_LEAVES_OF_ABSENCE: WORKDAY_GET_WORKER_LEAVES_OF_ABSENCE_OUTPUT
  GET_WORKER_TIME_OFF_DETAILS: WORKDAY_GET_WORKER_TIME_OFF_DETAILS_OUTPUT
  GET_WORKER_VALID_TIME_OFF_DATES: WORKDAY_GET_WORKER_VALID_TIME_OFF_DATES_OUTPUT
  LIST_ABSENCE_BALANCES: WORKDAY_LIST_ABSENCE_BALANCES_OUTPUT
  LIST_BALANCES: WORKDAY_LIST_BALANCES_OUTPUT
  LIST_INTERVIEWS: WORKDAY_LIST_INTERVIEWS_OUTPUT
  LIST_JOB_POSTINGS: WORKDAY_LIST_JOB_POSTINGS_OUTPUT
  LIST_WORKERS: WORKDAY_LIST_WORKERS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's WORKDAY toolkit.
 */
export const WORKDAY = {
  slug: "workday",
  tools: {
    /**
     * Creates a time off request for the specified worker id and initiates the business process.
     */
    CREATE_TIME_OFF_REQUEST: "WORKDAY_CREATE_TIME_OFF_REQUEST",
    /**
     * Retrieves the specified balance of all absence plan and leave of absence types.
     */
    GET_ABSENCE_BALANCE: "WORKDAY_GET_ABSENCE_BALANCE",
    /**
     * Retrieves the specified balance of all absence plan and leave of absence types.
     */
    GET_BALANCE_DETAILS: "WORKDAY_GET_BALANCE_DETAILS",
    /**
     * Retrieves the current authenticated worker's profile information from workday.
     */
    GET_CURRENT_USER: "WORKDAY_GET_CURRENT_USER",
    /**
     * Returns the holiday events for the specified workers and time period.
     */
    GET_HOLIDAY_EVENTS: "WORKDAY_GET_HOLIDAY_EVENTS",
    /**
     * Retrieves feedback entries for a specific interview to prepare debrief notes with highlights and lowlights.
     */
    GET_INTERVIEW_FEEDBACK: "WORKDAY_GET_INTERVIEW_FEEDBACK",
    /**
     * Retrieves detailed information about a specific job posting including job description.
     */
    GET_JOB_POSTING: "WORKDAY_GET_JOB_POSTING",
    /**
     * Retrieves screening questions and questionnaires associated with a specific job posting.
     */
    GET_JOB_POSTING_QUESTIONNAIRE: "WORKDAY_GET_JOB_POSTING_QUESTIONNAIRE",
    /**
     * Retrieves instances that can be used as values for other endpoint parameters in this service.
     */
    GET_LEAVE_STATUS_VALUES: "WORKDAY_GET_LEAVE_STATUS_VALUES",
    /**
     * Finds all job postings assigned to a specific recruiter by analyzing interviews and job requisitions.
     */
    GET_MY_JOB_POSTINGS: "WORKDAY_GET_MY_JOB_POSTINGS",
    /**
     * Retrieves a single prospect instance for talent matching and best-fit analysis.
     */
    GET_PROSPECT: "WORKDAY_GET_PROSPECT",
    /**
     * Retrieves the education of a prospect for talent matching and best-fit analysis.
     */
    GET_PROSPECT_EDUCATIONS: "WORKDAY_GET_PROSPECT_EDUCATIONS",
    /**
     * Retrieves the work experience of a prospect for talent matching and best-fit analysis.
     */
    GET_PROSPECT_EXPERIENCES: "WORKDAY_GET_PROSPECT_EXPERIENCES",
    /**
     * Retrieves resume attachments for a specific prospect to help prepare for upcoming interviews.
     */
    GET_PROSPECT_RESUME_ATTACHMENTS: "WORKDAY_GET_PROSPECT_RESUME_ATTACHMENTS",
    /**
     * Retrieves the skills of a prospect for talent matching and best-fit analysis.
     */
    GET_PROSPECT_SKILLS: "WORKDAY_GET_PROSPECT_SKILLS",
    /**
     * Retrieves instances that can be used as values for other endpoint parameters in this service.
     */
    GET_TIME_OFF_STATUS_VALUES: "WORKDAY_GET_TIME_OFF_STATUS_VALUES",
    /**
     * Retrieves a collection of eligible absence types for the specified worker.
     */
    GET_WORKER_ELIGIBLE_ABSENCE_TYPES: "WORKDAY_GET_WORKER_ELIGIBLE_ABSENCE_TYPES",
    /**
     * Retrieves the leaves of absence for the specified worker using the working absencemanagement v1 api.
     */
    GET_WORKER_LEAVES_OF_ABSENCE: "WORKDAY_GET_WORKER_LEAVES_OF_ABSENCE",
    /**
     * Retrieves a collection of time off details for the specified worker.
     */
    GET_WORKER_TIME_OFF_DETAILS: "WORKDAY_GET_WORKER_TIME_OFF_DETAILS",
    /**
     * Retrieves the valid time off dates for the specified worker id for the given dates.
     */
    GET_WORKER_VALID_TIME_OFF_DATES: "WORKDAY_GET_WORKER_VALID_TIME_OFF_DATES",
    /**
     * Retrieves the balance of all absence plan and leave of absence type for the specified worker id.
     */
    LIST_ABSENCE_BALANCES: "WORKDAY_LIST_ABSENCE_BALANCES",
    /**
     * Retrieves the balance of all absence plan and leave of absence type for the specified worker id.
     */
    LIST_BALANCES: "WORKDAY_LIST_BALANCES",
    /**
     * Retrieves a list of interviews with job requisition and recruiter assignment details. supports filtering by status for pipeline review and scheduled interviews.
     */
    LIST_INTERVIEWS: "WORKDAY_LIST_INTERVIEWS",
    /**
     * Retrieves a list of job postings from workday recruiting system with filtering options.
     */
    LIST_JOB_POSTINGS: "WORKDAY_LIST_JOB_POSTINGS",
    /**
     * Retrieves a collection of workers and current staffing information.
     */
    LIST_WORKERS: "WORKDAY_LIST_WORKERS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "WORKDAY".
 */
export type WORKDAY_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "WORKDAY".
 */
export type WORKDAY_TRIGGER_EVENTS = {}
