// node_modules
import crypto from 'crypto';

// prisma schema (it's awsome)
import { Users } from '@prisma/client';

// utils
import Utils from '@src-path/Utils';

// interfaces
import { BasicError } from '@src-path/Interfaces/BasicError.interface';
import { ISignUpInputProps } from '@src-path/Interfaces/SignUp.interface';

interface ISignUpOutputProps {
  username: string;
  name: string;
  email: string;
  error?: BasicError;
}

const SignUp = async (
  props: ISignUpInputProps
): Promise<ISignUpOutputProps> => {
  // Create result
  var result: ISignUpOutputProps = {
    username: '',
    name: '',
    email: '',
  };

  // Encrypt password
  const encryptedPassword = await Utils.Password.Encrypt({
    password: props.password,
  });

  if (encryptedPassword.error) {
    result.error = encryptedPassword.error;

    return result;
  }

  // Create user in table Users
  var newUser: Users;

  try {
    newUser = await Utils.PrismaPool.users.create({
      data: {
        userId: crypto.randomUUID(),
        username: props.username,
        name: props.name,
        email: props.email,
        hash: encryptedPassword.hash,
        salt: encryptedPassword.salt,
      },
    });
  } catch (error) {
    result.error = Utils.PrismaErrorHandler(error);

    return result;
  }

  // Return result
  result.username = newUser.username;
  result.name = newUser.name;
  result.email = newUser.email;

  return result;
};

export default SignUp;
