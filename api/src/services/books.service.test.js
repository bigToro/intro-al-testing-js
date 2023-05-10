/* eslint-disable max-len */
const { generateManyBooks } = require('../fakes/book.fake');
const BookService = require('./books.service');

// Este es un fake, que es simulando ser un set de libros dentro de nuestra bd
// ya no necesito esto por que ahora tenemos nuestro fake programado, directamente llamo a la funcion dentro de los casos de prueba
/* const fakeBooks = [
  {
    _id: 1,
    name: 'harry potter',
  },
  {
    _id: 2,
    name: 'los 4 acuerdos',
  },
  {
    _id: 3,
    name: 'game of thrones',
  },
]; */

// esto va a suplantar a nuestra mongolib real con respuestas preestablecidad, cuando hacemos esto, tenemo que suplantar todo el comporatmiento
// estamos suplantando los metodos de bookservice.
/* const MongoLibStub = {
  // despues del arrowfunction estamos haciendo la suplantacion del metodo, y estamos haciendo que actue el double  para obtener info predefinida, osea fakes
  getAll: () => [...fakeBooks],
  create: () => { },
}; */

const mockGetAll = jest.fn();

// este es un mock, cuando se llame la libreria yo quiero que se haga la suplantacion
// retornamos una funcion y ejectuamos la funcion jest.fn (function) y llamamos al metodo mockImplementation
// dentro del mock implementation le decimos cual es esa suplantacion que puede ser un array u otra cosa, en este caso es una clase
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => { },
})));

describe('test para book service', () => {
  let service;
  beforeEach(() => {
    service = new BookService();
    // es bueno ejecutar esto para que no deje residuos o cambios en otros casos de prueba
    jest.clearAllMocks();
  });
  describe('pruebas exclusivas para el metodo get books', () => {
    test('deberia retornar una lista de libros', async () => {
      // arrange
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // act
      const books = await service.getBooks({});
      console.log(books);
      // assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('deberia retornar una lista de libros 2', async () => {
      // arrange
      const fakeBooks = generateManyBooks(4);
      // esto era antes, ahora qua ya genereamos nuestro fake books usamos de la otra forma
      /* mockGetAll.mockResolvedValue([{
        _id: 1,
        name: 'harryngui potter',
      }]); */
      mockGetAll.mockResolvedValue(fakeBooks);
      // act
      const books = await service.getBooks({});
      console.log(books);
      // assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
