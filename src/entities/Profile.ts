import * as Joi from 'joi';

import { Comment } from './Comment';
import { Label } from './Label';
import { Like } from './Like';
import { Media } from './Media';
import { Post } from './Post';
import { Style } from './Style';
import { Track } from './Track';
import { User } from './User';

export type ProfileType = 'artist' | 'listener';

export interface Profile {
  id?: string;
  handle?: string;
  type?: ProfileType;
  labels?: string[] | Label[];
  name?: string;
  styles?: string[] | Style[];
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
  user?: string | User;
  coverPicture?: string | Media;
  profilePicture?: string | Media;
  subscriptions?: string[] | Profile[];
  subscribers?: string[] | Profile[];
  likes?: string[] | Like[];
  posts?: string[] | Post[];
  comments?: string[] | Comment[];
  tracks?: string[] | Track[];
}

export class ProfileEntity {
  public id?: string | undefined;
  public handle?: string | undefined;
  public type?: 'artist' | 'listener' | undefined;
  public labels?: string[] | Label[] | undefined;
  public name?: string | undefined;
  public styles?: string[] | Style[] | undefined;
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
  public user?: string | User | undefined;
  public coverPicture?: string | Media | undefined;
  public profilePicture?: string | Media | undefined;
  public subscriptions?: string[] | Profile[] | undefined;
  public subscribers?: string[] | Profile[] | undefined;
  public likes?: string[] | Like[] | undefined;
  public posts?: string[] | Post[] | undefined;
  public comments?: string[] | Comment[] | undefined;
  public tracks?: string[] | Track[] | undefined;

  private validId = Joi.string();
  private validHandle = Joi.string()
    .min(2)
    .max(30);
  private validType = Joi.string();
  private validLabels = Joi.array();
  private validName = Joi.string();
  private validStyles = Joi.array();
  private validLatitude = Joi.number();
  private validLongitude = Joi.number();
  private validBio = Joi.string().max(2000);
  private validBioShort = Joi.string().max(300);
  private validPrivate = Joi.bool();
  private validCity = Joi.string();
  private validState = Joi.string();
  private validCountry = Joi.string();
  private validCreatedAt = Joi.date();
  private validUpdatedAt = Joi.date();
  private validUser = Joi.string();
  private validCoverPicture = Joi.string();
  private validProfilePicture = Joi.string();
  private validSubscriptions = Joi.array();
  private validSubscribers = Joi.array();
  private validLikes = Joi.array();
  private validPosts = Joi.array();
  private validComments = Joi.array();
  private validTracks = Joi.array();

  /**
   * Joi Profile Schema
   * @type {Joi.ObjectSchema}
   * @memberof Profile
   */
  public profileSchema: Joi.ObjectSchema = Joi.object()
    .keys({
      id: this.validId,
      handle: this.validHandle,
      type: this.validType,
      labels: this.validLabels,
      name: this.validName,
      styles: this.validStyles,
      latitude: this.validLatitude,
      longitude: this.validLongitude,
      bio: this.validBio,
      bioShort: this.validBioShort,
      isPrivate: this.validPrivate,
      city: this.validCity,
      state: this.validState,
      country: this.validCountry,
      createdAt: this.validCreatedAt,
      updatedAt: this.validUpdatedAt,
      user: this.validUser,
      coverPicture: this.validCoverPicture,
      profilePicture: this.validProfilePicture,
      subscriptions: this.validSubscriptions,
      subscribers: this.validSubscribers,
      likes: this.validLikes,
      posts: this.validPosts,
      comments: this.validComments,
      tracks: this.validTracks
    })
    .with('id', ['createdAt', 'updatedAt']);

