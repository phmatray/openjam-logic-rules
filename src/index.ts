import { artistExposer, IArtistExposer } from './exposers/ArtistExposer';
import { postExposer, IPostExposer } from './exposers/PostExposer';

const baseURL = 'http://localhost:5000';
const axiosDefaultConfig = {
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
};

interface IOpenJam {
  artistExposer: IArtistExposer;
  postExposer: IPostExposer;
}

class OpenJam implements IOpenJam {
  constructor(private _baseUrl = baseURL) {}

  get artistExposer() {
    return artistExposer;
  }

  get postExposer() {
    return postExposer;
  }

  public getArtists = () => artistExposer.artists;
}

export { IArtist } from './entities/Artist';
export { IPost } from './entities/Post';

export { IOpenJam, IArtistExposer, IPostExposer };

export default OpenJam;
