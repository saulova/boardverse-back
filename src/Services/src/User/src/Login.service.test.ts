import Login from './Login.service';
import SignUp from './SignUp.service';

import Utils from '@src-path/Utils';

test('Test User Login service with valid user', async () => {
  await SignUp({
    username: 'b123cvx123b1c3vb',
    name: 'John Doe',
    email: 'john_doe@example.com',
    password: 'MySup3rS3cr3tP@ssW0rd',
  });

  const user = await Login({
    username: 'b123cvx123b1c3vb',
    password: 'MySup3rS3cr3tP@ssW0rd',
  });

  await Utils.PrismaPool.users.delete({
    where: {
      username: 'b123cvx123b1c3vb',
    },
  });

  expect(user.username).toStrictEqual('b123cvx123b1c3vb');
});

test('Test User Login service with invalid user', async () => {
  const user = await Login({
    username: 'NotExist',
    password: 'MySup3rS3cr3tP@ssW0rd',
  });

  expect(user.error).toStrictEqual({
    statusCode: 401,
    content: 'Username or password invalid.',
  });
});
