const mockGetAll = jest.fn();
const request = require('supertest');
const createApp = require('../app');
const { generateManyBooks } = require('../fakes/book.fake');

// tenemos que hacer mock por que no podemos usar los datos de la bd para no cagarla

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => { },
})));

describe('pruebas para books, todo lo que sea books, crud', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET} /api/v1/books', () => {
    test('should return a list of books', () => {
      // arrange
      const fakeBooks = generateManyBooks(10);
      mockGetAll.mockResolvedValue(fakeBooks);
      // act
      return request(app).get('/api/v1/books').expect(200).then(({ body }) => {
        console.log(body);
        // ASSERT
        expect(body.length).toEqual(fakeBooks.length);
      });
    });
  });
});
