import LabelInteractor, { ILabelInteractor } from '../interactors/LabelInteractor';
import { ILabel } from '../entities/Label';

export interface ILabelExposer {
  initLabel: () => ILabel;
  labels: Promise<ILabel[]>;
  createLabel: (data: ILabel) => Promise<ILabel>;
  saveLabel: (data: ILabel) => Promise<ILabel>;
}

class LabelExposer implements ILabelExposer {
  constructor(private _interactor: ILabelInteractor) {}

  public initLabel(): ILabel {
    return this._interactor.initLabel();
  }

  public get labels(): Promise<ILabel[]> {
    return this._interactor.getLabels();
  }

  public createLabel(data: ILabel): Promise<ILabel> {
    return this._interactor.createLabel(data);
  }

  public saveLabel(data: ILabel): Promise<ILabel> {
    return this._interactor.saveLabel(data);
  }
}

/* tslint:disable:no-unused */
export const labelExposer: ILabelExposer = new LabelExposer(LabelInteractor.getInstance());
