import test from 'ava';

import { Post, PostEntity } from './Post';

const now = new Date(Date.now());

let post: PostEntity;
let postData: Post;

test.beforeEach(() => {
  post = new PostEntity();
  postData = {
    id: 'idPost1',
    type: 'post',
    content: 'This is a post',
    createdAt: now,
    updatedAt: now,
    profile: 'idProfile1',
    likes: ['idLike1', 'idLike2'],
    comments: ['idComment1', 'idComment2'],
    track: 'idTrack1'
  };
});

test('should copy an object data into a Post instance', t => {
  const data = postData;
  post.copyData(data);

  t.is(post.id, 'idPost1');
  t.is(post.type, 'post');
  t.is(post.content, 'This is a post');
  t.is(post.createdAt, now);
  t.is(post.updatedAt, now);
  t.is(post.profile, 'idProfile1');
  t.deepEqual(post.likes, ['idLike1', 'idLike2']);
  t.deepEqual(post.comments, ['idComment1', 'idComment2']);
  t.is(post.track, 'idTrack1');
  t.pass();
});

test('should return the raw data', t => {
  const data = postData;
  post.copyData(data);

  const rawData = post.getRaw();

  t.is(rawData.id, 'idPost1');
  t.is(rawData.type, 'post');
  t.is(rawData.content, 'This is a post');
  t.is(rawData.createdAt, now);
  t.is(rawData.updatedAt, now);
  t.is(rawData.profile, 'idProfile1');
  t.deepEqual(rawData.likes, ['idLike1', 'idLike2']);
  t.deepEqual(rawData.comments, ['idComment1', 'idComment2']);
  t.is(rawData.track, 'idTrack1');
  t.pass();
});

test('should return id is invalid for empty string', t => {
  const validationResult = post.validateId('');
  t.truthy(validationResult.error);
  t.pass();
});

test('should return id is valid', t => {
  const id = postData.id as string;
  const validationResult = post.validateId(id);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return type is valid', t => {
  const type = postData.type as string;
  const validationResult = post.validateType(type);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return content is valid', t => {
  const content = postData.content as string;
  const validationResult = post.validateContent(content);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return createdAt is valid', t => {
  const createdAt = postData.createdAt as Date;
  const validationResult = post.validateCreatedAt(createdAt);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return updatedAt is valid', t => {
  const updatedAt = postData.updatedAt as Date;
  const validationResult = post.validateUpdatedAt(updatedAt);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return profile is valid', t => {
  const profile = postData.profile as string;
  const validationResult = post.validateProfile(profile);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return profile (object) is valid', t => {
  const profile = { id: postData.profile as string };
  const validationResult = post.validateProfile(profile);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return likes is valid', t => {
  const likes = postData.likes as string[];
  const validationResult = post.validateLikes(likes);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return comments is valid', t => {
  const comments = postData.comments as string[];
  const validationResult = post.validateComments(comments);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return track is valid', t => {
  const track = postData.track as string;
  const validationResult = post.validateTrack(track);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return track (object) is valid', t => {
  const track = { id: postData.track as string };
  const validationResult = post.validateTrack(track);
  t.is(validationResult.error, null);
  t.pass();
});

test('should validate', t => {
  const data = postData;
  const validationResult = post.validate(data);
  t.is(validationResult.error, null);
  t.pass();
});
