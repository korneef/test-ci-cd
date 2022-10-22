import demo from '../app';

test('проверка фунцкии ', () => {
  const received = demo(1);
  const expected = 1;
  expect(received).toEqual(expected);
});
