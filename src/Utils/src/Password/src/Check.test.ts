import Check from './Check.util';

test('Test check password', async () => {
  const data = await Check({
    password: 't3stP@ssw0rd',
    hash: 'OELYmr1dbgamFcLMfJSdziP55UCsZ5bGD5kTdOwa51k=',
    salt: 'P2h6Y4YLCvaIP4KZ+QqbgQ==',
  });

  expect(data.isValid).toBe(true);
});

test('Test wrong password', async () => {
  const data = await Check({
    password: 'wr0ngP@ssw0rd',
    hash: 'OELYmr1dbgamFcLMfJSdziP55UCsZ5bGD5kTdOwa51k=',
    salt: 'P2h6Y4YLCvaIP4KZ+QqbgQ==',
  });

  expect(data.isValid).toBe(false);
});
