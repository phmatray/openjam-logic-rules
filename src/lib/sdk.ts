import Strapi from 'strapi-sdk-javascript';

import { Comment, Label, Like, Media, Post, Profile, Style, Track, User } from '../types/entities';

export default class OpenJam {
  public strapi: Strapi;
  public baseURL: string;

  public constructor(baseURL: string = 'http://localhost:1337') {
    this.baseURL = baseURL;
    this.strapi = new Strapi(baseURL);
  }

  public async getComments(): Promise<Comment[]> {
    return (await this.strapi.getEntries('comments')) as Comment[];
  }

  public async createComment(data: Comment): Promise<Comment> {
    return (await this.strapi.createEntry('comments', data)) as Comment;
  }

  public async getLabels(): Promise<Label[]> {
    return (await this.strapi.getEntries('labels')) as Label[];
  }

  public async createLabel(data: Label): Promise<Label> {
    return (await this.strapi.createEntry('labels', data)) as Label;
  }

  public async getLikes(): Promise<Like[]> {
    return (await this.strapi.getEntries('likes')) as Like[];
  }

  public async createLike(data: Like): Promise<Like> {
    return (await this.strapi.createEntry('likes', data)) as Like;
  }

  public async getMedias(): Promise<Media[]> {
    return (await this.strapi.getEntries('medias')) as Media[];
  }

  public async createMedia(data: Media): Promise<Media> {
    return (await this.strapi.createEntry('medias', data)) as Media;
  }

  public async getPosts(): Promise<Post[]> {
    return (await this.strapi.getEntries('posts')) as Post[];
  }

  public async createPost(data: Post): Promise<Post> {
    return (await this.strapi.createEntry('posts', data)) as Post;
  }

  public async getProfiles(): Promise<Profile[]> {
    return (await this.strapi.getEntries('profiles')) as Profile[];
  }

  public async createProfile(data: Profile): Promise<Profile> {
    return (await this.strapi.createEntry('profiles', data)) as Profile;
  }

  public async getStyles(): Promise<Style[]> {
    return (await this.strapi.getEntries('styles')) as Style[];
  }

  public async createStyle(data: Style): Promise<Style> {
    return (await this.strapi.createEntry('styles', data)) as Style;
  }

  public async getTracks(): Promise<Track[]> {
    return (await this.strapi.getEntries('tracks')) as Track[];
  }

  public async createTrack(data: Track): Promise<Track> {
    return (await this.strapi.createEntry('tracks', data)) as Track;
  }

  public async getUsers(): Promise<User[]> {
    return (await this.strapi.getEntries('users')) as User[];
  }

  public async createUser(data: User): Promise<User> {
    return (await this.strapi.createEntry('users', data)) as User;
  }
}

export { Comment, Label, Like, Media, Post, Profile, Style, Track, User };
