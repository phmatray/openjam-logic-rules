import { IArtist, Artist } from '../entities/Artist';
import { IArtistService, ArtistService } from '../services/ArtistService';

export interface IArtistInteractor {
  initArtist: () => IArtist;
  getArtists: () => Promise<IArtist[]>;
  createArtist: (data: IArtist) => Promise<IArtist>;
  saveArtist: (data: IArtist) => Promise<IArtist>;
}

export default class ArtistInteractor implements IArtistInteractor {
  private static _instance: IArtistInteractor = new ArtistInteractor(new ArtistService());

  public static getInstance(): IArtistInteractor {
    return this._instance;
  }

  public static resetInstance(): void {
    this._instance = new ArtistInteractor(new ArtistService());
  }

  private _artists: IArtist[];
  private constructor(private _service: IArtistService) {}

  public initArtist(): IArtist {
    return new Artist();
  }

  public async getArtists(): Promise<IArtist[]> {
    if (this._artists !== undefined) {
      return this._artists;
    }

    let response;

    try {
      response = await this._service.getArtists();
    } catch (err) {
      throw new Error('Error fetching artists');
    }

    this._artists = response;
    return this._artists;
  }

  public async createArtist(data: IArtist): Promise<IArtist> {
    this._checkArtistData(data);
    let response;

    try {
      response = await this._service.createArtist(data);
    } catch (err) {
      throw new Error('Server error when trying to create the artist');
    }

    return response;
  }

  public async saveArtist(data: IArtist): Promise<IArtist> {
    this._checkArtistData(data);
    let response;

    try {
      response = await this._service.saveArtist(data);
    } catch (err) {
      throw new Error('Server error when trying to save the artist');
    }

    return response;
  }

  private _checkArtistData(data: IArtist): void {
    if (!data) {
      throw new Error('No artist data provided');
    }

    if (data.isValid && !data.isValid()) {
      throw new Error('The artist data is invalid');
    }
  }
}
