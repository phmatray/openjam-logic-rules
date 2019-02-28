import * as Joi from 'joi';

import { IProfile } from './Profile';

export interface IStyle {
  id?: string;
  name?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  profiles?: string[] | IProfile[];
}

export interface IStyleEntity extends IStyle {
  styleSchema: Joi.ObjectSchema;
  copyData: (data: IStyle) => IStyleEntity;
  getRaw: () => IStyle;
  validate: (data: IStyle) => Joi.ValidationResult<IStyle>;
  validateId: (id: string) => Joi.ValidationResult<string>;
  validateName: (name: string) => Joi.ValidationResult<string>;
  validateDescription: (description: string) => Joi.ValidationResult<string>;
  validateCreatedAt: (createdAt: Date) => Joi.ValidationResult<Date>;
  validateUpdatedAt: (updatedAt: Date) => Joi.ValidationResult<Date>;
  validateProfiles: (
    profiles: string[] | IProfile[]
  ) => Joi.ValidationResult<string[] | IProfile[]>;
}

export class Style implements IStyleEntity {
  public id?: string | undefined;
  public name?: string | undefined;
  public description?: string | undefined;
  public createdAt?: Date | undefined;
  public updatedAt?: Date | undefined;
  public profiles?: string[] | IProfile[] | undefined;

  private _validId = Joi.string();
  private _validName = Joi.string()
    .alphanum()
    .min(2)
    .max(50)
    .required();
  private _validDescription = Joi.string()
    .alphanum()
    .max(2000);
  private _validCreatedAt = Joi.date();
  private _validUpdatedAt = Joi.date();
  private _validProfiles = Joi.array();

  /**
   * Joi Style Schema
   * @type {Joi.ObjectSchema}
   * @memberof Style
   */
  public styleSchema: Joi.ObjectSchema = Joi.object()
    .keys({
      id: this._validId,
      name: this._validName,
      description: this._validDescription,
      createdAt: this._validCreatedAt,
      updatedAt: this._validUpdatedAt,
      profiles: this._validProfiles
    })
    .with('id', ['createdAt', 'updatedAt']);

  /**
   * Copy properties from an object to instance properties
   * @param {IStyle} data
   * @returns {IStyleEntity}
   * @memberof Style
   */
  public copyData(data: IStyle): IStyleEntity {
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
   * @returns {IStyle}
   * @memberof Style
   */
  public getRaw(): IStyle {
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
   * @param {IStyle} data
   * @returns {Joi.ValidationResult<IStyle>}
   * @memberof Style
   */
  public validate(data: IStyle): Joi.ValidationResult<IStyle> {
    return Joi.validate(data, this.styleSchema);
  }

  /**
   * Validates id property
   * @param {string} id
   * @returns {Joi.ValidationResult<string>}
   * @memberof Style
   */
  public validateId(id: string): Joi.ValidationResult<string> {
    return Joi.validate(id, this._validId);
  }

  /**
   * Validates name property
   * @param {string} name
   * @returns {Joi.ValidationResult<string>}
   * @memberof Style
   */
  public validateName(name: string): Joi.ValidationResult<string> {
    return Joi.validate(name, this._validName);
  }

  /**
   * Validates description property
   * @param {string} description
   * @returns {Joi.ValidationResult<string>}
   * @memberof Style
   */
  public validateDescription(description: string): Joi.ValidationResult<string> {
    return Joi.validate(description, this._validDescription);
  }

  /**
   * Validates createdAt property
   * @param {Date} createdAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Style
   */
  public validateCreatedAt(createdAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(createdAt, this._validCreatedAt);
  }

  /**
   * Validates updatedAt property
   * @param {Date} updatedAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Style
   */
  public validateUpdatedAt(updatedAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(updatedAt, this._validUpdatedAt);
  }

  /**
   * Validates profiles property
   * @param {string[] | IProfile[]} profiles
   * @returns {Joi.ValidationResult<string[] | IProfile[]>}
   * @memberof Style
   */
  public validateProfiles(
    profiles: string[] | IProfile[]
  ): Joi.ValidationResult<string[] | IProfile[]> {
    return Joi.validate(profiles, this._validProfiles);
  }
}
