import { ILabel, Label } from '../entities/Label';
import LabelInteractor, { ILabelInteractor } from './LabelInteractor';
import { LabelService } from '../services/LabelService';

jest.mock('../services/LabelService');

describe('LabelInteractor', () => {
  let interactor: ILabelInteractor = LabelInteractor.getInstance();
  const getLabels = LabelService.prototype.getLabels;
  const createLabel = LabelService.prototype.createLabel;

  beforeEach(() => {
    LabelService.prototype.getLabels = getLabels;
    LabelService.prototype.createLabel = createLabel;
  });

  it('should return a new label object', () => {
    const label = interactor.initLabel() as Label;

    expect(label.name).toBe('');
    expect(label.isValidName()).toBeFalsy();

    label.name = 'Valid name';
    expect(label.isValidName()).toBeTruthy();
  });

  it('should get a list of labels', async () => {
    LabelService.prototype.getLabels = jest.fn().mockImplementationOnce(() => {
      return getLabels();
    });

    const labels = await interactor.getLabels();

    const spy = jest.spyOn(LabelService.prototype, 'getLabels');

    expect(spy).toHaveBeenCalled();
    expect(labels.length).toBe(2);
    expect(labels[0].name).toContain('Lorem ipsum');

    spy.mockClear();
  });

  it('should return the existing labels list', async () => {
    LabelService.prototype.getLabels = jest.fn().mockImplementationOnce(() => {
      throw new Error();
    });
    const labels = await interactor.getLabels();

    const spy = jest.spyOn(LabelService.prototype, 'getLabels');

    expect(spy).not.toHaveBeenCalled();
    expect(labels.length).toBe(2);
    expect(labels[0].name).toContain('Lorem ipsum');

    spy.mockClear();
  });

  it('should reset the instance and throw an error while fetching labels', async () => {
    LabelInteractor.resetInstance();
    interactor = LabelInteractor.getInstance();
    LabelService.prototype.getLabels = jest.fn().mockImplementationOnce(() => {
      throw new Error();
    });

    let error;
    try {
      await interactor.getLabels();
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe('Error fetching labels');
  });

  it('should create a new label', async () => {
    const data: ILabel = new Label();
    data.name = 'Lorem ipsum dolor';
    data.type = 'label';

    const label = await interactor.createLabel(data);

    expect(label).toBeDefined();
    expect(label._id).toBe('id003');
    expect(label.name).toEqual(data.name);
    expect(label.type).toEqual(data.type);
  });

  it('should throw there is no label data', async () => {
    // tslint:disable-next-line: no-unused
    let label;
    let error;
    try {
      label = await interactor.createLabel(undefined);
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe('No label data provided');
  });

  it('should throw label data is invalid when creating label', async () => {
    const data: ILabel = new Label();
    data.type = 'label';

    // tslint:disable-next-line: no-unused
    let label;
    let error;
    try {
      label = await interactor.createLabel(data);
    } catch (err) {
      error = err;
    }

    expect(error.message).toBe('The label data is invalid');
  });

  it('should throw a service error when creating a label', async () => {
    LabelService.prototype.createLabel = jest.fn().mockImplementationOnce(() => {
      throw new Error();
    });
    let error;
    const data: ILabel = new Label();
    data.name = 'Lorem ipsum dolor';
    data.type = 'label';

    try {
      await interactor.createLabel(data);
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.message).toBe('Server error when trying to create the label');
  });

  it('should save a new label', async () => {
    const data: ILabel = new Label();
    data._id = 'id003';
    data.type = 'label';
    data.name = 'Lorem ipsum';

    const label = await interactor.saveLabel(data);

    expect(label).toBeDefined();
    expect(label._id).toBe('id003');
    expect(label.name).toEqual(data.name);
  });

  it('should throw a service error when saving a label', async () => {
    const data: ILabel = new Label();
    data._id = 'id1';
    data.type = 'label';
    data.name = 'Lorem ipsum';

    let error;
    try {
      await interactor.saveLabel(data);
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.message).toBe('Server error when trying to save the label');
  });
});
