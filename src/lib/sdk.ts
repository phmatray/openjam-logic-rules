import Strapi from 'strapi-sdk-javascript';

import { Comment } from '../entities/Comment';
import { Label } from '../entities/Label';
import { Like } from '../entities/Like';
import { Media } from '../entities/Media';
import { Post } from '../entities/Post';
import { Profile } from '../entities/Profile';
import { Style } from '../entities/Style';
import { Track } from '../entities/Track';
import { User } from '../entities/User';

export default class OpenJam {
  public strapi: Strapi;
  public baseURL: string;

  public constructor(baseURL: string = 'http://localhost:1337') {
    this.baseURL = baseURL;
    this.strapi = new Strapi(baseURL);
  }

  public async getComments() {
    const comments: Comment[] = await this.strapi.getEntries('comments');
    return comments;
  }

  public async createComment(data: Comment) {
    const comment: Comment = await this.strapi.createEntry('comments', data);
    return comment;
  }

  public async getLabels() {
    const labels: Label[] = await this.strapi.getEntries('labels');
    return labels;
  }

  public async createLabel(data: Label) {
    const label: Label = await this.strapi.createEntry('labels', data);
    return label;
  }

  public async getLikes() {
    const likes: Like[] = await this.strapi.getEntries('likes');
    return likes;
  }

  public async createLike(data: Like) {
    const like: Like = await this.strapi.createEntry('likes', data);
    return like;
  }

  public async getMedias() {
    const medias: Media[] = await this.strapi.getEntries('medias');
    return medias;
  }

  public async createMedia(data: Media) {
    const media: Media = await this.strapi.createEntry('medias', data);
    return media;
  }

  public async getPosts() {
    const posts: Post[] = await this.strapi.getEntries('posts');
    return posts;
  }

  public async createPost(data: Post) {
    const post: Post = await this.strapi.createEntry('posts', data);
    return post;
  }

  public async getProfiles() {
    const profiles: Profile[] = await this.strapi.getEntries('profiles');
    return profiles;
  }

  public async createProfile(data: Profile) {
    const profile: Profile = await this.strapi.createEntry('profiles', data);
    return profile;
  }

  public async getStyles() {
    const styles: Style[] = await this.strapi.getEntries('styles');
    return styles;
  }

  public async createStyle(data: Style) {
    const style: Style = await this.strapi.createEntry('styles', data);
    return style;
  }

  public async getTracks() {
    const tracks: Track[] = await this.strapi.getEntries('tracks');
    return tracks;
  }

  public async createTrack(data: Track) {
    const track: Track = await this.strapi.createEntry('tracks', data);
    return track;
  }

  public async getUsers() {
    const users: User[] = await this.strapi.getEntries('users');
    return users;
  }

  public async createUser(data: User) {
    const user: User = await this.strapi.createEntry('users', data);
    return user;
  }
}

export { Comment, Label, Like, Media, Post, Profile, Style, Track, User };
