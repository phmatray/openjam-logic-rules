import { Comment, IComment, ICommentEntity } from './Comment';

describe('Test Comment entity', () => {
  const now = new Date(Date.now());

  let comment: ICommentEntity;
  let commentData: IComment;

  beforeEach(() => {
    comment = new Comment();
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

  it('should copy an object data into a Comment instance', () => {
    const data = commentData;
    comment.copyData(data);

    expect(comment.id).toBe('idComment1');
    expect(comment.type).toBe('post');
    expect(comment.text).toBe('This is a comment');
    expect(comment.by).toBe('idProfile1');
    expect(comment.post).toBe('idPost1');
    expect(comment.track).toBe('idTrack1');
    expect(comment.trackAt).toBe(60000);
    expect(comment.createdAt).toBe(now);
    expect(comment.updatedAt).toBe(now);
  });

  it('should return the raw data', () => {
    const data = commentData;
    comment.copyData(data);

    const rawData = comment.getRaw();

    expect(rawData.id).toBe('idComment1');
    expect(rawData.type).toBe('post');
    expect(rawData.text).toBe('This is a comment');
    expect(rawData.by).toBe('idProfile1');
    expect(rawData.post).toBe('idPost1');
    expect(comment.track).toBe('idTrack1');
    expect(comment.trackAt).toBe(60000);
    expect(comment.createdAt).toBe(now);
    expect(comment.updatedAt).toBe(now);
  });

  it('should return id is invalid for empty string', () => {
    const validationResult = comment.validateId('Hello');
    expect(validationResult.error);
  });

  it('should return id is valid', () => {
    const id = commentData.id;
    const validationResult = comment.validateId(id);
    expect(validationResult.error).toBeNull();
  });

  it('should return type is valid', () => {
    const type = commentData.type;
    const validationResult = comment.validateType(type);
    expect(validationResult.error).toBeNull();
  });

  it('should return text is valid', () => {
    const text = commentData.text;
    const validationResult = comment.validateText(text);
    expect(validationResult.error).toBeNull();
  });

  it('should return by is valid', () => {
    const by = commentData.by;
    const validationResult = comment.validateBy(by);
    expect(validationResult.error).toBeNull();
  });

  it('should return post is valid', () => {
    const post = commentData.post;
    const validationResult = comment.validatePost(post);
    expect(validationResult.error).toBeNull();
  });

  it('should return track is valid', () => {
    const track = commentData.track;
    const validationResult = comment.validateTrack(track);
    expect(validationResult.error).toBeNull();
  });

  it('should return trackAt is valid', () => {
    const trackAt = commentData.trackAt;
    const validationResult = comment.validateTrackAt(trackAt);
    expect(validationResult.error).toBeNull();
  });

  it('should return createdAt is valid', () => {
    const createdAt = commentData.createdAt;
    const validationResult = comment.validateCreatedAt(createdAt);
    expect(validationResult.error).toBeNull();
  });

  it('should return updatedAt is valid', () => {
    const updatedAt = commentData.updatedAt;
    const validationResult = comment.validateUpdatedAt(updatedAt);
    expect(validationResult.error).toBeNull();
  });

  it('should validate', () => {
    const data = commentData;
    const validationResult = comment.validate(data);
    expect(validationResult.error).toBeNull();
  });
});
