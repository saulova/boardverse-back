// node_modules
import Joi, { ValidationError } from 'joi';

// types
import { ILoginInputProps } from '@src-path/Interfaces/Login.interface';

const Login = async (props: ILoginInputProps): Promise<ILoginInputProps> => {
  // Create result
  var result = props;

  // Create validation schema
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string()
      .pattern(/^[a-zA-Z0-9!#$%&*+-,.:;<=>?@_]{3,30}$/)
      .min(3)
      .max(30)
      .required(),
  });

  // Check input props
  try {
    await schema.validateAsync(props);
  } catch (error) {
    if (error instanceof ValidationError) {
      const receivedError: ValidationError = error;
      result.error = { statusCode: 400, content: receivedError.message };

      return result;
    }

    result.error = { statusCode: 500, content: 'Unreferenced Error' };

    return result;
  }

  // Return result
  return result;
};

export default Login;
