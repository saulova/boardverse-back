// node_modules
import { Request, Response } from 'express';

// services
import Services from '@src-path/Services';

const SignUp = async (req: Request, res: Response) => {
  const user = await Services.User.SignUp(req.body);

  if (user.error) {
    return res
      .status(user.error.statusCode)
      .json({ error: user.error.content });
  }

  return res.status(201).json({ user });
};

export default SignUp;
