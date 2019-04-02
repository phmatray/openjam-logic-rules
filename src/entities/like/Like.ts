import * as Joi from 'joi';

import { Like, ObjectWithId, Profile, Track } from '../../types/entities';

export class LikeEntity implements Like {
  public id!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public emotion!: string;
  public intensity!: number;
  public profile?: string | Profile | undefined;
  public track?: string | Track | undefined;

  private validId = Joi.string();
  private validEmotion = Joi.string();
  private validIntensity = Joi.number()
    .min(0)
    .max(10);
  private validCreatedAt = Joi.date();
  private validUpdatedAt = Joi.date();
  private validProfile = Joi.string();
  private validTrack = Joi.string();

  /**
   * Joi Like Schema
   * @type {Joi.ObjectSchema}
   * @memberof Like
   */
  public likeSchema: Joi.ObjectSchema = Joi.object()
    .keys({
      id: this.validId,
      emotion: this.validEmotion,
      intensity: this.validIntensity,
      createdAt: this.validCreatedAt,
      updatedAt: this.validUpdatedAt,
      profile: this.validProfile,
      track: this.validTrack
    })
    .with('id', ['createdAt', 'updatedAt']);

  /**
   * Creates an instance of LikeEntity.
   * @param {Like} data
   * @memberof LikeEntity
   */
  constructor(data: Like) {
    this.copyData(data);
  }

  /**
   * Copy properties from an object to instance properties
   * @param {Like} data
   * @returns {LikeEntity}
   * @memberof Like
   */
  public copyData(data: Like): LikeEntity {
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
   * @returns {Like}
   * @memberof Like
   */
  public getRaw(): Like {
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
   * @param {Like} data
   * @returns {Joi.ValidationResult<Like>}
   * @memberof Like
   */
  public validate(data: Like): Joi.ValidationResult<Like> {
    return Joi.validate(data, this.likeSchema);
  }

  /**
   * Validates id property
   * @param {string} id
   * @returns {Joi.ValidationResult<string>}
   * @memberof Like
   */
  public validateId(id: string): Joi.ValidationResult<string> {
    return Joi.validate(id, this.validId);
  }

  /**
   * Validates emotion property
   * @param {string} emotion
   * @returns {Joi.ValidationResult<string>}
   * @memberof Like
   */
  public validateEmotion(emotion: string): Joi.ValidationResult<string> {
    return Joi.validate(emotion, this.validEmotion);
  }

  /**
   * Validates intensity property
   * @param {number} intensity
   * @returns {Joi.ValidationResult<number>}
   * @memberof Like
   */
  public validateIntensity(intensity: number): Joi.ValidationResult<number> {
    return Joi.validate(intensity, this.validIntensity);
  }

  /**
   * Validates createdAt property
   * @param {Date} createdAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Like
   */
  public validateCreatedAt(createdAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(createdAt, this.validCreatedAt);
  }

  /**
   * Validates updatedAt property
   * @param {Date} updatedAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Like
   */
  public validateUpdatedAt(updatedAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(updatedAt, this.validUpdatedAt);
  }

  /**
   * Validates profile property
   * @param {string | ObjectWithId} profile
   * @returns {Joi.ValidationResult<string>}
   * @memberof Like
   */
  public validateProfile(profile: string | ObjectWithId): Joi.ValidationResult<string> {
    const id = typeof profile !== 'string' && profile.id ? profile.id : (profile as string);
    return Joi.validate(id, this.validProfile);
  }

  /**
   * Validates track property
   * @param {string | ObjectWithId} track
   * @returns {Joi.ValidationResult<string>}
   * @memberof Like
   */
  public validateTrack(track: string | ObjectWithId): Joi.ValidationResult<string> {
    const id = typeof track !== 'string' && track.id ? track.id : (track as string);
    return Joi.validate(id, this.validTrack);
  }
}
