// node_modules
import { NextFunction, Request, Response } from 'express';

// utils
import Utils from '@src-path/Utils';

const Api = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const envVars = Utils.EnvVars();

  let token = request.cookies.token;

  if (!(envVars.nodeEnv == 'production') && request.headers.authorization) {
    token = request.headers.authorization.replace('Bearer ', '');
  }

  if (!token) {
    return response.status(401).json({ error: 'Invalid Cookie' });
  }

  const jwtData = await Utils.Jwt.Check({ token: token });

  if (jwtData.error) {
    response.status(401).json({ error: jwtData.error });
  }

  if (!jwtData.payload.sub) {
    return response.status(401).json({ error: 'Invalid token.' });
  }

  request.body.userId = jwtData.payload.sub;

  return next();
};

export default Api;
