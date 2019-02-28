import * as Joi from 'joi';

import { IComment } from './Comment';
import { ILike } from './Like';
import { IProfile } from './Profile';
import { ITrack } from './Track';

export type PostType = 'text' | 'track';

export interface IPost {
  id?: string;
  type?: string;
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
  profile?: string | IProfile;
  likes?: string[] | ILike[];
  comments?: string[] | IComment[];
  track?: string | ITrack;
}

export interface IPostEntity extends IPost {
  postSchema: Joi.ObjectSchema;
  copyData: (data: IPost) => IPostEntity;
  getRaw: () => IPost;
  validate: (data: IPost) => Joi.ValidationResult<IPost>;
  validateId: (id: string) => Joi.ValidationResult<string>;
  validateType: (type: string) => Joi.ValidationResult<string>;
  validateContent: (content: string) => Joi.ValidationResult<string>;
  validateCreatedAt: (createdAt: Date) => Joi.ValidationResult<Date>;
  validateUpdatedAt: (updatedAt: Date) => Joi.ValidationResult<Date>;
  validateProfile: (profile: string | IProfile) => Joi.ValidationResult<string>;
  validateLikes: (likes: string[] | ILike[]) => Joi.ValidationResult<string[] | ILike[]>;
  validateComments: (
    comments: string[] | IComment[]
  ) => Joi.ValidationResult<string[] | IComment[]>;
  validateTrack: (track: string | ITrack) => Joi.ValidationResult<string>;
}

export class Post implements IPostEntity {
  public id?: string | undefined;
  public type?: string | undefined;
  public content?: string | undefined;
  public createdAt?: Date | undefined;
  public updatedAt?: Date | undefined;
  public profile?: string | IProfile | undefined;
  public likes?: string[] | ILike[] | undefined;
  public comments?: string[] | IComment[] | undefined;
  public track?: string | ITrack | undefined;

  private _validId = Joi.string();
  private _validType = Joi.string();
  private _validContent = Joi.string();
  private _validCreatedAt = Joi.date();
  private _validUpdatedAt = Joi.date();
  private _validProfile = Joi.string();
  private _validLikes = Joi.array();
  private _validComments = Joi.array();
  private _validTrack = Joi.string();

  /**
   * Joi Post Schema
   * @type {Joi.ObjectSchema}
   * @memberof Post
   */
  public postSchema: Joi.ObjectSchema = Joi.object()
    .keys({
      id: this._validId,
      type: this._validType,
      content: this._validContent,
      createdAt: this._validCreatedAt,
      updatedAt: this._validUpdatedAt,
      profile: this._validProfile,
      likes: this._validLikes,
      comments: this._validComments,
      track: this._validTrack
    })
    .with('id', ['createdAt', 'updatedAt']);

  /**
   * Copy properties from an object to instance properties
   * @param {IPost} data
   * @returns {IPostEntity}
   * @memberof Post
   */
  public copyData(data: IPost): IPostEntity {
    this.id = data.id;
    this.type = data.type;
    this.content = data.content;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.profile = data.profile;
    this.likes = data.likes;
    this.comments = data.comments;
    this.track = data.track;

    return this;
  }

  /**
   * Get the raw data of the object
   * @returns {IPost}
   * @memberof Post
   */
  public getRaw(): IPost {
    return {
      id: this.id,
      type: this.type,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      profile: this.profile,
      likes: this.likes,
      comments: this.comments,
      track: this.track
    };
  }

  /**
   * Returns if the Post object is valid
   * @param {IPost} data
   * @returns {Joi.ValidationResult<IPost>}
   * @memberof Post
   */
  public validate(data: IPost): Joi.ValidationResult<IPost> {
    return Joi.validate(data, this.postSchema);
  }

  /**
   * Validates id property
   * @param {string} id
   * @returns {Joi.ValidationResult<string>}
   * @memberof Post
   */
  public validateId(id: string): Joi.ValidationResult<string> {
    return Joi.validate(id, this._validId);
  }

  /**
   * Validates type property
   * @param {string} type
   * @returns {Joi.ValidationResult<string>}
   * @memberof Post
   */
  public validateType(type: string): Joi.ValidationResult<string> {
    return Joi.validate(type, this._validType);
  }

  /**
   * Validates content property
   * @param {string} content
   * @returns {Joi.ValidationResult<string>}
   * @memberof Post
   */
  public validateContent(content: string): Joi.ValidationResult<string> {
    return Joi.validate(content, this._validContent);
  }

  /**
   * Validates createdAt property
   * @param {Date} createdAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Post
   */
  public validateCreatedAt(createdAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(createdAt, this._validCreatedAt);
  }

  /**
   * Validates updatedAt property
   * @param {Date} updatedAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Post
   */
  public validateUpdatedAt(updatedAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(updatedAt, this._validUpdatedAt);
  }

  /**
   * Validates profile property
   * @param {string | IProfile} profile
   * @returns {Joi.ValidationResult<string>}
   * @memberof Post
   */
  public validateProfile(profile: string | IProfile): Joi.ValidationResult<string> {
    const id = typeof profile !== 'string' && profile.id ? profile.id : (profile as string);
    return Joi.validate(id, this._validProfile);
  }

  /**
   * Validates likes property
   * @param {string[] | ILike[]} likes
   * @returns {Joi.ValidationResult<string[] | ILike[]>}
   * @memberof Post
   */
  public validateLikes(likes: string[] | ILike[]): Joi.ValidationResult<string[] | ILike[]> {
    return Joi.validate(likes, this._validLikes);
  }

  /**
   * Validates comments property
   * @param {string[] | IComment[]} comments
   * @returns {Joi.ValidationResult<string[] | IComment[]>}
   * @memberof Post
   */
  public validateComments(
    comments: string[] | IComment[]
  ): Joi.ValidationResult<string[] | IComment[]> {
    return Joi.validate(comments, this._validComments);
  }

  /**
   * Validates track property
   * @param {string | ITrack} track
   * @returns {Joi.ValidationResult<string>}
   * @memberof Post
   */
  public validateTrack(track: string | ITrack): Joi.ValidationResult<string> {
    const id = typeof track !== 'string' && track.id ? track.id : (track as string);
    return Joi.validate(id, this._validTrack);
  }
}
