// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of CIRCLECI's CIRCLECI_GET_JOB_ARTIFACTS tool input.
 */
type CIRCLECI_GET_JOB_ARTIFACTS_INPUT = {
  /**
   * Job Number
   * @description The number of the job to list artifacts for.
   */
  job_number?: number;
  /**
   * Project Slug
   * @description The project slug in the form of 'vcs-slug/org-name/repo-name', e.g., 'gh/CircleCI-Public/api-preview-docs'.
   */
  project_slug?: unknown;
};

/**
 * Type of CIRCLECI's CIRCLECI_GET_JOB_ARTIFACTS tool output.
 */
type CIRCLECI_GET_JOB_ARTIFACTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of artifacts produced by the job.
       */
      items: {
          /**
           * Node Index
           * @description Index of the parallel run where the artifact was generated (0-based).
           */
          node_index: number;
          /**
           * Path
           * @description Relative path to the artifact inside the storage bucket or workspace. Use this to locate the file within the job’s outputs.
           */
          path: string;
          /**
           * Url
           * @description Direct URL to download the artifact.
           */
          url: string;
      }[];
      /**
       * Next Page Token
       * @description Opaque token to fetch the next page of artifacts if more results exist. Omitted when there are no further pages.
       * @default null
       */
      next_page_token: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CIRCLECI's CIRCLECI_GET_JOB_DETAILS tool input.
 */
type CIRCLECI_GET_JOB_DETAILS_INPUT = {
  /**
   * Job Number
   * @description The number of the job to fetch details for.
   */
  job_number?: number;
  /**
   * Project Slug
   * @description The project slug in the form 'vcs-slug/org-name/repo-name', e.g., 'gh/CircleCI-Public/api-preview-docs'.
   */
  project_slug?: unknown;
};

/**
 * Type of CIRCLECI's CIRCLECI_GET_JOB_DETAILS tool output.
 */
type CIRCLECI_GET_JOB_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Duration
       * @description Duration of the job in seconds.
       * @default null
       */
      duration: number | null;
      /**
       * Executor
       * @description Executor details for the job.
       * @default null
       */
      executor: {
          [key: string]: unknown;
      } | null;
      /**
       * Id
       * @description The job's unique ID.
       */
      id: string;
      /**
       * Name
       * @description The job's name.
       */
      name: string;
      /**
       * Project Slug
       * @description The project slug.
       */
      project_slug: string;
      /**
       * Started At
       * @description Job start time in ISO 8601 format.
       * @default null
       */
      started_at: string | null;
      /**
       * Status
       * @description The job's status.
       */
      status: string;
      /**
       * Steps
       * @description List of step objects for the job.
       * @default null
       */
      steps: {
          [key: string]: unknown;
      }[] | null;
      /**
       * Stopped At
       * @description Job stop time in ISO 8601 format.
       * @default null
       */
      stopped_at: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CIRCLECI's CIRCLECI_GET_PIPELINE_CONFIG tool input.
 */
type CIRCLECI_GET_PIPELINE_CONFIG_INPUT = {
  /**
   * Pipeline Id
   * @description The unique ID of the pipeline to fetch configuration for.
   */
  pipeline_id?: string;
};

/**
 * Type of CIRCLECI's CIRCLECI_GET_PIPELINE_CONFIG tool output.
 */
type CIRCLECI_GET_PIPELINE_CONFIG_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Compiled
       * @description The compiled pipeline configuration as YAML.
       */
      compiled: string;
      /**
       * Created At
       * @description Timestamp when the configuration was created (ISO 8601 format).
       */
      created_at: string;
      /**
       * Errors
       * @description List of errors associated with the pipeline configuration.
       */
      errors: {
          /**
           * Message
           * @description Error message explaining the issue.
           */
          message: string;
          /**
           * Type
           * @description Type of the error.
           */
          type: string;
      }[];
      /**
       * Id
       * @description The ID of the pipeline configuration.
       */
      id: string;
      /**
       * Source
       * @description The original pipeline configuration as YAML.
       */
      source: string;
      /**
       * Updated At
       * @description Timestamp when the configuration was last updated (ISO 8601 format).
       */
      updated_at: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CIRCLECI's CIRCLECI_GET_TEST_METADATA tool input.
 */
