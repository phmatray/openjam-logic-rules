export interface IQueryParameters {
  /**
   * The number of records to skip in the database.
   * This is typically used in pagination.
   */
  skip?: number;

  /**
   * The number of records to skip based on the $limit parameter.
   * This is typically used in pagination.
   */
  page?: number;

  /**
   * The maximum number of records to return.
   * This is typically used in pagination.
   */
  limit?: number;

  /**
   * A list of basic fields to be included in each resource.
   */
  select?: string[];

  /**
   * A set of fields to sort by.Including field name indicates it should be sorted ascending,
   * while prepending '-' indicates descending.The default sort direction is 'ascending'
   * (lowest value to highest value).Listing multiple fields prioritizes the sort starting
   * with the first field listed.
   */
  sort?: string[];

  /**
   * A full text search parameter.
   * Takes advantage of indexes for efficient searching. Also implements stemming with searches.
   * Prefixing search terms with a "-" will exclude results that match that term.
   */
  text?: string;

  /**
   *  A regex search parameter.
   * Slower than $text search but supports partial matches and doesn't require indexing.
   * This can be refined using the $searchFields parameter.
   */
  term?: string;

  /**
   * A set of fields to apply the $term search parameter to.
   * If this parameter is not included, the $term search parameter is applied to all searchable fields.
   */
  searchFields?: string[];

  /**
   * A set of associations to populate.
   */
  embed?: string[];

  /**
   * If set to true, only a count of the query results will be returned.
   */
  count?: boolean;
}

export interface IQueryBuilder {
  /**
   * Create a get query with pagination
   * @param collection - Collection name
   * @param params - Query parameters
   */
  buildQueryForCollection: (
    collection: string,
    params?: IQueryParameters
  ) => string;
}

/**
 * A singleton for build queries
 */
export class QueryBuilder implements IQueryBuilder {
  public buildQueryForCollection(
    collection: string,
    queryParameters: IQueryParameters = {}
  ) {
    if (collection === null || collection === undefined) {
      throw Error('collection cannot be null');
    }

    this.validateQueryParameters(queryParameters);

    return `/${collection}${this.extractSegments(queryParameters)}`;
  }

  private validateQueryParameters(queryParameters: IQueryParameters) {
    const throwIfNegative = (parameter: any, name: string) => {
      if (parameter && parameter < 0) {
        throw Error(`${name} cannot be negative`);
      }
    };

    throwIfNegative(queryParameters.skip, 'collection.skip');
    throwIfNegative(queryParameters.page, 'collection.page');
    throwIfNegative(queryParameters.limit, 'collection.limit');
  }

  private extractSegments(queryParameters: IQueryParameters) {
    const segments: string[] = [];

    const pushSegmentIfExist = (parameter: any, name: string) => {
      if (parameter) {
        segments.push(`$${[name]}=${parameter}`);
      }
    };

    const pushSegmentsIfCollectionExist = (
      parameter: any[] | undefined,
      name: string
    ) => {
      if (parameter) {
        parameter.forEach(element => {
          pushSegmentIfExist(element, name);
        });
      }
    };

    pushSegmentIfExist(queryParameters.skip, 'skip');
    pushSegmentIfExist(queryParameters.page, 'page');
    pushSegmentIfExist(queryParameters.limit, 'limit');
    pushSegmentIfExist(queryParameters.text, 'text');
    pushSegmentIfExist(queryParameters.term, 'term');
    pushSegmentIfExist(queryParameters.count, 'count');

    pushSegmentsIfCollectionExist(queryParameters.select, 'select');
    pushSegmentsIfCollectionExist(queryParameters.searchFields, 'searchFields');
    pushSegmentsIfCollectionExist(queryParameters.sort, 'sort');
    pushSegmentsIfCollectionExist(queryParameters.embed, 'embed');

    return this.parseSegments(segments);
  }

  private parseSegments(segments: string[]) {
    return segments.length > 0 ? '?'.concat(segments.join('&')) : '';
  }
}

export const queryBuilder: IQueryBuilder = new QueryBuilder();
