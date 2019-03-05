import * as Joi from 'joi';

import { Comment } from './Comment';
import { Like } from './Like';
import { Profile } from './Profile';
import { Track } from './Track';

export type PostType = 'text' | 'track';

export interface Post {
  id?: string;
  type?: string;
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
  profile?: string | Profile;
  likes?: string[] | Like[];
  comments?: string[] | Comment[];
  track?: string | Track;
}

export class PostEntity {
  public id?: string | undefined;
  public type?: string | undefined;
  public content?: string | undefined;
  public createdAt?: Date | undefined;
  public updatedAt?: Date | undefined;
  public profile?: string | Profile | undefined;
  public likes?: string[] | Like[] | undefined;
  public comments?: string[] | Comment[] | undefined;
  public track?: string | Track | undefined;

  private validId = Joi.string();
  private validType = Joi.string();
  private validContent = Joi.string();
  private validCreatedAt = Joi.date();
  private validUpdatedAt = Joi.date();
  private validProfile = Joi.string();
  private validLikes = Joi.array();
  private validComments = Joi.array();
  private validTrack = Joi.string();

  /**
   * Joi Post Schema
   * @type {Joi.ObjectSchema}
   * @memberof Post
   */
  public postSchema: Joi.ObjectSchema = Joi.object()
    .keys({
      id: this.validId,
      type: this.validType,
      content: this.validContent,
      createdAt: this.validCreatedAt,
      updatedAt: this.validUpdatedAt,
      profile: this.validProfile,
      likes: this.validLikes,
      comments: this.validComments,
      track: this.validTrack
    })
    .with('id', ['createdAt', 'updatedAt']);

  /**
   * Copy properties from an object to instance properties
   * @param {Post} data
   * @returns {PostEntity}
   * @memberof Post
   */
  public copyData(data: Post): PostEntity {
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
   * @returns {Post}
   * @memberof Post
   */
  public getRaw(): Post {
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
   * @param {Post} data
   * @returns {Joi.ValidationResult<Post>}
   * @memberof Post
   */
  public validate(data: Post): Joi.ValidationResult<Post> {
    return Joi.validate(data, this.postSchema);
  }

  /**
   * Validates id property
   * @param {string} id
   * @returns {Joi.ValidationResult<string>}
   * @memberof Post
   */
  public validateId(id: string): Joi.ValidationResult<string> {
    return Joi.validate(id, this.validId);
  }

  /**
   * Validates type property
   * @param {string} type
   * @returns {Joi.ValidationResult<string>}
   * @memberof Post
   */
  public validateType(type: string): Joi.ValidationResult<string> {
    return Joi.validate(type, this.validType);
  }

  /**
   * Validates content property
   * @param {string} content
   * @returns {Joi.ValidationResult<string>}
   * @memberof Post
   */
  public validateContent(content: string): Joi.ValidationResult<string> {
    return Joi.validate(content, this.validContent);
  }

  /**
   * Validates createdAt property
   * @param {Date} createdAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Post
   */
  public validateCreatedAt(createdAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(createdAt, this.validCreatedAt);
  }

  /**
   * Validates updatedAt property
   * @param {Date} updatedAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Post
   */
  public validateUpdatedAt(updatedAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(updatedAt, this.validUpdatedAt);
  }

  /**
   * Validates profile property
   * @param {string | Profile} profile
   * @returns {Joi.ValidationResult<string>}
   * @memberof Post
   */
  public validateProfile(profile: string | Profile): Joi.ValidationResult<string> {
    const id = typeof profile !== 'string' && profile.id ? profile.id : (profile as string);
    return Joi.validate(id, this.validProfile);
  }

  /**
   * Validates likes property
   * @param {string[] | Like[]} likes
   * @returns {Joi.ValidationResult<string[] | Like[]>}
   * @memberof Post
   */
  public validateLikes(likes: string[] | Like[]): Joi.ValidationResult<string[] | Like[]> {
    return Joi.validate(likes, this.validLikes);
  }

  /**
   * Validates comments property
   * @param {string[] | Comment[]} comments
   * @returns {Joi.ValidationResult<string[] | Comment[]>}
   * @memberof Post
   */
  public validateComments(
    comments: string[] | Comment[]
  ): Joi.ValidationResult<string[] | Comment[]> {
    return Joi.validate(comments, this.validComments);
  }

  /**
   * Validates track property
   * @param {string | Track} track
   * @returns {Joi.ValidationResult<string>}
   * @memberof Post
   */
  public validateTrack(track: string | Track): Joi.ValidationResult<string> {
    const id = typeof track !== 'string' && track.id ? track.id : (track as string);
    return Joi.validate(id, this.validTrack);
  }
}
