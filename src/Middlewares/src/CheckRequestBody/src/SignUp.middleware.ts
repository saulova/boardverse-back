// node_modules
import { NextFunction, Request, Response } from 'express';

// services
import Validators from '@src-path/Validators';

const SignUp = async (req: Request, res: Response, next: NextFunction) => {
  const validated = await Validators.SignUp(req.body);

  if (validated.error) {
    return res
      .status(validated.error.statusCode)
      .json({ error: validated.error.content });
  }

  return next();
};

export default SignUp;