type CIRCLECI_GET_TEST_METADATA_INPUT = {
  /**
   * Job Number
   * @description The number of the job to fetch test metadata for.
   */
  job_number?: number;
  /**
   * Limit
   * @description Maximum number of test results to return. Defaults to 30.
   * @default null
   */
  limit: number | null;
  /**
   * Page Token
   * @description A token to retrieve the next page of results.
   * @default null
   */
  "page-token": string | null;
  /**
   * Project Slug
   * @description The project slug in the form 'vcs-slug/org-name/repo-name', e.g., 'gh/CircleCI-Public/circleci-cli'.
   */
  project_slug?: unknown;
};

/**
 * Type of CIRCLECI's CIRCLECI_GET_TEST_METADATA tool output.
 */
type CIRCLECI_GET_TEST_METADATA_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of test metadata objects for the job.
       */
      items: {
          /**
           * Classname
           * @description Class name of the test.
           */
          classname: string;
          /**
           * Message
           * @description Exception message if the test failed.
           * @default null
           */
          message: string | null;
          /**
           * Name
           * @description Name of the test.
           */
          name: string;
          /**
           * Result
           * @description Result of the test (e.g., success, failure, skipped).
           */
          result: string;
          /**
           * Run Time
           * @description Runtime of the test in seconds.
           */
          run_time: number;
          /**
           * Source
           * @description Source location of the test, if available.
           * @default null
           */
          source: string | null;
      }[];
      /**
       * Next Page Token
       * @description Token for the next page of results, if any.
       * @default null
       */
      next_page_token: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CIRCLECI's CIRCLECI_GET_USER_INFORMATION tool input.
 */
type CIRCLECI_GET_USER_INFORMATION_INPUT = {
  /**
   * User Id
   * @description The unique ID of the user.
   */
  user_id?: string;
};

/**
 * Type of CIRCLECI's CIRCLECI_GET_USER_INFORMATION tool output.
 */
type CIRCLECI_GET_USER_INFORMATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar Url
       * @description URL to the user's avatar image.
       */
      avatar_url: string;
      /**
       * Bitbucket Id
       * @description The Bitbucket ID of the user, if available.
       * @default null
       */
      bitbucket_id: number | null;
      /**
       * Bitbucket Oauth Scopes
       * @description List of OAuth scopes granted on Bitbucket.
       */
      bitbucket_oauth_scopes: string[];
      /**
       * Github Id
       * @description The GitHub ID of the user, if available.
       * @default null
       */
      github_id: number | null;
      /**
       * Github Oauth Scopes
       * @description List of OAuth scopes granted on GitHub.
       */
      github_oauth_scopes: string[];
      /**
       * Gravatar Id
       * @description The user's Gravatar ID, if set.
       * @default null
       */
      gravatar_id: string | null;
      /**
       * Id
       * @description The unique ID of the user.
       */
      id: string;
      /**
       * Login
       * @description The login/username of the user.
       */
      login: string;
      /**
       * Name
       * @description The full name of the user.
       */
      name: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CIRCLECI's CIRCLECI_LIST_PIPELINES_FOR_PROJECT tool input.
 */
type CIRCLECI_LIST_PIPELINES_FOR_PROJECT_INPUT = {
  /**
   * Branch
   * @description Only return pipelines on this branch.
   * @default null
   */
  branch: string | null;
  /**
   * Mine
   * @description Only return pipelines triggered by the current user if true.
   * @default null
   */
  mine: boolean | null;
  /**
   * Page Token
   * @description A token to retrieve the next page of results.
   * @default null
   */
  "page-token": string | null;
  /**
   * Project Slug
   * @description The project slug in the form `vcs-slug/org-name/repo-name` (e.g., `github/CircleCI-Public/circleci-cli`).
   */
  project_slug?: string;
};

/**
 * Type of CIRCLECI's CIRCLECI_LIST_PIPELINES_FOR_PROJECT tool output.
 */
