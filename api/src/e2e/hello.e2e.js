const request = require('supertest');
const createApp = require('../app');

describe('pruebas para hello world e2e, primero inicializar', () => {
  let app = null;
  let server = null;
  beforeAll(async () => {
    app = createApp();
    server = await app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET} /', () => {
    test('should return hello world!', () => request(app).get('/').expect(200).then((response) => {
      expect(response.text).toEqual('Hello World!');
    }));
  });
});
