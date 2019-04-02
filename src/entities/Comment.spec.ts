import test from 'ava';

import { Comment } from '../types/entities';
import { CommentEntity } from './Comment';

const now = new Date(Date.now());

let comment: CommentEntity;
let commentData: Comment;

test.beforeEach(() => {
  comment = new CommentEntity();
  commentData = {
    id: 'idComment1',
    type: 'post',
    text: 'This is a comment',
    by: 'idProfile1',
    post: 'idPost1',
    track: 'idTrack1',
    trackAt: 60000, // 1 minute
    createdAt: now,
    updatedAt: now
  };
});

test('should copy an object data into a Comment instance', t => {
  const data = commentData;
  comment.copyData(data);

  t.is(comment.id, 'idComment1');
  t.is(comment.type, 'post');
  t.is(comment.text, 'This is a comment');
  t.is(comment.by, 'idProfile1');
  t.is(comment.post, 'idPost1');
  t.is(comment.track, 'idTrack1');
  t.is(comment.trackAt, 60000);
  t.is(comment.createdAt, now);
  t.is(comment.updatedAt, now);
  t.pass();
});

test('should return the raw data', t => {
  const data = commentData;
  comment.copyData(data);

  const rawData = comment.getRaw();

  t.is(rawData.id, 'idComment1');
  t.is(rawData.type, 'post');
  t.is(rawData.text, 'This is a comment');
  t.is(rawData.by, 'idProfile1');
  t.is(rawData.post, 'idPost1');
  t.is(rawData.track, 'idTrack1');
  t.is(rawData.trackAt, 60000);
  t.is(rawData.createdAt, now);
  t.is(rawData.updatedAt, now);
  t.pass();
});

test('should return id is invalid for empty string', t => {
  const validationResult = comment.validateId('');
  t.truthy(validationResult.error);
  t.pass();
});

test('should return id is valid', t => {
  const id = commentData.id as string;
  const validationResult = comment.validateId(id);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return type is valid', t => {
  const type = commentData.type as string;
  const validationResult = comment.validateType(type);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return text is valid', t => {
  const text = commentData.text as string;
  const validationResult = comment.validateText(text);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return by is valid', t => {
  const by = commentData.by as string;
  const validationResult = comment.validateBy(by);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return by (object) is valid', t => {
  const by = { id: commentData.by as string };
  const validationResult = comment.validateBy(by);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return post is valid', t => {
  const post = commentData.post as string;
  const validationResult = comment.validatePost(post);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return post (object) is valid', t => {
  const post = { id: commentData.post as string };
  const validationResult = comment.validatePost(post);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return track is valid', t => {
  const track = commentData.track as string;
  const validationResult = comment.validateTrack(track);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return track (object) is valid', t => {
  const track = { id: commentData.track as string };
  const validationResult = comment.validateTrack(track);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return trackAt is valid', t => {
  const trackAt = commentData.trackAt as number;
  const validationResult = comment.validateTrackAt(trackAt);
  t.is(validationResult.error, null);
});

test('should return createdAt is valid', t => {
  const createdAt = commentData.createdAt as Date;
  const validationResult = comment.validateCreatedAt(createdAt);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return updatedAt is valid', t => {
  const updatedAt = commentData.updatedAt as Date;
  const validationResult = comment.validateUpdatedAt(updatedAt);
  t.is(validationResult.error, null);
  t.pass();
});

test('should validate', t => {
  const data = commentData;
  const validationResult = comment.validate(data);
  t.is(validationResult.error, null);
  t.pass();
});
