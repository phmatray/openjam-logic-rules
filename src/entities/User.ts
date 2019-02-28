import * as Joi from 'joi';

import { IProfile } from './Profile';

export interface IUser {
  id?: string;
  confirmed?: boolean;
  blocked?: boolean;
  username?: string;
  email?: string;
  provider?: string;
  role?: string;
  profiles?: string[] | IProfile[];
}

export interface IUserEntity extends IUser {
  userSchema: Joi.ObjectSchema;
  copyData: (data: IUser) => IUserEntity;
  getRaw: () => IUser;
  validate: (data: IUser) => Joi.ValidationResult<IUser>;
  validateId: (id: string) => Joi.ValidationResult<string>;
  validateConfirmed: (confirmed: boolean) => Joi.ValidationResult<boolean>;
  validateBlocked: (blocked: boolean) => Joi.ValidationResult<boolean>;
  validateUsername: (username: string) => Joi.ValidationResult<string>;
  validateEmail: (email: string) => Joi.ValidationResult<string>;
  validateProvider: (provider: string) => Joi.ValidationResult<string>;
  validateRole: (role: string) => Joi.ValidationResult<string>;
  validateProfiles: (
    profiles: string[] | IProfile[]
  ) => Joi.ValidationResult<string[] | IProfile[]>;
}

export class User implements IUserEntity {
  public id?: string | undefined;
  public confirmed?: boolean | undefined;
  public blocked?: boolean | undefined;
  public username?: string | undefined;
  public email?: string | undefined;
  public provider?: string | undefined;
  public role?: string | undefined;
  public profiles?: string[] | IProfile[] | undefined;

  private _validId = Joi.string().required();
  private _validConfirmed = Joi.bool().required();
  private _validBlocked = Joi.bool().required();
  private _validUsername = Joi.string()
    .alphanum()
    .required();
  private _validEmail = Joi.string()
    .email()
    .required();
  private _validProvider = Joi.string().required();
  private _validRole = Joi.string().required();
  private _validProfiles = Joi.array();

  /**
   * Joi User Schema
   * @type {Joi.ObjectSchema}
   * @memberof User
   */
  public userSchema: Joi.ObjectSchema = Joi.object()
    .keys({
      id: this._validId,
      confirmed: this._validConfirmed,
      blocked: this._validBlocked,
      username: this._validUsername,
      email: this._validEmail,
      provider: this._validProvider,
      role: this._validRole,
      profiles: this._validProfiles
    })
    .with('id', ['createdAt', 'updatedAt']);

  /**
   * Copy properties from an object to instance properties
   * @param {IUser} data
   * @returns {IUserEntity}
   * @memberof User
   */
  public copyData(data: IUser): IUserEntity {
    this.id = data.id;
    this.confirmed = data.confirmed;
    this.blocked = data.blocked;
    this.username = data.username;
    this.email = data.email;
    this.provider = data.provider;
    this.role = data.role;
    this.profiles = data.profiles;

    return this;
  }

  /**
   * Get the raw data of the object
   * @returns {IUser}
   * @memberof User
   */
  public getRaw(): IUser {
    return {
      id: this.id,
      confirmed: this.confirmed,
      blocked: this.blocked,
      username: this.username,
      email: this.email,
      provider: this.provider,
      role: this.role,
      profiles: this.profiles
    };
  }

  /**
   * Returns if the User object is valid
   * @param {IUser} data
   * @returns {Joi.ValidationResult<IUser>}
   * @memberof User
   */
  public validate(data: IUser): Joi.ValidationResult<IUser> {
    return Joi.validate(data, this.userSchema);
  }

  /**
   * Validates id property
   * @param {string} id
   * @returns {Joi.ValidationResult<string>}
   * @memberof User
   */
  public validateId(id: string): Joi.ValidationResult<string> {
    return Joi.validate(id, this._validId);
  }

  /**
   * Validates confirmed property
   * @param {boolean} confirmed
   * @returns {Joi.ValidationResult<boolean>}
   * @memberof User
   */
  public validateConfirmed(confirmed: boolean): Joi.ValidationResult<boolean> {
    return Joi.validate(confirmed, this._validConfirmed);
  }

  /**
   * Validates blocked property
   * @param {boolean} blocked
   * @returns {Joi.ValidationResult<boolean>}
   * @memberof User
   */
  public validateBlocked(blocked: boolean): Joi.ValidationResult<boolean> {
    return Joi.validate(blocked, this._validBlocked);
  }

  /**
   * Validates username property
   * @param {string} username
   * @returns {Joi.ValidationResult<string>}
   * @memberof User
   */
  public validateUsername(username: string): Joi.ValidationResult<string> {
    return Joi.validate(username, this._validUsername);
  }

  /**
   * Validates email property
   * @param {string} email
   * @returns {Joi.ValidationResult<string>}
   * @memberof User
   */
  public validateEmail(email: string): Joi.ValidationResult<string> {
    return Joi.validate(email, this._validEmail);
  }

  /**
   * Validates provider property
   * @param {string} provider
   * @returns {Joi.ValidationResult<string>}
   * @memberof User
   */
  public validateProvider(provider: string): Joi.ValidationResult<string> {
    return Joi.validate(provider, this._validProvider);
  }

  /**
   * Validates role property
   * @param {string} role
   * @returns {Joi.ValidationResult<string>}
   * @memberof User
   */
  public validateRole(role: string): Joi.ValidationResult<string> {
    return Joi.validate(role, this._validRole);
  }

  /**
   * Validates profiles property
   * @param {string[] | IProfile[]} profiles
   * @returns {Joi.ValidationResult<string[] | IProfile[]>}
   * @memberof User
   */
  public validateProfiles(
    profiles: string[] | IProfile[]
  ): Joi.ValidationResult<string[] | IProfile[]> {
    return Joi.validate(profiles, this._validProfiles);
  }
}
