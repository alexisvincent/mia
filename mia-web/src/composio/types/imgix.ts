// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of IMGIX's IMGIX_AUTO tool input.
 */
type IMGIX_AUTO_INPUT = {
  /**
   * Auto
   * @description List of automatic operations to apply. Allowed values: compress, enhance, format, redeye, true
   */
  auto?: string[];
  /**
   * Path
   * @description Asset path within the source (e.g., "images/photo.jpg")
   */
  path?: string;
  /**
   * Source
   * @description Imgix source domain (e.g., "my-source.imgix.net")
   */
  source?: string;
};

/**
 * Type of IMGIX's IMGIX_AUTO tool output.
 */
type IMGIX_AUTO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Optimized image content as binary file
       */
      content: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_BLEND tool input.
 */
type IMGIX_BLEND_INPUT = {
  /**
   * Base Image Url
   * @description The URL of the base image to which the overlay will be applied
   */
  base_image_url?: string;
  /**
   * Blend
   * @description URL-encoded overlay URL (image or text), absolute or relative.
   * @default null
   */
  blend: string | null;
  /**
   * Blend64
   * @description URL-safe Base64-encoded overlay URL (image or text).
   * @default null
   */
  blend64: string | null;
  /**
   * Blend Align
   * @description Overlay alignment: top, middle, bottom, left, center, right or 'horizontal,vertical'.
   * @default null
   */
  blend_align: string | null;
  /**
   * Blend Alpha
   * @description Overlay transparency (0 transparent, 100 opaque).
   * @default null
   */
  blend_alpha: number | null;
  /**
   * Blend Color
   * @description Solid color overlay; accepts keywords or hex strings (3/4/6/8-digit AARRGGBB).
   * @default null
   */
  blend_color: string | null;
  /**
   * Blend Crop
   * @description When blend_fit='crop', crop focus: top, bottom, left, right, faces; CSV
   * @default null
   */
  blend_crop: string | null;
  /**
   * Blend Fit
   * @description How the overlay is fit into its blend_w/blend_h box
   * @default clip
   * @enum {string}
   */
  blend_fit: "clamp" | "clip" | "crop" | "max" | "scale";
  /**
   * Blend H
   * @description Overlay height in pixels (>1) or ratio of base height (0.0-1.0)
   * @default null
   */
  blend_h: number | null;
  /**
   * Blend Mode
   * @description How the overlay interacts with the base image.
   * @default overlay
   * @enum {string}
   */
  blend_mode: "normal" | "darken" | "multiply" | "burn" | "lighten" | "screen" | "dodge" | "overlay" | "softlight" | "hardlight" | "difference" | "exclusion" | "color" | "hue" | "saturation" | "luminosity";
  /**
   * Blend Pad
   * @description Padding in pixels around the overlay when alignment is used
   * @default null
   */
  blend_pad: number | null;
  /**
   * Blend Size
   * @description If 'inherit', overlay inherits base image sizing/cropping
   * @default null
   * @constant
   */
  blend_size: "inherit";
  /**
   * Blend W
   * @description Overlay width in pixels (>1) or ratio of base width (0.0-1.0)
   * @default null
   */
  blend_w: number | null;
  /**
   * Blend X
   * @description Horizontal offset in pixels from the left edge
   * @default null
   */
  blend_x: number | null;
  /**
   * Blend Y
   * @description Vertical offset in pixels from the top edge
   * @default null
   */
  blend_y: number | null;
};

/**
 * Type of IMGIX's IMGIX_BLEND tool output.
 */
type IMGIX_BLEND_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description The resulting blended image file.
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_BLEND_ALIGN tool input.
 */
type IMGIX_BLEND_ALIGN_INPUT = {
  /**
   * Horizontal
   * @description Horizontal alignment of the overlay relative to the base image
   * @default center
   * @enum {string}
   */
  horizontal: "left" | "center" | "right";
  /**
   * Image Url
   * @description The Imgix image URL to which the blend-align parameter will be applied
   */
  image_url?: string;
  /**
   * Vertical
   * @description Vertical alignment of the overlay relative to the base image
   * @default middle
   * @enum {string}
   */
  vertical: "top" | "middle" | "bottom";
};

/**
 * Type of IMGIX's IMGIX_BLEND_ALIGN tool output.
 */
type IMGIX_BLEND_ALIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description The Imgix URL with the 'blend-align' parameter applied
       */
      url: string;
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
 * Type of IMGIX's IMGIX_BLEND_COLOR tool input.
 */
type IMGIX_BLEND_COLOR_INPUT = {
  /**
   * Blend Alpha
   * @description Overlay transparency from 0 (transparent) to 100 (opaque)
   * @default null
   */
  blend_alpha: number | null;
  /**
   * Blend Color
   * @description Color keyword or 3-/4-/6-/8-digit hex; for hex, prefix with '#' optional; 4/8-digit include alpha channel
   */
  blend_color?: string;
  /**
   * Blend Mode
   * @description How the color blends with the image; default is 'overlay'
   * @default null
   * @enum {string|null}
   */
  blend_mode: "normal" | "darken" | "multiply" | "burn" | "lighten" | "screen" | "dodge" | "overlay" | "softlight" | "hardlight" | "difference" | "exclusion" | "color" | "hue" | "saturation" | "luminosity" | null;
  /**
   * Image Url
   * Format: uri
   * @description Source image URL
   */
  image_url?: string;
};

/**
 * Type of IMGIX's IMGIX_BLEND_COLOR tool output.
 */
type IMGIX_BLEND_COLOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * Format: uri
       * @description URL of the image with the blended color transformation applied
       */
      url: string;
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
 * Type of IMGIX's IMGIX_BLEND_X tool input.
 */
type IMGIX_BLEND_X_INPUT = {
  /**
   * Blend
   * @description Overlay image URL or color code (e.g., hex code), must enable blending.
   */
  blend?: string;
  /**
   * Blend X
   * @description Horizontal offset in pixels from the left edge. Defaults to 0.
   * @default 0
   */
  blend_x: number;
  /**
   * Image Url
   * Format: uri
   * @description Base image URL without existing query parameters.
   */
  image_url?: string;
};

/**
 * Type of IMGIX's IMGIX_BLEND_X tool output.
 */
type IMGIX_BLEND_X_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description The blended image file content.
       */
      content: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_BORDER tool input.
 */
type IMGIX_BORDER_INPUT = {
  /**
   * Color
   * @description Border color as a CSS keyword or hexadecimal value (3/4/6/8-digit), e.g., 'red', 'FF0000', or '80FF0000'
   */
  color?: string;
  /**
   * Image Path
   * @description Path to the image within the source, e.g., 'images/pic.jpg'; omit leading slash
   */
  image_path?: string;
  /**
   * Source Domain
   * @description Imgix source domain (hostname), e.g., 'example-source.imgix.net'
   */
  source_domain?: string;
  /**
   * Width
   * @description Border thickness in pixels; must be a positive integer.
   */
  width?: number;
};

/**
 * Type of IMGIX's IMGIX_BORDER tool output.
 */
type IMGIX_BORDER_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Transformed image content with the specified border applied.
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_BRI tool input.
 */
type IMGIX_BRI_INPUT = {
  /**
   * Asset Path
   * @description Path to the image asset on your Imgix source (e.g., 'photos/image.jpg'). No leading slash.
   */
  asset_path?: string;
  /**
   * Bri
   * @description Brightness adjustment in percent, between -100 (darkest) and 100 (brightest). Default is 0 (no change).
   * @default 0
   */
  bri: number;
  /**
   * Source
   * @description Imgix source domain (e.g., 'my-source'). Do not include 'https://' or trailing slash.
   */
  source?: string;
};

/**
 * Type of IMGIX's IMGIX_BRI tool output.
 */
type IMGIX_BRI_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Downloaded image file with brightness adjustment applied.
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_CH tool input.
 */
