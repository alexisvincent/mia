// --------------- //
//    Tool types   //
// --------------- //



/**
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_DETAILS_ABOUT_AN_AUTHOR tool input.
 */
type SEMANTICSCHOLAR_DETAILS_ABOUT_AN_AUTHOR_INPUT = {
  /**
   * Author Id
   * @description Author Id
   */
  author_id?: string;
  /**
   * Fields
   * @description A comma-separated list of the fields to be returned. See the contents of Response Schema below for a list of all available fields that can be returned. The <code>authorId</code> field is always returned. If the fields parameter is omitted, only the <code>authorId</code> and <code>name</code> will be returned. <p>Use a period (“.”) for subfields of <code>papers</code>.<br><br> Examples: <ul>     <li><code>fields=name,affiliations,papers</code></li>     <li><code>fields=url,papers.year,papers.authors</code></li> </ul>
   */
  fields?: string;
};

/**
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_DETAILS_ABOUT_AN_AUTHOR tool output.
 */
type SEMANTICSCHOLAR_DETAILS_ABOUT_AN_AUTHOR_OUTPUT = {
  /** Data */
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
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_DETAILS_ABOUT_AN_AUTHOR_S_PAPERS tool input.
 */
type SEMANTICSCHOLAR_DETAILS_ABOUT_AN_AUTHOR_S_PAPERS_INPUT = {
  /**
   * Author Id
   * @description Author Id
   */
  author_id?: string;
  /**
   * Fields
   * @description A comma-separated list of the fields to be returned. See the contents of the <code>data</code> array in Response Schema below for a list of all available fields that can be returned. The <code>paperId</code> field is always returned. If the fields parameter is omitted, only the <code>paperId</code> and <code>title</code> will be returned. To fetch more references or citations per paper, reduce the number of papers in the batch with <code>limit=</code>. <p>Use a period (“.”) for subfields of <code>citations</code> and <code>references</code>.<br><br> Examples: <ul>     <li><code>fields=title,fieldsOfStudy,references</code></li>     <li><code>fields=abstract,citations.url,citations.venue</code></li> </ul>
   */
  fields?: string;
  /**
   * Limit
   * @description The maximum number of results to return.<br> Must be <= 1000
   * @default 100
   */
  limit: number;
  /**
   * Offset
   * @description Used for pagination. When returning a list of results, start with the element at this position in the list.
   * @default 0
   */
  offset: number;
};

/**
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_DETAILS_ABOUT_AN_AUTHOR_S_PAPERS tool output.
 */
type SEMANTICSCHOLAR_DETAILS_ABOUT_AN_AUTHOR_S_PAPERS_OUTPUT = {
  /** Data */
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
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER tool input.
 */
type SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of the fields to be returned. See the contents of Response Schema below for a list of all available fields that can be returned. The <code>paperId</code> field is always returned. If the fields parameter is omitted, only the <code>paperId</code> and <code>title</code> will be returned. <p>Use a period (“.”) for fields that have version numbers or subfields, such as the <code>embedding</code>, <code>authors</code>, <code>citations</code>, and <code>references</code> fields: <ul>     <li>When requesting <code>authors</code>, the <code>authorId</code> and <code>name</code> subfields are returned by default. To request other subfields, use the format <code>author.url,author.paperCount</code>, etc. See the Response Schema below for available subfields.</li>     <li>When requesting <code>citations</code> and <code>references</code>, the <code>paperId</code> and <code>title</code> subfields are returned by default. To request other subfields, use the format <code>citations.title,citations.abstract</code>, etc. See the Response Schema below for available subfields.</li>     <li>When requesting <code>embedding</code>, the default <a href="https://github.com/allenai/specter">Spector embedding version</a> is v1. Specify <code>embedding.specter_v2</code> to select v2 embeddings.</li> </ul> Examples: <ul>     <li><code>fields=title,url</code></li>     <li><code>fields=title,embedding.specter_v2</code></li>     <li><code>fields=title,authors,citations.title,citations.abstract</code></li> </ul>
   */
  fields?: string;
  /**
   * Paper Id
   * @description The following types of IDs are supported: <ul>     <li><code>&lt;sha&gt;</code> - a Semantic Scholar ID, e.g. <code>649def34f8be52c8b66281af98ae884c09aef38b</code></li>     <li><code>CorpusId:&lt;id&gt;</code> - a Semantic Scholar numerical ID, e.g. <code>CorpusId:215416146</code></li>     <li><code>DOI:&lt;doi&gt;</code> - a <a href="http://doi.org">Digital Object Identifier</a>,         e.g. <code>DOI:10.18653/v1/N18-3011</code></li>     <li><code>ARXIV:&lt;id&gt;</code> - <a href="https://arxiv.org/">arXiv.rg</a>, e.g. <code>ARXIV:2106.15928</code></li>     <li><code>MAG:&lt;id&gt;</code> - Microsoft Academic Graph, e.g. <code>MAG:112218234</code></li>     <li><code>ACL:&lt;id&gt;</code> - Association for Computational Linguistics, e.g. <code>ACL:W12-3903</code></li>     <li><code>PMID:&lt;id&gt;</code> - PubMed/Medline, e.g. <code>PMID:19872477</code></li>     <li><code>PMCID:&lt;id&gt;</code> - PubMed Central, e.g. <code>PMCID:2323736</code></li>     <li><code>URL:&lt;url&gt;</code> - URL from one of the sites listed below, e.g. <code>URL:https://arxiv.org/abs/2106.15928v1</code></li> </ul> URLs are recognized from the following sites: <ul>     <li><a href="https://www.semanticscholar.org/">semanticscholar.org</a></li>     <li><a href="https://arxiv.org/">arxiv.org</a></li>     <li><a href="https://www.aclweb.org">aclweb.org</a></li>     <li><a href="https://www.acm.org/">acm.org</a></li>     <li><a href="https://www.biorxiv.org/">biorxiv.org</a></li> </ul>
   */
  paper_id?: string;
};

/**
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER tool output.
 */
type SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_OUTPUT = {
  /** Data */
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
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_AUTHORS tool input.
 */
type SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_AUTHORS_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of the fields to be returned. See the contents of the <code>data</code> array in Response Schema below for a list of all available fields that can be returned. The <code>authorId</code> field is always returned. If the fields parameter is omitted, only the <code>authorId</code> and <code>name</code> will be returned. <p>Use a period (“.”) for subfields of <code>papers</code>.<br><br> Examples: <ul>     <li><code>fields=name,affiliations,papers</code></li>     <li><code>fields=url,papers.year,papers.authors</code></li> </ul>
   */
  fields?: string;
  /**
   * Limit
   * @description The maximum number of results to return.<br> Must be <= 1000
   * @default 100
   */
  limit: number;
  /**
   * Offset
   * @description Used for pagination. When returning a list of results, start with the element at this position in the list.
   * @default 0
   */
  offset: number;
  /**
   * Paper Id
   * @description The following types of IDs are supported: <ul>     <li><code>&lt;sha&gt;</code> - a Semantic Scholar ID, e.g. <code>649def34f8be52c8b66281af98ae884c09aef38b</code></li>     <li><code>CorpusId:&lt;id&gt;</code> - a Semantic Scholar numerical ID, e.g. <code>CorpusId:215416146</code></li>     <li><code>DOI:&lt;doi&gt;</code> - a <a href="http://doi.org">Digital Object Identifier</a>,         e.g. <code>DOI:10.18653/v1/N18-3011</code></li>     <li><code>ARXIV:&lt;id&gt;</code> - <a href="https://arxiv.org/">arXiv.rg</a>, e.g. <code>ARXIV:2106.15928</code></li>     <li><code>MAG:&lt;id&gt;</code> - Microsoft Academic Graph, e.g. <code>MAG:112218234</code></li>     <li><code>ACL:&lt;id&gt;</code> - Association for Computational Linguistics, e.g. <code>ACL:W12-3903</code></li>     <li><code>PMID:&lt;id&gt;</code> - PubMed/Medline, e.g. <code>PMID:19872477</code></li>     <li><code>PMCID:&lt;id&gt;</code> - PubMed Central, e.g. <code>PMCID:2323736</code></li>     <li><code>URL:&lt;url&gt;</code> - URL from one of the sites listed below, e.g. <code>URL:https://arxiv.org/abs/2106.15928v1</code></li> </ul> URLs are recognized from the following sites: <ul>     <li><a href="https://www.semanticscholar.org/">semanticscholar.org</a></li>     <li><a href="https://arxiv.org/">arxiv.org</a></li>     <li><a href="https://www.aclweb.org">aclweb.org</a></li>     <li><a href="https://www.acm.org/">acm.org</a></li>     <li><a href="https://www.biorxiv.org/">biorxiv.org</a></li> </ul>
   */
  paper_id?: string;
};

/**
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_AUTHORS tool output.
 */
type SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_AUTHORS_OUTPUT = {
  /** Data */
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
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_CITATIONS tool input.
 */
type SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_CITATIONS_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of the fields to be returned. See the contents of the <code>data</code> array in Response Schema below for a list of all available fields that can be returned. If the fields parameter is omitted, only the <code>paperId</code> and <code>title</code> will be returned. <p>Request fields nested within <code>citedPaper</code> the same way as fields like <code>contexts</code>.<br><br> Examples: <ul>     <li><code>fields=contexts,isInfluential</code></li>     <li><code>fields=contexts,title,authors</code></li> </ul>
   */
  fields?: string;
  /**
   * Limit
   * @description The maximum number of results to return.<br> Must be <= 1000
   * @default 100
   */
  limit: number;
  /**
   * Offset
   * @description Used for pagination. When returning a list of results, start with the element at this position in the list.
   * @default 0
   */
  offset: number;
  /**
   * Paper Id
   * @description The following types of IDs are supported: <ul>     <li><code>&lt;sha&gt;</code> - a Semantic Scholar ID, e.g. <code>649def34f8be52c8b66281af98ae884c09aef38b</code></li>     <li><code>CorpusId:&lt;id&gt;</code> - a Semantic Scholar numerical ID, e.g. <code>CorpusId:215416146</code></li>     <li><code>DOI:&lt;doi&gt;</code> - a <a href="http://doi.org">Digital Object Identifier</a>,         e.g. <code>DOI:10.18653/v1/N18-3011</code></li>     <li><code>ARXIV:&lt;id&gt;</code> - <a href="https://arxiv.org/">arXiv.rg</a>, e.g. <code>ARXIV:2106.15928</code></li>     <li><code>MAG:&lt;id&gt;</code> - Microsoft Academic Graph, e.g. <code>MAG:112218234</code></li>     <li><code>ACL:&lt;id&gt;</code> - Association for Computational Linguistics, e.g. <code>ACL:W12-3903</code></li>     <li><code>PMID:&lt;id&gt;</code> - PubMed/Medline, e.g. <code>PMID:19872477</code></li>     <li><code>PMCID:&lt;id&gt;</code> - PubMed Central, e.g. <code>PMCID:2323736</code></li>     <li><code>URL:&lt;url&gt;</code> - URL from one of the sites listed below, e.g. <code>URL:https://arxiv.org/abs/2106.15928v1</code></li> </ul> URLs are recognized from the following sites: <ul>     <li><a href="https://www.semanticscholar.org/">semanticscholar.org</a></li>     <li><a href="https://arxiv.org/">arxiv.org</a></li>     <li><a href="https://www.aclweb.org">aclweb.org</a></li>     <li><a href="https://www.acm.org/">acm.org</a></li>     <li><a href="https://www.biorxiv.org/">biorxiv.org</a></li> </ul>
   */
  paper_id?: string;
};

/**
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_CITATIONS tool output.
 */
type SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_CITATIONS_OUTPUT = {
  /** Data */
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
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_REFERENCES tool input.
 */
type SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_REFERENCES_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of the fields to be returned. See the contents of the <code>data</code> array in Response Schema below for a list of all available fields that can be returned. If the fields parameter is omitted, only the <code>paperId</code> and <code>title</code> will be returned. <p>Request fields nested within <code>citedPaper</code> the same way as fields like <code>contexts</code>.<br><br> Examples: <ul>     <li><code>fields=contexts,isInfluential</code></li>     <li><code>fields=contexts,title,authors</code></li> </ul>
   */
  fields?: string;
  /**
   * Limit
   * @description The maximum number of results to return.<br> Must be <= 1000
   * @default 100
   */
  limit: number;
  /**
   * Offset
   * @description Used for pagination. When returning a list of results, start with the element at this position in the list.
   * @default 0
   */
  offset: number;
  /**
   * Paper Id
   * @description The following types of IDs are supported: <ul>     <li><code>&lt;sha&gt;</code> - a Semantic Scholar ID, e.g. <code>649def34f8be52c8b66281af98ae884c09aef38b</code></li>     <li><code>CorpusId:&lt;id&gt;</code> - a Semantic Scholar numerical ID, e.g. <code>CorpusId:215416146</code></li>     <li><code>DOI:&lt;doi&gt;</code> - a <a href="http://doi.org">Digital Object Identifier</a>,         e.g. <code>DOI:10.18653/v1/N18-3011</code></li>     <li><code>ARXIV:&lt;id&gt;</code> - <a href="https://arxiv.org/">arXiv.rg</a>, e.g. <code>ARXIV:2106.15928</code></li>     <li><code>MAG:&lt;id&gt;</code> - Microsoft Academic Graph, e.g. <code>MAG:112218234</code></li>     <li><code>ACL:&lt;id&gt;</code> - Association for Computational Linguistics, e.g. <code>ACL:W12-3903</code></li>     <li><code>PMID:&lt;id&gt;</code> - PubMed/Medline, e.g. <code>PMID:19872477</code></li>     <li><code>PMCID:&lt;id&gt;</code> - PubMed Central, e.g. <code>PMCID:2323736</code></li>     <li><code>URL:&lt;url&gt;</code> - URL from one of the sites listed below, e.g. <code>URL:https://arxiv.org/abs/2106.15928v1</code></li> </ul> URLs are recognized from the following sites: <ul>     <li><a href="https://www.semanticscholar.org/">semanticscholar.org</a></li>     <li><a href="https://arxiv.org/">arxiv.org</a></li>     <li><a href="https://www.aclweb.org">aclweb.org</a></li>     <li><a href="https://www.acm.org/">acm.org</a></li>     <li><a href="https://www.biorxiv.org/">biorxiv.org</a></li> </ul>
   */
  paper_id?: string;
};

/**
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_REFERENCES tool output.
 */
type SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_REFERENCES_OUTPUT = {
  /** Data */
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
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_GET_DETAILS_FOR_MULTIPLE_AUTHORS_AT_ONCE tool input.
 */
type SEMANTICSCHOLAR_GET_DETAILS_FOR_MULTIPLE_AUTHORS_AT_ONCE_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of the fields to be returned. See the contents of Response Schema below for a list of all available fields that can be returned. The <code>authorId</code> field is always returned. If the fields parameter is omitted, only the <code>authorId</code> and <code>name</code> will be returned. <p>Use a period (“.”) for subfields of <code>papers</code>.<br><br> Examples: <ul>     <li><code>fields=name,affiliations,papers</code></li>     <li><code>fields=url,papers.year,papers.authors</code></li> </ul>
   */
  fields?: string;
  /**
   * Ids
   * @description Ids
   */
  ids?: string[];
};

/**
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_GET_DETAILS_FOR_MULTIPLE_AUTHORS_AT_ONCE tool output.
 */
type SEMANTICSCHOLAR_GET_DETAILS_FOR_MULTIPLE_AUTHORS_AT_ONCE_OUTPUT = {
  /** Data */
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
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_GET_DETAILS_FOR_MULTIPLE_PAPERS_AT_ONCE tool input.
 */
type SEMANTICSCHOLAR_GET_DETAILS_FOR_MULTIPLE_PAPERS_AT_ONCE_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of the fields to be returned. See the contents of Response Schema below for a list of all available fields that can be returned. The <code>paperId</code> field is always returned. If the fields parameter is omitted, only the <code>paperId</code> and <code>title</code> will be returned. <p>Use a period (“.”) for fields that have version numbers or subfields, such as the <code>embedding</code>, <code>authors</code>, <code>citations</code>, and <code>references</code> fields: <ul>     <li>When requesting <code>authors</code>, the <code>authorId</code> and <code>name</code> subfields are returned by default. To request other subfields, use the format <code>author.url,author.paperCount</code>, etc. See the Response Schema below for available subfields.</li>     <li>When requesting <code>citations</code> and <code>references</code>, the <code>paperId</code> and <code>title</code> subfields are returned by default. To request other subfields, use the format <code>citations.title,citations.abstract</code>, etc. See the Response Schema below for available subfields.</li>     <li>When requesting <code>embedding</code>, the default <a href="https://github.com/allenai/specter">Spector embedding version</a> is v1. Specify <code>embedding.specter_v2</code> to select v2 embeddings.</li> </ul> Examples: <ul>     <li><code>fields=title,url</code></li>     <li><code>fields=title,embedding.specter_v2</code></li>     <li><code>fields=title,authors,citations.title,citations.abstract</code></li> </ul>
   */
  fields?: string;
  /**
   * Ids
   * @description Ids
   */
  ids?: string[];
};

/**
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_GET_DETAILS_FOR_MULTIPLE_PAPERS_AT_ONCE tool output.
 */
type SEMANTICSCHOLAR_GET_DETAILS_FOR_MULTIPLE_PAPERS_AT_ONCE_OUTPUT = {
  /** Data */
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
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_PAPER_BULK_SEARCH tool input.
 */
type SEMANTICSCHOLAR_PAPER_BULK_SEARCH_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of the fields to be returned. See the contents of the <code>data</code> array in Response Schema below for a list of all available fields that can be returned.<br><br> The <code>paperId</code> field is always returned. If the fields parameter is omitted, only the <code>paperId</code> and <code>title</code> will be returned.<br><br> Examples: <code>https://api.semanticscholar.org/graph/v1/paper/search/bulk?query=covid&fields=venue,s2FieldsOfStudy</code>
   */
  fields?: string;
  /**
   * Fields Of Study
   * @description Restricts results to papers in the given fields of study, formatted as a comma-separated list: <ul> <li>Computer Science</li> <li>Medicine</li> <li>Chemistry</li> <li>Biology</li> <li>Materials Science</li> <li>Physics</li> <li>Geology</li> <li>Psychology</li> <li>Art</li> <li>History</li> <li>Geography</li> <li>Sociology</li> <li>Business</li> <li>Political Science</li> <li>Economics</li> <li>Philosophy</li> <li>Mathematics</li> <li>Engineering</li> <li>Environmental Science</li> <li>Agricultural and Food Sciences</li> <li>Education</li> <li>Law</li> <li>Linguistics</li> </ul> Example: <code>Physics,Mathematics</code> will return papers with either Physics or Mathematics in their list of fields-of-study.
   */
  fieldsOfStudy?: string;
  /**
   * Min Citation Count
   * @description Restricts results to only include papers with the minimum number of citations. <br> <br> Example: <code>minCitationCount=200</code>
   */
  minCitationCount?: string;
  /**
   * Open Access Pdf
   * @description Restricts results to only include papers with a public PDF. This parameter does not accept any values.
   */
  openAccessPdf?: string;
  /**
   * Publication Date Or Year
   * @description Restricts results to the given range of publication dates or years (inclusive). Accepts the format <code>&lt;startDate&gt;:&lt;endDate&gt;</code> with each date in <code>YYYY-MM-DD</code> format.  <br> <br> Each term is optional, allowing for specific dates, fixed ranges, or open-ended ranges. In addition, prefixes are suported as a shorthand, e.g. <code>2020-06</code> matches all dates in June 2020. <br> <br> Specific dates are not known for all papers, so some records returned with this filter will have a <code>null</code> value for </code>publicationDate</code>. <code>year</code>, however, will always be present. For records where a specific publication date is not known, they will be treated as if published on January 1st of their publication year. <br> <br> Examples: <ul>     <li><code>2019-03-05</code> on March 3rd, 2019</li>     <li><code>2019-03</code> during March 2019</li>     <li><code>2019</code> during 2019</li>     <li><code>2016-03-05:2020-06-06</code> as early as March 5th, 2016 or as late as June 6th, 2020</li>     <li><code>1981-08-25:</code> on or after August 25th, 1981</li>     <li><code>:2015-01</code> before or on January 31st, 2015</li>     <li><code>2015:2020</code> between January 1st, 2015 and December 31st, 2020</li> </ul>
   */
  publicationDateOrYear?: string;
  /**
   * Publication Types
   * @description Restricts results to any of the following paper publication types: <ul>     <li>Review</li>     <li>JournalArticle</li>     <li>CaseReport</li>     <li>ClinicalTrial</li>     <li>Conference</li>     <li>Dataset</li>     <li>Editorial</li>     <li>LettersAndComments</li>     <li>MetaAnalysis</li>     <li>News</li>     <li>Study</li>     <li>Book</li>     <li>BookSection</li> </ul> Use a comma-separated list to include papers with any of the listed publication types. <br><br> Example: <code>Review,JournalArticle</code> will return papers with publication types Review and/or JournalArticle.
   */
  publicationTypes?: string;
  /**
   * Query
   * @description Text query that will be matched against the paper"s title and abstract. All terms are stemmed in English. By default all terms in the query must be present in the paper. The match query supports the following syntax: <ul> <li><code>+</code> for AND operation</li> <li><code>|</code> for OR operation</li> <li><code>-</code> negates a term </li> <li><code>"</code> collects terms into a phrase</li> <li><code>*</code> can be used to match a prefix</li>     <li><code>(</code> and <code>)</code> for precedence</li> <li><code>~N</code> after a word matches within the edit distance of N (Defaults to 2 if N is omitted)</li> <li><code>~N</code> after a phrase matches with the phrase terms separated up to N terms apart (Defaults to 2 if N is omitted)</li> </ul> Examples: <ul>     <li><code>fish ladder</code> matches papers that contain "fish" and "ladder"</li>     <li><code>fish -ladder</code> matches papers that contain "fish" but not "ladder"</li>     <li><code>fish | ladder</code> matches papers that contain "fish" or "ladder"</li>     <li><code>"fish ladder"</code> matches papers that contain the phrase "fish ladder"</li>     <li><code>(fish ladder) | outflow</code> matches papers that contain "fish" and "ladder" OR "outflow"</li>     <li><code>fish~</code> matches papers that contain "fish", "fist", "fihs", etc. </li>     <li><code>"fish ladder"~3</code> mathces papers that contain the phrase "fish ladder" or "fish is on a ladder"</li> </ul>
   */
  query?: string;
  /**
   * Sort
   * @description Provides the option to sort the results by the following fields: <ul>     <li><code>paperId</code></li>     <li><code>publicationDate</code></li>     <li><code>citationCount</code></li> </ul> Uses the format <code>field:order</code>. Ties are broken by <code>paperId</code>. The default field is <code>paperId</code> and the default order is asc. Records for which the sort value are not defined will appear at the end of sort, regardless of asc/desc order. <br> <br> Examples: <ul>     <li><code>publicationDate:asc</code> - return oldest papers first.</li>     <li><code>citationCount:desc</code> - return most highly-cited papers first.</li>     <li><code>paperId</code> - return papers in ID order, low-to-high.</li> </ul> <br> Please be aware that if the relevant data changes while paging through results, records can be returned in an unexpected way. The default <code>paperId</code> sort avoids this edge case.
   */
  sort?: string;
  /**
   * Token
   * @description Used for pagination. This string token is provided when the original query returns, and is used to fetch the next batch of papers. Each call will return a new token.
   */
  token?: string;
  /**
   * Venue
   * @description Restricts results to papers published in the given venues, formatted as a comma-separated list. <br><br> Input could also be an ISO4 abbreviation. Examples include: <ul>     <li>Nature</li>     <li>New England Journal of Medicine</li>     <li>Radiology</li>     <li>N. Engl. J. Med.</li> </ul> Example: <code>Nature,Radiology</code> will return papers from venues Nature and/or Radiology.
   */
  venue?: string;
  /**
   * Year
   * @description Restricts results to the given publication year or range of years (inclusive). <br> <br> Examples: <ul>     <li><code>2019</code> in 2019</li>     <li><code>2016-2020</code> as early as 2016 or as late as 2020</li>     <li><code>2010-</code> during or after 2010</li>     <li><code>-2015</code> before or during 2015</li> </ul>
   */
  year?: string;
};

/**
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_PAPER_BULK_SEARCH tool output.
 */
type SEMANTICSCHOLAR_PAPER_BULK_SEARCH_OUTPUT = {
  /** Data */
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
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_PAPER_RELEVANCE_SEARCH tool input.
 */
type SEMANTICSCHOLAR_PAPER_RELEVANCE_SEARCH_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of the fields to be returned. See the contents of the <code>data</code> array in Response Schema below for a list of all available fields that can be returned. The <code>paperId</code> field is always returned. If the fields parameter is omitted, only the <code>paperId</code> and <code>title</code> will be returned. <p>Use a period (“.”) for fields that have version numbers or subfields, such as the <code>embedding</code>, <code>authors</code>, <code>citations</code>, and <code>references</code> fields: <ul>     <li>When requesting <code>authors</code>, the <code>authorId</code> and <code>name</code> subfields are returned by default. To request other subfields, use the format <code>author.url,author.paperCount</code>, etc. See the Response Schema below for available subfields.</li>     <li>When requesting <code>citations</code> and <code>references</code>, the <code>paperId</code> and <code>title</code> subfields are returned by default. To request other subfields, use the format <code>citations.title,citations.abstract</code>, etc. See the Response Schema below for available subfields.</li>     <li>When requesting <code>embedding</code>, the default <a href="https://github.com/allenai/specter">Spector embedding version</a> is v1. Specify <code>embedding.specter_v2</code> to select v2 embeddings.</li> </ul> Examples: <ul>     <li><code>fields=title,url</code></li>     <li><code>fields=title,embedding.specter_v2</code></li>     <li><code>fields=title,authors,citations.title,citations.abstract</code></li> </ul>
   */
  fields?: string;
  /**
   * Fields Of Study
   * @description Restricts results to papers in the given fields of study, formatted as a comma-separated list: <ul> <li>Computer Science</li> <li>Medicine</li> <li>Chemistry</li> <li>Biology</li> <li>Materials Science</li> <li>Physics</li> <li>Geology</li> <li>Psychology</li> <li>Art</li> <li>History</li> <li>Geography</li> <li>Sociology</li> <li>Business</li> <li>Political Science</li> <li>Economics</li> <li>Philosophy</li> <li>Mathematics</li> <li>Engineering</li> <li>Environmental Science</li> <li>Agricultural and Food Sciences</li> <li>Education</li> <li>Law</li> <li>Linguistics</li> </ul> Example: <code>Physics,Mathematics</code> will return papers with either Physics or Mathematics in their list of fields-of-study.
   */
  fieldsOfStudy?: string;
  /**
   * Limit
   * @description The maximum number of results to return.<br> Must be <= 100
   * @default 100
   */
  limit: number;
  /**
   * Min Citation Count
   * @description Restricts results to only include papers with the minimum number of citations. <br> <br> Example: <code>minCitationCount=200</code>
   */
  minCitationCount?: string;
  /**
   * Offset
   * @description Used for pagination. When returning a list of results, start with the element at this position in the list.
   * @default 0
   */
  offset: number;
  /**
   * Open Access Pdf
   * @description Restricts results to only include papers with a public PDF. This parameter does not accept any values.
   */
  openAccessPdf?: string;
  /**
   * Publication Date Or Year
   * @description Restricts results to the given range of publication dates or years (inclusive). Accepts the format <code>&lt;startDate&gt;:&lt;endDate&gt;</code> with each date in <code>YYYY-MM-DD</code> format.  <br> <br> Each term is optional, allowing for specific dates, fixed ranges, or open-ended ranges. In addition, prefixes are suported as a shorthand, e.g. <code>2020-06</code> matches all dates in June 2020. <br> <br> Specific dates are not known for all papers, so some records returned with this filter will have a <code>null</code> value for </code>publicationDate</code>. <code>year</code>, however, will always be present. For records where a specific publication date is not known, they will be treated as if published on January 1st of their publication year. <br> <br> Examples: <ul>     <li><code>2019-03-05</code> on March 3rd, 2019</li>     <li><code>2019-03</code> during March 2019</li>     <li><code>2019</code> during 2019</li>     <li><code>2016-03-05:2020-06-06</code> as early as March 5th, 2016 or as late as June 6th, 2020</li>     <li><code>1981-08-25:</code> on or after August 25th, 1981</li>     <li><code>:2015-01</code> before or on January 31st, 2015</li>     <li><code>2015:2020</code> between January 1st, 2015 and December 31st, 2020</li> </ul>
   */
  publicationDateOrYear?: string;
  /**
   * Publication Types
   * @description Restricts results to any of the following paper publication types: <ul>     <li>Review</li>     <li>JournalArticle</li>     <li>CaseReport</li>     <li>ClinicalTrial</li>     <li>Conference</li>     <li>Dataset</li>     <li>Editorial</li>     <li>LettersAndComments</li>     <li>MetaAnalysis</li>     <li>News</li>     <li>Study</li>     <li>Book</li>     <li>BookSection</li> </ul> Use a comma-separated list to include papers with any of the listed publication types. <br><br> Example: <code>Review,JournalArticle</code> will return papers with publication types Review and/or JournalArticle.
   */
  publicationTypes?: string;
  /**
   * Query
   * @description A plain-text search query string. * No special query syntax is supported. * Hyphenated query terms yield no matches (replace it with space to find matches) See our <a href="https://medium.com/ai2-blog/building-a-better-search-engine-for-semantic-scholar-ea23a0b661e7">blog post</a> for a description of our search relevance algorithm. Example: <code>graph/v1/paper/search?query=generative ai</code>
   */
  query?: string;
  /**
   * Venue
   * @description Restricts results to papers published in the given venues, formatted as a comma-separated list. <br><br> Input could also be an ISO4 abbreviation. Examples include: <ul>     <li>Nature</li>     <li>New England Journal of Medicine</li>     <li>Radiology</li>     <li>N. Engl. J. Med.</li> </ul> Example: <code>Nature,Radiology</code> will return papers from venues Nature and/or Radiology.
   */
  venue?: string;
  /**
   * Year
   * @description Restricts results to the given publication year or range of years (inclusive). <br> <br> Examples: <ul>     <li><code>2019</code> in 2019</li>     <li><code>2016-2020</code> as early as 2016 or as late as 2020</li>     <li><code>2010-</code> during or after 2010</li>     <li><code>-2015</code> before or during 2015</li> </ul>
   */
  year?: string;
};

/**
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_PAPER_RELEVANCE_SEARCH tool output.
 */
type SEMANTICSCHOLAR_PAPER_RELEVANCE_SEARCH_OUTPUT = {
  /** Data */
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
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_PAPER_TITLE_SEARCH tool input.
 */
type SEMANTICSCHOLAR_PAPER_TITLE_SEARCH_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of the fields to be returned. See the contents of the <code>data</code> array in Response Schema below for a list of all available fields that can be returned. The <code>paperId</code> field is always returned. If the fields parameter is omitted, only the <code>paperId</code> and <code>title</code> will be returned. <p>Use a period (“.”) for fields that have version numbers or subfields, such as the <code>embedding</code>, <code>authors</code>, <code>citations</code>, and <code>references</code> fields: <ul>     <li>When requesting <code>authors</code>, the <code>authorId</code> and <code>name</code> subfields are returned by default. To request other subfields, use the format <code>author.url,author.paperCount</code>, etc. See the Response Schema below for available subfields.</li>     <li>When requesting <code>citations</code> and <code>references</code>, the <code>paperId</code> and <code>title</code> subfields are returned by default. To request other subfields, use the format <code>citations.title,citations.abstract</code>, etc. See the Response Schema below for available subfields.</li>     <li>When requesting <code>embedding</code>, the default <a href="https://github.com/allenai/specter">Spector embedding version</a> is v1. Specify <code>embedding.specter_v2</code> to select v2 embeddings.</li> </ul> Examples: <ul>     <li><code>fields=title,url</code></li>     <li><code>fields=title,embedding.specter_v2</code></li>     <li><code>fields=title,authors,citations.title,citations.abstract</code></li> </ul>
   */
  fields?: string;
  /**
   * Fields Of Study
   * @description Restricts results to papers in the given fields of study, formatted as a comma-separated list: <ul> <li>Computer Science</li> <li>Medicine</li> <li>Chemistry</li> <li>Biology</li> <li>Materials Science</li> <li>Physics</li> <li>Geology</li> <li>Psychology</li> <li>Art</li> <li>History</li> <li>Geography</li> <li>Sociology</li> <li>Business</li> <li>Political Science</li> <li>Economics</li> <li>Philosophy</li> <li>Mathematics</li> <li>Engineering</li> <li>Environmental Science</li> <li>Agricultural and Food Sciences</li> <li>Education</li> <li>Law</li> <li>Linguistics</li> </ul> Example: <code>Physics,Mathematics</code> will return papers with either Physics or Mathematics in their list of fields-of-study.
   */
  fieldsOfStudy?: string;
  /**
   * Min Citation Count
   * @description Restricts results to only include papers with the minimum number of citations. <br> <br> Example: <code>minCitationCount=200</code>
   */
  minCitationCount?: string;
  /**
   * Open Access Pdf
   * @description Restricts results to only include papers with a public PDF. This parameter does not accept any values.
   */
  openAccessPdf?: string;
  /**
   * Publication Date Or Year
   * @description Restricts results to the given range of publication dates or years (inclusive). Accepts the format <code>&lt;startDate&gt;:&lt;endDate&gt;</code> with each date in <code>YYYY-MM-DD</code> format.  <br> <br> Each term is optional, allowing for specific dates, fixed ranges, or open-ended ranges. In addition, prefixes are suported as a shorthand, e.g. <code>2020-06</code> matches all dates in June 2020. <br> <br> Specific dates are not known for all papers, so some records returned with this filter will have a <code>null</code> value for </code>publicationDate</code>. <code>year</code>, however, will always be present. For records where a specific publication date is not known, they will be treated as if published on January 1st of their publication year. <br> <br> Examples: <ul>     <li><code>2019-03-05</code> on March 3rd, 2019</li>     <li><code>2019-03</code> during March 2019</li>     <li><code>2019</code> during 2019</li>     <li><code>2016-03-05:2020-06-06</code> as early as March 5th, 2016 or as late as June 6th, 2020</li>     <li><code>1981-08-25:</code> on or after August 25th, 1981</li>     <li><code>:2015-01</code> before or on January 31st, 2015</li>     <li><code>2015:2020</code> between January 1st, 2015 and December 31st, 2020</li> </ul>
   */
  publicationDateOrYear?: string;
  /**
   * Publication Types
   * @description Restricts results to any of the following paper publication types: <ul>     <li>Review</li>     <li>JournalArticle</li>     <li>CaseReport</li>     <li>ClinicalTrial</li>     <li>Conference</li>     <li>Dataset</li>     <li>Editorial</li>     <li>LettersAndComments</li>     <li>MetaAnalysis</li>     <li>News</li>     <li>Study</li>     <li>Book</li>     <li>BookSection</li> </ul> Use a comma-separated list to include papers with any of the listed publication types. <br><br> Example: <code>Review,JournalArticle</code> will return papers with publication types Review and/or JournalArticle.
   */
  publicationTypes?: string;
  /**
   * Query
   * @description A plain-text search query string. * No special query syntax is supported. See our <a href="https://medium.com/ai2-blog/building-a-better-search-engine-for-semantic-scholar-ea23a0b661e7">blog post</a> for a description of our search relevance algorithm.
   */
  query?: string;
  /**
   * Venue
   * @description Restricts results to papers published in the given venues, formatted as a comma-separated list. <br><br> Input could also be an ISO4 abbreviation. Examples include: <ul>     <li>Nature</li>     <li>New England Journal of Medicine</li>     <li>Radiology</li>     <li>N. Engl. J. Med.</li> </ul> Example: <code>Nature,Radiology</code> will return papers from venues Nature and/or Radiology.
   */
  venue?: string;
  /**
   * Year
   * @description Restricts results to the given publication year or range of years (inclusive). <br> <br> Examples: <ul>     <li><code>2019</code> in 2019</li>     <li><code>2016-2020</code> as early as 2016 or as late as 2020</li>     <li><code>2010-</code> during or after 2010</li>     <li><code>-2015</code> before or during 2015</li> </ul>
   */
  year?: string;
};

/**
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_PAPER_TITLE_SEARCH tool output.
 */
type SEMANTICSCHOLAR_PAPER_TITLE_SEARCH_OUTPUT = {
  /** Data */
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
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_SEARCH_FOR_AUTHORS_BY_NAME tool input.
 */
type SEMANTICSCHOLAR_SEARCH_FOR_AUTHORS_BY_NAME_INPUT = {
  /**
   * Fields
   * @description A comma-separated list of the fields to be returned. See the contents of the <code>data</code> array in Response Schema below for a list of all available fields that can be returned. The <code>authorId</code> field is always returned. If the fields parameter is omitted, only the <code>authorId</code> and <code>name</code> will be returned. <p>Use a period (“.”) for subfields of <code>papers</code>.<br><br> Examples: <ul>     <li><code>fields=name,affiliations,papers</code></li>     <li><code>fields=url,papers.year,papers.authors</code></li> </ul>
   */
  fields?: string;
  /**
   * Limit
   * @description The maximum number of results to return.<br> Must be <= 1000
   * @default 100
   */
  limit: number;
  /**
   * Offset
   * @description Used for pagination. When returning a list of results, start with the element at this position in the list.
   * @default 0
   */
  offset: number;
  /**
   * Query
   * @description A plain-text search query string. * No special query syntax is supported. * Hyphenated query terms yield no matches (replace it with space to find matches)
   */
  query?: string;
};

/**
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_SEARCH_FOR_AUTHORS_BY_NAME tool output.
 */
type SEMANTICSCHOLAR_SEARCH_FOR_AUTHORS_BY_NAME_OUTPUT = {
  /** Data */
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
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_SUGGEST_PAPER_QUERY_COMPLETIONS tool input.
 */
type SEMANTICSCHOLAR_SUGGEST_PAPER_QUERY_COMPLETIONS_INPUT = {
  /**
   * Query
   * @description Plain-text partial query string. Will be truncated to first 100 characters.
   */
  query?: string;
};

/**
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_SUGGEST_PAPER_QUERY_COMPLETIONS tool output.
 */
type SEMANTICSCHOLAR_SUGGEST_PAPER_QUERY_COMPLETIONS_OUTPUT = {
  /** Data */
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
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_TEXT_SNIPPET_SEARCH tool input.
 */
type SEMANTICSCHOLAR_TEXT_SNIPPET_SEARCH_INPUT = {
  /**
   * Limit
   * @description The maximum number of results to return.<br> Must be <= 1000
   * @default 10
   */
  limit: number;
  /**
   * Query
   * @description A plain-text search query string. * No special query syntax is supported.
   */
  query?: string;
};

/**
 * Type of SEMANTICSCHOLAR's SEMANTICSCHOLAR_TEXT_SNIPPET_SEARCH tool output.
 */
type SEMANTICSCHOLAR_TEXT_SNIPPET_SEARCH_OUTPUT = {
  /** Data */
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
 * Type map of all available tool input types for toolkit "SEMANTICSCHOLAR".
 */
export type SEMANTICSCHOLAR_TOOL_INPUTS = {
  DETAILS_ABOUT_AN_AUTHOR: SEMANTICSCHOLAR_DETAILS_ABOUT_AN_AUTHOR_INPUT
  DETAILS_ABOUT_AN_AUTHOR_S_PAPERS: SEMANTICSCHOLAR_DETAILS_ABOUT_AN_AUTHOR_S_PAPERS_INPUT
  DETAILS_ABOUT_A_PAPER: SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_INPUT
  DETAILS_ABOUT_A_PAPER_S_AUTHORS: SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_AUTHORS_INPUT
  DETAILS_ABOUT_A_PAPER_S_CITATIONS: SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_CITATIONS_INPUT
  DETAILS_ABOUT_A_PAPER_S_REFERENCES: SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_REFERENCES_INPUT
  GET_DETAILS_FOR_MULTIPLE_AUTHORS_AT_ONCE: SEMANTICSCHOLAR_GET_DETAILS_FOR_MULTIPLE_AUTHORS_AT_ONCE_INPUT
  GET_DETAILS_FOR_MULTIPLE_PAPERS_AT_ONCE: SEMANTICSCHOLAR_GET_DETAILS_FOR_MULTIPLE_PAPERS_AT_ONCE_INPUT
  PAPER_BULK_SEARCH: SEMANTICSCHOLAR_PAPER_BULK_SEARCH_INPUT
  PAPER_RELEVANCE_SEARCH: SEMANTICSCHOLAR_PAPER_RELEVANCE_SEARCH_INPUT
  PAPER_TITLE_SEARCH: SEMANTICSCHOLAR_PAPER_TITLE_SEARCH_INPUT
  SEARCH_FOR_AUTHORS_BY_NAME: SEMANTICSCHOLAR_SEARCH_FOR_AUTHORS_BY_NAME_INPUT
  SUGGEST_PAPER_QUERY_COMPLETIONS: SEMANTICSCHOLAR_SUGGEST_PAPER_QUERY_COMPLETIONS_INPUT
  TEXT_SNIPPET_SEARCH: SEMANTICSCHOLAR_TEXT_SNIPPET_SEARCH_INPUT
}

/**
 * Type map of all available tool input types for toolkit "SEMANTICSCHOLAR".
 */
export type SEMANTICSCHOLAR_TOOL_OUTPUTS = {
  DETAILS_ABOUT_AN_AUTHOR: SEMANTICSCHOLAR_DETAILS_ABOUT_AN_AUTHOR_OUTPUT
  DETAILS_ABOUT_AN_AUTHOR_S_PAPERS: SEMANTICSCHOLAR_DETAILS_ABOUT_AN_AUTHOR_S_PAPERS_OUTPUT
  DETAILS_ABOUT_A_PAPER: SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_OUTPUT
  DETAILS_ABOUT_A_PAPER_S_AUTHORS: SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_AUTHORS_OUTPUT
  DETAILS_ABOUT_A_PAPER_S_CITATIONS: SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_CITATIONS_OUTPUT
  DETAILS_ABOUT_A_PAPER_S_REFERENCES: SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_REFERENCES_OUTPUT
  GET_DETAILS_FOR_MULTIPLE_AUTHORS_AT_ONCE: SEMANTICSCHOLAR_GET_DETAILS_FOR_MULTIPLE_AUTHORS_AT_ONCE_OUTPUT
  GET_DETAILS_FOR_MULTIPLE_PAPERS_AT_ONCE: SEMANTICSCHOLAR_GET_DETAILS_FOR_MULTIPLE_PAPERS_AT_ONCE_OUTPUT
  PAPER_BULK_SEARCH: SEMANTICSCHOLAR_PAPER_BULK_SEARCH_OUTPUT
  PAPER_RELEVANCE_SEARCH: SEMANTICSCHOLAR_PAPER_RELEVANCE_SEARCH_OUTPUT
  PAPER_TITLE_SEARCH: SEMANTICSCHOLAR_PAPER_TITLE_SEARCH_OUTPUT
  SEARCH_FOR_AUTHORS_BY_NAME: SEMANTICSCHOLAR_SEARCH_FOR_AUTHORS_BY_NAME_OUTPUT
  SUGGEST_PAPER_QUERY_COMPLETIONS: SEMANTICSCHOLAR_SUGGEST_PAPER_QUERY_COMPLETIONS_OUTPUT
  TEXT_SNIPPET_SEARCH: SEMANTICSCHOLAR_TEXT_SNIPPET_SEARCH_OUTPUT
}

// ------------------- //
//    Trigger types    //
// ------------------- //



/**
 * Map of Composio's SEMANTICSCHOLAR toolkit.
 */
export const SEMANTICSCHOLAR = {
  slug: "semanticscholar",
  tools: {
    /**
     * Examples: <ul> <li><code>https://api.semanticscholar.org/graph/v1/author/1741101</code></li> <ul> <li>returns the author's authorid and name.</li> </ul> <li><code>https://api.semanticscholar.org/graph/v1/author/1741101?fields=url,papers</code></li> <ul> <li>returns the author's authorid, url, and list of papers. </li> <li>each paper has its paperid plus its title.</li> </ul> <li><code>https://api.semanticscholar.org/graph/v1/author/1741101?fields=url,papers.abstract,papers.authors</code></li> <ul> <li>returns the author's authorid, url, and list of papers. </li> <li>each paper has its paperid, abstract, and list of authors.</li> <li>in that list of authors, each author has their authorid and name.</li> </ul> <br> limitations: <ul> <li>can only return up to 10 mb of data at a time.</li> </ul> </ul>
     */
    DETAILS_ABOUT_AN_AUTHOR: "SEMANTICSCHOLAR_DETAILS_ABOUT_AN_AUTHOR",
    /**
     * Retrieves a list of papers authored by a specific researcher identified by their unique semantic scholar author id. this endpoint is particularly useful for conducting literature reviews, analyzing an author's body of work, or tracking a researcher's publications over time. it provides a comprehensive view of an author's contributions to their field of study. the endpoint returns only the papers associated with the specified author and does not include co-authored works where the specified author is not listed as a primary author. note that the response may be paginated for authors with a large number of publications, and additional api calls might be necessary to retrieve the complete list of papers.
     */
    DETAILS_ABOUT_AN_AUTHOR_S_PAPERS: "SEMANTICSCHOLAR_DETAILS_ABOUT_AN_AUTHOR_S_PAPERS",
    /**
     * Examples: <ul> <li><code>https://api.semanticscholar.org/graph/v1/paper/649def34f8be52c8b66281af98ae884c09aef38b</code></li> <ul> <li>returns a paper with its paperid and title. </li> </ul> <li><code>https://api.semanticscholar.org/graph/v1/paper/649def34f8be52c8b66281af98ae884c09aef38b?fields=url,year,authors</code></li> <ul> <li>returns the paper's paperid, url, year, and list of authors. </li> <li>each author has authorid and name.</li> </ul> <li><code>https://api.semanticscholar.org/graph/v1/paper/649def34f8be52c8b66281af98ae884c09aef38b?fields=citations.authors</code></li> <ul> <li>returns the paper's paperid and list of citations. </li> <li>each citation has its paperid plus its list of authors.</li> <li>each author has their 2 always included fields of authorid and name.</li> </ul> <br> limitations: <ul> <li>can only return up to 10 mb of data at a time.</li> </ul> </ul>
     */
    DETAILS_ABOUT_A_PAPER: "SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER",
    /**
     * Retrieves the list of authors for a specific paper identified by its unique paper id in the semantic scholar database. this endpoint is useful when you need detailed information about the contributors to a particular academic publication. it provides access to the author data associated with the paper, which may include names, affiliations, and potentially other metadata. this tool should be used when users require author information for a known paper, such as when exploring collaborations or tracking an author's body of work. it does not provide the full paper content or other paper metadata beyond author information.
     */
    DETAILS_ABOUT_A_PAPER_S_AUTHORS: "SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_AUTHORS",
    /**
     * Retrieves a list of citations for a specific academic paper using its unique semantic scholar paper id. this endpoint is useful for researchers and developers who want to explore the impact and connections of a particular academic work within the broader scientific literature. it provides information about other papers that have cited the specified paper, allowing users to trace the influence of research and discover related works. the endpoint should be used when analyzing the reception and impact of a specific paper, building citation networks, or conducting bibliometric studies. it does not provide the full text of citing papers or detailed information about the citations beyond basic metadata.
     */
    DETAILS_ABOUT_A_PAPER_S_CITATIONS: "SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_CITATIONS",
    /**
     * Retrieves the list of references cited by a specific paper in the semantic scholar database. this endpoint allows users to explore the scholarly context of a publication by accessing its bibliography. it's particularly useful for understanding the foundation of a paper's research, tracing the development of ideas, or conducting literature reviews. the tool returns details about the cited papers, which may include their titles, authors, publication dates, and semantic scholar ids. it should be used when analyzing a paper's sources or investigating the connections between different academic works. note that this endpoint only provides outgoing references (papers cited by the specified paper) and not incoming citations (papers that cite the specified paper).
     */
    DETAILS_ABOUT_A_PAPER_S_REFERENCES: "SEMANTICSCHOLAR_DETAILS_ABOUT_A_PAPER_S_REFERENCES",
    /**
     * Retrieves detailed information for multiple authors from semantic scholar in a single api call. this endpoint allows users to efficiently fetch data for a batch of authors by providing their unique semantic scholar ids. it's particularly useful for applications that need to gather information on multiple authors simultaneously, reducing the number of individual api calls required. the endpoint accepts a list of author ids and returns comprehensive details for each author, which may include their publications, citations, and other relevant academic information. while the exact response structure is not specified in the given schema, users can expect rich metadata about the requested authors.
     */
    GET_DETAILS_FOR_MULTIPLE_AUTHORS_AT_ONCE: "SEMANTICSCHOLAR_GET_DETAILS_FOR_MULTIPLE_AUTHORS_AT_ONCE",
    /**
     * The semanticscholar paper batch endpoint allows users to retrieve data for multiple academic papers in a single api call. this endpoint is particularly useful when you need to fetch information for a batch of papers efficiently, reducing the number of individual api requests. it accepts an array of paper ids and returns the corresponding data for each paper. use this endpoint when you have a list of known paper ids and want to retrieve their details simultaneously. keep in mind that while there's no specified limit on the number of ids you can send, very large batches may be subject to api rate limiting or response size restrictions.
     */
    GET_DETAILS_FOR_MULTIPLE_PAPERS_AT_ONCE: "SEMANTICSCHOLAR_GET_DETAILS_FOR_MULTIPLE_PAPERS_AT_ONCE",
    /**
     * Behaves similarly to <code>/paper/search</code>, but is intended for bulk retrieval of basic paper data without search relevance: <ul> <li>text query is optional and supports boolean logic for document matching.</li> <li>papers can be filtered using various criteria.</li> <li>up to 1,000 papers will be returned in each call.</li> <li>if there are more matching papers, a continuation "token" will be present.</li> <li>the query can be repeated with the token param added to efficiently continue fetching matching papers.</li> </ul> <br> returns a structure with an estimated total matches, batch of matching papers, and a continuation token if more results are available. <br> limitations: <ul> <li>nested paper data, such as citations, references, etc, is not available via this method.</li> <li>up to 10,000,000 papers can be fetched via this method. for larger needs, please use the <a href="datasets/">datasets api</a> to retrieve full copies of the corpus.</li> </ul>
     */
    PAPER_BULK_SEARCH: "SEMANTICSCHOLAR_PAPER_BULK_SEARCH",
    /**
     * The searchpapers endpoint allows users to search for academic papers within the semantic scholar database. it provides a powerful way to discover relevant scientific literature based on user-defined search criteria. this endpoint should be used when researchers, students, or developers need to find papers related to specific topics, authors, or time periods. the search functionality supports various query parameters to refine and customize the search results, making it suitable for both broad exploratory searches and targeted inquiries. however, users should be aware that the search is limited to papers indexed by semantic scholar, and very recent publications might not be immediately available. the endpoint returns a list of papers matching the search criteria, along with selected metadata fields, facilitating efficient literature review and analysis.
     */
    PAPER_RELEVANCE_SEARCH: "SEMANTICSCHOLAR_PAPER_RELEVANCE_SEARCH",
    /**
     * Behaves similarly to <code>/paper/search</code>, but is intended for retrieval of a single paper based on closest title match to given query. examples: <ul> <li><code>https://api.semanticscholar.org/graph/v1/paper/search/match?query=construction of the literature graph in semantic scholar</code></li> <ul> <li>returns a single paper that is the closest title match.</li> <li>each paper has its paperid, title, and matchscore as well as any other requested fields.</li> </ul> <li><code>https://api.semanticscholar.org/graph/v1/paper/search/match?query=totalgarbagenonsense</code></li> <ul> <li>returns with a 404 error and a "title match not found" message.</li> </ul> </ul> <br> limitations: <ul> <li>will only return the single highest match result.</li> </ul> </ul>
     */
    PAPER_TITLE_SEARCH: "SEMANTICSCHOLAR_PAPER_TITLE_SEARCH",
    /**
     * The authorsearch endpoint allows users to search for authors within the semantic scholar database. it provides a way to find academic authors based on their names or other identifying information. this endpoint is particularly useful when you need to retrieve author metadata, such as their publications, affiliations, or research areas. the search functionality supports partial name matches and is case-insensitive, making it flexible for various search scenarios. use this endpoint when you want to discover authors or verify author information in the context of academic research. note that the search results may be limited and paginated, so multiple requests might be necessary for comprehensive results.
     */
    SEARCH_FOR_AUTHORS_BY_NAME: "SEMANTICSCHOLAR_SEARCH_FOR_AUTHORS_BY_NAME",
    /**
     * To support interactive query-completion, return minimal information about papers matching a partial query example: <code>https://api.semanticscholar.org/graph/v1/paper/autocomplete?query=semanti</code>
     */
    SUGGEST_PAPER_QUERY_COMPLETIONS: "SEMANTICSCHOLAR_SUGGEST_PAPER_QUERY_COMPLETIONS",
    /**
     * Return the text snippets that most closely match the query. text snippets are excerpts of approximately 500 words, drawn from a paper's title, abstract, and body text, but excluding figure captions and the bibliography. it will return the highest ranked snippet first, as well as some basic data about the paper it was found in. examples: <ul> <li><code>https://api.semanticscholar.org/graph/v1/snippet/search?query=the literature graph is a property graph with directed edges&limit=1</code></li> <ul> <li>returns a single snippet that is the highest ranked match.</li> <li>each snippet has text, snippetkind, section, annotation data, and score. as well as the following data about the paper it comes from: corpusid, title, authors, and openaccessinfo.</li> </ul> </ul> <br> limitations: <ul> <li>you must include a query.</li> <li>if you don't set a limit, it will automatically return 10 results.</li> <li>the max limit allowed is 1000.</li> </ul> </ul>
     */
    TEXT_SNIPPET_SEARCH: "SEMANTICSCHOLAR_TEXT_SNIPPET_SEARCH",
  },
  triggerTypes: {},
}

/**
 * Type map of all available trigger payloads for toolkit "SEMANTICSCHOLAR".
 */
export type SEMANTICSCHOLAR_TRIGGER_PAYLOADS = {}

/**
 * Type map of all available trigger events for toolkit "SEMANTICSCHOLAR".
 */
export type SEMANTICSCHOLAR_TRIGGER_EVENTS = {}
