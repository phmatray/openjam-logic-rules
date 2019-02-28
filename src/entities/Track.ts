import * as Joi from 'joi';

import { IComment } from './Comment';
import { ILabel } from './Label';
import { ILike } from './Like';
import { IPost } from './Post';
import { IProfile } from './Profile';

export type TrackType = 'original' | 'remix';

export interface ITrack {
  id?: string;
  type?: TrackType;
  title?: string;
  edit?: string;
  explicit?: boolean;
  description?: string;
  profiles?: string[] | IProfile[];
  createdAt?: Date;
  updatedAt?: Date;
  label?: string | ILabel;
  likes?: string[] | ILike[];
  posts?: string[] | IPost[];
  comments?: string[] | IComment[];
  audioUrl?: string;
  coverUrl?: string;
}

export interface ITrackEntity extends ITrack {
  trackSchema: Joi.ObjectSchema;
  copyData: (data: ITrack) => ITrackEntity;
  getRaw: () => ITrack;
  validate: (data: ITrack) => Joi.ValidationResult<ITrack>;
  validateId: (id: string) => Joi.ValidationResult<string>;
  validateType: (type: TrackType) => Joi.ValidationResult<TrackType>;
  validateTitle: (title: string) => Joi.ValidationResult<string>;
  validateEdit: (edit: string) => Joi.ValidationResult<string>;
  validateExplicit: (explicit: boolean) => Joi.ValidationResult<boolean>;
  validateDescription: (description: string) => Joi.ValidationResult<string>;
  validateProfiles: (
    profiles: string[] | IProfile[]
  ) => Joi.ValidationResult<string[] | IProfile[]>;
  validateCreatedAt: (createdAt: Date) => Joi.ValidationResult<Date>;
  validateUpdatedAt: (updatedAt: Date) => Joi.ValidationResult<Date>;
  validateLabel: (label: string | ILabel) => Joi.ValidationResult<string>;
  validateLikes: (likes: string[] | ILike[]) => Joi.ValidationResult<string[] | ILike[]>;
  validatePosts: (posts: string[] | IPost[]) => Joi.ValidationResult<string[] | IPost[]>;
  validateComments: (
    comments: string[] | IComment[]
  ) => Joi.ValidationResult<string[] | IComment[]>;
  validateAudioUrl: (audioUrl: string) => Joi.ValidationResult<string>;
  validateCoverUrl: (coverUrl: string) => Joi.ValidationResult<string>;
}

export class Track implements ITrackEntity {
  public id?: string | undefined;
  public type?: TrackType | undefined;
  public title?: string | undefined;
  public edit?: string | undefined;
  public explicit?: boolean | undefined;
  public description?: string | undefined;
  public profiles?: string[] | IProfile[] | undefined;
  public createdAt?: Date | undefined;
  public updatedAt?: Date | undefined;
  public label?: string | ILabel | undefined;
  public likes?: string[] | ILike[] | undefined;
  public posts?: string[] | IPost[] | undefined;
  public comments?: string[] | IComment[] | undefined;
  public audioUrl?: string | undefined;
  public coverUrl?: string | undefined;

  private _validId = Joi.string();
  private _validType = Joi.string();
  private _validTitle = Joi.string();
  private _validEdit = Joi.string();
  private _validExplicit = Joi.bool();
  private _validDescription = Joi.string();
  private _validProfiles = Joi.array();
  private _validCreatedAt = Joi.date();
  private _validUpdatedAt = Joi.date();
  private _validLabel = Joi.string();
  private _validLikes = Joi.array();
  private _validPosts = Joi.array();
  private _validComments = Joi.array();
  private _validAudioUrl = Joi.string();
  private _validCoverUrl = Joi.string();

  /**
   * Joi Track Schema
   * @type {Joi.ObjectSchema}
   * @memberof Track
   */
  public trackSchema: Joi.ObjectSchema = Joi.object()
    .keys({
      id: this._validId,
      type: this._validType,
      title: this._validTitle,
      edit: this._validEdit,
      explicit: this._validExplicit,
      description: this._validDescription,
      profiles: this._validProfiles,
      createdAt: this._validCreatedAt,
      updatedAt: this._validUpdatedAt,
      label: this._validLabel,
      likes: this._validLikes,
      posts: this._validPosts,
      comments: this._validComments,
      audioUrl: this._validAudioUrl,
      coverUrl: this._validCoverUrl
    })
    .with('id', ['createdAt', 'updatedAt']);

  /**
   * Copy properties from an object to instance properties
   * @param {ITrack} data
   * @returns {ITrackEntity}
   * @memberof Track
   */
  public copyData(data: ITrack): ITrackEntity {
    this.id = data.id;
    this.type = data.type;
    this.title = data.title;
    this.edit = data.edit;
    this.explicit = data.explicit;
    this.description = data.description;
    this.profiles = data.profiles;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.label = data.label;
    this.likes = data.likes;
    this.posts = data.posts;
    this.comments = data.comments;
    this.audioUrl = data.audioUrl;
    this.coverUrl = data.coverUrl;

    return this;
  }

