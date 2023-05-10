const { sum, multiply, divide } = require('./02-math');

describe('tests for math', () => {
  describe('test for sum', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 3)).toBe(4);
    });
  });
});

describe('test for multiply', () => {
  test('mutiply the numbers', () => {
    expect(multiply(1, 2)).toBe(2);
  });
});

describe('test for divide', () => {
  test('should divide 2 numbers', () => {
    const result = divide(6, 3);
    expect(result).toBe(2);
    const result1 = divide(5, 0);
    expect(result1).toBeNull();
  });
});
