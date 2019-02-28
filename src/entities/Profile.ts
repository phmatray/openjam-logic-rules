import * as Joi from 'joi';

import { IComment } from './Comment';
import { ILabel } from './Label';
import { ILike } from './Like';
import { IMedia } from './Media';
import { IPost } from './Post';
import { IStyle } from './Style';
import { ITrack } from './Track';
import { IUser } from './User';

export type ProfileType = 'artist' | 'listener';

export interface IProfile {
  id?: string;
  handle?: string;
  type?: ProfileType;
  labels?: string[] | ILabel[];
  name?: string;
  styles?: string[] | IStyle[];
  latitude?: number;
  longitude?: number;
  bio?: string;
  bioShort?: string;
  isPrivate?: boolean;
  city?: string;
  state?: string;
  country?: string;
  createdAt?: Date;
  updatedAt?: Date;
  user?: string | IUser;
  coverPicture?: string | IMedia;
  profilePicture?: string | IMedia;
  subscriptions?: string[] | IProfile[];
  subscribers?: string[] | IProfile[];
  likes?: string[] | ILike[];
  posts?: string[] | IPost[];
  comments?: string[] | Comment[];
  tracks?: string[] | ITrack[];
}

export interface IProfileEntity extends IProfile {
  profileSchema: Joi.ObjectSchema;
  copyData?: (data: IProfile) => IProfileEntity;
  getRaw: () => IProfile;
  validate: (data: IProfile) => Joi.ValidationResult<IProfile>;
  validateId: (id: string) => Joi.ValidationResult<string>;
  validateHandle: (handle: string) => Joi.ValidationResult<string>;
  validateType: (type: ProfileType) => Joi.ValidationResult<ProfileType>;
  validateLabels: (labels: string[] | ILabel[]) => Joi.ValidationResult<string[] | ILabel[]>;
  validateName: (name: string) => Joi.ValidationResult<string>;
  validateStyles: (styles: string[] | IStyle[]) => Joi.ValidationResult<string[] | IStyle[]>;
  validateLatitude: (latitude: number) => Joi.ValidationResult<number>;
  validateLongitude: (longitude: number) => Joi.ValidationResult<number>;
  validateBio: (bio: string) => Joi.ValidationResult<string>;
  validateBioShort: (bioShort: string) => Joi.ValidationResult<string>;
  validatePrivate: (isPrivate: boolean) => Joi.ValidationResult<boolean>;
  validateCity: (city: string) => Joi.ValidationResult<string>;
  validateState: (state: string) => Joi.ValidationResult<string>;
  validateCountry: (country: string) => Joi.ValidationResult<string>;
  validateCreatedAt: (createdAt: Date) => Joi.ValidationResult<Date>;
  validateUpdatedAt: (updatedAt: Date) => Joi.ValidationResult<Date>;
  validateUser: (user: string | IUser) => Joi.ValidationResult<string>;
  validateCoverPicture: (coverPicture: string) => Joi.ValidationResult<string>;
  validateProfilePicture: (profilePicture: string) => Joi.ValidationResult<string>;
  validateSubscriptions: (
    subscriptions: string[] | IProfile[]
  ) => Joi.ValidationResult<string[] | IProfile[]>;
  validateSubscribers: (
    subscribers: string[] | IProfile[]
  ) => Joi.ValidationResult<string[] | IProfile[]>;
  validateLikes: (likes: string[] | ILike[]) => Joi.ValidationResult<string[] | ILike[]>;
  validatePosts: (posts: string[] | IPost[]) => Joi.ValidationResult<string[] | IPost[]>;
  validateComments: (
    comments: string[] | IComment[]
  ) => Joi.ValidationResult<string[] | IComment[]>;
  validateTracks: (tracks: string[] | ITrack[]) => Joi.ValidationResult<string[] | ITrack[]>;
}

