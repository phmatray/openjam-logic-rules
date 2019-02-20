import { Track } from './Track';

describe('Test Track entity', () => {
  const bigString =
    /* tslint:disable-next-line:max-line-length */
    'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla';
  let track: Track;

  beforeEach(() => {
    track = new Track();
  });

  it('should copy an object data into a Track instance', () => {
    const data = {
      id: 'id001',
      type: 'track',
      type2: 'original',
      title: 'title',
      edit: 'edit',
      audioUrl: 'audioUrl',
      coverUrl: { w200: 'w200', w400: 'w400', w800: 'w800' },
      licenceUrl: 'licenceUrl',
      downloadable: true,
      meta: { description: 'description', lyrics: 'lyrics' },
      explicit: false,
      popularity: 100,
      duration: 190000
    };
    track.copyData(data);

    expect(track.id).toBe('id001');
    expect(track.type).toBe('track');
    expect(track.type2).toBe('original');
    expect(track.title).toBe('title');
    expect(track.edit).toBe('edit');
    expect(track.audioUrl).toBe('audioUrl');
    expect(track.coverUrl.w200).toBe('w200');
    expect(track.coverUrl.w400).toBe('w400');
    expect(track.coverUrl.w800).toBe('w800');
    expect(track.licenceUrl).toBe('licenceUrl');
    expect(track.downloadable).toBe(true);
    expect(track.meta.description).toBe('description');
    expect(track.meta.lyrics).toBe('lyrics');
    expect(track.explicit).toBe(false);
    expect(track.popularity).toBe(100);
    expect(track.duration).toBe(190000);
  });

  it('should return title is invalid for empty string', () => {
    expect(track.isValidTitle()).toBeFalsy();
  });

  it('should return title is invalid using additional validator', () => {
    track.title = 'New';
    expect(
      track.isValidTitle(
        (title: string): boolean => {
          return title.length > 3;
        }
      )
    ).toBeFalsy();
  });

  it('should return title is invalid for long titles', () => {
    track.title = bigString;
    expect(track.isValidTitle()).toBeFalsy();
  });

  it('should return title is valid', () => {
    track.title = 'New track';
    expect(track.isValidTitle()).toBeTruthy();
  });

  it('should return title is valid using additional validation', () => {
    track.title = 'Lorem ipsum';
    expect(
      track.isValidTitle((title: string) => {
        return title.indexOf('dolor') < 0;
      })
    ).toBeTruthy();
  });

  it('should return track is invalid without previous validation', () => {
    expect(track.isValid()).toBeFalsy();
  });

  it('should return track is valid without previous validation', () => {
    track.title = 'Lorem ipsum dolor sit amet';

    expect(track.isValid()).toBeTruthy();
  });

  it('should return track is invalid with previous title validation', () => {
    track.title = 'Lorem ipsum dolor';

    expect(
      track.isValidTitle(
        (title: string): boolean => {
          return title.indexOf('dolor') < 0;
        }
      )
    ).toBeFalsy();

    expect(track.isValid()).toBeFalsy();
  });
});
