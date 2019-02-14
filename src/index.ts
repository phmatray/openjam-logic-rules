import { artistExposer, IArtistExposer } from './exposers/ArtistExposer';
import { postExposer, IPostExposer } from './exposers/PostExposer';

const baseURL = 'http://localhost:5000';
const axiosDefaultConfig = {
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
};

interface ILogic {
  artistExposer: IArtistExposer;
  postExposer: IPostExposer;
}

class Logic implements ILogic {
  constructor(private _baseUrl = baseURL) {}

  get artistExposer() {
    return artistExposer;
  }

  get postExposer() {
    return postExposer;
  }
}

export { IArtist } from './entities/Artist';
export { IPost } from './entities/Post';

export { ILogic, IArtistExposer, IPostExposer };

export default Logic;
