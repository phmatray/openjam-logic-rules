import { artistExposer, IArtistExposer } from './exposers/ArtistExposer';
import { labelExposer, ILabelExposer } from './exposers/LabelExposer';
import { trackExposer, ITrackExposer } from './exposers/TrackExposer';
import { postExposer, IPostExposer } from './exposers/PostExposer';

const baseURL = 'http://localhost:5000';

interface IOpenJam {
  artistExposer: IArtistExposer;
  labelExposer: ILabelExposer;
  trackExposer: ITrackExposer;
  postExposer: IPostExposer;
}

class OpenJam implements IOpenJam {
  constructor(private _baseUrl = baseURL) {}

  get artistExposer() {
    return artistExposer;
  }

  get labelExposer() {
    return labelExposer;
  }

  get trackExposer() {
    return trackExposer;
  }

  get postExposer() {
    return postExposer;
  }

  public getArtists = () => artistExposer.artists;
  public getLabels = () => labelExposer.labels;
  public getTracks = () => trackExposer.tracks;
}

export { IArtist } from './entities/Artist';
export { ILabel } from './entities/Label';
export { ITrack } from './entities/Track';
export { IPost } from './entities/Post';

export { IOpenJam, IArtistExposer, ILabelExposer, ITrackExposer, IPostExposer };

export default OpenJam;
