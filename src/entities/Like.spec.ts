import test from 'ava';

import { Like, LikeEntity } from './Like';

const now = new Date(Date.now());

let like: LikeEntity;
let likeData: Like;

test.beforeEach(() => {
  like = new LikeEntity();
  likeData = {
    id: 'idLike1',
    emotion: 'Haha',
    intensity: 5,
    createdAt: now,
    updatedAt: now,
    track: 'idTrack1',
    profile: 'idProfile1'
  };
});

test('should copy an object data into a Like instance', t => {
  const data = likeData;
  like.copyData(data);

  t.is(like.id, 'idLike1');
  t.is(like.emotion, 'Haha');
  t.is(like.intensity, 5);
  t.is(like.createdAt, now);
  t.is(like.updatedAt, now);
  t.is(like.track, 'idTrack1');
  t.is(like.profile, 'idProfile1');
  t.pass();
});

test('should return the raw data', t => {
  const data = likeData;
  like.copyData(data);

  const rawData = like.getRaw();

  t.is(rawData.id, 'idLike1');
  t.is(rawData.emotion, 'Haha');
  t.is(rawData.intensity, 5);
  t.is(rawData.createdAt, now);
  t.is(rawData.updatedAt, now);
  t.is(rawData.track, 'idTrack1');
  t.is(rawData.profile, 'idProfile1');
  t.pass();
});

test('should return id is invalid for empty string', t => {
  const validationResult = like.validateId('');
  t.truthy(validationResult.error);
  t.pass();
});

test('should return id is valid', t => {
  const id = likeData.id as string;
  const validationResult = like.validateId(id);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return emotion is valid', t => {
  const emotion = likeData.emotion as string;
  const validationResult = like.validateEmotion(emotion);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return intensity is valid', t => {
  const intensity = likeData.intensity as number;
  const validationResult = like.validateIntensity(intensity);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return createdAt is valid', t => {
  const createdAt = likeData.createdAt as Date;
  const validationResult = like.validateCreatedAt(createdAt);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return updatedAt is valid', t => {
  const updatedAt = likeData.updatedAt as Date;
  const validationResult = like.validateUpdatedAt(updatedAt);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return profile is valid', t => {
  const profile = likeData.profile as string;
  const validationResult = like.validateProfile(profile);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return profile (object) is valid', t => {
  const profile = { id: likeData.profile as string };
  const validationResult = like.validateProfile(profile);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return track is valid', t => {
  const track = likeData.track as string;
  const validationResult = like.validateTrack(track);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return track (object) is valid', t => {
  const track = { id: likeData.track as string };
  const validationResult = like.validateTrack(track);
  t.is(validationResult.error, null);
  t.pass();
});

test('should validate', t => {
  const data = likeData;
  const validationResult = like.validate(data);
  t.is(validationResult.error, null);
  t.pass();
});