type CIRCLECI_LIST_PIPELINES_FOR_PROJECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of pipelines for the project.
       */
      items: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the pipeline was created.
           */
          created_at: string;
          /**
           * Errors
           * @description List of errors encountered during pipeline creation, if any.
           */
          errors?: {
              /**
               * Message
               * @description Detailed error message.
               */
              message: string;
              /**
               * Type
               * @description Error type/category.
               */
              type: string;
          }[];
          /**
           * Id
           * @description Unique ID of the pipeline.
           */
          id: string;
          /**
           * Number
           * @description Sequential pipeline number for this project.
           */
          number: number;
          /**
           * Project Slug
           * @description Project slug for this pipeline.
           */
          project_slug: string;
          /**
           * State
           * @description Current state of the pipeline.
           */
          state: string;
          /**
           * Trigger
           * @description Trigger details for the pipeline.
           */
          trigger: {
              /**
               * Actor
               * @description Actor details for the trigger.
               */
              actor: {
                  /**
                   * Avatar Url
                   * @description URL of the actor's avatar image.
                   * @default null
                   */
                  avatar_url: string | null;
                  /**
                   * Login
                   * @description Username of the actor.
                   */
                  login: string;
              };
              /**
               * Received At
               * @description ISO 8601 timestamp when the trigger was received.
               * @default null
               */
              received_at: string | null;
              /**
               * Type
               * @description Type of the trigger.
               */
              type: string;
          };
          /**
           * Updated At
           * @description ISO 8601 timestamp when the pipeline was last updated.
           */
          updated_at: string;
          /**
           * Vcs
           * @description Version control details of the pipeline run.
           */
          vcs: {
              /**
               * Branch
               * @description Branch name for this pipeline.
               * @default null
               */
              branch: string | null;
              /**
               * PipelineCommit
               * @description Commit information for the pipeline.
               * @default null
               */
              commit: {
                  /**
                   * Author
                   * @description Author details of the commit.
                   */
                  author: {
                      /**
                       * Date
                       * @description ISO 8601 date of the commit.
                       */
                      date: string;
                      /**
                       * Email
                       * @description Email address of the commit author.
                       */
                      email: string;
                      /**
                       * Name
                       * @description Name of the commit author.
                       */
                      name: string;
                  };
                  /**
                   * Body
                   * @description Full commit message body.
                   * @default null
                   */
                  body: string | null;
                  /**
                   * Subject
                   * @description Subject line of the commit.
                   */
                  subject: string;
              } | null;
              /**
               * Origin Repository Url
               * @description URL of the origin repository, if different.
               * @default null
               */
              origin_repository_url: string | null;
              /**
               * Provider Name
               * @description Name of the VCS provider.
               */
              provider_name: string;
              /**
               * Revision
               * @description Revision (SHA) of the VCS.
               */
              revision: string;
              /**
               * Tag
               * @description Tag name if applicable.
               * @default null
               */
              tag: string | null;
              /**
               * Target Repository Url
               * @description URL of the target repository.
               */
              target_repository_url: string;
          };
      }[];
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results, if any.
       * @default null
       */
      next_page_token: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CIRCLECI's CIRCLECI_LIST_SELF_HOSTED_RUNNERS tool input.
 */
type CIRCLECI_LIST_SELF_HOSTED_RUNNERS_INPUT = object;

/**
 * Type of CIRCLECI's CIRCLECI_LIST_SELF_HOSTED_RUNNERS tool output.
 */
type CIRCLECI_LIST_SELF_HOSTED_RUNNERS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Runners
       * @description Array of self-hosted runner objects
       */
      runners: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the runner was created
           */
          created_at: string;
          /**
           * Id
           * @description Unique identifier for the runner
           */
          id: string;
          /**
           * Last Seen At
           * @description Timestamp of last activity
           */
          last_seen_at: string;
          /**
           * Name
           * @description Name of the runner
           */
          name: string;
          /**
           * Resource Class
           * @description Resource class assigned to this runner, e.g., 'medium', 'xlarge'
           */
          resource_class: string;
          /**
           * Status
           * @description Current status of the runner (e.g., online, offline)
           */
          status: string;
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
 * Type of CIRCLECI's CIRCLECI_LIST_WORKFLOWS_BY_PIPELINE_ID tool input.
 */
type CIRCLECI_LIST_WORKFLOWS_BY_PIPELINE_ID_INPUT = {
  /**
   * Limit
   * @description Maximum number of workflows to return. Default is 20, maximum is 100.
   * @default null
   */
  limit: number | null;
  /**
   * Page Token
   * @description Token to retrieve the next page of results (for pagination).
   * @default null
   */
  "page-token": string | null;
  /**
   * Pipeline Id
   * @description The unique identifier of the pipeline.
   */
  pipeline_id?: string;
};

/**
 * Type of CIRCLECI's CIRCLECI_LIST_WORKFLOWS_BY_PIPELINE_ID tool output.
 */
