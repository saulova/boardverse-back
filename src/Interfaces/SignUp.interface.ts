import { BasicError } from '@src-path/Interfaces/BasicError.interface';

export interface ISignUpInputProps {
  username: string;
  name: string;
  email: string;
  password: string;
  error?: BasicError;
}
