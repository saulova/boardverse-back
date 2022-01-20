import SignUp from './SignUp.validator';

test('Test SignUp validator with valid request body', async () => {
  const validated = await SignUp({
    username: 'JohnDoe',
    name: 'John Doe',
    email: 'john_doe@example.com',
    password: 'MySup3rS3cr3tP@ssW0rd',
  });

  expect(validated.error == undefined).toBe(true);
});

test('Test SignUp validator with invalid username', async () => {
  const validated = await SignUp({
    username: 'JohnDoe#@%',
    name: 'John Doe',
    email: 'john_doe@example.com',
    password: 'MySup3rS3cr3tP@ssW0rd',
  });

  expect(validated.error).toStrictEqual({
    statusCode: 400,
    content: '"username" must only contain alpha-numeric characters',
  });
});

test('Test SignUp validator with invalid name', async () => {
  const validated = await SignUp({
    username: 'JohnDoe',
    name: 'John Doe#@%',
    email: 'john_doe@example.com',
    password: 'MySup3rS3cr3tP@ssW0rd',
  });

  expect(validated.error).toStrictEqual({
    statusCode: 400,
    content:
      '"name" with value "John Doe#@%" fails to match the required pattern: /^[a-zA-Z\\s]+$/',
  });
});

test('Test SignUp validator with invalid email', async () => {
  const validated = await SignUp({
    username: 'JohnDoe',
    name: 'John Doe',
    email: 'john_doe#@%qweoiqytiut',
    password: 'MySup3rS3cr3tP@ssW0rd',
  });

  expect(validated.error).toStrictEqual({
    statusCode: 400,
    content: '"email" must be a valid email',
  });
});

test('Test SignUp validator with invalid password', async () => {
  const validated = await SignUp({
    username: 'JohnDoe',
    name: 'John Doe',
    email: 'john_doe@example.com',
    password: '1nv@l1d P@ssw0rd',
  });

  expect(validated.error).toStrictEqual({
    statusCode: 400,
    content:
      '"password" with value "1nv@l1d P@ssw0rd" fails to match the required pattern: /^[a-zA-Z0-9!#$%&*+-,.:;<=>?@_]{3,30}$/',
  });
});