type CIRCLECI_LIST_WORKFLOWS_BY_PIPELINE_ID_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of workflow objects.
       */
      items: {
          /**
           * Created At
           * @description ISO 8601 timestamp when the workflow was created.
           */
          created_at: string;
          /**
           * Id
           * @description Unique ID of the workflow.
           */
          id: string;
          /**
           * Name
           * @description Name of the workflow.
           */
          name: string;
          /**
           * Pipeline Id
           * @description The ID of the associated pipeline.
           */
          pipeline_id: string;
          /**
           * Pipeline Number
           * @description Sequential number of the pipeline.
           */
          pipeline_number: number;
          /**
           * Project Slug
           * @description Project slug in form 'vcs-slug/org-name/repo-name'.
           */
          project_slug: string;
          /**
           * Started By
           * @description Username who triggered the workflow.
           */
          started_by: string;
          /**
           * Status
           * @description Current status of the workflow.
           */
          status: string;
          /**
           * Stopped At
           * @description ISO 8601 timestamp when the workflow stopped, or null if still running.
           * @default null
           */
          stopped_at: string | null;
      }[];
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results, if any.
       * @default null
       */
      next_page_token: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of CIRCLECI's CIRCLECI_TRIGGER_PIPELINE tool input.
 */
type CIRCLECI_TRIGGER_PIPELINE_INPUT = {
  /**
   * Branch
   * @description The branch to run the pipeline on.
   * @default null
   */
  branch: string | null;
  /**
   * Parameters
   * @description Pipeline parameters as key/value pairs.
   * @default null
   */
  parameters: {
      [key: string]: unknown;
  } | null;
  /**
   * Project Slug
   * @description Project identifier in the form 'vcs-slug/org-name/repo-name'.
   */
  project_slug?: string;
  /**
   * Tag
   * @description The tag to run the pipeline on.
   * @default null
   */
  tag: string | null;
};

/**
 * Type of CIRCLECI's CIRCLECI_TRIGGER_PIPELINE tool output.
 */
