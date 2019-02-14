import ArtistInteractor, {
  IArtistInteractor
} from '../interactors/ArtistInteractor';
import { IArtist } from '../entities/Artist';

export interface IArtistExposer {
  initArtist: () => IArtist;
  artists: Promise<IArtist[]>;
  createArtist: (data: IArtist) => Promise<IArtist>;
  saveArtist: (data: IArtist) => Promise<IArtist>;
}

class ArtistExposer implements IArtistExposer {
  constructor(private _interactor: IArtistInteractor) {}

  public initArtist(): IArtist {
    return this._interactor.initArtist();
  }

  public get artists(): Promise<IArtist[]> {
    return this._interactor.getArtists();
  }

  public createArtist(data: IArtist): Promise<IArtist> {
    return this._interactor.createArtist(data);
  }

  public saveArtist(data: IArtist): Promise<IArtist> {
    return this._interactor.saveArtist(data);
  }
}

/* tslint:disable:no-unused */
export const artistExposer: IArtistExposer = new ArtistExposer(
  ArtistInteractor.getInstance()
);
