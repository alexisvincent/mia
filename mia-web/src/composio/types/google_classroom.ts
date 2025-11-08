// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_CLASSROOMS_COURSE_WORK_MATERIALS_LIST tool input.
 */
type GOOGLE_CLASSROOM_CLASSROOMS_COURSE_WORK_MATERIALS_LIST_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course whose courseWorkMaterials should be returned.
   */
  courseId?: string;
  /**
   * Order By
   * @description Requested sorting order. Supported values: 'updateTime asc', 'updateTime desc'.
   * @default null
   * @enum {string|null}
   */
  orderBy: "updateTime asc" | "updateTime desc" | null;
  /**
   * Page Size
   * @description Maximum number of items to return. Must be between 1 and 100. Defaults to 30.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description Token identifying which page of results to return.
   * @default null
   */
  pageToken: string | null;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_CLASSROOMS_COURSE_WORK_MATERIALS_LIST tool output.
 */
type GOOGLE_CLASSROOM_CLASSROOMS_COURSE_WORK_MATERIALS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Course Work Material
       * @description List of courseWorkMaterial items returned.
       * @default null
       */
      courseWorkMaterial: {
          /**
           * Alternate Link
           * @description URL link to open the courseWorkMaterial.
           * @default null
           */
          alternateLink: string | null;
          /**
           * Creation Time
           * @description Creation time in RFC3339 UTC format.
           * @default null
           */
          creationTime: string | null;
          /**
           * Description
           * @description Description of the courseWorkMaterial.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Identifier for the courseWorkMaterial.
           * @default null
           */
          id: string | null;
          /**
           * Materials
           * @description Materials attached to the courseWorkMaterial.
           * @default null
           */
          materials: {
              /**
               * CourseWorkMaterialDriveFile
               * @description Drive file attached to the material.
               * @default null
               */
              driveFile: {
                  /**
                   * DriveFileInfo
                   * @description Drive file information.
                   * @default null
                   */
                  driveFile: {
                      /**
                       * Alternate Link
                       * @description URL link to open the Drive file.
                       * @default null
                       */
                      alternateLink: string | null;
                      /**
                       * Id
                       * @description ID of the Drive file.
                       * @default null
                       */
                      id: string | null;
                      /**
                       * Title
                       * @description Title of the Drive file.
                       * @default null
                       */
                      title: string | null;
                  } | null;
                  /**
                   * Share Mode
                   * @description Permission mode for the Drive file. e.g., 'VIEW' or 'EDIT'.
                   * @default null
                   */
                  shareMode: string | null;
              } | null;
              /**
               * Form
               * @description Form attached to the material.
               * @default null
               */
              form: {
                  /**
                   * Form Url
                   * @description URL of the form.
                   * @default null
                   */
                  formUrl: string | null;
                  /**
                   * Title
                   * @description Title of the form.
                   * @default null
                   */
                  title: string | null;
              } | null;
              /**
               * Link
               * @description Link attached to the material.
               * @default null
               */
              link: {
                  /**
                   * Title
                   * @description Title of the link.
                   * @default null
                   */
                  title: string | null;
                  /**
                   * Url
                   * @description URL of the link.
                   * @default null
                   */
                  url: string | null;
              } | null;
              /**
               * YouTubeVideo
               * @description YouTube video attached to the material.
               * @default null
               */
              youtubeVideo: {
                  /**
                   * Alternate Link
                   * @description URL link to open the video.
                   * @default null
                   */
                  alternateLink: string | null;
                  /**
                   * Id
                   * @description ID of the YouTube video.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Thumbnail Url
                   * @description Thumbnail URL for the video.
                   * @default null
                   */
                  thumbnailUrl: string | null;
                  /**
                   * Title
                   * @description Title of the YouTube video.
                   * @default null
                   */
                  title: string | null;
              } | null;
          }[] | null;
          /**
           * State
           * @enum {string|null}
           */
          state: "DRAFT" | "PUBLISHED" | "DELETED" | null;
          /**
           * Title
           * @description Title of the courseWorkMaterial.
           * @default null
           */
          title: string | null;
          /**
           * Topic Id
           * @description Identifier of the topic this material is associated with.
           * @default null
           */
          topicId: string | null;
          /**
           * Update Time
           * @description Last update time in RFC3339 UTC format.
           * @default null
           */
          updateTime: string | null;
      }[] | null;
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results.
       * @default null
       */
      nextPageToken: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_CREATE tool input.
 */
type GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_CREATE_INPUT = {
  /**
   * Assignee Mode
   * @description Mode for assigning the announcement; ALL_STUDENTS or INDIVIDUAL_STUDENTS.
   * @default null
   * @enum {string|null}
   */
  assigneeMode: "ALL_STUDENTS" | "INDIVIDUAL_STUDENTS" | null;
  /**
   * Course Id
   * @description Identifier of the course.
   */
  courseId?: string;
  /**
   * IndividualStudentsOptions
   * @description Options for INDIVIDUAL_STUDENTS assignee mode.
   * @default null
   */
  individualStudentsOptions: {
      /**
       * Student Ids
       * @description List of student IDs who can see the announcement.
       */
      studentIds: string[];
  } | null;
  /**
   * Materials
   * @description List of materials to attach to the announcement.
   * @default null
   */
  materials: {
      /**
       * Drive File
       * @description Drive file resource with keys like 'id', 'title', 'alternateLink'.
       * @default null
       */
      driveFile: {
          [key: string]: string;
      } | null;
      /**
       * Form
       * @description Form resource with keys 'formUrl' and 'formTitle'.
       * @default null
       */
      form: {
          [key: string]: string;
      } | null;
      /**
       * Link
       * @description Link resource with keys 'url' and 'title'.
       * @default null
       */
      link: {
          [key: string]: string;
      } | null;
      /**
       * Youtube Video
       * @description YouTube video resource with keys 'id' and 'title'.
       * @default null
       */
      youtubeVideo: {
          [key: string]: string;
      } | null;
  }[] | null;
  /**
   * Scheduled Time
   * @description RFC3339 timestamp at which to publish the announcement.
   * @default null
   */
  scheduledTime: string | null;
  /**
   * State
   * @description State of the announcement; if omitted defaults to PUBLISHED.
   * @default null
   * @enum {string|null}
   */
  state: "DRAFT" | "PUBLISHED" | "DELETED" | null;
  /**
   * Text
   * @description The text content of the announcement.
   * @default null
   */
  text: string | null;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_CREATE tool output.
 */
type GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alternate Link
       * @description URL to view this announcement in Classroom.
       * @default null
       */
      alternateLink: string | null;
      /**
       * Assignee Mode
       * @enum {string|null}
       */
      assigneeMode: "ALL_STUDENTS" | "INDIVIDUAL_STUDENTS" | null;
      /**
       * Creation Time
       * @description Creation time in RFC3339 UTC format.
       * @default null
       */
      creationTime: string | null;
      /**
       * Creator User Id
       * @description User ID of the announcement creator.
       * @default null
       */
      creatorUserId: string | null;
      /**
       * Id
       * @description Identifier assigned by Classroom for the announcement.
       * @default null
       */
      id: string | null;
      /**
       * IndividualStudentsOptions
       * @description Options for INDIVIDUAL_STUDENTS assignee mode.
       */
      individualStudentsOptions: {
          /**
           * Student Ids
           * @description List of student IDs who can see the announcement.
           */
          studentIds: string[];
      } | null;
      /** Materials */
      materials: {
          /**
           * Drive File
           * @description Drive file resource with keys like 'id', 'title', 'alternateLink'.
           * @default null
           */
          driveFile: {
              [key: string]: string;
          } | null;
          /**
           * Form
           * @description Form resource with keys 'formUrl' and 'formTitle'.
           * @default null
           */
          form: {
              [key: string]: string;
          } | null;
          /**
           * Link
           * @description Link resource with keys 'url' and 'title'.
           * @default null
           */
          link: {
              [key: string]: string;
          } | null;
          /**
           * Youtube Video
           * @description YouTube video resource with keys 'id' and 'title'.
           * @default null
           */
          youtubeVideo: {
              [key: string]: string;
          } | null;
      }[] | null;
      /** Scheduled Time */
      scheduledTime: string | null;
      /**
       * State
       * @enum {string|null}
       */
      state: "DRAFT" | "PUBLISHED" | "DELETED" | null;
      /** Text */
      text: string | null;
      /**
       * Update Time
       * @description Last update time in RFC3339 UTC format.
       * @default null
       */
      updateTime: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_DELETE tool input.
 */
type GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_DELETE_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course.
   */
  courseId?: string;
  /**
   * Id
   * @description Identifier of the announcement to delete.
   */
  id?: string;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_DELETE tool output.
 */
type GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_DELETE_OUTPUT = {
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
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_GET tool input.
 */
type GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_GET_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course. This identifier can be either the Classroom-assigned ID or an alias.
   */
  courseId?: string;
  /**
   * Id
   * @description Identifier of the announcement to retrieve.
   */
  id?: string;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_GET tool output.
 */
type GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Assignee Mode
       * @description Who can see the announcement.
       * @default null
       * @enum {string|null}
       */
      assigneeMode: "ALL_STUDENTS" | "INDIVIDUAL_STUDENTS" | null;
      /**
       * Course Id
       * @description Identifier of the course.
       * @default null
       */
      courseId: string | null;
      /**
       * Creation Time
       * @description Timestamp when the announcement was created (RFC3339 UTC).
       * @default null
       */
      creationTime: string | null;
      /**
       * Creator User Id
       * @description User ID of the announcement creator.
       * @default null
       */
      creatorUserId: string | null;
      /**
       * Id
       * @description Identifier of the announcement.
       * @default null
       */
      id: string | null;
      /**
       * IndividualStudentsOptions
       * @description Details of student IDs when assigneeMode is INDIVIDUAL_STUDENTS.
       * @default null
       */
      individualStudentsOptions: {
          /**
           * Student Ids
           * @description List of student IDs who can see the announcement when assigneeMode is INDIVIDUAL_STUDENTS.
           */
          studentIds: string[];
      } | null;
      /**
       * Materials
       * @description Materials referenced by the announcement.
       * @default null
       */
      materials: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Scheduled Time
       * @description Time the announcement is scheduled to be posted (RFC3339 UTC), if applicable.
       * @default null
       */
      scheduledTime: string | null;
      /**
       * State
       * @description Status of the announcement.
       * @default null
       * @enum {string|null}
       */
      state: "DRAFT" | "PUBLISHED" | "DELETED" | null;
      /**
       * Text
       * @description Announcement content.
       * @default null
       */
      text: string | null;
      /**
       * Update Time
       * @description Last update time of the announcement (RFC3339 UTC).
       * @default null
       */
      updateTime: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_LIST tool input.
 */
type GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_LIST_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course whose announcements should be listed. Can be the Classroom-assigned identifier or an alias.
   */
  courseId?: string;
  /**
   * Order By
   * @description How to sort announcements. Use `updateTime desc` (newest first) or `updateTime asc` (oldest first). Defaults to `updateTime desc`.
   * @default null
   * @enum {string|null}
   */
  orderBy: "updateTime asc" | "updateTime desc" | null;
  /**
   * Page Size
   * @description Maximum number of announcements to return. Must be between 1 and 100. Defaults to 30 if not set.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description Token specifying the next page of results to return. Obtain from a previous list call's `nextPageToken`.
   * @default null
   */
  pageToken: string | null;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_LIST tool output.
 */
type GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Announcements
       * @description List of announcements that match the request.
       * @default null
       */
      announcements: {
          /**
           * Assignee Mode
           * @description Mode for assigning the announcement.
           * @default null
           * @enum {string|null}
           */
          assigneeMode: "ALL_STUDENTS" | "INDIVIDUAL_STUDENTS" | null;
          /**
           * Course Id
           * @description Identifier of the course.
           * @default null
           */
          courseId: string | null;
          /**
           * Creation Time
           * @description Creation time in RFC3339 UTC format.
           * @default null
           */
          creationTime: string | null;
          /**
           * Id
           * @description Identifier assigned by Classroom for the announcement.
           * @default null
           */
          id: string | null;
          /**
           * IndividualStudentsOptions
           * @description Options for INDIVIDUAL_STUDENTS assignee mode.
           * @default null
           */
          individualStudentsOptions: {
              /**
               * Student Ids
               * @description List of student IDs who can see the announcement.
               */
              studentIds: string[];
          } | null;
          /**
           * Materials
           * @description Materials attached to the announcement.
           * @default null
           */
          materials: {
              /**
               * Drive File
               * @description Drive file resource with keys like 'id', 'title', 'alternateLink'.
               * @default null
               */
              driveFile: {
                  [key: string]: string;
              } | null;
              /**
               * Form
               * @description Form resource with keys 'formUrl' and 'formTitle'.
               * @default null
               */
              form: {
                  [key: string]: string;
              } | null;
              /**
               * Link
               * @description Link resource with keys 'url' and 'title'.
               * @default null
               */
              link: {
                  [key: string]: string;
              } | null;
              /**
               * Youtube Video
               * @description YouTube video resource with keys 'id' and 'title'.
               * @default null
               */
              youtubeVideo: {
                  [key: string]: string;
              } | null;
          }[] | null;
          /**
           * Scheduled Time
           * @description Scheduled post time in RFC3339 UTC format.
           * @default null
           */
          scheduledTime: string | null;
          /**
           * State
           * @description State of the announcement.
           * @default null
           * @enum {string|null}
           */
          state: "DRAFT" | "PUBLISHED" | "DELETED" | null;
          /**
           * Text
           * @description Announcement content.
           * @default null
           */
          text: string | null;
          /**
           * Update Time
           * @description Last update time in RFC3339 UTC format.
           * @default null
           */
          updateTime: string | null;
      }[] | null;
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results.
       * @default null
       */
      nextPageToken: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_PATCH tool input.
 */
type GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_PATCH_INPUT = {
  /**
   * Assignee Mode
   * @description Mode for assigning the announcement; ALL_STUDENTS or INDIVIDUAL_STUDENTS.
   * @default null
   * @enum {string|null}
   */
  assigneeMode: "ALL_STUDENTS" | "INDIVIDUAL_STUDENTS" | null;
  /**
   * Course Id
   * @description Identifier of the course.
   */
  courseId?: string;
  /**
   * Id
   * @description Identifier of the announcement to update.
   */
  id?: string;
  /**
   * IndividualStudentsOptions
   * @description Options for INDIVIDUAL_STUDENTS assignee mode.
   * @default null
   */
  individualStudentsOptions: {
      /**
       * Student Ids
       * @description List of student IDs who can see the announcement.
       */
      studentIds: string[];
  } | null;
  /**
   * Materials
   * @description List of materials to attach to the announcement.
   * @default null
   */
  materials: {
      /**
       * Drive File
       * @description Drive file resource with keys like 'id', 'title', 'alternateLink'.
       * @default null
       */
      driveFile: {
          [key: string]: string;
      } | null;
      /**
       * Form
       * @description Form resource with keys 'formUrl' and 'formTitle'.
       * @default null
       */
      form: {
          [key: string]: string;
      } | null;
      /**
       * Link
       * @description Link resource with keys 'url' and 'title'.
       * @default null
       */
      link: {
          [key: string]: string;
      } | null;
      /**
       * Youtube Video
       * @description YouTube video resource with keys 'id' and 'title'.
       * @default null
       */
      youtubeVideo: {
          [key: string]: string;
      } | null;
  }[] | null;
  /**
   * Scheduled Time
   * @description RFC3339 timestamp at which to publish the announcement.
   * @default null
   */
  scheduledTime: string | null;
  /**
   * State
   * @description State of the announcement.
   * @default null
   * @enum {string|null}
   */
  state: "DRAFT" | "PUBLISHED" | "DELETED" | null;
  /**
   * Text
   * @description The text content of the announcement to set.
   * @default null
   */
  text: string | null;
  /**
   * Update Mask
   * @description Comma-separated list of fields to update. E.g., 'text,state'.
   */
  updateMask?: string;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_PATCH tool output.
 */
type GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_PATCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alternate Link
       * @description URL to view this announcement in Classroom.
       * @default null
       */
      alternateLink: string | null;
      /**
       * Assignee Mode
       * @description Mode for assignment.
       * @default null
       * @enum {string|null}
       */
      assigneeMode: "ALL_STUDENTS" | "INDIVIDUAL_STUDENTS" | null;
      /**
       * Course Id
       * @description Identifier of the course.
       * @default null
       */
      courseId: string | null;
      /**
       * Creation Time
       * @description Creation time in RFC3339 UTC format.
       * @default null
       */
      creationTime: string | null;
      /**
       * Creator User Id
       * @description User ID of the announcement creator.
       * @default null
       */
      creatorUserId: string | null;
      /**
       * Id
       * @description Identifier assigned by Classroom for the announcement.
       * @default null
       */
      id: string | null;
      /**
       * IndividualStudentsOptions
       * @description Options for INDIVIDUAL_STUDENTS assignee mode.
       * @default null
       */
      individualStudentsOptions: {
          /**
           * Student Ids
           * @description List of student IDs who can see the announcement.
           */
          studentIds: string[];
      } | null;
      /**
       * Materials
       * @description List of attached materials.
       * @default null
       */
      materials: {
          /**
           * Drive File
           * @description Drive file resource with keys like 'id', 'title', 'alternateLink'.
           * @default null
           */
          driveFile: {
              [key: string]: string;
          } | null;
          /**
           * Form
           * @description Form resource with keys 'formUrl' and 'formTitle'.
           * @default null
           */
          form: {
              [key: string]: string;
          } | null;
          /**
           * Link
           * @description Link resource with keys 'url' and 'title'.
           * @default null
           */
          link: {
              [key: string]: string;
          } | null;
          /**
           * Youtube Video
           * @description YouTube video resource with keys 'id' and 'title'.
           * @default null
           */
          youtubeVideo: {
              [key: string]: string;
          } | null;
      }[] | null;
      /**
       * Scheduled Time
       * @description Scheduled time in RFC3339 format.
       * @default null
       */
      scheduledTime: string | null;
      /**
       * State
       * @description State of the announcement.
       * @default null
       * @enum {string|null}
       */
      state: "DRAFT" | "PUBLISHED" | "DELETED" | null;
      /**
       * Text
       * @description The text content of the announcement.
       * @default null
       */
      text: string | null;
      /**
       * Update Time
       * @description Last update time in RFC3339 UTC format.
       * @default null
       */
      updateTime: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_CREATE tool input.
 */
type GOOGLE_CLASSROOM_COURSES_CREATE_INPUT = {
  /**
   * Course State
   * @description Initial state of the course.
   * @default null
   * @enum {string|null}
   */
  courseState: "COURSE_STATE_UNSPECIFIED" | "ACTIVE" | "ARCHIVED" | "PROVISIONED" | "DECLINED" | "SUSPENDED" | null;
  /**
   * Description
   * @description Detailed description of the course. Max length 30,000 characters.
   * @default null
   */
  description: string | null;
  /**
   * Description Heading
   * @description Heading for the course description. Max length 360 characters.
   * @default null
   */
  descriptionHeading: string | null;
  /**
   * Name
   * @description Name of the course. Max length 750 characters.
   */
  name?: string;
  /**
   * Owner Id
   * @description Identifier of the course owner. Can be the user's numeric ID or email address.
   */
  ownerId?: string;
  /**
   * Room
   * @description Room location for the course. Max length 64 characters.
   * @default null
   */
  room: string | null;
  /**
   * Section
   * @description Section of the course. Max length 2800 characters.
   * @default null
   */
  section: string | null;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_CREATE tool output.
 */
type GOOGLE_CLASSROOM_COURSES_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alternate Link
       * @description URL to view the course in Classroom UI.
       * @default null
       */
      alternateLink: string | null;
      /**
       * Calendar Id
       * @description Calendar ID for the course.
       * @default null
       */
      calendarId: string | null;
      /**
       * Course Group Email
       * @description Email address of the student group for the course.
       * @default null
       */
      courseGroupEmail: string | null;
      /**
       * Course State
       * @description Current state of the course.
       * @default null
       * @enum {string|null}
       */
      courseState: "COURSE_STATE_UNSPECIFIED" | "ACTIVE" | "ARCHIVED" | "PROVISIONED" | "DECLINED" | "SUSPENDED" | null;
      /**
       * Creation Time
       * @description Timestamp when the course was created.
       * @default null
       */
      creationTime: string | null;
      /**
       * Description
       * @description Detailed description of the course.
       * @default null
       */
      description: string | null;
      /**
       * Description Heading
       * @description Heading for the course description.
       * @default null
       */
      descriptionHeading: string | null;
      /**
       * Enrollment Code
       * @description Code for students/teachers to join the course.
       * @default null
       */
      enrollmentCode: string | null;
      /**
       * Guardians Enabled
       * @description Whether guardian notifications are enabled for the course.
       * @default null
       */
      guardiansEnabled: boolean | null;
      /**
       * Id
       * @description Unique identifier for the course.
       * @default null
       */
      id: string | null;
      /**
       * Name
       * @description Name of the course.
       * @default null
       */
      name: string | null;
      /**
       * Owner Id
       * @description Identifier of the course owner.
       * @default null
       */
      ownerId: string | null;
      /**
       * Room
       * @description Room location for the course.
       * @default null
       */
      room: string | null;
      /**
       * Section
       * @description Section of the course.
       * @default null
       */
      section: string | null;
      /**
       * Teacher Group Email
       * @description Email address of the teacher group for the course.
       * @default null
       */
      teacherGroupEmail: string | null;
      /**
       * Update Time
       * @description Timestamp of the last update.
       * @default null
       */
      updateTime: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_DELETE tool input.
 */
type GOOGLE_CLASSROOM_COURSES_DELETE_INPUT = {
  /**
   * Id
   * @description Identifier of the course to delete.
   */
  id?: string;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_DELETE tool output.
 */
type GOOGLE_CLASSROOM_COURSES_DELETE_OUTPUT = {
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
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_GET tool input.
 */
type GOOGLE_CLASSROOM_COURSES_GET_INPUT = {
  /**
   * Id
   * @description Identifier of the course. This identifier can be either the Classroom-assigned ID or an alias.
   */
  id?: string;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_GET tool output.
 */
type GOOGLE_CLASSROOM_COURSES_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alternate Link
       * @description URL that can be used to access the course.
       * @default null
       */
      alternateLink: string | null;
      /**
       * Calendar Id
       * @description Calendar ID for the course.
       * @default null
       */
      calendarId: string | null;
      /**
       * Course Group Email
       * @description Email address of the course group for the course.
       * @default null
       */
      courseGroupEmail: string | null;
      /**
       * Course State
       * @description State of the course.
       * @default null
       * @enum {string|null}
       */
      courseState: "COURSE_STATE_UNSPECIFIED" | "ACTIVE" | "ARCHIVED" | "PROVISIONED" | "DECLINED" | null;
      /**
       * Creation Time
       * @description Timestamp when the course was created (RFC3339 UTC format).
       * @default null
       */
      creationTime: string | null;
      /**
       * Description
       * @description Description of the course.
       * @default null
       */
      description: string | null;
      /**
       * Description Heading
       * @description Description heading of the course.
       * @default null
       */
      descriptionHeading: string | null;
      /**
       * Enrollment Code
       * @description Enrollment code to join the course.
       * @default null
       */
      enrollmentCode: string | null;
      /**
       * Guardian Summaries Email
       * @description Email address for sending guardian summaries, if enabled.
       * @default null
       */
      guardianSummariesEmail: string | null;
      /**
       * Id
       * @description Identifier for the course assigned by Classroom.
       * @default null
       */
      id: string | null;
      /**
       * Name
       * @description Name of the course.
       * @default null
       */
      name: string | null;
      /**
       * Owner Id
       * @description Identifier of the teacher who owns the course.
       * @default null
       */
      ownerId: string | null;
      /**
       * Room
       * @description Room location for the course.
       * @default null
       */
      room: string | null;
      /**
       * Section
       * @description Section of the course.
       * @default null
       */
      section: string | null;
      /**
       * TeacherFolder
       * @description Information about a Teacher Folder associated with the course.
       * @default null
       */
      teacherFolder: {
          /**
           * Alternate Link
           * @description URL to view the teacher folder.
           * @default null
           */
          alternateLink: string | null;
          /**
           * Id
           * @description Identifier of the teacher folder.
           * @default null
           */
          id: string | null;
          /**
           * Title
           * @description Title of the teacher folder.
           * @default null
           */
          title: string | null;
      } | null;
      /**
       * Teacher Group Email
       * @description Email address of the teacher group for the course.
       * @default null
       */
      teacherGroupEmail: string | null;
      /**
       * Update Time
       * @description Timestamp of the last course update (RFC3339 UTC format).
       * @default null
       */
      updateTime: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_LIST tool input.
 */
type GOOGLE_CLASSROOM_COURSES_LIST_INPUT = {
  /**
   * Course States
   * @description Restricts returned courses to those in specified states.
   * @default null
   */
  courseStates: string[] | null;
  /**
   * Page Size
   * @description Maximum number of items to return. Must be ≥1.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description Token identifying the page of results to return.
   * @default null
   */
  pageToken: string | null;
  /**
   * Student Id
   * @description Restricts returned courses to those in which the student is enrolled. Can be the user's numeric ID or 'me'.
   * @default null
   */
  studentId: string | null;
  /**
   * Teacher Id
   * @description Restricts returned courses to those taught by the teacher. Can be the user's numeric ID or 'me'.
   * @default null
   */
  teacherId: string | null;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_LIST tool output.
 */
type GOOGLE_CLASSROOM_COURSES_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Courses
       * @description List of courses that match the request.
       * @default null
       */
      courses: {
          /**
           * Alternate Link
           * @description URL to view the course in Classroom.
           * @default null
           */
          alternateLink: string | null;
          /**
           * Calendar Id
           * @description Primary calendar ID for the course.
           * @default null
           */
          calendarId: string | null;
          /**
           * Course State
           * @description Current state of the course.
           * @default null
           * @enum {string|null}
           */
          courseState: "COURSE_STATE_UNSPECIFIED" | "ACTIVE" | "ARCHIVED" | "PROVISIONED" | "DECLINED" | null;
          /**
           * Creation Time
           * @description Creation time in RFC3339 UTC format.
           * @default null
           */
          creationTime: string | null;
          /**
           * Description
           * @description Optional detailed description of the course.
           * @default null
           */
          description: string | null;
          /**
           * Description Heading
           * @description Heading for the course description.
           * @default null
           */
          descriptionHeading: string | null;
          /**
           * Enrollment Code
           * @description Enrollment code to join the course.
           * @default null
           */
          enrollmentCode: string | null;
          /**
           * Id
           * @description Unique identifier for the course.
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description Name of the course.
           * @default null
           */
          name: string | null;
          /**
           * Owner Id
           * @description User ID of the course owner.
           * @default null
           */
          ownerId: string | null;
          /**
           * Room
           * @description Physical location or room designation.
           * @default null
           */
          room: string | null;
          /**
           * Section
           * @description Section of the course, e.g., 'Period 2'.
           * @default null
           */
          section: string | null;
          /**
           * Student Group Email
           * @description Email address of the student group for the course.
           * @default null
           */
          studentGroupEmail: string | null;
          /**
           * Teacher Group Email
           * @description Email address of the teacher group for the course.
           * @default null
           */
          teacherGroupEmail: string | null;
          /**
           * Update Time
           * @description Last update time in RFC3339 UTC format.
           * @default null
           */
          updateTime: string | null;
      }[] | null;
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results.
       * @default null
       */
      nextPageToken: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_PATCH tool input.
 */
type GOOGLE_CLASSROOM_COURSES_PATCH_INPUT = {
  /**
   * Course State
   * @description New state of the course.
   * @default null
   * @enum {string|null}
   */
  courseState: "COURSE_STATE_UNSPECIFIED" | "ACTIVE" | "ARCHIVED" | "PROVISIONED" | "DECLINED" | null;
  /**
   * Description
   * @description New detailed description of the course.
   * @default null
   */
  description: string | null;
  /**
   * Description Heading
   * @description New heading for the course description.
   * @default null
   */
  descriptionHeading: string | null;
  /**
   * Id
   * @description Identifier of the course to update.
   */
  id?: string;
  /**
   * Name
   * @description New name of the course.
   * @default null
   */
  name: string | null;
  /**
   * Owner Id
   * @description New owner user ID for the course.
   * @default null
   */
  ownerId: string | null;
  /**
   * Room
   * @description New room/location for the course.
   * @default null
   */
  room: string | null;
  /**
   * Section
   * @description New section of the course.
   * @default null
   */
  section: string | null;
  /**
   * Update Mask
   * @description Comma-separated list of fields to update. E.g., 'name,section'.
   */
  updateMask?: string;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_PATCH tool output.
 */
type GOOGLE_CLASSROOM_COURSES_PATCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alternate Link
       * @description URL to view the course in Classroom.
       * @default null
       */
      alternateLink: string | null;
      /**
       * Calendar Id
       * @description Primary calendar ID for the course.
       * @default null
       */
      calendarId: string | null;
      /**
       * Course State
       * @description State of the course.
       * @default null
       * @enum {string|null}
       */
      courseState: "COURSE_STATE_UNSPECIFIED" | "ACTIVE" | "ARCHIVED" | "PROVISIONED" | "DECLINED" | null;
      /**
       * Creation Time
       * @description Creation time in RFC3339 UTC format.
       * @default null
       */
      creationTime: string | null;
      /**
       * Description
       * @description Detailed description of the course.
       * @default null
       */
      description: string | null;
      /**
       * Description Heading
       * @description Heading for the course description.
       * @default null
       */
      descriptionHeading: string | null;
      /**
       * Enrollment Code
       * @description Enrollment code to join the course.
       * @default null
       */
      enrollmentCode: string | null;
      /**
       * Id
       * @description Unique identifier for the course.
       * @default null
       */
      id: string | null;
      /**
       * Name
       * @description Name of the course.
       * @default null
       */
      name: string | null;
      /**
       * Owner Id
       * @description User ID of the course owner.
       * @default null
       */
      ownerId: string | null;
      /**
       * Room
       * @description Physical location or room of the course.
       * @default null
       */
      room: string | null;
      /**
       * Section
       * @description Section of the course, e.g., 'Period 2'.
       * @default null
       */
      section: string | null;
      /**
       * Student Group Email
       * @description Email address of the student group for the course.
       * @default null
       */
      studentGroupEmail: string | null;
      /**
       * Teacher Group Email
       * @description Email address of the teacher group for the course.
       * @default null
       */
      teacherGroupEmail: string | null;
      /**
       * Update Time
       * @description Last update time in RFC3339 UTC format.
       * @default null
       */
      updateTime: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_STUDENTS_GUARDIANS_LIST tool input.
 */
type GOOGLE_CLASSROOM_COURSES_STUDENTS_GUARDIANS_LIST_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course. Can be the Classroom-assigned ID or an alias.
   */
  courseId?: string;
  /**
   * Page Size
   * @description Maximum number of guardians to return. Must be between 1 and 100. Defaults to server's default.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description Token identifying which page of results to return.
   * @default null
   */
  pageToken: string | null;
  /**
   * Student Id
   * @description Identifier of the student (the user's id or email address, or 'me').
   */
  studentId?: string;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_STUDENTS_GUARDIANS_LIST tool output.
 */
type GOOGLE_CLASSROOM_COURSES_STUDENTS_GUARDIANS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Guardians
       * @description List of guardians for the specified student in the course.
       * @default null
       */
      guardians: {
          /**
           * Guardian Id
           * @description The unique identifier for the guardian.
           * @default null
           */
          guardianId: string | null;
          /**
           * GuardianProfile
           * @description Profile details for the guardian.
           * @default null
           */
          guardianProfile: {
              /**
               * Email Address
               * @description Email address of the guardian.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Id
               * @description Identifier of the guardian.
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Guardian's name details.
               * @default null
               */
              name: {
                  /**
                   * Family Name
                   * @description Guardian's family name.
                   * @default null
                   */
                  familyName: string | null;
                  /**
                   * Full Name
                   * @description Guardian's full name.
                   * @default null
                   */
                  fullName: string | null;
                  /**
                   * Given Name
                   * @description Guardian's given name.
                   * @default null
                   */
                  givenName: string | null;
              } | null;
              /**
               * Photo Url
               * @description Photo URL of the guardian profile.
               * @default null
               */
              photoUrl: string | null;
          } | null;
          /**
           * Invitation Id
           * @description ID of the invitation sent to guardian.
           * @default null
           */
          invitationId: string | null;
          /**
           * Invited Email Address
           * @description Email address to which the invitation was sent.
           * @default null
           */
          invitedEmailAddress: string | null;
          /**
           * Student Id
           * @description Identifier of the student linked to the guardian.
           * @default null
           */
          studentId: string | null;
      }[] | null;
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results.
       * @default null
       */
      nextPageToken: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_STUDENTS_LIST tool input.
 */
type GOOGLE_CLASSROOM_COURSES_STUDENTS_LIST_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course whose students should be listed. Can be the Classroom-assigned identifier or an alias.
   */
  courseId?: string;
  /**
   * Page Size
   * @description Maximum number of students to return. Must be between 1 and 100.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description Token specifying which page of results to return. Obtain from a previous list call's `nextPageToken`.
   * @default null
   */
  pageToken: string | null;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_STUDENTS_LIST tool output.
 */
type GOOGLE_CLASSROOM_COURSES_STUDENTS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Students
       * @description List of students in the specified course.
       * @default null
       */
      students: {
          /**
           * StudentProfile
           * @description Profile information of a student.
           * @default null
           */
          profile: {
              /**
               * Email Address
               * @description Email address of the student.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Id
               * @description Identifier for the user.
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Name of a person.
               * @default null
               */
              name: {
                  /**
                   * Family Name
                   * @description Family (last) name of the student.
                   * @default null
                   */
                  familyName: string | null;
                  /**
                   * Full Name
                   * @description Full name of the student.
                   * @default null
                   */
                  fullName: string | null;
                  /**
                   * Given Name
                   * @description Given (first) name of the student.
                   * @default null
                   */
                  givenName: string | null;
              } | null;
              /**
               * Photo Url
               * @description URL of the student's profile photo.
               * @default null
               */
              photoUrl: string | null;
          } | null;
          /**
           * User Id
           * @description Identifier for the student.
           * @default null
           */
          userId: string | null;
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
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_TEACHERS_GET tool input.
 */
type GOOGLE_CLASSROOM_COURSES_TEACHERS_GET_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course. This identifier can be either the Classroom-assigned ID or an alias.
   */
  courseId?: string;
  /**
   * Fields
   * @description Selector specifying which fields to include in a partial response.
   * @default null
   */
  fields: string | null;
  /**
   * Quota User
   * @description Arbitrary string assigned to a user for quota purposes (server-side applications only).
   * @default null
   */
  quotaUser: string | null;
  /**
   * User Id
   * @description Identifier of the teacher to retrieve. Can be the teacher's numeric user ID or email address.
   */
  userId?: string;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_TEACHERS_GET tool output.
 */
type GOOGLE_CLASSROOM_COURSES_TEACHERS_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Course Id
       * @description Identifier of the course
       */
      courseId: string;
      /**
       * Email Address
       * @description Email address of the teacher
       * @default null
       */
      emailAddress: string | null;
      /**
       * Profile
       * @description Global user profile information
       */
      profile: {
          /**
           * Email Address
           * @description User's email address
           * @default null
           */
          emailAddress: string | null;
          /**
           * Id
           * @description Global identifier of the user profile
           */
          id: string;
          /**
           * UserProfileName
           * @description Structured name details for a user profile.
           * @default null
           */
          name: {
              /**
               * Family Name
               * @description User's last name
               * @default null
               */
              familyName: string | null;
              /**
               * Full Name
               * @description User's full name
               * @default null
               */
              fullName: string | null;
              /**
               * Given Name
               * @description User's first name
               * @default null
               */
              givenName: string | null;
          } | null;
          /**
           * Photo Url
           * @description URL of the user's profile photo
           * @default null
           */
          photoUrl: string | null;
      };
      /**
       * User Id
       * @description Identifier of the user
       */
      userId: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_TEACHERS_LIST tool input.
 */
type GOOGLE_CLASSROOM_COURSES_TEACHERS_LIST_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course whose teachers should be listed.
   */
  courseId?: string;
  /**
   * Page Size
   * @description Maximum number of teachers to return. Must be between 1 and 100.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description Token specifying which page of results to return.
   * @default null
   */
  pageToken: string | null;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_TEACHERS_LIST tool output.
 */
type GOOGLE_CLASSROOM_COURSES_TEACHERS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Teachers
       * @description List of teachers in the specified course.
       * @default null
       */
      teachers: {
          /**
           * Course Id
           * @description Identifier of the course.
           * @default null
           */
          courseId: string | null;
          /**
           * UserProfile
           * @description Profile information for a user.
           * @default null
           */
          profile: {
              /**
               * Email Address
               * @description User's email address.
               * @default null
               */
              emailAddress: string | null;
              /**
               * Id
               * @description Global user identifier.
               * @default null
               */
              id: string | null;
              /**
               * Name
               * @description Name of a person.
               * @default null
               */
              name: {
                  /**
                   * Family Name
                   * @description Family (last) name of the user.
                   * @default null
                   */
                  familyName: string | null;
                  /**
                   * Full Name
                   * @description Full name of the user.
                   * @default null
                   */
                  fullName: string | null;
                  /**
                   * Given Name
                   * @description Given (first) name of the user.
                   * @default null
                   */
                  givenName: string | null;
              } | null;
          } | null;
          /**
           * User Id
           * @description Identifier for the teacher user.
           * @default null
           */
          userId: string | null;
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
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_TOPICS_CREATE tool input.
 */
type GOOGLE_CLASSROOM_COURSES_TOPICS_CREATE_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course to create the topic in.
   */
  courseId?: string;
  /**
   * Name
   * @description Name of the topic.
   */
  name?: string;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_TOPICS_CREATE tool output.
 */
type GOOGLE_CLASSROOM_COURSES_TOPICS_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Course Id
       * @description Identifier of the course for the topic.
       * @default null
       */
      courseId: string | null;
      /**
       * Id
       * @description Identifier for the topic.
       * @default null
       */
      id: string | null;
      /**
       * Name
       * @description Name of the topic.
       * @default null
       */
      name: string | null;
      /**
       * Update Time
       * @description Timestamp when the topic was last modified in RFC3339 UTC format.
       * @default null
       */
      updateTime: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_TOPICS_DELETE tool input.
 */
type GOOGLE_CLASSROOM_COURSES_TOPICS_DELETE_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course.
   */
  courseId?: string;
  /**
   * Id
   * @description Identifier of the topic to delete.
   */
  id?: string;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_TOPICS_DELETE tool output.
 */
type GOOGLE_CLASSROOM_COURSES_TOPICS_DELETE_OUTPUT = {
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
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_TOPICS_GET tool input.
 */
type GOOGLE_CLASSROOM_COURSES_TOPICS_GET_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course. This can be the Classroom-assigned identifier or an alias.
   */
  courseId?: string;
  /**
   * Id
   * @description Identifier of the topic to retrieve.
   */
  id?: string;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_TOPICS_GET tool output.
 */
type GOOGLE_CLASSROOM_COURSES_TOPICS_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Course Id
       * @description Identifier of the course the topic belongs to.
       * @default null
       */
      courseId: string | null;
      /**
       * Id
       * @description Identifier of the topic.
       * @default null
       */
      id: string | null;
      /**
       * Name
       * @description Name of the topic.
       * @default null
       */
      name: string | null;
      /**
       * Topic Id
       * @description Deprecated. Use 'id' instead.
       * @default null
       */
      topicId: string | null;
      /**
       * Update Time
       * @description Last update timestamp in RFC3339 UTC "Zulu" format.
       * @default null
       */
      updateTime: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_TOPICS_LIST tool input.
 */
type GOOGLE_CLASSROOM_COURSES_TOPICS_LIST_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course (Classroom-assigned ID or alias).
   */
  courseId?: string;
  /**
   * Page Size
   * @description Maximum number of topics to return; zero means no limit.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description Token identifying which page of results to return.
   * @default null
   */
  pageToken: string | null;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_TOPICS_LIST tool output.
 */
type GOOGLE_CLASSROOM_COURSES_TOPICS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token for the next page of results, or empty if none.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Topics
       * @description List of topics that match the request.
       * @default null
       */
      topics: {
          /**
           * Course Id
           * @description Identifier of the course for the topic.
           * @default null
           */
          courseId: string | null;
          /**
           * Id
           * @description Identifier for the topic.
           * @default null
           */
          id: string | null;
          /**
           * Name
           * @description Name of the topic.
           * @default null
           */
          name: string | null;
          /**
           * Update Time
           * @description Timestamp when the topic was last modified in RFC3339 UTC format.
           * @default null
           */
          updateTime: string | null;
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
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_TOPICS_PATCH tool input.
 */
type GOOGLE_CLASSROOM_COURSES_TOPICS_PATCH_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course.
   */
  courseId?: string;
  /**
   * Id
   * @description Identifier of the topic.
   */
  id?: string;
  /**
   * Name
   * @description New display name of the topic.
   * @default null
   */
  name: string | null;
  /**
   * Update Mask
   * @description Comma-separated list of fields to update. Currently only 'name' supported.
   * @default null
   */
  updateMask: string | null;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSES_TOPICS_PATCH tool output.
 */
type GOOGLE_CLASSROOM_COURSES_TOPICS_PATCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Course Id
       * @description Identifier of the course.
       * @default null
       */
      courseId: string | null;
      /**
       * Name
       * @description Name of the topic.
       * @default null
       */
      name: string | null;
      /**
       * Topic Id
       * @description Identifier of the topic.
       * @default null
       */
      topicId: string | null;
      /**
       * Update Time
       * @description Last update time in RFC3339 UTC format.
       * @default null
       */
      updateTime: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_CREATE tool input.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_CREATE_INPUT = {
  /**
   * Assignment
   * @description Assignment details if workType is ASSIGNMENT
   * @default null
   */
  assignment: {
      [key: string]: unknown;
  } | null;
  /**
   * Course Id
   * @description Identifier of the course
   */
  courseId?: string;
  /**
   * Description
   * @description Detailed description or instructions
   * @default null
   */
  description: string | null;
  /**
   * DueDate
   * @description Date portion of coursework due date (year, month, day).
   * @default null
   */
  dueDate: {
      /**
       * Day
       * @description Day of month (1-31)
       */
      day: number;
      /**
       * Month
       * @description Month of year (1-12)
       */
      month: number;
      /**
       * Year
       * @description Year in YYYY format
       */
      year: number;
  } | null;
  /**
   * DueTime
   * @description Time portion of coursework due time (hours, minutes, seconds, nanos).
   * @default null
   */
  dueTime: {
      /**
       * Hours
       * @description Hour of day (0-23)
       */
      hours: number;
      /**
       * Minutes
       * @description Minute of hour (0-59)
       */
      minutes: number;
      /**
       * Nanos
       * @description Fractional seconds in nanoseconds
       * @default null
       */
      nanos: number | null;
      /**
       * Seconds
       * @description Second of minute (0-59)
       */
      seconds: number;
  } | null;
  /**
   * Materials
   * @description Materials to attach to the coursework
   * @default null
   */
  materials: {
      [key: string]: unknown;
  }[] | null;
  /**
   * Max Points
   * @description Maximum points available for the coursework
   * @default null
   */
  maxPoints: number | null;
  /**
   * MultipleChoiceQuestion
   * @description Details for multiple-choice question.
   * @default null
   */
  multipleChoiceQuestion: {
      /**
       * Choices
       * @description List of possible answers; provide at least two choices
       */
      choices: string[];
  } | null;
  /**
   * Scheduled Time
   * @description RFC3339 timestamp to auto-publish the coursework
   * @default null
   */
  scheduledTime: string | null;
  /**
   * ShortAnswerQuestion
   * @description Details for short-answer question.
   * @default null
   */
  shortAnswerQuestion: {
      /**
       * Grading
       * @description Additional grading options for short answer questions
       * @default null
       */
      grading: {
          [key: string]: unknown;
      } | null;
  } | null;
  /**
   * State
   * @description Whether to save as draft or publish immediately
   * @default PUBLISHED
   * @enum {string}
   */
  state: "DRAFT" | "PUBLISHED";
  /**
   * Submission Modification Mode
   * @description Controls if students can edit submissions after turn-in
   * @default null
   * @enum {string|null}
   */
  submissionModificationMode: "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED" | "MODIFIABLE_UNTIL_TURNED_IN" | "MODIFIABLE" | null;
  /**
   * Title
   * @description Title of the coursework
   */
  title?: string;
  /**
   * Topic Id
   * @description Topic ID to organize coursework under
   * @default null
   */
  topicId: string | null;
  /**
   * Work Type
   * @description Type of coursework being created
   * @enum {string}
   */
  workType?: "ASSIGNMENT" | "SHORT_ANSWER_QUESTION" | "MULTIPLE_CHOICE_QUESTION";
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_CREATE tool output.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alternate Link
       * @description URL to view coursework in Classroom UI
       * @default null
       */
      alternateLink: string | null;
      /**
       * Assignment
       * @description Assignment details if applicable
       * @default null
       */
      assignment: {
          [key: string]: unknown;
      } | null;
      /**
       * Course Id
       * @description Course ID the coursework belongs to
       */
      courseId: string;
      /**
       * Creation Time
       * @description RFC3339 timestamp of creation
       */
      creationTime: string;
      /**
       * Creator User Id
       * @description User ID of the creator
       * @default null
       */
      creatorUserId: string | null;
      /**
       * Description
       * @description Detailed description or instructions
       * @default null
       */
      description: string | null;
      /**
       * DueDate
       * @description Date portion of coursework due date (year, month, day).
       * @default null
       */
      dueDate: {
          /**
           * Day
           * @description Day of month (1-31)
           */
          day: number;
          /**
           * Month
           * @description Month of year (1-12)
           */
          month: number;
          /**
           * Year
           * @description Year in YYYY format
           */
          year: number;
      } | null;
      /**
       * DueTime
       * @description Time portion of coursework due time (hours, minutes, seconds, nanos).
       * @default null
       */
      dueTime: {
          /**
           * Hours
           * @description Hour of day (0-23)
           */
          hours: number;
          /**
           * Minutes
           * @description Minute of hour (0-59)
           */
          minutes: number;
          /**
           * Nanos
           * @description Fractional seconds in nanoseconds
           * @default null
           */
          nanos: number | null;
          /**
           * Seconds
           * @description Second of minute (0-59)
           */
          seconds: number;
      } | null;
      /**
       * Id
       * @description Identifier for the coursework
       */
      id: string;
      /**
       * Materials
       * @description Materials attached to the coursework
       * @default null
       */
      materials: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Max Points
       * @description Maximum points available
       * @default null
       */
      maxPoints: number | null;
      /**
       * MultipleChoiceQuestion
       * @description Details for multiple-choice question.
       * @default null
       */
      multipleChoiceQuestion: {
          /**
           * Choices
           * @description List of possible answers; provide at least two choices
           */
          choices: string[];
      } | null;
      /**
       * Scheduled Time
       * @description RFC3339 timestamp when coursework is scheduled
       * @default null
       */
      scheduledTime: string | null;
      /**
       * ShortAnswerQuestion
       * @description Details for short-answer question.
       * @default null
       */
      shortAnswerQuestion: {
          /**
           * Grading
           * @description Additional grading options for short answer questions
           * @default null
           */
          grading: {
              [key: string]: unknown;
          } | null;
      } | null;
      /**
       * State
       * @description Current state of the coursework
       * @enum {string}
       */
      state: "DRAFT" | "PUBLISHED";
      /**
       * Submission Modification Mode
       * @description Submission modification mode
       * @default null
       * @enum {string|null}
       */
      submissionModificationMode: "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED" | "MODIFIABLE_UNTIL_TURNED_IN" | "MODIFIABLE" | null;
      /**
       * Title
       * @description Title of the coursework
       */
      title: string;
      /**
       * Topic Id
       * @description Topic ID for the coursework
       * @default null
       */
      topicId: string | null;
      /**
       * Update Time
       * @description RFC3339 timestamp of last update
       */
      updateTime: string;
      /**
       * Work Type
       * @description Type of the coursework
       * @enum {string}
       */
      workType: "ASSIGNMENT" | "SHORT_ANSWER_QUESTION" | "MULTIPLE_CHOICE_QUESTION";
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_DELETE tool input.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_DELETE_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course.
   */
  courseId?: string;
  /**
   * Id
   * @description Identifier of the coursework item to delete.
   */
  id?: string;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_DELETE tool output.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_DELETE_OUTPUT = {
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
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_GET tool input.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_GET_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
   */
  courseId?: string;
  /**
   * Id
   * @description Identifier of the coursework item to retrieve.
   */
  id?: string;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_GET tool output.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alternate Link
       * @description Absolute link to view the coursework in Classroom UI.
       * @default null
       */
      alternateLink: string | null;
      /**
       * Assignee Mode
       * @description Assignment mode for the coursework.
       * @default null
       * @enum {string|null}
       */
      assigneeMode: "ASSIGNEE_MODE_UNSPECIFIED" | "ALL_STUDENTS" | "INDIVIDUAL_STUDENTS" | null;
      /**
       * Associated With Developer
       * @description Flag indicating developer association.
       * @default null
       */
      associatedWithDeveloper: boolean | null;
      /**
       * Course Id
       * @description Identifier of the course.
       * @default null
       */
      courseId: string | null;
      /**
       * Creation Time
       * @description Creation time in RFC3339 UTC format.
       * @default null
       */
      creationTime: string | null;
      /**
       * Creator User Id
       * @description User ID of the coursework creator.
       * @default null
       */
      creatorUserId: string | null;
      /**
       * Description
       * @description Description of the coursework.
       * @default null
       */
      description: string | null;
      /**
       * DueDate
       * @description Due date of the coursework.
       * @default null
       */
      dueDate: {
          /**
           * Day
           * @description Day part of the due date (1-31).
           */
          day: number;
          /**
           * Month
           * @description Month part of the due date (1-12).
           */
          month: number;
          /**
           * Year
           * @description Year part of the due date.
           */
          year: number;
      } | null;
      /**
       * TimeOfDay
       * @description Due time of the coursework.
       * @default null
       */
      dueTime: {
          /**
           * Hours
           * @description Hours of the due time (0-23).
           */
          hours: number;
          /**
           * Minutes
           * @description Minutes of the due time (0-59).
           */
          minutes: number;
          /**
           * Nanos
           * @description Nanoseconds of the due time.
           * @default 0
           */
          nanos: number;
          /**
           * Seconds
           * @description Seconds of the due time (0-59).
           */
          seconds: number;
      } | null;
      /**
       * GradeCategory
       * @description Grade category details, if set.
       * @default null
       */
      gradeCategory: {
          /**
           * Id
           * @description Identifier of the grade category.
           */
          id: string;
          /**
           * Title
           * @description Title of the grade category.
           */
          title: string;
      } | null;
      /**
       * Id
       * @description Identifier of the coursework.
       * @default null
       */
      id: string | null;
      /**
       * IndividualStudentsOptions
       * @description Details when coursework is assigned to individual students.
       * @default null
       */
      individualStudentsOptions: {
          /**
           * Student Ids
           * @description List of student IDs assigned individually.
           */
          studentIds: string[];
      } | null;
      /**
       * Materials
       * @description Materials attached to the coursework.
       * @default null
       */
      materials: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Max Points
       * @description Maximum grade points for the coursework.
       * @default null
       */
      maxPoints: number | null;
      /**
       * Scheduled Time
       * @description Scheduled time in RFC3339 UTC format, if set.
       * @default null
       */
      scheduledTime: string | null;
      /**
       * State
       * @description State of the coursework.
       * @default null
       * @enum {string|null}
       */
      state: "COURSE_WORK_STATE_UNSPECIFIED" | "PUBLISHED" | "DRAFT" | "DELETED" | null;
      /**
       * Submission Modification Mode
       * @description Submission modification permissions for students.
       * @default null
       * @enum {string|null}
       */
      submissionModificationMode: "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED" | "MODIFIABLE_UNTIL_TURNED_IN" | "MODIFIABLE" | null;
      /**
       * Title
       * @description Title of the coursework.
       * @default null
       */
      title: string | null;
      /**
       * Topic Id
       * @description Identifier for the associated topic, if any.
       * @default null
       */
      topicId: string | null;
      /**
       * Update Time
       * @description Last update time in RFC3339 UTC format.
       * @default null
       */
      updateTime: string | null;
      /**
       * Work Type
       * @description Type of the coursework.
       * @default null
       * @enum {string|null}
       */
      workType: "COURSE_WORK_TYPE_UNSPECIFIED" | "ASSIGNMENT" | "SHORT_ANSWER_QUESTION" | "MULTIPLE_CHOICE_QUESTION" | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_LIST tool input.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_LIST_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course (Classroom-assigned ID or alias).
   */
  courseId?: string;
  /**
   * Course Work States
   * @description Restriction on the coursework state to return. Only coursework matching one of these states is returned. If unspecified, defaults to ['PUBLISHED'].
   * @default null
   */
  courseWorkStates: string[] | null;
  /**
   * Order By
   * @description Sort ordering for results. Comma-separated list of fields with optional direction. Supported fields: 'updateTime', 'dueDate'. Supported direction keywords: 'asc', 'desc'. Default: 'updateTime desc'.
   * @default null
   */
  orderBy: string | null;
  /**
   * Page Size
   * @description Maximum number of items to return. Zero or unspecified indicates the server may assign a maximum. The server may return fewer than the specified number.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description NextPageToken from a previous list call, indicating subsequent page of results to return. Must be used with otherwise identical request.
   * @default null
   */
  pageToken: string | null;
  /**
   * Preview Version
   * @description Preview version of the API. Set to access new capabilities in the Preview Program.
   * @default null
   */
  previewVersion: string | null;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_LIST tool output.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Course Work
       * @description List of coursework items.
       * @default null
       */
      courseWork: {
          /**
           * Alternate Link
           * @description URL to the courseWork in Classroom UI.
           * @default null
           */
          alternateLink: string | null;
          /**
           * Associated With Developer
           * @description Whether this was created by a developer.
           * @default null
           */
          associatedWithDeveloper: boolean | null;
          /**
           * Creation Time
           * @description When courseWork was created (RFC3339 UTC).
           * @default null
           */
          creationTime: string | null;
          /**
           * Description
           * @description Description of the courseWork.
           * @default null
           */
          description: string | null;
          /**
           * Date
           * @description A whole calendar date.
           * @default null
           */
          dueDate: {
              /**
               * Day
               * @description Day of month (1-31)
               * @default null
               */
              day: number | null;
              /**
               * Month
               * @description Month of year (1-12)
               * @default null
               */
              month: number | null;
              /**
               * Year
               * @description Year of date (e.g., 2021)
               * @default null
               */
              year: number | null;
          } | null;
          /**
           * TimeOfDay
           * @description A time of day.
           * @default null
           */
          dueTime: {
              /**
               * Hours
               * @description Hours since midnight (0-23)
               * @default null
               */
              hours: number | null;
              /**
               * Minutes
               * @description Minutes after the hour (0-59)
               * @default null
               */
              minutes: number | null;
              /**
               * Nanoseconds
               * @description Fractions of a second in nanoseconds
               * @default null
               */
              nanoseconds: number | null;
              /**
               * Seconds
               * @description Seconds after the minute (0-59)
               * @default null
               */
              seconds: number | null;
          } | null;
          /**
           * Id
           * @description Identifier of the courseWork.
           * @default null
           */
          id: string | null;
          /**
           * Max Points
           * @description Maximum points or grade for the assignment.
           * @default null
           */
          maxPoints: number | null;
          /**
           * Scheduled Time
           * @description Scheduled post time (RFC3339 UTC).
           * @default null
           */
          scheduledTime: string | null;
          /**
           * State
           * @description State of the courseWork.
           * @default null
           * @enum {string|null}
           */
          state: "COURSE_WORK_STATE_UNSPECIFIED" | "PUBLISHED" | "DRAFT" | "DELETED" | null;
          /**
           * Submission Modification Mode
           * @description Whether student can modify submissions until graded.
           * @default null
           * @constant
           */
          submissionModificationMode: "MODIFIABLE_UNTIL_GRADING";
          /**
           * Title
           * @description Title of the courseWork.
           * @default null
           */
          title: string | null;
          /**
           * Topic Id
           * @description Topic ID the courseWork is associated with.
           * @default null
           */
          topicId: string | null;
          /**
           * Update Time
           * @description Last update time (RFC3339 UTC).
           * @default null
           */
          updateTime: string | null;
          /**
           * Work Type
           * @description Type of the assignment.
           * @default null
           * @enum {string|null}
           */
          workType: "ASSIGNMENT" | "SHORT_ANSWER_QUESTION" | "MULTIPLE_CHOICE_QUESTION" | null;
      }[] | null;
      /**
       * Next Page Token
       * @description Token for next page of results.
       * @default null
       */
      nextPageToken: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_CREATE tool input.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_CREATE_INPUT = {
  /**
   * Assignee Mode
   * @description Who can see the material. Defaults to ALL_STUDENTS.
   * @default null
   * @enum {string|null}
   */
  assigneeMode: "ALL_STUDENTS" | "INDIVIDUAL_STUDENTS" | null;
  /**
   * Associated With Developer
   * @description Whether this material is associated with a developer project.
   * @default null
   */
  associatedWithDeveloper: boolean | null;
  /**
   * Course Id
   * @description Identifier of the course.
   */
  courseId?: string;
  /**
   * Description
   * @description Description of the course work material.
   * @default null
   */
  description: string | null;
  /**
   * IndividualStudentsOptions
   * @description Options for INDIVIDUAL_STUDENTS assignee mode.
   * @default null
   */
  individualStudentsOptions: {
      /**
       * Student Ids
       * @description List of student IDs who can see the material.
       */
      studentIds: string[];
  } | null;
  /**
   * Materials
   * @description Materials attached to the course work material. Each element defines one of driveFile, link, form, or youtubeVideo.
   * @default null
   */
  materials: {
      /**
       * Drive File
       * @description Drive file resource with keys like 'id', 'title', 'alternateLink'.
       * @default null
       */
      driveFile: {
          [key: string]: string;
      } | null;
      /**
       * Form
       * @description Form resource with keys 'formUrl' and 'formTitle'.
       * @default null
       */
      form: {
          [key: string]: string;
      } | null;
      /**
       * Link
       * @description Link resource with keys 'url' and 'title'.
       * @default null
       */
      link: {
          [key: string]: string;
      } | null;
      /**
       * Youtube Video
       * @description YouTube video resource with keys 'id' and 'title'.
       * @default null
       */
      youtubeVideo: {
          [key: string]: string;
      } | null;
  }[] | null;
  /**
   * Scheduled Time
   * @description RFC3339 formatted time when the material is scheduled to be published, e.g., '2020-10-28T16:01:23Z'.
   * @default null
   */
  scheduledTime: string | null;
  /**
   * State
   * @enum {string|null}
   */
  state?: "DRAFT" | "PUBLISHED" | "DELETED" | null;
  /**
   * Title
   * @description Title of the course work material.
   * @default null
   */
  title: string | null;
  /**
   * Topic Id
   * @description Identifier of the topic to which this material belongs.
   * @default null
   */
  topicId: string | null;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_CREATE tool output.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alternate Link
       * @description URL to view this material in Classroom.
       * @default null
       */
      alternateLink: string | null;
      /**
       * Assignee Mode
       * @description Who can see the material.
       * @default null
       * @enum {string|null}
       */
      assigneeMode: "ALL_STUDENTS" | "INDIVIDUAL_STUDENTS" | null;
      /**
       * Associated With Developer
       * @description Whether this material is associated with a developer project.
       * @default null
       */
      associatedWithDeveloper: boolean | null;
      /**
       * Course Id
       * @description Identifier of the course.
       * @default null
       */
      courseId: string | null;
      /**
       * Creation Time
       * @description Creation time in RFC3339 UTC format.
       * @default null
       */
      creationTime: string | null;
      /**
       * Description
       * @description Description of the course work material.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Identifier assigned by Classroom for the material.
       * @default null
       */
      id: string | null;
      /**
       * IndividualStudentsOptions
       * @description Options for INDIVIDUAL_STUDENTS assignee mode.
       * @default null
       */
      individualStudentsOptions: {
          /**
           * Student Ids
           * @description List of student IDs who can see the material.
           */
          studentIds: string[];
      } | null;
      /**
       * Materials
       * @description Materials attached to the course work material.
       * @default null
       */
      materials: {
          /**
           * Drive File
           * @description Drive file resource with keys like 'id', 'title', 'alternateLink'.
           * @default null
           */
          driveFile: {
              [key: string]: string;
          } | null;
          /**
           * Form
           * @description Form resource with keys 'formUrl' and 'formTitle'.
           * @default null
           */
          form: {
              [key: string]: string;
          } | null;
          /**
           * Link
           * @description Link resource with keys 'url' and 'title'.
           * @default null
           */
          link: {
              [key: string]: string;
          } | null;
          /**
           * Youtube Video
           * @description YouTube video resource with keys 'id' and 'title'.
           * @default null
           */
          youtubeVideo: {
              [key: string]: string;
          } | null;
      }[] | null;
      /**
       * Scheduled Time
       * @description Scheduled publish time in RFC3339 UTC format.
       * @default null
       */
      scheduledTime: string | null;
      /**
       * State
       * @enum {string|null}
       */
      state: "DRAFT" | "PUBLISHED" | "DELETED" | null;
      /**
       * Title
       * @description Title of the course work material.
       * @default null
       */
      title: string | null;
      /**
       * Topic Id
       * @description Identifier of the topic for this material.
       * @default null
       */
      topicId: string | null;
      /**
       * Update Time
       * @description Last update time in RFC3339 UTC format.
       * @default null
       */
      updateTime: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_GET tool input.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_GET_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course. Can be Classroom-assigned identifier or an alias.
   */
  courseId?: string;
  /**
   * Id
   * @description Identifier of the coursework material.
   */
  id?: string;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_GET tool output.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alternate Link
       * @description URL where the material can be viewed in Classroom web UI.
       * @default null
       */
      alternateLink: string | null;
      /**
       * Course Id
       * @description Identifier of the course.
       * @default null
       */
      courseId: string | null;
      /**
       * Creation Time
       * @description Creation time in RFC3339 UTC format.
       * @default null
       */
      creationTime: string | null;
      /**
       * Description
       * @description Description of this coursework material.
       * @default null
       */
      description: string | null;
      /**
       * Id
       * @description Identifier for this coursework material.
       * @default null
       */
      id: string | null;
      /**
       * Materials
       * @description Materials attached to the coursework material.
       * @default null
       */
      materials: {
          /**
           * SharedDriveFile
           * @description Google Drive file material.
           * @default null
           */
          driveFile: {
              /**
               * Alternate Link
               * @description URL to view the file in Drive UI.
               * @default null
               */
              alternateLink: string | null;
              /**
               * Id
               * @description Drive file ID.
               * @default null
               */
              id: string | null;
              /**
               * Thumbnail Url
               * @description URL of a thumbnail image of the file.
               * @default null
               */
              thumbnailUrl: string | null;
              /**
               * Title
               * @description Drive file title.
               * @default null
               */
              title: string | null;
          } | null;
          /**
           * Form
           * @description Google Forms material.
           * @default null
           */
          form: {
              /**
               * Form Url
               * @description URL of the form.
               * @default null
               */
              formUrl: string | null;
              /**
               * Title
               * @description Title of the form.
               * @default null
               */
              title: string | null;
          } | null;
          /**
           * Link
           * @description Link material.
           * @default null
           */
          link: {
              /**
               * Title
               * @description Link title.
               * @default null
               */
              title: string | null;
              /**
               * Url
               * @description Link URL.
               * @default null
               */
              url: string | null;
          } | null;
          /**
           * Title
           * @description Title of the material.
           * @default null
           */
          title: string | null;
          /**
           * YouTubeVideo
           * @description YouTube video material.
           * @default null
           */
          youtubeVideo: {
              /**
               * Alternate Link
               * @description URL to watch the video.
               * @default null
               */
              alternateLink: string | null;
              /**
               * Id
               * @description YouTube video ID.
               * @default null
               */
              id: string | null;
          } | null;
      }[] | null;
      /**
       * State
       * @description State of the coursework material (e.g., 'PUBLISHED').
       * @default null
       */
      state: string | null;
      /**
       * Title
       * @description Title of this coursework material.
       * @default null
       */
      title: string | null;
      /**
       * Topic Id
       * @description Identifier of an associated topic.
       * @default null
       */
      topicId: string | null;
      /**
       * Update Time
       * @description Last update time in RFC3339 UTC format.
       * @default null
       */
      updateTime: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_LIST tool input.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_LIST_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course whose courseWorkMaterials should be returned.
   */
  courseId?: string;
  /**
   * Order By
   * @description Optional sorting order; allowed values are 'updateTime asc' or 'updateTime desc'.
   * @default null
   * @enum {string|null}
   */
  orderBy: "updateTime asc" | "updateTime desc" | null;
  /**
   * Page Size
   * @description Maximum number of items to return. Must be between 1 and 100. Defaults to 30.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description Token identifying which page of results to return.
   * @default null
   */
  pageToken: string | null;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_LIST tool output.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Course Work Material
       * @description List of courseWorkMaterial items returned.
       * @default null
       */
      courseWorkMaterial: {
          /**
           * Alternate Link
           * @description URL link to open the courseWorkMaterial.
           * @default null
           */
          alternateLink: string | null;
          /**
           * Creation Time
           * @description Creation time in RFC3339 UTC format.
           * @default null
           */
          creationTime: string | null;
          /**
           * Description
           * @description Description of the courseWorkMaterial.
           * @default null
           */
          description: string | null;
          /**
           * Id
           * @description Identifier for the courseWorkMaterial.
           * @default null
           */
          id: string | null;
          /**
           * Materials
           * @description Materials attached to the courseWorkMaterial.
           * @default null
           */
          materials: {
              /**
               * DriveFile
               * @description Drive file reference in a CourseWorkMaterial.
               * @default null
               */
              driveFile: {
                  /**
                   * Alternate Link
                   * @description URL link to open the Drive file.
                   * @default null
                   */
                  alternateLink: string | null;
                  /**
                   * Id
                   * @description ID of the Drive file.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Thumbnail Url
                   * @description Thumbnail URL of the Drive file.
                   * @default null
                   */
                  thumbnailUrl: string | null;
                  /**
                   * Title
                   * @description Title of the Drive file.
                   * @default null
                   */
                  title: string | null;
              } | null;
              /**
               * Form
               * @description Google Form reference in a CourseWorkMaterial.
               * @default null
               */
              form: {
                  /**
                   * Form Url
                   * @description URL of the Google Form.
                   * @default null
                   */
                  formUrl: string | null;
                  /**
                   * Title
                   * @description Title of the Google Form.
                   * @default null
                   */
                  title: string | null;
              } | null;
              /**
               * Link
               * @description Link reference in a CourseWorkMaterial.
               * @default null
               */
              link: {
                  /**
                   * Title
                   * @description Title of the link.
                   * @default null
                   */
                  title: string | null;
                  /**
                   * Url
                   * @description URL of the link.
                   * @default null
                   */
                  url: string | null;
              } | null;
              /**
               * YouTubeVideo
               * @description YouTube video reference in a CourseWorkMaterial.
               * @default null
               */
              youtubeVideo: {
                  /**
                   * Alternate Link
                   * @description URL link to open the YouTube video.
                   * @default null
                   */
                  alternateLink: string | null;
                  /**
                   * Id
                   * @description ID of the YouTube video.
                   * @default null
                   */
                  id: string | null;
                  /**
                   * Thumbnail Url
                   * @description Thumbnail URL for the YouTube video.
                   * @default null
                   */
                  thumbnailUrl: string | null;
                  /**
                   * Title
                   * @description Title of the YouTube video.
                   * @default null
                   */
                  title: string | null;
              } | null;
          }[] | null;
          /**
           * State
           * @description State of the courseWorkMaterial: 'DRAFT', 'PUBLISHED', or 'DELETED'.
           * @default null
           * @enum {string|null}
           */
          state: "DRAFT" | "PUBLISHED" | "DELETED" | null;
          /**
           * Title
           * @description Title of the courseWorkMaterial.
           * @default null
           */
          title: string | null;
          /**
           * Topic Id
           * @description Identifier of the topic this material is associated with.
           * @default null
           */
          topicId: string | null;
          /**
           * Update Time
           * @description Last update time in RFC3339 UTC format.
           * @default null
           */
          updateTime: string | null;
      }[] | null;
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results.
       * @default null
       */
      nextPageToken: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_PATCH tool input.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_PATCH_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course. Can be the Classroom-assigned identifier or an alias.
   */
  courseId?: string;
  /**
   * Description
   * @description Description of the coursework to set.
   * @default null
   */
  description: string | null;
  /**
   * Date
   * @description Model for due date.
   * @default null
   */
  dueDate: {
      /**
       * Day
       * @description Day of due date (1-31)
       */
      day: number;
      /**
       * Month
       * @description Month of due date (1-12)
       */
      month: number;
      /**
       * Year
       * @description Year of due date in YYYY format
       */
      year: number;
  } | null;
  /**
   * TimeOfDay
   * @description Model for due time.
   * @default null
   */
  dueTime: {
      /**
       * Hours
       * @description Hour of due time in 24h format (0-23)
       */
      hours: number;
      /**
       * Minutes
       * @description Minutes of due time (0-59)
       */
      minutes: number;
      /**
       * Nanos
       * @description Nanoseconds
       * @default 0
       */
      nanos: number | null;
      /**
       * Seconds
       * @description Seconds of due time (0-59)
       * @default 0
       */
      seconds: number | null;
  } | null;
  /**
   * Id
   * @description Identifier of the CourseWork to update.
   */
  id?: string;
  /**
   * Max Points
   * @description Maximum grade points for the coursework.
   * @default null
   */
  maxPoints: number | null;
  /**
   * Scheduled Time
   * @description Timestamp in RFC3339 format to set for scheduledTime.
   * @default null
   */
  scheduledTime: string | null;
  /**
   * Title
   * @description Title of the coursework to set.
   * @default null
   */
  title: string | null;
  /**
   * Topic Id
   * @description Topic ID to assign.
   * @default null
   */
  topicId: string | null;
  /**
   * Update Mask
   * @description Comma-separated list of fields to update. E.g., 'title,description'.
   */
  updateMask?: string;
  /**
   * Work Type
   * @description Type of the coursework.
   * @default null
   * @enum {string|null}
   */
  workType: "COURSE_WORK_TYPE_UNSPECIFIED" | "ASSIGNMENT" | "SHORT_ANSWER_QUESTION" | "MULTIPLE_CHOICE_QUESTION" | null;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_PATCH tool output.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_PATCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alternate Link
       * @description URL to view the coursework in Classroom.
       * @default null
       */
      alternateLink: string | null;
      /**
       * Creation Time
       * @description Creation time in RFC3339 format.
       * @default null
       */
      creationTime: string | null;
      /**
       * Description
       * @description Description of the coursework.
       * @default null
       */
      description: string | null;
      /**
       * Date
       * @description Model for due date.
       * @default null
       */
      dueDate: {
          /**
           * Day
           * @description Day of due date (1-31)
           */
          day: number;
          /**
           * Month
           * @description Month of due date (1-12)
           */
          month: number;
          /**
           * Year
           * @description Year of due date in YYYY format
           */
          year: number;
      } | null;
      /**
       * TimeOfDay
       * @description Model for due time.
       * @default null
       */
      dueTime: {
          /**
           * Hours
           * @description Hour of due time in 24h format (0-23)
           */
          hours: number;
          /**
           * Minutes
           * @description Minutes of due time (0-59)
           */
          minutes: number;
          /**
           * Nanos
           * @description Nanoseconds
           * @default 0
           */
          nanos: number | null;
          /**
           * Seconds
           * @description Seconds of due time (0-59)
           * @default 0
           */
          seconds: number | null;
      } | null;
      /**
       * Id
       * @description Unique identifier for the coursework.
       * @default null
       */
      id: string | null;
      /**
       * IndividualStudentsOptions
       * @description Specification for individual student assignment.
       * @default null
       */
      individualStudentsOptions: {
          /**
           * Assignee Mode
           * @description Mode for assigning coursework.
           * @enum {string}
           */
          assigneeMode: "ALL_STUDENTS" | "INDIVIDUAL_STUDENTS";
          /**
           * Student Ids
           * @description List of student IDs if assigneeMode is INDIVIDUAL_STUDENTS.
           * @default null
           */
          studentIds: string[] | null;
      } | null;
      /**
       * Max Points
       * @description Maximum points for the coursework.
       * @default null
       */
      maxPoints: number | null;
      /**
       * Scheduled Time
       * @description Scheduled time in RFC3339 format.
       * @default null
       */
      scheduledTime: string | null;
      /**
       * State
       * @description State of the coursework.
       * @default null
       * @enum {string|null}
       */
      state: "COURSE_WORK_STATE_UNSPECIFIED" | "PUBLISHED" | "DRAFT" | "DELETED" | null;
      /**
       * Title
       * @description Title of the coursework.
       * @default null
       */
      title: string | null;
      /**
       * Topic Id
       * @description Topic ID if set.
       * @default null
       */
      topicId: string | null;
      /**
       * Update Time
       * @description Last update time in RFC3339 format.
       * @default null
       */
      updateTime: string | null;
      /**
       * Work Type
       * @description Type of the coursework.
       * @default null
       * @enum {string|null}
       */
      workType: "COURSE_WORK_TYPE_UNSPECIFIED" | "ASSIGNMENT" | "SHORT_ANSWER_QUESTION" | "MULTIPLE_CHOICE_QUESTION" | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_STUDENT_SUBMISSIONS_LIST tool input.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_STUDENT_SUBMISSIONS_LIST_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course.
   */
  courseId?: string;
  /**
   * Course Work Id
   * @description Identifier of the coursework; use '-' to return submissions for all coursework in the course.
   */
  courseWorkId?: string;
  /**
   * Late
   * @description Filters returned submissions to those that are on time or late.
   * @default null
   * @enum {string|null}
   */
  late: "LATE_ONLY" | "NOT_LATE_ONLY" | null;
  /**
   * Page Size
   * @description Maximum number of items to return. Defaults to 30; maximum is 100.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description Token for next page of results.
   * @default null
   */
  pageToken: string | null;
  /**
   * States
   * @description Filters returned submissions to those in the specified states.
   * @default null
   */
  states: string[] | null;
  /**
   * User Id
   * @description Restricts returned submissions to those owned by the specified user. Use numeric ID or 'me'.
   * @default null
   */
  userId: string | null;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_STUDENT_SUBMISSIONS_LIST tool output.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_STUDENT_SUBMISSIONS_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Student Submissions
       * @description List of student submissions matching the request.
       * @default null
       */
      studentSubmissions: {
          /**
           * Assigned Grade
           * @description Grade assigned to the student.
           * @default null
           */
          assignedGrade: number | null;
          /**
           * Course Id
           * @description Identifier of the course.
           * @default null
           */
          courseId: string | null;
          /**
           * Course Work Id
           * @description Identifier of the coursework.
           * @default null
           */
          courseWorkId: string | null;
          /**
           * Creation Time
           * @description Creation time in RFC3339 UTC format.
           * @default null
           */
          creationTime: string | null;
          /**
           * Draft Grade
           * @description Draft grade set by the teacher.
           * @default null
           */
          draftGrade: number | null;
          /**
           * Id
           * @description Identifier of the submission.
           * @default null
           */
          id: string | null;
          /**
           * Late
           * @description Whether the submission was turned in late.
           * @default null
           */
          late: boolean | null;
          /**
           * State
           * @description Current state of the submission.
           * @default null
           * @enum {string|null}
           */
          state: "NEW" | "CREATED" | "TURNED_IN" | "RETURNED" | "RECLAIMED_BY_STUDENT" | null;
          /**
           * Update Time
           * @description Last update time in RFC3339 UTC format.
           * @default null
           */
          updateTime: string | null;
          /**
           * User Id
           * @description Identifier of the student user.
           * @default null
           */
          userId: string | null;
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
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_STUDENT_SUBMISSIONS_RECLAIM tool input.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_STUDENT_SUBMISSIONS_RECLAIM_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course.
   */
  courseId?: string;
  /**
   * Course Work Id
   * @description Identifier of the coursework.
   */
  courseWorkId?: string;
  /**
   * Id
   * @description Identifier of the student submission.
   */
  id?: string;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_COURSE_WORK_STUDENT_SUBMISSIONS_RECLAIM tool output.
 */
type GOOGLE_CLASSROOM_COURSE_WORK_STUDENT_SUBMISSIONS_RECLAIM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Alternate Link
       * @description URL to view the submission in Classroom UI.
       * @default null
       */
      alternateLink: string | null;
      /**
       * Assigned Grade
       * @description The grade assigned by the teacher.
       * @default null
       */
      assignedGrade: number | null;
      /**
       * Assignment Submission
       * @description Drive assignment submission details, if any.
       * @default null
       */
      assignmentSubmission: {
          [key: string]: unknown;
      } | null;
      /**
       * Course Id
       * @description Identifier of the course.
       * @default null
       */
      courseId: string | null;
      /**
       * Course Work Id
       * @description Identifier of the coursework.
       * @default null
       */
      courseWorkId: string | null;
      /**
       * Creation Time
       * @description Creation time in RFC3339 UTC format.
       * @default null
       */
      creationTime: string | null;
      /**
       * Draft Grade
       * @description The grade the student received on draft work, if any.
       * @default null
       */
      draftGrade: number | null;
      /**
       * Id
       * @description Identifier of the student submission.
       * @default null
       */
      id: string | null;
      /**
       * Late
       * @description Whether the submission was turned in late.
       * @default null
       */
      late: boolean | null;
      /**
       * Multiple Choice Submission
       * @description Multiple choice submission details, if any.
       * @default null
       */
      multipleChoiceSubmission: {
          [key: string]: unknown;
      } | null;
      /**
       * Short Answer Submission
       * @description Short answer submission details, if any.
       * @default null
       */
      shortAnswerSubmission: {
          [key: string]: unknown;
      } | null;
      /**
       * State
       * @description State of the submission (e.g., 'CREATED', 'TURNED_IN').
       * @default null
       */
      state: string | null;
      /**
       * Submission History
       * @description History of submission events.
       * @default null
       */
      submissionHistory: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Update Time
       * @description Last update time in RFC3339 UTC format.
       * @default null
       */
      updateTime: string | null;
      /**
       * User Id
       * @description Identifier of the student user.
       * @default null
       */
      userId: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_INVITATIONS_CREATE tool input.
 */
type GOOGLE_CLASSROOM_INVITATIONS_CREATE_INPUT = {
  /**
   * Course Id
   * @description Identifier of the course to invite the user to.
   */
  courseId?: string;
  /**
   * Role
   * @description Role to invite the user as.
   * @enum {string}
   */
  role?: "STUDENT" | "TEACHER";
  /**
   * User Id
   * @description Identifier of the user to invite. Can be the user's numeric ID or email address.
   */
  userId?: string;
};

/**
 * Type of GOOGLE_CLASSROOM's GOOGLE_CLASSROOM_INVITATIONS_CREATE tool output.
 */
type GOOGLE_CLASSROOM_INVITATIONS_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Course Id
       * @description Identifier of the course.
       * @default null
       */
      courseId: string | null;
      /**
       * Id
       * @description Unique identifier for the invitation.
       * @default null
       */
      id: string | null;
      /**
       * Role
       * @description Role the user is invited as.
       * @default null
       * @enum {string|null}
       */
      role: "STUDENT" | "TEACHER" | null;
      /**
       * User Id
       * @description Identifier of the invited user.
       * @default null
       */
      userId: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "GOOGLE_CLASSROOM".
 */
export type GOOGLE_CLASSROOM_TOOL_INPUTS = {
  CLASSROOMS_COURSE_WORK_MATERIALS_LIST: GOOGLE_CLASSROOM_CLASSROOMS_COURSE_WORK_MATERIALS_LIST_INPUT
  COURSES_ANNOUNCEMENTS_CREATE: GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_CREATE_INPUT
  COURSES_ANNOUNCEMENTS_DELETE: GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_DELETE_INPUT
  COURSES_ANNOUNCEMENTS_GET: GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_GET_INPUT
  COURSES_ANNOUNCEMENTS_LIST: GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_LIST_INPUT
  COURSES_ANNOUNCEMENTS_PATCH: GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_PATCH_INPUT
  COURSES_CREATE: GOOGLE_CLASSROOM_COURSES_CREATE_INPUT
  COURSES_DELETE: GOOGLE_CLASSROOM_COURSES_DELETE_INPUT
  COURSES_GET: GOOGLE_CLASSROOM_COURSES_GET_INPUT
  COURSES_LIST: GOOGLE_CLASSROOM_COURSES_LIST_INPUT
  COURSES_PATCH: GOOGLE_CLASSROOM_COURSES_PATCH_INPUT
  COURSES_STUDENTS_GUARDIANS_LIST: GOOGLE_CLASSROOM_COURSES_STUDENTS_GUARDIANS_LIST_INPUT
  COURSES_STUDENTS_LIST: GOOGLE_CLASSROOM_COURSES_STUDENTS_LIST_INPUT
  COURSES_TEACHERS_GET: GOOGLE_CLASSROOM_COURSES_TEACHERS_GET_INPUT
  COURSES_TEACHERS_LIST: GOOGLE_CLASSROOM_COURSES_TEACHERS_LIST_INPUT
  COURSES_TOPICS_CREATE: GOOGLE_CLASSROOM_COURSES_TOPICS_CREATE_INPUT
  COURSES_TOPICS_DELETE: GOOGLE_CLASSROOM_COURSES_TOPICS_DELETE_INPUT
  COURSES_TOPICS_GET: GOOGLE_CLASSROOM_COURSES_TOPICS_GET_INPUT
  COURSES_TOPICS_LIST: GOOGLE_CLASSROOM_COURSES_TOPICS_LIST_INPUT
  COURSES_TOPICS_PATCH: GOOGLE_CLASSROOM_COURSES_TOPICS_PATCH_INPUT
  COURSE_WORK_CREATE: GOOGLE_CLASSROOM_COURSE_WORK_CREATE_INPUT
  COURSE_WORK_DELETE: GOOGLE_CLASSROOM_COURSE_WORK_DELETE_INPUT
  COURSE_WORK_GET: GOOGLE_CLASSROOM_COURSE_WORK_GET_INPUT
  COURSE_WORK_LIST: GOOGLE_CLASSROOM_COURSE_WORK_LIST_INPUT
  COURSE_WORK_MATERIALS_CREATE: GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_CREATE_INPUT
  COURSE_WORK_MATERIALS_GET: GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_GET_INPUT
  COURSE_WORK_MATERIALS_LIST: GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_LIST_INPUT
  COURSE_WORK_PATCH: GOOGLE_CLASSROOM_COURSE_WORK_PATCH_INPUT
  COURSE_WORK_STUDENT_SUBMISSIONS_LIST: GOOGLE_CLASSROOM_COURSE_WORK_STUDENT_SUBMISSIONS_LIST_INPUT
  COURSE_WORK_STUDENT_SUBMISSIONS_RECLAIM: GOOGLE_CLASSROOM_COURSE_WORK_STUDENT_SUBMISSIONS_RECLAIM_INPUT
  INVITATIONS_CREATE: GOOGLE_CLASSROOM_INVITATIONS_CREATE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOOGLE_CLASSROOM".
 */
export type GOOGLE_CLASSROOM_TOOL_OUTPUTS = {
  CLASSROOMS_COURSE_WORK_MATERIALS_LIST: GOOGLE_CLASSROOM_CLASSROOMS_COURSE_WORK_MATERIALS_LIST_OUTPUT
  COURSES_ANNOUNCEMENTS_CREATE: GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_CREATE_OUTPUT
  COURSES_ANNOUNCEMENTS_DELETE: GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_DELETE_OUTPUT
  COURSES_ANNOUNCEMENTS_GET: GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_GET_OUTPUT
  COURSES_ANNOUNCEMENTS_LIST: GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_LIST_OUTPUT
  COURSES_ANNOUNCEMENTS_PATCH: GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_PATCH_OUTPUT
  COURSES_CREATE: GOOGLE_CLASSROOM_COURSES_CREATE_OUTPUT
  COURSES_DELETE: GOOGLE_CLASSROOM_COURSES_DELETE_OUTPUT
  COURSES_GET: GOOGLE_CLASSROOM_COURSES_GET_OUTPUT
  COURSES_LIST: GOOGLE_CLASSROOM_COURSES_LIST_OUTPUT
  COURSES_PATCH: GOOGLE_CLASSROOM_COURSES_PATCH_OUTPUT
  COURSES_STUDENTS_GUARDIANS_LIST: GOOGLE_CLASSROOM_COURSES_STUDENTS_GUARDIANS_LIST_OUTPUT
  COURSES_STUDENTS_LIST: GOOGLE_CLASSROOM_COURSES_STUDENTS_LIST_OUTPUT
  COURSES_TEACHERS_GET: GOOGLE_CLASSROOM_COURSES_TEACHERS_GET_OUTPUT
  COURSES_TEACHERS_LIST: GOOGLE_CLASSROOM_COURSES_TEACHERS_LIST_OUTPUT
  COURSES_TOPICS_CREATE: GOOGLE_CLASSROOM_COURSES_TOPICS_CREATE_OUTPUT
  COURSES_TOPICS_DELETE: GOOGLE_CLASSROOM_COURSES_TOPICS_DELETE_OUTPUT
  COURSES_TOPICS_GET: GOOGLE_CLASSROOM_COURSES_TOPICS_GET_OUTPUT
  COURSES_TOPICS_LIST: GOOGLE_CLASSROOM_COURSES_TOPICS_LIST_OUTPUT
  COURSES_TOPICS_PATCH: GOOGLE_CLASSROOM_COURSES_TOPICS_PATCH_OUTPUT
  COURSE_WORK_CREATE: GOOGLE_CLASSROOM_COURSE_WORK_CREATE_OUTPUT
  COURSE_WORK_DELETE: GOOGLE_CLASSROOM_COURSE_WORK_DELETE_OUTPUT
  COURSE_WORK_GET: GOOGLE_CLASSROOM_COURSE_WORK_GET_OUTPUT
  COURSE_WORK_LIST: GOOGLE_CLASSROOM_COURSE_WORK_LIST_OUTPUT
  COURSE_WORK_MATERIALS_CREATE: GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_CREATE_OUTPUT
  COURSE_WORK_MATERIALS_GET: GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_GET_OUTPUT
  COURSE_WORK_MATERIALS_LIST: GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_LIST_OUTPUT
  COURSE_WORK_PATCH: GOOGLE_CLASSROOM_COURSE_WORK_PATCH_OUTPUT
  COURSE_WORK_STUDENT_SUBMISSIONS_LIST: GOOGLE_CLASSROOM_COURSE_WORK_STUDENT_SUBMISSIONS_LIST_OUTPUT
  COURSE_WORK_STUDENT_SUBMISSIONS_RECLAIM: GOOGLE_CLASSROOM_COURSE_WORK_STUDENT_SUBMISSIONS_RECLAIM_OUTPUT
  INVITATIONS_CREATE: GOOGLE_CLASSROOM_INVITATIONS_CREATE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GOOGLE_CLASSROOM toolkit.
 */
export const GOOGLE_CLASSROOM = {
  slug: "google_classroom",
  tools: {
    /**
     * Tool to list courseworkmaterials in a course. use after confirming a valid courseid; supports pagination and ordering.
     */
    CLASSROOMS_COURSE_WORK_MATERIALS_LIST: "GOOGLE_CLASSROOM_CLASSROOMS_COURSE_WORK_MATERIALS_LIST",
    /**
     * Tool to create an announcement in a course. use after confirming the course id is valid.
     */
    COURSES_ANNOUNCEMENTS_CREATE: "GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_CREATE",
    /**
     * Tool to delete an announcement. use after confirming the announcement id.
     */
    COURSES_ANNOUNCEMENTS_DELETE: "GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_DELETE",
    /**
     * Tool to get an announcement. use when you need to fetch an announcement by course and announcement id.
     */
    COURSES_ANNOUNCEMENTS_GET: "GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_GET",
    /**
     * Tool to list announcements in a course. use after you have the course id to page through announcements.
     */
    COURSES_ANNOUNCEMENTS_LIST: "GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_LIST",
    /**
     * Tool to update fields of an announcement. use when you need to modify specific details of an existing announcement after confirming which fields to update.
     */
    COURSES_ANNOUNCEMENTS_PATCH: "GOOGLE_CLASSROOM_COURSES_ANNOUNCEMENTS_PATCH",
    /**
     * Tool to create a new course. use when a teacher needs to establish a classroom course before enrollment.
     */
    COURSES_CREATE: "GOOGLE_CLASSROOM_COURSES_CREATE",
    /**
     * Tool to delete a course. use when you need to remove a course after confirming the course id.
     */
    COURSES_DELETE: "GOOGLE_CLASSROOM_COURSES_DELETE",
    /**
     * Tool to get details for a specific course. use when you need full course information by id.
     */
    COURSES_GET: "GOOGLE_CLASSROOM_COURSES_GET",
    /**
     * Tool to list all courses accessible to the authenticated user. use when you need a paginated list of courses.
     */
    COURSES_LIST: "GOOGLE_CLASSROOM_COURSES_LIST",
    /**
     * Tool to update one or more fields of a classroom course. use after retrieving course details and confirming fields to update.
     */
    COURSES_PATCH: "GOOGLE_CLASSROOM_COURSES_PATCH",
    /**
     * Tool to list guardians of a student in a course. use when you need to retrieve and paginate guardians for a given student in a course.
     */
    COURSES_STUDENTS_GUARDIANS_LIST: "GOOGLE_CLASSROOM_COURSES_STUDENTS_GUARDIANS_LIST",
    /**
     * Tool to list students in a course. use after you have the course id to page through enrolled students.
     */
    COURSES_STUDENTS_LIST: "GOOGLE_CLASSROOM_COURSES_STUDENTS_LIST",
    /**
     * Tool to get teacher enrollment. use when you need to retrieve a specific teacher in a course by courseid and userid.
     */
    COURSES_TEACHERS_GET: "GOOGLE_CLASSROOM_COURSES_TEACHERS_GET",
    /**
     * Tool to list teachers in a course. use after you have the course id to page through enrolled teachers.
     */
    COURSES_TEACHERS_LIST: "GOOGLE_CLASSROOM_COURSES_TEACHERS_LIST",
    /**
     * Tool to create a course topic. use when you need to organize course content into named sections.
     */
    COURSES_TOPICS_CREATE: "GOOGLE_CLASSROOM_COURSES_TOPICS_CREATE",
    /**
     * Tool to delete a course topic. use when you need to remove a topic from a course after confirming the course and topic ids.
     */
    COURSES_TOPICS_DELETE: "GOOGLE_CLASSROOM_COURSES_TOPICS_DELETE",
    /**
     * Tool to get a course topic. use when you need to retrieve details of a specific course topic by id after confirming the course and topic ids.
     */
    COURSES_TOPICS_GET: "GOOGLE_CLASSROOM_COURSES_TOPICS_GET",
    /**
     * Tool to list topics in a course. use when you have confirmed the courseid and need to retrieve its topics.
     */
    COURSES_TOPICS_LIST: "GOOGLE_CLASSROOM_COURSES_TOPICS_LIST",
    /**
     * Tool to update fields of a course topic. use when you need to rename a topic after confirming its current details.
     */
    COURSES_TOPICS_PATCH: "GOOGLE_CLASSROOM_COURSES_TOPICS_PATCH",
    /**
     * Tool to create a coursework item in a course. use when you need to assign an assignment or question to students immediately or on a schedule.
     */
    COURSE_WORK_CREATE: "GOOGLE_CLASSROOM_COURSE_WORK_CREATE",
    /**
     * Tool to delete a specific coursework. use when you need to remove a coursework item from a course after confirming the ids.
     */
    COURSE_WORK_DELETE: "GOOGLE_CLASSROOM_COURSE_WORK_DELETE",
    /**
     * Tool to get details of a specific coursework. use when detailed information about a particular assignment is needed.
     */
    COURSE_WORK_GET: "GOOGLE_CLASSROOM_COURSE_WORK_GET",
    /**
     * Tool to list coursework in a course. use after verifying courseid.
     */
    COURSE_WORK_LIST: "GOOGLE_CLASSROOM_COURSE_WORK_LIST",
    /**
     * Tool to create course work material. use when adding resources or notes to a course.
     */
    COURSE_WORK_MATERIALS_CREATE: "GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_CREATE",
    /**
     * Tool to get a coursework material. use when you need to retrieve details of a specific coursework material by course and material id.
     */
    COURSE_WORK_MATERIALS_GET: "GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_GET",
    /**
     * Tool to list course work materials in a course. use when you need to retrieve and paginate materials for a given courseid.
     */
    COURSE_WORK_MATERIALS_LIST: "GOOGLE_CLASSROOM_COURSE_WORK_MATERIALS_LIST",
    /**
     * Tool to update fields of a coursework. use when you need to modify specific details of an existing coursework after confirming which fields to update.
     */
    COURSE_WORK_PATCH: "GOOGLE_CLASSROOM_COURSE_WORK_PATCH",
    /**
     * Tool to list student submissions for a specific coursework. use when you need to fetch or paginate student submissions by course and coursework, optionally filtering by user, state, or timeliness.
     */
    COURSE_WORK_STUDENT_SUBMISSIONS_LIST: "GOOGLE_CLASSROOM_COURSE_WORK_STUDENT_SUBMISSIONS_LIST",
    /**
     * Tool to reclaim a student submission for editing. use after a student requests to edit their turned-in submission, resetting its state to created.
     */
    COURSE_WORK_STUDENT_SUBMISSIONS_RECLAIM: "GOOGLE_CLASSROOM_COURSE_WORK_STUDENT_SUBMISSIONS_RECLAIM",
    /**
     * Tool to create an invitation for a user to a course. use after confirming the course id is valid.
     */
    INVITATIONS_CREATE: "GOOGLE_CLASSROOM_INVITATIONS_CREATE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GOOGLE_CLASSROOM".
 */
export type GOOGLE_CLASSROOM_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GOOGLE_CLASSROOM".
 */
export type GOOGLE_CLASSROOM_TRIGGER_EVENTS = {}
