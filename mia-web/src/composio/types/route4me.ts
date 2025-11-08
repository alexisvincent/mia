// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of ROUTE4ME's ROUTE4ME_GET_VEHICLE tool input.
 */
type ROUTE4ME_GET_VEHICLE_INPUT = object;

/**
 * Type of ROUTE4ME's ROUTE4ME_GET_VEHICLE tool output.
 */
type ROUTE4ME_GET_VEHICLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Vehicles
       * @description List of retrieved vehicle records.
       */
      vehicles: {
          /**
           * Created At
           * @description Timestamp when the vehicle was created.
           * @default null
           */
          created_at: string | null;
          /**
           * Fuel Consumption City
           * @description Fuel consumption in city driving.
           * @default null
           */
          fuel_consumption_city: number | null;
          /**
           * Fuel Consumption Highway
           * @description Fuel consumption on the highway.
           * @default null
           */
          fuel_consumption_highway: number | null;
          /**
           * Fuel Type
           * @description Type of fuel used.
           * @default null
           */
          fuel_type: string | null;
          /**
           * Height Inches
           * @description Height of the vehicle in inches.
           * @default null
           */
          height_inches: number | null;
          /**
           * Height Metric
           * @description Height of the vehicle in meters.
           * @default null
           */
          height_metric: number | null;
          /**
           * Max Payload Lb
           * @description Maximum payload in pounds.
           * @default null
           */
          max_payload_lb: number | null;
          /**
           * Max Payload Metric
           * @description Maximum payload in kilograms.
           * @default null
           */
          max_payload_metric: number | null;
          /**
           * Max Weight Per Axle Group Lb
           * @description Maximum weight per axle group in pounds.
           * @default null
           */
          max_weight_per_axle_group_lb: number | null;
          /**
           * Max Weight Per Axle Group Metric
           * @description Maximum weight per axle group in kilograms.
           * @default null
           */
          max_weight_per_axle_group_metric: number | null;
          /**
           * Mpg City
           * @description Miles per gallon in city driving.
           * @default null
           */
          mpg_city: number | null;
          /**
           * Mpg Highway
           * @description Miles per gallon on the highway.
           * @default null
           */
          mpg_highway: number | null;
          /**
           * Updated At
           * @description Timestamp when the vehicle was last updated.
           * @default null
           */
          updated_at: string | null;
          /**
           * Vehicle Alias
           * @description User-defined name for the vehicle.
           * @default null
           */
          vehicle_alias: string | null;
          /**
           * Vehicle Axle Count
           * @description Number of axles.
           * @default null
           */
          vehicle_axle_count: number | null;
          /**
           * Vehicle Id
           * @description Unique identifier for the vehicle.
           */
          vehicle_id: string;
          /**
           * Vehicle License Plate
           * @description License plate number.
           * @default null
           */
          vehicle_license_plate: string | null;
          /**
           * Vehicle Make
           * @description Manufacturer of the vehicle.
           * @default null
           */
          vehicle_make: string | null;
          /**
           * Vehicle Model
           * @description Model of the vehicle.
           * @default null
           */
          vehicle_model: string | null;
          /**
           * Vehicle Type Id
           * @description Type identifier for the vehicle.
           * @default null
           */
          vehicle_type_id: string | null;
          /**
           * Vehicle Vin
           * @description Vehicle Identification Number.
           * @default null
           */
          vehicle_vin: string | null;
          /**
           * Vehicle Year
           * @description Year of manufacture.
           * @default null
           */
          vehicle_year: number | null;
          /**
           * Weight Lb
           * @description Weight of the vehicle in pounds.
           * @default null
           */
          weight_lb: number | null;
          /**
           * Weight Metric
           * @description Weight of the vehicle in kilograms.
           * @default null
           */
          weight_metric: number | null;
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
 * Type of ROUTE4ME's ROUTE4ME_SET_DESTINATION_STATUS tool input.
 */
type ROUTE4ME_SET_DESTINATION_STATUS_INPUT = {
  /**
   * Destination Ids
   * @description The unique IDs of destinations to update.
   */
  destination_ids?: number[];
  /**
   * Status
   * @description The desired status. Can be `Skipped`, `Completed`, `Failed`, or `Empty`.
   * @enum {string}
   */
  status?: "Skipped" | "Completed" | "Failed" | "Empty";
};

/**
 * Type of ROUTE4ME's ROUTE4ME_SET_DESTINATION_STATUS tool output.
 */
type ROUTE4ME_SET_DESTINATION_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Status
       * @description `true` if the destination status was updated successfully.
       */
      status: boolean;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type map of all available tool input types for toolkit "ROUTE4ME".
 */
export type ROUTE4ME_TOOL_INPUTS = {
  GET_VEHICLE: ROUTE4ME_GET_VEHICLE_INPUT
  SET_DESTINATION_STATUS: ROUTE4ME_SET_DESTINATION_STATUS_INPUT
}

/**
 * Type map of all available tool input types for toolkit "ROUTE4ME".
 */
export type ROUTE4ME_TOOL_OUTPUTS = {
  GET_VEHICLE: ROUTE4ME_GET_VEHICLE_OUTPUT
  SET_DESTINATION_STATUS: ROUTE4ME_SET_DESTINATION_STATUS_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's ROUTE4ME toolkit.
 */
export const ROUTE4ME = {
  slug: "route4me",
  tools: {
    /**
     * Tool to retrieve details of vehicles in the organization. use when you need the full list of vehicles before planning routes or auditing vehicle capacities.
     */
    GET_VEHICLE: "ROUTE4ME_GET_VEHICLE",
    /**
     * Tool to set or update the status of one or more route destinations. use after confirming deliveries to mark stops as skipped, completed, or failed.
     */
    SET_DESTINATION_STATUS: "ROUTE4ME_SET_DESTINATION_STATUS",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "ROUTE4ME".
 */
export type ROUTE4ME_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "ROUTE4ME".
 */
export type ROUTE4ME_TRIGGER_EVENTS = {}
