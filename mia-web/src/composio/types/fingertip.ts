// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of FINGERTIP's FINGERTIP_CREATE_SITE tool input.
 */
type FINGERTIP_CREATE_SITE_INPUT = {
  /**
   * Business Type
   * @description Type of business; can be null.
   */
  businessType?: string | null;
  /**
   * Description
   * @description Description of the site; can be null.
   * @default null
   */
  description: string | null;
  /**
   * Home Page Id
   * @description Home page UUID; can be null.
   * @default null
   */
  homePageId: string | null;
  /**
   * Location Id
   * @description Associated location ID; can be null.
   * @default null
   */
  locationId: string | null;
  /**
   * Logo Media
   * @description Logo media object; can be null.
   * @default null
   */
  logoMedia: unknown;
  /**
   * Name
   * @description Name of the site.
   */
  name?: string;
  /**
   * Slug
   * @description URL-friendly identifier for the site.
   */
  slug?: string;
  /**
   * Social Icons
   * @description Social media icons configuration; can be null.
   * @default null
   */
  socialIcons: unknown;
  /**
   * Status
   * @description Current status; one of EMPTY, UNPUBLISHED, PREVIEW, SOFT_CLAIM, ENABLED, DEMO, ARCHIVED.
   * @default null
   * @enum {string|null}
   */
  status: "EMPTY" | "UNPUBLISHED" | "PREVIEW" | "SOFT_CLAIM" | "ENABLED" | "DEMO" | "ARCHIVED" | null;
  /**
   * Time Zone
   * @description Site time zone; can be null.
   * @default null
   */
  timeZone: string | null;
  /**
   * Workspace Id
   * @description Workspace UUID; can be null.
   * @default null
   */
  workspaceId: string | null;
};

/**
 * Type of FINGERTIP's FINGERTIP_CREATE_SITE tool output.
 */