type IMGIX_CH_INPUT = {
  /**
   * Ch
   * @description List of Client Hints tokens to opt into. Allowed values: 'Width', 'DPR', 'Save-Data'. Overrides 'w' and 'dpr' URL params; 'Save-Data' enforces q=45 and may change output format.
   */
  ch?: string[];
  /**
   * Image Path
   * @description Path to the image within the source, e.g., 'images/photo.jpg'; omit leading slash
   */
  image_path?: string;
  /**
   * Source Domain
   * @description Imgix source domain (hostname), e.g., 'example-source.imgix.net'
   */
  source_domain?: string;
};

/**
 * Type of IMGIX's IMGIX_CH tool output.
 */
type IMGIX_CH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Transformed image content with client hints parameters applied.
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_COLORS tool input.
 */
type IMGIX_COLORS_INPUT = {
  /**
   * Colors
   * @description Number of colors to include in the palette (0-16). Default 6.
   * @default 6
   */
  colors: number;
  /**
   * Image Path
   * @description Path to the image within the source, e.g., 'images/photo.jpg'. Omit leading slash.
   */
  image_path?: string;
  /**
   * Palette
   * @description Output format: 'json' for structured data, 'css' for stylesheet.
   * @default json
   * @enum {string}
   */
  palette: "css" | "json";
  /**
   * Prefix
   * @description CSS class prefix when palette='css'. Ignored for JSON.
   * @default null
   */
  prefix: string | null;
  /**
   * Source Domain
   * @description Imgix source domain (hostname), e.g., 'example-source.imgix.net'. Do not include protocol.
   */
  source_domain?: string;
};

/**
 * Type of IMGIX's IMGIX_COLORS tool output.
 */
type IMGIX_COLORS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Average Luminance
       * @description Average luminance of the image (present when palette='json').
       * @default null
       */
      average_luminance: number | null;
      /**
       * Colors
       * @description List of extracted palette colors (present when palette='json').
       * @default null
       */
      colors: {
          /**
           * Blue
           * @description Blue component (0-1)
           */
          blue: number;
          /**
           * Green
           * @description Green component (0-1)
           */
          green: number;
          /**
           * Hex
           * @description Hex code of the color, including leading '#'
           */
          hex: string;
          /**
           * Red
           * @description Red component (0-1)
           */
          red: number;
      }[] | null;
      /**
       * Css
       * @description Raw CSS stylesheet output (present when palette='css').
       * @default null
       */
      css: string | null;
      /**
       * Dominant Colors
       * @description Named dominant colors (e.g., vibrant, muted), each a Color object (present when palette='json').
       * @default null
       */
      dominant_colors: {
          [key: string]: {
              /**
               * Blue
               * @description Blue component (0-1)
               */
              blue: number;
              /**
               * Green
               * @description Green component (0-1)
               */
              green: number;
              /**
               * Hex
               * @description Hex code of the color, including leading '#'
               */
              hex: string;
              /**
               * Red
               * @description Red component (0-1)
               */
              red: number;
          };
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
 * Type of IMGIX's IMGIX_CON tool input.
 */
type IMGIX_CON_INPUT = {
  /**
   * Asset Path
   * @description Path to the image asset on your Imgix source (e.g., 'photos/image.jpg'). No leading slash.
   */
  asset_path?: string;
  /**
   * Con
   * @description Contrast adjustment in percent, between -100 (lowest contrast) and 100 (highest contrast). Default is 0 for no change.
   * @default 0
   */
  con: number;
  /**
   * Source
   * @description Imgix source domain (e.g., 'my-source'). Do not include 'https://' or trailing slash.
   */
  source?: string;
};

/**
 * Type of IMGIX's IMGIX_CON tool output.
 */
type IMGIX_CON_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Downloaded image file with contrast adjustment applied.
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_CROP tool input.
 */
type IMGIX_CROP_INPUT = {
  /**
   * Ar
   * @description Optional aspect ratio in 'W:H' format (e.g., '16:9'). Used with fit=crop/fill to maintain ratio.
   * @default null
   */
  ar: string | null;
  /**
   * Crop
   * @description Crop alignment and strategy. Provide a comma-separated string or a list including any of: top, bottom, left, right, faces, focalpoint, edges, entropy.
   */
  crop?: string | null;
  /**
   * Fit
   * @description How the image fits target dimensions. Commonly 'crop' when using the crop parameter.
   * @default crop
   * @enum {string|null}
   */
  fit: "clamp" | "clip" | "crop" | "facearea" | "fill" | "fillmax" | "max" | "min" | "scale" | null;
  /**
   * Fp X
   * @description Focal point X coordinate (0.0-1.0) when crop=focalpoint.
   * @default null
   */
  "fp-x": number | null;
  /**
   * Fp Y
   * @description Focal point Y coordinate (0.0-1.0) when crop=focalpoint.
   * @default null
   */
  "fp-y": number | null;
  /**
   * Fp Z
   * @description Focal point zoom (typically 1.0-5.0) when crop=focalpoint.
   * @default null
   */
  "fp-z": number | null;
  /**
   * H
   * @description Output height in pixels or as ratio (0.0-1.0).
   * @default null
   */
  h: number | null;
  /**
   * Image Path
   * @description Path to the image within the source, e.g., 'examples/pione.jpg'. Omit leading slash.
   */
  image_path?: string;
  /**
   * Source Domain
   * @description Imgix source domain (hostname only), e.g., 'assets.imgix.net'. Exclude protocol.
   */
  source_domain?: string;
  /**
   * W
   * @description Output width in pixels or as ratio (0.0-1.0).
   * @default null
   */
  w: number | null;
};

/**
 * Type of IMGIX's IMGIX_CROP tool output.
 */
type IMGIX_CROP_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Transformed image content with crop applied
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_CS tool input.
 */
type IMGIX_CS_INPUT = {
  /**
   * Cs
   * @description Color space of the output image. Accepted values: 'origin', 'srgb', 'adobergb1998', 'tinysrgb', 'strip'. If omitted, uses 'origin'.
   * @default null
   * @enum {string|null}
   */
  cs: "origin" | "srgb" | "adobergb1998" | "tinysrgb" | "strip" | null;
  /**
   * Image Path
   * @description Path to the image within the source, e.g., 'images/photo.jpg'; omit leading slash
   */
  image_path?: string;
  /**
   * Source Domain
   * @description Imgix source domain (hostname), e.g., 'example-source.imgix.net'; exclude protocol
   */
  source_domain?: string;
};

/**
 * Type of IMGIX's IMGIX_CS tool output.
 */
type IMGIX_CS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Transformed image file content with the specified color space applied.
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_DL tool input.
 */
type IMGIX_DL_INPUT = {
  /**
   * Dl
   * @description Desired download filename. When provided, forces download with this filename.
   * @default null
   */
  dl: string | null;
  /**
   * Dl64
   * @description Base64-encoded (URL-safe) download filename. Mutually exclusive with dl.
   * @default null
   */
  dl64: string | null;
  /**
   * Path
   * @description Asset path within the source (e.g., "images/photo.jpg")
   */
  path?: string;
  /**
   * Source
   * @description Imgix source domain (e.g., "my-source.imgix.net")
   */
  source?: string;
};

/**
 * Type of IMGIX's IMGIX_DL tool output.
 */
type IMGIX_DL_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Downloaded asset content as binary file
       */
      content: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
      };
      /**
       * Downloaded Filename
       * @description Filename used for the download (dl value or original filename)
       */
      downloaded_filename: string;
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
 * Type of IMGIX's IMGIX_DPI tool input.
 */
type IMGIX_DPI_INPUT = {
  /**
   * Asset Path
   * @description Asset path on your Imgix source (e.g., 'photos/image.jpg'). Do not include leading slash.
   */
  asset_path?: string;
  /**
   * Dpi
   * @description Dots per inch (DPI) to embed in the image Exif header; integer ≥1. Only applies to JPEG and PNG images.
   */
  dpi?: number;
  /**
   * Fm
   * @description Optional. Convert the image to this format before setting DPI (only 'jpg' or 'png').
   * @default null
   * @enum {string|null}
   */
  fm: "jpg" | "png" | null;
  /**
   * Source
   * @description Imgix source domain without protocol (e.g., 'my-source'). Do not include 'https://' or trailing slash.
   */
  source?: string;
};

