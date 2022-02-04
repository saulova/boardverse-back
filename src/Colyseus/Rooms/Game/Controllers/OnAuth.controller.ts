// node_modules
import { Client, ServerError } from 'colyseus';
import { IncomingMessage } from 'http';

// middlewares (colyseus)
import CheckAuth from '@src-path/Colyseus/Middlewares/CheckAuth.middleware';

const OnAuth = async (
  client: Client,
  options: any,
  request: IncomingMessage
) => {
  const userData = await CheckAuth(options, request);

  if (userData.error) {
    throw new ServerError(userData.error.statusCode, userData.error.content);
  }

  return { id: userData.userId };
};

export default OnAuth;
