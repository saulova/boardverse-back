import SignUp from './SignUp.service';

import Utils from '@src-path/Utils';

test('Test service User SignUp', async () => {
  const user = await SignUp({
    username: 'a5sd46as4da64sd',
    name: 'John Doe',
    email: 'john_doe@example.com',
    password: 'MySup3rS3cr3tP@ssW0rd',
  });

  await Utils.PrismaPool.users.delete({
    where: {
      username: user.username,
    },
  });

  expect(user).toStrictEqual({
    username: 'a5sd46as4da64sd',
    name: 'John Doe',
    email: 'john_doe@example.com',
  });
});