type FINGERTIP_CREATE_SITE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Site
       * @description The newly created site object.
       */
      site: {
          /**
           * Business Type
           * @description Type of business.
           * @default null
           */
          businessType: string | null;
          /**
           * Created At
           * @description ISO timestamp when the site was created.
           */
          createdAt: string;
          /**
           * Description
           * @description Description of the site.
           * @default null
           */
          description: string | null;
          /**
           * Home Page Id
           * @description Home page UUID.
           * @default null
           */
          homePageId: string | null;
          /**
           * Id
           * @description Unique identifier of the site.
           */
          id: string;
          /**
           * Location Id
           * @description Associated location ID.
           * @default null
           */
          locationId: string | null;
          /**
           * Logo Media
           * @description Logo media object.
           * @default null
           */
          logoMedia: unknown;
          /**
           * Name
           * @description Name of the site.
           */
          name: string;
          /**
           * Override Plan
           * @description Override plan of the site.
           * @default null
           */
          overridePlan: string | null;
          /**
           * Slug
           * @description URL-friendly identifier for the site.
           */
          slug: string;
          /**
           * Social Icons
           * @description Social media icons configuration.
           * @default null
           */
          socialIcons: unknown;
          /**
           * Status
           * @description Current status of the site.
           */
          status: string;
          /**
           * Time Zone
           * @description Site time zone.
           * @default null
           */
          timeZone: string | null;
          /**
           * Updated At
           * @description ISO timestamp when the site was last updated.
           */
          updatedAt: string;
          /**
           * Workspace Id
           * @description Workspace UUID.
           * @default null
           */
          workspaceId: string | null;
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
 * Type of FINGERTIP's FINGERTIP_DELETE_SITE tool input.
 */
type FINGERTIP_DELETE_SITE_INPUT = {
  /**
   * Site Id
   * @description UUID of the site to permanently delete
   */
  siteId?: string;
};

/**
 * Type of FINGERTIP's FINGERTIP_DELETE_SITE tool output.
 */
type FINGERTIP_DELETE_SITE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description True if the site deletion was successful
       */
      success: boolean;
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
 * Type of FINGERTIP's FINGERTIP_DELETE_SITE_MEMBERSHIP tool input.
 */
type FINGERTIP_DELETE_SITE_MEMBERSHIP_INPUT = {
  /**
   * Membership Id
   * @description ID of the site membership to delete (UUID format)
   */
  membership_id?: string;
};

/**
 * Type of FINGERTIP's FINGERTIP_DELETE_SITE_MEMBERSHIP tool output.
 */
type FINGERTIP_DELETE_SITE_MEMBERSHIP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates whether the deletion was successful
       */
      success: boolean;
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
 * Type of FINGERTIP's FINGERTIP_DELETE_WORKSPACE_INVITATION tool input.
 */
type FINGERTIP_DELETE_WORKSPACE_INVITATION_INPUT = {
  /**
   * Invitation Id
   * @description ID of the workspace invitation to delete (UUID format)
   */
  invitation_id?: string;
};

/**
 * Type of FINGERTIP's FINGERTIP_DELETE_WORKSPACE_INVITATION tool output.
 */
type FINGERTIP_DELETE_WORKSPACE_INVITATION_OUTPUT = {
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
 * Type of FINGERTIP's FINGERTIP_GET_COMPREHENSIVE_SITE_ANALYTICS tool input.
 */
type FINGERTIP_GET_COMPREHENSIVE_SITE_ANALYTICS_INPUT = {
  /**
   * Include Store
   * @description Whether to include store analytics in the response
   * @default false
   */
  include_store: boolean | null;
  /**
   * Period
   * @description Time period for analytics data (7d, 30d, 90d, 1y, all)
   * @default 30d
   * @enum {string}
   */
  period: "7d" | "30d" | "90d" | "1y" | "all";
  /**
   * Site Id
   * @description ID of the site whose analytics to retrieve (UUID format)
   */
  site_id?: string;
};

/**
 * Type of FINGERTIP's FINGERTIP_GET_COMPREHENSIVE_SITE_ANALYTICS tool output.
 */
type FINGERTIP_GET_COMPREHENSIVE_SITE_ANALYTICS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Activities
       * @description Daily activity breakdown
       */
      activities: {
          /**
           * Clicks
           * @description Number of clicks for the date
           */
          clicks: number;
          /**
           * Date
           * @description Date in YYYY-MM-DD format
           */
          date: string;
          /**
           * Views
           * @description Number of page views for the date
           */
          views: number;
      }[];
      /**
       * Blocks
       * @description Block interaction analytics
       */
      blocks: {
          /**
           * Block Id
           * @description Identifier for the block on the page
           */
          blockId: string;
          /**
           * Block Type
           * @description Type of the block, e.g., text or image
           */
          blockType: string;
          /**
           * Interactions
           * @description Number of interactions with this block
           */
          interactions: number;
      }[];
      /**
       * Browsers
       * @description Browser usage breakdown
       */
      browsers: {
          /**
           * Label
           * @description Segment label, e.g., Referrer, Device, or Location name
           */
          label: string;
          /**
           * Percentage
           * @description Share percentage of this segment
           */
          percentage: number;
          /**
           * Value
           * @description Absolute count for this segment
           */
          value: number;
      }[];
      /**
       * Cities
       * @description City-level geographic breakdown
       */
      cities: {
          /**
           * Label
           * @description Segment label, e.g., Referrer, Device, or Location name
           */
          label: string;
          /**
           * Percentage
           * @description Share percentage of this segment
           */
          percentage: number;
          /**
           * Value
           * @description Absolute count for this segment
           */
          value: number;
      }[];
      /**
       * Countries
       * @description Country-level geographic breakdown
       */
      countries: {
          /**
           * Label
           * @description Segment label, e.g., Referrer, Device, or Location name
           */
          label: string;
          /**
           * Percentage
           * @description Share percentage of this segment
           */
          percentage: number;
          /**
           * Value
           * @description Absolute count for this segment
           */
          value: number;
      }[];
      /**
       * Devices
       * @description Device type breakdown
       */
      devices: {
          /**
           * Label
           * @description Segment label, e.g., Referrer, Device, or Location name
           */
          label: string;
          /**
           * Percentage
           * @description Share percentage of this segment
           */
          percentage: number;
          /**
           * Value
           * @description Absolute count for this segment
           */
          value: number;
      }[];
      /**
       * Referrers
       * @description Traffic source breakdown
       */
      referrers: {
          /**
           * Label
           * @description Segment label, e.g., Referrer, Device, or Location name
           */
          label: string;
          /**
           * Percentage
           * @description Share percentage of this segment
           */
          percentage: number;
          /**
           * Value
           * @description Absolute count for this segment
           */
          value: number;
      }[];
      /**
       * StoreAnalytics
       * @description Store analytics data; present if include_store=true
       * @default null
       */
      store: {
          /**
           * Best Sellers
           * @description List of top-selling products
           */
          bestSellers: {
              /**
               * Product Id
               * @description ID of the best-selling product
               */
              productId: string;
              /**
               * Product Name
               * @description Name of the best-selling product
               */
              productName: string;
              /**
               * Revenue
               * @description Revenue generated by this product
               */
              revenue: number;
              /**
               * Units Sold
               * @description Units sold for this product
               */
              unitsSold: number;
          }[];
          /**
           * Has Active Connection
           * @description Whether the store is actively connected
           */
          hasActiveConnection: boolean;
          /**
           * Has Sales History
           * @description Whether there is any sales history
           */
          hasSalesHistory: boolean;
          /**
           * Stats
           * @description High-level store statistics
           */
          stats: {
              /**
               * Total Coupons
               * @description Total coupons applied
               */
              totalCoupons: number;
              /**
               * Total Invoices
               * @description Total invoices generated
               */
              totalInvoices: number;
              /**
               * Total Orders
               * @description Total orders count
               */
              totalOrders: number;
              /**
               * Total Products
               * @description Total distinct products sold
               */
              totalProducts: number;
              /**
               * Total Quotes
               * @description Total quotes generated
               */
              totalQuotes: number;
          };
          /**
           * Summary
           * @description Summary of store analytics
           */
          summary: {
              /**
               * Bookings
               * @description Total number of bookings
               */
              bookings: number;
              /**
               * Invoices
               * @description Total number of invoices
               */
              invoices: number;
              /**
               * Orders
               * @description Total number of orders
               */
              orders: number;
              /**
               * Tips
               * @description Total tips collected
               */
              tips: number;
              /**
               * Total Sales
               * @description Aggregated sales metrics
               */
              totalSales: {
                  /**
                   * Currency
                   * @description Currency code, e.g., USD
                   */
                  currency: string;
                  /**
                   * Fees
                   * @description Total fees charged on transactions
                   */
                  fees: number;
                  /**
                   * Taxes
                   * @description Total taxes collected
                   */
                  taxes: number;
                  /**
                   * Total Count
                   * @description Total number of sales transactions
                   */
                  totalCount: number;
                  /**
                   * Total Revenue
                   * @description Total revenue in store currency
                   */
                  totalRevenue: number;
              };
          };
      } | null;
      /**
       * Total Clicks
       * @description Total click events
       */
      totalClicks: number;
      /**
       * Total Views
       * @description Total page views
       */
      totalViews: number;
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
 * Type of FINGERTIP's FINGERTIP_GET_SITE_MEMBERSHIP tool input.
 */
type FINGERTIP_GET_SITE_MEMBERSHIP_INPUT = {
  /**
   * Membership Id
   * @description ID of the site membership to retrieve (UUID format)
   */
  membership_id?: string;
  /**
   * Site Id
   * @description Optional: Site ID to use nested path /v1/sites/{siteId}/memberships/{membershipId}
   * @default null
   */
  siteId: string | null;
};

/**
 * Type of FINGERTIP's FINGERTIP_GET_SITE_MEMBERSHIP tool output.
 */
type FINGERTIP_GET_SITE_MEMBERSHIP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Membership
       * @description The requested site membership details
       */
      membership: {
          /**
           * Created At
           * @description Timestamp when the membership was created (ISO 8601)
           */
          createdAt: string;
          /**
           * Id
           * @description Membership ID (UUID format)
           */
          id: string;
          /**
           * Role
           * @description Role assigned to the user in the site membership
           * @enum {string}
           */
          role: "OWNER" | "EDITOR" | "VIEWER";
          /**
           * Site Id
           * @description Site ID (UUID format)
           */
          siteId: string;
          /**
           * Updated At
           * @description Timestamp when the membership was last updated (ISO 8601)
           */
          updatedAt: string;
          /**
           * User
           * @description Basic user details associated with the membership
           */
          user: {
              /**
               * Email
               * @description Email address of the user
               */
              email: string;
              /**
               * Id
               * @description User ID (UUID format)
               */
              id: string;
              /**
               * Name
               * @description Full name of the user
               */
              name: string;
          };
          /**
           * User Id
           * @description User ID (UUID format)
           */
          userId: string;
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
 * Type of FINGERTIP's FINGERTIP_HEALTH_CHECK tool input.
 */
type FINGERTIP_HEALTH_CHECK_INPUT = object;

/**
 * Type of FINGERTIP's FINGERTIP_HEALTH_CHECK tool output.
 */
type FINGERTIP_HEALTH_CHECK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Message
       * @description Informational success message returned by ping endpoint.
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
 * Type of FINGERTIP's FINGERTIP_LIST_BLOG_POSTS tool input.
 */
type FINGERTIP_LIST_BLOG_POSTS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor for fetching next or previous pages.
   * @default null
   */
  cursor: string | null;
  /**
   * Page Size
   * @description Number of items per page (default 10, max 25).
   * @default null
   */
  pageSize: number | null;
  /**
   * Site Id
   * @description UUID of the site to list blog posts for.
   */
  siteId?: string;
  /**
   * Sort By
   * @description Field to sort by. One of 'createdAt', 'updatedAt', 'publishedAt'. Default is 'updatedAt'.
   * @default null
   * @enum {string|null}
   */
  sortBy: "createdAt" | "updatedAt" | "publishedAt" | null;
  /**
   * Sort Direction
   * @description Sort direction. One of 'asc' or 'desc'. Default is 'desc'.
   * @default null
   * @enum {string|null}
   */
  sortDirection: "asc" | "desc" | null;
};

/**
 * Type of FINGERTIP's FINGERTIP_LIST_BLOG_POSTS tool output.
 */
type FINGERTIP_LIST_BLOG_POSTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description Array of blog posts in the current page.
       */
      items: {
          /**
           * Created At
           * @description Creation timestamp in ISO 8601 format.
           */
          createdAt: string;
          /**
           * Excerpt
           * @description Short excerpt of the post.
           */
          excerpt: string;
          /**
           * Feature Image
           * @description Featured image data, if any.
           * @default null
           */
          featureImage: {
              [key: string]: unknown;
          } | null;
          /**
           * Feature Image Caption
           * @description Caption for the featured image.
           * @default null
           */
          featureImageCaption: string | null;
          /**
           * Html
           * @description Full HTML content of the post.
           */
          html: string;
          /**
           * Id
           * @description UUID of the blog post.
           */
          id: string;
          /**
           * Is Featured
           * @description Whether this post is featured.
           */
          isFeatured: boolean;
          /**
           * Meta Description
           * @description SEO meta description.
           * @default null
           */
          metaDescription: string | null;
          /**
           * Meta Title
           * @description SEO meta title.
           * @default null
           */
          metaTitle: string | null;
          /**
           * Published At
           * @description Publication timestamp in ISO 8601 format.
           */
          publishedAt: string;
          /**
           * Site Id
           * @description UUID of the site this post belongs to.
           */
          siteId: string;
          /**
           * Slug
           * @description URL-friendly slug of the post.
           */
          slug: string;
          /**
           * Status
           * @description Publication status of the post.
           */
          status: string;
          /**
           * Title
           * @description Title of the post.
           */
          title: string;
          /**
           * Updated At
           * @description Last updated timestamp in ISO 8601 format.
           */
          updatedAt: string;
      }[];
      /**
       * Page Info
       * @description Pagination information.
       */
      pageInfo: {
          /**
           * End Cursor
           * @description Cursor for the last item in this page.
           */
          endCursor: string;
          /**
           * Has Next Page
           * @description True if there is another page after this one.
           */
          hasNextPage: boolean;
          /**
           * Has Previous Page
           * @description True if there is a page before this one.
           */
          hasPreviousPage: boolean;
          /**
           * Start Cursor
           * @description Cursor for the first item in this page.
           */
          startCursor: string;
      };
      /**
       * Total
       * @description Total number of published blog posts.
       */
      total: number;
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
 * Type of FINGERTIP's FINGERTIP_LIST_EVENT_TYPES tool input.
 */
type FINGERTIP_LIST_EVENT_TYPES_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor from a previous response.
   * @default null
   */
  cursor: string | null;
  /**
   * Page Size
   * @description Number of items per page (default 10, max 25).
   * @default null
   */
  pageSize: number | null;
  /**
   * Site Id
   * @description UUID of the site to retrieve event types for.
   */
  siteId?: string;
  /**
   * Sort By
   * @description Field to sort by (default 'updatedAt'). Allowed: createdAt, updatedAt, position.
   * @default null
   * @enum {string|null}
   */
  sortBy: "createdAt" | "updatedAt" | "position" | null;
  /**
   * Sort Direction
   * @description Sort order (default 'desc'). Allowed: asc, desc.
   * @default null
   * @enum {string|null}
   */
  sortDirection: "asc" | "desc" | null;
};

/**
 * Type of FINGERTIP's FINGERTIP_LIST_EVENT_TYPES tool output.
 */
type FINGERTIP_LIST_EVENT_TYPES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of event types in the current page.
       */
      items: {
          /**
           * Attendance Type
           * @description Type of attendance for the event.
           */
          attendanceType: string;
          /**
           * Color
           * @description Color code representing the event type.
           */
          color: string;
          /**
           * Created At
           * @description ISO timestamp when the event type was created.
           */
          createdAt: string;
          /**
           * Currency
           * @description Currency code (e.g., 'USD').
           */
          currency: string;
          /**
           * Description
           * @description Description of the event type.
           */
          description: string;
          /**
           * Hidden
           * @description Whether the event type is hidden.
           */
          hidden: boolean;
          /**
           * Id
           * @description Unique identifier of the event type.
           */
          id: string;
          /**
           * Length
           * @description Length of the event in minutes.
           */
          length: number;
          /**
           * Locations
           * @description Locations associated with the event type.
           */
          locations: {
              [key: string]: unknown;
          }[];
          /**
           * Max Attendees
           * @description Maximum number of attendees allowed.
           */
          maxAttendees: number;
          /**
           * Media
           * @description Media associated with the event type.
           */
          media: {
              [key: string]: unknown;
          };
          /**
           * Metadata
           * @description Additional metadata for the event type.
           */
          metadata: {
              [key: string]: unknown;
          };
          /**
           * Name
           * @description Name of the event type.
           */
          name: string;
          /**
           * Price In Cents
           * @description Price of the event in cents.
           */
          priceInCents: number;
          /**
           * Requires Confirmation
           * @description Whether booking requires confirmation.
           */
          requiresConfirmation: boolean;
          /**
           * Site Id
           * @description UUID of the site this event type belongs to.
           */
          siteId: string;
          /**
           * Slug
           * @description URL-friendly identifier for the event type.
           */
          slug: string;
          /**
           * Updated At
           * @description ISO timestamp when the event type was last updated.
           */
          updatedAt: string;
      }[];
      /**
       * Page Info
       * @description Pagination details for the results.
       */
      pageInfo: {
          /**
           * End Cursor
           * @description Cursor for the end of the page.
           */
          endCursor: string;
          /**
           * Has Next Page
           * @description Whether there is a next page.
           */
          hasNextPage: boolean;
          /**
           * Has Previous Page
           * @description Whether there is a previous page.
           */
          hasPreviousPage: boolean;
          /**
           * Start Cursor
           * @description Cursor for the start of the page.
           */
          startCursor: string;
      };
      /**
       * Total
       * @description Total number of published event types.
       */
      total: number;
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
 * Type of FINGERTIP's FINGERTIP_LIST_FORM_TEMPLATES tool input.
 */
type FINGERTIP_LIST_FORM_TEMPLATES_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor from a previous request
   * @default null
   */
  cursor: string | null;
  /**
   * Page Size
   * @description Number of items per page (default 10, max 25)
   * @default null
   */
  pageSize: number | null;
  /**
   * Search
   * @description Search query to filter form template titles
   * @default null
   */
  search: string | null;
  /**
   * Site Id
   * @description UUID of the site to retrieve form templates for
   */
  siteId?: string;
  /**
   * Sort By
   * @description Field to sort by
   * @default updatedAt
   * @enum {string}
   */
  sortBy: "createdAt" | "updatedAt" | "title";
  /**
   * Sort Direction
   * @description Sort direction
   * @default desc
   * @enum {string}
   */
  sortDirection: "asc" | "desc";
};

