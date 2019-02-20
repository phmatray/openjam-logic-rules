import { artistExposer, IArtistExposer } from './exposers/ArtistExposer';
import { trackExposer, ITrackExposer } from './exposers/TrackExposer';
import { postExposer, IPostExposer } from './exposers/PostExposer';

const baseURL = 'http://localhost:5000';

interface IOpenJam {
  artistExposer: IArtistExposer;
  trackExposer: ITrackExposer;
  postExposer: IPostExposer;
}

class OpenJam implements IOpenJam {
  constructor(private _baseUrl = baseURL) {}

  get artistExposer() {
    return artistExposer;
  }

  get trackExposer() {
    return trackExposer;
  }

  get postExposer() {
    return postExposer;
  }

  public getArtists = () => artistExposer.artists;
  public getTracks = () => trackExposer.tracks;
}

export { IArtist } from './entities/Artist';
export { ITrack } from './entities/Track';
export { IPost } from './entities/Post';

export { IOpenJam, IArtistExposer, ITrackExposer, IPostExposer };

export default OpenJam;
