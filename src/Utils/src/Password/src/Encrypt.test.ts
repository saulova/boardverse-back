import Encrypt from './Encrypt.util';

test('Test encrypt password', async () => {
  const data = await Encrypt({ password: 't3stP@ssw0rd' });

  expect(data.hash != undefined && data.salt != undefined).toBe(true);
});