/**
 * Type of FINGERTIP's FINGERTIP_LIST_FORM_TEMPLATES tool output.
 */
type FINGERTIP_LIST_FORM_TEMPLATES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description Array of form templates
       */
      items: {
          /**
           * Banner Media
           * @description Banner media configuration or URL
           */
          bannerMedia: {
              [key: string]: unknown;
          };
          /**
           * Button Text
           * @description Text for the submit button
           */
          buttonText: string;
          /**
           * Created At
           * @description Timestamp when the template was created (ISO 8601)
           */
          createdAt: string;
          /**
           * Custom Recipients
           * @description List of custom email recipients
           */
          customRecipients: string[];
          /**
           * Description
           * @description Description of the form template
           */
          description: string;
          /**
           * Form Theme Id
           * @description ID of the associated form theme
           */
          formThemeId: string;
          /**
           * Id
           * @description Template ID
           */
          id: string;
          /**
           * Response Count
           * @description Number of responses received
           */
          responseCount: number;
          /**
           * Site Id
           * @description ID of the site that owns the form template
           */
          siteId: string;
          /**
           * Slug
           * @description URL-friendly slug of the template
           */
          slug: string;
          /**
           * Status
           * @description Status of the form template
           */
          status: string;
          /**
           * Thank You Message
           * @description Message displayed after form submission
           */
          thankYouMessage: string;
          /**
           * Title
           * @description Title of the form template
           */
          title: string;
          /**
           * Updated At
           * @description Timestamp when the template was last updated (ISO 8601)
           */
          updatedAt: string;
          /**
           * Use Custom Recipients
           * @description Flag indicating if custom recipients are used
           */
          useCustomRecipients: boolean;
      }[];
      /**
       * Page Info
       * @description Pagination information
       */
      pageInfo: {
          /**
           * End Cursor
           * @description Cursor to the last item in the page
           */
          endCursor: string | null;
          /**
           * Has Next Page
           * @description Indicates if there is a next page
           */
          hasNextPage: boolean;
          /**
           * Has Previous Page
           * @description Indicates if there is a previous page
           */
          hasPreviousPage: boolean;
          /**
           * Start Cursor
           * @description Cursor to the first item in the page
           */
          startCursor: string | null;
      };
      /**
       * Total
       * @description Total number of form templates
       */
      total: number;
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
 * Type of FINGERTIP's FINGERTIP_LIST_PAGES tool input.
 */
