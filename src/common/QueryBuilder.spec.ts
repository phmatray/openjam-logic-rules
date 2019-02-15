import { QueryBuilder, IQueryBuilder } from './QueryBuilder';

describe('Test QueryBuilder', () => {
  let queryBuilder: IQueryBuilder;

  beforeEach(() => {
    queryBuilder = new QueryBuilder();
  });

  describe('buildQueryForSingle', () => {
    it('should success if the method exists', () => {
      expect(queryBuilder.buildQueryForSingle).toBeDefined();
    });

    it('should throw if the collection parameter is null', () => {
      const collection = null;
      const id = 'id001';

      expect(() => {
        queryBuilder.buildQueryForSingle(collection, id);
      }).toThrow();
    });

    it('should throw if the collection parameter is undefined', () => {
      const collection = undefined;
      const id = 'id001';

      expect(() => {
        queryBuilder.buildQueryForSingle(collection, id);
      }).toThrow();
    });

    it('should throw if the id parameter is null', () => {
      const collection = 'artist';
      const id = null;

      expect(() => {
        queryBuilder.buildQueryForSingle(collection, id);
      }).toThrow();
    });

    it('should throw if the id parameter is undefined', () => {
      const collection = 'artist';
      const id = undefined;

      expect(() => {
        queryBuilder.buildQueryForSingle(collection, id);
      }).toThrow();
    });

    it('should return the query string', () => {
      const collection = 'artist';
      const id = 'id001';

      const url = queryBuilder.buildQueryForSingle(collection, id);

      expect(url).toBe('/artist/id001');
    });

    it('should return the query string with all parameters', () => {
      const collection = 'artist';
      const id = 'id001';
      const params = {
        select: ['name', 'description', 'images', 'genres'],
        embed: ['tracks', 'user']
      };

      const url = queryBuilder.buildQueryForSingle(collection, id, params);

      expect(url).toBe(
        '/artist/id001?' +
          '$select=name' +
          '&$select=description' +
          '&$select=images' +
          '&$select=genres' +
          '&$embed=tracks' +
          '&$embed=user'
      );
    });

    describe('parameters', () => {
      describe('select', () => {
        it('should return the query string with the select parameter filled with one field', () => {
          const collection = 'artist';
          const id = 'id001';
          const params = { select: ['name'] };

          const url = queryBuilder.buildQueryForSingle(collection, id, params);

          expect(url).toBe('/artist/id001?$select=name');
        });

        it('should return the query string with the select parameter filled with two fields', () => {
          const collection = 'artist';
          const id = 'id001';
          const params = { select: ['name', 'description'] };

          const url = queryBuilder.buildQueryForSingle(collection, id, params);

          expect(url).toBe('/artist/id001?$select=name&$select=description');
        });
      });

      describe('embed', () => {
        it('should return the query string with the embed parameter filled with one field', () => {
          const collection = 'artist';
          const id = 'id001';
          const params = { embed: ['name'] };

          const url = queryBuilder.buildQueryForSingle(collection, id, params);

          expect(url).toBe('/artist/id001?$embed=name');
        });

        it('should return the query string with the embed parameter filled with two fields', () => {
          const collection = 'artist';
          const id = 'id001';
          const params = { embed: ['name', 'description'] };

          const url = queryBuilder.buildQueryForSingle(collection, id, params);

          expect(url).toBe('/artist/id001?$embed=name&$embed=description');
        });
      });
    });
  });

  describe('buildQueryForCollection', () => {
    it('should success if the method exists', () => {
      expect(queryBuilder.buildQueryForCollection).toBeDefined();
    });

    it('should throw if the collection parameter is null', () => {
      const collection = null;

      expect(() => {
        queryBuilder.buildQueryForCollection(collection);
      }).toThrow();
    });

    it('should throw if the collection parameter is undefined', () => {
      const collection = undefined;

      expect(() => {
        queryBuilder.buildQueryForCollection(collection);
      }).toThrow();
    });

    it('should return the query string', () => {
      const collection = 'artist';

      const url = queryBuilder.buildQueryForCollection(collection);

      expect(url).toBe('/artist');
    });

    it('should return the query string with all parameters', () => {
      const collection = 'artist';
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

      const url = queryBuilder.buildQueryForCollection(collection, params);

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
          const collection = 'artist';
          const params = { skip: -1 };

          expect(() => {
            queryBuilder.buildQueryForCollection(collection, params);
          }).toThrow();
        });

        it('should return the query string with the skip parameter', () => {
          const collection = 'artist';
          const params = { skip: 10 };

          const url = queryBuilder.buildQueryForCollection(collection, params);

          expect(url).toBe('/artist?$skip=10');
        });
      });

      describe('page', () => {
        it('should throw if the page parameter is negative', () => {
          const collection = 'artist';
          const params = { page: -1 };

          expect(() => {
            queryBuilder.buildQueryForCollection(collection, params);
          }).toThrow();
        });

        it('should return the query string with the page parameter', () => {
          const collection = 'artist';
          const params = { page: 10 };

          const url = queryBuilder.buildQueryForCollection(collection, params);

          expect(url).toBe('/artist?$page=10');
        });
      });

      describe('limit', () => {
        it('should throw if the limit parameter is negative', () => {
          const collection = 'artist';
          const params = { limit: -1 };

          expect(() => {
            queryBuilder.buildQueryForCollection(collection, params);
          }).toThrow();
        });

        it('should return the query string with the limit parameter', () => {
          const collection = 'artist';
          const params = { limit: 10 };

          const url = queryBuilder.buildQueryForCollection(collection, params);

          expect(url).toBe('/artist?$limit=10');
        });
      });

      describe('select', () => {
        it('should return the query string with the select parameter filled with one field', () => {
          const collection = 'artist';
          const params = { select: ['name'] };

          const url = queryBuilder.buildQueryForCollection(collection, params);

          expect(url).toBe('/artist?$select=name');
        });

        it('should return the query string with the select parameter filled with two fields', () => {
          const collection = 'artist';
          const params = { select: ['name', 'description'] };

          const url = queryBuilder.buildQueryForCollection(collection, params);

          expect(url).toBe('/artist?$select=name&$select=description');
        });
      });

      describe('sort', () => {
        it('should return the query string with the sort parameter filled with one field', () => {
          const collection = 'artist';
          const params = { sort: ['name'] };

          const url = queryBuilder.buildQueryForCollection(collection, params);

          expect(url).toBe('/artist?$sort=name');
        });

        it('should return the query string with the sort parameter filled with two fields', () => {
          const collection = 'artist';
          const params = { sort: ['name', 'description'] };

          const url = queryBuilder.buildQueryForCollection(collection, params);

          expect(url).toBe('/artist?$sort=name&$sort=description');
        });
      });

      describe('text', () => {
        it('should return the query string with the text parameter', () => {
          const collection = 'artist';
          const params = { text: 'search' };

          const url = queryBuilder.buildQueryForCollection(collection, params);

          expect(url).toBe('/artist?$text=search');
        });
      });

      describe('term', () => {
        it('should return the query string with the term parameter', () => {
          const collection = 'artist';
          const params = { term: 'search' };

          const url = queryBuilder.buildQueryForCollection(collection, params);

          expect(url).toBe('/artist?$term=search');
        });
      });

      describe('searchFields', () => {
        it('should return the query string with the sort parameter filled with one field', () => {
          const collection = 'artist';
          const params = { sort: ['name'] };

          const url = queryBuilder.buildQueryForCollection(collection, params);

          expect(url).toBe('/artist?$sort=name');
        });

        it('should return the query string with the sort parameter filled with two fields', () => {
          const collection = 'artist';
          const params = { sort: ['name', 'description'] };

          const url = queryBuilder.buildQueryForCollection(collection, params);

          expect(url).toBe('/artist?$sort=name&$sort=description');
        });
      });

      describe('embed', () => {
        it('should return the query string with the embed parameter filled with one field', () => {
          const collection = 'artist';
          const params = { embed: ['name'] };

          const url = queryBuilder.buildQueryForCollection(collection, params);

          expect(url).toBe('/artist?$embed=name');
        });

        it('should return the query string with the embed parameter filled with two fields', () => {
          const collection = 'artist';
          const params = { embed: ['name', 'description'] };

          const url = queryBuilder.buildQueryForCollection(collection, params);

          expect(url).toBe('/artist?$embed=name&$embed=description');
        });
      });

      describe('count', () => {
        it('should return the query string with the count parameter', () => {
          const collection = 'artist';
          const params = { count: true };

          const url = queryBuilder.buildQueryForCollection(collection, params);

          expect(url).toBe('/artist?$count=true');
        });
      });
    });
  });
});
