import * as Joi from 'joi';

import { IProfile } from './Profile';
import { ITrack } from './Track';

export interface ILike {
  id?: string;
  emotion?: string;
  intensity?: number;
  createdAt?: Date;
  updatedAt?: Date;
  profile?: string | IProfile;
  track?: string | ITrack;
}

export interface ILikeEntity extends ILike {
  likeSchema: Joi.ObjectSchema;
  copyData: (data: ILike) => ILikeEntity;
  getRaw: () => ILike;
  validate: (data: ILike) => Joi.ValidationResult<ILike>;
  validateId: (id: string) => Joi.ValidationResult<string>;
  validateEmotion: (emotion: string) => Joi.ValidationResult<string>;
  validateIntensity: (intensity: number) => Joi.ValidationResult<number>;
  validateCreatedAt: (createdAt: Date) => Joi.ValidationResult<Date>;
  validateUpdatedAt: (updatedAt: Date) => Joi.ValidationResult<Date>;
  validateProfile: (profile: string | IProfile) => Joi.ValidationResult<string>;
  validateTrack: (track: string | ITrack) => Joi.ValidationResult<string>;
}

export class Like implements ILikeEntity {
  public id?: string | undefined;
  public emotion?: string | undefined;
  public intensity?: number | undefined;
  public createdAt?: Date | undefined;
  public updatedAt?: Date | undefined;
  public profile?: string | IProfile | undefined;
  public track?: string | ITrack | undefined;

  private _validId = Joi.string();
  private _validEmotion = Joi.string();
  private _validIntensity = Joi.number()
    .min(0)
    .max(10);
  private _validCreatedAt = Joi.date();
  private _validUpdatedAt = Joi.date();
  private _validProfile = Joi.string();
  private _validTrack = Joi.string();

  /**
   * Joi Like Schema
   * @type {Joi.ObjectSchema}
   * @memberof Like
   */
  public likeSchema: Joi.ObjectSchema = Joi.object()
    .keys({
      id: this._validId,
      emotion: this._validEmotion,
      intensity: this._validIntensity,
      createdAt: this._validCreatedAt,
      updatedAt: this._validUpdatedAt,
      profile: this._validProfile,
      track: this._validTrack
    })
    .with('id', ['createdAt', 'updatedAt']);

  /**
   * Copy properties from an object to instance properties
   * @param {ILike} data
   * @returns {ILikeEntity}
   * @memberof Like
   */
  public copyData(data: ILike): ILikeEntity {
    this.id = data.id;
    this.emotion = data.emotion;
    this.intensity = data.intensity;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.profile = data.profile;
    this.track = data.track;

    return this;
  }

  /**
   * Get the raw data of the object
   * @returns {ILike}
   * @memberof Like
   */
  public getRaw(): ILike {
    return {
      id: this.id,
      emotion: this.emotion,
      intensity: this.intensity,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      profile: this.profile,
      track: this.track
    };
  }

  /**
   * Returns if the Like object is valid
   * @param {ILike} data
   * @returns {Joi.ValidationResult<ILike>}
   * @memberof Like
   */
  public validate(data: ILike): Joi.ValidationResult<ILike> {
    return Joi.validate(data, this.likeSchema);
  }

  /**
   * Validates id property
   * @param {string} id
   * @returns {Joi.ValidationResult<string>}
   * @memberof Like
   */
  public validateId(id: string): Joi.ValidationResult<string> {
    return Joi.validate(id, this._validId);
  }

  /**
   * Validates emotion property
   * @param {string} emotion
   * @returns {Joi.ValidationResult<string>}
   * @memberof Like
   */
  public validateEmotion(emotion: string): Joi.ValidationResult<string> {
    return Joi.validate(emotion, this._validEmotion);
  }

  /**
   * Validates intensity property
   * @param {number} intensity
   * @returns {Joi.ValidationResult<number>}
   * @memberof Like
   */
  public validateIntensity(intensity: number): Joi.ValidationResult<number> {
    return Joi.validate(intensity, this._validIntensity);
  }

  /**
   * Validates createdAt property
   * @param {Date} createdAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Like
   */
  public validateCreatedAt(createdAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(createdAt, this._validCreatedAt);
  }

  /**
   * Validates updatedAt property
   * @param {Date} updatedAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Like
   */
  public validateUpdatedAt(updatedAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(updatedAt, this._validUpdatedAt);
  }

  /**
   * Validates profile property
   * @param {string | IProfile} profile
   * @returns {Joi.ValidationResult<string>}
   * @memberof Like
   */
  public validateProfile(profile: string | IProfile): Joi.ValidationResult<string> {
    const id = typeof profile !== 'string' && profile.id ? profile.id : (profile as string);
    return Joi.validate(id, this._validProfile);
  }

  /**
   * Validates track property
   * @param {string | ITrack} track
   * @returns {Joi.ValidationResult<string>}
   * @memberof Like
   */
  public validateTrack(track: string | ITrack): Joi.ValidationResult<string> {
    const id = typeof track !== 'string' && track.id ? track.id : (track as string);
    return Joi.validate(id, this._validTrack);
  }
}
