import { type TriggerEvent } from "@composio/core"

// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of GOOGLESLIDES's GOOGLESLIDES_CREATE_SLIDES_MARKDOWN tool input.
 */
type GOOGLESLIDES_CREATE_SLIDES_MARKDOWN_INPUT = {
  /**
   * Markdown Text
   * @description
   *                 The content for the slides, formatted as Markdown. Creates professional, enterprise-ready presentations with intelligent auto-sizing, dynamic font scaling, and beautiful themes.
   *
   *                 ## THEME SELECTION
   *                 Add a theme line at the beginning of your markdown to apply professional backgrounds and colors:
   *                 - `Theme: default` - Clean white background (default)
   *                 - `Theme: corporate_blue` - Professional dark blue background with white text
   *                 - `Theme: modern_dark` - Sleek dark background with light text
   *                 - `Theme: professional_gray` - Light gray background with dark text
   *                 - `Theme: creative_purple` - Vibrant purple background for creative presentations
   *                 - `Theme: warm_orange` - Energetic orange background for dynamic presentations
   *                 - `Theme: forest_green` - Natural green background for environmental/growth topics
   *                 - `Theme: minimal_beige` - Subtle beige background for minimalist presentations
   *
   *                 Example: `Theme: corporate_blue` at the start of your markdown
   *
   *                 ## SLIDE SEPARATION
   *                 - Use '\n---\n' (on its own line) to separate slides
   *                 - Each slide auto-detects its type based on content
   *
   *                 ## SUPPORTED SLIDE TYPES & FEATURES
   *                 1. **Title Slide** (first slide): `# Title\nSubtitle text`
   *                 2. **Bullet Slides**: Use `•`, `-`, or `*` for bullets
   *                 3. **Table Slides**: Standard markdown tables with intelligent auto-sizing
   *                 4. **Quote Slides**: Use `> Quote text` for styled quotes
   *                 5. **Text Slides**: Regular paragraphs and content
   *                 6. **Image Slides**: `![description](URL)` - URLs must be publicly accessible and meet strict requirements
   *                 7. **Two-Column Slides**: Use `|||` on its own line to separate left/right content
   *
   *                 ## IMAGE REQUIREMENTS & BEST PRACTICES
   *                 **⚠️ CRITICAL: Google Slides has strict image requirements:**
   *
   *                 **✅ VERIFIED WORKING IMAGE SOURCES:**
   *                 - `https://www.google.com/images/branding/*` - Google official assets
   *                 - `https://github.githubassets.com/images/*` - GitHub official assets
   *                 - `https://images.unsplash.com/*` - Unsplash direct image links
   *                 - `https://raw.githubusercontent.com/*` - GitHub raw files (public repos)
   *
   *                 **❌ KNOWN BLOCKED SOURCES:**
   *                 - `https://via.placeholder.com/*` - Blocked by Google
   *                 - `https://picsum.photos/*` - Dynamic generation blocked
   *                 - `http://placekitten.com/*` - Dynamic generation blocked
   *                 - Any URL requiring authentication or redirects
   *
   *                 **📏 TECHNICAL REQUIREMENTS:**
   *                 - Must be **publicly accessible** (no login required)
   *                 - Must be **less than 50MB** in file size
   *                 - Cannot exceed **25 megapixels** in resolution
   *                 - Must be in **PNG, JPEG, or GIF** format only
   *                 - URL must be **no larger than 2kB** in length
   *                 - No dynamic image generation services
   *
   *                 **🎨 POSITIONING & SIZING:**
   *                 - Images automatically sized to 300x200 points
   *                 - Positioned at center-right of slide (160pt x, 120pt y)
   *                 - Maintains aspect ratio and professional appearance
   *                 - Works best with landscape-oriented images
   *
   *                 **💡 EXAMPLES OF WORKING IMAGE MARKDOWN:**
   *                 ```
   *                 ![Google Logo](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)
   *                 ![GitHub Mark](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
   *                 ![Unsplash Photo](https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600)
   *                 ```
   *
   *     ## DYNAMIC FONT SIZING
   *     The system automatically adjusts font sizes to prevent overflow and optimize readability:
   *
   *     **For Titles**:
   *     - Short titles (< 30 chars): Large 28pt headers
   *     - Medium titles (30-60 chars): Standard 22pt headers
   *     - Long titles (> 60 chars): Compact 18pt headers
   *
   *     **For Content**:
   *     - Short content (< 100 chars): Large 18pt text for impact
   *     - Medium content (100-300 chars): Standard 16pt for readability
   *     - Long content (300-600 chars): Compact 14pt for density
   *     - Very long content (> 600 chars): Small 12pt to prevent overflow
   *
   *     **For Tables**:
   *     - Small tables (< 200 chars): 14pt for clarity
   *     - Medium tables (200-500 chars): 12pt for balance
   *     - Large tables (> 500 chars): 10pt for dense data
   *     - Extreme tables (overflow detected): 8pt with aggressive sizing
   *
   *     ## FORMATTING FEATURES
   *     - **Bold text**: Use `**text**` for bold formatting in any content
   *     - **Smart auto-sizing**: Tables and text boxes resize based on content density
   *     - **Aggressive overflow prevention**: Iterative sizing down to 8pt ensures perfect fit
   *     - **Auto-centering**: Tables automatically center on slides for professional appearance
   *     - **Professional positioning**: Clean layouts with no placeholder text
   *     - **Emoji support**: Use emojis freely in titles and content
   *     - **Multi-line content**: Preserves line breaks and formatting
   *
   *     ## CONTENT DENSITY GUIDELINES
   *     - **For concise slides**: Use shorter text for larger, impactful fonts
   *     - **For detailed slides**: Longer content automatically gets smaller fonts
   *     - **For tables**: Smart column-width distribution based on content length
   *     - **For wide tables**: Tables with 7+ columns may be recommended for splitting
   *     - **For quotes**: Long quotes scale down to fit properly
   *
   *     ## BEST PRACTICES
   *     - Start with a title slide: `# Main Title\nSubtitle description`
   *     - For maximum readability: Keep content concise when possible
   *     - For dense information: Trust the auto-sizing to handle large content
   *     - Use descriptive but reasonably-sized headings
   *     - Mix content types for engaging presentations
   *     - Use consistent bullet styles within each slide
   *
   *     ## TECHNICAL NOTES
   *     - Font sizes range from 28pt (large titles) to 8pt (extreme tables)
   *     - Text boxes automatically resize based on estimated content lines
   *     - Tables use dynamic column widths, row heights, and auto-centering
   *     - Tables positioned higher on slides for improved visual balance
   *     - The system prevents text overflow while maintaining maximum readability
   *
   *     ## LIMITATIONS
   *     - Images must be publicly accessible URLs (no authentication required)
   *     - One primary content type per slide works best
   *     - Extremely large content may still need manual review
   *     - Complex nested formatting not supported
   *
   *     ## TECHNICAL NOTES
   *     - Uses BLANK layouts for complete control over positioning
   *     - Automatically handles Google Slides placeholder removal
   *     - Generates optimized API requests for performance
   *     - Supports enterprise-scale content generation
   *
   */
  markdown_text?: string;
  /**
   * Title
   * @description The title for the new Google Slides presentation.
   */
  title?: string;
};

