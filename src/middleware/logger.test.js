// (unit test)
const logger = require('./logger');

describe('Logger Middleware', () => {
  let consoleOutput = [];
  const mockedConsoleLog = (output) => consoleOutput.push(output);

  beforeEach(() => {
    consoleOutput = [];
    console.log = mockedConsoleLog;
  });

  it('should log the request method and path', () => {
    const req = { method: 'GET', path: '/person' };
    const res = {};
    const next = jest.fn();

    logger(req, res, next);

    expect(consoleOutput).toEqual(['GET /person']);
    expect(next).toHaveBeenCalled();
  });
});