type FINGERTIP_LIST_PAGES_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor for fetching the next or previous page of results.
   * @default null
   */
  cursor: string | null;
  /**
   * Page Size
   * @description Number of items per page (default 10, max 25).
   * @default null
   */
  pageSize: number | null;
  /**
   * Site Id
   * @description UUID of the site to list pages for. If omitted, lists pages across all sites.
   * @default null
   */
  siteId: string | null;
  /**
   * Sort By
   * @description Field to sort by. One of 'createdAt' or 'updatedAt'. Default is 'updatedAt'.
   * @default null
   * @enum {string|null}
   */
  sortBy: "createdAt" | "updatedAt" | null;
  /**
   * Sort Direction
   * @description Sort direction, 'asc' or 'desc'. Default is 'desc'.
   * @default null
   * @enum {string|null}
   */
  sortDirection: "asc" | "desc" | null;
};

/**
 * Type of FINGERTIP's FINGERTIP_LIST_PAGES tool output.
 */
type FINGERTIP_LIST_PAGES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description Array of page objects in the current page.
       */
      items: {
          [key: string]: unknown;
      }[];
      /**
       * Page Info
       * @description Pagination information for pages.
       */
      pageInfo: {
          /**
           * End Cursor
           * @description Cursor for the last item in this page.
           */
          endCursor: string;
          /**
           * Has Next Page
           * @description True if there is another page after this one.
           */
          hasNextPage: boolean;
          /**
           * Has Previous Page
           * @description True if there is a page before this one.
           */
          hasPreviousPage: boolean;
          /**
           * Start Cursor
           * @description Cursor for the first item in this page.
           */
          startCursor: string;
      };
      /**
       * Total
       * @description Total number of pages matching the query.
       */
      total: number;
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
 * Type of FINGERTIP's FINGERTIP_LIST_PAGE_THEMES tool input.
 */
