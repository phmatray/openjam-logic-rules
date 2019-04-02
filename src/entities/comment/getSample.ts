import { Comment } from '../../types/entities';

const now = new Date(Date.now());

export const commentData: Comment = {
  id: 'idComment1',
  type: 'post',
  text: 'This is a comment',
  by: 'idProfile1',
  post: 'idPost1',
  track: 'idTrack1',
  trackAt: 60000, // 1 minute
  createdAt: now,
  updatedAt: now
};
