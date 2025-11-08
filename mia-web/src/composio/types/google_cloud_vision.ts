// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_CREATE_PRODUCT tool input.
 */
type GOOGLE_CLOUD_VISION_CREATE_PRODUCT_INPUT = {
  /**
   * Description
   * @description User-provided product description; max 4096 characters.
   * @default null
   */
  description: string | null;
  /**
   * Display Name
   * @description User-provided product display name; non-empty; max 4096 characters.
   */
  displayName?: string;
  /**
   * Parent
   * @description The project and location to create the product. Format: projects/{PROJECT_ID}/locations/{LOC_ID}.
   */
  parent?: string;
  /**
   * Product Category
   * @description Immutable product category; one of homegoods-v2, apparel-v2, toys-v2, packagedgoods-v1, general-v1.
   */
  productCategory?: string;
  /**
   * Product Id
   * @description Client-specified resource ID to use for the product; max 128 characters; must not contain '/'.
   * @default null
   */
  productId: string | null;
  /**
   * Product Labels
   * @description Key/value labels for the product; up to 500 labels per product. Each key/value pair must be non-empty and ≤128 bytes.
   * @default null
   */
  productLabels: {
      /**
       * Key
       * @description Label key; non-empty; maximum 128 bytes.
       */
      key: string;
      /**
       * Value
       * @description Label value; non-empty; maximum 128 bytes.
       */
      value: string;
  }[] | null;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_CREATE_PRODUCT tool output.
 */
type GOOGLE_CLOUD_VISION_CREATE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description User-provided description of the product.
       * @default null
       */
      description: string | null;
      /**
       * Display Name
       * @description User-provided display name of the product.
       */
      displayName: string;
      /**
       * Name
       * @description Resource name of the created product. Format: projects/{PROJECT_ID}/locations/{LOC_ID}/products/{PRODUCT_ID}.
       */
      name: string;
      /**
       * Product Category
       * @description Immutable product category of the product.
       */
      productCategory: string;
      /**
       * Product Labels
       * @description Key/value labels of the product.
       * @default null
       */
      productLabels: {
          /**
           * Key
           * @description Label key; non-empty; maximum 128 bytes.
           */
          key: string;
          /**
           * Value
           * @description Label value; non-empty; maximum 128 bytes.
           */
          value: string;
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
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_CREATE_REFERENCE_IMAGE tool input.
 */
type GOOGLE_CLOUD_VISION_CREATE_REFERENCE_IMAGE_INPUT = {
  /**
   * Bounding Polys
   * @description Optional list of up to 10 regions of interest. If omitted, service auto-detects regions.
   * @default null
   */
  boundingPolys: {
      /**
       * Normalized Vertices
       * @description List of normalized vertices; auto-detection used if omitted.
       * @default null
       */
      normalizedVertices: {
          /**
           * X
           * @description Normalized X coordinate, between 0.0 and 1.0
           */
          x: number;
          /**
           * Y
           * @description Normalized Y coordinate, between 0.0 and 1.0
           */
          y: number;
      }[] | null;
      /**
       * Vertices
       * @description List of pixel-coordinate vertices; auto-detection used if omitted.
       * @default null
       */
      vertices: {
          /**
           * X
           * @description X coordinate in pixels
           */
          x: number;
          /**
           * Y
           * @description Y coordinate in pixels
           */
          y: number;
      }[] | null;
  }[] | null;
  /**
   * Parent
   * @description Resource name of the product to add the reference image under. Format: projects/{PROJECT_ID}/locations/{LOC_ID}/products/{PRODUCT_ID}
   */
  parent?: string;
  /**
   * Reference Image Id
   * @description Client-specified ID for the new ReferenceImage; max 128 chars, no '/'. If already in use, returns ALREADY_EXISTS.
   * @default null
   */
  referenceImageId: string | null;
  /**
   * Uri
   * @description Google Cloud Storage URI of the image; must start with gs://
   */
  uri?: string;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_CREATE_REFERENCE_IMAGE tool output.
 */
type GOOGLE_CLOUD_VISION_CREATE_REFERENCE_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bounding Polys
       * @description Regions of interest, either provided or auto-detected
       * @default null
       */
      boundingPolys: {
          /**
           * Normalized Vertices
           * @description List of normalized vertices; auto-detection used if omitted.
           * @default null
           */
          normalizedVertices: {
              /**
               * X
               * @description Normalized X coordinate, between 0.0 and 1.0
               */
              x: number;
              /**
               * Y
               * @description Normalized Y coordinate, between 0.0 and 1.0
               */
              y: number;
          }[] | null;
          /**
           * Vertices
           * @description List of pixel-coordinate vertices; auto-detection used if omitted.
           * @default null
           */
          vertices: {
              /**
               * X
               * @description X coordinate in pixels
               */
              x: number;
              /**
               * Y
               * @description Y coordinate in pixels
               */
              y: number;
          }[] | null;
      }[] | null;
      /**
       * Name
       * @description Server-generated resource name. Format: projects/{PROJECT_ID}/locations/{LOC_ID}/products/{PRODUCT_ID}/referenceImages/{IMAGE_ID}
       */
      name: string;
      /**
       * Uri
       * @description The same gs:// URI passed in the request
       */
      uri: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_DELETE_PRODUCT tool input.
 */
type GOOGLE_CLOUD_VISION_DELETE_PRODUCT_INPUT = {
  /**
   * Name
   * @description Resource name of the Product to delete. Format: projects/{project_id}/locations/{location_id}/products/{product_id}
   */
  name?: string;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_DELETE_PRODUCT tool output.
 */
type GOOGLE_CLOUD_VISION_DELETE_PRODUCT_OUTPUT = {
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
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_GET_PRODUCT tool input.
 */
type GOOGLE_CLOUD_VISION_GET_PRODUCT_INPUT = {
  /**
   * Name
   * @description Resource name of the Product to retrieve. Format: projects/{PROJECT_ID}/locations/{LOC_ID}/products/{PRODUCT_ID}.
   */
  name?: string;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_GET_PRODUCT tool output.
 */
type GOOGLE_CLOUD_VISION_GET_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description User-provided description of the Product; up to 4096 characters.
       * @default null
       */
      description: string | null;
      /**
       * Display Name
       * @description User-provided display name of the Product; non-empty; up to 4096 characters.
       */
      displayName: string;
      /**
       * Name
       * @description Resource name of the Product. Format: projects/{PROJECT_ID}/locations/{LOC_ID}/products/{PRODUCT_ID}.
       */
      name: string;
      /**
       * Product Category
       * @description Immutable product category. Allowed values: homegoods-v2, apparel-v2, toys-v2, packagedgoods-v1, general-v1; legacy values homegoods, apparel, toys supported.
       */
      productCategory: string;
      /**
       * Product Labels
       * @description Key-value labels attached to the Product; each with non-empty key/value up to 128 bytes.
       * @default null
       */
      productLabels: {
          /**
           * Key
           * @description Label key; non-empty; maximum 128 bytes.
           */
          key: string;
          /**
           * Value
           * @description Label value; non-empty; maximum 128 bytes.
           */
          value: string;
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
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_GET_PRODUCT_SET tool input.
 */
type GOOGLE_CLOUD_VISION_GET_PRODUCT_SET_INPUT = {
  /**
   * Name
   * @description Resource name of the ProductSet to get. Format: projects/{PROJECT_ID}/locations/{LOCATION_ID}/productSets/{PRODUCT_SET_ID}
   */
  name?: string;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_GET_PRODUCT_SET tool output.
 */
type GOOGLE_CLOUD_VISION_GET_PRODUCT_SET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Display Name
       * @description User-provided name of the ProductSet.
       */
      displayName: string;
      /**
       * Status
       * @description Represents error status details for indexing.
       * @default null
       */
      indexError: {
          /**
           * Code
           * @description gRPC-style status code.
           * @default null
           */
          code: number | null;
          /**
           * Details
           * @description Additional error details; each entry contains an '@type' field.
           * @default null
           */
          details: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Message
           * @description Developer-facing error message (English).
           * @default null
           */
          message: string | null;
      } | null;
      /**
       * Index Time
       * @description Output only; last index time (RFC3339 timestamp).
       * @default null
       */
      indexTime: string | null;
      /**
       * Name
       * @description Server-generated resource name in format: projects/{PROJECT_ID}/locations/{LOCATION_ID}/productSets/{PRODUCT_SET_ID}
       * @default null
       */
      name: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_IMPORT_PRODUCT_SETS tool input.
 */
type GOOGLE_CLOUD_VISION_IMPORT_PRODUCT_SETS_INPUT = {
  /**
   * Input Config
   * @description The input configuration for the import request.
   */
  inputConfig?: {
      /**
       * Gcs Source
       * @description Google Cloud Storage source for the CSV file.
       */
      gcsSource: {
          /**
           * Csv File Uri
           * @description GCS URI of the CSV file. Must start with gs://. CSV must have columns: image-uri, image-id, product-set-id, product-id, product-category, product-display-name, labels, bounding-poly.
           */
          csvFileUri: string;
      };
  };
  /**
   * Parent
   * @description Project and location resource name. Format: projects/{PROJECT_ID}/locations/{LOCATION_ID}.
   */
  parent?: string;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_IMPORT_PRODUCT_SETS tool output.
 */
type GOOGLE_CLOUD_VISION_IMPORT_PRODUCT_SETS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Done
       * @description Indicates if the operation is completed.
       */
      done: boolean;
      /**
       * Status
       * @description Standard error model for long-running operations.
       * @default null
       */
      error: {
          /**
           * Code
           * @description The status code.
           */
          code: number;
          /**
           * Details
           * @description Additional error details; each entry contains an '@type' field.
           * @default null
           */
          details: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Message
           * @description A developer-facing error message.
           */
          message: string;
      } | null;
      /**
       * Metadata
       * @description Operation metadata (BatchOperationMetadata).
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description Server-assigned name of the operation.
       */
      name: string;
      /**
       * Response
       * @description The normal response of the operation in case of success, containing ImportProductSetsResponse payload.
       * @default null
       */
      response: {
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
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_LIST_INDEX_ENDPOINTS tool input.
 */
type GOOGLE_CLOUD_VISION_LIST_INDEX_ENDPOINTS_INPUT = {
  /**
   * Filter
   * @description Filter expression supports filtering by deployedImageIndex.image_index or deployedImageIndex.corpus.
   * @default null
   */
  filter: string | null;
  /**
   * Page Size
   * @description Maximum number of items to return; default 50; maximum 1000 (higher coerced to 1000).
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description The nextPageToken from a previous call to retrieve the subsequent page.
   * @default null
   */
  pageToken: string | null;
  /**
   * Parent
   * @description The parent resource name. Format: projects/{project}/locations/{location}.
   */
  parent?: string;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_LIST_INDEX_ENDPOINTS tool output.
 */
type GOOGLE_CLOUD_VISION_LIST_INDEX_ENDPOINTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Index Endpoints
       * @description List of IndexEndpoints for the specified parent.
       */
      indexEndpoints: {
          /**
           * Create Time
           * @description Output only. Creation time in RFC3339 format.
           * @default null
           */
          createTime: string | null;
          /**
           * DeployedIndex
           * @description A reference to a DeployedIndex resource.
           * @default null
           */
          deployedIndex: {
              /**
               * Index
               * @description Name of the deployed Index resource. Format: projects/{project}/locations/{location}/corpora/{corpus}/indexes/{index}
               */
              index: string;
          } | null;
          /**
           * Description
           * @description Optional user-provided description; up to 25,000 characters.
           * @default null
           */
          description: string | null;
          /**
           * Display Name
           * @description Optional user-provided display name; up to 32 characters.
           * @default null
           */
          displayName: string | null;
          /**
           * Labels
           * @description Optional user labels as key-value pairs.
           * @default null
           */
          labels: {
              [key: string]: string;
          } | null;
          /**
           * Name
           * @description Resource name of the IndexEndpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{indexEndpointId}
           */
          name: string;
          /**
           * State
           * @description Output only. The state of the IndexEndpoint. One of STATE_UNSPECIFIED, CREATING, CREATED, UPDATING, FAILED.
           * @default null
           */
          state: string | null;
          /**
           * Update Time
           * @description Output only. Last update time in RFC3339 format.
           * @default null
           */
          updateTime: string | null;
      }[];
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results, or empty if no more results.
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
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_LIST_LOCATIONS tool input.
 */
type GOOGLE_CLOUD_VISION_LIST_LOCATIONS_INPUT = {
  /**
   * Filter
   * @description Filter expression to narrow results, e.g., 'displayName=tokyo'.
   * @default null
   */
  filter: string | null;
  /**
   * Name
   * @description The project resource name that owns the locations collection. Format: projects/{project_id}
   */
  name?: string;
  /**
   * Page Size
   * @description Maximum number of locations to return; between 1 and 1000.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description Pagination token from previous ListLocations call to retrieve next page of results.
   * @default null
   */
  pageToken: string | null;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_LIST_LOCATIONS tool output.
 */
type GOOGLE_CLOUD_VISION_LIST_LOCATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Locations
       * @description List of locations matching the request filter.
       */
      locations: {
          /**
           * Display Name
           * @description Friendly name for the location, e.g., 'Tokyo'.
           * @default null
           */
          displayName: string | null;
          /**
           * Labels
           * @description Cross-service attributes for the location.
           * @default null
           */
          labels: {
              [key: string]: string;
          } | null;
          /**
           * Location Id
           * @description Canonical location ID, e.g., 'us-east1'.
           * @default null
           */
          locationId: string | null;
          /**
           * Metadata
           * @description Service-specific metadata with arbitrary fields and '@type'.
           * @default null
           */
          metadata: {
              [key: string]: unknown;
          } | null;
          /**
           * Name
           * @description Resource name of the location, e.g., 'projects/{project_id}/locations/{location_id}'.
           */
          name: string;
      }[];
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results, if any.
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
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_LIST_OPERATIONS tool input.
 */
type GOOGLE_CLOUD_VISION_LIST_OPERATIONS_INPUT = {
  /**
   * Filter
   * @description The standard list filter.
   * @default null
   */
  filter: string | null;
  /**
   * Name
   * @description The name of the operation's parent resource. Format: projects/{PROJECT_ID}/locations/{LOCATION_ID}
   */
  name?: string;
  /**
   * Page Size
   * @description The standard list page size.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description The standard list page token.
   * @default null
   */
  pageToken: string | null;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_LIST_OPERATIONS tool output.
 */
type GOOGLE_CLOUD_VISION_LIST_OPERATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Standard list next-page token.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Operations
       * @description A list of operations matching the filter.
       */
      operations: {
          /**
           * Done
           * @description Indicates if the operation is completed.
           */
          done: boolean;
          /**
           * Status
           * @description Standard error model for long-running operations.
           * @default null
           */
          error: {
              /**
               * Code
               * @description The status code.
               */
              code: number;
              /**
               * Details
               * @description Additional error details, if any.
               * @default null
               */
              details: {
                  [key: string]: unknown;
              }[] | null;
              /**
               * Message
               * @description A developer-facing error message.
               */
              message: string;
          } | null;
          /**
           * Metadata
           * @description Service-specific metadata associated with the operation.
           */
          metadata: {
              [key: string]: unknown;
          };
          /**
           * Name
           * @description Server-assigned name of the operation.
           */
          name: string;
          /**
           * Response
           * @description Normal success result; arbitrary JSON object (may be a resource or empty).
           * @default null
           */
          response: {
              [key: string]: unknown;
          } | null;
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
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_PURGE_PRODUCTS tool input.
 */
type GOOGLE_CLOUD_VISION_PURGE_PRODUCTS_INPUT = {
  /**
   * Delete Orphan Products
   * @description If true, delete all products not in any ProductSet.
   * @default null
   */
  deleteOrphanProducts: boolean | null;
  /**
   * Force
   * @description Must be true to actually perform the purge.
   */
  force?: boolean;
  /**
   * Parent
   * @description Project and location path. Format: projects/{PROJECT_ID}/locations/{LOCATION_ID}
   */
  parent?: string;
  /**
   * ProductSetPurgeConfig
   * @description Configuration to specify a ProductSet whose products should be deleted.
   * @default null
   */
  productSetPurgeConfig: {
      /**
       * Product Set Id
       * @description ID of the ProductSet to purge products from.
       */
      productSetId: string;
  } | null;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_PURGE_PRODUCTS tool output.
 */
type GOOGLE_CLOUD_VISION_PURGE_PRODUCTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Done
       * @description Indicates if the operation is completed.
       */
      done: boolean;
      /**
       * Status
       * @description Standard error model for long-running operations.
       * @default null
       */
      error: {
          /**
           * Code
           * @description The status code.
           */
          code: number;
          /**
           * Details
           * @description Additional error details; each entry contains an '@type' field.
           * @default null
           */
          details: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Message
           * @description A developer-facing error message.
           */
          message: string;
      } | null;
      /**
       * Metadata
       * @description Operation metadata (BatchOperationMetadata).
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description Server-assigned name of the operation.
       */
      name: string;
      /**
       * Response
       * @description Normal response on success (empty or method-specific).
       * @default null
       */
      response: {
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
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_UPDATE_PRODUCT tool input.
 */
type GOOGLE_CLOUD_VISION_UPDATE_PRODUCT_INPUT = {
  /**
   * Description
   * @description Product description; max 4096 characters.
   * @default null
   */
  description: string | null;
  /**
   * Display Name
   * @description Product display name; non-empty; max 4096 characters.
   * @default null
   */
  displayName: string | null;
  /**
   * Name
   * @description Resource name of the Product. Format: projects/{PROJECT_ID}/locations/{LOC_ID}/products/{PRODUCT_ID}.
   */
  name?: string;
  /**
   * Product Labels
   * @description List of labels to update; each key/value pair non-empty with max 128 bytes.
   * @default null
   */
  productLabels: {
      /**
       * Key
       * @description Label key; non-empty; maximum 128 bytes.
       */
      key: string;
      /**
       * Value
       * @description Label value; non-empty; maximum 128 bytes.
       */
      value: string;
  }[] | null;
  /**
   * Update Mask
   * @description Comma-separated list of fields to update. Valid mask paths: displayName,description,productLabels. If omitted, all mutable fields are updated.
   * @default null
   */
  updateMask: string | null;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_UPDATE_PRODUCT tool output.
 */
type GOOGLE_CLOUD_VISION_UPDATE_PRODUCT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Description
       * @description User-provided description of the Product; up to 4096 characters.
       * @default null
       */
      description: string | null;
      /**
       * Display Name
       * @description User-provided display name of the Product; non-empty; up to 4096 characters.
       */
      displayName: string;
      /**
       * Name
       * @description Resource name of the Product. Format: projects/{PROJECT_ID}/locations/{LOC_ID}/products/{PRODUCT_ID}.
       */
      name: string;
      /**
       * Product Category
       * @description Immutable product category. Allowed values: homegoods-v2, apparel-v2, toys-v2, packagedgoods-v1, general-v1; legacy values supported.
       */
      productCategory: string;
      /**
       * Product Labels
       * @description Key-value labels attached to the Product; each non-empty up to 128 bytes.
       * @default null
       */
      productLabels: {
          /**
           * Key
           * @description Label key; non-empty; maximum 128 bytes.
           */
          key: string;
          /**
           * Value
           * @description Label value; non-empty; maximum 128 bytes.
           */
          value: string;
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
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_UPDATE_PRODUCT_SET tool input.
 */
type GOOGLE_CLOUD_VISION_UPDATE_PRODUCT_SET_INPUT = {
  /**
   * Display Name
   * @description New display name for the ProductSet (non-empty, max 4096 chars).
   */
  displayName?: string;
  /**
   * Name
   * @description Resource name of the ProductSet to update. Format: projects/{PROJECT_ID}/locations/{LOCATION_ID}/productSets/{PRODUCT_SET_ID}
   */
  name?: string;
  /**
   * Update Mask
   * @description Comma-separated list of fields to update; only 'displayName' is supported.
   * @default null
   */
  updateMask: string | null;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_UPDATE_PRODUCT_SET tool output.
 */
type GOOGLE_CLOUD_VISION_UPDATE_PRODUCT_SET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Display Name
       * @description User-provided name of the ProductSet.
       */
      displayName: string;
      /**
       * Status
       * @description Represents error status details.
       * @default null
       */
      indexError: {
          /**
           * Code
           * @description gRPC-style status code.
           * @default null
           */
          code: number | null;
          /**
           * Details
           * @description Additional error details; each entry contains an '@type' field.
           * @default null
           */
          details: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Message
           * @description Developer-facing error message (English).
           * @default null
           */
          message: string | null;
      } | null;
      /**
       * Index Time
       * @description Output only; last index time (RFC3339 timestamp).
       * @default null
       */
      indexTime: string | null;
      /**
       * Name
       * @description Resource name: projects/{PROJECT_ID}/locations/{LOCATION_ID}/productSets/{PRODUCT_SET_ID}.
       * @default null
       */
      name: string | null;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_ADD_PRODUCT_TO_PRODUCT_SET tool input.
 */
type GOOGLE_CLOUD_VISION_VISION_ADD_PRODUCT_TO_PRODUCT_SET_INPUT = {
  /**
   * Name
   * @description Resource name of the ProductSet to modify in the format: projects/{project_id}/locations/{location_id}/productSets/{product_set_id}
   */
  name?: string;
  /**
   * Product
   * @description Resource name of the Product to add in the format: projects/{project_id}/locations/{location_id}/products/{product_id}
   */
  product?: string;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_ADD_PRODUCT_TO_PRODUCT_SET tool output.
 */
type GOOGLE_CLOUD_VISION_VISION_ADD_PRODUCT_TO_PRODUCT_SET_OUTPUT = {
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
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_CANCEL_OPERATION tool input.
 */
type GOOGLE_CLOUD_VISION_VISION_CANCEL_OPERATION_INPUT = {
  /**
   * Name
   * @description The name of the operation resource to cancel (format: operations/{operation_id}).
   */
  name?: string;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_CANCEL_OPERATION tool output.
 */
type GOOGLE_CLOUD_VISION_VISION_CANCEL_OPERATION_OUTPUT = {
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
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_DELETE_OPERATION tool input.
 */
type GOOGLE_CLOUD_VISION_VISION_DELETE_OPERATION_INPUT = {
  /**
   * Name
   * @description The resource name of the operation to delete, e.g. 'operations/12345'.
   */
  name?: string;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_DELETE_OPERATION tool output.
 */
type GOOGLE_CLOUD_VISION_VISION_DELETE_OPERATION_OUTPUT = {
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
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_DELETE_PRODUCT_SET tool input.
 */
type GOOGLE_CLOUD_VISION_VISION_DELETE_PRODUCT_SET_INPUT = {
  /**
   * Name
   * @description The resource name of the ProductSet to delete. Format: projects/{PROJECT_ID}/locations/{LOCATION_ID}/productSets/{PRODUCT_SET_ID}
   */
  name?: string;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_DELETE_PRODUCT_SET tool output.
 */
type GOOGLE_CLOUD_VISION_VISION_DELETE_PRODUCT_SET_OUTPUT = {
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
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_DELETE_REFERENCE_IMAGE tool input.
 */
type GOOGLE_CLOUD_VISION_VISION_DELETE_REFERENCE_IMAGE_INPUT = {
  /**
   * Name
   * @description The resource name of the reference image to delete. Format: projects/{PROJECT_ID}/locations/{LOCATION_ID}/products/{PRODUCT_ID}/referenceImages/{IMAGE_ID}
   */
  name?: string;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_DELETE_REFERENCE_IMAGE tool output.
 */
type GOOGLE_CLOUD_VISION_VISION_DELETE_REFERENCE_IMAGE_OUTPUT = {
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
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_GET_OPERATION tool input.
 */
type GOOGLE_CLOUD_VISION_VISION_GET_OPERATION_INPUT = {
  /**
   * Name
   * @description The resource name of the operation to retrieve (format: operations/{operation_id}).
   */
  name?: string;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_GET_OPERATION tool output.
 */
type GOOGLE_CLOUD_VISION_VISION_GET_OPERATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Done
       * @description Indicates if the operation is completed.
       */
      done: boolean;
      /**
       * Status
       * @description Standard error model for long-running operations.
       * @default null
       */
      error: {
          /**
           * Code
           * @description The status code.
           */
          code: number;
          /**
           * Details
           * @description Additional error details, if any.
           * @default null
           */
          details: {
              [key: string]: unknown;
          }[] | null;
          /**
           * Message
           * @description A developer-facing error message.
           */
          message: string;
      } | null;
      /**
       * Metadata
       * @description Service-specific metadata associated with the operation.
       */
      metadata: {
          [key: string]: unknown;
      };
      /**
       * Name
       * @description Server-assigned unique name of the operation.
       */
      name: string;
      /**
       * Response
       * @description Normal success result; arbitrary JSON object (may be a resource or empty).
       * @default null
       */
      response: {
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
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_GET_REFERENCE_IMAGE tool input.
 */
type GOOGLE_CLOUD_VISION_VISION_GET_REFERENCE_IMAGE_INPUT = {
  /**
   * Name
   * @description Full resource name of the ReferenceImage to retrieve. Format: projects/{PROJECT_ID}/locations/{LOCATION_ID}/products/{PRODUCT_ID}/referenceImages/{REFERENCE_IMAGE_ID}
   */
  name?: string;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_GET_REFERENCE_IMAGE tool output.
 */
type GOOGLE_CLOUD_VISION_VISION_GET_REFERENCE_IMAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Bounding Polys
       * @description Optional list of bounding polygons around areas of interest
       * @default null
       */
      boundingPolys: {
          /**
           * Normalized Vertices
           * @description List of polygon vertices in normalized coordinates
           * @default null
           */
          normalizedVertices: {
              /**
               * X
               * @description Normalized X coordinate
               */
              x: number;
              /**
               * Y
               * @description Normalized Y coordinate
               */
              y: number;
          }[] | null;
          /**
           * Vertices
           * @description List of polygon vertices in pixel coordinates
           * @default null
           */
          vertices: {
              /**
               * X
               * @description X coordinate in pixels
               */
              x: number;
              /**
               * Y
               * @description Y coordinate in pixels
               */
              y: number;
          }[] | null;
      }[] | null;
      /**
       * Name
       * @description Resource name of the ReferenceImage
       */
      name: string;
      /**
       * Uri
       * @description Google Cloud Storage URI of the image, e.g., gs://bucket/path
       */
      uri: string;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_LIST_PRODUCTS_IN_PRODUCT_SET tool input.
 */
type GOOGLE_CLOUD_VISION_VISION_LIST_PRODUCTS_IN_PRODUCT_SET_INPUT = {
  /**
   * Name
   * @description Resource name of the ProductSet to list Products from. Format: projects/{project_id}/locations/{location_id}/productSets/{product_set_id}
   */
  name?: string;
  /**
   * Page Size
   * @description Maximum number of items to return; default 10; maximum 100. Requests outside 1-100 return INVALID_ARGUMENT.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description The nextPageToken from a previous call to retrieve the next page of results.
   * @default null
   */
  pageToken: string | null;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_LIST_PRODUCTS_IN_PRODUCT_SET tool output.
 */
type GOOGLE_CLOUD_VISION_VISION_LIST_PRODUCTS_IN_PRODUCT_SET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results, or empty if there are no more results.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Products
       * @description List of Products contained in the specified ProductSet.
       */
      products: {
          /**
           * Description
           * @description User-provided description of the Product; up to 4096 characters.
           * @default null
           */
          description: string | null;
          /**
           * Display Name
           * @description User-provided display name of the Product; non-empty; up to 4096 characters.
           */
          displayName: string;
          /**
           * Name
           * @description Resource name of the Product. Format: projects/{PROJECT_ID}/locations/{LOCATION_ID}/products/{PRODUCT_ID}.
           */
          name: string;
          /**
           * Product Category
           * @description Immutable product category. Allowed values: homegoods-v2, apparel-v2, toys-v2, packagedgoods-v1, general-v1; legacy values homegoods, apparel, toys supported.
           */
          productCategory: string;
          /**
           * Product Labels
           * @description Key-value labels attached to the Product; each with non-empty key/value up to 128 bytes.
           * @default null
           */
          productLabels: {
              /**
               * Key
               * @description Label key; non-empty; maximum 128 bytes.
               */
              key: string;
              /**
               * Value
               * @description Label value; non-empty; maximum 128 bytes.
               */
              value: string;
          }[] | null;
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
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_LIST_PROJECTS tool input.
 */
type GOOGLE_CLOUD_VISION_VISION_LIST_PROJECTS_INPUT = {
  /**
   * Filter
   * @description Filter expression, case-insensitive. Eligible fields include `name`, `projectId`, `labels.<key>`, `parent.type`, `parent.id`, `lifecycleState`.
   * @default null
   */
  filter: string | null;
  /**
   * Page Size
   * @description Maximum number of projects to return; server may return fewer.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description Token from a previous list call to retrieve the next page of results.
   * @default null
   */
  pageToken: string | null;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_LIST_PROJECTS tool output.
 */
type GOOGLE_CLOUD_VISION_VISION_LIST_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results, if any.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Projects
       * @description List of matching projects.
       */
      projects: {
          /**
           * Name
           * @description Resource name of the project, in the form `projects/{projectId}`.
           */
          name: string;
          /**
           * Project Id
           * @description User-assigned project identifier.
           */
          projectId: string;
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
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_LIST_REFERENCE_IMAGES tool input.
 */
type GOOGLE_CLOUD_VISION_VISION_LIST_REFERENCE_IMAGES_INPUT = {
  /**
   * Page Size
   * @description Maximum number of images to return; default 10, maximum 100.
   * @default null
   */
  pageSize: number | null;
  /**
   * Page Token
   * @description Token for fetching the next page of results from a previous list call.
   * @default null
   */
  pageToken: string | null;
  /**
   * Parent
   * @description Resource name of the product to list reference images for. Format: projects/{PROJECT_ID}/locations/{LOC_ID}/products/{PRODUCT_ID}.
   */
  parent?: string;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_LIST_REFERENCE_IMAGES tool output.
 */
type GOOGLE_CLOUD_VISION_VISION_LIST_REFERENCE_IMAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next Page Token
       * @description Token to retrieve the next page of results, or empty if there are no more results.
       * @default null
       */
      nextPageToken: string | null;
      /**
       * Reference Images
       * @description List of reference images in the specified product.
       */
      referenceImages: {
          /**
           * Bounding Polys
           * @description Areas of interest in the image; at most 10 polygons.
           * @default null
           */
          boundingPolys: {
              /**
               * Normalized Vertices
               * @description List of normalized vertices; auto-detection used if omitted.
               * @default null
               */
              normalizedVertices: {
                  /**
                   * X
                   * @description Normalized X coordinate, between 0.0 and 1.0
                   */
                  x: number;
                  /**
                   * Y
                   * @description Normalized Y coordinate, between 0.0 and 1.0
                   */
                  y: number;
              }[] | null;
              /**
               * Vertices
               * @description List of pixel-coordinate vertices; auto-detection used if omitted.
               * @default null
               */
              vertices: {
                  /**
                   * X
                   * @description X coordinate in pixels
                   */
                  x: number;
                  /**
                   * Y
                   * @description Y coordinate in pixels
                   */
                  y: number;
              }[] | null;
          }[] | null;
          /**
           * Name
           * @description Resource name of the reference image. Format: projects/{PROJECT_ID}/locations/{LOC_ID}/products/{PRODUCT_ID}/referenceImages/{IMAGE_ID}
           * @default null
           */
          name: string | null;
          /**
           * Uri
           * @description Google Cloud Storage URI of the image; starts with gs://
           * @default null
           */
          uri: string | null;
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
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_REMOVE_PRODUCT_FROM_PRODUCT_SET tool input.
 */
type GOOGLE_CLOUD_VISION_VISION_REMOVE_PRODUCT_FROM_PRODUCT_SET_INPUT = {
  /**
   * Name
   * @description Resource name of the ProductSet to modify. Format: projects/{project_id}/locations/{location_id}/productSets/{product_set_id}
   */
  name?: string;
  /**
   * Product
   * @description Resource name of the Product to remove. Format: projects/{project_id}/locations/{location_id}/products/{product_id}
   */
  product?: string;
};

/**
 * Type of GOOGLE_CLOUD_VISION's GOOGLE_CLOUD_VISION_VISION_REMOVE_PRODUCT_FROM_PRODUCT_SET tool output.
 */
type GOOGLE_CLOUD_VISION_VISION_REMOVE_PRODUCT_FROM_PRODUCT_SET_OUTPUT = {
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
 * Type map of all available tool input types for toolkit "GOOGLE_CLOUD_VISION".
 */
export type GOOGLE_CLOUD_VISION_TOOL_INPUTS = {
  CREATE_PRODUCT: GOOGLE_CLOUD_VISION_CREATE_PRODUCT_INPUT
  CREATE_REFERENCE_IMAGE: GOOGLE_CLOUD_VISION_CREATE_REFERENCE_IMAGE_INPUT
  DELETE_PRODUCT: GOOGLE_CLOUD_VISION_DELETE_PRODUCT_INPUT
  GET_PRODUCT: GOOGLE_CLOUD_VISION_GET_PRODUCT_INPUT
  GET_PRODUCT_SET: GOOGLE_CLOUD_VISION_GET_PRODUCT_SET_INPUT
  IMPORT_PRODUCT_SETS: GOOGLE_CLOUD_VISION_IMPORT_PRODUCT_SETS_INPUT
  LIST_INDEX_ENDPOINTS: GOOGLE_CLOUD_VISION_LIST_INDEX_ENDPOINTS_INPUT
  LIST_LOCATIONS: GOOGLE_CLOUD_VISION_LIST_LOCATIONS_INPUT
  LIST_OPERATIONS: GOOGLE_CLOUD_VISION_LIST_OPERATIONS_INPUT
  PURGE_PRODUCTS: GOOGLE_CLOUD_VISION_PURGE_PRODUCTS_INPUT
  UPDATE_PRODUCT: GOOGLE_CLOUD_VISION_UPDATE_PRODUCT_INPUT
  UPDATE_PRODUCT_SET: GOOGLE_CLOUD_VISION_UPDATE_PRODUCT_SET_INPUT
  VISION_ADD_PRODUCT_TO_PRODUCT_SET: GOOGLE_CLOUD_VISION_VISION_ADD_PRODUCT_TO_PRODUCT_SET_INPUT
  VISION_CANCEL_OPERATION: GOOGLE_CLOUD_VISION_VISION_CANCEL_OPERATION_INPUT
  VISION_DELETE_OPERATION: GOOGLE_CLOUD_VISION_VISION_DELETE_OPERATION_INPUT
  VISION_DELETE_PRODUCT_SET: GOOGLE_CLOUD_VISION_VISION_DELETE_PRODUCT_SET_INPUT
  VISION_DELETE_REFERENCE_IMAGE: GOOGLE_CLOUD_VISION_VISION_DELETE_REFERENCE_IMAGE_INPUT
  VISION_GET_OPERATION: GOOGLE_CLOUD_VISION_VISION_GET_OPERATION_INPUT
  VISION_GET_REFERENCE_IMAGE: GOOGLE_CLOUD_VISION_VISION_GET_REFERENCE_IMAGE_INPUT
  VISION_LIST_PRODUCTS_IN_PRODUCT_SET: GOOGLE_CLOUD_VISION_VISION_LIST_PRODUCTS_IN_PRODUCT_SET_INPUT
  VISION_LIST_PROJECTS: GOOGLE_CLOUD_VISION_VISION_LIST_PROJECTS_INPUT
  VISION_LIST_REFERENCE_IMAGES: GOOGLE_CLOUD_VISION_VISION_LIST_REFERENCE_IMAGES_INPUT
  VISION_REMOVE_PRODUCT_FROM_PRODUCT_SET: GOOGLE_CLOUD_VISION_VISION_REMOVE_PRODUCT_FROM_PRODUCT_SET_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOOGLE_CLOUD_VISION".
 */
export type GOOGLE_CLOUD_VISION_TOOL_OUTPUTS = {
  CREATE_PRODUCT: GOOGLE_CLOUD_VISION_CREATE_PRODUCT_OUTPUT
  CREATE_REFERENCE_IMAGE: GOOGLE_CLOUD_VISION_CREATE_REFERENCE_IMAGE_OUTPUT
  DELETE_PRODUCT: GOOGLE_CLOUD_VISION_DELETE_PRODUCT_OUTPUT
  GET_PRODUCT: GOOGLE_CLOUD_VISION_GET_PRODUCT_OUTPUT
  GET_PRODUCT_SET: GOOGLE_CLOUD_VISION_GET_PRODUCT_SET_OUTPUT
  IMPORT_PRODUCT_SETS: GOOGLE_CLOUD_VISION_IMPORT_PRODUCT_SETS_OUTPUT
  LIST_INDEX_ENDPOINTS: GOOGLE_CLOUD_VISION_LIST_INDEX_ENDPOINTS_OUTPUT
  LIST_LOCATIONS: GOOGLE_CLOUD_VISION_LIST_LOCATIONS_OUTPUT
  LIST_OPERATIONS: GOOGLE_CLOUD_VISION_LIST_OPERATIONS_OUTPUT
  PURGE_PRODUCTS: GOOGLE_CLOUD_VISION_PURGE_PRODUCTS_OUTPUT
  UPDATE_PRODUCT: GOOGLE_CLOUD_VISION_UPDATE_PRODUCT_OUTPUT
  UPDATE_PRODUCT_SET: GOOGLE_CLOUD_VISION_UPDATE_PRODUCT_SET_OUTPUT
  VISION_ADD_PRODUCT_TO_PRODUCT_SET: GOOGLE_CLOUD_VISION_VISION_ADD_PRODUCT_TO_PRODUCT_SET_OUTPUT
  VISION_CANCEL_OPERATION: GOOGLE_CLOUD_VISION_VISION_CANCEL_OPERATION_OUTPUT
  VISION_DELETE_OPERATION: GOOGLE_CLOUD_VISION_VISION_DELETE_OPERATION_OUTPUT
  VISION_DELETE_PRODUCT_SET: GOOGLE_CLOUD_VISION_VISION_DELETE_PRODUCT_SET_OUTPUT
  VISION_DELETE_REFERENCE_IMAGE: GOOGLE_CLOUD_VISION_VISION_DELETE_REFERENCE_IMAGE_OUTPUT
  VISION_GET_OPERATION: GOOGLE_CLOUD_VISION_VISION_GET_OPERATION_OUTPUT
  VISION_GET_REFERENCE_IMAGE: GOOGLE_CLOUD_VISION_VISION_GET_REFERENCE_IMAGE_OUTPUT
  VISION_LIST_PRODUCTS_IN_PRODUCT_SET: GOOGLE_CLOUD_VISION_VISION_LIST_PRODUCTS_IN_PRODUCT_SET_OUTPUT
  VISION_LIST_PROJECTS: GOOGLE_CLOUD_VISION_VISION_LIST_PROJECTS_OUTPUT
  VISION_LIST_REFERENCE_IMAGES: GOOGLE_CLOUD_VISION_VISION_LIST_REFERENCE_IMAGES_OUTPUT
  VISION_REMOVE_PRODUCT_FROM_PRODUCT_SET: GOOGLE_CLOUD_VISION_VISION_REMOVE_PRODUCT_FROM_PRODUCT_SET_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's GOOGLE_CLOUD_VISION toolkit.
 */
export const GOOGLE_CLOUD_VISION = {
  slug: "google_cloud_vision",
  tools: {
    /**
     * Tool to create and return a new Product resource. Use when you need to register a product in a specific project/location after preparing product details.
     */
    CREATE_PRODUCT: "GOOGLE_CLOUD_VISION_CREATE_PRODUCT",
    /**
     * Tool to create a ReferenceImage under a product. Use when adding a new image to a product for detection.
     */
    CREATE_REFERENCE_IMAGE: "GOOGLE_CLOUD_VISION_CREATE_REFERENCE_IMAGE",
    /**
     * Tool to permanently delete a Product and its reference images. Use after confirming the product's resource name.
     */
    DELETE_PRODUCT: "GOOGLE_CLOUD_VISION_DELETE_PRODUCT",
    /**
     * Tool to get information associated with a Product. Use when you have the product resource name and need its details.
     */
    GET_PRODUCT: "GOOGLE_CLOUD_VISION_GET_PRODUCT",
    /**
     * Tool to get a ProductSet. Use when you need metadata details of an existing ProductSet by its full resource name. Use after obtaining the resource name.
     */
    GET_PRODUCT_SET: "GOOGLE_CLOUD_VISION_GET_PRODUCT_SET",
    /**
     * Tool to asynchronously import reference images into ProductSets from a CSV in GCS. Use when you need to bulk import images into product sets via a Cloud Storage CSV.
     */
    IMPORT_PRODUCT_SETS: "GOOGLE_CLOUD_VISION_IMPORT_PRODUCT_SETS",
    /**
     * Tool to list IndexEndpoints in a project and location. Use when you need to retrieve existing IndexEndpoints and handle pagination.
     */
    LIST_INDEX_ENDPOINTS: "GOOGLE_CLOUD_VISION_LIST_INDEX_ENDPOINTS",
    /**
     * Tool to list available Vision AI service locations for a project. Use when you need to discover supported regions before making region-specific API calls.
     */
    LIST_LOCATIONS: "GOOGLE_CLOUD_VISION_LIST_LOCATIONS",
    /**
     * Tool to list operations that match the specified filter. Use when you need to retrieve all operations under a specific project and location.
     */
    LIST_OPERATIONS: "GOOGLE_CLOUD_VISION_LIST_OPERATIONS",
    /**
     * Tool to asynchronously delete products in a ProductSet or orphan products. Use when you need to clean up products at scale; ensure `force` is true to execute.
     */
    PURGE_PRODUCTS: "GOOGLE_CLOUD_VISION_PURGE_PRODUCTS",
    /**
     * Tool to update a Product's mutable fields: displayName, description, and productLabels. Use after confirming the product resource name.
     */
    UPDATE_PRODUCT: "GOOGLE_CLOUD_VISION_UPDATE_PRODUCT",
    /**
     * Tool to update a ProductSet resource. Use when you need to modify the displayName of an existing ProductSet.
     */
    UPDATE_PRODUCT_SET: "GOOGLE_CLOUD_VISION_UPDATE_PRODUCT_SET",
    /**
     * Tool to add a Product to a specified ProductSet. Use after creating both resources in the same project/location to link a product to its set.
     */
    VISION_ADD_PRODUCT_TO_PRODUCT_SET: "GOOGLE_CLOUD_VISION_VISION_ADD_PRODUCT_TO_PRODUCT_SET",
    /**
     * Tool to cancel a long-running Vision API operation. Use when you need to abort a pending or in-progress operation.
     */
    VISION_CANCEL_OPERATION: "GOOGLE_CLOUD_VISION_VISION_CANCEL_OPERATION",
    /**
     * Tool to delete a long-running Vision API operation. Use after confirming the operation name.
     */
    VISION_DELETE_OPERATION: "GOOGLE_CLOUD_VISION_VISION_DELETE_OPERATION",
    /**
     * Tool to permanently delete a ProductSet. Use after confirming the ProductSet's resource name.
     */
    VISION_DELETE_PRODUCT_SET: "GOOGLE_CLOUD_VISION_VISION_DELETE_PRODUCT_SET",
    /**
     * Tool to permanently delete a reference image. Use when you have confirmed the reference image's resource name.
     */
    VISION_DELETE_REFERENCE_IMAGE: "GOOGLE_CLOUD_VISION_VISION_DELETE_REFERENCE_IMAGE",
    /**
     * Tool to get the latest state of a long-running operation. Use after starting an async Vision API operation to poll its status.
     */
    VISION_GET_OPERATION: "GOOGLE_CLOUD_VISION_VISION_GET_OPERATION",
    /**
     * Tool to get information associated with a ReferenceImage. Use when you have the full resource name and need its metadata.
     */
    VISION_GET_REFERENCE_IMAGE: "GOOGLE_CLOUD_VISION_VISION_GET_REFERENCE_IMAGE",
    /**
     * Tool to list Products in a specified ProductSet. Use when you need to retrieve Products associated with a ProductSet after confirming it exists, with optional pagination.
     */
    VISION_LIST_PRODUCTS_IN_PRODUCT_SET: "GOOGLE_CLOUD_VISION_VISION_LIST_PRODUCTS_IN_PRODUCT_SET",
    /**
     * Tool to list Google Cloud projects accessible by the authenticated user. Use when you need to enumerate available project IDs and resource names before performing further operations.
     */
    VISION_LIST_PROJECTS: "GOOGLE_CLOUD_VISION_VISION_LIST_PROJECTS",
    /**
     * Tool to list reference images for a product. Use when you need to retrieve stored reference images under a specified product resource name, with optional pagination.
     */
    VISION_LIST_REFERENCE_IMAGES: "GOOGLE_CLOUD_VISION_VISION_LIST_REFERENCE_IMAGES",
    /**
     * Tool to remove a Product from a specified ProductSet. Use after creating both resources in the same project/location to unlink a product from its set.
     */
    VISION_REMOVE_PRODUCT_FROM_PRODUCT_SET: "GOOGLE_CLOUD_VISION_VISION_REMOVE_PRODUCT_FROM_PRODUCT_SET",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "GOOGLE_CLOUD_VISION".
 */
export type GOOGLE_CLOUD_VISION_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "GOOGLE_CLOUD_VISION".
 */
export type GOOGLE_CLOUD_VISION_TRIGGER_EVENTS = {}
