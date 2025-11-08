// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_COPY_ROLE tool input.
 */
type D2LBRIGHTSPACE_COPY_ROLE_INPUT = {
  /**
   * Deep Copy Role Id
   * @description Source role ID to act as template for new role
   */
  deep_copy_role_id?: number;
  /**
   * Role Data
   * @description Properties for the new role
   */
  role_data?: {
      /**
       * Role Name
       * @description Name to give to the new role
       */
      RoleName: string;
  };
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_COPY_ROLE tool output.
 */
type D2LBRIGHTSPACE_COPY_ROLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The newly created role data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_CREATE_A_COURSE_OFFERING tool input.
 */
type D2LBRIGHTSPACE_CREATE_A_COURSE_OFFERING_INPUT = {
  /**
   * Course Data
   * @description Data for creating the new course offering
   */
  course_data?: {
      /**
       * Can Self Register
       * @description Whether users can self-register for this course
       */
      CanSelfRegister?: boolean;
      /**
       * Code
       * @description Course code (max 50 chars, no special chars: \ : * ? " < > | ' # , % &)
       */
      Code: string;
      /**
       * Course Template Id
       * @description ID of the course template to use
       */
      CourseTemplateId: number;
      /**
       * Description
       * @description Rich text description of the course
       */
      Description?: {
          /**
           * Content
           * @description The content of the rich text
           */
          Content: string;
          /**
           * Type
           * @description The format of the content - must be either 'Text' or 'Html'
           */
          Type: string;
      };
      /**
       * End Date
       * Format: date-time
       * @description End date of the course offering
       */
      EndDate?: string;
      /**
       * Force Locale
       * @description Whether to override user's saved locale preference
       */
      ForceLocale: boolean;
      /**
       * Locale Id
       * @description ID of the locale to use
       */
      LocaleId?: number;
      /**
       * Name
       * @description Name of the course offering
       */
      Name: string;
      /**
       * Path
       * @description Root path for course content. Leave empty if path enforcement is enabled.
       */
      Path: string;
      /**
       * Semester Id
       * @description ID of the semester for this course
       */
      SemesterId?: number;
      /**
       * Show Address Book
       * @description Whether to group enrolled users together in email tool's address book
       */
      ShowAddressBook: boolean;
      /**
       * Start Date
       * Format: date-time
       * @description Start date of the course offering
       */
      StartDate?: string;
  };
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_CREATE_A_COURSE_OFFERING tool output.
 */
type D2LBRIGHTSPACE_CREATE_A_COURSE_OFFERING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The created course offering data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_CREATE_A_COURSE_TEMPLATE tool input.
 */
type D2LBRIGHTSPACE_CREATE_A_COURSE_TEMPLATE_INPUT = {
  /**
   * Course Template Data
   * @description Data for creating the new course template
   */
  course_template_data?: {
      /**
       * Code
       * @description Course template code (max 50 chars, no special chars: \ : * ? " < > | ' # , % &)
       */
      Code: string;
      /**
       * Name
       * @description Name of the course template
       */
      Name: string;
      /**
       * Parent Org Unit Ids
       * @description List of parent organizational unit IDs
       */
      ParentOrgUnitIds: number[];
      /**
       * Path
       * @description Root path for course content. Leave empty if path enforcement is enabled.
       */
      Path: string;
  };
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_CREATE_A_COURSE_TEMPLATE tool output.
 */
type D2LBRIGHTSPACE_CREATE_A_COURSE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The created course template data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_CREATE_GRADE_OBJECT tool input.
 */
type D2LBRIGHTSPACE_CREATE_GRADE_OBJECT_INPUT = {
  /**
   * Grade Object
   * @description Grade object data. Must be one of these types:
   *             - Numeric: Includes MaxPoints, CanExceedMaxPoints, etc.
   *             - PassFail: Includes MaxPoints, IsBonus, etc.
   *             - SelectBox: Includes MaxPoints, IsBonus, GradeSchemeId (required), etc.
   *             - Text: Basic grade object with Name, ShortName, etc.
   *
   */
  grade_object?: {
      [key: string]: unknown;
  };
  /**
   * Org Unit Id
   * @description ID of the org unit to create the grade object in
   */
  org_unit_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_CREATE_GRADE_OBJECT tool output.
 */
type D2LBRIGHTSPACE_CREATE_GRADE_OBJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The created grade object data in GradeObject format
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_CREATE_QUIZ tool input.
 */
type D2LBRIGHTSPACE_CREATE_QUIZ_INPUT = {
  /**
   * Org Unit Id
   * @description ID of the org unit to create the quiz in
   */
  org_unit_id?: number;
  /**
   * Quiz Data
   * @description Quiz creation data
   */
  quiz_data?: {
      /**
       * Allow Hints
       * @description Whether to allow hints
       */
      AllowHints: boolean;
      /**
       * Allow Only Users With Special Access
       * @description Whether to restrict to users with special access
       */
      AllowOnlyUsersWithSpecialAccess: boolean;
      /**
       * Auto Export To Grades
       * @description Whether to auto export to grades
       */
      AutoExportToGrades?: boolean;
      /**
       * Calc Type Id
       * @description Grade calculation type
       */
      CalcTypeId: number;
      /**
       * Category Id
       * @description Category ID
       */
      CategoryId?: number;
      /**
       * Deduction Percentage
       * @description Percentage deduction for incorrect answers (0-100)
       */
      DeductionPercentage?: number;
      /**
       * Description
       * @description Quiz description
       */
      Description: {
          /**
           * Is Displayed
           * @description Whether to display this text
           */
          IsDisplayed: boolean;
          /**
           * Text
           * @description The rich text content
           */
          Text: {
              /**
               * Content
               * @description The content of the rich text
               */
              Content: string;
              /**
               * Type
               * @description The type of the rich text content
               */
              Type: string;
          };
      };
      /**
       * Disable Pager And Alerts
       * @description Whether to disable pager and alerts
       */
      DisablePagerAndAlerts: boolean;
      /**
       * Disable Right Click
       * @description Whether to disable right-click
       */
      DisableRightClick: boolean;
      /**
       * Display In Calendar
       * @description Whether to show in calendar
       */
      DisplayInCalendar: boolean;
      /**
       * Due Date
       * @description Due date/time of the quiz in UTC format
       */
      DueDate?: string;
      /**
       * End Date
       * @description End date/time of the quiz in UTC format
       */
      EndDate?: string;
      /**
       * Footer
       * @description Quiz footer
       */
      Footer: {
          /**
           * Is Displayed
           * @description Whether to display this text
           */
          IsDisplayed: boolean;
          /**
           * Text
           * @description The rich text content
           */
          Text: {
              /**
               * Content
               * @description The content of the rich text
               */
              Content: string;
              /**
               * Type
               * @description The type of the rich text content
               */
              Type: string;
          };
      };
      /**
       * Grade Item Id
       * @description ID of the grade item
       */
      GradeItemId?: number;
      /**
       * Header
       * @description Quiz header
       */
      Header: {
          /**
           * Is Displayed
           * @description Whether to display this text
           */
          IsDisplayed: boolean;
          /**
           * Text
           * @description The rich text content
           */
          Text: {
              /**
               * Content
               * @description The content of the rich text
               */
              Content: string;
              /**
               * Type
               * @description The type of the rich text content
               */
              Type: string;
          };
      };
      /**
       * Instructions
       * @description Quiz instructions
       */
      Instructions: {
          /**
           * Is Displayed
           * @description Whether to display this text
           */
          IsDisplayed: boolean;
          /**
           * Text
           * @description The rich text content
           */
          Text: {
              /**
               * Content
               * @description The content of the rich text
               */
              Content: string;
              /**
               * Type
               * @description The type of the rich text content
               */
              Type: string;
          };
      };
      /**
       * Is Active
       * @description Whether the quiz is active
       */
      IsActive: boolean;
      /**
       * Is Auto Set Graded
       * @description Whether grading is automatic
       */
      IsAutoSetGraded: boolean;
      /**
       * Is Retake Incorrect Only
       * @description Whether retakes only include previously incorrect questions
       */
      IsRetakeIncorrectOnly: boolean;
      /**
       * Is Synchronous
       * @description Whether timer starts at StartDate
       */
      IsSynchronous: boolean;
      /**
       * Name
       * @description Name of the quiz
       */
      Name: string;
      /**
       * Notification Email
       * @description Email for notifications
       */
      NotificationEmail?: string;
      /**
       * Number Of Attempts Allowed
       * @description Number of attempts allowed (1-10, null for unlimited)
       */
      NumberOfAttemptsAllowed?: number;
      /**
       * Paging Type Id
       * @description Quiz paging type ID
       */
      PagingTypeId?: number;
      /**
       * Password
       * @description Password protection for the quiz
       */
      Password?: string;
      /**
       * Prevent Moving Backwards
       * @description Whether to prevent backwards navigation
       */
      PreventMovingBackwards: boolean;
      /**
       * Restrict Ip Address Range
       * @description IP range restrictions
       */
      RestrictIPAddressRange?: {
          /**
           * Ip Range End
           * @description End of IP range
           */
          IPRangeEnd?: string;
          /**
           * Ip Range Start
           * @description Start of IP range
           */
          IPRangeStart: string;
      }[];
      /**
       * Shuffle
       * @description Whether to randomize question order
       */
      Shuffle: boolean;
      /**
       * Sort Order
       * @description Sort order of the quiz
       */
      SortOrder: number;
      /**
       * Start Date
       * @description Start date/time of the quiz in UTC format
       */
      StartDate?: string;
      /**
       * Submission Grace Period
       * @description Grace period in minutes
       */
      SubmissionGracePeriod?: number;
  };
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_CREATE_QUIZ tool output.
 */
type D2LBRIGHTSPACE_CREATE_QUIZ_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The created quiz data
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_CREATE_QUIZ_CATEGORY tool input.
 */
type D2LBRIGHTSPACE_CREATE_QUIZ_CATEGORY_INPUT = {
  /**
   * Category Data
   * @description Quiz category creation data
   */
  category_data?: {
      /**
       * Name
       * @description Name of the quiz category
       */
      Name: string;
      /**
       * Sort Order
       * @description Sort order of the category
       */
      SortOrder: number;
  };
  /**
   * Org Unit Id
   * @description ID of the org unit to create the quiz category in
   */
  org_unit_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_CREATE_QUIZ_CATEGORY tool output.
 */
type D2LBRIGHTSPACE_CREATE_QUIZ_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The created quiz category data in QuizCategoryReadData format
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_CREATE_USER tool input.
 */
type D2LBRIGHTSPACE_CREATE_USER_INPUT = {
  /**
   * User Data
   * @description Data for creating the new user
   */
  user_data?: {
      /**
       * External Email
       * Format: email
       * @description Well-formed email address for password reset and account creation emails
       */
      ExternalEmail?: string;
      /**
       * First Name
       * @description User's legal first name. Cannot be solely whitespace.
       */
      FirstName: string;
      /**
       * Is Active
       * @description Whether the user account should be active
       */
      IsActive: boolean;
      /**
       * Last Name
       * @description User's legal last name. Cannot be solely whitespace.
       */
      LastName: string;
      /**
       * Middle Name
       * @description User's middle name
       */
      MiddleName?: string;
      /**
       * Org Defined Id
       * @description Organization-defined identifier for the user. Must be unique if provided.
       */
      OrgDefinedId?: string;
      /**
       * Pronouns
       * @description System-defined pronouns for the user
       */
      Pronouns?: string;
      /**
       * Role Id
       * @description Role ID to assign to the user
       */
      RoleId: number;
      /**
       * Send Creation Email
       * @description Whether to send an account creation email to the user
       */
      SendCreationEmail: boolean;
      /**
       * User Name
       * @description Username for the new user
       */
      UserName: string;
  };
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_CREATE_USER tool output.
 */
type D2LBRIGHTSPACE_CREATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The created user data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_DELETE_A_COURSE_TEMPLATE tool input.
 */
type D2LBRIGHTSPACE_DELETE_A_COURSE_TEMPLATE_INPUT = {
  /**
   * Org Unit Id
   * @description ID of the course template to delete
   */
  org_unit_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_DELETE_A_COURSE_TEMPLATE tool output.
 */
type D2LBRIGHTSPACE_DELETE_A_COURSE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The response data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_DELETE_COURSE tool input.
 */
type D2LBRIGHTSPACE_DELETE_COURSE_INPUT = {
  /**
   * Org Unit Id
   * @description ID of the course offering to delete
   */
  org_unit_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_DELETE_COURSE tool output.
 */
type D2LBRIGHTSPACE_DELETE_COURSE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The response data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_DELETE_GRADE_OBJECT tool input.
 */
type D2LBRIGHTSPACE_DELETE_GRADE_OBJECT_INPUT = {
  /**
   * Grade Object Id
   * @description ID of the grade object to delete
   */
  grade_object_id?: number;
  /**
   * Org Unit Id
   * @description ID of the org unit containing the grade object
   */
  org_unit_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_DELETE_GRADE_OBJECT tool output.
 */
type D2LBRIGHTSPACE_DELETE_GRADE_OBJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The response data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_DELETE_QUIZ tool input.
 */
type D2LBRIGHTSPACE_DELETE_QUIZ_INPUT = {
  /**
   * Org Unit Id
   * @description ID of the org unit containing the quiz
   */
  org_unit_id?: number;
  /**
   * Quiz Id
   * @description ID of the quiz to delete
   */
  quiz_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_DELETE_QUIZ tool output.
 */
type D2LBRIGHTSPACE_DELETE_QUIZ_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The response data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_DELETE_QUIZ_CATEGORY tool input.
 */
type D2LBRIGHTSPACE_DELETE_QUIZ_CATEGORY_INPUT = {
  /**
   * Category Id
   * @description ID of the quiz category to delete
   */
  category_id?: number;
  /**
   * Org Unit Id
   * @description ID of the org unit containing the quiz category
   */
  org_unit_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_DELETE_QUIZ_CATEGORY tool output.
 */
type D2LBRIGHTSPACE_DELETE_QUIZ_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The response data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_DELETE_USER tool input.
 */
type D2LBRIGHTSPACE_DELETE_USER_INPUT = {
  /**
   * User Id
   * @description ID of the user to delete
   */
  user_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_DELETE_USER tool output.
 */
type D2LBRIGHTSPACE_DELETE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The response data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_DELETE_USER_DEMOGRAPHICS tool input.
 */
type D2LBRIGHTSPACE_DELETE_USER_DEMOGRAPHICS_INPUT = {
  /**
   * Entry Ids
   * @description Optional. Specific entry IDs to delete. If not provided, all entries will be deleted.
   * @default null
   */
  entry_ids: string[] | null;
  /**
   * User Id
   * @description ID of the user whose demographics to delete
   */
  user_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_DELETE_USER_DEMOGRAPHICS tool output.
 */
type D2LBRIGHTSPACE_DELETE_USER_DEMOGRAPHICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The response data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_A_COURSE_OFFERING tool input.
 */
type D2LBRIGHTSPACE_GET_A_COURSE_OFFERING_INPUT = {
  /**
   * Org Unit Id
   * @description ID of the course offering to retrieve
   */
  org_unit_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_A_COURSE_OFFERING tool output.
 */
type D2LBRIGHTSPACE_GET_A_COURSE_OFFERING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The course offering data containing the course's information
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_A_COURSE_TEMPLATE tool input.
 */
type D2LBRIGHTSPACE_GET_A_COURSE_TEMPLATE_INPUT = {
  /**
   * Org Unit Id
   * @description ID of the course template to retrieve
   */
  org_unit_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_A_COURSE_TEMPLATE tool output.
 */
type D2LBRIGHTSPACE_GET_A_COURSE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The course template data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_COURSE_SCHEMA tool input.
 */
type D2LBRIGHTSPACE_GET_COURSE_SCHEMA_INPUT = object;

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_COURSE_SCHEMA tool output.
 */
type D2LBRIGHTSPACE_GET_COURSE_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The course schema data containing parent org unit type constraints
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_COURSE_TEMPLATE_SCHEMA tool input.
 */
type D2LBRIGHTSPACE_GET_COURSE_TEMPLATE_SCHEMA_INPUT = object;

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_COURSE_TEMPLATE_SCHEMA tool output.
 */
type D2LBRIGHTSPACE_GET_COURSE_TEMPLATE_SCHEMA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The schema data containing parent org unit type constraints
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_CURRENT_USER tool input.
 */
type D2LBRIGHTSPACE_GET_CURRENT_USER_INPUT = object;

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_CURRENT_USER tool output.
 */
type D2LBRIGHTSPACE_GET_CURRENT_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The user information data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_ENROLLED_ROLES tool input.
 */
type D2LBRIGHTSPACE_GET_ENROLLED_ROLES_INPUT = {
  /**
   * Org Unit Id
   * @description ID of the org unit to get enrolled roles from
   */
  org_unit_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_ENROLLED_ROLES tool output.
 */
type D2LBRIGHTSPACE_GET_ENROLLED_ROLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The enrolled roles data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_GRADE_ACCESS tool input.
 */
type D2LBRIGHTSPACE_GET_GRADE_ACCESS_INPUT = {
  /**
   * Grade Object Id
   * @description ID of the grade object to get access for
   */
  grade_object_id?: number;
  /**
   * Org Unit Id
   * @description ID of the org unit containing the grade
   */
  org_unit_id?: number;
  /**
   * Role Id
   * @description Optional. Get access for users with this role
   */
  role_id?: number;
  /**
   * User Id
   * @description Optional. Get access for a specific user
   */
  user_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_GRADE_ACCESS tool output.
 */
type D2LBRIGHTSPACE_GET_GRADE_ACCESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description List of UserAccess blocks in ObjectListPage format
       */
      response_data?: {
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_GRADE_OBJECT tool input.
 */
type D2LBRIGHTSPACE_GET_GRADE_OBJECT_INPUT = {
  /**
   * Grade Object Id
   * @description ID of the grade object to retrieve
   */
  grade_object_id?: number;
  /**
   * Org Unit Id
   * @description ID of the org unit containing the grade object
   */
  org_unit_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_GRADE_OBJECT tool output.
 */
type D2LBRIGHTSPACE_GET_GRADE_OBJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The grade object data in GradeObject format
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_GRADE_OBJECTS tool input.
 */
type D2LBRIGHTSPACE_GET_GRADE_OBJECTS_INPUT = {
  /**
   * Org Unit Id
   * @description ID of the org unit to get grade objects from
   */
  org_unit_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_GRADE_OBJECTS tool output.
 */
type D2LBRIGHTSPACE_GET_GRADE_OBJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description Array of grade objects for the org unit
       */
      response_data?: {
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_GRADE_SETUP tool input.
 */
type D2LBRIGHTSPACE_GET_GRADE_SETUP_INPUT = {
  /**
   * Org Unit Id
   * @description ID of the org unit to get grades configuration from
   */
  org_unit_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_GRADE_SETUP tool output.
 */
type D2LBRIGHTSPACE_GET_GRADE_SETUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The grades configuration data in GradeSetupInfo format
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_GRADE_STATISTICS tool input.
 */
type D2LBRIGHTSPACE_GET_GRADE_STATISTICS_INPUT = {
  /**
   * Grade Object Id
   * @description ID of the grade object to get statistics for
   */
  grade_object_id?: number;
  /**
   * Org Unit Id
   * @description ID of the org unit containing the grade
   */
  org_unit_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_GRADE_STATISTICS tool output.
 */
type D2LBRIGHTSPACE_GET_GRADE_STATISTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The grade statistics data in GradeStatisticsInfo format
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_ORG_UNIT_DEMOGRAPHICS tool input.
 */
type D2LBRIGHTSPACE_GET_ORG_UNIT_DEMOGRAPHICS_INPUT = {
  /**
   * Bookmark
   * @description Optional. Bookmark to use for fetching the next data set segment
   * @default null
   */
  bookmark: string | null;
  /**
   * Field Ids
   * @description Optional. List of demographic field IDs to filter by
   * @default null
   */
  field_ids: string[] | null;
  /**
   * Org Unit Id
   * @description ID of the org unit to get demographics from
   */
  org_unit_id?: number;
  /**
   * Role Ids
   * @description Optional. List of user role IDs to filter by
   * @default null
   */
  role_ids: string[] | null;
  /**
   * Search
   * @description Optional. Search string to look for in the demographic field values
   * @default null
   */
  search: string | null;
  /**
   * User Ids
   * @description Optional. List of user IDs to filter by
   * @default null
   */
  user_ids: string[] | null;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_ORG_UNIT_DEMOGRAPHICS tool output.
 */
type D2LBRIGHTSPACE_GET_ORG_UNIT_DEMOGRAPHICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The demographics data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_QUIZ tool input.
 */
type D2LBRIGHTSPACE_GET_QUIZ_INPUT = {
  /**
   * Org Unit Id
   * @description ID of the org unit containing the quiz
   */
  org_unit_id?: number;
  /**
   * Quiz Id
   * @description ID of the quiz to retrieve
   */
  quiz_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_QUIZ tool output.
 */
type D2LBRIGHTSPACE_GET_QUIZ_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The quiz data in QuizReadData format
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_QUIZZES tool input.
 */
type D2LBRIGHTSPACE_GET_QUIZZES_INPUT = {
  /**
   * Org Unit Id
   * @description ID of the org unit to get quizzes from
   */
  org_unit_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_QUIZZES tool output.
 */
type D2LBRIGHTSPACE_GET_QUIZZES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description List of quizzes in ObjectListPage format
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_QUIZ_ACCESS tool input.
 */
type D2LBRIGHTSPACE_GET_QUIZ_ACCESS_INPUT = {
  /**
   * Org Unit Id
   * @description ID of the org unit containing the quiz
   */
  org_unit_id?: number;
  /**
   * Quiz Id
   * @description ID of the quiz to get access information for
   */
  quiz_id?: number;
  /**
   * Role Id
   * @description Optional. Get access for users with this role
   */
  role_id?: number;
  /**
   * User Id
   * @description Optional. Get access for a specific user
   */
  user_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_QUIZ_ACCESS tool output.
 */
type D2LBRIGHTSPACE_GET_QUIZ_ACCESS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description List of user access data in ObjectListPage format
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_QUIZ_ATTEMPT tool input.
 */
type D2LBRIGHTSPACE_GET_QUIZ_ATTEMPT_INPUT = {
  /**
   * Attempt Id
   * @description ID of the attempt to retrieve
   */
  attempt_id?: number;
  /**
   * Org Unit Id
   * @description ID of the org unit containing the quiz
   */
  org_unit_id?: number;
  /**
   * Quiz Id
   * @description ID of the quiz
   */
  quiz_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_QUIZ_ATTEMPT tool output.
 */
type D2LBRIGHTSPACE_GET_QUIZ_ATTEMPT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The quiz attempt data in QuizAttemptData format
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_QUIZ_ATTEMPTS tool input.
 */
type D2LBRIGHTSPACE_GET_QUIZ_ATTEMPTS_INPUT = {
  /**
   * Org Unit Id
   * @description ID of the org unit containing the quiz
   */
  org_unit_id?: number;
  /**
   * Quiz Id
   * @description ID of the quiz to get attempts for
   */
  quiz_id?: number;
  /**
   * User Id
   * @description Optional. Get attempts for a specific user
   */
  user_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_QUIZ_ATTEMPTS tool output.
 */
type D2LBRIGHTSPACE_GET_QUIZ_ATTEMPTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description List of quiz attempts in ObjectListPage format
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_QUIZ_CATEGORIES tool input.
 */
type D2LBRIGHTSPACE_GET_QUIZ_CATEGORIES_INPUT = {
  /**
   * Org Unit Id
   * @description ID of the org unit to get quiz categories from
   */
  org_unit_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_QUIZ_CATEGORIES tool output.
 */
type D2LBRIGHTSPACE_GET_QUIZ_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description List of quiz categories in ObjectListPage format
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_QUIZ_CATEGORY tool input.
 */
type D2LBRIGHTSPACE_GET_QUIZ_CATEGORY_INPUT = {
  /**
   * Category Id
   * @description ID of the quiz category to retrieve
   */
  category_id?: number;
  /**
   * Org Unit Id
   * @description ID of the org unit containing the quiz category
   */
  org_unit_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_QUIZ_CATEGORY tool output.
 */
type D2LBRIGHTSPACE_GET_QUIZ_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The quiz category data in QuizCategoryReadData format
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_QUIZ_QUESTIONS tool input.
 */
type D2LBRIGHTSPACE_GET_QUIZ_QUESTIONS_INPUT = {
  /**
   * Org Unit Id
   * @description ID of the org unit containing the quiz
   */
  org_unit_id?: number;
  /**
   * Quiz Id
   * @description ID of the quiz to get questions from
   */
  quiz_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_QUIZ_QUESTIONS tool output.
 */
type D2LBRIGHTSPACE_GET_QUIZ_QUESTIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description List of quiz questions in ObjectListPage format
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_ROLES tool input.
 */
type D2LBRIGHTSPACE_GET_ROLES_INPUT = object;

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_ROLES tool output.
 */
type D2LBRIGHTSPACE_GET_ROLES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The roles data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_ROLE_BY_ID tool input.
 */
type D2LBRIGHTSPACE_GET_ROLE_BY_ID_INPUT = {
  /**
   * Role Id
   * @description ID of the role to retrieve
   */
  role_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_ROLE_BY_ID tool output.
 */
type D2LBRIGHTSPACE_GET_ROLE_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The role data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_USERS tool input.
 */
type D2LBRIGHTSPACE_GET_USERS_INPUT = {
  /**
   * Bookmark
   * @description Optional. Bookmark to use for fetching next data set segment
   * @default null
   */
  bookmark: string | null;
  /**
   * External Email
   * @description Optional. External email address to look for
   * @default null
   */
  externalEmail: string | null;
  /**
   * Org Defined Id
   * @description Optional. Org-defined identifier to look for
   * @default null
   */
  orgDefinedId: string | null;
  /**
   * User Name
   * @description Optional. User name to look for
   * @default null
   */
  userName: string | null;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_USERS tool output.
 */
type D2LBRIGHTSPACE_GET_USERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The users data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_USER_BY_ID tool input.
 */
type D2LBRIGHTSPACE_GET_USER_BY_ID_INPUT = {
  /**
   * User Id
   * @description The ID of the user to retrieve
   */
  user_id?: string;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_GET_USER_BY_ID tool output.
 */
type D2LBRIGHTSPACE_GET_USER_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The user data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_UPDATE_A_COURSE_OFFERING tool input.
 */
type D2LBRIGHTSPACE_UPDATE_A_COURSE_OFFERING_INPUT = {
  /**
   * Course Data
   * @description Updated course offering properties
   */
  course_data?: {
      /**
       * Can Self Register
       * @description Whether users can self-register for this course
       */
      CanSelfRegister?: boolean;
      /**
       * Code
       * @description Course code (max 50 chars, no special chars: \ : * ? " < > | ' # , % &)
       */
      Code: string;
      /**
       * Description
       * @description Rich text description of the course
       */
      Description?: {
          /**
           * Content
           * @description The content of the rich text
           */
          Content: string;
          /**
           * Type
           * @description The type of the rich text content
           */
          Type: string;
      };
      /**
       * End Date
       * Format: date-time
       * @description End date of the course offering. Null won't overwrite existing date
       */
      EndDate?: string;
      /**
       * Is Active
       * @description Whether the course offering is active
       */
      IsActive: boolean;
      /**
       * Name
       * @description Name of the course offering
       */
      Name: string;
      /**
       * Start Date
       * Format: date-time
       * @description Start date of the course offering. Null won't overwrite existing date
       */
      StartDate?: string;
  };
  /**
   * Org Unit Id
   * @description ID of the course offering to update
   */
  org_unit_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_UPDATE_A_COURSE_OFFERING tool output.
 */
type D2LBRIGHTSPACE_UPDATE_A_COURSE_OFFERING_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The updated course offering data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_UPDATE_A_COURSE_TEMPLATE tool input.
 */
type D2LBRIGHTSPACE_UPDATE_A_COURSE_TEMPLATE_INPUT = {
  /**
   * Org Unit Id
   * @description ID of the course template to update
   */
  org_unit_id?: number;
  /**
   * Template Data
   * @description Updated course template properties
   */
  template_data?: {
      /**
       * Code
       * @description Course template code (max 50 chars, no special chars: \ : * ? " < > | ' # , % &)
       */
      Code: string;
      /**
       * Name
       * @description Name of the course template
       */
      Name: string;
  };
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_UPDATE_A_COURSE_TEMPLATE tool output.
 */
type D2LBRIGHTSPACE_UPDATE_A_COURSE_TEMPLATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The updated course template data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_UPDATE_GRADE_OBJECT tool input.
 */
type D2LBRIGHTSPACE_UPDATE_GRADE_OBJECT_INPUT = {
  /**
   * Grade Object
   * @description Updated grade object data. Must be one of these types:
   *             - Numeric: Includes MaxPoints, CanExceedMaxPoints, etc.
   *             - PassFail: Includes MaxPoints, IsBonus, etc.
   *             - SelectBox: Includes MaxPoints, IsBonus, GradeSchemeId (required), etc.
   *             - Text: Basic grade object with Name, ShortName, etc.
   *             Common restrictions:
   *             - Do not provide Id field
   *             - CategoryId must be valid or 0
   *             - Description must use RichTextInput format
   *             - MaxPoints (if applicable) must be between 0.01 and 9999999999
   *             - Name must be unique in the gradebook
   *             - Name cannot contain: / " * < > + = | , %
   *             - Name and ShortName must be ≤128 characters
   *             - Do not provide GradeSchemeUrl or Weight fields
   *             Note: All provided data will replace the existing grade object's data.
   *
   */
  grade_object?: {
      [key: string]: unknown;
  };
  /**
   * Grade Object Id
   * @description ID of the grade object to update
   */
  grade_object_id?: number;
  /**
   * Org Unit Id
   * @description ID of the org unit containing the grade object
   */
  org_unit_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_UPDATE_GRADE_OBJECT tool output.
 */
type D2LBRIGHTSPACE_UPDATE_GRADE_OBJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The updated grade object data in GradeObject format
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_UPDATE_GRADE_SETUP tool input.
 */
type D2LBRIGHTSPACE_UPDATE_GRADE_SETUP_INPUT = {
  /**
   * Org Unit Id
   * @description ID of the org unit to update grades configuration for
   */
  org_unit_id?: number;
  /**
   * Setup Info
   * @description The new grades configuration data
   */
  setup_info?: {
      /**
       * Default Grade Scheme Id
       * @description ID of the default grade scheme
       */
      DefaultGradeSchemeId: number;
      /**
       * Grading System
       * @description The grading system type
       */
      GradingSystem: string;
      /**
       * Is Null Grade Zero
       * @description Whether null grades should be treated as zero
       */
      IsNullGradeZero: boolean;
  };
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_UPDATE_GRADE_SETUP tool output.
 */
type D2LBRIGHTSPACE_UPDATE_GRADE_SETUP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The updated grades configuration in GradeSetupInfo format
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_UPDATE_QUIZ tool input.
 */
type D2LBRIGHTSPACE_UPDATE_QUIZ_INPUT = {
  /**
   * Org Unit Id
   * @description ID of the org unit containing the quiz
   */
  org_unit_id?: number;
  /**
   * Quiz Data
   * @description Updated quiz data
   */
  quiz_data?: {
      /**
       * Allow Hints
       * @description Whether to allow hints
       */
      AllowHints?: boolean;
      /**
       * Allow Only Users With Special Access
       * @description Whether to restrict to users with special access
       */
      AllowOnlyUsersWithSpecialAccess?: boolean;
      /**
       * Auto Export To Grades
       * @description Whether to auto export to grades
       */
      AutoExportToGrades?: boolean;
      /**
       * Calc Type Id
       * @description Grade calculation type
       */
      CalcTypeId?: number;
      /**
       * Category Id
       * @description Category ID
       */
      CategoryId?: number;
      /**
       * Deduction Percentage
       * @description Percentage deduction for incorrect answers (0-100)
       */
      DeductionPercentage?: number;
      /**
       * Description
       * @description Quiz description
       */
      Description?: {
          /**
           * Is Displayed
           * @description Whether to display this text
           */
          IsDisplayed?: boolean;
          /**
           * Text
           * @description The rich text content
           */
          Text?: {
              /**
               * Content
               * @description The content of the rich text
               */
              Content?: string;
              /**
               * Type
               * @description The type of the rich text content
               */
              Type?: string;
          };
      };
      /**
       * Disable Pager And Alerts
       * @description Whether to disable pager and alerts
       */
      DisablePagerAndAlerts?: boolean;
      /**
       * Disable Right Click
       * @description Whether to disable right-click
       */
      DisableRightClick?: boolean;
      /**
       * Display In Calendar
       * @description Whether to show in calendar
       */
      DisplayInCalendar?: boolean;
      /**
       * Due Date
       * @description Due date/time of the quiz in UTC format
       */
      DueDate?: string;
      /**
       * End Date
       * @description End date/time of the quiz in UTC format
       */
      EndDate?: string;
      /**
       * Footer
       * @description Quiz footer
       */
      Footer?: {
          /**
           * Is Displayed
           * @description Whether to display this text
           */
          IsDisplayed?: boolean;
          /**
           * Text
           * @description The rich text content
           */
          Text?: {
              /**
               * Content
               * @description The content of the rich text
               */
              Content?: string;
              /**
               * Type
               * @description The type of the rich text content
               */
              Type?: string;
          };
      };
      /**
       * Grade Item Id
       * @description ID of the grade item
       */
      GradeItemId?: number;
      /**
       * Header
       * @description Quiz header
       */
      Header?: {
          /**
           * Is Displayed
           * @description Whether to display this text
           */
          IsDisplayed?: boolean;
          /**
           * Text
           * @description The rich text content
           */
          Text?: {
              /**
               * Content
               * @description The content of the rich text
               */
              Content?: string;
              /**
               * Type
               * @description The type of the rich text content
               */
              Type?: string;
          };
      };
      /**
       * Instructions
       * @description Quiz instructions
       */
      Instructions?: {
          /**
           * Is Displayed
           * @description Whether to display this text
           */
          IsDisplayed?: boolean;
          /**
           * Text
           * @description The rich text content
           */
          Text?: {
              /**
               * Content
               * @description The content of the rich text
               */
              Content?: string;
              /**
               * Type
               * @description The type of the rich text content
               */
              Type?: string;
          };
      };
      /**
       * Is Active
       * @description Whether the quiz is active
       */
      IsActive?: boolean;
      /**
       * Is Auto Set Graded
       * @description Whether grading is automatic
       */
      IsAutoSetGraded?: boolean;
      /**
       * Is Retake Incorrect Only
       * @description Whether retakes only include previously incorrect questions
       */
      IsRetakeIncorrectOnly?: boolean;
      /**
       * Is Synchronous
       * @description Whether timer starts at StartDate
       */
      IsSynchronous?: boolean;
      /**
       * Name
       * @description Name of the quiz
       */
      Name?: string;
      /**
       * Notification Email
       * @description Email for notifications
       */
      NotificationEmail?: string;
      /**
       * Number Of Attempts Allowed
       * @description Number of attempts allowed (1-10, null for unlimited)
       */
      NumberOfAttemptsAllowed?: number;
      /**
       * Paging Type Id
       * @description Quiz paging type ID
       */
      PagingTypeId?: number;
      /**
       * Password
       * @description Password protection for the quiz
       */
      Password?: string;
      /**
       * Prevent Moving Backwards
       * @description Whether to prevent backwards navigation
       */
      PreventMovingBackwards?: boolean;
      /**
       * Restrict Ip Address Range
       * @description IP range restrictions
       */
      RestrictIPAddressRange?: {
          /**
           * Ip Range End
           * @description End of IP range
           */
          IPRangeEnd?: string;
          /**
           * Ip Range Start
           * @description Start of IP range
           */
          IPRangeStart?: string;
      }[];
      /**
       * Shuffle
       * @description Whether to randomize question order
       */
      Shuffle?: boolean;
      /**
       * Sort Order
       * @description Sort order of the quiz
       */
      SortOrder?: number;
      /**
       * Start Date
       * @description Start date/time of the quiz in UTC format
       */
      StartDate?: string;
      /**
       * Submission Grace Period
       * @description Grace period in minutes
       */
      SubmissionGracePeriod?: number;
  };
  /**
   * Quiz Id
   * @description ID of the quiz to update
   */
  quiz_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_UPDATE_QUIZ tool output.
 */
type D2LBRIGHTSPACE_UPDATE_QUIZ_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The updated quiz data
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_UPDATE_QUIZ_CATEGORY tool input.
 */
type D2LBRIGHTSPACE_UPDATE_QUIZ_CATEGORY_INPUT = {
  /**
   * Category Data
   * @description Updated quiz category data
   */
  category_data?: {
      /**
       * Name
       * @description Name of the quiz category
       */
      Name?: string;
      /**
       * Sort Order
       * @description Sort order of the category
       */
      SortOrder?: number;
  };
  /**
   * Category Id
   * @description ID of the quiz category to update
   */
  category_id?: number;
  /**
   * Org Unit Id
   * @description ID of the org unit containing the quiz category
   */
  org_unit_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_UPDATE_QUIZ_CATEGORY tool output.
 */
type D2LBRIGHTSPACE_UPDATE_QUIZ_CATEGORY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The updated quiz category data in QuizCategoryReadData format
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_UPDATE_USER tool input.
 */
type D2LBRIGHTSPACE_UPDATE_USER_INPUT = {
  /**
   * User Data
   * @description Updated data for the user
   */
  user_data?: {
      /**
       * Activation
       * @description User activation status
       */
      Activation: {
          /**
           * Is Active
           * @description Whether the user account should be active
           */
          IsActive: boolean;
      };
      /**
       * External Email
       * Format: email
       * @description Well-formed email address for password reset and account creation emails
       * @default null
       */
      ExternalEmail: string | null;
      /**
       * First Name
       * @description User's first name. Updates preferred name if set, otherwise updates legal name. Cannot be solely whitespace.
       */
      FirstName: string;
      /**
       * Last Name
       * @description User's last name. Updates preferred name if set, otherwise updates legal name. Cannot be solely whitespace.
       */
      LastName: string;
      /**
       * Middle Name
       * @description User's middle name
       * @default null
       */
      MiddleName: string | null;
      /**
       * Org Defined Id
       * @description Organization-defined identifier for the user. Must be unique if provided.
       * @default null
       */
      OrgDefinedId: string | null;
      /**
       * Pronouns
       * @description System-defined pronouns for the user. Use empty string to reset, null to keep existing value.
       * @default null
       */
      Pronouns: string | null;
      /**
       * User Name
       * @description Username for the user
       */
      UserName: string;
  };
  /**
   * User Id
   * @description ID of the user to update
   */
  user_id?: number;
};

/**
 * Type of D2LBRIGHTSPACE's D2LBRIGHTSPACE_UPDATE_USER tool output.
 */
type D2LBRIGHTSPACE_UPDATE_USER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Response Data
       * @description The updated user data from the API
       */
      response_data?: {
          [key: string]: unknown;
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
 * Type map of all available tool input types for toolkit "D2LBRIGHTSPACE".
 */
export type D2LBRIGHTSPACE_TOOL_INPUTS = {
  COPY_ROLE: D2LBRIGHTSPACE_COPY_ROLE_INPUT
  CREATE_A_COURSE_OFFERING: D2LBRIGHTSPACE_CREATE_A_COURSE_OFFERING_INPUT
  CREATE_A_COURSE_TEMPLATE: D2LBRIGHTSPACE_CREATE_A_COURSE_TEMPLATE_INPUT
  CREATE_GRADE_OBJECT: D2LBRIGHTSPACE_CREATE_GRADE_OBJECT_INPUT
  CREATE_QUIZ: D2LBRIGHTSPACE_CREATE_QUIZ_INPUT
  CREATE_QUIZ_CATEGORY: D2LBRIGHTSPACE_CREATE_QUIZ_CATEGORY_INPUT
  CREATE_USER: D2LBRIGHTSPACE_CREATE_USER_INPUT
  DELETE_A_COURSE_TEMPLATE: D2LBRIGHTSPACE_DELETE_A_COURSE_TEMPLATE_INPUT
  DELETE_COURSE: D2LBRIGHTSPACE_DELETE_COURSE_INPUT
  DELETE_GRADE_OBJECT: D2LBRIGHTSPACE_DELETE_GRADE_OBJECT_INPUT
  DELETE_QUIZ: D2LBRIGHTSPACE_DELETE_QUIZ_INPUT
  DELETE_QUIZ_CATEGORY: D2LBRIGHTSPACE_DELETE_QUIZ_CATEGORY_INPUT
  DELETE_USER: D2LBRIGHTSPACE_DELETE_USER_INPUT
  DELETE_USER_DEMOGRAPHICS: D2LBRIGHTSPACE_DELETE_USER_DEMOGRAPHICS_INPUT
  GET_A_COURSE_OFFERING: D2LBRIGHTSPACE_GET_A_COURSE_OFFERING_INPUT
  GET_A_COURSE_TEMPLATE: D2LBRIGHTSPACE_GET_A_COURSE_TEMPLATE_INPUT
  GET_COURSE_SCHEMA: D2LBRIGHTSPACE_GET_COURSE_SCHEMA_INPUT
  GET_COURSE_TEMPLATE_SCHEMA: D2LBRIGHTSPACE_GET_COURSE_TEMPLATE_SCHEMA_INPUT
  GET_CURRENT_USER: D2LBRIGHTSPACE_GET_CURRENT_USER_INPUT
  GET_ENROLLED_ROLES: D2LBRIGHTSPACE_GET_ENROLLED_ROLES_INPUT
  GET_GRADE_ACCESS: D2LBRIGHTSPACE_GET_GRADE_ACCESS_INPUT
  GET_GRADE_OBJECT: D2LBRIGHTSPACE_GET_GRADE_OBJECT_INPUT
  GET_GRADE_OBJECTS: D2LBRIGHTSPACE_GET_GRADE_OBJECTS_INPUT
  GET_GRADE_SETUP: D2LBRIGHTSPACE_GET_GRADE_SETUP_INPUT
  GET_GRADE_STATISTICS: D2LBRIGHTSPACE_GET_GRADE_STATISTICS_INPUT
  GET_ORG_UNIT_DEMOGRAPHICS: D2LBRIGHTSPACE_GET_ORG_UNIT_DEMOGRAPHICS_INPUT
  GET_QUIZ: D2LBRIGHTSPACE_GET_QUIZ_INPUT
  GET_QUIZZES: D2LBRIGHTSPACE_GET_QUIZZES_INPUT
  GET_QUIZ_ACCESS: D2LBRIGHTSPACE_GET_QUIZ_ACCESS_INPUT
  GET_QUIZ_ATTEMPT: D2LBRIGHTSPACE_GET_QUIZ_ATTEMPT_INPUT
  GET_QUIZ_ATTEMPTS: D2LBRIGHTSPACE_GET_QUIZ_ATTEMPTS_INPUT
  GET_QUIZ_CATEGORIES: D2LBRIGHTSPACE_GET_QUIZ_CATEGORIES_INPUT
  GET_QUIZ_CATEGORY: D2LBRIGHTSPACE_GET_QUIZ_CATEGORY_INPUT
  GET_QUIZ_QUESTIONS: D2LBRIGHTSPACE_GET_QUIZ_QUESTIONS_INPUT
  GET_ROLES: D2LBRIGHTSPACE_GET_ROLES_INPUT
  GET_ROLE_BY_ID: D2LBRIGHTSPACE_GET_ROLE_BY_ID_INPUT
  GET_USERS: D2LBRIGHTSPACE_GET_USERS_INPUT
  GET_USER_BY_ID: D2LBRIGHTSPACE_GET_USER_BY_ID_INPUT
  UPDATE_A_COURSE_OFFERING: D2LBRIGHTSPACE_UPDATE_A_COURSE_OFFERING_INPUT
  UPDATE_A_COURSE_TEMPLATE: D2LBRIGHTSPACE_UPDATE_A_COURSE_TEMPLATE_INPUT
  UPDATE_GRADE_OBJECT: D2LBRIGHTSPACE_UPDATE_GRADE_OBJECT_INPUT
  UPDATE_GRADE_SETUP: D2LBRIGHTSPACE_UPDATE_GRADE_SETUP_INPUT
  UPDATE_QUIZ: D2LBRIGHTSPACE_UPDATE_QUIZ_INPUT
  UPDATE_QUIZ_CATEGORY: D2LBRIGHTSPACE_UPDATE_QUIZ_CATEGORY_INPUT
  UPDATE_USER: D2LBRIGHTSPACE_UPDATE_USER_INPUT
}

/**
 * Type map of all available tool input types for toolkit "D2LBRIGHTSPACE".
 */
export type D2LBRIGHTSPACE_TOOL_OUTPUTS = {
  COPY_ROLE: D2LBRIGHTSPACE_COPY_ROLE_OUTPUT
  CREATE_A_COURSE_OFFERING: D2LBRIGHTSPACE_CREATE_A_COURSE_OFFERING_OUTPUT
  CREATE_A_COURSE_TEMPLATE: D2LBRIGHTSPACE_CREATE_A_COURSE_TEMPLATE_OUTPUT
  CREATE_GRADE_OBJECT: D2LBRIGHTSPACE_CREATE_GRADE_OBJECT_OUTPUT
  CREATE_QUIZ: D2LBRIGHTSPACE_CREATE_QUIZ_OUTPUT
  CREATE_QUIZ_CATEGORY: D2LBRIGHTSPACE_CREATE_QUIZ_CATEGORY_OUTPUT
  CREATE_USER: D2LBRIGHTSPACE_CREATE_USER_OUTPUT
  DELETE_A_COURSE_TEMPLATE: D2LBRIGHTSPACE_DELETE_A_COURSE_TEMPLATE_OUTPUT
  DELETE_COURSE: D2LBRIGHTSPACE_DELETE_COURSE_OUTPUT
  DELETE_GRADE_OBJECT: D2LBRIGHTSPACE_DELETE_GRADE_OBJECT_OUTPUT
  DELETE_QUIZ: D2LBRIGHTSPACE_DELETE_QUIZ_OUTPUT
  DELETE_QUIZ_CATEGORY: D2LBRIGHTSPACE_DELETE_QUIZ_CATEGORY_OUTPUT
  DELETE_USER: D2LBRIGHTSPACE_DELETE_USER_OUTPUT
  DELETE_USER_DEMOGRAPHICS: D2LBRIGHTSPACE_DELETE_USER_DEMOGRAPHICS_OUTPUT
  GET_A_COURSE_OFFERING: D2LBRIGHTSPACE_GET_A_COURSE_OFFERING_OUTPUT
  GET_A_COURSE_TEMPLATE: D2LBRIGHTSPACE_GET_A_COURSE_TEMPLATE_OUTPUT
  GET_COURSE_SCHEMA: D2LBRIGHTSPACE_GET_COURSE_SCHEMA_OUTPUT
  GET_COURSE_TEMPLATE_SCHEMA: D2LBRIGHTSPACE_GET_COURSE_TEMPLATE_SCHEMA_OUTPUT
  GET_CURRENT_USER: D2LBRIGHTSPACE_GET_CURRENT_USER_OUTPUT
  GET_ENROLLED_ROLES: D2LBRIGHTSPACE_GET_ENROLLED_ROLES_OUTPUT
  GET_GRADE_ACCESS: D2LBRIGHTSPACE_GET_GRADE_ACCESS_OUTPUT
  GET_GRADE_OBJECT: D2LBRIGHTSPACE_GET_GRADE_OBJECT_OUTPUT
  GET_GRADE_OBJECTS: D2LBRIGHTSPACE_GET_GRADE_OBJECTS_OUTPUT
  GET_GRADE_SETUP: D2LBRIGHTSPACE_GET_GRADE_SETUP_OUTPUT
  GET_GRADE_STATISTICS: D2LBRIGHTSPACE_GET_GRADE_STATISTICS_OUTPUT
  GET_ORG_UNIT_DEMOGRAPHICS: D2LBRIGHTSPACE_GET_ORG_UNIT_DEMOGRAPHICS_OUTPUT
  GET_QUIZ: D2LBRIGHTSPACE_GET_QUIZ_OUTPUT
  GET_QUIZZES: D2LBRIGHTSPACE_GET_QUIZZES_OUTPUT
  GET_QUIZ_ACCESS: D2LBRIGHTSPACE_GET_QUIZ_ACCESS_OUTPUT
  GET_QUIZ_ATTEMPT: D2LBRIGHTSPACE_GET_QUIZ_ATTEMPT_OUTPUT
  GET_QUIZ_ATTEMPTS: D2LBRIGHTSPACE_GET_QUIZ_ATTEMPTS_OUTPUT
  GET_QUIZ_CATEGORIES: D2LBRIGHTSPACE_GET_QUIZ_CATEGORIES_OUTPUT
  GET_QUIZ_CATEGORY: D2LBRIGHTSPACE_GET_QUIZ_CATEGORY_OUTPUT
  GET_QUIZ_QUESTIONS: D2LBRIGHTSPACE_GET_QUIZ_QUESTIONS_OUTPUT
  GET_ROLES: D2LBRIGHTSPACE_GET_ROLES_OUTPUT
  GET_ROLE_BY_ID: D2LBRIGHTSPACE_GET_ROLE_BY_ID_OUTPUT
  GET_USERS: D2LBRIGHTSPACE_GET_USERS_OUTPUT
  GET_USER_BY_ID: D2LBRIGHTSPACE_GET_USER_BY_ID_OUTPUT
  UPDATE_A_COURSE_OFFERING: D2LBRIGHTSPACE_UPDATE_A_COURSE_OFFERING_OUTPUT
  UPDATE_A_COURSE_TEMPLATE: D2LBRIGHTSPACE_UPDATE_A_COURSE_TEMPLATE_OUTPUT
  UPDATE_GRADE_OBJECT: D2LBRIGHTSPACE_UPDATE_GRADE_OBJECT_OUTPUT
  UPDATE_GRADE_SETUP: D2LBRIGHTSPACE_UPDATE_GRADE_SETUP_OUTPUT
  UPDATE_QUIZ: D2LBRIGHTSPACE_UPDATE_QUIZ_OUTPUT
  UPDATE_QUIZ_CATEGORY: D2LBRIGHTSPACE_UPDATE_QUIZ_CATEGORY_OUTPUT
  UPDATE_USER: D2LBRIGHTSPACE_UPDATE_USER_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's D2LBRIGHTSPACE toolkit.
 */
export const D2LBRIGHTSPACE = {
  slug: "d2lbrightspace",
  tools: {
    /**
     * Creates a new role copied from an existing role in d2l brightspace. notes: - the new role will not have any capabilities upon the old role from which it was created - some capabilities will be copied for the new role (e.g., if old role users could impersonate other old role users, new role users will be able to impersonate other new role users) - additional capabilities must be manually created after copying requires oauth2 scope: - role:detail:create available in api versions unstable (lms v10.4.10+)
     */
    COPY_ROLE: "D2LBRIGHTSPACE_COPY_ROLE",
    /**
     * Creates a new course offering in d2l brightspace. notes: - course code limitations: max 50 chars, no special chars: \ : * ? " < > | ' # , % & - path: leave empty if path enforcement is enabled - semesterid: provide null if not using the semester element - canselfregister: required for api v1.28+, not supported before v1.28 requires oauth2 scope: - orgunits:course:create available in api versions 1.46+ (lms v20.24.3+)
     */
    CREATE_A_COURSE_OFFERING: "D2LBRIGHTSPACE_CREATE_A_COURSE_OFFERING",
    /**
     * Creates a new course template in d2l brightspace. notes: - course template code limitations: max 50 chars, no special chars: \ : * ? " < > | ' # , % & - path: leave empty if path enforcement is enabled requires oauth2 scope: - orgunits:coursetemplate:create available in api versions 1.46+ (lms v20.24.3+)
     */
    CREATE_A_COURSE_TEMPLATE: "D2LBRIGHTSPACE_CREATE_A_COURSE_TEMPLATE",
    /**
     * Creates a new grade object for a particular org unit. the grade object can be one of four types: 1. numeric: for numeric grades with max points 2. passfail: for pass/fail assessments 3. selectbox: for predefined grade options 4. text: for text-only feedback returns a gradeobject json block containing the created grade object's data, including its assigned id. requires oauth2 scope: - grades:gradeobjects:write available in api versions 1.75+ (lms v20.24.5+)
     */
    CREATE_GRADE_OBJECT: "D2LBRIGHTSPACE_CREATE_GRADE_OBJECT",
    /**
     * Creates a new quiz in d2l brightspace. notes: - numberofattemptsallowed must be between 1 and 10 (inclusive) or null for unlimited - password must not be empty or whitespace if provided - notificationemail must be a valid email address if provided - timelimitvalue: 0 for no limit (with isenforced false), or 1-9999 for enforced limit - deductionpercentage must be between 0 and 100 if provided - as of le api v1.71: - latelimitminutes is ignored - latesubmissionoption 1 is treated as 2 (autosubmitattempt) - submissiongraceperiod is not used - pagingtypeid added in le api v1.78 - date fields should be in utc format requires oauth2 scopes: - quizzing:quizzes:read - quizzing:quizzes:create available in api versions 1.75+ (lms v20.24.5+)
     */
    CREATE_QUIZ: "D2LBRIGHTSPACE_CREATE_QUIZ",
    /**
     * Creates a new quiz category in d2l brightspace. returns a quizcategoryreaddata json block containing: - categoryid: the id of the created category - name: the name of the category - sortorder: the sort order value requires oauth2 scopes: - quizzing:quizzes:read - quizzing:quizzes:create available in api versions 1.75+ (lms v20.24.5+)
     */
    CREATE_QUIZ_CATEGORY: "D2LBRIGHTSPACE_CREATE_QUIZ_CATEGORY",
    /**
     * Creates a new user entity in d2l brightspace. requires oauth2 scope: - users:userdata:create available in api versions 1.46+ (lms v20.24.3+) notes: - firstname and lastname are used as legal names - externalemail must be null or a valid email address - orgdefinedid must be unique across the organization if provided - preferred names must be set separately after user creation
     */
    CREATE_USER: "D2LBRIGHTSPACE_CREATE_USER",
    /**
     * Deletes a course template from d2l brightspace. requires oauth2 scope: - orgunits:course:delete available in api versions 1.46+ (lms v20.24.3+)
     */
    DELETE_A_COURSE_TEMPLATE: "D2LBRIGHTSPACE_DELETE_A_COURSE_TEMPLATE",
    /**
     * Deletes a course offering from d2l brightspace. requires oauth2 scope: - orgunits:course:delete available in api versions 1.46+ (lms v20.24.3+)
     */
    DELETE_COURSE: "D2LBRIGHTSPACE_DELETE_COURSE",
    /**
     * Deletes a specific grade object from an org unit. requires oauth2 scope: - grades:gradeobjects:delete available in api versions 1.75+ (lms v20.24.5+)
     */
    DELETE_GRADE_OBJECT: "D2LBRIGHTSPACE_DELETE_GRADE_OBJECT",
    /**
     * Deletes a quiz from d2l brightspace. requires oauth2 scope: - quizzing:quizzes:delete available in api versions 1.75+ (lms v20.24.5+)
     */
    DELETE_QUIZ: "D2LBRIGHTSPACE_DELETE_QUIZ",
    /**
     * Deletes a quiz category from d2l brightspace. requires oauth2 scope: - quizzing:quizzes:delete available in api versions 1.75+ (lms v20.24.5+)
     */
    DELETE_QUIZ_CATEGORY: "D2LBRIGHTSPACE_DELETE_QUIZ_CATEGORY",
    /**
     * Deletes a user entity from d2l brightspace. requires oauth2 scope: - users:userdata:delete available in api versions 1.46+ (lms v20.24.3+)
     */
    DELETE_USER: "D2LBRIGHTSPACE_DELETE_USER",
    /**
     * Deletes one or more of a particular user's associated demographics entries. notes: - if entry ids are provided, only those specific entries will be deleted - if entry ids are not provided, all demographics entries for the user will be deleted requires oauth2 scope: - demographics:user:delete available in api versions 1.46+ (lms v20.24.3+)
     */
    DELETE_USER_DEMOGRAPHICS: "D2LBRIGHTSPACE_DELETE_USER_DEMOGRAPHICS",
    /**
     * Retrieves a specific course offering from d2l brightspace. returns a courseoffering json block with the course's information. requires oauth2 scope: - orgunits:course:read available in api versions 1.46+ (lms v20.24.3+)
     */
    GET_A_COURSE_OFFERING: "D2LBRIGHTSPACE_GET_A_COURSE_OFFERING",
    /**
     * Retrieves a course template from d2l brightspace. returns a coursetemplate json block with the template's information. available in api versions 1.46+ (lms v20.24.3+)
     */
    GET_A_COURSE_TEMPLATE: "D2LBRIGHTSPACE_GET_A_COURSE_TEMPLATE",
    /**
     * Retrieves the list of parent org unit type constraints for course offerings. returns a json array of schemaelement blocks defining the allowed parent organizational unit types for courses. available in api versions 1.46+ (lms v20.24.3+)
     */
    GET_COURSE_SCHEMA: "D2LBRIGHTSPACE_GET_COURSE_SCHEMA",
    /**
     * Retrieves the list of parent org unit type constraints for course offerings built on this template. returns a json array of schemaelement blocks defining the allowed parent organizational unit types for course templates. available in api versions 1.46+ (lms v20.24.3+)
     */
    GET_COURSE_TEMPLATE_SCHEMA: "D2LBRIGHTSPACE_GET_COURSE_TEMPLATE_SCHEMA",
    /**
     * Retrieves the current user context's user information from d2l brightspace. requires one of these oauth2 scopes: - users:profile:read - users:own profile:read available in api versions 1.46+ (lms v20.24.3+)
     */
    GET_CURRENT_USER: "D2LBRIGHTSPACE_GET_CURRENT_USER",
    /**
     * Retrieves a list of all enrolled user roles the calling user can view in an org unit. returns a json array of role data blocks containing the properties of all user roles that the calling user context has permission to view and that are currently enrolled in the provided org unit. requires oauth2 scope: - role:detail:read available in api versions 1.46+ (lms v20.24.3+)
     */
    GET_ENROLLED_ROLES: "D2LBRIGHTSPACE_GET_ENROLLED_ROLES",
    /**
     * Retrieves a list of users with access to a specified grade. returns an objectlistpage containing useraccess blocks. can optionally filter by specific user id or role id. requires oauth2 scope: - grades:access:read available in api versions 1.75+ (lms v20.24.5+)
     */
    GET_GRADE_ACCESS: "D2LBRIGHTSPACE_GET_GRADE_ACCESS",
    /**
     * Retrieves a specific grade object for a particular org unit. returns a gradeobject json block containing the grade object's properties. requires oauth2 scope: - grades:gradeobjects:read available in api versions 1.75+ (lms v20.24.5+)
     */
    GET_GRADE_OBJECT: "D2LBRIGHTSPACE_GET_GRADE_OBJECT",
    /**
     * Retrieves all current grade objects for a particular org unit. returns an array of grade objects. requires oauth2 scope: - grades:gradeobjects:read available in api versions 1.75+ (lms v20.24.5+)
     */
    GET_GRADE_OBJECTS: "D2LBRIGHTSPACE_GET_GRADE_OBJECTS",
    /**
     * Retrieves the grades configuration for an org unit. returns a gradesetupinfo json block containing the grades setup information. requires oauth2 scope: - grades:gradesettings:read available in api versions 1.75+ (lms v20.24.5+)
     */
    GET_GRADE_SETUP: "D2LBRIGHTSPACE_GET_GRADE_SETUP",
    /**
     * Retrieves statistics for a specified grade item. returns a gradestatisticsinfo json block containing statistical data about the grade item. requires oauth2 scope: - grades:gradestatistics:read available in api versions 1.75+ (lms v20.24.5+)
     */
    GET_GRADE_STATISTICS: "D2LBRIGHTSPACE_GET_GRADE_STATISTICS",
    /**
     * Retrieves all demographics entries for users enrolled in a particular org unit. notes: - filters are applied cumulatively (all conditions must match) - when using id lists in filters, matching any id in the list satisfies that filter - for example: with roleids=[1,2], userids=[3,4], search="value": * users must have role 1 or 2 (either role matches) * and must have id 3 or 4 (either id matches) * and must have a field matching "value" - results are paged; use bookmark parameter for subsequent pages requires oauth2 scope: - demographics:orgunit:read available in api versions 1.46+ (lms v20.24.3+)
     */
    GET_ORG_UNIT_DEMOGRAPHICS: "D2LBRIGHTSPACE_GET_ORG_UNIT_DEMOGRAPHICS",
    /**
     * Retrieves a specific quiz from an org unit. returns a quizreaddata json block containing the quiz's properties. requires oauth2 scope: - quizzing:quizzes:read available in api versions 1.75+ (lms v20.24.5+)
     */
    GET_QUIZ: "D2LBRIGHTSPACE_GET_QUIZ",
    /**
     * Retrieves all quizzes belonging to an org unit. returns an objectlistpage json block containing a list of quizreaddata blocks. requires oauth2 scope: - quizzing:quizzes:read available in api versions 1.75+ (lms v20.24.5+)
     */
    GET_QUIZZES: "D2LBRIGHTSPACE_GET_QUIZZES",
    /**
     * Retrieves a list of users with access to a specified quiz. returns an objectlistpage json block containing a list of useraccess blocks. can filter by specific user id or role id. requires oauth2 scope: - quizzing:access:read available in api versions 1.75+ (lms v20.24.5+)
     */
    GET_QUIZ_ACCESS: "D2LBRIGHTSPACE_GET_QUIZ_ACCESS",
    /**
     * Retrieves a specific quiz attempt. returns a quizattemptdata json block containing the attempt's properties. requires oauth2 scope: - quizzing:attempts:read available in api versions 1.75+ (lms v20.24.5+)
     */
    GET_QUIZ_ATTEMPT: "D2LBRIGHTSPACE_GET_QUIZ_ATTEMPT",
    /**
     * Retrieves a list of attempts for a quiz. can optionally filter attempts for a specific user. returns an objectlistpage json block containing a list of quizattemptdata blocks. requires oauth2 scope: - quizzing:attempts:read available in api versions 1.75+ (lms v20.24.5+)
     */
    GET_QUIZ_ATTEMPTS: "D2LBRIGHTSPACE_GET_QUIZ_ATTEMPTS",
    /**
     * Retrieves all quiz categories belonging to an org unit. returns an objectlistpage json block containing a list of quizcategoryreaddata blocks. requires oauth2 scope: - quizzing:quizzes:read available in api versions 1.75+ (lms v20.24.5+)
     */
    GET_QUIZ_CATEGORIES: "D2LBRIGHTSPACE_GET_QUIZ_CATEGORIES",
    /**
     * Retrieves a specific quiz category from an org unit. returns a quizcategoryreaddata json block containing the category's properties. requires oauth2 scope: - quizzing:quizzes:read available in api versions 1.75+ (lms v20.24.5+)
     */
    GET_QUIZ_CATEGORY: "D2LBRIGHTSPACE_GET_QUIZ_CATEGORY",
    /**
     * Retrieves all questions in a quiz. returns an objectlistpage json block containing a list of questiondata blocks. requires oauth2 scope: - quizzing:quizzes:read available in api versions 1.75+ (lms v20.24.5+)
     */
    GET_QUIZ_QUESTIONS: "D2LBRIGHTSPACE_GET_QUIZ_QUESTIONS",
    /**
     * Retrieves a list of all known user roles in d2l brightspace. returns a list of role data blocks containing the properties of all user roles that the calling user context has permission to manage. requires oauth2 scope: - role:detail:read available in api versions 1.46+ (lms v20.24.3+)
     */
    GET_ROLES: "D2LBRIGHTSPACE_GET_ROLES",
    /**
     * Retrieves a particular user role from d2l brightspace by its id. requires oauth2 scope: - role:detail:read available in api versions 1.46+ (lms v20.24.3+)
     */
    GET_ROLE_BY_ID: "D2LBRIGHTSPACE_GET_ROLE_BY_ID",
    /**
     * Retrieves data for one or more users from d2l brightspace. requires oauth2 scope: - users:userdata:read available in api versions 1.46+ (lms v20.24.3+) notes: - all search parameters (orgdefinedid, username, externalemail) are optional - returns paginated results when using bookmark parameter
     */
    GET_USERS: "D2LBRIGHTSPACE_GET_USERS",
    /**
     * Retrieves data for a particular user from d2l brightspace. requires oauth2 scope: - users:userdata:read available in api versions 1.46+ (lms v20.24.3+)
     */
    GET_USER_BY_ID: "D2LBRIGHTSPACE_GET_USER_BY_ID",
    /**
     * Updates an existing course offering in d2l brightspace. notes: - course code limitations: max 50 chars, no special chars: \ : * ? " < > | ' # , % & - startdate/enddate: null values won't overwrite existing dates - canselfregister: required for api v1.27+, not supported before v1.27 - description: ignored in api versions 1.25 and earlier requires oauth2 scope: - orgunits:course:update available in api versions 1.46+ (lms v20.24.3+)
     */
    UPDATE_A_COURSE_OFFERING: "D2LBRIGHTSPACE_UPDATE_A_COURSE_OFFERING",
    /**
     * Updates an existing course template in d2l brightspace. notes: - this action completely replaces the template's data with the provided values - course template code limitations: max 50 chars, no special chars: \ : * ? " < > | ' # , % & available in api versions 1.46+ (lms v20.24.3+)
     */
    UPDATE_A_COURSE_TEMPLATE: "D2LBRIGHTSPACE_UPDATE_A_COURSE_TEMPLATE",
    /**
     * Updates a specific grade object. the grade object can be one of four types: 1. numeric: for numeric grades with max points 2. passfail: for pass/fail assessments 3. selectbox: for predefined grade options 4. text: for text-only feedback note: the provided data completely replaces the existing grade object's data. returns a gradeobject json block containing the updated grade object's data. requires oauth2 scope: - grades:gradeobjects:write available in api versions 1.75+ (lms v20.24.5+)
     */
    UPDATE_GRADE_OBJECT: "D2LBRIGHTSPACE_UPDATE_GRADE_OBJECT",
    /**
     * Updates the grades configuration for an org unit. expects a gradesetupinfo json block containing: - gradingsystem: the grading system type - isnullgradezero: whether null grades should be treated as zero - defaultgradeschemeid: id of the default grade scheme returns the updated gradesetupinfo json block. requires oauth2 scope: - grades:gradesettings:write available in api versions 1.75+ (lms v20.24.5+)
     */
    UPDATE_GRADE_SETUP: "D2LBRIGHTSPACE_UPDATE_GRADE_SETUP",
    /**
     * Updates an existing quiz in d2l brightspace. notes: - this action updates only the provided quiz properties - numberofattemptsallowed must be between 1 and 10 (inclusive) or null for unlimited - password must not be empty or whitespace if provided - notificationemail must be a valid email address if provided - timelimitvalue: 0 for no limit (with isenforced false), or 1-9999 for enforced limit - deductionpercentage must be between 0 and 100 if provided - cannot restrict shared quizzes for special access - cannot set auto-submit for quizzes with mandatory questions - as of le api v1.71: - latelimitminutes is ignored - latesubmissionoption 1 is treated as 2 (autosubmitattempt) - submissiongraceperiod is not used - pagingtypeid added in le api v1.78 - date fields should be in utc format requires oauth2 scopes: - quizzing:quizzes:read - quizzing:quizzes:write available in api versions 1.75+ (lms v20.24.5+)
     */
    UPDATE_QUIZ: "D2LBRIGHTSPACE_UPDATE_QUIZ",
    /**
     * Updates an existing quiz category in d2l brightspace. returns a quizcategoryreaddata json block containing: - categoryid: the id of the category - name: the name of the category - sortorder: the sort order value requires oauth2 scopes: - quizzing:quizzes:read - quizzing:quizzes:write available in api versions 1.75+ (lms v20.24.5+)
     */
    UPDATE_QUIZ_CATEGORY: "D2LBRIGHTSPACE_UPDATE_QUIZ_CATEGORY",
    /**
     * Updates an existing user entity in d2l brightspace. requires oauth2 scope: - users:userdata:update available in api versions 1.46+ (lms v20.24.3+) notes: - firstname and lastname update preferred names if set, otherwise update legal names - externalemail must be null or a valid email address - orgdefinedid must be unique across the organization if provided - pronouns: use empty string ("") to reset, null to keep existing value
     */
    UPDATE_USER: "D2LBRIGHTSPACE_UPDATE_USER",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "D2LBRIGHTSPACE".
 */
export type D2LBRIGHTSPACE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "D2LBRIGHTSPACE".
 */
export type D2LBRIGHTSPACE_TRIGGER_EVENTS = {}
