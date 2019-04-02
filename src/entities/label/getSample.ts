import { Label } from '../../types/entities';

const now = new Date(Date.now());

export const labelData: Label = {
  id: 'idLabel1',
  name: 'LabelName',
  description: 'This is a label',
  createdAt: now,
  updatedAt: now,
  tracks: ['idTrack1', 'idTrack2'],
  profiles: ['idProfile1', 'idProfile2']
};
