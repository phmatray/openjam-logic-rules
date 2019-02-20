export type TrackType = 'track';
export type TrackType2 = 'original' | 'remix';

export interface ICoverUrl {
  w200: string;
  w400: string;
  w800: string;
}

export interface ITrackMeta {
  description?: string;
  lyrics?: string;
}

export interface ITrack {
  id: string;
  type: TrackType;
  type2: TrackType2;
  title: string;
  edit?: string;
  audioUrl: string;
  coverUrl: ICoverUrl;
  licenceUrl?: string;
  // label: ILabel;
  meta?: ITrackMeta;
  explicit?: boolean;
  popularity?: number;
  duration?: number;
  copyData?: (data: any) => void;
  isValidTitle?: (additionalValidator?: (value: string) => boolean) => boolean;
  isValidPopularity?: (additionalValidator?: (value: number) => boolean) => boolean;
  isValid?: () => boolean;
}

export class Track implements ITrack {
  public id: string = '';
  public type: TrackType = 'track';
  public type2: TrackType2 = 'original';
  public title: string = '';
  public edit: string = '';
  public audioUrl: string = '';
  public coverUrl: ICoverUrl = { w200: '', w400: '', w800: '' };
  public licenceUrl: string = '';
  public downloadable: boolean = false;
  public meta: ITrackMeta = {};
  public explicit: boolean = false;
  public popularity: number = 0;
  public duration: number = 0;

  /**
   * Private properties to store validation states
   * when the application validates fields separetely
   * and/or use additional validations
   */
  private _validTitle: boolean | undefined;
  private _validPopularity: boolean | undefined;

  /**
   * Returns if title property is valid based on the internal validator
   * and an optional extra validator
   * @memberof Track
   * @param validator Additional validation function
   * @returns boolean
   */
  public isValidTitle(validator?: (value: string) => boolean): boolean {
    this._validTitle = this._validateTitle() && (!validator ? true : validator(this.title));
    return this._validTitle;
  }

  /**
   * Returns if popularity property is valid based on the internal validator
   * and an optional extra validator
   * @memberof Track
   * @param validator Additional validation function
   * @returns boolean
   */
  public isValidPopularity(validator?: (value: number) => boolean): boolean {
    this._validPopularity =
      this._validatePopularity() && (!validator ? true : validator(this.popularity));
    return this._validPopularity;
  }

  // title: { type: String, required: true, min: 5, max: 50 },
  // audioUrl: { type: String, required: true },
  // downloadable: { type: Boolean, default: false },
  // popularity: { type: Number, min: 0, max: 100 },

  /**
   * Returns if the Track object is valid
   * It should not use internal (private) validation methods
   * if previous property validation methods were used
   * @memberof Track
   * @returns boolean
   */
  public isValid(): boolean {
    if (
      (this._validTitle && this._validPopularity) ||
      (this._validTitle && this._validPopularity === undefined && this._validatePopularity()) ||
      (this._validTitle === undefined && this._validateTitle() && this._validPopularity) ||
      (this._validTitle === undefined &&
        this._validPopularity === undefined &&
        this._validateTitle() &&
        this._validatePopularity())
    ) {
      return true;
    }

    return false;
  }

  /**
   * Copy properties from an object to instance properties
   * @memberof Track
   * @param data object
   */
  public copyData(data: any): void {
    const {
      id,
      type,
      type2,
      title,
      edit,
      audioUrl,
      coverUrl,
      licenceUrl,
      downloadable,
      meta,
      explicit,
      popularity,
      duration
    } = data;

    this.id = id;
    this.type = type;
    this.type2 = type2;
    this.title = title;
    this.edit = edit;
    this.audioUrl = audioUrl;
    this.coverUrl = coverUrl;
    this.licenceUrl = licenceUrl;
    this.downloadable = downloadable;
    this.meta = meta;
    this.explicit = explicit;
    this.popularity = popularity;
    this.duration = duration;
  }

  /**
   * Validates title property
   * It should be not empty and should not have more than 256 characters
   * @memberof Track
   * @returns boolean
   */
  private _validateTitle(): boolean {
    return this.title.trim() !== '' && this.title.trim().length < 256;
  }

  /**
   * Validates popularity property
   * It should be between 0 and 100
   * @memberof Track
   * @returns boolean
   */
  private _validatePopularity(): boolean {
    return this.popularity >= 0 && this.popularity <= 100;
  }
}
