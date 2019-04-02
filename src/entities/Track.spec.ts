import test from 'ava';

import { Track, TrackType } from '../types/entities';
import { TrackEntity } from './Track';

const now = new Date(Date.now());

let track: TrackEntity;
let trackData: Track;

test.beforeEach(() => {
  track = new TrackEntity();
  trackData = {
    id: 'idTrack1',
    type: 'original',
    title: 'Track Title',
    edit: 'original',
    explicit: false,
    description: 'This is a description',
    profiles: ['idProfile1'],
    createdAt: now,
    updatedAt: now,
    label: 'idLabel1',
    likes: ['idLike1', 'idLike2'],
    posts: ['idPost1', 'idpost2'],
    comments: ['idComment1', 'idComment2'],
    audioUrl: 'audiourl',
    coverUrl: 'coverurl'
  };
});

test('should copy an object data into a Track instance', t => {
  const data = trackData;
  track.copyData(data);

  t.is(track.id, 'idTrack1');
  t.is(track.type, 'original');
  t.is(track.title, 'Track Title');
  t.is(track.edit, 'original');
  t.is(track.explicit, false);
  t.is(track.description, 'This is a description');
  t.deepEqual(track.profiles, ['idProfile1']);
  t.is(track.createdAt, now);
  t.is(track.updatedAt, now);
  t.is(track.label, 'idLabel1');
  t.deepEqual(track.likes, ['idLike1', 'idLike2']);
  t.deepEqual(track.posts, ['idPost1', 'idpost2']);
  t.deepEqual(track.comments, ['idComment1', 'idComment2']);
  t.is(track.audioUrl, 'audiourl');
  t.is(track.coverUrl, 'coverurl');
  t.pass();
});

test('should return the raw data', t => {
  const data = trackData;
  track.copyData(data);

  const rawData = track.getRaw();

  t.is(rawData.id, 'idTrack1');
  t.is(rawData.type, 'original');
  t.is(rawData.title, 'Track Title');
  t.is(rawData.edit, 'original');
  t.is(rawData.explicit, false);
  t.is(rawData.description, 'This is a description');
  t.deepEqual(rawData.profiles, ['idProfile1']);
  t.is(rawData.createdAt, now);
  t.is(rawData.updatedAt, now);
  t.is(rawData.label, 'idLabel1');
  t.deepEqual(rawData.likes, ['idLike1', 'idLike2']);
  t.deepEqual(rawData.posts, ['idPost1', 'idpost2']);
  t.deepEqual(rawData.comments, ['idComment1', 'idComment2']);
  t.is(rawData.audioUrl, 'audiourl');
  t.is(rawData.coverUrl, 'coverurl');
  t.pass();
});

test('should return id is invalid for empty string', t => {
  const validationResult = track.validateId('');
  t.truthy(validationResult.error);
  t.pass();
});

test('should return id is valid', t => {
  const id = trackData.id as string;
  const validationResult = track.validateId(id);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return type is valid', t => {
  const type = trackData.type as TrackType;
  const validationResult = track.validateType(type);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return title is valid', t => {
  const title = trackData.title as string;
  const validationResult = track.validateTitle(title);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return edit is valid', t => {
  const edit = trackData.edit as string;
  const validationResult = track.validateEdit(edit);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return explicit is valid', t => {
  const explicit = trackData.explicit as boolean;
  const validationResult = track.validateExplicit(explicit);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return description is valid', t => {
  const description = trackData.description as string;
  const validationResult = track.validateDescription(description);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return profiles is valid', t => {
  const profiles = trackData.profiles as string[];
  const validationResult = track.validateProfiles(profiles);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return createdAt is valid', t => {
  const createdAt = trackData.createdAt as Date;
  const validationResult = track.validateCreatedAt(createdAt);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return updatedAt is valid', t => {
  const updatedAt = trackData.updatedAt as Date;
  const validationResult = track.validateUpdatedAt(updatedAt);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return label is valid', t => {
  const label = trackData.label as string;
  const validationResult = track.validateLabel(label);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return label (object) is valid', t => {
  const label = { id: trackData.label as string };
  const validationResult = track.validateLabel(label);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return likes is valid', t => {
  const likes = trackData.likes as string[];
  const validationResult = track.validateLikes(likes);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return posts is valid', t => {
  const posts = trackData.posts as string[];
  const validationResult = track.validatePosts(posts);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return comments is valid', t => {
  const comments = trackData.comments as string[];
  const validationResult = track.validateComments(comments);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return audioUrl is valid', t => {
  const audioUrl = trackData.audioUrl as string;
  const validationResult = track.validateAudioUrl(audioUrl);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return coverUrl is valid', t => {
  const coverUrl = trackData.coverUrl as string;
  const validationResult = track.validateCoverUrl(coverUrl);
  t.is(validationResult.error, null);
  t.pass();
});

test('should validate', t => {
  const data = trackData;
  const validationResult = track.validate(data);
  t.is(validationResult.error, null);
  t.pass();
});
