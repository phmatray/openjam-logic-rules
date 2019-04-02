import { Like } from '../../types/entities';

const now = new Date(Date.now());

export const likeData: Like = {
  id: 'idLike1',
  emotion: 'Haha',
  intensity: 5,
  createdAt: now,
  updatedAt: now,
  track: 'idTrack1',
  profile: 'idProfile1'
};
