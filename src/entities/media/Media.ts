import * as Joi from 'joi';

import { Media } from '../../types/entities';

export class MediaEntity implements Media {
  public id!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public name!: string;
  public sha256!: string;
  public hash!: string;
  public ext!: string;
  public mime!: string;
  public size!: string;
  public url!: string;
  public provider!: string;
  public related!: string[];

  private validId = Joi.string();
  private validName = Joi.string();
  private validSha256 = Joi.string();
  private validHash = Joi.string();
  private validExt = Joi.string();
  private validMime = Joi.string();
  private validSize = Joi.string();
  private validUrl = Joi.string();
  private validProvider = Joi.string();
  private validRelated = Joi.array();
  private validCreatedAt = Joi.date();
  private validUpdatedAt = Joi.date();

  /**
   * Joi Media Schema
   * @type {Joi.ObjectSchema}
   * @memberof Media
   */
  public mediaSchema: Joi.ObjectSchema = Joi.object()
    .keys({
      id: this.validId,
      name: this.validName,
      sha256: this.validSha256,
      hash: this.validHash,
      ext: this.validExt,
      mime: this.validMime,
      size: this.validSize,
      url: this.validUrl,
      provider: this.validProvider,
      related: this.validRelated,
      createdAt: this.validCreatedAt,
      updatedAt: this.validUpdatedAt
    })
    .with('id', ['createdAt', 'updatedAt']);

  /**
   * Creates an instance of MediaEntity.
   * @param {Media} data
   * @memberof MediaEntity
   */
  constructor(data: Media) {
    this.copyData(data);
  }

  /**
   * Copy properties from an object to instance properties
   * @param {Media} data
   * @returns {MediaEntity}
   * @memberof Media
   */
  public copyData(data: Media): MediaEntity {
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
   * @returns {Media}
   * @memberof Media
   */
  public getRaw(): Media {
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
   * @param {Media} data
   * @returns {Joi.ValidationResult<Media>}
   * @memberof Media
   */
  public validate(data: Media): Joi.ValidationResult<Media> {
    return Joi.validate(data, this.mediaSchema);
  }

  /**
   * Validates id property
   * @param {string} id
   * @returns {Joi.ValidationResult<string>}
   * @memberof Media
   */
  public validateId(id: string): Joi.ValidationResult<string> {
    return Joi.validate(id, this.validId);
  }

  /**
   * Validates name property
   * @param {string} name
   * @returns {Joi.ValidationResult<string>}
   * @memberof Media
   */
  public validateName(name: string): Joi.ValidationResult<string> {
    return Joi.validate(name, this.validName);
  }

  /**
   * Validates sha256 property
   * @param {string} sha256
   * @returns {Joi.ValidationResult<string>}
   * @memberof Media
   */
  public validateSha256(sha256: string): Joi.ValidationResult<string> {
    return Joi.validate(sha256, this.validSha256);
  }

  /**
   * Validates hash property
   * @param {string} hash
   * @returns {Joi.ValidationResult<string>}
   * @memberof Media
   */
  public validateHash(hash: string): Joi.ValidationResult<string> {
    return Joi.validate(hash, this.validHash);
  }

  /**
   * Validates ext property
   * @param {string} ext
   * @returns {Joi.ValidationResult<string>}
   * @memberof Media
   */
  public validateExt(ext: string): Joi.ValidationResult<string> {
    return Joi.validate(ext, this.validExt);
  }

  /**
   * Validates mime property
   * @param {string} mime
   * @returns {Joi.ValidationResult<string>}
   * @memberof Media
   */
  public validateMime(mime: string): Joi.ValidationResult<string> {
    return Joi.validate(mime, this.validMime);
  }

  /**
   * Validates size property
   * @param {string} size
   * @returns {Joi.ValidationResult<string>}
   * @memberof Media
   */
  public validateSize(size: string): Joi.ValidationResult<string> {
    return Joi.validate(size, this.validSize);
  }

  /**
   * Validates url property
   * @param {string} url
   * @returns {Joi.ValidationResult<string>}
   * @memberof Media
   */
  public validateUrl(url: string): Joi.ValidationResult<string> {
    return Joi.validate(url, this.validUrl);
  }

  /**
   * Validates provider property
   * @param {string} provider
   * @returns {Joi.ValidationResult<string>}
   * @memberof Media
   */
  public validateProvider(provider: string): Joi.ValidationResult<string> {
    return Joi.validate(provider, this.validProvider);
  }

  /**
   * Validates related property
   * @param {string[]} related
   * @returns {Joi.ValidationResult<string[]>}
   * @memberof Media
   */
  public validateRelated(related: string[]): Joi.ValidationResult<string[]> {
    return Joi.validate(related, this.validRelated);
  }

  /**
   * Validates createdAt property
   * @param {Date} createdAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Media
   */
  public validateCreatedAt(createdAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(createdAt, this.validCreatedAt);
  }

  /**
   * Validates updatedAt property
   * @param {Date} updatedAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Media
   */
  public validateUpdatedAt(updatedAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(updatedAt, this.validUpdatedAt);
  }
}
