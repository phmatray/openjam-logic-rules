import { Post } from '../../types/entities';

const now = new Date(Date.now());

export const postData: Post = {
  id: 'idPost1',
  type: 'text',
  content: 'This is a post',
  createdAt: now,
  updatedAt: now,
  profile: 'idProfile1',
  likes: ['idLike1', 'idLike2'],
  comments: ['idComment1', 'idComment2'],
  track: 'idTrack1'
};
