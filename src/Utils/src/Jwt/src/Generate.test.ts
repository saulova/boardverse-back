import Generate from './Generate.util';

test('Test generate token', async () => {
  const data = await Generate({
    payload: { sub: 123456, exp: Date.now() / 1000 },
  });
  expect(data.token.split('.').length).toBe(3);
});