/**
 * Type of IMGIX's IMGIX_DPI tool output.
 */
type IMGIX_DPI_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Downloaded image file with DPI metadata applied.
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_DPR tool input.
 */
type IMGIX_DPR_INPUT = {
  /**
   * Asset Path
   * @description Path to the image asset on your Imgix source (e.g., 'photos/image.jpg'). No leading slash.'
   */
  asset_path?: string;
  /**
   * Dpr
   * @description Device pixel ratio controlling image output density. Default is 1; must be ≥ 0 and ≤ 5. Requires width and/or height to take effect.
   * @default 1
   */
  dpr: number;
  /**
   * H
   * @description Desired output height in pixels (integer ≥ 1). At least one of width or height is required.'
   * @default null
   */
  h: number | null;
  /**
   * Source
   * @description Imgix source domain (e.g., 'my-source'). Do not include 'https://' or trailing slash.'
   */
  source?: string;
  /**
   * W
   * @description Desired output width in pixels (integer ≥ 1). At least one of width or height is required.'
   * @default null
   */
  w: number | null;
};

/**
 * Type of IMGIX's IMGIX_DPR tool output.
 */
type IMGIX_DPR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Downloaded image file rendered at the specified DPR and dimensions.
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_EXPIRES tool input.
 */
type IMGIX_EXPIRES_INPUT = {
  /**
   * Expires
   * @description Absolute UNIX timestamp (seconds since epoch) after which the URL will return 404
   */
  expires?: number;
  /**
   * Path
   * @description Asset path within the source (e.g., "images/photo.jpg"). Exclude leading slash.
   */
  path?: string;
  /**
   * Source Domain
   * @description Imgix source domain (e.g., "my-source.imgix.net"). Exclude protocol.
   */
  source_domain?: string;
};

/**
 * Type of IMGIX's IMGIX_EXPIRES tool output.
 */
type IMGIX_EXPIRES_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description Imgix URL with the 'expires' parameter appended
       */
      url: string;
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
 * Type of IMGIX's IMGIX_FIT tool input.
 */
type IMGIX_FIT_INPUT = {
  /**
   * Faceindex
   * @description Select which detected face to prioritize when fit='facearea'
   * @default null
   */
  faceindex: number | null;
  /**
   * Facepad
   * @description Padding around detected faces as fraction of face bounding box when fit='facearea'
   * @default null
   */
  facepad: number | null;
  /**
   * Fit
   * @description Specifies how to fit the image within the target dimensions. One of: clamp, clip, crop, facearea, fill, fillmax, max, min, scale.
   * @enum {string}
   */
  fit?: "clamp" | "clip" | "crop" | "facearea" | "fill" | "fillmax" | "max" | "min" | "scale";
  /**
   * H
   * @description Output height in pixels (1-8192) or ratio (0.0-1.0) of source height
   */
  h?: number | null;
  /**
   * Image Path
   * @description Path to the image within the source, e.g., 'images/photo.jpg' (omit leading slash)
   */
  image_path?: string;
  /**
   * Source Domain
   * @description Imgix source domain (hostname), e.g., 'example-source.imgix.net' (exclude protocol)
   */
  source_domain?: string;
  /**
   * W
   * @description Output width in pixels (1-8192) or ratio (0.0-1.0) of source width
   */
  w?: number | null;
};

/**
 * Type of IMGIX's IMGIX_FIT tool output.
 */
type IMGIX_FIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Transformed image content with fit mode applied
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_FM tool input.
 */
type IMGIX_FM_INPUT = {
  /**
   * Fm
   * @description Output format to convert the asset to. Valid values: avif, gif, jp2, jpg, json, jxr, pjpg, mp4, png, png8, png32, webm, webp, blurhash.
   * @enum {string}
   */
  fm?: "avif" | "gif" | "jp2" | "jpg" | "json" | "jxr" | "pjpg" | "mp4" | "png" | "png8" | "png32" | "webm" | "webp" | "blurhash";
  /**
   * Lossless
   * @description Only valid when fm='webp'. Set to true to request lossless WebP delivery
   * @default null
   */
  lossless: boolean | null;
  /**
   * Path
   * @description Asset path within the source (e.g., "images/photo.jpg")
   */
  path?: string;
  /**
   * Source
   * @description Imgix source domain (e.g., "my-source.imgix.net")
   */
  source?: string;
};

/**
 * Type of IMGIX's IMGIX_FM tool output.
 */
type IMGIX_FM_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Transformed asset content as a downloadable file
       */
      content: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_FORCE_ASPECT_RATIO tool input.
 */
type IMGIX_FORCE_ASPECT_RATIO_INPUT = {
  /**
   * Ar
   * @description Target aspect ratio in 'W:H' format. Use integers or decimals, e.g., '16:9', '4:3', '1.5:1'.
   */
  ar?: string;
  /**
   * Crop
   * @description When 'fit=crop', controls alignment of the crop box. Defaults to center if unset.
   * @default null
   * @enum {string|null}
   */
  crop: "top" | "bottom" | "left" | "right" | "faces" | "focalpoint" | "edges" | "entropy" | null;
  /**
   * Fill
   * @description When 'fit=fill', determines how excess space is filled. Options: 'solid', 'blur', 'gradient', 'gen'.
   * @default null
   * @enum {string|null}
   */
  fill: "solid" | "blur" | "gradient" | "gen" | null;
  /**
   * Fill Color
   * @description Color for solid fill, e.g., '#ff0000' or 'red'. Only used when 'fill=solid'.
   * @default null
   */
  fill_color: string | null;
  /**
   * Fit
   * @description How the image fits the target ratio. Must be 'crop' or 'fill'.
   * @enum {string}
   */
  fit?: "crop" | "fill";
  /**
   * H
   * @description Desired height in pixels (integer) or as a ratio (0.0-1.0). If omitted and 'w' is set, 'h' is auto-calculated.
   * @default null
   */
  h: number | null;
  /**
   * Path
   * @description Path to the image on your Imgix source, e.g., 'images/photo.jpg'. Exclude leading slash.
   */
  path?: string;
  /**
   * Source Domain
   * @description Your Imgix source domain, e.g., 'my-source.imgix.net'. Exclude protocol ('http://' or 'https://').
   */
  source_domain?: string;
  /**
   * W
   * @description Desired width in pixels (integer) or as a ratio (0.0-1.0). If omitted and 'h' is set, 'w' is auto-calculated.
   * @default null
   */
  w: number | null;
};

/**
 * Type of IMGIX's IMGIX_FORCE_ASPECT_RATIO tool output.
 */
type IMGIX_FORCE_ASPECT_RATIO_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description Generated Imgix URL with applied aspect ratio and parameters.
       */
      url: string;
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
 * Type of IMGIX's IMGIX_H tool input.
 */
type IMGIX_H_INPUT = {
  /**
   * Asset Path
   * @description Path to the image on your Imgix source (e.g., 'photos/image.jpg'); omit leading slash.
   */
  asset_path?: string;
  /**
   * H
   * @description Height of the output image. Provide a positive integer for pixel height (1-8192), or a float >0.0 and ≤1.0 to specify a ratio of the source height.
   */
  h?: number | null;
  /**
   * Source
   * @description Imgix source domain (e.g., 'my-source'). Do not include protocol or trailing slash.
   */
  source?: string;
};

/**
 * Type of IMGIX's IMGIX_H tool output.
 */
type IMGIX_H_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Downloaded image file with the specified height applied.
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_HIGH tool input.
 */
type IMGIX_HIGH_INPUT = {
  /**
   * Asset Path
   * @description Path to the image asset on your Imgix source (e.g., 'photos/image.jpg'). No leading slash.
   */
  asset_path?: string;
  /**
   * High
   * @description Highlight tonal mapping adjustment in percent, between -100 (reduce highlights most) and 0 (no change).
   * @default 0
   */
  high: number;
  /**
   * Source
   * @description Imgix source domain (e.g., 'my-source'). Do not include 'https://' or trailing slash.
   */
  source?: string;
};

