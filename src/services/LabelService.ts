import { httpClient } from '../common/HttpClient';
import { queryBuilder } from '../common/QueryBuilder';
import { ILabel } from '../entities/Label';
import { IResponse } from './base/types';

const collectionName = 'label';

export interface ILabelService {
  getLabel: (id: string) => Promise<ILabel>;
  getLabels: () => Promise<ILabel[]>;
  createLabel: (data: ILabel) => Promise<ILabel>;
  saveLabel: (data: ILabel) => Promise<ILabel>;
}

export class LabelService implements ILabelService {
  public async getLabel(id: string): Promise<ILabel> {
    const query = queryBuilder.buildQueryForSingle(collectionName, id);
    const response = await httpClient.get<ILabel>(query);
    return response;
  }

  public async getLabels(): Promise<ILabel[]> {
    const query = queryBuilder.buildQueryForCollection(collectionName);
    const response = await httpClient.get<IResponse<ILabel>>(query);
    return response.docs;
  }

  public async createLabel(data: ILabel): Promise<ILabel> {
    const { type, name } = data;
    const response = await httpClient.post<ILabel>('/label', {
      type,
      name
    });

    return response;
  }

  public async saveLabel(data: ILabel): Promise<ILabel> {
    const { _id: id, type, name } = data;
    const response = await httpClient.patch<ILabel>(`/label/${id}`, {
      id,
      type,
      name
    });

    return response;
  }
}
