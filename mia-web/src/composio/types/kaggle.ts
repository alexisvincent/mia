// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of KAGGLE's KAGGLE_COMPETITION_DOWNLOAD_FILES tool input.
 */
type KAGGLE_COMPETITION_DOWNLOAD_FILES_INPUT = {
  /**
   * Force
   * @description If true, skip up-to-date checks and force re-download.
   * @default false
   */
  force: boolean;
  /**
   * Id
   * @description Competition name (URL slug).
   */
  id?: string;
  /**
   * Path
   * @description Destination folder where files will be saved; defaults to current working directory.
   * @default null
   */
  path: string | null;
  /**
   * Quiet
   * @description If true, suppress progress output.
   * @default false
   */
  quiet: boolean;
};

/**
 * Type of KAGGLE's KAGGLE_COMPETITION_DOWNLOAD_FILES tool output.
 */
type KAGGLE_COMPETITION_DOWNLOAD_FILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Path
       * @description Local path to the downloaded zip file containing competition data.
       */
      file_path: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KAGGLE's KAGGLE_CONFIG_INIT tool input.
 */
type KAGGLE_CONFIG_INIT_INPUT = object;

/**
 * Type of KAGGLE's KAGGLE_CONFIG_INIT tool output.
 */
type KAGGLE_CONFIG_INIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Output
       * @description Result message from the initialization step.
       */
      output: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KAGGLE's KAGGLE_DATASET_CREATE tool input.
 */
type KAGGLE_DATASET_CREATE_INPUT = {
  /**
   * Description
   * @description Full Markdown-formatted description.
   * @default null
   */
  description: string | null;
  /**
   * Files
   * @description References to files already uploaded via the Kaggle REST API.
   * @default null
   */
  files: {
      /**
       * Name
       * @description Name of a file previously uploaded via the Kaggle API.
       */
      name: string;
  }[] | null;
  /**
   * Id
   * @description Dataset identifier in the form '<owner>/<dataset-slug>'.
   */
  id?: string;
  /**
   * Keywords
   * @description Tags to improve discovery.
   * @default null
   */
  keywords: string[] | null;
  /**
   * Licenses
   * @description Provide exactly one license entry.
   */
  licenses?: {
      /**
       * Name
       * @description License identifier, e.g. 'CC0-1.0'. Exactly one license required.
       */
      name: string;
  }[];
  /**
   * Resources
   * @description List of resource entries defined via metadata.
   * @default null
   */
  resources: {
      /**
       * Description
       * @description Optional human-readable description for this resource.
       * @default null
       */
      description: string | null;
      /**
       * Path
       * @description Relative file path within the dataset.
       */
      path: string;
      /**
       * Schema
       * @description Optional JSON schema for tabular data.
       * @default null
       */
      schema: {
          [key: string]: unknown;
      } | null;
  }[] | null;
  /**
   * Subtitle
   * @description Brief subtitle for the dataset card.
   * @default null
   */
  subtitle: string | null;
  /**
   * Title
   * @description Dataset title shown on Kaggle.
   */
  title?: string;
};

/**
 * Type of KAGGLE's KAGGLE_DATASET_CREATE tool output.
 */
type KAGGLE_DATASET_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Human-readable message returned by the API.
       * @default null
       */
      message: string | null;
      /**
       * Status
       * @description API status, e.g. 'OK' or 'Error'.
       */
      status: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KAGGLE's KAGGLE_DATASET_STATUS tool input.
 */
type KAGGLE_DATASET_STATUS_INPUT = {
  /**
   * Dataset Slug
   * @description Slug (name) of the dataset.
   */
  dataset_slug?: string;
  /**
   * Owner Slug
   * @description Owner of the dataset (username or organization).
   */
  owner_slug?: string;
};

/**
 * Type of KAGGLE's KAGGLE_DATASET_STATUS tool output.
 */
