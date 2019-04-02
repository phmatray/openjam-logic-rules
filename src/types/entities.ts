export type ProfileType = 'artist' | 'listener';
export type TrackType = 'original' | 'remix';
export type PostType = 'text' | 'track';

export interface Comment {
  id?: string;
  type?: string;
  text?: string;
  by?: string | Profile;
  post?: string | Post;
  track?: string | Track;
  trackAt?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Label {
  id?: string;
  name?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  tracks?: string[] | Track[];
  profiles?: string[] | Profile[];
}

export interface Like {
  id?: string;
  emotion?: string;
  intensity?: number;
  createdAt?: Date;
  updatedAt?: Date;
  profile?: string | Profile;
  track?: string | Track;
}

export interface Media {
  id?: string;
  name?: string;
  sha256?: string;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: string;
  url?: string;
  provider?: string;
  related?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Post {
  id?: string;
  type?: string;
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
  profile?: string | Profile;
  likes?: string[] | Like[];
  comments?: string[] | Comment[];
  track?: string | Track;
}

export interface Profile {
  id?: string;
  handle?: string;
  type?: ProfileType;
  labels?: string[] | Label[];
  name?: string;
  styles?: string[] | Style[];
  latitude?: number;
  longitude?: number;
  bio?: string;
  bioShort?: string;
  isPrivate?: boolean;
  city?: string;
  state?: string;
  country?: string;
  createdAt?: Date;
  updatedAt?: Date;
  user?: string | User;
  coverPicture?: string | Media;
  profilePicture?: string | Media;
  subscriptions?: string[] | Profile[];
  subscribers?: string[] | Profile[];
  likes?: string[] | Like[];
  posts?: string[] | Post[];
  comments?: string[] | Comment[];
  tracks?: string[] | Track[];
}

export interface Style {
  id?: string;
  name?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  profiles?: string[] | Profile[];
}

export interface Track {
  id?: string;
  type?: TrackType;
  title?: string;
  edit?: string;
  explicit?: boolean;
  description?: string;
  profiles?: string[] | Profile[];
  createdAt?: Date;
  updatedAt?: Date;
  label?: string | Label;
  likes?: string[] | Like[];
  posts?: string[] | Post[];
  comments?: string[] | Comment[];
  audioUrl?: string;
  coverUrl?: string;
}

export interface User {
  id?: string;
  confirmed?: boolean;
  blocked?: boolean;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  provider?: string;
  role?: string;
  profiles?: string[] | Profile[];
}
