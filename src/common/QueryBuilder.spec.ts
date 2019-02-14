import { QueryBuilder, IQueryBuilder } from './QueryBuilder';

describe('Test QueryBuilder', () => {
  let queryBuilder: IQueryBuilder;

  beforeEach(() => {
    queryBuilder = new QueryBuilder();
  });

  it('should throw if the collection parameter is null', () => {
    expect(() => {
      queryBuilder.getUrl(null);
    }).toThrow();
  });

  it('should throw if the collection parameter is undefined', () => {
    expect(() => {
      queryBuilder.getUrl(undefined);
    }).toThrow();
  });

  it('should return the query string', () => {
    const url = queryBuilder.getUrl('artist');

    expect(url).toBe('/artist');
  });

  it('should return the query string with all parameters', () => {
    const params = {
      skip: 10,
      page: 1,
      limit: 5,
      select: ['name', 'description'],
      text: 'search',
      term: 'search',
      count: true,
      searchFields: ['name', 'description'],
      sort: ['name', 'description'],
      embed: ['tracks', 'user']
    };

    const url = queryBuilder.getUrl('artist', params);

    expect(url).toBe(
      '/artist?' +
        '$skip=10' +
        '&$page=1' +
        '&$limit=5' +
        '&$text=search' +
        '&$term=search' +
        '&$count=true' +
        '&$select=name&$select=description' +
        '&$searchFields=name&$searchFields=description' +
        '&$sort=name&$sort=description' +
        '&$embed=tracks&$embed=user'
    );
  });

  describe('parameters', () => {
    describe('skip', () => {
      it('should throw if the skip parameter is negative', () => {
        const params = { skip: -1 };

        expect(() => {
          queryBuilder.getUrl('artist', params);
        }).toThrow();
      });

      it('should return the query string with the skip parameter', () => {
        const params = { skip: 10 };

        const url = queryBuilder.getUrl('artist', params);

        expect(url).toBe('/artist?$skip=10');
      });
    });

    describe('page', () => {
      it('should throw if the page parameter is negative', () => {
        const params = { page: -1 };

        expect(() => {
          queryBuilder.getUrl('artist', params);
        }).toThrow();
      });

      it('should return the query string with the page parameter', () => {
        const params = { page: 10 };

        const url = queryBuilder.getUrl('artist', params);

        expect(url).toBe('/artist?$page=10');
      });
    });

    describe('limit', () => {
      it('should throw if the limit parameter is negative', () => {
        const params = { limit: -1 };

        expect(() => {
          queryBuilder.getUrl('artist', params);
        }).toThrow();
      });

      it('should return the query string with the limit parameter', () => {
        const params = { limit: 10 };

        const url = queryBuilder.getUrl('artist', params);

        expect(url).toBe('/artist?$limit=10');
      });
    });

    describe('select', () => {
      it('should return the query string with the select parameter filled with one field', () => {
        const params = { select: ['name'] };

        const url = queryBuilder.getUrl('artist', params);

        expect(url).toBe('/artist?$select=name');
      });

      it('should return the query string with the select parameter filled with two fields', () => {
        const params = { select: ['name', 'description'] };

        const url = queryBuilder.getUrl('artist', params);

        expect(url).toBe('/artist?$select=name&$select=description');
      });
    });

    describe('sort', () => {
      it('should return the query string with the sort parameter filled with one field', () => {
        const params = { sort: ['name'] };

        const url = queryBuilder.getUrl('artist', params);

        expect(url).toBe('/artist?$sort=name');
      });

      it('should return the query string with the sort parameter filled with two fields', () => {
        const params = { sort: ['name', 'description'] };

        const url = queryBuilder.getUrl('artist', params);

        expect(url).toBe('/artist?$sort=name&$sort=description');
      });
    });

    describe('text', () => {
      it('should return the query string with the text parameter', () => {
        const params = { text: 'search' };

        const url = queryBuilder.getUrl('artist', params);

        expect(url).toBe('/artist?$text=search');
      });
    });

    describe('term', () => {
      it('should return the query string with the term parameter', () => {
        const params = { term: 'search' };

        const url = queryBuilder.getUrl('artist', params);

        expect(url).toBe('/artist?$term=search');
      });
    });

    describe('searchFields', () => {
      it('should return the query string with the sort parameter filled with one field', () => {
        const params = { sort: ['name'] };

        const url = queryBuilder.getUrl('artist', params);

        expect(url).toBe('/artist?$sort=name');
      });

      it('should return the query string with the sort parameter filled with two fields', () => {
        const params = { sort: ['name', 'description'] };

        const url = queryBuilder.getUrl('artist', params);

        expect(url).toBe('/artist?$sort=name&$sort=description');
      });
    });

    describe('embed', () => {
      it('should return the query string with the embed parameter filled with one field', () => {
        const params = { embed: ['name'] };

        const url = queryBuilder.getUrl('artist', params);

        expect(url).toBe('/artist?$embed=name');
      });

      it('should return the query string with the embed parameter filled with two fields', () => {
        const params = { embed: ['name', 'description'] };

        const url = queryBuilder.getUrl('artist', params);

        expect(url).toBe('/artist?$embed=name&$embed=description');
      });
    });

    describe('count', () => {
      it('should return the query string with the count parameter', () => {
        const params = { count: true };

        const url = queryBuilder.getUrl('artist', params);

        expect(url).toBe('/artist?$count=true');
      });
    });
  });
});