/**
 * Type of GOOGLESLIDES's GOOGLESLIDES_CREATE_SLIDES_MARKDOWN tool output.
 */
type GOOGLESLIDES_CREATE_SLIDES_MARKDOWN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Presentation Id
       * @description The unique identifier of the newly created Google Slides presentation.
       */
      presentation_id: string;
      /**
       * Request Data
       * @description Google Slides API request objects generated from markdown_text for batchUpdate.
       */
      request_data?: {
          [key: string]: unknown;
      }[];
      /**
       * Slide Count
       * @description The number of slides created in the presentation.
       */
      slide_count: number;
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
 * Type of GOOGLESLIDES's GOOGLESLIDES_PRESENTATIONS_BATCH_UPDATE tool input.
 */
type GOOGLESLIDES_PRESENTATIONS_BATCH_UPDATE_INPUT = {
  /**
   * Markdown Text
   * @description
   *     Optional markdown content to add as new slides to the presentation. Creates professional, enterprise-ready slides with intelligent auto-sizing and dynamic font scaling.
   *
   *     ## SLIDE SEPARATION
   *     - Use '\n---\n' (on its own line) to separate slides
   *     - Each slide auto-detects its type based on content
   *
   *     ## SUPPORTED SLIDE TYPES & FEATURES
   *     1. **Title Slide** (first slide): `# Title\nSubtitle text`
   *     2. **Bullet Slides**: Use `•`, `-`, or `*` for bullets
   *     3. **Table Slides**: Standard markdown tables with intelligent auto-sizing
   *     4. **Quote Slides**: Use `> Quote text` for styled quotes
   *     5. **Text Slides**: Regular paragraphs and content
   *     6. **Image Slides**: `![description](URL)` - URLs must be publicly accessible
   *     7. **Two-Column Slides**: Use `|||` on its own line to separate left/right content
   *
   *     ## THEME SELECTION
   *     Add a theme line at the beginning of your markdown to apply professional backgrounds and colors:
   *     - `Theme: default` - Clean white background (default)
   *     - `Theme: corporate_blue` - Professional dark blue background with white text
   *     - `Theme: modern_dark` - Sleek dark gradient with light text
   *     - `Theme: professional_gray` - Elegant gray gradient
   *     - `Theme: creative_purple` - Vibrant purple gradient for creative presentations
   *     - `Theme: warm_orange` - Energetic orange gradient for dynamic presentations
   *     - `Theme: forest_green` - Natural green gradient for environmental/growth topics
   *     - `Theme: minimal_beige` - Subtle beige for minimalist presentations
   *
   *     ## DYNAMIC FONT SIZING (Notion-like Hierarchy)
   *     The system automatically adjusts font sizes to prevent overflow and optimize readability:
   *
   *     **For Titles**:
   *     - Short titles (< 30 chars): Large 28pt headers
   *     - Medium titles (30-60 chars): Standard 22pt headers
   *     - Long titles (> 60 chars): Compact 18pt headers
   *
   *     **For Content**:
   *     - Short content (< 100 chars): Large 18pt text for impact
   *     - Medium content (100-300 chars): Standard 16pt for readability
   *     - Long content (300-600 chars): Compact 14pt for density
   *     - Very long content (> 600 chars): Small 12pt to prevent overflow
   *
   *     **For Tables**:
   *     - Small tables (< 200 chars): 14pt for clarity
   *     - Medium tables (200-500 chars): 12pt for balance
   *     - Large tables (> 500 chars): 10pt for dense data
   *     - Extreme tables (overflow detected): 8pt with aggressive sizing
   *
   *     ## FORMATTING FEATURES
   *     - **Bold text**: Use `**text**` for bold formatting in any content
   *     - **Smart auto-sizing**: Tables and text boxes resize based on content density
   *     - **Aggressive overflow prevention**: Iterative sizing down to 8pt ensures perfect fit
   *     - **Auto-centering**: Tables automatically center on slides for professional appearance
   *     - **Professional positioning**: Clean layouts with no placeholder text
   *     - **Emoji support**: Use emojis freely in titles and content
   *     - **Multi-line content**: Preserves line breaks and formatting
   *
   *     ## CONTENT DENSITY GUIDELINES
   *     - **For concise slides**: Use shorter text for larger, impactful fonts
   *     - **For detailed slides**: Longer content automatically gets smaller fonts
   *     - **For tables**: Smart column-width distribution based on content length
   *     - **For wide tables**: Tables with 7+ columns may be recommended for splitting
   *     - **For quotes**: Long quotes scale down to fit properly
   *
   *     ## BEST PRACTICES
   *     - Start with a title slide: `# Main Title\nSubtitle description`
   *     - For maximum readability: Keep content concise when possible
   *     - For dense information: Trust the auto-sizing to handle large content
   *     - Use descriptive but reasonably-sized headings
   *     - Mix content types for engaging presentations
   *     - Use consistent bullet styles within each slide
   *
   *     ## TECHNICAL NOTES
   *     - Font sizes range from 28pt (large titles) to 8pt (extreme tables)
   *     - Text boxes automatically resize based on estimated content lines
   *     - Tables use dynamic column widths, row heights, and auto-centering
   *     - Tables positioned higher on slides for improved visual balance
   *     - The system prevents text overflow while maintaining maximum readability
   *
   *     ## LIMITATIONS
   *     - Images must be publicly accessible URLs (no authentication required)
   *     - One primary content type per slide works best
   *     - Extremely large content may still need manual review
   *     - Complex nested formatting not supported
   *
   *     ## EXAMPLES
   *     ```markdown
   *     Theme: corporate_blue
   *
   *     # Welcome to Our Company
   *     **Professional presentation** with branded themes
   *
   *     ---
   *
   *     # Key Features
   *     • **Dynamic sizing** - Content auto-fits perfectly
   *     • **Multiple themes** - Professional color schemes
   *     • **Smart tables** - Auto-sizing with overflow protection
   *
   *     ---
   *
   *     # Performance Data
   *     | Metric | Q1 | Q2 | Q3 |
   *     |--------|----|----|----|
   *     | Revenue | $1.2M | $1.5M | $1.8M |
   *     | Growth | 15% | 25% | 20% |
   *     ```
   *
   * @default null
   */
  markdown_text: string | null;
  /**
   * Presentation Id
   * @description The ID of the presentation to apply the updates to.
   */
  presentationId?: string;
  /**
   * Requests
   * @description A list of update requests, each being a dict representing one of the Slides API request types (e.g., CreateSlideRequest, DeleteObjectRequest). Required if markdown_text is not provided.
   * @default null
   */
  requests: {
      [key: string]: unknown;
  }[] | null;
  /**
   * WriteControl
   * @description Options that control how write requests are executed.
   * @default null
   */
  writeControl: {
      /**
       * Required Revision Id
       * @description The revision ID the updates must be applied to. If set, the batchUpdate will only succeed if the presentation's current revision ID matches this value.
       * @default null
       */
      requiredRevisionId: string | null;
  } | null;
};

