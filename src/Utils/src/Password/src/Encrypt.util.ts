// node_modules
import crypto from 'crypto';

// interfaces
import { BasicError } from '@src-path/Interfaces/BasicError.interface';

interface IEncryptInputProps {
  password: string;
}

interface IEncryptOutputProps {
  hash: string;
  salt: string;
  error?: BasicError;
}

const Encrypt = async (
  props: IEncryptInputProps
): Promise<IEncryptOutputProps> => {
  const result: IEncryptOutputProps = {
    hash: '',
    salt: '',
  };

  const saltBuffer = crypto.randomBytes(16);

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
    result.error = {
      statusCode: 500,
      content: 'Fail to generate password hash.',
    };

    return result;
  }

  result.hash = hashBuffer.toString('base64');
  result.salt = saltBuffer.toString('base64');

  return result;
};

export default Encrypt;