/**
 * Type of IMGIX's IMGIX_HIGH tool output.
 */
type IMGIX_HIGH_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Downloaded image file with highlight adjustment applied.
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_LIST_SOURCES tool input.
 */
type IMGIX_LIST_SOURCES_INPUT = {
  /**
   * Fields[Sources]
   * @description Comma-delimited list of Source fields to return; use dot notation for nested fields.
   * @default null
   */
  "fields[sources]": string | null;
  /**
   * Filter[Deployment.Azure Bucket]
   * @description Azure container name filter.
   * @default null
   */
  "filter[deployment.azure_bucket]": string | null;
  /**
   * Filter[Deployment.Bucket Name]
   * @description S3-Compatible bucket name filter.
   * @default null
   */
  "filter[deployment.bucket_name]": string | null;
  /**
   * Filter[Deployment.Custom Domains]
   * @description Custom domains filter.
   * @default null
   */
  "filter[deployment.custom_domains]": string | null;
  /**
   * Filter[Deployment.Gcs Bucket]
   * @description GCS bucket name filter.
   * @default null
   */
  "filter[deployment.gcs_bucket]": string | null;
  /**
   * Filter[Deployment.Imgix Subdomains]
   * @description Imgix subdomains filter.
   * @default null
   */
  "filter[deployment.imgix_subdomains]": string | null;
  /**
   * Filter[Deployment.Region]
   * @description S3-Compatible region filter.
   * @default null
   */
  "filter[deployment.region]": string | null;
  /**
   * Filter[Deployment.S3 Bucket]
   * @description S3 bucket name filter.
   * @default null
   */
  "filter[deployment.s3_bucket]": string | null;
  /**
   * Filter[Deployment.Storage Provider]
   * @description S3-Compatible storage provider filter.
   * @default null
   */
  "filter[deployment.storage_provider]": string | null;
  /**
   * Filter[Deployment.Type]
   * @description Filter by deployment type.
   * @default null
   * @enum {string|null}
   */
  "filter[deployment.type]": "azure" | "gcs" | "s3" | "webfolder" | "webproxy" | "s3_compatible" | null;
  /**
   * Filter[Deployment.Webfolder Base Url]
   * @description Web Folder base URL filter.
   * @default null
   */
  "filter[deployment.webfolder_base_url]": string | null;
  /**
   * Filter[Enabled]
   * @description Filter by enabled status.
   * @default null
   */
  "filter[enabled]": boolean | null;
  /**
   * Filter[Name]
   * @description Filter by Source name (ANDed with other filters).
   * @default null
   */
  "filter[name]": string | null;
  /**
   * Page[Number]
   * @description Zero-indexed page number.
   * @default null
   */
  "page[number]": number | null;
  /**
   * Page[Size]
   * @description Page size; must be ≥ 1.
   * @default null
   */
  "page[size]": number | null;
  /**
   * Sort
   * @description Comma-separated fields to sort by; prepend '-' for descending. Supported: date_deployed, enabled, name.
   * @default null
   */
  sort: string | null;
};

/**
 * Type of IMGIX's IMGIX_LIST_SOURCES tool output.
 */
type IMGIX_LIST_SOURCES_OUTPUT = {
  /** Data */
  data?: {
      /** Attributes */
      attributes: {
          /** Date Deployed */
          date_deployed: number;
          /** Deployment */
          deployment: {
              [key: string]: unknown;
          };
          /**
           * Deployment Status
           * @enum {string}
           */
          deployment_status: "deploying" | "deployed" | "disabled" | "deleted";
          /** Enabled */
          enabled: boolean;
          /** Name */
          name: string;
          /** Secure Url Token */
          secure_url_token: string | null;
      };
      /** Id */
      id: string;
      /**
       * Type
       * @constant
       */
      type: "sources";
  }[];
  /**
   * Error
   * @description Error if any occurred during the execution of the action
   * @default null
   */
  error: string | null;
  /**
   * Included
   * @default null
   */
  included: unknown[] | null;
  /** Jsonapi */
  jsonapi?: {
      [key: string]: unknown;
  };
  /** Meta */
  meta?: {
      /** Pagination */
      pagination: {
          /** Current Page */
          currentPage: number;
          /** Has Next Page */
          hasNextPage: boolean;
          /** Has Previous Page */
          hasPreviousPage: boolean;
          /** Next Page */
          nextPage: number | null;
          /** Page Size */
          pageSize: number;
          /** Previous Page */
          previousPage: number | null;
          /** Total Pages */
          totalPages: number;
          /** Total Records */
          totalRecords: number;
      };
  };
  /**
   * Successful
   * @description Whether or not the action execution was successful or not
   */
  successful?: boolean;
};

/**
 * Type of IMGIX's IMGIX_MARK_BASE tool input.
 */
type IMGIX_MARK_BASE_INPUT = {
  /**
   * Image Path
   * @description Path to the image within the source, e.g., 'images/photo.jpg'; omit leading slash
   */
  image_path?: string;
  /**
   * Mark Base
   * @description Fully qualified base URL to prepend to the watermark image path. Must include scheme, e.g., 'https://cdn.example.com'
   */
  mark_base?: string;
  /**
   * Source Domain
   * @description Imgix source domain (hostname), e.g., 'example-source.imgix.net'
   */
  source_domain?: string;
};

/**
 * Type of IMGIX's IMGIX_MARK_BASE tool output.
 */
type IMGIX_MARK_BASE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Transformed image content with the 'mark-base' parameter applied.
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_MARK_FIT tool input.
 */
type IMGIX_MARK_FIT_INPUT = {
  /**
   * Image Url
   * @description The Imgix URL to which the watermark fit mode will be applied.
   */
  image_url?: string;
  /**
   * Mark Fit
   * @description Controls how the watermark fits within the specified dimensions. Allowed values:
   *     - clip: preserve aspect ratio within bounds (default);
   *     - crop: fill bounds exactly (requires mark-w and mark-h);
   *     - max: fit within bounds without upscaling;
   *     - scale: force exact target dimensions.
   * @default clip
   * @enum {string}
   */
  mark_fit: "clip" | "crop" | "max" | "scale";
};

/**
 * Type of IMGIX's IMGIX_MARK_FIT tool output.
 */
type IMGIX_MARK_FIT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description The Imgix URL with the 'mark-fit' parameter applied.
       */
      url: string;
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
 * Type of IMGIX's IMGIX_MARK_H tool input.
 */
type IMGIX_MARK_H_INPUT = {
  /**
   * Image Url
   * Format: uri
   * @description Existing Imgix URL to which the watermark height parameter will be applied.
   */
  image_url?: string;
  /**
   * Mark
   * Format: uri
   * @description Overlay source URL for the watermark image or text overlay.
   */
  mark?: string;
  /**
   * Mark H
   * @description Watermark height. Provide a positive integer >1 and <=2000 to specify pixel height, or a float between 0.0 and 1.0 inclusive to specify a ratio of the watermark source height.
   */
  "mark-h"?: number | null;
};

/**
 * Type of IMGIX's IMGIX_MARK_H tool output.
 */
type IMGIX_MARK_H_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * Format: uri
       * @description The Imgix URL with the 'mark' and 'mark-h' parameters applied.
       */
      url: string;
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
 * Type of IMGIX's IMGIX_MARK_PAD tool input.
 */
type IMGIX_MARK_PAD_INPUT = {
  /**
   * Mark Pad
   * @description Number of pixels of padding between watermark and image edge; also between tiled watermark images. Must be an integer ≥ 0. Defaults to 5 if omitted.
   * @default 5
   */
  "mark-pad": number;
  /**
   * Url
   * @description Full URL of the source image (including any existing query parameters).
   */
  url?: string;
};

/**
 * Type of IMGIX's IMGIX_MARK_PAD tool output.
 */
type IMGIX_MARK_PAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description The Imgix URL with the 'mark-pad' parameter applied.
       */
      url: string;
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
 * Type of IMGIX's IMGIX_MARK_W tool input.
 */
