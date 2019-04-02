import { Track } from '../../types/entities';

const now = new Date(Date.now());

export const trackData: Track = {
  id: 'idTrack1',
  type: 'original',
  title: 'Track Title',
  edit: 'original',
  explicit: false,
  description: 'This is a description',
  profiles: ['idProfile1'],
  createdAt: now,
  updatedAt: now,
  label: 'idLabel1',
  likes: ['idLike1', 'idLike2'],
  posts: ['idPost1', 'idpost2'],
  comments: ['idComment1', 'idComment2'],
  audioUrl: 'audiourl',
  coverUrl: 'coverurl'
};
