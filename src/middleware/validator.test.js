const validator = require('./validator');

describe('Validator Middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = { query: {} };
    res = {};
    next = jest.fn();
  });

  it('should call next when a valid name is provided', () => {
    req.query.name = 'aya';

    validator(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it('should call next with an error message when no name is provided', () => {
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('No name provided');
  });
});
