// (integration test)

const request = require('supertest');
const { app } = require('../src/server');

describe('Server', () => {
  
  it('should return 404 on a bad route', async () => {
    const response = await request(app).get('/bad-route');
    expect(response.status).toBe(404);
  });

  it('should return 404 on a bad method', async () => {
    const response = await request(app).post('/person');
    expect(response.status).toBe(404);
  });
  
  it('should return 500 if no name in the query string', async () => {
    const response = await request(app).get('/person');
    expect(response.status).toBe(500);
  });

  it('should return 200 if the name is in the query string', async () => {
    const response = await request(app).get('/person?name=aya');
    expect(response.status).toBe(200);
  });

  it('should return the correct output object when a name is provided', async () => {
    const name = 'aya';
    const response = await request(app).get(`/person?name=${name}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ name });
  });
});
