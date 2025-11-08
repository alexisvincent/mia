// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of DUNGEON_FIGHTER_ONLINE's DUNGEON_FIGHTER_ONLINE_CHARACTER_BASE_INFO tool input.
 */
type DUNGEON_FIGHTER_ONLINE_CHARACTER_BASE_INFO_INPUT = {
  /**
   * Character Id
   * @description Unique identifier of the character.
   */
  character_id?: string;
  /**
   * Server Id
   * @description Identifier of the server where the character exists.
   */
  server_id?: string;
};

/**
 * Type of DUNGEON_FIGHTER_ONLINE's DUNGEON_FIGHTER_ONLINE_CHARACTER_BASE_INFO tool output.
 */
type DUNGEON_FIGHTER_ONLINE_CHARACTER_BASE_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Adventure Id
       * @description Adventure ID if any.
       * @default null
       */
      adventureId: string | null;
      /**
       * Adventure Name
       * @description Adventure name if any.
       * @default null
       */
      adventureName: string | null;
      /**
       * Character Id
       * @description Unique character identifier.
       */
      characterId: string;
      /**
       * Character Name
       * @description Character's name.
       */
      characterName: string;
      /**
       * Fame
       * @description Fame value of the character.
       * @default null
       */
      fame: number | null;
      /**
       * Guild Id
       * @description Guild ID if the character is in a guild.
       * @default null
       */
      guildId: string | null;
      /**
       * Guild Name
       * @description Guild name if the character is in a guild.
       * @default null
       */
      guildName: string | null;
      /**
       * Job Grow Id
       * @description Job grow ID if available.
       * @default null
       */
      jobGrowId: string | null;
      /**
       * Job Grow Name
       * @description Advanced job name if available.
       * @default null
       */
      jobGrowName: string | null;
      /**
       * Job Id
       * @description Job ID of the character.
       */
      jobId: string;
      /**
       * Job Name
       * @description Job name of the character.
       */
      jobName: string;
      /**
       * Level
       * @description Character's level.
       */
      level: number;
  };
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of DUNGEON_FIGHTER_ONLINE's DUNGEON_FIGHTER_ONLINE_CHARACTER_SEARCH tool input.
 */
type DUNGEON_FIGHTER_ONLINE_CHARACTER_SEARCH_INPUT = {
  /**
   * Character Name
   * @description Character name to search for
   */
  characterName?: string;
  /**
   * Limit
   * @description Max results to return (1-100)
   * @default 10
   */
  limit: number;
  /**
   * Server Id
   * @description Server identifier
   */
  serverId?: string;
  /**
   * Word Type
   * @description Search type: 'full' or 'match'
   * @default full
   * @enum {string}
   */
  wordType: "full" | "match";
};

/**
 * Type of DUNGEON_FIGHTER_ONLINE's DUNGEON_FIGHTER_ONLINE_CHARACTER_SEARCH tool output.
 */
