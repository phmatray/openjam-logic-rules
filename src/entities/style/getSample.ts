import { Style } from '../../types/entities';

const now = new Date(Date.now());

export const styleData: Style = {
  id: 'idStyle1',
  name: 'Electro',
  description: 'This is a style',
  createdAt: now,
  updatedAt: now,
  profiles: ['idProfile1', 'idProfile2']
};
