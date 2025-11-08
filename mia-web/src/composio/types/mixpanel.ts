// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of MIXPANEL's MIXPANEL_AGGREGATED_EVENT_PROPERTY_VALUES tool input.
 */
type MIXPANEL_AGGREGATED_EVENT_PROPERTY_VALUES_INPUT = {
  /**
   * Event
   * @description The event that you wish to get data for. Note: this is a single event name, not an array
   */
  event?: string;
  /**
   * Format
   * @description The data return format
   * @default json
   */
  format: string | null;
  /**
   * From Date
   * @description The date in yyyy-mm-dd format to begin querying from (inclusive)
   * @default null
   */
  from_date: string | null;
  /**
   * Interval
   * @description The number of units to return data for. Specify either interval or from_date and to_date
   * @default null
   */
  interval: number | null;
  /**
   * Limit
   * @description The maximum number of values to return
   * @default 255
   */
  limit: number | null;
  /**
   * Name
   * @description The name of the property you would like to get data for
   */
  name?: string;
  /**
   * Project Id
   * @description Required if using service account to authenticate request
   */
  project_id?: number;
  /**
   * To Date
   * @description The date in yyyy-mm-dd format to query to (inclusive)
   * @default null
   */
  to_date: string | null;
  /**
   * Type
   * @description The analysis type you would like to get data for
   */
  type?: string;
  /**
   * Unit
   * @description The level of granularity of the data
   */
  unit?: string;
  /**
   * Values
   * @description The specific property values that you would like to get data for. Example: ['female', 'unknown']
   * @default null
   */
  values: string[] | null;
  /**
   * Workspace Id
   * @description The id of the workspace if applicable
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_AGGREGATED_EVENT_PROPERTY_VALUES tool output.
 */
type MIXPANEL_AGGREGATED_EVENT_PROPERTY_VALUES_OUTPUT = {
  /**
   * Data
   * @description The response data containing series and values
   */
  data?: {
      /**
       * Series
       * @description Array of series data
       */
      series: string[];
      /**
       * Values
       * @description Values data
       */
      values: {
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
   * Legend Size
   * @description Size of the legend
   */
  legend_size?: number;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MIXPANEL's MIXPANEL_AGGREGATE_EVENTS tool input.
 */
type MIXPANEL_AGGREGATE_EVENTS_INPUT = {
  /**
   * Event
   * @description Name of the event to analyze
   * @default null
   */
  event: string | null;
  /**
   * Events
   * @description List of event names to analyze
   * @default null
   */
  events: string[] | null;
  /**
   * From Date
   * Format: date
   * @description Start date for the query (inclusive)
   */
  from_date?: string;
  /**
   * Interval
   * @description Time interval for the results in seconds
   * @default null
   */
  interval: number | null;
  /**
   * Limit
   * @description Maximum number of results to return
   * @default null
   */
  limit: number | null;
  /**
   * Project Id
   * @description The ID of the project to query
   */
  project_id?: number;
  /**
   * To Date
   * Format: date
   * @description End date for the query (inclusive)
   */
  to_date?: string;
  /**
   * Type
   * @description Type of aggregation
   * @default general
   */
  type: string;
  /**
   * Unit
   * @description Time unit for grouping results
   * @default day
   */
  unit: string;
  /**
   * Where
   * @description Expression to filter events
   * @default null
   */
  where: string | null;
  /**
   * Workspace Id
   * @description The ID of the workspace if applicable
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_AGGREGATE_EVENTS tool output.
 */
type MIXPANEL_AGGREGATE_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Raw event breakdown data
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
 * Type of MIXPANEL's MIXPANEL_AGGREGATE_EVENT_COUNTS tool input.
 */
type MIXPANEL_AGGREGATE_EVENT_COUNTS_INPUT = {
  /**
   * Event
   * @description Name of the event to analyze
   * @default null
   */
  event: string | null;
  /**
   * Events
   * @description List of event names to analyze
   * @default null
   */
  events: string[] | null;
  /**
   * From Date
   * Format: date
   * @description Start date for the query (inclusive)
   */
  from_date?: string;
  /**
   * Interval
   * @description Time interval for the results in seconds
   * @default null
   */
  interval: number | null;
  /**
   * Project Id
   * @description The ID of the project to query
   */
  project_id?: number;
  /**
   * To Date
   * Format: date
   * @description End date for the query (inclusive)
   */
  to_date?: string;
  /**
   * Type
   * @description Type of aggregation
   * @default general
   */
  type: string;
  /**
   * Unit
   * @description Time unit for grouping results
   * @default day
   */
  unit: string;
  /**
   * Where
   * @description Expression to filter events
   * @default null
   */
  where: string | null;
  /**
   * Workspace Id
   * @description The ID of the workspace if applicable
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_AGGREGATE_EVENT_COUNTS tool output.
 */
type MIXPANEL_AGGREGATE_EVENT_COUNTS_OUTPUT = {
  /**
   * Data
   * @description Raw event count data
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
 * Type of MIXPANEL's MIXPANEL_GET_ALL_PROJECTS tool input.
 */
type MIXPANEL_GET_ALL_PROJECTS_INPUT = object;

/**
 * Type of MIXPANEL's MIXPANEL_GET_ALL_PROJECTS tool output.
 */
type MIXPANEL_GET_ALL_PROJECTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Projects
       * @description Dictionary of project IDs mapping to their details including name, permissions, role, domain, etc.
       */
      projects: {
          [key: string]: {
              [key: string]: unknown;
          };
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
 * Type of MIXPANEL's MIXPANEL_JQL_QUERY tool input.
 */
type MIXPANEL_JQL_QUERY_INPUT = {
  /**
   * Params
   * @description A JSON-encoded object that will be made available in the script as `params`. Use this to pass dynamic date ranges, event names, or other parameters into your JQL query.
   * @default null
   */
  params: {
      [key: string]: unknown;
  } | null;
  /**
   * Project Id
   * @description Required if using service account credentials or an API secret for authentication.
   */
  project_id?: number;
  /**
   * Script
   * @description A **fully valid** JavaScript code snippet that defines **`function main() { ... }`** and returns the final dataset. The script is compiled and executed by Mixpanel's JQL engine.
   *
   *     --------------------------------------------------------------------------------------------
   *     ### **COMPLETE JQL REFERENCE**
   *
   *     JQL (JavaScript Query Language) allows you to query Mixpanel's raw event or user (profile) data using standard
   *     JavaScript transformations. Below is a comprehensive reference to help you generate queries, including how to:
   *      - **Fetch event data** with `Events()`.
   *      - **Fetch user profiles** with `People()`.
   *      - **Join** events and profiles with `join()`.
   *      - Apply **filters**, **mappers**, and **reducers** (aggregations) with `.filter()`, `.map()`, `.reduce()`, etc.
   *      - Group results with `.groupBy()` or `.groupByUser()`.
   *      - Use built-in reducers like `count()`, `sum()`, `avg()`, etc.
   *      - Pass dynamic parameters via the `params` object.
   *
   *     Your script must have **exactly** one top-level function named `main()`. For example:
   *
   *     ```js
   *     function main() {
   *       // 1) Fetch a data source (Events, People, or join(...)).
   *       // 2) Transform/aggregate as needed.
   *       // 3) Return the final results.
   *     }
   *     ```
   *
   *     --------------------------------------------------------------------------------------------
   *     ## **DATA SOURCES**
   *
   *     1. **Events(params)**
   *        - Fetch raw event data. Each event object typically has:
   *          - `name`: The event name (string).
   *          - `distinct_id`: The user's distinct ID.
   *          - `time`: Timestamp in milliseconds since epoch (project timezone, not UTC).
   *          - `properties`: An object with all event properties.
   *        - **Common arguments** to `Events()`:
   *          ```js
   *          Events({
   *            from_date: "YYYY-MM-DD",
   *            to_date: "YYYY-MM-DD",
   *            event_selectors: [
   *              {
   *                event: "EventName",
   *                selector: "properties[\"country\"] == \"US\"",
   *                label: "Custom Label" // optional label
   *              }
   *            ]
   *            // user_selectors can also be used in People() if needed.
   *          })
   *          ```
   *        - The `selector` field supports **Segmentation Expressions**, e.g.: `"properties[\"app_name\"] == \"gmail\" and properties[\"some_flag\"] == true"`.
   *
   *     2. **People(params)**
   *        - Fetch user profiles. Each user object has:
   *          - `distinct_id`: The user's unique ID.
   *          - `time`: Timestamp of the most recent update.
   *          - `last_seen`: Timestamp of the most recent profile Set() call.
   *          - `properties`: An object of user properties (e.g. `signup_date`, `email`, `country`, etc.).
   *        - **Example**:
   *          ```js
   *          People({
   *            user_selectors: [
   *              { selector: "user[\"$email\"] == \"someone@example.com\"" }
   *            ]
   *          })
   *          // or
   *          People()
   *            .filter(u => u.properties.age > 30);
   *          ```
   *
   *     3. **join(Events(...), People(...), { type, selectors })**
   *        - Combine events with user profiles on the same `distinct_id`.
   *        - Each joined item has `{ distinct_id, event, user }`, where `event` is an event object and `user` is a user object.
   *        - **type** can be `full`, `left`, `right`, or `inner` (defaults to `full`).
   *        - You can use selectors referencing **both** event & user properties.
   *          ```js
   *          join(
   *            Events({ from_date: '2023-01-01', to_date: '2023-01-31' }),
   *            People(),
   *            {
   *              type: 'inner',
   *              selectors: [ { selector: 'properties[\"country\"] == "US" and user[\"age\"] > 30' } ]
   *            }
   *          )
   *          ```
   *
   *     --------------------------------------------------------------------------------------------
   *     ## **TRANSFORMATIONS** (Methods that process collections)
   *
   *     After fetching a data source, you can chain transformations. The final result of your chain is what you `return` in `main()`.
   *
   *     1. **filter(fn)**:
   *        - Keep only items for which `fn(item)` is `true`.
   *        - Example:
   *          ```js
   *          .filter(e => e.name === "Sign Up" && e.properties.country === "US")
   *          ```
   *
   *     2. **map(fn)**:
   *        - Transform each item in the collection.
   *        - Example:
   *          ```js
   *          .map(e => {
   *            return {
   *              originalEventName: e.name,
   *              city: e.properties.$city
   *            };
   *          })
   *          ```
   *
   *     3. **reduce(reducerFn)**:
   *        - Aggregates the entire collection into **one** value.
   *        - Built-in reducers exist (see below), or you can write a custom function with signature
   *          `(accumulators, items) => { ... }`.
   *
   *     4. **groupBy(keys, reducer)**:
   *        - Group items by the specified keys, then apply a reducer to each group.
   *        - Returns an array of objects in the form:
   *          ```js
   *          [ { key: [...], value: <reduced result> }, ... ]
   *          ```
   *        - **Keys** can be property paths like `'properties.$city'` or a function `(item) => item.name`.
   *        - Example:
   *          ```js
   *          .groupBy([
   *            "properties.country",
   *            "properties.browser"
   *          ], mixpanel.reducer.count())
   *          ```
   *
   *     5. **groupByUser([optionalKeys], reducer)**:
   *        - Similar to `groupBy`, but automatically groups all events for each user (`distinct_id`) **in chronological order**.
   *        - Allows analysis of user event sequences, e.g., finding the next event after a `login`.
   *        - The reducer function's signature is `(state, events) => { ... }` where `state` is the previously returned value.
   *        - Example:
   *          ```js
   *          .groupByUser([], function(state, events){
   *            // examine event sequence...
   *            // return an updated state.
   *          });
   *          ```
   *
   *     6. **sortAsc(accessor)** / **sortDesc(accessor)**:
   *        - Sort the collection by an accessor property or function.
   *        - Example:
   *          ```js
   *          .sortDesc("value")
   *          ```
   *
   *     7. **flatten()**:
   *        - Flattens arrays inside the collection into individual items.
   *
   *     --------------------------------------------------------------------------------------------
   *     ## **BUILT-IN REDUCERS**
   *
   *     Reducers turn multiple items into a single value (for `.reduce()` or per-group in `.groupBy()`). Some commonly used:
   *
   *     1. **mixpanel.reducer.count()**
   *        - Count the number of items.
   *
   *     2. **mixpanel.reducer.sum(accessor)** / **mixpanel.reducer.avg(accessor)**
   *        - Sum or average numeric values. `accessor` can be a property string (e.g. 'properties.price') or a function.
   *
   *     3. **mixpanel.reducer.min(accessor)** / **mixpanel.reducer.max(accessor)**
   *        - The min or max numeric value in a collection.
   *
   *     4. **mixpanel.reducer.min_by(accessor)** / **max_by(accessor)**
   *        - Returns the item with the smallest/largest numeric accessor value.
   *
   *     5. **mixpanel.reducer.numeric_percentiles(accessor, [p1, p2, ...])**
   *        - Approximate percentile values (e.g., 50th, 90th, etc.)
   *
   *     6. **mixpanel.reducer.top(N)**
   *        - Returns the top N items by numeric `value`.
   *
   *     7. **mixpanel.reducer.any()** / **mixpanel.reducer.null()** / **mixpanel.reducer.object_merge()**
   *        - `any()`: Returns any one item.
   *        - `null()`: Always returns null.
   *        - `object_merge()`: Merge multiple objects by summing numeric fields.
   *
   *     --------------------------------------------------------------------------------------------
   *     ## **SEGMENTATION EXPRESSIONS**
   *
   *     When using `event_selectors` or `user_selectors`, or the optional `selectors` in `join()`, you can supply
   *     **Segmentation Expressions** to filter by properties. Common operators:
   *      - `==`, `!=`, `>`, `>=`, `<`, `<=`, `in`, `and`, `or`, `not`
   *      - Typecasts: `string(...)`, `number(...)`, `boolean(...)`
   *      - Example: `properties["app_name"] == "gmail" and user["age"] > 30`
   *
   *     --------------------------------------------------------------------------------------------
   *     ## **PARAMS**
   *
   *     You can pass a `params` object to the script. It's accessible inside `main()` via the global `params` variable.
   *     For example:
   *     ```js
   *     function main() {
   *       return Events({
   *         from_date: params.start_date,
   *         to_date: params.end_date,
   *         event_selectors: [{ event: params.eventName }]
   *       });
   *     }
   *     ```
   *     This makes your query reusable for different date ranges or event names.
   *
   *     --------------------------------------------------------------------------------------------
   *     ## **EXAMPLES**
   *
   *     1. **All events named 'SERVER_EXECUTE_ACTION_END' from last 7 days, filtering on `app_name=gmail`:**
   *     ```js
   *     function main() {
   *       var now = new Date().getTime();
   *       var sevenDaysAgo = now - (7 * 24 * 60 * 60 * 1000);
   *       return Events()
   *         .filter(e => e.name === 'SERVER_EXECUTE_ACTION_END'
   *                    && e.properties.app_name === 'gmail'
   *                    && e.time >= sevenDaysAgo);
   *     }
   *     ```
   *
   *     2. **Getting user profiles who signed up in 2024**
   *     ```js
   *     function main() {
   *       return People()
   *         .filter(u => {
   *           var signup = new Date(u.properties.signup_date);
   *           return signup.getFullYear() === 2024;
   *         });
   *     }
   *     ```
   *
   *     3. **Join users and events (inner join) for a date range, filter by US users over age 30, then group by event name**
   *     ```js
   *     function main() {
   *       return join(
   *         Events({ from_date: '2024-01-01', to_date: '2024-01-31' }),
   *         People(),
   *         {
   *           type: 'inner',
   *           selectors: [ { selector: 'properties[\"country\"] == "US" and user[\"age\"] > 30' } ]
   *         }
   *       )
   *       .filter(tuple => tuple.event)
   *       .groupBy([ev => ev.event.name], mixpanel.reducer.count());
   *     }
   *     ```
   *
   *     4. **Counting events by user using `groupByUser`**
   *     ```js
   *     function main() {
   *       return Events({
   *         from_date: params.start_date,
   *         to_date: params.end_date
   *       })
   *       .groupByUser(function(state, events) {
   *         // 'state' is the accumulator for this user; 'events' is the next chunk (in time order)
   *         state = state || 0; // init state if undefined
   *         return state + events.length; // increment by number of events in this chunk
   *       });
   *     }
   *     ```
   *
   *     5. **Combining transformations**
   *     ```js
   *     function main() {
   *       return Events({
   *         from_date: '2025-01-01',
   *         to_date:   '2025-01-31',
   *         event_selectors: [{ event: 'purchase' }]
   *       })
   *       .filter(e => e.properties.country === 'CA')
   *       .map(e => e.properties.amount)
   *       .reduce(mixpanel.reducer.sum());
   *     }
   *     ```
   *
   *     --------------------------------------------------------------------------------------------
   *     ### **IMPORTANT**: The final result returned by `main()` must be your final data. You can return:
   *       - An array or list of objects.
   *       - A single number (if you used `.reduce()` to a numeric total).
   *       - A nested array if you used `.groupBy(...)`.
   *     --------------------------------------------------------------------------------------------
   *
   *     **Include `function main() { ... }` in its entirety** in this field. This ensures the Mixpanel JQL engine runs your code.
   *
   */
  script?: string;
  /**
   * Workspace Id
   * @description The ID of the Mixpanel workspace, if applicable.
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_JQL_QUERY tool output.
 */
type MIXPANEL_JQL_QUERY_OUTPUT = {
  /**
   * Data
   * @description The raw data (JSON) returned by Mixpanel after running your JQL script.
   */
  data?: unknown;
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MIXPANEL's MIXPANEL_LIST_COHORTS tool input.
 */
type MIXPANEL_LIST_COHORTS_INPUT = {
  /**
   * Project Id
   * @description The ID of the project to query. Required if using service account authentication.
   */
  project_id?: number;
  /**
   * Workspace Id
   * @description The ID of the workspace if applicable
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_LIST_COHORTS tool output.
 */
type MIXPANEL_LIST_COHORTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Cohorts
       * @description List of cohorts in the project containing id, project_id, name, description, data_group_id, count, is_visible and created timestamp
       */
      cohorts?: {
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
 * Type of MIXPANEL's MIXPANEL_LIST_FUNNELS tool input.
 */
type MIXPANEL_LIST_FUNNELS_INPUT = {
  /**
   * Project Id
   * @description Required if using service account to authenticate request
   */
  project_id?: number;
  /**
   * Workspace Id
   * @description The id of the workspace if applicable
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_LIST_FUNNELS tool output.
 */
type MIXPANEL_LIST_FUNNELS_OUTPUT = {
  /**
   * Data
   * @description Array of funnel information
   */
  data?: {
      /**
       * Funnel Id
       * @description The id of the funnel
       */
      funnel_id: number;
      /**
       * Name
       * @description The name of the funnel
       */
      name: string;
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
 * Type of MIXPANEL's MIXPANEL_PROFILE_EVENT_ACTIVITY tool input.
 */
type MIXPANEL_PROFILE_EVENT_ACTIVITY_INPUT = {
  /**
   * Distinct Ids
   * @description List of distinct_ids to return activity feeds for
   */
  distinct_ids?: string[];
  /**
   * From Date
   * Format: date
   * @description Start date for the query (inclusive, format: YYYY-MM-DD)
   */
  from_date?: string;
  /**
   * Project Id
   * @description The ID of the project to query. Required if using service account authentication.
   */
  project_id?: number;
  /**
   * To Date
   * Format: date
   * @description End date for the query (inclusive, format: YYYY-MM-DD)
   */
  to_date?: string;
  /**
   * Workspace Id
   * @description The ID of the workspace if applicable
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_PROFILE_EVENT_ACTIVITY tool output.
 */
type MIXPANEL_PROFILE_EVENT_ACTIVITY_OUTPUT = {
  /**
   * Data
   * @description Raw query results data
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
 * Type of MIXPANEL's MIXPANEL_QUERY_FREQUENCY_REPORT tool input.
 */
type MIXPANEL_QUERY_FREQUENCY_REPORT_INPUT = {
  /**
   * Addiction Unit
   * @description The granularity to return frequency of actions at
   */
  addiction_unit?: string;
  /**
   * Event
   * @description The event to generate returning counts for
   * @default null
   */
  event: string | null;
  /**
   * From Date
   * @description The date in yyyy-mm-dd format to begin querying from (inclusive)
   */
  from_date?: string;
  /**
   * Limit
   * @description Return the top limit segmentation values
   * @default null
   */
  limit: number | null;
  /**
   * On
   * @description The property expression to segment the second event on
   * @default null
   */
  on: string | null;
  /**
   * Project Id
   * @description Required if using service account to authenticate request
   */
  project_id?: number;
  /**
   * To Date
   * @description The date in yyyy-mm-dd format to query to (inclusive)
   */
  to_date?: string;
  /**
   * Unit
   * @description The overall time period to return frequency of actions for
   */
  unit?: string;
  /**
   * Where
   * @description An expression to filter the returning events by
   * @default null
   */
  where: string | null;
  /**
   * Workspace Id
   * @description The id of the workspace if applicable
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_QUERY_FREQUENCY_REPORT tool output.
 */
type MIXPANEL_QUERY_FREQUENCY_REPORT_OUTPUT = {
  /**
   * Computed At
   * @description Timestamp when the data was computed
   */
  computed_at?: string;
  /**
   * Data
   * @description The frequency data
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
   * Metadata
   * @description Metadata about the query
   */
  metadata?: {
      [key: string]: unknown;
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MIXPANEL's MIXPANEL_QUERY_FUNNEL tool input.
 */
type MIXPANEL_QUERY_FUNNEL_INPUT = {
  /**
   * From Date
   * @description The date in yyyy-mm-dd format to begin querying from (inclusive)
   */
  from_date?: string;
  /**
   * Funnel Id
   * @description The funnel that you wish to get data for
   */
  funnel_id?: number;
  /**
   * Interval
   * @description The number of days you want each bucket to contain
   * @default 1
   */
  interval: number | null;
  /**
   * Length
   * @description The number of units each user has to complete the funnel. May not be greater than 90 days
   * @default null
   */
  length: number | null;
  /**
   * Length Unit
   * @description The unit applied to the length parameter
   * @default null
   */
  length_unit: string | null;
  /**
   * Limit
   * @description Return the top property values. Maximum value 10,000
   * @default 255
   */
  limit: number | null;
  /**
   * On
   * @description The property expression to segment the event on
   * @default null
   */
  on: string | null;
  /**
   * Project Id
   * @description Required if using service account to authenticate request
   */
  project_id?: number;
  /**
   * To Date
   * @description The date in yyyy-mm-dd format to query to (inclusive)
   */
  to_date?: string;
  /**
   * Unit
   * @description Alternate way of specifying interval
   * @default null
   */
  unit: string | null;
  /**
   * Where
   * @description An expression to filter events by
   * @default null
   */
  where: string | null;
  /**
   * Workspace Id
   * @description The id of the workspace if applicable
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_QUERY_FUNNEL tool output.
 */
type MIXPANEL_QUERY_FUNNEL_OUTPUT = {
  /**
   * Data
   * @description Raw funnel query data
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
 * Type of MIXPANEL's MIXPANEL_QUERY_INSIGHT tool input.
 */
type MIXPANEL_QUERY_INSIGHT_INPUT = {
  /**
   * Bookmark Id
   * @description The ID of your Insights report
   */
  bookmark_id?: number;
  /**
   * Project Id
   * @description Required if using service account to authenticate request
   */
  project_id?: number;
  /**
   * Workspace Id
   * @description The id of the workspace if applicable
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_QUERY_INSIGHT tool output.
 */
type MIXPANEL_QUERY_INSIGHT_OUTPUT = {
  /**
   * Data
   * @description Raw insight query data
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
 * Type of MIXPANEL's MIXPANEL_QUERY_NUMERIC_AVERAGE tool input.
 */
type MIXPANEL_QUERY_NUMERIC_AVERAGE_INPUT = {
  /**
   * Event
   * @description The event to get data for (single event name)
   */
  event?: string;
  /**
   * From Date
   * @description The date in yyyy-mm-dd format to begin querying from (inclusive)
   */
  from_date?: string;
  /**
   * On
   * @description The numeric expression to average per unit time (should evaluate to a number)
   */
  on?: string;
  /**
   * Project Id
   * @description Required if using service account to authenticate request
   */
  project_id?: number;
  /**
   * To Date
   * @description The date in yyyy-mm-dd format to query to (inclusive)
   */
  to_date?: string;
  /**
   * Unit
   * @description The time unit for bucketing values
   * @default day
   */
  unit: string | null;
  /**
   * Where
   * @description An expression to filter events by
   * @default null
   */
  where: string | null;
  /**
   * Workspace Id
   * @description The id of the workspace if applicable
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_QUERY_NUMERIC_AVERAGE tool output.
 */
type MIXPANEL_QUERY_NUMERIC_AVERAGE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Results
       * @description Map of dates to averaged values (can be null if no data)
       */
      results: {
          [key: string]: number | null;
      };
      /**
       * Status
       * @description Status of the query
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
 * Type of MIXPANEL's MIXPANEL_QUERY_NUMERIC_SEGMENTATION tool input.
 */
type MIXPANEL_QUERY_NUMERIC_SEGMENTATION_INPUT = {
  /**
   * Event
   * @description The event to get data for (single event name)
   */
  event?: string;
  /**
   * From Date
   * @description The date in yyyy-mm-dd format to begin querying from (inclusive)
   */
  from_date?: string;
  /**
   * On
   * @description The numeric property expression to segment the event on
   */
  on?: string;
  /**
   * Project Id
   * @description Required if using service account to authenticate request
   */
  project_id?: number;
  /**
   * To Date
   * @description The date in yyyy-mm-dd format to query to (inclusive)
   */
  to_date?: string;
  /**
   * Type
   * @description The time unit for bucketing values
   * @default day
   */
  type: string | null;
  /**
   * Unit
   * @description The time unit for bucketing property values
   * @default day
   */
  unit: string | null;
  /**
   * Where
   * @description An expression to filter events by
   * @default null
   */
  where: string | null;
  /**
   * Workspace Id
   * @description The id of the workspace if applicable
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_QUERY_NUMERIC_SEGMENTATION tool output.
 */
type MIXPANEL_QUERY_NUMERIC_SEGMENTATION_OUTPUT = {
  /**
   * Data
   * @description Raw numeric segmentation query data
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
 * Type of MIXPANEL's MIXPANEL_QUERY_NUMERIC_SUM tool input.
 */
type MIXPANEL_QUERY_NUMERIC_SUM_INPUT = {
  /**
   * Event
   * @description The event to get data for (single event name)
   */
  event?: string;
  /**
   * From Date
   * @description The date in yyyy-mm-dd format to begin querying from (inclusive)
   */
  from_date?: string;
  /**
   * On
   * @description The numeric expression to sum per unit time (should evaluate to a number)
   */
  on?: string;
  /**
   * Project Id
   * @description Required if using service account to authenticate request
   */
  project_id?: number;
  /**
   * To Date
   * @description The date in yyyy-mm-dd format to query to (inclusive)
   */
  to_date?: string;
  /**
   * Unit
   * @description The time unit for bucketing values
   * @default day
   */
  unit: string | null;
  /**
   * Where
   * @description An expression to filter events by
   * @default null
   */
  where: string | null;
  /**
   * Workspace Id
   * @description The id of the workspace if applicable
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_QUERY_NUMERIC_SUM tool output.
 */
type MIXPANEL_QUERY_NUMERIC_SUM_OUTPUT = {
  /**
   * Data
   * @description Raw numeric sum query data
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
 * Type of MIXPANEL's MIXPANEL_QUERY_PROFILES tool input.
 */
type MIXPANEL_QUERY_PROFILES_INPUT = {
  /**
   * As Of Timestamp
   * @description Used with behaviors parameter for large exports
   * @default null
   */
  as_of_timestamp: number | null;
  /**
   * Behaviors
   * @description Required when using event selector for user profiles
   * @default null
   */
  behaviors: number | null;
  /**
   * Data Group Id
   * @description The ID of the group key, used when querying group profiles
   * @default null
   */
  data_group_id: string | null;
  /**
   * Distinct Id
   * @description A unique identifier used to distinguish an individual profile
   * @default null
   */
  distinct_id: string | null;
  /**
   * Distinct Ids
   * @description A list of distinct_ids to retrieve profiles for
   * @default null
   */
  distinct_ids: string[] | null;
  /**
   * Filter By Cohort
   * @description Filter by cohort ID. Example: {'id': 12345}
   * @default null
   */
  filter_by_cohort: {
      [key: string]: number;
  } | null;
  /**
   * Include All Users
   * @description When using filter_by_cohort, whether to include all distinct_ids even without profiles
   * @default true
   */
  include_all_users: boolean | null;
  /**
   * Output Properties
   * @description List of property names to return in the response
   * @default null
   */
  output_properties: string[] | null;
  /**
   * Page
   * @description Which page of results to retrieve (starts at 0)
   * @default null
   */
  page: number | null;
  /**
   * Project Id
   * @description The ID of the project to query. Required if using service account authentication.
   */
  project_id?: number;
  /**
   * Session Id
   * @description Session ID from a previous query for pagination
   * @default null
   */
  session_id: string | null;
  /**
   * Where
   * @description An expression to filter users (or groups) by
   * @default null
   */
  where: string | null;
  /**
   * Workspace Id
   * @description The ID of the workspace if applicable
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_QUERY_PROFILES tool output.
 */
type MIXPANEL_QUERY_PROFILES_OUTPUT = {
  /**
   * Data
   * @description Raw query results data
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
 * Type of MIXPANEL's MIXPANEL_QUERY_RETENTION_REPORT tool input.
 */
type MIXPANEL_QUERY_RETENTION_REPORT_INPUT = {
  /**
   * Born Event
   * @description The first event a user must do to be counted in a birth retention cohort
   * @default null
   */
  born_event: string | null;
  /**
   * Born Where
   * @description An expression to filter born_events by
   * @default null
   */
  born_where: string | null;
  /**
   * Event
   * @description The event to generate returning counts for
   * @default null
   */
  event: string | null;
  /**
   * From Date
   * @description The date in yyyy-mm-dd format to begin querying from (inclusive)
   */
  from_date?: string;
  /**
   * Interval
   * @description The number of units per individual bucketed interval
   * @default 1
   */
  interval: number | null;
  /**
   * Interval Count
   * @description The number of individual buckets that are returned
   * @default 1
   */
  interval_count: number | null;
  /**
   * Limit
   * @description Return the top limit segmentation values
   * @default null
   */
  limit: number | null;
  /**
   * On
   * @description The property expression to segment the second event on
   * @default null
   */
  on: string | null;
  /**
   * Project Id
   * @description Required if using service account to authenticate request
   */
  project_id?: number;
  /**
   * Retention Type
   * @description Type of retention analysis
   * @default birth
   */
  retention_type: string;
  /**
   * To Date
   * @description The date in yyyy-mm-dd format to query to (inclusive)
   */
  to_date?: string;
  /**
   * Unbounded Retention
   * @description Whether retention values accumulate from right to left
   * @default false
   */
  unbounded_retention: boolean | null;
  /**
   * Unit
   * @description The interval unit
   * @default day
   */
  unit: string | null;
  /**
   * Where
   * @description An expression to filter events by
   * @default null
   */
  where: string | null;
  /**
   * Workspace Id
   * @description The id of the workspace if applicable
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_QUERY_RETENTION_REPORT tool output.
 */
type MIXPANEL_QUERY_RETENTION_REPORT_OUTPUT = {
  /**
   * Data
   * @description Raw retention query data
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
 * Type of MIXPANEL's MIXPANEL_QUERY_SEGMENTATION tool input.
 */
type MIXPANEL_QUERY_SEGMENTATION_INPUT = {
  /**
   * Event
   * @description The event to get data for (single event name)
   */
  event?: string;
  /**
   * From Date
   * @description The date in yyyy-mm-dd format to begin querying from (inclusive)
   */
  from_date?: string;
  /**
   * Interval
   * @description Number of days to bucket results into (used with type != 'general')
   * @default null
   */
  interval: number | null;
  /**
   * Limit
   * @description Return the top N property values (max 10000)
   * @default 60
   */
  limit: number | null;
  /**
   * On
   * @description The property expression to segment the event on
   * @default null
   */
  on: string | null;
  /**
   * Project Id
   * @description Required if using service account to authenticate request
   */
  project_id?: number;
  /**
   * To Date
   * @description The date in yyyy-mm-dd format to query to (inclusive)
   */
  to_date?: string;
  /**
   * Type
   * @description Type of count to return
   * @default general
   */
  type: string | null;
  /**
   * Unit
   * @description The time unit for bucketing property values
   * @default day
   */
  unit: string | null;
  /**
   * Where
   * @description An expression to filter events by
   * @default null
   */
  where: string | null;
  /**
   * Workspace Id
   * @description The id of the workspace if applicable
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_QUERY_SEGMENTATION tool output.
 */
type MIXPANEL_QUERY_SEGMENTATION_OUTPUT = {
  /**
   * Data
   * @description Raw segmentation query data
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
 * Type of MIXPANEL's MIXPANEL_TODAYS_TOP_EVENTS tool input.
 */
type MIXPANEL_TODAYS_TOP_EVENTS_INPUT = {
  /**
   * Limit
   * @description The maximum number of events to return
   * @default 100
   */
  limit: number | null;
  /**
   * Project Id
   * @description Required if using service account to authenticate request
   */
  project_id?: number;
  /**
   * Type
   * @description The analysis type you would like to get data for - such as general, unique, or average events
   */
  type?: string;
  /**
   * Workspace Id
   * @description The id of the workspace if applicable
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_TODAYS_TOP_EVENTS tool output.
 */
type MIXPANEL_TODAYS_TOP_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Raw top events data
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
 * Type of MIXPANEL's MIXPANEL_TOP_EVENTS tool input.
 */
type MIXPANEL_TOP_EVENTS_INPUT = {
  /**
   * Limit
   * @description The maximum number of values to return
   * @default 255
   */
  limit: number | null;
  /**
   * Project Id
   * @description Required if using service account to authenticate request
   */
  project_id?: number;
  /**
   * Type
   * @description The analysis type you would like to get data for - such as general, unique, or average events
   */
  type?: string;
  /**
   * Workspace Id
   * @description The id of the workspace if applicable
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_TOP_EVENTS tool output.
 */
type MIXPANEL_TOP_EVENTS_OUTPUT = {
  /**
   * Data
   * @description Raw top events data
   */
  data?: unknown[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of MIXPANEL's MIXPANEL_TOP_EVENT_PROPERTIES tool input.
 */
type MIXPANEL_TOP_EVENT_PROPERTIES_INPUT = {
  /**
   * Event
   * @description The event that you wish to get data for. Note: this is a single event name, not an array
   */
  event?: string;
  /**
   * Limit
   * @description The maximum number of properties to return
   * @default 10
   */
  limit: number | null;
  /**
   * Project Id
   * @description Required if using service account to authenticate request
   */
  project_id?: number;
  /**
   * Workspace Id
   * @description The id of the workspace if applicable
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_TOP_EVENT_PROPERTIES tool output.
 */
type MIXPANEL_TOP_EVENT_PROPERTIES_OUTPUT = {
  /**
   * Data
   * @description Raw top event properties data
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
 * Type of MIXPANEL's MIXPANEL_TOP_EVENT_PROPERTY_VALUES tool input.
 */
type MIXPANEL_TOP_EVENT_PROPERTY_VALUES_INPUT = {
  /**
   * Event
   * @description The event that you wish to get data for. Note: this is a single event name, not an array
   */
  event?: string;
  /**
   * Limit
   * @description The maximum number of values to return
   * @default 255
   */
  limit: number | null;
  /**
   * Name
   * @description The name of the property you would like to get data for
   */
  name?: string;
  /**
   * Project Id
   * @description Required if using service account to authenticate request
   */
  project_id?: number;
  /**
   * Workspace Id
   * @description The id of the workspace if applicable
   * @default null
   */
  workspace_id: number | null;
};

/**
 * Type of MIXPANEL's MIXPANEL_TOP_EVENT_PROPERTY_VALUES tool output.
 */
type MIXPANEL_TOP_EVENT_PROPERTY_VALUES_OUTPUT = {
  /**
   * Data
   * @description Raw top event property values data as a list
   */
  data?: unknown[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "MIXPANEL".
 */
export type MIXPANEL_TOOL_INPUTS = {
  AGGREGATED_EVENT_PROPERTY_VALUES: MIXPANEL_AGGREGATED_EVENT_PROPERTY_VALUES_INPUT
  AGGREGATE_EVENTS: MIXPANEL_AGGREGATE_EVENTS_INPUT
  AGGREGATE_EVENT_COUNTS: MIXPANEL_AGGREGATE_EVENT_COUNTS_INPUT
  GET_ALL_PROJECTS: MIXPANEL_GET_ALL_PROJECTS_INPUT
  JQL_QUERY: MIXPANEL_JQL_QUERY_INPUT
  LIST_COHORTS: MIXPANEL_LIST_COHORTS_INPUT
  LIST_FUNNELS: MIXPANEL_LIST_FUNNELS_INPUT
  PROFILE_EVENT_ACTIVITY: MIXPANEL_PROFILE_EVENT_ACTIVITY_INPUT
  QUERY_FREQUENCY_REPORT: MIXPANEL_QUERY_FREQUENCY_REPORT_INPUT
  QUERY_FUNNEL: MIXPANEL_QUERY_FUNNEL_INPUT
  QUERY_INSIGHT: MIXPANEL_QUERY_INSIGHT_INPUT
  QUERY_NUMERIC_AVERAGE: MIXPANEL_QUERY_NUMERIC_AVERAGE_INPUT
  QUERY_NUMERIC_SEGMENTATION: MIXPANEL_QUERY_NUMERIC_SEGMENTATION_INPUT
  QUERY_NUMERIC_SUM: MIXPANEL_QUERY_NUMERIC_SUM_INPUT
  QUERY_PROFILES: MIXPANEL_QUERY_PROFILES_INPUT
  QUERY_RETENTION_REPORT: MIXPANEL_QUERY_RETENTION_REPORT_INPUT
  QUERY_SEGMENTATION: MIXPANEL_QUERY_SEGMENTATION_INPUT
  TODAYS_TOP_EVENTS: MIXPANEL_TODAYS_TOP_EVENTS_INPUT
  TOP_EVENTS: MIXPANEL_TOP_EVENTS_INPUT
  TOP_EVENT_PROPERTIES: MIXPANEL_TOP_EVENT_PROPERTIES_INPUT
  TOP_EVENT_PROPERTY_VALUES: MIXPANEL_TOP_EVENT_PROPERTY_VALUES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "MIXPANEL".
 */
export type MIXPANEL_TOOL_OUTPUTS = {
  AGGREGATED_EVENT_PROPERTY_VALUES: MIXPANEL_AGGREGATED_EVENT_PROPERTY_VALUES_OUTPUT
  AGGREGATE_EVENTS: MIXPANEL_AGGREGATE_EVENTS_OUTPUT
  AGGREGATE_EVENT_COUNTS: MIXPANEL_AGGREGATE_EVENT_COUNTS_OUTPUT
  GET_ALL_PROJECTS: MIXPANEL_GET_ALL_PROJECTS_OUTPUT
  JQL_QUERY: MIXPANEL_JQL_QUERY_OUTPUT
  LIST_COHORTS: MIXPANEL_LIST_COHORTS_OUTPUT
  LIST_FUNNELS: MIXPANEL_LIST_FUNNELS_OUTPUT
  PROFILE_EVENT_ACTIVITY: MIXPANEL_PROFILE_EVENT_ACTIVITY_OUTPUT
  QUERY_FREQUENCY_REPORT: MIXPANEL_QUERY_FREQUENCY_REPORT_OUTPUT
  QUERY_FUNNEL: MIXPANEL_QUERY_FUNNEL_OUTPUT
  QUERY_INSIGHT: MIXPANEL_QUERY_INSIGHT_OUTPUT
  QUERY_NUMERIC_AVERAGE: MIXPANEL_QUERY_NUMERIC_AVERAGE_OUTPUT
  QUERY_NUMERIC_SEGMENTATION: MIXPANEL_QUERY_NUMERIC_SEGMENTATION_OUTPUT
  QUERY_NUMERIC_SUM: MIXPANEL_QUERY_NUMERIC_SUM_OUTPUT
  QUERY_PROFILES: MIXPANEL_QUERY_PROFILES_OUTPUT
  QUERY_RETENTION_REPORT: MIXPANEL_QUERY_RETENTION_REPORT_OUTPUT
  QUERY_SEGMENTATION: MIXPANEL_QUERY_SEGMENTATION_OUTPUT
  TODAYS_TOP_EVENTS: MIXPANEL_TODAYS_TOP_EVENTS_OUTPUT
  TOP_EVENTS: MIXPANEL_TOP_EVENTS_OUTPUT
  TOP_EVENT_PROPERTIES: MIXPANEL_TOP_EVENT_PROPERTIES_OUTPUT
  TOP_EVENT_PROPERTY_VALUES: MIXPANEL_TOP_EVENT_PROPERTY_VALUES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's MIXPANEL toolkit.
 */
export const MIXPANEL = {
  slug: "mixpanel",
  tools: {
    /**
     * Get unique, total, or average data for a single event and property over days, weeks, or months. the query api has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries.
     */
    AGGREGATED_EVENT_PROPERTY_VALUES: "MIXPANEL_AGGREGATED_EVENT_PROPERTY_VALUES",
    /**
     * Get aggregate event counts over time. supports different types of aggregation: general, unique, average, sum.
     */
    AGGREGATE_EVENTS: "MIXPANEL_AGGREGATE_EVENTS",
    /**
     * Get aggregate event counts over time. supports different types of aggregation: general, unique, average, sum.
     */
    AGGREGATE_EVENT_COUNTS: "MIXPANEL_AGGREGATE_EVENT_COUNTS",
    /**
     * Get all projects associated with the authenticated mixpanel account. returns project details including name, permissions, role, domain, and other configuration details.
     */
    GET_ALL_PROJECTS: "MIXPANEL_GET_ALL_PROJECTS",
    /**
     * Execute a custom jql (javascript query language) query against mixpanel's query api. key constraints: - 60 queries/hour, max 5 concurrent queries. - 2-minute execution timeout. - 5 gb data processing limit, 2 gb output limit. - no remote network requests (xmlhttprequest) are allowed inside the jql script.
     */
    JQL_QUERY: "MIXPANEL_JQL_QUERY",
    /**
     * Get list of all cohorts in a mixpanel project. returns cohort details including name, id, count, description, creation date, and visibility. the query api has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries.
     */
    LIST_COHORTS: "MIXPANEL_LIST_COHORTS",
    /**
     * Get the names and funnel ids of your funnels. the query api has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries.
     */
    LIST_FUNNELS: "MIXPANEL_LIST_FUNNELS",
    /**
     * Get event activity feed for specified users from mixpanel query api. the query api has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries.
     */
    PROFILE_EVENT_ACTIVITY: "MIXPANEL_PROFILE_EVENT_ACTIVITY",
    /**
     * Get data about how frequently users are performing events. the query api has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries. example response with unit="day" and addiction unit="hour": { "2012-01-01": [305, 107, 60, 41, ...], # users who did event in 1+ hours, 2+ hours, etc. "2012-01-02": [495, 204, 117, 77, ...], "2012-01-03": [671, 324, 176, 122, ...] }
     */
    QUERY_FREQUENCY_REPORT: "MIXPANEL_QUERY_FREQUENCY_REPORT",
    /**
     * Get data for a funnel. the query api has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries.
     */
    QUERY_FUNNEL: "MIXPANEL_QUERY_FUNNEL",
    /**
     * Get data from your insights reports. the query api has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries.
     */
    QUERY_INSIGHT: "MIXPANEL_QUERY_INSIGHT",
    /**
     * Averages an expression for events per unit time. the query api has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries. example response: { "status": "ok", "results": { "2024-01-01": 25.5, "2024-01-02": 32.75, "2024-01-03": 28.25 } }
     */
    QUERY_NUMERIC_AVERAGE: "MIXPANEL_QUERY_NUMERIC_AVERAGE",
    /**
     * Get data for an event, segmented and filtered by properties, with values placed into numeric buckets. the query api has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries.
     */
    QUERY_NUMERIC_SEGMENTATION: "MIXPANEL_QUERY_NUMERIC_SEGMENTATION",
    /**
     * Sums an expression for events per unit time. the query api has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries. example response: { "status": "ok", "computed at": "2024-01-20t12:00:00", "results": { "2024-01-01": 150.5, "2024-01-02": 245.75, "2024-01-03": 198.25 } }
     */
    QUERY_NUMERIC_SUM: "MIXPANEL_QUERY_NUMERIC_SUM",
    /**
     * Query user or group profile data from mixpanel. returns list of profiles that match specified parameters. the query api has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries.
     */
    QUERY_PROFILES: "MIXPANEL_QUERY_PROFILES",
    /**
     * Get cohort analysis data. the query api has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries.
     */
    QUERY_RETENTION_REPORT: "MIXPANEL_QUERY_RETENTION_REPORT",
    /**
     * Get data for an event, segmented and filtered by properties. the query api has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries.
     */
    QUERY_SEGMENTATION: "MIXPANEL_QUERY_SEGMENTATION",
    /**
     * Get the top events for today, with their counts and the normalized percent change from yesterday. the query api has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries.
     */
    TODAYS_TOP_EVENTS: "MIXPANEL_TODAYS_TOP_EVENTS",
    /**
     * Get a list of the most common events over the last 31 days. the query api has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries.
     */
    TOP_EVENTS: "MIXPANEL_TOP_EVENTS",
    /**
     * Get the top property names for an event. the query api has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries.
     */
    TOP_EVENT_PROPERTIES: "MIXPANEL_TOP_EVENT_PROPERTIES",
    /**
     * Get the top values for a property. the query api has a rate limit of 60 queries per hour and a maximum of 5 concurrent queries.
     */
    TOP_EVENT_PROPERTY_VALUES: "MIXPANEL_TOP_EVENT_PROPERTY_VALUES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "MIXPANEL".
 */
export type MIXPANEL_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "MIXPANEL".
 */
export type MIXPANEL_TRIGGER_EVENTS = {}
