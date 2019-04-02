import test from 'ava';

import { labelData } from './getSample';
import { LabelEntity } from './Label';

const now = labelData.createdAt;

let label: LabelEntity;
test.beforeEach(() => {
  label = new LabelEntity(labelData);
});

test('should copy an object data into a Label instance', t => {
  const data = labelData;
  label.copyData(data);

  t.is(label.id, 'idLabel1');
  t.is(label.name, 'LabelName');
  t.is(label.description, 'This is a label');
  t.is(label.createdAt, now);
  t.is(label.updatedAt, now);
  t.deepEqual(label.tracks, ['idTrack1', 'idTrack2']);
  t.deepEqual(label.profiles, ['idProfile1', 'idProfile2']);
  t.pass();
});

test('should return the raw data', t => {
  const data = labelData;
  label.copyData(data);

  const rawData = label.getRaw();

  t.is(rawData.id, 'idLabel1');
  t.is(rawData.name, 'LabelName');
  t.is(rawData.description, 'This is a label');
  t.is(rawData.createdAt, now);
  t.is(rawData.updatedAt, now);
  t.deepEqual(rawData.tracks, ['idTrack1', 'idTrack2']);
  t.deepEqual(rawData.profiles, ['idProfile1', 'idProfile2']);
  t.pass();
});

test('should return id is invalid for empty string', t => {
  const validationResult = label.validateId('');
  t.truthy(validationResult.error);
  t.pass();
});

test('should return id is valid', t => {
  const id = labelData.id as string;
  const validationResult = label.validateId(id);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return name is valid', t => {
  const name = labelData.name as string;
  const validationResult = label.validateName(name);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return description is valid', t => {
  const description = labelData.description as string;
  const validationResult = label.validateDescription(description);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return createdAt is valid', t => {
  const createdAt = labelData.createdAt as Date;
  const validationResult = label.validateCreatedAt(createdAt);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return updatedAt is valid', t => {
  const updatedAt = labelData.updatedAt as Date;
  const validationResult = label.validateUpdatedAt(updatedAt);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return tracks is valid', t => {
  const tracks = labelData.tracks as string[];
  const validationResult = label.validateTracks(tracks);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return profiles is valid', t => {
  const profiles = labelData.profiles as string[];
  const validationResult = label.validateProfiles(profiles);
  t.is(validationResult.error, null);
  t.pass();
});

test('should validate', t => {
  const data = labelData;
  const validationResult = label.validate(data);
  t.is(validationResult.error, null);
  t.pass();
});