export class Profile implements IProfileEntity {
  public id?: string | undefined;
  public handle?: string | undefined;
  public type?: 'artist' | 'listener' | undefined;
  public labels?: string[] | ILabel[] | undefined;
  public name?: string | undefined;
  public styles?: string[] | IStyle[] | undefined;
  public latitude?: number | undefined;
  public longitude?: number | undefined;
  public bio?: string | undefined;
  public bioShort?: string | undefined;
  public isPrivate?: boolean | undefined;
  public city?: string | undefined;
  public state?: string | undefined;
  public country?: string | undefined;
  public createdAt?: Date | undefined;
  public updatedAt?: Date | undefined;
  public user?: string | IUser | undefined;
  public coverPicture?: string | IMedia | undefined;
  public profilePicture?: string | IMedia | undefined;
  public subscriptions?: string[] | IProfile[] | undefined;
  public subscribers?: string[] | IProfile[] | undefined;
  public likes?: string[] | ILike[] | undefined;
  public posts?: string[] | IPost[] | undefined;
  public comments?: string[] | Comment[] | undefined;
  public tracks?: string[] | ITrack[] | undefined;

  private _validId = Joi.string();
  private _validHandle = Joi.string()
    .alphanum()
    .min(2)
    .max(30);
  private _validType = Joi.string();
  private _validLabels = Joi.array();
  private _validName = Joi.string();
  private _validStyles = Joi.array();
  private _validLatitude = Joi.number();
  private _validLongitude = Joi.number();
  private _validBio = Joi.string().max(2000);
  private _validBioShort = Joi.string().max(300);
  private _validPrivate = Joi.bool();
  private _validCity = Joi.string();
  private _validState = Joi.string();
  private _validCountry = Joi.string();
  private _validCreatedAt = Joi.date();
  private _validUpdatedAt = Joi.date();
  private _validUser = Joi.string();
  private _validCoverPicture = Joi.string();
  private _validProfilePicture = Joi.string();
  private _validSubscriptions = Joi.array();
  private _validSubscribers = Joi.array();
  private _validLikes = Joi.array();
  private _validPosts = Joi.array();
  private _validComments = Joi.array();
  private _validTracks = Joi.array();

  /**
   * Joi Profile Schema
   * @type {Joi.ObjectSchema}
   * @memberof Profile
   */
  public profileSchema: Joi.ObjectSchema = Joi.object()
    .keys({
      id: this._validId,
      handle: this._validHandle,
      type: this._validType,
      labels: this._validLabels,
      name: this._validName,
      styles: this._validStyles,
      latitude: this._validLatitude,
      longitude: this._validLongitude,
      bio: this._validBio,
      bioShort: this._validBioShort,
      isPrivate: this._validPrivate,
      city: this._validCity,
      state: this._validState,
      country: this._validCountry,
      createdAt: this._validCreatedAt,
      updatedAt: this._validUpdatedAt,
      user: this._validUser,
      coverPicture: this._validCoverPicture,
      profilePicture: this._validProfilePicture,
      subscriptions: this._validSubscriptions,
      subscribers: this._validSubscribers,
      likes: this._validLikes,
      posts: this._validPosts,
      comments: this._validComments,
      tracks: this._validTracks
    })
    .with('id', ['createdAt', 'updatedAt']);

  /**
   * Copy properties from an object to instance properties
   * @param {IProfile} data
   * @returns {IProfileEntity}
   * @memberof Profile
   */
  public copyData(data: IProfile): IProfileEntity {
    this.id = data.id;
    this.handle = data.handle;
    this.type = data.type;
    this.labels = data.labels;
    this.name = data.name;
    this.styles = data.styles;
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    this.bio = data.bio;
    this.bioShort = data.bioShort;
    this.isPrivate = data.isPrivate;
    this.city = data.city;
    this.state = data.state;
    this.country = data.country;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.user = data.user;
    this.coverPicture = data.coverPicture;
    this.profilePicture = data.profilePicture;
    this.subscriptions = data.subscriptions;
    this.subscribers = data.subscribers;
    this.likes = data.likes;
    this.posts = data.posts;
    this.comments = data.comments;
    this.tracks = data.tracks;

    return this;
  }

