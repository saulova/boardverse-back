// node module
import Joi, { ValidationError } from 'joi';

// types
import { ISignUpInputProps } from '@src-path/Interfaces/Services/User/SignUp.service.types';

const SignUp = async (props: ISignUpInputProps): Promise<ISignUpInputProps> => {
  // Create result
  const result = props;

  // Create validation schema
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    name: Joi.string()
      .min(3)
      .max(100)
      .pattern(/^[a-zA-Z\s]+$/)
      .required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .min(3)
      .max(30)
      .pattern(/^[a-zA-Z0-9!#$%&*+-,.:;<=>?@_]{3,30}$/)
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

export default SignUp;
