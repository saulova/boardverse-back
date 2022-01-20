// node_modules
import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
} from '@prisma/client/runtime';

// interfaces
import { BasicError } from '@src-path/Interfaces/BasicError.interface';

const PrismaErrorHandler = (error: unknown): BasicError => {
  if (
    error instanceof PrismaClientKnownRequestError ||
    error instanceof PrismaClientUnknownRequestError ||
    error instanceof PrismaClientValidationError
  ) {
    const receivedError:
      | PrismaClientKnownRequestError
      | PrismaClientUnknownRequestError
      | PrismaClientValidationError = error;

    return { statusCode: 400, content: receivedError.message };
  } else if (
    error instanceof PrismaClientRustPanicError ||
    error instanceof PrismaClientInitializationError
  ) {
    const receivedError:
      | PrismaClientRustPanicError
      | PrismaClientInitializationError = error;

    return { statusCode: 503, content: receivedError.message };
  }

  return { statusCode: 500, content: 'Unreferenced Error' };
};

export default PrismaErrorHandler;
