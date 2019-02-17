import { IArtist, Artist } from '../entities/Artist';
import ArtistInteractor, { IArtistInteractor } from './ArtistInteractor';
import { ArtistService } from '../services/ArtistService';

jest.mock('../services/ArtistService');

describe('ArtistInteractor', () => {
  let interactor: IArtistInteractor = ArtistInteractor.getInstance();
  const getArtists = ArtistService.prototype.getArtists;
  const createArtist = ArtistService.prototype.createArtist;

  beforeEach(() => {
    ArtistService.prototype.getArtists = getArtists;
    ArtistService.prototype.createArtist = createArtist;
  });

  it('should return a new artist object', () => {
    const artist = interactor.initArtist() as Artist;

    expect(artist.name).toBe('');
    expect(artist.isValidName()).toBeFalsy();

    artist.name = 'Valid name';
    expect(artist.isValidName()).toBeTruthy();
  });

  it('should get a list of artists', async () => {
    ArtistService.prototype.getArtists = jest.fn().mockImplementationOnce(() => {
      return getArtists();
    });

    const artists = await interactor.getArtists();

    const spy = jest.spyOn(ArtistService.prototype, 'getArtists');

    expect(spy).toHaveBeenCalled();
    expect(artists.length).toBe(2);
    expect(artists[0].name).toContain('Lorem ipsum');

    spy.mockClear();
  });

  it('should return the existing artists list', async () => {
    ArtistService.prototype.getArtists = jest.fn().mockImplementationOnce(() => {
      throw new Error();
    });
    const artists = await interactor.getArtists();

    const spy = jest.spyOn(ArtistService.prototype, 'getArtists');

    expect(spy).not.toHaveBeenCalled();
    expect(artists.length).toBe(2);
    expect(artists[0].name).toContain('Lorem ipsum');

    spy.mockClear();
  });

  it('should reset the instance and throw an error while fetching artists', async () => {
    ArtistInteractor.resetInstance();
    interactor = ArtistInteractor.getInstance();
    ArtistService.prototype.getArtists = jest.fn().mockImplementationOnce(() => {
      throw new Error();
    });

    let error;
    try {
      await interactor.getArtists();
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe('Error fetching artists');
  });

  it('should create a new artist', async () => {
    const data: IArtist = new Artist();
    data.name = 'Lorem ipsum dolor';
    data.type = 'artist';
    data.images = [];
    data.genres = [];

    const artist = await interactor.createArtist(data);

    expect(artist).toBeDefined();
    expect(artist.id).toBe('id003');
    expect(artist.name).toEqual(data.name);
    expect(artist.type).toEqual(data.type);
  });

  it('should throw there is no artist data', async () => {
    // tslint:disable-next-line: no-unused
    let artist;
    let error;
    try {
      artist = await interactor.createArtist(undefined);
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe('No artist data provided');
  });

  it('should throw artist data is invalid when creating artist', async () => {
    const data: IArtist = new Artist();
    data.type = 'artist';

    // tslint:disable-next-line: no-unused
    let artist;
    let error;
    try {
      artist = await interactor.createArtist(data);
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe('The artist data is invalid');
  });

  it('should throw a service error when creating a artist', async () => {
    ArtistService.prototype.createArtist = jest.fn().mockImplementationOnce(() => {
      throw new Error();
    });
    let error;
    const data: IArtist = new Artist();
    data.name = 'Lorem ipsum dolor';
    data.type = 'artist';

    try {
      await interactor.createArtist(data);
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.message).toBe('Server error when trying to create the artist');
  });

  it('should save a new artist', async () => {
    const data: IArtist = new Artist();
    data.id = 'id003';
    data.type = 'artist';
    data.name = 'Lorem ipsum';
    data.images = [];
    data.genres = ['electro', 'rock'];

    const artist = await interactor.saveArtist(data);

    expect(artist).toBeDefined();
    expect(artist.id).toBe('id003');
    expect(artist.name).toEqual(data.name);
  });

  it('should throw a service error when saving a artist', async () => {
    const data: IArtist = new Artist();
    data.id = 'id1';
    data.type = 'artist';
    data.name = 'Lorem ipsum';
    data.images = [];
    data.genres = ['electro', 'rock'];

    let error;
    try {
      await interactor.saveArtist(data);
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.message).toBe('Server error when trying to save the artist');
  });
});