type KAGGLE_DATASET_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Raw JSON response from the Kaggle datasets/status endpoint.
       */
      result: {
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
 * Type of KAGGLE's KAGGLE_DATASET_VERSION tool input.
 */
type KAGGLE_DATASET_VERSION_INPUT = {
  /**
   * Category Ids
   * @description Optional list of category IDs to tag the dataset with
   * @default null
   */
  category_ids: string[] | null;
  /**
   * Convert To Csv
   * @description Whether to convert tabular data to CSV
   * @default true
   */
  convert_to_csv: boolean | null;
  /**
   * Dataset Slug
   * @description Slug of the dataset to version
   */
  dataset_slug?: string;
  /**
   * Delete Old Versions
   * @description Whether to delete all previous versions when creating this new one
   * @default false
   */
  delete_old_versions: boolean | null;
  /**
   * Description
   * @description Optional new description for the dataset
   * @default null
   */
  description: string | null;
  /**
   * Files
   * @description List of files to include in this version; each must reference an upload token
   */
  files?: {
      /**
       * Columns
       * @description Column metadata for tabular files
       * @default null
       */
      columns: {
          /**
           * Description
           * @description Column description
           * @default null
           */
          description: string | null;
          /**
           * Name
           * @description Column name
           * @default null
           */
          name: string | null;
          /**
           * Order
           * @description 0-based order of the column
           * @default null
           */
          order: number | null;
          /**
           * Original Type
           * @description Original type before conversion
           * @default null
           */
          original_type: string | null;
          /**
           * Type
           * @description Kaggle column type
           * @default null
           */
          type: string | null;
      }[] | null;
      /**
       * Description
       * @description File description
       * @default null
       */
      description: string | null;
      /**
       * Token
       * @description Token referencing a specific file upload
       * @default null
       */
      token: string | null;
  }[];
  /**
   * Owner Slug
   * @description Slug of the dataset owner (username or organization)
   */
  owner_slug?: string;
  /**
   * Subtitle
   * @description Optional new subtitle for the dataset
   * @default null
   */
  subtitle: string | null;
  /**
   * Version Notes
   * @description Notes describing changes in the new dataset version
   */
  version_notes?: string;
};

/**
 * Type of KAGGLE's KAGGLE_DATASET_VERSION tool output.
 */
type KAGGLE_DATASET_VERSION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Result
       * @description Result object returned by Kaggle after version creation
       */
      result: {
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
 * Type of KAGGLE's KAGGLE_KAGGLE_COMPETITION_SUBMIT tool input.
 */
type KAGGLE_KAGGLE_COMPETITION_SUBMIT_INPUT = {
  /**
   * Blob File Tokens
   * @description Token returned by the file upload step identifying your submission file
   */
  blob_file_tokens?: string;
  /**
   * Competition
   * @description Competition slug (URL name), e.g. 'titanic'
   */
  competition?: string;
  /**
   * Submission Description
   * @description A short message or description for this submission
   */
  submission_description?: string;
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_COMPETITION_SUBMIT tool output.
 */
type KAGGLE_KAGGLE_COMPETITION_SUBMIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Code
       * @description Result code returned by the server, e.g. 200
       */
      code: number;
      /**
       * Message
       * @description Result message returned by the server
       */
      message: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_CONFIG_DIR tool input.
 */
type KAGGLE_KAGGLE_CONFIG_DIR_INPUT = {
  /**
   * Override Kaggle Config Dir
   * @description Override directory to use as Kaggle config directory
   * @default null
   */
  override_kaggle_config_dir: string | null;
  /**
   * Platform Hint
   * @description Force platform branch: 'windows' or 'posix'. If not set, auto-detect.
   * @default null
   */
  platform_hint: string | null;
  /**
   * Prefer Xdg
   * @description Prefer XDG config home path on POSIX
   * @default false
   */
  prefer_xdg: boolean | null;
  /**
   * Use Fallback Only
   * @description Skip CLI, compute directory using environment/platform defaults.
   * @default false
   */
  use_fallback_only: boolean | null;
  /**
   * Xdg Config Home Override
   * @description Override XDG_CONFIG_HOME base directory for fallback computation.
   * @default null
   */
  xdg_config_home_override: string | null;
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_CONFIG_DIR tool output.
 */
type KAGGLE_KAGGLE_CONFIG_DIR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Config Dir
       * @description Path to the Kaggle API configuration directory where kaggle.json is stored.
       */
      config_dir: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_CONFIG_FILE tool input.
 */
type KAGGLE_KAGGLE_CONFIG_FILE_INPUT = object;

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_CONFIG_FILE tool output.
 */
type KAGGLE_KAGGLE_CONFIG_FILE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Name
       * @description Full filesystem path to the Kaggle API configuration file.
       */
      fileName: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_CONFIG_KEYS tool input.
 */
type KAGGLE_KAGGLE_CONFIG_KEYS_INPUT = object;

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_CONFIG_KEYS tool output.
 */
type KAGGLE_KAGGLE_CONFIG_KEYS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Keys
       * @description List of configuration keys present in the local Kaggle config
       */
      keys: string[];
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_CONFIG_PATH tool input.
 */
type KAGGLE_KAGGLE_CONFIG_PATH_INPUT = {
  /**
   * Override Kaggle Config Dir
   * @description Override directory to use for kaggle.json
   * @default null
   */
  override_kaggle_config_dir: string | null;
  /**
   * Platform Hint
   * @description Force platform branch: 'windows' or 'posix'. If not set, auto-detect.
   * @default null
   */
  platform_hint: string | null;
  /**
   * Prefer Xdg
   * @description Prefer XDG config home path on POSIX
   * @default false
   */
  prefer_xdg: boolean | null;
  /**
   * Use Fallback Only
   * @description Skip CLI, compute path using environment/platform defaults.
   * @default false
   */
  use_fallback_only: boolean | null;
  /**
   * Xdg Config Home Override
   * @description Override XDG_CONFIG_HOME base directory for fallback computation.
   * @default null
   */
  xdg_config_home_override: string | null;
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_CONFIG_PATH tool output.
 */
type KAGGLE_KAGGLE_CONFIG_PATH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Config Path
       * @description Absolute path to the Kaggle API configuration file
       */
      config_path: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_CONFIG_RESET tool input.
 */
type KAGGLE_KAGGLE_CONFIG_RESET_INPUT = object;

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_CONFIG_RESET tool output.
 */
type KAGGLE_KAGGLE_CONFIG_RESET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Message returned by Kaggle CLI after reset operation
       */
      message: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_CONFIG_SET tool input.
 */
type KAGGLE_KAGGLE_CONFIG_SET_INPUT = {
  /**
   * Name
   * @description Configuration parameter to set. Must be one of 'competition', 'path', or 'proxy'.
   * @enum {string}
   */
  name?: "competition" | "path" | "proxy";
  /**
   * Value
   * @description Value to assign to the configuration parameter.
   */
  value?: string;
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_CONFIG_SET tool output.
 */
type KAGGLE_KAGGLE_CONFIG_SET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Name
       * @description Name of the configuration parameter set.
       */
      name: string;
      /**
       * Value
       * @description Value assigned to the configuration parameter.
       */
      value: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_CONFIG_UNSET tool input.
 */
type KAGGLE_KAGGLE_CONFIG_UNSET_INPUT = {
  /**
   * Name
   * @description Configuration parameter to unset. Must be one of 'competition', 'path', or 'proxy'.
   * @enum {string}
   */
  name?: "competition" | "path" | "proxy";
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_CONFIG_UNSET tool output.
 */
type KAGGLE_KAGGLE_CONFIG_UNSET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Name
       * @description Name of the configuration parameter unset.
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
 * Type of KAGGLE's KAGGLE_KAGGLE_CONFIG_VIEW tool input.
 */
type KAGGLE_KAGGLE_CONFIG_VIEW_INPUT = object;

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_CONFIG_VIEW tool output.
 */
type KAGGLE_KAGGLE_CONFIG_VIEW_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Key
       * @description Kaggle API key from local config
       */
      key: string;
      /**
       * Proxy
       * @description Proxy setting from local config, if configured
       * @default null
       */
      proxy: string | null;
      /**
       * Username
       * @description Kaggle username from local config
       */
      username: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_DATASET_INIT tool input.
 */
type KAGGLE_KAGGLE_DATASET_INIT_INPUT = {
  /**
   * Path
   * @description Folder path to initialize dataset-metadata.json; defaults to current working directory.
   * @default .
   */
  path: string;
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_DATASET_INIT tool output.
 */
type KAGGLE_KAGGLE_DATASET_INIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Metadata Path
       * @description Path to the created dataset-metadata.json file.
       */
      metadata_path: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_DATASET_LIST_FILES tool input.
 */
type KAGGLE_KAGGLE_DATASET_LIST_FILES_INPUT = {
  /**
   * Dataset Slug
   * @description Slug (name) of the dataset.
   */
  dataset_slug?: string;
  /**
   * Dataset Version Number
   * @description Specific dataset version number, e.g., '1'.
   * @default null
   */
  dataset_version_number: string | null;
  /**
   * Owner Slug
   * @description Owner of the dataset (username or organization).
   */
  owner_slug?: string;
  /**
   * Page Size
   * @description Number of items per page (default 20).
   * @default 20
   */
  page_size: number | null;
  /**
   * Page Token
   * @description Token for pagination of results.
   * @default null
   */
  page_token: string | null;
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_DATASET_LIST_FILES tool output.
 */
type KAGGLE_KAGGLE_DATASET_LIST_FILES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Files
       * @description List of files in the dataset.
       */
      files: {
          /**
           * Creation Date
           * @description ISO 8601 date when the file was created.
           * @default null
           */
          creationDate: string | null;
          /**
           * Name
           * @description Name of the file in the dataset.
           */
          name: string;
          /**
           * Size
           * @description Size of the file in bytes.
           * @default null
           */
          size: number | null;
      }[];
      /**
       * Next Page Token
       * @description Token for retrieving the next page of results.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Total Bytes
       * @description Total bytes across all files in the dataset.
       * @default null
       */
      totalBytes: number | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_KERNEL_INIT tool input.
 */
type KAGGLE_KAGGLE_KERNEL_INIT_INPUT = {
  /**
   * Path
   * @description Folder path to initialize kernel-metadata.json; defaults to current working directory.
   * @default .
   */
  path: string;
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_KERNEL_INIT tool output.
 */
type KAGGLE_KAGGLE_KERNEL_INIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Metadata Path
       * @description Path to the created kernel-metadata.json file.
       */
      metadata_path: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_KERNEL_OUTPUT tool input.
 */
type KAGGLE_KAGGLE_KERNEL_OUTPUT_INPUT = {
  /**
   * Force
   * @description If true, force re-download even if file exists.
   * @default false
   */
  force: boolean;
  /**
   * Kernel Slug
   * @description Slug name of the kernel.
   */
  kernel_slug?: string;
  /**
   * Path
   * @description Directory to download output to; defaults to current working directory.
   * @default null
   */
  path: string | null;
  /**
   * User Name
   * @description Owner of the kernel.
   */
  user_name?: string;
};

/**
 * Type of KAGGLE's KAGGLE_KAGGLE_KERNEL_OUTPUT tool output.
 */
type KAGGLE_KAGGLE_KERNEL_OUTPUT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * File Path
       * @description Local path to the downloaded kernel output archive.
       */
      file_path: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KAGGLE's KAGGLE_KERNELS_STATUS tool input.
 */
type KAGGLE_KERNELS_STATUS_INPUT = {
  /**
   * Kernel Slug
   * @description Slug of the kernel run
   */
  kernelSlug?: string;
  /**
   * User Name
   * @description Username of the kernel owner
   */
  userName?: string;
};

/**
 * Type of KAGGLE's KAGGLE_KERNELS_STATUS tool output.
 */
type KAGGLE_KERNELS_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Error Message
       * @description Error message if the kernel run failed
       * @default null
       */
      errorMessage: string | null;
      /**
       * Finished At
       * @description ISO timestamp when the kernel run finished
       * @default null
       */
      finishedAt: string | null;
      /**
       * Output Url
       * @description URL to download the kernel output, if available
       * @default null
       */
      outputUrl: string | null;
      /**
       * Started At
       * @description ISO timestamp when the kernel run started
       * @default null
       */
      startedAt: string | null;
      /**
       * Status
       * @description Current status of the kernel (e.g., 'running', 'complete', 'error')
       */
      status: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of KAGGLE's KAGGLE_LIST_DATASETS tool input.
 */
type KAGGLE_LIST_DATASETS_INPUT = {
  /**
   * Filetype
   * @description Filter datasets by file type. Default: all.
   * @default all
   */
  filetype: string | null;
  /**
   * Group
   * @description Display datasets by a particular group. Default: public.
   * @default public
   */
  group: string | null;
  /**
   * License
   * @description Filter datasets by license. Default: all.
   * @default all
   */
  license: string | null;
  /**
   * Max Size
   * @description Maximum dataset size in bytes.
   * @default null
   */
  max_size: number | null;
  /**
   * Min Size
   * @description Minimum dataset size in bytes.
   * @default null
   */
  min_size: number | null;
  /**
   * Page
   * @description Page number for paginated results. Default: 1.
   * @default 1
   */
  page: number | null;
  /**
   * Search
   * @description Search terms to filter datasets. Default: empty.
   * @default
   */
  search: string | null;
  /**
   * Size
   * @description DEPRECATED: use max_size and min_size instead. Legacy size filter. Default behavior: all.
   * @default null
   */
  size: string | null;
  /**
   * Sort By
   * @description Sort the results (e.g., hottest, votes, updated). Default: hottest.
   * @default hottest
   */
  sort_by: string | null;
  /**
   * Tagids
   * @description Comma-separated list of tag IDs to filter by.
   * @default null
   */
  tagids: string | null;
  /**
   * User
   * @description Filter datasets by a specific user or organization.
   * @default null
   */
  user: string | null;
};

/**
 * Type of KAGGLE's KAGGLE_LIST_DATASETS tool output.
 */
type KAGGLE_LIST_DATASETS_OUTPUT = {
  /**
   * Data
   * @description List of dataset objects matching the query parameters.
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
 * Type map of all available tool input types for toolkit "KAGGLE".
 */
export type KAGGLE_TOOL_INPUTS = {
  COMPETITION_DOWNLOAD_FILES: KAGGLE_COMPETITION_DOWNLOAD_FILES_INPUT
  CONFIG_INIT: KAGGLE_CONFIG_INIT_INPUT
  DATASET_CREATE: KAGGLE_DATASET_CREATE_INPUT
  DATASET_STATUS: KAGGLE_DATASET_STATUS_INPUT
  DATASET_VERSION: KAGGLE_DATASET_VERSION_INPUT
  KAGGLE_COMPETITION_SUBMIT: KAGGLE_KAGGLE_COMPETITION_SUBMIT_INPUT
  KAGGLE_CONFIG_DIR: KAGGLE_KAGGLE_CONFIG_DIR_INPUT
  KAGGLE_CONFIG_FILE: KAGGLE_KAGGLE_CONFIG_FILE_INPUT
  KAGGLE_CONFIG_KEYS: KAGGLE_KAGGLE_CONFIG_KEYS_INPUT
  KAGGLE_CONFIG_PATH: KAGGLE_KAGGLE_CONFIG_PATH_INPUT
  KAGGLE_CONFIG_RESET: KAGGLE_KAGGLE_CONFIG_RESET_INPUT
  KAGGLE_CONFIG_SET: KAGGLE_KAGGLE_CONFIG_SET_INPUT
  KAGGLE_CONFIG_UNSET: KAGGLE_KAGGLE_CONFIG_UNSET_INPUT
  KAGGLE_CONFIG_VIEW: KAGGLE_KAGGLE_CONFIG_VIEW_INPUT
  KAGGLE_DATASET_INIT: KAGGLE_KAGGLE_DATASET_INIT_INPUT
  KAGGLE_DATASET_LIST_FILES: KAGGLE_KAGGLE_DATASET_LIST_FILES_INPUT
  KAGGLE_KERNEL_INIT: KAGGLE_KAGGLE_KERNEL_INIT_INPUT
  KAGGLE_KERNEL_OUTPUT: KAGGLE_KAGGLE_KERNEL_OUTPUT_INPUT
  KERNELS_STATUS: KAGGLE_KERNELS_STATUS_INPUT
  LIST_DATASETS: KAGGLE_LIST_DATASETS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "KAGGLE".
 */
export type KAGGLE_TOOL_OUTPUTS = {
  COMPETITION_DOWNLOAD_FILES: KAGGLE_COMPETITION_DOWNLOAD_FILES_OUTPUT
  CONFIG_INIT: KAGGLE_CONFIG_INIT_OUTPUT
  DATASET_CREATE: KAGGLE_DATASET_CREATE_OUTPUT
  DATASET_STATUS: KAGGLE_DATASET_STATUS_OUTPUT
  DATASET_VERSION: KAGGLE_DATASET_VERSION_OUTPUT
  KAGGLE_COMPETITION_SUBMIT: KAGGLE_KAGGLE_COMPETITION_SUBMIT_OUTPUT
  KAGGLE_CONFIG_DIR: KAGGLE_KAGGLE_CONFIG_DIR_OUTPUT
  KAGGLE_CONFIG_FILE: KAGGLE_KAGGLE_CONFIG_FILE_OUTPUT
  KAGGLE_CONFIG_KEYS: KAGGLE_KAGGLE_CONFIG_KEYS_OUTPUT
  KAGGLE_CONFIG_PATH: KAGGLE_KAGGLE_CONFIG_PATH_OUTPUT
  KAGGLE_CONFIG_RESET: KAGGLE_KAGGLE_CONFIG_RESET_OUTPUT
  KAGGLE_CONFIG_SET: KAGGLE_KAGGLE_CONFIG_SET_OUTPUT
  KAGGLE_CONFIG_UNSET: KAGGLE_KAGGLE_CONFIG_UNSET_OUTPUT
  KAGGLE_CONFIG_VIEW: KAGGLE_KAGGLE_CONFIG_VIEW_OUTPUT
  KAGGLE_DATASET_INIT: KAGGLE_KAGGLE_DATASET_INIT_OUTPUT
  KAGGLE_DATASET_LIST_FILES: KAGGLE_KAGGLE_DATASET_LIST_FILES_OUTPUT
  KAGGLE_KERNEL_INIT: KAGGLE_KAGGLE_KERNEL_INIT_OUTPUT
  KAGGLE_KERNEL_OUTPUT: KAGGLE_KAGGLE_KERNEL_OUTPUT_OUTPUT
  KERNELS_STATUS: KAGGLE_KERNELS_STATUS_OUTPUT
  LIST_DATASETS: KAGGLE_LIST_DATASETS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's KAGGLE toolkit.
 */
export const KAGGLE = {
  slug: "kaggle",
  tools: {
    /**
     * Tool to download competition data files. Use after confirming the competition ID.
     */
    COMPETITION_DOWNLOAD_FILES: "KAGGLE_COMPETITION_DOWNLOAD_FILES",
    /**
     * Tool to initialize Kaggle API client configuration. Attempts CLI first; if unavailable, it falls back to creating ~/.kaggle/kaggle.json (or $KAGGLE_CONFIG_DIR/kaggle.json).
     */
    CONFIG_INIT: "KAGGLE_CONFIG_INIT",
    /**
     * Tool to create a new Kaggle dataset with full metadata. Use after uploading files and finalizing metadata. Returns creation status and message.
     */
    DATASET_CREATE: "KAGGLE_DATASET_CREATE",
    /**
     * Tool to get the status of a dataset upload or processing job. Use after uploading a dataset to check processing state.
     */
    DATASET_STATUS: "KAGGLE_DATASET_STATUS",
    /**
     * Tool to create a new dataset version on Kaggle. Use when you have updated files or metadata and need to publish a new version of an existing dataset.
     */
    DATASET_VERSION: "KAGGLE_DATASET_VERSION",
    /**
     * Tool to submit an entry to a Kaggle competition. Use when you have already uploaded your file and obtained its blob token.
     */
    KAGGLE_COMPETITION_SUBMIT: "KAGGLE_KAGGLE_COMPETITION_SUBMIT",
    /**
     * Tool to retrieve the directory of the Kaggle API configuration file. Use when you need to locate the directory containing your kaggle.json credentials.
     */
    KAGGLE_CONFIG_DIR: "KAGGLE_KAGGLE_CONFIG_DIR",
    /**
     * Tool to retrieve the filename of the Kaggle API configuration file. Use when you need to find out where the local Kaggle config file is stored before reading or updating.
     */
    KAGGLE_CONFIG_FILE: "KAGGLE_KAGGLE_CONFIG_FILE",
    /**
     * Tool to list local Kaggle API configuration keys. Use when you need to see which configuration options are set without revealing values.
     */
    KAGGLE_CONFIG_KEYS: "KAGGLE_KAGGLE_CONFIG_KEYS",
    /**
     * Tool to retrieve local Kaggle API configuration file path. Use when you need to know the location of the Kaggle config before operations.
     */
    KAGGLE_CONFIG_PATH: "KAGGLE_KAGGLE_CONFIG_PATH",
    /**
     * Tool to reset local Kaggle CLI configuration to defaults. Clears CLI-managed keys ('competition', 'path', 'proxy').
     */
    KAGGLE_CONFIG_RESET: "KAGGLE_KAGGLE_CONFIG_RESET",
    /**
     * Tool to set a Kaggle CLI configuration parameter. Use when updating local CLI settings such as default download path or proxy. Ensure Kaggle CLI is installed.
     */
    KAGGLE_CONFIG_SET: "KAGGLE_KAGGLE_CONFIG_SET",
    /**
     * Tool to unset a Kaggle CLI configuration parameter. Use when removing local CLI settings such as default download path or proxy. Ensure Kaggle CLI is installed.
     */
    KAGGLE_CONFIG_UNSET: "KAGGLE_KAGGLE_CONFIG_UNSET",
    /**
     * Tool to view local Kaggle API configuration. Use when you need to confirm credentials before API calls.
     */
    KAGGLE_CONFIG_VIEW: "KAGGLE_KAGGLE_CONFIG_VIEW",
    /**
     * Tool to initialize a dataset-metadata.json file in a local folder. Use when preparing a dataset folder before uploading to Kaggle.
     */
    KAGGLE_DATASET_INIT: "KAGGLE_KAGGLE_DATASET_INIT",
    /**
     * Tool to list files in a Kaggle dataset. Use when you need to retrieve paginated file listings by owner and dataset slugs, with optional version and paging controls.
     */
    KAGGLE_DATASET_LIST_FILES: "KAGGLE_KAGGLE_DATASET_LIST_FILES",
    /**
     * Tool to initialize a kernel-metadata.json file in a local folder. Use when preparing a kernel folder before pushing to Kaggle.
     */
    KAGGLE_KERNEL_INIT: "KAGGLE_KAGGLE_KERNEL_INIT",
    /**
     * Tool to download the output of a Kaggle kernel. Use when needing the latest kernel results locally.
     */
    KAGGLE_KERNEL_OUTPUT: "KAGGLE_KAGGLE_KERNEL_OUTPUT",
    /**
     * Tool to get the status of a Kaggle kernel run. Use after submitting a kernel to monitor its execution state.
     */
    KERNELS_STATUS: "KAGGLE_KERNELS_STATUS",
    /**
     * Tool to list Kaggle datasets with filters and pagination. Use after authenticating with Kaggle API key.
     */
    LIST_DATASETS: "KAGGLE_LIST_DATASETS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "KAGGLE".
 */
export type KAGGLE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "KAGGLE".
 */
export type KAGGLE_TRIGGER_EVENTS = {}
