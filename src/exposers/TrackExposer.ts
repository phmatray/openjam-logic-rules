import TrackInteractor, { ITrackInteractor } from '../interactors/TrackInteractor';
import { ITrack } from '../entities/Track';

export interface ITrackExposer {
  initTrack: () => ITrack;
  tracks: Promise<ITrack[]>;
  createTrack: (data: ITrack) => Promise<ITrack>;
  saveTrack: (data: ITrack) => Promise<ITrack>;
}

class TrackExposer implements ITrackExposer {
  constructor(private _interactor: ITrackInteractor) {}

  public initTrack(): ITrack {
    return this._interactor.initTrack();
  }

  public get tracks(): Promise<ITrack[]> {
    return this._interactor.getTracks();
  }

  public createTrack(data: ITrack): Promise<ITrack> {
    return this._interactor.createTrack(data);
  }

  public saveTrack(data: ITrack): Promise<ITrack> {
    return this._interactor.saveTrack(data);
  }
}

/* tslint:disable:no-unused */
export const trackExposer: ITrackExposer = new TrackExposer(TrackInteractor.getInstance());
