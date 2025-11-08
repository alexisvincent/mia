// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of AGENCYZOOM's AGENCYZOOM_AUTHENTICATE_FOR_JWTVIA_V4_SSO tool input.
 */
type AGENCYZOOM_AUTHENTICATE_FOR_JWTVIA_V4_SSO_INPUT = {
  /**
   * Code
   * @description Callback code from the V4SSO authentication process to finalize the SSO handshake and retrieve a JWT.
   */
  code?: string;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_AUTHENTICATE_FOR_JWTVIA_V4_SSO tool output.
 */
type AGENCYZOOM_AUTHENTICATE_FOR_JWTVIA_V4_SSO_OUTPUT = {
  /**
   * Data
   * @description Contains the JWT and owner agent status after successful authentication.
   */
  data?: {
      /**
       * Jwt
       * @description JSON Web Token (JWT) generated upon successful V4SSO authentication.
       * @default null
       */
      jwt: string | null;
      /**
       * Owner Agent
       * @description Indicates if the authenticated user is an owner agent.
       * @default null
       */
      ownerAgent: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_BATCH_CREATE_CONTACT tool input.
 */
type AGENCYZOOM_BATCH_CREATE_CONTACT_INPUT = {
  /**
   * Contact Data Requests
   * @description A list of contact data objects, each defining a new contact to be created. Up to 5 contacts can be included in a single request.
   */
  contactDataRequests?: {
      /**
       * Address1
       * @description The primary street address for the contact (e.g., 123 Main St).
       */
      address1?: string;
      /**
       * Birthday
       * @description The contact's birthday in 'mm/dd/yy' format.
       */
      birthday?: string;
      /**
       * City
       * @description The city for the contact's address.
       */
      city?: string;
      /**
       * Country
       * @description The country for the contact's address.
       */
      country?: string;
      /**
       * Customer Id
       * @description Optional Customer ID to associate with the contact.
       */
      customerId?: number;
      /**
       * Email
       * @description The contact's email address.
       */
      email?: string;
      /**
       * Firstname
       * @description The first name of the contact.
       */
      firstname: string;
      /**
       * Lastname
       * @description The last name of the contact.
       */
      lastname: string;
      /**
       * Middlename
       * @description Optional middle name of the contact.
       */
      middlename?: string;
      /**
       * Phone
       * @description The contact's phone number.
       */
      phone?: string;
      /**
       * State
       * @description The state or province for the contact's address (e.g., CA, NY).
       */
      state?: string;
      /**
       * Zip
       * @description The postal code (e.g., ZIP code) for the contact's address.
       */
      zip?: string;
  }[];
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_BATCH_CREATE_CONTACT tool output.
 */
type AGENCYZOOM_BATCH_CREATE_CONTACT_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed result of the batch contact creation process.
   */
  data?: {
      /**
       * Id
       * @description A unique identifier associated with the batch operation, such as a batch ID or an ID of one of the created contacts.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional confirmation or status message regarding the batch operation.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates the overall success of the batch operation. `true` if successful (represented as 1), `false` otherwise (represented as 0).
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_BATCH_CREATE_LEAD tool input.
 */
type AGENCYZOOM_BATCH_CREATE_LEAD_INPUT = {
  /**
   * Lead Data Requests
   * @description List of lead data objects. A maximum of 5 leads can be created per request.
   */
  leadDataRequests?: {
      /**
       * Agency Number
       * @description Agency location code associated with the lead.
       */
      agencyNumber?: string;
      /**
       * Assign To
       * @description ID of an existing producer or agent user in AgencyZoom.
       */
      assignTo: string;
      /**
       * Assignment Group Id
       * @description ID of an existing assignment group in AgencyZoom.
       */
      assignmentGroupId?: number;
      /**
       * Birthday
       * @description Lead's birthday. Format: MM/DD/YY.
       */
      birthday?: string;
      /**
       * City
       * @description Lead's city of address.
       */
      city?: string;
      /**
       * Contact Date
       * @description Date of last contact with the lead. Recommended format: YYYY-MM-DD.
       */
      contactDate?: string;
      /**
       * Country
       * @description Lead's country of address (e.g., US, CA).
       */
      country: string;
      /**
       * Csr Id
       * @description ID of an existing CSR user in AgencyZoom.
       */
      csrId?: number;
      /**
       * Custom Fields
       * @description List of custom fields. The `fieldName` in each must correspond to a pre-defined custom field in AgencyZoom.
       */
      customFields?: {
          /**
           * Field Name
           * @description Name of the custom field. Must match an existing definition in AgencyZoom. Use 'getCustomFieldDefs' for valid names.
           */
          fieldName?: string;
          /**
           * Field Value
           * @description Value(s) for the custom field. Typically a list with one string, but can be multiple for multi-select field types.
           */
          fieldValue?: string[];
      }[];
      /**
       * Department Code
       * @description Department code associated with the lead.
       */
      departmentCode?: string;
      /**
       * Email
       * @description Lead's primary email address.
       */
      email: string;
      /**
       * Firstname
       * @description Lead's first name.
       */
      firstname: string;
      /**
       * Group Code
       * @description Group code associated with the lead.
       */
      groupCode?: string;
      /**
       * Is Business
       * @description Indicates if the lead is a business (`true`) or an individual (`false`).
       */
      isBusiness?: boolean;
      /**
       * Lastname
       * @description Lead's last name.
       */
      lastname?: string;
      /**
       * Lead Source Id
       * @description ID of an existing lead source in AgencyZoom.
       */
      leadSourceId: number;
      /**
       * Marital Status
       * @description ID for the lead's marital status. Refer to AgencyZoom settings for specific ID values.
       */
      maritalStatus?: number;
      /**
       * Middlename
       * @description Lead's middle name.
       */
      middlename?: string;
      /**
       * Name
       * @description Organization name. Required if `isBusiness` is true.
       */
      name?: string;
      /**
       * Next Expiration Date
       * @description Next policy expiration date for the lead. Format: MM/DD/YY.
       */
      nextExpirationDate?: string;
      /**
       * Nickname
       * @description Lead's nickname.
       */
      nickname?: string;
      /**
       * Notes
       * @description Notes or additional information about the lead.
       */
      notes?: string;
      /**
       * Other Csrs
       * @description List of IDs for other assigned CSRs. IDs must correspond to existing users in AgencyZoom.
       */
      otherCsrs?: number[];
      /**
       * Other Producers
       * @description List of IDs for other assigned producers/agents. IDs must correspond to existing users in AgencyZoom.
       */
      otherProducers?: number[];
      /**
       * Phone
       * @description Lead's primary phone number.
       */
      phone?: string;
      /**
       * Pipeline Id
       * @description ID of an existing sales pipeline in AgencyZoom.
       */
      pipelineId: number;
      /**
       * Quote Date
       * @description Date a quote was provided to the lead. Recommended format: YYYY-MM-DD.
       */
      quoteDate?: string;
      /**
       * Secondary Email
       * @description Lead's alternative email address.
       */
      secondaryEmail?: string;
      /**
       * Secondary Phone
       * @description Lead's alternative phone number.
       */
      secondaryPhone?: string;
      /**
       * Sold Date
       * @description Date the lead was marked as sold. Recommended format: YYYY-MM-DD.
       */
      soldDate?: string;
      /**
       * Stage Id
       * @description ID of an existing stage in AgencyZoom for the given `pipelineId`.
       */
      stageId: number;
      /**
       * State
       * @description Lead's state or province of address (e.g., CA, TX).
       */
      state?: string;
      /**
       * Street Address
       * @description Lead's street address.
       */
      streetAddress?: string;
      /**
       * Street Address Line2
       * @description Lead's additional street address information (e.g., apartment, suite).
       */
      streetAddressLine2?: string;
      /**
       * Tag Names
       * @description Semicolon-separated list of tag names. Tags must already exist in AgencyZoom.
       */
      tagNames?: string;
      /**
       * X Date
       * @description X-date (typically policy expiration or renewal date) for the lead. Recommended format: YYYY-MM-DD.
       */
      xDate?: string;
      /**
       * Zip
       * @description Lead's postal or ZIP code.
       */
      zip?: string;
  }[];
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_BATCH_CREATE_LEAD tool output.
 */
type AGENCYZOOM_BATCH_CREATE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Result of the batch lead creation, including success status and messages.
   */
  data?: {
      /**
       * Id
       * @description Identifier for the batch operation, if applicable.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Message detailing the batch operation outcome.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Overall success of the batch operation (`true` if successful).
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_BATCH_DELETE_TASK tool input.
 */
type AGENCYZOOM_BATCH_DELETE_TASK_INPUT = {
  /**
   * Task Ids
   * @description List of unique numerical identifiers for the tasks to be deleted.
   */
  taskIds?: number[];
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_BATCH_DELETE_TASK tool output.
 */
type AGENCYZOOM_BATCH_DELETE_TASK_OUTPUT = {
  /**
   * Data
   * @description Contains details regarding the outcome of the batch task deletion request.
   */
  data?: {
      /**
       * Id
       * @description An optional unique identifier associated with this response instance or the batch operation.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional message providing additional information or confirmation about the batch deletion operation.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates if the batch deletion request was successfully processed as a whole. True for success, False otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CHANGE_STATUS_FOR_LEAD tool input.
 */
type AGENCYZOOM_CHANGE_STATUS_FOR_LEAD_INPUT = {
  /**
   * Change Lead Source To
   * @description Identifier for a new lead source to assign, updating the lead's origin.
   * @default null
   */
  changeLeadSourceTo: number | null;
  /**
   * Date
   * @description Date for the status change. If status is 5 (XDATED), this is the reactivation date (e.g., 'YYYY-MM-DD'); otherwise, it can be contact or quoted date.
   * @default null
   */
  date: string | null;
  /**
   * Lead Id
   * @description Unique identifier of the lead to be updated (path parameter).
   */
  leadId?: number;
  /**
   * Loss Reason Id
   * @description Identifier for the loss reason. Recommended if status is 3 (LOST).
   * @default null
   */
  lossReasonId: number | null;
  /**
   * Recycle To Pipeline
   * @description ID of the pipeline to move the lead to if it is being recycled.
   * @default null
   */
  recycleToPipeline: number | null;
  /**
   * Recycle To Stage
   * @description ID of the stage to move the lead to if it is being recycled.
   * @default null
   */
  recycleToStage: number | null;
  /**
   * Status
   * @description New status for the lead: 0 (ACTIVE), 2 (WON), 3 (LOST), 5 (XDATED).
   */
  status?: number;
  /**
   * Tag Ids
   * @description List of tag IDs to associate with the lead.
   * @default null
   */
  tagIds: number[] | null;
  /**
   * To Stage Id
   * @description ID of a specific workflow stage for direct assignment, irrespective of recycling.
   * @default null
   */
  toStageId: number | null;
  /**
   * Workflow Id
   * @description Identifier of the workflow to associate; if provided, the lead moves to this workflow.
   * @default null
   */
  workflowId: number | null;
  /**
   * Workflow Stage Id
   * @description Identifier of the stage within the specified workflow to move the lead to.
   * @default null
   */
  workflowStageId: number | null;
  /**
   * X Date Type
   * @description Type or reason for the X-date, used if status is 5 (XDATED) (e.g., a predefined X-date recycle event name).
   * @default null
   */
  xDateType: string | null;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CHANGE_STATUS_FOR_LEAD tool output.
 */
type AGENCYZOOM_CHANGE_STATUS_FOR_LEAD_OUTPUT = {
  /**
   * Data
   * @description Response data including success status, message, and the ID of the updated lead.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the updated lead.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Message detailing the outcome, e.g., 'Lead status updated successfully.'
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description True if the status change was successful, false otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_COMPLETE_TASK tool input.
 */
type AGENCYZOOM_COMPLETE_TASK_INPUT = {
  /**
   * Task Id
   * @description Unique identifier of the task to be marked as completed.
   */
  taskId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_COMPLETE_TASK tool output.
 */
type AGENCYZOOM_COMPLETE_TASK_OUTPUT = {
  /**
   * Data
   * @description Outcome of the task completion, including success indicator, task ID, and optional message.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the task processed for completion.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Optional message detailing the outcome of the task completion.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates if the task was successfully marked as completed (`true`) or not (`false`).
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_AN_OPPORTUNITY tool input.
 */
type AGENCYZOOM_CREATE_AN_OPPORTUNITY_INPUT = {
  /**
   * Carrier Id
   * @description Identifier for the insurance carrier associated with the opportunity.
   */
  carrierId?: number;
  /**
   * Custom Fields
   * @description A list of custom field objects to associate with the opportunity. If a custom field's value is a date, it must be in MM/dd/YYYY format.
   */
  customFields?: {
      /**
       * Field Name
       * @description Name of the custom field; see AgencyZoom documentation for available field names.
       */
      fieldName?: string;
      /**
       * Field Value
       * @description Value of the custom field. Use 'MM/dd/YYYY' for date types. For fields supporting multiple options, provide a list of selected option strings.
       */
      fieldValue?: string[];
  }[];
  /**
   * Customer Referral Id
   * @description Identifier for the lead associated with this opportunity.
   */
  customerReferralId?: number;
  /**
   * Expiry Date
   * @description The expiration date of the policy or opportunity, in MM/dd/YYYY format.
   */
  expiryDate?: string;
  /**
   * Items
   * @description The number of items related to this opportunity, such as number of policies or vehicles.
   * @default 1
   */
  items: number;
  /**
   * Premium
   * @description The premium amount for the opportunity.
   */
  premium?: number;
  /**
   * Product Line Id
   * @description Identifier for the policy type (product line) of the opportunity.
   */
  productLineId?: number;
  /**
   * Property  Address1
   * @description Primary street address line for the property.
   */
  property__address1?: string;
  /**
   * Property  Address2
   * @description Secondary street address line for the property (e.g., apartment, suite, unit number).
   */
  property__address2?: string;
  /**
   * Property  City
   * @description The city name for the property, e.g., Monticello.
   */
  property__city?: string;
  /**
   * Property  Country
   * @description The country code for the property, e.g., USA.
   */
  property__country?: string;
  /**
   * Property  State
   * @description The state code for the property, e.g., FL for Florida.
   */
  property__state?: string;
  /**
   * Property  Use Mailing Address As Location
   * @description Indicates if the lead's mailing address is used as the property location (1 for true, 0 for false). The API defaults to 1 (true) if not specified, using the lead's address for the opportunity's property.
   */
  property__useMailingAddressAsLocation?: number;
  /**
   * Property  Zip
   * @description The ZIP code for the property associated with the opportunity.
   */
  property__zip?: string;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_AN_OPPORTUNITY tool output.
 */
type AGENCYZOOM_CREATE_AN_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description The response payload containing details of the creation attempt, including the new opportunity's ID, a message, and a success flag.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier assigned to the newly created opportunity.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional confirmation message or status related to the operation.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description A boolean-like indicator of the operation's success: 1 for true (success), 0 for false (failure).
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_A_CUSTOMER_NOTE tool input.
 */
type AGENCYZOOM_CREATE_A_CUSTOMER_NOTE_INPUT = {
  /**
   * Customer Id
   * @description The unique identifier of the customer to whom the note will be added.
   */
  customerId?: number;
  /**
   * Note
   * @description The textual content of the note to be added to the customer's profile.
   */
  note?: string;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_A_CUSTOMER_NOTE tool output.
 */
type AGENCYZOOM_CREATE_A_CUSTOMER_NOTE_OUTPUT = {
  /**
   * Data
   * @description Contains the details of the created note, including its ID and a confirmation message.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the newly created note.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional confirmation message regarding the note creation.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates if the note creation was successful. `True` for success, `False` otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_A_DRIVER_FOR_AN_OPPORTUNITY tool input.
 */
type AGENCYZOOM_CREATE_A_DRIVER_FOR_AN_OPPORTUNITY_INPUT = {
  /**
   * Opportunity Id
   * @description The unique identifier of the opportunity to which the new driver will be associated.
   */
  opportunityId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_A_DRIVER_FOR_AN_OPPORTUNITY tool output.
 */
type AGENCYZOOM_CREATE_A_DRIVER_FOR_AN_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description Contains the result of the driver creation operation, including the new driver's ID and a status message.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the newly created driver record, if the operation was successful and a driver was created.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional message providing more details about the operation's outcome, such as a success confirmation or error information.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description A boolean indicating the overall success of the operation. `True` for success, `False` for failure.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_A_LEAD_NOTE tool input.
 */
type AGENCYZOOM_CREATE_A_LEAD_NOTE_INPUT = {
  /**
   * Lead Id
   * @description Unique identifier of the lead to associate the note with.
   */
  leadId?: number;
  /**
   * Note
   * @description Textual content of the note to be created for the lead.
   */
  note?: string;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_A_LEAD_NOTE tool output.
 */
type AGENCYZOOM_CREATE_A_LEAD_NOTE_OUTPUT = {
  /**
   * Data
   * @description Contains the details of the created note, including its ID and a confirmation message.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the newly created note.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Message providing details about the outcome of the note creation (e.g., 'Note created successfully').
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates the success of the note creation; `true` for success, `false` for failure.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_A_LEAD_OPPORTUNITY tool input.
 */
type AGENCYZOOM_CREATE_A_LEAD_OPPORTUNITY_INPUT = {
  /**
   * Carrier Id
   * @description The unique identifier of the insurance carrier associated with this opportunity.
   */
  carrierId?: number;
  /**
   * Custom Fields
   * @description Custom fields to associate with this opportunity. `fieldName` must match a pre-defined field. Date-type `fieldValue` must be 'MM/dd/YYYY'.
   */
  customFields?: {
      /**
       * Field Name
       * @description Name of the custom field, must match an existing custom field definition in AgencyZoom.
       */
      fieldName?: string;
      /**
       * Field Value
       * @description Value(s) for the custom field. Use 'MM/dd/YYYY' format for date-type fields.
       */
      fieldValue?: string[];
  }[];
  /**
   * Items
   * @description Number of items in this opportunity (e.g., number of vehicles for auto policy). Defaults to 1.
   * @default 1
   */
  items: number;
  /**
   * Lead Id
   * @description The unique identifier of the existing lead to which this opportunity will be added.
   */
  leadId?: number;
  /**
   * Premium
   * @description The estimated or actual premium amount for this opportunity.
   */
  premium?: number;
  /**
   * Product Line Id
   * @description The unique identifier of the product line (e.g., Auto, Home, Life) for this opportunity.
   */
  productLineId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_A_LEAD_OPPORTUNITY tool output.
 */
type AGENCYZOOM_CREATE_A_LEAD_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed response from the server, including any messages, the new opportunity's ID, and success status.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the newly created opportunity.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional confirmation or status message related to the operation.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates the outcome of the operation: true (or 1) for success, false (or 0) for failure.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_A_LEAD_QUOTE tool input.
 */
type AGENCYZOOM_CREATE_A_LEAD_QUOTE_INPUT = {
  /**
   * Carrier Id
   * @description Unique identifier of the insurance carrier.
   */
  carrierId?: number;
  /**
   * Custom Fields
   * @description Optional list of custom fields and their values.
   */
  customFields?: {
      /**
       * Field Name
       * @description Name of a pre-defined custom field in AgencyZoom. Use `getCustomFieldDefs` to find available names.
       */
      fieldName?: string;
      /**
       * Field Value
       * @description Value(s) for the custom field. Typically a single string, but a list of strings for multi-select fields.
       */
      fieldValue?: string[];
  }[];
  /**
   * Items
   * @description Number of items or units covered (e.g., vehicles for an auto policy); meaning may vary by product line.
   */
  items?: number;
  /**
   * Lead Id
   * @description Unique identifier of the lead for this quote.
   */
  leadId?: number;
  /**
   * Premium
   * @description Total premium amount in the smallest currency unit (e.g., cents for USD: 125075 means $1250.75).
   */
  premium?: number;
  /**
   * Product Line Id
   * @description Unique identifier of the product line (e.g., Auto, Home).
   */
  productLineId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_A_LEAD_QUOTE tool output.
 */
type AGENCYZOOM_CREATE_A_LEAD_QUOTE_OUTPUT = {
  /**
   * Data
   * @description Details of the created lead quote, including ID and status.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the created lead quote.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Optional confirmation or status message.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description True if quote creation was successful, False otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_A_VEHICLE_FOR_AN_OPPORTUNITY tool input.
 */
type AGENCYZOOM_CREATE_A_VEHICLE_FOR_AN_OPPORTUNITY_INPUT = {
  /**
   * Make
   * @description Manufacturer of the vehicle (e.g., Toyota, Ford).
   */
  make?: string;
  /**
   * Model
   * @description Model of the vehicle (e.g., Camry, Civic).
   */
  model?: string;
  /**
   * Opportunity Id
   * @description Identifier of the opportunity to associate the vehicle with.
   */
  opportunityId?: number;
  /**
   * Ownership
   * @description Ownership status. Defaults to 'Owned' if not provided.
   * @enum {string}
   */
  ownership?: "Financed" | "Leased" | "Owned";
  /**
   * Vin
   * @description Vehicle Identification Number (VIN); typically 17 characters.
   */
  vin?: string;
  /**
   * Year
   * @description Manufacturing year of the vehicle (e.g., 2023).
   */
  year?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_A_VEHICLE_FOR_AN_OPPORTUNITY tool output.
 */
type AGENCYZOOM_CREATE_A_VEHICLE_FOR_AN_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description Result of vehicle creation, including new vehicle ID and success status.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the created vehicle, if successful.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Optional confirmation or status message.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates outcome: `true` if successful, `false` otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_BIZ_LEAD tool input.
 */
type AGENCYZOOM_CREATE_BIZ_LEAD_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_BIZ_LEAD tool output.
 */
type AGENCYZOOM_CREATE_BIZ_LEAD_OUTPUT = {
  /**
   * Data
   * @description Details of the operation outcome, including lead ID and status messages.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier for the created or updated business lead.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Confirmation or informational message from the API.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates operation success (true/1) or failure (false/0).
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_LEAD tool input.
 */
type AGENCYZOOM_CREATE_LEAD_INPUT = {
  /**
   * Agency Number
   * @description The agency location code associated with the lead, if applicable.
   */
  agencyNumber?: string;
  /**
   * Assign To
   * @description The unique identifier (ID) of the producer or agent to whom the lead is assigned.
   */
  assignTo?: string;
  /**
   * Assignment Group Id
   * @description The unique identifier of the assignment group responsible for the lead.
   */
  assignmentGroupId?: number;
  /**
   * Birthday
   * @description The lead's date of birth, in MM/DD/YY format.
   */
  birthday?: string;
  /**
   * City
   * @description The city of the lead's address.
   */
  city?: string;
  /**
   * Contact Date
   * @description The date of the last contact with the lead, preferably in YYYY-MM-DD format.
   */
  contactDate?: string;
  /**
   * Country
   * @description The country of the lead's address (e.g., US, CA).
   */
  country?: string;
  /**
   * Csr Id
   * @description The unique identifier of the Customer Service Representative (CSR) assigned to the lead.
   */
  csrId?: number;
  /**
   * Custom Fields
   * @description A list of custom field objects, each specifying a field name and its value(s) for the lead.
   */
  customFields?: {
      /**
       * Field Name
       * @description Name of the custom field. To find available field names, refer to the GET /v1/api/custom-field-definitions endpoint or your AgencyZoom custom field settings.
       */
      fieldName?: string;
      /**
       * Field Value
       * @description Value(s) for the custom field. For most custom field types, this will be a list containing a single string. For custom fields that support multiple selections (e.g., multi-select dropdowns), this can be a list of strings.
       */
      fieldValue?: string[];
  }[];
  /**
   * Department Code
   * @description The department code associated with the lead, if applicable.
   */
  departmentCode?: string;
  /**
   * Email
   * @description The primary email address of the lead.
   */
  email?: string;
  /**
   * Firstname
   * @description The first name of the lead.
   */
  firstname?: string;
  /**
   * Group Code
   * @description The group code associated with the lead, if applicable.
   */
  groupCode?: string;
  /**
   * Is Business
   * @description Indicates whether the lead is a business entity (True) or an individual consumer (False).
   */
  isBusiness?: boolean;
  /**
   * Lastname
   * @description The last name of the lead.
   */
  lastname?: string;
  /**
   * Lead Source Id
   * @description The unique identifier of the lead source (e.g., 'Website', 'Referral').
   */
  leadSourceId?: number;
  /**
   * Marital Status
   * @description An integer code representing the lead's marital status. The specific mapping of integers to statuses (e.g., 1 for Single, 2 for Married) should be confirmed within your AgencyZoom system configuration or API documentation.
   */
  maritalStatus?: number;
  /**
   * Middlename
   * @description The middle name of the lead.
   */
  middlename?: string;
  /**
   * Name
   * @description The name of the organization or company, required if 'isBusiness' is True.
   */
  name?: string;
  /**
   * Next Expiration Date
   * @description The next important expiration date related to the lead (e.g., current policy expiration), in MM/DD/YY format.
   */
  nextExpirationDate?: string;
  /**
   * Nickname
   * @description An informal name or nickname for the lead.
   */
  nickname?: string;
  /**
   * Notes
   * @description Additional notes or comments about the lead.
   */
  notes?: string;
  /**
   * Other Csrs
   * @description A list of unique identifiers for other Customer Service Representatives (CSRs) also assigned to or associated with this lead.
   */
  otherCsrs?: number[];
  /**
   * Other Producers
   * @description A list of unique identifiers for other producers or agents also assigned to or associated with this lead.
   */
  otherProducers?: number[];
  /**
   * Phone
   * @description The primary phone number of the lead.
   */
  phone?: string;
  /**
   * Pipeline Id
   * @description The unique identifier of the sales pipeline to which the lead will be added.
   */
  pipelineId?: number;
  /**
   * Quote Date
   * @description The date when a quote was provided to the lead, preferably in YYYY-MM-DD format.
   */
  quoteDate?: string;
  /**
   * Secondary Email
   * @description An alternative or secondary email address for the lead.
   */
  secondaryEmail?: string;
  /**
   * Secondary Phone
   * @description An alternative or secondary phone number for the lead.
   */
  secondaryPhone?: string;
  /**
   * Sold Date
   * @description The date when the lead was marked as sold, preferably in YYYY-MM-DD format.
   */
  soldDate?: string;
  /**
   * Stage Id
   * @description The unique identifier of the stage within the specified pipeline where the lead will be placed.
   */
  stageId?: number;
  /**
   * State
   * @description The state or province of the lead's address (e.g., CA, TX, NY).
   */
  state?: string;
  /**
   * Street Address
   * @description The primary street address of the lead.
   */
  streetAddress?: string;
  /**
   * Street Address Line2
   * @description Additional street address information (e.g., apartment, suite, or unit number).
   */
  streetAddressLine2?: string;
  /**
   * Tag Names
   * @description A single string containing multiple tag names, separated by semicolons (;). These tags help categorize or segment the lead.
   */
  tagNames?: string;
  /**
   * X Date
   * @description The X-date (e.g., policy expiration or renewal date) associated with the lead, preferably in YYYY-MM-DD format.
   */
  xDate?: string;
  /**
   * Zip
   * @description The postal code or ZIP code of the lead's address.
   */
  zip?: string;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_LEAD tool output.
 */
type AGENCYZOOM_CREATE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Contains the result of the lead creation or update operation, including the lead's ID and a status message.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the created or updated lead in AgencyZoom.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional confirmation message detailing the outcome of the operation.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates if the operation was successful. 'True' for success, 'False' for failure.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_TASK tool input.
 */
type AGENCYZOOM_CREATE_TASK_INPUT = {
  /**
   * Assignee Id
   * @description Unique ID of the AgencyZoom user to assign the task; must be an existing user if provided.
   */
  assigneeId?: number;
  /**
   * Comments
   * @description Additional notes, comments, or description for the task.
   */
  comments?: string;
  /**
   * Contact Email
   * @description Email of the customer/lead to associate with the task; used if `customerId` or `leadId` is not provided.
   */
  contactEmail?: string;
  /**
   * Customer Id
   * @description Unique ID of an existing customer to link to this task; must be an existing customer if provided.
   */
  customerId?: number;
  /**
   * Due Datetime
   * @description Due date and time, preferably in ISO 8601 format (e.g., 'YYYY-MM-DDTHH:MM:SSZ').
   */
  dueDatetime?: string;
  /**
   * Duration
   * @description Expected task duration in minutes, typically for 'call' or 'meeting' types.
   */
  duration?: number;
  /**
   * Invitees
   * @description List of email addresses for invitees, typically for 'meeting' type tasks.
   */
  invitees?: string[];
  /**
   * Lead Id
   * @description Unique ID of an existing lead to link to this task; must be an existing lead if provided.
   */
  leadId?: number;
  /**
   * Life Professional Id
   * @description Unique ID of the Life & Health Professional for this task, for specific insurance workflows.
   */
  lifeProfessionalId?: number;
  /**
   * Time Specific
   * @description If `True`, the time in `dueDatetime` is specific; otherwise, task is due anytime on `dueDatetime`'s date.
   */
  timeSpecific?: boolean;
  /**
   * Title
   * @description Title or name of the task; highly recommended for identification.
   */
  title?: string;
  /**
   * Type
   * @description Task type ('call', 'email', 'meeting', 'todo'); highly recommended.
   * @enum {string}
   */
  type?: "call" | "email" | "meeting" | "todo";
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_CREATE_TASK tool output.
 */
type AGENCYZOOM_CREATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Data returned upon task creation: new task's ID, result flag, and optional message.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the newly created task, if successful.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Optional message detailing task creation status, e.g., 'Task created successfully'.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Outcome of the task creation: `True` if successful, `False` otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_AN_OPPORTUNITY tool input.
 */
type AGENCYZOOM_DELETE_AN_OPPORTUNITY_INPUT = {
  /**
   * Opportunity Id
   * @description The unique identifier of the opportunity to be deleted.
   */
  opportunityId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_AN_OPPORTUNITY tool output.
 */
type AGENCYZOOM_DELETE_AN_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description Contains the details of the deletion attempt, including success status and any messages.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the opportunity that was targeted for deletion.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional message detailing the outcome of the deletion operation.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates if the deletion was successful.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_A_CUSTOMER tool input.
 */
type AGENCYZOOM_DELETE_A_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description The unique numerical identifier of the customer record to be permanently deleted.
   */
  customerId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_A_CUSTOMER tool output.
 */
type AGENCYZOOM_DELETE_A_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description The payload containing detailed results of the customer deletion attempt, including a status message, the ID of the customer processed, and a success indicator.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the customer targeted for deletion. This confirms which `customerId` the operation was attempted on.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description A message providing details about the outcome of the deletion operation. May be absent if no specific message is returned.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description A boolean indicating if the customer was successfully deleted. `true` for success, `false` for failure. Note: Some backend systems might return 0 or 1, which will be correctly interpreted as boolean.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_A_CUSTOMER_FILE tool input.
 */
type AGENCYZOOM_DELETE_A_CUSTOMER_FILE_INPUT = {
  /**
   * Customer Id
   * @description The unique identifier for the customer whose file is to be deleted.
   */
  customerId?: number;
  /**
   * File Id
   * @description The unique identifier for the file to be deleted from the specified customer's record.
   */
  fileId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_A_CUSTOMER_FILE tool output.
 */
type AGENCYZOOM_DELETE_A_CUSTOMER_FILE_OUTPUT = {
  /**
   * Data
   * @description Contains the details of the deletion operation's result.
   */
  data?: {
      /**
       * Id
       * @description The identifier of the file that was deleted, if provided by the API upon successful deletion.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional message providing details about the deletion operation, such as 'File deleted successfully' or an error explanation.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description A boolean flag indicating the success of the deletion operation. Typically `true` (or 1) for success, `false` (or 0) for failure.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_A_CUSTOMER_POLICY tool input.
 */
type AGENCYZOOM_DELETE_A_CUSTOMER_POLICY_INPUT = {
  /**
   * Customer Id
   * @description The unique identifier of the customer whose policy is to be deleted.
   */
  customerId?: number;
  /**
   * Policy Id
   * @description The unique identifier of the policy to be deleted from the specified customer's account.
   */
  policyId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_A_CUSTOMER_POLICY tool output.
 */
type AGENCYZOOM_DELETE_A_CUSTOMER_POLICY_OUTPUT = {
  /**
   * Data
   * @description Contains the outcome of the delete operation, including a success flag and an optional message.
   */
  data?: {
      /**
       * Id
       * @description An optional identifier related to this specific response or operation. Its exact nature may vary.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional message providing details about the outcome of the deletion operation, such as a success or error confirmation.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates the outcome of the deletion operation. `True` (or 1) if successful, `False` (or 0) otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_A_DRIVER tool input.
 */
type AGENCYZOOM_DELETE_A_DRIVER_INPUT = {
  /**
   * Driver Id
   * @description The unique identifier of the driver record to be deleted.
   */
  driverId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_A_DRIVER tool output.
 */
type AGENCYZOOM_DELETE_A_DRIVER_OUTPUT = {
  /**
   * Data
   * @description Contains the details of the deletion operation's outcome.
   */
  data?: {
      /**
       * Id
       * @description The identifier of the driver that was targeted for deletion. This typically matches the `driverId` from the request.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional message providing more details about the deletion operation, such as a success or error message.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates deletion outcome: `1` for success, `0` for failure.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_A_LEAD_FILE tool input.
 */
type AGENCYZOOM_DELETE_A_LEAD_FILE_INPUT = {
  /**
   * File Id
   * @description The unique identifier for the file that needs to be deleted from the specified lead.
   */
  fileId?: number;
  /**
   * Lead Id
   * @description The unique identifier for the lead whose file is to be deleted.
   */
  leadId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_A_LEAD_FILE tool output.
 */
type AGENCYZOOM_DELETE_A_LEAD_FILE_OUTPUT = {
  /**
   * Data
   * @description The structured response from the API, containing details about the outcome of the file deletion.
   */
  data?: {
      /**
       * Id
       * @description An optional identifier, possibly related to the lead or file, returned by the API. Its specific meaning depends on the API's implementation for this operation.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional confirmation message detailing the outcome of the file deletion operation.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates the success of the file deletion. The API may return 1 for true (success) or 0 for false (failure), which is mapped to a boolean `True` or `False` respectively.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_A_LEAD_OPPORTUNITY tool input.
 */
type AGENCYZOOM_DELETE_A_LEAD_OPPORTUNITY_INPUT = {
  /**
   * Lead Id
   * @description The unique identifier for the lead whose opportunity is to be deleted.
   */
  leadId?: number;
  /**
   * Opportunity Id
   * @description The unique identifier for the opportunity to be deleted.
   */
  opportunityId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_A_LEAD_OPPORTUNITY tool output.
 */
type AGENCYZOOM_DELETE_A_LEAD_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description Contains the result of the delete operation, including a success flag, an optional message, and the ID of the deleted opportunity.
   */
  data?: {
      /**
       * Id
       * @description The identifier of the opportunity that was deleted. This may be returned by the API for confirmation.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional message providing more details about the outcome of the deletion operation, such as a success or error message.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description A boolean flag indicating the success of the deletion operation. `True` if the opportunity was successfully deleted, `False` otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_A_LEAD_QUOTE tool input.
 */
type AGENCYZOOM_DELETE_A_LEAD_QUOTE_INPUT = {
  /**
   * Lead Id
   * @description Unique identifier of the lead.
   */
  leadId?: number;
  /**
   * Quote Id
   * @description Unique identifier of the quote to be deleted.
   */
  quoteId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_A_LEAD_QUOTE tool output.
 */
type AGENCYZOOM_DELETE_A_LEAD_QUOTE_OUTPUT = {
  /**
   * Data
   * @description Container for the detailed outcome of the lead quote deletion.
   */
  data?: {
      /**
       * Id
       * @description An optional identifier associated with the API response for this operation.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional message providing more details about the deletion operation's result, such as a confirmation or error information.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates the outcome of the deletion. `True` if the quote was successfully deleted, `False` otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_A_TASK tool input.
 */
type AGENCYZOOM_DELETE_A_TASK_INPUT = {
  /**
   * Task Id
   * @description Unique identifier of the task to delete.
   */
  taskId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_A_TASK tool output.
 */
type AGENCYZOOM_DELETE_A_TASK_OUTPUT = {
  /**
   * Data
   * @description Details of the deletion operation's outcome.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the task targeted for deletion.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Optional message detailing the deletion outcome.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates if the deletion was successful.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_A_VEHICLE tool input.
 */
type AGENCYZOOM_DELETE_A_VEHICLE_INPUT = {
  /**
   * Vehicle Id
   * @description Unique identifier of the vehicle to be deleted.
   */
  vehicleId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_A_VEHICLE tool output.
 */
type AGENCYZOOM_DELETE_A_VEHICLE_OUTPUT = {
  /**
   * Data
   * @description Detailed result of the vehicle deletion, including success status, targeted vehicle ID, and optional message.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the vehicle targeted for deletion.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Optional message detailing the deletion outcome (e.g., success confirmation or error).
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Boolean indicating if the vehicle was successfully deleted; `True` for success, `False` for failure. May be absent.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_MESSAGE tool input.
 */
type AGENCYZOOM_DELETE_MESSAGE_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_MESSAGE tool output.
 */
type AGENCYZOOM_DELETE_MESSAGE_OUTPUT = {
  /**
   * Data
   * @description Contains the result of the delete operation, typically including the updated message thread information.
   */
  data?: {
      /**
       * Message Count
       * @description The total number of messages in the thread after the specified message has been deleted.
       * @default null
       */
      messageCount: number | null;
      /**
       * Message Info
       * @description List of messages remaining in the thread post-deletion, or details of the deleted message, providing context on the thread's updated state.
       * @default null
       */
      messageInfo: {
          /**
           * Agent Firstname
           * @description First name of the agent involved with the message.
           * @default null
           */
          agentFirstname: string | null;
          /**
           * Agent Lastname
           * @description Last name of the agent involved with the message.
           * @default null
           */
          agentLastname: string | null;
          /**
           * Bcc
           * @description List of BCC recipient(s) of the email, including their name and email address. Note: BCC information may not always be available or complete depending on the email source and permissions.
           * @default null
           */
          bcc: {
              /**
               * Email
               * @description Email address of the BCC recipient.
               * @default null
               */
              email: string | null;
              /**
               * Name
               * @description Display name of the BCC recipient.
               * @default null
               */
              name: string | null;
          }[] | null;
          /**
           * Body
           * @description Full content of the email message, can be HTML or plain text.
           * @default null
           */
          body: string | null;
          /**
           * Cc
           * @description List of CC recipient(s) of the email, including their name and email address.
           * @default null
           */
          cc: {
              /**
               * Email
               * @description Email address of the CC recipient.
               * @default null
               */
              email: string | null;
              /**
               * Name
               * @description Display name of the CC recipient.
               * @default null
               */
              name: string | null;
          }[] | null;
          /**
           * Contact Email
           * @description Email address of the primary contact associated with this message.
           * @default null
           */
          contactEmail: string | null;
          /**
           * Contact Id
           * @description Identifier of the associated contact (e.g., customer referral ID, household ID).
           * @default null
           */
          contactId: number | null;
          /**
           * Contact Name
           * @description Name of the associated contact.
           * @default null
           */
          contactName: string | null;
          /**
           * Contact Phone
           * @description Phone number of the primary contact associated with this message.
           * @default null
           */
          contactPhone: string | null;
          /**
           * Contact Type
           * @description Type of the contact associated with the message.
           * @default null
           */
          contactType: string | null;
          /**
           * Download All Att Url
           * @description A direct URL to download all attachments for this message as a single archive, if available.
           * @default null
           */
          downloadAllAttUrl: string | null;
          /**
           * Files
           * @description List of file attachments (excluding inline images) associated with the message.
           * @default null
           */
          files: {
              /**
               * Doc File Name
               * @description Name of the document file, potentially different from the original filename.
               * @default null
               */
              docFileName: string | null;
              /**
               * Doc Media Type
               * @description Media type (MIME type) of the document file (e.g., 'application/pdf').
               * @default null
               */
              docMediaType: string | null;
              /**
               * Filename
               * @description Original name of the attached file.
               * @default null
               */
              filename: string | null;
              /**
               * Id
               * @description Unique identifier for the file attachment.
               * @default null
               */
              id: number | null;
              /**
               * Size
               * @description Size of the attached file in bytes.
               * @default null
               */
              size: number | null;
              /**
               * Url
               * @description Download URL for the attached file.
               * @default null
               */
              url: string | null;
              /**
               * Vendor Id
               * @description Vendor-specific ID for the file, if applicable (e.g., from Nylas).
               * @default null
               */
              vendorId: string | null;
          }[] | null;
          /**
           * Froms
           * @description List of sender(s) of the email, including their name and email address.
           * @default null
           */
          froms: {
              /**
               * Email
               * @description Email address of the sender.
               * @default null
               */
              email: string | null;
              /**
               * Name
               * @description Display name of the sender.
               * @default null
               */
              name: string | null;
          }[] | null;
          /**
           * Id
           * @description Unique identifier for the message within the AgencyZoom system.
           * @default null
           */
          id: number | null;
          /**
           * Image Files
           * @description List of image attachments (e.g., inline images) associated with the message.
           * @default null
           */
          imageFiles: {
              /**
               * Doc File Name
               * @description Name of the image document file.
               * @default null
               */
              docFileName: string | null;
              /**
               * Doc Media Type
               * @description Media type (MIME type) of the image file (e.g., 'image/jpeg').
               * @default null
               */
              docMediaType: string | null;
              /**
               * Filename
               * @description Original name of the image file.
               * @default null
               */
              filename: string | null;
              /**
               * Id
               * @description Unique identifier for the image file.
               * @default null
               */
              id: number | null;
              /**
               * Size
               * @description Size of the image file in bytes.
               * @default null
               */
              size: number | null;
              /**
               * Url
               * @description URL to access or download the image file.
               * @default null
               */
              url: string | null;
              /**
               * Vendor Id
               * @description Vendor-specific ID for the image file, if applicable (e.g., from Nylas).
               * @default null
               */
              vendorId: string | null;
          }[] | null;
          /**
           * Message Date
           * @description Date the message was recorded in the system, according to the agency's local timezone.
           * @default null
           */
          messageDate: string | null;
          /**
           * Message Date Utc
           * @description Date the message was recorded, in UTC format.
           * @default null
           */
          messageDateUTC: string | null;
          /**
           * Message Id
           * @description Identifier of the message from the external email provider (e.g., Gmail, Nylas).
           * @default null
           */
          messageId: string | null;
          /**
           * Outbound
           * @description Indicates message direction: 0 for received (inbound), 1 for sent (outbound).
           * @default null
           * @enum {integer|null}
           */
          outbound: 0 | 1 | null;
          /**
           * Provider Sms Message Sid
           * @description Unique identifier for an SMS message from the provider (e.g., Twilio SID), if the message is an SMS.
           * @default null
           */
          providerSmsMessageSid: unknown;
          /**
           * Sender Name
           * @description Name of the sender as displayed, or name of the sending email system (e.g., 'AgencyZoom Mail', 'Outlook').
           * @default null
           */
          senderName: string | null;
          /**
           * Snippet
           * @description A short preview or snippet of the email's content.
           * @default null
           */
          snippet: string | null;
          /**
           * Status
           * @description Tracking status of the email (e.g., 'delivered', 'opened', 'bounced').
           * @default null
           */
          status: string | null;
          /**
           * Subject
           * @description Subject line of the email message.
           * @default null
           */
          subject: string | null;
          /**
           * Thread Id
           * @description Identifier of the email thread from the external email provider.
           * @default null
           */
          threadId: string | null;
          /**
           * Tos
           * @description List of primary recipient(s) (To) of the email, including their name and email address.
           * @default null
           */
          tos: {
              /**
               * Email
               * @description Email address of the recipient.
               * @default null
               */
              email: string | null;
              /**
               * Name
               * @description Display name of the recipient.
               * @default null
               */
              name: string | null;
          }[] | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_THREAD tool input.
 */
type AGENCYZOOM_DELETE_THREAD_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_DELETE_THREAD tool output.
 */
type AGENCYZOOM_DELETE_THREAD_OUTPUT = {
  /**
   * Data
   * @description Detailed result of the delete operation, including a confirmation message, optional ID, and success status.
   */
  data?: {
      /**
       * Id
       * @description ID of the deleted email thread, if applicable and returned by the server.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Optional message detailing the delete operation's outcome.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description True if the thread was successfully deleted; False otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_AMS_POLICIES_FOR_A_CUSTOMER tool input.
 */
type AGENCYZOOM_GET_AMS_POLICIES_FOR_A_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description Unique identifier for the customer whose AMS policy data is to be retrieved.
   */
  customerId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_AMS_POLICIES_FOR_A_CUSTOMER tool output.
 */
type AGENCYZOOM_GET_AMS_POLICIES_FOR_A_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed information for an AMS policy associated with the customer.
   */
  data?: {
      /**
       * Agent Id
       * @description Identifier for the agent or producer responsible for this policy.
       * @default null
       */
      agentId: number | null;
      /**
       * Agent Name
       * @description Name of the agent or producer. (Note: This field is represented as an integer in the schema, which might be an ID mapping to the actual name or an enumeration).
       * @default null
       */
      agentName: number | null;
      /**
       * Carrier Id
       * @description Identifier for the insurance carrier of this policy.
       * @default null
       */
      carrierId: number | null;
      /**
       * Csr Id
       * @description Identifier for the Customer Service Representative (CSR) assigned to this policy.
       * @default null
       */
      csrId: number | null;
      /**
       * Csr Name
       * @description Name of the Customer Service Representative (CSR) assigned to this policy.
       * @default null
       */
      csrName: string | null;
      /**
       * Effective Date
       * @description The date when the policy coverage becomes effective, typically in YYYY-MM-DD format.
       * @default null
       */
      effectiveDate: string | null;
      /**
       * Expiry Date
       * @description The date when the policy coverage expires, typically in YYYY-MM-DD format.
       * @default null
       */
      expiryDate: string | null;
      /**
       * Id
       * @description Unique identifier of the AMS policy.
       * @default null
       */
      id: number | null;
      /**
       * Items
       * @description Number of items covered or related to the policy (e.g., number of vehicles for an auto policy, number of insureds for a life policy).
       * @default null
       */
      items: number | null;
      /**
       * Lead Source Id
       * @description Identifier for the lead source associated with this policy.
       * @default null
       */
      leadSourceId: number | null;
      /**
       * Policy Number
       * @description The unique number or identifier assigned to this policy by the carrier.
       * @default null
       */
      policyNumber: string | null;
      /**
       * Policy Type Id
       * @description Identifier for the specific type of policy.
       * @default null
       */
      policyTypeId: number | null;
      /**
       * Policy Type Name
       * @description Name of the policy type (e.g., 'Auto', 'Home', 'Life').
       * @default null
       */
      policyTypeName: string | null;
      /**
       * Premium
       * @description The premium amount for this policy, expressed in cents (e.g., 50000 for $500.00).
       * @default null
       */
      premium: number | null;
      /**
       * Sold Date
       * @description The date when the policy was sold, typically in YYYY-MM-DD format.
       * @default null
       */
      soldDate: string | null;
      /**
       * Tag Names
       * @description Tag names associated with the policy, typically comma-separated (e.g., 'VIP,Renewal,Follow-up').
       * @default null
       */
      tagNames: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_AUTH_URL_FOR_V4_SSO tool input.
 */
type AGENCYZOOM_GET_AUTH_URL_FOR_V4_SSO_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_AUTH_URL_FOR_V4_SSO tool output.
 */
type AGENCYZOOM_GET_AUTH_URL_FOR_V4_SSO_OUTPUT = {
  /**
   * Data
   * @description Details for V4 SSO authentication.
   */
  data?: {
      /**
       * Auth Url
       * @description Authentication URL to initiate AgencyZoom V4 SSO, suitable for a webview authentication.
       * @default null
       */
      authUrl: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_ASSIGN_GROUPS tool input.
 */
type AGENCYZOOM_GET_A_LIST_OF_ASSIGN_GROUPS_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_ASSIGN_GROUPS tool output.
 */
type AGENCYZOOM_GET_A_LIST_OF_ASSIGN_GROUPS_OUTPUT = {
  /**
   * Data
   * @description A list of assign groups. Each group object in the list contains an 'id' and 'name'.
   */
  data?: {
      /**
       * Id
       * @description The unique numerical identifier for the specific assign group. This ID is used to reference the group in other API calls or internal systems.
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description The display name of the assign group.
       * @default null
       */
      name: string | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_CARRIERS tool input.
 */
type AGENCYZOOM_GET_A_LIST_OF_CARRIERS_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_CARRIERS tool output.
 */
type AGENCYZOOM_GET_A_LIST_OF_CARRIERS_OUTPUT = {
  /**
   * Data
   * @description A list of insurance carriers.
   */
  data?: {
      /**
       * Id
       * @description The unique numerical identifier for the insurance carrier.
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description The full name of the insurance carrier.
       * @default null
       */
      name: string | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_CSRS tool input.
 */
type AGENCYZOOM_GET_A_LIST_OF_CSRS_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_CSRS tool output.
 */
type AGENCYZOOM_GET_A_LIST_OF_CSRS_OUTPUT = {
  /**
   * Data
   * @description Contains the list of CSRs.
   */
  data?: {
      /**
       * Csrs
       * @description A list of CSRs.
       * @default null
       */
      csrs: {
          /**
           * Id
           * @description The unique identifier.
           * @default null
           */
          id: number | null;
          /**
           * Name
           * @description The full name.
           * @default null
           */
          name: string | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_CUSTOM_FIELDS tool input.
 */
type AGENCYZOOM_GET_A_LIST_OF_CUSTOM_FIELDS_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_CUSTOM_FIELDS tool output.
 */
type AGENCYZOOM_GET_A_LIST_OF_CUSTOM_FIELDS_OUTPUT = {
  /**
   * Data
   * @description A list of custom field definitions.
   */
  data?: {
      /**
       * DataType
       * @description The data type of the custom field, determining the kind of input it accepts (e.g., text, number, date).
       * @default null
       * @enum {string|null}
       */
      dataType: "number" | "text" | "multipleOptions" | "singleOption" | "date" | null;
      /**
       * Field Name
       * @description The unique programmatic name or key for the custom field.
       * @default null
       */
      fieldName: string | null;
      /**
       * Label
       * @description The human-readable display label for the custom field as shown in the user interface.
       * @default null
       */
      label: string | null;
      /**
       * Options
       * @description A list of predefined choices available for 'singleOption' or 'multipleOptions' data types. This field is relevant only if dataType is 'singleOption' or 'multipleOptions'.
       * @default null
       */
      options: string[] | null;
      /**
       * Targets
       * @description Defines where and how this custom field is applied, specifying its appearance on different entity types and sections.
       * @default null
       */
      targets: {
          /**
           * EntityType
           * @description The type of entity (e.g., lead, customer) to which this custom field target applies.
           * @default null
           * @enum {string|null}
           */
          entityType: "lead" | "customer" | null;
          /**
           * Is Show In Details
           * @description If true, the custom field is displayed in the details view of an existing record of the specified entity type.
           * @default null
           */
          isShowInDetails: boolean | null;
          /**
           * Is Show In New
           * @description If true, the custom field is displayed when creating a new record of the specified entity type.
           * @default null
           */
          isShowInNew: boolean | null;
          /**
           * Section
           * @description The specific section (e.g., contact, details) within the entity's interface where this custom field appears.
           * @default null
           * @enum {string|null}
           */
          section: "contact" | "details" | "quote" | "opportunity" | null;
      }[] | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_DRIVERS_FOR_AN_OPPORTUNITY tool input.
 */
type AGENCYZOOM_GET_A_LIST_OF_DRIVERS_FOR_AN_OPPORTUNITY_INPUT = {
  /**
   * Opportunity Id
   * @description Unique identifier of the opportunity.
   */
  opportunityId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_DRIVERS_FOR_AN_OPPORTUNITY tool output.
 */
type AGENCYZOOM_GET_A_LIST_OF_DRIVERS_FOR_AN_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description List of drivers associated with the opportunity.
   */
  data?: {
      /**
       * Birthday
       * @description Driver's birth date, typically YYYY-MM-DD format.
       * @default null
       */
      birthday: string | null;
      /**
       * First Name
       * @description Driver's first name.
       * @default null
       */
      firstName: string | null;
      /**
       * Gender
       * @description Driver's gender. ('M': Male, 'F': Female, 'U': Unknown, 'X': Non-Binary).
       * @default null
       * @enum {string|null}
       */
      gender: "M" | "F" | "U" | "X" | null;
      /**
       * Id
       * @description Unique identifier for the driver.
       * @default null
       */
      id: number | null;
      /**
       * Last Name
       * @description Driver's last name.
       * @default null
       */
      lastName: string | null;
      /**
       * License Number
       * @description Driver's license number.
       * @default null
       */
      licenseNumber: string | null;
      /**
       * MaritalStatus
       * @description Driver's marital status. (1: Single, 2: Married, 3: Widowed, 4: Separated, 5: Divorced, 6: Domestic Partner, 7: Civil Union, 8: Fiancé / Fiancée, 9: Unknown, 10: Other).
       * @default null
       * @enum {integer|null}
       */
      maritalStatus: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | null;
      /**
       * Middle Name
       * @description Driver's middle name, if available.
       * @default null
       */
      middleName: string | null;
      /**
       * Relationship
       * @description Driver's relationship to the primary insured or contact. ('IN': Named Insured, 'SP': Spouse, 'PA': Parent, 'CH': Child, 'OT': Other).
       * @default null
       * @enum {string|null}
       */
      relationship: "IN" | "SP" | "PA" | "CH" | "OT" | null;
      /**
       * State Licensed
       * @description Two-letter state code where the driver is licensed (e.g., NY).
       * @default null
       */
      stateLicensed: string | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_EMPLOYEES tool input.
 */
type AGENCYZOOM_GET_A_LIST_OF_EMPLOYEES_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_EMPLOYEES tool output.
 */
type AGENCYZOOM_GET_A_LIST_OF_EMPLOYEES_OUTPUT = {
  /**
   * Data
   * @description A list of employee records, where each record includes detailed information about an employee.
   */
  data?: {
      /**
       * Avatar
       * @description URL of the employee's avatar image, if available.
       * @default null
       */
      avatar: string | null;
      /**
       * Email
       * @description The email address of the employee.
       * @default null
       */
      email: string | null;
      /**
       * Firstname
       * @description The first name of the employee.
       * @default null
       */
      firstname: string | null;
      /**
       * Id
       * @description Unique identifier of the employee.
       * @default null
       */
      id: number | null;
      /**
       * Is Active
       * @description Flag indicating if the employee's account is currently active.
       * @default null
       */
      isActive: boolean | null;
      /**
       * Is Owner
       * @description Flag indicating if the employee is designated as an owner or a key agent within the agency structure.
       * @default null
       */
      isOwner: boolean | null;
      /**
       * Is Producer
       * @description Flag indicating if the employee is a producer.
       * @default null
       */
      isProducer: boolean | null;
      /**
       * Lastname
       * @description The last name of the employee.
       * @default null
       */
      lastname: string | null;
      /**
       * Phone
       * @description The phone number of the employee.
       * @default null
       */
      phone: string | null;
      /**
       * User Id
       * @description The user ID associated with the employee in the system, if applicable.
       * @default null
       */
      userId: number | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_LEAD_SOURCES tool input.
 */
type AGENCYZOOM_GET_A_LIST_OF_LEAD_SOURCES_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_LEAD_SOURCES tool output.
 */
type AGENCYZOOM_GET_A_LIST_OF_LEAD_SOURCES_OUTPUT = {
  /**
   * Data
   * @description List of all available lead source objects.
   */
  data?: {
      /**
       * Category Id
       * @description Unique identifier of the category this lead source belongs to.
       * @default null
       */
      categoryId: number | null;
      /**
       * Exclude As Sales
       * @description If true, sales from this lead source are excluded from being counted as actual sales.
       * @default null
       */
      excludeAsSales: boolean | null;
      /**
       * Id
       * @description Unique identifier of the lead source.
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description Name of the lead source.
       * @default null
       */
      name: string | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_LEAD_SOURCE_CATEGORIES tool input.
 */
type AGENCYZOOM_GET_A_LIST_OF_LEAD_SOURCE_CATEGORIES_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_LEAD_SOURCE_CATEGORIES tool output.
 */
type AGENCYZOOM_GET_A_LIST_OF_LEAD_SOURCE_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description A list of available lead source categories, each with an ID and name.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier for the lead source category.
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description The name of the lead source category.
       * @default null
       */
      name: string | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_LIFE_PROFESSIONALS tool input.
 */
type AGENCYZOOM_GET_A_LIST_OF_LIFE_PROFESSIONALS_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_LIFE_PROFESSIONALS tool output.
 */
type AGENCYZOOM_GET_A_LIST_OF_LIFE_PROFESSIONALS_OUTPUT = {
  /**
   * Data
   * @description Contains a list of life professional objects, each detailing a professional's information.
   */
  data?: {
      /**
       * Email
       * @description The email address of the life professional.
       * @default null
       */
      email: string | null;
      /**
       * Firstname
       * @description The first name of the life professional.
       * @default null
       */
      firstname: string | null;
      /**
       * Id
       * @description The unique identifier for the life professional.
       * @default null
       */
      id: number | null;
      /**
       * Is Active
       * @description Indicates whether the life professional's user account is currently active.
       * @default null
       */
      isActive: boolean | null;
      /**
       * Lastname
       * @description The last name of the life professional.
       * @default null
       */
      lastname: string | null;
      /**
       * Phone
       * @description The phone number of the life professional.
       * @default null
       */
      phone: string | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_LOCATIONS tool input.
 */
type AGENCYZOOM_GET_A_LIST_OF_LOCATIONS_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_LOCATIONS tool output.
 */
type AGENCYZOOM_GET_A_LIST_OF_LOCATIONS_OUTPUT = {
  /**
   * Data
   * @description A list of location objects, each detailing an agency branch or office.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the location.
       * @default null
       */
      id: string | null;
      /**
       * Name
       * @description The name of the location.
       * @default null
       */
      name: string | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_LOSS_REASONS tool input.
 */
type AGENCYZOOM_GET_A_LIST_OF_LOSS_REASONS_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_LOSS_REASONS tool output.
 */
type AGENCYZOOM_GET_A_LIST_OF_LOSS_REASONS_OUTPUT = {
  /**
   * Data
   * @description A list of available loss reasons, where each reason includes an 'id' and a 'name'.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier for the loss reason.
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description The name or descriptive text of the loss reason.
       * @default null
       */
      name: string | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_PIPELINES tool input.
 */
type AGENCYZOOM_GET_A_LIST_OF_PIPELINES_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_PIPELINES tool output.
 */
type AGENCYZOOM_GET_A_LIST_OF_PIPELINES_OUTPUT = {
  /**
   * Data
   * @description Pipelines, each detailing its ID, name, type, sequence, status, and associated stages.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier for the pipeline (workflow).
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description Name of the pipeline (workflow).
       * @default null
       */
      name: string | null;
      /**
       * Seq
       * @description Sequence number determining the order of this pipeline when displayed in a list.
       * @default null
       */
      seq: number | null;
      /**
       * Stages
       * @description Stages that constitute this pipeline.
       * @default null
       */
      stages: {
          /**
           * Id
           * @description Unique identifier for this stage within the pipeline.
           * @default null
           */
          id: number | null;
          /**
           * Name
           * @description Name of this pipeline stage.
           * @default null
           */
          name: string | null;
          /**
           * Seq
           * @description Sequence number determining the order of this stage within its pipeline.
           * @default null
           */
          seq: number | null;
          /**
           * Status
           * @description Status of the stage (e.g., 0 for inactive, 1 for active); refer to AgencyZoom documentation for specific status code meanings.
           * @default null
           */
          status: number | null;
      }[] | null;
      /**
       * Status
       * @description Status of the pipeline (e.g., 0 for inactive, 1 for active); refer to AgencyZoom documentation for specific status code meanings.
       * @default null
       */
      status: number | null;
      /**
       * Type
       * @description Type categorizing the pipeline (e.g., 'Lead', 'Client', or other user-defined types).
       * @default null
       */
      type: string | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_PRODUCER tool input.
 */
type AGENCYZOOM_GET_A_LIST_OF_PRODUCER_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_PRODUCER tool output.
 */
type AGENCYZOOM_GET_A_LIST_OF_PRODUCER_OUTPUT = {
  /**
   * Data
   * @description Primary data payload of the response.
   */
  data?: {
      /**
       * Producers
       * @description List of producers.
       * @default null
       */
      producers: {
          /**
           * Id
           * @description Unique identifier of the producer.
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description Full name of the producer.
           * @default null
           */
          name: string | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_PRODUCT_LINES_POLICY_TYPES tool input.
 */
type AGENCYZOOM_GET_A_LIST_OF_PRODUCT_LINES_POLICY_TYPES_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_PRODUCT_LINES_POLICY_TYPES tool output.
 */
type AGENCYZOOM_GET_A_LIST_OF_PRODUCT_LINES_POLICY_TYPES_OUTPUT = {
  /**
   * Data
   * @description A list of available product lines or policy types, each including its ID, name, and associated product category ID.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the product line or policy type.
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description The name of the product line or policy type.
       * @default null
       */
      name: string | null;
      /**
       * Product Category Id
       * @description The identifier for the product category associated with this product line or policy type.
       * @default null
       */
      productCategoryId: number | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_RECYCLE_EVENTS tool input.
 */
type AGENCYZOOM_GET_A_LIST_OF_RECYCLE_EVENTS_INPUT = {
  /**
   * Lead Id
   * @description The unique identifier of the lead for which to retrieve recycle events.
   */
  leadId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_RECYCLE_EVENTS tool output.
 */
type AGENCYZOOM_GET_A_LIST_OF_RECYCLE_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Contains lists of existing and new X-Dates related to the lead's recycle events.
   */
  data?: {
      /**
       * Existing X Date
       * @description A list of existing X-Dates (policy expiration or significant dates) and their types associated with the lead's recycle events.
       * @default null
       */
      existingXDate: {
          /**
           * X Date
           * @description The existing X-Date (expiration date or other significant policy date) associated with the lead. Format: YYYY-MM-DD
           * @default null
           */
          xDate: string | null;
          /**
           * X Date Type
           * @description The type or category of the existing X-Date (e.g., 'Auto Policy Expiration', 'Home Policy Renewal').
           * @default null
           */
          xDateType: string | null;
      }[] | null;
      /**
       * New X Date
       * @description A list of new X-Dates (policy expiration or significant dates) that were set as part of the lead's recycle events. Format: YYYY-MM-DD
       * @default null
       */
      newXDate: string[] | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_VEHICLES_FOR_AN_OPPORTUNITY tool input.
 */
type AGENCYZOOM_GET_A_LIST_OF_VEHICLES_FOR_AN_OPPORTUNITY_INPUT = {
  /**
   * Opportunity Id
   * @description Unique identifier for the opportunity, used to retrieve its associated vehicles.
   */
  opportunityId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_A_LIST_OF_VEHICLES_FOR_AN_OPPORTUNITY tool output.
 */
type AGENCYZOOM_GET_A_LIST_OF_VEHICLES_FOR_AN_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description List of vehicles associated with the specified opportunity.
   */
  data?: {
      /**
       * Id
       * @description Unique ID of the driver primarily associated with this vehicle for the opportunity.
       * @default null
       */
      id: number | null;
      /**
       * Make
       * @description Make or manufacturer of the vehicle.
       * @default null
       */
      make: string | null;
      /**
       * Model
       * @description Model of the vehicle.
       * @default null
       */
      model: string | null;
      /**
       * Ownership
       * @description Ownership status of the vehicle.
       * @default null
       * @enum {string|null}
       */
      ownership: "Owned" | "Financed" | "Leased" | null;
      /**
       * Vin
       * @description Vehicle Identification Number (VIN).
       * @default null
       */
      vin: string | null;
      /**
       * Year
       * @description Manufacturing year.
       * @default null
       */
      year: string | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_DEPARTMENTS_GROUPS tool input.
 */
type AGENCYZOOM_GET_DEPARTMENTS_GROUPS_INPUT = {
  /**
   * Agency Number
   * @description The unique identifier for the agency. If provided, fetches departments and groups for this specific agency.
   */
  agencyNumber?: string;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_DEPARTMENTS_GROUPS tool output.
 */
type AGENCYZOOM_GET_DEPARTMENTS_GROUPS_OUTPUT = {
  /**
   * Data
   * @description Contains the lists of departments and groups for the queried agency.
   */
  data?: {
      /**
       * Departments
       * @description A list of department objects associated with the agency.
       * @default null
       */
      departments: {
          /**
           * Department Code
           * @description The unique code identifying the department.
           * @default null
           */
          departmentCode: string | null;
          /**
           * Department Name
           * @description The name of the department.
           * @default null
           */
          departmentName: string | null;
      }[] | null;
      /**
       * Groups
       * @description A list of group objects associated with the agency.
       * @default null
       */
      groups: {
          /**
           * Department Code
           * @description The unique code of the department to which this group belongs.
           * @default null
           */
          departmentCode: string | null;
          /**
           * Department Name
           * @description The name of the department to which this group belongs.
           * @default null
           */
          departmentName: string | null;
          /**
           * Group Code
           * @description The unique code identifying the group.
           * @default null
           */
          groupCode: string | null;
          /**
           * Group Name
           * @description The name of the group.
           * @default null
           */
          groupName: string | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_LEAD_FILES tool input.
 */
type AGENCYZOOM_GET_LEAD_FILES_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_LEAD_FILES tool output.
 */
type AGENCYZOOM_GET_LEAD_FILES_OUTPUT = {
  /**
   * Data
   * @description A list of objects, where each object contains metadata for a file associated with a lead.
   */
  data?: {
      /**
       * Comments
       * @description Comments or notes associated with the file.
       * @default null
       */
      comments: string | null;
      /**
       * Create Date
       * @description Creation date (and optionally time) of the file.
       * @default null
       */
      createDate: string | null;
      /**
       * Created By
       * @description Identifier of the creator (user or system).
       * @default null
       */
      createdBy: string | null;
      /**
       * Doc Type
       * @description Numeric code for document type (e.g., '1' for 'quotes'); an internal classification.
       * @default null
       */
      docType: number | null;
      /**
       * Entity Id
       * @description Unique identifier of the linked primary entity (e.g., a lead).
       * @default null
       */
      entityId: number | null;
      /**
       * Id
       * @description Unique identifier for the file.
       * @default null
       */
      id: number | null;
      /**
       * Media Type
       * @description MIME type indicating file format (e.g., 'application/pdf').
       * @default null
       */
      mediaType: string | null;
      /**
       * Modified By
       * @description Identifier of the last modifier (user or system).
       * @default null
       */
      modifiedBy: string | null;
      /**
       * Modify Date
       * @description Last modification date (and optionally time) of the file.
       * @default null
       */
      modifyDate: string | null;
      /**
       * Size
       * @description File size in bytes.
       * @default null
       */
      size: number | null;
      /**
       * Title
       * @description Title or name of the file.
       * @default null
       */
      title: string | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_LEAD_NOTES tool input.
 */
type AGENCYZOOM_GET_LEAD_NOTES_INPUT = {
  /**
   * Lead Id
   * @description The unique identifier of the lead for whom notes are to be retrieved.
   */
  leadId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_LEAD_NOTES tool output.
 */
type AGENCYZOOM_GET_LEAD_NOTES_OUTPUT = {
  /**
   * Data
   * @description A list of notes associated with the specified lead.
   */
  data?: {
      /**
       * Attr
       * @description Additional custom attributes or metadata for the note, as key-value pairs.
       * @default null
       */
      attr: {
          [key: string]: unknown;
      } | null;
      /**
       * Body
       * @description Main content or text of the note.
       * @default null
       */
      body: string | null;
      /**
       * Create Date
       * @description Timestamp of note creation (typically 'YYYY-MM-DD HH:MM:SS').
       * @default null
       */
      createDate: string | null;
      /**
       * Created By
       * @description Identifier or name of the user or system entity that created the note.
       * @default null
       */
      createdBy: string | null;
      /**
       * Title
       * @description Brief title or subject for the note.
       * @default null
       */
      title: string | null;
      /**
       * Type
       * @description Type of the note (e.g., 'email', 'creation', 'comment', or custom).
       * @default null
       */
      type: string | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_LEAD_QUOTES tool input.
 */
type AGENCYZOOM_GET_LEAD_QUOTES_INPUT = {
  /**
   * Lead Id
   * @description The unique identifier for the lead whose quotes are to be retrieved.
   */
  leadId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_LEAD_QUOTES tool output.
 */
type AGENCYZOOM_GET_LEAD_QUOTES_OUTPUT = {
  /**
   * Data
   * @description A list of quotes associated with the specified lead.
   */
  data?: {
      /**
       * Carrier Id
       * @description The unique identifier for the insurance carrier providing the quote.
       * @default null
       */
      carrierId: number | null;
      /**
       * Carrier Name
       * @description The name of the insurance carrier.
       * @default null
       */
      carrierName: string | null;
      /**
       * Custom Fields
       * @description A list of custom fields and their values associated with the quote.
       * @default null
       */
      customFields: {
          /**
           * Field Name
           * @description The name of the custom field. For available definitions, see: https://app.agencyzoom.com/openapi/#tag/Configuration-and-Settings/operation/getCustomFieldDefs
           * @default null
           */
          fieldName: string | null;
          /**
           * Field Value
           * @description The value(s) associated with the custom field. Most data types will have a single value, except for fields that allow multiple option selections.
           * @default null
           */
          fieldValue: string[] | null;
      }[] | null;
      /**
       * Id
       * @description The unique identifier for the quote.
       * @default null
       */
      id: number | null;
      /**
       * Items
       * @description The number of items covered by the quote (e.g., number of vehicles in an auto policy).
       * @default null
       */
      items: number | null;
      /**
       * Premium
       * @description The premium amount for the quote.
       * @default null
       */
      premium: number | null;
      /**
       * Product Line Id
       * @description The identifier for the product line associated with the quote.
       * @default null
       */
      productLineId: number | null;
      /**
       * Product Name
       * @description The name of the product or policy type (e.g., Auto, Home).
       * @default null
       */
      productName: string | null;
      /**
       * Property Address
       * @description A list of property addresses relevant to this quote.
       * @default null
       */
      propertyAddress: {
          /**
           * Address1
           * @description The first line of the property's street address.
           * @default null
           */
          address1: string | null;
          /**
           * Address2
           * @description The second line of the property's street address (e.g., apartment, suite, or unit number).
           * @default null
           */
          address2: string | null;
          /**
           * City
           * @description The city name for the property address.
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description The country code for the property address (e.g., USA).
           * @default null
           */
          country: string | null;
          /**
           * Id
           * @description The unique identifier for this property address entry.
           * @default null
           */
          id: number | null;
          /**
           * Lead Opportunity Id
           * @description The unique identifier of the associated lead opportunity.
           * @default null
           */
          leadOpportunityId: number | null;
          /**
           * State
           * @description The state code for the property address (e.g., FL for Florida).
           * @default null
           */
          state: string | null;
          /**
           * Use Mailing Address As Location
           * @description Indicates if the lead's mailing address should be used as the property location. `1` for true, `0` for false. Defaults to true. If `1`, the lead's address information is saved as the opportunity's property address.
           * @default null
           */
          useMailingAddressAsLocation: number | null;
          /**
           * Zip
           * @description The postal ZIP code for the property address.
           * @default null
           */
          zip: string | null;
      }[] | null;
      /**
       * Sold
       * @description Indicates whether the quote has been sold. `true` if sold, `false` otherwise.
       * @default null
       */
      sold: boolean | null;
      /**
       * Status
       * @description The status of the quote. `0` indicates an inactive quote, and `1` indicates an active quote.
       * @default null
       */
      status: number | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_LEAD_TASKS tool input.
 */
type AGENCYZOOM_GET_LEAD_TASKS_INPUT = {
  /**
   * Lead Id
   * @description The unique identifier for the lead whose tasks are to be retrieved.
   */
  leadId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_LEAD_TASKS tool output.
 */
type AGENCYZOOM_GET_LEAD_TASKS_OUTPUT = {
  /**
   * Data
   * @description A list of tasks associated with the specified lead.
   */
  data?: {
      /**
       * Assigned Date
       * @description The date when the task was assigned, in YYYY-MM-DD format.
       * @default null
       */
      assignedDate: string | null;
      /**
       * Assignees
       * @description A list of users assigned to this task.
       * @default null
       */
      assignees: {
          /**
           * Firstname
           * @description The first name of the assigned user.
           * @default null
           */
          firstname: string | null;
          /**
           * Id
           * @description The unique identifier of the user assigned to the task.
           * @default null
           */
          id: number | null;
          /**
           * Is Employee
           * @description Indicates if the assigned user is an employee (true) or an affiliate (false).
           * @default true
           */
          isEmployee: boolean | null;
          /**
           * Lastname
           * @description The last name of the assigned user.
           * @default null
           */
          lastname: string | null;
      }[] | null;
      /**
       * Comments
       * @description Additional notes or comments related to the task.
       * @default null
       */
      comments: string | null;
      /**
       * Complete Date
       * @description The date when the task was completed, in YYYY-MM-DD format. Null if not completed.
       * @default null
       */
      completeDate: string | null;
      /**
       * Completed By
       * @description The unique identifier of the user who completed the task.
       * @default null
       */
      completedBy: number | null;
      /**
       * Create Date
       * @description The date when the task was created, in YYYY-MM-DD format.
       * @default null
       */
      createDate: string | null;
      /**
       * Customer Id
       * @description The unique identifier of the customer or lead associated with this task.
       * @default null
       */
      customerId: number | null;
      /**
       * Customer Name
       * @description The name of the customer or lead associated with this task.
       * @default null
       */
      customerName: string | null;
      /**
       * CustomerType
       * @description Indicates if the associated entity is a 'customer' or a 'lead'.
       * @default null
       * @enum {string|null}
       */
      customerType: "customer" | "lead" | null;
      /**
       * Due Date
       * @description The date by which the task is due, in YYYY-MM-DD format.
       * @default null
       */
      dueDate: string | null;
      /**
       * Duration
       * @description The estimated or actual duration of the task in minutes.
       * @default null
       */
      duration: number | null;
      /**
       * Id
       * @description The unique identifier for the task.
       * @default null
       */
      id: number | null;
      /**
       * Is Completed By Employee
       * @description Indicates if the task was completed by an employee (true) or an affiliate (false).
       * @default null
       */
      isCompletedByEmployee: boolean | null;
      /**
       * Status
       * @description The current status of the task. (0: Open, 1: Done, 2: Cancelled).
       * @default null
       * @enum {integer|null}
       */
      status: 0 | 1 | 2 | null;
      /**
       * Task Date Time
       * @description The specific date and time scheduled for the task, if applicable, in a standard date-time format (e.g., YYYY-MM-DDTHH:mm:ss).
       * @default null
       */
      taskDateTime: string | null;
      /**
       * Time Specific
       * @description Indicates whether the task is scheduled for a specific time (true) or is a general task for the due date (false).
       * @default null
       */
      timeSpecific: boolean | null;
      /**
       * Title
       * @description The title or name of the task.
       * @default null
       */
      title: string | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_LIST_OF_END_STAGES tool input.
 */
type AGENCYZOOM_GET_LIST_OF_END_STAGES_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_LIST_OF_END_STAGES tool output.
 */
type AGENCYZOOM_GET_LIST_OF_END_STAGES_OUTPUT = {
  /**
   * Data
   * @description A list detailing each end stage in a workflow or pipeline.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier for the workflow stage.
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description Name of the workflow stage.
       * @default null
       */
      name: string | null;
      /**
       * Seq
       * @description Sequence number determining the order in the pipeline.
       * @default null
       */
      seq: number | null;
      /**
       * Status
       * @description Status of the workflow stage (e.g., 1 for active, 0 for inactive).
       * @default null
       */
      status: number | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_POLICIES_FOR_A_CUSTOMER tool input.
 */
type AGENCYZOOM_GET_POLICIES_FOR_A_CUSTOMER_INPUT = {
  /**
   * Customer Id
   * @description Unique identifier for the customer.
   */
  customerId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_POLICIES_FOR_A_CUSTOMER tool output.
 */
type AGENCYZOOM_GET_POLICIES_FOR_A_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Detailed attributes of the retrieved insurance policy.
   */
  data?: {
      /**
       * Agent Id
       * @description Unique identifier for the selling agent or producer.
       * @default null
       */
      agentId: number | null;
      /**
       * Agent Name
       * @description Name of the selling agent or producer.
       * @default null
       */
      agentName: string | null;
      /**
       * Carrier Id
       * @description Unique identifier for the insurance carrier.
       * @default null
       */
      carrierId: number | null;
      /**
       * Csr Id
       * @description Unique identifier for the assigned Customer Service Representative (CSR).
       * @default null
       */
      csrId: number | null;
      /**
       * Csr Name
       * @description Name of the assigned Customer Service Representative (CSR).
       * @default null
       */
      csrName: string | null;
      /**
       * Effective Date
       * @description Policy coverage start date (YYYY-MM-DD).
       * @default null
       */
      effectiveDate: string | null;
      /**
       * Expiry Date
       * @description Policy coverage end date (YYYY-MM-DD).
       * @default null
       */
      expiryDate: string | null;
      /**
       * Id
       * @description Unique identifier for the policy.
       * @default null
       */
      id: number | null;
      /**
       * Items
       * @description Number of items covered (e.g., vehicles, properties).
       * @default null
       */
      items: number | null;
      /**
       * Lead Source Id
       * @description Identifier for the policy's lead source.
       * @default null
       */
      leadSourceId: number | null;
      /**
       * Policy Number
       * @description Policy number assigned by the carrier.
       * @default null
       */
      policyNumber: string | null;
      /**
       * Policy Type Id
       * @description Unique identifier for the policy type.
       * @default null
       */
      policyTypeId: string | null;
      /**
       * Policy Type Name
       * @description Name of the policy type (e.g., 'Auto', 'Home').
       * @default null
       */
      policyTypeName: string | null;
      /**
       * Premium
       * @description Policy premium in cents (e.g., 10000 for $100.00).
       * @default null
       */
      premium: number | null;
      /**
       * Sold Date
       * @description Date the policy was sold (YYYY-MM-DD).
       * @default null
       */
      soldDate: string | null;
      /**
       * Tag Names
       * @description Comma-separated tags for categorization or filtering (e.g., 'New Business,VIP').
       * @default null
       */
      tagNames: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_THE_CUSTOMER_DETAILS tool input.
 */
type AGENCYZOOM_GET_THE_CUSTOMER_DETAILS_INPUT = {
  /**
   * Customer Id
   * @description Unique identifier of the customer to retrieve details for.
   */
  customerId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_THE_CUSTOMER_DETAILS tool output.
 */
type AGENCYZOOM_GET_THE_CUSTOMER_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed information for the requested customer.
   */
  data?: {
      /**
       * As Customer Date
       * @description Date/time lead converted to customer or customer signed up (YYYY-MM-DD HH:MM:SS).
       * @default null
       */
      asCustomerDate: string | null;
      /**
       * Birthday
       * @description Customer's date of birth (YYYY-MM-DD).
       * @default null
       */
      birthday: string | null;
      /**
       * Business Name
       * @description Name of the customer's business, if applicable.
       * @default null
       */
      businessName: string | null;
      /**
       * City
       * @description City of the customer's primary location.
       * @default null
       */
      city: string | null;
      /**
       * Contact First Name
       * @description First name of the primary contact person for a business customer.
       * @default null
       */
      contactFirstName: string | null;
      /**
       * Contact Last Name
       * @description Last name of the primary contact person.
       * @default null
       */
      contactLastName: string | null;
      /**
       * Contact Middle Name
       * @description Middle name of the primary contact person.
       * @default null
       */
      contactMiddleName: string | null;
      /**
       * Country
       * @description Country of the customer's primary location.
       * @default null
       */
      country: string | null;
      /**
       * Create Date
       * @description Customer record creation date/time (YYYY-MM-DD HH:MM:SS).
       * @default null
       */
      createDate: string | null;
      /**
       * Custom Fields
       * @description Associated custom fields and values.
       * @default null
       */
      customFields: {
          /**
           * Field Name
           * @description Name of the custom field. Refer to GET /v1/api/custom-field-defs for available definitions.
           * @default null
           */
          fieldName: string | null;
          /**
           * Field Value
           * @description Value(s) for the custom field. Typically a single value, but can be multiple for multi-select fields.
           * @default null
           */
          fieldValue: string[] | null;
      }[] | null;
      /**
       * Customer Type
       * @description Type of the customer (e.g., 'lead', 'customer', 'prospect').
       * @default null
       */
      customerType: string | null;
      /**
       * Email
       * @description Primary email address of the customer.
       * @default null
       */
      email: string | null;
      /**
       * Files
       * @description Attached files or documents.
       * @default null
       */
      files: {
          /**
           * Comments
           * @description Additional comments or description for the file.
           * @default null
           */
          comments: string | null;
          /**
           * Create Date
           * @description File upload/creation date (YYYY-MM-DD).
           * @default null
           */
          createDate: string | null;
          /**
           * Created By
           * @description User who uploaded/created the file.
           * @default null
           */
          createdBy: string | null;
          /**
           * Doc Type
           * @description Document type code (e.g., 1 for quotes).
           * @default null
           */
          docType: number | null;
          /**
           * Entity Id
           * @description ID of the associated entity (e.g., customer, policy).
           * @default null
           */
          entityId: number | null;
          /**
           * Id
           * @description Unique identifier for the file.
           * @default null
           */
          id: number | null;
          /**
           * Media Type
           * @description File MIME type (e.g., 'application/pdf', 'image/jpeg').
           * @default null
           */
          mediaType: string | null;
          /**
           * Modified By
           * @description User who last modified the file.
           * @default null
           */
          modifiedBy: string | null;
          /**
           * Modify Date
           * @description Last modification date (YYYY-MM-DD).
           * @default null
           */
          modifyDate: string | null;
          /**
           * Size
           * @description Size of the file in bytes.
           * @default null
           */
          size: number | null;
          /**
           * Title
           * @description Title or name of the file.
           * @default null
           */
          title: string | null;
      }[] | null;
      /**
       * Firstname
       * @description First name of the individual customer or primary contact.
       * @default null
       */
      firstname: string | null;
      /**
       * Id
       * @description Unique identifier of the customer.
       * @default null
       */
      id: number | null;
      /**
       * Lastname
       * @description Last name of the individual customer or primary contact.
       * @default null
       */
      lastname: string | null;
      /**
       * Middlename
       * @description Middle name of the individual customer or primary contact.
       * @default null
       */
      middlename: string | null;
      /**
       * Notes
       * @description Recorded notes for the customer.
       * @default null
       */
      notes: {
          /**
           * Attr
           * @description Additional free-form attributes or metadata for the note.
           * @default null
           */
          attr: {
              [key: string]: unknown;
          } | null;
          /**
           * Body
           * @description Main content or body of the note.
           * @default null
           */
          body: string | null;
          /**
           * Create Date
           * @description Note creation date and time (YYYY-MM-DD HH:MM:SS).
           * @default null
           */
          createDate: string | null;
          /**
           * Created By
           * @description Creator of the note.
           * @default null
           */
          createdBy: string | null;
          /**
           * Title
           * @description Title or subject of the note.
           * @default null
           */
          title: string | null;
          /**
           * Type
           * @description Note type (e.g., 'email', 'creation', 'comment').
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Phone
       * @description Primary phone number of the customer.
       * @default null
       */
      phone: string | null;
      /**
       * Policies
       * @description Associated insurance policies.
       * @default null
       */
      policies: {
          /**
           * Agency Number
           * @description Agency location number/ID for the policy.
           * @default null
           */
          agencyNumber: string | null;
          /**
           * Agent Id
           * @description Producer (agent) ID for the policy.
           * @default null
           */
          agentId: number | null;
          /**
           * Broker Fee
           * @description Broker fee in cents.
           * @default null
           */
          brokerFee: number | null;
          /**
           * Carrier Id
           * @description Unique identifier for the insurance carrier.
           * @default null
           */
          carrierId: number | null;
          /**
           * Carrier Name
           * @description Name of the insurance carrier.
           * @default null
           */
          carrierName: string | null;
          /**
           * City
           * @description City where the insured property is located.
           * @default null
           */
          city: string | null;
          /**
           * Csr Id
           * @description CSR ID managing the policy.
           * @default null
           */
          csrId: number | null;
          /**
           * Csr Name
           * @description CSR name.
           * @default null
           */
          csrName: string | null;
          /**
           * Department Code
           * @description Department code for the policy.
           * @default null
           */
          departmentCode: string | null;
          /**
           * Department Name
           * @description Department name for the policy.
           * @default null
           */
          departmentName: string | null;
          /**
           * Effective Date
           * @description Policy coverage start date (YYYY-MM-DD).
           * @default null
           */
          effectiveDate: string | null;
          /**
           * Expiry Date
           * @description Policy coverage end date (YYYY-MM-DD).
           * @default null
           */
          expiryDate: string | null;
          /**
           * Group Code
           * @description Group code for the policy.
           * @default null
           */
          groupCode: string | null;
          /**
           * Group Name
           * @description Group name for the policy.
           * @default null
           */
          groupName: string | null;
          /**
           * Insured Id
           * @description Unique identifier for the insured entity.
           * @default null
           */
          insuredId: number | null;
          /**
           * Insured Name
           * @description Full name(s) of the insured party or parties.
           * @default null
           */
          insuredName: string | null;
          /**
           * Items
           * @description Number of items covered under the policy.
           * @default null
           */
          items: number | null;
          /**
           * Lead Source Id
           * @description Lead source ID for this policy.
           * @default null
           */
          leadSourceId: number | null;
          /**
           * Location Name
           * @description Location name for the policy.
           * @default null
           */
          locationName: string | null;
          /**
           * Points
           * @description Calculated points for the policy (e.g., for internal metrics).
           * @default null
           */
          points: number | null;
          /**
           * Policy Id
           * @description Unique identifier for the policy.
           * @default null
           */
          policyId: number | null;
          /**
           * Policy Number
           * @description Carrier-assigned policy number.
           * @default null
           */
          policyNumber: string | null;
          /**
           * Policy Type
           * @description Policy type ID (e.g., Auto, Home).
           * @default null
           */
          policyType: number | null;
          /**
           * Policy Type Name
           * @description Policy type name (e.g., 'Automobile', 'Homeowners').
           * @default null
           */
          policyTypeName: string | null;
          /**
           * Postal Code
           * @description Postal or ZIP code for the insured property.
           * @default null
           */
          postalCode: string | null;
          /**
           * Premium
           * @description Total policy premium in cents (e.g., 10000 for $100.00).
           * @default null
           */
          premium: number | null;
          /**
           * Prior Carrier Name
           * @description Previous policy carrier name.
           * @default null
           */
          priorCarrierName: string | null;
          /**
           * Prior Expiry Date
           * @description Previous policy expiry date (YYYY-MM-DD).
           * @default null
           */
          priorExpiryDate: string | null;
          /**
           * Prior Policy Number
           * @description Policy number of the insured's previous policy, if applicable.
           * @default null
           */
          priorPolicyNumber: string | null;
          /**
           * Product Category Id
           * @description Policy product category ID.
           * @default null
           */
          productCategoryId: number | null;
          /**
           * Sold Date
           * @description Date policy was sold (YYYY-MM-DD).
           * @default null
           */
          soldDate: string | null;
          /**
           * Spp
           * @description Number of Scheduled Personal Property (SPP) items included in the policy.
           * @default null
           */
          spp: number | null;
          /**
           * State
           * @description State or province where the insured property is located.
           * @default null
           */
          state: string | null;
          /**
           * Street Address
           * @description Street address of the insured property.
           * @default null
           */
          streetAddress: string | null;
          /**
           * Trailer
           * @description Number of trailer-type Scheduled Personal Property (SPP) items included in the policy.
           * @default null
           */
          trailer: number | null;
      }[] | null;
      /**
       * Secondary Email
       * @description Alternative or secondary email address for the customer.
       * @default null
       */
      secondaryEmail: string | null;
      /**
       * Secondary Phone
       * @description Alternative or secondary phone number for the customer.
       * @default null
       */
      secondaryPhone: string | null;
      /**
       * State
       * @description State or province of the customer's primary location.
       * @default null
       */
      state: string | null;
      /**
       * Street Address
       * @description Street address of the customer's primary location.
       * @default null
       */
      streetAddress: string | null;
      /**
       * Tasks
       * @description Associated tasks.
       * @default null
       */
      tasks: {
          /**
           * Assigned Date
           * @description Task assignment date (YYYY-MM-DD).
           * @default null
           */
          assignedDate: string | null;
          /**
           * Assignees
           * @description A list of users assigned to this task.
           * @default null
           */
          assignees: {
              /**
               * Firstname
               * @description First name of the assignee.
               * @default null
               */
              firstname: string | null;
              /**
               * Id
               * @description Unique identifier for the user.
               * @default null
               */
              id: number | null;
              /**
               * Is Employee
               * @description True if assignee is an employee, false if an affiliate.
               * @default true
               */
              isEmployee: boolean | null;
              /**
               * Lastname
               * @description Last name of the assignee.
               * @default null
               */
              lastname: string | null;
          }[] | null;
          /**
           * Comments
           * @description Additional notes or comments related to the task.
           * @default null
           */
          comments: string | null;
          /**
           * Complete Date
           * @description Task completion date (YYYY-MM-DD).
           * @default null
           */
          completeDate: string | null;
          /**
           * Completed By
           * @description ID of the user who completed the task.
           * @default null
           */
          completedBy: number | null;
          /**
           * Create Date
           * @description Task creation date (YYYY-MM-DD).
           * @default null
           */
          createDate: string | null;
          /**
           * Customer Id
           * @description Associated customer ID.
           * @default null
           */
          customerId: number | null;
          /**
           * Customer Name
           * @description Name of the customer associated with this task.
           * @default null
           */
          customerName: string | null;
          /**
           * CustomerType
           * @description Associated customer type (e.g., 'customer', 'lead').
           * @default null
           * @enum {string|null}
           */
          customerType: "customer" | "lead" | null;
          /**
           * Due Date
           * @description Task due date (YYYY-MM-DD).
           * @default null
           */
          dueDate: string | null;
          /**
           * Duration
           * @description Estimated or actual duration of the task in minutes.
           * @default null
           */
          duration: number | null;
          /**
           * Id
           * @description Unique identifier for the task.
           * @default null
           */
          id: number | null;
          /**
           * Is Completed By Employee
           * @description True if completed by an employee, false if by an affiliate.
           * @default null
           */
          isCompletedByEmployee: boolean | null;
          /**
           * Status
           * @description Task status: 0 (Open), 1 (Done), 2 (Cancelled).
           * @default null
           * @enum {integer|null}
           */
          status: 0 | 1 | 2 | null;
          /**
           * Task Date Time
           * @description Scheduled date/time for the task (YYYY-MM-DD or YYYY-MM-DD HH:MM:SS).
           * @default null
           */
          taskDateTime: string | null;
          /**
           * Time Specific
           * @description True if task has a specific time, false if all-day.
           * @default null
           */
          timeSpecific: boolean | null;
          /**
           * Title
           * @description Title or subject of the task.
           * @default null
           */
          title: string | null;
      }[] | null;
      /**
       * Total Premium
       * @description Total premium from active policies, in cents.
       * @default null
       */
      totalPremium: number | null;
      /**
       * Zip
       * @description Postal or ZIP code of the customer's primary location.
       * @default null
       */
      zip: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_THE_CUSTOMER_TASKS tool input.
 */
type AGENCYZOOM_GET_THE_CUSTOMER_TASKS_INPUT = {
  /**
   * Customer Id
   * @description Unique identifier for the customer whose tasks are to be retrieved.
   */
  customerId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_THE_CUSTOMER_TASKS tool output.
 */
type AGENCYZOOM_GET_THE_CUSTOMER_TASKS_OUTPUT = {
  /**
   * Data
   * @description A list of task objects associated with the specified customer.
   */
  data?: {
      /**
       * Assigned Date
       * @description Date when the task was assigned, typically in YYYY-MM-DD format.
       * @default null
       */
      assignedDate: string | null;
      /**
       * Assignees
       * @description A list of user objects assigned to this task.
       * @default null
       */
      assignees: {
          /**
           * Firstname
           * @description First name of the assignee.
           * @default null
           */
          firstname: string | null;
          /**
           * Id
           * @description Unique identifier for the user.
           * @default null
           */
          id: number | null;
          /**
           * Is Employee
           * @description Indicates if the assignee is an employee (true) or an affiliate (false).
           * @default true
           */
          isEmployee: boolean | null;
          /**
           * Lastname
           * @description Last name of the assignee.
           * @default null
           */
          lastname: string | null;
      }[] | null;
      /**
       * Comments
       * @description Additional notes or comments related to the task.
       * @default null
       */
      comments: string | null;
      /**
       * Complete Date
       * @description Date when the task was completed, typically in YYYY-MM-DD format.
       * @default null
       */
      completeDate: string | null;
      /**
       * Completed By
       * @description Unique identifier (ID) of the user who completed this task.
       * @default null
       */
      completedBy: number | null;
      /**
       * Create Date
       * @description Date when the task was created, typically in YYYY-MM-DD format.
       * @default null
       */
      createDate: string | null;
      /**
       * Customer Id
       * @description Unique identifier (ID) of the customer associated with this task.
       * @default null
       */
      customerId: number | null;
      /**
       * Customer Name
       * @description Name of the customer associated with this task.
       * @default null
       */
      customerName: string | null;
      /**
       * CustomerType
       * @description Type of the customer associated with this task (e.g., 'customer' or 'lead').
       * @default null
       * @enum {string|null}
       */
      customerType: "customer" | "lead" | null;
      /**
       * Due Date
       * @description Date by which the task is due, typically in YYYY-MM-DD format.
       * @default null
       */
      dueDate: string | null;
      /**
       * Duration
       * @description Duration of the task in minutes.
       * @default null
       */
      duration: number | null;
      /**
       * Id
       * @description Unique identifier for the task.
       * @default null
       */
      id: number | null;
      /**
       * Is Completed By Employee
       * @description Indicates if the task was completed by an employee (true) or an affiliate (false).
       * @default null
       */
      isCompletedByEmployee: boolean | null;
      /**
       * Status
       * @description Current status of the task. (0: Open, 1: Done, 2: Cancelled).
       * @default null
       * @enum {integer|null}
       */
      status: 0 | 1 | 2 | null;
      /**
       * Task Date Time
       * @description Specific date and time for the task, if applicable. Example '2020-12-12' suggests YYYY-MM-DD format.
       * @default null
       */
      taskDateTime: string | null;
      /**
       * Time Specific
       * @description Indicates if the task has a specific time associated with it (true) or if it's a general task for the due date (false).
       * @default null
       */
      timeSpecific: boolean | null;
      /**
       * Title
       * @description Title or subject of the task.
       * @default null
       */
      title: string | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_THE_DRIVER_DETAILS tool input.
 */
type AGENCYZOOM_GET_THE_DRIVER_DETAILS_INPUT = {
  /**
   * Driver Id
   * @description The unique identifier of the driver whose details are to be retrieved.
   */
  driverId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_THE_DRIVER_DETAILS tool output.
 */
type AGENCYZOOM_GET_THE_DRIVER_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed information for the requested driver.
   */
  data?: {
      /**
       * Birthday
       * @description The driver's date of birth.
       * @default null
       */
      birthday: string | null;
      /**
       * First Name
       * @description The first name of the driver.
       * @default null
       */
      firstName: string | null;
      /**
       * Gender
       * @description The driver's gender.
       * @default null
       * @enum {string|null}
       */
      gender: "M" | "F" | "U" | "X" | null;
      /**
       * Id
       * @description The unique identifier for the driver.
       * @default null
       */
      id: number | null;
      /**
       * Last Name
       * @description The last name of the driver.
       * @default null
       */
      lastName: string | null;
      /**
       * License Number
       * @description The driver's license number.
       * @default null
       */
      licenseNumber: string | null;
      /**
       * MaritalStatus
       * @description The driver's marital status.
       * @default null
       * @enum {integer|null}
       */
      maritalStatus: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | null;
      /**
       * Middle Name
       * @description The middle name of the driver, if available.
       * @default null
       */
      middleName: string | null;
      /**
       * Relationship
       * @description The driver's relationship to the named insured.
       * @default null
       * @enum {string|null}
       */
      relationship: "IN" | "SP" | "PA" | "CH" | "OT" | null;
      /**
       * State Licensed
       * @description The two-letter state abbreviation where the driver is licensed (e.g., NY for New York).
       * @default null
       */
      stateLicensed: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_THE_LEAD_DETAILS tool input.
 */
type AGENCYZOOM_GET_THE_LEAD_DETAILS_INPUT = {
  /**
   * Lead Id
   * @description Unique identifier for the lead whose details are to be retrieved.
   */
  leadId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_THE_LEAD_DETAILS tool output.
 */
type AGENCYZOOM_GET_THE_LEAD_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed information for the requested lead.
   */
  data?: {
      /**
       * Annual Revenue
       * @description Annual revenue of the business.
       * @default null
       */
      annualRevenue: number | null;
      /**
       * Assign To Firstname
       * @description First name of the assigned owner of the lead.
       * @default null
       */
      assignToFirstname: string | null;
      /**
       * Assign To Lastname
       * @description Last name of the assigned owner of the lead.
       * @default null
       */
      assignToLastname: string | null;
      /**
       * Assigned To
       * @description User ID of the agent or employee assigned to this lead.
       * @default null
       */
      assignedTo: number | null;
      /**
       * Birthday
       * @description Lead's date of birth. Format: YYYY-MM-DD or MM/DD/YYYY.
       * @default null
       */
      birthday: string | null;
      /**
       * Business Classification
       * @description Name of the business classification or industry type.
       * @default null
       */
      businessClassification: string | null;
      /**
       * Business Classification Code
       * @description Code for the business classification.
       * @default null
       */
      businessClassificationCode: string | null;
      /**
       * Business Classification Id
       * @description Identifier for the business classification.
       * @default null
       */
      businessClassificationId: number | null;
      /**
       * Business Entity
       * @description Type of business entity (e.g., 'LLC', 'Corporation', 'Sole Proprietorship').
       * @default null
       */
      businessEntity: string | null;
      /**
       * City
       * @description City of the lead's address.
       * @default null
       */
      city: string | null;
      /**
       * Comments
       * @description General comments or notes about the lead.
       * @default null
       */
      comments: string | null;
      /**
       * Contact Date
       * @description Date of the last contact with the lead. Format: YYYY-MM-DD.
       * @default null
       */
      contactDate: string | null;
      /**
       * Contact First Name
       * @description First name of the primary contact, if the lead is a business.
       * @default null
       */
      contactFirstName: string | null;
      /**
       * Contact Last Name
       * @description Last name of the primary contact, if the lead is a business.
       * @default null
       */
      contactLastName: string | null;
      /**
       * Contact Middle Name
       * @description Middle name of the primary contact, if the lead is a business.
       * @default null
       */
      contactMiddleName: string | null;
      /**
       * Converted Household Id
       * @description Identifier of the household account if the lead was converted to a customer.
       * @default null
       */
      convertedHouseholdId: number | null;
      /**
       * Country
       * @description Country of the lead's address.
       * @default null
       */
      country: string | null;
      /**
       * Create Date
       * @description Date the lead was created in the system. Format: YYYY-MM-DD.
       * @default null
       */
      createDate: string | null;
      /**
       * Credit To Firstname
       * @description First name of the user who should receive credit for this lead.
       * @default null
       */
      creditToFirstname: string | null;
      /**
       * Credit To Lastname
       * @description Last name of the user who should receive credit for this lead.
       * @default null
       */
      creditToLastname: string | null;
      /**
       * Csr Firstname
       * @description First name of the assigned CSR.
       * @default null
       */
      csrFirstname: string | null;
      /**
       * Csr Id
       * @description User ID of the Customer Service Representative (CSR) assigned to the lead.
       * @default null
       */
      csrId: number | null;
      /**
       * Csr Lastname
       * @description Last name of the assigned CSR.
       * @default null
       */
      csrLastname: string | null;
      /**
       * Custom Fields
       * @description List of custom fields and their values associated with the lead.
       * @default null
       */
      customFields: {
          /**
           * Field Name
           * @description Field name. To find valid field names, refer to the getCustomFieldDefs operation: https://app.agencyzoom.com/openapi/#tag/Configuration-and-Settings/operation/getCustomFieldDefs
           * @default null
           */
          fieldName: string | null;
          /**
           * Field Value
           * @description Value(s) of the custom field. For multi-select custom fields, this can be a list of selected options; otherwise, it's typically a single value provided as a list with one element.
           * @default null
           */
          fieldValue: string[] | null;
      }[] | null;
      /**
       * Department Code
       * @description Code identifying the lead's department (if applicable).
       * @default null
       */
      departmentCode: string | null;
      /**
       * Department Name
       * @description Name of the lead's department (if applicable).
       * @default null
       */
      departmentName: string | null;
      /**
       * Email
       * @description Primary email address of the lead.
       * @default null
       */
      email: string | null;
      /**
       * Enter Stage Date
       * @description Date the lead entered its current workflow stage. Format: YYYY-MM-DD or similar date string.
       * @default null
       */
      enterStageDate: string | null;
      /**
       * Fein
       * @description Federal Employer Identification Number (FEIN), if the lead is a business.
       * @default null
       */
      fein: string | null;
      /**
       * Firstname
       * @description First name of the lead.
       * @default null
       */
      firstname: string | null;
      /**
       * Group Code
       * @description Code identifying the lead's group (if applicable).
       * @default null
       */
      groupCode: string | null;
      /**
       * Group Name
       * @description Name of the lead's group (if applicable).
       * @default null
       */
      groupName: string | null;
      /**
       * Id
       * @description Unique identifier of the lead.
       * @default null
       */
      id: number | null;
      /**
       * Last Activity Date
       * @description Date of the last recorded activity for the lead, used for smart-cycle automation and identifying inactive leads. Format: YYYY-MM-DD or similar date string.
       * @default null
       */
      lastActivityDate: string | null;
      /**
       * Lastname
       * @description Last name of the lead.
       * @default null
       */
      lastname: string | null;
      /**
       * Lead Source Id
       * @description Identifier of the lead's source.
       * @default null
       */
      leadSourceId: number | null;
      /**
       * Lead Source Name
       * @description Name of the lead's source (e.g., 'Website', 'Referral').
       * @default null
       */
      leadSourceName: string | null;
      /**
       * Lead Type
       * @description Type of the lead (e.g., 'Personal', 'Commercial').
       * @default null
       */
      leadType: string | null;
      /**
       * Location Code
       * @description Code identifying the lead's location or branch.
       * @default null
       */
      locationCode: string | null;
      /**
       * Location Name
       * @description Name of the lead's location or branch.
       * @default null
       */
      locationName: string | null;
      /**
       * Loss Reason
       * @description Reason provided if the lead's status is 'LOST'.
       * @default null
       */
      lossReason: string | null;
      /**
       * Marital Status
       * @description Marital status of the lead (e.g., 'Single', 'Married').
       * @default null
       */
      maritalStatus: string | null;
      /**
       * Middlename
       * @description Middle name of the lead.
       * @default null
       */
      middlename: string | null;
      /**
       * Next Expiration Date
       * @description The nearest upcoming policy expiration date relevant to this lead. Format: YYYY-MM-DD or similar date string.
       * @default null
       */
      nextExpirationDate: string | null;
      /**
       * Nickname
       * @description Nickname of the lead.
       * @default null
       */
      nickname: string | null;
      /**
       * Number Of Employees
       * @description Total number of employees in the business.
       * @default null
       */
      numberOfEmployees: number | null;
      /**
       * Opportunities
       * @description List of sales opportunities associated with the lead.
       * @default null
       */
      opportunities: {
          /**
           * Carrier Id
           * @description Identifier for the carrier associated with the opportunity.
           * @default null
           */
          carrierId: number | null;
          /**
           * Carrier Name
           * @description Name of the carrier for this opportunity.
           * @default null
           */
          carrierName: string | null;
          /**
           * Id
           * @description Unique identifier for the opportunity.
           * @default null
           */
          id: number | null;
          /**
           * Items
           * @description Number of items associated with this opportunity (e.g., number of vehicles for an auto policy).
           * @default null
           */
          items: number | null;
          /**
           * Premium
           * @description Premium amount for this opportunity.
           * @default null
           */
          premium: number | null;
          /**
           * Product Line Id
           * @description Identifier for the product line associated with the opportunity.
           * @default null
           */
          productLineId: number | null;
          /**
           * Product Name
           * @description Name of the insurance product for this opportunity.
           * @default null
           */
          productName: string | null;
          /**
           * Sold
           * @description Indicates if this opportunity resulted in a sale (True) or not (False).
           * @default null
           */
          sold: boolean | null;
      }[] | null;
      /**
       * Payroll
       * @description Total annual payroll of the business.
       * @default null
       */
      payroll: number | null;
      /**
       * Phone
       * @description Primary phone number of the lead.
       * @default null
       */
      phone: string | null;
      /**
       * Premium
       * @description Total premium amount from policies sold to this lead.
       * @default null
       */
      premium: number | null;
      /**
       * Quote Date
       * @description Date when a quote was last provided to the lead. Format: YYYY-MM-DD.
       * @default null
       */
      quoteDate: string | null;
      /**
       * Quoted
       * @description Total premium amount from quotes provided to this lead.
       * @default null
       */
      quoted: number | null;
      /**
       * Quotes
       * @description List of quotes or policies associated with the lead.
       * @default null
       */
      quotes: {
          /**
           * Carrier Id
           * @description Identifier for the carrier associated with the quote.
           * @default null
           */
          carrierId: number | null;
          /**
           * Carrier Name
           * @description Name of the carrier for this quote.
           * @default null
           */
          carrierName: string | null;
          /**
           * Id
           * @description Unique identifier for the quote.
           * @default null
           */
          id: number | null;
          /**
           * Items
           * @description Number of items associated with this quote (e.g., number of vehicles for an auto policy).
           * @default null
           */
          items: number | null;
          /**
           * Premium
           * @description Premium amount for this quote.
           * @default null
           */
          premium: number | null;
          /**
           * Product Line Id
           * @description Identifier for the product line associated with the quote.
           * @default null
           */
          productLineId: number | null;
          /**
           * Product Name
           * @description Name of the insurance product for this quote.
           * @default null
           */
          productName: string | null;
          /**
           * Sold
           * @description Indicates if this quote was converted to a policy (True) or not (False).
           * @default null
           */
          sold: boolean | null;
      }[] | null;
      /**
       * Secondary Email
       * @description Secondary email address of the lead.
       * @default null
       */
      secondaryEmail: string | null;
      /**
       * Secondary Phone
       * @description Secondary phone number of the lead.
       * @default null
       */
      secondaryPhone: string | null;
      /**
       * Sold Date
       * @description Date the lead was marked as 'WON' or sold. Format: YYYY-MM-DD.
       * @default null
       */
      soldDate: string | null;
      /**
       * State
       * @description State or province of the lead's address.
       * @default null
       */
      state: string | null;
      /**
       * Status
       * @description Current status of the lead (0: NEW, 1: QUOTED, 2: WON, 3: LOST, 4: CONTACTED, 5: XDATED).
       * @default null
       * @enum {integer|null}
       */
      status: 0 | 1 | 2 | 3 | 4 | 5 | null;
      /**
       * Street Address
       * @description Street address of the lead.
       * @default null
       */
      streetAddress: string | null;
      /**
       * Tag Names
       * @description List of tag names associated with the lead.
       * @default null
       */
      tagNames: string[] | null;
      /**
       * Task Count
       * @description Count of open tasks currently associated with this lead.
       * @default null
       */
      taskCount: number | null;
      /**
       * Total Opportunity Premium
       * @description Sum of premium amounts from all opportunities associated with the lead.
       * @default null
       */
      totalOpportunityPremium: number | null;
      /**
       * Total Policy Premium
       * @description Sum of premium amounts from all sold policies associated with the lead.
       * @default null
       */
      totalPolicyPremium: number | null;
      /**
       * Total Quote Premium
       * @description Sum of premium amounts from all quotes associated with the lead.
       * @default null
       */
      totalQuotePremium: number | null;
      /**
       * Workflow Id
       * @description Identifier of the workflow this lead is currently in.
       * @default null
       */
      workflowId: number | null;
      /**
       * Workflow Name
       * @description Name of the current workflow.
       * @default null
       */
      workflowName: string | null;
      /**
       * Workflow Stage Id
       * @description Identifier of the current stage within the workflow.
       * @default null
       */
      workflowStageId: number | null;
      /**
       * Workflow Stage Name
       * @description Name of the current workflow stage.
       * @default null
       */
      workflowStageName: string | null;
      /**
       * X Date
       * @description Expiration date, typically for an existing policy the lead may have, relevant for renewal (X-Date). Format: YYYY-MM-DD.
       * @default null
       */
      xDate: string | null;
      /**
       * X Date Type
       * @description Type of event associated with the X-Date (e.g., 'Policy Expiration', 'Renewal').
       * @default null
       */
      xDateType: string | null;
      /**
       * Year Business Started
       * @description Year the business commenced operations.
       * @default null
       */
      yearBusinessStarted: number | null;
      /**
       * Zip
       * @description ZIP or postal code of the lead's address.
       * @default null
       */
      zip: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_THE_OPPORTUNITIES_FOR_A_LEAD tool input.
 */
type AGENCYZOOM_GET_THE_OPPORTUNITIES_FOR_A_LEAD_INPUT = {
  /**
   * Lead Id
   * @description The unique identifier of the lead for which opportunities are to be fetched.
   */
  leadId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_THE_OPPORTUNITIES_FOR_A_LEAD tool output.
 */
type AGENCYZOOM_GET_THE_OPPORTUNITIES_FOR_A_LEAD_OUTPUT = {
  /**
   * Data
   * @description A list of opportunity objects, each detailing an opportunity associated with the lead.
   */
  data?: {
      /**
       * Carrier Id
       * @description Identifier for the associated carrier.
       * @default null
       */
      carrierId: number | null;
      /**
       * Custom Fields
       * @description List of custom fields and their values.
       * @default null
       */
      customFields: {
          /**
           * Field Name
           * @description Name of the custom field. For available names, see custom field definitions at https://app.agencyzoom.com/openapi/#tag/Configuration-and-Settings/operation/getCustomFieldDefs
           * @default null
           */
          fieldName: string | null;
          /**
           * Field Value
           * @description Value(s) for the custom field; fields supporting multiple selections will list all selected string values.
           * @default null
           */
          fieldValue: string[] | null;
      }[] | null;
      /**
       * Id
       * @description Unique identifier of the opportunity item.
       * @default null
       */
      id: number | null;
      /**
       * Items
       * @description Number of items included.
       * @default null
       */
      items: number | null;
      /**
       * Premium
       * @description Premium amount.
       * @default null
       */
      premium: number | null;
      /**
       * Product Line Id
       * @description Identifier for the associated product line.
       * @default null
       */
      productLineId: number | null;
      /**
       * Property Address
       * @description List of associated property addresses.
       * @default null
       */
      propertyAddress: {
          /**
           * Address1
           * @description Primary street address line.
           * @default null
           */
          address1: string | null;
          /**
           * Address2
           * @description Secondary street address line (e.g., apt, suite, unit).
           * @default null
           */
          address2: string | null;
          /**
           * City
           * @description City for the property address.
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description Country code for the property address.
           * @default null
           */
          country: string | null;
          /**
           * Id
           * @description Unique identifier of the property address.
           * @default null
           */
          id: number | null;
          /**
           * Lead Opportunity Id
           * @description Identifier of the associated lead opportunity.
           * @default null
           */
          leadOpportunityId: number | null;
          /**
           * State
           * @description Two-letter state code for the property address.
           * @default null
           */
          state: string | null;
          /**
           * Use Mailing Address As Location
           * @description Indicates if the lead's mailing address is used as the property location (1 for true, 0 for false). If true, the lead's address is copied.
           * @default null
           */
          useMailingAddressAsLocation: number | null;
          /**
           * Zip
           * @description Postal ZIP code for the property address.
           * @default null
           */
          zip: string | null;
      }[] | null;
      /**
       * Status
       * @description The status of the opportunity: 0 for inactive, 1 for active.
       * @default null
       */
      status: number | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_GET_THE_OPPORTUNITY_DETAILS tool input.
 */
type AGENCYZOOM_GET_THE_OPPORTUNITY_DETAILS_INPUT = {
  /**
   * Opportunity Id
   * @description The unique identifier for the opportunity to retrieve.
   */
  opportunityId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_THE_OPPORTUNITY_DETAILS tool output.
 */
type AGENCYZOOM_GET_THE_OPPORTUNITY_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed information for the retrieved opportunity.
   */
  data?: {
      /**
       * Carrier Id
       * @description Identifier for the insurance carrier associated with the opportunity.
       * @default null
       */
      carrierId: number | null;
      /**
       * Custom Fields
       * @description A list of custom fields and their values associated with the opportunity.
       * @default null
       */
      customFields: {
          /**
           * Field Name
           * @description Name of the custom field. To find available custom field names and their definitions, refer to the 'getCustomFieldDefs' operation under Configuration and Settings.
           * @default null
           */
          fieldName: string | null;
          /**
           * Field Value
           * @description Value(s) associated with the custom field, provided as a list of strings. For single-value custom fields, this list will contain one string. For fields that support multiple selections (e.g., multi-select dropdowns), this list will contain multiple strings.
           * @default null
           */
          fieldValue: string[] | null;
      }[] | null;
      /**
       * Id
       * @description The unique identifier of the opportunity.
       * @default null
       */
      id: number | null;
      /**
       * Items
       * @description The number of items (e.g., vehicles, properties) related to the opportunity.
       * @default null
       */
      items: number | null;
      /**
       * Premium
       * @description The premium amount associated with the opportunity.
       * @default null
       */
      premium: number | null;
      /**
       * Product Line Id
       * @description Identifier for the product line associated with the opportunity (e.g., Auto, Home).
       * @default null
       */
      productLineId: number | null;
      /**
       * Property Address
       * @description A list of property addresses associated with the opportunity. An opportunity might have one or more addresses.
       * @default null
       */
      propertyAddress: {
          /**
           * Address1
           * @description The primary street address line for the property.
           * @default null
           */
          address1: string | null;
          /**
           * Address2
           * @description The secondary street address line (e.g., apartment, suite) for the property, if applicable.
           * @default null
           */
          address2: string | null;
          /**
           * City
           * @description The city name for the property address.
           * @default null
           */
          city: string | null;
          /**
           * Country
           * @description The country code (e.g., 'USA') for the property address.
           * @default null
           */
          country: string | null;
          /**
           * Id
           * @description The unique identifier for this property address record.
           * @default null
           */
          id: number | null;
          /**
           * Lead Opportunity Id
           * @description The unique identifier of the lead or opportunity to which this address is linked.
           * @default null
           */
          leadOpportunityId: number | null;
          /**
           * State
           * @description The state code (e.g., 'FL' for Florida) for the property address.
           * @default null
           */
          state: string | null;
          /**
           * Use Mailing Address As Location
           * @description Indicates if the lead's mailing address should be used as the opportunity's property address. Default is 1 (true). Set to 1 for true, or 0 for false. If true (1), the lead's address information is copied to the opportunity's property address.
           * @default null
           */
          useMailingAddressAsLocation: number | null;
          /**
           * Zip
           * @description The postal or ZIP code for the property address.
           * @default null
           */
          zip: string | null;
      }[] | null;
      /**
       * Status
       * @description Current status of the opportunity. 0 indicates inactive, 1 indicates active.
       * @default null
       */
      status: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_THE_TASK_DETAILS tool input.
 */
type AGENCYZOOM_GET_THE_TASK_DETAILS_INPUT = {
  /**
   * Task Id
   * @description Unique identifier of the task to retrieve.
   */
  taskId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_THE_TASK_DETAILS tool output.
 */
type AGENCYZOOM_GET_THE_TASK_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Object containing the detailed information of the retrieved task.
   */
  data?: {
      /**
       * Assigned Date
       * @description Date when the task was assigned, in YYYY-MM-DD format.
       * @default null
       */
      assignedDate: string | null;
      /**
       * Assignees
       * @description List of users assigned to the task.
       * @default null
       */
      assignees: {
          /**
           * Firstname
           * @description First name of the assigned user.
           * @default null
           */
          firstname: string | null;
          /**
           * Id
           * @description Unique identifier of the assigned user.
           * @default null
           */
          id: number | null;
          /**
           * Is Employee
           * @description Indicates if the assigned user is an employee (true) or an affiliate (false).
           * @default true
           */
          isEmployee: boolean | null;
          /**
           * Lastname
           * @description Last name of the assigned user.
           * @default null
           */
          lastname: string | null;
      }[] | null;
      /**
       * Comments
       * @description Additional notes, comments, or description for the task.
       * @default null
       */
      comments: string | null;
      /**
       * Complete Date
       * @description Date when the task was completed, in YYYY-MM-DD format. Null if not completed.
       * @default null
       */
      completeDate: string | null;
      /**
       * Completed By
       * @description The unique identifier of the user who completed this task. Null if not completed or if completion is not attributed to a specific user.
       * @default null
       */
      completedBy: number | null;
      /**
       * Create Date
       * @description Date when the task was created, in YYYY-MM-DD format.
       * @default null
       */
      createDate: string | null;
      /**
       * Customer Id
       * @description Unique identifier of the customer or lead associated with this task.
       * @default null
       */
      customerId: number | null;
      /**
       * Customer Name
       * @description Full name of the customer or lead associated with this task.
       * @default null
       */
      customerName: string | null;
      /**
       * CustomerType
       * @description Type of the entity associated with the task, either 'customer' or 'lead'.
       * @default null
       * @enum {string|null}
       */
      customerType: "customer" | "lead" | null;
      /**
       * Due Date
       * @description Date when the task is due, in YYYY-MM-DD format.
       * @default null
       */
      dueDate: string | null;
      /**
       * Duration
       * @description Duration of the task in minutes.
       * @default null
       */
      duration: number | null;
      /**
       * Id
       * @description Unique identifier of the task.
       * @default null
       */
      id: number | null;
      /**
       * Is Completed By Employee
       * @description Indicates if the task was completed by an employee (true) or an affiliate (false). Null if not completed.
       * @default null
       */
      isCompletedByEmployee: boolean | null;
      /**
       * Status
       * @description Current status of the task. Legend: 0 for Open, 1 for Done, 2 for Cancelled.
       * @default null
       * @enum {integer|null}
       */
      status: 0 | 1 | 2 | null;
      /**
       * Task Date Time
       * @description Specific date and time for the task, if applicable (e.g., for meetings). Often in ISO 8601 format or similar.
       * @default null
       */
      taskDateTime: string | null;
      /**
       * Time Specific
       * @description Indicates whether the task is scheduled for a specific time of day (true) or is just due on a particular day (false).
       * @default null
       */
      timeSpecific: boolean | null;
      /**
       * Title
       * @description Title or subject of the task.
       * @default null
       */
      title: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_THE_VEHICLE_DETAILS tool input.
 */
type AGENCYZOOM_GET_THE_VEHICLE_DETAILS_INPUT = {
  /**
   * Vehicle Id
   * @description Unique identifier for the vehicle, often linked to an opportunity within AgencyZoom.
   */
  vehicleId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_THE_VEHICLE_DETAILS tool output.
 */
type AGENCYZOOM_GET_THE_VEHICLE_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Detailed information of the requested vehicle.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the driver associated with this vehicle, if applicable.
       * @default null
       */
      id: number | null;
      /**
       * Make
       * @description Make or manufacturer of the vehicle.
       * @default null
       */
      make: string | null;
      /**
       * Model
       * @description Model name of the vehicle.
       * @default null
       */
      model: string | null;
      /**
       * Ownership
       * @description Ownership status of the vehicle.
       * @default null
       * @enum {string|null}
       */
      ownership: "Owned" | "Financed" | "Leased" | null;
      /**
       * Vin
       * @description Vehicle Identification Number (VIN).
       * @default null
       */
      vin: string | null;
      /**
       * Year
       * @description Manufacturing year of the vehicle.
       * @default null
       */
      year: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_THREAD_DETAILS tool input.
 */
type AGENCYZOOM_GET_THREAD_DETAILS_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_GET_THREAD_DETAILS tool output.
 */
type AGENCYZOOM_GET_THREAD_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Contains the retrieved email thread details, including messages and count.
   */
  data?: {
      /**
       * Message Count
       * @description Total count of messages in the retrieved thread(s).
       * @default null
       */
      messageCount: number | null;
      /**
       * Message Info
       * @description List of messages retrieved for the thread(s).
       * @default null
       */
      messageInfo: {
          /**
           * Agent Firstname
           * @description Associated agent's first name.
           * @default null
           */
          agentFirstname: string | null;
          /**
           * Agent Lastname
           * @description Associated agent's last name.
           * @default null
           */
          agentLastname: string | null;
          /**
           * Bcc
           * @description Recipient(s) in the 'Bcc' field.
           * @default null
           */
          bcc: {
              /**
               * Email
               * @description Email address.
               * @default null
               */
              email: string | null;
              /**
               * Name
               * @description Display name for the email address.
               * @default null
               */
              name: string | null;
          }[] | null;
          /**
           * Body
           * @description Full HTML body of the email message.
           * @default null
           */
          body: string | null;
          /**
           * Cc
           * @description Recipient(s) in the 'Cc' field.
           * @default null
           */
          cc: {
              /**
               * Email
               * @description Email address.
               * @default null
               */
              email: string | null;
              /**
               * Name
               * @description Display name for the email address.
               * @default null
               */
              name: string | null;
          }[] | null;
          /**
           * Contact Email
           * @description Email address of the contact.
           * @default null
           */
          contactEmail: string | null;
          /**
           * Contact Id
           * @description ID of the associated contact (customer referral or household).
           * @default null
           */
          contactId: number | null;
          /**
           * Contact Name
           * @description Name of the associated contact.
           * @default null
           */
          contactName: string | null;
          /**
           * Contact Phone
           * @description Phone number of the contact.
           * @default null
           */
          contactPhone: string | null;
          /**
           * Contact Type
           * @description Type of contact (e.g., customer, lead).
           * @default null
           */
          contactType: string | null;
          /**
           * Download All Att Url
           * @description URL to download all message attachments as a single archive.
           * @default null
           */
          downloadAllAttUrl: string | null;
          /**
           * Files
           * @description List of file attachments (excluding inline images).
           * @default null
           */
          files: {
              /**
               * Doc File Name
               * @description User-facing or original document name, if different from filename.
               * @default null
               */
              docFileName: string | null;
              /**
               * Doc Media Type
               * @description Media type (MIME type) of the document file.
               * @default null
               */
              docMediaType: string | null;
              /**
               * Filename
               * @description Name of the file, typically the stored name.
               * @default null
               */
              filename: string | null;
              /**
               * Id
               * @description Unique identifier for the file.
               * @default null
               */
              id: number | null;
              /**
               * Size
               * @description Size of the file in bytes.
               * @default null
               */
              size: number | null;
              /**
               * Url
               * @description URL to access the file.
               * @default null
               */
              url: string | null;
              /**
               * Vendor Id
               * @description Vendor-specific ID for the file (e.g., Nylas ID).
               * @default null
               */
              vendorId: string | null;
          }[] | null;
          /**
           * Froms
           * @description Sender(s) of the email message.
           * @default null
           */
          froms: {
              /**
               * Email
               * @description Email address.
               * @default null
               */
              email: string | null;
              /**
               * Name
               * @description Display name for the email address.
               * @default null
               */
              name: string | null;
          }[] | null;
          /**
           * Id
           * @description Unique identifier for the message.
           * @default null
           */
          id: number | null;
          /**
           * Image Files
           * @description List of image file attachments.
           * @default null
           */
          imageFiles: {
              /**
               * Doc File Name
               * @description User-facing or original document name associated with the image, if different from filename.
               * @default null
               */
              docFileName: string | null;
              /**
               * Doc Media Type
               * @description Media type (MIME type) of the document associated with the image.
               * @default null
               */
              docMediaType: string | null;
              /**
               * Filename
               * @description Name of the image file, typically the stored name.
               * @default null
               */
              filename: string | null;
              /**
               * Id
               * @description Unique identifier for the image file.
               * @default null
               */
              id: number | null;
              /**
               * Size
               * @description Size of the image file in bytes.
               * @default null
               */
              size: number | null;
              /**
               * Url
               * @description URL to access the image file.
               * @default null
               */
              url: string | null;
              /**
               * Vendor Id
               * @description Vendor-specific ID for the image file (e.g., Nylas ID).
               * @default null
               */
              vendorId: string | null;
          }[] | null;
          /**
           * Message Date
           * @description Message creation date (local timezone).
           * @default null
           */
          messageDate: string | null;
          /**
           * Message Date Utc
           * @description Message creation date (UTC).
           * @default null
           */
          messageDateUTC: string | null;
          /**
           * Message Id
           * @description Synced message ID from the provider.
           * @default null
           */
          messageId: string | null;
          /**
           * Outbound
           * @description Indicates if message is outbound (1 for sent, 0 for received).
           * @default null
           * @enum {integer|null}
           */
          outbound: 0 | 1 | null;
          /**
           * Provider Sms Message Sid
           * @description Provider-specific SID if the message is an SMS.
           * @default null
           */
          providerSmsMessageSid: unknown;
          /**
           * Sender Name
           * @description Name of the sender or sending system (e.g., AgencyZoom).
           * @default null
           */
          senderName: string | null;
          /**
           * Snippet
           * @description Short preview snippet of the message body.
           * @default null
           */
          snippet: string | null;
          /**
           * Status
           * @description Tracking status of the customer email (e.g., opened, bounced).
           * @default null
           */
          status: string | null;
          /**
           * Subject
           * @description Subject line of the email message.
           * @default null
           */
          subject: string | null;
          /**
           * Thread Id
           * @description Synced thread ID from the provider.
           * @default null
           */
          threadId: string | null;
          /**
           * Tos
           * @description Recipient(s) in the 'To' field.
           * @default null
           */
          tos: {
              /**
               * Email
               * @description Email address.
               * @default null
               */
              email: string | null;
              /**
               * Name
               * @description Display name for the email address.
               * @default null
               */
              name: string | null;
          }[] | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_LINK_A_DRIVER_TO_OPPORTUNITY tool input.
 */
type AGENCYZOOM_LINK_A_DRIVER_TO_OPPORTUNITY_INPUT = {
  /**
   * Driver Id
   * @description The unique identifier for the existing driver (e.g., sales agent, team member) who will be linked to the opportunity.
   */
  driverId?: number;
  /**
   * Opportunity Id
   * @description The unique identifier for the existing opportunity to which the driver will be linked.
   */
  opportunityId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_LINK_A_DRIVER_TO_OPPORTUNITY tool output.
 */
type AGENCYZOOM_LINK_A_DRIVER_TO_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description The structured data returned by the API, detailing the outcome of the link operation.
   */
  data?: {
      /**
       * Id
       * @description An optional identifier related to the performed operation, which could be the ID of the linked opportunity or another relevant record ID.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional message providing confirmation or additional details about the result of the link operation.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description A boolean indicating the success of the link operation. `True` (or 1) signifies success, while `False` (or 0) signifies failure.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_LINK_A_VEHICLE_TO_OPPORTUNITY tool input.
 */
type AGENCYZOOM_LINK_A_VEHICLE_TO_OPPORTUNITY_INPUT = {
  /**
   * Opportunity Id
   * @description Identifier of the opportunity to which the vehicle will be linked.
   */
  opportunityId?: number;
  /**
   * Vehicle Id
   * @description Identifier of the vehicle to be linked to the opportunity.
   */
  vehicleId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_LINK_A_VEHICLE_TO_OPPORTUNITY tool output.
 */
type AGENCYZOOM_LINK_A_VEHICLE_TO_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description Contains the details of the operation's outcome, including a success flag, an optional message, and an optional ID.
   */
  data?: {
      /**
       * Id
       * @description An optional identifier related to the completed operation. Its specific meaning can vary; it might refer to the opportunity or the linkage itself.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional confirmation or status message regarding the outcome of the link operation.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates the outcome of the operation: `true` for success, `false` for failure.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_LIST_PRODUCT_CATEGORIES tool input.
 */
type AGENCYZOOM_LIST_PRODUCT_CATEGORIES_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_LIST_PRODUCT_CATEGORIES tool output.
 */
type AGENCYZOOM_LIST_PRODUCT_CATEGORIES_OUTPUT = {
  /**
   * Data
   * @description List of product categories, each with its unique ID and name.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the product category.
       * @default null
       */
      id: number | null;
      /**
       * Name
       * @description Name of the product category.
       * @default null
       */
      name: string | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_LOG_THE_USER_IN tool input.
 */
type AGENCYZOOM_LOG_THE_USER_IN_INPUT = {
  /**
   * Password
   * @description The user's password for authentication.
   */
  password?: string;
  /**
   * Username
   * @description The user's email address, used as the username for authentication.
   */
  username?: string;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_LOG_THE_USER_IN tool output.
 */
type AGENCYZOOM_LOG_THE_USER_IN_OUTPUT = {
  /**
   * Data
   * @description Contains the authentication token and user status details.
   */
  data?: {
      /**
       * Jwt
       * @description JWT issued upon successful authentication, used for authorizing subsequent API requests.
       * @default null
       */
      jwt: string | null;
      /**
       * Owner Agent
       * @description A boolean flag indicating if the authenticated user has owner agent privileges.
       * @default null
       */
      ownerAgent: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_LOG_THE_USER_OUT tool input.
 */
type AGENCYZOOM_LOG_THE_USER_OUT_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_LOG_THE_USER_OUT tool output.
 */
type AGENCYZOOM_LOG_THE_USER_OUT_OUTPUT = {
  /**
   * Data
   * @description The structured response data from the logout operation, indicating success and any relevant messages.
   */
  data?: {
      /**
       * Id
       * @description An optional identifier related to the logout event or session termination, if returned by the API.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional confirmation message from the server regarding the logout status.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description A boolean flag indicating the outcome of the logout operation. `True` if the user was successfully logged out, `False` otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_MARK_THREAD_AS_UNREAD_API_ENDPOINT tool input.
 */
type AGENCYZOOM_MARK_THREAD_AS_UNREAD_API_ENDPOINT_INPUT = {
  /**
   * Mark Unread
   * @description Set to `true` to mark the thread as unread, or `false` to mark it as read.
   */
  markUnread?: boolean;
  /**
   * Thread Id
   * @description The unique identifier of the text thread whose read/unread status is to be updated.
   */
  threadId?: string;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_MARK_THREAD_AS_UNREAD_API_ENDPOINT tool output.
 */
type AGENCYZOOM_MARK_THREAD_AS_UNREAD_API_ENDPOINT_OUTPUT = {
  /**
   * Data
   * @description Contains the result of the operation, including the processed thread's ID and the success status.
   */
  data?: {
      /**
       * Success
       * @description Indicates if the operation to update the thread's read/unread status was successful. `true` for success, `false` otherwise.
       * @default null
       */
      success: boolean | null;
      /**
       * Thread Id
       * @description The unique identifier of the thread that was processed.
       * @default null
       */
      threadId: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_MOVE_LEAD_TO_SOLD tool input.
 */
type AGENCYZOOM_MOVE_LEAD_TO_SOLD_INPUT = {
  /**
   * Keep Open
   * @description If true, lead remains open after products are marked sold (e.g., for other potential sales). Defaults to false.
   * @default false
   */
  keepOpen: boolean;
  /**
   * Lead Id
   * @description Identifier of the lead to be marked as sold.
   */
  leadId?: number;
  /**
   * Sold Products
   * @description List of products sold to the lead.
   */
  soldProducts?: {
      /**
       * Carrier Id
       * @description Identifier of the insurance carrier for the sold product.
       */
      carrierId?: number;
      /**
       * Csr Id
       * @description Identifier of the Customer Service Representative (CSR) responsible for this sale.
       */
      csrId?: number;
      /**
       * Department Code
       * @description Department code associated with the sale of this product.
       */
      departmentCode?: string;
      /**
       * Effective Date
       * @description Policy effective date (YYYY-MM-DD).
       */
      effectiveDate?: string;
      /**
       * Expiry Date
       * @description Policy expiry date (YYYY-MM-DD).
       */
      expiryDate?: string;
      /**
       * Group Code
       * @description Group code associated with the sale of this product.
       */
      groupCode?: string;
      /**
       * Is Sold
       * @description Indicates if this product is sold; typically true when moving lead to sold status.
       */
      isSold?: boolean;
      /**
       * Items
       * @description Number of items included (e.g., vehicles in an auto policy).
       */
      items?: number;
      /**
       * Lead Source Id
       * @description Identifier of the lead source for this specific product.
       */
      leadSourceId?: number;
      /**
       * Location Id
       * @description Identifier for the agency location/branch of sale.
       */
      locationId?: string;
      /**
       * Policy Number
       * @description Assigned policy number for the sold product.
       */
      policyNumber?: string;
      /**
       * Premium
       * @description Premium amount for the sold product.
       */
      premium?: number;
      /**
       * Product Line Id
       * @description Identifier for the product line of the sold item.
       */
      productLineId?: number;
      /**
       * Quote Id
       * @description Links the sold product to its corresponding quote ID.
       */
      quoteId?: number;
      /**
       * Sold Date
       * @description Date product was sold (YYYY-MM-DD).
       */
      soldDate?: string;
  }[];
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_MOVE_LEAD_TO_SOLD tool output.
 */
type AGENCYZOOM_MOVE_LEAD_TO_SOLD_OUTPUT = {
  /**
   * Data
   * @description Details of the customer and opportunities after the lead is marked sold.
   */
  data?: {
      /**
       * Customer Id
       * @description Identifier of the customer for the sold lead, usable for further customer operations.
       * @default null
       */
      customerId: number | null;
      /**
       * Lead Source Id
       * @description Identifier of the customer's lead source.
       * @default null
       */
      leadSourceId: number | null;
      /**
       * Opportunities
       * @description Opportunities created/updated when the lead was sold; may include sold product details.
       * @default null
       */
      opportunities: {
          /**
           * Carrier Id
           * @description Identifier of the associated insurance carrier.
           * @default null
           */
          carrierId: number | null;
          /**
           * Custom Fields
           * @description List of associated custom fields and their values.
           * @default null
           */
          customFields: {
              /**
               * Field Name
               * @description Name of the custom field. Refer to GET /customFieldDefs for available names.
               * @default null
               */
              fieldName: string | null;
              /**
               * Field Value
               * @description Value(s) for the custom field. Typically a single-item list; can be multi-item for multi-select picklist types.
               * @default null
               */
              fieldValue: string[] | null;
          }[] | null;
          /**
           * Id
           * @description Unique identifier of the opportunity or quote.
           * @default null
           */
          id: number | null;
          /**
           * Items
           * @description Number of related items (e.g., policies quoted).
           * @default null
           */
          items: number | null;
          /**
           * Premium
           * @description Estimated or quoted premium amount for this opportunity.
           * @default null
           */
          premium: number | null;
          /**
           * Product Line Id
           * @description Identifier of the associated product line.
           * @default null
           */
          productLineId: number | null;
          /**
           * Property Address
           * @description List of associated property addresses.
           * @default null
           */
          propertyAddress: {
              /**
               * Address1
               * @description First line of the property street address.
               * @default null
               */
              address1: string | null;
              /**
               * Address2
               * @description Second line of the property street address (e.g., apartment, suite). Optional.
               * @default null
               */
              address2: string | null;
              /**
               * City
               * @description City name for the property address (e.g., Monticello).
               * @default null
               */
              city: string | null;
              /**
               * Country
               * @description Country code for the property address (e.g., USA).
               * @default null
               */
              country: string | null;
              /**
               * Id
               * @description Unique identifier if updating an existing property address.
               * @default null
               */
              id: number | null;
              /**
               * Lead Opportunity Id
               * @description Identifier of the linked lead opportunity.
               * @default null
               */
              leadOpportunityId: number | null;
              /**
               * State
               * @description State code for the property address (e.g., FL for Florida).
               * @default null
               */
              state: string | null;
              /**
               * Use Mailing Address As Location
               * @description Specifies whether to use the lead's mailing address as the property's location (1=true, 0=false). Default is 1. If 1, lead's address populates this property's address.
               * @default null
               */
              useMailingAddressAsLocation: number | null;
              /**
               * Zip
               * @description ZIP code for the property address.
               * @default null
               */
              zip: string | null;
          }[] | null;
          /**
           * Status
           * @description Status of the opportunity (e.g., 0 for inactive, 1 for active).
           * @default null
           */
          status: number | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_REMOVE_TEXT_THREAD_ENDPOINT tool input.
 */
type AGENCYZOOM_REMOVE_TEXT_THREAD_ENDPOINT_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_REMOVE_TEXT_THREAD_ENDPOINT tool output.
 */
type AGENCYZOOM_REMOVE_TEXT_THREAD_ENDPOINT_OUTPUT = {
  /**
   * Data
   * @description The structured response data returned by the API after the delete operation.
   */
  data?: {
      /**
       * Id
       * @description An optional identifier related to the operation. This might be the ID of the thread that was attempted to be deleted, if applicable and returned by the API.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional message from the server, which may include a confirmation or status of the deletion attempt.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates the outcome of the deletion operation. `true` if the deletion was successful, `false` otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_REOPEN_A_TASK tool input.
 */
type AGENCYZOOM_REOPEN_A_TASK_INPUT = {
  /**
   * Comments
   * @description Optional comments providing context or reasons for reopening the task.
   */
  comments?: string;
  /**
   * Task Id
   * @description The unique identifier of the task to be reopened.
   */
  taskId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_REOPEN_A_TASK tool output.
 */
type AGENCYZOOM_REOPEN_A_TASK_OUTPUT = {
  /**
   * Data
   * @description Contains the outcome of the reopen operation, including a success indicator, an optional message, and the ID of the reopened task.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the task that has been reopened.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional message providing details or confirmation about the outcome of the reopen operation.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates whether the task was successfully reopened. `True` for success, `False` otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_SEARCH_BUSINESS_CLASSIFICATIONS tool input.
 */
type AGENCYZOOM_SEARCH_BUSINESS_CLASSIFICATIONS_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_SEARCH_BUSINESS_CLASSIFICATIONS tool output.
 */
type AGENCYZOOM_SEARCH_BUSINESS_CLASSIFICATIONS_OUTPUT = {
  /**
   * Data
   * @description The list of business classifications retrieved by the action.
   */
  data?: {
      /**
       * Code
       * @description A numerical code associated with the business classification, used for categorization or mapping.
       * @default null
       */
      code: number | null;
      /**
       * Description
       * @description A textual description of the business classification, providing details about its nature or scope.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description The unique identifier for the business classification.
       * @default null
       */
      id: number | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_SEARCH_CUSTOMERS tool input.
 */
type AGENCYZOOM_SEARCH_CUSTOMERS_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_SEARCH_CUSTOMERS tool output.
 */
type AGENCYZOOM_SEARCH_CUSTOMERS_OUTPUT = {
  /**
   * Data
   * @description The main data object of the response, containing the list of customers and pagination details.
   */
  data?: {
      /**
       * Customers
       * @description A list of customer objects that satisfy the search query conditions.
       * @default null
       */
      customers: {
          /**
           * Agency Number
           * @description Identifier for the agency location associated with the customer. Corresponds to 'Location name'.
           * @default null
           */
          agencyNumber: string | null;
          /**
           * Agent Firstname
           * @description First name of the primary agent assigned to this customer.
           * @default null
           */
          agentFirstname: string | null;
          /**
           * Agent Id
           * @description Unique identifier of the primary agent assigned to this customer.
           * @default null
           */
          agentId: number | null;
          /**
           * Agent Lastname
           * @description Last name of the primary agent assigned to this customer.
           * @default null
           */
          agentLastname: string | null;
          /**
           * As Customer Date
           * @description Timestamp indicating when the prospect became a customer. Originally 'Signup date'.
           * @default null
           */
          asCustomerDate: string | null;
          /**
           * Business Name
           * @description The name of the customer's business, if applicable.
           * @default null
           */
          businessName: string | null;
          /**
           * City
           * @description City of the customer's address.
           * @default null
           */
          city: string | null;
          /**
           * Contact First Name
           * @description First name of the customer's primary contact person.
           * @default null
           */
          contactFirstName: string | null;
          /**
           * Contact Last Name
           * @description Last name of the customer's primary contact person.
           * @default null
           */
          contactLastName: string | null;
          /**
           * Contact Middle Name
           * @description Middle name of the customer's primary contact person.
           * @default null
           */
          contactMiddleName: string | null;
          /**
           * Country
           * @description Country of the customer's address.
           * @default null
           */
          country: string | null;
          /**
           * Create Date
           * @description Timestamp indicating when the customer record was created.
           * @default null
           */
          createDate: string | null;
          /**
           * Csr Firstname
           * @description First name of the Customer Service Representative (CSR) assigned to this customer.
           * @default null
           */
          csrFirstname: string | null;
          /**
           * Csr Lastname
           * @description Last name of the Customer Service Representative (CSR) assigned to this customer.
           * @default null
           */
          csrLastname: string | null;
          /**
           * Custom Fields
           * @description List of custom fields and their values associated with the customer.
           * @default null
           */
          customFields: {
              /**
               * Field Name
               * @description Name of the custom field. For a list of available custom field definitions, refer to the AgencyZoom API endpoint: https://app.agencyzoom.com/openapi/#tag/Configuration-and-Settings/operation/getCustomFieldDefs
               * @default null
               */
              fieldName: string | null;
              /**
               * Field Value
               * @description Value(s) for the custom field. Typically a single value in the list, unless the field type supports multiple options.
               * @default null
               */
              fieldValue: string[] | null;
          }[] | null;
          /**
           * Customer Type
           * @description Indicates the type or category of the customer.
           * @default null
           */
          customerType: string | null;
          /**
           * Email
           * @description Primary email address of the customer.
           * @default null
           */
          email: string | null;
          /**
           * Firstname
           * @description First name of the individual customer.
           * @default null
           */
          firstname: string | null;
          /**
           * Housename
           * @description The designated house name or household name for the customer.
           * @default null
           */
          housename: string | null;
          /**
           * Id
           * @description The unique identifier for the customer.
           * @default null
           */
          id: number | null;
          /**
           * Lastname
           * @description Last name of the individual customer.
           * @default null
           */
          lastname: string | null;
          /**
           * Life Appt
           * @description Unique identifier of an agent, potentially related to life insurance appointments or policies for this customer.
           * @default null
           */
          lifeAppt: number | null;
          /**
           * Middlename
           * @description Middle name of the individual customer.
           * @default null
           */
          middlename: string | null;
          /**
           * Phone
           * @description Primary phone number of the customer.
           * @default null
           */
          phone: string | null;
          /**
           * Policy Count
           * @description Total number of policies associated with this customer.
           * @default null
           */
          policyCount: number | null;
          /**
           * Policy Infos
           * @description List of brief summaries for policies associated with this customer.
           * @default null
           */
          policyInfos: {
              /**
               * Effective Date
               * @description The date when the policy becomes effective.
               * @default null
               */
              effectiveDate: string | null;
              /**
               * Expiry Date
               * @description The date when the policy expires.
               * @default null
               */
              expiryDate: string | null;
              /**
               * Household Id
               * @description The unique identifier for the household associated with this policy.
               * @default null
               */
              householdId: number | null;
              /**
               * Policy Code
               * @description The specific code identifying the policy type or plan.
               * @default null
               */
              policyCode: string | null;
              /**
               * Policy Id
               * @description The unique identifier for this policy.
               * @default null
               */
              policyId: number | null;
              /**
               * Policy Number
               * @description The policy number.
               * @default null
               */
              policyNumber: string | null;
              /**
               * Policy Type
               * @description The type of the policy.
               * @default null
               */
              policyType: string | null;
              /**
               * Signed Date
               * @description The date when the policy was signed.
               * @default null
               */
              signedDate: string | null;
          }[] | null;
          /**
           * Policy Summary
           * @description A textual summary of the customer's policies.
           * @default null
           */
          policySummary: string | null;
          /**
           * Secondary Email
           * @description Secondary email address of the customer.
           * @default null
           */
          secondaryEmail: string | null;
          /**
           * Secondary Phone
           * @description Secondary phone number of the customer.
           * @default null
           */
          secondaryPhone: string | null;
          /**
           * Source
           * @description The source through which the customer was acquired.
           * @default null
           */
          source: string | null;
          /**
           * State
           * @description State or province of the customer's address.
           * @default null
           */
          state: string | null;
          /**
           * Street Address
           * @description Street address of the customer.
           * @default null
           */
          streetAddress: string | null;
          /**
           * Task Count
           * @description Total number of tasks associated with this customer.
           * @default null
           */
          taskCount: number | null;
          /**
           * Total Premium
           * @description Sum of premiums from all policies associated with this customer.
           * @default null
           */
          totalPremium: number | null;
          /**
           * Vendor
           * @description Name of the vendor associated with this customer, if applicable.
           * @default null
           */
          vendor: string | null;
          /**
           * Welcome Call Assigned To
           * @description Unique identifier of the agent assigned to make the welcome call to this customer.
           * @default null
           */
          welcomeCallAssignedTo: number | null;
          /**
           * Welcome Kit Emailed On
           * @description Date the welcome kit email was sent to the customer. Originally 'Is welcomekit email on'.
           * @default null
           */
          welcomeKitEmailedOn: string | null;
          /**
           * Zip
           * @description Postal or ZIP code for the customer's address.
           * @default null
           */
          zip: string | null;
      }[] | null;
      /**
       * Page
       * @description The current page number of the returned set of results.
       * @default null
       */
      page: number | null;
      /**
       * Page Size
       * @description The maximum number of customers included per page in this set of results.
       * @default null
       */
      pageSize: number | null;
      /**
       * Total Count
       * @description The total number of customers found that match the search criteria.
       * @default null
       */
      totalCount: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_SEARCH_EMAIL_THREADS tool input.
 */
type AGENCYZOOM_SEARCH_EMAIL_THREADS_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_SEARCH_EMAIL_THREADS tool output.
 */
type AGENCYZOOM_SEARCH_EMAIL_THREADS_OUTPUT = {
  /**
   * Data
   * @description Contains the list of email thread information.
   */
  data?: {
      /**
       * Thread Info
       * @description List of email thread details.
       * @default null
       */
      threadInfo: {
          /**
           * Contact Email
           * @description Email address of the primary contact.
           * @default null
           */
          contactEmail: string | null;
          /**
           * Contact Id
           * @description Unique ID of the primary contact.
           * @default null
           */
          contactId: number | null;
          /**
           * Contact Name
           * @description Full name of the primary contact.
           * @default null
           */
          contactName: string | null;
          /**
           * Contact Type
           * @description Type/category of the contact (e.g., 'Client', 'Lead').
           * @default null
           */
          contactType: string | null;
          /**
           * Id
           * @description Unique identifier of the email thread.
           * @default null
           */
          id: string | null;
          /**
           * Last Message Date
           * @description Timestamp of the last message in local time (e.g., 'YYYY-MM-DDTHH:MM:SS').
           * @default null
           */
          lastMessageDate: string | null;
          /**
           * Last Message Date Utc
           * @description UTC timestamp of the last message (e.g., 'YYYY-MM-DDTHH:MM:SSZ').
           * @default null
           */
          lastMessageDateUTC: string | null;
          /**
           * Phone Number
           * @description Primary contact's phone number, if available.
           * @default null
           */
          phoneNumber: string | null;
          /**
           * Snippet
           * @description Snippet or preview of the latest message.
           * @default null
           */
          snippet: string | null;
          /**
           * Subject
           * @description Subject line of the email thread.
           * @default null
           */
          subject: string | null;
          /**
           * Unread
           * @description True if the thread has unread messages for the user.
           * @default null
           */
          unread: boolean | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_SEARCH_LEADS tool input.
 */
type AGENCYZOOM_SEARCH_LEADS_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_SEARCH_LEADS tool output.
 */
type AGENCYZOOM_SEARCH_LEADS_OUTPUT = {
  /**
   * Data
   * @description Detailed response: list of leads, pagination info, and total counts.
   */
  data?: {
      /**
       * Leads
       * @description List of lead objects matching the search criteria.
       * @default null
       */
      leads: {
          /**
           * Assign To Firstname
           * @description First name of the user (owner) to whom the lead is assigned.
           * @default null
           */
          assignToFirstname: string | null;
          /**
           * Assign To Lastname
           * @description Last name of the user (owner) to whom the lead is assigned.
           * @default null
           */
          assignToLastname: string | null;
          /**
           * Assigned To
           * @description Unique identifier of the user to whom the lead is assigned.
           * @default null
           */
          assignedTo: number | null;
          /**
           * City
           * @description City where the lead is located.
           * @default null
           */
          city: string | null;
          /**
           * Comments
           * @description Additional comments or notes related to the lead.
           * @default null
           */
          comments: string | null;
          /**
           * Contact Date
           * @description Date lead was last contacted (YYYY-MM-DD).
           * @default null
           */
          contactDate: string | null;
          /**
           * Contact First Name
           * @description First name of the business contact, if the lead is a business entity.
           * @default null
           */
          contactFirstName: string | null;
          /**
           * Contact Last Name
           * @description Last name of the business contact, if the lead is a business entity.
           * @default null
           */
          contactLastName: string | null;
          /**
           * Converted Household Id
           * @description Unique identifier of the household if the lead was converted to a customer.
           * @default null
           */
          convertedHouseholdId: number | null;
          /**
           * Country
           * @description Country where the lead is located.
           * @default null
           */
          country: string | null;
          /**
           * Create Date
           * @description Date lead was created (YYYY-MM-DD).
           * @default null
           */
          createDate: string | null;
          /**
           * Credit To Firstname
           * @description First name of the person who should receive credit for the lead.
           * @default null
           */
          creditToFirstname: string | null;
          /**
           * Credit To Lastname
           * @description Last name of the person who should receive credit for the lead.
           * @default null
           */
          creditToLastname: string | null;
          /**
           * Csr Firstname
           * @description First name of the Customer Service Representative (CSR).
           * @default null
           */
          csrFirstname: string | null;
          /**
           * Csr Id
           * @description Unique identifier of the Customer Service Representative (CSR) associated with the lead.
           * @default null
           */
          csrId: number | null;
          /**
           * Csr Lastname
           * @description Last name of the Customer Service Representative (CSR).
           * @default null
           */
          csrLastname: string | null;
          /**
           * Department Code
           * @description Code identifying the lead's department, if applicable.
           * @default null
           */
          departmentCode: string | null;
          /**
           * Department Name
           * @description Name of the lead's department, if applicable.
           * @default null
           */
          departmentName: string | null;
          /**
           * Email
           * @description Primary email address of the lead.
           * @default null
           */
          email: string | null;
          /**
           * Enter Stage Date
           * @description Date lead entered current workflow stage or referral date (YYYY-MM-DD).
           * @default null
           */
          enterStageDate: string | null;
          /**
           * Firstname
           * @description First name of the lead.
           * @default null
           */
          firstname: string | null;
          /**
           * Group Code
           * @description Code identifying the lead's group, if applicable.
           * @default null
           */
          groupCode: string | null;
          /**
           * Group Name
           * @description Name of the lead's group, if applicable.
           * @default null
           */
          groupName: string | null;
          /**
           * Id
           * @description Unique identifier for the lead.
           * @default null
           */
          id: number | null;
          /**
           * Last Activity Date
           * @description Date of last recorded activity (e.g., smart-cycle updates, interactions) for the lead (YYYY-MM-DD).
           * @default null
           */
          lastActivityDate: string | null;
          /**
           * Lastname
           * @description Last name of the lead.
           * @default null
           */
          lastname: string | null;
          /**
           * Lead Source Id
           * @description Unique identifier for the source of the lead.
           * @default null
           */
          leadSourceId: number | null;
          /**
           * Lead Source Name
           * @description Name of the lead source.
           * @default null
           */
          leadSourceName: string | null;
          /**
           * Lead Type
           * @description Type of the lead (e.g., Personal, Commercial), possibly configured via custom fields.
           * @default null
           */
          leadType: string | null;
          /**
           * Location Code
           * @description Code identifying the lead's location, if applicable.
           * @default null
           */
          locationCode: string | null;
          /**
           * Location Name
           * @description Name of the lead's location, if applicable.
           * @default null
           */
          locationName: string | null;
          /**
           * Middlename
           * @description Middle name of the lead.
           * @default null
           */
          middlename: string | null;
          /**
           * Next Expiration Date
           * @description Next relevant expiration date (e.g., current policy renewal) for the lead (YYYY-MM-DD).
           * @default null
           */
          nextExpirationDate: string | null;
          /**
           * Phone
           * @description Primary phone number of the lead.
           * @default null
           */
          phone: string | null;
          /**
           * Premium
           * @description Premium amount for the sold policy associated with the lead.
           * @default null
           */
          premium: number | null;
          /**
           * Quote Date
           * @description Date quote was provided to the lead (YYYY-MM-DD).
           * @default null
           */
          quoteDate: string | null;
          /**
           * Quoted
           * @description Premium amount that was quoted to the lead.
           * @default null
           */
          quoted: number | null;
          /**
           * Secondary Email
           * @description Secondary email address of the lead.
           * @default null
           */
          secondaryEmail: string | null;
          /**
           * Secondary Phone
           * @description Secondary phone number of the lead.
           * @default null
           */
          secondaryPhone: string | null;
          /**
           * Sold Date
           * @description Date lead was marked as sold (YYYY-MM-DD).
           * @default null
           */
          soldDate: string | null;
          /**
           * State
           * @description State or province where the lead is located.
           * @default null
           */
          state: string | null;
          /**
           * Status
           * @description Current status of the lead: 0 (NEW), 1 (QUOTED), 2 (WON), 3 (LOST), 4 (CONTACTED), 5 (XDATED).
           * @default null
           * @enum {integer|null}
           */
          status: 0 | 1 | 2 | 3 | 4 | 5 | null;
          /**
           * Street Address
           * @description Street address of the lead.
           * @default null
           */
          streetAddress: string | null;
          /**
           * Tag Names
           * @description List of tag names associated with the lead for categorization or filtering.
           * @default null
           */
          tagNames: string[] | null;
          /**
           * Task Count
           * @description Number of open tasks currently associated with this lead.
           * @default null
           */
          taskCount: number | null;
          /**
           * Workflow Id
           * @description Unique identifier of the workflow this lead is currently part of.
           * @default null
           */
          workflowId: number | null;
          /**
           * Workflow Name
           * @description Name of the workflow this lead is currently part of.
           * @default null
           */
          workflowName: string | null;
          /**
           * Workflow Stage Id
           * @description Unique identifier of the current stage of the lead within its workflow.
           * @default null
           */
          workflowStageId: number | null;
          /**
           * Workflow Stage Name
           * @description Name of the current stage of the lead within its workflow.
           * @default null
           */
          workflowStageName: string | null;
          /**
           * X Date
           * @description X-date (e.g., policy expiration/renewal) for the lead (YYYY-MM-DD).
           * @default null
           */
          xDate: string | null;
          /**
           * Zip
           * @description Postal or ZIP code for the lead's address.
           * @default null
           */
          zip: string | null;
      }[] | null;
      /**
       * Page
       * @description Current page number of the paginated results.
       * @default null
       */
      page: number | null;
      /**
       * Page Size
       * @description Number of leads returned per page.
       * @default null
       */
      pageSize: number | null;
      /**
       * Quote Amount
       * @description Total quoted premium amount for leads on the current page or overall.
       * @default null
       */
      quoteAmount: number | null;
      /**
       * Total Count
       * @description Total number of leads matching the search criteria.
       * @default null
       */
      totalCount: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_SEARCH_LEADS_COUNT tool input.
 */
type AGENCYZOOM_SEARCH_LEADS_COUNT_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_SEARCH_LEADS_COUNT tool output.
 */
type AGENCYZOOM_SEARCH_LEADS_COUNT_OUTPUT = {
  /**
   * Data
   * @description Primary response payload containing `leadsCount`, a list of lead counts per workflow stage.
   */
  data?: {
      /**
       * Leads Count
       * @description List detailing lead distribution, where each item links a `workflowStageId` to its lead `count`.
       * @default null
       */
      leadsCount: {
          /**
           * Count
           * @description Total number of leads in the workflow stage identified by the corresponding `workflowStageId`.
           * @default null
           */
          count: number | null;
          /**
           * Workflow Stage Id
           * @description Unique identifier for a specific workflow stage.
           * @default null
           */
          workflowStageId: string | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_SEARCH_LIFE_AND_HEALTH_LEADS tool input.
 */
type AGENCYZOOM_SEARCH_LIFE_AND_HEALTH_LEADS_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_SEARCH_LIFE_AND_HEALTH_LEADS tool output.
 */
type AGENCYZOOM_SEARCH_LIFE_AND_HEALTH_LEADS_OUTPUT = {
  /**
   * Data
   * @description Response with search results: list of leads and pagination details.
   */
  data?: {
      /**
       * Alr Leads
       * @description List of life and health lead details.
       * @default null
       */
      alrLeads: {
          /**
           * Agency Id
           * @description Unique ID of the agency for the lead.
           * @default null
           */
          agencyId: number | null;
          /**
           * Agency Name
           * @description Name of the agency.
           * @default null
           */
          agencyName: string | null;
          /**
           * Agency Number
           * @description Assigned number/identifier for the agency or branch.
           * @default null
           */
          agencyNumber: string | null;
          /**
           * Agent Firstname
           * @description Agent's first name.
           * @default null
           */
          agentFirstname: string | null;
          /**
           * Agent Id
           * @description Unique ID of the agent associated with the lead.
           * @default null
           */
          agentId: number | null;
          /**
           * Agent Lastname
           * @description Agent's last name.
           * @default null
           */
          agentLastname: string | null;
          /**
           * App Quote Date
           * @description Date a quote was provided for the appointment.
           * @default null
           */
          appQuoteDate: string | null;
          /**
           * App Submit Date
           * @description Application submission date for the appointment.
           * @default null
           */
          appSubmitDate: string | null;
          /**
           * Appt Time
           * @description Scheduled appointment time.
           * @default null
           */
          apptTime: string | null;
          /**
           * ApptType
           * @description Appointment type: 1 for Phone, 2 for Face-to-Face.
           * @default null
           * @enum {integer|null}
           */
          apptType: 1 | 2 | null;
          /**
           * Assign To
           * @description Unique ID of the user/entity the lead is assigned to.
           * @default null
           */
          assignTo: number | null;
          /**
           * Carrier
           * @description Short name/code for the insurance carrier.
           * @default null
           */
          carrier: string | null;
          /**
           * Create Date
           * @description Creation date and time of the lead.
           * @default null
           */
          createDate: string | null;
          /**
           * Creator Firstname
           * @description First name of the lead's creator.
           * @default null
           */
          creatorFirstname: string | null;
          /**
           * Creator Lastname
           * @description Last name of the lead's creator.
           * @default null
           */
          creatorLastname: string | null;
          /**
           * Customer Email
           * @description Customer's email address.
           * @default null
           */
          customerEmail: string | null;
          /**
           * Customer Firstname
           * @description Customer's first name.
           * @default null
           */
          customerFirstname: string | null;
          /**
           * Customer Lastname
           * @description Customer's last name.
           * @default null
           */
          customerLastname: string | null;
          /**
           * Customer Phone
           * @description Customer's phone number.
           * @default null
           */
          customerPhone: string | null;
          /**
           * Efs Firstname
           * @description First name of the EFS for the lead.
           * @default null
           */
          efsFirstname: string | null;
          /**
           * Efs Id
           * @description Unique ID of the EFS (e.g., internal role/system) for the lead.
           * @default null
           */
          efsId: number | null;
          /**
           * Efs Lastname
           * @description Last name of the EFS for the lead.
           * @default null
           */
          efsLastname: string | null;
          /**
           * Follow Up Date
           * @description Scheduled follow-up date for the lead.
           * @default null
           */
          followUpDate: string | null;
          /**
           * Household Id
           * @description Unique ID of the household associated with the lead.
           * @default null
           */
          householdId: number | null;
          /**
           * Housename
           * @description Name of the household for the lead.
           * @default null
           */
          housename: string | null;
          /**
           * Id
           * @description Unique ID of the appointment for the lead, corresponds to `alrtAppt.id`.
           * @default null
           */
          id: number | null;
          /**
           * Ins Company Id
           * @description Unique ID of the insurance company.
           * @default null
           */
          insCompanyId: number | null;
          /**
           * Ips
           * @description IPS value for the lead, possibly an internal metric or score.
           * @default null
           */
          ips: number | null;
          /**
           * Kept
           * @description If appointment was kept: 1 (Yes), 0 (No).
           * @default null
           */
          kept: number | null;
          /**
           * Lead Source Id
           * @description Unique ID of the lead's source.
           * @default null
           */
          leadSourceId: number | null;
          /**
           * Location
           * @description Location for the lead or appointment.
           * @default null
           */
          location: string | null;
          /**
           * Next Appt Time
           * @description Scheduled time for the next appointment, if any.
           * @default null
           */
          nextApptTime: string | null;
          /**
           * Points
           * @description Points for the lead.
           * @default null
           */
          points: number | null;
          /**
           * Product Credit
           * @description Product credit amount for the lead.
           * @default null
           */
          productCredit: number | null;
          /**
           * Sales Tracker Only
           * @description If lead is exclusively in sales tracker: 1 (Yes), 0 (No).
           * @default null
           */
          salesTrackerOnly: number | null;
          /**
           * Sold Date
           * @description Date and time the policy for the lead was sold.
           * @default null
           */
          soldDate: string | null;
          /**
           * Sold Policy Type
           * @description Type of policy sold.
           * @default null
           */
          soldPolicyType: string | null;
          /**
           * Status
           * @description Lead status for filtering. Codes: 0 (New), 1 (Sold), 2 (Cancel), 3 (No Deal), 4 (Follow Up), 5 (No Show), 6 (Not Issued), 7 (Submitted), 8 (Quoted), 100 (Kept).
           * @default null
           */
          status: number[] | null;
          /**
           * Tracker Customer Name
           * @description Customer's name from the sales tracker.
           * @default null
           */
          trackerCustomerName: string | null;
      }[] | null;
      /**
       * Page
       * @description Current page number of search results.
       * @default null
       */
      page: number | null;
      /**
       * Page Size
       * @description Number of leads on the current page.
       * @default null
       */
      pageSize: number | null;
      /**
       * Total Count
       * @description Total number of leads found matching criteria.
       * @default null
       */
      totalCount: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_SEARCH_SMS_THREADS tool input.
 */
type AGENCYZOOM_SEARCH_SMS_THREADS_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_SEARCH_SMS_THREADS tool output.
 */
type AGENCYZOOM_SEARCH_SMS_THREADS_OUTPUT = {
  /**
   * Data
   * @description Primary data payload encapsulating the list of SMS threads.
   */
  data?: {
      /**
       * Thread Info
       * @description List of `ThreadInfoItem` objects detailing found SMS threads; may be empty.
       * @default null
       */
      threadInfo: {
          /**
           * Contact Email
           * @description Email address of the associated contact, if available.
           * @default null
           */
          contactEmail: string | null;
          /**
           * Contact Id
           * @description Identifier of the associated contact.
           * @default null
           */
          contactId: number | null;
          /**
           * Contact Name
           * @description Full name of the associated contact.
           * @default null
           */
          contactName: string | null;
          /**
           * Contact Type
           * @description Type of the associated contact (e.g., 'Client', 'Prospect').
           * @default null
           */
          contactType: string | null;
          /**
           * Id
           * @description Unique identifier for the SMS thread.
           * @default null
           */
          id: string | null;
          /**
           * Last Message Date
           * @description Timestamp of the last message in the agency's local timezone (e.g., 'YYYY-MM-DD HH:MM:SS').
           * @default null
           */
          lastMessageDate: string | null;
          /**
           * Last Message Date Utc
           * @description Timestamp of the last message in UTC (e.g., 'YYYY-MM-DDTHH:MM:SSZ').
           * @default null
           */
          lastMessageDateUTC: string | null;
          /**
           * Phone Number
           * @description The phone number involved in this SMS thread.
           * @default null
           */
          phoneNumber: string | null;
          /**
           * Snippet
           * @description Preview of the latest message in the SMS thread.
           * @default null
           */
          snippet: string | null;
          /**
           * Subject
           * @description Subject of the SMS thread; often not applicable or empty for SMS.
           * @default null
           */
          subject: string | null;
          /**
           * Unread
           * @description Indicates if the thread has messages unread by the current user.
           * @default null
           */
          unread: boolean | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_SEARCH_TASKS tool input.
 */
type AGENCYZOOM_SEARCH_TASKS_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_SEARCH_TASKS tool output.
 */
type AGENCYZOOM_SEARCH_TASKS_OUTPUT = {
  /**
   * Data
   * @description Paginated list of tasks and metadata from the search.
   */
  data?: {
      /**
       * Outstanding Count
       * @description Total outstanding tasks matching criteria.
       * @default null
       */
      outstandingCount: number | null;
      /**
       * Page
       * @description Current page number of results.
       * @default null
       */
      page: number | null;
      /**
       * Page Size
       * @description Number of tasks per page.
       * @default null
       */
      pageSize: number | null;
      /**
       * Tasks
       * @description Tasks for the current page based on criteria.
       * @default null
       */
      tasks: {
          /**
           * Assigned Date
           * @description Assignment date (YYYY-MM-DD).
           * @default null
           */
          assignedDate: string | null;
          /**
           * Assignees
           * @description Assigned users.
           * @default null
           */
          assignees: {
              /**
               * Firstname
               * @description User's first name.
               * @default null
               */
              firstname: string | null;
              /**
               * Id
               * @description User's unique identifier.
               * @default null
               */
              id: number | null;
              /**
               * Is Employee
               * @description True if user is an employee, false if an affiliate.
               * @default true
               */
              isEmployee: boolean | null;
              /**
               * Lastname
               * @description User's last name.
               * @default null
               */
              lastname: string | null;
          }[] | null;
          /**
           * Comments
           * @description Notes or comments.
           * @default null
           */
          comments: string | null;
          /**
           * Complete Date
           * @description Completion date (YYYY-MM-DD).
           * @default null
           */
          completeDate: string | null;
          /**
           * Completed By
           * @description ID of user who completed the task.
           * @default null
           */
          completedBy: number | null;
          /**
           * Create Date
           * @description Creation date (YYYY-MM-DD).
           * @default null
           */
          createDate: string | null;
          /**
           * Customer Id
           * @description Associated customer's ID.
           * @default null
           */
          customerId: number | null;
          /**
           * Customer Name
           * @description Associated customer's name.
           * @default null
           */
          customerName: string | null;
          /**
           * CustomerType
           * @description Associated customer's type ('customer' or 'lead').
           * @default null
           * @enum {string|null}
           */
          customerType: "customer" | "lead" | null;
          /**
           * Due Date
           * @description Due date (YYYY-MM-DD).
           * @default null
           */
          dueDate: string | null;
          /**
           * Duration
           * @description Duration in minutes.
           * @default null
           */
          duration: number | null;
          /**
           * Id
           * @description Task's unique identifier.
           * @default null
           */
          id: number | null;
          /**
           * Is Completed By Employee
           * @description True if completed by an employee, false if by an affiliate.
           * @default null
           */
          isCompletedByEmployee: boolean | null;
          /**
           * Status
           * @description Task status: 0 (Open), 1 (Done), 2 (Cancelled).
           * @default null
           * @enum {integer|null}
           */
          status: 0 | 1 | 2 | null;
          /**
           * Task Date Time
           * @description Specific task date/time (YYYY-MM-DD or ISO 8601).
           * @default null
           */
          taskDateTime: string | null;
          /**
           * Time Specific
           * @description True if task is for a specific time, false if all-day.
           * @default null
           */
          timeSpecific: boolean | null;
          /**
           * Title
           * @description Title or name of the task.
           * @default null
           */
          title: string | null;
      }[] | null;
      /**
       * Total Count
       * @description Total tasks matching criteria across all pages.
       * @default null
       */
      totalCount: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_SERVICE_TICKET_LIST tool input.
 */
type AGENCYZOOM_SERVICE_TICKET_LIST_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_SERVICE_TICKET_LIST tool output.
 */
type AGENCYZOOM_SERVICE_TICKET_LIST_OUTPUT = {
  /**
   * Data
   * @description Contains the paginated list of service tickets and total count.
   */
  data?: {
      /**
       * Page
       * @description The current page number in the paginated results.
       * @default null
       */
      page: number | null;
      /**
       * Page Size
       * @description The number of service tickets returned per page.
       * @default null
       */
      pageSize: number | null;
      /**
       * Service Tickets
       * @description A list of service ticket objects retrieved.
       * @default null
       */
      serviceTickets: {
          /**
           * Agency Id
           * @description The unique identifier of the agency associated with the service ticket.
           * @default null
           */
          agencyId: number | null;
          /**
           * Category Id
           * @description Service ticket category identifier. '0' typically represents all categories.
           * @default null
           */
          categoryId: number | null;
          /**
           * Complete Date
           * @description The date when the service ticket was completed, typically in YYYY-MM-DD format.
           * @default null
           */
          completeDate: string | null;
          /**
           * Create Date
           * @description The creation date of this service ticket.
           * @default null
           */
          createDate: string | null;
          /**
           * Created By
           * @description The unique identifier of the agent who created the service ticket.
           * @default null
           */
          createdBy: number | null;
          /**
           * Csr
           * @description A list of unique identifiers for Customer Service Representatives (CSRs) assigned to the service ticket.
           * @default null
           */
          csr: number[] | null;
          /**
           * Due Date
           * @description The due date for the service ticket, represented as a Unix timestamp (seconds since January 1, 1970 UTC).
           * @default null
           */
          dueDate: number | null;
          /**
           * Email
           * @description The email address of the household associated with the service ticket.
           * @default null
           */
          email: string | null;
          /**
           * Email Thread Id
           * @description The unique identifier of the email thread associated with this service ticket, if applicable.
           * @default null
           */
          emailThreadId: number | null;
          /**
           * Enrolled
           * @description Indicates whether automation is enrolled for this service ticket. Typically 0 (not enrolled) or 1 (enrolled).
           * @default null
           */
          enrolled: number | null;
          /**
           * Enter Stage Ts
           * @description The timestamp indicating when the service ticket entered its current stage, typically in ISO 8601 format (e.g., 'YYYY-MM-DDTHH:MM:SSZ').
           * @default null
           */
          enterStageTS: string | null;
          /**
           * Household Id
           * @description The unique identifier of the household associated with the service ticket.
           * @default null
           */
          householdId: number | null;
          /**
           * Id
           * @description The unique identifier of the service ticket.
           * @default null
           */
          id: number | null;
          /**
           * Last Activity Date
           * @description The date and time of the last activity recorded on the service ticket.
           * @default null
           */
          lastActivityDate: string | null;
          /**
           * Modified By
           * @description The unique identifier of the agent who last modified the service ticket.
           * @default null
           */
          modifiedBy: number | null;
          /**
           * Modify Date
           * @description The date and time when this service ticket was last modified.
           * @default null
           */
          modifyDate: string | null;
          /**
           * Name
           * @description The name of the household associated with the service ticket.
           * @default null
           */
          name: string | null;
          /**
           * Phone
           * @description The phone number of the household associated with the service ticket.
           * @default null
           */
          phone: string | null;
          /**
           * Priority Id
           * @description Service ticket priority identifier. '0' typically represents all priorities.
           * @default null
           */
          priorityId: number | null;
          /**
           * Resolution Desc
           * @description A description of how the service ticket was resolved.
           * @default null
           */
          resolutionDesc: string | null;
          /**
           * Resolution Id
           * @description The unique identifier for the resolution type or category chosen for this ticket.
           * @default null
           */
          resolutionId: number | null;
          /**
           * Response Minutes
           * @description The response time in minutes recorded for the service ticket.
           * @default null
           */
          responseMinutes: number | null;
          /**
           * Service Desc
           * @description A detailed description of the service request or issue for this ticket.
           * @default null
           */
          serviceDesc: string | null;
          /**
           * Source
           * @description The source from which the service ticket originated (e.g., 'Email', 'Phone Call', 'Web Form').
           * @default null
           */
          source: string | null;
          /**
           * Status
           * @description The status of the service ticket: 0 for 'removed', 1 for 'active', or 2 for 'completed'.
           * @default null
           */
          status: number | null;
          /**
           * Subject
           * @description The subject line or title of this service ticket.
           * @default null
           */
          subject: string | null;
          /**
           * Vendor
           * @description The name of the vendor associated with the service ticket, if applicable.
           * @default null
           */
          vendor: string | null;
          /**
           * Workflow Id
           * @description The unique identifier of the pipeline (workflow) associated with the service ticket.
           * @default null
           */
          workflowId: number | null;
          /**
           * Workflow Name
           * @description The name of the pipeline (workflow) this service ticket belongs to.
           * @default null
           */
          workflowName: string | null;
          /**
           * Workflow Stage Id
           * @description The unique identifier of the pipeline (workflow) stage for this service ticket.
           * @default null
           */
          workflowStageId: number | null;
          /**
           * Workflow Stage Name
           * @description The name of the current stage within the pipeline (workflow) for this service ticket.
           * @default null
           */
          workflowStageName: string | null;
      }[] | null;
      /**
       * Total Count
       * @description The total number of service tickets matching the query criteria across all pages.
       * @default null
       */
      totalCount: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_TEXT_DETAIL_THREAD tool input.
 */
type AGENCYZOOM_TEXT_DETAIL_THREAD_INPUT = object;

/**
 * Type of AGENCYZOOM's AGENCYZOOM_TEXT_DETAIL_THREAD tool output.
 */
type AGENCYZOOM_TEXT_DETAIL_THREAD_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed information for the text thread, including messages and their count.
   */
  data?: {
      /**
       * Message Count
       * @description The total number of messages in the thread.
       * @default null
       */
      messageCount: number | null;
      /**
       * Message Info
       * @description A list of message details retrieved for the thread.
       * @default null
       */
      messageInfo: {
          /**
           * Agent Firstname
           * @description First name of the agent associated with this message.
           * @default null
           */
          agentFirstname: string | null;
          /**
           * Agent Lastname
           * @description Last name of the agent associated with this message.
           * @default null
           */
          agentLastname: string | null;
          /**
           * Bcc
           * @description 'BCC' (blind carbon copy) recipient details for the message.
           * @default null
           */
          bcc: {
              /**
               * Email
               * @description Email address of the BCC recipient.
               * @default null
               */
              email: string | null;
              /**
               * Name
               * @description Name of the BCC recipient.
               * @default null
               */
              name: string | null;
          }[] | null;
          /**
           * Body
           * @description Full content of the message body, often in HTML format.
           * @default null
           */
          body: string | null;
          /**
           * Cc
           * @description 'CC' (carbon copy) recipient details for the message.
           * @default null
           */
          cc: {
              /**
               * Email
               * @description Email address of the CC recipient.
               * @default null
               */
              email: string | null;
              /**
               * Name
               * @description Name of the CC recipient.
               * @default null
               */
              name: string | null;
          }[] | null;
          /**
           * Contact Email
           * @description Email address of the primary contact for this message.
           * @default null
           */
          contactEmail: string | null;
          /**
           * Contact Id
           * @description Identifier for the contact (e.g., customer referral ID, household ID).
           * @default null
           */
          contactId: number | null;
          /**
           * Contact Name
           * @description Name of the contact (e.g., customer referral, household name).
           * @default null
           */
          contactName: string | null;
          /**
           * Contact Phone
           * @description Phone number of the primary contact for this message.
           * @default null
           */
          contactPhone: string | null;
          /**
           * Contact Type
           * @description Type of the contact (e.g., customer, lead, contact).
           * @default null
           */
          contactType: string | null;
          /**
           * Download All Att Url
           * @description URL to download all attachments for this message as a single archive, if available.
           * @default null
           */
          downloadAllAttUrl: string | null;
          /**
           * Files
           * @description A list of file attachments associated with the message (excluding images explicitly listed in `imageFiles`).
           * @default null
           */
          files: {
              /**
               * Doc File Name
               * @description The name of the document, if the file is a document.
               * @default null
               */
              docFileName: string | null;
              /**
               * Doc Media Type
               * @description The media type (MIME type) of the document file (e.g., 'application/pdf').
               * @default null
               */
              docMediaType: string | null;
              /**
               * Filename
               * @description The original name of the file.
               * @default null
               */
              filename: string | null;
              /**
               * Id
               * @description The unique identifier for the file.
               * @default null
               */
              id: number | null;
              /**
               * Size
               * @description The size of the file in bytes.
               * @default null
               */
              size: number | null;
              /**
               * Url
               * @description A direct URL to access or download the file.
               * @default null
               */
              url: string | null;
              /**
               * Vendor Id
               * @description Identifier for the file from an external vendor (e.g., Nylas).
               * @default null
               */
              vendorId: string | null;
          }[] | null;
          /**
           * Froms
           * @description Sender details for the message.
           * @default null
           */
          froms: {
              /**
               * Email
               * @description Email address of the sender.
               * @default null
               */
              email: string | null;
              /**
               * Name
               * @description Name of the sender.
               * @default null
               */
              name: string | null;
          }[] | null;
          /**
           * Id
           * @description The unique identifier for this message entry.
           * @default null
           */
          id: number | null;
          /**
           * Image Files
           * @description A list of image file attachments specifically associated with the message.
           * @default null
           */
          imageFiles: {
              /**
               * Doc File Name
               * @description The name of the image document, if applicable.
               * @default null
               */
              docFileName: string | null;
              /**
               * Doc Media Type
               * @description The media type (MIME type) of the image document file (e.g., 'image/jpeg').
               * @default null
               */
              docMediaType: string | null;
              /**
               * Filename
               * @description The original name of the image file.
               * @default null
               */
              filename: string | null;
              /**
               * Id
               * @description The unique identifier for the image file.
               * @default null
               */
              id: number | null;
              /**
               * Size
               * @description The size of the image file in bytes.
               * @default null
               */
              size: number | null;
              /**
               * Url
               * @description A direct URL to access or download the image file.
               * @default null
               */
              url: string | null;
              /**
               * Vendor Id
               * @description Identifier for the image file from an external vendor (e.g., Nylas).
               * @default null
               */
              vendorId: string | null;
          }[] | null;
          /**
           * Message Date
           * @description Date the message was created, in 'YYYY-MM-DD' format.
           * @default null
           */
          messageDate: string | null;
          /**
           * Message Date Utc
           * @description UTC timestamp of when the message was created.
           * @default null
           */
          messageDateUTC: string | null;
          /**
           * Message Id
           * @description The synchronized message ID, often from an external provider like an email service.
           * @default null
           */
          messageId: string | null;
          /**
           * Outbound
           * @description Indicates message direction: '0' for received (inbound), '1' for sent (outbound).
           * @default null
           * @enum {integer|null}
           */
          outbound: 0 | 1 | null;
          /**
           * Provider Sms Message Sid
           * @description The Service Identifier (SID) for an SMS message from the provider, if applicable.
           * @default null
           */
          providerSmsMessageSid: unknown;
          /**
           * Sender Name
           * @description Name of the sending entity (e.g., 'AZ' for AgencyZoom or an external email provider).
           * @default null
           */
          senderName: string | null;
          /**
           * Snippet
           * @description A short preview or snippet of the message content.
           * @default null
           */
          snippet: string | null;
          /**
           * Status
           * @description Tracking status of the message (e.g., 'delivered', 'opened', 'failed').
           * @default null
           */
          status: string | null;
          /**
           * Subject
           * @description Subject line of the message.
           * @default null
           */
          subject: string | null;
          /**
           * Thread Id
           * @description The ID of the synchronized message thread this message is part of.
           * @default null
           */
          threadId: string | null;
          /**
           * Tos
           * @description 'To' recipient details for the message.
           * @default null
           */
          tos: {
              /**
               * Email
               * @description Email address of the recipient.
               * @default null
               */
              email: string | null;
              /**
               * Name
               * @description Name of the recipient.
               * @default null
               */
              name: string | null;
          }[] | null;
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
 * Type of AGENCYZOOM's AGENCYZOOM_UNLINK_A_DRIVER_FROM_OPPORTUNITY tool input.
 */
type AGENCYZOOM_UNLINK_A_DRIVER_FROM_OPPORTUNITY_INPUT = {
  /**
   * Driver Id
   * @description Identifier for the driver to be unlinked from the opportunity.
   */
  driverId?: number;
  /**
   * Opportunity Id
   * @description Identifier for the opportunity from which the driver will be unlinked.
   */
  opportunityId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UNLINK_A_DRIVER_FROM_OPPORTUNITY tool output.
 */
type AGENCYZOOM_UNLINK_A_DRIVER_FROM_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed result of the unlinking operation, including a status message, an optional ID, and a success indicator.
   */
  data?: {
      /**
       * Id
       * @description An optional identifier returned by the API related to this operation, such as a transaction or record ID.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional confirmation or status message detailing the outcome of the unlinking operation.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description A boolean flag indicating the success of the unlinking operation. `True` if the driver was successfully unlinked, `False` otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UNLINK_A_VEHICLE_FROM_OPPORTUNITY tool input.
 */
type AGENCYZOOM_UNLINK_A_VEHICLE_FROM_OPPORTUNITY_INPUT = {
  /**
   * Opportunity Id
   * @description The unique identifier of the opportunity from which the vehicle will be unlinked.
   */
  opportunityId?: number;
  /**
   * Vehicle Id
   * @description The unique identifier of the vehicle to be unlinked from the specified opportunity.
   */
  vehicleId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UNLINK_A_VEHICLE_FROM_OPPORTUNITY tool output.
 */
type AGENCYZOOM_UNLINK_A_VEHICLE_FROM_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description The structured response data containing details about the unlink operation's outcome.
   */
  data?: {
      /**
       * Id
       * @description An optional identifier returned by the API related to this specific operation, such as a transaction or reference ID.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional message from the server providing more details about the outcome of the unlink operation (e.g., 'Vehicle unlinked successfully.').
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Boolean flag indicating the success of the unlink operation: `true` if the vehicle was successfully unlinked, `false` otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UNREAD_THREAD tool input.
 */
type AGENCYZOOM_UNREAD_THREAD_INPUT = {
  /**
   * Mark Unread
   * @description Set to true to mark the thread as unread, or false to mark it as read.
   */
  markUnread?: boolean;
  /**
   * Thread Id
   * @description The unique identifier of the email thread whose read status is to be updated.
   */
  threadId?: string;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UNREAD_THREAD tool output.
 */
type AGENCYZOOM_UNREAD_THREAD_OUTPUT = {
  /**
   * Data
   * @description The response body containing the outcome of the mark as unread/read operation.
   */
  data?: {
      /**
       * Success
       * @description Indicates if the operation to update the thread's read/unread status was successful. True for success, False otherwise.
       * @default null
       */
      success: boolean | null;
      /**
       * Thread Id
       * @description The unique identifier of the email thread that was processed.
       * @default null
       */
      threadId: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_AN_OPPORTUNITY tool input.
 */
type AGENCYZOOM_UPDATE_AN_OPPORTUNITY_INPUT = {
  /**
   * Carrier Id
   * @description Insurance carrier identifier.
   */
  carrierId?: number;
  /**
   * Custom Fields
   * @description List of custom fields to update. For date-types, use MM/DD/YYYY format.
   */
  customFields?: {
      /**
       * Field Name
       * @description Name of the custom field. Refer to 'getCustomFieldDefs' operation for available names.
       */
      fieldName?: string;
      /**
       * Field Value
       * @description Value for the custom field. Usually a single string; use a list for multi-select fields.
       */
      fieldValue?: string[];
  }[];
  /**
   * Expiry Date
   * @description Policy or opportunity expiration date (MM/DD/YYYY).
   */
  expiryDate?: string;
  /**
   * Items
   * @description Number of items (e.g., policies, vehicles) related to the opportunity.
   * @default 1
   */
  items: number;
  /**
   * Premium
   * @description Premium amount.
   */
  premium?: number;
  /**
   * Product Line Id
   * @description Product line identifier.
   */
  productLineId?: number;
  /**
   * Property  Address1
   * @description Property's primary address line.
   */
  property__address1?: string;
  /**
   * Property  Address2
   * @description Property's secondary address line (e.g., apartment, suite).
   */
  property__address2?: string;
  /**
   * Property  City
   * @description Property's city name.
   */
  property__city?: string;
  /**
   * Property  Country
   * @description Property's country code (e.g., USA).
   */
  property__country?: string;
  /**
   * Property  State
   * @description Property's state code (e.g., FL).
   */
  property__state?: string;
  /**
   * Property  Use Mailing Address As Location
   * @description Set to 1 to use lead's mailing address as property location, 0 otherwise. If 1, lead's address overwrites property address.
   */
  property__useMailingAddressAsLocation?: number;
  /**
   * Property  Zip
   * @description Property's ZIP code.
   */
  property__zip?: string;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_AN_OPPORTUNITY tool output.
 */
type AGENCYZOOM_UPDATE_AN_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description Contains details of the update operation's result.
   */
  data?: {
      /**
       * Id
       * @description Unique ID of the updated opportunity.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Optional server confirmation or status message.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description True if the operation was successful, false otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_A_DRIVER_S_DETAILS tool input.
 */
type AGENCYZOOM_UPDATE_A_DRIVER_S_DETAILS_INPUT = {
  /**
   * Birthday
   * @description The date of birth of the driver. Must be in MM/DD/YYYY format.
   * @default null
   */
  birthday: string | null;
  /**
   * Driver Id
   * @description The unique identifier for the opportunity driver whose details are to be updated.
   */
  driverId?: number;
  /**
   * First Name
   * @description The first name of the driver.
   */
  firstName?: string;
  /**
   * GenderEnm0
   * @description Gender of the driver. Valid values are: "M" (Male),  "F" (Female), "U" (Unknown), "X" (Non-Binary).
   * @default null
   * @enum {string|null}
   */
  gender: "F" | "M" | "U" | "X" | null;
  /**
   * Last Name
   * @description The last name of the driver.
   */
  lastName?: string;
  /**
   * License Number
   * @description The driver's license number.
   * @default null
   */
  licenseNumber: string | null;
  /**
   * Marital Status
   * @description Marital status of the driver, represented by an integer code. Valid codes are: 1 (Single), 2 (Married), 3 (Widowed), 4 (Separated), 5 (Divorced), 6 (Domestic Partner), 7 (Civil Union), 8 (Fiancé / Fiancée), 9 (Unknown), 10 (Other).
   * @default null
   */
  maritalStatus: number | null;
  /**
   * Middle Name
   * @description The middle name of the driver.
   * @default null
   */
  middleName: string | null;
  /**
   * RelationshipEnm0
   * @description Relationship status of the driver. Valid values are: "IN" (Named Insured), "SP" (Spouse), "PA" (Parent), "CH" (Child), "OT" (Other).
   * @default null
   * @enum {string|null}
   */
  relationship: "CH" | "IN" | "OT" | "PA" | "SP" | null;
  /**
   * State Licensed
   * @description The state where the driver is licensed, using its two-letter abbreviation (e.g., NY for New York).
   * @default null
   */
  stateLicensed: string | null;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_A_DRIVER_S_DETAILS tool output.
 */
type AGENCYZOOM_UPDATE_A_DRIVER_S_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Contains the details of the update operation's outcome, including a message, ID, and result status.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the driver record that was updated, typically corresponding to the provided `driverId`.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description A confirmation or status message regarding the update operation.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates the outcome of the update operation. `True` if the update was successful, `False` otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_A_LEAD_FILE_NAME tool input.
 */
type AGENCYZOOM_UPDATE_A_LEAD_FILE_NAME_INPUT = {
  /**
   * Customer Referral Id
   * @description The identifier of the customer referral associated with the lead file.
   */
  customerReferralId?: number;
  /**
   * File Id
   * @description The unique identifier of the file to be renamed.
   */
  fileId?: number;
  /**
   * Lead Id
   * @description The unique identifier of the lead whose file needs to be renamed.
   */
  leadId?: number;
  /**
   * New File Name
   * @description The desired new name for the file.
   */
  newFileName?: string;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_A_LEAD_FILE_NAME tool output.
 */
type AGENCYZOOM_UPDATE_A_LEAD_FILE_NAME_OUTPUT = {
  /**
   * Data
   * @description Contains the outcome of the file renaming operation, including a success flag and an optional message.
   */
  data?: {
      /**
       * Id
       * @description The identifier related to the entity involved in the operation, potentially the file ID or lead ID.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional message providing details about the operation's outcome, such as a success or error message.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates the success of the operation; typically `1` for true (success) or `0` for false (failure), mapped to a boolean.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_A_LEAD_OPPORTUNITY tool input.
 */
type AGENCYZOOM_UPDATE_A_LEAD_OPPORTUNITY_INPUT = {
  /**
   * Carrier Id
   * @description Unique identifier of the insurance carrier.
   */
  carrierId?: number;
  /**
   * Custom Fields
   * @description A list of custom fields to update for the opportunity. For date-type custom fields, ensure the value is formatted as 'MM/DD/YYYY'.
   */
  customFields?: {
      /**
       * Field Name
       * @description The name of the custom field. Refer to the GET /v1/api/custom-field-defs endpoint for available custom field definitions.
       */
      fieldName?: string;
      /**
       * Field Value
       * @description Value(s) for the custom field.
       */
      fieldValue?: string[];
  }[];
  /**
   * Id
   * @description Unique identifier of the opportunity to update.
   */
  id?: number;
  /**
   * Items
   * @description Number of items associated with this opportunity (e.g., policies, vehicles).
   * @default 1
   */
  items: number;
  /**
   * Lead Id
   * @description Unique identifier of the lead.
   */
  leadId?: number;
  /**
   * Premium
   * @description The premium amount for this opportunity. It is recommended to use the base currency unit (e.g., USD). Please verify the exact currency and format (e.g., cents or dollars) with AgencyZoom's API documentation.
   */
  premium?: number;
  /**
   * Product Line Id
   * @description Unique identifier of the product line.
   */
  productLineId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_A_LEAD_OPPORTUNITY tool output.
 */
type AGENCYZOOM_UPDATE_A_LEAD_OPPORTUNITY_OUTPUT = {
  /**
   * Data
   * @description Details of the update operation's result.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the updated opportunity.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Message detailing the operation's outcome.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Outcome of the update: `True` for success, `False` for failure.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_A_LEAD_QUOTE tool input.
 */
type AGENCYZOOM_UPDATE_A_LEAD_QUOTE_INPUT = {
  /**
   * Carrier Id
   * @description The unique identifier of the insurance carrier associated with this quote.
   */
  carrierId?: number;
  /**
   * Custom Fields
   * @description A list of custom field objects to update for the quote. Each object should specify the `fieldName` and its corresponding `fieldValue`.
   */
  customFields?: {
      /**
       * Field Name
       * @description Name of the custom field to update. Refer to AgencyZoom's custom field definitions (e.g., via GET /v1/api/settings/custom-field-defs) for available field names.
       */
      fieldName?: string;
      /**
       * Field Value
       * @description The value(s) for the custom field. For fields that support multiple selections (e.g., multi-select dropdowns), provide a list of selected string values. For other field types, provide a list containing a single string value.
       */
      fieldValue?: string[];
  }[];
  /**
   * Id
   * @description The unique identifier of the quote to be updated.
   */
  id?: number;
  /**
   * Items
   * @description The number of items covered by the quote (e.g., number of vehicles in an auto policy).
   */
  items?: number;
  /**
   * Lead Id
   * @description The unique identifier of the lead for which the quote is being updated. This is a path parameter.
   */
  leadId?: number;
  /**
   * Premium
   * @description The total premium amount for the quote, in cents (e.g., 10000 for $100.00).
   */
  premium?: number;
  /**
   * Product Line Id
   * @description The unique identifier of the product line (e.g., Auto, Home) for this quote.
   */
  productLineId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_A_LEAD_QUOTE tool output.
 */
type AGENCYZOOM_UPDATE_A_LEAD_QUOTE_OUTPUT = {
  /**
   * Data
   * @description Contains the details of the update operation's result, including a confirmation message, the ID of the updated quote, and a success flag.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the quote that was updated.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional message providing details about the outcome of the update operation, e.g., 'Quote updated successfully'.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates if the quote update was successful. `true` for success, `false` for failure.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_A_POLICY tool input.
 */
type AGENCYZOOM_UPDATE_A_POLICY_INPUT = {
  /**
   * Agency Number
   * @description Identifier for the agency branch or location associated with this policy.
   */
  agencyNumber?: string;
  /**
   * Agent Id
   * @description Unique identifier of the agent or producer who sold the policy.
   */
  agentId?: number;
  /**
   * Broker Fee
   * @description Broker fee for the policy, in cents (e.g., $50.00 is 5000).
   */
  brokerFee?: number;
  /**
   * Carrier Id
   * @description Unique identifier of the insurance carrier.
   */
  carrierId?: number;
  /**
   * Department Code
   * @description Code to assign the policy to a specific department (e.g., Personal Lines, Commercial Lines).
   */
  departmentCode?: string;
  /**
   * Effective Date
   * @description Date policy coverage begins (Format: YYYY-MM-DD).
   */
  effectiveDate?: string;
  /**
   * Expiry Date
   * @description Date policy coverage ends (Format: YYYY-MM-DD).
   */
  expiryDate?: string;
  /**
   * Group Code
   * @description Code to associate the policy with a specific group for internal tracking or reporting.
   */
  groupCode?: string;
  /**
   * Insured Name
   * @description Name(s) of the insured party or parties (individual or company).
   */
  insuredName?: string;
  /**
   * Items
   * @description Number of items covered (e.g., vehicles for auto policy, properties for property policy).
   */
  items?: number;
  /**
   * Lead Source Id
   * @description Unique identifier for the lead source (e.g., referral, website).
   */
  leadSourceId?: number;
  /**
   * Policy Id
   * @description Unique identifier of the policy to be updated (specified in the request path).
   */
  policyId?: number;
  /**
   * Policy Number
   * @description Unique alphanumeric string assigned to the policy by the insurance carrier.
   */
  policyNumber?: string;
  /**
   * Policy Type
   * @description Identifier for the type of policy transaction (e.g., New Business, Renewal).
   */
  policyType?: number;
  /**
   * Premium
   * @description Total premium amount for the policy term, in cents (e.g., $123.45 is 12345).
   */
  premium?: number;
  /**
   * Prior Carrier Name
   * @description Name of the previous insurance company, if applicable.
   */
  priorCarrierName?: string;
  /**
   * Prior Expiry Date
   * @description Expiry date of the previous policy (Format: YYYY-MM-DD), if applicable.
   */
  priorExpiryDate?: string;
  /**
   * Prior Policy Number
   * @description Policy number of the previous insurance policy, if applicable.
   */
  priorPolicyNumber?: string;
  /**
   * Product Category Id
   * @description Identifier for the policy's product category (e.g., Auto, Home, Commercial).
   */
  productCategoryId?: number;
  /**
   * Sold Date
   * @description Date policy was sold or bound (Format: YYYY-MM-DD).
   */
  soldDate?: string;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_A_POLICY tool output.
 */
type AGENCYZOOM_UPDATE_A_POLICY_OUTPUT = {
  /**
   * Data
   * @description Contains the policy update response: status message, updated policy ID, and success indicator.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the policy that was updated.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Confirmation message detailing the update outcome.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Boolean flag indicating update success (API represents `true` as 1, `false` as 0).
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_A_VEHICLE_S_DETAILS tool input.
 */
type AGENCYZOOM_UPDATE_A_VEHICLE_S_DETAILS_INPUT = {
  /**
   * Make
   * @description The manufacturer of the vehicle.
   */
  make?: string;
  /**
   * Model
   * @description The model of the vehicle.
   */
  model?: string;
  /**
   * Ownership
   * @description The ownership status of the vehicle. Defaults to 'Owned' if unspecified or if an empty string is provided.
   * @enum {string}
   */
  ownership?: "Financed" | "Leased" | "Owned";
  /**
   * Vehicle Id
   * @description The unique identifier of the opportunity vehicle to be updated.
   */
  vehicleId?: number;
  /**
   * Vin
   * @description The Vehicle Identification Number (VIN) of the vehicle. Typically a 17-character string.
   */
  vin?: string;
  /**
   * Year
   * @description The manufacturing year of the vehicle.
   */
  year?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_A_VEHICLE_S_DETAILS tool output.
 */
type AGENCYZOOM_UPDATE_A_VEHICLE_S_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Contains the response data for the vehicle update operation.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the updated vehicle.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional message providing details about the outcome of the update operation.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description A boolean indicating the success of the update operation. `True` for success, `False` for failure.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_BUSINESS_LEAD tool input.
 */
type AGENCYZOOM_UPDATE_BUSINESS_LEAD_INPUT = {
  /**
   * Lead Id
   * @description Unique identifier (used in URL path) of the existing business lead to update.
   */
  leadId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_BUSINESS_LEAD tool output.
 */
type AGENCYZOOM_UPDATE_BUSINESS_LEAD_OUTPUT = {
  /**
   * Data
   * @description Details of the update attempt: an optional message, ID of the updated lead, and success indicator.
   */
  data?: {
      /**
       * Id
       * @description ID of the business lead that was updated.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Optional confirmation or status message for the update.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Outcome of the update operation: `True` if successful, `False` otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_CUSTOMER tool input.
 */
type AGENCYZOOM_UPDATE_CUSTOMER_INPUT = {
  /**
   * Agent Id
   * @description The ID of the producer or agent assigned to the customer.
   */
  agentId?: number;
  /**
   * Annual Revenue
   * @description Annual revenue of the business. Applicable only if `bizCustomer` is 1 (commercial customer).
   */
  annualRevenue?: number;
  /**
   * Birthday
   * @description Customer's date of birth (MM/dd/YYYY format).
   */
  birthday?: string;
  /**
   * Biz Customer
   * @description Indicates if the customer is a business. Use 1 for a business customer, 0 for an individual customer.
   */
  bizCustomer?: number;
  /**
   * City
   * @description City of the customer's address.
   */
  city?: string;
  /**
   * Contact Firstname
   * @description First name of the primary contact, typically for business customers.
   */
  contactFirstname?: string;
  /**
   * Contact Lastname
   * @description Last name of the primary contact, typically for business customers.
   */
  contactLastname?: string;
  /**
   * Contact Middlename
   * @description Middle name of the primary contact, typically for business customers.
   */
  contactMiddlename?: string;
  /**
   * Country
   * @description Country of the customer's address (e.g., USA, Canada).
   */
  country?: string;
  /**
   * Create Date
   * @description Customer's creation date (MM/dd/YYYY format).
   */
  createDate?: string;
  /**
   * Csr Id
   * @description The ID of the Customer Service Representative (CSR) assigned to the customer.
   */
  csrId?: number;
  /**
   * Custom Fields
   * @description List of custom fields to update. Each item specifies `fieldName` and `fieldValue`. Date-type custom field values must be in 'MM/dd/YYYY' format.
   */
  customFields?: {
      /**
       * Field Name
       * @description Name of the custom field. Refer to 'getCustomFieldDefs' in AgencyZoom API documentation for valid names.
       */
      fieldName?: string;
      /**
       * Field Value
       * @description Value(s) for the custom field. For single-value fields (e.g., text, date), provide a list with one string; for multi-select fields, a list of selected option strings. Date values must be in 'MM/dd/YYYY' format.
       */
      fieldValue?: string[];
  }[];
  /**
   * Customer Id
   * @description Unique identifier for the customer to be updated. This value will also be used as the `customerId` in the API request path.
   */
  customerId?: number;
  /**
   * Email
   * @description Customer's primary email address.
   */
  email?: string;
  /**
   * Firstname
   * @description Customer's first name.
   */
  firstname?: string;
  /**
   * Lastname
   * @description Customer's last name.
   */
  lastname?: string;
  /**
   * Number Of Employees
   * @description Number of employees. Applicable only if `bizCustomer` is 1 (commercial customer).
   */
  numberOfEmployees?: number;
  /**
   * Phone
   * @description Customer's primary phone number.
   */
  phone?: string;
  /**
   * Secondary Email
   * @description Customer's secondary email address.
   */
  secondaryEmail?: string;
  /**
   * Secondary Phone
   * @description Customer's secondary phone number.
   */
  secondaryPhone?: string;
  /**
   * State
   * @description State or province of the customer's address (e.g., CA, NY).
   */
  state?: string;
  /**
   * Street Address
   * @description Customer's street address.
   */
  streetAddress?: string;
  /**
   * Tag Names
   * @description Semicolon-separated string of tag names to associate with the customer (e.g., 'Lead;VIP;Past Client').
   */
  tagNames?: string;
  /**
   * Total Payroll
   * @description Total payroll of the business. Applicable only if `bizCustomer` is 1 (commercial customer).
   */
  totalPayroll?: number;
  /**
   * Zip
   * @description Postal or ZIP code of the customer's address.
   */
  zip?: string;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_CUSTOMER tool output.
 */
type AGENCYZOOM_UPDATE_CUSTOMER_OUTPUT = {
  /**
   * Data
   * @description Contains the result of the update operation, including a status message, the customer ID, and a success indicator.
   */
  data?: {
      /**
       * Id
       * @description The ID of the customer record that was updated.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Confirmation or status message related to the update operation.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates the outcome of the update operation: 1 for success (true), 0 for failure (false).
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_LEAD tool input.
 */
type AGENCYZOOM_UPDATE_LEAD_INPUT = {
  /**
   * Agency Number
   * @description Agency's location code associated with the lead.
   */
  agencyNumber?: string;
  /**
   * Assign To
   * @description Identifier of the primary producer or agent to whom the lead is assigned.
   */
  assignTo?: string;
  /**
   * Assignment Group Id
   * @description Identifier of the assignment group for the lead.
   */
  assignmentGroupId?: number;
  /**
   * Birthday
   * @description Lead's date of birth in MM/DD/YY format.
   */
  birthday?: string;
  /**
   * City
   * @description City of the lead's address.
   */
  city?: string;
  /**
   * Contact Date
   * @description Last contact date (e.g., YYYY-MM-DD).
   */
  contactDate?: string;
  /**
   * Country
   * @description Country of the lead's address.
   */
  country?: string;
  /**
   * Csr Id
   * @description Identifier of the Customer Service Representative (CSR) assigned to the lead.
   */
  csrId?: number;
  /**
   * Custom Fields
   * @description A list of custom fields and their values to update for the lead.
   */
  customFields?: {
      /**
       * Field Name
       * @description Name of the custom field. For available field names, refer to the GET /custom-field-defs endpoint (see https://app.agencyzoom.com/openapi/#tag/Configuration-and-Settings/operation/getCustomFieldDefs).
       */
      fieldName?: string;
      /**
       * Field Value
       * @description Value(s) for the custom field. For custom fields that allow multiple options, provide a list of strings. For all other data types, provide a list containing a single string value.
       */
      fieldValue?: string[];
  }[];
  /**
   * Department Code
   * @description Department code associated with the lead.
   */
  departmentCode?: string;
  /**
   * Email
   * @description Lead's primary email address.
   */
  email?: string;
  /**
   * Firstname
   * @description Lead's first name.
   */
  firstname?: string;
  /**
   * Group Code
   * @description Group code associated with the lead.
   */
  groupCode?: string;
  /**
   * Is Business
   * @description Indicates if lead is a business entity (true) or an individual (false).
   */
  isBusiness?: boolean;
  /**
   * Lastname
   * @description Lead's last name.
   */
  lastname?: string;
  /**
   * Lead Id
   * @description The unique identifier of the lead to be updated.
   */
  leadId?: number;
  /**
   * Lead Source Id
   * @description Identifier of the source from which the lead originated.
   */
  leadSourceId?: number;
  /**
   * Marital Status
   * @description Integer code representing the lead's marital status (e.g., 1 for Single, 2 for Married). Consult AgencyZoom documentation for specific codes.
   */
  maritalStatus?: number;
  /**
   * Middlename
   * @description Lead's middle name.
   */
  middlename?: string;
  /**
   * Name
   * @description Name of the organization, if the lead is a business entity.
   */
  name?: string;
  /**
   * Next Expiration Date
   * @description Next policy expiration date relevant to the lead, in MM/DD/YY format.
   */
  nextExpirationDate?: string;
  /**
   * Nickname
   * @description Lead's nickname.
   */
  nickname?: string;
  /**
   * Notes
   * @description Additional notes or comments related to the lead.
   */
  notes?: string;
  /**
   * Other Csrs
   * @description List of unique identifiers for other Customer Service Representatives (CSRs) also assigned to the lead.
   */
  otherCsrs?: number[];
  /**
   * Other Producers
   * @description List of unique identifiers for other producers or agents also assigned to the lead.
   */
  otherProducers?: number[];
  /**
   * Phone
   * @description Lead's primary phone number.
   */
  phone?: string;
  /**
   * Pipeline Id
   * @description Identifier of the sales pipeline the lead belongs to.
   */
  pipelineId?: number;
  /**
   * Quote Date
   * @description Date quote was provided to the lead (e.g., YYYY-MM-DD).
   */
  quoteDate?: string;
  /**
   * Secondary Email
   * @description Lead's secondary email address.
   */
  secondaryEmail?: string;
  /**
   * Secondary Phone
   * @description Lead's secondary phone number.
   */
  secondaryPhone?: string;
  /**
   * Sold Date
   * @description Date lead was marked as sold (e.g., YYYY-MM-DD).
   */
  soldDate?: string;
  /**
   * Stage Id
   * @description Identifier of the stage the lead is currently in within the pipeline.
   */
  stageId?: number;
  /**
   * State
   * @description State or province of the lead's address.
   */
  state?: string;
  /**
   * Street Address
   * @description Lead's street address.
   */
  streetAddress?: string;
  /**
   * Street Address Line2
   * @description Additional line for the lead's street address.
   */
  streetAddressLine2?: string;
  /**
   * Tag Names
   * @description A single string containing tag names, separated by semicolons (e.g., 'Hot Lead;Follow Up Q3').
   */
  tagNames?: string;
  /**
   * X Date
   * @description Policy expiration date or key future date for lead's insurance needs (e.g., YYYY-MM-DD or MM/DD/YY), often policy renewal or X-date.
   */
  xDate?: string;
  /**
   * Zip
   * @description Postal or ZIP code of the lead's address.
   */
  zip?: string;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_LEAD tool output.
 */
type AGENCYZOOM_UPDATE_LEAD_OUTPUT = {
  /**
   * Data
   * @description Contains the response data from the API, including a confirmation message, the ID of the updated lead, and a success flag.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the lead that was updated.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional confirmation or status message returned by the API.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Boolean flag indicating the outcome of the update operation. `true` if successful, `false` otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_LEAD_STATUS_BY_ID tool input.
 */
type AGENCYZOOM_UPDATE_LEAD_STATUS_BY_ID_INPUT = {
  /**
   * Change Lead Source To
   * @description Optional. The identifier for a new lead source, referencing an entry in the `leadSource` table. Use this to update the lead's origin.
   */
  changeLeadSourceTo?: number;
  /**
   * Date
   * @description Optional. The relevant date associated with the status change. If status is XDATED (5), this is the reactivation date. Otherwise, it can be the contact or quoted date. Format: ISO 8601 string (e.g., YYYY-MM-DDTHH:mm:ssZ).
   */
  date?: string;
  /**
   * Lead Id
   * @description The unique identifier for the lead whose status is to be updated.
   */
  leadId?: number;
  /**
   * Loss Reason Id
   * @description Optional. The identifier for the reason a lead was lost, referencing an entry in the `leadLossReason` table. Typically used when `status` is 3 (LOST).
   */
  lossReasonId?: number;
  /**
   * Recycle To Pipeline
   * @description Optional. The identifier of the pipeline to which the lead should be moved if it's being recycled.
   */
  recycleToPipeline?: number;
  /**
   * Recycle To Stage
   * @description Optional. The identifier of the stage to which the lead should be moved if it's being recycled.
   */
  recycleToStage?: number;
  /**
   * Status
   * @description The new status for the lead. Allowed values are 0 (ACTIVE), 2 (WON), 3 (LOST), 5 (XDATED).
   */
  status?: number;
  /**
   * Tag Ids
   * @description Optional. A list of tag identifiers (integers) to be applied to or updated on the lead.
   */
  tagIds?: number[];
  /**
   * To Stage Id
   * @description Optional. The identifier of the target workflow stage to move the lead to. This can be used for general stage movements.
   */
  toStageId?: number;
  /**
   * Workflow Id
   * @description Optional. Identifier of the workflow to associate with the lead.
   */
  workflowId?: number;
  /**
   * Workflow Stage Id
   * @description Optional. Identifier of the specific stage within a workflow.
   */
  workflowStageId?: number;
  /**
   * X Date Type
   * @description Optional. A descriptive name for the X-date recycle event (e.g., 'Renewal Reminder', 'Policy Expiration'). Used when `status` is 5 (XDATED) to specify the nature of the future follow-up.
   */
  xDateType?: string;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_LEAD_STATUS_BY_ID tool output.
 */
type AGENCYZOOM_UPDATE_LEAD_STATUS_BY_ID_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed response of the lead status update, including a success flag, message, and the ID of the modified lead.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the lead that was updated as a result of this operation.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional confirmation message providing details about the outcome of the lead status update operation.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description A boolean indicating the success of the operation. `True` if the lead status was updated successfully, `False` otherwise. The API might return 1 for true and 0 for false.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_MY_PROFILE tool input.
 */
type AGENCYZOOM_UPDATE_MY_PROFILE_INPUT = {
  /**
   * Email
   * @description The user's email address. This must be unique within the AgencyZoom system.
   */
  email?: string;
  /**
   * Firstname
   * @description The user's first name.
   */
  firstname?: string;
  /**
   * Lastname
   * @description The user's last name.
   */
  lastname?: string;
  /**
   * Phone
   * @description The user's optional phone number.
   */
  phone?: string;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_MY_PROFILE tool output.
 */
type AGENCYZOOM_UPDATE_MY_PROFILE_OUTPUT = {
  /**
   * Data
   * @description Response data from the profile update, including an optional message, user ID (if available), and success indicator.
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the updated user; may not always be present.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description Optional confirmation message on the profile update outcome.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description Indicates if the profile update succeeded (true/false).
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_TAGS_FOR_A_POLICY tool input.
 */
type AGENCYZOOM_UPDATE_TAGS_FOR_A_POLICY_INPUT = {
  /**
   * Ams Policy Id
   * @description The unique identifier of the policy as recognised by the Agency Management System (AMS). If provided, this ID is used to locate the policy.
   */
  amsPolicyId?: number;
  /**
   * Policy Id
   * @description The unique identifier of the policy within AgencyZoom. This field is ignored if `amsPolicyId` is provided.
   */
  policyId?: number;
  /**
   * Tag Names
   * @description A comma-separated string of tag names to add to the policy. For example, 'New Lead,Follow Up'.
   */
  tagNames?: string;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_TAGS_FOR_A_POLICY tool output.
 */
type AGENCYZOOM_UPDATE_TAGS_FOR_A_POLICY_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed response data from the update tags operation.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the policy that had its tags updated.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional message providing details about the outcome of the operation, e.g., 'Tags updated successfully'.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description A boolean indicating the success of the tag update operation. `True` if tags were added successfully, `False` otherwise.
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_TASK tool input.
 */
type AGENCYZOOM_UPDATE_TASK_INPUT = {
  /**
   * Task Id
   * @description The unique identifier of the task. This should match the `taskId` specified in the URL path.
   */
  taskId?: number;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_UPDATE_TASK tool output.
 */
type AGENCYZOOM_UPDATE_TASK_OUTPUT = {
  /**
   * Data
   * @description Contains the detailed result of the task update operation, including any confirmation messages and the ID of the modified task.
   */
  data?: {
      /**
       * Id
       * @description The unique identifier of the task that was updated.
       * @default null
       */
      id: number | null;
      /**
       * Message
       * @description An optional confirmation or status message regarding the update operation, e.g., 'Task updated successfully'.
       * @default null
       */
      message: string | null;
      /**
       * Result
       * @description A boolean indicating if the update operation was successful (`true`) or not (`false`).
       * @default null
       */
      result: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_V4_SSO_LOG_THE_USER_IN tool input.
 */
type AGENCYZOOM_V4_SSO_LOG_THE_USER_IN_INPUT = {
  /**
   * Password
   * @description User's password for SSO authentication.
   */
  password?: string;
  /**
   * Username
   * @description User's email address, serving as their username for the SSO login.
   */
  username?: string;
};

/**
 * Type of AGENCYZOOM's AGENCYZOOM_V4_SSO_LOG_THE_USER_IN tool output.
 */
type AGENCYZOOM_V4_SSO_LOG_THE_USER_IN_OUTPUT = {
  /**
   * Data
   * @description The core data returned upon successful SSO login, including the JWT and owner agent status.
   */
  data?: {
      /**
       * Jwt
       * @description The JSON Web Token (JWT) generated upon successful authentication. This token should be included in the authorization header of subsequent API requests.
       * @default null
       */
      jwt: string | null;
      /**
       * Owner Agent
       * @description A boolean flag indicating if the authenticated user has 'ownerAgent' privileges. `True` if the user is an owner agent, `False` otherwise.
       * @default null
       */
      ownerAgent: boolean | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "AGENCYZOOM".
 */
export type AGENCYZOOM_TOOL_INPUTS = {
  AUTHENTICATE_FOR_JWTVIA_V4_SSO: AGENCYZOOM_AUTHENTICATE_FOR_JWTVIA_V4_SSO_INPUT
  BATCH_CREATE_CONTACT: AGENCYZOOM_BATCH_CREATE_CONTACT_INPUT
  BATCH_CREATE_LEAD: AGENCYZOOM_BATCH_CREATE_LEAD_INPUT
  BATCH_DELETE_TASK: AGENCYZOOM_BATCH_DELETE_TASK_INPUT
  CHANGE_STATUS_FOR_LEAD: AGENCYZOOM_CHANGE_STATUS_FOR_LEAD_INPUT
  COMPLETE_TASK: AGENCYZOOM_COMPLETE_TASK_INPUT
  CREATE_AN_OPPORTUNITY: AGENCYZOOM_CREATE_AN_OPPORTUNITY_INPUT
  CREATE_A_CUSTOMER_NOTE: AGENCYZOOM_CREATE_A_CUSTOMER_NOTE_INPUT
  CREATE_A_DRIVER_FOR_AN_OPPORTUNITY: AGENCYZOOM_CREATE_A_DRIVER_FOR_AN_OPPORTUNITY_INPUT
  CREATE_A_LEAD_NOTE: AGENCYZOOM_CREATE_A_LEAD_NOTE_INPUT
  CREATE_A_LEAD_OPPORTUNITY: AGENCYZOOM_CREATE_A_LEAD_OPPORTUNITY_INPUT
  CREATE_A_LEAD_QUOTE: AGENCYZOOM_CREATE_A_LEAD_QUOTE_INPUT
  CREATE_A_VEHICLE_FOR_AN_OPPORTUNITY: AGENCYZOOM_CREATE_A_VEHICLE_FOR_AN_OPPORTUNITY_INPUT
  CREATE_BIZ_LEAD: AGENCYZOOM_CREATE_BIZ_LEAD_INPUT
  CREATE_LEAD: AGENCYZOOM_CREATE_LEAD_INPUT
  CREATE_TASK: AGENCYZOOM_CREATE_TASK_INPUT
  DELETE_AN_OPPORTUNITY: AGENCYZOOM_DELETE_AN_OPPORTUNITY_INPUT
  DELETE_A_CUSTOMER: AGENCYZOOM_DELETE_A_CUSTOMER_INPUT
  DELETE_A_CUSTOMER_FILE: AGENCYZOOM_DELETE_A_CUSTOMER_FILE_INPUT
  DELETE_A_CUSTOMER_POLICY: AGENCYZOOM_DELETE_A_CUSTOMER_POLICY_INPUT
  DELETE_A_DRIVER: AGENCYZOOM_DELETE_A_DRIVER_INPUT
  DELETE_A_LEAD_FILE: AGENCYZOOM_DELETE_A_LEAD_FILE_INPUT
  DELETE_A_LEAD_OPPORTUNITY: AGENCYZOOM_DELETE_A_LEAD_OPPORTUNITY_INPUT
  DELETE_A_LEAD_QUOTE: AGENCYZOOM_DELETE_A_LEAD_QUOTE_INPUT
  DELETE_A_TASK: AGENCYZOOM_DELETE_A_TASK_INPUT
  DELETE_A_VEHICLE: AGENCYZOOM_DELETE_A_VEHICLE_INPUT
  DELETE_MESSAGE: AGENCYZOOM_DELETE_MESSAGE_INPUT
  DELETE_THREAD: AGENCYZOOM_DELETE_THREAD_INPUT
  GET_AMS_POLICIES_FOR_A_CUSTOMER: AGENCYZOOM_GET_AMS_POLICIES_FOR_A_CUSTOMER_INPUT
  GET_AUTH_URL_FOR_V4_SSO: AGENCYZOOM_GET_AUTH_URL_FOR_V4_SSO_INPUT
  GET_A_LIST_OF_ASSIGN_GROUPS: AGENCYZOOM_GET_A_LIST_OF_ASSIGN_GROUPS_INPUT
  GET_A_LIST_OF_CARRIERS: AGENCYZOOM_GET_A_LIST_OF_CARRIERS_INPUT
  GET_A_LIST_OF_CSRS: AGENCYZOOM_GET_A_LIST_OF_CSRS_INPUT
  GET_A_LIST_OF_CUSTOM_FIELDS: AGENCYZOOM_GET_A_LIST_OF_CUSTOM_FIELDS_INPUT
  GET_A_LIST_OF_DRIVERS_FOR_AN_OPPORTUNITY: AGENCYZOOM_GET_A_LIST_OF_DRIVERS_FOR_AN_OPPORTUNITY_INPUT
  GET_A_LIST_OF_EMPLOYEES: AGENCYZOOM_GET_A_LIST_OF_EMPLOYEES_INPUT
  GET_A_LIST_OF_LEAD_SOURCES: AGENCYZOOM_GET_A_LIST_OF_LEAD_SOURCES_INPUT
  GET_A_LIST_OF_LEAD_SOURCE_CATEGORIES: AGENCYZOOM_GET_A_LIST_OF_LEAD_SOURCE_CATEGORIES_INPUT
  GET_A_LIST_OF_LIFE_PROFESSIONALS: AGENCYZOOM_GET_A_LIST_OF_LIFE_PROFESSIONALS_INPUT
  GET_A_LIST_OF_LOCATIONS: AGENCYZOOM_GET_A_LIST_OF_LOCATIONS_INPUT
  GET_A_LIST_OF_LOSS_REASONS: AGENCYZOOM_GET_A_LIST_OF_LOSS_REASONS_INPUT
  GET_A_LIST_OF_PIPELINES: AGENCYZOOM_GET_A_LIST_OF_PIPELINES_INPUT
  GET_A_LIST_OF_PRODUCER: AGENCYZOOM_GET_A_LIST_OF_PRODUCER_INPUT
  GET_A_LIST_OF_PRODUCT_LINES_POLICY_TYPES: AGENCYZOOM_GET_A_LIST_OF_PRODUCT_LINES_POLICY_TYPES_INPUT
  GET_A_LIST_OF_RECYCLE_EVENTS: AGENCYZOOM_GET_A_LIST_OF_RECYCLE_EVENTS_INPUT
  GET_A_LIST_OF_VEHICLES_FOR_AN_OPPORTUNITY: AGENCYZOOM_GET_A_LIST_OF_VEHICLES_FOR_AN_OPPORTUNITY_INPUT
  GET_DEPARTMENTS_GROUPS: AGENCYZOOM_GET_DEPARTMENTS_GROUPS_INPUT
  GET_LEAD_FILES: AGENCYZOOM_GET_LEAD_FILES_INPUT
  GET_LEAD_NOTES: AGENCYZOOM_GET_LEAD_NOTES_INPUT
  GET_LEAD_QUOTES: AGENCYZOOM_GET_LEAD_QUOTES_INPUT
  GET_LEAD_TASKS: AGENCYZOOM_GET_LEAD_TASKS_INPUT
  GET_LIST_OF_END_STAGES: AGENCYZOOM_GET_LIST_OF_END_STAGES_INPUT
  GET_POLICIES_FOR_A_CUSTOMER: AGENCYZOOM_GET_POLICIES_FOR_A_CUSTOMER_INPUT
  GET_THE_CUSTOMER_DETAILS: AGENCYZOOM_GET_THE_CUSTOMER_DETAILS_INPUT
  GET_THE_CUSTOMER_TASKS: AGENCYZOOM_GET_THE_CUSTOMER_TASKS_INPUT
  GET_THE_DRIVER_DETAILS: AGENCYZOOM_GET_THE_DRIVER_DETAILS_INPUT
  GET_THE_LEAD_DETAILS: AGENCYZOOM_GET_THE_LEAD_DETAILS_INPUT
  GET_THE_OPPORTUNITIES_FOR_A_LEAD: AGENCYZOOM_GET_THE_OPPORTUNITIES_FOR_A_LEAD_INPUT
  GET_THE_OPPORTUNITY_DETAILS: AGENCYZOOM_GET_THE_OPPORTUNITY_DETAILS_INPUT
  GET_THE_TASK_DETAILS: AGENCYZOOM_GET_THE_TASK_DETAILS_INPUT
  GET_THE_VEHICLE_DETAILS: AGENCYZOOM_GET_THE_VEHICLE_DETAILS_INPUT
  GET_THREAD_DETAILS: AGENCYZOOM_GET_THREAD_DETAILS_INPUT
  LINK_A_DRIVER_TO_OPPORTUNITY: AGENCYZOOM_LINK_A_DRIVER_TO_OPPORTUNITY_INPUT
  LINK_A_VEHICLE_TO_OPPORTUNITY: AGENCYZOOM_LINK_A_VEHICLE_TO_OPPORTUNITY_INPUT
  LIST_PRODUCT_CATEGORIES: AGENCYZOOM_LIST_PRODUCT_CATEGORIES_INPUT
  LOG_THE_USER_IN: AGENCYZOOM_LOG_THE_USER_IN_INPUT
  LOG_THE_USER_OUT: AGENCYZOOM_LOG_THE_USER_OUT_INPUT
  MARK_THREAD_AS_UNREAD_API_ENDPOINT: AGENCYZOOM_MARK_THREAD_AS_UNREAD_API_ENDPOINT_INPUT
  MOVE_LEAD_TO_SOLD: AGENCYZOOM_MOVE_LEAD_TO_SOLD_INPUT
  REMOVE_TEXT_THREAD_ENDPOINT: AGENCYZOOM_REMOVE_TEXT_THREAD_ENDPOINT_INPUT
  REOPEN_A_TASK: AGENCYZOOM_REOPEN_A_TASK_INPUT
  SEARCH_BUSINESS_CLASSIFICATIONS: AGENCYZOOM_SEARCH_BUSINESS_CLASSIFICATIONS_INPUT
  SEARCH_CUSTOMERS: AGENCYZOOM_SEARCH_CUSTOMERS_INPUT
  SEARCH_EMAIL_THREADS: AGENCYZOOM_SEARCH_EMAIL_THREADS_INPUT
  SEARCH_LEADS: AGENCYZOOM_SEARCH_LEADS_INPUT
  SEARCH_LEADS_COUNT: AGENCYZOOM_SEARCH_LEADS_COUNT_INPUT
  SEARCH_LIFE_AND_HEALTH_LEADS: AGENCYZOOM_SEARCH_LIFE_AND_HEALTH_LEADS_INPUT
  SEARCH_SMS_THREADS: AGENCYZOOM_SEARCH_SMS_THREADS_INPUT
  SEARCH_TASKS: AGENCYZOOM_SEARCH_TASKS_INPUT
  SERVICE_TICKET_LIST: AGENCYZOOM_SERVICE_TICKET_LIST_INPUT
  TEXT_DETAIL_THREAD: AGENCYZOOM_TEXT_DETAIL_THREAD_INPUT
  UNLINK_A_DRIVER_FROM_OPPORTUNITY: AGENCYZOOM_UNLINK_A_DRIVER_FROM_OPPORTUNITY_INPUT
  UNLINK_A_VEHICLE_FROM_OPPORTUNITY: AGENCYZOOM_UNLINK_A_VEHICLE_FROM_OPPORTUNITY_INPUT
  UNREAD_THREAD: AGENCYZOOM_UNREAD_THREAD_INPUT
  UPDATE_AN_OPPORTUNITY: AGENCYZOOM_UPDATE_AN_OPPORTUNITY_INPUT
  UPDATE_A_DRIVER_S_DETAILS: AGENCYZOOM_UPDATE_A_DRIVER_S_DETAILS_INPUT
  UPDATE_A_LEAD_FILE_NAME: AGENCYZOOM_UPDATE_A_LEAD_FILE_NAME_INPUT
  UPDATE_A_LEAD_OPPORTUNITY: AGENCYZOOM_UPDATE_A_LEAD_OPPORTUNITY_INPUT
  UPDATE_A_LEAD_QUOTE: AGENCYZOOM_UPDATE_A_LEAD_QUOTE_INPUT
  UPDATE_A_POLICY: AGENCYZOOM_UPDATE_A_POLICY_INPUT
  UPDATE_A_VEHICLE_S_DETAILS: AGENCYZOOM_UPDATE_A_VEHICLE_S_DETAILS_INPUT
  UPDATE_BUSINESS_LEAD: AGENCYZOOM_UPDATE_BUSINESS_LEAD_INPUT
  UPDATE_CUSTOMER: AGENCYZOOM_UPDATE_CUSTOMER_INPUT
  UPDATE_LEAD: AGENCYZOOM_UPDATE_LEAD_INPUT
  UPDATE_LEAD_STATUS_BY_ID: AGENCYZOOM_UPDATE_LEAD_STATUS_BY_ID_INPUT
  UPDATE_MY_PROFILE: AGENCYZOOM_UPDATE_MY_PROFILE_INPUT
  UPDATE_TAGS_FOR_A_POLICY: AGENCYZOOM_UPDATE_TAGS_FOR_A_POLICY_INPUT
  UPDATE_TASK: AGENCYZOOM_UPDATE_TASK_INPUT
  V4_SSO_LOG_THE_USER_IN: AGENCYZOOM_V4_SSO_LOG_THE_USER_IN_INPUT
}

/**
 * Type map of all available tool input types for toolkit "AGENCYZOOM".
 */
export type AGENCYZOOM_TOOL_OUTPUTS = {
  AUTHENTICATE_FOR_JWTVIA_V4_SSO: AGENCYZOOM_AUTHENTICATE_FOR_JWTVIA_V4_SSO_OUTPUT
  BATCH_CREATE_CONTACT: AGENCYZOOM_BATCH_CREATE_CONTACT_OUTPUT
  BATCH_CREATE_LEAD: AGENCYZOOM_BATCH_CREATE_LEAD_OUTPUT
  BATCH_DELETE_TASK: AGENCYZOOM_BATCH_DELETE_TASK_OUTPUT
  CHANGE_STATUS_FOR_LEAD: AGENCYZOOM_CHANGE_STATUS_FOR_LEAD_OUTPUT
  COMPLETE_TASK: AGENCYZOOM_COMPLETE_TASK_OUTPUT
  CREATE_AN_OPPORTUNITY: AGENCYZOOM_CREATE_AN_OPPORTUNITY_OUTPUT
  CREATE_A_CUSTOMER_NOTE: AGENCYZOOM_CREATE_A_CUSTOMER_NOTE_OUTPUT
  CREATE_A_DRIVER_FOR_AN_OPPORTUNITY: AGENCYZOOM_CREATE_A_DRIVER_FOR_AN_OPPORTUNITY_OUTPUT
  CREATE_A_LEAD_NOTE: AGENCYZOOM_CREATE_A_LEAD_NOTE_OUTPUT
  CREATE_A_LEAD_OPPORTUNITY: AGENCYZOOM_CREATE_A_LEAD_OPPORTUNITY_OUTPUT
  CREATE_A_LEAD_QUOTE: AGENCYZOOM_CREATE_A_LEAD_QUOTE_OUTPUT
  CREATE_A_VEHICLE_FOR_AN_OPPORTUNITY: AGENCYZOOM_CREATE_A_VEHICLE_FOR_AN_OPPORTUNITY_OUTPUT
  CREATE_BIZ_LEAD: AGENCYZOOM_CREATE_BIZ_LEAD_OUTPUT
  CREATE_LEAD: AGENCYZOOM_CREATE_LEAD_OUTPUT
  CREATE_TASK: AGENCYZOOM_CREATE_TASK_OUTPUT
  DELETE_AN_OPPORTUNITY: AGENCYZOOM_DELETE_AN_OPPORTUNITY_OUTPUT
  DELETE_A_CUSTOMER: AGENCYZOOM_DELETE_A_CUSTOMER_OUTPUT
  DELETE_A_CUSTOMER_FILE: AGENCYZOOM_DELETE_A_CUSTOMER_FILE_OUTPUT
  DELETE_A_CUSTOMER_POLICY: AGENCYZOOM_DELETE_A_CUSTOMER_POLICY_OUTPUT
  DELETE_A_DRIVER: AGENCYZOOM_DELETE_A_DRIVER_OUTPUT
  DELETE_A_LEAD_FILE: AGENCYZOOM_DELETE_A_LEAD_FILE_OUTPUT
  DELETE_A_LEAD_OPPORTUNITY: AGENCYZOOM_DELETE_A_LEAD_OPPORTUNITY_OUTPUT
  DELETE_A_LEAD_QUOTE: AGENCYZOOM_DELETE_A_LEAD_QUOTE_OUTPUT
  DELETE_A_TASK: AGENCYZOOM_DELETE_A_TASK_OUTPUT
  DELETE_A_VEHICLE: AGENCYZOOM_DELETE_A_VEHICLE_OUTPUT
  DELETE_MESSAGE: AGENCYZOOM_DELETE_MESSAGE_OUTPUT
  DELETE_THREAD: AGENCYZOOM_DELETE_THREAD_OUTPUT
  GET_AMS_POLICIES_FOR_A_CUSTOMER: AGENCYZOOM_GET_AMS_POLICIES_FOR_A_CUSTOMER_OUTPUT
  GET_AUTH_URL_FOR_V4_SSO: AGENCYZOOM_GET_AUTH_URL_FOR_V4_SSO_OUTPUT
  GET_A_LIST_OF_ASSIGN_GROUPS: AGENCYZOOM_GET_A_LIST_OF_ASSIGN_GROUPS_OUTPUT
  GET_A_LIST_OF_CARRIERS: AGENCYZOOM_GET_A_LIST_OF_CARRIERS_OUTPUT
  GET_A_LIST_OF_CSRS: AGENCYZOOM_GET_A_LIST_OF_CSRS_OUTPUT
  GET_A_LIST_OF_CUSTOM_FIELDS: AGENCYZOOM_GET_A_LIST_OF_CUSTOM_FIELDS_OUTPUT
  GET_A_LIST_OF_DRIVERS_FOR_AN_OPPORTUNITY: AGENCYZOOM_GET_A_LIST_OF_DRIVERS_FOR_AN_OPPORTUNITY_OUTPUT
  GET_A_LIST_OF_EMPLOYEES: AGENCYZOOM_GET_A_LIST_OF_EMPLOYEES_OUTPUT
  GET_A_LIST_OF_LEAD_SOURCES: AGENCYZOOM_GET_A_LIST_OF_LEAD_SOURCES_OUTPUT
  GET_A_LIST_OF_LEAD_SOURCE_CATEGORIES: AGENCYZOOM_GET_A_LIST_OF_LEAD_SOURCE_CATEGORIES_OUTPUT
  GET_A_LIST_OF_LIFE_PROFESSIONALS: AGENCYZOOM_GET_A_LIST_OF_LIFE_PROFESSIONALS_OUTPUT
  GET_A_LIST_OF_LOCATIONS: AGENCYZOOM_GET_A_LIST_OF_LOCATIONS_OUTPUT
  GET_A_LIST_OF_LOSS_REASONS: AGENCYZOOM_GET_A_LIST_OF_LOSS_REASONS_OUTPUT
  GET_A_LIST_OF_PIPELINES: AGENCYZOOM_GET_A_LIST_OF_PIPELINES_OUTPUT
  GET_A_LIST_OF_PRODUCER: AGENCYZOOM_GET_A_LIST_OF_PRODUCER_OUTPUT
  GET_A_LIST_OF_PRODUCT_LINES_POLICY_TYPES: AGENCYZOOM_GET_A_LIST_OF_PRODUCT_LINES_POLICY_TYPES_OUTPUT
  GET_A_LIST_OF_RECYCLE_EVENTS: AGENCYZOOM_GET_A_LIST_OF_RECYCLE_EVENTS_OUTPUT
  GET_A_LIST_OF_VEHICLES_FOR_AN_OPPORTUNITY: AGENCYZOOM_GET_A_LIST_OF_VEHICLES_FOR_AN_OPPORTUNITY_OUTPUT
  GET_DEPARTMENTS_GROUPS: AGENCYZOOM_GET_DEPARTMENTS_GROUPS_OUTPUT
  GET_LEAD_FILES: AGENCYZOOM_GET_LEAD_FILES_OUTPUT
  GET_LEAD_NOTES: AGENCYZOOM_GET_LEAD_NOTES_OUTPUT
  GET_LEAD_QUOTES: AGENCYZOOM_GET_LEAD_QUOTES_OUTPUT
  GET_LEAD_TASKS: AGENCYZOOM_GET_LEAD_TASKS_OUTPUT
  GET_LIST_OF_END_STAGES: AGENCYZOOM_GET_LIST_OF_END_STAGES_OUTPUT
  GET_POLICIES_FOR_A_CUSTOMER: AGENCYZOOM_GET_POLICIES_FOR_A_CUSTOMER_OUTPUT
  GET_THE_CUSTOMER_DETAILS: AGENCYZOOM_GET_THE_CUSTOMER_DETAILS_OUTPUT
  GET_THE_CUSTOMER_TASKS: AGENCYZOOM_GET_THE_CUSTOMER_TASKS_OUTPUT
  GET_THE_DRIVER_DETAILS: AGENCYZOOM_GET_THE_DRIVER_DETAILS_OUTPUT
  GET_THE_LEAD_DETAILS: AGENCYZOOM_GET_THE_LEAD_DETAILS_OUTPUT
  GET_THE_OPPORTUNITIES_FOR_A_LEAD: AGENCYZOOM_GET_THE_OPPORTUNITIES_FOR_A_LEAD_OUTPUT
  GET_THE_OPPORTUNITY_DETAILS: AGENCYZOOM_GET_THE_OPPORTUNITY_DETAILS_OUTPUT
  GET_THE_TASK_DETAILS: AGENCYZOOM_GET_THE_TASK_DETAILS_OUTPUT
  GET_THE_VEHICLE_DETAILS: AGENCYZOOM_GET_THE_VEHICLE_DETAILS_OUTPUT
  GET_THREAD_DETAILS: AGENCYZOOM_GET_THREAD_DETAILS_OUTPUT
  LINK_A_DRIVER_TO_OPPORTUNITY: AGENCYZOOM_LINK_A_DRIVER_TO_OPPORTUNITY_OUTPUT
  LINK_A_VEHICLE_TO_OPPORTUNITY: AGENCYZOOM_LINK_A_VEHICLE_TO_OPPORTUNITY_OUTPUT
  LIST_PRODUCT_CATEGORIES: AGENCYZOOM_LIST_PRODUCT_CATEGORIES_OUTPUT
  LOG_THE_USER_IN: AGENCYZOOM_LOG_THE_USER_IN_OUTPUT
  LOG_THE_USER_OUT: AGENCYZOOM_LOG_THE_USER_OUT_OUTPUT
  MARK_THREAD_AS_UNREAD_API_ENDPOINT: AGENCYZOOM_MARK_THREAD_AS_UNREAD_API_ENDPOINT_OUTPUT
  MOVE_LEAD_TO_SOLD: AGENCYZOOM_MOVE_LEAD_TO_SOLD_OUTPUT
  REMOVE_TEXT_THREAD_ENDPOINT: AGENCYZOOM_REMOVE_TEXT_THREAD_ENDPOINT_OUTPUT
  REOPEN_A_TASK: AGENCYZOOM_REOPEN_A_TASK_OUTPUT
  SEARCH_BUSINESS_CLASSIFICATIONS: AGENCYZOOM_SEARCH_BUSINESS_CLASSIFICATIONS_OUTPUT
  SEARCH_CUSTOMERS: AGENCYZOOM_SEARCH_CUSTOMERS_OUTPUT
  SEARCH_EMAIL_THREADS: AGENCYZOOM_SEARCH_EMAIL_THREADS_OUTPUT
  SEARCH_LEADS: AGENCYZOOM_SEARCH_LEADS_OUTPUT
  SEARCH_LEADS_COUNT: AGENCYZOOM_SEARCH_LEADS_COUNT_OUTPUT
  SEARCH_LIFE_AND_HEALTH_LEADS: AGENCYZOOM_SEARCH_LIFE_AND_HEALTH_LEADS_OUTPUT
  SEARCH_SMS_THREADS: AGENCYZOOM_SEARCH_SMS_THREADS_OUTPUT
  SEARCH_TASKS: AGENCYZOOM_SEARCH_TASKS_OUTPUT
  SERVICE_TICKET_LIST: AGENCYZOOM_SERVICE_TICKET_LIST_OUTPUT
  TEXT_DETAIL_THREAD: AGENCYZOOM_TEXT_DETAIL_THREAD_OUTPUT
  UNLINK_A_DRIVER_FROM_OPPORTUNITY: AGENCYZOOM_UNLINK_A_DRIVER_FROM_OPPORTUNITY_OUTPUT
  UNLINK_A_VEHICLE_FROM_OPPORTUNITY: AGENCYZOOM_UNLINK_A_VEHICLE_FROM_OPPORTUNITY_OUTPUT
  UNREAD_THREAD: AGENCYZOOM_UNREAD_THREAD_OUTPUT
  UPDATE_AN_OPPORTUNITY: AGENCYZOOM_UPDATE_AN_OPPORTUNITY_OUTPUT
  UPDATE_A_DRIVER_S_DETAILS: AGENCYZOOM_UPDATE_A_DRIVER_S_DETAILS_OUTPUT
  UPDATE_A_LEAD_FILE_NAME: AGENCYZOOM_UPDATE_A_LEAD_FILE_NAME_OUTPUT
  UPDATE_A_LEAD_OPPORTUNITY: AGENCYZOOM_UPDATE_A_LEAD_OPPORTUNITY_OUTPUT
  UPDATE_A_LEAD_QUOTE: AGENCYZOOM_UPDATE_A_LEAD_QUOTE_OUTPUT
  UPDATE_A_POLICY: AGENCYZOOM_UPDATE_A_POLICY_OUTPUT
  UPDATE_A_VEHICLE_S_DETAILS: AGENCYZOOM_UPDATE_A_VEHICLE_S_DETAILS_OUTPUT
  UPDATE_BUSINESS_LEAD: AGENCYZOOM_UPDATE_BUSINESS_LEAD_OUTPUT
  UPDATE_CUSTOMER: AGENCYZOOM_UPDATE_CUSTOMER_OUTPUT
  UPDATE_LEAD: AGENCYZOOM_UPDATE_LEAD_OUTPUT
  UPDATE_LEAD_STATUS_BY_ID: AGENCYZOOM_UPDATE_LEAD_STATUS_BY_ID_OUTPUT
  UPDATE_MY_PROFILE: AGENCYZOOM_UPDATE_MY_PROFILE_OUTPUT
  UPDATE_TAGS_FOR_A_POLICY: AGENCYZOOM_UPDATE_TAGS_FOR_A_POLICY_OUTPUT
  UPDATE_TASK: AGENCYZOOM_UPDATE_TASK_OUTPUT
  V4_SSO_LOG_THE_USER_IN: AGENCYZOOM_V4_SSO_LOG_THE_USER_IN_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's AGENCYZOOM toolkit.
 */
export const AGENCYZOOM = {
  slug: "agencyzoom",
  tools: {
    /**
     * Authenticates a user via v4 single sign-on (sso) using the provided callback `code` (typically required for success) to retrieve a jwt and initial user session information.
     */
    AUTHENTICATE_FOR_JWTVIA_V4_SSO: "AGENCYZOOM_AUTHENTICATE_FOR_JWTVIA_V4_SSO",
    /**
     * Creates 1 to 5 new contacts in agencyzoom in a single batch api call.
     */
    BATCH_CREATE_CONTACT: "AGENCYZOOM_BATCH_CREATE_CONTACT",
    /**
     * Creates up to 5 new leads in agencyzoom; all referenced entity ids (e.g., pipeline, user, custom field names) must exist, and organization `name` is required if `isbusiness` is true.
     */
    BATCH_CREATE_LEAD: "AGENCYZOOM_BATCH_CREATE_LEAD",
    /**
     * Deletes multiple agencyzoom tasks in a batch; task deletion is permanent and the response indicates overall batch success, not individual task status.
     */
    BATCH_DELETE_TASK: "AGENCYZOOM_BATCH_DELETE_TASK",
    /**
     * Updates a lead's lifecycle status (e.g., active, won, lost, x-dated) and can optionally manage its workflow, pipeline, stage, source, or associated tags.
     */
    CHANGE_STATUS_FOR_LEAD: "AGENCYZOOM_CHANGE_STATUS_FOR_LEAD",
    /**
     * Marks an existing and accessible task in agencyzoom as 'completed'; this action does not return the full updated task object.
     */
    COMPLETE_TASK: "AGENCYZOOM_COMPLETE_TASK",
    /**
     * Creates a new lead opportunity in agencyzoom; this action cannot update existing opportunities.
     */
    CREATE_AN_OPPORTUNITY: "AGENCYZOOM_CREATE_AN_OPPORTUNITY",
    /**
     * Adds a new note to an existing customer's profile using their id; cannot be used to edit or retrieve existing notes.
     */
    CREATE_A_CUSTOMER_NOTE: "AGENCYZOOM_CREATE_A_CUSTOMER_NOTE",
    /**
     * Creates a new driver record associated with an existing agencyzoom opportunity using its id; full driver details are handled by the api endpoint directly, not specified in this action's request.
     */
    CREATE_A_DRIVER_FOR_AN_OPPORTUNITY: "AGENCYZOOM_CREATE_A_DRIVER_FOR_AN_OPPORTUNITY",
    /**
     * Adds a new note to an existing lead in agencyzoom, identified by `leadid`.
     */
    CREATE_A_LEAD_NOTE: "AGENCYZOOM_CREATE_A_LEAD_NOTE",
    /**
     * Adds a new sales opportunity to an existing lead in agencyzoom, requiring a valid `leadid`, `carrierid`, `productlineid`, and that custom field names match existing definitions in agencyzoom.
     */
    CREATE_A_LEAD_OPPORTUNITY: "AGENCYZOOM_CREATE_A_LEAD_OPPORTUNITY",
    /**
     * Creates a new insurance quote for an existing lead in agencyzoom, using valid carrier and product line ids, to track a proposal; this action does not bind policies or process payments.
     */
    CREATE_A_LEAD_QUOTE: "AGENCYZOOM_CREATE_A_LEAD_QUOTE",
    /**
     * Adds a new vehicle record to a specified opportunity; `opportunityid` must refer to a valid, existing opportunity.
     */
    CREATE_A_VEHICLE_FOR_AN_OPPORTUNITY: "AGENCYZOOM_CREATE_A_VEHICLE_FOR_AN_OPPORTUNITY",
    /**
     * Creates or updates a business lead in agencyzoom using detailed personal and company information, for b2b sales and marketing lead management.
     */
    CREATE_BIZ_LEAD: "AGENCYZOOM_CREATE_BIZ_LEAD",
    /**
     * Creates a new lead or updates an existing one in agencyzoom; ensure `pipelineid`, `stageid`, `leadsourceid`, and `assignto` reference valid, existing entities.
     */
    CREATE_LEAD: "AGENCYZOOM_CREATE_LEAD",
    /**
     * Creates a new task in agencyzoom; ensure `assigneeid`, `customerid`, or `leadid` are valid existing entities if provided, and use `contactemail`, `customerid`, or `leadid` to link the task to a contact.
     */
    CREATE_TASK: "AGENCYZOOM_CREATE_TASK",
    /**
     * Permanently deletes a specific opportunity by its unique id; this action is irreversible and requires a valid, existing `opportunityid`.
     */
    DELETE_AN_OPPORTUNITY: "AGENCYZOOM_DELETE_AN_OPPORTUNITY",
    /**
     * Irreversibly deletes a customer and all associated data in agencyzoom using their `customerid`; useful for offboarding or data privacy compliance.
     */
    DELETE_A_CUSTOMER: "AGENCYZOOM_DELETE_A_CUSTOMER",
    /**
     * Permanently deletes a specific file, identified by `fileid`, associated with a customer, identified by `customerid`.
     */
    DELETE_A_CUSTOMER_FILE: "AGENCYZOOM_DELETE_A_CUSTOMER_FILE",
    /**
     * Permanently deletes a specific policy associated with a customer, for instance, if it's cancelled or inactive; this action is irreversible and requires caution.
     */
    DELETE_A_CUSTOMER_POLICY: "AGENCYZOOM_DELETE_A_CUSTOMER_POLICY",
    /**
     * Permanently deletes an existing agencyzoom driver (e.g., lead, potential sale, or business engagement) using its valid `driverid`; this action is irreversible.
     */
    DELETE_A_DRIVER: "AGENCYZOOM_DELETE_A_DRIVER",
    /**
     * Deletes a specific file (identified by `fileid`) associated with an existing lead (identified by `leadid`); this operation is irreversible.
     */
    DELETE_A_LEAD_FILE: "AGENCYZOOM_DELETE_A_LEAD_FILE",
    /**
     * Permanently deletes an existing opportunity (by `opportunityid`) associated with an existing lead (by `leadid`) when it's irrelevant, closed, or erroneous; the lead itself remains.
     */
    DELETE_A_LEAD_OPPORTUNITY: "AGENCYZOOM_DELETE_A_LEAD_OPPORTUNITY",
    /**
     * Deletes a specific quote from a lead, requiring that the lead and quote exist and are associated.
     */
    DELETE_A_LEAD_QUOTE: "AGENCYZOOM_DELETE_A_LEAD_QUOTE",
    /**
     * Permanently and irreversibly deletes an existing task, identified by its `taskid`.
     */
    DELETE_A_TASK: "AGENCYZOOM_DELETE_A_TASK",
    /**
     * Permanently deletes a vehicle record by its `vehicleid`, which must correspond to an existing vehicle in the agencyzoom system.
     */
    DELETE_A_VEHICLE: "AGENCYZOOM_DELETE_A_VEHICLE",
    /**
     * Deletes a specific message from an email thread within agencyzoom, where the message id is implicitly handled (e.g., via url path or session) as the request schema is empty.
     */
    DELETE_MESSAGE: "AGENCYZOOM_DELETE_MESSAGE",
    /**
     * Permanently deletes a specific email thread from the agencyzoom system, identified by its `threadid` (expected by the endpoint), provided the thread exists.
     */
    DELETE_THREAD: "AGENCYZOOM_DELETE_THREAD",
    /**
     * Retrieves a customer's synchronized agency management system (ams) policy data (typically a single policy); requires an active ams integration, may return empty/default values if data is missing.
     */
    GET_AMS_POLICIES_FOR_A_CUSTOMER: "AGENCYZOOM_GET_AMS_POLICIES_FOR_A_CUSTOMER",
    /**
     * Retrieves a fresh authentication url for agencyzoom's v4 single sign-on (sso) process; call before each sso attempt as the url may change and should not be cached.
     */
    GET_AUTH_URL_FOR_V4_SSO: "AGENCYZOOM_GET_AUTH_URL_FOR_V4_SSO",
    /**
     * Retrieves all assign groups configured in agencyzoom, used for categorizing or assigning items to specific teams or units.
     */
    GET_A_LIST_OF_ASSIGN_GROUPS: "AGENCYZOOM_GET_A_LIST_OF_ASSIGN_GROUPS",
    /**
     * Retrieves all insurance carriers from agencyzoom, typically used for populating selection lists or synchronizing carrier data; does not return detailed policy or coverage information.
     */
    GET_A_LIST_OF_CARRIERS: "AGENCYZOOM_GET_A_LIST_OF_CARRIERS",
    /**
     * Fetches all customer service representatives (csrs), including their id and name, returning an empty list if none are configured.
     */
    GET_A_LIST_OF_CSRS: "AGENCYZOOM_GET_A_LIST_OF_CSRS",
    /**
     * Retrieves metadata for all configured custom field definitions, not the specific values entered for individual records.
     */
    GET_A_LIST_OF_CUSTOM_FIELDS: "AGENCYZOOM_GET_A_LIST_OF_CUSTOM_FIELDS",
    /**
     * Retrieves a list of drivers (individuals), including their personal details, licensing information, and relationship status, associated with a specific, existing `opportunityid` in agencyzoom.
     */
    GET_A_LIST_OF_DRIVERS_FOR_AN_OPPORTUNITY: "AGENCYZOOM_GET_A_LIST_OF_DRIVERS_FOR_AN_OPPORTUNITY",
    /**
     * Retrieves a complete list of all employees for the authenticated agency; returns an empty list if no employees are configured.
     */
    GET_A_LIST_OF_EMPLOYEES: "AGENCYZOOM_GET_A_LIST_OF_EMPLOYEES",
    /**
     * Fetches a list of all lead sources configured in agencyzoom, including their id, name, sales exclusion status, and category id.
     */
    GET_A_LIST_OF_LEAD_SOURCES: "AGENCYZOOM_GET_A_LIST_OF_LEAD_SOURCES",
    /**
     * Retrieves a comprehensive list of all predefined lead source categories from agencyzoom, used to classify lead origins.
     */
    GET_A_LIST_OF_LEAD_SOURCE_CATEGORIES: "AGENCYZOOM_GET_A_LIST_OF_LEAD_SOURCE_CATEGORIES",
    /**
     * Retrieves a list of life insurance professionals, including only their contact and status information (excluding sales or customer data), from the agencyzoom platform.
     */
    GET_A_LIST_OF_LIFE_PROFESSIONALS: "AGENCYZOOM_GET_A_LIST_OF_LIFE_PROFESSIONALS",
    /**
     * Retrieves all agency locations or branches from agencyzoom; filtering options are not available.
     */
    GET_A_LIST_OF_LOCATIONS: "AGENCYZOOM_GET_A_LIST_OF_LOCATIONS",
    /**
     * Retrieves a list of all predefined loss reasons from agencyzoom, used for populating ui elements or analysis, returning all reasons without filtering or statistical data.
     */
    GET_A_LIST_OF_LOSS_REASONS: "AGENCYZOOM_GET_A_LIST_OF_LOSS_REASONS",
    /**
     * Retrieves all pipelines and their stages from agencyzoom to understand workflow structures; this is a read-only operation and does not return individual items (like leads or tasks) within these pipelines.
     */
    GET_A_LIST_OF_PIPELINES: "AGENCYZOOM_GET_A_LIST_OF_PIPELINES",
    /**
     * Retrieves a list of all producers from agencyzoom, typically related to text thread functionalities.
     */
    GET_A_LIST_OF_PRODUCER: "AGENCYZOOM_GET_A_LIST_OF_PRODUCER",
    /**
     * Fetches all product lines and policy types from agencyzoom, each detailed with its id, name, and product category id.
     */
    GET_A_LIST_OF_PRODUCT_LINES_POLICY_TYPES: "AGENCYZOOM_GET_A_LIST_OF_PRODUCT_LINES_POLICY_TYPES",
    /**
     * Retrieves the history of recycling activities (e.g., reassignments, status changes, x-date updates) for a specified existing lead in agencyzoom.
     */
    GET_A_LIST_OF_RECYCLE_EVENTS: "AGENCYZOOM_GET_A_LIST_OF_RECYCLE_EVENTS",
    /**
     * Retrieves all vehicles associated with an existing opportunity, using its unique opportunityid.
     */
    GET_A_LIST_OF_VEHICLES_FOR_AN_OPPORTUNITY: "AGENCYZOOM_GET_A_LIST_OF_VEHICLES_FOR_AN_OPPORTUNITY",
    /**
     * Fetches department and group information for an agency, optionally filtered by a specific `agencynumber`, to analyze its organizational structure.
     */
    GET_DEPARTMENTS_GROUPS: "AGENCYZOOM_GET_DEPARTMENTS_GROUPS",
    /**
     * Retrieves metadata for files linked to leads; sends an empty post request, which typically fetches a default set of files (not full lead details) for existing leads with documents.
     */
    GET_LEAD_FILES: "AGENCYZOOM_GET_LEAD_FILES",
    /**
     * Fetches the complete history of notes for a specific lead by `leadid` (which must exist), useful for reviewing context for communications or follow-ups; this is a read-only operation.
     */
    GET_LEAD_NOTES: "AGENCYZOOM_GET_LEAD_NOTES",
    /**
     * Retrieves all insurance quotes (active and inactive) for a specific lead id, useful for reviewing or tracking quote history.
     */
    GET_LEAD_QUOTES: "AGENCYZOOM_GET_LEAD_QUOTES",
    /**
     * Retrieves all tasks for a specific lead, identified by its `leadid`, to review its activity history or manage follow-ups.
     */
    GET_LEAD_TASKS: "AGENCYZOOM_GET_LEAD_TASKS",
    /**
     * Fetches a list of all defined end stages, representing final steps in processes like lead conversion or policy closure.
     */
    GET_LIST_OF_END_STAGES: "AGENCYZOOM_GET_LIST_OF_END_STAGES",
    /**
     * Retrieves from agencyzoom details for an insurance policy of an existing customer (identified by `customerid`), excluding premium payment history or claims information.
     */
    GET_POLICIES_FOR_A_CUSTOMER: "AGENCYZOOM_GET_POLICIES_FOR_A_CUSTOMER",
    /**
     * Fetches comprehensive details for a specific customer, including personal information, policies, notes, tasks, files, and custom fields, using their unique customer id.
     */
    GET_THE_CUSTOMER_DETAILS: "AGENCYZOOM_GET_THE_CUSTOMER_DETAILS",
    /**
     * Fetches all tasks (read-only task data) for a customer by `customerid` to review their activities, follow-ups, and action items; the `customerid` must be valid.
     */
    GET_THE_CUSTOMER_TASKS: "AGENCYZOOM_GET_THE_CUSTOMER_TASKS",
    /**
     * Retrieves detailed information for a specific, existing driver (by `driverid`) associated with an agencyzoom opportunity.
     */
    GET_THE_DRIVER_DETAILS: "AGENCYZOOM_GET_THE_DRIVER_DETAILS",
    /**
     * Retrieves comprehensive details for a specific lead in agencyzoom by its unique `leadid` (which must correspond to an existing lead), including contact information, status, associated opportunities, quotes/policies, custom fields, and interaction history.
     */
    GET_THE_LEAD_DETAILS: "AGENCYZOOM_GET_THE_LEAD_DETAILS",
    /**
     * Retrieves all sales opportunities and their details for a specified, existing `leadid` in agencyzoom.
     */
    GET_THE_OPPORTUNITIES_FOR_A_LEAD: "AGENCYZOOM_GET_THE_OPPORTUNITIES_FOR_A_LEAD",
    /**
     * Fetches comprehensive details for an existing opportunity using its unique `opportunityid`.
     */
    GET_THE_OPPORTUNITY_DETAILS: "AGENCYZOOM_GET_THE_OPPORTUNITY_DETAILS",
    /**
     * Retrieves comprehensive details for a specific task using its unique `taskid`, which must correspond to an existing task in agencyzoom.
     */
    GET_THE_TASK_DETAILS: "AGENCYZOOM_GET_THE_TASK_DETAILS",
    /**
     * Retrieves detailed information for a specific vehicle, often associated with an agencyzoom opportunity, using its unique vehicleid.
     */
    GET_THE_VEHICLE_DETAILS: "AGENCYZOOM_GET_THE_VEHICLE_DETAILS",
    /**
     * Searches and retrieves detailed information for email threads in agencyzoom; no explicit search criteria are passed in this request.
     */
    GET_THREAD_DETAILS: "AGENCYZOOM_GET_THREAD_DETAILS",
    /**
     * Assigns or reassigns an existing driver to an existing opportunity.
     */
    LINK_A_DRIVER_TO_OPPORTUNITY: "AGENCYZOOM_LINK_A_DRIVER_TO_OPPORTUNITY",
    /**
     * Links an existing vehicle to an existing sales opportunity in agencyzoom using their respective ids, typically for managing auto insurance policies or related services.
     */
    LINK_A_VEHICLE_TO_OPPORTUNITY: "AGENCYZOOM_LINK_A_VEHICLE_TO_OPPORTUNITY",
    /**
     * Retrieves a complete, unfiltered list of all product categories (id and name) from agencyzoom, useful for understanding product organization or populating ui elements.
     */
    LIST_PRODUCT_CATEGORIES: "AGENCYZOOM_LIST_PRODUCT_CATEGORIES",
    /**
     * Authenticates an existing agencyzoom user using their email (as username) and password to obtain a jwt for api access; this action does not support new user creation.
     */
    LOG_THE_USER_IN: "AGENCYZOOM_LOG_THE_USER_IN",
    /**
     * Use this action to log the current user out of agencyzoom by invalidating their active session token.
     */
    LOG_THE_USER_OUT: "AGENCYZOOM_LOG_THE_USER_OUT",
    /**
     * Marks a text thread in agencyzoom as read or unread using its `threadid`; this action does not modify message content and the specified `threadid` must refer to an existing thread.
     */
    MARK_THREAD_AS_UNREAD_API_ENDPOINT: "AGENCYZOOM_MARK_THREAD_AS_UNREAD_API_ENDPOINT",
    /**
     * Marks an existing lead as sold by its `leadid` and records product details; `productlineid`, `premium`, `effectivedate`, and `solddate` are operationally required for each sold product, despite schema flexibility.
     */
    MOVE_LEAD_TO_SOLD: "AGENCYZOOM_MOVE_LEAD_TO_SOLD",
    /**
     * Call this action to permanently delete a text thread in agencyzoom; the target thread is identified by the api via implicit context as this action accepts no parameters.
     */
    REMOVE_TEXT_THREAD_ENDPOINT: "AGENCYZOOM_REMOVE_TEXT_THREAD_ENDPOINT",
    /**
     * Reopens an existing agencyzoom task that is currently 'completed' or 'closed', allowing it to be reactivated with optional comments.
     */
    REOPEN_A_TASK: "AGENCYZOOM_REOPEN_A_TASK",
    /**
     * Retrieves a comprehensive list of all available business classifications from agencyzoom, each including an id, code, and description.
     */
    SEARCH_BUSINESS_CLASSIFICATIONS: "AGENCYZOOM_SEARCH_BUSINESS_CLASSIFICATIONS",
    /**
     * Searches for customers in agencyzoom using criteria like contact information, policy details, or custom fields, with options for filtering, sorting, and pagination.
     */
    SEARCH_CUSTOMERS: "AGENCYZOOM_SEARCH_CUSTOMERS",
    /**
     * Retrieves a list of email thread metadata from agencyzoom, suitable for an overview when no specific filtering, sorting, or pagination is needed, as results are subject to default server-side limits and ordering.
     */
    SEARCH_EMAIL_THREADS: "AGENCYZOOM_SEARCH_EMAIL_THREADS",
    /**
     * Retrieves agencyzoom leads, using filters, pagination, and sorting options sent in the post body, as the request schema itself is empty.
     */
    SEARCH_LEADS: "AGENCYZOOM_SEARCH_LEADS",
    /**
     * Retrieves a summary of lead counts categorized by workflow stage from agencyzoom; this action does not support filtering and returns aggregate counts rather than individual lead details.
     */
    SEARCH_LEADS_COUNT: "AGENCYZOOM_SEARCH_LEADS_COUNT",
    /**
     * Searches for life and health insurance leads by providing filter criteria (matching alrlead fields) in the request body; an empty request may retrieve all leads or a default set.
     */
    SEARCH_LIFE_AND_HEALTH_LEADS: "AGENCYZOOM_SEARCH_LIFE_AND_HEALTH_LEADS",
    /**
     * Searches and retrieves sms threads from agencyzoom, with search parameters, filters, sorting, and pagination typically provided in the request body of this post operation.
     */
    SEARCH_SMS_THREADS: "AGENCYZOOM_SEARCH_SMS_THREADS",
    /**
     * Searches and lists tasks, supporting pagination and accepting filter criteria in the post request body despite an empty request schema.
     */
    SEARCH_TASKS: "AGENCYZOOM_SEARCH_TASKS",
    /**
     * Retrieves a list of service tickets from agencyzoom, optionally filtered by criteria such as status, priority, or date ranges.
     */
    SERVICE_TICKET_LIST: "AGENCYZOOM_SERVICE_TICKET_LIST",
    /**
     * Retrieves detailed messages for an implicitly specified text thread.
     */
    TEXT_DETAIL_THREAD: "AGENCYZOOM_TEXT_DETAIL_THREAD",
    /**
     * Unlinks a currently associated driver from an agencyzoom opportunity, used when the driver is no longer relevant, for policy or data updates, potentially impacting the opportunity's status or associated policy details.
     */
    UNLINK_A_DRIVER_FROM_OPPORTUNITY: "AGENCYZOOM_UNLINK_A_DRIVER_FROM_OPPORTUNITY",
    /**
     * Unlinks a specific, existing vehicle from a specific, existing opportunity using their respective ids, removing only the association and not the records themselves.
     */
    UNLINK_A_VEHICLE_FROM_OPPORTUNITY: "AGENCYZOOM_UNLINK_A_VEHICLE_FROM_OPPORTUNITY",
    /**
     * Updates the read or unread status of a specific email thread within agencyzoom.
     */
    UNREAD_THREAD: "AGENCYZOOM_UNREAD_THREAD",
    /**
     * Updates an existing opportunity with the provided details; ensure any custom field names are predefined in agencyzoom configuration.
     */
    UPDATE_AN_OPPORTUNITY: "AGENCYZOOM_UPDATE_AN_OPPORTUNITY",
    /**
     * Updates an existing driver's details in agencyzoom, requiring `driverid` in the path and `firstname` and `lastname` in the request.
     */
    UPDATE_A_DRIVER_S_DETAILS: "AGENCYZOOM_UPDATE_A_DRIVER_S_DETAILS",
    /**
     * Updates a lead's file name to `newfilename`; requires `fileid` of the target file, which must be associated with both the `leadid` (path parameter) and the provided `customerreferralid`.
     */
    UPDATE_A_LEAD_FILE_NAME: "AGENCYZOOM_UPDATE_A_LEAD_FILE_NAME",
    /**
     * Updates an existing opportunity's details (carrier, product line, premium, items, custom fields) for a specific lead; `leadid`, opportunity `id`, `carrierid`, and `productlineid` must refer to existing entities.
     */
    UPDATE_A_LEAD_OPPORTUNITY: "AGENCYZOOM_UPDATE_A_LEAD_OPPORTUNITY",
    /**
     * Updates an existing quote for a specified lead in agencyzoom when its details require revision, ensuring the provided `leadid` (path parameter), quote `id` (body parameter), `carrierid`, and `productlineid` are valid and correspond to existing entities.
     */
    UPDATE_A_LEAD_QUOTE: "AGENCYZOOM_UPDATE_A_LEAD_QUOTE",
    /**
     * Updates an existing insurance policy for the given `policyid`; monetary values must be in cents and dates in yyyy-mm-dd format.
     */
    UPDATE_A_POLICY: "AGENCYZOOM_UPDATE_A_POLICY",
    /**
     * Updates details for an existing vehicle within an opportunity; this action cannot be used to create new vehicle records.
     */
    UPDATE_A_VEHICLE_S_DETAILS: "AGENCYZOOM_UPDATE_A_VEHICLE_S_DETAILS",
    /**
     * Updates an existing business lead, identified by `leadid` (which must be valid and existing), using data provided in the request body not defined in this schema.
     */
    UPDATE_BUSINESS_LEAD: "AGENCYZOOM_UPDATE_BUSINESS_LEAD",
    /**
     * Updates an existing customer's information in agencyzoom using their unique customerid.
     */
    UPDATE_CUSTOMER: "AGENCYZOOM_UPDATE_CUSTOMER",
    /**
     * Updates an existing lead's information in agencyzoom using the `leadid`; ensure the `leadid` corresponds to an existing lead in agencyzoom.
     */
    UPDATE_LEAD: "AGENCYZOOM_UPDATE_LEAD",
    /**
     * Updates a lead's status (0=active, 2=won, 3=lost, 5=xdated) by `leadid`, optionally setting workflow, stage, date, loss reason, x-date type, source, recycle stage/pipeline, or tags; requires `date` and `xdatetype` for status 5 (xdated), and `lossreasonid` for status 3 (lost).
     */
    UPDATE_LEAD_STATUS_BY_ID: "AGENCYZOOM_UPDATE_LEAD_STATUS_BY_ID",
    /**
     * Updates the profile information (first name, last name, email, and optional phone) for the currently authenticated user in agencyzoom; the provided email address must be unique within the system.
     */
    UPDATE_MY_PROFILE: "AGENCYZOOM_UPDATE_MY_PROFILE",
    /**
     * Adds new comma-separated `tagnames` to a policy, requiring `tagnames` and identification by either `policyid` or `amspolicyid`; if `amspolicyid` is provided, `policyid` is ignored, and existing tags are not affected.
     */
    UPDATE_TAGS_FOR_A_POLICY: "AGENCYZOOM_UPDATE_TAGS_FOR_A_POLICY",
    /**
     * Modifies an existing agencyzoom task (which must be valid and identified by `taskid` in the path) with new attributes from the request body, which must also contain `taskid`.
     */
    UPDATE_TASK: "AGENCYZOOM_UPDATE_TASK",
    /**
     * Logs a user into the agencyzoom platform via single sign-on (sso).
     */
    V4_SSO_LOG_THE_USER_IN: "AGENCYZOOM_V4_SSO_LOG_THE_USER_IN",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "AGENCYZOOM".
 */
export type AGENCYZOOM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "AGENCYZOOM".
 */
export type AGENCYZOOM_TRIGGER_EVENTS = {}
