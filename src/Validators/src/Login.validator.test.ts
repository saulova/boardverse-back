import Login from './Login.validator';

test('Test Login validator with valid input', async () => {
  const validated = await Login({
    username: 'JohnDoe',
    password: 'MySup3rS3cr3tP@ssW0rd',
  });

  expect(validated.error == undefined).toBe(true);
});

test('Test Login validator with invalid username', async () => {
  const validated = await Login({
    username: 'JohnDoe#@%',
    password: 'MySup3rS3cr3tP@ssW0rd',
  });

  expect(validated.error).toStrictEqual({
    statusCode: 400,
    content: '"username" must only contain alpha-numeric characters',
  });
});

test('Test Login validator with invalid username', async () => {
  const validated = await Login({
    username: 'JohnDoe#@%',
    password: 'MySup3rS3cr3tP@ssW0rd',
  });

  expect(validated.error).toStrictEqual({
    statusCode: 400,
    content: '"username" must only contain alpha-numeric characters',
  });
});

test('Test SignUp validator with invalid password', async () => {
  const validated = await Login({
    username: 'JohnDoe',
    password: '1nv@l1d P@ssw0rd',
  });

  expect(validated.error).toStrictEqual({
    statusCode: 400,
    content:
      '"password" with value "1nv@l1d P@ssw0rd" fails to match the required pattern: /^[a-zA-Z0-9!#$%&*+-,.:;<=>?@_]{3,30}$/',
  });
});
