import * as Joi from 'joi';

import {
  Comment,
  Label,
  Like,
  ObjectWithId,
  Post,
  Profile,
  Track,
  TrackType
} from '../../types/entities';

export class TrackEntity implements Track {
  public id!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public type!: TrackType;
  public title!: string;
  public explicit!: boolean;
  public audioUrl!: string;
  public coverUrl!: string;
  public edit?: string | undefined;
  public description?: string | undefined;
  public profiles?: string[] | Profile[] | undefined;
  public label?: string | Label | undefined;
  public likes?: string[] | Like[] | undefined;
  public posts?: string[] | Post[] | undefined;
  public comments?: string[] | Comment[] | undefined;

  private validId = Joi.string();
  private validType = Joi.string();
  private validTitle = Joi.string();
  private validEdit = Joi.string();
  private validExplicit = Joi.bool();
  private validDescription = Joi.string();
  private validProfiles = Joi.array();
  private validCreatedAt = Joi.date();
  private validUpdatedAt = Joi.date();
  private validLabel = Joi.string();
  private validLikes = Joi.array();
  private validPosts = Joi.array();
  private validComments = Joi.array();
  private validAudioUrl = Joi.string();
  private validCoverUrl = Joi.string();

  /**
   * Joi Track Schema
   * @type {Joi.ObjectSchema}
   * @memberof Track
   */
  public trackSchema: Joi.ObjectSchema = Joi.object()
    .keys({
      id: this.validId,
      type: this.validType,
      title: this.validTitle,
      edit: this.validEdit,
      explicit: this.validExplicit,
      description: this.validDescription,
      profiles: this.validProfiles,
      createdAt: this.validCreatedAt,
      updatedAt: this.validUpdatedAt,
      label: this.validLabel,
      likes: this.validLikes,
      posts: this.validPosts,
      comments: this.validComments,
      audioUrl: this.validAudioUrl,
      coverUrl: this.validCoverUrl
    })
    .with('id', ['createdAt', 'updatedAt']);

  /**
   * Creates an instance of TrackEntity.
   * @param {Track} data
   * @memberof TrackEntity
   */
  constructor(data: Track) {
    this.copyData(data);
  }

  /**
   * Copy properties from an object to instance properties
   * @param {Track} data
   * @returns {TrackEntity}
   * @memberof Track
   */
  public copyData(data: Track): TrackEntity {
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
   * @returns {Track}
   * @memberof Track
   */
  public getRaw(): Track {
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
   * @param {Track} data
   * @returns {Joi.ValidationResult<Track>}
   * @memberof Track
   */
  public validate(data: Track): Joi.ValidationResult<Track> {
    return Joi.validate(data, this.trackSchema);
  }

  /**
   * Validates id property
   * @param {string} id
   * @returns {Joi.ValidationResult<string>}
   * @memberof Track
   */
  public validateId(id: string): Joi.ValidationResult<string> {
    return Joi.validate(id, this.validId);
  }

  /**
   * Validates type property
   * @param {TrackType} type
   * @returns {Joi.ValidationResult<TrackType>}
   * @memberof Track
   */
  public validateType(type: TrackType): Joi.ValidationResult<TrackType> {
    return Joi.validate(type, this.validType);
  }

  /**
   * Validates title property
   * @param {string} title
   * @returns {Joi.ValidationResult<string>}
   * @memberof Track
   */
  public validateTitle(title: string): Joi.ValidationResult<string> {
    return Joi.validate(title, this.validTitle);
  }

  /**
   * Validates edit property
   * @param {string} edit
   * @returns {Joi.ValidationResult<string>}
   * @memberof Track
   */
  public validateEdit(edit: string): Joi.ValidationResult<string> {
    return Joi.validate(edit, this.validEdit);
  }

  /**
   * Validates explicit property
   * @param {boolean} explicit
   * @returns {Joi.ValidationResult<boolean>}
   * @memberof Track
   */
  public validateExplicit(explicit: boolean): Joi.ValidationResult<boolean> {
    return Joi.validate(explicit, this.validExplicit);
  }

  /**
   * Validates description property
   * @param {string} description
   * @returns {Joi.ValidationResult<string>}
   * @memberof Track
   */
  public validateDescription(description: string): Joi.ValidationResult<string> {
    return Joi.validate(description, this.validDescription);
  }

  /**
   * Validates profiles property
   * @param {string[] | Profile[]} profiles
   * @returns {Joi.ValidationResult<string[] | Profile[]>}
   * @memberof Track
   */
  public validateProfiles(
    profiles: string[] | Profile[]
  ): Joi.ValidationResult<string[] | Profile[]> {
    return Joi.validate(profiles, this.validProfiles);
  }

  /**
   * Validates createdAt property
   * @param {Date} createdAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Track
   */
  public validateCreatedAt(createdAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(createdAt, this.validCreatedAt);
  }

  /**
   * Validates updatedAt property
   * @param {Date} updatedAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Track
   */
  public validateUpdatedAt(updatedAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(updatedAt, this.validUpdatedAt);
  }

  /**
   * Validates label property
   * @param {string | ObjectWithId} label
   * @returns {Joi.ValidationResult<string>}
   * @memberof Track
   */
  public validateLabel(label: string | ObjectWithId): Joi.ValidationResult<string> {
    const id = typeof label !== 'string' && label.id ? label.id : (label as string);
    return Joi.validate(id, this.validLabel);
  }

  /**
   * Validates likes property
   * @param {string[] | Like[]} likes
   * @returns {Joi.ValidationResult<string[] | Like[]>}
   * @memberof Track
   */
  public validateLikes(likes: string[] | Like[]): Joi.ValidationResult<string[] | Like[]> {
    return Joi.validate(likes, this.validLikes);
  }

  /**
   * Validates posts property
   * @param {string[] | Post[]} posts
   * @returns {Joi.ValidationResult<string[] | Post[]>}
   * @memberof Track
   */
  public validatePosts(posts: string[] | Post[]): Joi.ValidationResult<string[] | Post[]> {
    return Joi.validate(posts, this.validPosts);
  }

  /**
   * Validates comments property
   * @param {string[] | Comment[]} comments
   * @returns {Joi.ValidationResult<string[] | Comment[]>}
   * @memberof Track
   */
  public validateComments(
    comments: string[] | Comment[]
  ): Joi.ValidationResult<string[] | Comment[]> {
    return Joi.validate(comments, this.validComments);
  }

  /**
   * Validates audioUrl property
   * @param {string} audioUrl
   * @returns {Joi.ValidationResult<string>}
   * @memberof Track
   */
  public validateAudioUrl(audioUrl: string): Joi.ValidationResult<string> {
    return Joi.validate(audioUrl, this.validAudioUrl);
  }

  /**
   * Validates coverUrl property
   * @param {string} coverUrl
   * @returns {Joi.ValidationResult<string>}
   * @memberof Track
   */
  public validateCoverUrl(coverUrl: string): Joi.ValidationResult<string> {
    return Joi.validate(coverUrl, this.validCoverUrl);
  }
}
