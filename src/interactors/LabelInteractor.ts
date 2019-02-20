import { ILabel, Label } from '../entities/Label';
import { ILabelService, LabelService } from '../services/LabelService';

export interface ILabelInteractor {
  initLabel: () => ILabel;
  getLabels: () => Promise<ILabel[]>;
  createLabel: (data: ILabel) => Promise<ILabel>;
  saveLabel: (data: ILabel) => Promise<ILabel>;
}

export default class LabelInteractor implements ILabelInteractor {
  private static _instance: ILabelInteractor = new LabelInteractor(new LabelService());

  public static getInstance(): ILabelInteractor {
    return this._instance;
  }

  public static resetInstance(): void {
    this._instance = new LabelInteractor(new LabelService());
  }

  private _labels: ILabel[];
  private constructor(private _service: ILabelService) {}

  public initLabel(): ILabel {
    return new Label();
  }

  public async getLabels(): Promise<ILabel[]> {
    if (this._labels !== undefined) {
      return this._labels;
    }

    let response;

    try {
      response = await this._service.getLabels();
    } catch (err) {
      throw new Error('Error fetching labels');
    }

    this._labels = response;
    return this._labels;
  }

  public async createLabel(data: ILabel): Promise<ILabel> {
    this._checkLabelData(data);
    let response;

    try {
      response = await this._service.createLabel(data);
    } catch (err) {
      throw new Error('Server error when trying to create the label');
    }

    return response;
  }

  public async saveLabel(data: ILabel): Promise<ILabel> {
    this._checkLabelData(data);
    let response;

    try {
      response = await this._service.saveLabel(data);
    } catch (err) {
      throw new Error('Server error when trying to save the label');
    }

    return response;
  }

  private _checkLabelData(data: ILabel): void {
    if (!data) {
      throw new Error('No label data provided');
    }

    if (data.isValid && !data.isValid()) {
      throw new Error('The label data is invalid');
    }
  }
}
