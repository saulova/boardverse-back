// node_modules
import { IncomingMessage } from 'http';
import queryString from 'query-string';

// utils
import Utils from '@src-path/Utils';

// interfaces
import { BasicError } from '@src-path/Interfaces/BasicError.interface';

interface IColyseusAuthMiddlewareOutput {
  userId: string;
  error?: BasicError;
}

const CheckAuth = async (options: any, request: IncomingMessage) => {
  let result: IColyseusAuthMiddlewareOutput = {
    userId: '',
  };

  const envVars = Utils.EnvVars();

  let token = request.headers.cookie;

  if (token) {
    token = queryString.parse(token).token as string;
  }

  if (!(envVars.nodeEnv == 'production')) {
    if (options.token) {
      token = options.token;
    }
  }

  if (!token) {
    result.error = { statusCode: 401, content: 'JWT token invalid.' };
    return result;
  }

  const jwtData = await Utils.Jwt.Check({ token: token });

  if (jwtData.error) {
    result.error = { statusCode: 401, content: 'JWT token invalid.' };
    return result;
  }

  if (!jwtData.payload.sub) {
    result.error = { statusCode: 401, content: 'JWT token invalid.' };
    return result;
  }

  result.userId = jwtData.payload.sub as string;

  return result;
};

export default CheckAuth;
