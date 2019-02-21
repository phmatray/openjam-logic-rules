interface IImage {
  width: number;
  height: number;
  url: string;
}

export interface IArtist {
  _id: string;
  type: 'artist';
  name: string;
  images?: IImage[];
  genres?: string[];
  copyData?: (data: any) => void;
  isValidName?: (additionalValidator?: (value: string) => boolean) => boolean;
  isValid?: () => boolean;
}

export class Artist implements IArtist {
  public _id: string = '';
  public type: 'artist' = 'artist';
  public name: string = '';
  public images: IImage[] = [];
  public genres: string[] = [];

  /**
   * Private properties to store validation states
   * when the application validates fields separetely
   * and/or use additional validations
   */
  private _validName: boolean | undefined;

  /**
   * Returns if name property is valid based on the internal validator
   * and an optional extra validator
   * @memberof Artist
   * @param validator Additional validation function
   * @returns boolean
   */
  public isValidName(validator?: (value: string) => boolean): boolean {
    this._validName = this._validateName() && (!validator ? true : validator(this.name));
    return this._validName;
  }

  /**
   * Returns if the Artist object is valid
   * It should not use internal (private) validation methods
   * if previous property validation methods were used
   * @memberof Artist
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
   * @memberof Artist
   * @param data object
   */
  public copyData(data: any): void {
    const { id, type, name, images, genres } = data;

    this._id = id;
    this.type = type;
    this.name = name;
    this.images = images;
    this.genres = genres;
  }

  /**
   * Validates name property
   * It should be not empty and should not have more than 256 characters
   * @memberof Artist
   * @returns boolean
   */
  private _validateName(): boolean {
    return this.name.trim() !== '' && this.name.trim().length < 256;
  }
}
