import * as Joi from 'joi';

import { Label, Profile, Track } from '../../types/entities';

export class LabelEntity implements Label {
  public id!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public name!: string;
  public description?: string | undefined;
  public tracks?: string[] | Track[] | undefined;
  public profiles?: string[] | Profile[] | undefined;

  private validId = Joi.string();
  private validName = Joi.string();
  private validDescription = Joi.string();
  private validCreatedAt = Joi.date();
  private validUpdatedAt = Joi.date();
  private validTracks = Joi.array();
  private validProfiles = Joi.array();

  /**
   * Joi Label Schema
   * @type {Joi.ObjectSchema}
   * @memberof Label
   */
  public labelSchema: Joi.ObjectSchema = Joi.object()
    .keys({
      id: this.validId,
      name: this.validName,
      description: this.validDescription,
      createdAt: this.validCreatedAt,
      updatedAt: this.validUpdatedAt,
      tracks: this.validTracks,
      profiles: this.validProfiles
    })
    .with('id', ['createdAt', 'updatedAt']);

  /**
   * Creates an instance of LabelEntity.
   * @param {Label} data
   * @memberof LabelEntity
   */
  constructor(data: Label) {
    this.copyData(data);
  }

  /**
   * Copy properties from an object to instance properties
   * @param {Label} data
   * @returns {LabelEntity}
   * @memberof Label
   */
  public copyData(data: Label): LabelEntity {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.tracks = data.tracks;
    this.profiles = data.profiles;

    return this;
  }

  /**
   * Get the raw data of the object
   * @returns {Label}
   * @memberof Label
   */
  public getRaw(): Label {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      tracks: this.tracks,
      profiles: this.profiles
    };
  }

  /**
   * Returns if the Label object is valid
   * @param {Label} data
   * @returns {Joi.ValidationResult<Label>}
   * @memberof Label
   */
  public validate(data: Label): Joi.ValidationResult<Label> {
    return Joi.validate(data, this.labelSchema);
  }

  /**
   * Validates id property
   * @param {string} id
   * @returns {Joi.ValidationResult<string>}
   * @memberof Label
   */
  public validateId(id: string): Joi.ValidationResult<string> {
    return Joi.validate(id, this.validId);
  }

  /**
   * Validates name property
   * @param {string} name
   * @returns {Joi.ValidationResult<string>}
   * @memberof Label
   */
  public validateName(name: string): Joi.ValidationResult<string> {
    return Joi.validate(name, this.validName);
  }

  /**
   * Validates description property
   * @param {string} description
   * @returns {Joi.ValidationResult<string>}
   * @memberof Label
   */
  public validateDescription(description: string): Joi.ValidationResult<string> {
    return Joi.validate(description, this.validDescription);
  }

  /**
   * Validates createdAt property
   * @param {Date} createdAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Label
   */
  public validateCreatedAt(createdAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(createdAt, this.validCreatedAt);
  }

  /**
   * Validates updatedAt property
   * @param {Date} updatedAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Label
   */
  public validateUpdatedAt(updatedAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(updatedAt, this.validUpdatedAt);
  }

  /**
   * Validates tracks property
   * @param {string[] | Track[]} tracks
   * @returns {Joi.ValidationResult<string[] | Track[]>}
   * @memberof Label
   */
  public validateTracks(tracks: string[] | Track[]): Joi.ValidationResult<string[] | Track[]> {
    return Joi.validate(tracks, this.validTracks);
  }

  /**
   * Validates profiles property
   * @param {string[] | Profile[]} profiles
   * @returns {Joi.ValidationResult<string[] | Profile[]>}
   * @memberof Label
   */
  public validateProfiles(
    profiles: string[] | Profile[]
  ): Joi.ValidationResult<string[] | Profile[]> {
    return Joi.validate(profiles, this.validProfiles);
  }
}
