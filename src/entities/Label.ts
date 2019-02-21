export interface ILabel {
  _id: string;
  type: 'label';
  name: string;
  copyData?: (data: any) => void;
  isValidName?: (additionalValidator?: (value: string) => boolean) => boolean;
  isValid?: () => boolean;
}

export class Label implements ILabel {
  public _id: string = '';
  public type: 'label' = 'label';
  public name: string = '';

  /**
   * Private properties to store validation states
   * when the application validates fields separetely
   * and/or use additional validations
   */
  private _validName: boolean | undefined;

  /**
   * Returns if name property is valid based on the internal validator
   * and an optional extra validator
   * @memberof Label
   * @param validator Additional validation function
   * @returns boolean
   */
  public isValidName(validator?: (value: string) => boolean): boolean {
    this._validName = this._validateName() && (!validator ? true : validator(this.name));
    return this._validName;
  }

  /**
   * Returns if the Label object is valid
   * It should not use internal (private) validation methods
   * if previous property validation methods were used
   * @memberof Label
   * @returns boolean
   */
  public isValid(): boolean {
    if (this._validName || (this._validName === undefined && this._validateName())) {
      return true;
    }

    return false;
  }

  /**
   * Copy propriesties from an object to
   * instance properties
   * @memberof Label
   * @param data object
   */
  public copyData(data: any): void {
    const { id, type, name, images, genres } = data;

    this._id = id;
    this.type = type;
    this.name = name;
  }

  /**
   * Validates name property
   * It should be not empty and should not have more than 256 characters
   * @memberof Label
   * @returns boolean
   */
  private _validateName(): boolean {
    const name = this.name.trim();
    return name !== '' && name.length >= 2 && name.length <= 30;
  }
}
