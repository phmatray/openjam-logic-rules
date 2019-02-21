import { httpClient } from '../common/HttpClient';
import { queryBuilder } from '../common/QueryBuilder';
import { ITrack } from '../entities/Track';
import { IResponse } from './base/types';

const collectionName = 'track';

export interface ITrackService {
  getTrack: (id: string) => Promise<ITrack>;
  getTracks: () => Promise<ITrack[]>;
  createTrack: (data: ITrack) => Promise<ITrack>;
  saveTrack: (data: ITrack) => Promise<ITrack>;
}

export class TrackService implements ITrackService {
  public async getTrack(id: string): Promise<ITrack> {
    const query = queryBuilder.buildQueryForSingle(collectionName, id);
    const response = await httpClient.get<ITrack>(query);
    return response;
  }

  public async getTracks(): Promise<ITrack[]> {
    const query = queryBuilder.buildQueryForCollection(collectionName);
    const response = await httpClient.get<IResponse<ITrack>>(query);
    return response.docs;
  }

  public async createTrack(data: ITrack): Promise<ITrack> {
    const { type, type2, title, audioUrl, coverUrl } = data;
    const response = await httpClient.post<ITrack>('/track', {
      type,
      type2,
      title,
      audioUrl,
      coverUrl
    });

    return response;
  }

  public async saveTrack(data: ITrack): Promise<ITrack> {
    const { _id: id, type, type2, title, audioUrl, coverUrl } = data;
    const response = await httpClient.patch<ITrack>(`/track/${id}`, {
      id,
      type,
      type2,
      title,
      audioUrl,
      coverUrl
    });

    return response;
  }
}
