/* tslint:disable:no-unused */
import { ITrack } from '../../entities/Track';

export class TrackService {
  public async getTracks(): Promise<ITrack[]> {
    return [
      {
        _id: 'id001',
        type: 'track',
        type2: 'original',
        title: 'Lorem ipsum',
        audioUrl: 'testurl',
        coverUrl: { w200: 'testurl', w400: 'testurl', w800: 'testurl' }
      },
      {
        _id: 'id002',
        type: 'track',
        type2: 'remix',
        edit: 'urban remix',
        title: 'Lorem ipsum dolor',
        audioUrl: 'testurl',
        coverUrl: { w200: 'testurl', w400: 'testurl', w800: 'testurl' }
      }
    ];
  }

  public async createTrack(data: ITrack): Promise<ITrack> {
    return {
      ...data,
      _id: 'id003'
    };
  }

  public async saveTrack(data: ITrack): Promise<ITrack> {
    if (data._id !== 'id003') {
      throw new Error();
    }
    return {
      ...data,
      _id: 'id003'
    };
  }
}
