import Strapi from 'strapi-sdk-javascript';

import { IComment } from './entities/Comment';
import { ILabel } from './entities/Label';
import { ILike } from './entities/Like';
import { IMedia } from './entities/Media';
import { IPost } from './entities/Post';
import { IProfile } from './entities/Profile';
import { IStyle } from './entities/Style';
import { ITrack } from './entities/Track';
import { IUser } from './entities/User';

export interface IOpenJam {
  strapi: Strapi;
  baseURL: string;
  getComments: () => Promise<IComment[]>;
  createComment: (data: IComment) => Promise<IComment>;
  getLabels: () => Promise<ILabel[]>;
  createLabel: (data: ILabel) => Promise<ILabel>;
  getLikes: () => Promise<ILike[]>;
  createLike: (data: ILike) => Promise<ILike>;
  getMedias: () => Promise<IMedia[]>;
  createMedia: (data: IMedia) => Promise<IMedia>;
  getPosts: () => Promise<IPost[]>;
  createPost: (data: IPost) => Promise<IPost>;
  getProfiles: () => Promise<IProfile[]>;
  createProfile: (data: IProfile) => Promise<IProfile>;
  getStyles: () => Promise<IStyle[]>;
  createStyle: (data: IStyle) => Promise<IStyle>;
  getTracks: () => Promise<ITrack[]>;
  createTrack: (data: ITrack) => Promise<ITrack>;
  getUsers: () => Promise<IUser[]>;
  createUser: (data: IUser) => Promise<IUser>;
}

export class OpenJam implements IOpenJam {
  public strapi: Strapi;
  public baseURL: string;

  public constructor(baseURL: string = 'http://localhost:1337') {
    this.baseURL = baseURL;
    this.strapi = new Strapi(baseURL);
  }

  public async getComments() {
    const comments: IComment[] = await this.strapi.getEntries('comments');
    return comments;
  }

  public async createComment(data: IComment) {
    const comment: IComment = await this.strapi.createEntry('comments', data);
    return comment;
  }

  public async getLabels() {
    const labels: ILabel[] = await this.strapi.getEntries('labels');
    return labels;
  }

  public async createLabel(data: ILabel) {
    const label: ILabel = await this.strapi.createEntry('labels', data);
    return label;
  }

  public async getLikes() {
    const likes: ILike[] = await this.strapi.getEntries('likes');
    return likes;
  }

  public async createLike(data: ILike) {
    const like: ILike = await this.strapi.createEntry('likes', data);
    return like;
  }

  public async getMedias() {
    const medias: IMedia[] = await this.strapi.getEntries('medias');
    return medias;
  }

  public async createMedia(data: IMedia) {
    const media: IMedia = await this.strapi.createEntry('medias', data);
    return media;
  }

  public async getPosts() {
    const posts: IPost[] = await this.strapi.getEntries('posts');
    return posts;
  }

  public async createPost(data: IPost) {
    const post: IPost = await this.strapi.createEntry('posts', data);
    return post;
  }

  public async getProfiles() {
    const profiles: IProfile[] = await this.strapi.getEntries('profiles');
    return profiles;
  }

  public async createProfile(data: IProfile) {
    const profile: IProfile = await this.strapi.createEntry('profiles', data);
    return profile;
  }

  public async getStyles() {
    const styles: IStyle[] = await this.strapi.getEntries('styles');
    return styles;
  }

  public async createStyle(data: IStyle) {
    const style: IStyle = await this.strapi.createEntry('styles', data);
    return style;
  }

  public async getTracks() {
    const tracks: ITrack[] = await this.strapi.getEntries('tracks');
    return tracks;
  }

  public async createTrack(data: ITrack) {
    const track: ITrack = await this.strapi.createEntry('tracks', data);
    return track;
  }

  public async getUsers() {
    const users: IUser[] = await this.strapi.getEntries('users');
    return users;
  }

  public async createUser(data: IUser) {
    const user: IUser = await this.strapi.createEntry('users', data);
    return user;
  }
}

export { IComment, ILabel, ILike, IMedia, IPost, IProfile, IStyle, ITrack, IUser };