type IMGIX_MARK_W_INPUT = {
  /**
   * Image Url
   * @description The Imgix URL to which the watermark width will be applied.
   */
  image_url?: string;
  /**
   * Mark W
   * @description Watermark width. Specify an integer ≥1 to set an absolute pixel width, or a float >0 and ≤1 to set a ratio of the watermark source's width.
   */
  mark_w?: number | null;
};

/**
 * Type of IMGIX's IMGIX_MARK_W tool output.
 */
type IMGIX_MARK_W_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * @description The Imgix URL with the 'mark-w' parameter applied.
       */
      url: string;
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
 * Type of IMGIX's IMGIX_MASK tool input.
 */
type IMGIX_MASK_INPUT = {
  /**
   * Corner Radius
   * @description Corner radius in pixels; integer or comma-separated list of up to 4 values, used when mask='corners'
   * @default null
   */
  "corner-radius": number | null;
  /**
   * Image Path
   * @description Path to the image within the source, e.g., 'images/photo.jpg' (omit leading slash)
   */
  image_path?: string;
  /**
   * Mask
   * @description Mask type: 'corners', 'ellipse', or an image URL; URL or comma-separated values must be URL-encoded
   * @default null
   */
  mask: string | null;
  /**
   * Mask Bg
   * @description Background color for masked areas; accepts CSS keywords or hex (e.g., 'FF0000' or 'red')
   * @default null
   */
  "mask-bg": string | null;
  /**
   * Mask64
   * @description Base64-encoded mask; use when encoding URLs or comma-separated values
   * @default null
   */
  mask64: string | null;
  /**
   * Source Domain
   * @description Imgix source domain (hostname), e.g., 'example-source.imgix.net' (exclude protocol)
   */
  source_domain?: string;
};

/**
 * Type of IMGIX's IMGIX_MASK tool output.
 */
type IMGIX_MASK_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Transformed image content with mask applied
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_MAX_H tool input.
 */
type IMGIX_MAX_H_INPUT = {
  /**
   * Image Path
   * @description Path to the image within the source, e.g., 'images/photo.jpg'; omit leading slash
   */
  image_path?: string;
  /**
   * Max H
   * @description Maximum allowed output image height in pixels; only enforced when fit=crop is used
   */
  "max-h"?: number;
  /**
   * Source Domain
   * @description Imgix source domain (hostname), e.g., 'example-source.imgix.net'; exclude protocol
   */
  source_domain?: string;
};

/**
 * Type of IMGIX's IMGIX_MAX_H tool output.
 */
type IMGIX_MAX_H_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Processed image content with max height enforced
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_MAX_W tool input.
 */
type IMGIX_MAX_W_INPUT = {
  /**
   * Image Path
   * @description Path to the image within the source, e.g., 'images/photo.jpg' (omit leading slash)
   */
  image_path?: string;
  /**
   * Max W
   * @description Maximum allowed output width in pixels (works only with fit=crop). Must be between 1 and 8192.
   */
  max_w?: number;
  /**
   * Source Domain
   * @description Imgix source domain (hostname), e.g., 'example-source.imgix.net' (exclude protocol)
   */
  source_domain?: string;
};

/**
 * Type of IMGIX's IMGIX_MAX_W tool output.
 */
type IMGIX_MAX_W_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Downloaded image file with the maximum width applied.
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_PALETTE tool input.
 */
type IMGIX_PALETTE_INPUT = {
  /**
   * Colors
   * @description Number of colors to include in the palette (0-16). Default 6.
   * @default 6
   */
  colors: number;
  /**
   * Image Path
   * @description Path to the image within the source, e.g., 'images/photo.jpg'. Omit leading slash.
   */
  image_path?: string;
  /**
   * Palette
   * @description Output format: 'json' for structured data, 'css' for stylesheet.
   * @default json
   * @enum {string}
   */
  palette: "css" | "json";
  /**
   * Prefix
   * @description CSS class prefix when palette='css'. Ignored for JSON.
   * @default null
   */
  prefix: string | null;
  /**
   * Signature
   * @description URL signature (s=...) if secure URLs are enabled.
   * @default null
   */
  signature: string | null;
  /**
   * Source Domain
   * @description Imgix source domain (hostname), e.g., 'example-source.imgix.net'. Do not include protocol.
   */
  source_domain?: string;
};

/**
 * Type of IMGIX's IMGIX_PALETTE tool output.
 */
