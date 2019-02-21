import { Label } from './Label';

describe('Test Label entity', () => {
  const bigString =
    /* tslint:disable-next-line:max-line-length */
    'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla';
  let label: Label;

  beforeEach(() => {
    label = new Label();
  });

  it('should copy an object data into a Label instance', () => {
    const data = {
      id: 1,
      type: 'label',
      name: 'Copy'
    };
    label.copyData(data);

    expect(label._id).toBe(1);
    expect(label.type).toBe('label');
    expect(label.name).toBe('Copy');
  });

  it('should return name is invalid for empty string', () => {
    expect(label.isValidName()).toBeFalsy();
  });

  it('should return name is invalid using additional validator', () => {
    label.name = 'New';
    expect(
      label.isValidName(
        (name: string): boolean => {
          return name.length > 3;
        }
      )
    ).toBeFalsy();
  });

  it('should return name is invalid for long titles', () => {
    label.name = bigString;
    expect(label.isValidName()).toBeFalsy();
  });

  it('should return name is valid', () => {
    label.name = 'New label';
    expect(label.isValidName()).toBeTruthy();
  });

  it('should return name is valid using additional validation', () => {
    label.name = 'Lorem ipsum';
    expect(
      label.isValidName((name: string) => {
        return name.indexOf('dolor') < 0;
      })
    ).toBeTruthy();
  });

  it('should return label is invalid without previous validation', () => {
    expect(label.isValid()).toBeFalsy();
  });

  it('should return label is valid without previous validation', () => {
    label.name = 'Lorem ipsum dolor sit amet';

    expect(label.isValid()).toBeTruthy();
  });

  it('should return label is invalid with previous name validation', () => {
    label.name = 'Lorem ipsum dolor';

    expect(
      label.isValidName(
        (name: string): boolean => {
          return name.indexOf('dolor') < 0;
        }
      )
    ).toBeFalsy();

    expect(label.isValid()).toBeFalsy();
  });
});
