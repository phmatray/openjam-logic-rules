import test from 'ava';
import { Track, TrackEntity } from './Track';

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

test('should validate', t => {
  const data = trackData;
  const validationResult = track.validate(data);
  t.is(validationResult.error, null);
  t.pass();
});
