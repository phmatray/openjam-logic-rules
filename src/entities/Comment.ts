import * as Joi from 'joi';

import { Comment, Post, Profile, Track } from '../types/entities';

export class CommentEntity {
  public id?: string | undefined;
  public type?: string | undefined;
  public text?: string | undefined;
  public by?: string | Profile | undefined;
  public post?: string | Post | undefined;
  public track?: string | Track | undefined;
  public trackAt?: number | undefined;
  public createdAt?: Date | undefined;
  public updatedAt?: Date | undefined;

  private validId = Joi.string();
  private validType = Joi.string().valid('post', 'track');
  private validText = Joi.string();
  private validBy = Joi.string();
  private validPost = Joi.string();
  private validTrack = Joi.string();
  private validTrackAt = Joi.number();
  private validCreatedAt = Joi.date();
  private validUpdatedAt = Joi.date();

  /**
   * Joi Comment Schema
   * @type {Joi.ObjectSchema}
   * @memberof Comment
   */
  public commentSchema: Joi.ObjectSchema = Joi.object()
    .keys({
      id: this.validId,
      type: this.validType,
      text: this.validText,
      by: this.validBy,
      post: this.validPost,
      track: this.validTrack,
      trackAt: this.validTrackAt,
      createdAt: this.validCreatedAt,
      updatedAt: this.validUpdatedAt
    })
    .with('id', ['createdAt', 'updatedAt']);

  /**
   * Copy properties from an object to instance properties
   * @param {Comment} data
   * @returns {CommentEntity}
   * @memberof Comment
   */
  public copyData(data: Comment): CommentEntity {
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
   * @returns {Comment}
   * @memberof Comment
   */
  public getRaw(): Comment {
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
   * @param {Comment} data
   * @returns {Joi.ValidationResult<Comment>}
   * @memberof Comment
   */
  public validate(data: Comment): Joi.ValidationResult<Comment> {
    return Joi.validate(data, this.commentSchema);
  }

  /**
   * Validates id property
   * @param {string} id
   * @returns {Joi.ValidationResult<string>}
   * @memberof Comment
   */
  public validateId(id: string): Joi.ValidationResult<string> {
    return Joi.validate(id, this.validId);
  }

  /**
   * Validates type property
   * @param {string} type
   * @returns {Joi.ValidationResult<string>}
   * @memberof Comment
   */
  public validateType(type: string): Joi.ValidationResult<string> {
    return Joi.validate(type, this.validType);
  }

  /**
   * Validates text property
   * @param {string} text
   * @returns {Joi.ValidationResult<string>}
   * @memberof Comment
   */
  public validateText(text: string): Joi.ValidationResult<string> {
    return Joi.validate(text, this.validText);
  }

  /**
   * Validates by property
   * @param {string | Profile} by
   * @returns {Joi.ValidationResult<string>}
   * @memberof Comment
   */
  public validateBy(by: string | Profile): Joi.ValidationResult<string> {
    const id = typeof by !== 'string' && by.id ? by.id : (by as string);
    return Joi.validate(id, this.validBy);
  }

  /**
   * Validates post property
   * @param {string | Post} post
   * @returns {Joi.ValidationResult<string>}
   * @memberof Comment
   */
  public validatePost(post: string | Post): Joi.ValidationResult<string> {
    const id = typeof post !== 'string' && post.id ? post.id : (post as string);
    return Joi.validate(id, this.validPost);
  }

  /**
   * Validates track property
   * @param {string | Track} track
   * @returns {Joi.ValidationResult<string>}
   * @memberof Comment
   */
  public validateTrack(track: string | Track): Joi.ValidationResult<string> {
    const id = typeof track !== 'string' && track.id ? track.id : (track as string);
    return Joi.validate(id, this.validTrack);
  }

  /**
   * Validates trackAt property
   * @param {number} trackAt
   * @returns {Joi.ValidationResult<number>}
   * @memberof Comment
   */
  public validateTrackAt(trackAt: number): Joi.ValidationResult<number> {
    return Joi.validate(trackAt, this.validTrackAt);
  }

  /**
   * Validates createdAt property
   * @param {Date} createdAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Comment
   */
  public validateCreatedAt(createdAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(createdAt, this.validCreatedAt);
  }

  /**
   * Validates updatedAt property
   * @param {Date} updatedAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Comment
   */
  public validateUpdatedAt(updatedAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(updatedAt, this.validUpdatedAt);
  }
}
