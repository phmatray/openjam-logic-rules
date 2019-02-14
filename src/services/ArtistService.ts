import { httpClient } from '../common/HttpClient';
import { queryBuilder } from '../common/QueryBuilder';
import { IArtist } from '../entities/Artist';
import { IResponse } from './base/types';

const collectionName = 'artist';

export interface IArtistService {
  getArtists: () => Promise<IArtist[]>;
  createArtist: (data: IArtist) => Promise<IArtist>;
  saveArtist: (data: IArtist) => Promise<IArtist>;
}

export class ArtistService implements IArtistService {
  public async getArtists(): Promise<IArtist[]> {
    const query = queryBuilder.getUrl(collectionName);
    const response = await httpClient.get<IResponse<IArtist>>(query);
    return response.docs;
  }

  public async createArtist(data: IArtist): Promise<IArtist> {
    const query = queryBuilder.getUrl(collectionName);
    const { type, name, images, genres } = data;
    const response = await httpClient.post<IArtist>(query, {
      type,
      name,
      images,
      genres
    });

    return response;
  }

  public async saveArtist(data: IArtist): Promise<IArtist> {
    const { id, type, name, images, genres } = data;
    const response = await httpClient.patch<IArtist>(`/artist/${id}`, {
      id,
      type,
      name,
      images,
      genres
    });

    return response;
  }
}
