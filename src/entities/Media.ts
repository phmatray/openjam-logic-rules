import * as Joi from 'joi';

export interface IMedia {
  id?: string;
  name?: string;
  sha256?: string;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: string;
  url?: string;
  provider?: string;
  related?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IMediaEntity extends IMedia {
  mediaSchema: Joi.ObjectSchema;
  copyData: (data: IMedia) => IMediaEntity;
  getRaw: () => IMedia;
  validate: (data: IMedia) => Joi.ValidationResult<IMedia>;
  validateId: (id: string) => Joi.ValidationResult<string>;
  validateName: (name: string) => Joi.ValidationResult<string>;
  validateSha256: (sha256: string) => Joi.ValidationResult<string>;
  validateHash: (hash: string) => Joi.ValidationResult<string>;
  validateExt: (ext: string) => Joi.ValidationResult<string>;
  validateMime: (mime: string) => Joi.ValidationResult<string>;
  validateSize: (size: string) => Joi.ValidationResult<string>;
  validateUrl: (url: string) => Joi.ValidationResult<string>;
  validateProvider: (provider: string) => Joi.ValidationResult<string>;
  validateRelated: (related: string[]) => Joi.ValidationResult<string[]>;
  validateCreatedAt: (createdAt: Date) => Joi.ValidationResult<Date>;
  validateUpdatedAt: (updatedAt: Date) => Joi.ValidationResult<Date>;
}

export class Media implements IMediaEntity {
  public id?: string | undefined;
  public name?: string | undefined;
  public sha256?: string | undefined;
  public hash?: string | undefined;
  public ext?: string | undefined;
  public mime?: string | undefined;
  public size?: string | undefined;
  public url?: string | undefined;
  public provider?: string | undefined;
  public related?: string[] | undefined;
  public createdAt?: Date | undefined;
  public updatedAt?: Date | undefined;

  private _validId = Joi.string();
  private _validName = Joi.string();
  private _validSha256 = Joi.string();
  private _validHash = Joi.string();
  private _validExt = Joi.string();
  private _validMime = Joi.string();
  private _validSize = Joi.string();
  private _validUrl = Joi.string();
  private _validProvider = Joi.string();
  private _validRelated = Joi.array();
  private _validCreatedAt = Joi.date();
  private _validUpdatedAt = Joi.date();

  /**
   * Joi Media Schema
   * @type {Joi.ObjectSchema}
   * @memberof Media
   */
  public mediaSchema: Joi.ObjectSchema = Joi.object()
    .keys({
      id: this._validId,
      name: this._validName,
      sha256: this._validSha256,
      hash: this._validHash,
      ext: this._validExt,
      mime: this._validMime,
      size: this._validSize,
      url: this._validUrl,
      provider: this._validProvider,
      related: this._validRelated,
      createdAt: this._validCreatedAt,
      updatedAt: this._validUpdatedAt
    })
    .with('id', ['createdAt', 'updatedAt']);

  /**
   * Copy properties from an object to instance properties
   * @param {IMedia} data
   * @returns {IMediaEntity}
   * @memberof Media
   */
  public copyData(data: IMedia): IMediaEntity {
    this.id = data.id;
    this.name = data.name;
    this.sha256 = data.sha256;
    this.hash = data.hash;
    this.ext = data.ext;
    this.mime = data.mime;
    this.size = data.size;
    this.url = data.url;
    this.provider = data.provider;
    this.related = data.related;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;

    return this;
  }

  /**
   * Get the raw data of the object
   * @returns {IMedia}
   * @memberof Media
   */
  public getRaw(): IMedia {
    return {
      id: this.id,
      name: this.name,
      sha256: this.sha256,
      hash: this.hash,
      ext: this.ext,
      mime: this.mime,
      size: this.size,
      url: this.url,
      provider: this.provider,
      related: this.related,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }

  /**
   * Returns if the Media object is valid
   * @param {IMedia} data
   * @returns {Joi.ValidationResult<IMedia>}
   * @memberof Media
   */
  public validate(data: IMedia): Joi.ValidationResult<IMedia> {
    return Joi.validate(data, this.mediaSchema);
  }

  /**
   * Validates id property
   * @param {string} id
   * @returns {Joi.ValidationResult<string>}
   * @memberof Media
   */
  public validateId(id: string): Joi.ValidationResult<string> {
    return Joi.validate(id, this._validId);
  }

  /**
   * Validates name property
   * @param {string} name
   * @returns {Joi.ValidationResult<string>}
   * @memberof Media
   */
  public validateName(name: string): Joi.ValidationResult<string> {
    return Joi.validate(name, this._validName);
  }

  /**
   * Validates sha256 property
   * @param {string} sha256
   * @returns {Joi.ValidationResult<string>}
   * @memberof Media
   */
  public validateSha256(sha256: string): Joi.ValidationResult<string> {
    return Joi.validate(sha256, this._validSha256);
  }

  /**
   * Validates hash property
   * @param {string} hash
   * @returns {Joi.ValidationResult<string>}
   * @memberof Media
   */
  public validateHash(hash: string): Joi.ValidationResult<string> {
    return Joi.validate(hash, this._validHash);
  }

  /**
   * Validates ext property
   * @param {string} ext
   * @returns {Joi.ValidationResult<string>}
   * @memberof Media
   */
  public validateExt(ext: string): Joi.ValidationResult<string> {
    return Joi.validate(ext, this._validExt);
  }

  /**
   * Validates mime property
   * @param {string} mime
   * @returns {Joi.ValidationResult<string>}
   * @memberof Media
   */
  public validateMime(mime: string): Joi.ValidationResult<string> {
    return Joi.validate(mime, this._validMime);
  }

  /**
   * Validates size property
   * @param {string} size
   * @returns {Joi.ValidationResult<string>}
   * @memberof Media
   */
  public validateSize(size: string): Joi.ValidationResult<string> {
    return Joi.validate(size, this._validSize);
  }

  /**
   * Validates url property
   * @param {string} url
   * @returns {Joi.ValidationResult<string>}
   * @memberof Media
   */
  public validateUrl(url: string): Joi.ValidationResult<string> {
    return Joi.validate(url, this._validUrl);
  }

  /**
   * Validates provider property
   * @param {string} provider
   * @returns {Joi.ValidationResult<string>}
   * @memberof Media
   */
  public validateProvider(provider: string): Joi.ValidationResult<string> {
    return Joi.validate(provider, this._validProvider);
  }

  /**
   * Validates related property
   * @param {string[]} related
   * @returns {Joi.ValidationResult<string[]>}
   * @memberof Media
   */
  public validateRelated(related: string[]): Joi.ValidationResult<string[]> {
    return Joi.validate(related, this._validRelated);
  }

  /**
   * Validates createdAt property
   * @param {Date} createdAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Media
   */
  public validateCreatedAt(createdAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(createdAt, this._validCreatedAt);
  }

  /**
   * Validates updatedAt property
   * @param {Date} updatedAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Media
   */
  public validateUpdatedAt(updatedAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(updatedAt, this._validUpdatedAt);
  }
}
