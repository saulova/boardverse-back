// node_modules
import crypto from 'crypto';

// interfaces
import { BasicError } from '@src-path/Interfaces/BasicError.interface';

interface ICheckInputProps {
  password: string;
  hash: string;
  salt: string;
}

interface ICheckOutputProps {
  isValid: boolean;
  error?: BasicError;
}

const Check = async (props: ICheckInputProps): Promise<ICheckOutputProps> => {
  var result: ICheckOutputProps = {
    isValid: false,
  };

  const saltBuffer = Buffer.from(props.salt, 'base64');

  var hashBuffer: Buffer;

  try {
    hashBuffer = crypto.pbkdf2Sync(
      props.password,
      saltBuffer,
      78532,
      32,
      'sha512'
    );
  } catch {
    result.error = { statusCode: 500, content: 'Fail to check password hash.' };

    return result;
  }

  const hashString = hashBuffer.toString('base64');

  result.isValid = props.hash == hashString ? true : false;

  return result;
};

export default Check;
