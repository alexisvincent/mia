// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of HASHNODE's HASHNODE_ACCEPT_INVITE_TO_PUBLICATION tool input.
 */
type HASHNODE_ACCEPT_INVITE_TO_PUBLICATION_INPUT = {
  /**
   * Invite Token
   * @description Invitation token to accept.
   */
  inviteToken?: string;
};

/**
 * Type of HASHNODE's HASHNODE_ACCEPT_INVITE_TO_PUBLICATION tool output.
 */
type HASHNODE_ACCEPT_INVITE_TO_PUBLICATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Success
       * @description Indicates if the invitation was accepted successfully.
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
 * Type of HASHNODE's HASHNODE_ADD_REPLY tool input.
 */
type HASHNODE_ADD_REPLY_INPUT = {
  /**
   * Comment Id
   * @description The globally unique ID of the comment to which this reply will be added
   */
  commentId?: string;
  /**
   * Content Markdown
   * @description The Markdown-formatted text of the reply
   */
  contentMarkdown?: string;
};

/**
 * Type of HASHNODE's HASHNODE_ADD_REPLY tool output.
 */
type HASHNODE_ADD_REPLY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Reply
       * @description The newly created reply object
       */
      reply: {
          /**
           * Author
           * @description Author information of the reply
           */
          author: {
              /**
               * Id
               * @description Unique ID of the author of the reply
               */
              id: string;
              /**
               * Name
               * @description Display name of the author of the reply
               */
              name: string;
              /**
               * Username
               * @description Username of the author of the reply
               */
              username: string;
          };
          /**
           * Content
           * @description Content of the reply
           */
          content: {
              /**
               * Html
               * @description Reply content in HTML.
               */
              html: string;
              /**
               * Markdown
               * @description Reply content in Markdown.
               */
              markdown: string;
          };
          /**
           * Date Added
           * @description ISO timestamp when the reply was added
           */
          dateAdded: string;
          /**
           * Id
           * @description Unique ID of the created reply
           */
          id: string;
          /**
           * My Total Reactions
           * @description Number of reactions by the current user
           */
          myTotalReactions: number;
          /**
           * Stamp
           * @description Unique stamp identifier for the reply
           */
          stamp: string;
          /**
           * Total Reactions
           * @description Total number of reactions on the reply
           */
          totalReactions: number;
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
 * Type of HASHNODE's HASHNODE_CHECK_CUSTOM_DOMAIN_AVAILABILITY tool input.
 */
type HASHNODE_CHECK_CUSTOM_DOMAIN_AVAILABILITY_INPUT = {
  /**
   * Domain
   * @description Custom domain to check, e.g., 'blog.example.com'
   */
  domain?: string;
  /**
   * With Www Redirect
   * @description Whether to check availability considering a www redirect (maps to withWWWRedirect).
   */
  with_www_redirect?: boolean;
};

/**
 * Type of HASHNODE's HASHNODE_CHECK_CUSTOM_DOMAIN_AVAILABILITY tool output.
 */
type HASHNODE_CHECK_CUSTOM_DOMAIN_AVAILABILITY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Domain Available
       * @description True if the custom domain is available, false otherwise.
       */
      domainAvailable: boolean;
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
 * Type of HASHNODE's HASHNODE_FETCH_INVITATIONS tool input.
 */
type HASHNODE_FETCH_INVITATIONS_INPUT = {
  /**
   * Host
   * @description Publication host/subdomain (e.g., 'blog.example.com'). Cannot be used together with `id`.
   * @default null
   */
  host: string | null;
  /**
   * Id
   * @description Publication ID (ObjectId). Cannot be used together with `host`.
   * @default null
   */
  id: string | null;
  /**
   * Page
   * @description Page number to return. Must be >= 1.
   * @default 1
   */
  page: number;
  /**
   * Page Size
   * @description Number of pending invites per page. Must be >= 1.
   */
  pageSize?: number;
};

/**
 * Type of HASHNODE's HASHNODE_FETCH_INVITATIONS tool output.
 */
type HASHNODE_FETCH_INVITATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Invitations
       * @description List of pending invitations.
       */
      invitations: {
          /**
           * Created At
           * @description Timestamp when the invite was created.
           * @default null
           */
          createdAt: string | null;
          /**
           * Email
           * @description Email of the invited user.
           * @default null
           */
          email: string | null;
          /**
           * Id
           * @description Pending invite ID.
           */
          id: string;
          /**
           * Invite Token
           * @description Invite token for accepting the invitation.
           * @default null
           */
          inviteToken: string | null;
          /**
           * Role
           * @description Role assigned in the publication.
           */
          role: string;
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
 * Type of HASHNODE's HASHNODE_FETCH_POPULAR_TAGS tool input.
 */
type HASHNODE_FETCH_POPULAR_TAGS_INPUT = {
  /**
   * After
   * @description Cursor from a previous page (edges.cursor) to fetch the next set of tags.
   * @default null
   */
  after: string | null;
  /**
   * First
   * @description Number of popular tags to return (must be >=1).
   */
  first?: number;
};

/**
 * Type of HASHNODE's HASHNODE_FETCH_POPULAR_TAGS tool output.
 */
type HASHNODE_FETCH_POPULAR_TAGS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Popular Tags
       * @description Connection object for popular tags.
       */
      popularTags: {
          /**
           * Edges
           * @description List of edges containing tag nodes and cursors.
           */
          edges: {
              /**
               * Cursor
               * @description Cursor to fetch subsequent pages.
               */
              cursor: string;
              /**
               * Node
               * @description Tag node information.
               */
              node: {
                  /**
                   * Id
                   * @description Unique identifier of the tag.
                   */
                  id: string;
                  /**
                   * Logo
                   * @description URL of the tag logo.
                   */
                  logo: string;
                  /**
                   * Name
                   * @description Name of the tag.
                   */
                  name: string;
                  /**
                   * Posts Count
                   * @description Number of posts using this tag.
                   */
                  postsCount: number;
                  /**
                   * Slug
                   * @description Slug of the tag.
                   */
                  slug: string;
              };
          }[];
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
 * Type of HASHNODE's HASHNODE_FETCH_POSTS tool input.
 */
type HASHNODE_FETCH_POSTS_INPUT = {
  /**
   * After
   * @description Cursor from a previous page (endCursor) to fetch the next set of posts.
   * @default null
   */
  after: string | null;
  /**
   * First
   * @description Maximum number of posts to return in this page (must be >=1).
   * @default 10
   */
  first: number;
  /**
   * Host
   * @description Hostname of the publication (e.g., 'blog.developerdao.com').
   */
  host?: string;
};

/**
 * Type of HASHNODE's HASHNODE_FETCH_POSTS tool output.
 */
type HASHNODE_FETCH_POSTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Publication
       * @description The fetched publication and its posts.
       */
      publication: {
          /**
           * Id
           * @description Identifier of the publication.
           */
          id: string;
          /**
           * Is Team
           * @description Whether the publication is a team publication.
           */
          isTeam: boolean;
          /**
           * Posts
           * @description Connection object for posts.
           */
          posts: {
              /**
               * Edges
               * @description List of edges containing post nodes.
               */
              edges: {
                  /**
                   * Node
                   * @description Post node.
                   */
                  node: {
                      /**
                       * Brief
                       * @description Short summary of the post.
                       */
                      brief: string;
                      /**
                       * Id
                       * @description Post identifier.
                       */
                      id: string;
                      /**
                       * Title
                       * @description Title of the post.
                       */
                      title: string;
                      /**
                       * Url
                       * @description Canonical URL of the post.
                       */
                      url: string;
                  };
              }[];
              /**
               * Page Info
               * @description Pagination information.
               */
              pageInfo: {
                  /**
                   * End Cursor
                   * @description Cursor pointing to the last item in the returned page.
                   * @default null
                   */
                  endCursor: string | null;
                  /**
                   * Has Next Page
                   * @description Indicates if there is another page of results.
                   */
                  hasNextPage: boolean;
              };
          };
          /**
           * Title
           * @description Title of the publication.
           */
          title: string;
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
 * Type of HASHNODE's HASHNODE_FETCH_SERIES_POSTS tool input.
 */
type HASHNODE_FETCH_SERIES_POSTS_INPUT = {
  /**
   * After
   * @description Cursor for pagination to fetch the next page of posts
   * @default null
   */
  after: string | null;
  /**
   * First
   * @description Number of posts to fetch, must be at least 1
   */
  first?: number;
  /**
   * Publication Host
   * @description Hostname of the publication (e.g., 'blog.developerdao.com'). Either publication_host or publication_id must be provided.
   * @default null
   */
  publication_host: string | null;
  /**
   * Publication Id
   * @description ID of the publication. Either publication_id or publication_host must be provided.
   * @default null
   */
  publication_id: string | null;
  /**
   * Series Slug
   * @description Slug of the series within the publication
   */
  series_slug?: string;
};

/**
 * Type of HASHNODE's HASHNODE_FETCH_SERIES_POSTS tool output.
 */
type HASHNODE_FETCH_SERIES_POSTS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Edges
       * @description List of edges each containing a post node
       */
      edges: {
          /** Node */
          node: {
              /**
               * Brief
               * @description Brief summary of the post
               * @default null
               */
              brief: string | null;
              /**
               * CoverImage
               * @description Cover image object containing image URL
               * @default null
               */
              coverImage: {
                  /**
                   * Url
                   * @description URL of the cover image
                   * @default null
                   */
                  url: string | null;
              } | null;
              /**
               * Published At
               * @description Date when the post was published
               * @default null
               */
              publishedAt: string | null;
              /**
               * Slug
               * @description Slug of the post for building URLs
               */
              slug: string;
              /**
               * Title
               * @description Title of the post
               */
              title: string;
          };
      }[];
      /**
       * Page Info
       * @description Pagination information for the series posts
       */
      pageInfo: {
          /**
           * End Cursor
           * @description Cursor to be used for fetching the next page of posts
           * @default null
           */
          endCursor: string | null;
          /**
           * Has Next Page
           * @description Indicates if more pages of posts are available
           */
          hasNextPage: boolean;
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
 * Type of HASHNODE's HASHNODE_FETCH_SINGLE_ARTICLE tool input.
 */
type HASHNODE_FETCH_SINGLE_ARTICLE_INPUT = {
  /**
   * Host
   * @description Hostname of the publication (e.g., 'blog.developerdao.com').
   */
  host?: string;
  /**
   * Slug
   * @description Slug of the post within the publication.
   */
  slug?: string;
};

/**
 * Type of HASHNODE's HASHNODE_FETCH_SINGLE_ARTICLE tool output.
 */
type HASHNODE_FETCH_SINGLE_ARTICLE_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Publication
       * @description The fetched publication and its single post.
       */
      publication: {
          /**
           * Id
           * @description Identifier of the publication.
           */
          id: string;
          /**
           * Is Team
           * @description Indicates if the publication is a team publication.
           */
          isTeam: boolean;
          /**
           * Post
           * @description The fetched post.
           */
          post: {
              /**
               * Content
               * @description Content of the post in markdown and HTML.
               */
              content: {
                  /**
                   * Html
                   * @description HTML content of the post.
                   */
                  html: string;
                  /**
                   * Markdown
                   * @description Markdown content of the post.
                   */
                  markdown: string;
              };
              /**
               * Id
               * @description Identifier of the post.
               */
              id: string;
              /**
               * Title
               * @description Title of the post.
               */
              title: string;
          };
          /**
           * Title
           * @description Title of the publication.
           */
          title: string;
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
 * Type of HASHNODE's HASHNODE_FETCH_USER_DETAILS tool input.
 */
type HASHNODE_FETCH_USER_DETAILS_INPUT = {
  /**
   * Username
   * @description Username of the user to fetch details for.
   */
  username?: string;
};

/**
 * Type of HASHNODE's HASHNODE_FETCH_USER_DETAILS tool output.
 */
type HASHNODE_FETCH_USER_DETAILS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * UserDetails
       * @description Detailed information of the requested user, or null if not found.
       * @default null
       */
      user: {
          /**
           * Badges
           * @description List of badges earned by the user.
           */
          badges?: {
              /**
               * Description
               * @description Badge description.
               * @default null
               */
              description: string | null;
              /**
               * Id
               * @description Badge identifier.
               */
              id: string;
              /**
               * Image
               * @description URL of the badge image.
               * @default null
               */
              image: string | null;
              /**
               * Name
               * @description Badge name.
               */
              name: string;
          }[];
          /**
           * Date Joined
           * @description ISO timestamp when the user joined Hashnode.
           * @default null
           */
          dateJoined: string | null;
          /**
           * Followers Count
           * @description Number of followers the user has.
           * @default null
           */
          followersCount: number | null;
          /**
           * Id
           * @description Unique identifier of the user.
           */
          id: string;
          /**
           * Location
           * @description User's location if provided.
           * @default null
           */
          location: string | null;
          /**
           * Name
           * @description Full name of the user.
           */
          name: string;
          /**
           * Profile Picture
           * @description URL of the user's profile picture.
           * @default null
           */
          profilePicture: string | null;
          /**
           * SocialMediaLinks
           * @description Social media links associated with the user.
           * @default null
           */
          socialMediaLinks: {
              /**
               * Github
               * @description User's GitHub profile URL.
               * @default null
               */
              github: string | null;
              /**
               * Linkedin
               * @description User's LinkedIn profile URL.
               * @default null
               */
              linkedin: string | null;
              /**
               * Twitter
               * @description User's Twitter profile URL.
               * @default null
               */
              twitter: string | null;
              /**
               * Website
               * @description User's personal website URL.
               * @default null
               */
              website: string | null;
          } | null;
          /**
           * Tagline
           * @description User's tagline or bio.
           * @default null
           */
          tagline: string | null;
          /**
           * Username
           * @description Hashnode username of the user.
           */
          username: string;
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
 * Type of HASHNODE's HASHNODE_GET_PUBLICATION tool input.
 */
type HASHNODE_GET_PUBLICATION_INPUT = {
  /**
   * Hostname
   * @description Publication hostname (e.g., 'blog.developerdao.com'). Do not include protocol.
   */
  hostname?: string;
};

/**
 * Type of HASHNODE's HASHNODE_GET_PUBLICATION tool output.
 */
type HASHNODE_GET_PUBLICATION_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * About
       * @description About section of the publication
       */
      about: {
          /**
           * Markdown
           * @description About section content in Markdown format
           */
          markdown: string;
      };
      /**
       * Id
       * @description Unique identifier of the publication
       */
      id: string;
      /**
       * Title
       * @description Title of the publication
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
 * Type of HASHNODE's HASHNODE_HASHNODE_ADD_COMMENT tool input.
 */
type HASHNODE_HASHNODE_ADD_COMMENT_INPUT = {
  /**
   * Content Html
   * @description HTML-formatted content of the comment. Provide this or contentMarkdown.
   * @default null
   */
  contentHTML: string | null;
  /**
   * Content Markdown
   * @description Markdown-formatted content of the comment. Provide this or contentHTML.
   * @default null
   */
  contentMarkdown: string | null;
  /**
   * Post Id
   * @description Unique identifier of the post to which the comment will be added.
   */
  postId?: string;
  /**
   * Reply To Comment Id
   * @description ID of the comment to reply to, if creating a threaded reply.
   * @default null
   */
  replyToCommentId: string | null;
};

/**
 * Type of HASHNODE's HASHNODE_HASHNODE_ADD_COMMENT tool output.
 */
type HASHNODE_HASHNODE_ADD_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Comment
       * @description The created comment object.
       */
      comment: {
          /**
           * Author
           * @description Author details for the comment.
           */
          author: {
              /**
               * Name
               * @description Name of the comment author.
               */
              name: string;
              /**
               * Profile Picture
               * @description URL of the author's profile picture.
               * @default null
               */
              profilePicture: string | null;
              /**
               * Username
               * @description Username of the comment author.
               */
              username: string;
          };
          /**
           * Content
           * @description Nested content fields of the comment.
           */
          content: {
              /**
               * Html
               * @description HTML representation of the comment content.
               * @default null
               */
              html: string | null;
              /**
               * Markdown
               * @description Markdown representation of the comment content.
               * @default null
               */
              markdown: string | null;
              /**
               * Text
               * @description Plain text representation of the comment content.
               * @default null
               */
              text: string | null;
          };
          /**
           * Date Added
           * @description ISO timestamp when the comment was added.
           */
          dateAdded: string;
          /**
           * Id
           * @description Unique identifier of the comment.
           */
          id: string;
          /**
           * My Total Reactions
           * @description Reactions by the authenticated user.
           */
          myTotalReactions: number;
          /**
           * Stamp
           * @description Internal timestamp identifier for the comment.
           */
          stamp: string;
          /**
           * Total Reactions
           * @description Total reactions on the comment.
           */
          totalReactions: number;
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
 * Type of HASHNODE's HASHNODE_HASHNODE_FETCH_STORIES_FEED tool input.
 */
type HASHNODE_HASHNODE_FETCH_STORIES_FEED_INPUT = {
  /**
   * After
   * @description Cursor to the last item from a previous page.
   * @default null
   */
  after: string | null;
  /**
   * FeedFilter
   * @description Filters to apply when fetching the home feed.
   * @default null
   */
  filter: {
      /**
       * Max Read Time
       * @description Only include posts with at most this reading time (minutes).
       * @default null
       */
      maxReadTime: number | null;
      /**
       * Min Read Time
       * @description Only include posts with at least this reading time (minutes).
       * @default null
       */
      minReadTime: number | null;
      /**
       * Tags
       * @description Only include posts tagged with these tag IDs.
       * @default null
       */
      tags: string[] | null;
      /**
       * Type
       * @description The type of feed to be returned.
       * @default null
       * @enum {string|null}
       */
      type: "FOLLOWING" | "PERSONALIZED" | "RECENT" | "RELEVANT" | "FEATURED" | "BOOKMARKS" | "READING_HISTORY" | null;
  } | null;
  /**
   * First
   * @description Number of items to return per page.
   */
  first?: number;
};

/**
 * Type of HASHNODE's HASHNODE_HASHNODE_FETCH_STORIES_FEED tool output.
 */
type HASHNODE_HASHNODE_FETCH_STORIES_FEED_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Feed
       * @description Connection object for the retrieved feed posts.
       */
      feed: {
          /**
           * Edges
           * @description List of edges for paginated posts.
           */
          edges: {
              /**
               * Cursor
               * @description Cursor for this edge.
               */
              cursor: string;
              /**
               * Node
               * @description The post node.
               */
              node: {
                  /**
                   * Author
                   * @description Author of the post.
                   */
                  author: {
                      /**
                       * Id
                       * @description ID of the author.
                       */
                      id: string;
                      /**
                       * Name
                       * @description Full name of the author.
                       */
                      name: string;
                      /**
                       * Username
                       * @description Username of the author.
                       */
                      username: string;
                  };
                  /**
                   * Brief
                   * @description Short summary of the post.
                   */
                  brief: string;
                  /**
                   * Id
                   * @description Post identifier.
                   */
                  id: string;
                  /**
                   * Published At
                   * @description ISO date when the post was published.
                   * @default null
                   */
                  publishedAt: string | null;
                  /**
                   * Read Time In Minutes
                   * @description Estimated reading time in minutes.
                   * @default null
                   */
                  readTimeInMinutes: number | null;
                  /**
                   * Slug
                   * @description Slug of the post.
                   */
                  slug: string;
                  /**
                   * Tags
                   * @description List of tags for the post.
                   */
                  tags: {
                      /**
                       * Name
                       * @description Tag name.
                       */
                      name: string;
                      /**
                       * Slug
                       * @description Tag slug.
                       */
                      slug: string;
                  }[];
                  /**
                   * Title
                   * @description Title of the post.
                   */
                  title: string;
              };
          }[];
          /**
           * Page Info
           * @description Pagination metadata.
           */
          pageInfo: {
              /**
               * End Cursor
               * @description Cursor to fetch the next page.
               * @default null
               */
              endCursor: string | null;
              /**
               * Has Next Page
               * @description Whether more pages are available.
               */
              hasNextPage: boolean;
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
 * Type of HASHNODE's HASHNODE_HASHNODE_ME tool input.
 */
type HASHNODE_HASHNODE_ME_INPUT = object;

/**
 * Type of HASHNODE's HASHNODE_HASHNODE_ME tool output.
 */
type HASHNODE_HASHNODE_ME_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Id
       * @description Unique identifier of the authenticated user.
       */
      id: string;
      /**
       * Name
       * @description Full name of the authenticated user.
       */
      name: string;
      /**
       * Username
       * @description Hashnode username of the authenticated user.
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
 * Type of HASHNODE's HASHNODE_LIKE_REPLY tool input.
 */
type HASHNODE_LIKE_REPLY_INPUT = {
  /**
   * Comment Id
   * @description ID of the parent comment containing the reply to like.
   */
  commentId?: string;
  /**
   * Reply Id
   * @description ID of the reply to like.
   */
  replyId?: string;
};

/**
 * Type of HASHNODE's HASHNODE_LIKE_REPLY tool output.
 */
type HASHNODE_LIKE_REPLY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Reply
       * @description The liked reply object.
       */
      reply: {
          /**
           * Author
           * @description Author of the reply.
           */
          author: {
              /**
               * Id
               * @description Unique identifier of the reply author.
               */
              id: string;
              /**
               * Name
               * @description Full name of the reply author.
               */
              name: string;
              /**
               * Username
               * @description Username of the reply author.
               */
              username: string;
          };
          /**
           * Content
           * @description Content of the reply.
           */
          content: {
              /**
               * Html
               * @description Reply content in HTML.
               */
              html: string;
              /**
               * Markdown
               * @description Reply content in Markdown.
               */
              markdown: string;
          };
          /**
           * Date Added
           * @description ISO timestamp when the reply was added.
           */
          dateAdded: string;
          /**
           * Id
           * @description Unique identifier of the reply.
           */
          id: string;
          /**
           * My Total Reactions
           * @description Number of reactions by the current user.
           */
          myTotalReactions: number;
          /**
           * Stamp
           * @description Numeric timestamp of when the reply was added.
           */
          stamp: number;
          /**
           * Total Reactions
           * @description Total number of reactions on the reply.
           */
          totalReactions: number;
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
 * Type of HASHNODE's HASHNODE_LIST_PUBLICATIONS tool input.
 */
type HASHNODE_LIST_PUBLICATIONS_INPUT = {
  /**
   * After
   * @description Cursor from a previous page (endCursor) to fetch the next set of publications.
   * @default null
   */
  after: string | null;
  /**
   * First
   * @description Maximum number of publications to return in this page (must be >=1).
   * @default 10
   */
  first: number;
  /**
   * Roles
   * @description Filter publications by user roles. Accepts any combination of: OWNER | EDITOR | CONTRIBUTOR
   * @default null
   */
  roles: string[] | null;
  /**
   * Sort By
   * @description Sort order for the user's publications. One of: DATE_CREATED_DESC | DATE_CREATED_ASC | DATE_UPDATED_DESC | DATE_UPDATED_ASC
   * @default null
   */
  sortBy: string | null;
};

/**
 * Type of HASHNODE's HASHNODE_LIST_PUBLICATIONS tool output.
 */
type HASHNODE_LIST_PUBLICATIONS_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Publications
       * @description List of publications associated with the authenticated user.
       */
      publications: {
          /**
           * Domain Info
           * @description Domain details of the publication.
           */
          domainInfo: {
              /**
               * DomainStatus
               * @description Primary custom domain status info.
               * @default null
               */
              domain: {
                  /**
                   * Host
                   * @description Host of the publication domain.
                   */
                  host: string;
                  /**
                   * Ready
                   * @description Whether the domain is ready.
                   */
                  ready: boolean;
                  /**
                   * Status
                   * @description Current status of the domain (VALID | VERIFYING | INVALID).
                   */
                  status: string;
                  /**
                   * Verified At
                   * @description Timestamp when the domain was verified, if applicable.
                   * @default null
                   */
                  verifiedAt: string | null;
              } | null;
              /**
               * Hashnode Subdomain
               * @description Hashnode-managed subdomain (e.g., 'myblog.hashnode.dev').
               * @default null
               */
              hashnodeSubdomain: string | null;
              /**
               * DomainStatus
               * @description WWW-prefixed domain status info.
               * @default null
               */
              wwwPrefixedDomain: {
                  /**
                   * Host
                   * @description Host of the publication domain.
                   */
                  host: string;
                  /**
                   * Ready
                   * @description Whether the domain is ready.
                   */
                  ready: boolean;
                  /**
                   * Status
                   * @description Current status of the domain (VALID | VERIFYING | INVALID).
                   */
                  status: string;
                  /**
                   * Verified At
                   * @description Timestamp when the domain was verified, if applicable.
                   * @default null
                   */
                  verifiedAt: string | null;
              } | null;
          };
          /**
           * Id
           * @description Identifier of the publication.
           */
          id: string;
          /**
           * Title
           * @description Title of the publication.
           */
          title: string;
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
 * Type of HASHNODE's HASHNODE_REMOVE_REPLY tool input.
 */
type HASHNODE_REMOVE_REPLY_INPUT = {
  /**
   * Comment Id
   * @description ID of the comment containing the reply to remove
   */
  commentId?: string;
  /**
   * Reply Id
   * @description ID of the reply to be removed
   */
  replyId?: string;
};

/**
 * Type of HASHNODE's HASHNODE_REMOVE_REPLY tool output.
 */
type HASHNODE_REMOVE_REPLY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Reply
       * @description The removed reply object
       */
      reply: {
          /**
           * Author
           * @description Author of the reply
           */
          author: {
              /**
               * Id
               * @description Author's unique ID
               */
              id: string;
              /**
               * Name
               * @description Author's display name
               */
              name: string;
              /**
               * Username
               * @description Author's username
               */
              username: string;
          };
          /**
           * Content
           * @description Reply content
           */
          content: {
              /**
               * Html
               * @description Content in HTML format
               */
              html: string;
              /**
               * Markdown
               * @description Content in Markdown format
               */
              markdown: string;
              /**
               * Text
               * @description Content in plain text
               */
              text: string;
          };
          /**
           * Date Added
           * @description Timestamp when the reply was added
           */
          dateAdded: string;
          /**
           * Id
           * @description Unique identifier of the reply
           */
          id: string;
          /**
           * My Total Reactions
           * @description Number of reactions by the viewer
           */
          myTotalReactions: number;
          /**
           * Stamp
           * @description Decorative stamp of the reply
           */
          stamp: string;
          /**
           * Total Reactions
           * @description Total number of reactions
           */
          totalReactions: number;
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
 * Type of HASHNODE's HASHNODE_UPDATE_COMMENT tool input.
 */
type HASHNODE_UPDATE_COMMENT_INPUT = {
  /**
   * Content Html
   * @description Updated comment content in HTML format. Required if contentMarkdown is omitted.
   * @default null
   */
  contentHTML: string | null;
  /**
   * Content Markdown
   * @description Updated comment content in Markdown format. Required if contentHTML is omitted.
   * @default null
   */
  contentMarkdown: string | null;
  /**
   * Id
   * @description ID of the comment to update (GraphQL ID format)
   */
  id?: string;
};

/**
 * Type of HASHNODE's HASHNODE_UPDATE_COMMENT tool output.
 */
type HASHNODE_UPDATE_COMMENT_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Author
       * @description Author information of the comment
       */
      author: {
          /**
           * Name
           * @description Name of the comment author
           */
          name: string;
          /**
           * Profile Picture
           * @description URL of the author's profile picture.
           * @default null
           */
          profilePicture: string | null;
          /**
           * Username
           * @description Username of the comment author
           */
          username: string;
      };
      /**
       * Content
       * @description Nested content fields of the updated comment
       */
      content: {
          /**
           * Html
           * @description HTML representation of the comment content.
           * @default null
           */
          html: string | null;
          /**
           * Markdown
           * @description Markdown representation of the comment content.
           * @default null
           */
          markdown: string | null;
          /**
           * Text
           * @description Plain text representation of the comment content.
           * @default null
           */
          text: string | null;
      };
      /**
       * Date Added
       * @description Timestamp when the comment was added
       */
      dateAdded: string;
      /**
       * Id
       * @description ID of the updated comment
       */
      id: string;
      /**
       * My Total Reactions
       * @description Number of reactions by the current user
       */
      myTotalReactions: number;
      /**
       * Stamp
       * @description Unique stamp of the comment
       */
      stamp: string;
      /**
       * Total Reactions
       * @description Total number of reactions on the comment
       */
      totalReactions: number;
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
 * Type of HASHNODE's HASHNODE_UPDATE_REPLY tool input.
 */
type HASHNODE_UPDATE_REPLY_INPUT = {
  /**
   * Comment Id
   * @description ID of the comment under which the reply exists.
   */
  commentId?: string;
  /**
   * Content Markdown
   * @description New content for the reply in Markdown format.
   */
  contentMarkdown?: string;
  /**
   * Reply Id
   * @description ID of the reply to update.
   */
  replyId?: string;
};

/**
 * Type of HASHNODE's HASHNODE_UPDATE_REPLY tool output.
 */
type HASHNODE_UPDATE_REPLY_OUTPUT = {
  /**
   * Data
   * @description Data from the action execution
   */
  data?: {
      /**
       * Reply
       * @description Updated reply object.
       */
      reply: {
          /**
           * Author
           * @description Author of the reply.
           */
          author: {
              /**
               * Id
               * @description Author ID.
               */
              id: string;
              /**
               * Name
               * @description Author's full name.
               */
              name: string;
              /**
               * Username
               * @description Author's username.
               */
              username: string;
          };
          /**
           * Content
           * @description Content of the reply.
           */
          content: {
              /**
               * Html
               * @description Reply content in HTML.
               */
              html: string;
              /**
               * Markdown
               * @description Reply content in Markdown.
               */
              markdown: string;
          };
          /**
           * Date Added
           * @description ISO timestamp when the reply was added.
           */
          dateAdded: string;
          /**
           * Id
           * @description Reply ID.
           */
          id: string;
          /**
           * My Total Reactions
           * @description Number of reactions by the current user.
           */
          myTotalReactions: number;
          /**
           * Stamp
           * @description Unique stamp of the reply.
           */
          stamp: string;
          /**
           * Total Reactions
           * @description Total number of reactions on the reply.
           */
          totalReactions: number;
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
 * Type map of all available tool input types for toolkit "HASHNODE".
 */
export type HASHNODE_TOOL_INPUTS = {
  ACCEPT_INVITE_TO_PUBLICATION: HASHNODE_ACCEPT_INVITE_TO_PUBLICATION_INPUT
  ADD_REPLY: HASHNODE_ADD_REPLY_INPUT
  CHECK_CUSTOM_DOMAIN_AVAILABILITY: HASHNODE_CHECK_CUSTOM_DOMAIN_AVAILABILITY_INPUT
  FETCH_INVITATIONS: HASHNODE_FETCH_INVITATIONS_INPUT
  FETCH_POPULAR_TAGS: HASHNODE_FETCH_POPULAR_TAGS_INPUT
  FETCH_POSTS: HASHNODE_FETCH_POSTS_INPUT
  FETCH_SERIES_POSTS: HASHNODE_FETCH_SERIES_POSTS_INPUT
  FETCH_SINGLE_ARTICLE: HASHNODE_FETCH_SINGLE_ARTICLE_INPUT
  FETCH_USER_DETAILS: HASHNODE_FETCH_USER_DETAILS_INPUT
  GET_PUBLICATION: HASHNODE_GET_PUBLICATION_INPUT
  HASHNODE_ADD_COMMENT: HASHNODE_HASHNODE_ADD_COMMENT_INPUT
  HASHNODE_FETCH_STORIES_FEED: HASHNODE_HASHNODE_FETCH_STORIES_FEED_INPUT
  HASHNODE_ME: HASHNODE_HASHNODE_ME_INPUT
  LIKE_REPLY: HASHNODE_LIKE_REPLY_INPUT
  LIST_PUBLICATIONS: HASHNODE_LIST_PUBLICATIONS_INPUT
  REMOVE_REPLY: HASHNODE_REMOVE_REPLY_INPUT
  UPDATE_COMMENT: HASHNODE_UPDATE_COMMENT_INPUT
  UPDATE_REPLY: HASHNODE_UPDATE_REPLY_INPUT
}

/**
 * Type map of all available tool input types for toolkit "HASHNODE".
 */
export type HASHNODE_TOOL_OUTPUTS = {
  ACCEPT_INVITE_TO_PUBLICATION: HASHNODE_ACCEPT_INVITE_TO_PUBLICATION_OUTPUT
  ADD_REPLY: HASHNODE_ADD_REPLY_OUTPUT
  CHECK_CUSTOM_DOMAIN_AVAILABILITY: HASHNODE_CHECK_CUSTOM_DOMAIN_AVAILABILITY_OUTPUT
  FETCH_INVITATIONS: HASHNODE_FETCH_INVITATIONS_OUTPUT
  FETCH_POPULAR_TAGS: HASHNODE_FETCH_POPULAR_TAGS_OUTPUT
  FETCH_POSTS: HASHNODE_FETCH_POSTS_OUTPUT
  FETCH_SERIES_POSTS: HASHNODE_FETCH_SERIES_POSTS_OUTPUT
  FETCH_SINGLE_ARTICLE: HASHNODE_FETCH_SINGLE_ARTICLE_OUTPUT
  FETCH_USER_DETAILS: HASHNODE_FETCH_USER_DETAILS_OUTPUT
  GET_PUBLICATION: HASHNODE_GET_PUBLICATION_OUTPUT
  HASHNODE_ADD_COMMENT: HASHNODE_HASHNODE_ADD_COMMENT_OUTPUT
  HASHNODE_FETCH_STORIES_FEED: HASHNODE_HASHNODE_FETCH_STORIES_FEED_OUTPUT
  HASHNODE_ME: HASHNODE_HASHNODE_ME_OUTPUT
  LIKE_REPLY: HASHNODE_LIKE_REPLY_OUTPUT
  LIST_PUBLICATIONS: HASHNODE_LIST_PUBLICATIONS_OUTPUT
  REMOVE_REPLY: HASHNODE_REMOVE_REPLY_OUTPUT
  UPDATE_COMMENT: HASHNODE_UPDATE_COMMENT_OUTPUT
  UPDATE_REPLY: HASHNODE_UPDATE_REPLY_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's HASHNODE toolkit.
 */
export const HASHNODE = {
  slug: "hashnode",
  tools: {
    /**
     * Tool to accept a publication invitation. Use when you have a valid invite token and want to join the publication.
     */
    ACCEPT_INVITE_TO_PUBLICATION: "HASHNODE_ACCEPT_INVITE_TO_PUBLICATION",
    /**
     * Tool to add a reply to an existing comment. Use after confirming comment ID and reply content.
     */
    ADD_REPLY: "HASHNODE_ADD_REPLY",
    /**
     * Tool to check if a custom domain is available for your Hashnode publication. Use when verifying domain mapping before setup.
     */
    CHECK_CUSTOM_DOMAIN_AVAILABILITY: "HASHNODE_CHECK_CUSTOM_DOMAIN_AVAILABILITY",
    /**
     * Tool to fetch pending publication invitations. Use when you need to list current pending invites for a team-managed publication before taking further actions.
     */
    FETCH_INVITATIONS: "HASHNODE_FETCH_INVITATIONS",
    /**
     * Tool to fetch a paginated list of popular tags. Use when you need to browse popular tags page by page.
     */
    FETCH_POPULAR_TAGS: "HASHNODE_FETCH_POPULAR_TAGS",
    /**
     * Tool to fetch a paginated list of posts from a publication. Use when you need to list posts page by page for a given publication host.
     */
    FETCH_POSTS: "HASHNODE_FETCH_POSTS",
    /**
     * Tool to fetch posts from a series within a publication. Use when retrieving and paginating through series posts in a specific publication.
     */
    FETCH_SERIES_POSTS: "HASHNODE_FETCH_SERIES_POSTS",
    /**
     * Tool to fetch a single article by slug from a publication. Use when you need the detailed content of a specific post.
     */
    FETCH_SINGLE_ARTICLE: "HASHNODE_FETCH_SINGLE_ARTICLE",
    /**
     * Tool to fetch detailed user profile information by username. Use when you need public or authorized profile data.
     */
    FETCH_USER_DETAILS: "HASHNODE_FETCH_USER_DETAILS",
    /**
     * Tool to fetch details (id, title, about) of a publication by hostname. Use when you need metadata for a given publication host. Example: 'blog.developerdao.com'.
     */
    GET_PUBLICATION: "HASHNODE_GET_PUBLICATION",
    /**
     * Tool to add a comment to a Hashnode post. Use after obtaining story ID and content, optionally provide a parent comment ID for replies.
     */
    HASHNODE_ADD_COMMENT: "HASHNODE_HASHNODE_ADD_COMMENT",
    /**
     * Tool to fetch a paginated home feed of stories. Use when you need to page through the feed with optional filters.
     */
    HASHNODE_FETCH_STORIES_FEED: "HASHNODE_HASHNODE_FETCH_STORIES_FEED",
    /**
     * Tool to retrieve details of the currently authenticated user. Use after confirming authentication.
     */
    HASHNODE_ME: "HASHNODE_HASHNODE_ME",
    /**
     * Tool to like a reply on Hashnode. Use when you have a reply ID and want to add a like to that reply.
     */
    LIKE_REPLY: "HASHNODE_LIKE_REPLY",
    /**
     * Tool to list all publications of the authenticated user. Use when you need your publication hostnames for downstream actions.
     */
    LIST_PUBLICATIONS: "HASHNODE_LIST_PUBLICATIONS",
    /**
     * Tool to remove a reply from a comment. Use after confirming comment and reply IDs. Returns the removed reply details.
     */
    REMOVE_REPLY: "HASHNODE_REMOVE_REPLY",
    /**
     * Tool to update an existing comment on a Hashnode post. Use after preparing updated content details.
     */
    UPDATE_COMMENT: "HASHNODE_UPDATE_COMMENT",
    /**
     * Tool to update a reply. Use when editing an existing reply to a comment after confirming the comment and reply IDs.
     */
    UPDATE_REPLY: "HASHNODE_UPDATE_REPLY",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "HASHNODE".
 */
export type HASHNODE_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "HASHNODE".
 */
export type HASHNODE_TRIGGER_EVENTS = {}
