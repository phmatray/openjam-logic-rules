/* tslint:disable:no-unused */
import { ILabel } from '../../entities/Label';

export class LabelService {
  public async getLabels(): Promise<ILabel[]> {
    return [
      {
        id: 'id001',
        name: 'Lorem ipsum',
        type: 'label'
      },
      {
        id: 'id002',
        name: 'Lorem ipsum dolor',
        type: 'label'
      }
    ];
  }

  public async createLabel(data: ILabel): Promise<ILabel> {
    return {
      ...data,
      id: 'id003'
    };
  }

  public async saveLabel(data: ILabel): Promise<ILabel> {
    if (data.id !== 'id003') {
      throw new Error();
    }
    return {
      ...data,
      id: 'id003'
    };
  }
}
