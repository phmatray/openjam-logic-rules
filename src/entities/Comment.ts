import * as Joi from 'joi';

import { ITrack } from './Track';
import { IPost } from './Post';
import { IProfile } from './Profile';

export interface IComment {
  id?: string;
  type?: string;
  text?: string;
  by?: string | IProfile;
  post?: string | IPost;
  track?: string | ITrack;
  trackAt?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICommentEntity extends IComment {
  commentSchema: Joi.ObjectSchema;
  copyData: (data: IComment) => ICommentEntity;
  getRaw: () => IComment;
  validate: (data: IComment) => Joi.ValidationResult<IComment>;
  validateId: (id: string) => Joi.ValidationResult<string>;
  validateType: (type: string) => Joi.ValidationResult<string>;
  validateText: (text: string) => Joi.ValidationResult<string>;
  validateBy: (by: string | IProfile) => Joi.ValidationResult<string>;
  validatePost: (post: string | IPost) => Joi.ValidationResult<string>;
  validateTrack: (track: string | ITrack) => Joi.ValidationResult<string>;
  validateTrackAt: (trackAt: number) => Joi.ValidationResult<number>;
  validateCreatedAt: (createdAt: Date) => Joi.ValidationResult<Date>;
  validateUpdatedAt: (updatedAt: Date) => Joi.ValidationResult<Date>;
}

export class Comment implements ICommentEntity {
  public id?: string | undefined;
  public type?: string | undefined;
  public text?: string | undefined;
  public by?: string | IProfile | undefined;
  public post?: string | IPost | undefined;
  public track?: string | ITrack | undefined;
  public trackAt?: number | undefined;
  public createdAt?: Date | undefined;
  public updatedAt?: Date | undefined;

  private _validId = Joi.string();
  private _validType = Joi.string().valid('post', 'track');
  private _validText = Joi.string();
  private _validBy = Joi.string();
  private _validPost = Joi.string();
  private _validTrack = Joi.string();
  private _validTrackAt = Joi.number();
  private _validCreatedAt = Joi.date();
  private _validUpdatedAt = Joi.date();

  /**
   * Joi Comment Schema
   * @type {Joi.ObjectSchema}
   * @memberof Comment
   */
  public commentSchema: Joi.ObjectSchema = Joi.object()
    .keys({
      id: this._validId,
      type: this._validType,
      text: this._validText,
      by: this._validBy,
      post: this._validPost,
      track: this._validTrack,
      trackAt: this._validTrackAt,
      createdAt: this._validCreatedAt,
      updatedAt: this._validUpdatedAt
    })
    .with('id', ['createdAt', 'updatedAt']);

  /**
   * Copy properties from an object to instance properties
   * @param {IComment} data
   * @returns {ICommentEntity}
   * @memberof Comment
   */
  public copyData(data: IComment): ICommentEntity {
    this.id = data.id;
    this.type = data.type;
    this.text = data.text;
    this.by = data.by;
    this.post = data.post;
    this.track = data.track;
    this.trackAt = data.trackAt;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;

    return this;
  }

  /**
   * Get the raw data of the object
   * @returns {IComment}
   * @memberof Comment
   */
  public getRaw(): IComment {
    return {
      id: this.id,
      type: this.type,
      text: this.text,
      by: this.by,
      post: this.post,
      track: this.track,
      trackAt: this.trackAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }

  /**
   * Returns if the Comment object is valid
   * @param {IComment} data
   * @returns {Joi.ValidationResult<IComment>}
   * @memberof Comment
   */
  public validate(data: IComment): Joi.ValidationResult<IComment> {
    return Joi.validate(data, this.commentSchema);
  }

  /**
   * Validates id property
   * @param {string} id
   * @returns {Joi.ValidationResult<string>}
   * @memberof Comment
   */
  public validateId(id: string): Joi.ValidationResult<string> {
    return Joi.validate(id, this._validId);
  }

  /**
   * Validates type property
   * @param {string} type
   * @returns {Joi.ValidationResult<string>}
   * @memberof Comment
   */
  public validateType(type: string): Joi.ValidationResult<string> {
    return Joi.validate(type, this._validType);
  }

  /**
   * Validates text property
   * @param {string} text
   * @returns {Joi.ValidationResult<string>}
   * @memberof Comment
   */
  public validateText(text: string): Joi.ValidationResult<string> {
    return Joi.validate(text, this._validText);
  }

  /**
   * Validates by property
   * @param {string | IProfile} by
   * @returns {Joi.ValidationResult<string>}
   * @memberof Comment
   */
  public validateBy(by: string | IProfile): Joi.ValidationResult<string> {
    const id = typeof by !== 'string' && by.id ? by.id : (by as string);
    return Joi.validate(id, this._validBy);
  }

  /**
   * Validates post property
   * @param {string | IPost} post
   * @returns {Joi.ValidationResult<string>}
   * @memberof Comment
   */
  public validatePost(post: string | IPost): Joi.ValidationResult<string> {
    const id = typeof post !== 'string' && post.id ? post.id : (post as string);
    return Joi.validate(id, this._validPost);
  }

  /**
   * Validates track property
   * @param {string | ITrack} track
   * @returns {Joi.ValidationResult<string>}
   * @memberof Comment
   */
  public validateTrack(track: string | ITrack): Joi.ValidationResult<string> {
    const id = typeof track !== 'string' && track.id ? track.id : (track as string);
    return Joi.validate(id, this._validTrack);
  }

  /**
   * Validates trackAt property
   * @param {number} trackAt
   * @returns {Joi.ValidationResult<number>}
   * @memberof Comment
   */
  public validateTrackAt(trackAt: number): Joi.ValidationResult<number> {
    return Joi.validate(trackAt, this._validTrackAt);
  }

  /**
   * Validates createdAt property
   * @param {Date} createdAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Comment
   */
  public validateCreatedAt(createdAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(createdAt, this._validCreatedAt);
  }

  /**
   * Validates updatedAt property
   * @param {Date} updatedAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Comment
   */
  public validateUpdatedAt(updatedAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(updatedAt, this._validUpdatedAt);
  }
}