type FINGERTIP_LIST_PAGE_THEMES_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor from a previous response to fetch the next page.
   * @default null
   */
  cursor: string | null;
  /**
   * Page Size
   * @description Number of page themes per page (1-25).
   * @default null
   */
  pageSize: number | null;
  /**
   * Site Id
   * @description Optional site UUID to scope the page themes. If omitted, fetches all page themes.
   * @default null
   */
  siteId: string | null;
};

/**
 * Type of FINGERTIP's FINGERTIP_LIST_PAGE_THEMES tool output.
 */
type FINGERTIP_LIST_PAGE_THEMES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of page theme objects
       */
      items: {
          [key: string]: unknown;
      }[];
      /**
       * Page Info
       * @description Pagination cursors and flags
       */
      pageInfo: {
          /**
           * End Cursor
           * @description Cursor for the end of the current page
           * @default null
           */
          endCursor: string | null;
          /**
           * Has Next Page
           * @description Indicates if there is a next page
           */
          hasNextPage: boolean;
          /**
           * Has Previous Page
           * @description Indicates if there is a previous page
           */
          hasPreviousPage: boolean;
          /**
           * Start Cursor
           * @description Cursor for the start of the current page
           * @default null
           */
          startCursor: string | null;
      };
      /**
       * Total
       * @description Total number of page themes available
       */
      total: number;
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
 * Type of FINGERTIP's FINGERTIP_LIST_SITES tool input.
 */
