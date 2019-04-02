import test from 'ava';

import { styleData } from './getSample';
import { StyleEntity } from './Style';

const now = styleData.createdAt;

let style: StyleEntity;
test.beforeEach(() => {
  style = new StyleEntity(styleData);
});

test('should copy an object data into a Style instance', t => {
  const data = styleData;
  style.copyData(data);

  t.is(style.id, 'idStyle1');
  t.is(style.name, 'Electro');
  t.is(style.description, 'This is a style');
  t.is(style.createdAt, now);
  t.is(style.updatedAt, now);
  t.deepEqual(style.profiles, ['idProfile1', 'idProfile2']);
  t.pass();
});

test('should return the raw data', t => {
  const data = styleData;
  style.copyData(data);

  const rawData = style.getRaw();

  t.is(rawData.id, 'idStyle1');
  t.is(rawData.name, 'Electro');
  t.is(rawData.description, 'This is a style');
  t.is(rawData.createdAt, now);
  t.is(rawData.updatedAt, now);
  t.deepEqual(rawData.profiles, ['idProfile1', 'idProfile2']);
  t.pass();
});

test('should return id is invalid for empty string', t => {
  const validationResult = style.validateId('');
  t.truthy(validationResult.error);
  t.pass();
});

test('should return id is valid', t => {
  const id = styleData.id as string;
  const validationResult = style.validateId(id);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return name is valid', t => {
  const name = styleData.name as string;
  const validationResult = style.validateName(name);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return description is valid', t => {
  const description = styleData.description as string;
  const validationResult = style.validateDescription(description);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return createdAt is valid', t => {
  const createdAt = styleData.createdAt as Date;
  const validationResult = style.validateCreatedAt(createdAt);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return updatedAt is valid', t => {
  const updatedAt = styleData.updatedAt as Date;
  const validationResult = style.validateUpdatedAt(updatedAt);
  t.is(validationResult.error, null);
  t.pass();
});

test('should return profiles is valid', t => {
  const profiles = styleData.profiles as string[];
  const validationResult = style.validateProfiles(profiles);
  t.is(validationResult.error, null);
  t.pass();
});

test('should validate', t => {
  const data = styleData;
  const validationResult = style.validate(data);
  t.is(validationResult.error, null);
  t.pass();
});
