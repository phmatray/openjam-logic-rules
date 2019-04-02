import * as Joi from 'joi';

import { Profile, User } from '../types/entities';

export class UserEntity {
  public id?: string | undefined;
  public confirmed?: boolean | undefined;
  public blocked?: boolean | undefined;
  public username?: string | undefined;
  public email?: string | undefined;
  public firstName?: string | undefined;
  public lastName?: string | undefined;
  public provider?: string | undefined;
  public role?: string | undefined;
  public profiles?: string[] | Profile[] | undefined;

  private validId = Joi.string().required();
  private validConfirmed = Joi.bool().required();
  private validBlocked = Joi.bool().required();
  private validUsername = Joi.string()
    .alphanum()
    .required();
  private validEmail = Joi.string()
    .email()
    .required();
  private validFirstName = Joi.string().max(30);
  private validLastName = Joi.string().max(30);
  private validProvider = Joi.string().required();
  private validRole = Joi.string().required();
  private validProfiles = Joi.array();

  /**
   * Joi User Schema
   * @type {Joi.ObjectSchema}
   * @memberof User
   */
  public userSchema: Joi.ObjectSchema = Joi.object()
    .keys({
      id: this.validId,
      confirmed: this.validConfirmed,
      blocked: this.validBlocked,
      username: this.validUsername,
      email: this.validEmail,
      firstName: this.validFirstName,
      lastName: this.validLastName,
      provider: this.validProvider,
      role: this.validRole,
      profiles: this.validProfiles
    })
    .with('id', ['createdAt', 'updatedAt']);

  /**
   * Copy properties from an object to instance properties
   * @param {User} data
   * @returns {UserEntity}
   * @memberof User
   */
  public copyData(data: User): UserEntity {
    this.id = data.id;
    this.confirmed = data.confirmed;
    this.blocked = data.blocked;
    this.username = data.username;
    this.email = data.email;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.provider = data.provider;
    this.role = data.role;
    this.profiles = data.profiles;

    return this;
  }

  /**
   * Get the raw data of the object
   * @returns {User}
   * @memberof User
   */
  public getRaw(): User {
    return {
      id: this.id,
      confirmed: this.confirmed,
      blocked: this.blocked,
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      provider: this.provider,
      role: this.role,
      profiles: this.profiles
    };
  }

  /**
   * Returns if the User object is valid
   * @param {User} data
   * @returns {Joi.ValidationResult<User>}
   * @memberof User
   */
  public validate(data: User): Joi.ValidationResult<User> {
    return Joi.validate(data, this.userSchema);
  }

  /**
   * Validates id property
   * @param {string} id
   * @returns {Joi.ValidationResult<string>}
   * @memberof User
   */
  public validateId(id: string): Joi.ValidationResult<string> {
    return Joi.validate(id, this.validId);
  }

  /**
   * Validates confirmed property
   * @param {boolean} confirmed
   * @returns {Joi.ValidationResult<boolean>}
   * @memberof User
   */
  public validateConfirmed(confirmed: boolean): Joi.ValidationResult<boolean> {
    return Joi.validate(confirmed, this.validConfirmed);
  }

  /**
   * Validates blocked property
   * @param {boolean} blocked
   * @returns {Joi.ValidationResult<boolean>}
   * @memberof User
   */
  public validateBlocked(blocked: boolean): Joi.ValidationResult<boolean> {
    return Joi.validate(blocked, this.validBlocked);
  }

  /**
   * Validates username property
   * @param {string} username
   * @returns {Joi.ValidationResult<string>}
   * @memberof User
   */
  public validateUsername(username: string): Joi.ValidationResult<string> {
    return Joi.validate(username, this.validUsername);
  }

  /**
   * Validates email property
   * @param {string} email
   * @returns {Joi.ValidationResult<string>}
   * @memberof User
   */
  public validateEmail(email: string): Joi.ValidationResult<string> {
    return Joi.validate(email, this.validEmail);
  }

  /**
   * Validates firstName property
   * @param {string} firstName
   * @returns {Joi.ValidationResult<string>}
   * @memberof User
   */
  public validateFirstName(firstName: string): Joi.ValidationResult<string> {
    return Joi.validate(firstName, this.validFirstName);
  }

  /**
   * Validates lastName property
   * @param {string} lastName
   * @returns {Joi.ValidationResult<string>}
   * @memberof User
   */
  public validateLastName(lastName: string): Joi.ValidationResult<string> {
    return Joi.validate(lastName, this.validLastName);
  }

  /**
   * Validates provider property
   * @param {string} provider
   * @returns {Joi.ValidationResult<string>}
   * @memberof User
   */
  public validateProvider(provider: string): Joi.ValidationResult<string> {
    return Joi.validate(provider, this.validProvider);
  }

  /**
   * Validates role property
   * @param {string} role
   * @returns {Joi.ValidationResult<string>}
   * @memberof User
   */
  public validateRole(role: string): Joi.ValidationResult<string> {
    return Joi.validate(role, this.validRole);
  }

  /**
   * Validates profiles property
   * @param {string[] | Profile[]} profiles
   * @returns {Joi.ValidationResult<string[] | Profile[]>}
   * @memberof User
   */
  public validateProfiles(
    profiles: string[] | Profile[]
  ): Joi.ValidationResult<string[] | Profile[]> {
    return Joi.validate(profiles, this.validProfiles);
  }
}