  /**
   * Get the raw data of the object
   * @returns {IProfile}
   * @memberof Profile
   */
  public getRaw(): IProfile {
    return {
      id: this.id,
      handle: this.handle,
      type: this.type,
      labels: this.labels,
      name: this.name,
      styles: this.styles,
      latitude: this.latitude,
      longitude: this.longitude,
      bio: this.bio,
      bioShort: this.bioShort,
      isPrivate: this.isPrivate,
      city: this.city,
      state: this.state,
      country: this.country,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      user: this.user,
      coverPicture: this.coverPicture,
      profilePicture: this.profilePicture,
      subscriptions: this.subscriptions,
      subscribers: this.subscribers,
      likes: this.likes,
      posts: this.posts,
      comments: this.comments,
      tracks: this.tracks
    };
  }

  /**
   * Returns if the Profile object is valid
   * @param {IProfile} data
   * @returns {Joi.ValidationResult<IProfile>}
   * @memberof Profile
   */
  public validate(data: IProfile): Joi.ValidationResult<IProfile> {
    return Joi.validate(data, this.profileSchema);
  }

  /**
   * Validates id property
   * @param {string} id
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateId(id: string): Joi.ValidationResult<string> {
    return Joi.validate(id, this._validId);
  }

  /**
   * Validates handle property
   * @param {string} handle
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateHandle(handle: string): Joi.ValidationResult<string> {
    return Joi.validate(handle, this._validHandle);
  }

  /**
   * Validates type property
   * @param {ProfileType} type
   * @returns {Joi.ValidationResult<ProfileType>}
   * @memberof Profile
   */
  public validateType(type: ProfileType): Joi.ValidationResult<ProfileType> {
    return Joi.validate(type, this._validType);
  }

  /**
   * Validates labels property
   * @param {string[] | ILabel[]} labels
   * @returns {Joi.ValidationResult<string[] | ILabel[]>}
   * @memberof Profile
   */
  public validateLabels(labels: string[] | ILabel[]): Joi.ValidationResult<string[] | ILabel[]> {
    return Joi.validate(labels, this._validLabels);
  }

  /**
   * Validates name property
   * @param {string} name
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateName(name: string): Joi.ValidationResult<string> {
    return Joi.validate(name, this._validName);
  }

  /**
   * Validates styles property
   * @param {string[] | IStyle[]} styles
   * @returns {Joi.ValidationResult<string[] | IStyle[]>}
   * @memberof Profile
   */
  public validateStyles(styles: string[] | IStyle[]): Joi.ValidationResult<string[] | IStyle[]> {
    return Joi.validate(styles, this._validStyles);
  }

  /**
   * Validates latitude property
   * @param {number} latitude
   * @returns {Joi.ValidationResult<number>}
   * @memberof Profile
   */
  public validateLatitude(latitude: number): Joi.ValidationResult<number> {
    return Joi.validate(latitude, this._validLatitude);
  }

  /**
   * Validates longitude property
   * @param {number} longitude
   * @returns {Joi.ValidationResult<number>}
   * @memberof Profile
   */
  public validateLongitude(longitude: number): Joi.ValidationResult<number> {
    return Joi.validate(longitude, this._validLongitude);
  }

  /**
   * Validates bio property
   * @param {string} bio
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateBio(bio: string): Joi.ValidationResult<string> {
    return Joi.validate(bio, this._validBio);
  }

  /**
   * Validates bioShort property
   * @param {string} bioShort
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateBioShort(bioShort: string): Joi.ValidationResult<string> {
    return Joi.validate(bioShort, this._validBioShort);
  }

  /**
   * Validates isPrivate property
   * @param {string} isPrivate
   * @returns {Joi.ValidationResult<boolean>}
   * @memberof Profile
   */
  public validatePrivate(isPrivate: boolean): Joi.ValidationResult<boolean> {
    return Joi.validate(isPrivate, this._validPrivate);
  }