  /**
   * Copy properties from an object to instance properties
   * @param {Profile} data
   * @returns {ProfileEntity}
   * @memberof Profile
   */
  public copyData(data: Profile): ProfileEntity {
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
   * @returns {Profile}
   * @memberof Profile
   */
  public getRaw(): Profile {
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
   * @param {Profile} data
   * @returns {Joi.ValidationResult<Profile>}
   * @memberof Profile
   */
  public validate(data: Profile): Joi.ValidationResult<Profile> {
    return Joi.validate(data, this.profileSchema);
  }

  /**
   * Validates id property
   * @param {string} id
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateId(id: string): Joi.ValidationResult<string> {
    return Joi.validate(id, this.validId);
  }

  /**
   * Validates handle property
   * @param {string} handle
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateHandle(handle: string): Joi.ValidationResult<string> {
    return Joi.validate(handle, this.validHandle);
  }

  /**
   * Validates type property
   * @param {ProfileType} type
   * @returns {Joi.ValidationResult<ProfileType>}
   * @memberof Profile
   */
  public validateType(type: ProfileType): Joi.ValidationResult<ProfileType> {
    return Joi.validate(type, this.validType);
  }

  /**
   * Validates labels property
   * @param {string[] | Label[]} labels
   * @returns {Joi.ValidationResult<string[] | Label[]>}
   * @memberof Profile
   */
  public validateLabels(labels: string[] | Label[]): Joi.ValidationResult<string[] | Label[]> {
    return Joi.validate(labels, this.validLabels);
  }

  /**
   * Validates name property
   * @param {string} name
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateName(name: string): Joi.ValidationResult<string> {
    return Joi.validate(name, this.validName);
  }

  /**
   * Validates styles property
   * @param {string[] | Style[]} styles
   * @returns {Joi.ValidationResult<string[] | Style[]>}
   * @memberof Profile
   */
  public validateStyles(styles: string[] | Style[]): Joi.ValidationResult<string[] | Style[]> {
    return Joi.validate(styles, this.validStyles);
  }

  /**
   * Validates latitude property
   * @param {number} latitude
   * @returns {Joi.ValidationResult<number>}
   * @memberof Profile
   */
  public validateLatitude(latitude: number): Joi.ValidationResult<number> {
    return Joi.validate(latitude, this.validLatitude);
  }

  /**
   * Validates longitude property
   * @param {number} longitude
   * @returns {Joi.ValidationResult<number>}
   * @memberof Profile
   */
  public validateLongitude(longitude: number): Joi.ValidationResult<number> {
    return Joi.validate(longitude, this.validLongitude);
  }

  /**
   * Validates bio property
   * @param {string} bio
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateBio(bio: string): Joi.ValidationResult<string> {
    return Joi.validate(bio, this.validBio);
  }

  /**
   * Validates bioShort property
   * @param {string} bioShort
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateBioShort(bioShort: string): Joi.ValidationResult<string> {
    return Joi.validate(bioShort, this.validBioShort);
  }

  /**
   * Validates isPrivate property
   * @param {string} isPrivate
   * @returns {Joi.ValidationResult<boolean>}
   * @memberof Profile
   */
  public validatePrivate(isPrivate: boolean): Joi.ValidationResult<boolean> {
    return Joi.validate(isPrivate, this.validPrivate);
  }

  /**
   * Validates city property
   * @param {string} city
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateCity(city: string): Joi.ValidationResult<string> {
    return Joi.validate(city, this.validCity);
  }

  /**
   * Validates state property
   * @param {string} state
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateState(state: string): Joi.ValidationResult<string> {
    return Joi.validate(state, this.validState);
  }

  /**
   * Validates country property
   * @param {string} country
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateCountry(country: string): Joi.ValidationResult<string> {
    return Joi.validate(country, this.validCountry);
  }

  /**
   * Validates createdAt property
   * @param {Date} createdAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Profile
   */
  public validateCreatedAt(createdAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(createdAt, this.validCreatedAt);
  }

  /**
   * Validates updatedAt property
   * @param {Date} updatedAt
   * @returns {Joi.ValidationResult<Date>}
   * @memberof Profile
   */
  public validateUpdatedAt(updatedAt: Date): Joi.ValidationResult<Date> {
    return Joi.validate(updatedAt, this.validUpdatedAt);
  }

  /**
   * Validates user property
   * @param {string | User} user
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateUser(user: string | User): Joi.ValidationResult<string> {
    const id = typeof user !== 'string' && user.id ? user.id : (user as string);
    return Joi.validate(id, this.validUser);
  }

  /**
   * Validates coverPicture property
   * @param {string} coverPicture
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateCoverPicture(coverPicture: string): Joi.ValidationResult<string> {
    return Joi.validate(coverPicture, this.validCoverPicture);
  }

  /**
   * Validates profilePicture property
   * @param {string} profilePicture
   * @returns {Joi.ValidationResult<string>}
   * @memberof Profile
   */
  public validateProfilePicture(profilePicture: string): Joi.ValidationResult<string> {
    return Joi.validate(profilePicture, this.validProfilePicture);
  }

  /**
   * Validates subscriptions property
   * @param {string[] | Profile[]} subscriptions
   * @returns {Joi.ValidationResult<string[] | Profile[]>}
   * @memberof Profile
   */
  public validateSubscriptions(
    subscriptions: string[] | Profile[]
  ): Joi.ValidationResult<string[] | Profile[]> {
    return Joi.validate(subscriptions, this.validSubscriptions);
  }

  /**
   * Validates subscribers property
   * @param {string[] | Profile[]} subscribers
   * @returns {Joi.ValidationResult<string[] | Profile[]>}
   * @memberof Profile
   */
  public validateSubscribers(
    subscribers: string[] | Profile[]
  ): Joi.ValidationResult<string[] | Profile[]> {
    return Joi.validate(subscribers, this.validSubscribers);
  }

  /**
   * Validates likes property
   * @param {string[] | Like[]} likes
   * @returns {Joi.ValidationResult<string[] | Like[]>}
   * @memberof Profile
   */
  public validateLikes(likes: string[] | Like[]): Joi.ValidationResult<string[] | Like[]> {
    return Joi.validate(likes, this.validLikes);
  }

  /**
   * Validates posts property
   * @param {string[] | Post[]} posts
   * @returns {Joi.ValidationResult<string[] | Post[]>}
   * @memberof Profile
   */
  public validatePosts(posts: string[] | Post[]): Joi.ValidationResult<string[] | Post[]> {
    return Joi.validate(posts, this.validPosts);
  }

  /**
   * Validates comments property
   * @param {string[] | Comment[]} comments
   * @returns {Joi.ValidationResult<string[] | Comment[]>}
   * @memberof Profile
   */
  public validateComments(
    comments: string[] | Comment[]
  ): Joi.ValidationResult<string[] | Comment[]> {
    return Joi.validate(comments, this.validComments);
  }

  /**
   * Validates tracks property
   * @param {string[] | Track[]} tracks
   * @returns {Joi.ValidationResult<string[] | Track[]>}
   * @memberof Profile
   */
  public validateTracks(tracks: string[] | Track[]): Joi.ValidationResult<string[] | Track[]> {
    return Joi.validate(tracks, this.validTracks);
  }
}