  /**
   * Get the raw data of the object
   * @returns {ITrack}
   * @memberof Track
   */
  public getRaw(): ITrack {
    return {
      id: this.id,
      type: this.type,
      title: this.title,
      edit: this.edit,
      explicit: this.explicit,
      description: this.description,
      profiles: this.profiles,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      label: this.label,
      likes: this.likes,
      posts: this.posts,
      comments: this.comments,
      audioUrl: this.audioUrl,
      coverUrl: this.coverUrl
    };
  }

  /**
   * Returns if the Track object is valid
   * @param {ITrack} data
   * @returns {Joi.ValidationResult<ITrack>}
   * @memberof Track
   */
  public validate(data: ITrack): Joi.ValidationResult<ITrack> {
    return Joi.validate(data, this.trackSchema);
  }

  /**
   * Validates id property
   * @param {string} id
   * @returns {Joi.ValidationResult<string>}
   * @memberof Track
   */
  public validateId(id: string): Joi.ValidationResult<string> {
    return Joi.validate(id, this._validId);
  }

  /**
   * Validates type property
   * @param {TrackType} type
   * @returns {Joi.ValidationResult<TrackType>}
   * @memberof Track
   */
  public validateType(type: TrackType): Joi.ValidationResult<TrackType> {
    return Joi.validate(type, this._validType);
  }

  /**
   * Validates title property
   * @param {string} title
   * @returns {Joi.ValidationResult<string>}
   * @memberof Track
   */
  public validateTitle(title: string): Joi.ValidationResult<string> {
    return Joi.validate(title, this._validTitle);
  }

  /**
   * Validates edit property
   * @param {string} edit
   * @returns {Joi.ValidationResult<string>}
   * @memberof Track
   */
  public validateEdit(edit: string): Joi.ValidationResult<string> {
    return Joi.validate(edit, this._validEdit);
  }

  /**
   * Validates explicit property
   * @param {boolean} explicit
   * @returns {Joi.ValidationResult<boolean>}
   * @memberof Track
   */
  public validateExplicit(explicit: boolean): Joi.ValidationResult<boolean> {
    return Joi.validate(explicit, this._validExplicit);
  }

  /**
   * Validates description property
   * @param {string} description
   * @returns {Joi.ValidationResult<string>}
   * @memberof Track
   */
  public validateDescription(description: string): Joi.ValidationResult<string> {
    return Joi.validate(description, this._validDescription);
  }

  /**
   * Validates profiles property
   * @param {string[] | IProfile[]} profiles
   * @returns {Joi.ValidationResult<string[] | IProfile[]>}
   * @memberof Track
   */
  public validateProfiles(
    profiles: string[] | IProfile[]
  ): Joi.ValidationResult<string[] | IProfile[]> {
    return Joi.validate(profiles, this._validProfiles);
  }

  /**
   * Validates createdAt property
   * @param {Date} createdAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Track
   */
  public validateCreatedAt(createdAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(createdAt, this._validCreatedAt);
  }

  /**
   * Validates updatedAt property
   * @param {Date} updatedAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Track
   */
  public validateUpdatedAt(updatedAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(updatedAt, this._validUpdatedAt);
  }

  /**
   * Validates label property
   * @param {string | ILabel} label
   * @returns {Joi.ValidationResult<string>}
   * @memberof Track
   */
  public validateLabel(label: string | ILabel): Joi.ValidationResult<string> {
    const id = typeof label !== 'string' && label.id ? label.id : (label as string);
    return Joi.validate(id, this._validLabel);
  }

  /**
   * Validates likes property
   * @param {string[] | ILike[]} likes
   * @returns {Joi.ValidationResult<string[] | ILike[]>}
   * @memberof Track
   */
  public validateLikes(likes: string[] | ILike[]): Joi.ValidationResult<string[] | ILike[]> {
    return Joi.validate(likes, this._validLikes);
  }

  /**
   * Validates posts property
   * @param {string[] | IPost[]} posts
   * @returns {Joi.ValidationResult<string[] | IPost[]>}
   * @memberof Track
   */
  public validatePosts(posts: string[] | IPost[]): Joi.ValidationResult<string[] | IPost[]> {
    return Joi.validate(posts, this._validPosts);
  }

  /**
   * Validates comments property
   * @param {string[] | IComment[]} comments
   * @returns {Joi.ValidationResult<string[] | IComment[]>}
   * @memberof Track
   */
  public validateComments(
    comments: string[] | IComment[]
  ): Joi.ValidationResult<string[] | IComment[]> {
    return Joi.validate(comments, this._validComments);
  }

  /**
   * Validates audioUrl property
   * @param {string} audioUrl
   * @returns {Joi.ValidationResult<string>}
   * @memberof Track
   */
  public validateAudioUrl(audioUrl: string): Joi.ValidationResult<string> {
    return Joi.validate(audioUrl, this._validAudioUrl);
  }

  /**
   * Validates coverUrl property
   * @param {string} coverUrl
   * @returns {Joi.ValidationResult<string>}
   * @memberof Track
   */
  public validateCoverUrl(coverUrl: string): Joi.ValidationResult<string> {
    return Joi.validate(coverUrl, this._validCoverUrl);
  }
}