type DUNGEON_FIGHTER_ONLINE_CHARACTER_SEARCH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rows
       * @description List of characters matching the search criteria
       */
      rows: {
          /**
           * Character Id
           * @description Character unique identifier
           */
          characterId: string;
          /**
           * Character Name
           * @description Character name
           */
          characterName: string;
          /**
           * Job Grow Id
           * @description Job advancement identifier
           */
          jobGrowId: string;
          /**
           * Job Grow Name
           * @description Job advancement name
           */
          jobGrowName: string;
          /**
           * Job Id
           * @description Job unique identifier
           */
          jobId: string;
          /**
           * Job Name
           * @description Job name
           */
          jobName: string;
          /**
           * Level
           * @description Character level
           */
          level: number;
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
 * Type of DUNGEON_FIGHTER_ONLINE's DUNGEON_FIGHTER_ONLINE_CHARACTER_SKILL_BUFF_AVATAR tool input.
 */
type DUNGEON_FIGHTER_ONLINE_CHARACTER_SKILL_BUFF_AVATAR_INPUT = {
  /**
   * Character Id
   * @description Character unique code
   */
  characterId?: string;
  /**
   * Server Id
   * @description Server ID of the character (see /df/servers)
   */
  serverId?: string;
};

/**
 * Type of DUNGEON_FIGHTER_ONLINE's DUNGEON_FIGHTER_ONLINE_CHARACTER_SKILL_BUFF_AVATAR tool output.
 */
type DUNGEON_FIGHTER_ONLINE_CHARACTER_SKILL_BUFF_AVATAR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Avatar
       * @description List of avatars equipped for this buff skill
       */
      avatar: {
          /**
           * Clone
           * @description Indicates if this avatar is a clone
           */
          clone: boolean;
          /**
           * Item Id
           * @description Avatar item ID
           */
          itemId: string;
          /**
           * Item Name
           * @description Avatar item name
           */
          itemName: string;
          /**
           * Slot Id
           * @description Avatar slot ID
           */
          slotId: string;
          /**
           * Upgrade
           * @description Avatar upgrade level
           */
          upgrade: number;
      }[];
      /**
       * Skill
       * @description Buff skill information
       */
      skill: {
          /**
           * Name
           * @description Buff skill name
           */
          name: string;
          /**
           * Skill Id
           * @description Buff skill ID
           */
          skillId: string;
          /**
           * Value
           * @description Buff skill value
           */
          value: number;
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
 * Type of DUNGEON_FIGHTER_ONLINE's DUNGEON_FIGHTER_ONLINE_CHARACTER_SKILL_BUFF_STATUS tool input.
 */
type DUNGEON_FIGHTER_ONLINE_CHARACTER_SKILL_BUFF_STATUS_INPUT = {
  /**
   * Character Id
   * @description Unique identifier of the character.
   */
  characterId?: string;
  /**
   * Server Id
   * @description Identifier of the server where the character exists.
   */
  serverId?: string;
};

/**
 * Type of DUNGEON_FIGHTER_ONLINE's DUNGEON_FIGHTER_ONLINE_CHARACTER_SKILL_BUFF_STATUS tool output.
 */
type DUNGEON_FIGHTER_ONLINE_CHARACTER_SKILL_BUFF_STATUS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Buffs
       * @description List of buff status entries for the character
       */
      buffs: {
          /**
           * Cooldown
           * @description Remaining cooldown time in seconds, non-negative
           */
          cooldown: number;
          /**
           * Is Active
           * @description Whether the buff is currently active
           */
          isActive: boolean;
          /**
           * Remaining Time
           * @description Remaining buff time in seconds, non-negative
           */
          remainingTime: number;
          /**
           * Skill Id
           * @description Skill unique identifier for the buff
           */
          skillId: string;
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
 * Type of DUNGEON_FIGHTER_ONLINE's DUNGEON_FIGHTER_ONLINE_CHARACTER_STATUS_INFO tool input.
 */
type DUNGEON_FIGHTER_ONLINE_CHARACTER_STATUS_INFO_INPUT = {
  /**
   * Character Id
   * @description Character ID to retrieve status for
   */
  characterId?: string;
  /**
   * Server Id
   * @description Server ID for Dungeon Fighter Online
   */
  serverId?: string;
};

/**
 * Type of DUNGEON_FIGHTER_ONLINE's DUNGEON_FIGHTER_ONLINE_CHARACTER_STATUS_INFO tool output.
 */
type DUNGEON_FIGHTER_ONLINE_CHARACTER_STATUS_INFO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Adventure Name
       * @description Adventurer nickname
       */
      adventureName: string;
      /**
       * Character Id
       * @description Character ID
       */
      characterId: string;
      /**
       * Character Name
       * @description Character name
       */
      characterName: string;
      /**
       * Guild Id
       * @description Guild ID
       */
      guildId: string;
      /**
       * Guild Name
       * @description Guild name
       */
      guildName: string;
      /**
       * Job Grow Id
       * @description Job growth ID
       */
      jobGrowId: string;
      /**
       * Job Id
       * @description Job ID
       */
      jobId: string;
      /**
       * Level
       * @description Character level
       */
      level: number;
      /**
       * Status
       * @description List of status parameters with their values
       */
      status: {
          /**
           * Name
           * @description Status name (e.g., 'HP', 'STR')
           */
          name: string;
          /**
           * Value
           * @description Numeric value of the status parameter
           */
          value: number;
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
 * Type of DUNGEON_FIGHTER_ONLINE's DUNGEON_FIGHTER_ONLINE_CHARACTER_TIMELINE tool input.
 */
type DUNGEON_FIGHTER_ONLINE_CHARACTER_TIMELINE_INPUT = {
  /**
   * Character Id
   * @description Unique identifier of the character
   */
  characterId?: string;
  /**
   * Limit
   * @description Number of timeline records to retrieve
   * @default null
   */
  limit: number | null;
  /**
   * Next
   * @description Pagination token for fetching the next page of results
   * @default null
   */
  next: string | null;
  /**
   * Server Id
   * @description ID of the server hosting the character
   */
  serverId?: string;
};

/**
 * Type of DUNGEON_FIGHTER_ONLINE's DUNGEON_FIGHTER_ONLINE_CHARACTER_TIMELINE tool output.
 */
type DUNGEON_FIGHTER_ONLINE_CHARACTER_TIMELINE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Next
       * @description Token for fetching the next batch of results, if available
       * @default null
       */
      next: string | null;
      /**
       * Timeline
       * @description List of timeline event objects
       */
      timeline: {
          /**
           * Code
           * @description Timeline event code
           */
          code: string;
          /**
           * Data
           * @description Additional event data; structure varies by event
           */
          data: {
              [key: string]: unknown;
          };
          /**
           * Date
           * @description Event occurrence date in ISO 8601 format
           */
          date: string;
          /**
           * Name
           * @description Timeline event name
           */
          name: string;
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
 * Type of DUNGEON_FIGHTER_ONLINE's DUNGEON_FIGHTER_ONLINE_GET_CHARACTER_SKILL_BUFF tool input.
 */
type DUNGEON_FIGHTER_ONLINE_GET_CHARACTER_SKILL_BUFF_INPUT = {
  /**
   * Character Id
   * @description Unique identifier of the character.
   */
  characterId?: string;
  /**
   * Server Id
   * @description Identifier of the server where the character exists.
   */
  serverId?: string;
};

/**
 * Type of DUNGEON_FIGHTER_ONLINE's DUNGEON_FIGHTER_ONLINE_GET_CHARACTER_SKILL_BUFF tool output.
 */
type DUNGEON_FIGHTER_ONLINE_GET_CHARACTER_SKILL_BUFF_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Equipment
       * @description List of equipment items that contribute to the skill buff.
       */
      equipment: {
          /**
           * Item Id
           * @description Unique identifier of the equipped item.
           */
          itemId: string;
          /**
           * Item Name
           * @description Name of the equipped item.
           */
          itemName: string;
          /**
           * Item Type
           * @description Type/category of the equipped item.
           */
          itemType: string;
          /**
           * Slot Id
           * @description Identifier of the equipment slot (e.g., weapon, armor).
           */
          slotId: string;
          /**
           * UpgradeInfo
           * @description Upgrade information for an equipment item.
           * @default null
           */
          upgradeInfo: {
              /**
               * Enchant
               * @description Details of an equipment enchantment.
               * @default null
               */
              enchant: {
                  /**
                   * Enchant Name
                   * @description Name of the enchantment applied to the equipment.
                   */
                  enchantName: string;
                  /**
                   * Enchant Value
                   * @description Numeric value provided by the enchantment.
                   */
                  enchantValue: number;
              } | null;
              /**
               * Reinforce
               * @description Reinforcement level of the equipment (non-negative).
               */
              reinforce: number;
          } | null;
      }[];
      /**
       * Skill
       * @description Details of the buff-providing skill.
       */
      skill: {
          /**
           * Level
           * @description Skill level (must be at least 1).
           */
          level: number;
          /**
           * Name
           * @description Name of the skill providing the buff.
           */
          name: string;
          /**
           * Value
           * @description Numeric buff value granted by this skill.
           */
          value: number;
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
 * Type of DUNGEON_FIGHTER_ONLINE's DUNGEON_FIGHTER_ONLINE_GET_SERVER_LIST tool input.
 */
type DUNGEON_FIGHTER_ONLINE_GET_SERVER_LIST_INPUT = object;

/**
 * Type of DUNGEON_FIGHTER_ONLINE's DUNGEON_FIGHTER_ONLINE_GET_SERVER_LIST tool output.
 */
type DUNGEON_FIGHTER_ONLINE_GET_SERVER_LIST_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Rows
       * @description List of available game servers
       */
      rows: {
          /**
           * Server Id
           * @description Unique server identifier
           */
          serverId: string;
          /**
           * Server Name
           * @description Name of the server (Korean)
           */
          serverName: string;
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
 * Type map of all available tool input types for toolkit "DUNGEON_FIGHTER_ONLINE".
 */
export type DUNGEON_FIGHTER_ONLINE_TOOL_INPUTS = {
  CHARACTER_BASE_INFO: DUNGEON_FIGHTER_ONLINE_CHARACTER_BASE_INFO_INPUT
  CHARACTER_SEARCH: DUNGEON_FIGHTER_ONLINE_CHARACTER_SEARCH_INPUT
  CHARACTER_SKILL_BUFF_AVATAR: DUNGEON_FIGHTER_ONLINE_CHARACTER_SKILL_BUFF_AVATAR_INPUT
  CHARACTER_SKILL_BUFF_STATUS: DUNGEON_FIGHTER_ONLINE_CHARACTER_SKILL_BUFF_STATUS_INPUT
  CHARACTER_STATUS_INFO: DUNGEON_FIGHTER_ONLINE_CHARACTER_STATUS_INFO_INPUT
  CHARACTER_TIMELINE: DUNGEON_FIGHTER_ONLINE_CHARACTER_TIMELINE_INPUT
  GET_CHARACTER_SKILL_BUFF: DUNGEON_FIGHTER_ONLINE_GET_CHARACTER_SKILL_BUFF_INPUT
  GET_SERVER_LIST: DUNGEON_FIGHTER_ONLINE_GET_SERVER_LIST_INPUT
}

/**
 * Type map of all available tool input types for toolkit "DUNGEON_FIGHTER_ONLINE".
 */
export type DUNGEON_FIGHTER_ONLINE_TOOL_OUTPUTS = {
  CHARACTER_BASE_INFO: DUNGEON_FIGHTER_ONLINE_CHARACTER_BASE_INFO_OUTPUT
  CHARACTER_SEARCH: DUNGEON_FIGHTER_ONLINE_CHARACTER_SEARCH_OUTPUT
  CHARACTER_SKILL_BUFF_AVATAR: DUNGEON_FIGHTER_ONLINE_CHARACTER_SKILL_BUFF_AVATAR_OUTPUT
  CHARACTER_SKILL_BUFF_STATUS: DUNGEON_FIGHTER_ONLINE_CHARACTER_SKILL_BUFF_STATUS_OUTPUT
  CHARACTER_STATUS_INFO: DUNGEON_FIGHTER_ONLINE_CHARACTER_STATUS_INFO_OUTPUT
  CHARACTER_TIMELINE: DUNGEON_FIGHTER_ONLINE_CHARACTER_TIMELINE_OUTPUT
  GET_CHARACTER_SKILL_BUFF: DUNGEON_FIGHTER_ONLINE_GET_CHARACTER_SKILL_BUFF_OUTPUT
  GET_SERVER_LIST: DUNGEON_FIGHTER_ONLINE_GET_SERVER_LIST_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's DUNGEON_FIGHTER_ONLINE toolkit.
 */
export const DUNGEON_FIGHTER_ONLINE = {
  slug: "dungeon_fighter_online",
  tools: {
    /**
     * Tool to retrieve base information of a specific character. use after confirming valid server id and character id.
     */
    CHARACTER_BASE_INFO: "DUNGEON_FIGHTER_ONLINE_CHARACTER_BASE_INFO",
    /**
     * Tool to search for characters by name on a given server. use after confirming the server id.
     */
    CHARACTER_SEARCH: "DUNGEON_FIGHTER_ONLINE_CHARACTER_SEARCH",
    /**
     * Tool to fetch skill buff avatar equipment for a character. use when you need to inspect which avatars are equipped for a specific character's buff skill.
     */
    CHARACTER_SKILL_BUFF_AVATAR: "DUNGEON_FIGHTER_ONLINE_CHARACTER_SKILL_BUFF_AVATAR",
    /**
     * Tool to fetch character's skill buff status information. use when you need to know active buff statuses for a specific character.
     */
    CHARACTER_SKILL_BUFF_STATUS: "DUNGEON_FIGHTER_ONLINE_CHARACTER_SKILL_BUFF_STATUS",
    /**
     * Tool to retrieve status information of a specific character. use after obtaining serverid and characterid to fetch current stats.
     */
    CHARACTER_STATUS_INFO: "DUNGEON_FIGHTER_ONLINE_CHARACTER_STATUS_INFO",
    /**
     * Tool to retrieve the timeline of a specific character. use after confirming valid serverid and characterid.
     */
    CHARACTER_TIMELINE: "DUNGEON_FIGHTER_ONLINE_CHARACTER_TIMELINE",
    /**
     * Tool to retrieve skill buff equipment details for a character. use after validating serverid and characterid.
     */
    GET_CHARACTER_SKILL_BUFF: "DUNGEON_FIGHTER_ONLINE_GET_CHARACTER_SKILL_BUFF",
    /**
     * Tool to retrieve the list of available game servers. use when needing to know which servers are available.
     */
    GET_SERVER_LIST: "DUNGEON_FIGHTER_ONLINE_GET_SERVER_LIST",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "DUNGEON_FIGHTER_ONLINE".
 */
export type DUNGEON_FIGHTER_ONLINE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "DUNGEON_FIGHTER_ONLINE".
 */
export type DUNGEON_FIGHTER_ONLINE_TRIGGER_EVENTS = {}