type FINGERTIP_LIST_SITES_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor from a previous response to fetch the next page
   * @default null
   */
  cursor: string | null;
  /**
   * Page Size
   * @description Number of sites per page (1-25). Default is server-defined.
   * @default null
   */
  pageSize: number | null;
};

/**
 * Type of FINGERTIP's FINGERTIP_LIST_SITES tool output.
 */
type FINGERTIP_LIST_SITES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of sites in the current page
       */
      items: {
          /**
           * Business Type
           * @description Business type of the site
           * @default null
           */
          businessType: string | null;
          /**
           * Created At
           * @description ISO8601 timestamp when the site was created
           */
          createdAt: string;
          /**
           * Description
           * @description Site description
           * @default null
           */
          description: string | null;
          /**
           * Home Page Id
           * @description UUID of the home page
           * @default null
           */
          homePageId: string | null;
          /**
           * Id
           * @description Unique identifier of the site (UUID)
           */
          id: string;
          /**
           * Location Id
           * @description Location ID associated with the site
           * @default null
           */
          locationId: string | null;
          /**
           * Logo Media
           * @description Media object for the site logo
           */
          logoMedia: {
              [key: string]: unknown;
          };
          /**
           * Name
           * @description Name of the site
           */
          name: string;
          /**
           * Override Plan
           * @description Override plan if set
           * @default null
           */
          overridePlan: string | null;
          /**
           * Slug
           * @description URL-friendly slug for the site
           */
          slug: string;
          /**
           * Social Icons
           * @description Social icon configurations for the site
           */
          socialIcons: {
              [key: string]: unknown;
          };
          /**
           * Status
           * @description Current status of the site
           */
          status: string;
          /**
           * Time Zone
           * @description IANA timezone of the site
           * @default null
           */
          timeZone: string | null;
          /**
           * Updated At
           * @description ISO8601 timestamp when the site was last updated
           */
          updatedAt: string;
          /**
           * Workspace Id
           * @description Workspace ID this site belongs to
           * @default null
           */
          workspaceId: string | null;
      }[];
      /**
       * Page Info
       * @description Pagination cursors and flags
       */
      pageInfo: {
          /**
           * End Cursor
           * @description Cursor for the end of the current page
           * @default null
           */
          endCursor: string | null;
          /**
           * Has Next Page
           * @description Indicates if there is a next page
           */
          hasNextPage: boolean;
          /**
           * Has Previous Page
           * @description Indicates if there is a previous page
           */
          hasPreviousPage: boolean;
          /**
           * Start Cursor
           * @description Cursor for the start of the current page
           * @default null
           */
          startCursor: string | null;
      };
      /**
       * Total
       * @description Total number of matching sites
       */
      total: number;
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
 * Type of FINGERTIP's FINGERTIP_LIST_SITE_MEMBERSHIPS tool input.
 */
type FINGERTIP_LIST_SITE_MEMBERSHIPS_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor from a previous response to fetch the next page
   * @default null
   */
  cursor: string | null;
  /**
   * Page Size
   * @description Number of memberships per page (1-25). Default is server-defined.
   * @default null
   */
  pageSize: number | null;
  /**
   * Site Id
   * @description UUID of the site to retrieve memberships for
   */
  siteId?: string;
};

/**
 * Type of FINGERTIP's FINGERTIP_LIST_SITE_MEMBERSHIPS tool output.
 */
