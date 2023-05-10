const request = require('supertest');
const { MongoClient } = require('mongodb');
const { config } = require('../config/index');
const createApp = require('../app');

const DB_NAME = config.dbName;
const DB_URL = config.dbUrl;

describe('pruebas para books, todo lo que sea books, crud', () => {
  let app = null;
  let server = null;
  let database = null;
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  describe('test for [GET} /api/v1/books', () => {
    test('should return a list of books', async () => {
      // arrange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'libro1',
          year: 1998,
          author: 'nicolas',
        },
        {
          name: 'libro2',
          year: 1998,
          author: 'nicolemuss',
        },
      ]);
      console.log(seedData);
      // act
      return request(app).get('/api/v1/books').expect(200).then(({ body }) => {
        console.log(body);
        // ASSERT
        expect(body.length).toEqual(seedData.insertedCount);
      });
    });
  });
});
