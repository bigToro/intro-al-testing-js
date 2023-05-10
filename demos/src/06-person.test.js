const Person = require('./06-person');

describe('test para crear una persona', () => {
  let person;
  // aqui estamoas haciendo un ejemplo de la metodologia aaa, en donde
  // arrange(preparar el escenario de pruebas), act(actuar), assert(resolvemos la hipotesis)

  // arrange
  beforeEach(() => {
    person = new Person('jaime', 45, 1.8);
  });

  test('deberia retornar bajo peso', () => {
    // arrange
    person.weight = 45;
    // act
    const imc = person.calcIMC();
    // assert
    expect(imc).toBe('down');
  });

  test('deberia retornar normal', () => {
    person.weight = 75;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
