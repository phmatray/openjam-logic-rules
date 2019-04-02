import * as Joi from 'joi';

import { Profile, Style } from '../types/entities';

export class StyleEntity {
  public id?: string | undefined;
  public name?: string | undefined;
  public description?: string | undefined;
  public createdAt?: Date | undefined;
  public updatedAt?: Date | undefined;
  public profiles?: string[] | Profile[] | undefined;

  private validId = Joi.string();
  private validName = Joi.string()
    .min(2)
    .max(50)
    .required();
  private validDescription = Joi.string().max(2000);
  private validCreatedAt = Joi.date();
  private validUpdatedAt = Joi.date();
  private validProfiles = Joi.array();

  /**
   * Joi Style Schema
   * @type {Joi.ObjectSchema}
   * @memberof Style
   */
  public styleSchema: Joi.ObjectSchema = Joi.object()
    .keys({
      id: this.validId,
      name: this.validName,
      description: this.validDescription,
      createdAt: this.validCreatedAt,
      updatedAt: this.validUpdatedAt,
      profiles: this.validProfiles
    })
    .with('id', ['createdAt', 'updatedAt']);

  /**
   * Copy properties from an object to instance properties
   * @param {Style} data
   * @returns {StyleEntity}
   * @memberof Style
   */
  public copyData(data: Style): StyleEntity {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.profiles = data.profiles;

    return this;
  }

  /**
   * Get the raw data of the object
   * @returns {Style}
   * @memberof Style
   */
  public getRaw(): Style {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      profiles: this.profiles
    };
  }

  /**
   * Returns if the Style object is valid
   * @param {Style} data
   * @returns {Joi.ValidationResult<Style>}
   * @memberof Style
   */
  public validate(data: Style): Joi.ValidationResult<Style> {
    return Joi.validate(data, this.styleSchema);
  }

  /**
   * Validates id property
   * @param {string} id
   * @returns {Joi.ValidationResult<string>}
   * @memberof Style
   */
  public validateId(id: string): Joi.ValidationResult<string> {
    return Joi.validate(id, this.validId);
  }

  /**
   * Validates name property
   * @param {string} name
   * @returns {Joi.ValidationResult<string>}
   * @memberof Style
   */
  public validateName(name: string): Joi.ValidationResult<string> {
    return Joi.validate(name, this.validName);
  }

  /**
   * Validates description property
   * @param {string} description
   * @returns {Joi.ValidationResult<string>}
   * @memberof Style
   */
  public validateDescription(description: string): Joi.ValidationResult<string> {
    return Joi.validate(description, this.validDescription);
  }

  /**
   * Validates createdAt property
   * @param {Date} createdAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Style
   */
  public validateCreatedAt(createdAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(createdAt, this.validCreatedAt);
  }

  /**
   * Validates updatedAt property
   * @param {Date} updatedAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Style
   */
  public validateUpdatedAt(updatedAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(updatedAt, this.validUpdatedAt);
  }

  /**
   * Validates profiles property
   * @param {string[] | Profile[]} profiles
   * @returns {Joi.ValidationResult<string[] | Profile[]>}
   * @memberof Style
   */
  public validateProfiles(
    profiles: string[] | Profile[]
  ): Joi.ValidationResult<string[] | Profile[]> {
    return Joi.validate(profiles, this.validProfiles);
  }
}
