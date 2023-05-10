// matchers
test('test object', () => {
  const data = { name: 'harold' };
  data.lastname = 'chancludo';
  expect(data).toEqual({ name: 'harold', lastname: 'chancludo' });
});

test('test null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('test booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
  expect(1).toBeTruthy();
});

test('test strings', () => {
  expect('manolo').toMatch(/olo/);
});

test('test arrays', () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  expect(numbers).toContain(3);
});
