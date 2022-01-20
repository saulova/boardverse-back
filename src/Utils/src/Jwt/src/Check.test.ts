import Check from './Check.util';

test('Test check null token', async () => {
  const data = await Check({
    token: '',
  });

  expect(data).toStrictEqual({
    payload: {},
    error: {
      content: 'JWT token invalid.',
      statusCode: 401,
    },
  });
});

test('Test valid token', async () => {
  const data = await Check({
    token:
      'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEyMzQ1NiwiaWF0IjoxNjQyMDg3MzgzfQ.gzGIKkWN6bgukr4oGBgAHvhbFFoek3JxPEI-sX_7lFglH-h9xl9ywn86cHSC0NiRpCpCAsIWbYQm9zeOJczO7A',
  });

  expect(data).toStrictEqual({
    payload: {
      sub: 123456,
      iat: 1642087383,
    },
  });
});
