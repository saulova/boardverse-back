// node_modules
import { Algorithm, sign } from 'jsonwebtoken';
import fs from 'fs';

// Utils
import Utils from '@src-path/Utils';

// interfaces
import { BasicError } from '@src-path/Interfaces/BasicError.interface';

interface IGenerateInputProps {
  payload: Object;
}

interface IGenerateOutputProps {
  token: string;
  error?: BasicError;
}

const Generate = async (
  props: IGenerateInputProps
): Promise<IGenerateOutputProps> => {
  const envVars = Utils.EnvVars();

  let result: IGenerateOutputProps = {
    token: '',
    error: undefined,
  };

  let algorithm: Algorithm = 'HS256';
  let privateKey: string = 'MySuperSecretKey';

  if (envVars.jwtEs256 && envVars.jwtEs256 == 'true') {
    algorithm = 'ES256';
  }

  if (envVars.jwrHs256Key) {
    privateKey = envVars.jwrHs256Key;
  }

  try {
    if (algorithm == 'ES256') {
      privateKey = fs.readFileSync('@src-path/../private-jwt.pem', 'utf-8');
    }
  } catch {
    result.error = {
      statusCode: 500,
      content: 'Fail to load JWT private key.',
    };

    return result;
  }

  try {
    const token = sign(props.payload, privateKey, {
      algorithm: algorithm,
    });

    result.token = token;
  } catch {
    result.error = {
      statusCode: 500,
      content: 'Fail to generate JWT token.',
    };
    return result;
  }

  return result;
};

export default Generate;