/**
 * Type of GOOGLESLIDES's GOOGLESLIDES_PRESENTATIONS_BATCH_UPDATE tool output.
 */
type GOOGLESLIDES_PRESENTATIONS_BATCH_UPDATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Presentation Id
       * @description The presentation ID on which the updates were applied.
       */
      presentationId: string;
      /**
       * Replies
       * @description The response for each update request, in the order they were applied.
       */
      replies: {
          [key: string]: unknown;
      }[];
      /**
       * Request Count
       * @description Total number of API requests executed.
       * @default null
       */
      request_count: number | null;
      /**
       * Slide Count
       * @description Number of slides added when using markdown mode.
       * @default null
       */
      slide_count: number | null;
      /**
       * Theme Applied
       * @description Theme that was applied from markdown (if any).
       * @default null
       */
      theme_applied: string | null;
      /**
       * WriteControl
       * @description Options that control how write requests are executed.
       * @default null
       */
      writeControl: {
          /**
           * Required Revision Id
           * @description The revision ID the updates must be applied to. If set, the batchUpdate will only succeed if the presentation's current revision ID matches this value.
           * @default null
           */
          requiredRevisionId: string | null;
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
 * Type of GOOGLESLIDES's GOOGLESLIDES_PRESENTATIONS_CREATE tool input.
 */
type GOOGLESLIDES_PRESENTATIONS_CREATE_INPUT = {
  /**
   * Duplicate Presentation Id
   * @description An existing presentation ID to copy instead of creating a blank presentation.
   * @default null
   */
  duplicatePresentationId: string | null;
  /**
   * Presentation Id
   * @description A user-supplied unique ID for the new presentation. If omitted, an ID is generated.
   * @default null
   */
  presentationId: string | null;
  /**
   * Title
   * @description The title of the new presentation. If omitted, the default title is used.
   * @default null
   */
  title: string | null;
};

/**
 * Type of GOOGLESLIDES's GOOGLESLIDES_PRESENTATIONS_CREATE tool output.
 */
type GOOGLESLIDES_PRESENTATIONS_CREATE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Layouts
       * @description List of layout objects in the presentation.
       */
      layouts: {
          [key: string]: unknown;
      }[];
      /**
       * Locale
       * @description Locale of the presentation, e.g., 'en-US'.
       */
      locale: string;
      /**
       * Masters
       * @description List of master slide objects in the presentation.
       */
      masters: {
          [key: string]: unknown;
      }[];
      /**
       * Page Size
       * @description Size of the pages in the presentation (width, height, unit).
       */
      pageSize: {
          [key: string]: unknown;
      };
      /**
       * Presentation Id
       * @description The ID of the created presentation.
       */
      presentationId: string;
      /**
       * Revision Id
       * @description Globally unique identifier for the current revision.
       */
      revisionId: string;
      /**
       * Slides
       * @description List of slide objects (pages) in the presentation.
       */
      slides: {
          [key: string]: unknown;
      }[];
      /**
       * Title
       * @description The title of the created presentation.
       */
      title: string;
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
 * Type of GOOGLESLIDES's GOOGLESLIDES_PRESENTATIONS_GET tool input.
 */
type GOOGLESLIDES_PRESENTATIONS_GET_INPUT = {
  /**
   * Fields
   * @description Comma-separated selector specifying which fields to include in a partial response. Examples: 'presentationId,title', 'slides(pageElements)'
   * @default null
   */
  fields: string | null;
  /**
   * Presentation Id
   * @description The ID of the presentation to retrieve.
   */
  presentationId?: string;
};

/**
 * Type of GOOGLESLIDES's GOOGLESLIDES_PRESENTATIONS_GET tool output.
 */
type GOOGLESLIDES_PRESENTATIONS_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Locale
       * @description Locale of the presentation.
       * @default null
       */
      locale: string | null;
      /**
       * Masters
       * @description Master slides in the presentation.
       * @default null
       */
      masters: {
          /**
           * Object Id
           * @description Object ID of the page.
           */
          objectId: string;
          /**
           * Page Elements
           * @description The elements present on the page.
           * @default null
           */
          pageElements: {
              /**
               * Object Id
               * @description Object ID of the page element.
               * @default null
               */
              objectId: string | null;
          }[] | null;
          /**
           * Page Type
           * @description The type of the page.
           * @default null
           */
          pageType: string | null;
      }[] | null;
      /**
       * PageSize
       * @description Size of pages in the presentation.
       * @default null
       */
      pageSize: {
          /**
           * Height
           * @description Height of the page.
           */
          height: {
              /**
               * Magnitude
               * @description The magnitude of the size.
               */
              magnitude: number;
              /**
               * Unit
               * @description The unit of the size (e.g., PT, EMU).
               */
              unit: string;
          };
          /**
           * Width
           * @description Width of the page.
           */
          width: {
              /**
               * Magnitude
               * @description The magnitude of the size.
               */
              magnitude: number;
              /**
               * Unit
               * @description The unit of the size (e.g., PT, EMU).
               */
              unit: string;
          };
      } | null;
      /**
       * Presentation Id
       * @description The ID of the presentation.
       */
      presentationId: string;
      /**
       * Revision Id
       * @description Revision ID of the presentation.
       * @default null
       */
      revisionId: string | null;
      /**
       * Slides
       * @description Slides in the presentation.
       * @default null
       */
      slides: {
          /**
           * Object Id
           * @description Object ID of the page.
           */
          objectId: string;
          /**
           * Page Elements
           * @description The elements present on the page.
           * @default null
           */
          pageElements: {
              /**
               * Object Id
               * @description Object ID of the page element.
               * @default null
               */
              objectId: string | null;
          }[] | null;
          /**
           * Page Type
           * @description The type of the page.
           * @default null
           */
          pageType: string | null;
      }[] | null;
      /**
       * Title
       * @description The title of the presentation.
       */
      title: string;
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
 * Type of GOOGLESLIDES's GOOGLESLIDES_PRESENTATIONS_PAGES_GET tool input.
 */
type GOOGLESLIDES_PRESENTATIONS_PAGES_GET_INPUT = {
  /**
   * Page Object Id
   * @description The object ID of the page to retrieve.
   */
  pageObjectId?: string;
  /**
   * Presentation Id
   * @description The ID of the presentation from which to fetch the page.
   */
  presentationId?: string;
};

/**
 * Type of GOOGLESLIDES's GOOGLESLIDES_PRESENTATIONS_PAGES_GET tool output.
 */
type GOOGLESLIDES_PRESENTATIONS_PAGES_GET_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Layout Properties
       * @description Properties specific to layout pages.
       * @default null
       */
      layoutProperties: {
          [key: string]: unknown;
      } | null;
      /**
       * Master Properties
       * @description Properties specific to master pages.
       * @default null
       */
      masterProperties: {
          [key: string]: unknown;
      } | null;
      /**
       * Notes Properties
       * @description Properties specific to notes pages.
       * @default null
       */
      notesProperties: {
          [key: string]: unknown;
      } | null;
      /**
       * Object Id
       * @description The object ID of the page.
       */
      objectId: string;
      /**
       * Page Elements
       * @description Collection of page elements on the page.
       * @default null
       */
      pageElements: {
          /**
           * Description
           * @description Optional human-readable description for this element.
           * @default null
           */
          description: string | null;
          /**
           * Element Group
           * @description Group properties if this element is a group.
           * @default null
           */
          elementGroup: {
              [key: string]: unknown;
          } | null;
          /**
           * Image
           * @description Image properties if this element is an image.
           * @default null
           */
          image: {
              [key: string]: unknown;
          } | null;
          /**
           * Line
           * @description Line properties if this element is a line.
           * @default null
           */
          line: {
              [key: string]: unknown;
          } | null;
          /**
           * Object Id
           * @description The unique object ID for this page element.
           */
          objectId: string;
          /**
           * Shape
           * @description Shape properties if this element is a shape.
           * @default null
           */
          shape: {
              [key: string]: unknown;
          } | null;
          /**
           * Table
           * @description Table properties if this element is a table.
           * @default null
           */
          table: {
              [key: string]: unknown;
          } | null;
          /**
           * Video
           * @description Video properties if this element is a video.
           * @default null
           */
          video: {
              [key: string]: unknown;
          } | null;
      }[] | null;
      /**
       * Page Type
       * @description The type of the page.
       * @enum {string}
       */
      pageType: "SLIDE" | "MASTER" | "LAYOUT" | "NOTES";
      /**
       * Slide Properties
       * @description Properties specific to slide pages.
       * @default null
       */
      slideProperties: {
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
 * Type of GOOGLESLIDES's GOOGLESLIDES_PRESENTATIONS_PAGES_GET_THUMBNAIL tool input.
 */
type GOOGLESLIDES_PRESENTATIONS_PAGES_GET_THUMBNAIL_INPUT = {
  /**
   * Page Object Id
   * @description The object ID of the page whose thumbnail to retrieve.
   */
  pageObjectId?: string;
  /**
   * Presentation Id
   * @description The ID of the presentation containing the page.
   */
  presentationId?: string;
  /**
   * Thumbnail Properties.Mime Type
   * @description Optional thumbnail image MIME type. One of 'PNG' or 'JPEG'. Defaults to 'PNG' if omitted.
   * @default null
   * @enum {string|null}
   */
  "thumbnailProperties.mimeType": "PNG" | "JPEG" | null;
  /**
   * Thumbnail Properties.Thumbnail Size
   * @description Optional thumbnail size. One of 'LARGE', 'MEDIUM', 'SMALL', or 'THUMBNAIL_SIZE_UNSPECIFIED'. Defaults to 'LARGE' if omitted.
   * @default null
   * @enum {string|null}
   */
  "thumbnailProperties.thumbnailSize": "THUMBNAIL_SIZE_UNSPECIFIED" | "LARGE" | "MEDIUM" | "SMALL" | null;
};

/**
 * Type of GOOGLESLIDES's GOOGLESLIDES_PRESENTATIONS_PAGES_GET_THUMBNAIL tool output.
 */
type GOOGLESLIDES_PRESENTATIONS_PAGES_GET_THUMBNAIL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content Url
       * @description The URL of the generated thumbnail image.
       */
      contentUrl: string;
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
 * Type map of all available tool input types for toolkit "GOOGLESLIDES".
 */
export type GOOGLESLIDES_TOOL_INPUTS = {
  CREATE_SLIDES_MARKDOWN: GOOGLESLIDES_CREATE_SLIDES_MARKDOWN_INPUT
  PRESENTATIONS_BATCH_UPDATE: GOOGLESLIDES_PRESENTATIONS_BATCH_UPDATE_INPUT
  PRESENTATIONS_CREATE: GOOGLESLIDES_PRESENTATIONS_CREATE_INPUT
  PRESENTATIONS_GET: GOOGLESLIDES_PRESENTATIONS_GET_INPUT
  PRESENTATIONS_PAGES_GET: GOOGLESLIDES_PRESENTATIONS_PAGES_GET_INPUT
  PRESENTATIONS_PAGES_GET_THUMBNAIL: GOOGLESLIDES_PRESENTATIONS_PAGES_GET_THUMBNAIL_INPUT
}

/**
 * Type map of all available tool input types for toolkit "GOOGLESLIDES".
 */
export type GOOGLESLIDES_TOOL_OUTPUTS = {
  CREATE_SLIDES_MARKDOWN: GOOGLESLIDES_CREATE_SLIDES_MARKDOWN_OUTPUT
  PRESENTATIONS_BATCH_UPDATE: GOOGLESLIDES_PRESENTATIONS_BATCH_UPDATE_OUTPUT
  PRESENTATIONS_CREATE: GOOGLESLIDES_PRESENTATIONS_CREATE_OUTPUT
  PRESENTATIONS_GET: GOOGLESLIDES_PRESENTATIONS_GET_OUTPUT
  PRESENTATIONS_PAGES_GET: GOOGLESLIDES_PRESENTATIONS_PAGES_GET_OUTPUT
  PRESENTATIONS_PAGES_GET_THUMBNAIL: GOOGLESLIDES_PRESENTATIONS_PAGES_GET_THUMBNAIL_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Type of GOOGLESLIDES's SLIDE_ADDED_TRIGGER trigger payload.
 */
type GOOGLESLIDES_SLIDE_ADDED_TRIGGER_PAYLOAD = {
  /**
   * Event Type
   * @description Type of slide event
   * @default slide_added
   */
  event_type: string;
  /**
   * Slide
   * @description The slide object that was added
   */
  slide?: {
      [key: string]: unknown;
  };
};

/**
 * Map of Composio's GOOGLESLIDES toolkit.
 */
export const GOOGLESLIDES = {
  slug: "googleslides",
  tools: {
    /**
     * Creates a new google slides presentation from markdown text. automatically splits content into slides using '---' separators and applies appropriate templates based on content structure.
     */
    CREATE_SLIDES_MARKDOWN: "GOOGLESLIDES_CREATE_SLIDES_MARKDOWN",
    /**
     * Tool to update existing google slides presentations with either raw api requests or markdown content. **two operation modes:** 1. **raw api mode**: provide direct slides api requests for precise control 2. **markdown mode**: provide markdown text to automatically add professional slides **markdown features:** - professional themes with coordinated colors and backgrounds - dynamic font sizing that prevents overflow (notion-like hierarchy) - smart table auto-sizing with column width optimization - auto-centering and professional positioning - bold formatting, emojis, and multi-line content support - multiple slide types: title, bullet, table, quote, image, two-column **use cases:** - add new slides to existing presentations - update presentation content with markdown - apply professional themes and styling - bulk slide creation with consistent formatting
     */
    PRESENTATIONS_BATCH_UPDATE: "GOOGLESLIDES_PRESENTATIONS_BATCH_UPDATE",
    /**
     * Tool to create a blank or duplicate presentation. use when you need to initialize a presentation with a specific title or duplicate an existing one.
     */
    PRESENTATIONS_CREATE: "GOOGLESLIDES_PRESENTATIONS_CREATE",
    /**
     * Tool to retrieve the latest version of a presentation. use after obtaining the presentation id.
     */
    PRESENTATIONS_GET: "GOOGLESLIDES_PRESENTATIONS_GET",
    /**
     * Tool to get the latest version of a specific page in a presentation. use when you need to inspect slide, layout, master, or notes page details.
     */
    PRESENTATIONS_PAGES_GET: "GOOGLESLIDES_PRESENTATIONS_PAGES_GET",
    /**
     * Tool to generate and return a thumbnail image url for a specific page. use when you need a quick preview of a slide page after loading it.
     */
    PRESENTATIONS_PAGES_GET_THUMBNAIL: "GOOGLESLIDES_PRESENTATIONS_PAGES_GET_THUMBNAIL",
  },
  triggerTypes: {
    /**
     * Fires when a new slide is added to a Google Slides presentation.
     */
    SLIDE_ADDED_TRIGGER: "GOOGLESLIDES_SLIDE_ADDED_TRIGGER",
  },
}

/**
 * Type map of all available trigger payloads for toolkit "GOOGLESLIDES".
 */
export type GOOGLESLIDES_TRIGGER_PAYLOADS = {
  SLIDE_ADDED_TRIGGER: GOOGLESLIDES_SLIDE_ADDED_TRIGGER_PAYLOAD
}

/**
 * Type map of all available trigger events for toolkit "GOOGLESLIDES".
 */
export type GOOGLESLIDES_TRIGGER_EVENTS = {
  SLIDE_ADDED_TRIGGER: TriggerEvent<GOOGLESLIDES_SLIDE_ADDED_TRIGGER_PAYLOAD>
}
