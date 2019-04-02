export type PostType = 'text' | 'track';
export type ProfileType = 'artist' | 'listener';
export type TrackType = 'original' | 'remix';

export interface ObjectWithId {
  id: string;
}

export interface ObjectWithDate {
  createdAt: Date;
  updatedAt: Date;
}

export interface CommentProps {
  type: string;
  text: string;
  trackAt?: number;
}

export interface CommentRelations {
  by?: string | Profile;
  post?: string | Post;
  track?: string | Track;
}

export interface Comment extends ObjectWithId, ObjectWithDate, CommentProps, CommentRelations {}

export interface LabelProps {
  name: string;
  description?: string;
}

export interface LabelRelations {
  tracks?: string[] | Track[];
  profiles?: string[] | Profile[];
}

export interface Label extends ObjectWithId, ObjectWithDate, LabelProps, LabelRelations {}

export interface LikeProps {
  emotion: string;
  intensity: number;
}

export interface LikeRelations {
  profile?: string | Profile;
  track?: string | Track;
}

export interface Like extends ObjectWithId, ObjectWithDate, LikeProps, LikeRelations {}

export interface MediaProps {
  name: string;
  sha256: string;
  hash: string;
  ext: string;
  mime: string;
  size: string;
  url: string;
  provider: string;
  related: string[];
}

export interface Media extends ObjectWithId, ObjectWithDate, MediaProps {}

export interface PostProps {
  type: PostType;
  content: string;
}

export interface PostRelations {
  profile?: string | Profile;
  likes?: string[] | Like[];
  comments?: string[] | Comment[];
  track?: string | Track;
}

export interface Post extends ObjectWithId, ObjectWithDate, PostProps, PostRelations {}

export interface ProfileProps {
  handle: string;
  type: ProfileType;
  name: string;
  isPrivate: boolean;
  latitude?: number;
  longitude?: number;
  bio?: string;
  bioShort?: string;
  city?: string;
  state?: string;
  country?: string;
}

export interface ProfileRelations {
  labels?: string[] | Label[];
  styles?: string[] | Style[];
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

export interface Profile extends ObjectWithId, ObjectWithDate, ProfileProps, ProfileRelations {}

export interface StyleProps {
  name: string;
  description?: string;
}

export interface StyleRelations {
  profiles?: string[] | Profile[];
}

export interface Style extends ObjectWithId, ObjectWithDate, StyleProps, StyleRelations {}

export interface TrackProps {
  type: TrackType;
  title: string;
  explicit: boolean;
  audioUrl: string;
  coverUrl: string;
  edit?: string;
  description?: string;
}

export interface TrackRelations {
  profiles?: string[] | Profile[];
  label?: string | Label;
  likes?: string[] | Like[];
  posts?: string[] | Post[];
  comments?: string[] | Comment[];
}

export interface Track extends ObjectWithId, ObjectWithDate, TrackProps, TrackRelations {}

export interface UserProps {
  confirmed: boolean;
  blocked: boolean;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  provider: string;
  role: string;
}

export interface UserRelations {
  profiles?: string[] | Profile[];
}

export interface User extends ObjectWithId, UserProps, UserRelations {}