type FINGERTIP_LIST_SITE_MEMBERSHIPS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of memberships in the current page
       */
      items: {
          /**
           * Created At
           * @description ISO8601 timestamp when the membership was created
           */
          createdAt: string;
          /**
           * Id
           * @description Unique identifier of the membership (UUID)
           */
          id: string;
          /**
           * Role
           * @description Role assigned to the user in the site
           */
          role: string;
          /**
           * Site Id
           * @description Unique identifier of the site (UUID)
           */
          siteId: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when the membership was last updated
           */
          updatedAt: string;
          /**
           * User
           * @description Basic user information for the membership
           */
          user: {
              /**
               * Email
               * @description Email address of the user
               */
              email: string;
              /**
               * Id
               * @description Unique identifier of the user (UUID)
               */
              id: string;
              /**
               * Name
               * @description Name of the user
               */
              name: string;
          };
          /**
           * User Id
           * @description Unique identifier of the user (UUID)
           */
          userId: string;
      }[];
      /**
       * Page Info
       * @description Pagination cursors and flags
       */
      pageInfo: {
          /**
           * End Cursor
           * @description Cursor for the end of the current page
           * @default null
           */
          endCursor: string | null;
          /**
           * Has Next Page
           * @description Indicates if there is a next page
           */
          hasNextPage: boolean;
          /**
           * Has Previous Page
           * @description Indicates if there is a previous page
           */
          hasPreviousPage: boolean;
          /**
           * Start Cursor
           * @description Cursor for the start of the current page
           * @default null
           */
          startCursor: string | null;
      };
      /**
       * Total
       * @description Total number of memberships matching the query
       */
      total: number;
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
 * Type of FINGERTIP's FINGERTIP_LIST_WORKSPACES tool input.
 */
type FINGERTIP_LIST_WORKSPACES_INPUT = {
  /**
   * Cursor
   * @description Pagination cursor from a previous response to fetch the next page
   * @default null
   */
  cursor: string | null;
  /**
   * Page Size
   * @description Number of items per page (1-25). Default is server-defined.
   * @default null
   */
  pageSize: number | null;
};

/**
 * Type of FINGERTIP's FINGERTIP_LIST_WORKSPACES tool output.
 */
type FINGERTIP_LIST_WORKSPACES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Items
       * @description List of workspaces in the current page
       */
      items: {
          /**
           * Created At
           * @description ISO8601 timestamp when the workspace was created
           */
          createdAt: string;
          /**
           * Id
           * @description Unique workspace identifier (UUID)
           */
          id: string;
          /**
           * Name
           * @description Workspace name
           */
          name: string;
          /**
           * Owner Id
           * @description ID of the user who owns this workspace
           */
          ownerId: string;
          /**
           * Slug
           * @description Workspace slug used in URLs
           */
          slug: string;
          /**
           * Updated At
           * @description ISO8601 timestamp when the workspace was last updated
           */
          updatedAt: string;
      }[];
      /**
       * Page Info
       * @description Pagination details
       */
      pageInfo: {
          /**
           * End Cursor
           * @description Cursor for the last item on this page
           * @default null
           */
          endCursor: string | null;
          /**
           * Has Next Page
           * @description Whether there is another page after this one
           */
          hasNextPage: boolean;
          /**
           * Has Previous Page
           * @description Whether there is a page before this one
           */
          hasPreviousPage: boolean;
          /**
           * Start Cursor
           * @description Cursor for the first item on this page
           * @default null
           */
          startCursor: string | null;
      };
      /**
       * Total
       * @description Total number of workspaces across all pages
       */
      total: number;
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
 * Type map of all available tool input types for toolkit "FINGERTIP".
 */
export type FINGERTIP_TOOL_INPUTS = {
  CREATE_SITE: FINGERTIP_CREATE_SITE_INPUT
  DELETE_SITE: FINGERTIP_DELETE_SITE_INPUT
  DELETE_SITE_MEMBERSHIP: FINGERTIP_DELETE_SITE_MEMBERSHIP_INPUT
  DELETE_WORKSPACE_INVITATION: FINGERTIP_DELETE_WORKSPACE_INVITATION_INPUT
  GET_COMPREHENSIVE_SITE_ANALYTICS: FINGERTIP_GET_COMPREHENSIVE_SITE_ANALYTICS_INPUT
  GET_SITE_MEMBERSHIP: FINGERTIP_GET_SITE_MEMBERSHIP_INPUT
  HEALTH_CHECK: FINGERTIP_HEALTH_CHECK_INPUT
  LIST_BLOG_POSTS: FINGERTIP_LIST_BLOG_POSTS_INPUT
  LIST_EVENT_TYPES: FINGERTIP_LIST_EVENT_TYPES_INPUT
  LIST_FORM_TEMPLATES: FINGERTIP_LIST_FORM_TEMPLATES_INPUT
  LIST_PAGES: FINGERTIP_LIST_PAGES_INPUT
  LIST_PAGE_THEMES: FINGERTIP_LIST_PAGE_THEMES_INPUT
  LIST_SITES: FINGERTIP_LIST_SITES_INPUT
  LIST_SITE_MEMBERSHIPS: FINGERTIP_LIST_SITE_MEMBERSHIPS_INPUT
  LIST_WORKSPACES: FINGERTIP_LIST_WORKSPACES_INPUT
}

/**
 * Type map of all available tool input types for toolkit "FINGERTIP".
 */
