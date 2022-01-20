// prisma schema (it's awsome)
import { Users } from '@prisma/client';

// utils
import Utils from '@src-path/Utils';

// interfaces
import { BasicError } from '@src-path/Interfaces/BasicError.interface';
import { ILoginInputProps } from '@src-path/Interfaces/Login.interface';

interface ILoginOutputProps {
  username: string;
  token: string;
  error?: BasicError;
}

const Login = async (props: ILoginInputProps) => {
  // Create result
  const result: ILoginOutputProps = {
    username: '',
    token: '',
  };

  // Find user in table Users
  var findedUser: Users | null;

  try {
    findedUser = await Utils.PrismaPool.users.findFirst({
      where: { username: props.username },
    });
  } catch (error) {
    result.error = Utils.PrismaErrorHandler(error);

    return result;
  }

  if (!findedUser) {
    result.error = {
      statusCode: 401,
      content: 'Username or password invalid.',
    };

    return result;
  }

  // Check password
  const checkPassword = await Utils.Password.Check({
    password: props.password,
    hash: findedUser.hash,
    salt: findedUser.salt,
  });

  if (!checkPassword.isValid) {
    result.error = {
      statusCode: 401,
      content: 'Username or password invalid.',
    };

    return result;
  }

  if (checkPassword.error) {
    result.error = checkPassword.error;

    return result;
  }

  // Generate JWT token
  const tokenExpiration = Math.floor(Date.now() / 1000) + 60 * 60 * 24; //expires in 24 hours

  const generatedJwt = await Utils.Jwt.Generate({
    payload: {
      sub: findedUser.userId,
      iss: 'Boardverse',
      exp: tokenExpiration,
    },
  });

  if (generatedJwt.error) {
    result.error = generatedJwt.error;

    return result;
  }

  // Return result
  result.username = findedUser.username;
  result.token = generatedJwt.token;

  return result;
};

export default Login;
