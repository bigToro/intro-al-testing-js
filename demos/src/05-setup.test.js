// reune todo un conjunto de pruebas
describe('set', () => {
  beforeAll(() => {
    // por ejemplo como levantar una bd
    console.log('aqui corre antes que todo');
  });

  afterAll(() => {
    // por ejemplo como levantar una bd
    console.log('aqui corre despues que todo');
  });

  beforeEach(() => {
    // por ejemplo como levantar una bd
    console.log('aqui corre despues de cada caso de prueba');
  });

  beforeEach(() => {
    // por ejemplo como levantar una bd
    console.log('aqui corre despues de cada caso de prueba');
  });

  test('case 1', () => {
    console.log('caso 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('caso 2');
    expect(1 + 11).toBe(12);
  });
});

describe('set 2', () => {
  beforeAll(() => {
    // por ejemplo como levantar una bd
    console.log('aqui corre antes que el segundo describre');
  });

  test('case 3', () => {
    console.log('caso 3');
    expect(2 + 2).toBe(4);
  });
  test('case 4', () => {
    console.log('caso 4');
    expect(1 + 11).toBe(12);
  });
});