export type FINGERTIP_TOOL_OUTPUTS = {
  CREATE_SITE: FINGERTIP_CREATE_SITE_OUTPUT
  DELETE_SITE: FINGERTIP_DELETE_SITE_OUTPUT
  DELETE_SITE_MEMBERSHIP: FINGERTIP_DELETE_SITE_MEMBERSHIP_OUTPUT
  DELETE_WORKSPACE_INVITATION: FINGERTIP_DELETE_WORKSPACE_INVITATION_OUTPUT
  GET_COMPREHENSIVE_SITE_ANALYTICS: FINGERTIP_GET_COMPREHENSIVE_SITE_ANALYTICS_OUTPUT
  GET_SITE_MEMBERSHIP: FINGERTIP_GET_SITE_MEMBERSHIP_OUTPUT
  HEALTH_CHECK: FINGERTIP_HEALTH_CHECK_OUTPUT
  LIST_BLOG_POSTS: FINGERTIP_LIST_BLOG_POSTS_OUTPUT
  LIST_EVENT_TYPES: FINGERTIP_LIST_EVENT_TYPES_OUTPUT
  LIST_FORM_TEMPLATES: FINGERTIP_LIST_FORM_TEMPLATES_OUTPUT
  LIST_PAGES: FINGERTIP_LIST_PAGES_OUTPUT
  LIST_PAGE_THEMES: FINGERTIP_LIST_PAGE_THEMES_OUTPUT
  LIST_SITES: FINGERTIP_LIST_SITES_OUTPUT
  LIST_SITE_MEMBERSHIPS: FINGERTIP_LIST_SITE_MEMBERSHIPS_OUTPUT
  LIST_WORKSPACES: FINGERTIP_LIST_WORKSPACES_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's FINGERTIP toolkit.
 */
export const FINGERTIP = {
  slug: "fingertip",
  tools: {
    /**
     * Tool to create a new Fingertip site. Use after gathering site details such as name, slug, and business type.
     */
    CREATE_SITE: "FINGERTIP_CREATE_SITE",
    /**
     * Tool to delete a Fingertip site. Use when you need to permanently remove a site by its UUID after confirming it is no longer needed.
     */
    DELETE_SITE: "FINGERTIP_DELETE_SITE",
    /**
     * Tool to delete a specific site membership. Use when you need to remove a user from a site after confirming the membership ID.
     */
    DELETE_SITE_MEMBERSHIP: "FINGERTIP_DELETE_SITE_MEMBERSHIP",
    /**
     * Tool to delete a workspace invitation by its ID. Use after obtaining the invitation ID to cancel a pending workspace invitation.
     */
    DELETE_WORKSPACE_INVITATION: "FINGERTIP_DELETE_WORKSPACE_INVITATION",
    /**
     * Tool to retrieve comprehensive analytics for a specific site. Use when you have a site ID and need period-based breakdowns including optional store metrics.
     */
    GET_COMPREHENSIVE_SITE_ANALYTICS: "FINGERTIP_GET_COMPREHENSIVE_SITE_ANALYTICS",
    /**
     * Tool to retrieve site membership details. Use when you need detailed information about a specific membership after you have its ID.
     */
    GET_SITE_MEMBERSHIP: "FINGERTIP_GET_SITE_MEMBERSHIP",
    /**
     * Tool to verify API connectivity. Use when checking API health before other operations.
     */
    HEALTH_CHECK: "FINGERTIP_HEALTH_CHECK",
    /**
     * Tool to list published blog posts for a specific site. Use when you have a site ID and need to paginate, sort, and retrieve post summaries.
     */
    LIST_BLOG_POSTS: "FINGERTIP_LIST_BLOG_POSTS",
    /**
     * Tool to list event types for a specific site. Use after confirming the siteId to retrieve a paginated list of published event types.
     */
    LIST_EVENT_TYPES: "FINGERTIP_LIST_EVENT_TYPES",
    /**
     * Tool to retrieve a paginated list of form templates. Use when you need to fetch multiple templates for a site after obtaining its ID.
     */
    LIST_FORM_TEMPLATES: "FINGERTIP_LIST_FORM_TEMPLATES",
    /**
     * Tool to list pages. Use when you need to retrieve and paginate through site pages.
     */
    LIST_PAGES: "FINGERTIP_LIST_PAGES",
    /**
     * Tool to retrieve a paginated list of page themes. Use when you need to fetch available page themes, optionally scoped to a specific site, with pagination support.
     */
    LIST_PAGE_THEMES: "FINGERTIP_LIST_PAGE_THEMES",
    /**
     * Tool to retrieve a paginated list of sites accessible by the API key. Use when you need to fetch sites page by page.
     */
    LIST_SITES: "FINGERTIP_LIST_SITES",
    /**
     * Tool to retrieve a paginated list of site memberships. Use after confirming the site ID.
     */
    LIST_SITE_MEMBERSHIPS: "FINGERTIP_LIST_SITE_MEMBERSHIPS",
    /**
     * Tool to retrieve a paginated list of workspaces accessible to the API key. Use when you need to navigate through multiple workspaces.
     */
    LIST_WORKSPACES: "FINGERTIP_LIST_WORKSPACES",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "FINGERTIP".
 */
export type FINGERTIP_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "FINGERTIP".
 */
export type FINGERTIP_TRIGGER_EVENTS = {}