  /**
   * Validates city property
   * @param {string} city
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateCity(city: string): Joi.ValidationResult<string> {
    return Joi.validate(city, this._validCity);
  }

  /**
   * Validates state property
   * @param {string} state
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateState(state: string): Joi.ValidationResult<string> {
    return Joi.validate(state, this._validState);
  }

  /**
   * Validates country property
   * @param {string} country
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateCountry(country: string): Joi.ValidationResult<string> {
    return Joi.validate(country, this._validCountry);
  }

  /**
   * Validates createdAt property
   * @param {Date} createdAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Profile
   */
  public validateCreatedAt(createdAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(createdAt, this._validCreatedAt);
  }

  /**
   * Validates updatedAt property
   * @param {Date} updatedAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Profile
   */
  public validateUpdatedAt(updatedAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(updatedAt, this._validUpdatedAt);
  }

  /**
   * Validates user property
   * @param {string | IUser} user
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateUser(user: string | IUser): Joi.ValidationResult<string> {
    const id = typeof user !== 'string' && user.id ? user.id : (user as string);
    return Joi.validate(id, this._validUser);
  }

  /**
   * Validates coverPicture property
   * @param {string} coverPicture
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateCoverPicture(coverPicture: string): Joi.ValidationResult<string> {
    return Joi.validate(coverPicture, this._validCoverPicture);
  }

  /**
   * Validates profilePicture property
   * @param {string} profilePicture
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateProfilePicture(profilePicture: string): Joi.ValidationResult<string> {
    return Joi.validate(profilePicture, this._validProfilePicture);
  }

  /**
   * Validates subscriptions property
   * @param {string[] | IProfile[]} subscriptions
   * @returns {Joi.ValidationResult<string[] | IProfile[]>}
   * @memberof Profile
   */
  public validateSubscriptions(
    subscriptions: string[] | IProfile[]
  ): Joi.ValidationResult<string[] | IProfile[]> {
    return Joi.validate(subscriptions, this._validSubscriptions);
  }

  /**
   * Validates subscribers property
   * @param {string[] | IProfile[]} subscribers
   * @returns {Joi.ValidationResult<string[] | IProfile[]>}
   * @memberof Profile
   */
  public validateSubscribers(
    subscribers: string[] | IProfile[]
  ): Joi.ValidationResult<string[] | IProfile[]> {
    return Joi.validate(subscribers, this._validSubscribers);
  }

  /**
   * Validates likes property
   * @param {string[] | ILike[]} likes
   * @returns {Joi.ValidationResult<string[] | ILike[]>}
   * @memberof Profile
   */
  public validateLikes(likes: string[] | ILike[]): Joi.ValidationResult<string[] | ILike[]> {
    return Joi.validate(likes, this._validLikes);
  }

  /**
   * Validates posts property
   * @param {string[] | IPost[]} posts
   * @returns {Joi.ValidationResult<string[] | IPost[]>}
   * @memberof Profile
   */
  public validatePosts(posts: string[] | IPost[]): Joi.ValidationResult<string[] | IPost[]> {
    return Joi.validate(posts, this._validPosts);
  }

  /**
   * Validates comments property
   * @param {string[] | IComment[]} comments
   * @returns {Joi.ValidationResult<string[] | IComment[]>}
   * @memberof Profile
   */
  public validateComments(
    comments: string[] | IComment[]
  ): Joi.ValidationResult<string[] | IComment[]> {
    return Joi.validate(comments, this._validComments);
  }

  /**
   * Validates tracks property
   * @param {string[] | ITrack[]} tracks
   * @returns {Joi.ValidationResult<string[] | ITrack[]>}
   * @memberof Profile
   */
  public validateTracks(tracks: string[] | ITrack[]): Joi.ValidationResult<string[] | ITrack[]> {
    return Joi.validate(tracks, this._validTracks);
  }
}
