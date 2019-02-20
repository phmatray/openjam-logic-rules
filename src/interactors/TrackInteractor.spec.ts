import { ITrack, Track } from '../entities/Track';
import TrackInteractor, { ITrackInteractor } from './TrackInteractor';
import { TrackService } from '../services/TrackService';

jest.mock('../services/TrackService');

describe('TrackInteractor', () => {
  let interactor: ITrackInteractor = TrackInteractor.getInstance();
  const getTracks = TrackService.prototype.getTracks;
  const createTrack = TrackService.prototype.createTrack;

  beforeEach(() => {
    TrackService.prototype.getTracks = getTracks;
    TrackService.prototype.createTrack = createTrack;
  });

  it('should return a new track object', () => {
    const track = interactor.initTrack() as Track;

    expect(track.title).toBe('');
    expect(track.isValidTitle()).toBeFalsy();

    track.title = 'Valid title';
    expect(track.isValidTitle()).toBeTruthy();
  });

  it('should get a list of tracks', async () => {
    TrackService.prototype.getTracks = jest.fn().mockImplementationOnce(() => {
      return getTracks();
    });

    const tracks = await interactor.getTracks();

    const spy = jest.spyOn(TrackService.prototype, 'getTracks');

    expect(spy).toHaveBeenCalled();
    expect(tracks.length).toBe(2);
    expect(tracks[0].title).toContain('Lorem ipsum');

    spy.mockClear();
  });

  it('should return the existing tracks list', async () => {
    TrackService.prototype.getTracks = jest.fn().mockImplementationOnce(() => {
      throw new Error();
    });
    const tracks = await interactor.getTracks();

    const spy = jest.spyOn(TrackService.prototype, 'getTracks');

    expect(spy).not.toHaveBeenCalled();
    expect(tracks.length).toBe(2);
    expect(tracks[0].title).toContain('Lorem ipsum');

    spy.mockClear();
  });

  it('should reset the instance and throw an error while fetching tracks', async () => {
    TrackInteractor.resetInstance();
    interactor = TrackInteractor.getInstance();
    TrackService.prototype.getTracks = jest.fn().mockImplementationOnce(() => {
      throw new Error();
    });

    let error;
    try {
      await interactor.getTracks();
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe('Error fetching tracks');
  });

  it('should create a new track', async () => {
    const data: ITrack = new Track();
    data.title = 'Lorem ipsum dolor';
    data.type = 'track';

    const track = await interactor.createTrack(data);

    expect(track).toBeDefined();
    expect(track.id).toBe('id003');
    expect(track.title).toEqual(data.title);
    expect(track.type).toEqual(data.type);
  });

  it('should throw there is no track data', async () => {
    // tslint:disable-next-line: no-unused
    let track;
    let error;
    try {
      track = await interactor.createTrack(undefined);
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe('No track data provided');
  });

  it('should throw track data is invalid when creating track', async () => {
    const data: ITrack = new Track();
    data.type = 'track';

    // tslint:disable-next-line: no-unused
    let track;
    let error;
    try {
      track = await interactor.createTrack(data);
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe('The track data is invalid');
  });

  it('should throw a service error when creating a track', async () => {
    TrackService.prototype.createTrack = jest.fn().mockImplementationOnce(() => {
      throw new Error();
    });
    let error;
    const data: ITrack = new Track();
    data.title = 'Lorem ipsum dolor';
    data.type = 'track';

    try {
      await interactor.createTrack(data);
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.message).toBe('Server error when trying to create the track');
  });

  it('should save a new track', async () => {
    const data: ITrack = new Track();
    data.id = 'id003';
    data.type = 'track';
    data.title = 'Lorem ipsum';

    const track = await interactor.saveTrack(data);

    expect(track).toBeDefined();
    expect(track.id).toBe('id003');
    expect(track.title).toEqual(data.title);
  });

  it('should throw a service error when saving a track', async () => {
    const data: ITrack = new Track();
    data.id = 'id1';
    data.type = 'track';
    data.title = 'Lorem ipsum';

    let error;
    try {
      await interactor.saveTrack(data);
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.message).toBe('Server error when trying to save the track');
  });
});
