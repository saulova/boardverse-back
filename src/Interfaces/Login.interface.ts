import { BasicError } from '@src-path/Interfaces/BasicError.interface';

export interface ILoginInputProps {
  username: string;
  password: string;
  error?: BasicError;
}
