import { ITrack, Track } from '../entities/Track';
import { ITrackService, TrackService } from '../services/TrackService';

export interface ITrackInteractor {
  initTrack: () => ITrack;
  getTracks: () => Promise<ITrack[]>;
  createTrack: (data: ITrack) => Promise<ITrack>;
  saveTrack: (data: ITrack) => Promise<ITrack>;
}

export default class TrackInteractor implements ITrackInteractor {
  private static _instance: ITrackInteractor = new TrackInteractor(new TrackService());

  public static getInstance(): ITrackInteractor {
    return this._instance;
  }

  public static resetInstance(): void {
    this._instance = new TrackInteractor(new TrackService());
  }

  private _tracks: ITrack[];
  private constructor(private _service: ITrackService) {}

  public initTrack(): ITrack {
    return new Track();
  }

  public async getTracks(): Promise<ITrack[]> {
    if (this._tracks !== undefined) {
      return this._tracks;
    }

    let response;

    try {
      response = await this._service.getTracks();
    } catch (err) {
      throw new Error('Error fetching tracks');
    }

    this._tracks = response;
    return this._tracks;
  }

  public async createTrack(data: ITrack): Promise<ITrack> {
    this._checkTrackData(data);
    let response;

    try {
      response = await this._service.createTrack(data);
    } catch (err) {
      throw new Error('Server error when trying to create the track');
    }

    return response;
  }

  public async saveTrack(data: ITrack): Promise<ITrack> {
    this._checkTrackData(data);
    let response;

    try {
      response = await this._service.saveTrack(data);
    } catch (err) {
      throw new Error('Server error when trying to save the track');
    }

    return response;
  }

  private _checkTrackData(data: ITrack): void {
    if (!data) {
      throw new Error('No track data provided');
    }

    if (data.isValid && !data.isValid()) {
      throw new Error('The track data is invalid');
    }
  }
}