type IMGIX_PALETTE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Average Luminance
       * @description Average luminance of the image (present when palette='json').
       * @default null
       */
      average_luminance: number | null;
      /**
       * Colors
       * @description List of extracted palette colors (present when palette='json').
       * @default null
       */
      colors: {
          /**
           * Blue
           * @description Blue component (0-1)
           */
          blue: number;
          /**
           * Green
           * @description Green component (0-1)
           */
          green: number;
          /**
           * Hex
           * @description Hex code of the color, including leading '#'
           */
          hex: string;
          /**
           * Red
           * @description Red component (0-1)
           */
          red: number;
      }[] | null;
      /**
       * Css
       * @description Raw CSS stylesheet output (present when palette='css').
       * @default null
       */
      css: string | null;
      /**
       * Dominant Colors
       * @description Named dominant colors (e.g., vibrant, muted), each a Color object (present when palette='json').
       * @default null
       */
      dominant_colors: {
          [key: string]: {
              /**
               * Blue
               * @description Blue component (0-1)
               */
              blue: number;
              /**
               * Green
               * @description Green component (0-1)
               */
              green: number;
              /**
               * Hex
               * @description Hex code of the color, including leading '#'
               */
              hex: string;
              /**
               * Red
               * @description Red component (0-1)
               */
              red: number;
          };
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
 * Type of IMGIX's IMGIX_PREFIX tool input.
 */
type IMGIX_PREFIX_INPUT = {
  /**
   * Colors
   * @description Number of colors to include in the palette; default is 6; valid range 0–16.
   * @default 6
   */
  colors: number | null;
  /**
   * Image Path
   * @description Path to the image within the source, e.g., 'examples/pione.jpg'. May include or omit leading slash.
   */
  image_path?: string;
  /**
   * Palette
   * @description Output format: 'css' to receive a CSS stylesheet, 'json' for JSON palette output; prefix is only applied when 'css'.
   * @default css
   * @enum {string}
   */
  palette: "css" | "json";
  /**
   * Prefix
   * @description CSS class name prefix to use instead of the default 'image'; ignored when palette='json'.
   * @default null
   */
  prefix: string | null;
  /**
   * Source Domain
   * @description Imgix source domain (hostname), e.g., 'assets.imgix.net'. Do not include protocol.
   */
  source_domain?: string;
};

/**
 * Type of IMGIX's IMGIX_PREFIX tool output.
 */
type IMGIX_PREFIX_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Raw response text from the Imgix Rendering API (CSS if palette='css', JSON string if palette='json').
       */
      content: string;
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
 * Type of IMGIX's IMGIX_Q tool input.
 */
type IMGIX_Q_INPUT = {
  /**
   * Image Path
   * @description Path to the image within the source, e.g., 'images/photo.jpg' (omit leading slash)
   */
  image_path?: string;
  /**
   * Q
   * @description Output quality for lossy formats (jpg, pjpg, webp, avif, jxr). Valid range 0-100; default 75.
   * @default 75
   */
  q: number;
  /**
   * Source Domain
   * @description Imgix source domain (hostname), e.g., 'example-source.imgix.net' (exclude protocol)
   */
  source_domain?: string;
};

/**
 * Type of IMGIX's IMGIX_Q tool output.
 */
type IMGIX_Q_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Processed image with quality applied
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_RECT tool input.
 */
type IMGIX_RECT_INPUT = {
  /**
   * H
   * @description Height of the rectangle: integer pixels, fraction (0.0-1.0), or 'full' for full image height.
   */
  h?: number | null;
  /**
   * Image Path
   * @description Path to the image within the source, e.g., 'images/photo.jpg'; omit leading slash.
   */
  image_path?: string;
  /**
   * Source Domain
   * @description Imgix source domain (hostname), e.g., 'example-source.imgix.net'; exclude protocol ('http://' or 'https://').
   */
  source_domain?: string;
  /**
   * W
   * @description Width of the rectangle: integer pixels, fraction (0.0-1.0), or 'full' for full image width.
   */
  w?: number | null;
  /**
   * X
   * @description Horizontal offset for the rectangle origin: integer pixels, fraction (0.0-1.0), or one of 'left','center','right'.
   */
  x?: number | null;
  /**
   * Y
   * @description Vertical offset for the rectangle origin: integer pixels, fraction (0.0-1.0), or one of 'top','middle','bottom'.
   */
  y?: number | null;
};

/**
 * Type of IMGIX's IMGIX_RECT tool output.
 */
type IMGIX_RECT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Image file content with applied source rectangle region
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_ROT tool input.
 */
type IMGIX_ROT_INPUT = {
  /**
   * Path
   * @description Asset path within the source (e.g., "images/photo.jpg"). Exclude leading slash.
   */
  path?: string;
  /**
   * Rot
   * @description Degrees to rotate the image counter-clockwise. Must be between 0 and 359.
   * @default 0
   */
  rot: number;
  /**
   * Rot Type
   * @description When set, controls rotation mode: 'pivot' shows full image; 'straighten' zooms and crops.
   * @default null
   * @enum {string|null}
   */
  "rot-type": "pivot" | "straighten" | null;
  /**
   * Source
   * @description Imgix source domain (e.g., "my-source.imgix.net"). Exclude protocol prefix.
   */
  source?: string;
};

/**
 * Type of IMGIX's IMGIX_ROT tool output.
 */
type IMGIX_ROT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Content
       * @description Rotated image content as binary file
       */
      content: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_ROT_TYPE tool input.
 */
type IMGIX_ROT_TYPE_INPUT = {
  /**
   * Image Url
   * Format: uri
   * @description Full Imgix image URL to which the `rot-type` parameter will be applied.
   */
  image_url?: string;
  /**
   * Rot Type
   * @description Type of rotation behavior: `pivot` displays the entire image without cropping; `straighten` zooms in and crops to straighten an image.
   * @enum {string}
   */
  "rot-type"?: "pivot" | "straighten";
};

/**
 * Type of IMGIX's IMGIX_ROT_TYPE tool output.
 */
type IMGIX_ROT_TYPE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * Format: uri
       * @description New Imgix URL including the specified `rot-type` parameter.
       */
      url: string;
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
 * Type of IMGIX's IMGIX_TXT tool input.
 */
type IMGIX_TXT_INPUT = {
  /**
   * Image Url
   * @description URL of the source image to overlay text onto
   */
  image_url?: string;
  /**
   * Txt
   * @description Text string to render (UTF-8 supported, including emoji)
   * @default null
   */
  txt: string | null;
  /**
   * Txt64
   * @description URL-safe Base64 variant of the text (omit '=' padding)
   * @default null
   */
  txt64: string | null;
};

/**
 * Type of IMGIX's IMGIX_TXT tool output.
 */
type IMGIX_TXT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Resulting image file with text overlay
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_TXT_ALIGN tool input.
 */
type IMGIX_TXT_ALIGN_INPUT = {
  /**
   * Horizontal
   * @description Horizontal alignment of the text overlay: 'left', 'center', or 'right'
   * @default right
   * @enum {string}
   */
  horizontal: "left" | "center" | "right";
  /**
   * Image Path
   * @description Path to the image within the source, e.g., 'images/photo.jpg'; omit leading slash
   */
  image_path?: string;
  /**
   * Source Domain
   * @description Imgix source domain (hostname), e.g., 'example-source.imgix.net'; exclude protocol
   */
  source_domain?: string;
  /**
   * Vertical
   * @description Vertical alignment of the text overlay: 'top', 'middle', or 'bottom'
   * @default bottom
   * @enum {string}
   */
  vertical: "top" | "middle" | "bottom";
};

/**
 * Type of IMGIX's IMGIX_TXT_ALIGN tool output.
 */
type IMGIX_TXT_ALIGN_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Image file content with text overlay aligned as specified.
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_TXT_COLOR tool input.
 */
type IMGIX_TXT_COLOR_INPUT = {
  /**
   * Image Url
   * Format: uri
   * @description Source Imgix URL or source domain with path
   */
  image_url?: string;
  /**
   * Txt Color
   * @description CSS color keyword or 3-/4-/6-/8-digit hex (RGB/ARGB/RRGGBB/AARRGGBB). 4-/8-digit hex supports alpha transparency. Default is opaque black '000'.
   * @default null
   */
  txt_color: string | null;
  /**
   * Txt Color64
   * @description URL-safe Base64-encoded color value. Use when color contains special characters. Mutually exclusive with txt_color.
   * @default null
   */
  txt_color64: string | null;
};

/**
 * Type of IMGIX's IMGIX_TXT_COLOR tool output.
 */
type IMGIX_TXT_COLOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * Format: uri
       * @description Imgix URL with txt-color or txt-color64 parameter applied
       */
      url: string;
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
 * Type of IMGIX's IMGIX_TXT_FONT tool input.
 */
type IMGIX_TXT_FONT_INPUT = {
  /**
   * Font
   * @description Defines the typeface and style for overlay text. Accepts CSS categories: serif, sans-serif, monospace, cursive, fantasy, or explicit font names. To add bold and/or italic, append comma-separated flags (e.g., 'sans-serif,bold,italic').
   */
  font?: string;
  /**
   * Image Path
   * @description Path to the image within the source, e.g., 'images/photo.jpg' (omit leading slash)
   */
  image_path?: string;
  /**
   * Source Domain
   * @description Imgix source domain (hostname), e.g., 'example-source.imgix.net' (exclude protocol)
   */
  source_domain?: string;
  /**
   * Use Base64
   * @description If true, the font value will be URL-safe Base64 encoded and sent in the 'txt-font64' parameter instead of 'txt-font'.
   * @default false
   */
  use_base64: boolean;
};

/**
 * Type of IMGIX's IMGIX_TXT_FONT tool output.
 */
type IMGIX_TXT_FONT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Processed image with text font applied
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_TXT_LINE tool input.
 */
type IMGIX_TXT_LINE_INPUT = {
  /**
   * Image Url
   * Format: uri
   * @description Existing Imgix URL to which the text outline width parameter will be applied.
   */
  image_url?: string;
  /**
   * Txt Line
   * @description Width of the outline to draw around overlay text in pixels. 0 draws no outline (default). Outline is drawn inside text edges.
   */
  "txt-line"?: number;
};

/**
 * Type of IMGIX's IMGIX_TXT_LINE tool output.
 */
type IMGIX_TXT_LINE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Url
       * Format: uri
       * @description The Imgix URL with the 'txt-line' parameter applied.
       */
      url: string;
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
 * Type of IMGIX's IMGIX_TXT_LINE_COLOR tool input.
 */
type IMGIX_TXT_LINE_COLOR_INPUT = {
  /**
   * Color
   * @description Text outline color when 'txt-line' is enabled. Accepts CSS keywords or 3- (RGB), 4- (ARGB), 6- (RRGGBB), or 8-digit (AARRGGBB) hex codes.
   */
  color?: string;
  /**
   * Encode
   * @description If true, use Base64 encoding and send as 'txt-line-color64'
   * @default false
   */
  encode: boolean;
  /**
   * Image Url
   * Format: uri
   * @description Imgix image URL with txt-line parameter set
   */
  image_url?: string;
};

/**
 * Type of IMGIX's IMGIX_TXT_LINE_COLOR tool output.
 */
type IMGIX_TXT_LINE_COLOR_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Resulting image file with outline color applied
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_TXT_SHAD tool input.
 */
type IMGIX_TXT_SHAD_INPUT = {
  /**
   * Image Path
   * @description Path to the image within the source, e.g., 'images/photo.jpg' (omit leading slash)
   */
  image_path?: string;
  /**
   * Source Domain
   * @description Imgix source domain (hostname), e.g., 'example-source.imgix.net' (exclude protocol)
   */
  source_domain?: string;
  /**
   * Strength
   * @description Strength of text shadow (0–10). If not provided, no shadow is applied.
   * @default null
   */
  strength: number | null;
};

/**
 * Type of IMGIX's IMGIX_TXT_SHAD tool output.
 */
type IMGIX_TXT_SHAD_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Image
       * @description Processed image with text shadow applied
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
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
 * Type of IMGIX's IMGIX_TXT_SIZE tool input.
 */
type IMGIX_TXT_SIZE_INPUT = {
  /**
   * Image Path
   * @description Path to the image within the source, e.g., 'images/photo.jpg'; omit leading slash
   */
  image_path?: string;
  /**
   * Size
   * @description Font size of the overlay text in pixels; must be ≥ 1
   * @default 12
   */
  size: number;
  /**
   * Source Domain
   * @description Imgix source domain (hostname), e.g., 'example-source.imgix.net'; exclude protocol
   */
  source_domain?: string;
};

/**
 * Type of IMGIX's IMGIX_TXT_SIZE tool output.
 */
type IMGIX_TXT_SIZE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * FileDownloadable
       * @description Image file content with text font size applied (optional)
       * @default null
       */
      image: {
          /**
           * Mimetype
           * @description Mime type of the file.
           */
          mimetype: string;
          /**
           * Name
           * @description Name of the file
           */
          name: string;
          /**
           * S3Url
           * @description S3 URL of the downloaded file.
           */
          s3url: string;
      } | null;
      /**
       * Image Url
       * @description The final Imgix URL with txt-size applied
       */
      image_url: string;
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
 * Type map of all available tool input types for toolkit "IMGIX".
 */
export type IMGIX_TOOL_INPUTS = {
  AUTO: IMGIX_AUTO_INPUT
  BLEND: IMGIX_BLEND_INPUT
  BLEND_ALIGN: IMGIX_BLEND_ALIGN_INPUT
  BLEND_COLOR: IMGIX_BLEND_COLOR_INPUT
  BLEND_X: IMGIX_BLEND_X_INPUT
  BORDER: IMGIX_BORDER_INPUT
  BRI: IMGIX_BRI_INPUT
  CH: IMGIX_CH_INPUT
  COLORS: IMGIX_COLORS_INPUT
  CON: IMGIX_CON_INPUT
  CROP: IMGIX_CROP_INPUT
  CS: IMGIX_CS_INPUT
  DL: IMGIX_DL_INPUT
  DPI: IMGIX_DPI_INPUT
  DPR: IMGIX_DPR_INPUT
  EXPIRES: IMGIX_EXPIRES_INPUT
  FIT: IMGIX_FIT_INPUT
  FM: IMGIX_FM_INPUT
  FORCE_ASPECT_RATIO: IMGIX_FORCE_ASPECT_RATIO_INPUT
  H: IMGIX_H_INPUT
  HIGH: IMGIX_HIGH_INPUT
  LIST_SOURCES: IMGIX_LIST_SOURCES_INPUT
  MARK_BASE: IMGIX_MARK_BASE_INPUT
  MARK_FIT: IMGIX_MARK_FIT_INPUT
  MARK_H: IMGIX_MARK_H_INPUT
  MARK_PAD: IMGIX_MARK_PAD_INPUT
  MARK_W: IMGIX_MARK_W_INPUT
  MASK: IMGIX_MASK_INPUT
  MAX_H: IMGIX_MAX_H_INPUT
  MAX_W: IMGIX_MAX_W_INPUT
  PALETTE: IMGIX_PALETTE_INPUT
  PREFIX: IMGIX_PREFIX_INPUT
  Q: IMGIX_Q_INPUT
  RECT: IMGIX_RECT_INPUT
  ROT: IMGIX_ROT_INPUT
  ROT_TYPE: IMGIX_ROT_TYPE_INPUT
  TXT: IMGIX_TXT_INPUT
  TXT_ALIGN: IMGIX_TXT_ALIGN_INPUT
  TXT_COLOR: IMGIX_TXT_COLOR_INPUT
  TXT_FONT: IMGIX_TXT_FONT_INPUT
  TXT_LINE: IMGIX_TXT_LINE_INPUT
  TXT_LINE_COLOR: IMGIX_TXT_LINE_COLOR_INPUT
  TXT_SHAD: IMGIX_TXT_SHAD_INPUT
  TXT_SIZE: IMGIX_TXT_SIZE_INPUT
}

/**
 * Type map of all available tool input types for toolkit "IMGIX".
 */
export type IMGIX_TOOL_OUTPUTS = {
  AUTO: IMGIX_AUTO_OUTPUT
  BLEND: IMGIX_BLEND_OUTPUT
  BLEND_ALIGN: IMGIX_BLEND_ALIGN_OUTPUT
  BLEND_COLOR: IMGIX_BLEND_COLOR_OUTPUT
  BLEND_X: IMGIX_BLEND_X_OUTPUT
  BORDER: IMGIX_BORDER_OUTPUT
  BRI: IMGIX_BRI_OUTPUT
  CH: IMGIX_CH_OUTPUT
  COLORS: IMGIX_COLORS_OUTPUT
  CON: IMGIX_CON_OUTPUT
  CROP: IMGIX_CROP_OUTPUT
  CS: IMGIX_CS_OUTPUT
  DL: IMGIX_DL_OUTPUT
  DPI: IMGIX_DPI_OUTPUT
  DPR: IMGIX_DPR_OUTPUT
  EXPIRES: IMGIX_EXPIRES_OUTPUT
  FIT: IMGIX_FIT_OUTPUT
  FM: IMGIX_FM_OUTPUT
  FORCE_ASPECT_RATIO: IMGIX_FORCE_ASPECT_RATIO_OUTPUT
  H: IMGIX_H_OUTPUT
  HIGH: IMGIX_HIGH_OUTPUT
  LIST_SOURCES: IMGIX_LIST_SOURCES_OUTPUT
  MARK_BASE: IMGIX_MARK_BASE_OUTPUT
  MARK_FIT: IMGIX_MARK_FIT_OUTPUT
  MARK_H: IMGIX_MARK_H_OUTPUT
  MARK_PAD: IMGIX_MARK_PAD_OUTPUT
  MARK_W: IMGIX_MARK_W_OUTPUT
  MASK: IMGIX_MASK_OUTPUT
  MAX_H: IMGIX_MAX_H_OUTPUT
  MAX_W: IMGIX_MAX_W_OUTPUT
  PALETTE: IMGIX_PALETTE_OUTPUT
  PREFIX: IMGIX_PREFIX_OUTPUT
  Q: IMGIX_Q_OUTPUT
  RECT: IMGIX_RECT_OUTPUT
  ROT: IMGIX_ROT_OUTPUT
  ROT_TYPE: IMGIX_ROT_TYPE_OUTPUT
  TXT: IMGIX_TXT_OUTPUT
  TXT_ALIGN: IMGIX_TXT_ALIGN_OUTPUT
  TXT_COLOR: IMGIX_TXT_COLOR_OUTPUT
  TXT_FONT: IMGIX_TXT_FONT_OUTPUT
  TXT_LINE: IMGIX_TXT_LINE_OUTPUT
  TXT_LINE_COLOR: IMGIX_TXT_LINE_COLOR_OUTPUT
  TXT_SHAD: IMGIX_TXT_SHAD_OUTPUT
  TXT_SIZE: IMGIX_TXT_SIZE_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's IMGIX toolkit.
 */
export const IMGIX = {
  slug: "imgix",
  tools: {
    /**
     * Tool to apply automatic best-effort image optimizations. Use when you need to compress, enhance, format, or remove redeye via Imgix's auto parameter.
     */
    AUTO: "IMGIX_AUTO",
    /**
     * Tool to overlay an image, text, or color onto a base image using imgix blending parameters. Use after specifying the base image URL and blend parameters to composite layers.
     */
    BLEND: "IMGIX_BLEND",
    /**
     * Tool to align the overlay relative to the base image when blending. Use after constructing a base Imgix URL to specify horizontal and vertical alignment (e.g., 'left,top').
     */
    BLEND_ALIGN: "IMGIX_BLEND_ALIGN",
    /**
     * Tool to blend a solid color over an image using CSS keyword or hex. Use when you need to apply color overlay transformations to an existing image URL.
     */
    BLEND_COLOR: "IMGIX_BLEND_COLOR",
    /**
     * Tool to position the overlay horizontally on an Imgix-rendered image. Use when you need to offset the blend layer by a specified number of pixels from the left edge.
     */
    BLEND_X: "IMGIX_BLEND_X",
    /**
     * Tool to draw a border around an image. Use when you need to overlay a border without resizing.
     */
    BORDER: "IMGIX_BORDER",
    /**
     * Tool to adjust image brightness. Use when you need to modify an image's brightness level (−100 to 100) by supplying your source domain and asset path.
     */
    BRI: "IMGIX_BRI",
    /**
     * Tool to opt in to Client Hints. Use when you want Imgix URLs to adapt based on browser headers (Width, DPR, Save-Data).
     */
    CH: "IMGIX_CH",
    /**
     * Tool to specify how many colors to return when extracting a color palette. Use when you need to control palette size and format.
     */
    COLORS: "IMGIX_COLORS",
    /**
     * Tool to adjust image contrast. Use when you need to modify an image's contrast level (−100 to 100).
     */
    CON: "IMGIX_CON",
    /**
     * Tool to control cropping alignment and behavior using Imgix's 'crop' parameter.
     */
    CROP: "IMGIX_CROP",
    /**
     * Tool to set or strip output color space/profile on an Imgix image. Use when optimizing compatibility and file size (e.g., cs=strip for smaller metadata).
     */
    CS: "IMGIX_CS",
    /**
     * Tool to force asset download. Use when you need to download an Imgix asset with a specific filename.
     */
    DL: "IMGIX_DL",
    /**
     * Tool to embed DPI (dots-per-inch) metadata for print output on an Imgix-rendered image. Use when preparing images for print to set accurate DPI. Supports JPEG and PNG only.
     */
    DPI: "IMGIX_DPI",
    /**
     * Tool to set device pixel ratio for an Imgix image. Use when rendering at specific display densities to ensure correct sharpness. Example: 'dpr=2&w=500&h=300' doubles resolution relative to dimensions.
     */
    DPR: "IMGIX_DPR",
    /**
     * Tool to append an expiration parameter to an Imgix URL so it returns 404 after a given time. Use when you want the image URL to stop serving beyond a specific UNIX timestamp.
     */
    EXPIRES: "IMGIX_EXPIRES",
    /**
     * Tool to control how an image fits target dimensions after resizing. Use when specifying width, height, and fit behavior.
     */
    FIT: "IMGIX_FIT",
    /**
     * Tool to choose output file format for the rendered asset. Use after specifying the asset path when you need to convert its format.
     */
    FM: "IMGIX_FM",
    /**
     * Tool to force a target aspect ratio on an Imgix image. Use when a specific W:H frame is needed after choosing fit=crop or fit=fill. Example: 'ar=16:9&fit=crop&w=800' yields a 16:9, 800px-wide URL.
     */
    FORCE_ASPECT_RATIO: "IMGIX_FORCE_ASPECT_RATIO",
    /**
     * Tool to set output image height in pixels or as a ratio of the source height. Use after constructing an Imgix URL to adjust only height.
     */
    H: "IMGIX_H",
    /**
     * Tool to adjust highlight tonal mapping (−100 to 0). Use when preserving detail in bright areas of an image.
     */
    HIGH: "IMGIX_HIGH",
    /**
     * Tool to list all Sources for an account. Use when you need to retrieve and paginate through sources with optional sorting and filtering.
     */
    LIST_SOURCES: "IMGIX_LIST_SOURCES",
    /**
     * Tool to set the base URL prepended to the watermark image path. Use when you need to host watermark assets on a custom domain or CDN.
     */
    MARK_BASE: "IMGIX_MARK_BASE",
    /**
     * Tool to set how a watermark fits its target dimensions. Use when applying a watermark and you need control over fitting behavior (e.g., selecting 'scale'). For 'crop', ensure 'mark-w' and 'mark-h' are also provided.
     */
    MARK_FIT: "IMGIX_MARK_FIT",
    /**
     * Tool to set watermark height on an Imgix URL in pixels or as a ratio of the watermark source. Use when adjusting overlay height while preserving aspect ratio.
     */
    MARK_H: "IMGIX_MARK_H",
    /**
     * Tool to set pixel padding between a watermark and the image edge or between tiled watermarks. Use after configuring watermark URL and alignment to adjust spacing precisely.
     */
    MARK_PAD: "IMGIX_MARK_PAD",
    /**
     * Tool to set watermark width. Use when you need to enforce a watermark's width in pixels or as a proportion. Use after specifying watermark source.
     */
    MARK_W: "IMGIX_MARK_W",
    /**
     * Tool to apply a mask to an image. Use when needing rounded corners, ellipse shapes, or image-based masks.
     */
    MASK: "IMGIX_MASK",
    /**
     * Tool to limit output image height. Use when fit=crop is applied to prevent excessively tall images.
     */
    MAX_H: "IMGIX_MAX_H",
    /**
     * Tool to set the maximum output width on an Imgix URL. Use when you need to cap width (works only with fit=crop). Call after specifying fit=crop on the URL.
     */
    MAX_W: "IMGIX_MAX_W",
    /**
     * Tool to extract a color palette from an image in CSS or JSON form. Use when you need to analyze an image's dominant colors after any transformations.
     */
    PALETTE: "IMGIX_PALETTE",
    /**
     * Tool to set class-name prefix for CSS palette output. Use when customizing CSS selectors for color-palette styling.
     */
    PREFIX: "IMGIX_PREFIX",
    /**
     * Tool to set output quality for lossy formats. Use when adjusting image compression quality for lossy image delivery.
     */
    Q: "IMGIX_Q",
    /**
     * Tool to select a source-image rectangle region in Imgix before other resizing. Use when you need to crop a specific region (x,y,w,h) of the source image.
     */
    RECT: "IMGIX_RECT",
    /**
     * Tool to rotate an image on Imgix. Use when you need to apply a counter-clockwise rotation (0–359°) with optional mode control.
     */
    ROT: "IMGIX_ROT",
    /**
     * Tool to control rotation behavior when `rot` is applied. Use after applying a `rot` parameter to choose between pivot (show entire image) or straighten (zoom and crop) behavior.
     */
    ROT_TYPE: "IMGIX_ROT_TYPE",
    /**
     * Tool to render a single-line UTF-8 text overlay on an image. Use when you need simple text captions.
     */
    TXT: "IMGIX_TXT",
    /**
     * Tool to align a text overlay on an Imgix image. Use when you need to position text by specifying vertical (top/middle/bottom) and horizontal (left/center/right) alignment.
     */
    TXT_ALIGN: "IMGIX_TXT_ALIGN",
    /**
     * Tool to set text overlay color on an Imgix image. Use when customizing text overlays with CSS color keywords or hex codes.
     */
    TXT_COLOR: "IMGIX_TXT_COLOR",
    /**
     * Tool to choose font family/style for overlay text. Use when customizing text appearance after specifying content. Supports CSS font categories and optional bold/italic flags.
     */
    TXT_FONT: "IMGIX_TXT_FONT",
    /**
     * Tool to set outline width around overlay text. Use when styling text overlays on images.
     */
    TXT_LINE: "IMGIX_TXT_LINE",
    /**
     * Tool to set outline color for text. Use after enabling txt-line on an Imgix URL.
     */
    TXT_LINE_COLOR: "IMGIX_TXT_LINE_COLOR",
    /**
     * Tool to set text shadow strength for overlay text. Use when you need to apply a drop shadow to text.
     */
    TXT_SHAD: "IMGIX_TXT_SHAD",
    /**
     * Tool to set text font size in pixels. Use when overlaying text and needing precise control over font size. Specify after defining the text content; default is 12px.
     */
    TXT_SIZE: "IMGIX_TXT_SIZE",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "IMGIX".
 */
export type IMGIX_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "IMGIX".
 */
export type IMGIX_TRIGGER_EVENTS = {}