type CIRCLECI_TRIGGER_PIPELINE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Created At
       * @description ISO 8601 timestamp when the pipeline was created.
       */
      created_at: string;
      /**
       * Errors
       * @description List of errors associated with the pipeline, if any.
       */
      errors?: {
          /**
           * Message
           * @description Detailed error message.
           */
          message: string;
          /**
           * Type
           * @description Error type/category.
           */
          type: string;
      }[];
      /**
       * Id
       * @description Unique identifier of the triggered pipeline.
       */
      id: string;
      /**
       * Number
       * @description Sequential number of the pipeline.
       */
      number: number;
      /**
       * State
       * @description Current state of the pipeline.
       */
      state: string;
      /**
       * Trigger
       * @description Trigger information for the pipeline.
       */
      trigger: {
          /**
           * Actor
           * @description Actor details for the trigger.
           */
          actor: {
              /**
               * Avatar Url
               * @description URL of the actor's avatar image.
               * @default null
               */
              avatar_url: string | null;
              /**
               * Login
               * @description Username of the actor.
               */
              login: string;
          };
          /**
           * Received At
           * @description ISO 8601 timestamp when the trigger was received.
           */
          received_at: string;
          /**
           * Type
           * @description Type of trigger.
           */
          type: string;
      };
      /**
       * Vcs
       * @description Version control details of the pipeline run.
       */
      vcs: {
          /**
           * Branch
           * @description Branch name for the pipeline.
           * @default null
           */
          branch: string | null;
          /**
           * Commit
           * @description Commit details for this pipeline.
           */
          commit: {
              /**
               * Author
               * @description Author details of the commit.
               */
              author: {
                  /**
                   * Date
                   * @description ISO 8601 date of the commit.
                   */
                  date: string;
                  /**
                   * Email
                   * @description Email address of the commit author.
                   */
                  email: string;
                  /**
                   * Name
                   * @description Name of the commit author.
                   */
                  name: string;
              };
              /**
               * Body
               * @description Full commit message body.
               * @default null
               */
              body: string | null;
              /**
               * Subject
               * @description Subject line of the commit.
               */
              subject: string;
          };
          /**
           * Provider Name
           * @description Name of the VCS provider.
           */
          provider_name: string;
          /**
           * Review Id
           * @description Review ID if applicable.
           * @default null
           */
          review_id: string | null;
          /**
           * Review Url
           * @description Review URL if applicable.
           * @default null
           */
          review_url: string | null;
          /**
           * Revision
           * @description Revision (SHA) of the VCS.
           */
          revision: string;
          /**
           * Tag
           * @description Tag name if applicable.
           * @default null
           */
          tag: string | null;
          /**
           * Target Repository Url
           * @description URL of the repository.
           */
          target_repository_url: string;
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
 * Type map of all available tool input types for toolkit "CIRCLECI".
 */
export type CIRCLECI_TOOL_INPUTS = {
  GET_JOB_ARTIFACTS: CIRCLECI_GET_JOB_ARTIFACTS_INPUT
  GET_JOB_DETAILS: CIRCLECI_GET_JOB_DETAILS_INPUT
  GET_PIPELINE_CONFIG: CIRCLECI_GET_PIPELINE_CONFIG_INPUT
  GET_TEST_METADATA: CIRCLECI_GET_TEST_METADATA_INPUT
  GET_USER_INFORMATION: CIRCLECI_GET_USER_INFORMATION_INPUT
  LIST_PIPELINES_FOR_PROJECT: CIRCLECI_LIST_PIPELINES_FOR_PROJECT_INPUT
  LIST_SELF_HOSTED_RUNNERS: CIRCLECI_LIST_SELF_HOSTED_RUNNERS_INPUT
  LIST_WORKFLOWS_BY_PIPELINE_ID: CIRCLECI_LIST_WORKFLOWS_BY_PIPELINE_ID_INPUT
  TRIGGER_PIPELINE: CIRCLECI_TRIGGER_PIPELINE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "CIRCLECI".
 */
export type CIRCLECI_TOOL_OUTPUTS = {
  GET_JOB_ARTIFACTS: CIRCLECI_GET_JOB_ARTIFACTS_OUTPUT
  GET_JOB_DETAILS: CIRCLECI_GET_JOB_DETAILS_OUTPUT
  GET_PIPELINE_CONFIG: CIRCLECI_GET_PIPELINE_CONFIG_OUTPUT
  GET_TEST_METADATA: CIRCLECI_GET_TEST_METADATA_OUTPUT
  GET_USER_INFORMATION: CIRCLECI_GET_USER_INFORMATION_OUTPUT
  LIST_PIPELINES_FOR_PROJECT: CIRCLECI_LIST_PIPELINES_FOR_PROJECT_OUTPUT
  LIST_SELF_HOSTED_RUNNERS: CIRCLECI_LIST_SELF_HOSTED_RUNNERS_OUTPUT
  LIST_WORKFLOWS_BY_PIPELINE_ID: CIRCLECI_LIST_WORKFLOWS_BY_PIPELINE_ID_OUTPUT
  TRIGGER_PIPELINE: CIRCLECI_TRIGGER_PIPELINE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's CIRCLECI toolkit.
 */
export const CIRCLECI = {
  slug: "circleci",
  tools: {
    /**
     * Tool to retrieve artifacts produced by a specific job. use after a job has completed to list its output files.
     */
    GET_JOB_ARTIFACTS: "CIRCLECI_GET_JOB_ARTIFACTS",
    /**
     * Tool to fetch details of a specific job within a project. use when you need status, timing, and executor information for a circleci job by its number.
     */
    GET_JOB_DETAILS: "CIRCLECI_GET_JOB_DETAILS",
    /**
     * Tool to fetch pipeline configuration by id. use when you need the source or compiled yaml of a specific pipeline.
     */
    GET_PIPELINE_CONFIG: "CIRCLECI_GET_PIPELINE_CONFIG",
    /**
     * Tool to fetch test metadata for a specific job. use when you need detailed test results, run times, and failure messages after a job completes.
     */
    GET_TEST_METADATA: "CIRCLECI_GET_TEST_METADATA",
    /**
     * Tool to retrieve information about a circleci user by their unique id. use when you need user profile details after obtaining the user id.
     */
    GET_USER_INFORMATION: "CIRCLECI_GET_USER_INFORMATION",
    /**
     * Tool to list all pipelines for a specific project. use when you need to retrieve the pipelines for a project (e.g., to display recent runs on a dashboard).
     */
    LIST_PIPELINES_FOR_PROJECT: "CIRCLECI_LIST_PIPELINES_FOR_PROJECT",
    /**
     * Tool to list available self-hosted runners. use when you need to retrieve all configured self-hosted runners for your organization.
     */
    LIST_SELF_HOSTED_RUNNERS: "CIRCLECI_LIST_SELF_HOSTED_RUNNERS",
    /**
     * Tool to list all workflows associated with a specific pipeline. use when you need to fetch or paginate through workflows by pipeline id.
     */
    LIST_WORKFLOWS_BY_PIPELINE_ID: "CIRCLECI_LIST_WORKFLOWS_BY_PIPELINE_ID",
    /**
     * Tool to trigger a new pipeline for the specified project. use when you need to start a build on a branch or tag programmatically.
     */
    TRIGGER_PIPELINE: "CIRCLECI_TRIGGER_PIPELINE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "CIRCLECI".
 */
export type CIRCLECI_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "CIRCLECI".
 */
export type CIRCLECI_TRIGGER_EVENTS = {}
