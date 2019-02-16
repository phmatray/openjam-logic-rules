/* tslint:disable:no-unused */
import { IArtist } from '../../entities/Artist';

export class ArtistService {
  public async getArtists(): Promise<IArtist[]> {
    return [
      {
        id: 'id001',
        name: 'Lorem ipsum',
        type: 'artist',
        genres: ['electro', 'rock']
      },
      {
        id: 'id002',
        name: 'Lorem ipsum dolor',
        type: 'artist',
        genres: ['electro', 'psytrance']
      }
    ];
  }

  public async createArtist(data: IArtist): Promise<IArtist> {
    return {
      ...data,
      id: 'id003'
    };
  }

  public async saveArtist(data: IArtist): Promise<IArtist> {
    if (data.id !== 'id003') {
      throw new Error();
    }
    return {
      ...data,
      id: 'id003'
    };
  }
}
