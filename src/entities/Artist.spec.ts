import { Artist } from './Artist';

describe('Test Artist entity', () => {
  const bigString =
    /* tslint:disable-next-line:max-line-length */
    'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla';
  let artist: Artist;

  beforeEach(() => {
    artist = new Artist();
  });

  it('should copy an object data into a Artist instance', () => {
    const data = {
      id: 1,
      type: 'artist',
      name: 'Copy',
      images: [],
      genres: []
    };
    artist.copyData(data);

    expect(artist.id).toBe(1);
    expect(artist.type).toBe('artist');
    expect(artist.name).toBe('Copy');
    expect(artist.images).toEqual([]);
    expect(artist.genres).toEqual([]);
  });

  it('should return name is invalid for empty string', () => {
    expect(artist.isValidName()).toBeFalsy();
  });

  it('should return name is invalid using additional validator', () => {
    artist.name = 'New';
    expect(
      artist.isValidName(
        (name: string): boolean => {
          return name.length > 3;
        }
      )
    ).toBeFalsy();
  });

  it('should return name is invalid for long titles', () => {
    artist.name = bigString;
    expect(artist.isValidName()).toBeFalsy();
  });

  it('should return name is valid', () => {
    artist.name = 'New artist';
    expect(artist.isValidName()).toBeTruthy();
  });

  it('should return name is valid using additional validation', () => {
    artist.name = 'Lorem ipsum';
    expect(
      artist.isValidName((name: string) => {
        return name.indexOf('dolor') < 0;
      })
    ).toBeTruthy();
  });

  it('should return artist is invalid without previous validation', () => {
    expect(artist.isValid()).toBeFalsy();
  });

  it('should return artist is valid without previous validation', () => {
    artist.name = 'Lorem ipsum dolor sit amet';

    expect(artist.isValid()).toBeTruthy();
  });

  it('should return artist is invalid with previous name validation', () => {
    artist.name = 'Lorem ipsum dolor';

    expect(
      artist.isValidName(
        (name: string): boolean => {
          return name.indexOf('dolor') < 0;
        }
      )
    ).toBeFalsy();

    expect(artist.isValid()).toBeFalsy();
  });
});
