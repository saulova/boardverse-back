// node_modules
import { Algorithm, verify, JwtPayload } from 'jsonwebtoken';
import fs from 'fs';

// Utils
import Utils from '@src-path/Utils';

// interfaces
import { BasicError } from '@src-path/Interfaces/BasicError.interface';

interface ICheckInputProps {
  token: string;
}

interface ICheckOutputProps {
  payload: string | JwtPayload;
  error?: BasicError;
}

const Check = async (props: ICheckInputProps): Promise<ICheckOutputProps> => {
  let result: ICheckOutputProps = {
    payload: {} as JwtPayload,
  };

  const envVars = Utils.EnvVars();

  let algorithm: Algorithm = 'HS256';
  let publicKey: string = 'MySuperSecretKey';

  if (envVars.jwtEs256 && envVars.jwtEs256 == 'true') {
    algorithm = 'ES256';
  }

  if (envVars.jwrHs256Key) {
    publicKey = envVars.jwrHs256Key;
  }

  try {
    if (algorithm == 'ES256') {
      publicKey = fs.readFileSync('@src-path/../public-jwt.pub', 'utf-8');
    }
  } catch {
    result.error = { statusCode: 500, content: 'Fail to load JWT public key.' };

    return result;
  }

  try {
    const payload = verify(props.token, publicKey, {
      algorithms: [algorithm],
    });

    if (payload.sub) {
      result.payload = payload;
    }
  } catch {
    result.error = { statusCode: 401, content: 'JWT token invalid.' };

    return result;
  }

  return result;
};

export default Check;
